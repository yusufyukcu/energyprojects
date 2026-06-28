# EnergyProjects

Landing page for **EnergyProjects**, a documentary media brand covering renewable energy, infrastructure, engineering, and global megaprojects.

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first `@theme` config in `src/index.css`)
- [Framer Motion](https://motion.dev/) for scroll and entrance animations
- [Lucide](https://lucide.dev/) for iconography
- Self-hosted [Fontsource](https://fontsource.org/) fonts (Inter, Manrope)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint      # run oxlint
```

## Project structure

```
src/
  components/      section and shared UI components (Navbar, Hero, Footer, ...)
  components/icons/ small custom icon components not covered by lucide-react
  illustrations/    hand-built SVG illustrations (hero scene, video thumbnails)
  data/             site content (site info, topics, videos)
```

## Content

Site-wide content lives in `src/data/`:

- `site.js` — brand name, tagline, and contact details. **Replace the placeholder email and YouTube handle with real values before launch.**
- `videos.js` — featured video cards on the homepage.
- `topics.js` — topic cards in the "Topics we cover" section.

The illustrations are original SVG artwork (layered gradients and shading), not stock imagery or photos.
