# DeskMed — Landing Page

Marketing site for DeskMed, a multi-tenant clinic-management platform for Indian clinics.
Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Jest + React Testing Library.

Single static page assembled in [`src/app/page.tsx`](src/app/page.tsx) from seven section
components in [`src/components/`](src/components/): Navbar, Hero, SocialProof, Features,
Pricing, Testimonial, Footer. No client state or API calls beyond the testimonial slider.

## Scripts

```bash
npm install        # install dependencies
npm run dev        # dev server on http://localhost:3001
npm test           # run the Jest suite (32 tests)
npm run build      # production build  ← see font caveat below
npm start          # serve the production build on http://localhost:3001
```

## Build-time fonts caveat

The page loads **Playfair Display** and **DM Sans** via `next/font/google`
([`src/app/layout.tsx`](src/app/layout.tsx)). Next.js fetches these from Google Fonts
**at build time**.

On networks that perform TLS interception (corporate proxies, some antivirus), that fetch
fails with `UNABLE_TO_VERIFY_LEAF_SIGNATURE` and the build aborts. This is an environment
issue, not a code issue — the build is clean otherwise.

Workaround for local builds behind such a proxy (Node 22+):

```bash
NODE_OPTIONS=--use-system-ca npm run build
```

CI/CD and Vercel deploys build without the flag, since their network reaches Google Fonts
directly.

## Design

Dark navy (`#0D1117`) base with coral (`#FF5C3A`) accent; Playfair Display for display
headings, DM Sans for body. CTAs point at the app subdomain (`app.deskmed.online`).
