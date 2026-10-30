// Shared metadata and structured-data pieces. Next merges metadata shallowly:
// a page that sets `openGraph` or `alternates` replaces the layout's whole
// object (the root share image and the feed link with it), so pages build
// theirs through the helpers below to keep both.
import type { Metadata } from "next";
import { SITE } from "./site";

/** One plain description of the business: the meta default, Organization, the manifest and llms.txt all use it. */
export const DESCRIPTION = `${SITE.name} gets real estate investors' deals funded: fix and flip, hard money, bridge, BRRRR and ground-up construction loans, plus the rental loans you refinance into. Business-purpose loans on investment property only.`;

/** Organization node id, defined once in layout.tsx and referenced everywhere else. */
export const ORG_ID = `${SITE.url}/#org`;
export const WEBSITE_ID = `${SITE.url}/#website`;
/** The publisher/author reference used by pages, with the name so it reads on its own. */
export const ORG_REF = { "@type": "Organization", "@id": ORG_ID, name: SITE.name, url: SITE.url } as const;

/** Guides RSS feed (src/app/guides/feed.xml/route.ts). */
export const FEED_PATH = "/guides/feed.xml";
export const FEED_TYPES = { "application/rss+xml": [{ url: FEED_PATH, title: `${SITE.name} investor guides` }] };

/** A page's canonical plus the feed link. */
export const alternatesFor = (path: string): Metadata["alternates"] => ({ canonical: path, types: FEED_TYPES });

/** src/app/opengraph-image.tsx, served at /opengraph-image. */
export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: `${SITE.name}: fast loans for flips, hard money, bridge, BRRRR and new builds`,
};
export const OG_SITE = { siteName: SITE.name, locale: "en_US" } as const;

/** openGraph for a page that sets its own: site name, locale and the share image are added back. */
export const openGraphFor = (og: NonNullable<Metadata["openGraph"]>): Metadata["openGraph"] => ({ ...OG_SITE, images: [OG_IMAGE], ...og });

/** BreadcrumbList for the visible crumbs. The current page (no href) is listed without an item URL. */
export const breadcrumbLd = (crumbs: { href?: string; label: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, ...(c.href ? { item: SITE.url + c.href } : {}) })),
});
