import os

index_path = r"C:\Users\satyam sambhale\.gemini\antigravity\scratch\CampusIQ\index.html"
with open(index_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Update sidebar
sidebar_anchor = 'id="navAdminBtn"'
pos = html.find(sidebar_anchor)
if pos != -1:
    line_start = html.rfind('<a', 0, pos)
    line_end = html.find('</a>', pos) + 4
    if line_start != -1 and line_end != -1:
        new_btn = '<button class="nav" data-page="admin" id="navAdminBtn" style="display:flex;color:#a9a0ff;border:1px solid rgba(169,160,255,0.22);background:rgba(128,112,250,0.12)" title="Private Owner Administrator Cockpit"><i>🔒</i><span>Owner Admin Studio</span></button>'
        html = html[:line_start] + new_btn + html[line_end:]
        print("Sidebar button updated to inline Owner Admin button!")

# 2. Update page-admin
page_admin_marker = 'id="page-admin">'
p_pos = html.find(page_admin_marker)
if p_pos != -1:
    end_tag = html.find('</section>', p_pos)
    old_section_inner = html[p_pos + len(page_admin_marker):end_tag]

    new_section_inner = '''
      <!-- PRIVATE OWNER GATE: LOCKED VIEW -->
      <div id="ownerLockGate" class="panel" style="max-width:540px;margin:30px auto;padding:40px 30px;text-align:center;border-radius:20px;border:1px solid rgba(169,160,255,0.3);box-shadow:0 20px 50px rgba(0,0,0,0.4)">
        <div style="width:64px;height:64px;border-radius:18px;background:linear-gradient(135deg,#8070fa,#6254e5);color:#fff;display:grid;place-items:center;font-size:30px;margin:0 auto 18px;box-shadow:0 8px 25px rgba(99,84,229,0.4)">
          🔒
        </div>
        <p class="eyebrow" style="color:#a9a0ff;letter-spacing:1.5px;font-weight:800;font-size:10px">CONFIDENTIAL ACCESS</p>
        <h2 style="font:800 24px Manrope;margin:8px 0 10px;color:var(--ink)">Owner & Administrator Console</h2>
        <p style="color:var(--muted);font-size:12px;line-height:1.7;margin:0 0 24px">
          This portal provides access to all enrolled student database records, total student counts, and live Supabase synchronization.
        </p>

        <form id="ownerPasskeyForm" onsubmit="handleOwnerUnlock(event)" style="display:grid;gap:12px;text-align:left">
          <label style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase">Enter Owner Passkey / PIN</label>
          <div style="position:relative">
            <input type="password" id="ownerPasskeyInput" placeholder="Enter admin passkey (e.g. admin or 2026)" required style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:13px;outline:none" />
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;color:var(--muted)">
            <span>Default Passkey: <code style="color:#a9a0ff">admin</code> or PIN <code style="color:#a9a0ff">2026</code></span>
          </div>
          <button type="submit" class="signin-btn" style="margin-top:8px;padding:12px;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:8px">
            <i>🔓</i><span>Unlock Master Directory</span>
          </button>
        </form>
      </div>

      <!-- PRIVATE OWNER CONSOLE: UNLOCKED VIEW -->
      <div id="ownerUnlockedView" style="display:none;space-y:24px">
        <div class="page-intro" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px">
          <div>
            <p class="eyebrow" style="color:#10b981;font-weight:800">👑 &nbsp; CONFIDENTIAL OWNER CONTROL</p>
            <h1>Student <span class="gradient">Master Directory.</span></h1>
            <p class="subtitle">Complete real-time records from central database & Supabase cloud tables.</p>
          </div>
          <div style="display:flex;align-items:center;gap:10px">
            <button type="button" class="signin-btn" onclick="openOwnerAddModal()" style="font-size:11px;padding:9px 14px;display:flex;align-items:center;gap:6px">
              <i>➕</i><span>Add Student</span>
            </button>
            <button type="button" class="icon-btn" onclick="exportOwnerStudentsCSV()" title="Export all students to CSV" style="width:auto;padding:0 14px;font-size:11px;font-weight:700;display:flex;align-items:center;gap:6px">
              <i>📥</i><span>Export CSV</span>
            </button>
            <button type="button" class="icon-btn" onclick="lockOwnerConsole()" title="Lock private view" style="width:auto;padding:0 12px;font-size:11px;font-weight:700;color:#f87171;display:flex;align-items:center;gap:4px">
              <i>🔒</i><span>Lock</span>
            </button>
          </div>
        </div>

        <!-- 4 KPI SUMMARY CARDS -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px;margin:24px 0">
          <article class="stat" style="border-left:4px solid #8070fa">
            <p>TOTAL ENROLLED STUDENTS</p>
            <strong id="ownerKpiTotalStudents" style="font-size:28px">0</strong>
            <small style="color:#10b981;font-weight:700">● Live in Database & Supabase</small>
          </article>
          <article class="stat" style="border-left:4px solid #6355e8">
            <p>VERIFIED CONTACTS</p>
            <strong id="ownerKpiVerifiedPhones" style="font-size:28px">0</strong>
            <small style="color:var(--muted)">Phone Verified Students</small>
          </article>
          <article class="stat" style="border-left:4px solid #10b981">
            <p>ENGINEERING & TECH</p>
            <strong id="ownerKpiTechStudents" style="font-size:28px">0</strong>
            <small style="color:var(--muted)">Computer Science & IT</small>
          </article>
          <article class="stat" style="border-left:4px solid #f59e0b">
            <p>DATABASE HEALTH</p>
            <strong style="font-size:22px;color:#10b981">200 OK</strong>
            <small style="color:var(--muted)">Supabase Real-Time Sync</small>
          </article>
        </div>

        <!-- SEARCH AND FILTER CONTROLS -->
        <div class="panel" style="padding:14px 18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:20px">
          <div style="display:flex;align-items:center;gap:8px;flex:1;min-width:240px">
            <span style="color:var(--muted);font-size:14px">🔍</span>
            <input type="text" id="ownerStudentSearch" oninput="filterOwnerTable()" placeholder="Search by name, email, roll number, or department..." style="width:100%;border:0;background:transparent;color:var(--ink);font-size:12px;outline:none" />
          </div>
          <div style="display:flex;align-items:center;gap:10px">
            <select id="ownerDeptFilter" onchange="filterOwnerTable()" style="padding:6px 10px;border-radius:8px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:11px;outline:none">
              <option value="">All Departments</option>
              <option value="Computer Science">Computer Science & Engineering</option>
              <option value="Information Technology">Information Technology</option>
              <option value="AI & Data Science">AI & Data Science</option>
              <option value="Electronics">Electronics & Telecommunication</option>
              <option value="Mechanical">Mechanical Engineering</option>
              <option value="Civil">Civil Engineering</option>
            </select>
            <button type="button" class="icon-btn" onclick="fetchAdminCockpitData(true)" title="Refresh data" style="width:34px;height:34px;font-size:14px">
              🔄
            </button>
          </div>
        </div>

        <!-- MASTER STUDENTS DIRECTORY TABLE -->
        <article class="panel table-panel">
          <div style="padding:14px 18px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between">
            <h3 style="font:700 14px Manrope;margin:0">Enrolled Student Directory</h3>
            <span id="ownerTableCountLabel" style="font-size:11px;color:var(--muted);font-weight:600">Showing all records</span>
          </div>
          <div class="table-wrap" style="max-height:500px;overflow-y:auto">
            <table>
              <thead>
                <tr>
                  <th>ROLL NO</th>
                  <th>STUDENT NAME</th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th>DEPARTMENT</th>
                  <th>SEMESTER</th>
                  <th>STATUS</th>
                  <th style="text-align:right">ACTIONS</th>
                </tr>
              </thead>
              <tbody id="ownerStudentsTableBody">
                <!-- Populated dynamically -->
              </tbody>
            </table>
          </div>
          <div id="ownerEmptyTableState" style="display:none;padding:32px;text-align:center;color:var(--muted);font-size:12px">
            No matching student records found.
          </div>
        </article>

        <!-- OPEN SUPPORT TICKETS ACCORDION -->
        <div class="section-title" style="margin-top:36px">
          <div>
            <h2>Open Student Support Tickets</h2>
            <p>Respond to student queries and update ticket resolution status.</p>
          </div>
        </div>
        <div id="adminTicketsContainer">
          <!-- Populated from /api/admin/tickets -->
        </div>

        <!-- AUDIT LOGS -->
        <div class="section-title" style="margin-top:36px">
          <div>
            <h2>Security & Operational Audit Logs</h2>
            <p>Tamper-evident system activity log.</p>
          </div>
        </div>
        <article class="panel table-panel">
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>TIMESTAMP</th>
                  <th>ACTOR</th>
                  <th>ACTION</th>
                  <th>ENTITY</th>
                  <th>TARGET ID</th>
                </tr>
              </thead>
              <tbody id="adminAuditLogsBody">
                <!-- Populated from /api/admin/audit-logs -->
              </tbody>
            </table>
          </div>
        </article>
      </div>

      <!-- OWNER QUICK ADD STUDENT MODAL -->
      <div id="ownerAddStudentModal" class="backdrop" style="display:none">
        <div class="modal" style="max-width:480px;text-align:left">
          <button type="button" onclick="closeOwnerAddModal()" style="position:absolute;right:14px;top:14px;background:none;border:0;font-size:20px;cursor:pointer">✕</button>
          <h3 style="font:800 18px Manrope;margin:0 0 16px;color:var(--ink)">Add New Student</h3>
          
          <form onsubmit="handleOwnerCreateStudent(event)" style="display:grid;gap:12px">
            <div>
              <label style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase">Full Name *</label>
              <input type="text" id="oAddName" required placeholder="Full Name" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:12px" />
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
              <div>
                <label style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase">Email Address *</label>
                <input type="email" id="oAddEmail" required placeholder="student@campusiq.edu" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:12px" />
              </div>
              <div>
                <label style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase">Mobile Phone *</label>
                <input type="tel" id="oAddPhone" required placeholder="07972179785" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:12px" />
              </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
              <div>
                <label style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase">Roll / Student ID *</label>
                <input type="text" id="oAddRoll" required placeholder="252921200" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:12px" />
              </div>
              <div>
                <label style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase">Year / Semester *</label>
                <input type="text" id="oAddYear" required placeholder="Year 1, Sem 1" value="Year 1, Sem 1" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:12px" />
              </div>
            </div>
            <div>
              <label style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase">Department *</label>
              <select id="oAddDept" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:12px">
                <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                <option value="Information Technology">Information Technology</option>
                <option value="AI & Data Science">AI & Data Science</option>
                <option value="Electronics & Telecommunication">Electronics & Telecommunication</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
              </select>
            </div>
            <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:10px">
              <button type="button" onclick="closeOwnerAddModal()" class="icon-btn" style="width:auto;padding:8px 16px;font-size:12px">Cancel</button>
              <button type="submit" class="signin-btn" style="padding:8px 18px;font-size:12px">Save Directly</button>
            </div>
          </form>
        </div>
      </div>

      <footer>
        © 2026 CampusIQ <span>Built for a more connected campus • Single Unified Architecture</span>
        <label>Production Edition • Verified Student & Owner Platform</label>
      </footer>
    '''
    html = html[:p_pos + len(page_admin_marker)] + new_section_inner + html[end_tag:]
    print("page-admin section successfully updated with complete Private Owner Console!")

with open(index_path, "w", encoding="utf-8") as f:
    f.write(html)
print("CampusIQ/index.html updated successfully!")
