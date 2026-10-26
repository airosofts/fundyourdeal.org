import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Crawling is blocked until launch. NEXT_PUBLIC_INDEXABLE=true on the live
// domain opens the site (and switches every page's robots meta to index).
export default function robots(): MetadataRoute.Robots {
  return SITE.indexable
    ? { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: `${SITE.url}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
