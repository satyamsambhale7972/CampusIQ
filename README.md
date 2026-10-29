# CAMPUSIQ — Institutional University Student Portal & CAMPUSAI

A commercial-grade, authentic university student information portal designed with institutional elegance, featuring an integrated AI Academic Copilot (**CAMPUSAI**), strict individual student data privacy, and live Supabase cloud connectivity.

---

## 🏛️ System Highlights & Architecture

### 1. Strict Individual Student Privacy (Zero Data Leakage)
- **Private Institutional Gate**: No public directory, student lists, or data leaks.
- **Roll Number & Password Authentication**: Only the authenticated student's unique attendance, CGPA, courses, and timetable records are decrypted and rendered into the active session.
- **120+ Unique Student Registry**: Distinct attendance records (from critical shortage alerts to distinction honors) pre-seeded and synced.

### 2. CAMPUSAI — 24/7 Academic AI Copilot
- Accessible via sidebar, header launcher, floating widget, or shortcut (`Ctrl + K`).
- Connected directly to enrolled courses, credits, faculty office hours, unit-by-unit exam blueprints, and high-yield questions.
- Explains the university statutory 75% attendance rule, calculates safe bunks, and guides students through grievance escalation.

### 3. Official Attendance & Statutory Compliance Ledger
- **Restricted Access**: In compliance with university statutory regulations, student self-marking is disabled. Attendance is authenticated via faculty biometric scanners and official lecture registers.
- **Statutory 75% Calculation**:
  - If $\ge 75\%$: Displays safe status with exact number of permissible safe bunks.
  - If $< 75\%$: Displays urgent shortage alert with the exact number of consecutive lectures needed to restore exam eligibility.
- **Discrepancy Resolution**: 1-click recount request connects directly to the Dean's Priority Grievance Redressal Desk.

### 4. Instant Spotlight Search Dropdown (13 University Hubs)
- Located in the top header (with keyboard shortcut `Ctrl + K` or `/`).
- Dynamically searches across:
  - **13 Core Portal Sections & Enterprise Features**
  - **Enrolled Courses & Unit Blueprints**
  - **Official Circulars & Rescheduled Exams**
  - **Campus Competitions, Hackathons & Fests**
  - **CAMPUSAI Direct Query Action**
- 1-click jumps smoothly to the desired section or opens modal dialogs without page reloads.

### 5. Fees, Tuition Dues & Scholarship Desk (New Enterprise Hub)
- **Institutional Tuition Ledger**: Comprehensive breakdown of Tuition, AI Laboratory, Digital Library, and Exam dues.
- **Download Stamped Fee Voucher**: 1-click printable official university voucher (`VCH-2026-88192`) with biometric barcode, QR clearance, and Accounts Officer countersignature.
- **Simulated Payment Gateway**: Students can simulate instant online clearing of remaining dues via UPI / NetBanking / Cards with real-time receipt generation.
- **Scholarship Disbursement Tracker**: Status of State Merit-cum-Means Fellowship with 1-click Sanction Order download.

### 6. Hostel, Campus Mess & Live E-Gatepass Hub (New Enterprise Hub)
- **Official Residence Allotment**: Hall of Residence, Wing, Room & Bed number, roommate contact, Wi-Fi credentials, and Chief Warden directory.
- **Live Verifiable E-Gatepass Generator**: Generates cryptographic turnstile QR pass with student photo, validity countdown, and digital warden approval stamp.
- **7-Day Dynamic Mess Menu**: Interactive daily schedule for Breakfast, Lunch, High Tea, and Dinner with nutritional calories, dietary badges (Pure Veg / High Protein), and interactive 1–5 star food quality rating.
- **Hostel Maintenance Service Desk**: 1-click service ticket generation (`HST-2026-XXXX`) for Wi-Fi router reboot, electrical, and plumbing repairs.

### 7. Training & Placements (T&P) / Career Radar (New Enterprise Hub)
- **Live Campus Recruitment Drives**: Super Dream and Dream hiring drives (Google India ₹32 LPA, Microsoft IDC ₹28.5 LPA, Deloitte ₹12.5 LPA, L&T ₹9.0 LPA).
- **Automated CGPA Cutoff Validation**: Validates student eligibility before applying.
- **CAMPUSAI ATS Resume Scanner**: 94% compatibility scoring with matched Fortune 500 keyword filters and LaTeX/DOCX template downloads.
- **Official Internship NOC Generator**: 1-click printable No Objection Certificate on university letterhead countersigned by the Dean of Academic Affairs.

### 8. Digital Smart Student ID Card & Biometric Credential
- Verifiable ID pass featuring dynamic gate-scanner QR code, 1D code barcode strip, student photo, blood group, emergency contact, and official university hologram seal (`OFFICIAL BIOMETRIC ID • VALID 2026-27`).
- Includes 1-click **Print Smart ID** formatted for official laminated physical credentials.

### 9. Graduation Honors & CGPA Target Forecaster
- Dynamic academic projection engine allowing students to select their graduation goal (e.g., *Dean's Honors Distinction $\ge 9.0$*, *First Class with Distinction $\ge 8.5$*).
- Instantly computes the exact SGPA required per semester across remaining terms and credit weights.

### 10. Live Campus Pulse & Facility Status
- Real-time university facility telemetry:
  - **Campus Electric Shuttle**: Live GPS route countdown and ETA.
  - **Central Library Quiet Zone**: Live capacity tracking and available study desks.
  - **Advanced AI & GPU Lab**: Available NVIDIA compute terminals for research scholars.

### 11. Institutional Priority Grievance Escalation & Direct Phone Hotlines
- Official inquiry registration with unique Ticket ID (`TKT-XXXXXX`) synced directly to Supabase `support_tickets`.
- Institutional Priority Review by the Department Head and Dean's Office.
- Emergency direct telephone lines for the Dean of Academic Affairs, Controller of Examinations, and Student Helpline.

### 12. Dual Collegiate Theme Engine (Dark & Light Modes)
- Upper-right toggle accessible on both the login gate and authenticated portal header.
- High-contrast obsidian dark palette and traditional collegiate light palette with persistent preference in `localStorage`.
- 100% responsive across smartphones, tablets, laptops, and ultra-wide displays.

### 13. Authoritative University Crest & Emblem
- Authentic heraldic university seal featuring golden laurels, academic graduation cap, open book, eternal flame torch, crossed feather quills, and the Latin motto **"VERITAS ET EXCELLENTIA"**.
- Rendered inline directly in the HTML for 100% guaranteed, rock-solid visibility across all browsers.

---

## 💻 Tech Stack
- **Frontend**: Vanilla ES6+ JavaScript, Tailwind CSS, Lucide Icons, Custom Collegiate Theme CSS.
- **Styling**: Oxford Navy (`#061122`), Cambridge Blue (`#1D4ED8`), Academic Gold (`#D97706`), Ambient Canvas Texture.
- **Backend / Database**: Supabase PostgreSQL (`profiles`, `attendance_records`, `support_tickets`).
- **Offline Reliability**: Automatic fallback to encrypted local browser storage if offline.

---

## 🚀 How to Run Locally

```bash
# 1. Navigate to the project directory
cd campusiq-college-portal

# 2. Start the local server
python -m http.server 8000
# or on Windows
py -3 server.py
```

Open your browser at: **`http://localhost:8000`**

### Instant Demo Credentials:
- **Roll No**: `252921201` (Satyam Sambhale — 84% Attendance, Dean's Honors)
- **Roll No**: `252921202` (Aarav Sharma — 68.2% Shortage Alert)
- **Password**: `student123`

---

## ☁️ Deployment
- **Vercel / Netlify**: Drag-and-drop the unzipped project folder directly into the dashboard.
- **GitHub Pages**: Push to GitHub repository and activate GitHub Pages on the `main` branch root.
