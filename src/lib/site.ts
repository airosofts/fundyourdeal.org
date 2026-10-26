// Brand and site structure in one place. Renaming the brand = change SITE.
// Investment property (non-owner-occupied) loans only.
import type { LoanType, Purpose } from "./leadSpec";

const url = (process.env.NEXT_PUBLIC_SITE_URL || "https://fundyourdeal.org").replace(/\/$/, "");

export const SITE = {
  name: "Fund Your Deal",
  domain: "fundyourdeal.org",
  url,
  tagline: "Deal on the clock? Fund the flip, bridge, BRRRR or build, then refinance into a rental loan.",
  email: "hello@fundyourdeal.org",
  cta: "Fund My Deal",
  // Search engines stay out until launch: set NEXT_PUBLIC_INDEXABLE=true on the live domain.
  indexable: process.env.NEXT_PUBLIC_INDEXABLE === "true",
};

export const NAV = [
  { href: "/loans", label: "Loan programs" },
  { href: "/calculators", label: "Deal calculators" },
  { href: "/rates", label: "Rates" },
  { href: "/guides", label: "Investor guides" },
  { href: "/how-it-works", label: "How funding works" },
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
    slug: "fix-and-flip",
    href: "/fix-and-flip-loans",
    group: "Project",
    title: "Fix and flip loans",
    short: "Fix and flip loans",
    noun: "fix and flip",
    blurb: "One short-term loan buys the house and pays for the rehab in draws. The sale pays it off.",
    bestFor: "Rehabs you plan to sell, not keep",
    qualifies: "Price, rehab budget, after-repair value",
    term: "6–24 months, interest-only",
    preset: { loanType: "flip", purpose: "purchase" },
  },
  {
    slug: "hard-money",
    href: "/hard-money-loans",
    group: "Project",
    title: "Hard money loans",
    short: "Hard money loans",
    noun: "hard money",
    blurb: "Asset-based money for the deal a bank won't wait for: auctions, distressed buys, tight contract dates.",
    bestFor: "Fast closings on property banks pass on",
    qualifies: "The property's value and how you'll repay",
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
    blurb: "Close now on a property that needs little work, then sell it or refinance into a rental loan.",
    bestFor: "Buying before the long-term loan is ready",
    qualifies: "Value, your equity and the exit",
    term: "12–24 months, often no prepayment penalty",
    preset: { loanType: "bridge" },
  },
  {
    slug: "brrrr",
    href: "/brrrr-loans",
    group: "Project",
    title: "BRRRR loans",
    short: "BRRRR loans",
    noun: "BRRRR",
    blurb: "Rehab money for a house you'll keep, then a refinance on the rent that pulls your cash back out.",
    bestFor: "Buy, rehab, rent, refinance, repeat",
    qualifies: "After-repair value and scope, then the rent",
    term: "Rehab loan, then a 30-year rental refinance",
    preset: { loanType: "rehab_rental", purpose: "purchase" },
  },
  {
    slug: "construction",
    href: "/ground-up-construction-loans",
    group: "Project",
    title: "Ground-up construction loans",
    short: "Construction loans",
    noun: "construction",
    blurb: "Fund the lot and the build: part of the land at closing, hard costs in inspected draws.",
    bestFor: "Spec homes, infill lots, build-to-rent",
    qualifies: "Plans, budget, finished value, build record",
    term: "12–24 months, paid out in draws",
    preset: { loanType: "construction" },
  },
  {
    slug: "dscr",
    href: "/dscr-loans",
    group: "Rental",
    title: "DSCR rental loans",
    short: "DSCR loans",
    noun: "DSCR",
    blurb: "Keep it as a rental. The debt service coverage ratio (DSCR), rent against the payment, qualifies the loan instead of your tax returns.",
    bestFor: "Holding 1–4 unit rentals for years",
    qualifies: "Debt service coverage ratio: rent ÷ payment",
    term: "30-year fixed or ARM, interest-only options",
    preset: { loanType: "dscr" },
  },
  {
    slug: "short-term-rental",
    href: "/short-term-rental-loans",
    group: "Rental",
    title: "Short-term rental loans",
    short: "Short-term rental loans",
    noun: "short-term rental",
    blurb: "Hold an Airbnb or VRBO on a long-term loan sized on nightly income, projected on a purchase or booked on a refinance.",
    bestFor: "Vacation homes and nightly rentals",
    qualifies: "Projected or trailing-12-month booking income",
    term: "Fixed-rate, ARM or interest-only",
    preset: { loanType: "str" },
  },
  {
    slug: "cash-out-refinance",
    href: "/investment-property-cash-out-refinance",
    group: "Rental",
    title: "Rental cash-out refinance",
    short: "Cash-out refinance",
    noun: "cash-out refinance",
    blurb: "Pull your cash back out of a rental you own and put it into the next deal.",
    bestFor: "Rentals with equity sitting idle",
    qualifies: "Appraised value and the debt service coverage ratio",
    term: "30-year fixed or ARM, most to 75% LTV",
    preset: { loanType: "dscr", purpose: "cashout" },
  },
  {
    slug: "portfolio",
    href: "/rental-portfolio-loans",
    group: "Rental",
    title: "Rental portfolio loans",
    short: "Portfolio loans",
    noun: "portfolio",
    blurb: "Roll a stack of rentals into one loan: one closing, one payment, one maturity date.",
    bestFor: "Owners of several rentals",
    qualifies: "Combined rent across every property",
    term: "30-year, or 5-, 7- or 10-year balloon",
    preset: { loanType: "portfolio" },
  },
];

export const programBySlug = (slug: string) => PROGRAMS.find((p) => p.slug === slug);

export const CALCULATORS = [
  { href: "/calculators/fix-and-flip", sym: "Δ", title: "Fix and flip profit calculator", text: "Before you offer: the loan the ARV cap allows, your cash to close and carry, and the profit left after every cost." },
  { href: "/calculators/brrrr", sym: "↻", title: "BRRRR refinance calculator", text: "Rehab loan in, rental loan out: how much of your cash the refinance pulls back, and what the rent pays after." },
  { href: "/calculators/dscr", sym: "÷", title: "DSCR loan calculator", text: "Debt service coverage ratio (DSCR): the rent measured against the full payment, and the largest loan that rent will carry." },
  { href: "/calculators/rental-cash-flow", sym: "$", title: "Rental property cash flow calculator", text: "Keeping it as a rental? What it pays you each month once every cost is out, with cap rate and cash-on-cash." },
];
