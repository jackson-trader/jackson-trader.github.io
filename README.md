# jacksontrader.dev

Personal portfolio site for Jackson Trader. Plain HTML, CSS, and JavaScript, hosted on GitHub Pages.

## Files
| File | What it does |
|---|---|
| `index.html` | All the page content (text, jobs, projects, skills) |
| `style.css` | Colors, layout, hover effects, light/dark themes. Change `--accent` at the top to recolor the site |
| `script.js` | Light/dark toggle, hero name animation, back-to-top button |
| `theme-init.js` | Picks light or dark before the page draws, so it never flashes the wrong theme |
| `resume.pdf` | The file "Download Resume" serves (web copy, no phone number) |
| `favicon-32.png`, `apple-touch-icon.png` | Browser-tab and phone home-screen icons |
| `images/` | Project image and the link-preview image used when the site is shared |

## Updating
- **New resume:** replace `resume.pdf` (same name) and commit.
- **New job or project:** copy an existing `<article class="card">` block in `index.html` and edit it.
- **New skill icon:** find the class name at https://devicon.dev and copy a `<div class="skill">` line.
