import Parser from "rss-parser";
import { profile } from "../content/profile";

export type Post = { title: string; url: string };

/** Drop query/hash (e.g. Medium's ?source=rss tracking) so URLs compare and link cleanly. */
export function normalizeUrl(url: string): string {
  const u = new URL(url);
  return u.origin + u.pathname;
}

const fallback: Post[] = profile.writing.map((p) => ({ title: p.title, url: p.url }));

let cached: Promise<Post[]> | undefined;

/**
 * Single source for article lists (home "Recent Articles" and /writing/), so the
 * two can never disagree. Fetched once per build; falls back to the curated list
 * if Medium is unreachable.
 */
export function getPosts(limit?: number): Promise<Post[]> {
  cached ??= (async () => {
    try {
      const response = await fetch("https://medium.com/feed/@amanranjanverma", {
        signal: AbortSignal.timeout(5000),
      });
      if (!response.ok) throw new Error(`RSS HTTP ${response.status}`);
      const feed = await new Parser().parseString(await response.text());
      const live = (feed.items ?? [])
        .filter((i): i is typeof i & { title: string; link: string } => Boolean(i.title && i.link))
        .map((i) => ({ title: i.title, url: i.link }));
      return live.length ? live : fallback;
    } catch {
      return fallback;
    }
  })();
  return cached.then((posts) => (limit ? posts.slice(0, limit) : posts));
}
