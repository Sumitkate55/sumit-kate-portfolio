# Sumit Kate — Personal Portfolio

A clean, dark-themed developer portfolio built with pure HTML, CSS, and JavaScript. No frameworks needed — just open and deploy.

## 🚀 Quick Start

1. **Clone / Download** this repo
2. Open `index.html` in your browser — it works immediately
3. Deploy to GitHub Pages (see below)

---

## 📁 Project Structure

```
sumit-portfolio/
├── index.html          ← Main page
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── data.js         ← ✏️  Edit this to add projects
│   └── main.js         ← Interactions & logic
├── assets/
│   └── resume.pdf      ← ✏️  Replace with your actual resume PDF
└── README.md
```

---

## ✏️ How to Update Content

### Add a New Project
Open `js/data.js` and add an object to the `projects` array:

```js
{
  icon: "🚀",
  title: "My New Project",
  subtitle: "Python, Django, PostgreSQL",
  description: "What the project does in 1-2 sentences.",
  tags: ["Python", "Django", "PostgreSQL"],
  github: "https://github.com/your-username/repo",
  live: "https://your-live-site.com",  // leave "" if none
}
```

### Update Resume
Replace `assets/resume.pdf` with your updated PDF — keep the same filename.

### Update Social Links
In `index.html`, search for `https://github.com/` and `https://linkedin.com/` and replace with your actual profile URLs.

### Enable Contact Form (Free)
1. Go to [formspree.io](https://formspree.io) → Create free account → New Form
2. Copy your form endpoint URL (looks like `https://formspree.io/f/xxxxxxxx`)
3. Open `js/main.js`, find `const FORMSPREE_URL = ''` and paste your URL there

---

## 🌐 Deploy to GitHub Pages (Free Hosting)

1. Create a new GitHub repo (e.g. `sumit-kate-portfolio`)
2. Push all files:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/sumit-kate-portfolio.git
   git push -u origin main
   ```
3. Go to repo **Settings → Pages → Source → main branch / root**
4. Your site is live at: `https://YOUR_USERNAME.github.io/sumit-kate-portfolio`

---

## 🎨 Customization

| What | Where |
|------|-------|
| Colors | `css/style.css` → `:root` variables |
| Name / bio text | `index.html` directly |
| Projects | `js/data.js` |
| Resume PDF | `assets/resume.pdf` |
| Social links | `index.html` — search `github.com` / `linkedin.com` |
| Contact form | `js/main.js` → `FORMSPREE_URL` |

---

Built by **Sumit Kate** · katesumit55@gmail.com
