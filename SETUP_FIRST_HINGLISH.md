# CampusIQ — Real Supabase Login Setup (Hinglish)

## Important: one required step is still missing
This ZIP contains the real Supabase Auth integration, but real login cannot work until you add your own Supabase **Project URL** and **Publishable key**. They are project-specific, so this ZIP cannot guess them.

## 1. Add the two public settings
1. Extract this ZIP.
2. Open `supabase-config.js` using Notepad or VS Code.
3. In Supabase Dashboard, open your CampusIQ project → **Project Settings → Data API** (or API settings).
4. Copy the **Project URL** and **Publishable key**. A legacy `anon` key also works.
5. Replace the two placeholder strings in `supabase-config.js`, keeping the quotation marks:

```js
window.CAMPUSIQ_SUPABASE_CONFIG = {
  url: "PASTE_YOUR_PROJECT_URL_HERE",
  anonKey: "PASTE_YOUR_PUBLISHABLE_OR_LEGACY_ANON_KEY_HERE"
};
```

Do not use the `service_role` key or any Secret key in browser files. Do not post keys in screenshots or public messages.

## 2. Turn on email auth
In Supabase Dashboard → **Authentication → Sign In / Providers**, make sure Email is enabled. Keep email confirmation enabled for public users.

## 3. Configure allowed URLs
In Supabase → **Authentication → URL Configuration**:
- For local testing, add `http://localhost:8000` to Redirect URLs.
- After deploying, set Site URL to your actual deployed CampusIQ website URL and add that exact URL to Redirect URLs.

## 4. Test locally
Do not double-click `index.html` (file://). Open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`. Test account creation, email confirmation, sign-in, page refresh/session persistence, password reset, and sign-out.

## 5. Deploy
Upload the extracted files to the root of your GitHub Pages repository, or import the folder into a static host. Then update Supabase URL Configuration with the deployed URL.

## What is real vs sample
Real Supabase email/password sign-up, sign-in, sign-out, session restore, and password reset are implemented after configuration. The dashboard's campus data, attendance, events, AI insights, and other campus workflows are sample UI and are not backed by a live database yet. Do not use this prototype to store private student data until a database and Row Level Security policies are implemented.
