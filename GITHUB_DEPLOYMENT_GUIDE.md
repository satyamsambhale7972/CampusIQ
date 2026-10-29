# CampusIQ & CAMPUSAI — 24/7 Live Web & GitHub Deployment Guide

This guide provides simple, step-by-step instructions to upload your **CampusIQ College Student Portal** to GitHub and make it **live 24/7 on the internet and Google Search** completely free.

---

## METHOD 1: Host Live 24/7 on GitHub Pages (Recommended, 100% Free)

GitHub Pages provides free 24/7 edge hosting with SSL certificate (`https://`), 99.99% uptime, zero server costs, and automatic indexing by Google crawlers.

### Step 1: Create a New GitHub Repository
1. Log into your GitHub account at **[github.com](https://github.com/)**.
2. Click the **`+`** icon in the top-right corner and select **New repository** (or visit **[github.com/new](https://github.com/new)**).
3. Name your repository: `campusiq-college-portal` (or any preferred name).
4. Set visibility to **Public**.
5. Leave other checkboxes unchecked and click **Create repository**.

### Step 2: Upload Project Files to GitHub
1. On the new repository page, click the link: **"uploading an existing file"**.
2. Unzip your `CampusIQ_College_Student_Portal.zip` file on your computer.
3. Drag and drop all the extracted files into the GitHub upload area:
   - `index.html` (Student Portal)
   - `admin.html` (Admin ERP Portal)
   - `admin-app.js` (Admin Controller with 104 methods)
   - `portal-app.js` (Student Controller)
   - `students-database.js` (1,000 Verified Student Records)
   - `college-theme.css` (Dual-Theme Stylesheet)
   - `supabase-service.js` (Supabase Cloud Layer)
   - `campusiq-logo.png`, `campusiq-logo-transparent.png`, `campusiq-college-crest.svg`
   - `favicon.png`, `favicon.ico`, `favicon-64.png`, `favicon-192.png`
   - `.nojekyll` (Ensures GitHub Pages serves all assets)
   - `.gitignore` (Excludes temporary and cache files)
   - `robots.txt` & `sitemap.xml` (SEO indexing)
   - `server.py` (Local Python server)
   - `campusiq_college_schema.sql` & SQL seeds
   - `README.md`
4. In the commit message box, type: `Initial release of CampusIQ College Portal`.
5. Click **Commit changes**.

### Step 3: Enable 24/7 GitHub Pages Live Hosting
1. In your GitHub repository, click on the **Settings** tab (the gear icon at the top).
2. In the left-hand sidebar menu, scroll to the **Code and automation** section and click **Pages**.
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Click the dropdown, choose **`main`** (or `master`), and keep the folder as **`/(root)`**.
4. Click the **Save** button.
5. Wait **30 to 60 seconds**, then refresh the page.
6. A banner will appear at the top:
   > **"Your site is live at https://<your-username>.github.io/campusiq-college-portal/"**
7. Click the link — both the Student Portal and Admin ERP are now **permanently live 24/7 on the internet**!
   - Student Portal: `https://<your-username>.github.io/campusiq-college-portal/index.html`
   - Admin ERP: `https://<your-username>.github.io/campusiq-college-portal/admin.html`

---

## METHOD 2: Instant 10-Second Live Deploy via Netlify (Alternative)

If you want a live URL immediately without even configuring GitHub Pages:
1. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)**.
2. Drag and drop the unzipped `campusiq-college-portal` folder directly onto the browser window.
3. Within 10 seconds, Netlify generates a live, permanent 24/7 URL (e.g. `https://campusiq-portal.netlify.app`).
4. You can also connect a custom college domain (`portal.yourcollege.edu`) for free.

---

## 🔑 Authentication Credentials for Live Evaluation

### 1. Admin Portal (`admin.html`):
- **Login Name**: `campusiq`
- **Password**: `2026`
- **Authorized Role**: Dr. Rajeshwar Sen (Dean of Academic Affairs)

### 2. Student Portal (`index.html`):
- **Universal Student Password**: `2026` (works for all 1,000 enrolled students)
- **Satyam Sambhale** (Dean's Honor Roll): Roll `252921201` | Password `2026`
- **Aarav Sharma** (Attendance Shortage Warning): Roll `252921202` | Password `2026`
- **Priya Sharma** (Gold Medalist, 100% Cleared): Roll `252921203` | Password `2026`
- **Rohan Deshmukh** (Hostel & Core Placement): Roll `252921204` | Password `2026`
