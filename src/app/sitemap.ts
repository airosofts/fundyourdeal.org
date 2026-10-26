import type { MetadataRoute } from "next";
import { guidePath } from "@/components/templates/GuidePage";
import { statePath } from "@/components/templates/StatePage";
import { GUIDES } from "@/content/guides";
import { PROGRAM_CONTENT } from "@/content/programs";
import { STATES } from "@/content/states";
import { CALCULATORS, PROGRAMS, SITE } from "@/lib/site";

const STATIC = ["/", "/loans", "/rates", "/calculators", "/guides", "/glossary", "/get-funding", "/how-it-works", "/about", "/contact", "/disclosures", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (p: string) => SITE.url + (p === "/" ? "" : p);
  return [
    ...STATIC.map((p) => ({ url: url(p) })),
    ...PROGRAMS.map((p) => ({ url: url(p.href), lastModified: PROGRAM_CONTENT[p.slug]?.updated })),
    ...CALCULATORS.map((c) => ({ url: url(c.href) })),
    ...GUIDES.map((g) => ({ url: url(guidePath(g)), lastModified: g.updated })),
    ...STATES.map((s) => ({ url: url(statePath(s)), lastModified: s.updated })),
  ];
}
