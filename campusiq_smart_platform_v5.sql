-- ====================================================================
-- CAMPUSIQ — Advanced Smart Campus Management Platform Schema v5.0
-- Non-Destructive Extension for Supabase
-- Preserves all existing tables: profiles, attendance_records, support_tickets, announcements, events
-- ====================================================================

-- 1. Ensure UUID and Crypto extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. FEE LEDGERS & VOUCHERS TABLE
CREATE TABLE IF NOT EXISTS public.fee_ledgers (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
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

ALTER TABLE public.fee_ledgers ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public select fee_ledgers" ON public.fee_ledgers;
CREATE POLICY "Public select fee_ledgers" ON public.fee_ledgers FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public insert fee_ledgers" ON public.fee_ledgers;
CREATE POLICY "Public insert fee_ledgers" ON public.fee_ledgers FOR INSERT WITH CHECK (true);
DROP POLICY IF EXISTS "Public update fee_ledgers" ON public.fee_ledgers;
CREATE POLICY "Public update fee_ledgers" ON public.fee_ledgers FOR UPDATE USING (true);

-- 3. HOSTEL ROOMS INVENTORY TABLE
CREATE TABLE IF NOT EXISTS public.hostel_rooms (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
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

ALTER TABLE public.hostel_rooms ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public select hostel_rooms" ON public.hostel_rooms;
CREATE POLICY "Public select hostel_rooms" ON public.hostel_rooms FOR SELECT USING (true);

-- 4. HOSTEL BED ALLOTMENTS TABLE
CREATE TABLE IF NOT EXISTS public.hostel_allotments (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
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

ALTER TABLE public.hostel_allotments ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public select hostel_allotments" ON public.hostel_allotments;
CREATE POLICY "Public select hostel_allotments" ON public.hostel_allotments FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public insert hostel_allotments" ON public.hostel_allotments;
CREATE POLICY "Public insert hostel_allotments" ON public.hostel_allotments FOR INSERT WITH CHECK (true);
DROP POLICY IF EXISTS "Public update hostel_allotments" ON public.hostel_allotments;
CREATE POLICY "Public update hostel_allotments" ON public.hostel_allotments FOR UPDATE USING (true);

-- 5. HOSTEL MAINTENANCE & COMPLAINTS TABLE
CREATE TABLE IF NOT EXISTS public.hostel_maintenance_tickets (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
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

ALTER TABLE public.hostel_maintenance_tickets ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public select hostel_maintenance_tickets" ON public.hostel_maintenance_tickets;
CREATE POLICY "Public select hostel_maintenance_tickets" ON public.hostel_maintenance_tickets FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public insert hostel_maintenance_tickets" ON public.hostel_maintenance_tickets;
CREATE POLICY "Public insert hostel_maintenance_tickets" ON public.hostel_maintenance_tickets FOR INSERT WITH CHECK (true);
DROP POLICY IF EXISTS "Public update hostel_maintenance_tickets" ON public.hostel_maintenance_tickets;
CREATE POLICY "Public update hostel_maintenance_tickets" ON public.hostel_maintenance_tickets FOR UPDATE USING (true);

-- 6. INDIVIDUAL & TARGETED STUDENT NOTICES TABLE
CREATE TABLE IF NOT EXISTS public.individual_notices (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
    notice_id TEXT UNIQUE NOT NULL,
    recipient_student_id TEXT NOT NULL,
    recipient_name TEXT NOT NULL,
    sender_title TEXT NOT NULL DEFAULT 'Office of the Dean',
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    priority TEXT NOT NULL DEFAULT 'normal',
    category TEXT NOT NULL DEFAULT 'Academic & Disciplinary',
    is_read BOOLEAN NOT NULL DEFAULT FALSE,
    read_at TIMESTAMPTZ,
    is_acknowledged BOOLEAN NOT NULL DEFAULT FALSE,
    acknowledged_at TIMESTAMPTZ,
    scheduled_for TIMESTAMPTZ,
    publication_status TEXT NOT NULL DEFAULT 'published',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_individual_notices_student ON public.individual_notices (recipient_student_id);

ALTER TABLE public.individual_notices ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public select individual_notices" ON public.individual_notices;
CREATE POLICY "Public select individual_notices" ON public.individual_notices FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public insert individual_notices" ON public.individual_notices;
CREATE POLICY "Public insert individual_notices" ON public.individual_notices FOR INSERT WITH CHECK (true);
DROP POLICY IF EXISTS "Public update individual_notices" ON public.individual_notices;
CREATE POLICY "Public update individual_notices" ON public.individual_notices FOR UPDATE USING (true);

-- 7. AUDIT LOGS TABLE
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
    actor_name TEXT NOT NULL DEFAULT 'Dean DRS',
    actor_role TEXT NOT NULL DEFAULT 'Dean of Academic Affairs',
    action_type TEXT NOT NULL,
    target_entity TEXT NOT NULL,
    target_id TEXT NOT NULL,
    details JSONB NOT NULL DEFAULT '{}'::jsonb,
    ip_address TEXT DEFAULT '127.0.0.1',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public select audit_logs" ON public.audit_logs;
CREATE POLICY "Public select audit_logs" ON public.audit_logs FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public insert audit_logs" ON public.audit_logs;
CREATE POLICY "Public insert audit_logs" ON public.audit_logs FOR INSERT WITH CHECK (true);

-- 8. CAMPUS ACTION CENTER ITEMS TABLE
CREATE TABLE IF NOT EXISTS public.action_center_items (
    id TEXT PRIMARY KEY DEFAULT (gen_random_uuid())::text,
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

ALTER TABLE public.action_center_items ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public select action_center_items" ON public.action_center_items;
CREATE POLICY "Public select action_center_items" ON public.action_center_items FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public insert action_center_items" ON public.action_center_items;
CREATE POLICY "Public insert action_center_items" ON public.action_center_items FOR INSERT WITH CHECK (true);
DROP POLICY IF EXISTS "Public update action_center_items" ON public.action_center_items;
CREATE POLICY "Public update action_center_items" ON public.action_center_items FOR UPDATE USING (true);
