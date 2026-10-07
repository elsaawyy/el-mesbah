# Phase 0 — Foundations Checklist

## Repo & Tooling
- [x] Git repo initialized
- [x] Next.js + TypeScript + ESLint configured
- [ ] Prettier wired to ESLint (config present, integration pending)
- [x] `.env.example` and `.env.local` created
- [x] `.gitignore` present

## Design System
- [x] `styles/tokens.css` — colors, spacing, motion
- [x] `styles/reset.css`
- [x] `styles/components.css`
- [x] Manrope font wired via `next/font`

## Content Layer
- [x] `lib/content/site.ts`
- [x] `lib/content/nav.ts`
- [x] `lib/content/services.ts`
- [x] `lib/content/projects.ts`
- [x] `lib/content/solutions.ts`
- [x] `lib/content/principles.ts`

## Components
- [x] Nav, Footer
- [x] Hero, Beam, Intro, ServicesPreview, Solutions, FeaturedProjects, Why, CTA
- [x] Button, Tag, Reveal, SkipLink
- [x] ProjectMockup

## Pages
- [x] `/`
- [x] `/services`
- [x] `/services/[slug]`
- [x] `/projects`
- [x] `/projects/[slug]`
- [x] `/about`
- [x] `/contact`
- [x] `/thank-you`
- [x] `/privacy`
- [x] `/terms`
- [x] `404` (not-found)
- [x] `500` (error boundary)

## SEO / System
- [x] `sitemap.ts`
- [x] `robots.ts`
- [x] Metadata builder per page
- [ ] JSON-LD structured data (Phase 3)

## Deploy
- [ ] GitHub repo pushed
- [ ] Vercel project linked
- [ ] Custom domain configured (Phase 5)