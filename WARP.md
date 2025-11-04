# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Quick Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Overview

**STAR Solutions T.I.** is a Next.js website for a cybersecurity and IT solutions company based in Bogotá, Colombia. The site showcases security services, consulting, and software licensing.

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS 4
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom configuration via @tailwindcss/postcss
- **Compiler**: React Compiler enabled for optimization
- **Linting**: ESLint 9 with Next.js config

## Architecture & Key Concepts

### Directory Structure

```
src/
├── app/              # Next.js App Router - all pages and layouts
│   ├── page.tsx     # Home page with hero, stats, and featured services
│   ├── layout.tsx   # Root layout with metadata, fonts, structured data
│   ├── globals.css  # Tailwind CSS imports
│   ├── servicios/[slug]/page.tsx   # Dynamic service detail pages
│   ├── contactenos/page.tsx        # Contact form page
│   ├── politica-privacidad/page.tsx
│   ├── terminos/page.tsx
│   └── sitemap.ts   # XML sitemap for SEO
├── components/       # Reusable React components
│   ├── Header.tsx   # Navigation with mobile menu (client component)
│   ├── Footer.tsx   # Footer with links and social media
│   └── ServiceCard.tsx # Service display card component
├── data/            # Static data and types
│   └── services.ts  # Service definitions with 16 service entries
└── config/          # Configuration files
    └── seo.ts       # Site metadata and SEO configuration
```

### Data Flow

**Services** are the core data model:
- Defined in `src/data/services.ts` with interface: `id`, `name`, `slug`, `title`, `description`, `shortDescription`, `icon`, `features`, `benefits`, `category`
- Categories: antivirus, consultoria, infraestructura, software, security
- Used in: home page cards, dynamic routing for `/servicios/[slug]` pages

**Dynamic Pages**: The `[slug]` route pattern allows each service to have its own detail page by matching the `slug` field.

### SEO & Metadata

- `src/config/seo.ts` exports `siteConfig` and `metadata` objects
- Structured data (JSON-LD) for Organization schema in `layout.tsx`
- Each page exports `metadata` object for Next.js automatic head generation
- Sitemap generated in `sitemap.ts`

### Styling Approach

- **Tailwind CSS v4** with utility classes directly in JSX
- **No CSS modules** - inline Tailwind utilities
- Responsive design using `sm:`, `md:`, `lg:` breakpoints
- Color scheme: blue primary (#3b82f6), grays for neutral
- Gradients for visual depth (e.g., hero section `from-blue-600 to-blue-900`)

### Components Patterns

- **Server Components** (default): Footer, ServiceCard, layout.tsx
- **Client Components** (marked "use client"): Header (for useState menu toggle)
- No props drilling; components receive minimal, specific data
- Components use `Link` from "next/link" for internal navigation

## Development Notes

- **TypeScript**: Strict mode enabled; path aliases configured (`@/*` → `src/*`)
- **Next.js Config**: React Compiler enabled (`reactCompiler: true`)
- **Environment Variables**: `.env.local.example` shows required vars (GA_ID, reCAPTCHA keys, site URL)
- **Language**: Spanish (es_CO locale) for content and Spanish metadata
- **Responsive**: Mobile-first design with breakpoints at 640px (sm), 768px (md), 1024px (lg)

## Common Development Tasks

### Adding a New Service
1. Add entry to services array in `src/data/services.ts`
2. Include all required fields: id, slug, name, icon, features, benefits, category
3. Service automatically appears on home page (if within first 6) and gets dynamic page at `/servicios/[slug]`

### Creating a New Page
1. Create folder under `src/app/` matching the route (e.g., `src/app/about/page.tsx`)
2. Export default component and optionally a `metadata` export for SEO
3. Pages automatically route based on file path (App Router)

### Updating SEO
- Edit `src/config/seo.ts` for global metadata
- Edit individual page `metadata` exports for page-specific tags
- Update schema in `layout.tsx` for Organization structured data

### Styling Changes
- All styles use Tailwind utilities; no separate CSS files needed
- Update color values in Tailwind class names (e.g., `bg-blue-600`)
- Use responsive prefixes for mobile-first responsive design

## Environment Setup

1. `npm install` to install dependencies
2. Create `.env.local` from `.env.local.example` and fill in actual values:
   - `NEXT_PUBLIC_GA_ID`: Google Analytics ID
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: reCAPTCHA public key
   - `RECAPTCHA_SECRET_KEY`: reCAPTCHA secret (server-side only)
   - `NEXT_PUBLIC_SITE_URL`: Base URL (used for canonical tags and metadata)
   - `NEXT_PUBLIC_CONTACT_EMAIL`: Contact email for forms

## Important Patterns to Follow

- **Use `@/` import alias** for clean imports from src: `import { services } from "@/data/services"`
- **Server components by default** - only add "use client" when you need interactivity (state, hooks)
- **Metadata first** - ensure pages export proper metadata for SEO
- **Responsive first** - test mobile layouts; use Tailwind breakpoints consistently
- **Type safety** - define interfaces for data (Service type already defined)
