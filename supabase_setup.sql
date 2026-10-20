-- ====================================================================
-- CampusIQ 2.0 — Supabase Production Database Schema & RLS Policies
-- Project ID: jlssyqpqpordksbgqzrp
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/jlssyqpqpordksbgqzrp/sql/new
-- ====================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- --------------------------------------------------------------------
-- 2. PROFILES TABLE (Student Identity, Department, Academic Year, Phone)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL DEFAULT '',
    student_id TEXT UNIQUE,
    phone_number TEXT,
    country_code TEXT DEFAULT '+91',
    phone_verified BOOLEAN NOT NULL DEFAULT FALSE,
    course TEXT DEFAULT 'B.Tech',
    branch TEXT DEFAULT 'Computer Science & Engineering',
    department TEXT DEFAULT 'Computer Science & Engineering',
    year_semester TEXT DEFAULT 'Year 3, Semester 5',
    date_of_joining DATE DEFAULT '2024-08-01',
    role TEXT NOT NULL DEFAULT 'student',
    avatar_url TEXT,
    notification_prefs JSONB DEFAULT '{"email": true, "sms": false, "in_app": true, "exam_alerts": true, "attendance_alerts": true}',
    privacy_settings JSONB DEFAULT '{"show_email": false, "show_phone": false, "allow_peer_connect": true}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_student_id ON public.profiles(student_id);

-- Enable RLS and add public access policies for publishable API key
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public select profiles" ON public.profiles;
CREATE POLICY "Public select profiles" ON public.profiles FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public insert profiles" ON public.profiles;
CREATE POLICY "Public insert profiles" ON public.profiles FOR INSERT WITH CHECK (true);
DROP POLICY IF EXISTS "Public update profiles" ON public.profiles;
CREATE POLICY "Public update profiles" ON public.profiles FOR UPDATE USING (true);
DROP POLICY IF EXISTS "Public delete profiles" ON public.profiles;
CREATE POLICY "Public delete profiles" ON public.profiles FOR DELETE USING (true);

-- --------------------------------------------------------------------
-- 3. PHONE & EMAIL OTP VERIFICATIONS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.phone_verifications (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
    user_id TEXT REFERENCES public.profiles(id) ON DELETE CASCADE,
    phone_number TEXT NOT NULL,
    country_code TEXT NOT NULL DEFAULT '+91',
    otp_hash TEXT NOT NULL,
    attempts INTEGER NOT NULL DEFAULT 0,
    expires_at TIMESTAMPTZ NOT NULL,
    cooldown_until TIMESTAMPTZ NOT NULL,
    verified BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.phone_verifications ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public phone_verifications" ON public.phone_verifications;
CREATE POLICY "Public phone_verifications" ON public.phone_verifications FOR ALL USING (true);

-- --------------------------------------------------------------------
-- 4. SUBJECTS / COURSES
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.subjects (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
    code TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'CORE',
    credits INTEGER NOT NULL DEFAULT 4,
    instructor TEXT NOT NULL,
    room TEXT NOT NULL,
    schedule_time TEXT NOT NULL,
    schedule_days TEXT NOT NULL DEFAULT 'Mon,Wed,Fri',
    syllabus_summary TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public subjects" ON public.subjects;
CREATE POLICY "Public subjects" ON public.subjects FOR ALL USING (true);

-- --------------------------------------------------------------------
-- 5. ATTENDANCE RECORDS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.attendance_records (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
    student_id TEXT NOT NULL,
    subject_id TEXT NOT NULL,
    date DATE NOT NULL,
    status TEXT NOT NULL DEFAULT 'present',
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_attendance_student ON public.attendance_records(student_id);

ALTER TABLE public.attendance_records ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public attendance" ON public.attendance_records;
CREATE POLICY "Public attendance" ON public.attendance_records FOR ALL USING (true);

-- --------------------------------------------------------------------
-- 6. SUPPORT TICKETS & INQUIRIES
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.support_tickets (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
    ticket_number TEXT UNIQUE,
    student_id TEXT NOT NULL,
    subject TEXT NOT NULL,
    category TEXT NOT NULL,
    priority TEXT NOT NULL DEFAULT 'medium',
    status TEXT NOT NULL DEFAULT 'open',
    message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public support_tickets" ON public.support_tickets;
CREATE POLICY "Public support_tickets" ON public.support_tickets FOR ALL USING (true);

-- --------------------------------------------------------------------
-- 7. FACILITY BOOKINGS (Library, Hub, Lab)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.facility_bookings (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
    facility_id TEXT NOT NULL,
    student_id TEXT NOT NULL,
    booking_date DATE NOT NULL,
    time_slot TEXT NOT NULL,
    purpose TEXT DEFAULT 'Study session',
    status TEXT NOT NULL DEFAULT 'confirmed',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.facility_bookings ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public facility_bookings" ON public.facility_bookings;
CREATE POLICY "Public facility_bookings" ON public.facility_bookings FOR ALL USING (true);

-- --------------------------------------------------------------------
-- 8. CAREER ROADMAP & STUDY GOALS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.career_goals (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
    student_id TEXT NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'skill',
    target_date DATE,
    milestones JSONB DEFAULT '[]',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.career_goals ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public career_goals" ON public.career_goals;
CREATE POLICY "Public career_goals" ON public.career_goals FOR ALL USING (true);

-- --------------------------------------------------------------------
-- 9. SEED BASE CATALOG
-- --------------------------------------------------------------------
INSERT INTO public.subjects (code, name, category, credits, instructor, room, schedule_time, schedule_days, syllabus_summary)
VALUES
    ('CS301', 'Data Structures & Algorithms', 'CORE', 4, 'Dr. Sharma', 'Room A-204', '09:00 AM – 10:00 AM', 'Mon,Wed,Fri', 'Arrays, Trees, Graphs, DP'),
    ('CS302', 'Web Development', 'PRACTICAL', 3, 'Prof. Mehta', 'Lab C-102', '10:15 AM – 11:45 AM', 'Mon,Thu', 'Client-server architecture, APIs'),
    ('CS303', 'Database Management Systems', 'CORE', 4, 'Dr. Patil', 'Room B-110', '12:00 PM – 01:00 PM', 'Tue,Thu,Fri', 'SQL, transactions, relational models'),
    ('CS304', 'AI Project Studio', 'WORKSHOP', 2, 'CampusIQ Team', 'Innovation Hub', '02:00 PM – 03:30 PM', 'Wed,Fri', 'Neural systems, agents & pipelines')
ON CONFLICT (code) DO NOTHING;

-- Done! All tables and RLS policies created successfully.
