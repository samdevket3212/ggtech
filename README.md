# GG Technology Media website

Next.js (App Router) + React + TypeScript site for GG Technology Media, built from the website master brief and the GG Technology Media design system.

## Run it

```bash
npm install
cp .env.example .env.local   # fill in when ready
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Requires Node 20+. Deploys to Vercel (or any Node host) with no extra config.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build (all pages statically generated except `/contact` and the API) |
| `npm run typecheck` | TypeScript check |
| `npm run build:preview` | Builds the whole site as one self-contained HTML file in `dist/preview/` from the same components (used for the shareable preview link) |

## Structure

```
src/
  app/                 Routes, metadata, sitemap.ts, robots.ts, api/contact/route.ts
  components/
    layout/            Header (sticky, blur on scroll, full-screen mobile menu), Footer, SiteShell
    pages/             One component per page; routes stay thin
    shared/            Button, Logo, SectionHeading, ProjectCard, ServiceCard, FAQAccordion, ContactForm, WorkGrid, Effects (scroll reveal + portfolio cursor)
    visuals/           HeroArtwork, ServiceArtwork (7 originals), ProjectArtwork (4 covers + 16 gallery frames), GlowObject
  content/             site.ts, services.ts, projects.ts  (typed content; edit copy here)
  lib/                 platform.tsx (Next bindings), metadata.ts, validation.ts
  spa/                 Bindings + router for the single-file preview build only
  styles/              tokens.css (from the design system) + globals.css
```

### Adding content

- **New service:** add an entry to `src/content/services.ts`. Its page, card, footer link, sitemap entry and contact option follow automatically.
- **New project:** add an entry to `src/content/projects.ts`. Set `type: 'Client Project'` only for authorized client work; `'Studio Concept'` keeps the label visible. Swap `ProjectArtwork` for real images in `ProjectCard` / `ProjectPage` when you have them (use `next/image`, AVIF/WebP, descriptive alt text).

## Contact form

`POST /api/contact` validates input server-side, rejects honeypot submissions, rate-limits by IP and sends the inquiry by email through [Resend](https://resend.com). Set in your host's environment:

```
RESEND_API_KEY=...            # server only, never exposed to the browser
CONTACT_TO_EMAIL=...          # verified inbox
CONTACT_FROM_EMAIL="GG Website <hello@your-domain.com>"   # sender on a domain verified in Resend
NEXT_PUBLIC_SITE_URL=https://www.your-domain.com
```

Until those are set the endpoint returns 503 and the form shows "Something didn't go through" instead of pretending the message was sent. Service pages link to `/contact?service=<slug>`, which preselects that service.

## Design notes

- Styling uses the design system tokens as CSS custom properties with plain CSS (`globals.css`) rather than Tailwind, so the site and the design system share one source of values. Tailwind can be added later and pointed at the same variables.
- Fonts: Space Grotesk and Inter are self-hosted with `next/font/local` (variable woff2, OFL licensed).
- Motion respects `prefers-reduced-motion`; content is visible without JavaScript and without scrolling.
- The GG monogram is the concept mark from the design system and is still awaiting approval.

## Launch checklist (business details still needed)

- [ ] Production domain in `NEXT_PUBLIC_SITE_URL`
- [x] Business email and phone in `src/content/site.ts` (footer, contact page, form errors, structured data)
- [ ] Resend account with a verified sending domain, so the form can deliver to ggtechdesigns@gmail.com
- [ ] Verified social profiles: `site.social`
- [ ] Final approved logo (replace paths in `components/shared/Logo.tsx` and `app/icon.svg`)
- [ ] Privacy Policy and Terms reviewed by a lawyer; bracketed items in `components/pages/LegalPage.tsx` filled in
- [ ] Analytics (and a cookie notice only if the chosen tool needs one)
- [ ] Open Graph share image (`app/opengraph-image.png`, 1200×630)
- [ ] Real portfolio work to replace or sit beside the four studio concepts
