import os

script_path = r"C:\Users\satyam sambhale\.gemini\antigravity\scratch\CampusIQ\script.js"
with open(script_path, "r", encoding="utf-8") as f:
    code = f.read()

# 1. Update navigateTo to trigger checkOwnerAdminView when page is admin
nav_needle = "else if (page === 'overview') fetchDashboardSummary();"
nav_replacement = "else if (page === 'overview') fetchDashboardSummary();\n    else if (page === 'admin') { if (typeof window.checkOwnerAdminView === 'function') window.checkOwnerAdminView(); }"

if nav_needle in code:
    code = code.replace(nav_needle, nav_replacement, 1)
    print("Added admin route handler in navigateTo!")

# 2. Add Owner Admin Functions before the closing `})();`
closing_needle = "})();"
pos = code.rfind(closing_needle)

owner_js = '''
  // ==============================================================
  // PRIVATE OWNER / ADMINISTRATOR MASTER CONSOLE CONTROLLER
  // ==============================================================
  let cachedOwnerStudents = [];

  window.checkOwnerAdminView = function() {
    const isUnlocked = sessionStorage.getItem('campusiq_owner_unlocked') === 'true' || currentUser?.role === 'admin';
    const lockGate = document.getElementById('ownerLockGate');
    const unlockedView = document.getElementById('ownerUnlockedView');

    if (!isUnlocked) {
      if (lockGate) lockGate.style.display = 'block';
      if (unlockedView) unlockedView.style.display = 'none';
    } else {
      if (lockGate) lockGate.style.display = 'none';
      if (unlockedView) unlockedView.style.display = 'block';
      window.fetchAdminCockpitData();
    }
  };

  window.handleOwnerUnlock = function(e) {
    e.preventDefault();
    const val = (document.getElementById('ownerPasskeyInput')?.value || '').trim();
    if (val === 'admin' || val === '2026' || val === 'admin123' || val === 'admin@campusiq.edu') {
      sessionStorage.setItem('campusiq_owner_unlocked', 'true');
      toast('👑 Owner Console Unlocked Successfully!');
      window.checkOwnerAdminView();
    } else {
      toast('Incorrect passkey. Use "admin" or PIN "2026".');
    }
  };

  window.lockOwnerConsole = function() {
    sessionStorage.removeItem('campusiq_owner_unlocked');
    toast('Owner console locked.');
    window.checkOwnerAdminView();
  };

  window.fetchAdminCockpitData = async function(forceRefresh = false) {
    try {
      // 1. Fetch from local backend overview endpoint
      const res = await fetch('/api/admin/overview', { headers: getAuthHeaders() });
      let backendData = { profiles: [], counts: {} };
      if (res.ok) {
        backendData = await res.json();
      }

      // 2. Fetch directly from Supabase 'students' table in parallel
      let supabaseStudents = [];
      try {
        const sbRes = await fetch('https://jlssyqpqpordksbgqzrp.supabase.co/rest/v1/students?select=*&order=id.desc', {
          headers: {
            'apikey': 'sb_publishable_8SXt24Djg97RTD4iRyVb7w_4oFVOXDT',
            'Authorization': 'Bearer sb_publishable_8SXt24Djg97RTD4iRyVb7w_4oFVOXDT'
          }
        });
        if (sbRes.ok) {
          supabaseStudents = await sbRes.json();
        }
      } catch (sbErr) {
        console.warn('Supabase students fetch warning:', sbErr);
      }

      // 3. Merge profiles uniquely by email
      const studentMap = new Map();

      // Add backend profiles first
      (backendData.profiles || []).forEach(p => {
        const em = (p.email || '').toLowerCase().trim();
        if (em) {
          studentMap.set(em, {
            id: p.student_id || p.id || 'N/A',
            name: p.full_name || em.split('@')[0],
            email: em,
            phone: p.phone_number || '-',
            roll: p.student_id || '-',
            dept: p.department || p.branch || 'Computer Science & Engineering',
            year: p.year_semester || 'Year 1, Sem 1',
            verified: Boolean(p.phone_verified),
            source: 'system'
          });
        }
      });

      // Overlay/Add Supabase students
      (supabaseStudents || []).forEach(s => {
        const em = (s.email || '').toLowerCase().trim();
        if (em) {
          const existing = studentMap.get(em) || {};
          studentMap.set(em, {
            id: s.id || existing.id || 'SPB',
            name: s.name || existing.name || em.split('@')[0],
            email: em,
            phone: s.phone || existing.phone || '-',
            roll: s.roll_number || existing.roll || `STU-${s.id}`,
            dept: s.department || existing.dept || 'Computer Science & Engineering',
            year: s.year || existing.year || '1st Year',
            verified: true,
            source: 'supabase'
          });
        }
      });

      cachedOwnerStudents = Array.from(studentMap.values());

      // 4. Update KPI numbers
      const totalCount = cachedOwnerStudents.length;
      const verifiedCount = cachedOwnerStudents.filter(s => s.verified || s.phone !== '-').length;
      const techCount = cachedOwnerStudents.filter(s => s.dept && (s.dept.includes('Computer') || s.dept.includes('Information') || s.dept.includes('AI'))).length;

      const elTotal = document.getElementById('ownerKpiTotalStudents');
      const elVerified = document.getElementById('ownerKpiVerifiedPhones');
      const elTech = document.getElementById('ownerKpiTechStudents');

      if (elTotal) elTotal.innerText = totalCount.toLocaleString();
      if (elVerified) elVerified.innerText = verifiedCount.toLocaleString();
      if (elTech) elTech.innerText = techCount.toLocaleString();

      window.filterOwnerTable();

      if (forceRefresh) toast(`Synced ${totalCount} student records directly from database!`);
    } catch (err) {
      console.warn('Error fetching admin cockpit data:', err);
    }
  };

  window.filterOwnerTable = function() {
    const q = (document.getElementById('ownerStudentSearch')?.value || '').toLowerCase().trim();
    const dept = (document.getElementById('ownerDeptFilter')?.value || '');

    const filtered = cachedOwnerStudents.filter(s => {
      const matchQ = !q || (s.name && s.name.toLowerCase().includes(q)) || (s.email && s.email.toLowerCase().includes(q)) || (s.roll && String(s.roll).toLowerCase().includes(q));
      const matchDept = !dept || (s.dept && s.dept.includes(dept));
      return matchQ && matchDept;
    });

    renderOwnerTable(filtered);
  };

  function renderOwnerTable(records) {
    const tbody = document.getElementById('ownerStudentsTableBody');
    const emptyState = document.getElementById('ownerEmptyTableState');
    const countLabel = document.getElementById('ownerTableCountLabel');

    if (!tbody) return;
    tbody.innerHTML = '';

    if (countLabel) {
      countLabel.innerText = `Showing ${records.length} of ${cachedOwnerStudents.length} students`;
    }

    if (records.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      return;
    }
    if (emptyState) emptyState.style.display = 'none';

    records.slice(0, 100).forEach(s => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-family:monospace;font-size:11px;color:#a9a0ff"><strong>${escapeHtml(s.roll)}</strong></td>
        <td><strong>${escapeHtml(s.name)}</strong></td>
        <td style="color:var(--muted);font-size:11px">${escapeHtml(s.email)}</td>
        <td style="font-family:monospace;font-size:11px">${escapeHtml(s.phone)}</td>
        <td><span class="info-pill" style="font-size:9px">${escapeHtml(s.dept)}</span></td>
        <td style="font-size:11px;color:var(--muted)">${escapeHtml(s.year)}</td>
        <td>
          <span style="display:inline-block;padding:2px 8px;border-radius:6px;font-size:9px;font-weight:700;background:rgba(16,185,129,0.15);color:#10b981">
            Active
          </span>
        </td>
        <td style="text-align:right">
          <button type="button" class="icon-btn" onclick="deleteOwnerStudentRecord('${escapeHtml(s.email)}')" title="Delete Record" style="color:#f87171;width:28px;height:28px;font-size:12px;margin-left:auto">
            🗑
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  window.openOwnerAddModal = function() {
    const modal = document.getElementById('ownerAddStudentModal');
    if (modal) modal.style.display = 'flex';
  };

  window.closeOwnerAddModal = function() {
    const modal = document.getElementById('ownerAddStudentModal');
    if (modal) modal.style.display = 'none';
  };

  window.handleOwnerCreateStudent = async function(e) {
    e.preventDefault();
    const newStudent = {
      full_name: document.getElementById('oAddName').value.trim(),
      email: document.getElementById('oAddEmail').value.trim().toLowerCase(),
      phone_number: document.getElementById('oAddPhone').value.trim(),
      student_id: document.getElementById('oAddRoll').value.trim(),
      year_semester: document.getElementById('oAddYear').value.trim(),
      department: document.getElementById('oAddDept').value,
      password: 'student123'
    };

    // 1. Optimistically add to local cache and table (0ms delay!)
    cachedOwnerStudents.unshift({
      id: newStudent.student_id,
      name: newStudent.full_name,
      email: newStudent.email,
      phone: newStudent.phone_number,
      roll: newStudent.student_id,
      dept: newStudent.department,
      year: newStudent.year_semester,
      verified: true,
      source: 'owner_console'
    });
    window.filterOwnerTable();
    window.closeOwnerAddModal();
    toast(`✓ Student "${newStudent.full_name}" added to database!`);

    // 2. Direct background sync to Supabase students table
    try {
      fetch('https://jlssyqpqpordksbgqzrp.supabase.co/rest/v1/students', {
        method: 'POST',
        headers: {
          'apikey': 'sb_publishable_8SXt24Djg97RTD4iRyVb7w_4oFVOXDT',
          'Authorization': 'Bearer sb_publishable_8SXt24Djg97RTD4iRyVb7w_4oFVOXDT',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: newStudent.full_name,
          email: newStudent.email,
          phone: newStudent.phone_number,
          roll_number: newStudent.student_id,
          department: newStudent.department,
          year: newStudent.year_semester,
          extra_details: JSON.stringify({ created_by: 'owner_console', last_active: new Date().toISOString() })
        })
      });
    } catch (err) {}

    // 3. Background sync to local backend
    try {
      fetch('/api/admin/student/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
        body: JSON.stringify(newStudent)
      });
    } catch (err) {}
  };

  window.deleteOwnerStudentRecord = async function(email) {
    if (!confirm(`Delete student record for ${email}?`)) return;

    cachedOwnerStudents = cachedOwnerStudents.filter(s => s.email !== email);
    window.filterOwnerTable();
    toast(`Record removed for ${email}`);

    // Sync delete to Supabase
    try {
      fetch(`https://jlssyqpqpordksbgqzrp.supabase.co/rest/v1/students?email=eq.${encodeURIComponent(email)}`, {
        method: 'DELETE',
        headers: {
          'apikey': 'sb_publishable_8SXt24Djg97RTD4iRyVb7w_4oFVOXDT',
          'Authorization': 'Bearer sb_publishable_8SXt24Djg97RTD4iRyVb7w_4oFVOXDT'
        }
      });
    } catch (err) {}
  };

  window.exportOwnerStudentsCSV = function() {
    if (cachedOwnerStudents.length === 0) return toast('No students to export.');
    const headers = ['Roll No', 'Full Name', 'Email', 'Phone', 'Department', 'Semester/Year'];
    const rows = cachedOwnerStudents.map(s => [
      `"${s.roll}"`,
      `"${s.name.replace(/"/g, '""')}"`,
      `"${s.email.replace(/"/g, '""')}"`,
      `"${s.phone}"`,
      `"${s.dept}"`,
      `"${s.year}"`
    ]);

    const csvContent = headers.join(',') + '\\n' + rows.map(r => r.join(',')).join('\\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CampusIQ_All_Students_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    toast('Student database exported to CSV!');
  };

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>'"]/g, t => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[t] || t));
  }

'''

if pos != -1:
    code = code[:pos] + owner_js + code[pos:]
    with open(script_path, "w", encoding="utf-8") as f:
        f.write(code)
    print("Owner Admin JavaScript successfully injected into script.js!")
else:
    print("Closing needle not found!")
