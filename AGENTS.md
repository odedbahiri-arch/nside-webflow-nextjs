# AGENTS.md

## Project Overview

This is the **Nside Template** — a Webflow template converted to Next.js. We take exported Webflow HTML/CSS/JS and convert them to Next.js pages served via Vercel. The goal is fast delivery with preserved design and interactions.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Deployment**: Vercel (SSG/static)
- **Source**: Webflow code export (HTML + CSS + JS)
- **Fonts**: Inter + Open Sans via `next/font`
- **Styling**: Webflow's original CSS preserved (no Tailwind)

## Conversion Workflow

When integrating Webflow export content:

1. **Reference** original HTML in `webflow-source/`
2. **Import CSS** files in `layout.tsx` (normalize → webflow → project)
3. **Parse HTML** and convert to JSX
4. **Replace** `<img>` → `next/image`, `<a>` → `next/link`
5. **Clean** Webflow tracking attributes and badge
6. **Deploy** to Vercel

## File Structure

```
app/
├── layout.tsx       # Root layout with CSS imports, fonts
├── page.tsx         # Home page (index.html)
├── fonts.ts         # Inter, Open Sans config
└── not-found.tsx    # 404 page

styles/
├── normalize.css
├── webflow.css
└── nside-cloneable-cms-template-db517e.webflow.css

public/
├── images/          # Images from Webflow export
├── js/
│   └── webflow.js   # Webflow runtime (only load when needed)
└── documents/       # JSON animation/interaction files

webflow-source/      # Original HTML files (reference only)
```

## Page Mapping

| Webflow HTML       | Next.js Route     |
|--------------------|-------------------|
| index.html         | `/`               |
| intro.html         | `/intro`          |
| services.html      | `/services`       |
| projects.html      | `/projects`       |
| contact.html       | `/contact`        |
| search.html        | `/search`         |
| 404.html           | `not-found.tsx`   |

## Build & Deploy

```bash
npm run build
npx vercel
```

## Common Issues

- **`window is not defined`**: Wrap Webflow JS init in `useEffect` or check `typeof window`
- **Images 404 on Vercel**: Add domains to `next.config.js` `remotePatterns`
- **CSS not applying**: Check import order in layout.tsx; url() paths must use `/fonts/` or `/images/` for public assets
- **Webflow JS errors**: Only load webflow.js when actual Webflow content with interactions is present on the page
