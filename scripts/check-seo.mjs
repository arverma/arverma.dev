import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const origin = "https://arverma.dev/";
const canonicalPages = new Set();
const pageReferences = [];

async function checkDirectory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await checkDirectory(path);
      continue;
    }
    if (!/\.(html|xml|txt)$/.test(entry.name)) continue;

    const content = await readFile(path, "utf8");
    assert.doesNotMatch(content, /(?:http:\/\/(?:www\.)?arverma\.dev|https:\/\/www\.arverma\.dev)(?=[:/\s"'<]|$)/i,
      `${path}: non-canonical site URL`);

    if (entry.name.endsWith(".html")) {
      const pagePath = relative("dist", path).split(sep).join("/").replace(/index\.html$/, "");
      const expected = new URL(pagePath, origin).href;
      if (entry.name === "404.html") {
        // Error page: must stay out of the index and carry no canonical.
        assert.match(content, /<meta name="robots" content="noindex"/, `${path}: 404 must be noindex`);
        assert.doesNotMatch(content, /rel="canonical"/, `${path}: 404 must not have a canonical`);
        continue;
      }
      const canonicals = [...content.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"[^>]*>/g)];
      assert.equal(canonicals.length, 1, `${path}: expected one canonical tag`);
      assert.equal(canonicals[0][1], expected, `${path}: incorrect canonical`);
      canonicalPages.add(expected);
      assert.match(content, /<meta property="og:image" content="https:\/\/arverma\.dev\/[^"]+"/, `${path}: missing og:image`);
      assert.match(content, /<meta name="twitter:card"/, `${path}: missing twitter:card`);
      for (const [, json] of content.matchAll(/<script type="application\/ld\+json">([^<]*)<\/script>/g)) {
        JSON.parse(json); // throws on invalid JSON-LD
        // Breadcrumb/list targets must be real indexable pages, not #fragments.
        for (const [, item] of json.matchAll(/"item":"([^"]+)"/g)) pageReferences.push({ path, url: item });
      }
      for (const [, anchor] of content.matchAll(/<a\b[^>]*target="_blank"[^>]*>([\s\S]*?)<\/a>/g)) {
        assert.match(anchor, /opens in new tab/, `${path}: external link without new-tab hint: ${anchor.slice(0, 60)}`);
      }
      for (const [, href] of content.matchAll(/<a\b[^>]*href="([^"]*)"/g)) {
        const url = new URL(href, expected);
        if (["arverma.dev", "www.arverma.dev"].includes(url.hostname)) {
          assert.equal(url.origin, new URL(origin).origin, `${path}: non-canonical internal link`);
          // Documents and images are assets, rather than indexable HTML pages.
          if (!/\.[^/]+$/.test(url.pathname) || /\.html$/.test(url.pathname)) {
            url.hash = "";
            pageReferences.push({ path, url: url.href });
          }
        }
      }
    }

    if (/^sitemap.*\.xml$/.test(entry.name)) {
      const locations = [...content.matchAll(/<loc>([^<]+)<\/loc>/g)];
      assert.ok(locations.length, `${path}: empty sitemap`);
      for (const [, location] of locations) {
        assert.ok(location.startsWith(origin), `${path}: non-canonical sitemap URL`);
        if (content.includes("<urlset")) pageReferences.push({ path, url: location });
      }
    }
  }
}

await checkDirectory("dist");
for (const { path, url } of pageReferences) {
  assert.ok(canonicalPages.has(url), `${path}: URL is not a generated canonical page: ${url}`);
}
assert.equal((await readFile("dist/CNAME", "utf8")).trim(), "arverma.dev");
assert.match(await readFile("dist/robots.txt", "utf8"), /^Sitemap: https:\/\/arverma\.dev\/sitemap-index\.xml$/m);
console.log("SEO checks passed: canonical tags, internal links, sitemaps, robots.txt, and CNAME.");
