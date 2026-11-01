-- ====================================================================
-- CAMPUSIQ AUTONOMOUS UNIVERSITY SYSTEM — MASTER SUPABASE SQL SETUP
-- Project ID: jlssyqpqpordksbgqzrp
-- Direct Editor URL: https://supabase.com/dashboard/project/jlssyqpqpordksbgqzrp/sql/new
--
-- INSTRUCTIONS:
-- 1. Copy the entire contents of this SQL file.
-- 2. Open Supabase Dashboard -> SQL Editor -> New Query.
-- 3. Paste and click "Run".
-- 4. Result: All 15 tables, permissive RLS policies, column schema, and grants
--    are created/updated with ZERO errors.
-- ====================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. MASTER PROFILES TABLE (Students & Faculty)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL DEFAULT '2026',
    full_name TEXT NOT NULL DEFAULT '',
    phone_number TEXT,
    country_code TEXT DEFAULT '+91',
    course TEXT DEFAULT 'B.Tech',
    branch TEXT DEFAULT 'Computer Science and Engineering',
    department TEXT DEFAULT 'Computer Science and Engineering',
    dept_code TEXT DEFAULT 'CSE',
    year TEXT DEFAULT '3',
    year_semester TEXT DEFAULT 'Year 3, Semester 5',
    role TEXT NOT NULL DEFAULT 'student',
    cgpa TEXT DEFAULT '8.84',
    academic_standing TEXT DEFAULT 'Good Standing',
    overall_attendance NUMERIC DEFAULT 85.0,
    avatar_url TEXT DEFAULT 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
    hostel_info JSONB DEFAULT '{}'::jsonb,
    fee_info JSONB DEFAULT '{}'::jsonb,
    placement_info JSONB DEFAULT '{}'::jsonb,
    subjects JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Safely add missing columns to profiles if already existed
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS password TEXT DEFAULT '2026';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS cgpa TEXT DEFAULT '8.84';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS academic_standing TEXT DEFAULT 'Good Standing';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS overall_attendance NUMERIC DEFAULT 85.0;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS hostel_info JSONB DEFAULT '{}'::jsonb;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS fee_info JSONB DEFAULT '{}'::jsonb;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS placement_info JSONB DEFAULT '{}'::jsonb;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS subjects JSONB DEFAULT '[]'::jsonb;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS dept_code TEXT DEFAULT 'CSE';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS year TEXT DEFAULT '3';

CREATE UNIQUE INDEX IF NOT EXISTS idx_profiles_student_id_unique ON public.profiles(student_id);

-- 3. AUDIT LOGS & ACTION CENTER (Real-Time Login, Logout, Update & Delete Tracking)
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    actor_name TEXT NOT NULL DEFAULT 'Dr. Rajeshwar Sen',
    actor_role TEXT NOT NULL DEFAULT 'Dean of Academic Affairs',
    action_type TEXT NOT NULL,
    target_entity TEXT NOT NULL,
    target_id TEXT NOT NULL,
    details JSONB NOT NULL DEFAULT '{}'::jsonb,
    ip_address TEXT DEFAULT '127.0.0.1',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. INDIVIDUAL NOTICES (Direct Dean to Student Warnings / Private Messages)
CREATE TABLE IF NOT EXISTS public.individual_notices (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
    notice_id TEXT UNIQUE NOT NULL,
    recipient_student_id TEXT NOT NULL,
    recipient_name TEXT NOT NULL,
    sender_title TEXT NOT NULL DEFAULT 'Office of the Dean',
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    priority TEXT NOT NULL DEFAULT 'urgent',
    category TEXT NOT NULL DEFAULT 'Academic & Disciplinary',
    is_read BOOLEAN NOT NULL DEFAULT FALSE,
    read_at TIMESTAMPTZ,
    is_acknowledged BOOLEAN NOT NULL DEFAULT FALSE,
    acknowledged_at TIMESTAMPTZ,
    scheduled_for TIMESTAMPTZ,
    publication_status TEXT NOT NULL DEFAULT 'published',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. CAMPUS ANNOUNCEMENTS & CIRCULARS (Horizontal Marquee)
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

-- 6. SUPPORT TICKETS & GRIEVANCE HELPDESK (12-Hour SLA)
CREATE TABLE IF NOT EXISTS public.support_tickets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ticket_number TEXT UNIQUE NOT NULL,
    student_id TEXT NOT NULL,
    student_name TEXT,
    subject TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'Academic Grievance',
    priority TEXT NOT NULL DEFAULT 'medium',
    status TEXT NOT NULL DEFAULT 'open',
    message TEXT,
    admin_reply TEXT,
    sla_guarantee TEXT DEFAULT '12 Hours Guaranteed',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.support_tickets ADD COLUMN IF NOT EXISTS student_name TEXT;
ALTER TABLE public.support_tickets ADD COLUMN IF NOT EXISTS admin_reply TEXT;
ALTER TABLE public.support_tickets ADD COLUMN IF NOT EXISTS sla_guarantee TEXT DEFAULT '12 Hours Guaranteed';

-- 7. ATTENDANCE RECORDS (Biometric & Student Self-Marking)
CREATE TABLE IF NOT EXISTS public.attendance_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id TEXT NOT NULL,
    subject_id TEXT NOT NULL,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    status TEXT NOT NULL DEFAULT 'present',
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 8. CAMPUS EVENTS & HACKATHONS
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

-- 9. COURSE REGISTRATIONS TABLE
CREATE TABLE IF NOT EXISTS public.course_registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id TEXT NOT NULL,
    course_code TEXT NOT NULL,
    course_name TEXT NOT NULL,
    credits INTEGER NOT NULL DEFAULT 4,
    faculty_name TEXT,
    room_no TEXT,
    semester TEXT DEFAULT 'Semester 5',
    registration_status TEXT DEFAULT 'confirmed',
    registered_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 10. EXAMINATION RESULTS TABLE
CREATE TABLE IF NOT EXISTS public.exam_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id TEXT NOT NULL,
    semester TEXT NOT NULL,
    exam_session TEXT NOT NULL DEFAULT 'Winter End-Sem 2026',
    sgpa NUMERIC(4,2) NOT NULL,
    cgpa NUMERIC(4,2) NOT NULL,
    result_status TEXT NOT NULL DEFAULT 'PASS (First Class with Distinction)',
    total_credits INTEGER DEFAULT 24,
    earned_credits INTEGER DEFAULT 24,
    marks_breakdown JSONB DEFAULT '[]'::jsonb,
    published_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 11. SMART DIGITAL ID CARDS TABLE
CREATE TABLE IF NOT EXISTS public.smart_id_cards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id TEXT UNIQUE NOT NULL,
    card_number TEXT UNIQUE NOT NULL,
    barcode_value TEXT NOT NULL,
    qr_data TEXT NOT NULL,
    issue_date DATE DEFAULT '2024-08-01',
    expiry_date DATE DEFAULT '2028-06-30',
    status TEXT DEFAULT 'active',
    library_privilege TEXT DEFAULT 'Tier-1 Unlimited (5 Books)',
    access_zones JSONB DEFAULT '["Library", "Main Computer Center", "Robotics Lab", "Sports Complex", "Boys Hostel"]'::jsonb,
    blood_group TEXT DEFAULT 'O+ positive',
    emergency_contact TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 12. INSTITUTIONAL FEE LEDGERS & VOUCHERS TABLE
CREATE TABLE IF NOT EXISTS public.fee_ledgers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id TEXT NOT NULL,
    fee_type TEXT NOT NULL DEFAULT 'Tuition Fee',
    academic_year TEXT NOT NULL DEFAULT '2026-27',
    semester TEXT NOT NULL DEFAULT 'Semester 5',
    assessed_amount NUMERIC NOT NULL DEFAULT 0,
    paid_amount NUMERIC NOT NULL DEFAULT 0,
    concession_amount NUMERIC NOT NULL DEFAULT 0,
    outstanding_balance NUMERIC NOT NULL DEFAULT 0,
    payment_status TEXT NOT NULL DEFAULT 'pending',
    voucher_number TEXT UNIQUE,
    payment_method TEXT DEFAULT 'UPI / NetBanking',
    transaction_ref TEXT,
    due_date DATE DEFAULT (CURRENT_DATE + INTERVAL '30 days'),
    paid_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 13. HOSTEL ROOMS & ALLOTMENTS TABLES
CREATE TABLE IF NOT EXISTS public.hostel_rooms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hall_name TEXT NOT NULL,
    room_number TEXT NOT NULL,
    floor_number INTEGER NOT NULL DEFAULT 1,
    capacity INTEGER NOT NULL DEFAULT 2,
    occupied_beds INTEGER NOT NULL DEFAULT 0,
    status TEXT NOT NULL DEFAULT 'available',
    wing TEXT DEFAULT 'A-Wing',
    monthly_fee NUMERIC NOT NULL DEFAULT 8500,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (hall_name, room_number)
);

CREATE TABLE IF NOT EXISTS public.hostel_allotments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id TEXT NOT NULL,
    hall_name TEXT NOT NULL,
    room_number TEXT NOT NULL,
    bed_identifier TEXT NOT NULL,
    allotment_status TEXT NOT NULL DEFAULT 'active',
    check_in_date DATE NOT NULL DEFAULT CURRENT_DATE,
    check_out_date DATE,
    deposit_amount NUMERIC DEFAULT 10000,
    deposit_status TEXT DEFAULT 'paid',
    warden_name TEXT DEFAULT 'Dr. V. K. Sharma',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (hall_name, room_number, bed_identifier, allotment_status)
);

CREATE TABLE IF NOT EXISTS public.hostel_maintenance_tickets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ticket_id TEXT UNIQUE NOT NULL,
    student_id TEXT NOT NULL,
    hall_name TEXT NOT NULL,
    room_number TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    priority TEXT NOT NULL DEFAULT 'medium',
    status TEXT NOT NULL DEFAULT 'open',
    assigned_technician TEXT,
    resolved_at TIMESTAMPTZ,
    resolution_notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 14. ACTION CENTER ITEMS TABLE
CREATE TABLE IF NOT EXISTS public.action_center_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    item_key TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    student_id TEXT,
    student_name TEXT,
    title TEXT NOT NULL,
    reason TEXT NOT NULL,
    priority TEXT NOT NULL DEFAULT 'high',
    recommended_action TEXT NOT NULL,
    target_tab TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    assigned_to TEXT DEFAULT 'Unassigned',
    dismissed_reason TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES — FULL READ / WRITE / DELETE FOR ANON & AUTH
-- ====================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public access profiles" ON public.profiles;
CREATE POLICY "Public access profiles" ON public.profiles FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public access audit" ON public.audit_logs;
CREATE POLICY "Public access audit" ON public.audit_logs FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE public.individual_notices ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public access ind_notices" ON public.individual_notices;
CREATE POLICY "Public access ind_notices" ON public.individual_notices FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public access announcements" ON public.announcements;
CREATE POLICY "Public access announcements" ON public.announcements FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public access tickets" ON public.support_tickets;
CREATE POLICY "Public access tickets" ON public.support_tickets FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE public.attendance_records ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public access attendance" ON public.attendance_records;
CREATE POLICY "Public access attendance" ON public.attendance_records FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public access events" ON public.events;
CREATE POLICY "Public access events" ON public.events FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE public.course_registrations ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public access courses" ON public.course_registrations;
CREATE POLICY "Public access courses" ON public.course_registrations FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE public.exam_results ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public access exam_results" ON public.exam_results;
CREATE POLICY "Public access exam_results" ON public.exam_results FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE public.smart_id_cards ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public access smart_id" ON public.smart_id_cards;
CREATE POLICY "Public access smart_id" ON public.smart_id_cards FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE public.fee_ledgers ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public access fees" ON public.fee_ledgers;
CREATE POLICY "Public access fees" ON public.fee_ledgers FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE public.hostel_rooms ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public access hostel_rooms" ON public.hostel_rooms;
CREATE POLICY "Public access hostel_rooms" ON public.hostel_rooms FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE public.hostel_allotments ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public access allotments" ON public.hostel_allotments;
CREATE POLICY "Public access allotments" ON public.hostel_allotments FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE public.hostel_maintenance_tickets ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public access maintenance" ON public.hostel_maintenance_tickets;
CREATE POLICY "Public access maintenance" ON public.hostel_maintenance_tickets FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE public.action_center_items ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public access action_center" ON public.action_center_items;
CREATE POLICY "Public access action_center" ON public.action_center_items FOR ALL USING (true) WITH CHECK (true);

-- ====================================================================
-- SCHEMA PERMISSIONS GRANT
-- ====================================================================
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role;

-- ====================================================================
-- SEED INITIAL CIRCULARS, EVENTS & DEMO RECORDS
-- ====================================================================
INSERT INTO public.announcements (id, title, content, category, priority, department, author_name, attachment_name, publish_status)
VALUES
('cir_1', 'End-Semester Theory Examination Winter 2026 Schedule Released', 'Controller of Examinations has published the final datesheet for all B.Tech batches. Hall ticket download begins Nov 02, 2026. Verify course registrations before Oct 31.', 'Exams', 'urgent', 'Examination Cell', 'Dr. Rajeshwar Sen (Dean of Academic Affairs)', 'Datesheet_Winter_2026_Final.pdf', 'published'),
('cir_2', 'Mandatory Statutory Attendance Threshold (75%) Compliance', 'Students falling below 75% aggregate attendance as of Week 12 face mandatory detention from Winter 2026 End-Sem examinations pursuant to University Academic Regulations Art. 14.2.', 'Academic', 'urgent', 'Academic Affairs', 'Dr. Rajeshwar Sen (Dean of Academic Affairs)', 'Attendance_Shortage_Circular_v2.pdf', 'published')
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content;

INSERT INTO public.events (id, title, category, event_date, time_slot, venue, prize, organizer, description)
VALUES
('evt_hack_1', 'CodeStorm 2026: 36-Hour National AI & Cloud Hackathon', 'hackathon', 'Nov 14 - 15, 2026', '09:00 AM - 09:00 PM', 'Auditorium Complex & Computing Labs', '₹2,50,000 Cash Pool + Cloud Credits', 'Google Developer Group & CampusIQ Tech Club', 'Build autonomous intelligent agents, cloud computing systems, and LLM applications.')
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;

-- Setup Complete
SELECT 'CampusIQ Master Supabase Database Initialized Successfully!' AS status;
