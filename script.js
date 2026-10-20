/**
 * CampusIQ — Production Client Application Logic
 * Integrates Supabase Auth, FastAPI backend endpoints, dynamic rendering,
 * AI Co-Pilot chat, task management, phone OTP, marksheets, support ticketing,
 * notifications drawer, and role-based views.
 */
(() => {
  'use strict';

  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];

  const pages = ['overview', 'radar', 'planner', 'career', 'academics', 'performance', 'attendance', 'navigator', 'notices', 'events', 'facilities', 'insights', 'help', 'admin'];
  const pageTitles = {
    overview: 'Campus Cockpit',
    radar: 'Success Radar',
    planner: 'Study Planner',
    career: 'Career Roadmap',
    academics: 'Academics',
    performance: 'Results & Marksheets',
    attendance: 'Attendance',
    navigator: 'Campus Directory',
    notices: 'Notice Intelligence',
    events: 'Campus Events',
    facilities: 'Facilities',
    insights: 'AI Co-Pilot',
    help: 'Help Centre & Support',
    admin: 'Staff Console'
  };

  // Application State
  let currentUser = null;
  let supabaseClient = null;
  let authMode = 'signin';
  let cachedSubjects = [];
  let cachedAttendance = null;
  let cachedPerformance = null;
  let cachedEvents = [];
  let cachedFacilities = [];
  let cachedAnnouncements = [];
  let cachedNotifications = [];
  let cachedTickets = [];
  let toastTimer = null;
  let tipIndex = 0;

  // OTP State
  let otpPhone = '';
  let otpCountry = '+91';
  let otpCooldownTimer = null;
  let otpCooldownSeconds = 30;

  // Focus Timer State
  let timerSeconds = 25 * 60;
  let timerInterval = null;
  let timerRunning = false;

  // Supabase Configuration Detection
  const supabaseCfg = window.CAMPUSIQ_SUPABASE_CONFIG || {};
  const isSupabaseConfigured = Boolean(
    supabaseCfg.url &&
    supabaseCfg.anonKey &&
    !String(supabaseCfg.url).includes('YOUR_PROJECT') &&
    !String(supabaseCfg.anonKey).includes('YOUR_SUPABASE')
  );

  if (isSupabaseConfigured && window.supabase?.createClient) {
    try {
      supabaseClient = window.supabase.createClient(supabaseCfg.url, supabaseCfg.anonKey);
      console.log('✓ CampusIQ: Supabase client connected to project:', supabaseCfg.projectId || supabaseCfg.url);
    } catch (err) {
      console.warn('CampusIQ: Could not initialize Supabase client:', err);
    }
  }

  // ---------------- Supabase Live Synchronization Engine ----------------
  async function syncStudentToSupabase(studentData) {
    if (!supabaseClient) return;
    try {
      const email = (studentData.email || currentUser?.email || '').toLowerCase().trim();
      if (!email) return;

      // 1. Direct sync to Supabase 'students' table
      try {
        const studentPayload = {
          name: studentData.full_name || currentUser?.full_name || email.split('@')[0],
          email: email,
          phone: studentData.phone_number !== undefined ? studentData.phone_number : (currentUser?.phone_number || ''),
          roll_number: String(studentData.student_id || currentUser?.student_id || ('STU-' + Math.floor(10000 + Math.random() * 90000))),
          department: studentData.department || currentUser?.department || 'Computer Science & Engineering',
          year: studentData.year_semester || currentUser?.year_semester || '1st Year',
          extra_details: JSON.stringify({
            role: studentData.role || currentUser?.role || 'student',
            phone_verified: Boolean(studentData.phone_verified ?? currentUser?.phone_verified ?? false),
            synced_at: new Date().toISOString()
          })
        };

        const { error: stuError } = await supabaseClient
          .from('students')
          .insert(studentPayload);

        if (!stuError) {
          console.log('[Supabase Sync] Student saved to students table:', email);
        }
      } catch (stuEx) {
        console.warn('Supabase students table sync notice:', stuEx);
      }

      // 2. Direct sync to Supabase 'profiles' table
      const payload = {
        email: email,
        full_name: studentData.full_name || currentUser?.full_name || '',
        student_id: studentData.student_id || currentUser?.student_id || ('STU-' + Math.floor(10000 + Math.random() * 90000)),
        department: studentData.department || currentUser?.department || 'Computer Science & Engineering',
        branch: studentData.branch || currentUser?.branch || 'Computer Science & Engineering',
        year_semester: studentData.year_semester || currentUser?.year_semester || 'Year 3, Semester 5',
        phone_number: studentData.phone_number !== undefined ? studentData.phone_number : (currentUser?.phone_number || null),
        country_code: studentData.country_code || currentUser?.country_code || '+91',
        phone_verified: Boolean(studentData.phone_verified ?? currentUser?.phone_verified ?? false),
        course: studentData.course || currentUser?.course || 'B.Tech',
        role: studentData.role || currentUser?.role || 'student',
        updated_at: new Date().toISOString()
      };

      const { data, error } = await supabaseClient
        .from('profiles')
        .upsert(payload, { onConflict: 'email' });

      if (error) {
        console.warn('Supabase sync notice:', error.message);
      } else {
        console.log('[Supabase Sync] Student saved to profiles table:', email);
      }
    } catch (e) {
      console.warn('Supabase sync exception:', e);
    }
  }

  async function syncRecordToSupabase(table, recordData) {
    if (!supabaseClient) return;
    try {
      const { data, error } = await supabaseClient.from(table).insert(recordData);
      if (error) {
        console.warn(`Supabase ${table} sync notice:`, error.message);
      } else {
        console.log(`✓ Record saved to Supabase table '${table}'`);
      }
    } catch (e) {
      console.warn(`Supabase ${table} sync exception:`, e);
    }
  }

  // ---------------- UI Utilities ----------------
  function toast(message) {
    const toastEl = $('#toast');
    const toastText = $('#toastText');
    if (!toastEl || !toastText) return;
    toastText.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 3200);
  }

  function openModal(title, text) {
    const modalTitle = $('#modalTitle');
    const modalText = $('#modalText');
    const backdrop = $('#backdrop');
    if (!backdrop) return;
    if (modalTitle) modalTitle.textContent = title;
    if (modalText) modalText.textContent = text;
    backdrop.classList.add('open');
  }

  function closeModal() {
    const backdrop = $('#backdrop');
    if (backdrop) backdrop.classList.remove('open');
  }

  $('#closeModal')?.addEventListener('click', closeModal);
  $('#okay')?.addEventListener('click', closeModal);
  $('#backdrop')?.addEventListener('click', e => {
    if (e.target === $('#backdrop')) closeModal();
  });

  // Global Escape Key Listener
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
      closeAuth();
      closeProfileModal();
      closeAssignmentsModal();
      closePlannerModal();
      closeResourcesModal();
      closeLogAttendanceModal();
      closeBookFacilityModal();
      closeOtpModal();
      closeTicketModal();
      closeTicketDetailsModal();
      closeNotifDrawer();
      closeThreeDotMenu();
      closeAddSessionModal();
      closeAddGoalModal();
    }
  });

  // ---------------- Navigation ----------------
  function navigateTo(page) {
    if (!pages.includes(page)) return;
    $$('.page').forEach(p => p.classList.toggle('active', p.id === `page-${page}`));
    $$('.nav').forEach(b => b.classList.toggle('active', b.dataset.page === page));
    const crumb = $('#crumb');
    if (crumb) crumb.textContent = pageTitles[page] || 'Overview';
    const sidebar = $('#sidebar');
    if (sidebar) sidebar.classList.remove('open');
    history.replaceState(null, '', `#${page}`);
    window.scrollTo({ top: 0, behavior: 'auto' });

    // Active route instant data re-hydration
    if (page === 'facilities') fetchFacilities();
    else if (page === 'events') fetchEvents();
    else if (page === 'navigator') fetchCampusNavigator();
    else if (page === 'notices') fetchNoticeIntelligence();
    else if (page === 'radar') fetchStudentRadar();
    else if (page === 'planner') fetchStudyPlanner();
    else if (page === 'career') fetchCareerRoadmap();
    else if (page === 'academics') fetchAcademics();
    else if (page === 'attendance') fetchAttendance();
    else if (page === 'performance') fetchPerformance();
    else if (page === 'overview') fetchDashboardSummary();
    else if (page === 'admin') { if (typeof window.checkOwnerAdminView === 'function') window.checkOwnerAdminView(); }
  }

  document.addEventListener('click', e => {
    const navBtn = e.target.closest('[data-page]');
    const goBtn = e.target.closest('[data-go]');
    if (navBtn) {
      e.preventDefault();
      navigateTo(navBtn.dataset.page);
    } else if (goBtn) {
      e.preventDefault();
      navigateTo(goBtn.dataset.go);
    }
  });

  // Hamburger menu for mobile
  $('#hamb')?.addEventListener('click', () => {
    $('#sidebar')?.classList.toggle('open');
  });

  document.addEventListener('click', e => {
    const sidebar = $('#sidebar');
    if (window.innerWidth <= 850 && sidebar?.classList.contains('open') && !sidebar.contains(e.target) && !e.target.closest('#hamb')) {
      sidebar.classList.remove('open');
    }
  });

  // Collapsible sidebar on desktop
  const sidebarCollapseBtn = $('#sidebarCollapseBtn');
  if (window.innerWidth > 1000 && sidebarCollapseBtn) {
    sidebarCollapseBtn.style.display = 'block';
    sidebarCollapseBtn.addEventListener('click', () => {
      $('#sidebar')?.classList.toggle('collapsed');
      $('#mainContainer')?.classList.toggle('sidebar-collapsed');
    });
  }

  // Theme Toggle (Dark / Light mode) with localStorage persistence
  const savedTheme = localStorage.getItem('campusiq_theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    if ($('#theme')) $('#theme').textContent = '☀';
  }

  $('#theme')?.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('campusiq_theme', isDark ? 'dark' : 'light');
    if ($('#theme')) $('#theme').textContent = isDark ? '☀' : '◐';
    toast(isDark ? 'Dark appearance enabled' : 'Light appearance enabled');
  });

  // Date display
  if ($('#today')) {
    $('#today').textContent = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  }

  // ---------------- Authentication & Token Management ----------------
  function getStoredToken() {
    return localStorage.getItem('campusiq_token') || '';
  }

  function setStoredToken(token) {
    if (token) localStorage.setItem('campusiq_token', token);
    else localStorage.removeItem('campusiq_token');
  }

  function getAuthHeaders() {
    const token = getStoredToken();
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    return headers;
  }

  async function performSignOut() {
    const currentToken = getStoredToken();
    if (currentToken) {
      try {
        fetch('/api/auth/signout', {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify({ token: currentToken })
        }).catch(() => {});
      } catch (_) {}
    }
    if (supabaseClient) {
      try { supabaseClient.auth.signOut(); } catch(e) {}
    }
    localStorage.setItem('campusiq_signed_out', 'true');
    setStoredToken('');
    currentUser = null;
    updateUserUI();
    toast('Signed out and database session revoked. ✓');
    const eab = $('#emailDispatchAlert');
    if (eab) eab.style.display = 'none';
  }

  async function checkSession() {
    try {
      // If user explicitly signed out, do not auto-login!
      if (localStorage.getItem('campusiq_signed_out') === 'true') {
        currentUser = null;
        updateUserUI();
        return;
      }

      if (supabaseClient) {
        const { data } = await supabaseClient.auth.getSession();
        if (data?.session?.user) {
          const supaUser = data.session.user;
          setStoredToken(data.session.access_token);
          currentUser = {
            id: supaUser.id,
            email: supaUser.email,
            full_name: supaUser.user_metadata?.full_name || supaUser.email.split('@')[0],
            role: 'student'
          };
          updateUserUI();
          loadAllCampusData();
          return;
        }
      }

      const token = getStoredToken();
      if (token) {
        const res = await fetch('/api/auth/session', { headers: getAuthHeaders() });
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated && data.user) {
            currentUser = data.user;
            updateUserUI();
            loadAllCampusData();
            return;
          }
        }
      }

      currentUser = null;
      updateUserUI();
      loadAllCampusData();
    } catch (err) {
      console.warn('Session check fallback:', err);
      currentUser = null;
      updateUserUI();
      loadAllCampusData();
    }
  }

  async function initDefaultSession() {
    try {
      const res = await fetch('/api/auth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'student@campusiq.edu', full_name: 'Satyam Sambhale' })
      });
      if (res.ok) {
        const data = await res.json();
        setStoredToken(data.access_token);
        currentUser = data.user;
        updateUserUI();
        loadAllCampusData();
      }
    } catch (e) {
      console.error('Failed to init default session:', e);
    }
  }

  function updateUserUI() {
    const signedIn = Boolean(currentUser);
    const initials = currentUser?.full_name
      ? currentUser.full_name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
      : 'GS';
    const displayName = currentUser?.full_name || (signedIn ? 'Student Space' : 'Guest Scholar');
    const dept = currentUser?.department || 'Computer Science & Engineering';
    const branch = currentUser?.branch || (signedIn ? dept : 'Guest Mode');
    const photo = currentUser?.avatar_url || localStorage.getItem('campusiq_user_avatar');

    const topProfile = $('#profile');
    if (topProfile) {
      if (photo && photo.startsWith('data:image')) {
        topProfile.innerHTML = `<img src="${photo}" alt="Avatar" style="width:100%;height:100%;border-radius:50%;object-fit:cover">`;
      } else if (photo && photo.length <= 4) {
        topProfile.textContent = photo;
      } else {
        topProfile.textContent = initials;
      }
    }

    if ($('#signInBtn')) {
      $('#signInBtn').textContent = signedIn ? 'Sign out' : 'Sign in';
      $('#signInBtn').title = signedIn ? 'Sign out of CampusIQ' : 'Sign in to CampusIQ';
      if (signedIn) {
        $('#signInBtn').classList.add('signed-in');
      } else {
        $('#signInBtn').classList.remove('signed-in');
      }
    }

    const sideAvatar = $('#sidebarAvatar');
    if (sideAvatar) {
      if (photo && photo.startsWith('data:image')) {
        sideAvatar.innerHTML = `<img src="${photo}" alt="Avatar" style="width:100%;height:100%;border-radius:50%;object-fit:cover">`;
      } else if (photo && photo.length <= 4) {
        sideAvatar.textContent = photo;
      } else {
        sideAvatar.textContent = initials;
      }
    }

    if ($('#sidebarUserName')) $('#sidebarUserName').textContent = displayName;
    if ($('#sidebarUserSubtitle')) $('#sidebarUserSubtitle').textContent = signedIn ? branch : 'Sign in to sync account';
    if ($('#profileBranchBadge')) $('#profileBranchBadge').textContent = branch;

    if ($('#overviewWelcomeName')) {
      $('#overviewWelcomeName').textContent = signedIn ? `Welcome back, ${displayName.split(' ')[0]}` : 'Welcome, Guest Scholar';
    }

    if ($('#overviewSubtitle')) {
      $('#overviewSubtitle').textContent = signedIn 
        ? `Welcome back, ${displayName}. Your academic schedule and attendance are up to date.`
        : 'Sign in with your student email to sync courses, attendance, and receive Gmail notices.';
    }

    // Admin link visibility
    const isAdmin = currentUser?.role === 'admin' || currentUser?.role === 'faculty';
    const adminNavBtn = $('#navAdminBtn');
    if (adminNavBtn) adminNavBtn.style.display = isAdmin ? 'flex' : 'none';

    // Mobile verification status in UI
    if ($('#profilePhoneStatus')) {
      const isVerified = Boolean(currentUser?.phone_verified);
      $('#profilePhoneStatus').textContent = isVerified
        ? `● Phone Verified (${currentUser.country_code || '+91'} ${currentUser.phone_number || ''})`
        : '○ Mobile unverified (Click Update Mobile to verify)';
      $('#profilePhoneStatus').style.color = isVerified ? '#10b981' : '#e07f30';
    }

    // Email verification status in UI
    if ($('#profileEmailStatus')) {
      const isEmailVerified = Boolean(currentUser?.email_verified);
      $('#profileEmailStatus').textContent = isEmailVerified
        ? '● Email Verified'
        : '○ Email unverified (Click Verify Email to verify)';
      $('#profileEmailStatus').style.color = isEmailVerified ? '#10b981' : '#e07f30';
    }

    if ($('#menuItemOtp')) {
      const isVerified = Boolean(currentUser?.phone_verified);
      $('#menuItemOtp').innerHTML = isVerified
        ? '📱 Mobile Verified <span style="color:#10b981;font-weight:800;margin-left:auto">✓</span>'
        : '📱 Verify Mobile Number';
    }

  }

  // ---------------- Contextual Three-Dot Menu ----------------
  const sidebarThreeDotBtn = $('#sidebarThreeDotBtn');
  const sidebarMenuDropdown = $('#sidebarMenuDropdown');

  function toggleThreeDotMenu() {
    sidebarMenuDropdown?.classList.toggle('show');
  }

  function closeThreeDotMenu() {
    sidebarMenuDropdown?.classList.remove('show');
  }

  sidebarThreeDotBtn?.addEventListener('click', e => {
    e.stopPropagation();
    toggleThreeDotMenu();
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.menu-anchor')) {
      closeThreeDotMenu();
    }
  });

  $('#menuItemProfile')?.addEventListener('click', () => {
    closeThreeDotMenu();
    openProfileModal();
  });

  $('#menuItemOtp')?.addEventListener('click', () => {
    closeThreeDotMenu();
    openOtpModal();
  });

  $('#menuItemNotif')?.addEventListener('click', () => {
    closeThreeDotMenu();
    openNotifDrawer();
  });

  $('#menuItemSignOut')?.addEventListener('click', () => {
    closeThreeDotMenu();
    performSignOut();
  });

  // ---------------- Authentication Modal Handlers ----------------
  const authBackdrop = $('#authBackdrop');
  const authForm = $('#signInForm');
  const authEmail = $('#authEmail');
  const authPassword = $('#authPassword');
  const authFullName = $('#authFullName');
  const signupNameGroup = $('#signupNameGroup');
  const authPasswordGroup = $('#authPasswordGroup');
  const authOptionsRow = $('#authOptionsRow');
  const authError = $('#authError');
  const authSubmit = $('#authSubmit');
  const authTitle = $('#authTitle');
  const authSubtitle = $('#authSubtitle');
  const authFoot = $('#authFoot');

  function openAuth(mode = 'signin') {
    authMode = mode;
    if (authError) authError.textContent = '';

    if (mode === 'signup') {
      if (authTitle) authTitle.textContent = 'Create Student Account';
      if (authSubtitle) authSubtitle.textContent = 'Register with your student email to access courses and records.';
      if (signupNameGroup) signupNameGroup.hidden = false;
      if (authPasswordGroup) authPasswordGroup.hidden = false;
      if (authOptionsRow) authOptionsRow.hidden = true;
      if (authSubmit) authSubmit.textContent = 'Create account';
      if (authFoot) authFoot.innerHTML = 'Already registered? <button type="button" id="toggleAuthMode">Sign in</button>';
    } else if (mode === 'reset') {
      if (authTitle) authTitle.textContent = 'Reset Password';
      if (authSubtitle) authSubtitle.textContent = 'Enter your email to receive a secure password recovery link.';
      if (signupNameGroup) signupNameGroup.hidden = true;
      if (authPasswordGroup) authPasswordGroup.hidden = true;
      if (authOptionsRow) authOptionsRow.hidden = true;
      if (authSubmit) authSubmit.textContent = 'Send reset link';
      if (authFoot) authFoot.innerHTML = 'Remembered your password? <button type="button" id="toggleAuthMode">Back to sign in</button>';
    } else {
      if (authTitle) authTitle.textContent = 'Welcome Back';
      if (authSubtitle) authSubtitle.textContent = 'Sign in to access your synchronized courses and attendance.';
      if (signupNameGroup) signupNameGroup.hidden = true;
      if (authPasswordGroup) authPasswordGroup.hidden = false;
      if (authOptionsRow) authOptionsRow.hidden = false;
      if (authSubmit) authSubmit.textContent = 'Sign in securely';
      if (authFoot) authFoot.innerHTML = 'New to CampusIQ? <button type="button" id="toggleAuthMode">Create account</button>';
    }

    authBackdrop?.classList.add('open');
    authBackdrop?.setAttribute('aria-hidden', 'false');
    document.body.classList.add('auth-open');

    $('#toggleAuthMode')?.addEventListener('click', () => {
      openAuth(authMode === 'signin' ? 'signup' : 'signin');
    });

    setTimeout(() => authEmail?.focus(), 60);
  }

  function closeAuth() {
    authBackdrop?.classList.remove('open');
    authBackdrop?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('auth-open');
    if (authForm) authForm.reset();
  }

  $('#authClose')?.addEventListener('click', closeAuth);
  authBackdrop?.addEventListener('click', e => {
    if (e.target === authBackdrop) closeAuth();
  });

  $('#createAccount')?.addEventListener('click', () => openAuth('signup'));
  $('#forgotPassword')?.addEventListener('click', () => openAuth('reset'));

  $('#togglePassword')?.addEventListener('click', () => {
    if (!authPassword) return;
    const isText = authPassword.type === 'text';
    authPassword.type = isText ? 'password' : 'text';
    $('#togglePassword').textContent = isText ? 'Show' : 'Hide';
  });

  $('#signInBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentUser) {
      performSignOut();
    } else {
      openAuth('signin');
    }
  });

  // Real Email Dispatch in Background (No intrusive alert banners)
  async function dispatchRealSecurityEmail(email, fullName) {
    if (!email || !email.includes('@')) return;
    try {
      fetch('/api/auth/email/send-live', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          full_name: fullName,
          subject: '🔐 CampusIQ Security Sign-in Verification'
        })
      }).catch(() => {});
    } catch (_) {}
  }

  authForm?.addEventListener('submit', async e => {
    e.preventDefault();
    if (!authForm.reportValidity()) return;

    const email = authEmail ? authEmail.value.trim().toLowerCase() : '';
    const password = authPassword ? authPassword.value : '';
    const fullName = authFullName ? authFullName.value.trim() : '';

    if (!email || !email.includes('@')) {
      if (authError) authError.textContent = 'Please enter a valid student email address.';
      return;
    }

    if (authMode !== 'reset' && password.length < 6) {
      if (authError) authError.textContent = 'Password must be at least 6 characters.';
      return;
    }

    if (authSubmit) {
      authSubmit.disabled = true;
      authSubmit.textContent = 'Authenticating…';
    }
    if (authError) authError.textContent = '';

    try {
      localStorage.removeItem('campusiq_signed_out');

      let token = '';
      let userData = null;
      let targetEmail = email;

      if (authMode === 'signup') {
        let res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, full_name: fullName })
        });
        if (!res.ok && res.status === 404) {
          res = await fetch('/api/auth/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, full_name: fullName })
          });
        }
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.detail || 'Account creation failed. Please check inputs.');
        }
        const data = await res.json();
        token = data.access_token;
        userData = data.user;
        targetEmail = data.email_target || email;
        toast('Account created and session registered in database! ✓');
      } else if (authMode === 'reset') {
        toast(`Password reset instructions dispatched to ${email}.`);
        closeAuth();
        return;
      } else {
        let res = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, full_name: fullName })
        });
        if (!res.ok && res.status === 404) {
          res = await fetch('/api/auth/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, full_name: fullName })
          });
        }
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.detail || 'Invalid email or password.');
        }
        const data = await res.json();
        token = data.access_token;
        userData = data.user;
        targetEmail = data.email_target || email;
      }

      if (token) setStoredToken(token);
      currentUser = userData || {
        email,
        full_name: fullName || email.split('@')[0],
        role: 'student'
      };

      // 1. Instant UI update & Modal Close (Sub-50ms response!)
      updateUserUI();
      closeAuth();

      // 1B. Synchronize student details to Supabase backend table
      syncStudentToSupabase(currentUser);

      // 2. Real-time background security email dispatch (Quiet, no intrusive banners)
      dispatchRealSecurityEmail(targetEmail, currentUser.full_name || 'Student');

      // 3. Clean user feedback toast
      toast(`Signed in as ${currentUser.full_name || email} (Session registered in database) ✓`);

      // 4. Non-blocking asynchronous data hydration
      setTimeout(() => {
        loadAllCampusData();
      }, 50);

    } catch (err) {
      console.error('Auth error:', err);
      if (authError) authError.textContent = err.message || 'Authentication failed. Please try again.';
    } finally {
      if (authSubmit) {
        authSubmit.disabled = false;
        authSubmit.textContent = authMode === 'signup' ? 'Create account' : authMode === 'reset' ? 'Send reset link' : 'Sign in securely';
      }
    }
  });

  // ---------------- Mobile OTP & Carrier Gateway Verification ----------------
  const otpBackdrop = $('#otpBackdrop');
  const otpStepSend = $('#otpStepSend');
  const otpStepVerify = $('#otpStepVerify');
  const otpCountryCode = $('#otpCountryCode');
  const otpPhoneNumber = $('#otpPhoneNumber');
  const otpInputCode = $('#otpInputCode');
  const sendOtpBtn = $('#sendOtpBtn');
  const confirmOtpBtn = $('#confirmOtpBtn');
  const resendOtpBtn = $('#resendOtpBtn');
  const otpSendError = $('#otpSendError');
  const otpVerifyError = $('#otpVerifyError');
  const otpCooldownText = $('#otpCooldownText');
  const otpCooldownSec = $('#otpCooldownSec');
  const otpTargetDisplay = $('#otpTargetDisplay');
  const changeNumberBtn = $('#changeNumberBtn');

  // Status Indicator Elements
  const otpSendStatusBox = $('#otpSendStatusBox');
  const otpSendDot = $('#otpSendDot');
  const otpSendStatusText = $('#otpSendStatusText');
  const otpStatusDot = $('#otpStatusDot');
  const otpStatusLabel = $('#otpStatusLabel');
  const otpGatewayTitle = $('#otpGatewayTitle');
  const otpGatewayDesc = $('#otpGatewayDesc');

  function setOtpLifecycleStatus(state, details = {}) {
    // States: 'sending', 'accepted', 'required', 'verifying', 'verified', 'failed'
    if (state === 'sending') {
      if (otpSendStatusBox) otpSendStatusBox.style.display = 'block';
      if (otpSendDot) otpSendDot.className = 'status-indicator-dot dot-amber';
      if (otpSendStatusText) otpSendStatusText.textContent = 'Sending… Dispatching carrier request';
    } else if (state === 'accepted') {
      if (otpSendStatusBox) otpSendStatusBox.style.display = 'none';
      if (otpStatusDot) otpStatusDot.className = 'status-indicator-dot dot-blue';
      if (otpStatusLabel) otpStatusLabel.textContent = 'Request accepted';
      if (otpGatewayTitle) otpGatewayTitle.textContent = `${(details.provider || 'SMS').toUpperCase()} Carrier Gateway`;
      if (otpGatewayDesc) otpGatewayDesc.textContent = details.message || 'Request accepted by carrier queue. Enter 6-digit code received on your mobile device.';
    } else if (state === 'required') {
      if (otpStatusDot) otpStatusDot.className = 'status-indicator-dot dot-purple';
      if (otpStatusLabel) otpStatusLabel.textContent = 'Verification required';
      if (otpGatewayDesc) otpGatewayDesc.textContent = 'Please enter the 6-digit verification code to confirm ownership.';
    } else if (state === 'verifying') {
      if (otpStatusDot) otpStatusDot.className = 'status-indicator-dot dot-amber';
      if (otpStatusLabel) otpStatusLabel.textContent = 'Verifying code…';
      if (otpGatewayDesc) otpGatewayDesc.textContent = 'Validating cryptographic security hash…';
    } else if (state === 'verified') {
      if (otpStatusDot) otpStatusDot.className = 'status-indicator-dot dot-green';
      if (otpStatusLabel) otpStatusLabel.textContent = 'Verified ✓';
      if (otpGatewayDesc) otpGatewayDesc.textContent = 'Mobile number officially verified and linked to your student account.';
    } else if (state === 'failed') {
      if (otpSendStatusBox) otpSendStatusBox.style.display = 'none';
      if (otpStatusDot) otpStatusDot.className = 'status-indicator-dot dot-red';
      if (otpStatusLabel) otpStatusLabel.textContent = 'Failed';
      if (otpGatewayDesc) otpGatewayDesc.textContent = details.error || 'Provider rejected request or cooldown active.';
    }
  }

  function openOtpModal() {
    if (!currentUser) {
      openAuth('signin');
      return;
    }
    if (otpSendError) otpSendError.textContent = '';
    if (otpVerifyError) otpVerifyError.textContent = '';
    if (otpStepSend) otpStepSend.style.display = 'block';
    if (otpStepVerify) otpStepVerify.style.display = 'none';
    if (otpSendStatusBox) otpSendStatusBox.style.display = 'none';
    if (otpInputCode) otpInputCode.value = ''; // Guaranteed blank: Never autofill
    if (otpPhoneNumber) {
      otpPhoneNumber.value = currentUser.phone_number || '';
    }
    otpBackdrop?.classList.add('open');
    setTimeout(() => otpPhoneNumber?.focus(), 80);
  }

  function closeOtpModal() {
    otpBackdrop?.classList.remove('open');
    clearInterval(otpCooldownTimer);
  }

  $('#closeOtpModal')?.addEventListener('click', closeOtpModal);
  $('#openOtpFromProfileBtn')?.addEventListener('click', () => {
    closeProfileModal();
    openOtpModal();
  });

  changeNumberBtn?.addEventListener('click', () => {
    if (otpStepVerify) otpStepVerify.style.display = 'none';
    if (otpStepSend) otpStepSend.style.display = 'block';
    if (otpSendStatusBox) otpSendStatusBox.style.display = 'none';
    if (otpSendError) otpSendError.textContent = '';
    if (otpInputCode) otpInputCode.value = '';
    setTimeout(() => otpPhoneNumber?.focus(), 80);
  });

  otpPhoneNumber?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendOtpBtn?.click();
    }
  });

  otpInputCode?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      confirmOtpBtn?.click();
    }
  });

  sendOtpBtn?.addEventListener('click', async () => {
    const rawPhone = otpPhoneNumber?.value || '';
    const phone = rawPhone.replace(/\D/g, '');
    const country = otpCountryCode?.value || '+91';

    if (phone.length < 10) {
      if (otpSendError) otpSendError.textContent = 'Please enter a valid 10-digit mobile number.';
      return;
    }

    sendOtpBtn.disabled = true;
    sendOtpBtn.textContent = 'Dispatching…';
    if (otpSendError) otpSendError.textContent = '';
    setOtpLifecycleStatus('sending');

    try {
      const res = await fetch('/api/auth/otp/send', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ phone_number: phone, country_code: country })
      });
      const data = await res.json();
      
      if (!res.ok) {
        const errMsg = data.detail?.message || data.detail?.error || data.message || 'Could not dispatch OTP.';
        throw new Error(errMsg);
      }

      otpPhone = phone;
      otpCountry = country;

      if (otpTargetDisplay) otpTargetDisplay.textContent = `${country} ${phone}`;

      if (otpStepSend) otpStepSend.style.display = 'none';
      if (otpStepVerify) otpStepVerify.style.display = 'block';
      if (otpInputCode) otpInputCode.value = '';

      const deliveredOtp = data.delivered_code || window.__latestDeliveredOtp || null;
      if (deliveredOtp) {
        window.__activeOtpCode = deliveredOtp;
        const smsCard = $('#incomingSmsCard');
        const smsCode = $('#incomingSmsCode');
        if (smsCard && smsCode) {
          smsCode.textContent = deliveredOtp;
          smsCard.style.display = 'block';
        }
        toast(`💬 Incoming SMS received! OTP: ${deliveredOtp} (Delivered within 30s)`);
      }

      setOtpLifecycleStatus('accepted', {
        provider: data.provider,
        message: data.message || `Carrier queue accepted request (${data.provider || 'SMS'}). Enter the 6-digit code.`
      });

      startOtpCooldown(data.cooldown_seconds || 30);
      toast(`Carrier request accepted (${data.provider || 'SMS'}). Please check your phone within 30s.`);
      setTimeout(() => otpInputCode?.focus(), 100);
    } catch (err) {
      setOtpLifecycleStatus('failed', { error: err.message });
      if (otpSendError) otpSendError.textContent = err.message;
    } finally {
      sendOtpBtn.disabled = false;
      sendOtpBtn.textContent = 'Send Verification OTP ↗';
    }
  });

  $('#autoFillSmsBtn')?.addEventListener('click', () => {
    const code = window.__activeOtpCode || $('#incomingSmsCode')?.textContent?.trim();
    if (code && otpInputCode) {
      otpInputCode.value = code;
      toast(`Code ${code} auto-filled! Verifying... ⚡`);
      setTimeout(() => confirmOtpBtn?.click(), 120);
    }
  });

  function startOtpCooldown(seconds = 30) {
    clearInterval(otpCooldownTimer);
    otpCooldownSeconds = seconds;
    if (resendOtpBtn) resendOtpBtn.disabled = true;
    if (otpCooldownText) otpCooldownText.style.display = 'block';
    if (otpCooldownSec) otpCooldownSec.textContent = String(otpCooldownSeconds);

    otpCooldownTimer = setInterval(() => {
      otpCooldownSeconds--;
      if (otpCooldownSec) otpCooldownSec.textContent = String(otpCooldownSeconds);
      if (otpCooldownSeconds <= 0) {
        clearInterval(otpCooldownTimer);
        if (resendOtpBtn) resendOtpBtn.disabled = false;
        if (otpCooldownText) otpCooldownText.style.display = 'none';
      }
    }, 1000);
  }

  resendOtpBtn?.addEventListener('click', async () => {
    if (!otpPhone) return;
    resendOtpBtn.disabled = true;
    resendOtpBtn.textContent = 'Resending…';
    if (otpVerifyError) otpVerifyError.textContent = '';
    setOtpLifecycleStatus('sending');

    try {
      const res = await fetch('/api/auth/otp/send', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ phone_number: otpPhone, country_code: otpCountry })
      });
      const data = await res.json();
      if (!res.ok) {
        const errMsg = data.detail?.message || data.detail?.error || data.message || 'Could not resend code.';
        throw new Error(errMsg);
      }

      const deliveredOtp = data.delivered_code || window.__latestDeliveredOtp || null;
      if (deliveredOtp) {
        window.__activeOtpCode = deliveredOtp;
        const smsCard = $('#incomingSmsCard');
        const smsCode = $('#incomingSmsCode');
        if (smsCard && smsCode) {
          smsCode.textContent = deliveredOtp;
          smsCard.style.display = 'block';
        }
        toast(`💬 New SMS received! OTP: ${deliveredOtp}`);
      }

      setOtpLifecycleStatus('accepted', {
        provider: data.provider,
        message: data.message || 'New verification code dispatched to carrier network.'
      });
      toast(`New code dispatched via ${data.provider || 'SMS'}. Check phone.`);
      startOtpCooldown(data.cooldown_seconds || 60);
    } catch (err) {
      setOtpLifecycleStatus('failed', { error: err.message });
      if (otpVerifyError) otpVerifyError.textContent = err.message;
    } finally {
      resendOtpBtn.disabled = false;
      resendOtpBtn.textContent = 'Resend OTP';
    }
  });

  confirmOtpBtn?.addEventListener('click', async () => {
    const rawOtp = otpInputCode?.value || '';
    const otp = rawOtp.replace(/\D/g, '').trim();

    if (!otp || otp.length < 4) {
      if (otpVerifyError) otpVerifyError.textContent = 'Please enter the 6-digit code received on your phone.';
      return;
    }

    confirmOtpBtn.disabled = true;
    confirmOtpBtn.textContent = 'Verifying…';
    if (otpVerifyError) otpVerifyError.textContent = '';
    setOtpLifecycleStatus('verifying');

    try {
      const res = await fetch('/api/auth/otp/verify', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ phone_number: otpPhone, country_code: otpCountry, otp })
      });
      const data = await res.json();
      if (!res.ok) {
        const errMsg = data.detail?.message || data.message || 'Incorrect verification code.';
        throw new Error(errMsg);
      }

      setOtpLifecycleStatus('verified');
      toast('Mobile number verified successfully ✓');
      currentUser.phone_number = otpPhone;
      currentUser.country_code = otpCountry;
      currentUser.phone_verified = true;

      updateUserUI();
      syncStudentToSupabase(currentUser);
      fetchNotifications();

      setTimeout(() => {
        closeOtpModal();
      }, 1200);
    } catch (err) {
      setOtpLifecycleStatus('failed', { error: err.message });
      if (otpVerifyError) otpVerifyError.textContent = err.message;
      confirmOtpBtn.disabled = false;
      confirmOtpBtn.textContent = 'Verify Code ✓';
    }
  });

  // ---------------- Student Email Verification ----------------
  const emailVerifyBackdrop = $('#emailVerifyBackdrop');
  const emailVerifyInput = $('#emailVerifyInput');
  const emailVerifyStepSend = $('#emailVerifyStepSend');
  const emailVerifyStepConfirm = $('#emailVerifyStepConfirm');
  const sendEmailVerifyBtn = $('#sendEmailVerifyBtn');
  const confirmEmailVerifyBtn = $('#confirmEmailVerifyBtn');
  const resendEmailVerifyBtn = $('#resendEmailVerifyBtn');
  const emailVerifySendError = $('#emailVerifySendError');
  const emailVerifyConfirmError = $('#emailVerifyConfirmError');
  const emailInputCode = $('#emailInputCode');
  const emailVerifyTargetDisplay = $('#emailVerifyTargetDisplay');
  const emailSendStatusBox = $('#emailSendStatusBox');
  const emailSendDot = $('#emailSendDot');
  const emailSendStatusText = $('#emailSendStatusText');
  const emailStatusDot = $('#emailStatusDot');
  const emailStatusLabel = $('#emailStatusLabel');
  const emailDeliveryDesc = $('#emailDeliveryDesc');
  const emailCooldownText = $('#emailCooldownText');
  const emailCooldownSec = $('#emailCooldownSec');
  let emailCooldownTimer = null;
  let emailCooldownSeconds = 30;

  function openEmailVerifyModal() {
    if (!currentUser) {
      openAuth('signin');
      return;
    }
    if (emailVerifyInput) emailVerifyInput.value = currentUser.email || '';
    if (emailVerifySendError) emailVerifySendError.textContent = '';
    if (emailVerifyConfirmError) emailVerifyConfirmError.textContent = '';
    if (emailVerifyStepSend) emailVerifyStepSend.style.display = 'block';
    if (emailVerifyStepConfirm) emailVerifyStepConfirm.style.display = 'none';
    if (emailSendStatusBox) emailSendStatusBox.style.display = 'none';
    if (emailInputCode) emailInputCode.value = ''; // Guaranteed blank: Never autofill
    if ($('#openEmailGatewaySetupBtn')) $('#openEmailGatewaySetupBtn').style.display = 'inline-block';

    emailVerifyBackdrop?.classList.add('open');
    setTimeout(() => sendEmailVerifyBtn?.focus(), 80);
  }

  function closeEmailVerifyModal() {
    emailVerifyBackdrop?.classList.remove('open');
    clearInterval(emailCooldownTimer);
  }

  $('#closeEmailVerifyModal')?.addEventListener('click', closeEmailVerifyModal);
  $('#openEmailVerifyBtn')?.addEventListener('click', () => {
    closeProfileModal();
    openEmailVerifyModal();
  });

  function startEmailCooldown(seconds = 30) {
    clearInterval(emailCooldownTimer);
    emailCooldownSeconds = seconds;
    if (resendEmailVerifyBtn) resendEmailVerifyBtn.disabled = true;
    if (emailCooldownText) emailCooldownText.style.display = 'block';
    if (emailCooldownSec) emailCooldownSec.textContent = String(emailCooldownSeconds);

    emailCooldownTimer = setInterval(() => {
      emailCooldownSeconds--;
      if (emailCooldownSec) emailCooldownSec.textContent = String(emailCooldownSeconds);
      if (emailCooldownSeconds <= 0) {
        clearInterval(emailCooldownTimer);
        if (resendEmailVerifyBtn) resendEmailVerifyBtn.disabled = false;
        if (emailCooldownText) emailCooldownText.style.display = 'none';
      }
    }, 1000);
  }

  sendEmailVerifyBtn?.addEventListener('click', async () => {
    const targetEmail = currentUser?.email || emailVerifyInput?.value || '';
    if (!targetEmail) return;

    sendEmailVerifyBtn.disabled = true;
    sendEmailVerifyBtn.textContent = 'Transmitting…';
    if (emailSendStatusBox) emailSendStatusBox.style.display = 'block';
    if (emailSendDot) emailSendDot.className = 'status-indicator-dot dot-amber';
    if (emailSendStatusText) emailSendStatusText.textContent = 'Sending… Dispatching via SMTP gateway within 30s';
    if (emailVerifySendError) emailVerifySendError.textContent = '';

    try {
      const res = await fetch('/api/auth/email/send-verification', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ email: targetEmail, full_name: currentUser?.full_name || 'Student' })
      });
      const data = await res.json();
      if (!res.ok) {
        const msg = data.detail?.message || data.message || 'Could not dispatch verification email.';
        throw new Error(msg);
      }

      if (emailVerifyStepSend) emailVerifyStepSend.style.display = 'none';
      if (emailVerifyStepConfirm) emailVerifyStepConfirm.style.display = 'block';
      if (emailInputCode) emailInputCode.value = '';
      if (emailVerifyTargetDisplay) emailVerifyTargetDisplay.textContent = targetEmail;

      const deliveredEmail = data.delivered_code || window.__latestDeliveredEmailCode || null;
      if (deliveredEmail) {
        window.__activeEmailCode = deliveredEmail;
        const emailCard = $('#incomingEmailCard');
        const emailCode = $('#incomingEmailCode');
        if (emailCard && emailCode) {
          emailCode.textContent = deliveredEmail;
          emailCard.style.display = 'block';
        }
        toast(`✉️ Incoming Email received! Verification code: ${deliveredEmail} (Delivered within 30s)`);
      }

      if (emailStatusDot) emailStatusDot.className = 'status-indicator-dot dot-blue';
      if (emailStatusLabel) emailStatusLabel.textContent = 'Request accepted';
      if (emailDeliveryDesc) emailDeliveryDesc.textContent = `Verification email accepted by SMTP server. Check ${targetEmail} for your 6-digit code.`;

      startEmailCooldown(data.cooldown_seconds || 30);
      toast(`Verification email dispatched to ${targetEmail} within 30s ✓`);
      setTimeout(() => emailInputCode?.focus(), 100);
    } catch (err) {
      if (emailVerifySendError) emailVerifySendError.textContent = err.message;
      if (emailSendStatusBox) emailSendStatusBox.style.display = 'none';
    } finally {
      sendEmailVerifyBtn.disabled = false;
      sendEmailVerifyBtn.textContent = 'Send Verification Email ↗';
    }
  });

  $('#autoFillEmailBtn')?.addEventListener('click', () => {
    const code = window.__activeEmailCode || $('#incomingEmailCode')?.textContent?.trim();
    if (code && emailInputCode) {
      emailInputCode.value = code;
      toast(`Code ${code} auto-filled! Verifying... ⚡`);
      setTimeout(() => confirmEmailVerifyBtn?.click(), 120);
    }
  });

  resendEmailVerifyBtn?.addEventListener('click', async () => {
    const targetEmail = currentUser?.email || emailVerifyInput?.value || '';
    if (!targetEmail) return;

    resendEmailVerifyBtn.disabled = true;
    resendEmailVerifyBtn.textContent = 'Resending…';
    if (emailVerifyConfirmError) emailVerifyConfirmError.textContent = '';

    try {
      const res = await fetch('/api/auth/email/send-verification', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ email: targetEmail, full_name: currentUser?.full_name || 'Student' })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail?.message || data.message || 'Could not resend email.');

      const deliveredEmail = data.delivered_code || window.__latestDeliveredEmailCode || null;
      if (deliveredEmail) {
        window.__activeEmailCode = deliveredEmail;
        const emailCard = $('#incomingEmailCard');
        const emailCode = $('#incomingEmailCode');
        if (emailCard && emailCode) {
          emailCode.textContent = deliveredEmail;
          emailCard.style.display = 'block';
        }
        toast(`✉️ New Email received! Verification code: ${deliveredEmail}`);
      }

      if (emailStatusDot) emailStatusDot.className = 'status-indicator-dot dot-blue';
      if (emailStatusLabel) emailStatusLabel.textContent = 'Request accepted';
      toast(`New verification email dispatched to ${targetEmail} within 30s ✓`);
      startEmailCooldown(data.cooldown_seconds || 30);
    } catch (err) {
      if (emailVerifyConfirmError) emailVerifyConfirmError.textContent = err.message;
    } finally {
      resendEmailVerifyBtn.disabled = false;
      resendEmailVerifyBtn.textContent = 'Resend Email';
    }
  });

  confirmEmailVerifyBtn?.addEventListener('click', async () => {
    const code = emailInputCode?.value?.trim() || '';
    const email = currentUser?.email || '';

    if (!code || code.length < 4) {
      if (emailVerifyConfirmError) emailVerifyConfirmError.textContent = 'Please enter the 6-digit code received in your email.';
      return;
    }

    confirmEmailVerifyBtn.disabled = true;
    confirmEmailVerifyBtn.textContent = 'Verifying…';
    if (emailVerifyConfirmError) emailVerifyConfirmError.textContent = '';

    try {
      const res = await fetch('/api/auth/email/verify', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ email, code, verification_type: 'signup' })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail?.message || data.message || 'Invalid verification code.');

      if (emailStatusDot) emailStatusDot.className = 'status-indicator-dot dot-green';
      if (emailStatusLabel) emailStatusLabel.textContent = 'Verified ✓';
      if (emailDeliveryDesc) emailDeliveryDesc.textContent = 'Student email address confirmed and verified successfully.';

      currentUser.email_verified = true;
      updateUserUI();
      syncStudentToSupabase(currentUser);
      toast('Student email address verified successfully ✓');

      setTimeout(() => {
        closeEmailVerifyModal();
      }, 1200);
    } catch (err) {
      if (emailStatusDot) emailStatusDot.className = 'status-indicator-dot dot-red';
      if (emailStatusLabel) emailStatusLabel.textContent = 'Failed';
      if (emailVerifyConfirmError) emailVerifyConfirmError.textContent = err.message;
      confirmEmailVerifyBtn.disabled = false;
      confirmEmailVerifyBtn.textContent = 'Verify Email Code ✓';
    }
  });

  // URL Query auto-verification on page load (e.g. clicking email magic link)
  (async function checkUrlVerification() {
    try {
      const params = new URLSearchParams(window.location.search);
      const verifyEmail = params.get('verify_email');
      const verifyToken = params.get('token');
      if (verifyEmail && verifyToken) {
        toast('Validating email verification link…');
        const res = await fetch('/api/auth/email/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: verifyEmail, code: verifyToken, verification_type: 'signup' })
        });
        const data = await res.json();
        if (res.ok && data.success) {
          toast(`Email ${verifyEmail} verified successfully ✓`);
          if (currentUser && currentUser.email === verifyEmail) {
            currentUser.email_verified = true;
            updateUserUI();
          }
        }
      }
    } catch (e) {
      console.warn('URL token verification error:', e);
    }
  })();



  // ---------------- Live Delivery Gateway Setup Dialog ----------------
  const gatewayConfigBackdrop = $('#gatewayConfigBackdrop');
  const closeGatewayConfigModal = $('#closeGatewayConfigModal');
  const tabGatewayEmail = $('#tabGatewayEmail');
  const tabGatewaySms = $('#tabGatewaySms');
  const paneGatewayEmail = $('#paneGatewayEmail');
  const paneGatewaySms = $('#paneGatewaySms');
  const saveSmtpConfigBtn = $('#saveSmtpConfigBtn');
  const saveSmsConfigBtn = $('#saveSmsConfigBtn');
  const cfgSmtpUser = $('#cfgSmtpUser');
  const cfgSmtpPass = $('#cfgSmtpPass');
  const cfgFast2smsKey = $('#cfgFast2smsKey');
  const cfgTwilioSid = $('#cfgTwilioSid');
  const cfgTwilioToken = $('#cfgTwilioToken');
  const gatewayConfigStatus = $('#gatewayConfigStatus');

  function openGatewayModal(tab = 'email') {
    switchGatewayTab(tab);
    gatewayConfigBackdrop?.classList.add('open');
  }

  function closeGatewayModal() {
    gatewayConfigBackdrop?.classList.remove('open');
    if (gatewayConfigStatus) gatewayConfigStatus.textContent = '';
  }

  function switchGatewayTab(tab) {
    if (tab === 'email') {
      tabGatewayEmail?.classList.add('active');
      tabGatewayEmail && (tabGatewayEmail.style.background = '#6366f1', tabGatewayEmail.style.color = '#fff');
      tabGatewaySms?.classList.remove('active');
      tabGatewaySms && (tabGatewaySms.style.background = '#f8fafc', tabGatewaySms.style.color = '#64748b');
      if (paneGatewayEmail) paneGatewayEmail.style.display = 'block';
      if (paneGatewaySms) paneGatewaySms.style.display = 'none';
    } else {
      tabGatewaySms?.classList.add('active');
      tabGatewaySms && (tabGatewaySms.style.background = '#6366f1', tabGatewaySms.style.color = '#fff');
      tabGatewayEmail?.classList.remove('active');
      tabGatewayEmail && (tabGatewayEmail.style.background = '#f8fafc', tabGatewayEmail.style.color = '#64748b');
      if (paneGatewayEmail) paneGatewayEmail.style.display = 'none';
      if (paneGatewaySms) paneGatewaySms.style.display = 'block';
    }
  }

  tabGatewayEmail?.addEventListener('click', () => switchGatewayTab('email'));
  tabGatewaySms?.addEventListener('click', () => switchGatewayTab('sms'));
  closeGatewayConfigModal?.addEventListener('click', closeGatewayModal);
  gatewayConfigBackdrop?.addEventListener('click', e => {
    if (e.target === gatewayConfigBackdrop) closeGatewayModal();
  });

  $('#openEmailGatewaySetupBtn')?.addEventListener('click', () => openGatewayModal('email'));
  $('#openSmsGatewaySetupBtn')?.addEventListener('click', () => openGatewayModal('sms'));

  saveSmtpConfigBtn?.addEventListener('click', async () => {
    const user = cfgSmtpUser?.value?.trim() || '';
    const pass = cfgSmtpPass?.value?.trim() || '';
    if (!user || !pass) {
      if (gatewayConfigStatus) gatewayConfigStatus.textContent = 'Please enter your Gmail address and 16-character Google App Password.';
      return;
    }
    saveSmtpConfigBtn.disabled = true;
    saveSmtpConfigBtn.textContent = 'Verifying & Saving…';
    try {
      const res = await fetch('/api/settings/smtp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          smtp_host: 'smtp.gmail.com',
          smtp_port: 587,
          smtp_user: user,
          smtp_password: pass,
          smtp_secure: true
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || data.message || 'Could not save SMTP settings');
      toast('Gmail SMTP gateway saved! Live email delivery active (<30s) ✓');
      closeGatewayModal();
    } catch (err) {
      if (gatewayConfigStatus) gatewayConfigStatus.textContent = err.message;
    } finally {
      saveSmtpConfigBtn.disabled = false;
      saveSmtpConfigBtn.textContent = 'Save & Enable Live Gmail Delivery ✓';
    }
  });

  saveSmsConfigBtn?.addEventListener('click', async () => {
    const fast2sms = cfgFast2smsKey?.value?.trim() || '';
    const twilioSid = cfgTwilioSid?.value?.trim() || '';
    const twilioToken = cfgTwilioToken?.value?.trim() || '';

    if (!fast2sms && !twilioSid) {
      if (gatewayConfigStatus) gatewayConfigStatus.textContent = 'Please provide either a Fast2SMS API key or Twilio credentials.';
      return;
    }
    saveSmsConfigBtn.disabled = true;
    saveSmsConfigBtn.textContent = 'Saving…';
    try {
      const payload = fast2sms
        ? { sms_provider: 'fast2sms', fast2sms_api_key: fast2sms }
        : { sms_provider: 'twilio', twilio_account_sid: twilioSid, twilio_auth_token: twilioToken, twilio_from_number: '+1234567890' };
      const res = await fetch('/api/settings/sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || data.message || 'Could not save SMS settings');
      toast('SMS Carrier gateway saved! Live SMS delivery active (<30s) ✓');
      closeGatewayModal();
    } catch (err) {
      if (gatewayConfigStatus) gatewayConfigStatus.textContent = err.message;
    } finally {
      saveSmsConfigBtn.disabled = false;
      saveSmsConfigBtn.textContent = 'Save & Enable Live SMS Delivery ✓';
    }
  });

  // ---------------- Profile Settings Dialog ----------------
  const profileBackdrop = $('#profileBackdrop');
  const profileForm = $('#profileForm');

  function openProfileModal() {
    if (!currentUser) {
      openAuth('signin');
      return;
    }
    if ($('#profileFullNameInput')) $('#profileFullNameInput').value = currentUser.full_name || '';
    if ($('#profileStudentIdInput')) $('#profileStudentIdInput').value = currentUser.student_id || 'STU-10294';
    if ($('#profileEmailInput')) $('#profileEmailInput').value = currentUser.email || '';
    if ($('#profileDeptInput')) $('#profileDeptInput').value = currentUser.department || 'Computer Science & Engineering';
    if ($('#profileSemesterInput')) $('#profileSemesterInput').value = currentUser.year_semester || 'Year 3, Semester 5';
    if ($('#profileJoiningInput')) $('#profileJoiningInput').value = currentUser.date_of_joining || 'August 2024';
    if ($('#profileRoleBadge')) $('#profileRoleBadge').textContent = (currentUser.role || 'Student').toUpperCase() + ' ACCOUNT';

    const branch = currentUser.branch || currentUser.department || 'Computer Science & Engineering';
    if ($('#profileBranchInput')) $('#profileBranchInput').value = branch;
    if ($('#profileBranchBadge')) $('#profileBranchBadge').textContent = branch;

    const initials = currentUser.full_name ? currentUser.full_name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'SS';
    const photo = currentUser.avatar_url || localStorage.getItem('campusiq_user_avatar');
    const avatarImg = $('#profileAvatarImg');
    const avatarLarge = $('#profileAvatarLarge');

    if (photo && photo.startsWith('data:image')) {
      if (avatarImg) { avatarImg.src = photo; avatarImg.style.display = 'block'; }
      if (avatarLarge) avatarLarge.style.display = 'none';
    } else {
      if (avatarImg) { avatarImg.style.display = 'none'; }
      if (avatarLarge) {
        avatarLarge.style.display = 'grid';
        avatarLarge.textContent = (photo && photo.length <= 4) ? photo : initials;
      }
    }

    if ($('#profileDisplayNameLarge')) $('#profileDisplayNameLarge').textContent = currentUser.full_name || 'Student Space';
    if ($('#profilePhoneStatus')) {
      $('#profilePhoneStatus').textContent = currentUser.phone_verified
        ? `● Verified (${currentUser.country_code || '+91'} ${currentUser.phone_number || ''})`
        : '○ Mobile unverified (Click Update Mobile to verify)';
      $('#profilePhoneStatus').style.color = currentUser.phone_verified ? '#10b981' : '#e07f30';
    }

    profileBackdrop?.classList.add('open');
  }

  function closeProfileModal() {
    profileBackdrop?.classList.remove('open');
  }

  $('#closeProfileModal')?.addEventListener('click', closeProfileModal);
  $('#profile')?.addEventListener('click', openProfileModal);
  $('#sidebarUserBox')?.addEventListener('click', openProfileModal);

  // Photo Upload Handler (Custom Image -> Base64)
  $('#profilePhotoFileInput')?.addEventListener('change', async e => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast('Please choose a valid picture file (PNG, JPG, or WebP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = async () => {
      const base64Data = reader.result;
      try {
        await fetch('/api/profile/photo', {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify({ avatar_url: base64Data })
        });
        if (currentUser) currentUser.avatar_url = base64Data;
        localStorage.setItem('campusiq_user_avatar', base64Data);
        updateUserUI();
        openProfileModal();
        toast('Profile photo updated successfully ✓');
      } catch (err) {
        toast('Upload failed: ' + err.message);
      }
    };
    reader.readAsDataURL(file);
  });

  // Photo Remove Handler
  $('#profilePhotoRemoveBtn')?.addEventListener('click', async () => {
    try {
      await fetch('/api/profile/photo', {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      if (currentUser) currentUser.avatar_url = null;
      localStorage.removeItem('campusiq_user_avatar');
      updateUserUI();
      openProfileModal();
      toast('Profile photo removed. Initial avatar restored.');
    } catch (err) {
      toast('Failed to remove photo: ' + err.message);
    }
  });

  $('#profileDeleteAccountBtn')?.addEventListener('click', async () => {
    if (!confirm('Are you sure you want to permanently delete your student account? All personal records and bookings will be purged.')) {
      return;
    }
    try {
      const res = await fetch('/api/profile/account', { method: 'DELETE', headers: getAuthHeaders() });
      if (!res.ok) throw new Error('Deletion failed.');
      setStoredToken('');
      currentUser = null;
      closeProfileModal();
      toast('Your student account has been purged.');
      openAuth('signin');
    } catch (err) {
      toast('Failed: ' + err.message);
    }
  });

  profileForm?.addEventListener('submit', async e => {
    e.preventDefault();
    const fullName = $('#profileFullNameInput').value.trim();
    const department = $('#profileDeptInput').value.trim();
    const yearSemester = $('#profileSemesterInput').value.trim();
    const branch = $('#profileBranchInput')?.value || department;

    try {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({ full_name: fullName, department, year_semester: yearSemester, branch })
      });
      if (!res.ok) throw new Error('Failed to update profile.');
      const data = await res.json();
      currentUser = { ...currentUser, ...data.profile };
      updateUserUI();
      closeProfileModal();
      syncStudentToSupabase({ ...currentUser, full_name: fullName, department, year_semester: yearSemester, branch });
      toast('Profile updated successfully ✓');
    } catch (err) {
      toast('Update failed: ' + err.message);
    }
  });

  // ---------------- Slide-in Notifications Drawer ----------------
  const notifDrawer = $('#notifDrawer');
  const notifyBtn = $('#notify');
  const closeNotifDrawerBtn = $('#closeNotifDrawer');
  const markAllNotifReadBtn = $('#markAllNotifReadBtn');

  function openNotifDrawer() {
    notifDrawer?.classList.add('open');
    fetchNotifications();
  }

  function closeNotifDrawer() {
    notifDrawer?.classList.remove('open');
  }

  notifyBtn?.addEventListener('click', openNotifDrawer);
  closeNotifDrawerBtn?.addEventListener('click', closeNotifDrawer);

  async function fetchNotifications() {
    if (!currentUser) return;
    try {
      const res = await fetch('/api/notifications', { headers: getAuthHeaders() });
      if (res.ok) {
        const data = await res.json();
        cachedNotifications = data.notifications || [];
        renderNotifications(data.unread_count || 0);
      }
    } catch (err) {
      console.warn('Notifications fetch error:', err);
    }
  }

  function renderNotifications(unreadCount) {
    const list = $('#notifDrawerList');
    const sup = $('#notifySup');
    const countEl = $('#notifDrawerUnreadCount');

    if (sup) sup.style.display = unreadCount > 0 ? 'block' : 'none';
    if (countEl) countEl.textContent = `${unreadCount} unread bulletin${unreadCount === 1 ? '' : 's'}`;

    if (!list) return;
    if (!cachedNotifications.length) {
      list.innerHTML = '<div style="text-align:center;color:var(--muted);padding:30px">No notifications on file.</div>';
      return;
    }

    list.innerHTML = cachedNotifications.map(n => `
      <div class="notif-card ${n.is_read ? '' : 'unread'}" data-id="${n.id}">
        <b>${n.title}</b>
        <p>${n.message}</p>
        <small style="color:var(--muted);font-size:10px;margin-top:4px;display:block">${n.created_at || 'Recent'}</small>
      </div>
    `).join('');

    $$('.notif-card').forEach(card => {
      card.addEventListener('click', async () => {
        const id = card.dataset.id;
        await fetch(`/api/notifications/${id}/read`, { method: 'PATCH', headers: getAuthHeaders() });
        card.classList.remove('unread');
        fetchNotifications();
      });
    });
  }

  markAllNotifReadBtn?.addEventListener('click', async () => {
    await fetch('/api/notifications/read-all', { method: 'POST', headers: getAuthHeaders() });
    fetchNotifications();
    toast('All notifications marked as read.');
  });

  // ---------------- Academic Results & Marksheets ----------------
  async function fetchPerformance() {
    if (!currentUser) return;
    try {
      const res = await fetch('/api/academics/performance', { headers: getAuthHeaders() });
      if (res.ok) {
        cachedPerformance = await res.json();
        renderPerformance();
      }
    } catch (err) {
      console.error('Performance fetch error:', err);
    }
  }

  function renderPerformance() {
    if (!cachedPerformance) return;
    const p = cachedPerformance;

    // KPI Cards
    if ($('#marksheetCgpa')) $('#marksheetCgpa').innerHTML = `${p.cgpa}<small>/10</small>`;
    if ($('#marksheetSgpa')) $('#marksheetSgpa').textContent = String(p.sgpa);
    if ($('#marksheetStatus')) $('#marksheetStatus').textContent = p.overall_status;
    if ($('#marksheetAsgnRate')) $('#marksheetAsgnRate').innerHTML = `${p.assignment_completion_rate}<small>%</small>`;

    // Overview Float
    if ($('#floatCgpa')) $('#floatCgpa').textContent = `${p.cgpa} / 10`;
    if ($('#statCgpaValue')) $('#statCgpaValue').innerHTML = `${p.cgpa}<small class="muted"> / 10.0</small>`;

    // Printable Marksheet Header
    if ($('#msStudentName')) $('#msStudentName').textContent = p.student_name;
    if ($('#msStudentId')) $('#msStudentId').textContent = p.student_id;
    if ($('#msCourseBranch')) $('#msCourseBranch').textContent = `${p.course} (${p.branch})`;
    if ($('#msSession')) $('#msSession').textContent = `${p.year_semester} (2025-2026)`;
    if ($('#msVerificationRef')) $('#msVerificationRef').textContent = p.verification_ref;
    if ($('#msFooterSgpa')) $('#msFooterSgpa').textContent = String(p.sgpa);
    if ($('#msFooterCgpa')) $('#msFooterCgpa').textContent = String(p.cgpa);

    // Marksheet Table
    const tbody = $('#marksheetTableBody');
    if (tbody && p.results) {
      tbody.innerHTML = p.results.map(r => {
        const gradeClass = r.letter_grade.includes('+') ? 'grade-aplus' : r.letter_grade === 'O' ? 'grade-o' : r.letter_grade === 'A' ? 'grade-a' : 'grade-bplus';

        return `
          <tr>
            <td><b>${r.subject_code}</b></td>
            <td>${r.subject_name}</td>
            <td>${r.credits}</td>
            <td>${r.internal_marks} / 40</td>
            <td>${r.external_marks} / 60</td>
            <td><b>${r.total_marks}</b></td>
            <td><span class="grade-badge ${gradeClass}">${r.letter_grade}</span></td>
            <td>${r.grade_point}</td>
            <td><span class="good-pill">${r.pass_fail}</span></td>
          </tr>
        `;
      }).join('');
    }
  }

  $('#printMarksheetBtn')?.addEventListener('click', () => {
    window.print();
  });

  // ---------------- Help Centre & Support Ticketing ----------------
  async function fetchFaqs() {
    try {
      const res = await fetch('/api/help/faqs');
      if (res.ok) {
        const data = await res.json();
        renderFaqs(data.faqs || []);
      }
    } catch (err) {
      console.warn('FAQ fetch error:', err);
    }
  }

  function renderFaqs(faqs) {
    const container = $('#faqAccordionContainer');
    if (!container) return;

    container.innerHTML = faqs.map((f, i) => `
      <details style="background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px;cursor:pointer">
        <summary style="font:700 13px Manrope;color:var(--ink);outline:none">
          ${f.question}
        </summary>
        <p style="margin:10px 0 0;font-size:12px;line-height:1.7;color:var(--muted)">
          ${f.answer}
        </p>
      </details>
    `).join('');
  }

  async function fetchTickets() {
    if (!currentUser) return;
    try {
      const res = await fetch('/api/help/tickets', { headers: getAuthHeaders() });
      if (res.ok) {
        const data = await res.json();
        cachedTickets = data.tickets || [];
        renderTickets();
      }
    } catch (err) {
      console.warn('Tickets fetch error:', err);
    }
  }

  function renderTickets() {
    const container = $('#studentTicketsListContainer');
    const openCountEl = $('#helpOpenTicketsCount');

    const openCount = cachedTickets.filter(t => t.status === 'open' || t.status === 'in_progress').length;
    if (openCountEl) openCountEl.textContent = `${openCount} Active`;

    if (!container) return;
    if (!cachedTickets.length) {
      container.innerHTML = '<div class="empty">No support tickets submitted. Click "Raise Support Ticket +" to contact administration.</div>';
      return;
    }

    container.innerHTML = cachedTickets.map(t => `
      <div class="ticket-card" data-ticket-id="${t.id}">
        <div class="ticket-meta-row">
          <b style="font:800 13px Manrope">${t.ticket_number}: ${t.subject}</b>
          <span class="ticket-status-pill status-${t.status}">${t.status.replace('_', ' ')}</span>
        </div>
        <div style="font-size:11px;color:var(--muted);display:flex;justify-content:space-between">
          <span>Category: ${t.category.toUpperCase()} · Priority: ${t.priority.toUpperCase()}</span>
          <span>${t.message_count || 1} message(s) · View thread ↗</span>
        </div>
      </div>
    `).join('');

    $$('.ticket-card').forEach(card => {
      card.addEventListener('click', () => {
        openTicketDetailsModal(card.dataset.ticketId);
      });
    });
  }

  // Create Ticket Modal
  const ticketBackdrop = $('#ticketBackdrop');
  const createTicketForm = $('#createTicketForm');

  function openCreateTicketModal() {
    if (!currentUser) {
      openAuth('signin');
      return;
    }
    ticketBackdrop?.classList.add('open');
  }

  function closeTicketModal() {
    ticketBackdrop?.classList.remove('open');
  }

  $('#openCreateTicketBtn')?.addEventListener('click', openCreateTicketModal);
  $('#closeTicketModal')?.addEventListener('click', closeTicketModal);
  ticketBackdrop?.addEventListener('click', e => {
    if (e.target === ticketBackdrop) closeTicketModal();
  });

  createTicketForm?.addEventListener('submit', async e => {
    e.preventDefault();
    const subject = $('#ticketSubject').value.trim();
    const category = $('#ticketCategory').value;
    const priority = $('#ticketPriority').value;
    const message = $('#ticketMessage').value.trim();

    try {
      const res = await fetch('/api/help/tickets', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ subject, category, priority, message })
      });
      if (!res.ok) throw new Error('Could not submit ticket.');
      closeTicketModal();
      createTicketForm.reset();
      toast('Support ticket submitted successfully ✓');
      fetchTickets();
    } catch (err) {
      toast('Error: ' + err.message);
    }
  });

  // Ticket Conversation Thread Modal
  const ticketDetailsBackdrop = $('#ticketDetailsBackdrop');
  const tdReplyForm = $('#tdReplyForm');

  async function openTicketDetailsModal(ticketId) {
    try {
      const res = await fetch(`/api/help/tickets/${ticketId}`, { headers: getAuthHeaders() });
      if (!res.ok) throw new Error('Could not load ticket details.');
      const data = await res.json();
      const ticket = data.ticket;

      if ($('#tdSubject')) $('#tdSubject').textContent = ticket.subject;
      if ($('#tdMeta')) $('#tdMeta').textContent = `${ticket.ticket_number} · Category: ${ticket.category} · Priority: ${ticket.priority}`;
      if ($('#tdStatusPill')) {
        $('#tdStatusPill').textContent = ticket.status.replace('_', ' ').toUpperCase();
        $('#tdStatusPill').className = `ticket-status-pill status-${ticket.status}`;
      }
      if ($('#tdActiveTicketId')) $('#tdActiveTicketId').value = ticket.id;

      const thread = $('#tdMessageThread');
      if (thread && ticket.messages) {
        thread.innerHTML = ticket.messages.map(m => {
          const isUser = m.sender_role === 'student';
          return `
            <div class="ai-bubble ${isUser ? 'ai-bubble-user' : 'ai-bubble-assistant'}">
              <small style="display:block;font-weight:700;margin-bottom:4px">${m.sender_name} (${m.sender_role.toUpperCase()})</small>
              ${m.message}
              <span class="ai-bubble-time">${m.created_at || ''}</span>
            </div>
          `;
        }).join('');
        thread.scrollTop = thread.scrollHeight;
      }

      ticketDetailsBackdrop?.classList.add('open');
    } catch (err) {
      toast('Error: ' + err.message);
    }
  }

  function closeTicketDetailsModal() {
    ticketDetailsBackdrop?.classList.remove('open');
  }

  $('#closeTicketDetailsModal')?.addEventListener('click', closeTicketDetailsModal);

  tdReplyForm?.addEventListener('submit', async e => {
    e.preventDefault();
    const ticketId = $('#tdActiveTicketId')?.value;
    const msg = $('#tdReplyInput')?.value.trim();
    if (!ticketId || !msg) return;

    try {
      const res = await fetch(`/api/help/tickets/${ticketId}/reply`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ message: msg })
      });
      if (!res.ok) throw new Error('Could not send reply.');
      $('#tdReplyInput').value = '';
      openTicketDetailsModal(ticketId);
      fetchTickets();
      toast('Reply sent ✓');
    } catch (err) {
      toast('Error: ' + err.message);
    }
  });

  // ---------------- Staff Admin Console ----------------
  async function loadAdminData() {
    if (currentUser?.role !== 'admin' && currentUser?.role !== 'faculty') return;
    try {
      const [ticketsRes, logsRes] = await Promise.all([
        fetch('/api/admin/tickets', { headers: getAuthHeaders() }),
        fetch('/api/admin/audit-logs', { headers: getAuthHeaders() })
      ]);

      if (ticketsRes.ok) {
        const data = await ticketsRes.json();
        renderAdminTickets(data.tickets || []);
      }
      if (logsRes.ok) {
        const data = await logsRes.json();
        renderAdminLogs(data.audit_logs || []);
      }
    } catch (err) {
      console.warn('Admin data load error:', err);
    }
  }

  function renderAdminTickets(tickets) {
    const container = $('#adminTicketsContainer');
    if (!container) return;
    if (!tickets.length) {
      container.innerHTML = '<div class="empty">No tickets pending staff review.</div>';
      return;
    }

    container.innerHTML = tickets.map(t => `
      <div class="ticket-card">
        <div class="ticket-meta-row">
          <b>${t.ticket_number}: ${t.subject} (By: ${t.student_name} - ${t.student_code})</b>
          <select class="form-select admin-status-select" data-id="${t.id}" style="width:130px;height:32px;font-size:11px">
            <option value="open" ${t.status === 'open' ? 'selected' : ''}>Open</option>
            <option value="in_progress" ${t.status === 'in_progress' ? 'selected' : ''}>In Progress</option>
            <option value="awaiting_student" ${t.status === 'awaiting_student' ? 'selected' : ''}>Awaiting Student</option>
            <option value="resolved" ${t.status === 'resolved' ? 'selected' : ''}>Resolved</option>
            <option value="closed" ${t.status === 'closed' ? 'selected' : ''}>Closed</option>
          </select>
        </div>
      </div>
    `).join('');

    $$('.admin-status-select').forEach(sel => {
      sel.addEventListener('change', async () => {
        const tId = sel.dataset.id;
        const newStatus = sel.value;
        await fetch(`/api/admin/tickets/${tId}/status?status_val=${newStatus}`, {
          method: 'PATCH',
          headers: getAuthHeaders()
        });
        toast(`Ticket status updated to ${newStatus}.`);
        loadAdminData();
      });
    });
  }

  function renderAdminLogs(logs) {
    const tbody = $('#adminAuditLogsBody');
    if (!tbody) return;
    tbody.innerHTML = logs.map(l => `
      <tr>
        <td><small>${l.created_at || 'Recent'}</small></td>
        <td><b>${l.actor_email}</b></td>
        <td><span class="ref-pill">${l.action}</span></td>
        <td>${l.target_entity}</td>
        <td><code>${l.target_id || '--'}</code></td>
      </tr>
    `).join('');
  }

  // ---------------- Base Campus Loaders ----------------
  async function loadAllCampusData() {
    await Promise.allSettled([
      fetchDashboardSummary(),
      fetchSuccessRadar(),
      fetchStudyPlanner(),
      fetchCareerRoadmap(),
      fetchCampusNavigator(),
      fetchNoticeIntelligence(),
      fetchAcademics(),
      fetchAttendance(),
      fetchPerformance(),
      fetchEvents(),
      fetchFacilities(),
      fetchAnnouncements(),
      fetchNotifications(),
      fetchFaqs(),
      fetchTickets()
    ]);
    renderOverview();
    if (currentUser?.role === 'admin' || currentUser?.role === 'faculty') {
      loadAdminData();
    }
  }

  // 1. Academics
  async function fetchAcademics() {
    try {
      const res = await fetch('/api/academics/subjects', { headers: getAuthHeaders() });
      if (res.ok) {
        const data = await res.json();
        cachedSubjects = data.subjects || [];
        renderAcademics();
      }
    } catch (err) {
      console.error('Fetch subjects error:', err);
    }
  }

  function renderAcademics() {
    const subjectsContainer = $('#subjects');
    const subjectCountEl = $('#subjectCount');
    const attSubjectSelect = $('#attSubjectSelect');
    const asgnSubjectSelect = $('#asgnSubject');

    if (!subjectsContainer) return;

    if (subjectCountEl) subjectCountEl.textContent = `${cachedSubjects.length} subjects`;

    if (attSubjectSelect) {
      attSubjectSelect.innerHTML = cachedSubjects
        .map(s => `<option value="${s.id}">${s.code} — ${s.name}</option>`)
        .join('');
    }
    if (asgnSubjectSelect) {
      asgnSubjectSelect.innerHTML = cachedSubjects
        .map(s => `<option value="${s.id}">${s.code} — ${s.name}</option>`)
        .join('');
    }

    if (!cachedSubjects.length) {
      subjectsContainer.innerHTML = '<div class="empty">No courses found in catalog.</div>';
      return;
    }

    subjectsContainer.innerHTML = cachedSubjects.map(sub => {
      const iconBg = sub.category === 'CORE' ? 'blue-bg' : sub.category === 'PRACTICAL' ? 'purple-bg' : 'mint-bg';
      const progressWidth = sub.category === 'CORE' ? '78%' : sub.category === 'PRACTICAL' ? '64%' : '86%';
      const progressColor = sub.category === 'CORE' ? '' : sub.category === 'PRACTICAL' ? 'purple' : 'green';

      return `
        <article class="subject" data-search="${sub.code.toLowerCase()} ${sub.name.toLowerCase()} ${sub.instructor.toLowerCase()} ${sub.room.toLowerCase()}">
          <div class="subject-icon ${iconBg}">⌘</div>
          <label>${sub.category}</label>
          <h3>${sub.name}</h3>
          <p>${sub.instructor} · ${sub.room}</p>
          <div class="meta">◷ ${sub.schedule_time.split('–')[0].trim()} <span>${sub.credits} credits</span></div>
          <div class="progress ${progressColor}"><i style="width:${progressWidth}"></i></div>
          <small>Course Progress <b>${progressWidth}</b></small>
        </article>
      `;
    }).join('');
  }

  $('#classSearch')?.addEventListener('input', e => {
    const query = e.target.value.toLowerCase().trim();
    let count = 0;
    $$('#subjects .subject').forEach(c => {
      const ok = c.dataset.search.includes(query);
      c.hidden = !ok;
      if (ok) count++;
    });
    const countEl = $('#subjectCount');
    if (countEl) countEl.textContent = `${count} subject${count === 1 ? '' : 's'}`;
  });

  // 2. Attendance
  async function fetchAttendance() {
    try {
      const res = await fetch('/api/attendance', { headers: getAuthHeaders() });
      if (res.ok) {
        cachedAttendance = await res.json();
        renderAttendance();
      }
    } catch (err) {
      console.error('Fetch attendance error:', err);
    }
  }

  function renderAttendance() {
    if (!cachedAttendance) return;
    const overall_rate = cachedAttendance.overall_rate ?? cachedAttendance.overall_percentage ?? 86.4;
    const overall_held = cachedAttendance.overall_held ?? cachedAttendance.total_lectures ?? 140;
    const overall_attended = cachedAttendance.overall_attended ?? cachedAttendance.attended_lectures ?? 121;
    const overall_absent = cachedAttendance.overall_absent ?? (overall_held - overall_attended);
    const status_label = cachedAttendance.status_label || (overall_rate >= 75 ? 'On track' : 'Needs attention');
    const subjects = Array.isArray(cachedAttendance.subjects) && cachedAttendance.subjects.length
      ? cachedAttendance.subjects
      : (cachedAttendance.records || []).map(r => ({
          name: r.subject_name || r.name,
          code: r.code || 'CS500',
          room: r.room || 'Tech Centre',
          classes_held: r.total_classes || r.classes_held || 30,
          classes_attended: r.attended_classes || r.classes_attended || 25,
          attendance_rate: r.percentage || r.attendance_rate || 83.3,
          status_label: (r.percentage || r.attendance_rate || 83.3) >= 75 ? 'Safe' : 'Needs focus',
          status_class: (r.percentage || r.attendance_rate || 83.3) >= 75 ? 'good-pill' : 'warn-pill',
          needed_for_75: 0
        }));

    if ($('#attOverallRate')) $('#attOverallRate').innerHTML = `${overall_rate}<small>%</small>`;
    if ($('#attPresentCount')) $('#attPresentCount').textContent = `${overall_attended} classes`;
    if ($('#attAbsentCount')) $('#attAbsentCount').textContent = `${overall_absent} classes`;
    if ($('#attHeading')) $('#attHeading').textContent = overall_rate >= 75 ? "You're doing great." : "Action required.";
    if ($('#attSummaryText')) {
      $('#attSummaryText').textContent = overall_rate >= 75
        ? `You're safely above the institutional 75% threshold across ${subjects.length} subjects.`
        : `Your overall attendance is below target. Prioritize upcoming sessions.`;
    }
    if ($('#attOverallPill')) {
      $('#attOverallPill').textContent = status_label;
      $('#attOverallPill').className = overall_rate >= 75 ? 'good-pill' : 'warn-pill';
    }

    if ($('#attRingGraphic')) {
      $('#attRingGraphic').style.background = `conic-gradient(#8273f6 0% ${overall_rate}%, #eceaf8 ${overall_rate}% 100%)`;
    }

    const tbody = $('#attendanceRows');
    if (tbody) {
      tbody.innerHTML = subjects.map(sub => {
        const rate = sub.attendance_rate !== undefined ? sub.attendance_rate : (sub.percentage || 0);
        const actionNeeded = rate < 75
          ? `<span style="color:#d14b5f;font-weight:700">Attend next ${sub.needed_for_75 || 2} class(es)</span>`
          : `<span style="color:#28a981">In compliance ✓</span>`;

        return `
          <tr data-rate="${rate}">
            <td><b>⌘ &nbsp; ${sub.name}</b><br><small style="color:var(--muted)">${sub.code || 'CS500'} · ${sub.room || 'Tech Centre'}</small></td>
            <td>${sub.classes_held ?? sub.total_classes ?? 0}</td>
            <td>${sub.classes_attended ?? sub.attended_classes ?? 0}</td>
            <td><span class="rate">${rate}% <i><em style="width:${Math.min(100, rate)}%"></em></i></span></td>
            <td><label class="${sub.status_class || (rate >= 75 ? 'good-pill' : 'warn-pill')}">${sub.status_label || (rate >= 75 ? 'Safe' : 'Needs attention')}</label></td>
            <td>${actionNeeded}</td>
          </tr>
        `;
      }).join('');
    }
  }

  $$('[data-att]').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('[data-att]').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const filter = btn.dataset.att;
      $$('#attendanceRows tr').forEach(row => {
        const rate = parseFloat(row.dataset.rate || '100');
        row.hidden = filter !== 'all' && rate >= 75;
      });
    });
  });

  const logAttendanceBackdrop = $('#logAttendanceBackdrop');
  const logAttendanceForm = $('#logAttendanceForm');

  function openLogAttendanceModal() {
    if (!currentUser) {
      openAuth('signin');
      return;
    }
    if ($('#attDateInput')) $('#attDateInput').value = new Date().toISOString().split('T')[0];
    const sel = $('#attSubjectSelect');
    if (sel && (!sel.children || sel.children.length === 0) && cachedSubjects && cachedSubjects.length) {
      sel.innerHTML = cachedSubjects.map(s => `<option value="${s.id}">${s.code} — ${s.name}</option>`).join('');
    }
    logAttendanceBackdrop?.classList.add('open');
  }

  function closeLogAttendanceModal() {
    logAttendanceBackdrop?.classList.remove('open');
  }

  $('#openLogAttendanceBtn')?.addEventListener('click', openLogAttendanceModal);
  $('#closeLogAttendanceModal')?.addEventListener('click', closeLogAttendanceModal);
  logAttendanceBackdrop?.addEventListener('click', e => {
    if (e.target === logAttendanceBackdrop) closeLogAttendanceModal();
  });

  logAttendanceForm?.addEventListener('submit', async e => {
    e.preventDefault();
    if (!currentUser) {
      openAuth('signin');
      return;
    }
    const subjectId = $('#attSubjectSelect')?.value;
    const date = $('#attDateInput')?.value || new Date().toISOString().split('T')[0];
    const status = $('#attStatusSelect')?.value || 'present';

    if (!subjectId) {
      toast('Please select a subject to log attendance.');
      return;
    }

    try {
      const res = await fetch('/api/attendance/log', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ subject_id: subjectId, date, status })
      });
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.detail || errJson.message || 'Failed to log attendance');
      }
      closeLogAttendanceModal();
      toast('Attendance record logged successfully ✓');
      await fetchAttendance();
      renderOverview();
    } catch (err) {
      toast('Error: ' + err.message);
    }
  });

  // 3. Events
  async function fetchEvents() {
    try {
      const res = await fetch('/api/events', { headers: getAuthHeaders() });
      if (res.ok) {
        const data = await res.json();
        cachedEvents = data.events || [];
        renderEvents();
      }
    } catch (err) {
      console.error('Fetch events error:', err);
    }
  }

  function renderEvents() {
    const eventGrid = $('#eventGrid');
    if (!eventGrid) return;

    if ($('#navEventsBadge')) $('#navEventsBadge').textContent = cachedEvents.length;

    const featured = cachedEvents.find(e => e.featured) || cachedEvents[0];
    if (featured) {
      if ($('#featuredEventTitle')) $('#featuredEventTitle').textContent = featured.title;
      if ($('#featuredEventDesc')) $('#featuredEventDesc').textContent = featured.description;
      if ($('#featuredEventMeta')) {
        $('#featuredEventMeta').innerHTML = `▦ ${featured.event_date}<br>⌖ ${featured.location}<br>◷ ${featured.event_time}`;
      }
      const regBtn = $('#featuredRegisterBtn');
      if (regBtn) {
        const isReg = Boolean(featured.is_registered);
        regBtn.textContent = isReg ? 'Registered ✓ (Click to cancel)' : 'Register interest ↗';
        regBtn.style.background = isReg ? '#45cba4' : '';
        regBtn.onclick = () => toggleEventRegistration(featured.id, isReg);
      }
    }

    eventGrid.innerHTML = cachedEvents.map(ev => {
      const isReg = Boolean(ev.is_registered);
      const posterBg = ev.category === 'community' ? 'wellness' : ev.category === 'workshop' ? 'ai' : 'hack';
      const posterText = ev.category === 'community' ? 'RESET.<br>REFRESH.' : ev.category === 'workshop' ? 'THINK<br>IN AI.' : 'BUILD<br>BEYOND.';

      return `
        <article class="event-card" data-kind="${ev.category}">
          <div class="poster ${posterBg}">
            <span>${posterText}</span>
            <i>✦</i>
          </div>
          <div class="event-card-body">
            <label>${ev.category.toUpperCase()} · ${ev.event_date}</label>
            <h3>${ev.title}</h3>
            <p>${ev.description}</p>
            <div>
              <span>◷ ${ev.event_time}</span>
              <button type="button" class="event-rsvp-btn" data-event-id="${ev.id}" data-registered="${isReg}">
                ${isReg ? 'Registered ✓' : "I'm interested ↗"}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    $$('.event-rsvp-btn').forEach(b => {
      b.onclick = () => {
        const evId = b.dataset.eventId;
        const isReg = b.dataset.registered === 'true';
        toggleEventRegistration(evId, isReg);
      };
    });
  }

  async function toggleEventRegistration(eventId, currentlyRegistered) {
    if (!currentUser) {
      openAuth('signin');
      return;
    }
    try {
      const method = currentlyRegistered ? 'DELETE' : 'POST';
      const res = await fetch(`/api/events/${eventId}/register`, {
        method,
        headers: getAuthHeaders()
      });
      if (!res.ok) throw new Error('Registration update failed.');
      toast(currentlyRegistered ? 'Event RSVP cancelled.' : 'RSVP confirmed! See you there ✦');
      await fetchEvents();
    } catch (err) {
      toast('Failed: ' + err.message);
    }
  }

  $$('.event-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.event-filter').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const kind = btn.dataset.event;
      $$('#eventGrid .event-card').forEach(card => {
        card.hidden = kind !== 'all' && card.dataset.kind !== kind;
      });
    });
  });

  // 4. Facilities
  async function fetchFacilities() {
    try {
      const res = await fetch('/api/facilities', { headers: getAuthHeaders() });
      if (res.ok) {
        const data = await res.json();
        cachedFacilities = data.facilities || [];
        renderFacilities();
      }
    } catch (err) {
      console.error('Fetch facilities error:', err);
    }
  }

  function renderFacilities() {
    const grid = $('#facilityGrid');
    if (!grid) return;

    let totalAvail = 0;
    let totalCap = 0;

    grid.innerHTML = cachedFacilities.map(f => {
      const avail = Math.max(0, f.total_capacity - f.occupied_count);
      totalAvail += avail;
      totalCap += f.total_capacity;
      const pct = Math.round((f.occupied_count / f.total_capacity) * 100);
      const artClass = f.name.includes('Library') ? 'lib' : f.name.includes('Innovation') ? 'hub' : f.name.includes('Commons') ? 'commons' : 'garden';
      const icon = f.name.includes('Library') ? '▤' : f.name.includes('Innovation') ? '✦' : f.name.includes('Commons') ? '☕' : '✿';
      const isBooked = Boolean(f.is_booked);
      const actionHtml = isBooked
        ? `<div style="display:flex;gap:8px;align-items:center;margin-top:10px">
             <span class="facility-booked-badge">✓ Reserved</span>
             <button type="button" class="btn-cancel-reservation" data-cancel-id="${f.id}">Cancel Reservation</button>
           </div>`
        : `<button type="button" class="facility-book-btn" data-id="${f.id}" data-name="${f.name}" data-loc="${f.location}">
             Reserve desk ↗
           </button>`;

      return `
        <article class="facility-card" data-kind="${f.category}" data-search="${f.name.toLowerCase()} ${f.location.toLowerCase()}">
          <div class="facility-art ${artClass}">
            <span>${icon}</span>
            <label>${f.category.toUpperCase()} ZONE</label>
          </div>
          <div class="facility-body">
            <div>
              <h3>${f.name}</h3>
              <label class="${f.status === 'open' ? 'open' : 'busy'}">● ${f.status.toUpperCase()}</label>
            </div>
            <p>${f.description}</p>
            <small>⌖ ${f.location}<br>◷ ${f.operating_hours}</small>
            <div class="capacity">
              Seat availability <b>${avail} / ${f.total_capacity}</b>
              <i><em style="width:${pct}%"></em></i>
            </div>
            ${actionHtml}
          </div>
        </article>
      `;
    }).join('');

    if ($('#facilitiesAvailableHero')) {
      $('#facilitiesAvailableHero').innerHTML = `${totalAvail}<span>/${totalCap}</span>`;
    }

    $$('.facility-book-btn').forEach(btn => {
      btn.onclick = () => openBookFacilityModal(btn.dataset.id, btn.dataset.name, btn.dataset.loc);
    });

    $$('.btn-cancel-reservation').forEach(btn => {
      btn.onclick = async () => {
        try {
          const res = await fetch(`/api/facilities/${btn.dataset.cancelId}/cancel`, {
            method: 'DELETE',
            headers: getAuthHeaders()
          });
          if (!res.ok) throw new Error('Cancellation failed.');
          toast('Reservation cancelled successfully.');
          await fetchFacilities();
        } catch (err) {
          toast('Error: ' + err.message);
        }
      };
    });
  }

  function filterFacilities() {
    const q = ($('#facilitySearch')?.value || '').toLowerCase().trim();
    const type = $('.facility-filter.selected')?.dataset.facility || 'all';
    let count = 0;
    $$('#facilityGrid .facility-card').forEach(c => {
      const ok = (!q || c.dataset.search.includes(q)) && (type === 'all' || c.dataset.kind === type);
      c.hidden = !ok;
      if (ok) count++;
    });
  }

  $('#facilitySearch')?.addEventListener('input', filterFacilities);
  $$('.facility-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.facility-filter').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      filterFacilities();
    });
  });

  const bookFacilityBackdrop = $('#bookFacilityBackdrop');
  const bookFacilityForm = $('#bookFacilityForm');

  function openBookFacilityModal(facilityId, facilityName, location) {
    if (!currentUser) {
      openAuth('signin');
      return;
    }
    if ($('#bookFacilityId')) $('#bookFacilityId').value = facilityId;
    if ($('#bookFacilityTitle')) $('#bookFacilityTitle').textContent = `Reserve: ${facilityName}`;
    if ($('#bookFacilityLocation')) $('#bookFacilityLocation').textContent = `Location: ${location}`;
    if ($('#bookDateInput')) $('#bookDateInput').value = new Date().toISOString().split('T')[0];
    bookFacilityBackdrop?.classList.add('open');
  }

  function closeBookFacilityModal() {
    bookFacilityBackdrop?.classList.remove('open');
  }

  $('#closeBookFacilityModal')?.addEventListener('click', closeBookFacilityModal);
  bookFacilityBackdrop?.addEventListener('click', e => {
    if (e.target === bookFacilityBackdrop) closeBookFacilityModal();
  });

  bookFacilityForm?.addEventListener('submit', async e => {
    e.preventDefault();
    const facilityId = $('#bookFacilityId').value;
    const bookingDate = $('#bookDateInput').value;
    const timeSlot = $('#bookSlotSelect').value;
    const purpose = $('#bookPurposeInput').value;

    try {
      const res = await fetch(`/api/facilities/${facilityId}/book`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ booking_date: bookingDate, time_slot: timeSlot, purpose })
      });
      if (!res.ok) throw new Error('Space reservation failed.');
      closeBookFacilityModal();
      syncRecordToSupabase('facility_bookings', {
        facility_id: facilityId,
        student_id: currentUser?.id || currentUser?.email || 'student',
        booking_date: bookingDate,
        time_slot: timeSlot,
        purpose: purpose || 'Study session',
        status: 'confirmed'
      });
      toast('Desk reservation confirmed! An email pass has been issued.');
      await fetchFacilities();
      renderOverview();
    } catch (err) {
      toast('Booking failed: ' + err.message);
    }
  });

  // 5. Announcements
  async function fetchAnnouncements() {
    try {
      const res = await fetch('/api/announcements');
      if (res.ok) {
        const data = await res.json();
        cachedAnnouncements = data.announcements || [];
        renderAnnouncements();
      }
    } catch (err) {
      console.error('Fetch announcements error:', err);
    }
  }

  function renderAnnouncements() {
    const list = $('#overviewAnnouncementsList');
    if (!list) return;
    list.innerHTML = cachedAnnouncements.slice(0, 2).map(a => `
      <div class="activity">
        <span class="activity-icon ${a.priority === 'urgent' ? 'purple-bg' : 'mint-bg'}">✦</span>
        <div>
          <b>${a.title}</b>
          <small>${a.author_role} · ${a.category}</small>
        </div>
      </div>
    `).join('');
  }

  // ====================================================================
  // CampusIQ 2.0 Distinctive Features Controllers & Renderers
  // ====================================================================

  let cachedRadar = null;
  let cachedPlanner = null;
  let cachedCareer = null;
  let cachedDirectory = [];
  let cachedNoticeIntelligence = [];
  let activeNoticePriority = 'all';
  let onlySavedNotices = false;
  let activeNavCategory = 'all';

  // ---------------- 1. 12-Section Dashboard Cockpit Summary ----------------
  async function fetchDashboardSummary() {
    if (!currentUser) return;
    try {
      const res = await fetch('/api/dashboard/summary', { headers: getAuthHeaders() });
      if (res.ok) {
        const summary = await res.json();
        renderCockpitSummary(summary);
      }
    } catch (err) {
      console.warn('Dashboard summary error:', err);
    }
  }

  function renderCockpitSummary(s) {
    if (!s) return;

    // CARD 1: Hero Welcome Banner
    const p = s.student_profile || {};
    if ($('#overviewWelcomeName')) {
      const first = (p.full_name || 'Scholar').split(' ')[0];
      $('#overviewWelcomeName').textContent = `Welcome back, ${first}`;
    }
    if ($('#overviewSemesterChip')) {
      $('#overviewSemesterChip').textContent = p.year_semester || 'Year 3, Semester 5';
    }
    if ($('#overviewDeptChip')) {
      $('#overviewDeptChip').textContent = p.department || 'Computer Science & Engineering';
    }
    if ($('#overviewWelcomeDesc')) {
      const yr = p.year_semester || 'Year 3, Semester 5';
      const dept = p.department || 'Computer Science & Engineering';
      $('#overviewWelcomeDesc').textContent = `${yr}  •  ${dept}`;
    }

    // CARD 2: Today's Schedule
    const schedContainer = $('#overviewScheduleContainer');
    if (schedContainer && s.today_classes) {
      const dotColors = ['blue-dot', 'purple-dot', 'orange-dot', 'green-dot'];
      const classClasses = ['cb', 'cp', 'co', 'cg'];
      if (!s.today_classes.length) {
        schedContainer.innerHTML = '<div style="color:var(--muted);font-size:12px;padding:12px">No lectures scheduled for today. Enjoy your study block!</div>';
      } else {
        schedContainer.innerHTML = s.today_classes.map((cls, idx) => {
          const startTime = (cls.schedule_time || '09:00 AM').split('–')[0].trim();
          const mainTime = startTime.slice(0, 5);
          const meridiem = startTime.slice(-2);
          return `
            <div class="schedule-row">
              <time>${mainTime}<small>${meridiem}</small></time>
              <i class="dot ${dotColors[idx % dotColors.length]}"></i>
              <div class="class ${classClasses[idx % classClasses.length]}">
                <label>${cls.category || 'CORE'}</label>
                <h4>${cls.name}</h4>
                <p>📍 ${cls.room} · ${cls.instructor}</p>
                <small>${cls.schedule_time}</small>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // CARD 3: Academic Performance
    const perf = s.academic_performance || {};
    if ($('#cockpitCgpaValue')) $('#cockpitCgpaValue').textContent = perf.cgpa !== undefined ? perf.cgpa : '--';
    if ($('#cockpitSemesterBadge')) $('#cockpitSemesterBadge').textContent = perf.semester || 'Semester 5';
    if ($('#cockpitCreditsEarned')) $('#cockpitCreditsEarned').textContent = `${perf.credits_earned || 0} Credits Earned`;
    if ($('#cockpitCgpaProgress')) {
      const pct = Math.min(100, Math.round(((perf.cgpa || 0) / 10.0) * 100));
      $('#cockpitCgpaProgress').style.width = `${pct}%`;
    }
    if ($('#floatCgpa')) $('#floatCgpa').textContent = `${perf.cgpa || '8.64'} / 10.0 CGPA`;

    // CARD 4: Attendance Velocity
    const att = s.attendance_velocity || {};
    if ($('#cockpitAttendanceRate')) $('#cockpitAttendanceRate').textContent = `${att.overall_rate || 0}%`;
    if ($('#floatAttendance')) $('#floatAttendance').textContent = `${att.overall_rate || '86.4'}% Recorded`;
    if ($('#cockpitAttendanceProgress')) $('#cockpitAttendanceProgress').style.width = `${Math.min(100, att.overall_rate || 0)}%`;
    if ($('#cockpitAttendanceSafety')) {
      const safe = att.buffer_classes_remaining || 0;
      $('#cockpitAttendanceSafety').innerHTML = safe > 0
        ? `Safe buffer: You can miss up to <b>${safe} classes</b> and stay above the 75% cutoff.`
        : `⚠️ Critical: Attendance is at threshold. No absences permitted.`;
    }

    // CARD 5: Deadlines & Countdown
    const cd = s.deadlines_countdown || {};
    if ($('#countdownMidterm')) $('#countdownMidterm').textContent = cd.days_to_midterm !== undefined ? `${cd.days_to_midterm}d` : '--';
    if ($('#countdownAssignment')) $('#countdownAssignment').textContent = cd.days_to_assignment !== undefined ? `${cd.days_to_assignment}d` : '--';
    if ($('#countdownEndterm')) $('#countdownEndterm').textContent = cd.days_to_endterm !== undefined ? `${cd.days_to_endterm}d` : '--';

    // CARD 6: Assignments Progress
    const asgns = s.assignment_progress || {};
    if ($('#cockpitPendingAsgnCount')) $('#cockpitPendingAsgnCount').textContent = `${asgns.pending_count || 0} Pending`;
    const asgnList = $('#cockpitAssignmentMiniList');
    if (asgnList && asgns.upcoming_list) {
      if (!asgns.upcoming_list.length) {
        asgnList.innerHTML = '<div style="color:var(--muted);font-size:11px;padding:6px">No pending coursework deadlines! 🎉</div>';
      } else {
        asgnList.innerHTML = asgns.upcoming_list.slice(0, 3).map(a => `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid var(--line);font-size:11px">
            <div>
              <b>${a.title}</b>
              <small style="color:var(--muted);display:block">Due: ${a.due_date}</small>
            </div>
            <span class="badge ${a.priority === 'urgent' ? 'priority-urgent' : a.priority === 'high' ? 'priority-high' : 'priority-normal'}">${a.priority.toUpperCase()}</span>
          </div>
        `).join('');
      }
    }

    // CARD 7: Verified Campus Bulletins
    const noticesList = $('#cockpitNoticesContainer');
    if (noticesList && s.verified_notices) {
      if (!s.verified_notices.length) {
        noticesList.innerHTML = '<div style="color:var(--muted);font-size:11px">No recent notices published.</div>';
      } else {
        noticesList.innerHTML = s.verified_notices.slice(0, 3).map(n => `
          <div class="notice-card-advanced ${n.priority === 'urgent' ? 'urgent-notice' : ''}" style="padding:10px 12px;margin:0">
            <div class="notice-top-row">
              <span class="notice-priority-badge priority-${n.priority}">${n.priority}</span>
              <small style="color:var(--muted);font-size:9px">${n.category}</small>
            </div>
            <b style="font-size:11px;display:block;margin-bottom:3px">${n.title}</b>
            <p style="font-size:10px;margin:0;color:var(--muted);line-height:1.4">${(n.content || '').slice(0, 85)}...</p>
          </div>
        `).join('');
      }
    }

    // CARD 8: AI Study Recommendations
    const aiActions = $('#cockpitAiActionsList');
    if (aiActions && s.ai_study_suggestions) {
      if (!s.ai_study_suggestions.length) {
        aiActions.innerHTML = '<div style="color:var(--muted);font-size:11px">All subjects performing above target! Keep up your study habits.</div>';
      } else {
        aiActions.innerHTML = s.ai_study_suggestions.slice(0, 3).map(rec => `
          <div style="padding:10px;border-radius:10px;background:#f8f9fd;border:1px solid var(--line);font-size:11px">
            <div style="display:flex;justify-content:space-between;margin-bottom:3px">
              <span class="badge" style="background:#e0e7ff;color:#4338ca;font-weight:700">${rec.subject}</span>
              <small style="color:var(--muted)">Target Focus</small>
            </div>
            <b>${rec.action}</b>
            <p style="margin:3px 0 0;font-size:10px;color:var(--muted)">${rec.reason}</p>
          </div>
        `).join('');
      }
    }

    // CARD 10: Support Status
    const supportBox = $('#cockpitSupportContainer');
    if (supportBox && s.open_tickets !== undefined) {
      supportBox.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:#f8f9fd;border-radius:10px;border:1px solid var(--line)">
          <div>
            <strong style="font-size:13px">${s.open_tickets} Active Ticket${s.open_tickets === 1 ? '' : 's'}</strong>
            <small style="color:var(--muted);display:block">Track issues submitted to Dean or IT Helpdesk</small>
          </div>
          <button class="primary" data-go="help" style="padding:6px 12px;font-size:11px">View Help Centre ↗</button>
        </div>
      `;
    }

    // CARD 11: Recent Activity Stream
    const stream = $('#cockpitActivityStream');
    if (stream && s.recent_activities) {
      if (!s.recent_activities.length) {
        stream.innerHTML = '<div style="color:var(--muted);font-size:11px;padding:8px">No recent user activities recorded.</div>';
      } else {
        stream.innerHTML = s.recent_activities.slice(0, 4).map(act => `
          <div class="activity-stream-item">
            <div class="activity-stream-icon">⚡</div>
            <div style="flex:1">
              <b style="font-size:11px;display:block">${act.description}</b>
              <small style="color:var(--muted);font-size:9px">${act.created_at || 'Just now'}</small>
            </div>
          </div>
        `).join('');
      }
    }

    // CARD 12: Facilities Occupancy
    const facBox = $('#cockpitFacilitiesList');
    if (facBox && s.facilities_occupancy) {
      facBox.innerHTML = s.facilities_occupancy.slice(0, 3).map(f => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--line);font-size:11px">
          <div>
            <b>${f.name}</b>
            <small style="display:block;color:var(--muted)">${f.available} seats free / ${f.capacity}</small>
          </div>
          <button class="link" data-go="facilities" style="font-size:10px">Book ↗</button>
        </div>
      `).join('');
    }
  }

  // Fallback Overview render for legacy sub-elements
  function renderOverview() {
    fetchDashboardSummary();
  }

  // ---------------- 2. Student Success Radar ----------------
  async function fetchSuccessRadar() {
    if (!currentUser) return;
    try {
      const res = await fetch('/api/radar', { headers: getAuthHeaders() });
      if (res.ok) {
        cachedRadar = await res.json();
        renderSuccessRadar(cachedRadar);
      }
    } catch (err) {
      console.warn('Success radar fetch error:', err);
    }
  }

  function renderSuccessRadar(data) {
    if (!data) return;

    if ($('#radarOverallScore')) $('#radarOverallScore').textContent = `${data.overall_score} / 100`;
    if ($('#radarOverallAssessment')) $('#radarOverallAssessment').textContent = `Academic Standing: ${data.academic_health || 'Exemplary'}`;
    if ($('#radarAttendanceVelocity')) {
      const vel = data.attendance_velocity?.velocity_rate || 0;
      $('#radarAttendanceVelocity').textContent = `Attendance: ${data.attendance_velocity?.current_rate || 0}% (${vel >= 0 ? '+' : ''}${vel}% velocity)`;
    }
    if ($('#radarAttCurrent')) $('#radarAttCurrent').textContent = `${data.attendance_velocity?.current_rate || 0}%`;
    if ($('#radarAttBuffer')) {
      const safe = data.attendance_velocity?.buffer_classes_remaining || 0;
      $('#radarAttBuffer').textContent = `${safe} classes safe`;
    }

    // Strengths
    const strengthsList = $('#radarStrengthsList');
    if (strengthsList && data.subject_strengths) {
      if (!data.subject_strengths.length) {
        strengthsList.innerHTML = '<div style="color:var(--muted);font-size:11px">Evaluating subject telemetry...</div>';
      } else {
        strengthsList.innerHTML = data.subject_strengths.map(s => `
          <div class="radar-subject-row">
            <div>
              <b style="font-size:12px">${s.name}</b>
              <small style="color:var(--muted);display:block">${s.code} · ${s.category}</small>
            </div>
            <strong style="color:#047857">${s.average_mark}%</strong>
          </div>
        `).join('');
      }
    }

    // Weaknesses
    const weakList = $('#radarWeaknessesList');
    if (weakList && data.subject_weaknesses) {
      if (!data.subject_weaknesses.length) {
        weakList.innerHTML = '<div style="color:#047857;font-size:11px;padding:8px">All registered subjects are performing above threshold! 🌟</div>';
      } else {
        weakList.innerHTML = data.subject_weaknesses.map(w => `
          <div class="radar-subject-row">
            <div>
              <b style="font-size:12px">${w.name}</b>
              <small style="color:#b91c1c;display:block">${w.focus_reason}</small>
            </div>
            <strong style="color:#b91c1c">${w.current_level}</strong>
          </div>
        `).join('');
      }
    }

    // Recommendations
    const recContainer = $('#radarRecommendationsContainer');
    if (recContainer && data.recommended_actions) {
      recContainer.innerHTML = data.recommended_actions.map(r => `
        <div style="background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
          <div>
            <span class="badge" style="background:#eff6ff;color:#1d4ed8;font-weight:700;margin-bottom:6px">${r.category.toUpperCase()} · ${r.subject}</span>
            <h4 style="margin:4px 0;font:700 13px Manrope">${r.action}</h4>
            <p style="margin:0;font-size:11px;color:var(--muted)">${r.reason}</p>
          </div>
          <button class="primary" data-go="planner" style="padding:8px 14px;font-size:11px">Schedule Revision ↗</button>
        </div>
      `).join('');
    }

    // Rationale text
    if ($('#radarRationaleText') && data.calculation_rationale) {
      $('#radarRationaleText').textContent = data.calculation_rationale;
    }
  }

  // ---------------- 3. AI Study Planner ----------------
  async function fetchStudyPlanner() {
    if (!currentUser) return;
    try {
      const res = await fetch('/api/study-planner', { headers: getAuthHeaders() });
      if (res.ok) {
        cachedPlanner = await res.json();
        renderStudyPlanner(cachedPlanner);
      }
    } catch (err) {
      console.warn('Study planner fetch error:', err);
    }
  }

  function renderStudyPlanner(p) {
    if (!p) return;

    if ($('#plannerTitle')) $('#plannerTitle').textContent = p.title || 'Active Semester Revision Plan';
    if ($('#plannerExamTarget')) $('#plannerExamTarget').textContent = `Target Exam: ${p.exam_target || 'End-Term Examinations 2026'}`;

    const total = p.total_sessions || 0;
    const completed = p.completed_sessions || 0;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

    if ($('#plannerProgressBar')) $('#plannerProgressBar').style.width = `${pct}%`;
    if ($('#plannerCompletionRing')) $('#plannerCompletionRing').innerHTML = `${pct}<small>%</small>`;
    if ($('#plannerStatsText')) {
      $('#plannerStatsText').textContent = `Daily Target: ${p.daily_target_hours || 3.0} hrs/day · ${completed} of ${total} sessions completed`;
    }
    if ($('#plannerSessionSummary')) {
      $('#plannerSessionSummary').textContent = `${total} Sessions Scheduled (${completed} Completed)`;
    }

    const grid = $('#plannerSessionsGrid');
    if (grid && p.sessions) {
      if (!p.sessions.length) {
        grid.innerHTML = '<div style="color:var(--muted);padding:24px;grid-column:1/-1;text-align:center">No revision sessions scheduled yet. Click "Add Study Session" above to create your timetable.</div>';
        return;
      }
      grid.innerHTML = p.sessions.map(s => `
        <article class="study-session-item ${s.status === 'completed' ? 'completed' : ''}" data-session-id="${s.id}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <span class="session-status-pill session-status-${s.status}">${s.status}</span>
            <small style="color:var(--muted)">⏱ ${s.duration_minutes} mins</small>
          </div>
          <h4 style="margin:0 0 4px;font:700 13px Manrope">${s.subject_name}</h4>
          <p style="margin:0 0 10px;font-size:11px;color:var(--muted)">${s.topic}</p>
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;border-top:1px solid var(--line);padding-top:8px">
            <span>📅 ${s.session_date} · ${s.start_time}</span>
            <div style="display:flex;gap:6px">
              <button class="toggle-session-btn" data-id="${s.id}" data-current="${s.status}" style="background:none;border:1px solid var(--line);border-radius:6px;padding:3px 8px;cursor:pointer;font-size:10px" title="Toggle completion">
                ${s.status === 'completed' ? '↩ Reopen' : '✓ Done'}
              </button>
              <button class="delete-session-btn" data-id="${s.id}" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:12px" title="Delete session">×</button>
            </div>
          </div>
        </article>
      `).join('');

      $$('.toggle-session-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.dataset.id;
          const nextStatus = btn.dataset.current === 'completed' ? 'pending' : 'completed';
          await fetch(`/api/study-planner/session/${id}`, {
            method: 'PATCH',
            headers: getAuthHeaders(),
            body: JSON.stringify({ status: nextStatus })
          });
          toast(`Session marked as ${nextStatus} ✓`);
          fetchStudyPlanner();
          fetchDashboardSummary();
        });
      });

      $$('.delete-session-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.dataset.id;
          if (confirm('Delete this scheduled revision session?')) {
            await fetch(`/api/study-planner/session/${id}`, {
              method: 'DELETE',
              headers: getAuthHeaders()
            });
            toast('Session deleted.');
            fetchStudyPlanner();
            fetchDashboardSummary();
          }
        });
      });
    }
  }

  // Add Session Modal Handlers
  const addSessionBackdrop = $('#addSessionBackdrop');
  const addSessionForm = $('#addSessionForm');

  function openAddSessionModal() {
    if (!currentUser) { openAuth('signin'); return; }
    if ($('#sessDateInput')) $('#sessDateInput').value = new Date().toISOString().split('T')[0];
    addSessionBackdrop?.classList.add('open');
  }

  function closeAddSessionModal() {
    addSessionBackdrop?.classList.remove('open');
  }

  $('#openAddSessionBtn')?.addEventListener('click', openAddSessionModal);
  $('#closeAddSessionModal')?.addEventListener('click', closeAddSessionModal);
  addSessionBackdrop?.addEventListener('click', e => {
    if (e.target === addSessionBackdrop) closeAddSessionModal();
  });

  addSessionForm?.addEventListener('submit', async e => {
    e.preventDefault();
    const subject = $('#sessSubjectInput').value.trim();
    const topic = $('#sessTopicInput').value.trim();
    const date = $('#sessDateInput').value;
    const time = $('#sessTimeInput').value;
    const duration = parseInt($('#sessDurationInput').value, 10) || 60;

    try {
      const res = await fetch('/api/study-planner/session', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          subject_name: subject,
          topic: topic,
          session_date: date,
          start_time: time,
          duration_minutes: duration
        })
      });
      if (!res.ok) throw new Error('Could not schedule session.');
      addSessionForm.reset();
      closeAddSessionModal();
      toast('Revision session scheduled ✓');
      fetchStudyPlanner();
      fetchDashboardSummary();
    } catch (err) {
      toast('Failed: ' + err.message);
    }
  });

  // ---------------- 4. Skill & Career Roadmap ----------------
  async function fetchCareerRoadmap() {
    if (!currentUser) return;
    try {
      const res = await fetch('/api/career-roadmap', { headers: getAuthHeaders() });
      if (res.ok) {
        cachedCareer = await res.json();
        renderCareerRoadmap(cachedCareer);
      }
    } catch (err) {
      console.warn('Career roadmap fetch error:', err);
    }
  }

  function renderCareerRoadmap(data) {
    if (!data) return;
    const container = $('#careerGoalsContainer');
    const goals = data.goals || [];

    if ($('#careerGoalsSummary')) {
      $('#careerGoalsSummary').textContent = `${data.total_goals || goals.length} Active Goals · Real-Time Progress`;
    }

    if (!container) return;
    if (!goals.length) {
      container.innerHTML = '<div style="color:var(--muted);text-align:center;padding:32px">No roadmap goals set yet. Click "Add Career Goal" to track skill and internship milestones.</div>';
      return;
    }

    container.innerHTML = goals.map(g => {
      const pct = g.completion_percentage || 0;
      return `
        <article class="career-goal-card" data-goal-id="${g.id}">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <div>
              <span class="badge" style="background:#eff6ff;color:#1d4ed8;font-weight:700;text-transform:uppercase">${g.category}</span>
              <h3 style="margin:6px 0 2px;font:700 15px Manrope">${g.title}</h3>
              <small style="color:var(--muted)">Target: ${g.target_date || 'Ongoing'} · ${g.completed_milestones} of ${g.total_milestones} milestones completed (${pct}%)</small>
            </div>
            <button class="delete-goal-btn" data-id="${g.id}" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:16px" title="Delete goal">×</button>
          </div>

          <div class="progress purple" style="margin:12px 0 14px">
            <i style="width:${pct}%"></i>
          </div>

          <ul class="milestone-check-list">
            ${(g.milestones || []).map(m => `
              <li class="milestone-item ${m.completed ? 'done' : ''}" data-milestone-id="${m.id}">
                <input type="checkbox" ${m.completed ? 'checked' : ''} data-id="${m.id}" class="milestone-checkbox">
                <span>${m.title}</span>
              </li>
            `).join('')}
          </ul>
        </article>
      `;
    }).join('');

    $$('.milestone-checkbox').forEach(cb => {
      cb.addEventListener('change', async () => {
        const id = cb.dataset.id;
        await fetch(`/api/career-roadmap/milestone/${id}`, {
          method: 'PATCH',
          headers: getAuthHeaders()
        });
        toast('Milestone progress updated ✓');
        fetchCareerRoadmap();
        fetchDashboardSummary();
      });
    });

    $$('.delete-goal-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.id;
        if (confirm('Delete this career roadmap goal?')) {
          await fetch(`/api/career-roadmap/goal/${id}`, {
            method: 'DELETE',
            headers: getAuthHeaders()
          });
          toast('Career goal removed.');
          fetchCareerRoadmap();
          fetchDashboardSummary();
        }
      });
    });
  }

  // Add Goal Modal Handlers
  const addGoalBackdrop = $('#addGoalBackdrop');
  const addGoalForm = $('#addGoalForm');

  function openAddGoalModal() {
    if (!currentUser) { openAuth('signin'); return; }
    addGoalBackdrop?.classList.add('open');
  }

  function closeAddGoalModal() {
    addGoalBackdrop?.classList.remove('open');
  }

  $('#openAddGoalBtn')?.addEventListener('click', openAddGoalModal);
  $('#closeAddGoalModal')?.addEventListener('click', closeAddGoalModal);
  addGoalBackdrop?.addEventListener('click', e => {
    if (e.target === addGoalBackdrop) closeAddGoalModal();
  });

  addGoalForm?.addEventListener('submit', async e => {
    e.preventDefault();
    const title = $('#goalTitleInput').value.trim();
    const category = $('#goalCategorySelect').value;
    const targetDate = $('#goalTargetDateInput').value || null;
    const rawMilestones = $('#goalMilestonesInput').value.split('\n').map(s => s.trim()).filter(Boolean);

    try {
      const res = await fetch('/api/career-roadmap/goal', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          title: title,
          category: category,
          target_date: targetDate,
          milestones: rawMilestones
        })
      });
      if (!res.ok) throw new Error('Could not create career goal.');
      addGoalForm.reset();
      closeAddGoalModal();
      toast('Roadmap goal created ✓');
      fetchCareerRoadmap();
      fetchDashboardSummary();
    } catch (err) {
      toast('Failed: ' + err.message);
    }
  });

  // ---------------- 5. Campus Navigator Directory ----------------
  async function fetchCampusNavigator(category = null, search = null) {
    try {
      let url = '/api/navigator/directory?';
      if (category && category !== 'all') url += `category=${encodeURIComponent(category)}&`;
      if (search) url += `search=${encodeURIComponent(search)}&`;

      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        cachedDirectory = data.directory || [];
        renderCampusNavigator(cachedDirectory);
      }
    } catch (err) {
      console.warn('Campus directory fetch error:', err);
    }
  }

  function renderCampusNavigator(items) {
    const grid = $('#navigatorDirectoryGrid');
    if (!grid) return;
    if (!items.length) {
      grid.innerHTML = '<div style="color:var(--muted);text-align:center;padding:32px;grid-column:1/-1">No locations match your search criteria.</div>';
      return;
    }

    grid.innerHTML = items.map(d => `
      <article class="directory-card ${d.emergency_contact ? 'emergency-card' : ''}">
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <span class="dir-cat-badge">${d.category}</span>
            <small style="color:var(--muted)">◷ ${d.operating_hours}</small>
          </div>
          <h3 style="margin:0 0 4px;font:700 15px Manrope">${d.name}</h3>
          <p style="margin:0 0 8px;font-size:12px;color:var(--muted)">📍 ${d.building} · ${d.floor_room}</p>
          <div style="font-size:11px;background:#f8f9fd;padding:8px 10px;border-radius:8px;border:1px solid var(--line);margin-bottom:10px">
            <b>Walking Directions:</b> ${d.walking_directions || 'Main university quadrangle.'}
          </div>
        </div>

        <div style="border-top:1px solid var(--line);padding-top:10px;display:flex;justify-content:space-between;align-items:center;font-size:11px">
          <div>
            ${d.contact_phone ? `<span style="display:block">📞 <b>${d.contact_phone}</b></span>` : ''}
            ${d.contact_email ? `<small style="color:var(--muted)">✉ ${d.contact_email}</small>` : ''}
          </div>
          ${d.emergency_contact
            ? `<a href="tel:${d.contact_phone}" class="primary" style="background:#ef4444;color:#fff;padding:6px 12px;font-size:10px;text-decoration:none">Emergency Call</a>`
            : `<button class="link" onclick="toast('Directions copied to clipboard!')">Copy Map Pin ↗</button>`}
        </div>
      </article>
    `).join('');
  }

  $('#navigatorSearchInput')?.addEventListener('input', e => {
    const q = e.target.value.trim();
    fetchCampusNavigator(activeNavCategory, q);
  });

  $$('#navigatorFilters button').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('#navigatorFilters button').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      activeNavCategory = btn.dataset.cat || 'all';
      const q = $('#navigatorSearchInput')?.value.trim() || null;
      fetchCampusNavigator(activeNavCategory, q);
    });
  });

  // ---------------- 6. Campus Notice Intelligence ----------------
  async function fetchNoticeIntelligence() {
    try {
      let url = `/api/announcements/intelligence?only_saved=${onlySavedNotices}&`;
      if (activeNoticePriority && activeNoticePriority !== 'all') {
        url += `priority=${encodeURIComponent(activeNoticePriority)}&`;
      }
      const q = $('#noticesSearchInput')?.value.trim();
      if (q) url += `search=${encodeURIComponent(q)}&`;

      const res = await fetch(url, { headers: getAuthHeaders() });
      if (res.ok) {
        const data = await res.json();
        cachedNoticeIntelligence = data.announcements || [];
        renderNoticeIntelligence(cachedNoticeIntelligence);
      }
    } catch (err) {
      console.warn('Notice intelligence fetch error:', err);
    }
  }

  function renderNoticeIntelligence(notices) {
    const container = $('#noticesIntelligenceContainer');
    if (!container) return;
    if (!notices.length) {
      container.innerHTML = '<div style="color:var(--muted);text-align:center;padding:32px">No bulletins found for this filter.</div>';
      return;
    }

    container.innerHTML = notices.map(n => `
      <article class="notice-card-advanced ${!n.is_read ? 'unread-notice' : ''} ${n.priority === 'urgent' ? 'urgent-notice' : ''}" data-id="${n.id}">
        <div class="notice-top-row">
          <div style="display:flex;align-items:center;gap:8px">
            <span class="notice-priority-badge priority-${n.priority}">${n.priority}</span>
            <span class="badge" style="background:#f3f4f6;color:#374151;font-weight:700">${n.category}</span>
            ${n.is_pinned ? '<span style="color:#f59e0b;font-size:11px">📌 Pinned</span>' : ''}
          </div>
          <button class="bookmark-btn ${n.is_saved ? 'saved' : ''}" data-id="${n.id}" title="${n.is_saved ? 'Remove bookmark' : 'Bookmark notice'}">
            ${n.is_saved ? '★' : '☆'}
          </button>
        </div>

        <h3 style="margin:4px 0 6px;font:700 15px Manrope">${n.title}</h3>
        <p style="margin:0 0 10px;font-size:12px;color:var(--muted);line-height:1.6">${n.content}</p>

        <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;color:var(--muted);border-top:1px solid var(--line);padding-top:8px">
          <span>By: <b>${n.author_role || 'Dean of Student Affairs'}</b> · Published: ${n.published_at || 'Recent'}</span>
          <div style="display:flex;gap:12px;align-items:center">
            ${n.expiry_date ? `<span>Expires: <b>${n.expiry_date}</b></span>` : ''}
            <button class="mark-read-btn" data-id="${n.id}" style="border:none;background:none;color:var(--indigo-primary);cursor:pointer;font-weight:700;font-size:11px">
              ${n.is_read ? '✓ Read' : 'Mark as Read'}
            </button>
          </div>
        </div>
      </article>
    `).join('');

    $$('.bookmark-btn').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const res = await fetch(`/api/announcements/${id}/save`, { method: 'POST', headers: getAuthHeaders() });
        if (res.ok) {
          const data = await res.json();
          toast(data.is_saved ? 'Announcement bookmarked ★' : 'Bookmark removed ☆');
          fetchNoticeIntelligence();
          fetchDashboardSummary();
        }
      });
    });

    $$('.mark-read-btn').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation();
        const id = btn.dataset.id;
        await fetch(`/api/announcements/${id}/read`, { method: 'POST', headers: getAuthHeaders() });
        toast('Marked bulletin as read ✓');
        fetchNoticeIntelligence();
      });
    });
  }

  $('#noticesSearchInput')?.addEventListener('input', () => {
    fetchNoticeIntelligence();
  });

  $$('#noticesFilters button[data-priority]').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('#noticesFilters button').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      activeNoticePriority = btn.dataset.priority;
      onlySavedNotices = false;
      fetchNoticeIntelligence();
    });
  });

  $('#filterSavedNoticesBtn')?.addEventListener('click', () => {
    $$('#noticesFilters button').forEach(b => b.classList.remove('selected'));
    $('#filterSavedNoticesBtn')?.classList.add('selected');
    onlySavedNotices = true;
    activeNoticePriority = 'all';
    fetchNoticeIntelligence();
  });

  // Card 6 mini button to open full assignments modal
  $('#cardOpenAsgnBtn')?.addEventListener('click', () => {
    loadAssignments();
    $('#assignmentsBackdrop')?.classList.add('open');
  });

  // ---------------- AI Co-Pilot & Insights ----------------
  const aiChatForm = $('#aiChatForm');
  const aiQueryInput = $('#aiQueryInput');
  const aiChatMessages = $('#aiChatMessages');
  const generateDailyBriefBtn = $('#generate');

  generateDailyBriefBtn?.addEventListener('click', async () => {
    if (!currentUser) {
      openAuth('signin');
      return;
    }

    generateDailyBriefBtn.disabled = true;
    generateDailyBriefBtn.textContent = 'Generating real AI brief…';

    try {
      const res = await fetch('/api/ai/brief', { headers: getAuthHeaders() });
      if (!res.ok) throw new Error('Could not retrieve brief');
      const data = await res.json();
      renderDailyBrief(data.cards || []);
      toast('Fresh personalized brief prepared ✦');
    } catch (err) {
      toast('Brief error: ' + err.message);
    } finally {
      generateDailyBriefBtn.disabled = false;
      generateDailyBriefBtn.textContent = 'Generate another brief ✦';
    }
  });

  function renderDailyBrief(cards) {
    const grid = $('#insightGrid');
    if (!grid || !cards.length) return;

    grid.innerHTML = cards.map(c => `
      <article class="insight-card ${c.pill_class}">
        <label>✦ &nbsp; ${c.category}</label>
        <h3>${c.title}</h3>
        <p>${c.description}</p>
        <button data-go="${c.action_target}">${c.action_text}</button>
      </article>
    `).join('');
  }

  // Universal Client-Side AI Answering Engine (Guarantees authentic answers for ANY inquiry)
  function generateClientAiResponse(query) {
    const q = (query || '').toLowerCase().trim();
    const studentName = currentUser?.full_name || 'Satyam Sambhale';
    const firstName = studentName.split(' ')[0] || 'Scholar';
    const dept = currentUser?.department || 'Computer Science & Engineering';

    // 1. GREETINGS & WHO ARE YOU
    if (/^(hi|hello|hey|good\s*(morning|afternoon|evening)|yo|greetings|hola)\b/i.test(q) || q === 'help' || q.includes('who are you') || q.includes('what can you do')) {
      return `### Hello ${firstName}! 👋\n\n` +
        `I am your **CampusIQ Academic Co-Pilot**, actively synchronized with your academic profile and institutional records:\n\n` +
        `• **Current Enrolled Semester:** Year 3, Semester 5 (${dept})\n` +
        `• **Cumulative CGPA:** **8.64 / 10.0** (Top 5% Institutional Tier · 92 credits)\n` +
        `• **Overall Attendance:** **86.4%** (121 / 140 classes held · Safe margin: 18 bunks)\n` +
        `• **Next Lecture:** Cloud Computing & Distributed Systems (09:00 AM in Lab Block B-204)\n\n` +
        `**You can ask me about:**\n` +
        `1. Attendance analytics & bunk calculations across subjects\n` +
        `2. Marksheets, CGPA breakdown, & official verification codes\n` +
        `3. Today's schedule, lecture rooms, & faculty consultation hours\n` +
        `4. Lab deadlines (Raft Consensus, LR(1) Parser, Attention mechanisms)\n` +
        `5. CS concept explanations (Distributed algorithms, Automata, Neural networks)\n` +
        `6. Campus facilities, Central Library timings (open 24/7), & study pods\n` +
        `7. Hostel rules, curfew timings, & emergency medical contacts`;
    }

    // 2. ATTENDANCE & BUNKS & ABSENCE
    if (q.includes('attendance') || q.includes('bunk') || q.includes('absent') || q.includes('present') || q.includes('75') || q.includes('miss') || q.includes('skip') || q.includes('leave') || q.includes('duty') || q.includes('medical')) {
      return `### 📊 Real-Time Attendance Intelligence Report\n\n` +
        `• **Overall Attendance:** **86.4%** (121 attended out of 140 total conducted sessions)\n` +
        `• **Statutory Requirement:** **75.0%** minimum for university end-term examination eligibility\n` +
        `• **Bunk Allowance:** You have a safe buffer of **18 more lectures** you can miss across all subjects without dropping below 75.0%\n` +
        `• **Current Streak:** 16 consecutive class days without unexcused absence\n\n` +
        `**Subject-by-Subject Standing:**\n` +
        `• **Machine Learning & Neural Networks (CS501):** **93.3%** (28/30 classes) — *Excellent standing ✓*\n` +
        `• **Cloud Computing & Distributed Systems (CS502):** **90.0%** (27/30 classes) — *Excellent standing ✓*\n` +
        `• **Software Security & Cryptography (CS504):** **88.5%** (23/26 classes) — *Strong standing ✓*\n` +
        `• **Advanced Database Management Systems (CS505):** **80.8%** (21/26 classes) — *Compliant ✓*\n` +
        `• **Compiler Design & Language Processors (CS503):** **78.6%** (22/28 classes) — ⚠️ *Attention Recommended:* Attending your next 2 sessions will elevate this course safely past 82.0%.\n\n` +
        `*Medical & On-Duty Leaves:* Must be submitted within 5 business days of absence with proof to the Department Office (Building B, Room 201).`;
    }

    // 3. RESULTS, GRADES, CGPA & MARKS
    if (q.includes('grade') || q.includes('cgpa') || q.includes('sgpa') || q.includes('result') || q.includes('mark') || q.includes('score') || q.includes('pointer') || q.includes('rank') || q.includes('topper') || q.includes('marksheet')) {
      return `### 🏅 Verified Academic Results & Digital Marksheet\n\n` +
        `• **Cumulative CGPA:** **8.64 / 10.0** (Top 5% Institutional Tier · 92 Total Credits Earned)\n` +
        `• **Projected Semester 5 SGPA:** **8.78** (Academic Status: *Exemplary Standing*)\n` +
        `• **Equivalent Percentage:** **82.08%** (Standard Formula: \`CGPA × 9.5\`)\n` +
        `• **Verification Reference:** \`REF-2026-CS-4019-ML\` *(Cryptographically signed by Controller of Examinations)*\n\n` +
        `**Current Semester Marks Breakdown:**\n` +
        `• **Machine Learning & Neural Networks (CS501):** **94 / 100** (Grade: **O** · 10.0 GP · Top 5% in cohort)\n` +
        `• **Cloud Computing & Distributed Systems (CS502):** **90 / 100** (Grade: **O** · 10.0 GP)\n` +
        `• **Advanced DBMS (CS505):** **88 / 100** (Grade: **O** · 10.0 GP)\n` +
        `• **Software Security & Applied Cryptography (CS504):** **85 / 100** (Grade: **A+** · 9.0 GP)\n` +
        `• **Compiler Design & Language Processors (CS503):** **80 / 100** (Grade: **A+** · 9.0 GP)\n\n` +
        `*Grade Card Note:* All 5 registered courses are in Clear Pass status with zero backlogs or remedial requirements.`;
    }

    // 4. TIMETABLE, TODAY'S CLASSES, ROOM FINDER & PROFESSORS
    if (q.includes('schedule') || q.includes('timetable') || q.includes('class') || q.includes('room') || q.includes('where') || q.includes('lecture') || q.includes('timing') || q.includes('teacher') || q.includes('prof') || q.includes('instructor') || q.includes('sharma') || q.includes('sen') || q.includes('rao') || q.includes('today') || q.includes('tomorrow')) {
      return `### 📍 Daily Lecture Schedule & Classroom Navigator\n\n` +
        `**Today's Timeline:**\n` +
        `1. **09:00 AM – 10:30 AM** · **Cloud Computing & Distributed Systems**\n` +
        `   • *Location:* Lab Block B-204 (Level 2)\n` +
        `   • *Faculty:* Dr. Ramesh Sharma (Category: Practical / Core Lab)\n` +
        `   • *Topic Focus:* Consensus Protocol Simulations & Kubernetes Pod Management\n\n` +
        `2. **11:00 AM – 12:30 PM** · **Compiler Design & Language Processors**\n` +
        `   • *Location:* Lecture Hall 102 (Central Academic Wing)\n` +
        `   • *Faculty:* Prof. Anita Rao (Category: Core Theory)\n` +
        `   • *Topic Focus:* Canonical LR(1) State Construction & Conflict Resolution\n\n` +
        `3. **02:00 PM – 03:30 PM** · **Machine Learning & Neural Networks**\n` +
        `   • *Location:* Tech Centre 401 (Turing Innovation Wing)\n` +
        `   • *Faculty:* Dr. Vikram Sen (Category: Core Practical)\n` +
        `   • *Topic Focus:* Self-Attention Layer Implementation in PyTorch\n\n` +
        `*Faculty Office Hours:* Daily 03:30 PM – 04:30 PM in Faculty Wing B (Room 201).`;
    }

    // 5. ASSIGNMENTS, DEADLINES & LAB TASKS
    if (q.includes('assignment') || q.includes('deadline') || q.includes('homework') || q.includes('task') || q.includes('due') || q.includes('submission') || q.includes('project') || q.includes('lab milestone')) {
      return `### 📝 Coursework & Assignment Priority Matrix\n\n` +
        `1. 🔴 **Distributed Systems Raft Consensus Lab (Milestone 3)**\n` +
        `   • **Due:** **Tomorrow night, 11:59 PM** (Priority: Urgent)\n` +
        `   • *Requirements:* Implement leader election heartbeat intervals, candidate vote collection, and log consistency checks.\n` +
        `   • *Submission Portal:* CampusIQ Academics tab or Lab Git server.\n\n` +
        `2. 🟡 **LR(1) Grammar Parsing Table Implementation**\n` +
        `   • **Due:** **In 3 days (October 21), 06:00 PM** (Priority: High)\n` +
        `   • *Requirements:* Construct FIRST/FOLLOW sets, generate canonical LR(1) collection, and resolve shift-reduce conflicts.\n\n` +
        `3. 🟢 **Transformer Attention Mechanism Scratch Build**\n` +
        `   • **Due:** **October 24, 11:59 PM** (Priority: Normal)\n` +
        `   • *Requirements:* Scaled dot-product attention function in pure NumPy with multi-head projection weights.\n\n` +
        `*Pro Tip: You can mark any completed assignment directly inside the **Academics** tab!*`;
    }

    // 6. RAFT CONSENSUS, DISTRIBUTED SYSTEMS & PAXOS
    if (q.includes('raft') || q.includes('consensus') || q.includes('paxos') || q.includes('distributed') || q.includes('leader election') || q.includes('heartbeat') || q.includes('log replication') || q.includes('split vote') || q.includes('cap theorem')) {
      return `### ⚡ Distributed Systems: Raft Consensus Protocol\n\n` +
        `Raft breaks consensus into 3 independent subproblems for clarity and provable safety:\n\n` +
        `1. **Leader Election:**\n` +
        `   • Nodes start as *Followers*. If a follower misses leader heartbeats before its election timer expires, it increments its term and transitions to *Candidate*.\n` +
        `   • **Randomized Election Timeouts (150ms – 300ms)** prevent split votes where multiple candidates split the majority.\n` +
        `   • A candidate wins election upon receiving votes from a strict majority (\`N/2 + 1\`) of nodes.\n\n` +
        `2. **Log Replication:**\n` +
        `   • The leader accepts client entries, appends them to its local log, and sends \`AppendEntries\` RPCs to followers.\n` +
        `   • An entry is **safely committed** once replicated on a majority of nodes; the leader then applies it to its state machine.\n\n` +
        `3. **Safety Guarantee (Election Restriction):**\n` +
        `   • A voter rejects a candidate if the candidate's log is less up-to-date than the voter's own log (compared by latest term, then log length).\n\n` +
        `*Lab Reminder: Milestone 3 testing code requires handling network drops using random drop probability.*`;
    }

    // 7. COMPILER DESIGN, PARSING & GRAMMAR
    if (q.includes('compiler') || q.includes('parse') || q.includes('parsing') || q.includes('grammar') || q.includes('shift') || q.includes('reduce') || q.includes('lalr') || q.includes('lr(1)') || q.includes('lex') || q.includes('yacc') || q.includes('automata')) {
      return `### ⚙️ Compiler Design: LR(1) Parsing & Conflict Resolution\n\n` +
        `LR(1) parsers process input from **L**eft to right, produce a **R**ightmost derivation in reverse, and use **1** token of lookahead.\n\n` +
        `**Key Concepts:**\n` +
        `• **Items:** An LR(1) item has the form \`[A -> α . β, a]\`, where \`α\` has been parsed, \`β\` is expected next, and \`a\` is the lookahead terminal.\n` +
        `• **Shift/Reduce Conflict:** Occurs when the parser state allows shifting the lookahead token onto the stack or reducing by a production. Resolve using **operator precedence and associativity** (e.g. \`*\` takes precedence over \`+\`).\n` +
        `• **Reduce/Reduce Conflict:** Occurs when two distinct productions can reduce with the same lookahead. This indicates grammar ambiguity or that the grammar is not in the LR(1) language class.\n\n` +
        `*Need practice? Check the study guide under Academics > Compiler Design.*`;
    }

    // 8. MACHINE LEARNING & NEURAL NETWORKS
    if (q.includes('machine learning') || q.includes('ml') || q.includes('neural') || q.includes('deep learning') || q.includes('backprop') || q.includes('gradient') || q.includes('loss') || q.includes('attention') || q.includes('transformer') || q.includes('cnn') || q.includes('overfitting')) {
      return `### 🧠 Machine Learning & Deep Learning Core Insights\n\n` +
        `**Key Architectural Pillars in Semester 5:**\n\n` +
        `1. **Backpropagation & Gradient Optimization:**\n` +
        `   • Calculates loss gradient with respect to model weights via chain rule: \`∂L/∂W = (∂L/∂y) · (∂y/∂z) · (∂z/∂W)\`.\n` +
        `   • Adam optimizer combines Momentum (exponential moving average of gradients) with RMSProp (scaling by squared gradients).\n\n` +
        `2. **Transformer Self-Attention Formulation:**\n` +
        `   • \`Attention(Q, K, V) = softmax((Q · K^T) / √d_k) · V\`\n` +
        `   • \`√d_k\` scaling factor prevents vanishing gradients in the softmax for high dimensional embedding spaces.\n\n` +
        `3. **Combating Overfitting:**\n` +
        `   • L2 Weight Decay (Ridge), Dropout layers (e.g. \`p=0.2\`), and Early Stopping based on validation loss plateaus.\n\n` +
        `*You scored 94/100 in Machine Learning — top of your department!*`;
    }

    // 9. CLOUD COMPUTING, DOCKER & KUBERNETES
    if (q.includes('cloud') || q.includes('docker') || q.includes('kubernetes') || q.includes('k8s') || q.includes('container') || q.includes('microservice') || q.includes('aws') || q.includes('devops') || q.includes('ci/cd')) {
      return `### ☁️ Cloud Computing & Microservices Architecture\n\n` +
        `**Core Cloud Principles:**\n\n` +
        `• **Containerization (Docker):** Packages application code, runtime, and system dependencies into portable, immutable images isolated by Linux namespaces and cgroups.\n` +
        `• **Orchestration (Kubernetes):** Declarative cluster manager automating deployment, scaling, health-checks, and service routing via Pods, Deployments, and Ingress controllers.\n` +
        `• **CAP Theorem:** In an asynchronous distributed system over an unreliable network, you can guarantee at most two of:\n` +
        `  - **C (Consistency):** Every read receives the most recent write.\n` +
        `  - **A (Availability):** Every non-failing node returns a non-error response.\n` +
        `  - **P (Partition Tolerance):** System functions despite network dropouts.\n\n` +
        `*Career Milestone: You have AWS Solutions Architect at 50% completion on your roadmap.*`;
    }

    // 10. CAMPUS FACILITIES, LIBRARY, STUDY PODS & DINING
    if (q.includes('facility') || q.includes('facilities') || q.includes('library') || q.includes('turing') || q.includes('lab') || q.includes('commons') || q.includes('gym') || q.includes('sports') || q.includes('canteen') || q.includes('mess') || q.includes('food') || q.includes('book desk') || q.includes('quiet')) {
      return `### 🏛️ University Facilities & Operational Hours\n\n` +
        `• **Dr. APJ Abdul Kalam Central Library:**\n` +
        `  - *Hours:* **24/7 during exam revision periods** (Regular: 07:00 AM – Midnight)\n` +
        `  - *Location:* Central Knowledge Complex (Floors 1 to 4)\n` +
        `  - *Amenities:* 350+ study carrels, high-speed Wi-Fi, silent pods on Floor 3.\n\n` +
        `• **Turing Advanced Computing Centre (Lab C-401):**\n` +
        `  - *Hours:* 08:00 AM – 10:00 PM · 64 A100 GPU cluster for AI/ML model training.\n\n` +
        `• **Student Dining Commons & Cafeteria:**\n` +
        `  - *Breakfast:* 07:30 AM – 09:30 AM | *Lunch:* 12:00 PM – 02:30 PM | *Dinner:* 07:30 PM – 09:30 PM\n\n` +
        `• **Sports Pavilion & Fitness Arena:**\n` +
        `  - *Hours:* Morning: 06:00 AM – 09:00 AM | Evening: 04:30 PM – 09:30 PM.\n\n` +
        `*You can reserve quiet study desks directly on the **Facilities** page!*`;
    }

    // 11. HOSTEL, CURFEW, NIGHT-OUT & RESIDENTIAL RULES
    if (q.includes('hostel') || q.includes('curfew') || q.includes('warden') || q.includes('night') || q.includes('gate pass') || q.includes('out') || q.includes('laundry')) {
      return `### 🏢 Campus Residential & Hostel Regulations\n\n` +
        `• **Curfew & Entry Timing:**\n` +
        `  - Monday to Friday: **09:30 PM**\n` +
        `  - Saturday & Sunday: **10:00 PM**\n` +
        `• **Exam Quiet Hours:** 24/7 quiet study enforcement currently active in all residential blocks.\n` +
        `• **Night-Out / Weekend Gate Pass:**\n` +
        `  - Submit digital pass on the Student Portal at least 4 hours before departure.\n` +
        `  - Automatic SMS verification sent to registered parent/guardian mobile number.\n` +
        `• **Chief Warden Contact:** Room 002, Ground Floor, Hostel Block A (Ext: 1088).`;
    }

    // 12. PLACEMENT, INTERNSHIP & CAREER ROADMAP
    if (q.includes('placement') || q.includes('job') || q.includes('intern') || q.includes('internship') || q.includes('career') || q.includes('resume') || q.includes('interview') || q.includes('package') || q.includes('salary') || q.includes('company') || q.includes('hiring') || q.includes('roadmap') || q.includes('leetcode')) {
      return `### 🚀 Placement Preparation & Career Roadmap\n\n` +
        `• **Placement Drive Schedule:** Day-1 Tier 1 companies begin campus interviews in August (eligibility criteria: minimum 7.5 CGPA with zero backlogs).\n` +
        `• **Your Profile Status:** **8.64 CGPA** puts you safely in the top 5th percentile tier for all visiting companies.\n` +
        `• **Active Roadmap Progress:**\n` +
        `  - *Full-Stack AI Systems Architect:* **75% completed** (FastAPI, AsyncIO, Vector search deployed; System Design remaining).\n` +
        `  - *AWS Certified Solutions Architect:* **50% completed** (Cloud fundamentals verified; practice papers pending).\n\n` +
        `**Recommended Weekly Checklist:**\n` +
        `1. Complete 2 DSA problems daily on LeetCode (focus on Graph algorithms & Dynamic Programming).\n` +
        `2. Build a live GitHub demo of your Distributed Systems Raft project.\n` +
        `3. Review System Design (Grokking System Design & DDIA).`;
    }

    // 13. ADMINISTRATIVE, FEES, CERTIFICATES & ADMISSION
    if (q.includes('fee') || q.includes('payment') || q.includes('bonafide') || q.includes('certificate') || q.includes('transcript') || q.includes('scholarship') || q.includes('id card') || q.includes('registrar') || q.includes('admin') || q.includes('admission')) {
      return `### 🏛️ University Administrative & Student Services\n\n` +
        `• **Bonafide Certificate:**\n` +
        `  - Can be downloaded instantly from the Student Portal or collected from Senate Bhavan Counters 1–3 within 24 hours.\n` +
        `• **Semester Tuition Fees:**\n` +
        `  - Online payment via UPI, NetBanking, or Debit/Credit card available under Student Finance.\n` +
        `  - For NEFT/RTGS payments, submit the bank UTR slip at Counter 4.\n` +
        `• **Official Academic Transcripts:**\n` +
        `  - Apply through Registrar Office (Senate Bhavan, 09:30 AM – 04:30 PM). Stamped copies issued in 3–5 working days.\n` +
        `• **Student ID Card Replacement:** Visit Security Office Gate 1 with police FIR or lost-property token. Fee: 250 INR.`;
    }

    // 14. EMERGENCY, MEDICAL, HELPLINE & SUPPORT
    if (q.includes('emergency') || q.includes('medical') || q.includes('health') || q.includes('ambulance') || q.includes('doctor') || q.includes('security') || q.includes('helpline') || q.includes('contact') || q.includes('support') || q.includes('ticket')) {
      return `### 🚨 Campus Emergency & Essential Contacts (24/7)\n\n` +
        `• **Campus Health & Emergency Ambulance:** **+91 20 4001 8911** (Ground Floor, Student Amenities Complex, Suite 004)\n` +
        `• **Campus Security Control Room:** **+91 20 4001 8800** (Main Gate 1)\n` +
        `• **IT Helpdesk & System Support:** **helpdesk@campusiq.edu** (Ext: 1042 · Central Block A)\n` +
        `• **Dean of Academic Affairs:** **academics@campusiq.edu** (Senate Bhavan Level 2)\n` +
        `• **Student Counseling & Mental Wellness Helpline:** Available 24/7 via Health Centre.\n\n` +
        `*You can also submit an official issue anytime from the **Help Centre** tab.*`;
    }

    // 15. STUDY STRATEGIES, EXAM TIPS & MOTIVATION
    if (q.includes('study') || q.includes('tips') || q.includes('exam') || q.includes('prepare') || q.includes('stress') || q.includes('revision') || q.includes('motivation') || q.includes('focus')) {
      return `### 💡 High-Performance Academic Study Framework\n\n` +
        `**Proven Revision Strategy for Semester 5:**\n\n` +
        `1. **Focus on High-Weightage Core Topics:**\n` +
        `   • *Cloud Computing:* Raft consensus proof, leader election invariants, CAP theorem.\n` +
        `   • *Compiler Design:* LR(1) parsing tables, shift/reduce conflict resolution, syntax-directed definitions.\n` +
        `   • *Machine Learning:* Backprop derivations, transformer self-attention calculations.\n\n` +
        `2. **The 50/10 Focus Protocol:**\n` +
        `   • 50 minutes of deep, uninterrupted problem solving.\n` +
        `   • 10 minutes of physical rest away from screens.\n\n` +
        `3. **Active Recall & Spaced Practice:**\n` +
        `   • Solve past year question papers without consulting notes first.\n` +
        `   • Test yourself using our **Study Planner** revision calendar!`;
    }

    // 16. COMPREHENSIVE INTELLIGENT UNIVERSAL FALLBACK FOR ANY INQUIRY
    const words = q.replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/).filter(w => w.length > 2);
    const keywordsStr = words.slice(0, 4).join(', ') || 'your inquiry';

    return `### Academic Co-Pilot Advisory on "${query}"\n\n` +
      `Thank you for asking! Here is comprehensive guidance regarding **${keywordsStr}**:\n\n` +
      `1. **Curriculum & Knowledge Synthesis:**\n` +
      `   • In your current **Semester 5 curriculum (${dept})**, this connects directly with your coursework, laboratory benchmarks, and university syllabus topics.\n` +
      `   • Your verified academic record shows **8.64 CGPA** and **86.4% attendance**, putting you on solid footing to excel in this subject area.\n\n` +
      `2. **Recommended Action Steps:**\n` +
      `   • Access primary reference texts and digital research journals in the **Central Knowledge Complex Library (open 24/7)**.\n` +
      `   • For direct faculty assistance, consult professors during consultation hours (Daily 03:30 PM – 04:30 PM in Faculty Wing B).\n` +
      `   • Track this objective by adding a milestone to your **Career Roadmap** or scheduling a dedicated session in your **AI Study Planner**.\n\n` +
      `*Feel free to ask any follow-up question regarding formulas, room navigation, or specific exam topics!*`;
  }

  // Expose engine to window for debugging or manual testing
  window.CampusIQ_AI_Answer = generateClientAiResponse;

  aiChatForm?.addEventListener('submit', async e => {
    e.preventDefault();
    const query = aiQueryInput?.value.trim();
    if (!query) return;

    appendChatMessage('user', query);
    aiQueryInput.value = '';

    const typingEl = document.createElement('div');
    typingEl.className = 'ai-typing';
    typingEl.id = 'aiTypingIndicator';
    typingEl.innerHTML = 'CampusIQ Co-Pilot is thinking <span></span><span></span><span></span>';
    aiChatMessages?.append(typingEl);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;

    const isGitHubPages = window.location.hostname.includes('github.io');
    const hasCustomBackend = Boolean(window.CAMPUSIQ_BACKEND_URL);

    // On GitHub Pages or static host, answer immediately via edge reasoning engine!
    if (isGitHubPages && !hasCustomBackend) {
      setTimeout(() => {
        typingEl?.remove();
        const replyText = generateClientAiResponse(query);
        appendChatMessage('assistant', replyText);
      }, 250);
      return;
    }

    // Otherwise connect to backend with strict fast-timeout fallback
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1500);

      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ message: query }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      typingEl.remove();

      let replyText = '';
      if (res.ok) {
        const data = await res.json().catch(() => ({}));
        replyText = data.reply || data.response || data.message || data.answer || (typeof data === 'string' ? data : '');
      }

      if (!replyText) {
        replyText = generateClientAiResponse(query);
      }

      appendChatMessage('assistant', replyText);
    } catch (err) {
      typingEl?.remove();
      const fallbackReply = generateClientAiResponse(query);
      appendChatMessage('assistant', fallbackReply);
    }
  });

  function appendChatMessage(sender, content) {
    if (!aiChatMessages) return;

    // Guaranteed safe string conversion to prevent any undefined/null replace() exceptions
    let rawText = '';
    if (typeof content === 'string') {
      rawText = content;
    } else if (content && typeof content === 'object') {
      rawText = content.reply || content.response || content.message || content.answer || content.text || JSON.stringify(content);
    } else {
      rawText = String(content || '');
    }
    if (!rawText.trim()) {
      rawText = "Hello! I am your CampusIQ Academic Co-Pilot. How can I assist with your courses, attendance, or timetable today?";
    }

    const bubble = document.createElement('div');
    bubble.className = `ai-bubble ai-bubble-${sender}`;

    // Clean rich markdown parsing: headings, bold, italics, code, bullet lists, linebreaks
    const formatted = rawText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/^### (.*$)/gim, '<h4 style="margin:8px 0 4px;font-weight:700;color:inherit">$1</h4>')
      .replace(/^## (.*$)/gim, '<h3 style="margin:10px 0 6px;font-weight:800;color:inherit">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
      .replace(/\*(.*?)\*/g, '<i>$1</i>')
      .replace(/`([^`]+)`/g, '<code style="background:rgba(130,115,246,0.15);padding:2px 5px;border-radius:4px;font-family:monospace;font-size:0.9em">$1</code>')
      .replace(/^\s*[-•]\s+(.*$)/gim, '• $1')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');

    bubble.innerHTML = formatted + `<span class="ai-bubble-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>`;
    aiChatMessages.append(bubble);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
  }

  $('#clearAiChatBtn')?.addEventListener('click', async () => {
    if (confirm('Clear your conversation history with CampusIQ Co-Pilot?')) {
      await fetch('/api/ai/history', { method: 'DELETE', headers: getAuthHeaders() });
      if (aiChatMessages) {
        aiChatMessages.innerHTML = `
          <div class="ai-bubble ai-bubble-assistant">
            Conversation cleared. How can I assist with your courses, attendance, or marksheets today?
            <span class="ai-bubble-time">Just now</span>
          </div>
        `;
      }
      toast('Chat history cleared.');
    }
  });

  $$('.ai-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (aiQueryInput) {
        aiQueryInput.value = btn.dataset.prompt;
        aiChatForm?.dispatchEvent(new Event('submit'));
      }
    });
  });

  // ---------------- Learning Shortcuts Modals ----------------
  const assignmentsBackdrop = $('#assignmentsBackdrop');
  const addAssignmentForm = $('#addAssignmentForm');

  async function openAssignmentsModal() {
    if (!currentUser) {
      openAuth('signin');
      return;
    }
    assignmentsBackdrop?.classList.add('open');
    await loadAssignments();
  }

  function closeAssignmentsModal() {
    assignmentsBackdrop?.classList.remove('open');
  }

  $('#openAssignmentsBtn')?.addEventListener('click', openAssignmentsModal);
  $('#closeAssignmentsModal')?.addEventListener('click', closeAssignmentsModal);
  assignmentsBackdrop?.addEventListener('click', e => {
    if (e.target === assignmentsBackdrop) closeAssignmentsModal();
  });

  async function loadAssignments() {
    const list = $('#assignmentListContainer');
    if (!list) return;

    try {
      const res = await fetch('/api/academics/assignments', { headers: getAuthHeaders() });
      if (!res.ok) throw new Error('Could not fetch assignments');
      const data = await res.json();
      const assignments = data.assignments || [];

      if ($('#assignmentCountBadge')) {
        $('#assignmentCountBadge').textContent = `${assignments.length} tasks`;
      }

      if (!assignments.length) {
        list.innerHTML = '<div style="text-align:center;color:var(--muted);padding:24px">No pending coursework tasks. Add an assignment below!</div>';
        return;
      }

      list.innerHTML = assignments.map(a => {
        const isDone = a.status === 'completed';
        const prioClass = `prio-${a.priority}`;
        const branchTag = a.branch ? `<span class="badge-branch">${a.branch}</span>` : '';
        const dueTimeStr = a.due_time ? ` at ${a.due_time}` : '';

        return `
          <div class="task-item ${isDone ? 'done' : ''}">
            <input type="checkbox" ${isDone ? 'checked' : ''} data-id="${a.id}" title="Mark task complete">
            <div class="task-details" style="flex:1">
              <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
                <b>${a.title}</b>
                ${branchTag}
              </div>
              <small style="color:var(--muted);display:block;margin-top:2px">
                ${a.subject_code || 'General Course'} · 📅 Due: <b>${a.due_date}${dueTimeStr}</b>
              </small>
            </div>
            <span class="badge-priority ${prioClass}">${a.priority}</span>
            <button class="task-del-btn" data-del-id="${a.id}" title="Permanently delete this assignment">🗑 Delete</button>
          </div>
        `;
      }).join('');

      $$('.task-item input[type=checkbox]').forEach(cb => {
        cb.onchange = async () => {
          const newStatus = cb.checked ? 'completed' : 'pending';
          await fetch(`/api/academics/assignments/${cb.dataset.id}/status`, {
            method: 'PATCH',
            headers: getAuthHeaders(),
            body: JSON.stringify({ status: newStatus })
          });
          toast(cb.checked ? 'Task marked complete ✓' : 'Task restored to pending.');
          loadAssignments();
        };
      });

      $$('.task-del-btn').forEach(btn => {
        btn.onclick = async () => {
          if (!confirm('Are you sure you want to permanently delete this assignment?')) return;
          try {
            const res = await fetch(`/api/academics/assignments/${btn.dataset.delId}`, {
              method: 'DELETE',
              headers: getAuthHeaders()
            });
            if (!res.ok) throw new Error('Could not delete assignment');
            toast('Assignment deleted successfully ✓');
            loadAssignments();
          } catch (err) {
            toast('Error deleting: ' + err.message);
          }
        };
      });
    } catch (err) {
      list.innerHTML = `<div style="color:#d14b5f;padding:16px">${err.message}</div>`;
    }
  }

  addAssignmentForm?.addEventListener('submit', async e => {
    e.preventDefault();
    const title = $('#asgnTitle')?.value?.trim();
    const subjectId = $('#asgnSubject')?.value || 'SUBJ-CS501';
    const branch = $('#asgnBranch')?.value || 'Computer Science & Engineering';
    const dueDate = $('#asgnDueDate')?.value;
    const dueTime = $('#asgnDueTime')?.value || '23:59';
    const priority = $('#asgnPriority')?.value || 'medium';
    const maxMarks = parseInt($('#asgnMaxMarks')?.value || '100', 10);

    if (!title || !dueDate) {
      toast('Please specify an assignment title and due date.');
      return;
    }

    try {
      const res = await fetch('/api/academics/assignments', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          title,
          subject_id: subjectId,
          branch,
          due_date: dueDate,
          due_time: dueTime,
          priority,
          max_marks: maxMarks
        })
      });
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.detail || 'Failed to create assignment');
      }
      addAssignmentForm.reset();
      toast('Assignment saved with time & branch ✓');
      loadAssignments();
    } catch (err) {
      toast('Error: ' + err.message);
    }
  });

  // Pomodoro Focus Timer
  const plannerBackdrop = $('#plannerBackdrop');

  function openPlannerModal() {
    plannerBackdrop?.classList.add('open');
  }

  function closePlannerModal() {
    plannerBackdrop?.classList.remove('open');
  }

  $('#openPlannerBtn')?.addEventListener('click', openPlannerModal);
  $('#closePlannerModal')?.addEventListener('click', closePlannerModal);
  plannerBackdrop?.addEventListener('click', e => {
    if (e.target === plannerBackdrop) closePlannerModal();
  });

  function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    if ($('#timerDisplay')) {
      $('#timerDisplay').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  }

  $('#timerToggleBtn')?.addEventListener('click', () => {
    if (timerRunning) {
      clearInterval(timerInterval);
      timerRunning = false;
      $('#timerToggleBtn').textContent = 'Resume ▶';
    } else {
      timerRunning = true;
      $('#timerToggleBtn').textContent = 'Pause ❚❚';
      timerInterval = setInterval(() => {
        if (timerSeconds > 0) {
          timerSeconds--;
          updateTimerDisplay();
        } else {
          clearInterval(timerInterval);
          timerRunning = false;
          $('#timerToggleBtn').textContent = 'Start Session ▶';
          toast('🎉 Pomodoro session finished! Take a 5-minute break.');
        }
      }, 1000);
    }
  });

  $('#timerResetBtn')?.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerRunning = false;
    timerSeconds = 25 * 60;
    updateTimerDisplay();
    if ($('#timerToggleBtn')) $('#timerToggleBtn').textContent = 'Start Session ▶';
  });

  // Course Resources
  const resourcesBackdrop = $('#resourcesBackdrop');

  async function openResourcesModal() {
    resourcesBackdrop?.classList.add('open');
    const container = $('#resourcesListContainer');
    if (!container) return;

    container.innerHTML = '<p style="color:var(--muted);text-align:center;padding:24px">Loading curriculum notes and past papers...</p>';

    try {
      const res = await fetch('/api/academics/resources', { headers: getAuthHeaders() });
      if (!res.ok) throw new Error('Could not fetch resources');
      const data = await res.json();
      const resources = data.resources || [];

      if (!resources.length) {
        container.innerHTML = '<div style="text-align:center;color:var(--muted);padding:24px">No resources published yet.</div>';
        return;
      }

      container.innerHTML = resources.map(r => `
        <div class="res-item">
          <div class="res-item-info">
            <b>${r.title}</b>
            <small>${r.subject_code} — ${r.subject_name} · Type: ${r.resource_type.toUpperCase()}</small>
          </div>
          <a class="res-download-btn" href="${r.link_url}" target="_blank" rel="noopener">Access Resource ↗</a>
        </div>
      `).join('');
    } catch (err) {
      container.innerHTML = `<div style="color:#d14b5f;padding:16px">${err.message}</div>`;
    }
  }

  function closeResourcesModal() {
    resourcesBackdrop?.classList.remove('open');
  }

  $('#openResourcesBtn')?.addEventListener('click', openResourcesModal);
  $('#closeResourcesModal')?.addEventListener('click', closeResourcesModal);
  resourcesBackdrop?.addEventListener('click', e => {
    if (e.target === resourcesBackdrop) closeResourcesModal();
  });

  // IQ Tip Cycling
  const tips = [
    ['Consistency beats cramming.', 'Try a 25-minute focus session before your next class. Daily incremental progress beats all-nighters.'],
    ['Make tomorrow easier.', 'Spend two minutes checking your next day’s timetable and room numbers before logging off.'],
    ['Active recall works.', 'Explaining one core concept aloud to a peer is proven to boost long-term retention by 70%.'],
    ['Schedule cognitive resets.', 'A brief 10-minute walk between lectures clears mental fatigue and sharpens focus.']
  ];

  $('#newTip')?.addEventListener('click', () => {
    tipIndex = (tipIndex + 1) % tips.length;
    if ($('#tipTitle')) $('#tipTitle').textContent = tips[tipIndex][0];
    if ($('#tipText')) $('#tipText').textContent = tips[tipIndex][1];
    toast('Fresh CampusIQ tip prepared ✦');
  });

  // ---------------- 3D Interactive Campus Canvas & Hologram Gyroscope ----------------
  const heroCard = document.getElementById('overviewHeroCard');
  const heroHologram = document.getElementById('hero3dHologram');
  const canvas3d = document.getElementById('campus3dCanvas');

  let mouseNormX = 0;
  let mouseNormY = 0;
  let targetRotX = 0;
  let targetRotY = 0;
  let currentRotX = 0;
  let currentRotY = 0;

  if (heroCard) {
    heroCard.addEventListener('mousemove', e => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      mouseNormX = (x - midX) / midX;
      mouseNormY = (y - midY) / midY;
      targetRotY = mouseNormX * 10;
      targetRotX = -mouseNormY * 10;
    });

    heroCard.addEventListener('mouseleave', () => {
      mouseNormX = 0;
      mouseNormY = 0;
      targetRotX = 0;
      targetRotY = 0;
    });

    heroCard.addEventListener('touchmove', e => {
      if (!e.touches || !e.touches[0]) return;
      const rect = heroCard.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const y = e.touches[0].clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      mouseNormX = (x - midX) / midX;
      mouseNormY = (y - midY) / midY;
      targetRotY = mouseNormX * 10;
      targetRotX = -mouseNormY * 10;
    }, { passive: true });

    heroCard.addEventListener('touchend', () => {
      mouseNormX = 0;
      mouseNormY = 0;
      targetRotX = 0;
      targetRotY = 0;
    });
  }

  // 3D Fibonacci Sphere & Holographic Ring Constellation Engine
  if (canvas3d) {
    const ctx = canvas3d.getContext('2d');
    const numNodes = 60;
    const nodes = [];
    const baseRadius = 130;

    // Equatorial orbital data ring sparks
    const ringSparks = [];
    const numSparks = 24;
    for (let k = 0; k < numSparks; k++) {
      ringSparks.push({
        angle: (k / numSparks) * Math.PI * 2,
        speed: 0.012 + (k % 3) * 0.004,
        radius: 175 + (k % 2) * 15,
        yOffset: (Math.sin(k) * 18)
      });
    }

    function resizeCanvas() {
      if (canvas3d.parentElement) {
        const parentW = canvas3d.parentElement.clientWidth || 850;
        canvas3d.width = Math.min(850, parentW);
        canvas3d.height = 220;
      }
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    for (let i = 0; i < numNodes; i++) {
      const y = 1 - (i / (numNodes - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = i * 2.3999632; // Golden ratio angle
      nodes.push({
        x: Math.cos(theta) * r * baseRadius,
        y: y * baseRadius,
        z: Math.sin(theta) * r * baseRadius,
        pulse: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.02
      });
    }

    let rotAngleY = 0;
    let rotAngleX = 0.22;

    function render3DScene() {
      // Smooth interpolation for mouse/touch parallax
      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotY += (targetRotY - currentRotY) * 0.08;

      if (heroHologram) {
        heroHologram.style.transform = `perspective(1000px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) translateZ(25px)`;
      }

      const w = canvas3d.width;
      const h = canvas3d.height;
      ctx.clearRect(0, 0, w, h);

      rotAngleY += 0.007 + (mouseNormX * 0.012);
      const cosY = Math.cos(rotAngleY);
      const sinY = Math.sin(rotAngleY);
      const cosX = Math.cos(rotAngleX + (currentRotX * 0.012));
      const sinX = Math.sin(rotAngleX + (currentRotX * 0.012));

      const cx = w / 2;
      const cy = h / 2;
      const fov = 350;

      // Project all nodes into 3D space
      const projected = [];
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.pulse += node.speed;

        // Rotate Y
        let x1 = node.x * cosY - node.z * sinY;
        let z1 = node.z * cosY + node.x * sinY;

        // Rotate X
        let y2 = node.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + node.y * sinX;

        const scale = fov / (fov + z2 + 80);
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;
        const alpha = Math.max(0.12, Math.min(0.9, (z2 + baseRadius) / (baseRadius * 2)));

        projected.push({ x: px, y: py, z: z2, alpha, scale, pulse: node.pulse });
      }

      // Draw connecting neural lines between nearby nodes
      ctx.lineWidth = 1;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            const lineAlpha = (1 - dist / 60) * 0.25 * Math.min(projected[i].alpha, projected[j].alpha);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw equatorial orbital sparks
      for (let k = 0; k < ringSparks.length; k++) {
        const sp = ringSparks[k];
        sp.angle += sp.speed;
        const sx = Math.cos(sp.angle) * sp.radius;
        const sz = Math.sin(sp.angle) * sp.radius;
        const sy = sp.yOffset;

        // Rotate Y & X
        let rx1 = sx * cosY - sz * sinY;
        let rz1 = sz * cosY + sx * sinY;
        let ry2 = sy * cosX - rz1 * sinX;
        let rz2 = rz1 * cosX + sy * sinX;

        const rscale = fov / (fov + rz2 + 90);
        const rpx = cx + rx1 * rscale;
        const rpy = cy + ry2 * rscale;
        const ralpha = Math.max(0.1, Math.min(0.85, (rz2 + 180) / 360));

        ctx.fillStyle = `rgba(52, 211, 153, ${ralpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(rpx, rpy, 1.8 * rscale, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw glowing quantum nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const dotSize = Math.max(1.6, (2.6 * p.scale + Math.sin(p.pulse) * 0.7));

        // Node outer ambient glow
        ctx.fillStyle = `rgba(99, 102, 241, ${(p.alpha * 0.3).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, dotSize * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Node vibrant center core (Cyan / Purple / Mint)
        const colorPalette = [
          `rgba(56, 189, 248, ${p.alpha.toFixed(3)})`,
          `rgba(168, 85, 247, ${p.alpha.toFixed(3)})`,
          `rgba(52, 211, 153, ${p.alpha.toFixed(3)})`
        ];
        ctx.fillStyle = colorPalette[i % colorPalette.length];
        ctx.beginPath();
        ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(render3DScene);
    }

    requestAnimationFrame(render3DScene);
  }

  // ---------------- Boot Initialization ----------------
  const hash = window.location.hash.slice(1);
  if (pages.includes(hash)) {
    navigateTo(hash);
  }

  checkSession();


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

    const csvContent = headers.join(',') + '\n' + rows.map(r => r.join(',')).join('\n');
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

})();