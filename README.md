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

## Resume

“View resume” opens an in-page preview of the Google Doc (see `links.resumePreview` in [`src/content/profile.ts`](src/content/profile.ts)), with **Download PDF** via Google’s export URL.

Sharing on the Doc must allow **Anyone with the link → Viewer** for the iframe preview to load.

## Deploy (GitHub Pages)

CI builds and deploys on every push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source:** GitHub Actions.
3. Site URL: `https://arverma.github.io/arverma.dev/` (`base` is set in `astro.config.mjs`).

When you attach a root custom domain later, set `site` to that domain and `base` to `"/"`, and add `public/CNAME`.
