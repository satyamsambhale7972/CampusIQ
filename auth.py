"""
CampusIQ Authentication & Session Verification Module
Validates Supabase JWT access tokens, manages secure local session tokens,
and enforces authorization boundaries.
"""
import logging
import time
import secrets
from typing import Optional, Dict, Any
import jwt
from fastapi import Header, HTTPException, status, Depends
import httpx

import config
from database import db

logger = logging.getLogger("campusiq.auth")

INTERNAL_SECRET = config.SUPABASE_JWT_SECRET or "campusiq-secure-jwt-signing-secret-prod-2026-xyz"
JWT_ALGORITHM = "HS256"

def create_access_token(user_id: str, email: str, role: str = "student", expires_in_seconds: int = 86400) -> str:
    now = int(time.time())
    payload = {
        "sub": user_id,
        "email": email,
        "role": role,
        "iat": now,
        "exp": now + expires_in_seconds,
        "jti": secrets.token_hex(12),
        "iss": "campusiq-auth"
    }
    return jwt.encode(payload, INTERNAL_SECRET, algorithm=JWT_ALGORITHM)

async def verify_supabase_token_remote(token: str) -> Optional[Dict[str, Any]]:
    if not config.SUPABASE_URL or not config.SUPABASE_ANON_KEY:
        return None
    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            resp = await client.get(
                f"{config.SUPABASE_URL}/auth/v1/user",
                headers={
                    "Authorization": f"Bearer {token}",
                    "apikey": config.SUPABASE_ANON_KEY
                }
            )
            if resp.status_code == 200:
                data = resp.json()
                return {
                    "id": data.get("id"),
                    "email": data.get("email"),
                    "role": data.get("role", "student"),
                    "user_metadata": data.get("user_metadata", {})
                }
    except Exception as e:
        logger.warning(f"Remote Supabase token verification failed: {e}")
    return None

def verify_token_locally(token: str) -> Optional[Dict[str, Any]]:
    try:
        payload = jwt.decode(
            token,
            INTERNAL_SECRET,
            algorithms=["HS256", "HS384", "HS512"],
            options={"verify_exp": True, "verify_signature": True}
        )
        return {
            "id": payload.get("sub"),
            "email": payload.get("email"),
            "role": payload.get("role", "student"),
            "user_metadata": payload.get("user_metadata", {})
        }
    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Session expired. Please sign in again."
        )
    except jwt.InvalidTokenError:
        return None

async def get_current_user(authorization: Optional[str] = Header(None)) -> Dict[str, Any]:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication required. Please sign in to access your CampusIQ space."
        )

    token = authorization.split(" ", 1)[1].strip()
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authorization token."
        )

    user_info = verify_token_locally(token)

    if not user_info and config.SUPABASE_URL:
        user_info = await verify_supabase_token_remote(token)

    if not user_info or not user_info.get("id"):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Session invalid or expired. Please sign in again."
        )

    # Check database session persistence & revocation status
    db_session = db.get_session_by_token(token)
    if db_session and db_session.get("status") == "revoked":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Session has been signed out. Please sign in again."
        )

    profile = db.get_or_create_profile(
        user_id=user_info["id"],
        email=user_info["email"],
        full_name=user_info.get("user_metadata", {}).get("full_name", ""),
        role=user_info.get("role", "student")
    )

    return {
        "id": profile["id"],
        "email": profile["email"],
        "full_name": profile["full_name"],
        "student_id": profile["student_id"],
        "phone_number": profile.get("phone_number"),
        "country_code": profile.get("country_code", "+91"),
        "phone_verified": bool(profile.get("phone_verified", 0)),
        "course": profile.get("course", "B.Tech"),
        "branch": profile.get("branch", "Computer Science & Engineering"),
        "department": profile["department"],
        "year_semester": profile["year_semester"],
        "date_of_joining": profile.get("date_of_joining", "2024-08-01"),
        "role": profile["role"],
        "avatar_url": profile.get("avatar_url")
    }

async def get_optional_user(authorization: Optional[str] = Header(None)) -> Optional[Dict[str, Any]]:
    if not authorization or not authorization.startswith("Bearer "):
        return None
    try:
        return await get_current_user(authorization)
    except HTTPException:
        return None

async def require_admin_or_faculty(current_user: Dict[str, Any] = Depends(get_current_user)) -> Dict[str, Any]:
    """Ensures caller has elevated administrative or faculty permissions."""
    if current_user.get("role") not in ("admin", "faculty"):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Administrative privileges required to access this resource."
        )
    return current_user
