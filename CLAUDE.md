# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev        # Start dev server at localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview the production build locally
npm run astro      # Run Astro CLI commands (e.g. astro check, astro add)
```

There are no tests or linting scripts configured. Prettier is available but has no npm script — run it directly with `npx prettier --write .`.

## Architecture

This is an **Astro 5** marketing site for Hydrovision (a water solutions company targeting Andean communities), deployed to Vercel. The stack is:

- **Astro** for pages and static layout components
- **React** (via `@astrojs/react`) for interactive UI islands
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — configured entirely through `src/styles/global.css`, no `tailwind.config.*` file
- **shadcn/ui** (New York style) — component aliases are wired in `components.json`; utilities live in `src/lib/utils.ts`
- **Framer Motion** for animations in React components
- **astro-icon** for inline SVG icons (sources in `src/icons/`)
- **astro-integration-lottie** for Lottie animations; the JSON file lives in `public/`

### Page / Component split

Pages (`src/pages/`) are pure Astro files that compose layout and sections. Interactive pieces are React TSX components in `src/components/ui/` loaded as **Astro islands** with `client:visible`. Shared Astro-only components (NavBar, Footer, PreNav, ScrollReveal) live directly in `src/components/`.

`src/layouts/Layout.astro` is the single shell used by every page. It mounts `PreNav` and `NavBar` with `transition:persist` so they survive Astro's **View Transitions** (ClientRouter) between pages.

### Scroll reveal pattern

`ScrollReveal.astro` is a wrapper component that applies CSS animation classes (`reveal`, `reveal-left`, `reveal-right`, `reveal-scale`) and activates them via an `IntersectionObserver`. It re-initialises on `astro:page-load` to work across view transitions. Props: `animation`, `delay` (ms), `intensity` (low/medium/high), `repeat`.

### Path aliases

`@/` maps to `src/` in both `tsconfig.json` and Vite's resolver, so imports like `@/components/ui/AnimatedStats` work from any file.

### Assets

Optimised images (.webp) for pages are in `src/assets/<page-name>/`. Static files (logos, favicon, lottie JSON) are in `public/`.
