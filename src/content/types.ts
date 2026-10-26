// Content shapes for the data-driven pages. Copy lives in src/content/*,
// layout lives in the page templates.

export type Source = { label: string; url: string };

export type ProgramContent = {
  slug: string; // matches PROGRAMS[].slug in lib/site.ts
  metaTitle: string; // ≤ 60 characters, primary keyword first
  metaDescription: string; // ≤ 155 characters
  eyebrow: string;
  h1: string;
  intro: string; // 1–2 sentences under the H1
  /** Four headline figures: typical ranges across lenders, not offers. */
  facts: { label: string; value: string }[];
  overview: { heading: string; paragraphs: string[]; formula?: string; bullets?: string[] };
  /** Worked example with real arithmetic. dscr draws the DSCR scale. */
  example?: { title: string; rows: [string, string][]; result: { label: string; value: string }; note: string; dscr?: number };
  audience: { heading: string; items: { title: string; text: string }[] };
  requirements: { heading: string; intro: string; rows: [string, string][] };
  /** What it costs: rates, points, fees, prepayment — ranges with dates. */
  costs?: { heading: string; intro: string; rows: [string, string][] };
  compare?: { id: string; heading: string; intro: string; columns: [string, string, string]; rows: [string, string, string][] };
  steps: { heading: string; items: { title: string; text: string }[] };
  faqs: { q: string; a: string }[];
  related: string[]; // program slugs
  calculator?: { href: string; label: string };
  sources: Source[];
  updated: string; // YYYY-MM-DD
};

/** Long-form guide: blocks render in order. */
export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "callout"; title?: string; text: string }
  | { type: "formula"; text: string }
  | { type: "cta"; text: string; href: string; label: string };

export type Guide = {
  slug: string;
  /** URL when not /guides/{slug}, e.g. "/dscr-loans/requirements". */
  path?: string;
  metaTitle: string;
  metaDescription: string;
  category: "DSCR" | "Fix & flip" | "Short-term rental" | "BRRRR" | "Financing basics" | "Construction" | "Portfolio";
  title: string; // H1
  dek: string; // standfirst under the H1
  readMinutes: number;
  published: string; // YYYY-MM-DD
  updated: string;
  keyTakeaways: string[];
  body: GuideBlock[];
  faqs?: { q: string; a: string }[];
  related: { programs: string[]; guides: string[] };
  sources: Source[];
};

/** State landing page, e.g. /dscr-loans/texas. Every figure needs a source. */
export type StateContent = {
  program: "dscr" | "fix-and-flip"; // parent program slug
  slug: string; // "texas"
  state: string; // "Texas"
  abbr: string; // "TX"
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  facts: { label: string; value: string }[]; // four headline figures for this state
  /** State costs that change the numbers: property tax, insurance, transfer/doc taxes, HOA prevalence. */
  costs: { heading: string; intro: string; rows: [string, string][] };
  /** Metro snapshot: columns like Metro · Median rent · Median price · Gross yield. */
  metros: { heading: string; intro: string; columns: string[]; rows: string[][]; note: string };
  example: { title: string; rows: [string, string][]; result: { label: string; value: string }; note: string; dscr?: number };
  /** Legal and market rules: foreclosure process, entity/LLC notes, STR rules in major cities, rural limits, licensing notes. */
  rules: { heading: string; items: { title: string; text: string }[] };
  faqs: { q: string; a: string }[];
  sources: Source[];
  updated: string;
};
