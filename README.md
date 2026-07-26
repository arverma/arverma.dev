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

## Deploy (GitHub Pages)

CI builds and deploys on every push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source:** GitHub Actions.
3. Optional custom domain: `public/CNAME` is set to `arverma.dev` — point DNS (A/AAAA or CNAME) at GitHub Pages, then enable the domain in repo Pages settings.

Preview without a custom domain: `https://<user>.github.io/arverma.dev/` — if you use that URL long-term, set `base: '/arverma.dev/'` in `astro.config.mjs`.
