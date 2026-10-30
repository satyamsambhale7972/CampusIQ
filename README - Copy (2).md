# CAMPUSIQ & CAMPUSAI — Enterprise Autonomous University ERP System
### Modern Higher Education Governance & Collegiate Student Information Portal

CAMPUSIQ is a commercial-grade university software ecosystem featuring:
1. **Student Information System (`index.html`)**: Strict individual student data privacy, 13 collegiate modules, CAMPUSAI academic copilot, digital student smart IDs, and statutory 75% attendance compliance.
2. **Dedicated Governance Admin ERP (`admin.html`)**: Dean of Academics and Examination Controller dashboard managing **1,000 verified enrolled students** across all 4 engineering cohorts, common notice broadcasting, personal direct notices, 12-hour SLA grievance resolution, and full faculty roster.
3. **NEXORA AI Academic Assistant**: Intelligent right-side slide-over assistant answering collegiate queries, policy questions, and syllabus information.
4. **Strict Security Access Control**: Zero auto-login bypass, show/hide password toggle, blank-on-load inputs, and explicit mistake reporting.
5. **High-Contrast Dual-Theme Architecture**: Seamless toggle between pure Light Mode (`#0F172A` contrast) and obsidian Dark Mode (`#081225`).
6. **Real-Time Two-Way Cloud Sync**: Supabase integration and cross-tab storage event listeners synchronize updates instantly.

---

## 🏛️ System Architecture & Portal Access

| Portal | Entry File / URL | Primary Users | Authentication |
| :--- | :--- | :--- | :--- |
| **Student Portal** | `index.html` or `http://localhost:8000/` | Enrolled Students | Roll Number (`252921201`) + Password (`2026`) |
| **Admin ERP** | `admin.html` or `http://localhost:8000/admin.html` | Deans, Controllers, Faculty | Login Name (`campusiq`) + Password (`2026`) |

---

## 👨‍💼 Key Admin ERP Modules (`admin.html`)

1. **1,000+ Master Student Directory (All 4 Cohorts)**:
   - **First Year (FE)**: 250 Students (Semesters 1 & 2)
   - **Second Year (SE)**: 250 Students (Semesters 3 & 4)
   - **Third Year (TE)**: 250 Students (Semesters 5 & 6)
   - **Fourth Year (BE)**: 250 Students (Semesters 7 & 8)
   - Instant cohort filter pills: `All Cohorts (1,000)`, `First Year (FE)`, `Second Year (SE)`, `Third Year (TE)`, `Fourth Year (BE)`.
   - Real-time search by name, roll number, department, and branch.
   - CGPA distinction (>= 7.5) and remediation (< 7.5) filter pills.
   - Statutory 75% attendance threshold compliance filters.
   - Fee ledger filters (pending dues vs cleared).
   - In-place student 360 profile drawer and 1-click CSV master ledger export.

2. **Faculty Directory Roster**:
   - Directory of 11 departmental professors across Computer Science, AI & Data Science, IT, Mechanical, Civil, Electrical, and MBA Tech.
   - Includes faculty IDs, cabin locations, office consultation hours, and high-contrast email contacts.

3. **Notice & Broadcast Dispatch Center**:
   - Institutional circulars and urgent examination notices.
   - Personal direct notice dispatch to specific roll numbers.

4. **12-Hour SLA Grievance Desk**:
   - Live queue of student tickets with 12-hour SLA response guarantees.
   - Action remarks and resolution workflows.

5. **NEXORA AI Slide-Over Copilot**:
   - Accessible via the top header button across all modules.

---

## 🔑 Demo Authentication Credentials

### 1. Administrative Governance Access (`admin.html`):
- **Administrator Login Name**: `campusiq`
- **Security Password**: `2026`
- **Authorized Role**: Dr. Rajeshwar Sen (Dean of Academic Affairs & Controller of Examinations)

### 2. Student Information Portal Access (`index.html`):
- **Universal Student Password**: `2026` (works for all 1,000 enrolled students)
- **Satyam Sambhale** (CSE, Dean's Honors): Roll `252921201` | Password `2026`
- **Aarav Sharma** (AI&DS, Attendance Shortage Warning): Roll `252921202` | Password `2026`
- **Priya Sharma** (IT, Chancellor's Gold Medalist): Roll `252921203` | Password `2026`
- **Rohan Deshmukh** (MECH, Borderline 76.5% Attendance): Roll `252921204` | Password `2026`

---

## 🚀 Quick Start / Local Run

1. Clone or extract this repository into any folder:
   ```bash
   git clone https://github.com/<your-username>/campusiq-college-portal.git
   cd campusiq-college-portal
   ```
2. Start the local server:
   ```bash
   python server.py
   # or
   py -3 server.py
   ```
3. Open your browser:
   - **Admin Portal**: [http://localhost:8000/admin.html](http://localhost:8000/admin.html)
   - **Student Portal**: [http://localhost:8000/index.html](http://localhost:8000/index.html)

---

## 🌐 24/7 Free GitHub Pages Deployment

1. Create a public repository on GitHub (e.g. `campusiq-college-portal`).
2. Push or upload the project files.
3. Go to **Settings -> Pages**.
4. Set Source to **Deploy from a branch**, Branch to **main** (or master), and save.
5. Your portal goes live 24/7 worldwide at:
   `https://<your-username>.github.io/campusiq-college-portal/`

---

## 📄 License & Intellectual Property
&copy; 2026 CAMPUSIQ Collegiate Systems. All institutional records, UI designs, and database schemas protected.
