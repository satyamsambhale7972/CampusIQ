"""
CampusIQ Configuration Module
Loads configuration from environment variables with sensible production defaults.
"""
import os
from pathlib import Path
from dotenv import load_dotenv

# Load .env if present
env_path = Path(__file__).resolve().parent / ".env"
load_dotenv(dotenv_path=env_path)

BASE_DIR = Path(__file__).resolve().parent

# Application Environment
ENV = os.getenv("CAMPUSIQ_ENV", "development").lower()
DEBUG = os.getenv("DEBUG", "false").lower() in ("true", "1", "yes")

# Server Settings
HOST = os.getenv("HOST", "0.0.0.0")
PORT = int(os.getenv("PORT", "8000"))

# Database Configuration
# Default to SQLite database in project directory for zero-friction setup and test reliability,
# or Supabase/PostgreSQL connection string when configured.
DATABASE_URL = os.getenv("DATABASE_URL", f"sqlite:///{BASE_DIR / 'campusiq.db'}")

# Supabase Auth Configuration
SUPABASE_URL = os.getenv("SUPABASE_URL", "").rstrip("/")
SUPABASE_ANON_KEY = os.getenv("SUPABASE_ANON_KEY", "")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY", "")
SUPABASE_JWT_SECRET = os.getenv("SUPABASE_JWT_SECRET", "")

# AI Assistant Configuration
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
AI_REQUEST_TIMEOUT = float(os.getenv("AI_REQUEST_TIMEOUT", "15.0"))
AI_MAX_RETRIES = int(os.getenv("AI_MAX_RETRIES", "2"))

# Rate Limiting & Security
RATE_LIMIT_PER_MINUTE = int(os.getenv("RATE_LIMIT_PER_MINUTE", "10000"))
CORS_ORIGINS = [
    origin.strip()
    for origin in os.getenv("CORS_ORIGINS", "http://localhost:8000,http://127.0.0.1:8000").split(",")
    if origin.strip()
]

# SMTP Email Notification Settings (Sends real email alert to Gmail when logging in)
SMTP_HOST = os.getenv("SMTP_HOST", "")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER", "")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "")
SMTP_FROM = os.getenv("SMTP_FROM", "CampusIQ Security <security@campusiq.edu>")
SMTP_SECURE = os.getenv("SMTP_SECURE", "true").lower() in ("true", "1", "yes")
SMTP_TIMEOUT = float(os.getenv("SMTP_TIMEOUT", "10.0"))

# SMS Gateway Settings for Real Phone OTP Delivery (Twilio, Fast2SMS)
SMS_PROVIDER = os.getenv("SMS_PROVIDER", "none").lower() # 'twilio', 'fast2sms', or 'none'
TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID", "")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN", "")
TWILIO_FROM_NUMBER = os.getenv("TWILIO_FROM_NUMBER", "")
FAST2SMS_API_KEY = os.getenv("FAST2SMS_API_KEY", "")
SMS_REQUEST_TIMEOUT = float(os.getenv("SMS_REQUEST_TIMEOUT", "8.0"))


