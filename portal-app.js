// ====================================================================
// CAMPUSIQ — Official Collegiate Portal Application Engine
// Features: Strict Student Privacy, Smart AI Academic Copilot,
// 12-Hour SLA Grievance Escalation, Exam Blueprint & Photo Upload
// ====================================================================

const CollegePortalState = {
  activeTab: "overview",
  currentDay: "Monday",
  noticeFilter: "all",
  eventFilter: "all",
  searchQuery: "",
  bookmarkedEvents: new Set(),
  chatMessages: [],
  
  // Official Institutional Circulars (Zero WhatsApp/Gmail mentions)
  notices: [
    {
      id: "not_1",
      title: "Examination Cell: Mid-Term DSA Paper Shifted to Morning Session",
      badgeType: "badge-exam",
      sourceLabel: "Controller of Examinations",
      category: "exam",
      priority: "urgent",
      date: "Oct 28, 2026",
      department: "All Engineering Departments",
      author: "Prof. S. R. Deshmukh (Exam Controller)",
      summary: "Due to state competitive exam schedule overlap, the Data Structures & Algorithms mid-term paper scheduled for Oct 30 has been shifted from 09:00 AM to 11:30 AM in Central Examination Hall A-102.",
      attachmentName: "Circular_Exam_DSA_Reschedule_2026.pdf",
      attachmentSize: "284 KB"
    },
    {
      id: "not_2",
      title: "Office of the Dean: Mandatory Capstone Mini-Project Synopsis",
      badgeType: "badge-circular",
      sourceLabel: "Dean of Academic Affairs",
      category: "academic",
      priority: "high",
      date: "Oct 27, 2026",
      department: "All Engineering Departments",
      author: "Dr. K. V. Patil (Dean Academics)",
      summary: "All 5th and 7th semester students must submit their capstone project synopsis countersigned by their faculty mentors before Friday, Nov 6 at 04:00 PM.",
      attachmentName: "Capstone_Project_Synopsis_Template_v2.docx",
      attachmentSize: "512 KB"
    },
    {
      id: "not_3",
      title: "Department Bulletin: Computing Center Lab Allotment Shift",
      badgeType: "badge-academic",
      sourceLabel: "Department Head Office",
      category: "academic",
      priority: "medium",
      date: "Oct 26, 2026",
      department: "Computer & IT Engineering",
      author: "Department Lab Coordinator",
      summary: "Hardware maintenance and gigabit switch installations in Lab C-102 require all afternoon practical sessions to be conducted in Central Computing Center Room 304.",
      attachmentName: "Lab_Allotment_Circular_Oct26.pdf",
      attachmentSize: "145 KB"
    },
    {
      id: "not_4",
      title: "Statutory Notice: Semester 5 Hall Tickets Verification Open",
      badgeType: "badge-exam",
      sourceLabel: "Registrar (Evaluation)",
      category: "exam",
      priority: "urgent",
      date: "Oct 25, 2026",
      department: "University Examination Wing",
      author: "Academic Registrar",
      summary: "Students can now download their QR-verified hall tickets containing biometric barcodes. Ensure 75% attendance criteria is satisfied to prevent hall ticket hold.",
      attachmentName: "Hall_Ticket_Download_Instructions.pdf",
      attachmentSize: "390 KB"
    },
    {
      id: "not_5",
      title: "University Notification: Diwali & Mid-Semester Recess Announced",
      badgeType: "badge-circular",
      sourceLabel: "Administrative Office",
      category: "holiday",
      priority: "normal",
      date: "Oct 24, 2026",
      department: "University Administration",
      author: "Chief Registrar",
      summary: "The institution will observe mid-semester break and Diwali recess from Monday, Nov 09 to Saturday, Nov 14, 2026. Regular academic lectures resume Nov 16.",
      attachmentName: "Academic_Holiday_Calendar_2026.pdf",
      attachmentSize: "180 KB"
    },
    {
      id: "not_6",
      title: "Placement Directorate: Google & Microsoft Campus Hiring Drive",
      badgeType: "badge-academic",
      sourceLabel: "Training & Placement Cell",
      category: "academic",
      priority: "urgent",
      date: "Oct 23, 2026",
      department: "All Final Year Cohorts",
      author: "Director (Corporate Relations)",
      summary: "Recruitment drive registrations for 2026-2027 batch are now live. Minimum CGPA threshold is 7.5 with zero active backlogs. Submit your verified profile.",
      attachmentName: "Campus_Placement_Eligibility_Matrix.pdf",
      attachmentSize: "720 KB"
    }
  ],

  // Direct Campus Events (Zero Gmail mentions)
  events: [
    {
      id: "ev_1",
      title: "HackCampus 2026: 36-Hour National AI & Web3 Hackathon",
      badgeType: "badge-event",
      sourceLabel: "Campus Innovation Council",
      category: "hackathon",
      date: "Nov 14 - 15, 2026",
      time: "09:00 AM IST onwards",
      venue: "Main University Auditorium & Innovation Hub",
      prize: "Cash Pool ₹1,50,000 + Cloud Grants",
      organizer: "CampusIQ Tech Society & ACM Student Chapter",
      description: "A premier 36-hour hackathon with tracks in Autonomous AI Agents, Healthcare Systems, and High-Performance Cloud Platforms. Mentorship by senior engineers.",
      registrationDeadline: "Nov 10, 2026"
    },
    {
      id: "ev_2",
      title: "Keynote Lecture: Frontiers of Autonomous AI & Neural Systems",
      badgeType: "badge-circular",
      sourceLabel: "Department Seminar Series",
      category: "seminar",
      date: "Nov 03, 2026",
      time: "02:30 PM – 04:30 PM",
      venue: "Sir C. V. Raman Hall (Block B)",
      prize: "Certificate of Participation + IEEE Credits",
      organizer: "Department of Computer Science & Engineering",
      description: "Distinguished guest lecture on agentic artificial intelligence, transformer architecture scaling, and production reliability with interactive demonstrations.",
      registrationDeadline: "Nov 02, 2026"
    },
    {
      id: "ev_3",
      title: "AURA 2026: Annual Inter-College Cultural Extravaganza",
      badgeType: "badge-event",
      sourceLabel: "Cultural Affairs Directorate",
      category: "cultural",
      date: "Nov 20 - 22, 2026",
      time: "05:00 PM – 10:00 PM",
      venue: "University Amphitheatre",
      prize: "Championship Trophies & Awards",
      organizer: "Student Council Directorate",
      description: "Three evenings of inter-college music band competitions, classical dance showdowns, theatrical drama, and celebrity performance night.",
      registrationDeadline: "Nov 18, 2026"
    },
    {
      id: "ev_4",
      title: "Technical Masterclass: Scalable Databases with Supabase & Postgres",
      badgeType: "badge-academic",
      sourceLabel: "Developer Student Club",
      category: "seminar",
      date: "Oct 31, 2026",
      time: "10:00 AM – 01:00 PM",
      venue: "Cloud Computing Lab 4",
      prize: "Verified Certification Badges",
      organizer: "Google Developer Student Club (GDSC)",
      description: "Hands-on engineering workshop covering relational database architecture, Row Level Security, realtime events, and client integrations.",
      registrationDeadline: "Oct 30, 2026"
    },
    {
      id: "ev_5",
      title: "Inter-Department Athletic & Football Championship",
      badgeType: "badge-event",
      sourceLabel: "Department of Physical Education",
      category: "sports",
      date: "Nov 07 - 08, 2026",
      time: "08:00 AM – 06:00 PM",
      venue: "Campus Sports Complex Grounds",
      prize: "Gold & Silver Medals + Trophy",
      organizer: "Sports Council",
      description: "Annual university sports tournament spanning football, cricket, basketball, badminton, and track athletics.",
      registrationDeadline: "Nov 05, 2026"
    }
  ],

  // Digital Library Textbooks
  libraryResources: [
    {
      id: "lib_1",
      title: "Introduction to Algorithms (CLRS) — Chapterwise Summary",
      author: "Cormen, Leiserson, Rivest, Stein",
      course: "Core Curriculum",
      type: "Reference Textbook & Summary",
      pages: "348 Pages",
      format: "PDF",
      badge: "Core Curriculum"
    },
    {
      id: "lib_2",
      title: "Database System Concepts — SQL, Normalization & ACID Transactions",
      author: "Silberschatz, Korth, Sudarshan",
      course: "Database Systems",
      type: "Faculty Lecture Handouts",
      pages: "186 Pages",
      format: "PDF",
      badge: "Exam Oriented"
    },
    {
      id: "lib_3",
      title: "Full-Stack Web Engineering with Supabase & REST Architecture Guide",
      author: "CampusIQ Academic Faculty",
      course: "Web Technologies",
      type: "Laboratory Workbook",
      pages: "120 Pages",
      format: "PDF",
      badge: "Practical Guide"
    },
    {
      id: "lib_4",
      title: "Previous 5-Year Solved University Question Papers (2021-2025)",
      author: "University Examination Board",
      course: "Semester Examination Bank",
      type: "Question Bank & Answer Keys",
      pages: "420 Pages",
      format: "PDF",
      badge: "High Demand"
    }
  ],

  // Timetable
  timetable: {
    "Monday": [
      { time: "09:00 AM – 10:00 AM", subject: "Core Foundation & Algorithms", code: "301", room: "Hall A-204", instructor: "Dr. S. R. Deshmukh", isCurrent: false },
      { time: "10:15 AM – 11:45 AM", subject: "Cloud Architectures & Web Tech", code: "302", room: "Lab C-102", instructor: "Prof. Ananya Mehta", isCurrent: true },
      { time: "12:00 PM – 01:00 PM", subject: "Database Systems & SQL Engines", code: "303", room: "Room B-110", instructor: "Dr. K. V. Patil", isCurrent: false },
      { time: "01:00 PM – 02:00 PM", subject: "Campus Lunch & Study Hour", code: "BREAK", room: "Central Cafeteria", instructor: "—", isCurrent: false },
      { time: "02:00 PM – 04:00 PM", subject: "Applied Machine Learning Studio", code: "304", room: "Innovation Hub", instructor: "Dr. R. H. Iyer", isCurrent: false }
    ],
    "Tuesday": [
      { time: "09:00 AM – 10:00 AM", subject: "Computer Networks & Cyber Systems", code: "305", room: "Hall A-108", instructor: "Prof. Vikram Joshi", isCurrent: false },
      { time: "10:15 AM – 11:15 AM", subject: "Database Systems & SQL Engines", code: "303", room: "Room B-110", instructor: "Dr. K. V. Patil", isCurrent: false },
      { time: "11:30 AM – 01:00 PM", subject: "Problem Solving Practical Lab", code: "301-P", room: "Computing Lab 2", instructor: "Dr. S. R. Deshmukh", isCurrent: false },
      { time: "02:00 PM – 03:30 PM", subject: "Technical Seminar & Presentations", code: "SEM", room: "Seminar Hall 1", instructor: "Department Guides", isCurrent: false }
    ],
    "Wednesday": [
      { time: "09:00 AM – 10:00 AM", subject: "Core Foundation & Algorithms", code: "301", room: "Hall A-204", instructor: "Dr. S. R. Deshmukh", isCurrent: false },
      { time: "10:15 AM – 11:45 AM", subject: "Applied Machine Learning Studio", code: "304", room: "Innovation Hub", instructor: "Dr. R. H. Iyer", isCurrent: false },
      { time: "12:00 PM – 01:00 PM", subject: "Computer Networks & Cyber Systems", code: "305", room: "Hall A-108", instructor: "Prof. Vikram Joshi", isCurrent: false },
      { time: "02:00 PM – 04:00 PM", subject: "Central Library Research & Reference", code: "LIB", room: "Central Library", instructor: "Faculty Guides", isCurrent: false }
    ],
    "Thursday": [
      { time: "09:00 AM – 10:30 AM", subject: "Web Development Hands-on Lab", code: "302-P", room: "Lab C-102", instructor: "Prof. Ananya Mehta", isCurrent: false },
      { time: "10:45 AM – 12:00 PM", subject: "Database Systems & SQL Engines", code: "303", room: "Room B-110", instructor: "Dr. K. V. Patil", isCurrent: false },
      { time: "01:00 PM – 02:00 PM", subject: "Lunch Break", code: "BREAK", room: "Cafeteria", instructor: "—", isCurrent: false },
      { time: "02:00 PM – 03:30 PM", subject: "Computer Networks & Cyber Systems", code: "305", room: "Hall A-108", instructor: "Prof. Vikram Joshi", isCurrent: false }
    ],
    "Friday": [
      { time: "09:00 AM – 10:00 AM", subject: "Core Foundation & Algorithms", code: "301", room: "Hall A-204", instructor: "Dr. S. R. Deshmukh", isCurrent: false },
      { time: "10:15 AM – 11:30 AM", subject: "Cloud Architectures & Web Tech", code: "302", room: "Lab C-102", instructor: "Prof. Ananya Mehta", isCurrent: false },
      { time: "11:45 AM – 01:00 PM", subject: "Machine Learning Capstone Mentoring", code: "304-P", room: "Innovation Hub", instructor: "Dr. R. H. Iyer", isCurrent: false },
      { time: "02:00 PM – 03:30 PM", subject: "Weekly Department Assembly & Club Meets", code: "ACT", room: "Auditorium", instructor: "Student Council", isCurrent: false }
    ],
    "Saturday": [
      { time: "09:30 AM – 11:30 AM", subject: "Competitive Coding Doubt Session", code: "301-TUT", room: "Hall A-204", instructor: "Dr. S. R. Deshmukh", isCurrent: false },
      { time: "11:45 AM – 01:15 PM", subject: "Open Source Hack Clinic & Peer Review", code: "PROJ", room: "Innovation Lab", instructor: "Peer Mentors", isCurrent: false }
    ]
  }
};

class CampusIQPortalController {
  constructor() {
    this.state = CollegePortalState;
    this.init();
  }

  init() {
    // 0. Initialize theme (Dark / Normal)
    this.initTheme();

    // 1. Listen for auth / session changes
    window.addEventListener("campusiq:session-changed", (e) => {
      this.checkSessionAndRender(e.detail);
    });

    // 2. Check initial session
    const current = window.CampusIQService ? window.CampusIQService.currentUser : null;
    this.checkSessionAndRender(current);

    // 3. Init AI Chat Welcome
    this.initAICopilot();

    this.setupEventListeners();
  }

  // --- Theme Management (Dark Mode & Normal Light Mode) ---
  initTheme() {
    const saved = localStorage.getItem("campusiq_theme") || "light";
    this.applyTheme(saved);
  }

  toggleTheme() {
    const isDark = document.body.classList.contains("dark-theme");
    const newTheme = isDark ? "light" : "dark";
    this.applyTheme(newTheme);
    localStorage.setItem("campusiq_theme", newTheme);
    this.showToast("Theme Switched", `Switched to ${newTheme === 'dark' ? 'Dark Mode' : 'Normal Light Mode'}.`, "info");
  }

  applyTheme(theme) {
    const isDark = theme === "dark";
    if (isDark) {
      document.body.classList.add("dark-theme");
      document.documentElement.classList.add("dark");
    } else {
      document.body.classList.remove("dark-theme");
      document.documentElement.classList.remove("dark");
    }

    // Header toggle button
    const hIcon = document.getElementById("theme-icon-header");
    const hLabel = document.getElementById("theme-label-header");
    if (hIcon) {
      hIcon.setAttribute("data-lucide", isDark ? "sun" : "moon");
    }
    if (hLabel) {
      hLabel.textContent = isDark ? "Light" : "Dark";
    }

    // Gate toggle button
    const gIcon = document.getElementById("theme-icon-gate");
    const gLabel = document.getElementById("theme-label-gate");
    if (gIcon) {
      gIcon.setAttribute("data-lucide", isDark ? "sun" : "moon");
    }
    if (gLabel) {
      gLabel.textContent = isDark ? "Light Mode" : "Dark Mode";
    }

    if (window.lucide) window.lucide.createIcons();
  }

  checkSessionAndRender(student) {
    const loginGate = document.getElementById("login-gate-screen");
    const portalApp = document.getElementById("authenticated-portal-layout");

    if (!student) {
      // Show login screen; hide private portal
      if (loginGate) loginGate.classList.remove("hidden");
      if (portalApp) portalApp.classList.add("hidden");
    } else {
      // Show portal; hide login gate
      if (loginGate) loginGate.classList.add("hidden");
      if (portalApp) portalApp.classList.remove("hidden");
      this.renderAllViewsForStudent(student);
    }

    if (window.lucide) window.lucide.createIcons();
  }

  renderAllViewsForStudent(student) {
    this.renderSidebarAndHeader(student);
    this.renderOverviewStats(student);
    this.renderTicker();
    this.renderNotices();
    this.renderEvents();
    this.renderAttendanceCalculator(student);
    this.renderTimetable(this.state.currentDay);
    this.renderLibraryResources();
    this.renderExamRadar(student);
    this.renderTicketsList();
    this.renderProfileView(student);
    this.renderFeesView(student);
    this.renderHostelView(student);
    this.renderPlacementsView(student);
    this.selectMessDay("Monday");
  }

  // --- Sidebar & Top Header ---
  renderSidebarAndHeader(student) {
    if (!student) return;

    // Sidebar
    const sideAvatar = document.getElementById("sidebar-student-avatar");
    const sideName = document.getElementById("sidebar-student-name");
    const sideRoll = document.getElementById("sidebar-student-roll");
    const sideDept = document.getElementById("sidebar-student-dept");

    if (sideAvatar) sideAvatar.src = student.avatar_url;
    if (sideName) sideName.textContent = student.full_name;
    if (sideRoll) sideRoll.textContent = `Roll: ${student.student_id}`;
    if (sideDept) sideDept.textContent = student.department;

    // Header top
    const headAvatar = document.getElementById("header-student-avatar");
    const headName = document.getElementById("header-student-name");
    const headRoll = document.getElementById("header-student-roll");
    if (headAvatar) headAvatar.src = student.avatar_url;
    if (headName) headName.textContent = student.full_name;
    if (headRoll) headRoll.textContent = `Roll: ${student.student_id}`;

    if (window.lucide) window.lucide.createIcons();
  }

  renderOverviewStats(student) {
    if (!student) return;

    let total = 0, attended = 0;
    (student.subjects || []).forEach(s => {
      total += s.total;
      attended += s.attended;
    });
    const pct = total > 0 ? ((attended / total) * 100).toFixed(1) : "0.0";
    const isSafe = parseFloat(pct) >= 75;

    const attVal = document.getElementById("stat-attendance-val");
    const attSub = document.getElementById("stat-attendance-sub");
    if (attVal) {
      attVal.textContent = `${pct}%`;
      attVal.className = `text-2xl font-black ${isSafe ? 'text-emerald-600' : 'text-red-600'}`;
    }
    if (attSub) {
      attSub.innerHTML = isSafe 
        ? `<i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600 inline mr-1"></i>Above 75% Statutory Safe Limit`
        : `<i data-lucide="alert-triangle" class="w-3.5 h-3.5 text-red-600 inline mr-1"></i>Shortage Risk: Below 75% Rule!`;
    }

    const cgpaVal = document.getElementById("stat-cgpa-val");
    if (cgpaVal) cgpaVal.textContent = student.cgpa || "8.84";

    const totalSubVal = document.getElementById("stat-total-subjects");
    if (totalSubVal) totalSubVal.textContent = (student.subjects || []).length;

    const greetingName = document.getElementById("overview-student-greeting");
    if (greetingName) greetingName.textContent = student.full_name;

    const greetingDept = document.getElementById("overview-student-dept");
    if (greetingDept) {
      greetingDept.textContent = `${student.department} &bull; Roll: ${student.student_id} &bull; ${student.year_semester}`;
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // --- Marquee Ticker ---
  renderTicker() {
    const tickerEl = document.getElementById("campus-marquee-text");
    if (!tickerEl) return;

    const items = this.state.notices.map(n => {
      const badge = n.priority === 'urgent' ? '🔴 [URGENT NOTICE]' : '🏛️ [OFFICIAL CIRCULAR]';
      return `<span class="inline-block mx-6 font-semibold text-xs tracking-wide text-slate-800">
        <strong class="${n.priority === 'urgent' ? 'text-red-700' : 'text-blue-900'}">${badge}</strong> ${n.title} (${n.date})
      </span>`;
    }).join("&bull;");

    tickerEl.innerHTML = items + "&bull;" + items;
  }

  // --- Sidebar Tab Switching ---
  switchTab(tabId) {
    this.state.activeTab = tabId;

    document.querySelectorAll(".sidebar-nav-link").forEach(link => {
      if (link.dataset.tab === tabId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    document.querySelectorAll(".tab-pane").forEach(pane => {
      if (pane.id === `tab-${tabId}`) {
        pane.classList.remove("hidden");
      } else {
        pane.classList.add("hidden");
      }
    });

    const sidebar = document.getElementById("mobile-sidebar");
    if (sidebar && !sidebar.classList.contains("-translate-x-full")) {
      sidebar.classList.add("-translate-x-full");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.lucide) window.lucide.createIcons();
  }

  toggleMobileSidebar() {
    const sidebar = document.getElementById("mobile-sidebar");
    if (sidebar) sidebar.classList.toggle("-translate-x-full");
  }

  // --- Notices ---
  setNoticeFilter(filter) {
    this.state.noticeFilter = filter;
    document.querySelectorAll(".notice-filter-btn").forEach(btn => {
      if (btn.dataset.filter === filter) {
        btn.className = "notice-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0F172A] text-amber-300 shadow-sm transition";
      } else {
        btn.className = "notice-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition";
      }
    });
    this.renderNotices();
  }

  renderNotices() {
    const listEl = document.getElementById("notices-list-container");
    const overviewListEl = document.getElementById("overview-notices-container");
    if (!listEl && !overviewListEl) return;

    let filtered = this.state.notices;
    if (this.state.noticeFilter !== "all") {
      filtered = filtered.filter(n => n.category === this.state.noticeFilter);
    }

    if (this.state.searchQuery.trim() !== "") {
      const q = this.state.searchQuery.toLowerCase();
      filtered = filtered.filter(n => 
        n.title.toLowerCase().includes(q) || 
        n.summary.toLowerCase().includes(q) || 
        n.department.toLowerCase().includes(q)
      );
    }

    const html = filtered.map(n => `
      <div class="portal-card p-5 hover:border-blue-400 transition cursor-pointer" onclick="window.Portal.openNoticeModal('${n.id}')">
        <div class="flex items-start justify-between gap-2 mb-2">
          <span class="${n.badgeType} text-[11px] px-2.5 py-1 rounded-full">
            <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> ${n.sourceLabel}
          </span>
          <span class="text-xs text-slate-500 font-mono">${n.date}</span>
        </div>
        <h3 class="text-base font-bold text-slate-900 mb-1.5 hover:text-blue-700 transition">${n.title}</h3>
        <p class="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-3 leading-relaxed">${n.summary}</p>
        <div class="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
          <div class="text-slate-500 font-medium flex items-center gap-1.5">
            <i data-lucide="user" class="w-3.5 h-3.5 text-slate-400"></i>
            <span>${n.author}</span>
          </div>
          <div class="text-blue-700 font-bold flex items-center gap-1 hover:underline">
            <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
            <span>${n.attachmentName}</span>
          </div>
        </div>
      </div>
    `).join("");

    if (listEl) listEl.innerHTML = filtered.length > 0 ? html : `<div class="p-8 text-center text-slate-500">No notices match your criteria.</div>`;
    if (overviewListEl) {
      overviewListEl.innerHTML = filtered.slice(0, 3).map(n => `
        <div class="p-3 bg-slate-50 hover:bg-blue-50/50 rounded-lg border border-slate-200 transition cursor-pointer" onclick="window.Portal.openNoticeModal('${n.id}')">
          <div class="flex items-center justify-between text-[11px] mb-1">
            <span class="font-bold text-blue-800">${n.sourceLabel}</span>
            <span class="text-slate-500">${n.date}</span>
          </div>
          <h4 class="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">${n.title}</h4>
          <p class="text-[12px] text-slate-600 line-clamp-1 mt-0.5">${n.summary}</p>
        </div>
      `).join("");
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // --- Events ---
  setEventFilter(filter) {
    this.state.eventFilter = filter;
    document.querySelectorAll(".event-filter-btn").forEach(btn => {
      if (btn.dataset.filter === filter) {
        btn.className = "event-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0F172A] text-amber-300 shadow-sm transition";
      } else {
        btn.className = "event-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition";
      }
    });
    this.renderEvents();
  }

  renderEvents() {
    const listEl = document.getElementById("events-list-container");
    const overviewEventsEl = document.getElementById("overview-events-container");
    if (!listEl && !overviewEventsEl) return;

    let filtered = this.state.events;
    if (this.state.eventFilter !== "all") {
      filtered = filtered.filter(e => e.category === this.state.eventFilter);
    }

    if (this.state.searchQuery.trim() !== "") {
      const q = this.state.searchQuery.toLowerCase();
      filtered = filtered.filter(e => 
        e.title.toLowerCase().includes(q) || 
        e.description.toLowerCase().includes(q) || 
        e.venue.toLowerCase().includes(q)
      );
    }

    const html = filtered.map(ev => {
      const isSaved = this.state.bookmarkedEvents.has(ev.id);
      return `
        <div class="portal-card p-5 flex flex-col justify-between hover:border-amber-400 transition">
          <div>
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="${ev.badgeType} text-[11px] px-2.5 py-1 rounded-full">
                <i data-lucide="award" class="w-3.5 h-3.5"></i> ${ev.sourceLabel}
              </span>
              <button onclick="event.stopPropagation(); window.Portal.toggleBookmarkEvent('${ev.id}')" class="text-slate-400 hover:text-amber-500 transition p-1" title="Save to schedule">
                <i data-lucide="${isSaved ? 'bookmark-check' : 'bookmark'}" class="w-4 h-4 ${isSaved ? 'text-amber-500 fill-amber-500' : ''}"></i>
              </button>
            </div>
            <h3 class="text-base font-bold text-slate-900 mb-2 leading-snug cursor-pointer hover:text-blue-700 transition" onclick="window.Portal.openEventModal('${ev.id}')">${ev.title}</h3>
            <p class="text-xs sm:text-sm text-slate-600 mb-3 line-clamp-2 leading-relaxed">${ev.description}</p>
            <div class="space-y-1 text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 mb-3">
              <div class="flex items-center gap-2">
                <i data-lucide="calendar" class="w-3.5 h-3.5 text-blue-600"></i>
                <span class="font-semibold text-slate-900">${ev.date} (${ev.time})</span>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-600"></i>
                <span>${ev.venue}</span>
              </div>
              <div class="flex items-center gap-2 text-amber-800 font-bold">
                <i data-lucide="gift" class="w-3.5 h-3.5"></i>
                <span>${ev.prize}</span>
              </div>
            </div>
          </div>
          <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span class="text-[11px] text-slate-500">Deadline: <strong>${ev.registrationDeadline}</strong></span>
            <button onclick="window.Portal.openEventModal('${ev.id}')" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0F172A] hover:bg-blue-900 text-amber-300 transition flex items-center gap-1.5 shadow-sm">
              <span>View &amp; Register</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-amber-400"></i>
            </button>
          </div>
        </div>
      `;
    }).join("");

    if (listEl) listEl.innerHTML = filtered.length > 0 ? html : `<div class="p-8 text-center text-slate-500">No events found.</div>`;
    if (overviewEventsEl) {
      overviewEventsEl.innerHTML = filtered.slice(0, 2).map(ev => `
        <div class="p-3 bg-slate-50 hover:bg-amber-50/50 rounded-lg border border-slate-200 transition cursor-pointer" onclick="window.Portal.openEventModal('${ev.id}')">
          <div class="flex items-center justify-between text-[11px] mb-1">
            <span class="font-bold text-amber-800">${ev.sourceLabel}</span>
            <span class="text-slate-500">${ev.date}</span>
          </div>
          <h4 class="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">${ev.title}</h4>
          <p class="text-[12px] text-slate-600 line-clamp-1 mt-0.5">${ev.venue}</p>
        </div>
      `).join("");
    }

    if (window.lucide) window.lucide.createIcons();
  }

  toggleBookmarkEvent(eventId) {
    if (this.state.bookmarkedEvents.has(eventId)) {
      this.state.bookmarkedEvents.delete(eventId);
      this.showToast("Event Removed", "Removed event from your saved schedule.", "info");
    } else {
      this.state.bookmarkedEvents.add(eventId);
      this.showToast("Event Bookmarked", "Added to your personal calendar!", "success");
    }
    this.renderEvents();
  }

  // --- Attendance Analytics ---
  renderAttendanceCalculator(student) {
    const container = document.getElementById("attendance-subjects-container");
    if (!container || !student || !student.subjects) return;

    const html = student.subjects.map(s => {
      const pct = s.total > 0 ? ((s.attended / s.total) * 100).toFixed(1) : "0.0";
      const pctNum = parseFloat(pct);

      let statusColor = "bg-emerald-500";
      let statusTextColor = "text-emerald-700";
      let statusBg = "bg-emerald-50 border-emerald-200";
      let statusLabel = "Above Safe 75% Limit";
      let guidanceMessage = "";

      if (pctNum >= 75) {
        const allowedBunks = Math.floor((s.attended - 0.75 * s.total) / 0.75);
        guidanceMessage = allowedBunks > 0 
          ? `Safe! You can miss up to <strong>${allowedBunks}</strong> lecture(s) without falling below 75%.`
          : `You are exactly at 75%. Attend the next class to maintain compliance!`;
      } else {
        statusColor = pctNum >= 65 ? "bg-amber-500" : "bg-red-500";
        statusTextColor = pctNum >= 65 ? "text-amber-800" : "text-red-700";
        statusBg = pctNum >= 65 ? "bg-amber-50 border-amber-200" : "bg-red-50 border-red-200";
        statusLabel = pctNum >= 65 ? "Warning: Shortage Risk" : "Critical: Below 75% Threshold";
        
        const needed = Math.ceil((0.75 * s.total - s.attended) / 0.25);
        guidanceMessage = `Need to attend the next <strong>${needed > 0 ? needed : 1}</strong> consecutive lecture(s) to reach 75%!`;
      }

      return `
        <div class="portal-card p-5 border-l-4 ${pctNum >= 75 ? 'border-l-emerald-600' : 'border-l-red-600'}">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200">${s.code}</span>
                <span class="text-xs text-slate-500 font-medium">${s.instructor} &bull; ${s.room}</span>
              </div>
              <h3 class="text-base font-bold text-slate-900 mt-1">${s.name}</h3>
            </div>

            <div class="flex items-center gap-3">
              <div class="text-right">
                <div class="text-2xl font-black ${statusTextColor}">${pct}%</div>
                <div class="text-[11px] text-slate-500 font-medium">${s.attended} of ${s.total} attended</div>
              </div>
              <span class="text-xs px-2.5 py-1 rounded-full border ${statusBg} ${statusTextColor} font-semibold hidden md:inline-block">
                ${statusLabel}
              </span>
            </div>
          </div>

          <div class="mb-3">
            <div class="attendance-meter-wrap">
              <div class="attendance-meter-bar ${statusColor}" style="width: ${Math.min(pctNum, 100)}%;"></div>
              <div class="attendance-75-marker" title="75% Regulatory Requirement"></div>
            </div>
            <div class="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>0%</span>
              <span class="font-bold text-slate-800">75% Statutory Target</span>
              <span>100%</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
            <div class="text-slate-700 flex items-center gap-1.5">
              <i data-lucide="info" class="w-4 h-4 text-slate-500 flex-shrink-0"></i>
              <span>${guidanceMessage}</span>
            </div>

            <div class="flex items-center gap-2 flex-shrink-0">
              <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>Faculty Ledger Verified</span>
              </div>
              <button onclick="window.Portal.reportAttendanceDiscrepancy('${s.name}', '${s.instructor}', '${s.cabin || 'Faculty Block A'}', '${s.office_hours || 'Mon/Wed 3 PM'}')" class="px-3 py-1.5 rounded-lg bg-[#0F172A] hover:bg-blue-900 text-amber-300 font-bold transition flex items-center gap-1 shadow-sm text-xs">
                <i data-lucide="help-circle" class="w-3.5 h-3.5"></i>
                <span>Recount / Discrepancy</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    container.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
  }

  reportAttendanceDiscrepancy(subjectName, instructor, cabin, officeHours) {
    this.switchTab("ai-copilot");
    const q = `I noticed an attendance discrepancy in ${subjectName} with ${instructor}. Where is their cabin (${cabin}) and what are their consultation office hours (${officeHours})?`;
    this.sendCopilotQuery(q);
  }

  async handleAttendanceClick(subjectId, isPresent) {
    if (!window.CampusIQService) return;

    await window.CampusIQService.logAttendance(subjectId, isPresent);
    const student = window.CampusIQService.currentUser;
    this.renderAttendanceCalculator(student);
    this.renderOverviewStats(student);

    const sub = student.subjects.find(s => s.id === subjectId);
    const newPct = ((sub.attended / sub.total) * 100).toFixed(1);

    this.showToast(
      isPresent ? "Marked Present" : "Marked Absent",
      `${sub.name} is now at ${newPct}% (${sub.attended}/${sub.total}). Synced to Supabase.`,
      isPresent ? "success" : "warning"
    );
  }

  // --- Timetable ---
  setTimetableDay(day) {
    this.state.currentDay = day;
    document.querySelectorAll(".day-switcher-btn").forEach(btn => {
      if (btn.dataset.day === day) {
        btn.className = "day-switcher-btn px-4 py-2 rounded-lg text-xs sm:text-sm font-bold bg-[#0F172A] text-amber-300 shadow-md transition";
      } else {
        btn.className = "day-switcher-btn px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition";
      }
    });
    this.renderTimetable(day);
  }

  renderTimetable(day) {
    const container = document.getElementById("timetable-slots-container");
    if (!container) return;

    const slots = this.state.timetable[day] || [];
    const html = slots.map(slot => `
      <div class="timetable-row ${slot.isCurrent ? 'active-now' : ''} p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="flex items-start sm:items-center gap-3">
          <div class="w-10 h-10 rounded-lg ${slot.isCurrent ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'} flex items-center justify-center font-bold text-xs flex-shrink-0">
            <i data-lucide="${slot.code === 'BREAK' ? 'coffee' : 'clock'}" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono font-bold text-slate-500">${slot.time}</span>
              ${slot.isCurrent ? '<span class="text-[10px] uppercase font-bold bg-blue-600 text-white px-2 py-0.5 rounded-full animate-pulse">ONGOING LECTURE</span>' : ''}
            </div>
            <h4 class="text-sm sm:text-base font-bold text-slate-900 mt-0.5">${slot.subject}</h4>
          </div>
        </div>

        <div class="flex items-center gap-4 text-xs text-slate-600">
          <div class="flex items-center gap-1">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-blue-600"></i>
            <span class="font-medium">${slot.room}</span>
          </div>
          <div class="flex items-center gap-1">
            <i data-lucide="user" class="w-3.5 h-3.5 text-slate-400"></i>
            <span>${slot.instructor}</span>
          </div>
        </div>
      </div>
    `).join("");

    container.innerHTML = slots.length > 0 ? html : `<div class="p-8 text-center text-slate-500">No scheduled classes for ${day}.</div>`;
    if (window.lucide) window.lucide.createIcons();
  }

  // --- Library Books ---
  renderLibraryResources() {
    const container = document.getElementById("library-books-container");
    if (!container) return;

    const html = this.state.libraryResources.map(book => `
      <div class="book-spine-card p-5 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">${book.badge}</span>
            <span class="text-xs text-slate-500 font-mono">${book.pages}</span>
          </div>
          <h4 class="text-base font-bold text-slate-900 mb-1 leading-snug">${book.title}</h4>
          <p class="text-xs text-slate-600 mb-1 flex items-center gap-1">
            <i data-lucide="pen-tool" class="w-3 h-3 text-amber-700"></i> Author: ${book.author}
          </p>
          <p class="text-xs text-blue-800 font-medium">${book.course} &bull; ${book.type}</p>
        </div>
        <div class="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
          <span class="text-xs text-slate-500 flex items-center gap-1"><i data-lucide="file" class="w-3.5 h-3.5 text-red-500"></i> Verified PDF</span>
          <button onclick="window.Portal.downloadResourceSimulator('${book.title}')" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0F172A] hover:bg-blue-900 text-amber-300 transition flex items-center gap-1.5 shadow-sm">
            <i data-lucide="download" class="w-3.5 h-3.5"></i>
            <span>Read Document</span>
          </button>
        </div>
      </div>
    `).join("");

    container.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
  }

  // --- Exam Radar & Syllabus Blueprint ---
  renderExamRadar(student) {
    const container = document.getElementById("exam-radar-container");
    if (!container || !student || !student.subjects) return;

    const html = student.subjects.map(s => {
      const unitsHtml = (s.syllabus_units || []).map(u => `
        <div class="p-3 bg-white rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div class="flex-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-slate-900">${u.unit}</span>
              <span class="text-[10px] font-black px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">Exam Weightage: ${u.weightage}</span>
            </div>
            <p class="text-xs text-slate-600 mt-1"><strong class="text-slate-700">High-Yield Topics:</strong> ${u.topics}</p>
          </div>
          <button onclick="window.Portal.askCopilotAboutSubject('${s.name}', '${u.unit}')" class="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-amber-100 hover:text-amber-900 text-slate-700 transition flex-shrink-0 flex items-center gap-1">
            <i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-600"></i>
            <span>Ask AI Copilot</span>
          </button>
        </div>
      `).join("");

      return `
        <div class="portal-card p-5 space-y-3">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <div>
              <span class="text-xs font-mono font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">${s.code}</span>
              <h3 class="text-base font-bold text-slate-900 mt-1">${s.name} (${s.credits} Credits)</h3>
            </div>
            <div class="text-xs text-slate-600">
              <span>Faculty: <strong>${s.instructor}</strong></span>
              <span class="mx-1">&bull;</span>
              <span>Cabin: <strong>${s.cabin || 'Faculty Block'}</strong></span>
            </div>
          </div>
          <div class="space-y-2">
            ${unitsHtml}
          </div>
        </div>
      `;
    }).join("");

    container.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
  }

  // --- Dean's Priority Grievance Redressal ---
  renderTicketsList() {
    const container = document.getElementById("tickets-list-container");
    if (!container || !window.CampusIQService) return;

    const tickets = window.CampusIQService.getStoredTickets();
    const html = tickets.map(t => {
      const statusColor = t.status === "resolved" 
        ? "bg-emerald-100 text-emerald-800 border-emerald-300"
        : (t.status === "in_progress" ? "bg-blue-100 text-blue-800 border-blue-300" : "bg-amber-100 text-amber-800 border-amber-300");

      return `
        <div class="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 transition">
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-xs font-mono font-bold text-slate-800">${t.ticket_number}</span>
            <span class="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${statusColor}">${t.status.replace('_', ' ')}</span>
          </div>
          <h4 class="text-sm font-bold text-slate-900 mb-1">${t.subject}</h4>
          <p class="text-xs text-slate-600 mb-2">${t.message}</p>
          <div class="p-2 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900 font-semibold mb-2 flex items-center gap-1.5">
            <i data-lucide="shield-check" class="w-3.5 h-3.5 text-amber-700"></i>
            <span>Institutional Priority: Expedited Review by HOD &amp; Dean Office</span>
          </div>
          <div class="text-[11px] text-slate-500 flex items-center justify-between pt-2 border-t border-slate-100">
            <span>Category: <strong>${t.category}</strong></span>
            <span>Created: ${new Date(t.created_at).toLocaleDateString()}</span>
          </div>
        </div>
      `;
    }).join("");

    container.innerHTML = tickets.length > 0 ? html : `<div class="p-6 text-center text-slate-500">No support tickets submitted yet.</div>`;
    if (window.lucide) window.lucide.createIcons();
  }

  async handleTicketSubmit(event) {
    event.preventDefault();
    const subject = document.getElementById("ticket-subject").value;
    const category = document.getElementById("ticket-category").value;
    const priority = document.getElementById("ticket-priority").value;
    const message = document.getElementById("ticket-message").value;

    if (!subject || !message) {
      alert("Please fill in both subject and description.");
      return;
    }

    const newTicket = await window.CampusIQService.submitSupportTicket({
      subject,
      category,
      priority,
      message
    });

    document.getElementById("ticket-submit-form").reset();
    this.renderTicketsList();
    this.openSlaEscalationModal(newTicket.ticket_number);
  }

  openSlaEscalationModal(ticketNumber) {
    const modal = document.getElementById("sla-hotline-modal");
    if (modal) {
      document.getElementById("sla-modal-ticket-num").textContent = ticketNumber;
      modal.classList.remove("hidden");
    }
  }

  closeSlaEscalationModal() {
    const modal = document.getElementById("sla-hotline-modal");
    if (modal) modal.classList.add("hidden");
  }

  // --- Profile Page Display ---
  renderProfileView(student) {
    if (!student) return;

    const pAvatar = document.getElementById("profile-page-avatar");
    const pName = document.getElementById("profile-page-name");
    const pRoll = document.getElementById("profile-page-roll");
    const pDept = document.getElementById("profile-page-dept");
    const pEmail = document.getElementById("profile-page-email");
    const pPhone = document.getElementById("profile-page-phone");
    const pCgpa = document.getElementById("profile-page-cgpa");
    const pStanding = document.getElementById("profile-page-standing");

    if (pAvatar) pAvatar.src = student.avatar_url;
    if (pName) pName.textContent = student.full_name;
    if (pRoll) pRoll.textContent = student.student_id;
    if (pDept) pDept.textContent = student.department;
    if (pEmail) pEmail.textContent = student.email;
    if (pPhone) pPhone.textContent = student.phone_number;
    if (pCgpa) pCgpa.textContent = student.cgpa;
    if (pStanding) pStanding.textContent = student.academic_standing;

    // Smart ID Card
    const idAvatar = document.getElementById("smart-id-avatar");
    const idName = document.getElementById("smart-id-name");
    const idRoll = document.getElementById("smart-id-roll");
    const idDept = document.getElementById("smart-id-dept");
    const idBlood = document.getElementById("smart-id-blood");

    if (idAvatar) idAvatar.src = student.avatar_url;
    if (idName) idName.textContent = student.full_name;
    if (idRoll) idRoll.textContent = student.student_id;
    if (idDept) idDept.textContent = student.department;
    if (idBlood) idBlood.textContent = student.blood_group || "O+";

    // Initialize Forecaster score display
    const scoreDisplay = document.getElementById("cgpa-current-score");
    if (scoreDisplay) scoreDisplay.textContent = `${student.cgpa || '8.84'} CGPA`;
    this.calculateCgpaTarget(9.00);
  }

  printSmartIdCard() {
    this.showToast("Print Smart ID Pass", "Opening browser print interface for verified institutional ID pass...", "info");
    setTimeout(() => {
      window.print();
    }, 600);
  }

  calculateCgpaTarget(targetValue) {
    const student = window.CampusIQService ? window.CampusIQService.currentUser : null;
    const currentCgpa = student ? parseFloat(student.cgpa || 8.84) : 8.84;
    const target = parseFloat(targetValue);

    const displayEl = document.getElementById("cgpa-target-display");
    const requiredSgpaEl = document.getElementById("cgpa-required-sgpa");
    const guidanceEl = document.getElementById("cgpa-forecast-guidance");

    if (displayEl) displayEl.textContent = target.toFixed(2);

    // Assuming 8 total semesters, 4 completed, 4 remaining:
    // (4 * current + 4 * required) / 8 = target => required = 2 * target - current
    const required = (2 * target - currentCgpa).toFixed(2);

    if (requiredSgpaEl) {
      if (parseFloat(required) > 10.0) {
        requiredSgpaEl.textContent = "> 10.0 (Unobtainable)";
        requiredSgpaEl.className = "text-base font-black text-red-600 font-mono";
      } else if (parseFloat(required) < 6.0) {
        requiredSgpaEl.textContent = "Passed (< 6.0)";
        requiredSgpaEl.className = "text-base font-black text-emerald-600 font-mono";
      } else {
        requiredSgpaEl.textContent = `${required} SGPA`;
        requiredSgpaEl.className = "text-base font-black text-blue-800 font-mono";
      }
    }

    if (guidanceEl) {
      if (parseFloat(required) > 10.0) {
        guidanceEl.innerHTML = `Target of <strong>${target.toFixed(2)} CGPA</strong> requires more than a perfect 10.0 SGPA in remaining semesters based on completed course weightages.`;
      } else {
        const honorsTitle = target >= 9.0 ? "Dean's Gold Honors" : (target >= 8.0 ? "First Class with Distinction" : "First Class");
        guidanceEl.innerHTML = `To graduate with <strong>${target.toFixed(2)} CGPA (${honorsTitle})</strong>, maintain an average SGPA of <strong>${required}</strong> across Semesters 6, 7 &amp; 8.`;
      }
    }
  }

  // --- Profile Photo Upload ---
  openPhotoUploadModal() {
    const modal = document.getElementById("photo-upload-modal");
    const student = window.CampusIQService ? window.CampusIQService.currentUser : null;
    if (modal && student) {
      document.getElementById("photo-preview-img").src = student.avatar_url;
      document.getElementById("photo-url-input").value = "";
      modal.classList.remove("hidden");
    }
  }

  closePhotoUploadModal() {
    const modal = document.getElementById("photo-upload-modal");
    if (modal) modal.classList.add("hidden");
  }

  handlePhotoFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file (PNG, JPG, WebP).");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById("photo-preview-img").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  handlePhotoUrlInput(url) {
    if (url && url.trim().startsWith("http")) {
      document.getElementById("photo-preview-img").src = url.trim();
    }
  }

  async savePhotoUpload() {
    const previewSrc = document.getElementById("photo-preview-img").src;
    if (window.CampusIQService && previewSrc) {
      await window.CampusIQService.updateProfilePhoto(previewSrc);
      this.closePhotoUploadModal();
      this.showToast("Profile Photo Updated", "Your new photo has been saved and synced to Supabase.", "success");
    }
  }

  // --- CAMPUSAI — Smart Academic Copilot ---
  initAICopilot() {
    this.state.chatMessages = [
      {
        sender: "ai",
        text: "Hello! I am **CAMPUSAI**, your 24/7 intelligent institutional academic copilot. I am directly connected to your enrolled courses, syllabus blueprints, attendance records, faculty office hours, and university regulations. How can I help you today?"
      }
    ];
    this.renderAIChatMessages();
  }

  renderAIChatMessages() {
    const box = document.getElementById("ai-chat-messages-box");
    if (!box) return;

    box.innerHTML = this.state.chatMessages.map(msg => {
      if (msg.sender === "user") {
        return `
          <div class="flex justify-end mb-3">
            <div class="bg-[#1D4ED8] text-white text-xs sm:text-sm px-4 py-2.5 rounded-2xl rounded-tr-none max-w-[80%] shadow">
              ${msg.text}
            </div>
          </div>
        `;
      } else {
        return `
          <div class="flex items-start gap-2.5 mb-3">
            <div class="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 shadow-md ring-1 ring-blue-500/40 bg-[#070D19]">
              <img src="campusiq-logo.png" alt="CAMPUSAI" class="w-full h-full object-cover">
            </div>
            <div class="bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm p-3.5 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm leading-relaxed">
              ${this.formatMarkdownToHtml(msg.text)}
            </div>
          </div>
        `;
      }
    }).join("");

    box.scrollTop = box.scrollHeight;
    if (window.lucide) window.lucide.createIcons();
  }

  formatMarkdownToHtml(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br/>');
  }

  sendCopilotQuery(customText = null) {
    const input = document.getElementById("ai-chat-input");
    const query = customText || (input ? input.value.trim() : "");
    if (!query) return;

    if (input) input.value = "";

    // Append user message
    this.state.chatMessages.push({ sender: "user", text: query });
    this.renderAIChatMessages();

    // Process intelligent answer
    setTimeout(() => {
      const response = this.generateCopilotAnswer(query);
      this.state.chatMessages.push({ sender: "ai", text: response });
      this.renderAIChatMessages();
    }, 400);
  }

  askCopilotAboutSubject(subjectName, unitName) {
    this.switchTab("ai-copilot");
    const q = `What are the high-yield exam questions and weightage for ${subjectName} (${unitName})?`;
    this.sendCopilotQuery(q);
  }

  generateCopilotAnswer(prompt) {
    const student = window.CampusIQService ? window.CampusIQService.currentUser : null;
    const p = prompt.toLowerCase();

    // 1. How many subjects / what are my courses?
    if (p.includes("how many subject") || p.includes("total subject") || p.includes("my courses") || p.includes("which subject")) {
      if (!student || !student.subjects) return "You are currently not logged in. Please sign in to view your enrolled courses.";
      const subList = student.subjects.map((s, idx) => `${idx + 1}. **${s.name}** (${s.code}) — ${s.credits} Credits, Room: ${s.room}, Faculty: ${s.instructor}`).join("\n");
      return `You are currently enrolled in **${student.subjects.length} academic courses** this semester (${student.year_semester}) in **${student.department}**:\n\n${subList}\n\nTotal Credits: **17 Credits**. Need specific syllabus details for any subject?`;
    }

    // 2. Which topics come in the exam?
    if (p.includes("exam") || p.includes("topic") || p.includes("weightage") || p.includes("syllabus") || p.includes("important question")) {
      if (!student || !student.subjects) return "Please sign in to view your exact syllabus blueprints.";
      
      let answer = `Here is the **Official Examination Blueprint & High-Yield Topics** for your cohort:\n\n`;
      student.subjects.slice(0, 3).forEach(s => {
        answer += `📘 **${s.name} (${s.code})**:\n`;
        (s.syllabus_units || []).slice(0, 2).forEach(u => {
          answer += `&bull; *${u.unit}* [${u.weightage}]: ${u.topics}\n`;
        });
        answer += `\n`;
      });
      answer += `💡 **Top Tip**: Dynamic Programming & BCNF Normalization carry over **35% of all total marks** in the mid-term paper!`;
      return answer;
    }

    // 3. Attendance check & 75% rule
    if (p.includes("attendance") || p.includes("75") || p.includes("bunk") || p.includes("shortage") || p.includes("leave")) {
      if (!student) return "Please sign in to check your personal attendance figures.";
      let total = 0, att = 0;
      student.subjects.forEach(s => { total += s.total; att += s.attended; });
      const pct = ((att / total) * 100).toFixed(1);
      const isSafe = parseFloat(pct) >= 75;

      if (isSafe) {
        const allowedBunks = Math.floor((att - 0.75 * total) / 0.75);
        return `✅ **Attendance Status: Compliant (${pct}%)**\n\nYou have attended **${att} out of ${total}** scheduled lectures across all 5 subjects. You can safely miss up to **${allowedBunks} lecture(s)** without dropping below the statutory 75% threshold!`;
      } else {
        const needed = Math.ceil((0.75 * total - att) / 0.25);
        return `⚠️ **Attendance Warning: Shortage Alert (${pct}%)**\n\nYou have attended **${att} out of ${total}** lectures, which is below the mandatory 75% regulatory requirement. You must attend the next **${needed} consecutive lecture(s)** to restore compliance and clear your hall ticket!`;
      }
    }

    // 4. Faculty office hours / cabin location / dispute
    if (p.includes("teacher") || p.includes("faculty") || p.includes("cabin") || p.includes("office hour") || p.includes("professor") || p.includes("mismatch") || p.includes("dispute")) {
      if (!student) return "Please sign in to view faculty consultation hours.";
      const facList = student.subjects.map(s => `&bull; **${s.instructor}** (${s.name}): Cabin: *${s.cabin || 'Faculty Block A'}*, Office Hours: *${s.office_hours || 'Mon/Wed 3 PM'}*`).join("\n");
      return `Here are the designated faculty cabin locations and consultation office hours:\n\n${facList}\n\n🤝 **Teacher Discrepancy Protocol**: If an attendance record was wrongly logged, visit the faculty during their designated office hours or file a formal inquiry from the **Grievance Redressal** tab for expedited priority review by the Dean.`;
    }

    // 5. Helplines & Emergency Contacts
    if (p.includes("helpline") || p.includes("emergency") || p.includes("phone") || p.includes("call") || p.includes("contact")) {
      return `🚨 **Official Campus Emergency & Grievance Directory**:\n\n&bull; **Central University Student Helpline**: \`1800-CAMPUS-IQ\` (Toll-Free, 24/7)\n&bull; **Academic Grievance Officer & Dean Desk**: \`+91 1800-226-787\` (Ext. 108)\n&bull; **Controller of Examinations Emergency Cell**: \`+91 1800-226-788\` (Ext. 104)\n&bull; **Anti-Ragging & Student Counselor Hotline**: \`+91 1800-226-789\`\n&bull; **Campus Medical Emergency Clinic**: \`+91 1800-226-790\` (Available 24 hrs)\n\nAll calls are recorded for student safety and immediate dispute resolution.`;
    }

    // Fallback general guidance
    return `I am **CAMPUSAI**, your academic copilot. I can assist you with:\n\n1. **"How many subjects am I learning?"** — Total subjects and credit structure.\n2. **"Which topics come in the exam?"** — High-yield syllabus questions and weightage.\n3. **"What is my current attendance?"** — Statutory 75% target guidance and safe bunks.\n4. **"Where is my teacher's cabin?"** — Faculty consultation timings and dispute resolution.\n5. **"Give me the emergency helplines"** — Immediate phone escalation.\n\nTry asking any of the above!`;
  }

  // --- Auth Handlers ---
  async handleLoginSubmit(event) {
    event.preventDefault();
    const rollOrEmail = document.getElementById("login-input-roll").value;
    const password = document.getElementById("login-input-password").value;

    const res = await window.CampusIQService.loginStudent(rollOrEmail, password);
    if (res.success) {
      this.showToast("Welcome Back!", `Signed in as ${res.user.full_name}. Data unlocked.`, "success");
    } else {
      alert(res.message);
    }
  }

  quickDemoLogin(rollNo) {
    document.getElementById("login-input-roll").value = rollNo;
    document.getElementById("login-input-password").value = "student123";
    this.handleLoginSubmit({ preventDefault: () => {} });
  }

  handleSignOut() {
    if (confirm("Are you sure you want to sign out of your student portal?")) {
      window.CampusIQService.logoutStudent();
      this.showToast("Signed Out", "Session closed securely.", "info");
    }
  }

  // --- Modals ---
  openNoticeModal(noticeId) {
    const notice = this.state.notices.find(n => n.id === noticeId);
    if (!notice) return;

    const modal = document.getElementById("notice-detail-modal");
    if (!modal) return;

    document.getElementById("modal-notice-source").innerHTML = `<span class="${notice.badgeType} text-xs px-3 py-1 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> ${notice.sourceLabel}</span>`;
    document.getElementById("modal-notice-date").textContent = notice.date;
    document.getElementById("modal-notice-title").textContent = notice.title;
    document.getElementById("modal-notice-dept").textContent = `Department: ${notice.department}`;
    document.getElementById("modal-notice-author").textContent = `Issued By: ${notice.author}`;
    document.getElementById("modal-notice-body").textContent = notice.summary;
    document.getElementById("modal-notice-file").textContent = notice.attachmentName;
    document.getElementById("modal-notice-size").textContent = `(${notice.attachmentSize})`;

    modal.classList.remove("hidden");
    if (window.lucide) window.lucide.createIcons();
  }

  closeNoticeModal() {
    const modal = document.getElementById("notice-detail-modal");
    if (modal) modal.classList.add("hidden");
  }

  openEventModal(eventId) {
    const ev = this.state.events.find(e => e.id === eventId);
    if (!ev) return;

    const modal = document.getElementById("event-detail-modal");
    if (!modal) return;

    document.getElementById("modal-event-title").textContent = ev.title;
    document.getElementById("modal-event-date").textContent = `${ev.date} (${ev.time})`;
    document.getElementById("modal-event-venue").textContent = ev.venue;
    document.getElementById("modal-event-prize").textContent = ev.prize;
    document.getElementById("modal-event-organizer").textContent = ev.organizer;
    document.getElementById("modal-event-desc").textContent = ev.description;
    document.getElementById("modal-event-deadline").textContent = ev.registrationDeadline;

    modal.classList.remove("hidden");
    if (window.lucide) window.lucide.createIcons();
  }

  closeEventModal() {
    const modal = document.getElementById("event-detail-modal");
    if (modal) modal.classList.add("hidden");
  }

  downloadResourceSimulator(title) {
    this.showToast("Document Access Granted", `Opening: "${title}". Loaded from digital repository.`, "info");
  }

  handleSearch(query) {
    this.state.searchQuery = query;
    this.renderNotices();
    this.renderEvents();
  }

  // --- Instant Spotlight Search Bar ---
  handleSpotlightSearch(query) {
    const q = (query || "").trim().toLowerCase();
    const resultsContainer = document.getElementById("spotlight-search-results");
    const clearBtn = document.getElementById("search-clear-btn");
    if (!resultsContainer) return;

    if (clearBtn) {
      if (q.length > 0) clearBtn.classList.remove("hidden");
      else clearBtn.classList.add("hidden");
    }

    const student = window.CampusIQService ? window.CampusIQService.currentUser : null;

    const sections = [
      { id: "overview", name: "Overview Dashboard", icon: "layout-dashboard", desc: "Consolidated performance & announcements" },
      { id: "ai-copilot", name: "CAMPUSAI Copilot", icon: "sparkles", desc: "24/7 Smart Academic AI assistant & exam helper" },
      { id: "attendance", name: "Attendance", icon: "pie-chart", desc: "Statutory 75% ledger & biometric records" },
      { id: "notices", name: "Official Circulars", icon: "bell", desc: "Exam orders, holiday circulars & bulletins" },
      { id: "events", name: "Events & Hackathons", icon: "calendar", desc: "Campus competitions, fests & prize money" },
      { id: "timetable", name: "Class Timetable", icon: "clock", desc: "Weekly lecture schedule & lab rooms" },
      { id: "fees-portal", name: "Fees & Scholarships", icon: "credit-card", desc: "Tuition ledger, fee vouchers & dues payment" },
      { id: "hostel-mess", name: "Hostel & E-Gatepass Hub", icon: "home", desc: "Residence allotment, 7-day mess menu & out-pass" },
      { id: "placements", name: "Training & Placements", icon: "briefcase", desc: "Campus recruitment drives, Tier-1 & ATS score" },
      { id: "exam-radar", name: "Exam Radar & Blueprint", icon: "target", desc: "Unit-wise question blueprints & faculty cabins" },
      { id: "library", name: "Digital Library & Notes", icon: "book-open", desc: "Handouts, reference textbooks & PYQs" },
      { id: "helpdesk", name: "Grievance Redressal", icon: "life-buoy", desc: "Dean's priority inquiries & dispute escalation" },
      { id: "profile", name: "My Academic Record", icon: "user-check", desc: "Student CGPA, credits & photo upload" }
    ];

    if (q.length === 0) {
      let html = `
        <div class="spotlight-category-header">
          <span>Quick Sections &amp; Features</span>
          <span class="spotlight-badge bg-blue-100 text-blue-800">13 Hubs</span>
        </div>
      `;
      sections.slice(0, 5).forEach(sec => {
        html += `
          <div class="spotlight-result-row" onclick="window.Portal.jumpFromSearch('${sec.id}')">
            <div class="flex items-center gap-2.5">
              <i data-lucide="${sec.icon}" class="w-4 h-4 text-blue-600"></i>
              <div>
                <div class="font-bold text-slate-800 text-xs">${sec.name}</div>
                <div class="text-[10px] text-slate-500">${sec.desc}</div>
              </div>
            </div>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-slate-400"></i>
          </div>
        `;
      });
      resultsContainer.innerHTML = html;
      resultsContainer.classList.remove("hidden");
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    const matchingSections = sections.filter(s => 
      s.name.toLowerCase().includes(q) || 
      s.desc.toLowerCase().includes(q)
    );

    const matchingSubjects = (student && student.subjects ? student.subjects : []).filter(sub => 
      sub.name.toLowerCase().includes(q) || 
      sub.code.toLowerCase().includes(q) || 
      sub.instructor.toLowerCase().includes(q)
    );

    const matchingNotices = this.state.notices.filter(n => 
      n.title.toLowerCase().includes(q) || 
      n.summary.toLowerCase().includes(q) || 
      n.department.toLowerCase().includes(q)
    );

    const matchingEvents = this.state.events.filter(e => 
      e.title.toLowerCase().includes(q) || 
      e.description.toLowerCase().includes(q) || 
      e.venue.toLowerCase().includes(q)
    );

    let html = "";

    // 1. Ask CAMPUSAI Option
    html += `
      <div class="spotlight-result-row bg-blue-50/80 border border-blue-200/80 mb-1" onclick="window.Portal.askCampusAIFromSearch('${q.replace(/'/g, "\\'")}')">
        <div class="flex items-center gap-2.5">
          <div class="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
            <i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-300"></i>
          </div>
          <div>
            <div class="font-bold text-blue-900 text-xs">Ask CAMPUSAI: "${q}"</div>
            <div class="text-[10px] text-blue-700">Get instant AI guidance for courses, exams, or regulations</div>
          </div>
        </div>
        <span class="spotlight-badge bg-amber-400 text-slate-950 font-bold">Ask AI</span>
      </div>
    `;

    // 2. Sections
    if (matchingSections.length > 0) {
      html += `
        <div class="spotlight-category-header">
          <span>Sections &amp; Features</span>
          <span class="spotlight-badge bg-slate-100 text-slate-700">${matchingSections.length} match</span>
        </div>
      `;
      matchingSections.forEach(sec => {
        html += `
          <div class="spotlight-result-row" onclick="window.Portal.jumpFromSearch('${sec.id}')">
            <div class="flex items-center gap-2.5">
              <i data-lucide="${sec.icon}" class="w-4 h-4 text-blue-600"></i>
              <div>
                <div class="font-bold text-slate-800 text-xs">${sec.name}</div>
                <div class="text-[10px] text-slate-500">${sec.desc}</div>
              </div>
            </div>
            <span class="text-[10px] text-slate-400">Open &rarr;</span>
          </div>
        `;
      });
    }

    // 3. Courses & Blueprint
    if (matchingSubjects.length > 0) {
      html += `
        <div class="spotlight-category-header mt-1">
          <span>Enrolled Courses &amp; Blueprint</span>
          <span class="spotlight-badge bg-emerald-100 text-emerald-800">${matchingSubjects.length} courses</span>
        </div>
      `;
      matchingSubjects.forEach(sub => {
        html += `
          <div class="spotlight-result-row" onclick="window.Portal.jumpFromSearch('exam-radar')">
            <div class="flex items-center gap-2.5">
              <i data-lucide="book-open" class="w-4 h-4 text-emerald-600"></i>
              <div>
                <div class="font-bold text-slate-800 text-xs">${sub.name} <span class="font-mono text-[10px] text-slate-500">(${sub.code})</span></div>
                <div class="text-[10px] text-slate-500">${sub.instructor} &bull; Cabin: ${sub.cabin || 'Faculty Block A'}</div>
              </div>
            </div>
            <span class="text-[10px] font-bold text-emerald-700">View Blueprint &rarr;</span>
          </div>
        `;
      });
    }

    // 4. Circulars
    if (matchingNotices.length > 0) {
      html += `
        <div class="spotlight-category-header mt-1">
          <span>Official Circulars</span>
          <span class="spotlight-badge bg-blue-100 text-blue-800">${matchingNotices.length}</span>
        </div>
      `;
      matchingNotices.slice(0, 3).forEach(n => {
        html += `
          <div class="spotlight-result-row" onclick="window.Portal.openNoticeFromSearch('${n.id}')">
            <div class="flex items-center gap-2.5 flex-1 min-w-0 mr-2">
              <i data-lucide="bell" class="w-4 h-4 text-blue-600 flex-shrink-0"></i>
              <div class="truncate">
                <div class="font-bold text-slate-800 text-xs truncate">${n.title}</div>
                <div class="text-[10px] text-slate-500">${n.sourceLabel} &bull; ${n.date}</div>
              </div>
            </div>
            <span class="text-[10px] font-bold text-blue-700 flex-shrink-0">Read &rarr;</span>
          </div>
        `;
      });
    }

    // 5. Events
    if (matchingEvents.length > 0) {
      html += `
        <div class="spotlight-category-header mt-1">
          <span>Campus Events</span>
          <span class="spotlight-badge bg-amber-100 text-amber-800">${matchingEvents.length}</span>
        </div>
      `;
      matchingEvents.slice(0, 2).forEach(e => {
        html += `
          <div class="spotlight-result-row" onclick="window.Portal.openEventFromSearch('${e.id}')">
            <div class="flex items-center gap-2.5 flex-1 min-w-0 mr-2">
              <i data-lucide="calendar" class="w-4 h-4 text-amber-600 flex-shrink-0"></i>
              <div class="truncate">
                <div class="font-bold text-slate-800 text-xs truncate">${e.title}</div>
                <div class="text-[10px] text-slate-500">${e.venue} &bull; ${e.date}</div>
              </div>
            </div>
            <span class="text-[10px] font-bold text-amber-700 flex-shrink-0">Register &rarr;</span>
          </div>
        `;
      });
    }

    if (matchingSections.length === 0 && matchingSubjects.length === 0 && matchingNotices.length === 0 && matchingEvents.length === 0) {
      html += `
        <div class="p-4 text-center text-xs text-slate-500">
          No direct items matched "<strong>${q}</strong>". Click "Ask CAMPUSAI" above for instant AI response!
        </div>
      `;
    }

    resultsContainer.innerHTML = html;
    resultsContainer.classList.remove("hidden");
    if (window.lucide) window.lucide.createIcons();
  }

  clearSpotlightSearch() {
    const input = document.getElementById("portal-spotlight-search-input");
    const resultsContainer = document.getElementById("spotlight-search-results");
    const clearBtn = document.getElementById("search-clear-btn");
    if (input) input.value = "";
    if (resultsContainer) resultsContainer.classList.add("hidden");
    if (clearBtn) clearBtn.classList.add("hidden");
  }

  jumpFromSearch(tabId) {
    this.switchTab(tabId);
    this.clearSpotlightSearch();
  }

  openNoticeFromSearch(noticeId) {
    this.switchTab("notices");
    this.clearSpotlightSearch();
    this.openNoticeModal(noticeId);
  }

  openEventFromSearch(eventId) {
    this.switchTab("events");
    this.clearSpotlightSearch();
    this.openEventModal(eventId);
  }

  askCampusAIFromSearch(query) {
    this.switchTab("ai-copilot");
    this.clearSpotlightSearch();
    this.sendCopilotQuery(query);
  }

  showToast(title, message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    const borderCol = type === "success" ? "border-emerald-500" : (type === "warning" ? "border-amber-500" : "border-blue-500");
    const iconName = type === "success" ? "check-circle" : (type === "warning" ? "alert-triangle" : "info");
    const iconCol = type === "success" ? "text-emerald-600" : (type === "warning" ? "text-amber-600" : "text-blue-600");

    toast.className = `toast-notice bg-white border-l-4 ${borderCol} shadow-xl rounded-xl p-4 max-w-sm w-full flex items-start gap-3 border border-slate-200 pointer-events-auto`;
    toast.innerHTML = `
      <i data-lucide="${iconName}" class="w-5 h-5 ${iconCol} flex-shrink-0 mt-0.5"></i>
      <div class="flex-1">
        <h5 class="text-xs font-bold text-slate-900">${title}</h5>
        <p class="text-[12px] text-slate-600 mt-0.5 leading-snug">${message}</p>
      </div>
      <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-slate-600">
        <i data-lucide="x" class="w-3.5 h-3.5"></i>
      </button>
    `;

    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      if (toast.parentElement) {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
      }
    }, 4500);
  }

  // ====================================================================
  // FEES & SCHOLARSHIP DESK HANDLERS
  // ====================================================================
  // ====================================================================
  // FEES & SCHOLARSHIP DESK HANDLERS (100% Unique Per-Student)
  // ====================================================================
  renderFeesView(student) {
    if (!student) return;
    const cgpa = parseFloat(student.cgpa) || 7.5;
    const rollNum = parseInt(student.student_id.slice(-3)) || 201;
    
    let totalFee = 145000;
    let paidFee = 120000;
    let dueFee = 25000;
    let paidPct = "82.8% Cleared (4 Installments)";
    let grantAmt = 20000;
    let grantName = "State Merit-cum-Means Fellowship";
    let isFullPaid = false;

    if (student.student_id === "252921201") {
      // Satyam Sambhale (Dean's Honors)
      totalFee = 145000; paidFee = 120000; dueFee = 25000;
      paidPct = "82.8% Cleared (4 Installments)";
      grantAmt = 20000; grantName = "State Merit-cum-Means Fellowship";
    } else if (student.student_id === "252921202") {
      // Aarav Sharma (Shortage Warning)
      totalFee = 145000; paidFee = 85000; dueFee = 60000;
      paidPct = "58.6% Cleared (2 Installments)";
      grantAmt = 0; grantName = "No Active Concession (CGPA < 7.5)";
    } else if (student.student_id === "252921203") {
      // Priya Sharma (Gold Medalist)
      totalFee = 145000; paidFee = 145000; dueFee = 0;
      paidPct = "100% Cleared (All Installments Paid)";
      grantAmt = 40000; grantName = "Chancellor's Gold Medal Fellowship";
      isFullPaid = true;
    } else if (student.student_id === "252921204") {
      // Rohan Deshmukh (Borderline Safe)
      totalFee = 145000; paidFee = 110000; dueFee = 35000;
      paidPct = "75.8% Cleared (3 Installments)";
      grantAmt = 15000; grantName = "EBC Category Institutional Assistance";
    } else {
      // Deterministic for any of the 120 students in the database
      if (cgpa >= 9.0) {
        paidFee = 145000; dueFee = 0; isFullPaid = true;
        paidPct = "100% Cleared (All Installments Paid)";
        grantAmt = 35000; grantName = "University High Honors Fellowship";
      } else if (cgpa >= 8.0) {
        paidFee = 120000; dueFee = 25000;
        paidPct = "82.8% Cleared (4 Installments)";
        grantAmt = 20000; grantName = "State Higher Education Grant";
      } else if (cgpa >= 7.0) {
        paidFee = 100000; dueFee = 45000;
        paidPct = "68.9% Cleared (3 Installments)";
        grantAmt = 10000; grantName = "Technical Education Assistance";
      } else {
        paidFee = 80000; dueFee = 65000;
        paidPct = "55.1% Cleared (2 Installments)";
        grantAmt = 0; grantName = "General Category (Full Fee Scheme)";
      }
    }

    const totalEl = document.getElementById("fee-total-amount");
    const paidEl = document.getElementById("fee-paid-amount");
    const dueEl = document.getElementById("fee-due-amount");
    const paidPctEl = document.getElementById("fee-paid-pct");
    const badgeDue = document.getElementById("badge-due-status");
    const btnPayRow = document.getElementById("btn-pay-row");
    const btnPayMain = document.getElementById("btn-pay-dues-main");

    if (totalEl) totalEl.textContent = `₹${totalFee.toLocaleString('en-IN')}`;
    if (paidEl) paidEl.textContent = `₹${paidFee.toLocaleString('en-IN')}`;
    if (dueEl) dueEl.textContent = `₹${dueFee.toLocaleString('en-IN')}`;
    if (paidPctEl) paidPctEl.textContent = paidPct;

    if (isFullPaid) {
      if (badgeDue) {
        badgeDue.className = "px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]";
        badgeDue.textContent = "PAID IN FULL";
      }
      if (btnPayRow) btnPayRow.parentElement.innerHTML = `<span class="text-emerald-700 font-mono font-bold text-[11px]">TXN-SBIN-${student.student_id.slice(-6)}</span>`;
      if (btnPayMain) {
        btnPayMain.className = "px-3.5 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm cursor-default";
        btnPayMain.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4"></i><span>All Dues Cleared</span>';
      }
    } else {
      if (badgeDue) {
        badgeDue.className = "px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 font-bold text-[10px]";
        badgeDue.textContent = "PENDING";
      }
      if (btnPayMain) {
        btnPayMain.className = "px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition flex items-center gap-2 shadow-sm";
        btnPayMain.innerHTML = '<i data-lucide="arrow-up-right" class="w-4 h-4"></i><span>Pay Semester Dues</span>';
      }
    }
  }

  openFeeReceiptModal() {
    const student = window.CampusIQService ? window.CampusIQService.currentUser : null;
    if (student) {
      const vId = document.getElementById("modal-receipt-voucher-id");
      const sName = document.getElementById("modal-receipt-student-name");
      const sRoll = document.getElementById("modal-receipt-roll");
      const sDept = document.getElementById("modal-receipt-dept");
      const totalPaid = document.getElementById("modal-receipt-total-paid");
      
      const paidEl = document.getElementById("fee-paid-amount");
      if (vId) vId.textContent = `VCH-2026-${student.student_id.slice(-5)}`;
      if (sName) sName.textContent = student.full_name;
      if (sRoll) sRoll.textContent = student.student_id;
      if (sDept) sDept.textContent = student.department;
      if (totalPaid && paidEl) totalPaid.textContent = paidEl.textContent;
    }
    const modal = document.getElementById("fee-receipt-modal");
    if (modal) modal.classList.remove("hidden");
    if (window.lucide) window.lucide.createIcons();
  }

  closeFeeReceiptModal() {
    const modal = document.getElementById("fee-receipt-modal");
    if (modal) modal.classList.add("hidden");
  }

  openPayDuesModal() {
    const modal = document.getElementById("pay-dues-modal");
    if (modal) modal.classList.remove("hidden");
    if (window.lucide) window.lucide.createIcons();
  }

  closePayDuesModal() {
    const modal = document.getElementById("pay-dues-modal");
    if (modal) modal.classList.add("hidden");
  }

  handlePayDuesSubmit(e) {
    if (e) e.preventDefault();
    const mode = document.getElementById("payment-mode-select") ? document.getElementById("payment-mode-select").value : "UPI";
    const student = window.CampusIQService ? window.CampusIQService.currentUser : null;
    const roll = student ? student.student_id : "252921201";

    const paidEl = document.getElementById("fee-paid-amount");
    const dueEl = document.getElementById("fee-due-amount");
    const paidPctEl = document.getElementById("fee-paid-pct");
    const badgeDue = document.getElementById("badge-due-status");
    const rowDue = document.getElementById("row-pending-due");
    const btnPayRow = document.getElementById("btn-pay-row");
    const btnPayMain = document.getElementById("btn-pay-dues-main");
    
    if (paidEl) paidEl.textContent = "₹1,45,000";
    if (dueEl) dueEl.textContent = "₹0";
    if (paidPctEl) paidPctEl.textContent = "100% Cleared (All Installments Paid)";
    if (badgeDue) {
      badgeDue.className = "px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]";
      badgeDue.textContent = "PAID IN FULL";
    }
    if (rowDue) rowDue.className = "bg-emerald-50/50";
    if (btnPayRow) btnPayRow.parentElement.innerHTML = `<span class="text-emerald-700 font-mono font-bold text-[11px]">TXN-ONLINE-${roll.slice(-4)}01</span>`;
    if (btnPayMain) {
      btnPayMain.className = "px-3.5 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm cursor-default";
      btnPayMain.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4"></i><span>All Dues Cleared</span>';
    }

    const modalTotalPaid = document.getElementById("modal-receipt-total-paid");
    if (modalTotalPaid) modalTotalPaid.textContent = "₹1,45,000 (100% Cleared)";

    this.closePayDuesModal();
    this.showToast("Payment Successful!", `Outstanding dues processed via ${mode}. Fee Ledger updated to 100% Paid.`, "success");
    
    setTimeout(() => {
      this.openFeeReceiptModal();
    }, 600);
  }

  // ====================================================================
  // HOSTEL & E-GATEPASS HANDLERS (100% Unique Per-Student)
  // ====================================================================
  renderHostelView(student) {
    if (!student) return;
    const isFemale = /priya|deepika|ananya|sneha|neha|pooja|kavita|aditi|riya|swati|tanvi|shreya|divya|isha|megha/i.test(student.full_name);
    const rollSuffix = parseInt(student.student_id.slice(-3)) || 201;

    let hall = isFemale ? "Gargi Hall of Residence (Girls Wing C)" : (rollSuffix % 2 === 0 ? "Ramanujan Hall (Boys Wing A)" : "Aryabhata Hall (Boys Wing B)");
    let roomNo = isFemale ? `Room ${201 + (rollSuffix % 15)}` : (rollSuffix % 2 === 0 ? `Room ${101 + (rollSuffix % 25)}` : `Room ${301 + (rollSuffix % 25)}`);
    let bedId = (rollSuffix % 2 === 0) ? "Bed B (Window)" : "Bed A (Window View)";
    let warden = isFemale ? "Dr. Sunita Kapse" : (rollSuffix % 2 === 0 ? "Prof. P. M. Shinde" : "Dr. S. K. Kulkarni");
    let wardenOffice = isFemale ? "Girls Residence Wing Office (Ext: 4432)" : (rollSuffix % 2 === 0 ? "Admin Block 108 (Ext: 4418)" : "Admin Block 102 (Ext: 4421)");
    let roommate = isFemale ? "Sneha Patel" : (rollSuffix % 2 === 0 ? "Vikram Singh" : "Rohan Deshmukh");
    let roommateDept = isFemale ? "CSE • Roll 252921235" : (rollSuffix % 2 === 0 ? "IT • Roll 252921208" : "CSE • Roll 252921204");
    let wifiName = isFemale ? `Gargi-C-${roomNo.replace(/[^0-9]/g, '')}` : (rollSuffix % 2 === 0 ? `Ramanujan-A-${roomNo.replace(/[^0-9]/g, '')}` : `Aryabhata-B-${roomNo.replace(/[^0-9]/g, '')}`);

    // Update Hostel Card DOM
    const hostelCard = document.querySelector("#tab-hostel-mess .grid.grid-cols-2");
    if (hostelCard) {
      hostelCard.innerHTML = `
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200">
          <span class="text-[10px] text-slate-500 block">Hostel Block</span>
          <strong class="text-slate-900 font-bold text-sm">${hall}</strong>
        </div>
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200">
          <span class="text-[10px] text-slate-500 block">Room &amp; Bed Number</span>
          <strong class="text-slate-900 font-bold text-sm">${roomNo} • ${bedId}</strong>
        </div>
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200">
          <span class="text-[10px] text-slate-500 block">Chief Warden</span>
          <strong class="text-slate-900 font-bold">${warden}</strong>
          <div class="text-[10px] text-slate-500">${wardenOffice}</div>
        </div>
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200">
          <span class="text-[10px] text-slate-500 block">Allotted Roommate</span>
          <strong class="text-slate-900 font-bold">${roommate}</strong>
          <div class="text-[10px] text-slate-500">${roommateDept}</div>
        </div>
      `;
    }

    const wifiEl = document.querySelector("#tab-hostel-mess span.font-mono");
    if (wifiEl) wifiEl.textContent = wifiName;

    // Update default values in gatepass generator
    const maintRoom = document.getElementById("maint-room");
    if (maintRoom) maintRoom.value = `${hall}, ${roomNo}`;
  }

  openHostelMaintenanceModal() {
    const modal = document.getElementById("hostel-maintenance-modal");
    if (modal) modal.classList.remove("hidden");
    if (window.lucide) window.lucide.createIcons();
  }

  closeHostelMaintenanceModal() {
    const modal = document.getElementById("hostel-maintenance-modal");
    if (modal) modal.classList.add("hidden");
  }

  handleHostelMaintenanceSubmit(e) {
    if (e) e.preventDefault();
    const cat = document.getElementById("maint-category") ? document.getElementById("maint-category").value : "Maintenance";
    const tktId = `HST-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    this.closeHostelMaintenanceModal();
    this.showToast("Service Ticket Filed!", `Ticket ${tktId} registered for ${cat}. Caretaker dispatched.`, "success");
  }

  handleGatepassSubmit(e) {
    if (e) e.preventDefault();
    const student = window.CampusIQService ? window.CampusIQService.currentUser : null;
    const type = document.getElementById("gatepass-type") ? document.getElementById("gatepass-type").value : "Day Outing";
    const retTime = document.getElementById("gatepass-return") ? document.getElementById("gatepass-return").value : "Today 08:30 PM";
    const dest = document.getElementById("gatepass-dest") ? document.getElementById("gatepass-dest").value : "City Library";

    const sName = document.getElementById("modal-gatepass-student");
    const sDetails = document.getElementById("modal-gatepass-details");
    const sValidity = document.getElementById("modal-gatepass-validity");

    if (sName) sName.textContent = student ? student.full_name : "Satyam Sambhale";
    if (sDetails) sDetails.textContent = `${type} • ${dest}`;
    if (sValidity) sValidity.textContent = `Valid Until: ${retTime}`;

    const modal = document.getElementById("egatepass-modal");
    if (modal) modal.classList.remove("hidden");
    this.showToast("E-Gatepass Active!", `Turnstile cryptographic pass generated. Security clearance verified.`, "success");
    if (window.lucide) window.lucide.createIcons();
  }

  closeGatepassModal() {
    const modal = document.getElementById("egatepass-modal");
    if (modal) modal.classList.add("hidden");
  }

  selectMessDay(day) {
    const mealsData = {
      "Monday": [
        { meal: "Breakfast (07:30 - 09:30 AM)", items: "Idli Sambar, Medu Vada, Fresh Banana, Masala Chai", cal: "420 kcal", tag: "Pure Veg", color: "emerald" },
        { meal: "Lunch (12:30 - 02:30 PM)", items: "Paneer Butter Masala, Dal Tadka, Jeera Rice, Phulka Roti, Salad & Curd", cal: "780 kcal", tag: "High Protein", color: "blue" },
        { meal: "Evening Snacks (05:00 - 06:15 PM)", items: "Vegetable Cutlet, Mint Chutney, Filter Coffee", cal: "290 kcal", tag: "Snack", color: "amber" },
        { meal: "Dinner (07:30 - 09:30 PM)", items: "Aloo Gobi Matar, Moong Dal, Steamed Rice, Chapati, Gulab Jamun", cal: "720 kcal", tag: "Special Feast", color: "purple" }
      ],
      "Tuesday": [
        { meal: "Breakfast (07:30 - 09:30 AM)", items: "Poha with Sev, Boiled Sprouts, Apple, Ginger Tea", cal: "390 kcal", tag: "Pure Veg", color: "emerald" },
        { meal: "Lunch (12:30 - 02:30 PM)", items: "Rajma Masala, Steamed Rice, Tawa Roti, Mix Veg Raita, Pickle", cal: "740 kcal", tag: "High Protein", color: "blue" },
        { meal: "Evening Snacks (05:00 - 06:15 PM)", items: "Samosa Chaat, Masala Chai, Biscuits", cal: "320 kcal", tag: "Snack", color: "amber" },
        { meal: "Dinner (07:30 - 09:30 PM)", items: "Bhindi Do Pyaza, Yellow Dal Fry, Tawa Roti, Rice, Rasgulla", cal: "680 kcal", tag: "Pure Veg", color: "purple" }
      ],
      "Wednesday": [
        { meal: "Breakfast (07:30 - 09:30 AM)", items: "Masala Dosa, Coconut Chutney, Sambar, Orange Juice", cal: "450 kcal", tag: "Pure Veg", color: "emerald" },
        { meal: "Lunch (12:30 - 02:30 PM)", items: "Chole Bhature / Steamed Rice, Dal Palak, Green Salad, Chaas", cal: "820 kcal", tag: "High Protein", color: "blue" },
        { meal: "Evening Snacks (05:00 - 06:15 PM)", items: "Corn Chaat, Lemon Tea, Peanut Sundal", cal: "240 kcal", tag: "Healthy", color: "amber" },
        { meal: "Dinner (07:30 - 09:30 PM)", items: "Matar Paneer, Dal Makhani, Phulka, Pulao Rice, Fruit Custard", cal: "760 kcal", tag: "Special Feast", color: "purple" }
      ],
      "Thursday": [
        { meal: "Breakfast (07:30 - 09:30 AM)", items: "Upma with Chutney, Boiled Egg / Banana, Tea / Coffee", cal: "410 kcal", tag: "Protein Rich", color: "emerald" },
        { meal: "Lunch (12:30 - 02:30 PM)", items: "Kadhai Paneer, Panchmel Dal, Jeera Rice, Butter Roti, Papad", cal: "790 kcal", tag: "Pure Veg", color: "blue" },
        { meal: "Evening Snacks (05:00 - 06:15 PM)", items: "Pav Bhaji, Filter Coffee, Cookies", cal: "350 kcal", tag: "Chef Special", color: "amber" },
        { meal: "Dinner (07:30 - 09:30 PM)", items: "Dum Aloo Kashmiri, Dal Tadka, Steamed Rice, Chapati, Kheer", cal: "710 kcal", tag: "Pure Veg", color: "purple" }
      ],
      "Friday": [
        { meal: "Breakfast (07:30 - 09:30 AM)", items: "Aloo Paratha, Curd, Mint Chutney, Butter, Hot Masala Tea", cal: "480 kcal", tag: "North Indian", color: "emerald" },
        { meal: "Lunch (12:30 - 02:30 PM)", items: "Shahi Paneer, Chana Dal, Peas Pulao, Tandoori Roti, Boondi Raita", cal: "830 kcal", tag: "High Protein", color: "blue" },
        { meal: "Evening Snacks (05:00 - 06:15 PM)", items: "Dhokla / Bhel Puri, Green Tea, Sev Murmura", cal: "260 kcal", tag: "Pure Veg", color: "amber" },
        { meal: "Dinner (07:30 - 09:30 PM)", items: "Veg Biryani with Mirchi Salan, Paneer Tikka Masala, Ice Cream", cal: "850 kcal", tag: "Grand Friday Feast", color: "purple" }
      ],
      "Saturday": [
        { meal: "Breakfast (07:30 - 09:30 AM)", items: "Puri Bhaji, Suji Halwa, Fresh Banana, Masala Chai", cal: "510 kcal", tag: "Special", color: "emerald" },
        { meal: "Lunch (12:30 - 02:30 PM)", items: "Kadhi Pakora, Steamed Basmati Rice, Aloo Jeera, Phulka, Papad", cal: "720 kcal", tag: "Homestyle", color: "blue" },
        { meal: "Evening Snacks (05:00 - 06:15 PM)", items: "Bread Pakora, Tomato Chutney, Ginger Tea", cal: "330 kcal", tag: "Snack", color: "amber" },
        { meal: "Dinner (07:30 - 09:30 PM)", items: "Mix Veg Curry, Dal Fry, Jeera Rice, Chapati, Moong Dal Halwa", cal: "740 kcal", tag: "Pure Veg", color: "purple" }
      ],
      "Sunday": [
        { meal: "Brunch (08:00 - 10:00 AM)", items: "Uttapam, Medu Vada, Sambar, Coconut Chutney, Cold Coffee", cal: "540 kcal", tag: "Sunday Brunch", color: "emerald" },
        { meal: "Lunch (12:30 - 02:30 PM)", items: "Paneer Lababdar, Dal Makhani, Veg Pulao, Garlic Naan, Rasmalai", cal: "890 kcal", tag: "Sunday Grand Buffet", color: "blue" },
        { meal: "Evening Snacks (05:00 - 06:15 PM)", items: "Pasta Arabiatta, Lemon Iced Tea, Garlic Toast", cal: "310 kcal", tag: "Youth Special", color: "amber" },
        { meal: "Dinner (07:30 - 09:30 PM)", items: "Light Khichdi & Kadhi / Paneer Bhurji, Chapati, Fresh Fruit Salad", cal: "620 kcal", tag: "Light & Healthy", color: "purple" }
      ]
    };

    const container = document.getElementById("mess-meals-grid");
    if (!container) return;

    const list = mealsData[day] || mealsData["Monday"];
    container.innerHTML = list.map(m => `
      <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-slate-800">${m.meal}</span>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-${m.color}-100 text-${m.color}-800">${m.tag}</span>
        </div>
        <div class="text-xs font-medium text-slate-700 leading-snug">${m.items}</div>
        <div class="text-[10px] text-slate-400 font-mono flex items-center justify-between pt-1 border-t border-slate-200">
          <span>Dietary Value:</span>
          <strong>${m.cal}</strong>
        </div>
      </div>
    `).join("");

    document.querySelectorAll(".mess-day-btn").forEach(btn => {
      if (btn.textContent.toLowerCase() === day.slice(0, 3).toLowerCase()) {
        btn.className = "mess-day-btn px-2.5 py-1 rounded-lg font-bold bg-[#0F172A] text-amber-300";
      } else {
        btn.className = "mess-day-btn px-2.5 py-1 rounded-lg font-semibold text-slate-700 hover:bg-slate-200";
      }
    });
  }

  rateMessFood(stars) {
    this.showToast("Mess Feedback Submitted!", `Thank you! You rated today's Annapurna meals ${stars}/5 stars. Feedback logged for Food Quality Inspector.`, "success");
  }

  // ====================================================================
  // TRAINING & PLACEMENT HANDLERS (100% Unique Per-Student)
  // ====================================================================
  renderPlacementsView(student) {
    if (!student) return;
    const cgpa = parseFloat(student.cgpa) || 7.5;
    
    const bandEl = document.getElementById("tp-band-standing");
    const cgpaEl = document.getElementById("tp-cgpa-score");
    const appliedCountEl = document.getElementById("tp-drives-count");

    if (cgpaEl) cgpaEl.textContent = student.cgpa;

    let bandText = "Tier-1 Super Dream";
    let bandClass = "text-lg font-black text-purple-700 mt-1";
    let appliedText = "2 Drives";

    if (cgpa >= 8.5) {
      bandText = "Tier-1 Super Dream";
      bandClass = "text-lg font-black text-purple-700 mt-1";
      appliedText = "3 Drives";
    } else if (cgpa >= 7.0) {
      bandText = "Tier-2 Dream Cohort";
      bandClass = "text-lg font-black text-blue-700 mt-1";
      appliedText = "2 Drives";
    } else {
      bandText = "Tier-3 Core Engineering";
      bandClass = "text-lg font-black text-slate-700 mt-1";
      appliedText = "1 Drive";
    }

    if (bandEl) {
      bandEl.textContent = bandText;
      bandEl.className = bandClass;
    }
    if (appliedCountEl) appliedCountEl.textContent = appliedText;

    // Update Company Apply Buttons based on this student's CGPA
    const googleCell = document.getElementById("drive-cell-google");
    const msCell = document.getElementById("drive-cell-microsoft");

    if (googleCell) {
      if (cgpa >= 8.5) {
        googleCell.innerHTML = `<button onclick="window.Portal.applyForPlacementDrive('google')" class="px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs transition">Apply Now</button>`;
      } else {
        googleCell.innerHTML = `<button onclick="window.Portal.applyForPlacementDrive('google')" class="px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-bold text-[10px] hover:bg-amber-200 transition">Requires 8.50 CGPA</button>`;
      }
    }

    if (msCell) {
      if (cgpa >= 8.0) {
        msCell.innerHTML = `<button onclick="window.Portal.applyForPlacementDrive('microsoft')" class="px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs transition">Apply Now</button>`;
      } else {
        msCell.innerHTML = `<button onclick="window.Portal.applyForPlacementDrive('microsoft')" class="px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-bold text-[10px] hover:bg-amber-200 transition">Requires 8.00 CGPA</button>`;
      }
    }
  }

  applyForPlacementDrive(companyKey) {
    const student = window.CampusIQService ? window.CampusIQService.currentUser : null;
    const cgpa = student ? parseFloat(student.cgpa) : 8.84;
    
    const cutoffs = {
      "google": { name: "Google India", minCgpa: 8.5 },
      "microsoft": { name: "Microsoft IDC", minCgpa: 8.0 },
      "deloitte": { name: "Deloitte USI", minCgpa: 7.0 },
      "lnt": { name: "L&T Technology Services", minCgpa: 6.5 }
    };

    const comp = cutoffs[companyKey];
    if (!comp) return;

    if (cgpa < comp.minCgpa) {
      this.showToast("Cutoff Requirement Notice", `${comp.name} requires minimum ${comp.minCgpa.toFixed(2)} CGPA. Your current standing is ${cgpa.toFixed(2)}. Check eligible Tier-2/3 drives!`, "warning");
      return;
    }

    const cell = document.getElementById(`drive-cell-${companyKey}`);
    if (cell) {
      cell.innerHTML = '<span class="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1.5"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600"></i><span>Applied &bull; Hall Ticket Issued</span></span>';
    }

    this.showToast("Application Registered!", `Applied successfully to ${comp.name}. Online assessment token: ASMT-${companyKey.toUpperCase()}-2026 issued!`, "success");
    if (window.lucide) window.lucide.createIcons();
  }

  openInternshipNocModal() {
    const student = window.CampusIQService ? window.CampusIQService.currentUser : null;
    if (student) {
      const nocStudentName = document.querySelector("#internship-noc-modal strong");
      if (nocStudentName) nocStudentName.textContent = student.full_name;
    }
    const modal = document.getElementById("internship-noc-modal");
    if (modal) modal.classList.remove("hidden");
    if (window.lucide) window.lucide.createIcons();
  }

  closeInternshipNocModal() {
    const modal = document.getElementById("internship-noc-modal");
    if (modal) modal.classList.add("hidden");
  }

  setupEventListeners() {
    // Close spotlight search dropdown when clicking outside
    document.addEventListener("click", (e) => {
      const dropdown = document.getElementById("spotlight-search-results");
      const searchInput = document.getElementById("portal-spotlight-search-input");
      if (dropdown && searchInput) {
        if (!dropdown.contains(e.target) && e.target !== searchInput) {
          dropdown.classList.add("hidden");
        }
      }
    });

    // Keyboard shortcut Ctrl+K or / to focus search
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey && e.key.toLowerCase() === "k") || (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA")) {
        e.preventDefault();
        const searchInput = document.getElementById("portal-spotlight-search-input");
        if (searchInput) {
          searchInput.focus();
          this.handleSpotlightSearch(searchInput.value);
        }
      }

      if (e.key === "Escape") {
        this.closeNoticeModal();
        this.closeEventModal();
        this.closePhotoUploadModal();
        this.closeSlaEscalationModal();
        this.clearSpotlightSearch();
      }
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.Portal = new CampusIQPortalController();
});
