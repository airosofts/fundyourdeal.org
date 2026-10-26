import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { RateAlert } from "@/components/RateAlert";
import { RatesTable } from "@/components/RatesTable";
import { CompareTable, DefinitionSection, FaqSection, Formula, Sources } from "@/components/sections";
import { ButtonLink, Container, Eyebrow, H2 } from "@/components/ui";
import { RATES_AS_OF, RATE_ROWS, RATE_SOURCES } from "@/lib/rates";

export const metadata: Metadata = {
  title: { absolute: `Investor Loan Rates for ${RATES_AS_OF} | Fund Your Deal` },
  description: "Investor loan rates for flips, bridge, construction and rentals from published lender pricing, what moves your rate, and what a point costs in dollars.",
  alternates: { canonical: "/rates" },
};

const A = "text-brand underline underline-offset-2";

const READ: [string, string][] = [
  [
    "Program",
    "Each row links to its program page. The two rental rows are long-term loans. Fix and flip, bridge and construction are short-term project loans: in 2025 HMDA data, nine in ten short-term investor loans (91%) charged interest only, and 71% had a 12-month term.",
  ],
  [
    "Typical rate",
    "Where pricing sits. For DSCR loans it’s the 30-year fixed range lenders published in late October 2026 for a strong-credit borrower at 75% LTV; weaker credit or thinner rent cover prices higher. The fix and flip range brackets the central 50% of rates on 2025 non-bank short-term loans reported under federal HMDA rules: a quarter of those loans came in cheaper, a quarter dearer.",
  ],
  [
    "Lowest advertised",
    "A lender’s best case: top credit, low leverage, strong rent coverage, a long prepayment penalty and, often, points paid at closing. Total Quality Lending says outright that its lowest rate includes discount points. Use it to see the floor, not to plan a deal.",
  ],
  ["Leverage", "The ceiling lenders print, measured against the property’s value (LTV) or the project’s total cost (LTC). Reaching the top of the range takes top credit and usually costs rate."],
  [
    "Note rate, not APR",
    "Every figure is the interest rate on the note. Points, lender fees and any prepayment penalty come on top, and HMDA’s public file carries no points or fees at all.",
  ],
  [
    "Who reports to HMDA",
    "The Home Mortgage Disclosure Act data covers lenders above a size floor. Any lender below 25 closed-end mortgage loans in one of the previous two years is exempt from reporting, so the smallest private lenders aren’t in the medians.",
  ],
  ["The date", `This is a ${RATES_AS_OF} snapshot. LendingOne notes that lenders can reprice DSCR loans several times in one day when markets are volatile.`],
];

const FACTORS: { group: string; items: [string, string][] }[] = [
  {
    group: "What you control",
    items: [
      [
        "Credit score",
        "On Defy’s DSCR rate page (October 23, 2026), dropping from a 680 score to 640 adds more than 2 points of rate in some pricing cells. LendingOne says scores of 720 and up generally earn the better pricing.",
      ],
      ["Points", "A point costs 1% of the loan amount up front and buys the rate down. On Total Quality Lending’s October 26 ladder, 1.625 more points took a 30-year rate from 7.25% to 6.875%."],
      [
        "Prepayment penalty",
        "Griffin says a longer penalty period lowers the rate and buying the penalty out raises it. Defy’s published rate assumes the five-year 5-4-3-2-1 step-down, and it offers a flat 5% option.",
      ],
      ["Track record", "On project loans, deals you’ve finished count. RCN prices flips by experience tier, and Lima One asks for one completed exit in the past 36 months."],
    ],
  },
  {
    group: "What the deal sets",
    items: [
      [
        "Rent coverage",
        "LendingOne calls a DSCR above 1.25 favorable and puts strong-coverage, high-credit files at 6% to 7%, against 8% to 10% or more when coverage is thin. Below 1.00, expect closer underwriting.",
      ],
      [
        "Leverage",
        "On rental loans, more equity means a smaller loss for the lender if things go wrong, and pricing follows. On short-term loans it barely registered: 2025 non-bank medians stayed within 0.2 points of each other from 60% loan-to-value or less up to 80%.",
      ],
      [
        "Property type",
        "Single-family rentals with steady tenants can earn better pricing, LendingOne says. Its range for an average investor is 7% to 9%; for short-term rentals, whose nightly income swings by season, it’s 7% to 10%.",
      ],
      ["Loan size", "Small loans cost the lender nearly as much to make as big ones. Among 2025 non-bank short-term loans, the median was 10.5% under $150,000 and 9.95% at $1 million or more."],
      ["Loan purpose", "Heavy rehab costs the most. Loans coded as home improvement carried an 11.25% median among 2025 non-bank short-term loans, the highest of any purpose."],
    ],
  },
  {
    group: "What the lender and the market set",
    items: [
      [
        "Type of lender",
        "The 2025 median at banks and credit unions was 7.5%, close to 3 points below non-banks. Non-banks still made 83% of those loans, and 29% of bank loans ran 36 months, a product non-banks almost never wrote.",
      ],
      ["Channel", "Among 2025 non-bank short-term loans, the ones arranged through a broker had a 10.95% median, against 10.24% for loans made directly."],
      ["Market conditions", "LendingOne lists funding costs, lending conditions and investor demand among the forces behind DSCR pricing. They move the base price before any adjustment above is applied."],
    ],
  },
];

// Total Quality Lending's published ladder (Oct 26, 2026), applied to a $372,000 loan. P&I: 30-year fixed.
const LADDER: string[][] = [
  ["7.25%", "0.125", "$465", "$2,537.70", "Starting point", "—"],
  ["7.125%", "0.625", "$2,325", "$2,506.23", "$1,860 more for $31.47 a month less", "59 months"],
  ["6.99%", "1.125", "$4,185", "$2,472.43", "$3,720 more for $65.27 a month less", "57 months"],
  ["6.875%", "1.75", "$6,510", "$2,443.78", "$6,045 more for $93.92 a month less", "64 months"],
];

// $296,000 flip loan, fully drawn, interest-only: points + rate × months.
const SHORT: string[][] = [
  ["6 months", "$19,240", "$20,720", "Quote A, by $1,480"],
  ["9 months", "$27,380", "$28,120", "Quote A, by $740"],
  ["12 months", "$35,520", "$35,520", "A tie"],
  ["18 months", "$51,800", "$50,320", "Quote B, by $1,480"],
];

const TRADES: { title: string; text: string }[] = [
  {
    title: "Buy the rate when you’ll keep the loan",
    text: "Points and a long prepayment penalty both cut a rental loan’s rate, and both only pay you back on a long hold. The ladder above breaks even at 57 to 64 months. A 5-4-3-2-1 penalty takes 4% of the balance if you pay off during year two: about $14,600 to $14,700 on that $372,000 loan at 7.25%.",
  },
  {
    title: "Skip the points when the hold is short",
    text: "On a flip or bridge loan, points are paid up front and spread over months, not years. Two points over a 6-month hold weigh as much as 4% a year of extra rate. Unless you’re sure you’ll hold past the month the quotes tie, take the higher rate and the fewer points.",
  },
  {
    title: "Pay for speed when the closing date won’t move",
    text: "Rental loans are cheaper but slower: Defy published 14–21 days and Griffin a 34-day average. Hard money and bridge lenders published 7 days to 14 business days. If the contract can’t wait, close on the short-term loan and refinance later. On $296,000 at 10.5% interest-only, that costs $2,590 a month, $7,770 for three months, plus 1–2 points ($2,960–$5,920).",
  },
  {
    title: "Pay for room when the exit could slip",
    text: "Every month a sale or refinance runs late costs a full month of interest: $2,590 on that same loan. A bridge loan with no prepayment penalty, as Lima One and Kiavi publish, or a shorter penalty on a rental loan, costs rate today and saves you if the plan changes.",
  },
];

const PLAN: string[][] = [
  ["Flip, sold inside 12 months", "Fewer points", "Each point costs more per year the shorter you hold"],
  ["Contract closes in under 3 weeks", "Speed", "Published flip, hard money and bridge closings ran 7 days to 14 business days"],
  ["BRRRR, refinancing within a year", "Low or no exit costs on the rehab loan", "Lima One lets flip borrowers push points to the exit"],
  ["Rental you’ll keep 5+ years", "Lowest rate", "The October 26 ladder paid back its points in 57–64 months"],
  ["Rental you may sell within 3 years", "Short prepayment penalty", "A 5-4-3-2-1 penalty charges 5%, 4% and 3% in years one to three"],
];

const FAQ = [
  {
    q: "Is the rate in the table what I’ll be quoted?",
    a: `No. The table shows where the market sat in ${RATES_AS_OF}, from published pricing and public loan data. Your quote turns on your credit band, your leverage, the property’s rent coverage or your track record, the prepayment terms and the points you pay. Fill in the 60-second form and a loan specialist comes back with a written rate on your actual deal.`,
  },
  {
    q: "Why do flip and bridge loans cost more than rental loans?",
    a: "They’re short loans on unfinished property, and private capital funds most of them: non-banks made 83% of 2025 short-term investor loans. In HMDA data, the short-term median ran about 2.6 points above the 7.375% median on 30-year investor loans. The lender is paid for speed, draws and the risk the project runs long, and expects its money back within about a year.",
  },
  {
    q: "Should I pay points on a hard money loan?",
    a: "Only if you’re confident you’ll hold past the month where the two quotes cross. On an interest-only loan, one point costs the same as 1% of rate for a full year, and held for 6 months it’s like 2% a year. On a $296,000 loan, a quote at 11% and 1 point beats 10% and 2 points right up to month 12, where they tie.",
  },
  {
    q: "How do I compare two investor loan quotes?",
    a: "Put them on the same footing first: same loan amount, leverage, lock period and prepayment penalty, with points and lender fees written out in dollars. Then total each one over the number of months you really expect to keep the loan. A lower rate with more points can lose on a short flip and win on a long rental hold.",
  },
  {
    q: "Can I lock an investor loan rate?",
    a: "Yes, once there’s a property and a set of terms. Defy publishes 30-, 45- and 60-day locks, with longer 75- to 90-day locks on some products if you pay an extension fee; Total Quality Lending prices its sample ladder on a 30-day lock. Wait for the appraisal and rent schedule before you lock, because a lower value or rent can drop you into a costlier tier.",
  },
  {
    q: "Did investor loan rates fall in 2025?",
    a: "In the public data, yes. The median on short-term investor loans came down about three-quarters of a point from 10.75% in 2024, and 39 of the 47 lenders with 100 or more loans in both years cut their median. On 30-year investor loans the median slipped from 7.625% to 7.375%. HMDA figures for all of 2026 arrive in 2027.",
  },
  {
    q: "Why would a bank quote less than a private lender?",
    a: "Banks and credit unions priced 2025 short-term investor loans at a 7.5% median, close to 3 points below non-bank lenders. The catch is reach and product. Banks wrote roughly one loan in seven, and 29% of theirs ran 36 months, a different loan from the 12-month interest-only note most flips close on.",
  },
  {
    q: "Do short-term rental loans carry higher rates?",
    a: "Usually by a little. LendingOne’s typical-investor range of 7% to 9% widens to 7% to 10% for nightly rentals, since booking income rises and falls with the seasons. The bar is higher too: Lima One’s short-term rental loan needs a 700 credit score, lends up to 75% LTV to buy and caps cash-outs at 70%.",
  },
  {
    q: "How often does this page change?",
    a: `Every month, when we re-pull lenders’ published pricing and the newest federal loan data. What you see now dates from ${RATES_AS_OF}, and every row of the table names its basis. Lenders can reprice within a single day, so read the table as a map of the market and get a written rate on your own deal.`,
  },
];

const EXTRA_SOURCES = [
  { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
  { label: "Kiavi — Fix and flip loans", url: "https://www.kiavi.com/loans/fix-and-flip" },
  { label: "LendingOne — Fix and flip loans", url: "https://lendingone.com/loan-types/fix-and-flip-loans/" },
  { label: "LendingOne — Bridge loans", url: "https://lendingone.com/loan-types/bridge-loans/" },
  { label: "Easy Street Capital — EasyFix", url: "https://www.easystreetcap.com/easyfix/" },
  { label: "New Silver — Fix and flip loans", url: "https://newsilver.com/fix-and-flip-loans/" },
  { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
  { label: "Lima One — Short-term rental loans", url: "https://www.limaone.com/short-term-rental-loans/" },
];

export default function Page() {
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Rates" }]} eyebrow={`Updated monthly · ${RATES_AS_OF}`} title="Investor loan rates, and what sets yours">
        <p>
          Where investor loan rates sat in {RATES_AS_OF} for fix and flip, bridge, construction and rental loans, from lenders’ published pricing and federal loan data. Most
          rental loans here are priced on the{" "}
          <Link href="/glossary#dscr" className={A}>
            debt service coverage ratio (DSCR)
          </Link>
          : the property’s rent divided by its full monthly payment. Below the table: what moves your number, and what a point costs in dollars.
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
            Get my rate
          </ButtonLink>
          <span className="text-sm text-muted">Takes about 60 seconds. No credit pull to apply.</span>
        </div>
      </Container>

      <DefinitionSection
        id="read"
        eyebrow="Reading the table"
        heading="Four columns. Check the date first."
        intro="Each column answers a different question, and none of them is a quote. Here’s what sits behind each one."
        rows={READ}
      />

      <section id="factors" className="scroll-mt-20 border-t border-line">
        <Container className="flex flex-col gap-10 py-[88px]">
          <div className="flex max-w-[700px] flex-col gap-3">
            <Eyebrow>What moves your rate</Eyebrow>
            <H2>A base price, then an adjustment for every risk in the file.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              Some of it you can change before you apply. Some of it is fixed by the deal. The rest belongs to the lender and the day you lock. Unless noted, the 2025 figures are
              from federal HMDA loan data.
            </p>
          </div>
          <div className="grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
            {FACTORS.map((g) => (
              <div key={g.group} className="flex flex-col">
                <h3 className="border-b-2 border-ink pb-3 font-mono text-xs uppercase tracking-[0.08em]">{g.group}</h3>
                <dl className="flex flex-col">
                  {g.items.map(([t, d]) => (
                    <div key={t} className="border-b border-line py-4">
                      <dt className="text-[17px] font-semibold">{t}</dt>
                      <dd className="mt-1 text-[15px] leading-relaxed text-ink-2">{d}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="points" className="scroll-mt-20 border-t border-line bg-white">
        <Container className="flex flex-col gap-8 py-[88px]">
          <div className="flex max-w-[740px] flex-col gap-3">
            <Eyebrow>What a point costs</Eyebrow>
            <H2>A point is 1% of the loan. How long you keep the loan decides if it pays.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              On a $372,000 rental refinance, one{" "}
              <Link href="/glossary#points" className={A}>
                point
              </Link>{" "}
              is $3,720. Total Quality Lending published the ladder below on October 26, 2026 for one scenario: 800 credit, 75% LTV, a 1.00 DSCR, 30-year fixed, a 5-year
              prepayment penalty. Here it is applied to that loan.
            </p>
          </div>
          <CompareTable columns={["Rate", "Points", "Paid at closing", "Monthly P&I", "Versus 7.25%", "Pays back in"]} rows={LADDER} highlight={-1} />
          <p className="max-w-[760px] text-[15px] leading-relaxed text-ink-2">
            Loan size doesn’t move the break-even. The points and the monthly saving both grow in step with the balance, so this ladder pays back in about five years whether you
            borrow $150,000 or $1.5 million. That’s also when this scenario’s 5-year prepayment penalty ends. Sell or refinance sooner, and you’ve bought a rate you didn’t keep
            long enough to use.
          </p>

          <div className="flex max-w-[740px] flex-col gap-3 pt-6">
            <h3 className="text-[23px] font-semibold tracking-[-0.02em]">On a flip, the same point costs far more per year.</h3>
            <p className="text-[17px] leading-relaxed text-ink-2">
              An interest-only loan gives points months, not years, to earn back. Two quotes on one $296,000 flip loan, both inside the published ranges: Quote A at 11% with 1
              point, Quote B at 10% with 2 points. For simple math the full balance is drawn on day one; with rehab draws, the interest runs lower.
            </p>
          </div>
          <Formula>Points ÷ (months held ÷ 12) = extra rate per year · 2 points over 6 months = 4% a year</Formula>
          <CompareTable columns={["Months held", "Quote A: 11%, 1 point", "Quote B: 10%, 2 points", "Cheaper"]} rows={SHORT} highlight={-1} />
          <p className="max-w-[760px] text-[15px] leading-relaxed text-ink-2">
            One extra point buys 1% off the rate, and 1% of rate for a year costs exactly one point, so the quotes tie at month 12 ($2,960 + $32,560 against $5,920 + $29,600).
            In 2025 HMDA data, 71% of short-term investor loans were written for exactly 12 months. Flip lenders published 0 to 2 points in October 2026; New Silver lists 1–1.75%,
            Easy Street charges a $1,995 document fee on top, and Lima One can defer points until you exit.
          </p>
        </Container>
      </section>

      <section id="trade-offs" className="scroll-mt-20 border-t border-line">
        <Container className="flex flex-col gap-10 py-[88px]">
          <div className="flex max-w-[700px] flex-col gap-3">
            <Eyebrow>Rate, points or speed</Eyebrow>
            <H2>A lower rate, fewer points, a faster close: each one costs you something.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">Spend where your deal can’t give ground. The figures below reuse the two loans above.</p>
          </div>
          <div className="grid gap-x-8 gap-y-2 [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
            {TRADES.map((t, i) => (
              <div key={t.title} className="grid grid-cols-[44px_1fr] gap-3 border-t border-line py-5">
                <span className="font-mono text-[15px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="text-[17px] font-semibold">{t.title}</div>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-2">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[23px] font-semibold tracking-[-0.02em]">Match the trade to the plan.</h3>
            <CompareTable columns={["Your plan", "Spend on", "Why"]} rows={PLAN} highlight={1} />
          </div>
          <p className="text-[15px] text-ink-2">
            Price a flip with points and months held in the{" "}
            <Link href="/calculators/fix-and-flip" className="font-semibold underline underline-offset-4">
              fix and flip calculator
            </Link>
            , or read{" "}
            <Link href="/guides/investor-loan-points-and-fees" className="font-semibold underline underline-offset-4">
              investor loan points and fees
            </Link>{" "}
            for extension and exit fees.
          </p>
        </Container>
      </section>

      <section className="bg-ink text-paper">
        <Container className="grid items-center gap-10 py-[72px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr))]">
          <div className="flex flex-col gap-3">
            <Eyebrow tone="lime">Rate alerts</Eyebrow>
            <h2 className="text-[clamp(28px,3vw,38px)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">Get one email when investor rates move.</h2>
          </div>
          <RateAlert />
        </Container>
      </section>

      <FaqSection heading="Investor loan rate questions" items={FAQ}>
        <p className="font-mono text-xs leading-relaxed text-muted">
          These ranges describe the market. They aren’t a loan offer, a promise to lend or a locked rate. Every loan is a business-purpose loan on investment property, subject
          to underwriting and approval.
        </p>
      </FaqSection>
      <Sources sources={[...RATE_SOURCES, ...EXTRA_SOURCES]} updated="2026-10-26" />
    </>
  );
}
