# arverma.dev

Personal site for **Aman Ranjan Verma** — soft retro desk aesthetic, text-forward, sticker clip-art. Built with [Astro](https://astro.build).

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Edit content

All copy lives in [`src/content/profile.ts`](src/content/profile.ts) — work, projects, skills, writing, and links.

## Resume PDF

Resume CTA currently points at the [Google Sites CV](https://sites.google.com/view/arverma/home). To use a local PDF:

1. Add `public/resume.pdf`
2. Set `links.resume` in `profile.ts` to `/resume.pdf`

## Deploy

Static output in `dist/`. Point `arverma.dev` at any static host (Cloudflare Pages, Vercel, GitHub Pages, Netlify).
