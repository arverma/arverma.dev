# arverma.dev

Personal site for **Aman Ranjan Verma** — soft retro desk aesthetic, text-forward, sticker clip-art. Built with [Astro](https://astro.build).

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run check:seo # Build and validate canonical URLs, links, and sitemaps
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
3. Custom domain: `arverma.dev` (see `public/CNAME`). In Pages settings, set the custom domain and enable HTTPS.
4. `astro.config.mjs` uses `site: "https://arverma.dev/"` and `base: "/"`.

## Canonical URLs and redirects

The preferred origin is `https://arverma.dev/`. The shared layout uses it for
canonical tags, Open Graph URLs, and internal navigation. The sitemap integration
uses the same Astro `site` setting; `public/robots.txt` advertises its index.
CI runs `npm run check:seo` before uploading the deployment artifact.

GitHub Pages handles redirects before serving this static application. Keep
**Settings → Pages → Custom domain** set to `arverma.dev` and **Enforce HTTPS**
enabled. Configure the apex DNS for GitHub Pages and `www` as a CNAME to
`arverma.github.io` (see [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)).
Astro redirects, JavaScript redirects, and meta refreshes cannot configure these
host-level HTTP 301 responses.

After deployment, check each response without following redirects:

```bash
curl -I http://arverma.dev/
curl -I http://www.arverma.dev/
curl -I https://www.arverma.dev/
curl -I https://arverma.dev/
```

The first three must return `301` with `Location: https://arverma.dev/`; the
canonical URL must return `200`. Also check a path and query string, such as
`http://www.arverma.dev/robots.txt?check=1`, to confirm they survive the redirect.
If an old response is cached, retry with a unique query string and verify the
plain URL again after the cache expires.

In Search Console, submit `https://arverma.dev/sitemap-index.xml` and inspect the
HTTPS apex homepage. “Page with redirect” is expected for alternate URLs that
redirect; those URLs should stay excluded from indexing ([Google's report guide](https://support.google.com/webmasters/answer/7440203?hl=en)).

## Alternate pages

This site currently generates one responsive page (`/`), shared by desktop and
mobile. There are no separate mobile, AMP, or localized routes. Its canonical
is `https://arverma.dev/`; query strings do not change the canonical. The static
`/index.html` file also declares `/` as its canonical. Navigation and the page
sitemap use only `/`, without query parameters or `/index.html` aliases.
The SEO check verifies that page links and sitemap entries resolve to generated,
self-canonical pages, rather than merely checking their domain.

“Alternate page with proper canonical tag” is expected when Google associates
a duplicate with the intended primary page. Inspect each reported URL in Search
Console and compare the user-declared and Google-selected canonical with the
intended page. The report's affected URLs are needed to confirm individual cases.
Keep duplicates crawlable so Google can read their canonical tags; do not add
`noindex` or robots exclusions to try to clear this status.

If separate variants are introduced, duplicate mobile pages should canonicalize
to their equivalent primary page. Distinct translations generally need their own
self-canonical URLs and reciprocal `hreflang` annotations; do not canonicalize
all languages to the English homepage. See Google's guides for
[canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
and [localized pages](https://developers.google.com/search/docs/specialty/international/localized-versions).
