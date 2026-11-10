# arverma.dev

Personal site for **Aman Ranjan Verma**, a Data Platform Engineer. Static, text-first, light/dark themed. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Commands

```bash
npm install
npm run dev        # http://localhost:4321
npm run build
npm run check:seo  # build + validate canonicals, links, sitemaps, meta, JSON-LD
npm run preview
```

`make help` lists the same commands.

## Pages

| URL | Source |
| --- | --- |
| `/` | `src/pages/index.astro` (hero, experience, hobby projects, skills, recent articles) |
| `/projects/` | `src/pages/projects/index.astro` |
| `/projects/<slug>/` | `src/pages/projects/[slug].astro`, one per entry in `liveProjects` |
| `/writing/` | `src/pages/writing.astro` |
| 404 | `src/pages/404.astro` (`noindex`, not in the sitemap) |

## Editing content

Copy lives in [`src/content/profile.ts`](src/content/profile.ts): links, work history, hobby projects (`liveProjects`), skills, and the curated fallback article list.

Add a hobby project by adding an entry to `liveProjects` (with a unique `slug`, an `icon` name from `src/components/Icon.astro`, `overview`, `audience`, and `features`). Its page, card, sitemap entry, and JSON-LD are generated automatically.

Articles are read from the Medium RSS feed at build time (`src/lib/medium.ts`) and fall back to `profile.writing` if the feed is unreachable. A weekly scheduled deploy keeps "Recent Articles" fresh.

## Resume

The resume's source of truth is a Google Doc. `scripts/fetch-resume.mjs` (run automatically before `dev` and `build`) exports it to `public/resume.pdf`. If Google is unreachable the last copy is kept, so a deploy never breaks. The Doc must be shared as **Anyone with the link: Viewer**. To change the resume, edit the Doc and redeploy. Commit the refreshed `public/resume.pdf` if you want the fallback copy to stay current.

## Structure

- `src/components/Icon.astro`: the single icon set (inline SVG). Add icons there rather than using ad-hoc SVG or images.
- `src/layouts/BaseLayout.astro`: head tags (canonical, Open Graph, Twitter, JSON-LD), nav with scroll-spy, theme toggle, scroll reveal.
- `src/components/ResumeModal.astro`: resume dialog. It draws `public/resume.pdf` page by page with PDF.js (full-screen on phones, pinch-zoomable).
- `src/styles/global.css`: design tokens, layout, print styles.
- `scripts/check-seo.mjs`: the SEO gate (see below).

### Link conventions

External links use `target="_blank" rel="noopener noreferrer"`, an `arrow-up-right` icon, and a visually hidden "(opens in new tab)". Links that open the dialog use `aria-haspopup="dialog"` and the `app-window` icon. `check:seo` fails if a new-tab link has no hint.

## SEO checks

`npm run check:seo` builds the site and fails if:

- a page lacks exactly one self-referencing canonical (the 404 must instead be `noindex` with no canonical);
- `og:image` or `twitter:card` is missing, or any JSON-LD is invalid;
- a breadcrumb, internal link, or sitemap URL is not a generated canonical page;
- any non-canonical `http://` or `www` form of the site URL appears;
- an external link has no new-tab hint;
- `CNAME` or the `robots.txt` sitemap line is wrong.

CI runs it before every deploy.

## Deploy (GitHub Pages)

CI builds and deploys on every push to `main`, and weekly (Mondays 03:00 UTC), via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. **Settings → Pages → Build and deployment → Source:** GitHub Actions.
2. Custom domain `arverma.dev` (see `public/CNAME`), with **Enforce HTTPS** on.
3. `astro.config.mjs` sets `site: "https://arverma.dev"` and `base: "/"`.

## Canonical URLs and redirects

The preferred origin is `https://arverma.dev/`. The layout derives each page's canonical and Open Graph URL from the Astro `site` setting; the sitemap integration uses the same setting and `public/robots.txt` advertises its index.

Host-level redirects (`http` to `https`, `www` to apex) are handled by GitHub Pages, not by this code. Set the apex DNS for GitHub Pages and `www` as a CNAME to `arverma.github.io` ([guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)). After a deploy, confirm without following redirects:

```bash
curl -I http://arverma.dev/
curl -I http://www.arverma.dev/
curl -I https://www.arverma.dev/
curl -I https://arverma.dev/
```

The first three must return `301` with `Location: https://arverma.dev/`; the last must return `200`.

In Search Console, submit `https://arverma.dev/sitemap-index.xml`. "Page with redirect" and "Alternate page with proper canonical tag" are expected for alternate URLs; keep those URLs crawlable and do not add `noindex` to clear them.
