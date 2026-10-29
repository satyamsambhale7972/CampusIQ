# CampusIQ & CAMPUSAI — 24/7 Live Web & GitHub Deployment Guide

This guide provides simple, step-by-step instructions to upload your **CampusIQ College Student Portal** to GitHub and make it **live 24/7 on the internet and Google Search** completely free.

---

## METHOD 1: Host Live 24/7 on GitHub Pages (Recommended, 100% Free)

GitHub Pages provides free 24/7 edge hosting with SSL certificate (`https://`), 99.99% uptime, zero server costs, and automatic indexing by Google crawlers.

### Step 1: Create a New GitHub Repository
1. Log into your GitHub account at **[github.com](https://github.com/)**.
2. Click the **`+`** icon in the top-right corner and select **New repository** (or visit **[github.com/new](https://github.com/new)**).
3. Name your repository: `campusiq-college-portal` (or your college name, e.g. `university-student-portal`).
4. Set visibility to **Public**.
5. Leave other checkboxes unchecked and click **Create repository**.

### Step 2: Upload Project Files to GitHub
1. On the new repository page, click the link: **"uploading an existing file"**.
2. Unzip your `CampusIQ_College_Student_Portal.zip` file on your computer.
3. Select **all files** inside the unzipped folder:
   - `index.html` *(Must be in the root folder)*
   - `college-theme.css`
   - `portal-app.js`
   - `students-database.js`
   - `campusiq-logo.png`
   - `campusiq-logo.jpg`
   - `favicon.ico`, `favicon.png`, `favicon-64.png`, `favicon-192.png`
   - `.nojekyll`
   - `robots.txt`
   - `sitemap.xml`
   - `README.md`
4. Drag and drop all these files into the GitHub upload box in your browser.
5. In the commit message box at the bottom, type: `Initial release of CampusIQ University Portal`.
6. Click the green **Commit changes** button.

### Step 3: Enable 24/7 GitHub Pages Live Hosting
1. In your GitHub repository, click on the **Settings** tab (the gear icon at the top).
2. In the left-hand sidebar menu, scroll to the **Code and automation** section and click **Pages**.
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Click the dropdown, choose **`main`** (or `master`), and keep the folder as **`/(root)`**.
4. Click the **Save** button.
5. Wait **30 to 60 seconds**, then refresh the page.
6. A banner will appear at the top:
   > **"Your site is live at https://\<your-username\>.github.io/campusiq-college-portal/"**
7. Click the link — your college portal is now **permanently live 24/7 on the internet**!

---

## METHOD 2: 10-Second Instant Live Deploy via Netlify (Alternative)

If you want a live URL immediately without even opening GitHub:
1. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)**.
2. Drag and drop the unzipped `campusiq-college-portal` folder onto the browser window.
3. Within 10 seconds, Netlify generates a live, permanent 24/7 URL (e.g. `https://campusiq-portal.netlify.app`).
4. You can change the subdomain or connect a custom college domain (`portal.yourcollege.edu`) for free.

---

## How Google Indexes Your Website 24/7

Your project has already been configured with complete institutional SEO optimization:
- **`robots.txt`**: Instructs Googlebot and Bingbot to crawl and index all portal sections.
- **`sitemap.xml`**: Pre-configured XML sitemap for immediate search engine discovery.
- **`.nojekyll`**: Tells GitHub Pages to serve all files cleanly without skipping assets.
- **Meta Tags**: Optimized Open Graph, Twitter Cards, Schema.org `SoftwareApplication` JSON-LD data, and HD branding images.

To index your live website on Google even faster:
1. Go to **[Google Search Console](https://search.google.com/search-console)**.
2. Enter your live website URL (e.g. `https://<your-username>.github.io/campusiq-college-portal/`).
3. Click **URL Inspection** and then **Request Indexing**.
4. Google will crawl your college portal and display it in Google search results worldwide!

---

## Demo Login Credentials for Evaluation

When testing or demonstrating the portal live:
- **Satyam Sambhale** (Dean's Honor Roll): Roll `252921201` | Password `student123`
- **Aarav Sharma** (Attendance Shortage Warning): Roll `252921202` | Password `student123`
- **Priya Sharma** (Gold Medalist, 100% Cleared): Roll `252921203` | Password `student123`
- **Rohan Deshmukh** (Hostel & Core Placement): Roll `252921204` | Password `student123`
