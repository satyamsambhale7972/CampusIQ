# CampusIQ — Supabase Authentication Edition

This package connects the sign-up, sign-in, sign-out, and password-reset UI to Supabase Auth. It does **not** authenticate users until you configure a Supabase project. Other campus content remains sample/demo data unless a real database and services are added.

## 1. Create a Supabase project
1. Open https://supabase.com/ and sign in or create an account.
2. Choose **New project**. Create an organization if prompted.
3. Name it `CampusIQ`, choose a strong database password, choose a nearby region, and create the project. Keep the database password private.
4. Wait for project setup to finish.

## 2. Copy the browser-safe project settings
1. Open the project dashboard.
2. Find **Project URL** and the **publishable key** (or legacy `anon` key) in the project's API/Data API settings.
3. Open `supabase-config.js` in a code editor. Replace `YOUR_PROJECT_URL` and `YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY` with those values. Keep the quotes.
4. Never use or publish a `service_role` or secret key in this file. A browser key is public by design; database access must still be protected with Row Level Security policies.

## 3. Configure email authentication
1. In Supabase, open **Authentication → Sign In / Providers** (wording may vary) and ensure Email is enabled.
2. Keep email confirmation enabled for real users. Sign-up will ask them to verify their email before signing in.
3. Open **Authentication → URL Configuration**. Set Site URL to the deployed CampusIQ URL. Add the exact local test URL and deployed URL under Redirect URLs as needed.
4. The default email service has strict rate limits; configure custom SMTP before broad/public use.

## 4. Test locally
Do not open `index.html` as `file://`. Use a local static server so the app has a normal HTTP origin. If Python is installed, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000. Test account creation, confirmation email, login with the confirmed account, refresh (session should persist), forgot password, and sign out.

## 5. Deploy publicly
- For Vercel, import the Git repository containing these files and deploy as a static site (no build command; output directory `.` if required by the setup).
- Or enable GitHub Pages for the repository root.
- After the public URL is known, add it to Supabase **Authentication → URL Configuration** as the Site URL and an allowed Redirect URL. Save and redeploy if source changed.

## Important limits
- Supabase Auth powers real account creation, email/password login, session persistence, password reset, and sign-out after configuration.
- This static prototype does not yet have role-based access, a campus database, live notifications, real event registration, or real AI. Those need additional implementation and security policies.
- Do not put private student data in the sample UI. Do not publish API secret/service-role keys.
