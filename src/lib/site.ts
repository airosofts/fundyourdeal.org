// Brand and site structure in one place. Renaming the brand = change SITE.
// Investment property (non-owner-occupied) loans only.
import type { LoanType, Purpose } from "./leadSpec";

const url = (process.env.NEXT_PUBLIC_SITE_URL || "https://fundyourdeal.org").replace(/\/$/, "");

export const SITE = {
  name: "Fund Your Deal",
  domain: "fundyourdeal.org",
  url,
  tagline: "Got a deal? Get it funded fast — flips, bridge, BRRRR, new builds and rentals.",
  email: "hello@fundyourdeal.org",
  cta: "Fund My Deal",
  // Search engines stay out until launch: set NEXT_PUBLIC_INDEXABLE=true on the live domain.
  indexable: process.env.NEXT_PUBLIC_INDEXABLE === "true",
};

export const NAV = [
  { href: "/loans", label: "Loans" },
  { href: "/calculators", label: "Calculators" },
  { href: "/rates", label: "Rates" },
  { href: "/guides", label: "Guides" },
  { href: "/how-it-works", label: "How it works" },
];

export type ProgramGroup = "Rental" | "Project";

export type Program = {
  slug: string;
  href: string;
  group: ProgramGroup;
  title: string; // card / nav title
  short: string; // breadcrumb label, e.g. "DSCR loans"
  noun: string; // mid-sentence, e.g. "DSCR", "fix and flip"
  blurb: string;
  bestFor: string;
  qualifies: string;
  term: string;
  /** How the lead form pre-fills when started from this program's page. */
  preset: { loanType: LoanType; purpose?: Purpose; propertyType?: string };
};

export const PROGRAMS: Program[] = [
  {
    slug: "dscr",
    href: "/dscr-loans",
    group: "Rental",
    title: "DSCR rental loans",
    short: "DSCR loans",
    noun: "DSCR",
    blurb: "Qualify on the property's rent, not your tax returns. Close in your LLC.",
    bestFor: "Buy-and-hold rentals, 1–4 units",
    qualifies: "Rent ÷ monthly payment (DSCR)",
    term: "30-year fixed, ARMs, interest-only",
    preset: { loanType: "dscr" },
  },
  {
    slug: "short-term-rental",
    href: "/short-term-rental-loans",
    group: "Rental",
    title: "Short-term rental loans",
    short: "Short-term rental loans",
    noun: "short-term rental",
    blurb: "Rental financing for Airbnb and VRBO homes, sized on nightly income.",
    bestFor: "Vacation and short-stay rentals",
    qualifies: "Booking history or projected STR income",
    term: "30-year fixed, interest-only",
    preset: { loanType: "str" },
  },
  {
    slug: "fix-and-flip",
    href: "/fix-and-flip-loans",
    group: "Project",
    title: "Fix and flip loans",
    short: "Fix and flip loans",
    noun: "fix and flip",
    blurb: "Purchase and renovation funds in one short-term loan, with rehab draws.",
    bestFor: "Buy, renovate and sell within a year",
    qualifies: "The deal, after-repair value, your experience",
    term: "12–24 months, interest-only",
    preset: { loanType: "flip", purpose: "purchase" },
  },
  {
    slug: "hard-money",
    href: "/hard-money-loans",
    group: "Project",
    title: "Hard money loans",
    short: "Hard money loans",
    noun: "hard money",
    blurb: "Asset-based private loans that close in days, not months.",
    bestFor: "Speed, distressed property, short holds",
    qualifies: "The property's value and your exit plan",
    term: "6–24 months, interest-only",
    preset: { loanType: "flip" },
  },
  {
    slug: "bridge",
    href: "/bridge-loans",
    group: "Project",
    title: "Bridge loans",
    short: "Bridge loans",
    noun: "bridge",
    blurb: "Short-term capital to buy now and refinance or sell later.",
    bestFor: "Acquisitions before long-term financing",
    qualifies: "Equity, the property and the exit",
    term: "6–24 months",
    preset: { loanType: "bridge" },
  },
  {
    slug: "brrrr",
    href: "/brrrr-loans",
    group: "Project",
    title: "BRRRR loans",
    short: "BRRRR loans",
    noun: "BRRRR",
    blurb: "Rehab financing now, then a refinance into a long-term rental loan sized on the rent.",
    bestFor: "Buy, rehab, rent, refinance, repeat",
    qualifies: "ARV, rehab plan, then the rent",
    term: "Short-term rehab loan → 30-year DSCR",
    preset: { loanType: "rehab_rental", purpose: "purchase" },
  },
  {
    slug: "construction",
    href: "/ground-up-construction-loans",
    group: "Project",
    title: "Ground-up construction loans",
    short: "Construction loans",
    noun: "construction",
    blurb: "Land and build costs financed, released in draws as work is done.",
    bestFor: "New builds and spec homes",
    qualifies: "Plans, budget, completed value, track record",
    term: "12–24 months, draw schedule",
    preset: { loanType: "construction" },
  },
  {
    slug: "portfolio",
    href: "/rental-portfolio-loans",
    group: "Rental",
    title: "Rental portfolio loans",
    short: "Portfolio loans",
    noun: "portfolio",
    blurb: "Several rentals under one loan, one payment and one closing.",
    bestFor: "Investors with 5+ rentals",
    qualifies: "Combined rent across the portfolio",
    term: "5, 7, 10 or 30-year terms",
    preset: { loanType: "portfolio" },
  },
  {
    slug: "cash-out-refinance",
    href: "/investment-property-cash-out-refinance",
    group: "Rental",
    title: "Rental cash-out refinance",
    short: "Cash-out refinance",
    noun: "cash-out refinance",
    blurb: "Pull equity out of a rental to fund the next purchase.",
    bestFor: "Rentals with built-up equity",
    qualifies: "The property's rent (DSCR) and equity",
    term: "30-year fixed, ARMs, interest-only",
    preset: { loanType: "dscr", purpose: "cashout" },
  },
];

export const programBySlug = (slug: string) => PROGRAMS.find((p) => p.slug === slug);

export const CALCULATORS = [
  { href: "/calculators/dscr", sym: "÷", title: "DSCR calculator", text: "Rent against PITIA, the way lenders size a rental loan." },
  { href: "/calculators/fix-and-flip", sym: "Δ", title: "Fix and flip calculator", text: "Profit, cash needed and return on a flip, with loan costs." },
  { href: "/calculators/brrrr", sym: "↻", title: "BRRRR calculator", text: "How much cash comes back out at the refinance." },
  { href: "/calculators/rental-cash-flow", sym: "$", title: "Rental cash flow calculator", text: "Monthly cash flow, cap rate and cash-on-cash return." },
];
