# CampusIQ — Professional Smart Campus Prototype

A responsive static website prototype with Overview, Academics, Attendance, Campus Events, Facilities, and AI Insights sections.

## Run locally

1. Extract this ZIP into a folder.
2. Open `index.html` in a modern browser, or serve this folder with a static web server.
3. Keep `index.html`, `style.css`, `script.js`, and `campusiq-logo.svg` together in the same folder.

## Demo sign-in

- The Sign in button opens the demo sign-in panel.
- Submit an email and password (minimum four characters) or choose **Continue with demo account**.
- This creates only a temporary client-side demo session. It does not authenticate a real user, store a password, or create an account on a server.
- Sign out ends the demo session. Remember Me stores only the demo email in local browser storage.
- Password recovery is not connected. Real authentication requires a secure authentication provider/backend.

## Public deployment

This is a static HTML/CSS/JavaScript website; it does not require a build step.

### GitHub Pages
1. Upload the five files to the root of your repository.
2. In GitHub, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and `/(root)`, then save.
4. Wait for the deployment status and open the URL shown in Pages settings.

### Vercel
1. Import the GitHub repository in Vercel.
2. For a static site, leave the framework preset as Other if prompted, with no build command and the project root as the output directory.
3. Deploy and open the URL Vercel provides.

## Prototype data

Dashboard figures, events, availability, and insights are sample content for demonstration. No live campus database, booking service, notification provider, or AI service is connected.
