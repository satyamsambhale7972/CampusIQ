"""
CampusIQ — Asynchronous Supabase Backend Synchronization Module
Synchronizes student profiles directly to both Supabase 'students' and 'profiles'
tables, as well as attendance, support tickets, and bookings.
"""
import json
import logging
import threading
import urllib.request
import urllib.parse
import urllib.error
import ssl
from datetime import datetime
from typing import Dict, Any, Optional

import config

logger = logging.getLogger("campusiq.supabase_sync")

def _post_to_supabase(table: str, payload: Dict[str, Any], on_conflict: Optional[str] = None):
    """Worker function executed in background thread to avoid blocking FastAPI endpoints."""
    if not config.SUPABASE_URL or not config.SUPABASE_ANON_KEY:
        return

    url = f"{config.SUPABASE_URL}/rest/v1/{table}"
    if on_conflict:
        url += f"?on_conflict={on_conflict}"

    headers = {
        "apikey": config.SUPABASE_ANON_KEY,
        "Authorization": f"Bearer {config.SUPABASE_ANON_KEY}",
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates,return=minimal"
    }

    try:
        body = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(url, data=body, headers=headers, method="POST")
        ctx = ssl.create_default_context()
        with urllib.request.urlopen(req, context=ctx, timeout=8.0) as resp:
            if resp.status in (200, 201, 204):
                logger.info(f"[Supabase Sync] Persisted in '{table}': {payload.get('email') or payload.get('id')}")
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode("utf-8", errors="ignore")
        if e.code == 404 and "PGRST205" in err_msg:
            logger.warning(f"[Supabase Sync] Table '{table}' not found in Supabase schema cache.")
        else:
            logger.warning(f"[Supabase Sync] Table '{table}' HTTP {e.code}: {err_msg[:200]}")
    except Exception as ex:
        logger.warning(f"[Supabase Sync] Error syncing to '{table}': {ex}")

def sync_to_students_table(profile: Dict[str, Any]):
    """Sync student directly to the Supabase 'students' table in background thread."""
    if not config.SUPABASE_URL or not config.SUPABASE_ANON_KEY:
        return
    if not profile or not profile.get("email"):
        return

    email = profile["email"].strip().lower()
    headers = {
        "apikey": config.SUPABASE_ANON_KEY,
        "Authorization": f"Bearer {config.SUPABASE_ANON_KEY}",
        "Content-Type": "application/json"
    }
    ctx = ssl.create_default_context()

    try:
        # 1. Check if student already exists by email
        check_url = f"{config.SUPABASE_URL}/rest/v1/students?email=eq.{urllib.parse.quote(email)}&select=id"
        check_req = urllib.request.Request(check_url, headers=headers)
        existing_id = None
        with urllib.request.urlopen(check_req, context=ctx, timeout=6.0) as resp:
            data = json.loads(resp.read().decode())
            if data and len(data) > 0:
                existing_id = data[0]["id"]

        student_payload = {
            "name": profile.get("full_name") or profile.get("name") or email.split("@")[0],
            "email": email,
            "phone": profile.get("phone_number") or profile.get("phone") or "",
            "roll_number": str(profile.get("student_id") or profile.get("roll_number") or f"STU-{abs(hash(email)) % 90000 + 10000}"),
            "department": profile.get("department") or profile.get("branch") or "Computer Science",
            "year": profile.get("year_semester") or profile.get("year") or "1st Year",
            "extra_details": json.dumps({
                "role": profile.get("role", "student"),
                "phone_verified": bool(profile.get("phone_verified")),
                "last_active": datetime.utcnow().isoformat(),
                "synced_from": "CampusIQ Single Portal"
            })
        }

        if existing_id:
            # Update existing student
            update_url = f"{config.SUPABASE_URL}/rest/v1/students?id=eq.{existing_id}"
            body = json.dumps(student_payload).encode("utf-8")
            update_req = urllib.request.Request(update_url, data=body, headers=headers, method="PATCH")
            with urllib.request.urlopen(update_req, context=ctx, timeout=6.0) as resp:
                logger.info(f"[Supabase Sync] Updated student #{existing_id} in 'students' table: {email}")
        else:
            # Insert new student
            insert_url = f"{config.SUPABASE_URL}/rest/v1/students"
            body = json.dumps(student_payload).encode("utf-8")
            insert_req = urllib.request.Request(insert_url, data=body, headers=headers, method="POST")
            with urllib.request.urlopen(insert_req, context=ctx, timeout=6.0) as resp:
                logger.info(f"[Supabase Sync] Inserted new student in 'students' table: {email}")

    except Exception as ex:
        logger.warning(f"[Supabase Sync] Failed to sync to 'students' table: {ex}")

def sync_profile_to_supabase(profile: Dict[str, Any]):
    """Sync student profile to BOTH Supabase 'students' and 'profiles' tables asynchronously."""
    if not profile or not profile.get("email"):
        return

    # 1. Sync to public.students table (User's primary database table)
    threading.Thread(target=sync_to_students_table, args=(profile,), daemon=True).start()

    # 2. Sync to public.profiles table
    profiles_payload = {
        "email": profile["email"].strip().lower(),
        "full_name": profile.get("full_name") or "",
        "student_id": profile.get("student_id") or f"STU-{abs(hash(profile['email'])) % 90000 + 10000}",
        "phone_number": profile.get("phone_number"),
        "country_code": profile.get("country_code", "+91"),
        "phone_verified": bool(profile.get("phone_verified")),
        "course": profile.get("course", "B.Tech"),
        "branch": profile.get("branch", "Computer Science & Engineering"),
        "department": profile.get("department", "Computer Science & Engineering"),
        "year_semester": profile.get("year_semester", "Year 3, Semester 5"),
        "role": profile.get("role", "student"),
        "updated_at": datetime.utcnow().isoformat()
    }
    if profile.get("id"):
        profiles_payload["id"] = str(profile["id"])

    threading.Thread(target=_post_to_supabase, args=("profiles", profiles_payload, "email"), daemon=True).start()

def sync_attendance_to_supabase(attendance: Dict[str, Any]):
    """Sync attendance record to Supabase 'attendance_records' table asynchronously."""
    payload = {
        "student_id": str(attendance.get("student_id")),
        "subject_id": str(attendance.get("subject_id") or "CS301"),
        "date": attendance.get("date") or datetime.utcnow().strftime("%Y-%m-%d"),
        "status": attendance.get("status", "present"),
        "notes": attendance.get("notes") or ""
    }
    threading.Thread(target=_post_to_supabase, args=("attendance_records", payload), daemon=True).start()

def sync_ticket_to_supabase(ticket: Dict[str, Any]):
    """Sync support ticket to Supabase 'support_tickets' table asynchronously."""
    payload = {
        "student_id": str(ticket.get("student_id")),
        "ticket_number": ticket.get("ticket_number") or f"TCK-{abs(hash(str(ticket))) % 90000 + 10000}",
        "subject": ticket.get("subject", "Student Inquiry"),
        "category": ticket.get("category", "academic"),
        "priority": ticket.get("priority", "medium"),
        "status": ticket.get("status", "open"),
        "message": ticket.get("message", "")
    }
    threading.Thread(target=_post_to_supabase, args=("support_tickets", payload), daemon=True).start()

def sync_booking_to_supabase(booking: Dict[str, Any]):
    """Sync facility booking to Supabase 'facility_bookings' table asynchronously."""
    payload = {
        "facility_id": str(booking.get("facility_id")),
        "student_id": str(booking.get("student_id")),
        "booking_date": booking.get("booking_date") or datetime.utcnow().strftime("%Y-%m-%d"),
        "time_slot": booking.get("time_slot", "09:00 AM – 11:00 AM"),
        "purpose": booking.get("purpose", "Study session"),
        "status": "confirmed"
    }
    threading.Thread(target=_post_to_supabase, args=("facility_bookings", payload), daemon=True).start()

def sync_goal_to_supabase(goal: Dict[str, Any]):
    """Sync career goal to Supabase 'career_goals' table asynchronously."""
    payload = {
        "student_id": str(goal.get("student_id")),
        "title": goal.get("title", "Career Milestone"),
        "target_date": goal.get("target_date") or datetime.utcnow().strftime("%Y-%m-%d"),
        "status": goal.get("status", "in_progress")
    }
    threading.Thread(target=_post_to_supabase, args=("career_goals", payload), daemon=True).start()
