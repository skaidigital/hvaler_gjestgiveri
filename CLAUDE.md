# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13.5.6 website for Hvaler Gjestgiveri (a hospitality/restaurant business in Norway). The project uses Contentful as CMS and Resend for email functionality.

## Essential Commands

```bash
# Development
bun dev          # Start development server on http://localhost:3000
bun run email    # Start email template development server on http://localhost:3334

# Build & Production
bun run build    # Build for production
bun start        # Start production server on port 3001

# Linting
bun run lint     # Run ESLint with Next.js Core Web Vitals rules

# Environment Variables
bun run env:dev  # Pull development env vars from Vercel
bun run env:prod # Pull production env vars from Vercel
```

## Architecture & Key Patterns

### Component Organization
The project follows a numbered hierarchy for components:
- `components/1_Small/` - Atomic components (buttons, forms, inputs)
- `components/2_Big/` - Composite components (navigation, modals, CTAs)
- `components/3_Pages/` - Page-specific components organized by route
- `components/features/` - Feature-specific components (e.g., GoogleMaps)

### Email System
Email functionality uses React Email with Resend:
- Templates located in `src/features/email/`
- Schema validation with Zod for form data
- Server actions handle email sending
- Use `bun run email` to develop/preview email templates

### Content Management
The project integrates with Contentful CMS. When working with content:
- Content types and queries are typically in page components
- Dynamic content is fetched server-side in getStaticProps/getServerSideProps

### Routing
Standard Next.js pages directory structure with:
- Static pages for each section (bryllup, selskap, overnatting, etc.)
- API routes in `pages/api/`
- Dynamic sitemap generation at `pages/sitemap.xml.js`

## Important Notes

- **Package Manager**: Use `bun` instead of npm/yarn
- **TypeScript**: Project has mixed JS/TS with loose TypeScript settings (`strict: false`)
- **No Testing**: Currently no test framework is configured
- **Deployment**: Configured for Vercel deployment
- **Styling**: Uses Tailwind CSS with custom configuration in `tailwind.config.js`