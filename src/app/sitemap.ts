import type { MetadataRoute } from "next";
import { guidePath } from "@/components/templates/GuidePage";
import { statePath } from "@/components/templates/StatePage";
import { GUIDES } from "@/content/guides";
import { PROGRAM_CONTENT } from "@/content/programs";
import { STATES } from "@/content/states";
import { CALCULATORS, PROGRAMS, SITE } from "@/lib/site";

// Every public page once, at the path it's served on. Content pages carry their
// own `updated` date; pages without one are listed without lastModified rather
// than with a guessed date. /api, the feed and llms.txt aren't pages, so they
// stay out.
const STATIC = ["/", "/loans", "/rates", "/calculators", "/glossary", "/get-funding", "/how-it-works", "/about", "/contact", "/disclosures", "/privacy", "/terms"];

/** Newest of a list of YYYY-MM-DD dates (they sort as strings). */
const newest = (dates: string[]) => dates.reduce<string | undefined>((a, d) => (!a || d > a ? d : a), undefined);

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (p: string) => SITE.url + (p === "/" ? "" : p);
  const entries: MetadataRoute.Sitemap = [
    ...STATIC.map((p) => ({ url: url(p) })),
    // The hub lists every guide, so it changes whenever one is added or updated.
    { url: url("/guides"), lastModified: newest(GUIDES.map((g) => g.updated)) },
    ...PROGRAMS.map((p) => ({ url: url(p.href), lastModified: PROGRAM_CONTENT[p.slug]?.updated })),
    ...CALCULATORS.map((c) => ({ url: url(c.href) })),
    ...GUIDES.map((g) => ({ url: url(guidePath(g)), lastModified: g.updated })),
    ...STATES.map((s) => ({ url: url(statePath(s)), lastModified: s.updated })),
  ];
  // A guide with a custom `path` could share a URL already listed: keep the first entry.
  const seen = new Set<string>();
  return entries.filter((e) => {
    if (seen.has(e.url)) return false;
    seen.add(e.url);
    return true;
  });
}
