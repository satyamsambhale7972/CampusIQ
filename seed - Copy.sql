-- ====================================================================
-- CampusIQ — Development & Test Seed Data (Do NOT run in Production)
-- ====================================================================

-- 1. Insert Initial Subjects
INSERT INTO subjects (id, code, name, category, credits, instructor, room, schedule_time, schedule_days, syllabus_summary)
VALUES 
    ('11111111-1111-1111-1111-111111111101', 'CS301', 'Data Structures & Algorithms', 'CORE', 4, 'Dr. Sharma', 'Room A-204', '09:00 AM – 10:00 AM', 'Mon,Wed,Fri', 'Arrays, Linked Lists, Trees, Graphs, Sorting & Searching, Dynamic Programming.'),
    ('11111111-1111-1111-1111-111111111102', 'CS302', 'Web Development', 'PRACTICAL', 3, 'Prof. Mehta', 'Lab C-102', '10:15 AM – 11:45 AM', 'Mon,Thu', 'HTML5, CSS3, Modern JavaScript, RESTful APIs, Single Page Applications, Full-Stack Architecture.'),
    ('11111111-1111-1111-1111-111111111103', 'CS303', 'Database Management Systems', 'CORE', 4, 'Dr. Patil', 'Room B-110', '12:00 PM – 01:00 PM', 'Tue,Thu,Fri', 'Relational Algebra, SQL, Normalization, ACID Transactions, Indexing, and Query Optimization.'),
    ('11111111-1111-1111-1111-111111111104', 'CS304', 'AI Project Studio', 'WORKSHOP', 2, 'CampusIQ Team', 'Innovation Hub', '02:00 PM – 03:30 PM', 'Wed,Fri', 'Applied Machine Learning, Prompt Engineering, Retrieval-Augmented Generation, and Autonomous Agents.')
ON CONFLICT (code) DO NOTHING;

-- 2. Insert Course Resources
INSERT INTO course_resources (subject_id, title, resource_type, link_url, content_text)
VALUES
    ('11111111-1111-1111-1111-111111111101', 'DSA Lecture Notes: Graph Algorithms & Dijkstra', 'notes', 'https://campusiq.internal/resources/dsa-graphs.pdf', 'Complete overview of BFS, DFS, Dijkstra shortest path algorithm and complexity proofs.'),
    ('11111111-1111-1111-1111-111111111101', 'Mid-Term Review & Past Examination Papers', 'past_paper', 'https://campusiq.internal/resources/dsa-midterm-papers.zip', 'Collection of previous three academic year mid-term exam papers and solutions.'),
    ('11111111-1111-1111-1111-111111111102', 'Web Dev Lab Manual: REST API Design & Client Architecture', 'lab_manual', 'https://campusiq.internal/resources/webdev-lab-manual.pdf', 'Step-by-step practical guide to developing authenticated REST APIs with token storage.'),
    ('11111111-1111-1111-1111-111111111103', 'DBMS Cheatsheet: Normal Forms & SQL Tuning', 'notes', 'https://campusiq.internal/resources/dbms-sql-cheatsheet.pdf', 'Quick reference for 1NF through BCNF and query execution plan analysis.');

-- 3. Insert Events
INSERT INTO events (id, title, description, category, event_date, event_time, location, featured, capacity)
VALUES
    ('22222222-2222-2222-2222-222222222201', 'Innovation Day 2026', 'Showcase student ideas, meet startup creators, discover campus research, and pitch prototypes to industry leaders.', 'tech', '2026-10-22', '10:00 AM – 05:00 PM', 'Innovation Hub & Main Auditorium', TRUE, 250),
    ('22222222-2222-2222-2222-222222222202', 'Campus Hack Night', 'Bring an idea, find teammates, and build something functional in a fast-paced 12-hour building session.', 'tech', '2026-10-18', '05:00 PM – 05:00 AM', 'Lab C-102', FALSE, 60),
    ('22222222-2222-2222-2222-222222222203', 'Mindful Campus Hour', 'Guided mindfulness, ergonomic posture reset, and cognitive relaxation session for busy students.', 'community', '2026-10-20', '04:00 PM – 05:00 PM', 'Reflection Garden', FALSE, 40),
    ('22222222-2222-2222-2222-222222222204', 'AI Project Showcase', 'Explore live student engineering experiments, neural search systems, and agent workflows with hands-on demos.', 'workshop', '2026-10-25', '11:00 AM – 02:00 PM', 'Hall B, Engineering Block', FALSE, 120)
ON CONFLICT DO NOTHING;

-- 4. Insert Facilities
INSERT INTO facilities (id, name, category, location, operating_hours, description, total_capacity, occupied_count, status)
VALUES
    ('33333333-3333-3333-3333-333333333301', 'Central Library', 'study', 'Block A · Floor 2', '08:00 AM – 08:00 PM', 'Silent study zone with high-speed Wi-Fi, research desks, and academic book stacks.', 16, 4, 'open'),
    ('33333333-3333-3333-3333-333333333302', 'Innovation Hub', 'study', 'Block C · Ground Floor', '09:00 AM – 06:00 PM', 'Collaborative maker space equipped with high-performance workstations and hardware tools.', 10, 3, 'open'),
    ('33333333-3333-3333-3333-333333333303', 'Student Commons', 'social', 'Main Building · Level 1', '08:00 AM – 07:00 PM', 'Casual cafe setting with lounge seating for group discussions and relaxation.', 8, 5, 'busy'),
    ('33333333-3333-3333-3333-333333333304', 'Reflection Garden', 'social', 'East Courtyard', 'Open Campus Hours', 'Peaceful outdoor shaded seating surrounded by greenery between classes.', 12, 4, 'open')
ON CONFLICT (name) DO UPDATE SET
    total_capacity = EXCLUDED.total_capacity,
    occupied_count = EXCLUDED.occupied_count,
    status = EXCLUDED.status;

-- 5. Insert Announcements
INSERT INTO announcements (title, content, category, priority, author_role)
VALUES
    ('Mid-Semester Examination Schedule Announced', 'The mid-term examination timetable for CS Year 3 has been released. Check your respective subject portals for syllabus cutoff details.', 'academic', 'urgent', 'Office of Academic Affairs'),
    ('Library Extended Hours for Final Projects', 'Central Library silent study zones will remain open until 10:00 PM starting Monday through Friday during project review weeks.', 'facility', 'normal', 'Campus Facilities Team'),
    ('Innovation Day 2026 Registration Open', 'Registrations for project display booths and student attendee passes are now open via the Campus Events tab.', 'campus', 'normal', 'Student Innovation Council');
