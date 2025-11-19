# SKLD Site

Single-page marketing experience for SKLD highlighting manufacturing, sourcing, and education solutions. Built with the latest React + Vite toolchain and Tailwind CSS v4 for rapid theming.

## Highlights

- Hero, Trust, Solutions, Mission/Vision, Impact Grid, Testimonials, Blog Carousel, CTA, and Footer sections wired up in `App.jsx`.
- Interactive cards (`Solutions`, `BlogCarousel`) use small React state hooks for hover and carousel pagination.
- Design system lives in `src/index.css` using Tailwind v4 `@theme` tokens for typography and brand colors.
- All imagery is local (`src/assets/`) for offline-friendly demos; fallbacks exist for partner logos.
- Layout uses a reusable `.container-xl` helper to mimic the original Figma spacing.

## Tech Stack

- React 19 + React DOM
- Vite 7 for dev server and production bundling
- Tailwind CSS 4 + `@tailwindcss/vite` plugin
- ESLint 9 with React Hooks/Refresh rules

## Getting Started

### Prerequisites

- Node.js 20+ (ensures compatibility with Tailwind v4 tooling)
- npm 10+ (or pnpm/yarn if you prefer—adjust commands accordingly)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit the URL printed by Vite (defaults to `http://localhost:5173`) for hot-reload development.

### Quality, Build & Preview

```bash
npm run lint    # ESLint (JS/JSX only)
npm run build   # Production build to dist/
npm run preview # Serve the production build locally
```

## Project Structure

```text
src/
  assets/              Static imagery used by each section
  components/
    Hero.jsx           Above-the-fold hero tile
    Trusted.jsx        Partner logos + supporting copy
    Solutions.jsx      Interactive solution tiles
    MissionVision.jsx  Mission/vision copy blocks + stats
    ImpactGrid.jsx     Values grid mixing copy + imagery
    Testimonials.jsx   Quote cards rendered from an array
    BlogCarousel.jsx   Responsive carousel with pagination
    CTA.jsx            Dark call-to-action panel
    Footer.jsx         Brand footer
  App.jsx              Section composition
  index.css            Tailwind theme tokens & helpers
  main.jsx             React entry point
```

## Customization Tips

- **Content:** Text, stats, and testimonials come from arrays inside each component—update the copy directly or move the data to JSON if you need CMS integration.
- **Branding:** Adjust fonts/colors in `src/index.css` inside the `@theme` block; Tailwind will rebuild utility classes automatically.
- **Assets:** Replace files in `src/assets/` with your own images. Keep filenames consistent or update the import paths in each component.
- **Accessibility:** Each section includes semantic headings and `aria` hooks; maintain heading hierarchy when introducing new content.

## Deployment

1. Run `npm run build`.
2. Deploy the contents of `dist/` to any static host (Vercel, Netlify, S3, GitHub Pages, etc.).

For questions or enhancements, open an issue or continue iterating directly in this repo. Happy building!
