# SpendWise — Interactive Financial Analytics Dashboard

## Project Description
SpendWise is a responsive, interactive personal budgeting and expense tracking web application. It allows users to set monthly budget targets, log expenses across multiple categories, and view real-time financial feedback through dynamic dashboard cards and status alerts.

## Technologies Used
* **HTML5:** Semantic structure for the sidebar, header, metric cards, and input forms.
* **CSS3:** Custom dark-mode styling utilizing `:root` color variables, CSS Grid, Flexbox, and responsive media queries.
* **JavaScript (ES6+):** Client-side logic handling arrays, loops, conditional statements, event listeners, and live DOM manipulation.
* **Git & GitHub:** Version control and public source code hosting.
* **Netlify:** Cloud hosting and continuous deployment.

## GitHub Repository Information
* **Repository Name:** `budget_tracker` (or your chosen repo name)
* **Visibility:** Public
* **Main Branch:** `main`

## Live Netlify Website URL
* **Live Link:** `https://netlify.app` *(Replace this with your actual Netlify link once deployed)*

## Deployment Process Summary
1. **File Organization:** Structured `index.html`, `style.css`, `script.js`, and `README.md` in the root directory using lowercase relative file paths.
2. **GitHub Integration:** Initialized a local Git repository using Git Bash, committed all project files, and pushed them to a public GitHub repository.
3. **Netlify Hosting:** Connected the GitHub repository to Netlify to deploy the site directly from the `main` branch.
4. **Custom Domain:** Updated the default Netlify subdomain to a custom project name under Site Configuration.
5. **Continuous Deployment:** Tested automatic updates by editing `README.md`, pushing to GitHub, and verifying the automatic rebuild on Netlify.

## Challenges Encountered & Resolutions
* **Challenge 1: Disconnected Form Inputs and Static Cards**
  * *Resolution:* Added unique `id` attributes to the dashboard card totals and built dedicated HTML input forms so JavaScript could capture user entries and update the DOM dynamically.
* **Challenge 2: Page Refreshing on Form Submission**
  * *Resolution:* Implemented `event.preventDefault()` inside the form submit event listeners so expense records remain stored in the JavaScript array without resetting the page.
* **Challenge 3: Unorganized Project Files**
  * *Resolution:* Cleaned up extra practice files and verified that `index.html` referenced `style.css` and `script.js` using exact lowercase relative paths so Netlify could load all assets properly.

## Lessons Learned
* Learned how to connect HTML forms, CSS Grid layouts, and JavaScript arrays into a complete, interactive single-page application.
* Understood the importance of clean root directory structures and exact file naming for live web hosting.
* Gained hands-on experience setting up continuous deployment pipelines between GitHub and Netlify.
