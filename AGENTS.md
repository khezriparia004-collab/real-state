# AGENTS.md — Horizon Properties (Base Code)

## Stack
- Vite 6 + React 18 + react-router-dom 6, plain CSS (no Tailwind). Single SPA, no backend.
- Entry: `index.html` → `src/main.jsx`. Routes in `src/App.jsx`.

## Running / verifying
- `docker compose -f docker-compose.base44.yml up -d --build` (single `web` service, node:22-alpine,
  `npm install` at container start, vite dev on 5173 mapped to host 3000, polling watcher for bind mounts).
- Verify: `curl -sf http://localhost:3000/ | grep -o '<div id="root">'` then preview tools.
- No DB, no migrations, no external-service secrets (`.base44/environment.json` has empty secrets list).

## Conventions
- Design tokens in `src/styles/base.css` (`:root` — navy/champagne/ivory palette, radius, shadows).
  Never hardcode colors; use the variables.
- CSS split: `base.css` (tokens/buttons/forms), `header.css`, `components.css` (cards, carousel,
  CTA, footer, forms), `home.css` (hero/about/services/why/team), `pages.css` (browser, detail,
  lightbox, subpages).
- Property data: `src/data/properties.js` — the shape there is the UI contract; keep it backend-swappable.
- Site copy/team/services: `src/data/site.js`.
- Images are Unsplash CDN URLs (no local assets). Verify any new ID with `curl -o /dev/null -s -w "%{http_code}"`.
- Favorites persist in `localStorage` via `src/hooks/useFavorites.js`.
- `Reveal` component = scroll-in fade-up; keep animations subtle (philosophy: luxury architecture, not startup landing).
