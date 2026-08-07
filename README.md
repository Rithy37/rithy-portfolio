# Portfolio - Rithy Mech

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

## Interactive elements built for Playwright testing

| Element | Location | `data-test` attributes |
|---|---|---|
| Mobile nav toggle | `Nav.jsx` | `nav-toggle`, `nav-menu-mobile` |
| Project filter | `Projects.jsx` | `project-filter-all/automation/frontend`, `project-grid`, `project-card` |
| Contact form validation | `Contact.jsx` | `contact-name`, `contact-email`, `contact-message`, `contact-submit`, `contact-error-*`, `contact-success` |

## Stack

- React 18 + Vite
- Plain CSS (no framework) — design tokens as CSS custom properties in `src/index.css`
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels/code)
