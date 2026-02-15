# Personal Management — Middle School Website

This is a small static site with friendly lessons for middle-school students about personal management (time management, organization, goal-setting, study habits, and digital citizenship).

To view locally, open `index.html` in your browser or serve with a simple HTTP server.

PowerShell (requires Python):
```powershell
cd C:/Users/user/Desktop/Myweb
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Files created:
- `index.html` — main page
- `styles.css` — styles
- `script.js` — small JS for nav and smooth scrolling
- `images/` — SVG illustrations

Images and colors
- Place your background image as `images/background.jpg` (jpg/png/webp). The hero will use it automatically if present.
- Place lesson images with these names to match the lesson sections:
	- `images/time.jpg`
	- `images/organization.jpg`
	- `images/goals.jpg`
	- `images/study.jpg`
	- `images/digital.jpg`
- Color palette: Option A (calm blue) has been applied: `--accent: #4a90e2`, `--warm: #ffd27f`, `--soft: #e6f7f2`.

When you add your images, refresh the page (or re-open) to see them appear. If you want me to place the images for you, attach them here and I'll add them to `images/` and make any final layout tweaks.
