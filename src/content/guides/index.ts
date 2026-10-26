import type { Guide } from "../types";

// Guides are registered here as they're written (see docs/brand.md for the plan).
export const GUIDES: Guide[] = [];

export const guideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);

/** Related guides: the ones a guide names, then others in its category. */
export function relatedGuides(g: Guide, max = 3): Guide[] {
  const named = g.related.guides.map(guideBySlug).filter((x): x is Guide => Boolean(x) && x!.slug !== g.slug);
  const sameCategory = GUIDES.filter((x) => x.category === g.category && x.slug !== g.slug && !named.includes(x));
  return [...named, ...sameCategory].slice(0, max);
}
