# Dan Moretti — Game Design Portfolio

A personal portfolio site built with [Next.js](https://nextjs.org) (static export) and
[Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages.

## Tech stack

- **Next.js 15** with the App Router, exported as a static site (`output: "export"`)
- **React 18** + **TypeScript**
- **Tailwind CSS 3** for styling (single, consistent design system)
- **GitHub Actions** for build & deploy to GitHub Pages

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack)  |
| `npm run build` | Build the static site into `out/` |
| `npm run lint`  | Run ESLint                        |

## Project structure

```
src/app/
  layout.tsx              Root layout, fonts, metadata
  page.tsx                Home page + project data
  globals.css             Design tokens (CSS variables) + base styles
  Components/
    Intro.tsx             Hero / about card with social links
    Projects.tsx          Project card
    GenericCarousel.tsx   Lightweight image carousel
    Reveal.tsx            Scroll-reveal animation wrapper
```

## Deployment

Pushing to `main` triggers the [GitHub Pages workflow](.github/workflows/nextjs.yml),
which builds the static export and publishes it.
