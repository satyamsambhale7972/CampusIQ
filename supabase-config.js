// ====================================================================
// CampusIQ Supabase Auth & Delivery Configuration
// ====================================================================
// For real-time sub-30s email and SMS delivery, configure:
// 1. Project URL and Publishable Anon Key below (safe for client browsers).
// 2. Custom SMTP in Supabase Dashboard (Authentication -> Email -> SMTP Settings):
//    - Host: smtp.gmail.com | Port: 587 | User: your-gmail@gmail.com | Pass: 16-char Google App Password
// 3. Redirect URLs in Supabase Dashboard (Authentication -> URL Configuration):
//    - Site URL: https://satyamsambhale7972.github.io/CampusIQ-/
//    - Additional URLs: http://localhost:8000/**, http://127.0.0.1:8000/**
// 4. SMS Provider in Supabase Dashboard (Authentication -> Providers -> Phone):
//    - Select Twilio or MessageBird with your Account SID & Auth Token.
// ====================================================================

window.CAMPUSIQ_SUPABASE_CONFIG = {
  url: "YOUR_PROJECT_URL",
  anonKey: "YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY",
  redirectUrl: "https://satyamsambhale7972.github.io/CampusIQ-/",
  deliveryTarget: "<30s",
  cooldownSeconds: 60
};
