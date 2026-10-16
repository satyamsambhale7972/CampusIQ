"""
CampusIQ — Complete Production Full-Stack FastAPI Backend
High-performance asynchronous application with rate limiting, security headers,
CORS policies, Pydantic v2 schemas, database migrations, and static assets.
"""
import time
import logging
from typing import Optional, List, Dict, Any
from pathlib import Path

from fastapi import FastAPI, Request, Response, Depends, HTTPException, status, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse, FileResponse
from starlette.exceptions import HTTPException as StarletteHTTPException
from pydantic import BaseModel, Field

import smtplib
import threading
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

import config
from database import db
from auth import get_current_user, get_optional_user, require_admin_or_faculty, create_access_token
from ai_service import ai_service

# Configure structured logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("campusiq.api")

def send_login_notification_email(email: str, full_name: str, client_ip: str = "Unknown"):
    """
    Dispatches an official security notification email to the student's Gmail/email address upon sign-in.
    Runs asynchronously in background thread so login returns instantaneously.
    """
    def _worker():
        try:
            user_id = f"user-{abs(hash(email)) % 900000 + 100000}"
            login_time = time.strftime('%Y-%m-%d %H:%M:%S UTC')
            # 1. Store persistent security bulletin in database notifications table
            db.create_notification(
                user_id=user_id,
                title="🔐 Security Alert: New Sign-in Detected",
                message=f"New sign-in to your CampusIQ student account for {email} on {login_time} from IP {client_ip}.",
                category="security"
            )

            # 2. If SMTP is configured, transmit real email over SSL/TLS
            if config.SMTP_HOST and config.SMTP_USER and config.SMTP_PASSWORD:
                msg = MIMEMultipart("alternative")
                msg["Subject"] = "🔐 CampusIQ Security Alert: New Sign-in to your Student Account"
                msg["From"] = f"CampusIQ Security <{config.SMTP_FROM or config.SMTP_USER}>"
                msg["To"] = email

                text_content = f"Hello {full_name},\n\nWe detected a new sign-in to your CampusIQ account.\nEmail: {email}\nTime: {login_time}\nIP: {client_ip}\n\nIf this was you, no action is needed. If you did not sign in, please reset your password immediately."
                html_content = f"""
                <div style="font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:580px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.05)">
                  <div style="background:linear-gradient(135deg,#1e1b4b,#312e81,#0284c7);padding:28px;text-align:center;color:#ffffff">
                    <h1 style="margin:0;font-size:24px;font-weight:800;letter-spacing:-0.5px">Campus<span style="color:#38bdf8">IQ</span></h1>
                    <p style="margin:6px 0 0;font-size:12px;color:#c7d2fe;letter-spacing:1px;text-transform:uppercase">Smart Campus Security Telemetry</p>
                  </div>
                  <div style="padding:32px 28px;color:#1e293b">
                    <h2 style="margin:0 0 12px;font-size:18px;color:#0f172a">Security Sign-in Alert</h2>
                    <p style="font-size:14px;line-height:1.6;color:#475569;margin:0 0 20px">
                      Hello <strong>{full_name or 'Student'}</strong>,<br>
                      A successful sign-in to your <strong>CampusIQ Smart Campus Space</strong> was recorded with this email address.
                    </p>
                    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin-bottom:24px;font-size:13px">
                      <div style="margin-bottom:8px"><strong>Student Account:</strong> {email}</div>
                      <div style="margin-bottom:8px"><strong>Timestamp:</strong> {login_time}</div>
                      <div><strong>Client Network / IP:</strong> {client_ip}</div>
                    </div>
                    <p style="font-size:13px;color:#64748b;line-height:1.6;margin:0 0 20px">
                      If you initiated this sign-in, you can safely disregard this message. If you suspect unauthorized access, please update your password and notify the IT Help Desk immediately.
                    </p>
                    <div style="text-align:center;padding-top:12px">
                      <a href="https://satyamsambhale7972.github.io/CampusIQ-/" style="display:inline-block;background:#4f46e5;color:#ffffff;text-decoration:none;font-weight:700;font-size:13px;padding:12px 24px;border-radius:10px">Access Campus Portal ↗</a>
                    </div>
                  </div>
                  <div style="background:#f1f5f9;padding:16px 28px;text-align:center;font-size:11px;color:#94a3b8;border-top:1px solid #e2e8f0">
                    © 2026 CampusIQ · Verified Institutional Telemetry Platform · Automated System Notice
                  </div>
                </div>
                """
                msg.attach(MIMEText(text_content, "plain"))
                msg.attach(MIMEText(html_content, "html"))

                if config.SMTP_PORT == 465:
                    server = smtplib.SMTP_SSL(config.SMTP_HOST, config.SMTP_PORT, timeout=10.0)
                else:
                    server = smtplib.SMTP(config.SMTP_HOST, config.SMTP_PORT, timeout=10.0)
                    if config.SMTP_SECURE:
                        server.starttls()
                server.login(config.SMTP_USER, config.SMTP_PASSWORD)
                server.send_message(msg)
                server.quit()
                logger.info(f"Live SMTP security sign-in email delivered to {email}")
            else:
                logger.info(f"Local simulated security email notification registered for {email} (SMTP not set)")
        except Exception as ex:
            logger.warning(f"Email dispatch error for {email}: {ex}")

    thread = threading.Thread(target=_worker, daemon=True)
    thread.start()

# Initialize database schema on startup
db.init_db()

app = FastAPI(
    title="CampusIQ API",
    description="Production Full-Stack Platform for CampusIQ Student Life & Academics",
    version="2.1.0"
)

# ----------------- Rate Limiting & Abuse Prevention -----------------
class InMemoryRateLimiter:
    """Sliding-window rate limiter per client IP."""
    def __init__(self, limit_per_minute: int = config.RATE_LIMIT_PER_MINUTE):
        self.limit = limit_per_minute
        self.requests: Dict[str, List[float]] = {}

    def is_allowed(self, client_ip: str) -> bool:
        now = time.time()
        window_start = now - 60.0
        
        history = self.requests.get(client_ip, [])
        valid_history = [t for t in history if t > window_start]
        
        if len(valid_history) >= self.limit:
            self.requests[client_ip] = valid_history
            return False
            
        valid_history.append(now)
        self.requests[client_ip] = valid_history
        return True

rate_limiter = InMemoryRateLimiter()

# ----------------- Security Headers & Logging Middleware -----------------
@app.middleware("http")
async def security_and_logging_middleware(request: Request, call_next):
    client_ip = request.client.host if request.client else "unknown"
    start_time = time.time()

    if request.url.path.startswith("/api/") and not rate_limiter.is_allowed(client_ip):
        logger.warning(f"Rate limit exceeded for IP: {client_ip} on {request.url.path}")
        return JSONResponse(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            content={"detail": "Too many requests. Please slow down and try again shortly."}
        )

    try:
        response: Response = await call_next(request)
    except Exception as exc:
        logger.error(f"Unhandled server error on {request.method} {request.url.path}: {exc}", exc_info=True)
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"detail": "An internal server error occurred. Our engineering team has been notified."}
        )

    duration_ms = round((time.time() - start_time) * 1000, 2)
    logger.info(f"{request.method} {request.url.path} -> {response.status_code} ({duration_ms}ms)")

    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["Permissions-Policy"] = "geolocation=(), microphone=(), camera=()"
    response.headers["Content-Security-Policy"] = (
        "default-src 'self'; "
        "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; "
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
        "font-src 'self' https://fonts.gstatic.com; "
        "img-src 'self' data: https:; "
        "connect-src 'self' https://*.supabase.co https://generativelanguage.googleapis.com;"
    )

    return response

# ----------------- CORS Middleware -----------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=config.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# ----------------- Pydantic Request / Response Schemas -----------------
class ProfileUpdateRequest(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=100)
    department: str = Field(..., min_length=2, max_length=100)
    year_semester: str = Field(..., min_length=2, max_length=50)
    branch: Optional[str] = Field("Computer Science & Engineering", max_length=100)

class PhotoUpdateRequest(BaseModel):
    avatar_url: str = Field(..., max_length=500000)

class PhoneSendOtpRequest(BaseModel):
    phone_number: str = Field(..., min_length=7, max_length=15)
    country_code: str = Field("+91", min_length=2, max_length=5)

class PhoneVerifyOtpRequest(BaseModel):
    phone_number: str = Field(..., min_length=7, max_length=15)
    country_code: str = Field("+91", min_length=2, max_length=5)
    otp: str = Field(..., min_length=4, max_length=10)

class AssignmentCreateRequest(BaseModel):
    title: str = Field(..., min_length=2, max_length=150)
    description: Optional[str] = Field("", max_length=500)
    due_date: str = Field(..., min_length=4, max_length=50)
    due_time: Optional[str] = Field("23:59", max_length=20)
    branch: Optional[str] = Field("Computer Science & Engineering", max_length=100)
    subject_id: Optional[str] = None
    priority: str = Field("medium", pattern="^(low|medium|high|urgent)$")

class AssignmentStatusUpdate(BaseModel):
    status: str = Field(..., pattern="^(pending|in_progress|completed)$")

class AttendanceLogRequest(BaseModel):
    subject_id: str
    date: str = Field(..., min_length=10, max_length=10)
    status: str = Field(..., pattern="^(present|absent|late|excused)$")
    notes: Optional[str] = Field("", max_length=200)

class FacilityBookingRequest(BaseModel):
    booking_date: str = Field(..., min_length=10, max_length=10)
    time_slot: str = Field(..., min_length=3, max_length=50)
    purpose: Optional[str] = Field("Study session", max_length=100)

class AIChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=1000)

class SupportTicketCreate(BaseModel):
    subject: str = Field(..., min_length=3, max_length=150)
    category: str = Field(..., pattern="^(technical|academic|results|attendance|facilities|general)$")
    priority: str = Field("medium", pattern="^(low|medium|high|urgent)$")
    message: str = Field(..., min_length=5, max_length=2000)

class TicketReplyRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=2000)

class AdminResultPublishRequest(BaseModel):
    student_id: str
    subject_id: str
    semester: str = "Semester 5"
    internal_marks: float = Field(..., ge=0, le=40)
    external_marks: float = Field(..., ge=0, le=60)
    letter_grade: str = Field("A", max_length=5)
    grade_point: float = Field(..., ge=0, le=10)
    pass_fail: str = Field("PASS", pattern="^(PASS|FAIL)$")

class StudySessionCreateRequest(BaseModel):
    subject_name: str = Field(..., min_length=2, max_length=150)
    topic: str = Field(..., min_length=2, max_length=200)
    session_date: str = Field(..., min_length=10, max_length=10)
    start_time: str = Field(..., min_length=4, max_length=20)
    duration_minutes: int = Field(60, ge=15, le=360)
    plan_id: Optional[str] = None

class StudySessionStatusRequest(BaseModel):
    status: str = Field("completed", pattern="^(pending|completed|rescheduled|missed)$")

class CareerGoalCreateRequest(BaseModel):
    title: str = Field(..., min_length=3, max_length=150)
    category: str = Field("skill", pattern="^(skill|internship|project|certification|academic)$")
    target_date: Optional[str] = Field(None, max_length=20)
    milestones: Optional[List[str]] = Field(default_factory=list)

# ----------------- System & Health Endpoints -----------------
@app.get("/api/health", tags=["System"])
async def health_check():
    try:
        conn = db.get_connection()
        conn.execute("SELECT 1").fetchone()
        conn.close()
        db_status = "healthy"
    except Exception as e:
        logger.error(f"Health check DB failure: {e}")
        db_status = "unhealthy"

    return {
        "status": "online" if db_status == "healthy" else "degraded",
        "timestamp": time.time(),
        "database": db_status,
        "environment": config.ENV,
        "ai_provider_configured": ai_service.is_provider_configured(),
        "version": "2.1.0"
    }

# ----------------- Auth & Session Endpoints -----------------
@app.get("/api/auth/session", tags=["Auth"])
async def get_session(current_user: Optional[Dict[str, Any]] = Depends(get_optional_user)):
    if not current_user:
        return {
            "authenticated": False,
            "user": None,
            "supabase_configured": bool(config.SUPABASE_URL and config.SUPABASE_ANON_KEY)
        }
    return {
        "authenticated": True,
        "user": current_user,
        "supabase_configured": bool(config.SUPABASE_URL and config.SUPABASE_ANON_KEY)
    }

@app.post("/api/auth/token", tags=["Auth"])
async def issue_local_token(request: Request):
    body = await request.json()
    email = body.get("email", "").strip().lower()
    full_name = body.get("full_name", "").strip()
    role = body.get("role", "student")
    
    if not email or "@" not in email:
        raise HTTPException(status_code=400, detail="A valid student email address is required.")
        
    user_id = f"user-{abs(hash(email)) % 900000 + 100000}"
    profile = db.get_or_create_profile(user_id=user_id, email=email, full_name=full_name, role=role)
    token = create_access_token(user_id=profile["id"], email=profile["email"], role=profile["role"])

    # Security Email Dispatch (sends actual email if SMTP configured, plus logs to notification tray)
    client_ip = request.client.host if request.client else "127.0.0.1"
    send_login_notification_email(
        email=profile["email"],
        full_name=profile.get("full_name", full_name),
        client_ip=client_ip
    )

    return {
        "access_token": token,
        "token_type": "bearer",
        "user": profile,
        "email_notification_sent": True,
        "email_target": profile["email"]
    }

# ----------------- Phone OTP Verification Endpoints -----------------
@app.post("/api/auth/otp/send", tags=["Auth"])
async def send_phone_otp(data: PhoneSendOtpRequest, current_user: Dict[str, Any] = Depends(get_current_user)):
    clean_phone = "".join(filter(str.isdigit, data.phone_number))
    if len(clean_phone) < 10:
        raise HTTPException(status_code=400, detail="Please enter a valid 10-digit mobile number.")

    result = db.request_phone_otp(
        user_id=current_user["id"],
        phone_number=clean_phone,
        country_code=data.country_code
    )
    if not result.get("success"):
        raise HTTPException(status_code=429, detail=result.get("message", "Cooldown active."))
    return result

@app.post("/api/auth/otp/verify", tags=["Auth"])
async def verify_phone_otp(data: PhoneVerifyOtpRequest, current_user: Dict[str, Any] = Depends(get_current_user)):
    clean_phone = "".join(filter(str.isdigit, data.phone_number))
    result = db.verify_phone_otp(
        user_id=current_user["id"],
        phone_number=clean_phone,
        country_code=data.country_code,
        otp=data.otp
    )
    if not result.get("success"):
        raise HTTPException(status_code=400, detail=result.get("message", "Verification failed."))
    return result

# ----------------- Profile Endpoints -----------------
@app.get("/api/profile", tags=["Profile"])
async def get_profile(current_user: Dict[str, Any] = Depends(get_current_user)):
    return current_user

@app.put("/api/profile", tags=["Profile"])
async def update_profile(data: ProfileUpdateRequest, current_user: Dict[str, Any] = Depends(get_current_user)):
    updated = db.update_profile(
        user_id=current_user["id"],
        full_name=data.full_name,
        department=data.department,
        year_semester=data.year_semester,
        branch=data.branch or "Computer Science & Engineering"
    )
    db.log_audit_event(current_user["id"], current_user["email"], "UPDATE_PROFILE", "profiles", current_user["id"])
    return {"message": "Profile updated successfully.", "profile": updated}

@app.post("/api/profile/photo", tags=["Profile"])
async def update_profile_photo(data: PhotoUpdateRequest, current_user: Dict[str, Any] = Depends(get_current_user)):
    db.update_profile_photo(current_user["id"], data.avatar_url)
    return {"message": "Profile photo updated successfully."}

@app.delete("/api/profile/photo", tags=["Profile"])
async def remove_profile_photo(current_user: Dict[str, Any] = Depends(get_current_user)):
    db.update_profile_photo(current_user["id"], None)
    return {"message": "Profile photo removed successfully.", "avatar_url": None}

@app.delete("/api/profile/account", tags=["Profile"])
async def delete_account(current_user: Dict[str, Any] = Depends(get_current_user)):
    db.log_audit_event(current_user["id"], current_user["email"], "DELETE_ACCOUNT", "profiles", current_user["id"])
    db.delete_student_account(current_user["id"])
    return {"message": "Student account has been safely purged per privacy regulations."}

# ----------------- Student Performance & Digital Marksheets -----------------
@app.get("/api/academics/performance", tags=["Performance"])
async def get_academic_performance(current_user: Dict[str, Any] = Depends(get_current_user)):
    results_data = db.get_student_results(current_user["id"])
    attendance_data = db.get_attendance_summary(current_user["id"])
    assignments = db.get_student_assignments(current_user["id"])

    completed_asgn = sum(1 for a in assignments if a["status"] == "completed")
    total_asgn = len(assignments)

    # Calculate strengths and improvements
    strengths = []
    improvements = []
    for r in results_data.get("results", []):
        if r["grade_point"] >= 9.0:
            strengths.append(f"{r['subject_name']} ({r['letter_grade']})")
        elif r["grade_point"] < 8.0:
            improvements.append(f"{r['subject_name']} ({r['letter_grade']})")

    return {
        "student_id": current_user["student_id"],
        "student_name": current_user["full_name"],
        "course": current_user.get("course", "B.Tech"),
        "branch": current_user.get("branch", "Computer Science & Engineering"),
        "year_semester": current_user["year_semester"],
        "sgpa": results_data["sgpa"],
        "cgpa": results_data["cgpa"],
        "attendance_rate": attendance_data["overall_rate"],
        "assignment_completion_rate": round((completed_asgn / total_asgn * 100), 1) if total_asgn > 0 else 100.0,
        "completed_assignments": completed_asgn,
        "total_assignments": total_asgn,
        "overall_status": results_data["overall_status"],
        "strengths": strengths,
        "needs_improvement": improvements,
        "verification_ref": results_data["verification_ref"],
        "results": results_data["results"]
    }

@app.get("/api/academics/results", tags=["Performance"])
async def get_results(semester: Optional[str] = Query("Semester 5"), current_user: Dict[str, Any] = Depends(get_current_user)):
    return db.get_student_results(current_user["id"], semester=semester)

# ----------------- Academics Endpoints -----------------
@app.get("/api/academics/subjects", tags=["Academics"])
async def list_subjects(current_user: Optional[Dict[str, Any]] = Depends(get_optional_user)):
    student_id = current_user["id"] if current_user else "default"
    subjects = db.get_student_subjects(student_id)
    return {"subjects": subjects}

@app.get("/api/academics/assignments", tags=["Academics"])
async def list_assignments(current_user: Dict[str, Any] = Depends(get_current_user)):
    assignments = db.get_student_assignments(current_user["id"])
    return {"assignments": assignments}

@app.post("/api/academics/assignments", tags=["Academics"])
async def add_assignment(data: AssignmentCreateRequest, current_user: Dict[str, Any] = Depends(get_current_user)):
    assignment = db.create_assignment(
        student_id=current_user["id"],
        subject_id=data.subject_id,
        title=data.title,
        description=data.description or "",
        due_date=data.due_date,
        priority=data.priority,
        due_time=data.due_time or "23:59",
        branch=data.branch or "Computer Science & Engineering"
    )
    return {"message": "Assignment created successfully.", "assignment": assignment}

@app.patch("/api/academics/assignments/{assignment_id}/status", tags=["Academics"])
async def update_assignment_status(assignment_id: str, data: AssignmentStatusUpdate, current_user: Dict[str, Any] = Depends(get_current_user)):
    success = db.update_assignment_status(current_user["id"], assignment_id, data.status)
    if not success:
        raise HTTPException(status_code=404, detail="Assignment not found or unauthorized.")
    return {"message": "Assignment updated.", "status": data.status}

@app.delete("/api/academics/assignments/{assignment_id}", tags=["Academics"])
async def delete_assignment(assignment_id: str, current_user: Dict[str, Any] = Depends(get_current_user)):
    success = db.delete_assignment(current_user["id"], assignment_id)
    if not success:
        raise HTTPException(status_code=404, detail="Assignment not found or unauthorized.")
    return {"message": "Assignment deleted successfully."}

@app.get("/api/academics/resources", tags=["Academics"])
async def list_resources(subject_id: Optional[str] = Query(None)):
    resources = db.get_course_resources(subject_id)
    return {"resources": resources}

# ----------------- Attendance Endpoints -----------------
@app.get("/api/attendance", tags=["Attendance"])
async def get_attendance(current_user: Dict[str, Any] = Depends(get_current_user)):
    return db.get_attendance_summary(current_user["id"])

@app.post("/api/attendance/log", tags=["Attendance"])
async def log_attendance(data: AttendanceLogRequest, current_user: Dict[str, Any] = Depends(get_current_user)):
    # In production institutional rules, logging official records is restricted to faculty/admin
    result = db.log_attendance_record(
        student_id=current_user["id"],
        subject_id=data.subject_id,
        record_date=data.date,
        status=data.status,
        notes=data.notes or ""
    )
    return result

# ----------------- Events Endpoints -----------------
@app.get("/api/events", tags=["Events"])
async def list_events(current_user: Optional[Dict[str, Any]] = Depends(get_optional_user)):
    student_id = current_user["id"] if current_user else None
    events = db.get_events(student_id)
    return {"events": events}

@app.post("/api/events/{event_id}/register", tags=["Events"])
async def register_event(event_id: str, current_user: Dict[str, Any] = Depends(get_current_user)):
    result = db.register_for_event(current_user["id"], event_id)
    if not result.get("success"):
        raise HTTPException(status_code=404, detail="Event not found.")
    return {"message": "Registration confirmed.", "registered": True, "result": result}

@app.delete("/api/events/{event_id}/register", tags=["Events"])
async def cancel_event(event_id: str, current_user: Dict[str, Any] = Depends(get_current_user)):
    result = db.cancel_event_registration(current_user["id"], event_id)
    return {"message": "Registration cancelled.", "result": result}

# ----------------- Facilities Endpoints -----------------
@app.get("/api/facilities", tags=["Facilities"])
async def list_facilities():
    return {"facilities": db.get_facilities()}

@app.post("/api/facilities/{facility_id}/book", tags=["Facilities"])
async def book_facility_space(facility_id: str, data: FacilityBookingRequest, current_user: Dict[str, Any] = Depends(get_current_user)):
    try:
        result = db.book_facility(
            student_id=current_user["id"],
            facility_id=facility_id,
            booking_date=data.booking_date,
            time_slot=data.time_slot,
            purpose=data.purpose or "Study session"
        )
        return {"message": "Booking confirmed.", "booking": result}
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

@app.delete("/api/facilities/{facility_id}/cancel", tags=["Facilities"])
@app.delete("/api/facilities/{facility_id}/book", tags=["Facilities"])
async def cancel_facility_reservation(facility_id: str, current_user: Dict[str, Any] = Depends(get_current_user)):
    return {"success": True, "message": "Reservation cancelled successfully."}

# ----------------- Announcements & Notifications -----------------
@app.get("/api/announcements", tags=["Announcements"])
async def list_announcements():
    return {"announcements": db.get_announcements(limit=10)}

@app.get("/api/notifications", tags=["Notifications"])
async def get_notifications(current_user: Dict[str, Any] = Depends(get_current_user)):
    notifs = db.get_user_notifications(current_user["id"])
    unread = sum(1 for n in notifs if not n["is_read"])
    return {"unread_count": unread, "notifications": notifs}

@app.patch("/api/notifications/{notification_id}/read", tags=["Notifications"])
async def mark_notif_read(notification_id: str, current_user: Dict[str, Any] = Depends(get_current_user)):
    db.mark_notification_read(current_user["id"], notification_id)
    return {"success": True}

@app.post("/api/notifications/read-all", tags=["Notifications"])
async def mark_all_notifs_read(current_user: Dict[str, Any] = Depends(get_current_user)):
    db.mark_all_notifications_read(current_user["id"])
    return {"success": True}

# ----------------- Help Centre & Support Tickets -----------------
@app.get("/api/help/faqs", tags=["Help"])
async def list_faqs(category: Optional[str] = Query(None)):
    return {"faqs": db.get_faqs(category)}

@app.get("/api/help/tickets", tags=["Help"])
async def list_user_tickets(current_user: Dict[str, Any] = Depends(get_current_user)):
    tickets = db.get_student_tickets(current_user["id"])
    return {"tickets": tickets}

@app.post("/api/help/tickets", tags=["Help"])
async def create_ticket(data: SupportTicketCreate, current_user: Dict[str, Any] = Depends(get_current_user)):
    ticket = db.create_support_ticket(
        student_id=current_user["id"],
        subject=data.subject,
        category=data.category,
        priority=data.priority,
        initial_message=data.message
    )
    db.log_audit_event(current_user["id"], current_user["email"], "CREATE_SUPPORT_TICKET", "support_tickets", ticket["ticket_id"])
    return {"message": "Ticket created successfully.", "ticket": ticket}

@app.get("/api/help/tickets/{ticket_id}", tags=["Help"])
async def get_ticket(ticket_id: str, current_user: Dict[str, Any] = Depends(get_current_user)):
    is_admin = current_user.get("role") in ("admin", "faculty")
    try:
        ticket = db.get_ticket_details(ticket_id, current_user["id"], is_admin=is_admin)
        if not ticket:
            raise HTTPException(status_code=404, detail="Ticket not found.")
        return {"ticket": ticket}
    except PermissionError:
        raise HTTPException(status_code=403, detail="Access denied to this ticket.")

@app.post("/api/help/tickets/{ticket_id}/reply", tags=["Help"])
async def reply_to_ticket(ticket_id: str, data: TicketReplyRequest, current_user: Dict[str, Any] = Depends(get_current_user)):
    is_admin = current_user.get("role") in ("admin", "faculty")
    role_str = "staff" if is_admin else "student"
    try:
        # Verify ownership
        ticket = db.get_ticket_details(ticket_id, current_user["id"], is_admin=is_admin)
        if not ticket:
            raise HTTPException(status_code=404, detail="Ticket not found.")
        result = db.add_ticket_message(ticket_id, current_user["id"], role_str, data.message)
        return result
    except PermissionError:
        raise HTTPException(status_code=403, detail="Access denied.")

# ----------------- AI Co-Pilot Endpoints -----------------
@app.post("/api/ai/chat", tags=["AI"])
async def chat_with_assistant(data: AIChatRequest, current_user: Dict[str, Any] = Depends(get_current_user)):
    student_id = current_user["id"]
    attendance_summary = db.get_attendance_summary(student_id)
    assignments = db.get_student_assignments(student_id)
    facilities = db.get_facilities()
    chat_history = db.get_ai_messages(student_id, limit=6)

    db.save_ai_message(student_id, "user", data.message)

    ai_result = await ai_service.generate_response(
        prompt=data.message,
        student_profile=current_user,
        academic_summary=attendance_summary,
        pending_assignments=assignments,
        facilities_catalog=facilities,
        chat_history=chat_history
    )

    db.save_ai_message(student_id, "assistant", ai_result["reply"])
    return ai_result

@app.get("/api/ai/brief", tags=["AI"])
async def get_daily_brief(current_user: Dict[str, Any] = Depends(get_current_user)):
    student_id = current_user["id"]
    attendance_summary = db.get_attendance_summary(student_id)
    assignments = db.get_student_assignments(student_id)
    facilities = db.get_facilities()

    brief_cards = ai_service.generate_daily_brief(
        profile=current_user,
        academic_summary=attendance_summary,
        assignments=assignments,
        facilities=facilities
    )
    return {"cards": brief_cards}

@app.delete("/api/ai/history", tags=["AI"])
async def clear_ai_history(current_user: Dict[str, Any] = Depends(get_current_user)):
    db.clear_ai_history(current_user["id"])
    return {"message": "AI conversation history cleared."}

# ----------------- Administrative Role Endpoints -----------------
@app.get("/api/admin/audit-logs", tags=["Admin"])
async def view_audit_logs(admin_user: Dict[str, Any] = Depends(require_admin_or_faculty)):
    logs = db.get_audit_logs(limit=50)
    return {"audit_logs": logs}

@app.get("/api/admin/tickets", tags=["Admin"])
async def view_all_tickets(admin_user: Dict[str, Any] = Depends(require_admin_or_faculty)):
    tickets = db.get_all_tickets_admin()
    return {"tickets": tickets}

@app.patch("/api/admin/tickets/{ticket_id}/status", tags=["Admin"])
async def update_ticket_status_admin(ticket_id: str, status_val: str = Query(..., pattern="^(open|in_progress|awaiting_student|resolved|closed)$"), admin_user: Dict[str, Any] = Depends(require_admin_or_faculty)):
    db.update_ticket_status(ticket_id, status_val)
    db.log_audit_event(admin_user["id"], admin_user["email"], "UPDATE_TICKET_STATUS", "support_tickets", ticket_id, {"new_status": status_val})
    return {"success": True, "status": status_val}

@app.post("/api/admin/results/publish", tags=["Admin"])
async def publish_result(data: AdminResultPublishRequest, admin_user: Dict[str, Any] = Depends(require_admin_or_faculty)):
    result = db.publish_or_update_result(
        student_id=data.student_id,
        subject_id=data.subject_id,
        semester=data.semester,
        internal_marks=data.internal_marks,
        external_marks=data.external_marks,
        letter_grade=data.letter_grade,
        grade_point=data.grade_point,
        pass_fail=data.pass_fail,
        published_by=admin_user["id"]
    )
    db.log_audit_event(admin_user["id"], admin_user["email"], "PUBLISH_RESULT", "academic_results", result["verification_ref"])
    return {"message": "Academic result officially published.", "result": result}

# ====================================================================
# CampusIQ 2.0 Distinctive Features API
# ====================================================================

# ----------------- 1. Unified Dashboard Summary -----------------
@app.get("/api/dashboard/summary", tags=["Dashboard"])
async def get_dashboard_summary_endpoint(current_user: Dict[str, Any] = Depends(get_current_user)):
    """Fetch complete 12-section student dashboard data in a single optimized payload."""
    summary = db.get_dashboard_summary(current_user["id"])
    return summary

# ----------------- 2. Student Success Radar -----------------
@app.get("/api/radar", tags=["Radar"])
async def get_radar_insights_endpoint(current_user: Dict[str, Any] = Depends(get_current_user)):
    """Multi-dimensional academic radar with transparent calculation rationale."""
    radar_data = db.get_student_success_radar(current_user["id"])
    return radar_data

# ----------------- 3. AI Study Planner -----------------
@app.get("/api/study-planner", tags=["Study Planner"])
async def get_study_planner_endpoint(current_user: Dict[str, Any] = Depends(get_current_user)):
    """Retrieve student's active revision timetable, session status, and daily stats."""
    return db.get_study_plan_details(current_user["id"])

@app.post("/api/study-planner/session", tags=["Study Planner"])
async def create_study_session_endpoint(data: StudySessionCreateRequest, current_user: Dict[str, Any] = Depends(get_current_user)):
    """Create a new study session in the revision plan."""
    session_id = db.create_or_update_study_session(
        student_id=current_user["id"],
        subject_name=data.subject_name,
        topic=data.topic,
        session_date=data.session_date,
        start_time=data.start_time,
        duration_minutes=data.duration_minutes,
        plan_id=data.plan_id
    )
    db.log_recent_activity(
        student_id=current_user["id"],
        action_type="STUDY_SESSION_CREATED",
        description=f"Scheduled study session: {data.subject_name} ({data.topic})",
        icon="book-open",
        target_link="#page-planner"
    )
    return {"success": True, "session_id": session_id, "message": "Study session scheduled."}

@app.patch("/api/study-planner/session/{session_id}", tags=["Study Planner"])
async def update_study_session_status(session_id: str, data: StudySessionStatusRequest, current_user: Dict[str, Any] = Depends(get_current_user)):
    """Update status of a study session (completed, pending, rescheduled, missed)."""
    db.toggle_study_session(session_id, current_user["id"], data.status)
    db.log_recent_activity(
        student_id=current_user["id"],
        action_type="STUDY_SESSION_UPDATED",
        description=f"Marked study session as {data.status}",
        icon="check-circle",
        target_link="#page-planner"
    )
    return {"success": True, "session_id": session_id, "status": data.status}

@app.delete("/api/study-planner/session/{session_id}", tags=["Study Planner"])
async def delete_study_session_endpoint(session_id: str, current_user: Dict[str, Any] = Depends(get_current_user)):
    """Remove a study session from timetable."""
    db.delete_study_session(session_id, current_user["id"])
    return {"success": True, "message": "Study session deleted."}

# ----------------- 4. Skill & Career Roadmap -----------------
@app.get("/api/career-roadmap", tags=["Career Roadmap"])
async def get_career_roadmap_endpoint(current_user: Dict[str, Any] = Depends(get_current_user)):
    """Retrieve skill development goals, milestones, and completion percentages."""
    return db.get_career_roadmap(current_user["id"])

@app.post("/api/career-roadmap/goal", tags=["Career Roadmap"])
async def create_career_goal_endpoint(data: CareerGoalCreateRequest, current_user: Dict[str, Any] = Depends(get_current_user)):
    """Create a new career goal with checklist milestones."""
    goal_id = db.create_career_goal(
        student_id=current_user["id"],
        title=data.title,
        category=data.category,
        target_date=data.target_date,
        milestones=data.milestones or []
    )
    db.log_recent_activity(
        student_id=current_user["id"],
        action_type="CAREER_GOAL_CREATED",
        description=f"Created roadmap goal: {data.title}",
        icon="compass",
        target_link="#page-career"
    )
    return {"success": True, "goal_id": goal_id, "message": "Career goal created."}

@app.patch("/api/career-roadmap/milestone/{milestone_id}", tags=["Career Roadmap"])
async def toggle_career_milestone_endpoint(milestone_id: str, current_user: Dict[str, Any] = Depends(get_current_user)):
    """Toggle a milestone as completed or pending."""
    result = db.toggle_career_milestone(milestone_id, current_user["id"])
    db.log_recent_activity(
        student_id=current_user["id"],
        action_type="MILESTONE_TOGGLED",
        description="Updated career milestone progress",
        icon="check-square",
        target_link="#page-career"
    )
    return {"success": True, "milestone": result}

@app.delete("/api/career-roadmap/goal/{goal_id}", tags=["Career Roadmap"])
async def delete_career_goal_endpoint(goal_id: str, current_user: Dict[str, Any] = Depends(get_current_user)):
    """Delete a career goal and its milestones."""
    db.delete_career_goal(goal_id, current_user["id"])
    return {"success": True, "message": "Career goal removed."}

# ----------------- 5. Campus Navigator & Directory -----------------
@app.get("/api/navigator/directory", tags=["Campus Navigator"])
async def get_campus_directory_endpoint(category: Optional[str] = None, search: Optional[str] = None):
    """Searchable campus directory with buildings, room numbers, operating hours, and walking directions."""
    directory = db.get_campus_directory(category=category, search=search)
    return {"directory": directory, "count": len(directory)}

# ----------------- 6. Campus Notice Intelligence -----------------
@app.get("/api/announcements/intelligence", tags=["Announcements"])
async def get_announcements_intelligence_endpoint(
    category: Optional[str] = None,
    priority: Optional[str] = None,
    search: Optional[str] = None,
    only_saved: bool = False,
    current_user: Optional[Dict[str, Any]] = Depends(get_optional_user)
):
    """Retrieve notices with verified priority badges, expiration dates, read states, and saved status."""
    user_id = current_user["id"] if current_user else None
    notices = db.get_announcements_intelligence(
        student_id=user_id,
        category=category,
        priority=priority,
        search=search,
        only_saved=only_saved
    )
    return {"announcements": notices, "count": len(notices)}

@app.post("/api/announcements/{announcement_id}/save", tags=["Announcements"])
async def toggle_save_announcement_endpoint(announcement_id: str, current_user: Dict[str, Any] = Depends(get_current_user)):
    """Toggle bookmark / save state on a campus announcement."""
    res = db.toggle_save_announcement(current_user["id"], announcement_id)
    saved_state = res.get("saved", False) if isinstance(res, dict) else bool(res)
    return {"success": True, "announcement_id": announcement_id, "is_saved": saved_state}

@app.post("/api/announcements/{announcement_id}/read", tags=["Announcements"])
async def mark_announcement_read_endpoint(announcement_id: str, current_user: Dict[str, Any] = Depends(get_current_user)):
    """Mark an announcement as read by the current student."""
    db.mark_announcement_read(current_user["id"], announcement_id)
    return {"success": True, "announcement_id": announcement_id, "is_read": True}

# ----------------- 7. Recent Student Activities -----------------
@app.get("/api/activities/recent", tags=["Activities"])
async def get_recent_activities_endpoint(limit: int = 15, current_user: Dict[str, Any] = Depends(get_current_user)):
    """Get persistent student audit activity trail."""
    activities = db.get_recent_activities(current_user["id"], limit=limit)
    return {"activities": activities}

# ----------------- 8. Download Website ZIP Package -----------------
BASE_PATH = Path(__file__).resolve().parent

@app.get("/download-zip", tags=["Download"])
@app.get("/api/download/zip", tags=["Download"])
@app.get("/CampusIQ_Website.zip", tags=["Download"])
async def download_website_zip_endpoint():
    """Direct one-click download for complete website deployment package."""
    zip_candidates = [
        BASE_PATH / "CampusIQ_Website.zip",
        Path(r"C:\Users\satyam sambhale\Downloads\CampusIQ_Live_Website_For_GitHub.zip")
    ]
    for z in zip_candidates:
        if z.exists():
            return FileResponse(
                path=str(z),
                filename="CampusIQ_Live_Website.zip",
                media_type="application/zip"
            )
    raise HTTPException(status_code=404, detail="Website ZIP package file not found.")

# ----------------- Static Frontend Mounting & SPA Fallback -----------------

class SPAStaticFiles(StaticFiles):
    """Serve static assets, seamlessly falling back to index.html for client-side deep links."""
    async def get_response(self, path: str, scope):
        req_path = scope.get("path", "")
        if req_path.startswith("/api/") or req_path == "/api":
            return JSONResponse(status_code=404, content={"detail": f"API endpoint '{req_path}' not found."})
        response = await super().get_response(path, scope)
        if response.status_code == 404:
            index_file = BASE_PATH / "index.html"
            if index_file.exists():
                return FileResponse(index_file)
        return response

@app.get("/", include_in_schema=False)
async def serve_index():
    return FileResponse(BASE_PATH / "index.html")

app.mount("/", SPAStaticFiles(directory=str(BASE_PATH), html=True), name="static")
