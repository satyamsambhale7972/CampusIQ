(()=>{const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];const pages=['overview','academics','attendance','events','facilities','insights'],names={overview:'Overview',academics:'Academics',attendance:'Attendance',events:'Campus events',facilities:'Facilities',insights:'AI insights'};let toastTimer,tip=0;function toast(msg){$('#toastText').textContent=msg;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2600)}function go(page){if(!pages.includes(page))return;$$('.page').forEach(p=>p.classList.toggle('active',p.id==='page-'+page));$$('.nav').forEach(b=>b.classList.toggle('active',b.dataset.page===page));$('#crumb').textContent=names[page];$('#sidebar').classList.remove('open');history.replaceState(null,'','#'+page);window.scrollTo({top:0,behavior:'auto'})}document.addEventListener('click',e=>{const n=e.target.closest('[data-page]'),g=e.target.closest('[data-go]');if(n){e.preventDefault();go(n.dataset.page)}if(g){e.preventDefault();go(g.dataset.go)}});$('#hamb').onclick=()=>$('#sidebar').classList.toggle('open');document.addEventListener('click',e=>{if(innerWidth<=850&&$('#sidebar').classList.contains('open')&&!$('#sidebar').contains(e.target)&&!e.target.closest('#hamb'))$('#sidebar').classList.remove('open')});$('#today').textContent=new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'});const hash=location.hash.slice(1);if(pages.includes(hash))go(hash);$('#theme').onclick=()=>{document.body.classList.toggle('dark');$('#theme').textContent=document.body.classList.contains('dark')?'☀':'◐';toast(document.body.classList.contains('dark')?'Dark appearance enabled':'Light appearance enabled')};function modal(title,text){$('#modalTitle').textContent=title;$('#modalText').textContent=text;$('#backdrop').classList.add('open')}function close(){ $('#backdrop').classList.remove('open') }$('#closeModal').onclick=close;$('#okay').onclick=close;$('#backdrop').onclick=e=>{if(e.target===$('#backdrop'))close()};document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});$('#helpBtn').onclick=()=>modal('Welcome to CampusIQ','Use the left navigation to explore Academics, Attendance, Campus events, Facilities, and AI insights. Each section changes dynamically without reloading the website.');$('#notify').onclick=()=>modal('You’re all caught up','This prototype has no connected notification service. A real CampusIQ deployment could show timetable changes, event reminders, and campus announcements.');$('#profile').onclick=()=>modal('Student Space','This is a sample profile. Authentication and personal account data are not connected in this front-end prototype.');$('#newTip').onclick=()=>{const tips=[['Small steps. Big progress.','Try a 25-minute focus session before your next class. Consistency beats cramming.'],['Make tomorrow easier.','Spend two minutes checking your next day’s timetable before logging off.'],['Learn out loud.','Explaining one concept to a friend can reveal what you understand best.'],['Give your brain a reset.','A short walk can help you return to a task with fresh focus.']];tip=(tip+1)%tips.length;$('#tipTitle').textContent=tips[tip][0];$('#tipText').textContent=tips[tip][1];toast('A fresh CampusIQ tip is ready')};$('#classSearch').addEventListener('input',e=>{let q=e.target.value.toLowerCase().trim(),count=0;$$('.subject').forEach(c=>{let ok=c.dataset.search.includes(q);c.hidden=!ok;if(ok)count++});$('#subjectCount').textContent=count+' subject'+(count===1?'':'s');let empty=$('.subject-empty');if(!count&&!empty){empty=document.createElement('div');empty.className='empty subject-empty';empty.textContent='No subjects found. Try another search.';$('#subjects').append(empty)}else if(count&&empty)empty.remove()});$$('[data-att]').forEach(b=>b.onclick=()=>{$$('[data-att]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');let n=0;$$('#attendanceRows tr').forEach(r=>{let ok=b.dataset.att==='all'||+r.dataset.rate<75;r.hidden=!ok;if(ok)n++});$('#attendanceCount').textContent='Showing '+n+' sample subject'+(n===1?'':'s')});$$('[data-event]').forEach(b=>b.onclick=()=>{$$('[data-event]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');$$('#eventGrid .event-card').forEach(c=>c.hidden=b.dataset.event!=='all'&&c.dataset.kind!==b.dataset.event)});$('#register').onclick=()=>modal('Interest noted (demo)','Thanks for your interest in Innovation Day 2026. This is only a front-end demo; no registration or personal information was submitted.');$$('[data-interest]').forEach(b=>b.onclick=()=>modal('You’re interested! (demo)','Your interest in “'+b.dataset.interest+'” is shown for demonstration only. No registration has been submitted.'));$('#facilitySearch').addEventListener('input',filterFacilities);$$('[data-facility]').forEach(b=>b.onclick=()=>{$$('[data-facility]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');filterFacilities()});function filterFacilities(){let q=$('#facilitySearch').value.toLowerCase().trim(),type=$('.facility-filter.selected')?.dataset.facility||'all',n=0;$$('#facilityGrid .facility-card').forEach(c=>{let ok=(!q||c.dataset.search.includes(q))&&(type==='all'||c.dataset.kind===type);c.hidden=!ok;if(ok)n++});let empty=$('.facility-empty');if(!n&&!empty){empty=document.createElement('div');empty.className='empty facility-empty';empty.textContent='No spaces found. Try a different search or filter.';$('#facilityGrid').append(empty)}else if(n&&empty)empty.remove()}$$('[data-space]').forEach(b=>b.onclick=()=>{let c=b.closest('.facility-card');modal(b.dataset.space,$('.facility-body>div>label',c).textContent+'. Sample availability: '+$('.capacity b',c).textContent+'. This is illustrative data and is not connected to live sensors or room booking.')});$('#generate').onclick=()=>{let b=$('#generate');b.disabled=true;b.textContent='Generating sample insight…';const data=[['TIME MANAGEMENT','Protect your focus window.','Try a 25-minute review of DSA before your afternoon workshop.'],['CAMPUS SPACES','Find a calmer corner.','The demo shows study seats at Central Library. A quieter space may help you focus.'],['CAMPUS LIFE','Make room for curiosity.','Innovation Day is coming up in the sample calendar. Consider sharing a project.']];setTimeout(()=>{let d=data[Math.floor(Math.random()*data.length)],c=document.createElement('article');c.className='insight-card lavender';let label=document.createElement('label');label.textContent='✦  '+d[0];let h=document.createElement('h3');h.textContent=d[1];let p=document.createElement('p');p.textContent=d[2];let f=document.createElement('small');f.textContent='JUST GENERATED · DEMO';f.style.color='#8c7af0';c.append(label,h,p,f);$('#insightGrid').prepend(c);b.disabled=false;b.textContent='Generate another brief ✦';toast('New sample insight added')},650)};$$('[data-toast]').forEach(b=>b.onclick=()=>toast(b.dataset.toast));
// Supabase authentication integration. Configure supabase-config.js before use.
let authMode='signin', currentUser=null, supabaseClient=null;
const authBackdrop=$('#authBackdrop'), authForm=$('#signInForm');
const authEmail=$('#authEmail'), authPassword=$('#authPassword');
const cfg=window.CAMPUSIQ_SUPABASE_CONFIG||{};
const configured=Boolean(cfg.url && cfg.anonKey && !String(cfg.url).includes('YOUR_PROJECT') && !String(cfg.anonKey).includes('YOUR_SUPABASE'));
if(configured && window.supabase?.createClient){
  try { supabaseClient=window.supabase.createClient(cfg.url,cfg.anonKey); }
  catch(err){ console.error('CampusIQ auth client could not initialize',err); }
}
function authReady(){return Boolean(supabaseClient)}
function updateAuthUI(){
  const signedIn=Boolean(currentUser);
  $('#signInBtn').textContent=signedIn?'Sign out':'Sign in';
  $('#signInBtn').setAttribute('aria-label',signedIn?'Sign out of CampusIQ':'Sign in to CampusIQ');
  $('#profile').textContent=signedIn?(currentUser.email?.slice(0,1).toUpperCase()||'S'):'SS';
  $('#profile').title=signedIn?'Open account details':'Sign in to CampusIQ';
  const name=$('.user b'); if(name)name.textContent=signedIn?(currentUser.user_metadata?.full_name||currentUser.email?.split('@')[0]||'Student'):'Student Space';
  const small=$('.user small'); if(small)small.textContent=signedIn?'Authenticated account':(authReady()?'Sign in to access your account':'Authentication setup required');
  $('#demoLogin').hidden=true;
}
function openAuth(mode='signin'){
  authMode=mode;
  $('#authTitle').textContent=mode==='signup'?'Create your account':mode==='reset'?'Reset your password':'Welcome back';
  $('#authSubtitle').textContent=mode==='signup'?'Create a CampusIQ account using your email address.':mode==='reset'?'We will email you a secure password-reset link.':'Sign in with your registered email and password.';
  $('#authPassword').closest('.password-field').hidden=mode==='reset';
  $('#rememberMe').closest('label').hidden=mode!=='signin';
  $('#authSubmit').textContent=mode==='signup'?'Create account':mode==='reset'?'Send reset link':'Sign in securely';
  $('#authFoot').innerHTML=mode==='signup'?'Already registered? <button type="button" id="createAccount">Sign in</button>':mode==='reset'?'Remembered your password? <button type="button" id="createAccount">Back to sign in</button>':'New to CampusIQ? <button type="button" id="createAccount">Create account</button>';
  $('#authError').textContent=authReady()?'':'Authentication is not configured yet. Create a Supabase project, then add its Project URL and publishable/anon key to supabase-config.js.';
  $('#authError').classList.toggle('setup-warning',!authReady());
  authBackdrop.classList.add('open');authBackdrop.setAttribute('aria-hidden','false');document.body.classList.add('auth-open');
  $('#createAccount').onclick=()=>openAuth(authMode==='signup'?'signin':'signin');
  if(mode==='signup') $('#createAccount').onclick=()=>openAuth('signin');
  setTimeout(()=>authEmail.focus(),60);
}
function closeAuth(){authBackdrop.classList.remove('open');authBackdrop.setAttribute('aria-hidden','true');document.body.classList.remove('auth-open');$('#authPassword').closest('.password-field').hidden=false;$('#rememberMe').closest('label').hidden=false}
function authError(message){$('#authError').textContent=message;$('#authError').classList.remove('setup-warning')}
function setBusy(busy){const b=$('#authSubmit');b.disabled=busy;b.textContent=busy?'Please wait…':authMode==='signup'?'Create account':authMode==='reset'?'Send reset link':'Sign in securely'}
$('#signInBtn').onclick=async()=>{
  if(!currentUser){openAuth('signin');return}
  if(!authReady()){toast('Authentication is not configured.');return}
  const {error}=await supabaseClient.auth.signOut();
  if(error){toast('Sign out failed. Please try again.');console.error(error);return}
  currentUser=null;updateAuthUI();toast('You have signed out securely.');
};
$('#authClose').onclick=closeAuth;
authBackdrop.addEventListener('click',e=>{if(e.target===authBackdrop)closeAuth()});
$('#togglePassword').onclick=()=>{const show=authPassword.type==='password';authPassword.type=show?'text':'password';$('#togglePassword').textContent=show?'Hide':'Show';$('#togglePassword').setAttribute('aria-pressed',String(show))};
$('#forgotPassword').onclick=()=>openAuth('reset');
$('#signInForm').addEventListener('submit',async e=>{
  e.preventDefault();
  if(!authForm.reportValidity())return;
  if(!authReady()){authError('Real login is not ready yet. Follow README.md to create Supabase and configure supabase-config.js. No demo sign-in is being simulated.');return}
  const email=authEmail.value.trim(),password=authPassword.value;
  if(authMode!=='reset' && password.length<8){authError('Use a password with at least 8 characters.');return}
  setBusy(true);authError('');
  try{
    let result;
    if(authMode==='signup'){
      result=await supabaseClient.auth.signUp({email,password,options:{emailRedirectTo:window.location.origin+window.location.pathname}});
      if(!result.error && !result.data.session){authError('Account created. Check your email for the confirmation link before signing in.');setBusy(false);return}
    } else if(authMode==='reset'){
      result=await supabaseClient.auth.resetPasswordForEmail(email,{redirectTo:window.location.origin+window.location.pathname});
      if(!result.error){authError('If an account exists for that email, a password-reset link will be sent. Check your inbox.');setBusy(false);return}
    } else result=await supabaseClient.auth.signInWithPassword({email,password});
    if(result.error)throw result.error;
    currentUser=result.data?.user||result.data?.session?.user||null;
    updateAuthUI();closeAuth();authForm.reset();authPassword.type='password';$('#togglePassword').textContent='Show';
    toast(authMode==='signup'?'Account created successfully.': 'Signed in successfully.');
  }catch(err){authError(err.message||'Authentication failed. Please check your details and try again.')}finally{setBusy(false)}
});
$('#profile').onclick=()=>{if(currentUser)modal('Your CampusIQ account',`Signed in as ${currentUser.email||'CampusIQ user'}. Use Sign out to end your session.`);else openAuth('signin')};
if(authReady()){
  supabaseClient.auth.getSession().then(({data,error})=>{if(error)console.error(error);currentUser=data?.session?.user||null;updateAuthUI()});
  supabaseClient.auth.onAuthStateChange((_event,session)=>{currentUser=session?.user||null;updateAuthUI()});
}
updateAuthUI();
})();