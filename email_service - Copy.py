"""
CampusIQ Real-Time Email Delivery Service
Handles SMTP dispatch over TLS (Port 587) or SSL (Port 465) targeting sub-30 second delivery.
Provides institutional HTML email templates for:
- Email Verification (6-digit code + direct action button)
- Password Reset (Security PIN + password recovery link)
- Real-Time Sign-in Security Alerts
"""
import smtplib
import time
import logging
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from typing import Dict, Any, Optional
import config

logger = logging.getLogger("campusiq.email")

def send_smtp_message(
    to_email: str,
    subject: str,
    html_content: str,
    text_content: str
) -> Dict[str, Any]:
    """
    Synchronously transmits an email via configured SMTP gateway.
    Returns status, latency in milliseconds, and provider diagnostics.
    """
    req_start = time.perf_counter()
    if not config.SMTP_HOST or not config.SMTP_USER or not config.SMTP_PASSWORD:
        return {
            "success": False,
            "status": "failed",
            "provider": "smtp",
            "error": "SMTP credentials not configured. Please set SMTP_USER and SMTP_PASSWORD in .env.",
            "latency_ms": round((time.perf_counter() - req_start) * 1000, 2)
        }

    msg = MIMEMultipart("alternative")
    sender_name = config.SMTP_FROM or "CampusIQ Security"
    msg["Subject"] = subject
    msg["From"] = f"{sender_name} <{config.SMTP_USER}>"
    msg["To"] = to_email
    msg.attach(MIMEText(text_content, "plain"))
    msg.attach(MIMEText(html_content, "html"))

    try:
        timeout = getattr(config, "SMTP_TIMEOUT", 10.0)
        if config.SMTP_PORT == 465:
            server = smtplib.SMTP_SSL(config.SMTP_HOST, config.SMTP_PORT, timeout=timeout)
        else:
            server = smtplib.SMTP(config.SMTP_HOST, config.SMTP_PORT, timeout=timeout)
            if config.SMTP_SECURE:
                server.starttls()
        
        server.login(config.SMTP_USER, config.SMTP_PASSWORD)
        server.send_message(msg)
        server.quit()
        
        latency = round((time.perf_counter() - req_start) * 1000, 2)
        logger.info(f"SMTP email delivered to {to_email} in {latency}ms via {config.SMTP_HOST}:{config.SMTP_PORT}")
        return {
            "success": True,
            "status": "request_accepted",
            "provider": "smtp",
            "provider_status": "accepted_for_delivery",
            "latency_ms": latency,
            "message": f"Email accepted by SMTP gateway ({config.SMTP_HOST})."
        }
    except smtplib.SMTPAuthenticationError as auth_err:
        logger.error(f"SMTP Authentication Error for {to_email}: {auth_err}")
        return {
            "success": False,
            "status": "failed",
            "provider": "smtp",
            "error": "SMTP authentication failed. For Gmail, verify 2FA is active and use a 16-character App Password.",
            "latency_ms": round((time.perf_counter() - req_start) * 1000, 2)
        }
    except Exception as ex:
        logger.error(f"SMTP dispatch failed for {to_email}: {ex}")
        return {
            "success": False,
            "status": "failed",
            "provider": "smtp",
            "error": str(ex),
            "latency_ms": round((time.perf_counter() - req_start) * 1000, 2)
        }

def build_verification_email(full_name: str, email: str, code: str, verify_link: str) -> Dict[str, str]:
    """Builds HTML and plain text template for student email verification."""
    text_content = f"""Hello {full_name or 'Student'},

Thank you for registering on CampusIQ. Please verify your email address to activate your full student portal features.

Your 6-digit Email Verification Code:
{code}

This code will expire in 15 minutes.

You can also verify directly by visiting:
{verify_link}

If you did not create a CampusIQ account, please disregard this email.

CampusIQ Institutional Security Telemetry
"""
    html_content = f"""
    <div style="font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:580px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.05)">
      <div style="background:linear-gradient(135deg,#1e1b4b,#312e81,#0284c7);padding:28px;text-align:center;color:#ffffff">
        <h1 style="margin:0;font-size:24px;font-weight:800;letter-spacing:-0.5px">Campus<span style="color:#38bdf8">IQ</span></h1>
        <p style="margin:6px 0 0;font-size:12px;color:#c7d2fe;letter-spacing:1px;text-transform:uppercase">Institutional Identity & Verification</p>
      </div>
      <div style="padding:32px 28px;color:#1e293b">
        <h2 style="margin:0 0 12px;font-size:18px;color:#0f172a">Verify Your Student Email Address</h2>
        <p style="font-size:14px;line-height:1.6;color:#475569;margin:0 0 20px">
          Hello <strong>{full_name or 'Student'}</strong>,<br>
          Please use the following single-use verification code to confirm your email address (<strong>{email}</strong>) and finalize your enrollment portal access.
        </p>
        
        <div style="background:#f8fafc;border:2px dashed #6366f1;border-radius:14px;padding:22px;text-align:center;margin-bottom:24px">
          <small style="display:block;font-size:11px;font-weight:700;color:#6366f1;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Single-Use Verification Code</small>
          <div style="font-family:monospace;font-size:36px;font-weight:800;letter-spacing:10px;color:#1e1b4b">{code}</div>
          <small style="display:block;font-size:11px;color:#64748b;margin-top:8px">Valid for 15 minutes · Do not share this code</small>
        </div>

        <div style="text-align:center;margin-bottom:24px">
          <a href="{verify_link}" style="display:inline-block;background:#4f46e5;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:14px 28px;border-radius:10px;box-shadow:0 4px 14px rgba(79,70,229,0.3)">Verify Email Address ↗</a>
        </div>

        <p style="font-size:12px;color:#64748b;line-height:1.6;margin:0">
          If you did not request this email, no further action is required. Your account remains protected.
        </p>
      </div>
      <div style="background:#f1f5f9;padding:16px 28px;text-align:center;font-size:11px;color:#94a3b8;border-top:1px solid #e2e8f0">
        © 2026 CampusIQ · Institutional Telemetry Platform · Automated Security Notification
      </div>
    </div>
    """
    return {"subject": f"CampusIQ Email Verification: {code}", "html": html_content, "text": text_content}

def build_password_reset_email(full_name: str, email: str, code: str, reset_link: str) -> Dict[str, str]:
    """Builds HTML and plain text template for password reset."""
    text_content = f"""Hello {full_name or 'Student'},

We received a request to reset your CampusIQ account password for {email}.

Password Reset Verification PIN:
{code}

Or reset your password directly at:
{reset_link}

This PIN and link expire in 15 minutes. If you did not make this request, please change your credentials immediately.

CampusIQ Institutional Security
"""
    html_content = f"""
    <div style="font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:580px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.05)">
      <div style="background:linear-gradient(135deg,#1e1b4b,#312e81,#b91c1c);padding:28px;text-align:center;color:#ffffff">
        <h1 style="margin:0;font-size:24px;font-weight:800;letter-spacing:-0.5px">Campus<span style="color:#38bdf8">IQ</span></h1>
        <p style="margin:6px 0 0;font-size:12px;color:#fecaca;letter-spacing:1px;text-transform:uppercase">Account Security Recovery</p>
      </div>
      <div style="padding:32px 28px;color:#1e293b">
        <h2 style="margin:0 0 12px;font-size:18px;color:#0f172a">Password Reset Request</h2>
        <p style="font-size:14px;line-height:1.6;color:#475569;margin:0 0 20px">
          Hello <strong>{full_name or 'Student'}</strong>,<br>
          A password reset was requested for your registered student account (<strong>{email}</strong>). Use the recovery PIN below to reset your credentials.
        </p>

        <div style="background:#fff1f2;border:2px dashed #f43f5e;border-radius:14px;padding:22px;text-align:center;margin-bottom:24px">
          <small style="display:block;font-size:11px;font-weight:700;color:#e11d48;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Password Recovery PIN</small>
          <div style="font-family:monospace;font-size:36px;font-weight:800;letter-spacing:10px;color:#881337">{code}</div>
          <small style="display:block;font-size:11px;color:#9f1239;margin-top:8px">Valid for 15 minutes · One-time authorization</small>
        </div>

        <div style="text-align:center;margin-bottom:24px">
          <a href="{reset_link}" style="display:inline-block;background:#e11d48;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:14px 28px;border-radius:10px;box-shadow:0 4px 14px rgba(225,29,72,0.3)">Reset Password Now ↗</a>
        </div>

        <p style="font-size:12px;color:#64748b;line-height:1.6;margin:0">
          If you did not initiate this reset, contact your campus IT administrator immediately.
        </p>
      </div>
      <div style="background:#f1f5f9;padding:16px 28px;text-align:center;font-size:11px;color:#94a3b8;border-top:1px solid #e2e8f0">
        © 2026 CampusIQ · Institutional Security Recovery
      </div>
    </div>
    """
    return {"subject": f"🔐 CampusIQ Password Reset: {code}", "html": html_content, "text": text_content}

def build_security_alert_email(full_name: str, email: str, client_ip: str, login_time: str, portal_url: str) -> Dict[str, str]:
    """Builds HTML and plain text template for new sign-in security alert."""
    text_content = f"""Hello {full_name or 'Student'},

A new sign-in was recorded for your CampusIQ account.
Account: {email}
Time: {login_time}
IP Address: {client_ip}

If this was you, no action is needed. If you did not sign in, please update your password immediately.

CampusIQ Security Telemetry
"""
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
          <a href="{portal_url}" style="display:inline-block;background:#4f46e5;color:#ffffff;text-decoration:none;font-weight:700;font-size:13px;padding:12px 24px;border-radius:10px">Access Campus Portal ↗</a>
        </div>
      </div>
      <div style="background:#f1f5f9;padding:16px 28px;text-align:center;font-size:11px;color:#94a3b8;border-top:1px solid #e2e8f0">
        © 2026 CampusIQ · Verified Institutional Telemetry Platform · Automated System Notice
      </div>
    </div>
    """
    return {"subject": "🔐 CampusIQ Security Alert: New Sign-in to your Student Account", "html": html_content, "text": text_content}
