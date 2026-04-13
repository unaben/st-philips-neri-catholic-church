# St. Philip Neri Catholic Church — Next.js Website

A production-ready church website built with **Next.js 15 (App Router)**, **TypeScript**, and **CSS Modules**.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   └── page.tsx                # Home page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx / .module.css
│   │   └── Footer.tsx / .module.css
│   └── sections/
│       ├── HeroCarousel.tsx / .module.css
│       ├── Welcome.tsx / .module.css
│       ├── Featured.tsx / .module.css
│       ├── Subscribe.tsx / .module.css
│       └── BlogAndHall.tsx / .module.css
├── data/index.ts               # All static content
├── hooks/
│   ├── useCarousel.ts
│   ├── useParallax.ts
│   └── useScrollAnimation.ts
├── styles/globals.css          # CSS variables + reset
├── types/index.ts
└── utils/index.ts
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm run lint
```

## Replacing Placeholder Images

Drop real images into `public/images/`:

| File | Size |
|---|---|
| `hero-1.jpg` | 1400×900 |
| `hero-2.jpg` | 1400×900 |
| `blog-bible.jpg` | 680×425 |
| `parish-hall.jpg` | 540×305 |
| `priest.jpg` | 200×200 |
| `logo.png` | 112×136 |
| `archdiocese-badge.png` | 120×120 |

## Design Tokens (src/styles/globals.css)

```css
--color-gold     #c8823a   /* primary accent */
--color-bg       #fdf5ec   /* warm background */
--color-peach    #f5d9bf   /* buttons */
--font-display   Oswald
--font-serif     EB Garamond
--font-body      Lato
```
