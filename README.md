# Portfolio — Rithy

A portfolio site built to double as a real target for the
[Playwright E2E suite](https://github.com/Rithy37/playWrightProject) —
every interactive element ships with a `data-test` attribute so the test
suite has real, meaningful things to test.

## Setup

```bash
npm install
npm run dev       # starts local dev server, usually http://localhost:5173
```

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Deploying

Any static host works — the simplest options:

- **Vercel**: `npx vercel` from this folder, follow the prompts
- **Netlify**: drag the `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or connect the GitHub repo
- **GitHub Pages**: build, then push `dist/` to a `gh-pages` branch (or use the `gh-pages` npm package)

## What to customize before publishing

- [ ] Replace the two `[Replace]` project cards in `src/components/Projects.jsx` with real projects
- [ ] Update the GitHub link in `src/components/Footer.jsx` if needed
- [ ] Wire the contact form up to a real backend/service (e.g. Formspree, EmailJS) — it currently only validates and shows a success state locally, it doesn't send anywhere
- [ ] Swap placeholder copy in `About.jsx` if your experience numbers change

## Interactive elements built for Playwright testing

| Element | Location | `data-test` attributes |
|---|---|---|
| Mobile nav toggle | `Nav.jsx` | `nav-toggle`, `nav-menu-mobile` |
| Project filter | `Projects.jsx` | `project-filter-all/automation/frontend`, `project-grid`, `project-card` |
| Contact form validation | `Contact.jsx` | `contact-name`, `contact-email`, `contact-message`, `contact-submit`, `contact-error-*`, `contact-success` |

These are good first targets once you're ready to extend the Playwright
suite to cover this site.

## Stack

- React 18 + Vite
- Plain CSS (no framework) — design tokens as CSS custom properties in `src/index.css`
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels/code)
