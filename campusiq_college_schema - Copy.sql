-- ====================================================================
-- CAMPUSIQ — Official College Student Portal Schema & Supabase Setup
-- Project ID: jlssyqpqpordksbgqzrp
-- Run in Supabase SQL Editor: https://supabase.com/dashboard/project/jlssyqpqpordksbgqzrp/sql/new
-- ====================================================================

-- 1. Enable Cryptographic & UUID Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. STUDENT PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL DEFAULT '',
    student_id TEXT UNIQUE,
    phone_number TEXT,
    country_code TEXT DEFAULT '+91',
    course TEXT DEFAULT 'B.Tech',
    branch TEXT DEFAULT 'Computer Science & Engineering',
    department TEXT DEFAULT 'Computer Science & Engineering',
    year_semester TEXT DEFAULT 'Year 3, Semester 5',
    role TEXT NOT NULL DEFAULT 'student',
    cgpa TEXT DEFAULT '8.84',
    academic_standing TEXT DEFAULT 'Dean''s Honor List',
    avatar_url TEXT DEFAULT 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public select profiles" ON public.profiles;
CREATE POLICY "Public select profiles" ON public.profiles FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public insert profiles" ON public.profiles;
CREATE POLICY "Public insert profiles" ON public.profiles FOR INSERT WITH CHECK (true);
DROP POLICY IF EXISTS "Public update profiles" ON public.profiles;
CREATE POLICY "Public update profiles" ON public.profiles FOR UPDATE USING (true);

-- 3. ATTENDANCE RECORDS TABLE
CREATE TABLE IF NOT EXISTS public.attendance_records (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
    student_id TEXT NOT NULL,
    subject_id TEXT NOT NULL,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    status TEXT NOT NULL DEFAULT 'present',
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.attendance_records ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public attendance select" ON public.attendance_records;
CREATE POLICY "Public attendance select" ON public.attendance_records FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public attendance insert" ON public.attendance_records;
CREATE POLICY "Public attendance insert" ON public.attendance_records FOR INSERT WITH CHECK (true);

-- 4. SUPPORT TICKETS & GRIEVANCES TABLE
CREATE TABLE IF NOT EXISTS public.support_tickets (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
    ticket_number TEXT UNIQUE,
    student_id TEXT NOT NULL,
    subject TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'Academic Grievance',
    priority TEXT NOT NULL DEFAULT 'medium',
    status TEXT NOT NULL DEFAULT 'open',
    message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public support_tickets select" ON public.support_tickets;
CREATE POLICY "Public support_tickets select" ON public.support_tickets FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public support_tickets insert" ON public.support_tickets;
CREATE POLICY "Public support_tickets insert" ON public.support_tickets FOR INSERT WITH CHECK (true);

-- 5. CAMPUS NOTICES & CIRCULARS TABLE
CREATE TABLE IF NOT EXISTS public.announcements (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'General',
    source TEXT NOT NULL DEFAULT 'official',
    source_label TEXT DEFAULT 'Official College Circular',
    priority TEXT NOT NULL DEFAULT 'medium',
    department TEXT DEFAULT 'All Departments',
    author_name TEXT NOT NULL DEFAULT 'Dean of Academic Affairs',
    attachment_name TEXT,
    is_pinned BOOLEAN NOT NULL DEFAULT FALSE,
    publish_status TEXT NOT NULL DEFAULT 'published',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public announcements select" ON public.announcements;
CREATE POLICY "Public announcements select" ON public.announcements FOR SELECT USING (true);

-- 6. CAMPUS EVENTS TABLE (Solves Gmail Scatter)
CREATE TABLE IF NOT EXISTS public.events (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
    title TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'hackathon',
    source TEXT NOT NULL DEFAULT 'gmail',
    source_label TEXT DEFAULT 'From College Gmail Invite',
    event_date TEXT NOT NULL,
    time_slot TEXT NOT NULL,
    venue TEXT NOT NULL,
    prize TEXT,
    organizer TEXT NOT NULL,
    description TEXT,
    registration_deadline TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public events select" ON public.events;
CREATE POLICY "Public events select" ON public.events FOR SELECT USING (true);

-- Seed Default Profiles if not existing
INSERT INTO public.profiles (email, full_name, student_id, course, branch, department, year_semester, phone_number, cgpa)
VALUES 
    ('satyam.sambhale@campusiq.edu', 'Satyam Sambhale', '252921200', 'B.Tech', 'Computer Science & Engineering', 'Computer Science & Engineering', 'Year 3, Semester 5', '+91 79721 79785', '8.84')
ON CONFLICT (email) DO NOTHING;
