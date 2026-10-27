import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Crawling is blocked until launch. NEXT_PUBLIC_INDEXABLE=true on the live
// domain opens the site (and switches every page's robots meta to index).
export default function robots(): MetadataRoute.Robots {
  return SITE.indexable
    ? {
        // Search engines and AI assistants (GPTBot, ClaudeBot, PerplexityBot…) get every public page and /llms.txt;
        // pure data scrapers are kept out (docs/llms-txt.md).
        rules: [
          { userAgent: "*", allow: "/", disallow: "/api/" },
          { userAgent: ["Bytespider", "CCBot", "Amazonbot", "PetalBot"], disallow: "/" },
        ],
        sitemap: `${SITE.url}/sitemap.xml`,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
