// Investor loan rate ranges as published by lenders and in public data.
// One dataset for every page that shows rates. Update monthly:
// docs/research/loan-terms-2026-10.md has the sources for each figure.

export const RATES_AS_OF = "October 2026";

export type RateRow = {
  program: string;
  href: string;
  typical: string; // typical published range
  lowest: string; // lowest advertised rate
  leverage: string;
  basis: string; // what the typical figure is based on
};

export const RATE_ROWS: RateRow[] = [
  {
    program: "DSCR 30-year fixed",
    href: "/dscr-loans",
    typical: "6.25%–7.875%",
    lowest: "5.39%",
    leverage: "Up to 80–85% LTV",
    basis: "Published DSCR pricing grids, Sept–Oct 2026; 2025 median investor rate 7.375% (HMDA)",
  },
  {
    program: "Short-term rental DSCR",
    href: "/short-term-rental-loans",
    typical: "7%–10%",
    lowest: "—",
    leverage: "Up to 75–80% LTV",
    basis: "Lender-published STR range, Sept 2026",
  },
  {
    program: "Fix and flip",
    href: "/fix-and-flip-loans",
    typical: "9.5%–11%",
    lowest: "7.5%",
    leverage: "85–100% of purchase, 100% of rehab",
    basis: "Middle half of non-bank short-term investor loans, 2025 HMDA (non-bank median 10.25%; all lenders 9.99%)",
  },
  {
    program: "Bridge",
    href: "/bridge-loans",
    typical: "From 8.25%",
    lowest: "8.25%",
    leverage: "70–85% LTV",
    basis: "Lowest advertised bridge rates, Oct 2026",
  },
  {
    program: "Ground-up construction",
    href: "/ground-up-construction-loans",
    typical: "From 8.99%",
    lowest: "8.99%",
    leverage: "82.5–90% of cost",
    basis: "Lowest advertised construction rates, Oct 2026",
  },
];

export const RATE_SOURCES = [
  { label: "Defy Mortgage — DSCR loan rates (Sept 21, 2026)", url: "https://defymortgage.com/dscr-loan-rates/" },
  { label: "Griffin Funding — DSCR loans (Oct 14, 2026)", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
  { label: "LendingOne — How DSCR rates are determined (Sept 22, 2026)", url: "https://lendingone.com/insight/how-are-dscr-loan-interest-rates-determined/" },
  { label: "Hard money loan rates 2026 — HMDA analysis", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
  { label: "Roc Capital — Single-property rentals", url: "https://roccapital.com/single-property-rentals" },
  { label: "Lima One — Fix and flip", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
  { label: "Kiavi — Bridge loans", url: "https://www.kiavi.com/loans/bridge-loans" },
  { label: "Civic — Product overview", url: "https://civicfs.com/product-overview/" },
];
