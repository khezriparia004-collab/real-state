# HVP Plumbing — Base44 Dev Environment

## Stack
- **Frontend:** React 18 + Vite 5 (dev server with hot reload)
- **Styling:** Tailwind CSS 3
- **Routing:** React Router DOM 6
- **Icons:** lucide-react
- **Fonts:** Space Grotesk (display) + Inter (body) via Google Fonts

## Running the app
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The app serves on port 3000. Vite dev server runs with `--host 0.0.0.0` for sandbox access.

## Design System — "Hydro-Structuralism"
- **Palette:** Navy `#0A192F`, Electric Blue `#007BFF`, Signal Red `#E63946` (emergency only), Arctic White `#F8FAFC`, Steel Gray `#E2E8F0`
- **Typography:** Space Grotesk for headlines, Inter for body (18px / 1.6 line-height)
- **Glassmorphism:** Controlled — `.glass` and `.glass-dark` utility classes
- **Conduit lines:** Subtle 1px grid backgrounds on dark sections
- **Pulse animation:** `.animate-pulse-slow` on emergency CTAs

## Project Structure
```
src/
  main.jsx          — React entry
  App.jsx           — Router + layout
  index.css         — Tailwind + design system utilities
  data/             — Static data (services, reviews, faq, site info)
  components/       — Shared components (Navbar, Footer, CTA, etc.)
  pages/            — Route pages (Home, Services, ServiceDetail, About, Emergency, Reviews, Contact, FAQ)
```

## Key Info
- **Phone:** +1 (435) 691-8164
- **Address:** 378 S Cedar Crk Dr, Cedar City, UT 84720, United States
- **No backend/database** — frontend-only project
- **No secrets required** — all data is static in `src/data/`

## Verification
- `docker compose ps` — confirm web service is healthy
- `curl http://localhost:3000/` — should return HTML with the app
- Navigate to `/services`, `/about`, `/emergency`, `/reviews`, `/contact`, `/faq` to verify routes
