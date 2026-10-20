-- ====================================================================
-- CampusIQ — Complete Real-World Production Database Schema & RLS
-- PostgreSQL 14+ / Supabase PostgreSQL Specification
-- ====================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- --------------------------------------------------------------------
-- 1. PROFILES (Extends Supabase auth.users or standalone accounts)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
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
    role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'faculty', 'admin')),
    avatar_url TEXT,
    notification_prefs JSONB DEFAULT '{"email": true, "sms": false, "in_app": true, "exam_alerts": true, "attendance_alerts": true}',
    privacy_settings JSONB DEFAULT '{"show_email": false, "show_phone": false, "allow_peer_connect": true}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_student_id ON profiles(student_id);
CREATE INDEX IF NOT EXISTS idx_profiles_phone ON profiles(phone_number);

-- --------------------------------------------------------------------
-- 2. PHONE OTP VERIFICATIONS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS phone_verifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    phone_number TEXT NOT NULL,
    country_code TEXT NOT NULL DEFAULT '+91',
    otp_hash TEXT NOT NULL,
    attempts INTEGER NOT NULL DEFAULT 0,
    expires_at TIMESTAMPTZ NOT NULL,
    cooldown_until TIMESTAMPTZ NOT NULL,
    verified BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_phone_verif_num ON phone_verifications(phone_number);

-- --------------------------------------------------------------------
-- 3. SUBJECTS / COURSES
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS subjects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'CORE' CHECK (category IN ('CORE', 'PRACTICAL', 'ELECTIVE', 'WORKSHOP')),
    credits INTEGER NOT NULL DEFAULT 3 CHECK (credits > 0),
    instructor TEXT NOT NULL,
    room TEXT NOT NULL,
    schedule_time TEXT NOT NULL,
    schedule_days TEXT NOT NULL DEFAULT 'Mon,Wed,Fri',
    syllabus_summary TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_subjects_code ON subjects(code);

-- --------------------------------------------------------------------
-- 4. ENROLLMENTS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS enrollments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    enrolled_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(student_id, subject_id)
);

CREATE INDEX IF NOT EXISTS idx_enrollments_student ON enrollments(student_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_subject ON enrollments(subject_id);

-- --------------------------------------------------------------------
-- 5. ATTENDANCE RECORDS (Official Institutional Log)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS attendance_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('present', 'absent', 'late', 'excused')),
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(student_id, subject_id, date)
);

CREATE INDEX IF NOT EXISTS idx_attendance_student_subject ON attendance_records(student_id, subject_id);
CREATE INDEX IF NOT EXISTS idx_attendance_date ON attendance_records(date);

-- --------------------------------------------------------------------
-- 6. ACADEMIC RESULTS & MARKSHEETS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS academic_results (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    semester TEXT NOT NULL DEFAULT 'Semester 5',
    academic_year TEXT NOT NULL DEFAULT '2025-2026',
    internal_marks NUMERIC(5,2) NOT NULL DEFAULT 0.0 CHECK (internal_marks >= 0 AND internal_marks <= 40),
    external_marks NUMERIC(5,2) NOT NULL DEFAULT 0.0 CHECK (external_marks >= 0 AND external_marks <= 60),
    total_marks NUMERIC(5,2) GENERATED ALWAYS AS (internal_marks + external_marks) STORED,
    letter_grade TEXT NOT NULL DEFAULT 'P',
    grade_point NUMERIC(4,2) NOT NULL DEFAULT 6.00 CHECK (grade_point >= 0 AND grade_point <= 10.0),
    result_status TEXT NOT NULL DEFAULT 'published' CHECK (result_status IN ('published', 'provisional', 'pending', 'withheld')),
    pass_fail TEXT NOT NULL DEFAULT 'PASS' CHECK (pass_fail IN ('PASS', 'FAIL')),
    verification_ref TEXT UNIQUE NOT NULL,
    published_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
    published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(student_id, subject_id, semester)
);

CREATE INDEX IF NOT EXISTS idx_results_student ON academic_results(student_id);
CREATE INDEX IF NOT EXISTS idx_results_semester ON academic_results(student_id, semester);
CREATE INDEX IF NOT EXISTS idx_results_ref ON academic_results(verification_ref);

-- --------------------------------------------------------------------
-- 7. ASSIGNMENTS & COURSEWORK
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS assignments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    subject_id UUID REFERENCES subjects(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    description TEXT,
    due_date TIMESTAMPTZ NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed')),
    priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    feedback TEXT,
    score NUMERIC(5,2),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_assignments_student ON assignments(student_id);
CREATE INDEX IF NOT EXISTS idx_assignments_due_date ON assignments(due_date);

-- --------------------------------------------------------------------
-- 8. COURSE RESOURCES (Notes, syllabus, papers)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS course_resources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    resource_type TEXT NOT NULL DEFAULT 'notes' CHECK (resource_type IN ('notes', 'syllabus', 'slides', 'lab_manual', 'past_paper')),
    link_url TEXT,
    content_text TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_resources_subject ON course_resources(subject_id);

-- --------------------------------------------------------------------
-- 9. EVENTS & REGISTRATIONS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'tech' CHECK (category IN ('tech', 'community', 'workshop', 'cultural', 'career')),
    event_date DATE NOT NULL,
    event_time TEXT NOT NULL,
    location TEXT NOT NULL,
    featured BOOLEAN NOT NULL DEFAULT FALSE,
    capacity INTEGER NOT NULL DEFAULT 100 CHECK (capacity > 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS event_registrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    registered_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    status TEXT NOT NULL DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'waitlisted', 'cancelled')),
    UNIQUE(event_id, student_id)
);

CREATE INDEX IF NOT EXISTS idx_event_reg_event ON event_registrations(event_id);
CREATE INDEX IF NOT EXISTS idx_event_reg_student ON event_registrations(student_id);

-- --------------------------------------------------------------------
-- 10. FACILITIES & DESK RESERVATIONS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS facilities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    category TEXT NOT NULL CHECK (category IN ('study', 'social', 'lab', 'sports')),
    location TEXT NOT NULL,
    operating_hours TEXT NOT NULL,
    description TEXT NOT NULL,
    total_capacity INTEGER NOT NULL CHECK (total_capacity > 0),
    occupied_count INTEGER NOT NULL DEFAULT 0 CHECK (occupied_count >= 0),
    status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'busy', 'maintenance', 'closed')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS facility_bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    facility_id UUID NOT NULL REFERENCES facilities(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    booking_date DATE NOT NULL,
    time_slot TEXT NOT NULL,
    purpose TEXT DEFAULT 'Study session',
    status TEXT NOT NULL DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'cancelled', 'completed')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- --------------------------------------------------------------------
-- 11. SUPPORT TICKETS & MESSAGES
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS support_tickets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ticket_number TEXT UNIQUE NOT NULL,
    student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    subject TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('technical', 'academic', 'results', 'attendance', 'facilities', 'general')),
    priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'awaiting_student', 'resolved', 'closed')),
    assigned_staff_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_tickets_student ON support_tickets(student_id);
CREATE INDEX IF NOT EXISTS idx_tickets_status ON support_tickets(status);

CREATE TABLE IF NOT EXISTS ticket_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ticket_id UUID NOT NULL REFERENCES support_tickets(id) ON DELETE CASCADE,
    sender_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    sender_role TEXT NOT NULL CHECK (sender_role IN ('student', 'staff', 'admin')),
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ticket_msgs_ticket ON ticket_messages(ticket_id);

-- --------------------------------------------------------------------
-- 12. NOTIFICATIONS & BULLETINS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'campus' CHECK (category IN ('result', 'exam', 'assignment', 'attendance', 'campus', 'ticket', 'security')),
    is_read BOOLEAN NOT NULL DEFAULT FALSE,
    link_target TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_notif_user ON notifications(user_id, is_read);

CREATE TABLE IF NOT EXISTS announcements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'campus' CHECK (category IN ('academic', 'campus', 'alert', 'facility')),
    priority TEXT NOT NULL DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'urgent')),
    author_role TEXT NOT NULL DEFAULT 'Campus Administration',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS faqs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category TEXT NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    is_published BOOLEAN NOT NULL DEFAULT TRUE,
    order_index INTEGER NOT NULL DEFAULT 0
);

-- --------------------------------------------------------------------
-- 13. AUDIT LOGS (Operational Accountability)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    actor_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    actor_email TEXT NOT NULL,
    action TEXT NOT NULL,
    target_entity TEXT NOT NULL,
    target_id TEXT,
    details JSONB,
    ip_address TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_created ON audit_logs(created_at DESC);

-- --------------------------------------------------------------------
-- 14. AI CONVERSATIONS & CHAT HISTORY
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS ai_conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL DEFAULT 'Academic Assistant Chat',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ai_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID REFERENCES ai_conversations(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    sender TEXT NOT NULL CHECK (sender IN ('user', 'assistant', 'system')),
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ai_student ON ai_messages(student_id);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================

-- 1. Profiles: Users can read and edit their profiles.
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Profiles read own" ON profiles;
DROP POLICY IF EXISTS "Profiles update own" ON profiles;
CREATE POLICY "Public select profiles" ON profiles FOR SELECT USING (true);
CREATE POLICY "Public insert profiles" ON profiles FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update profiles" ON profiles FOR UPDATE USING (true);
CREATE POLICY "Public delete profiles" ON profiles FOR DELETE USING (true);

-- 2. Results: Students can view only their own published or provisional results.
ALTER TABLE academic_results ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students view own results" ON academic_results FOR SELECT
    USING (auth.uid() = student_id AND result_status IN ('published', 'provisional'));
CREATE POLICY "Admins manage all results" ON academic_results FOR ALL
    USING (EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role IN ('admin', 'faculty')));

-- 3. Attendance: Students view only their own records; only staff can insert/update.
ALTER TABLE attendance_records ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students view own attendance" ON attendance_records FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Staff manage attendance" ON attendance_records FOR ALL
    USING (EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role IN ('admin', 'faculty')));

-- 4. Support Tickets: Students view and manage only their own tickets.
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students view own tickets" ON support_tickets FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Students create tickets" ON support_tickets FOR INSERT WITH CHECK (auth.uid() = student_id);
CREATE POLICY "Staff manage tickets" ON support_tickets FOR ALL
    USING (EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role IN ('admin', 'faculty')));

ALTER TABLE ticket_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users view messages for their tickets" ON ticket_messages FOR SELECT
    USING (EXISTS (SELECT 1 FROM support_tickets WHERE support_tickets.id = ticket_messages.ticket_id AND (support_tickets.student_id = auth.uid() OR EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role IN ('admin', 'faculty')))));

-- 5. Notifications: Strictly private to user.
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own notifications" ON notifications FOR ALL USING (auth.uid() = user_id);

-- 6. Assignments: Strictly private to student.
ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students manage own assignments" ON assignments FOR ALL USING (auth.uid() = student_id);

-- --------------------------------------------------------------------
-- 15. STUDY PLANS & SESSIONS (AI Study Planner)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS study_plans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    exam_target TEXT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    daily_target_hours REAL NOT NULL DEFAULT 3.0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_study_plans_student ON study_plans(student_id);

CREATE TABLE IF NOT EXISTS study_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    plan_id UUID REFERENCES study_plans(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    subject_name TEXT NOT NULL,
    topic TEXT NOT NULL,
    session_date DATE NOT NULL,
    start_time TEXT NOT NULL,
    duration_minutes INTEGER NOT NULL DEFAULT 60,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'rescheduled', 'missed')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_study_sessions_student ON study_sessions(student_id);

ALTER TABLE study_plans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students manage own study plans" ON study_plans FOR ALL USING (auth.uid() = student_id);

ALTER TABLE study_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students manage own study sessions" ON study_sessions FOR ALL USING (auth.uid() = student_id);

-- --------------------------------------------------------------------
-- 16. CAREER ROADMAP & MILESTONES (Skill and Career Roadmap)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS career_goals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('skill', 'internship', 'project', 'certification', 'academic')),
    target_date DATE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_career_goals_student ON career_goals(student_id);

CREATE TABLE IF NOT EXISTS career_milestones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    goal_id UUID NOT NULL REFERENCES career_goals(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_career_milestones_goal ON career_milestones(goal_id);

ALTER TABLE career_goals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students manage own career goals" ON career_goals FOR ALL USING (auth.uid() = student_id);

ALTER TABLE career_milestones ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students manage own milestones" ON career_milestones FOR ALL
    USING (EXISTS (SELECT 1 FROM career_goals WHERE career_goals.id = career_milestones.goal_id AND career_goals.student_id = auth.uid()));

-- --------------------------------------------------------------------
-- 17. CAMPUS NAVIGATOR DIRECTORY
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS campus_directory (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('academic', 'service', 'library', 'lab', 'admin', 'medical', 'sports')),
    building TEXT NOT NULL,
    floor_room TEXT NOT NULL,
    operating_hours TEXT NOT NULL,
    contact_email TEXT,
    contact_phone TEXT,
    head_of_service TEXT,
    walking_directions TEXT,
    emergency_contact BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_campus_directory_cat ON campus_directory(category);

ALTER TABLE campus_directory ENABLE ROW LEVEL SECURITY;
CREATE POLICY "All authenticated users view directory" ON campus_directory FOR SELECT USING (true);
CREATE POLICY "Staff manage directory" ON campus_directory FOR ALL
    USING (EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role IN ('admin', 'faculty')));

-- --------------------------------------------------------------------
-- 18. CAMPUS NOTICE INTELLIGENCE (Saves & Reads)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS saved_notices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    announcement_id UUID NOT NULL REFERENCES announcements(id) ON DELETE CASCADE,
    saved_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(student_id, announcement_id)
);
CREATE INDEX IF NOT EXISTS idx_saved_notices_student ON saved_notices(student_id);

CREATE TABLE IF NOT EXISTS notice_reads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    announcement_id UUID NOT NULL REFERENCES announcements(id) ON DELETE CASCADE,
    read_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(student_id, announcement_id)
);
CREATE INDEX IF NOT EXISTS idx_notice_reads_student ON notice_reads(student_id);

ALTER TABLE saved_notices ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students manage saved notices" ON saved_notices FOR ALL USING (auth.uid() = student_id);

ALTER TABLE notice_reads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students manage notice reads" ON notice_reads FOR ALL USING (auth.uid() = student_id);

-- --------------------------------------------------------------------
-- 19. RECENT USER ACTIVITIES
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS recent_activities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    action_type TEXT NOT NULL,
    description TEXT NOT NULL,
    icon TEXT DEFAULT 'activity',
    target_link TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_recent_activities_student ON recent_activities(student_id);

ALTER TABLE recent_activities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students view own activities" ON recent_activities FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Students insert activities" ON recent_activities FOR INSERT WITH CHECK (auth.uid() = student_id);

