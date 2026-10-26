import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { RateAlert } from "@/components/RateAlert";
import { RatesTable } from "@/components/RatesTable";
import { CompareTable, DefinitionSection, FaqSection, Sources } from "@/components/sections";
import { ButtonLink, Container, Eyebrow, H2 } from "@/components/ui";
import { RATES_AS_OF, RATE_ROWS, RATE_SOURCES } from "@/lib/rates";

export const metadata: Metadata = {
  title: { absolute: `Investor Loan Rates Today (${RATES_AS_OF}) | Fund Your Deal` },
  description: "Investor loan rates today: DSCR, short-term rental, fix and flip, bridge and construction ranges from published lender pricing, and what moves your rate.",
  alternates: { canonical: "/rates" },
};

const READ: [string, string][] = [
  [
    "Typical rate",
    "Where most published pricing sits. For DSCR loans, it’s the range on lenders’ published 30-year pricing grids. For fix and flip, it’s the middle half of 2025 non-bank short-term investor loans in federal HMDA data: 9.5% to 11%, around a 10.25% non-bank median (9.99% across all lenders).",
  ],
  [
    "Lowest advertised",
    "The best-case starting rate a lender advertises, usually for top credit, low leverage, a strong rent-to-payment ratio and, on rental loans, a long prepayment penalty. Treat it as a floor, not a likely quote.",
  ],
  ["Leverage", "The most lenders published that they’ll lend, as a share of value (LTV) or of cost (LTC). Asking for the top of the range usually costs more in rate."],
  ["Basis and date", "Every row says where its figure comes from and when. Rates change daily; this table is a monthly snapshot of where the market sits."],
  [
    "HMDA data",
    "Under the Home Mortgage Disclosure Act, lenders above a size threshold report the mortgages they make, including the note rate. Lenders with fewer than 25 closed-end mortgages in either of the two prior years don’t report, and points and fees generally aren’t in the file.",
  ],
  ["Note rate, not APR", "The table shows the interest rate on the note. Points and fees come on top, and on a 6- to 12-month loan two points cost about as much as two months of interest or more."],
];

const FACTORS: [string, string][] = [
  [
    "Credit score",
    "Rate sheets price in 20-point bands, and the biggest steps sit at the bottom. On Defy’s September 2026 grid at 75% LTV, a 640 score priced at 7.875% against 6.25% for 680 and up. LendingOne says 720 and above generally earns better rates.",
  ],
  [
    "Leverage",
    "More equity, less risk. Defy’s grid shows it too: at 80% LTV only 720+ scores get a printed rate, and every 85% loan is priced by quote. On short-term loans leverage mattered less in 2025 HMDA data: non-bank medians sat near 10.25% everywhere from 60% or less up to 80% combined LTV.",
  ],
  [
    "Rent coverage (DSCR)",
    "LendingOne calls ratios above 1.25 favorable and quotes 6% to 7% for strong DSCR and high credit, against 8% to 10%+ for lower-DSCR borrowers. Below 1.00, expect closer underwriting and less leverage.",
  ],
  ["Prepayment penalty", "A longer penalty buys a lower rate. Defy’s grid builds in the 5-year 5-4-3-2-1 step-down; choosing a shorter penalty, or none, costs more in rate."],
  ["Points", "Points are interest paid up front to lower the rate; a lender credit does the reverse. On a long-term loan, points pay only if you keep the loan past the break-even month."],
  [
    "Experience",
    "On flip, bridge and construction loans, more completed projects in the last two to three years earns better pricing and leverage; RCN publishes experience tiers. HMDA doesn’t record experience, so it doesn’t show in the public medians.",
  ],
  [
    "Property type",
    "Stable single-family rentals can earn better pricing, LendingOne says, while it puts short-term rentals at 7% to 10% against 7% to 9% for a typical investor. Condos, 2–4 units and rural property can cost more or get lower leverage.",
  ],
  ["Loan size", "Small loans can carry higher rates because the lender’s fixed costs are spread over less balance. In 2025 HMDA data, non-bank short-term loans under $150,000 had a 10.5% median, against 9.95% at $1 million and up."],
  [
    "Loan purpose",
    "On short-term loans, purpose moved the rate more than leverage did. 2025 non-bank medians: 9.625% for cash-out refinances, 9.99% for rate-and-term refinances, 10.39% for purchases and 11.25% for loans coded as home improvement.",
  ],
  [
    "Type of lender",
    "Banks and credit unions had a 7.5% median on 2025 short-term investor loans, against 10.25% at non-bank lenders. Non-banks made about 84% of those loans, though, and banks’ loans ran longer: 29% had 36-month terms.",
  ],
];

const PER_100K: string[][] = [
  ["6.25%", "Low end of published DSCR grids", "$616", "30-year, principal and interest"],
  ["7.375%", "2025 median, 30-year investor loans (HMDA)", "$691", "30-year, principal and interest"],
  ["7.875%", "High end of published DSCR grids", "$725", "30-year, principal and interest"],
  ["7.5%", "2025 bank median, short-term investor loans", "$625", "Interest-only"],
  ["10.25%", "2025 non-bank median, short-term investor loans", "$854", "Interest-only"],
  ["11%", "Top of the middle half, non-bank short-term loans", "$917", "Interest-only"],
];

const FAQ = [
  {
    q: "Are these rates a quote?",
    a: "No. They are this month’s market ranges, so you can see where rates sit. Your rate depends on your credit, leverage, the property’s DSCR or your experience, the prepayment terms and any points. Get your own rate with the 60-second form, then a loan specialist calls with written terms.",
  },
  {
    q: "Why do investor loans cost more than a conventional mortgage?",
    a: "Most investor loans don’t verify personal income and aren’t sold to Fannie Mae or Freddie Mac, so lenders price in more risk. LendingOne quotes 6% to more than 10% for DSCR loans against 5% to 8%+ for conventional investor loans. In exchange you qualify on the property’s rent, can close in an LLC and aren’t held to conventional property limits.",
  },
  {
    q: "Why are fix and flip rates so much higher?",
    a: "They're short-term, interest-only loans on properties that need work, funded by private capital. Lenders are paid for speed, rehab draws and project risk, and the loan is meant to be repaid within a year or two. The 2025 HMDA median for short-term investor loans was 9.99%, against 7.375% for 30-year investor loans.",
  },
  {
    q: "What is a good DSCR loan rate right now?",
    a: "Published 30-year DSCR grids ran about 6.25% to 7.875% in September–October 2026, and the 2025 median for 30-year investor loans was 7.375%. A quote near or below that median is in line with the market for a typical file. Compare quotes at the same leverage, points and prepayment penalty, or you’re comparing different loans.",
  },
  {
    q: "Did investor loan rates fall in 2025?",
    a: "Yes, in the public loan data. The median rate on short-term investor loans in HMDA data fell from 10.75% in 2024 to 9.99% in 2025, and 39 of the 47 lenders with at least 100 loans in both years lowered their median. The median on 30-year investor loans fell from 7.625% to 7.375%. Full-year 2026 data won’t be public until 2027.",
  },
  {
    q: "Do banks charge less than private lenders for investor loans?",
    a: "On rate, usually. In 2025 HMDA data, banks and credit unions had a 7.5% median on short-term investor loans, against 10.25% at non-bank lenders. But banks made only about 14% of those loans, and 29% of their loans had 36-month terms, while almost none of the non-bank loans did. Non-bank lenders are where most flips and bridge loans get funded.",
  },
  {
    q: "How much is one point, and is it worth paying?",
    a: "One point is 1% of the loan: $2,500 on a $250,000 loan. It buys the rate down, usually by a fraction of a percent; the exact trade is on the lender’s rate sheet. Divide the cost by the monthly saving to find your break-even month. If you might sell or refinance before then, keep the cash.",
  },
  {
    q: "Can I lock an investor loan rate?",
    a: "Yes, once there’s a property and terms. Defy, for example, publishes lock periods of 30, 45 and 60 days, plus 75- to 90-day locks on some products at an added fee. Lock after the appraisal supports your loan-to-value and DSCR, because a lower value or rent can move you into a different pricing tier.",
  },
  {
    q: "Are short-term rental loan rates higher?",
    a: "Usually a little. LendingOne quotes 7% to 10% for short-term rentals, against 7% to 9% for an average investor, because booking income is seasonal. Lenders ask for more on credit and equity too: Lima One wants a 700 score and caps short-term rental loans at 75% loan-to-value on a purchase and 70% on cash-out.",
  },
  {
    q: "How often is this page updated?",
    a: `Monthly, from lenders’ published pricing and the latest public loan data. The current figures are from ${RATES_AS_OF}, and each row shows its basis and date. Rates change daily, so between updates treat the table as a guide to where the market sits, and get a written rate on your own scenario.`,
  },
];

const EXTRA_SOURCES = [
  { label: "Lima One — Short-term rental loans", url: "https://www.limaone.com/short-term-rental-loans/" },
  { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
];

export default function Page() {
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Rates" }]} title="Investor loan rates today">
        <p>
          Where investor loan rates sit in {RATES_AS_OF}, from lenders’ published pricing and public loan data, with the sources: DSCR rental loans, which qualify on the{" "}
          <Link href="/glossary#dscr" className="text-brand underline underline-offset-2">
            debt service coverage ratio
          </Link>{" "}
          (the property’s monthly rent ÷ its monthly payment, PITIA), plus short-term rental, fix and flip, bridge and construction loans.
        </p>
      </PageIntro>

      <Container className="flex flex-col gap-6 pb-[72px] pt-4">
        <RatesTable />
        <dl className="grid gap-x-8 gap-y-1 text-sm [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
          {RATE_ROWS.map((r) => (
            <div key={r.program} className="border-t border-line py-3">
              <dt className="font-semibold">{r.program}</dt>
              <dd className="text-ink-2">{r.basis}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap items-center gap-4">
          <ButtonLink href="/get-funding" size="lg">
            Get your rate
          </ButtonLink>
          <span className="text-sm text-muted">About 60 seconds · no credit pull to apply.</span>
        </div>
      </Container>

      <DefinitionSection
        id="read"
        eyebrow="How to read the table"
        heading="Three columns, one date."
        intro="Each figure answers a different question. Typical is where pricing clusters, lowest advertised is the best case, and leverage is how much lenders will lend at all."
        rows={READ}
      />

      <section id="factors" className="scroll-mt-20 border-t border-line">
        <Container className="flex flex-col gap-10 py-[88px]">
          <div className="flex max-w-[680px] flex-col gap-3">
            <Eyebrow>What moves your rate</Eyebrow>
            <H2>Ten things investor lenders price in.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              Lenders start from a base rate that follows their own funding costs, and LendingOne notes they can reprice several times a day when markets are volatile. Then they
              adjust for each risk in the file.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-2 [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
            {FACTORS.map(([t, d], i) => (
              <div key={t} className="grid grid-cols-[44px_1fr] gap-3 border-t border-line py-5">
                <span className="font-mono text-[15px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="text-[17px] font-semibold">{t}</div>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-2">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-ink-2">
            DSCR pricing in depth, with points and penalty break-evens:{" "}
            <Link href="/dscr-loans/rates" className="font-semibold underline underline-offset-4">
              DSCR loan rates
            </Link>
            . Terms defined:{" "}
            <Link href="/glossary" className="font-semibold underline underline-offset-4">
              investor loan glossary
            </Link>
            .
          </p>
        </Container>
      </section>

      <section id="per-100k" className="scroll-mt-20 border-t border-line bg-white">
        <Container className="flex flex-col gap-8 py-[88px]">
          <div className="flex max-w-[720px] flex-col gap-3">
            <Eyebrow>Rates in dollars</Eyebrow>
            <H2>What each rate costs per $100,000 borrowed.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              Multiply by your loan size: a $250,000 DSCR loan at 7.375% is 2.5 × $691, about $1,727 a month in principal and interest. Taxes, insurance and any HOA dues come on
              top.
            </p>
          </div>
          <CompareTable columns={["Rate", "Where it comes from", "Monthly per $100,000", "Payment type"]} rows={PER_100K} highlight={2} />
          <p className="max-w-[760px] text-[15px] leading-relaxed text-ink-2">
            The interest-only payments look close to the amortizing ones, but they repay nothing. Over 12 months, $100,000 at 10.25% interest-only costs $10,250 and still owes
            $100,000. The same $100,000 on a 30-year loan at 7.375% costs $8,288 in payments, of which about $945 pays down the balance. That gap is why short-term loans are
            built to be repaid fast, and why a sale or refinance that slips by a few months gets expensive.
          </p>
        </Container>
      </section>

      <section className="bg-ink text-paper">
        <Container className="grid items-center gap-10 py-[72px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr))]">
          <div className="flex flex-col gap-3">
            <Eyebrow tone="lime">Rate alerts</Eyebrow>
            <h2 className="text-[clamp(28px,3vw,38px)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">Hear when investor rates move.</h2>
          </div>
          <RateAlert />
        </Container>
      </section>

      <FaqSection heading="Rate questions" items={FAQ}>
        <p className="font-mono text-xs leading-relaxed text-muted">
          Rate ranges are for information only and are not an offer of credit, a commitment to lend or a rate lock. Loans are business-purpose loans for
          investment property and are subject to each lender&apos;s underwriting and approval.
        </p>
      </FaqSection>
      <Sources sources={[...RATE_SOURCES, ...EXTRA_SOURCES]} updated="2026-10-23" />
    </>
  );
}
