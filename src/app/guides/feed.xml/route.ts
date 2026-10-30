// /guides/feed.xml: RSS 2.0 feed of the investor guides, newest first. Built
// from GUIDES, so a guide listed in src/content/guides/index.ts appears here
// on the next build. No clock is read (lastBuildDate is the newest guide's
// date), which keeps the route static.
import { guidePath } from "@/components/templates/GuidePage";
import { GUIDES } from "@/content/guides";
import { FEED_PATH } from "@/lib/seo";
import { SITE } from "@/lib/site";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
/** YYYY-MM-DD → RFC 822, as RSS 2.0 requires. */
const rfc822 = (day: string) => new Date(`${day}T12:00:00Z`).toUTCString();
/** Strip the **bold** and [label](/href) markup the guide text supports. */
const plain = (s: string) => s.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1");

export function GET() {
  // Newest published first; same-day guides keep their order from index.ts (sort is stable).
  const guides = [...GUIDES].sort((a, b) => b.published.localeCompare(a.published) || b.updated.localeCompare(a.updated));
  const lastBuild = guides.reduce<string | undefined>((d, g) => (!d || g.updated > d ? g.updated : d), undefined);
  const hub = `${SITE.url}/guides`;

  const items = guides.map((g) => {
    const link = SITE.url + guidePath(g);
    return [
      "    <item>",
      `      <title>${esc(g.title)}</title>`,
      `      <link>${esc(link)}</link>`,
      `      <guid isPermaLink="true">${esc(link)}</guid>`,
      `      <pubDate>${rfc822(g.published)}</pubDate>`,
      `      <category>${esc(g.category)}</category>`,
      `      <description>${esc(plain(g.dek))}</description>`,
      "    </item>",
    ].join("\n");
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${esc(`${SITE.name} investor guides`)}</title>`,
    `    <link>${esc(hub)}</link>`,
    `    <description>${esc(`Guides for investors with a deal in hand: how lenders size flips, bridge loans, BRRRR refinances, rentals and new builds, with the numbers worked through. From ${SITE.name}.`)}</description>`,
    "    <language>en-us</language>",
    ...(lastBuild ? [`    <lastBuildDate>${rfc822(lastBuild)}</lastBuildDate>`] : []),
    `    <atom:link href="${esc(SITE.url + FEED_PATH)}" rel="self" type="application/rss+xml" />`,
    ...items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
