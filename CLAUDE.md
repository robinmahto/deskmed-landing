# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **STATUS: BUILT.** This is the only fully implemented app in the monorepo. See the root
> [../CLAUDE.md](../CLAUDE.md) for the overall project, and the spec at
> [../docs/superpowers/specs/2026-06-03-deskmed-initial-setup-design.md](../docs/superpowers/specs/2026-06-03-deskmed-initial-setup-design.md).

---

## 1. Purpose

The **DeskMed landing page** — the public marketing site for the DeskMed clinic platform. A
single static Next.js 14 (App Router) + TypeScript + Tailwind page. No authentication, no
backend calls; its job is to convert visitors and hand them off to the dashboard at
`app.deskmed.in`.

---

## 2. Folder Structure

```
landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx     # root shell; loads Playfair Display + DM Sans via next/font
│   │   ├── page.tsx       # assembles the 7 sections in fixed order
│   │   └── globals.css    # Tailwind layers + base styles
│   ├── components/        # one file per section (see below)
│   └── __tests__/         # one Jest test file per section
├── tailwind.config.ts     # color + font tokens
├── jest.config.ts / jest.setup.ts
└── package.json
```

---

## 3. Major Features / Sections

[src/app/page.tsx](src/app/page.tsx) renders seven sections in this fixed order:

1. **Navbar** — sticky; logo, anchor links, Login + Start Free Trial CTAs
2. **Hero** — headline, subtext, dual CTA, animated dashboard mockup
3. **SocialProof** — stats bar (clinics, patients, uptime, rating)
4. **Features** — bento grid of capability cards
5. **Pricing** — Starter / Growth / Enterprise tiers with monthly/annual toggle
6. **Testimonial** — auto-advancing slider, 3 voices, arrows + dots
7. **Footer** — final CTA, footer nav, copyright

---

## 4. Important Files

- [src/app/page.tsx](src/app/page.tsx) — section assembly (change order/composition here)
- [src/app/layout.tsx](src/app/layout.tsx) — fonts as CSS variables `--font-playfair` / `--font-dm-sans`
- [src/components/Testimonial.tsx](src/components/Testimonial.tsx) — the **only** client component
- [tailwind.config.ts](tailwind.config.ts) — design tokens
- [README.md](README.md) — dev/build notes (overlaps with this file)

---

## 5. Dependencies

Next.js 14 · React 18 · TypeScript 5 · Tailwind CSS 3. Tested with Jest 29 +
@testing-library/react 15 + @testing-library/user-event (jsdom env). No data/state libraries —
the page is static apart from the testimonial slider's local `useState`.

---

## 6. Data / Content Flow

There is **no API and no fetching.** All content (stats, feature cards, pricing plans,
testimonials) is defined as **module-level arrays inside each component** and rendered
directly. All CTAs link to the app subdomain: `https://app.deskmed.in/...`. To change copy or
offers, edit the arrays in the relevant component.

---

## 7. Development Commands

```bash
npm run dev                            # http://localhost:3001
npm test                               # full Jest suite
npm test -- --testPathPattern="Hero"   # single component's tests
npm run lint
npm run build                          # production build — see caveat below
```

### Build-time font caveat

`layout.tsx` loads Playfair Display + DM Sans via `next/font/google`, which Next.js fetches
**at build time**. Behind TLS-intercepting proxies the fetch fails with
`UNABLE_TO_VERIFY_LEAF_SIGNATURE` and the build aborts — an environment issue, not a code bug.
Local workaround (Node 22+): `NODE_OPTIONS=--use-system-ca npm run build`. Vercel/CI build
without the flag.

---

## 8. Coding Patterns

- **Server components by default**; add `"use client"` only when interactivity requires it
  (currently only `Testimonial.tsx`).
- Section content lives as typed arrays at the top of each component, mapped into markup —
  follow this pattern rather than hardcoding repeated blocks.
- Styling is Tailwind utility classes inline; the dark/coral palette
  (navy `#0D1117`, coral `#FF5C3A`) and fonts are the established visual language.

---

## 9. Guidelines for Working Here

- **Tests assert exact rendered copy and link `href`s.** When you change a section's text or a
  CTA target, update its test file in `src/__tests__/` in the same change, or the suite breaks.
- Keep the page static — don't introduce data fetching or auth here; that belongs in
  `../frontend/`.
- This site's dark/coral theme is intentional and diverges from the spec's original "Clean
  Clinical" palette. **The live code is the source of truth for landing visuals** — don't
  "fix" it back to the spec's blue.
- Definition of done (per the build plan): all tests green **and** a clean production build.
