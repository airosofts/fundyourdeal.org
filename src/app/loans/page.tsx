import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageIntro } from "@/components/PageIntro";
import { CompareTable, ExampleCard, FaqSection, Sources } from "@/components/sections";
import { ButtonLink, Container, Eyebrow, H2 } from "@/components/ui";
import { PROGRAMS, SITE, type ProgramGroup } from "@/lib/site";
import { alternatesFor } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Real Estate Investor Loans by Deal Type | Fund Your Deal" },
  description: "Real estate investor loans, project loans first: fix and flip, hard money, bridge, BRRRR and construction, then the rental loan you refinance into.",
  alternates: alternatesFor("/loans"),
};

const A = "text-brand underline underline-offset-2";

// Project loans lead; rental loans are the hold or the exit.
const GROUPS: { group: ProgramGroup; id: string; eyebrow: string; title: string; text: ReactNode }[] = [
  {
    group: "Project",
    id: "project-loans",
    eyebrow: "Project loans",
    title: "Get it bought, fixed or built.",
    text: "Short-term, interest-only money sized on the deal itself: what you pay, what the work costs and what the property is worth once it’s done. Lenders published 6- to 24-month terms in October 2026, and a sale or a refinance pays the loan off.",
  },
  {
    group: "Rental",
    id: "rental-loans",
    eyebrow: "Rental loans",
    title: "The hold, or the way out.",
    text: (
      <>
        Long-term loans for a property that’s finished and earning rent. Buy a rental outright, refinance out of a flip, bridge or construction loan, or pull your cash back out
        of a house you already own. Each one is sized on rent coverage (the{" "}
        <Link href="/glossary#dscr" className={A}>
          DSCR
        </Link>
        ), not your W-2s, and can close in an LLC.
      </>
    ),
  },
];

const SIZING: { term: string; name: string; href: string; formula: string; text: string }[] = [
  {
    term: "LTV",
    name: "Loan-to-value",
    href: "/glossary#ltv",
    formula: "Loan ÷ value today",
    text: "The rental and bridge test. On a purchase, rental lenders published up to 80% of value, and 85% at a few for scores of 720–740 or higher. On a cash-out refinance, 75% was the most common cap.",
  },
  {
    term: "LTC",
    name: "Loan-to-cost",
    href: "/glossary#ltc",
    formula: "Loan ÷ (price + budget)",
    text: "The project test, because today’s value ignores the money you’re about to spend. Flip lenders published 85–100% of the purchase plus all of the rehab. Construction lenders published 82.5–90% of total cost.",
  },
  {
    term: "ARV",
    name: "After-repair value",
    href: "/glossary#arv",
    formula: "Appraised value once the work is done",
    text: "The ceiling on a project loan. Flip lenders capped the whole loan at 70–80% of ARV, or 60–70% for newer investors and heavy rehabs at some. Construction lenders capped it at 65–75% of the finished value.",
  },
  {
    term: "DSCR",
    name: "Debt service coverage ratio",
    href: "/glossary#dscr",
    formula: "Monthly rent ÷ PITIA",
    text: "The rental test. PITIA is principal, interest, taxes, insurance and association dues. At 1.00 the rent pays exactly that. Conservative lenders published 1.00–1.05 minimums; others go to 0.75–0.80, and a few offer no-ratio loans.",
  },
];

const FLIP_EXAMPLE = {
  title: "PROJECT LOAN · THE ARV CAP DECIDES IT",
  rows: [
    ["Purchase price", "$250,000"],
    ["Rehab budget", "$110,000"],
    ["After-repair value", "$420,000"],
    ["Test 1: 90% of price + all of the rehab", "$335,000"],
    ["Test 2: 75% of ARV", "$315,000"],
    ["Loan: the lower of the two", "$315,000"],
  ] as [string, string][],
  result: { label: "Cash you bring at purchase", value: "$45,000" },
  note: "Loan-to-cost is 87.5% ($315,000 ÷ $360,000). With $110,000 held back for draws, the purchase advance drops from $225,000 to $205,000, so you bring $45,000 instead of $25,000, plus closing costs. 90% of price and 75% of ARV are caps several flip lenders published in October 2026.",
};

const REFI_EXAMPLE = {
  title: "RENTAL REFINANCE · THE RENT DECIDES IT",
  rows: [
    ["Appraised value after rehab", "$420,000"],
    ["New loan at 75% LTV", "$315,000"],
    ["Market rent", "$2,950 / mo"],
    ["Principal and interest, 7.375%, 30-year", "$2,176"],
    ["Taxes $340 + insurance $150", "$490"],
    ["PITIA", "$2,666"],
  ] as [string, string][],
  result: { label: "DSCR ($2,950 ÷ $2,666)", value: "1.11" },
  note: "1.11 clears the 1.00–1.05 floors at conservative lenders. At $2,600 rent it falls to 0.98, and you’d need a lender that goes below 1.00. 7.375% was the 2025 median rate on 30-year investor loans in HMDA data. The new loan just repays the $315,000 rehab loan, before closing costs, and hands back none of your $45,000.",
  dscr: 1.11,
};

// Published lender ranges, pulled October 19, 2026 (docs/research/loan-terms-2026-10.md).
const TERMS: string[][] = [
  [
    "Fix and flip / hard money",
    "600–660",
    "85–100% of the price and 100% of rehab, with the total capped at 70–80% of ARV",
    "$50K–$5M",
    "6–24 months, interest-only",
    "Experience tiers move both leverage and rate",
  ],
  ["Bridge", "660–700", "70–85% of value; up to 85% of cost at Roc", "$50K–$5M", "12–24 months; no prepayment penalty at Lima One or Kiavi", "Roc wants the exit to be a sale or a refinance at a 1.10 DSCR"],
  [
    "BRRRR",
    "The rehab loan’s floor, then the rental loan’s",
    "Rehab phase: as much as 95% of cost, with the rehab fully funded. Refinance: roughly 75% of ARV",
    "Set by each phase",
    "9–24 month rehab loan, then a 30-year rental loan",
    "90 days of seasoning at an outside lender; often waived when the same lender refinances",
  ],
  [
    "Ground-up construction",
    "650 at the one lender that publishes it",
    "82.5–90% of cost, 100% of hard costs and 60–75% of the land, capped at 65–75% of finished value",
    "$50K–$10M; LendingOne to $40M",
    "12–24 months, with extensions at some lenders",
    "Most want one finished ground-up build in about the past 3 years",
  ],
  ["DSCR rental", "620–680, most at 640–660", "Purchases to 80% LTV; a few go to 85% with 720–740+ scores", "About $70K–$4.5M", "30-year fixed, ARMs, 40-year at some", "A 5-4-3-2-1 prepayment penalty is the usual default"],
  [
    "Short-term rental",
    "700 at Lima One",
    "75% on a purchase and 70% cash-out at Lima One; 80% and 75% at Easy Street",
    "$75K–$2.5M at Lima One",
    "Fixed, ARM, interest-only or balloon (Lima One)",
    "Easy Street discounts newer hosts’ projected income by 25%",
  ],
  ["Cash-out refinance", "Rental-loan floors; leverage drops to 60% at low scores", "70–80% of value, most at 75%", "Rental-loan sizes", "30-year fixed or ARM", "About 90 days of ownership first at most lenders"],
  ["Rental portfolio", "680", "60–80% of value on a purchase, 55–75% cash-out", "$225K–$5M for smaller portfolios", "30-year, or a 5-, 7- or 10-year balloon", "2–5 property minimums; Roc and Civic want 90%+ leased"],
];

const SPEED: [string, string][] = [
  ["Fix and flip, hard money", "Kiavi: 7 days. LendingOne: 7–10 business days. RCN: 10 business days."],
  ["Bridge", "Kiavi and LendingOne: 7–14 business days."],
  ["DSCR rental", "Defy: 14–21 days. Easy Street: 30 days. Griffin: 34 days on average."],
];

const QUESTIONS: { q: string; text: ReactNode }[] = [
  {
    q: "Does it need work before anyone would rent it or buy it?",
    text: (
      <>
        Yes points you to a project loan: a <Link href="/fix-and-flip-loans">fix and flip loan</Link> for a rehab, a{" "}
        <Link href="/ground-up-construction-loans">construction loan</Link> for a lot or a teardown. A little work, or none, points to a{" "}
        <Link href="/bridge-loans">bridge loan</Link> or straight to a rental loan.
      </>
    ),
  },
  {
    q: "How many days until closing?",
    text: (
      <>
        If the contract closes in under three weeks, the deal needs project-loan speed. <Link href="/hard-money-loans">Hard money</Link> and bridge lenders published 7 days to
        14 business days; rental lenders took about 2–5 weeks. Close on the fast loan, then refinance onto the cheaper one.
      </>
    ),
  },
  {
    q: "Will you sell it or keep it?",
    text: (
      <>
        Sell, and the sale repays a flip or bridge loan. Keep it, and the exit is a refinance, so run that before you buy: a <Link href="/brrrr-loans">BRRRR</Link> plan depends
        on the rent covering the payment on a new loan of about 75% of ARV. Test it in the <Link href="/calculators/brrrr">BRRRR calculator</Link>.
      </>
    ),
  },
];

const MATCH: [string, string, string][] = [
  ["Under contract on a fixer you’ll resell", "Fix and flip loan", "/fix-and-flip-loans"],
  ["Auction or distressed buy on a short clock", "Hard money loan", "/hard-money-loans"],
  ["Needs little work; long-term loan not ready yet", "Bridge loan", "/bridge-loans"],
  ["A fixer you’ll keep and rent out", "BRRRR loan", "/brrrr-loans"],
  ["A lot or teardown, with plans", "Construction loan", "/ground-up-construction-loans"],
  ["Rented, or ready to rent, and you’re keeping it", "DSCR rental loan", "/dscr-loans"],
  ["Booked by the night on Airbnb or VRBO", "Short-term rental loan", "/short-term-rental-loans"],
  ["A rental you own with equity sitting in it", "Cash-out refinance", "/investment-property-cash-out-refinance"],
  ["Several rentals you want on one note", "Portfolio loan", "/rental-portfolio-loans"],
];

const FAQ = [
  {
    q: "Is hard money the same as a fix and flip loan?",
    a: "Close, not identical. Hard money is the lending style: a short-term, asset-based loan from a private or non-bank lender, sized more on the property than on you. A fix and flip loan is hard money with a rehab budget attached, paid out in draws as each stage passes inspection. A bridge loan uses the same style on a property that needs little or no work.",
  },
  {
    q: "How fast can an investor loan close?",
    a: "Project loans move fastest. In October 2026, Kiavi advertised a 7-day close on flips, RCN quoted 10 business days and LendingOne 7 to 10, and bridge lenders 7 to 14 business days. Rental loans take longer: Defy published 14–21 days and Griffin a 34-day average. Paperwork is what usually slows a file, so have the contract, scope of work and entity documents ready on day one.",
  },
  {
    q: "How much cash do I need to bring to a flip?",
    a: "Budget for the gap between the loan and the price, plus closing costs, points and a few months of interest. Lenders will fund most or all of the price (85–100% in October 2026) and the full rehab, yet the ARV cap of 70–80% can still bind first. Buy at $250,000 with a $110,000 rehab and a $420,000 ARV, and a 75% ARV cap means bringing $45,000 at purchase, not $25,000.",
  },
  {
    q: "Can I use a bridge loan now and a rental loan later?",
    a: "Yes. That’s what bridge loans are for: close quickly, lease the property, then let a DSCR rental loan pay the bridge off. Line up the second loan before you close the first. An outside lender typically wants roughly 90 days of ownership before it lends on the new value; Roc, for one, holds a refinance inside 3 months to 80% of your total cost basis. Lima One waives seasoning when it made the first loan.",
  },
  {
    q: "What credit score do investor loans require?",
    a: "Each program sets its own floor. In October 2026 they ran lowest on flips, at 600–660, and highest on Lima One’s short-term rental loan, at 700. In between: rental loans 620–680, most at 640–660; bridge 660–700; portfolios 680; and 650 at the only construction lender that lists a minimum. Clearing the floor gets you in. A higher score mainly buys leverage and a lower rate.",
  },
  {
    q: "Will a flip lender fund my first deal?",
    a: "Often, at lower leverage. No experience was required at Roc, Civic or New Silver in October 2026, while Lima One asked for one exit in the last 36 months. Lenders that tier by track record, RCN among them, fund more of the purchase and price lower as your finished deals add up. New builds are stricter: most construction lenders want a completed ground-up project in about the last three years.",
  },
  {
    q: "Do bridge and rental loans have prepayment penalties?",
    a: "Bridge loans often don’t, which suits a quick sale or refinance: Lima One and Kiavi publish none on theirs. Rental loans are different. DSCR lenders tend to default to a five-year step-down written 5-4-3-2-1: repay in year one and you owe 5% of the balance, then 4%, 3%, 2% and 1% by year five. You can buy a shorter penalty, or none, with a higher rate.",
  },
  {
    q: "Can I borrow in my LLC?",
    a: "Yes. Every rental lender in our October 2026 research allowed LLC borrowers, and Lima One, Roc and Civic require one, often with a personal guarantee from the owners. Project loans close in entities all the time: 81% of 2025 short-term investor loans in public HMDA data went to entities. Whether and how to form an LLC is a question for your attorney or CPA.",
  },
  {
    q: "Can Fund Your Deal finance a home I’ll live in?",
    a: "No. We only fund business-purpose loans: property you’ll rent out, renovate or build, with neither you nor any family member living there. That rules out a duplex where you’d live in one unit, and a vacation home you’d use for more than 14 days a year, the line Regulation Z draws. For your own home, talk to a residential mortgage lender instead.",
  },
];

const SOURCES = [
  { label: "Kiavi — Fix and flip loans", url: "https://www.kiavi.com/loans/fix-and-flip" },
  { label: "Kiavi — Bridge loans", url: "https://www.kiavi.com/loans/bridge-loans" },
  { label: "Kiavi — New construction loans", url: "https://www.kiavi.com/loans/new-construction-infill" },
  { label: "Kiavi — DSCR loans", url: "https://www.kiavi.com/loans/dscr" },
  { label: "Lima One — Fix and flip", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
  { label: "Lima One — Bridge loans", url: "https://www.limaone.com/bridge-loans/" },
  { label: "Lima One — New construction loans", url: "https://www.limaone.com/new-construction-loans/" },
  { label: "Lima One — Rental loans", url: "https://www.limaone.com/rental/" },
  { label: "Lima One — Short-term rental loans (fetched Oct 26, 2026)", url: "https://www.limaone.com/short-term-rental-loans/" },
  { label: "LendingOne — Fix and flip loans", url: "https://lendingone.com/loan-types/fix-and-flip-loans/" },
  { label: "LendingOne — Bridge loans", url: "https://lendingone.com/loan-types/bridge-loans/" },
  { label: "LendingOne — New construction loans", url: "https://lendingone.com/loan-types/new-construction-loans/" },
  { label: "LendingOne — Fix to rent loans", url: "https://lendingone.com/loan-types/fix-to-rent-loans/" },
  { label: "LendingOne — SFR portfolio loans", url: "https://lendingone.com/loan-types/sfr-portfolio-loans/" },
  { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
  { label: "Roc Capital — Fix and flip", url: "https://roccapital.com/fix-and-flip" },
  { label: "Roc Capital — Stabilized bridge", url: "https://roccapital.com/stabilized-bridge" },
  { label: "Roc Capital — Ground-up construction", url: "https://roccapital.com/ground-up" },
  { label: "Roc Capital — Rental portfolios", url: "https://roccapital.com/rental-portfolios" },
  { label: "Roc Capital — Single-property rentals (seasoning and cost basis)", url: "https://roccapital.com/single-property-rentals" },
  { label: "Civic — Fix and flip", url: "https://civicfs.com/fix-and-flip/" },
  { label: "New Silver — Fix and flip loans", url: "https://newsilver.com/fix-and-flip-loans/" },
  { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
  { label: "Easy Street Capital — Short-term rental financing", url: "https://www.easystreetcap.com/short-term-rental-financing/" },
  { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
  { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
  { label: "Hard money loan rates 2026 — HMDA analysis (updated Oct 26, 2026)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
  { label: "eCFR — Regulation Z, Supplement I (comment 3(a)-4)", url: "https://www.ecfr.gov/current/title-12/part-1026/appendix-Supplement%20I%20to%20Part%201026" },
];

export default function Page() {
  return (
    <>
      <PageIntro
        crumbs={[{ href: "/", label: "Home" }, { label: "Loans" }]}
        eyebrow={`${PROGRAMS.length} programs · Project loans first · Investment property only`}
        title="Real estate investor loans, picked by the deal"
      >
        <p>
          You don’t need a loan menu. You need to know what this deal takes to get funded. These {PROGRAMS.length} real estate investor loans start with project money that
          buys, fixes or builds the property, then the rental loans that hold it or refinance you out. Rental loans qualify on the{" "}
          <Link href="/glossary#dscr" className={A}>
            debt service coverage ratio (DSCR)
          </Link>
          : the rent divided by the property’s full monthly payment.
        </p>
      </PageIntro>

      {GROUPS.map((g, i) => (
        <section key={g.group} id={g.id} className={`scroll-mt-20 border-t border-line ${i === 0 ? "bg-white" : ""}`}>
          <Container className="grid gap-10 py-[72px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <div className="flex flex-col gap-3">
              <Eyebrow>{g.eyebrow}</Eyebrow>
              <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.03em]">{g.title}</h2>
              <p className="text-base leading-relaxed text-ink-2">{g.text}</p>
            </div>
            <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
              {PROGRAMS.filter((p) => p.group === g.group).map((p) => (
                <article key={p.slug} className={`flex flex-col gap-4 rounded-2xl border border-line p-6 ${i === 0 ? "bg-paper" : "bg-white"}`}>
                  <h3 className="text-[21px] font-semibold tracking-[-0.02em]">
                    <Link href={p.href} className="hover:text-brand">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="text-[15px] leading-normal text-ink-2">{p.blurb}</p>
                  <dl className="mt-auto flex flex-col text-sm">
                    {[
                      ["Use it for", p.bestFor],
                      ["Sized on", p.qualifies],
                      ["Term", p.term],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4 border-t border-line py-2.5">
                        <dt className="shrink-0 text-muted">{k}</dt>
                        <dd className="text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link href={p.href} className="text-sm font-semibold underline-offset-4 hover:underline">
                    {p.short}: full terms →
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section id="sizing" className="scroll-mt-20 border-t border-line">
        <Container className="flex flex-col gap-10 py-[88px]">
          <div className="flex max-w-[720px] flex-col gap-3">
            <Eyebrow>How the loan gets sized</Eyebrow>
            <H2>Lenders run your deal through up to four tests. The smallest answer is your loan.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              Your paycheck barely enters into it. A project lender checks cost and after-repair value; a rental lender checks value and rent coverage. Whichever test gives the
              lowest number is the number that decides it.
            </p>
          </div>
          <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))]">
            {SIZING.map((s) => (
              <div key={s.term} className="flex flex-col gap-2.5 rounded-2xl border border-line bg-white p-6">
                <div className="flex flex-col gap-1">
                  <Link href={s.href} className="text-[21px] font-semibold tracking-[-0.02em] hover:text-brand">
                    {s.term} <span className="text-[15px] font-normal text-muted">· {s.name}</span>
                  </Link>
                  <span className="font-mono text-[13px] text-muted">{s.formula}</span>
                </div>
                <p className="text-[15px] leading-relaxed text-ink-2">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="flex max-w-[720px] flex-col gap-2 pt-4">
            <h3 className="text-[23px] font-semibold tracking-[-0.02em]">One house, both loans.</h3>
            <p className="text-[17px] leading-relaxed text-ink-2">
              A fixer under contract at $250,000 with a $110,000 scope and a $420,000 after-repair value. First the project loan that buys and fixes it, then the rental loan that
              takes it out.
            </p>
          </div>
          <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr))]">
            <ExampleCard example={FLIP_EXAMPLE} />
            <ExampleCard example={REFI_EXAMPLE} />
          </div>
          <p className="text-[15px] text-ink-2">
            Run your own numbers in the{" "}
            <Link href="/calculators/fix-and-flip" className="font-semibold underline underline-offset-4">
              fix and flip calculator
            </Link>{" "}
            and the{" "}
            <Link href="/calculators/dscr" className="font-semibold underline underline-offset-4">
              DSCR calculator
            </Link>
            , or read the{" "}
            <Link href="/guides/ltv-vs-ltc-vs-arv" className="font-semibold underline underline-offset-4">
              LTV, LTC and ARV guide
            </Link>
            .
          </p>
        </Container>
      </section>

      <section id="terms" className="scroll-mt-20 border-t border-line bg-white">
        <Container className="flex flex-col gap-8 py-[88px]">
          <div className="flex max-w-[720px] flex-col gap-3">
            <Eyebrow>Published terms · October 2026</Eyebrow>
            <H2>The limits each program works inside.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              Credit floors, leverage, loan sizes and terms taken from lenders’ own program pages on October 19, 2026. They show where the market sits, not what you’ll be
              offered: your terms depend on the property, your credit and your track record. Rates are on the{" "}
              <Link href="/rates" className={A}>
                rates page
              </Link>
              .
            </p>
          </div>
          <CompareTable columns={["Program", "Credit floor", "Leverage", "Loan size", "Term", "Watch for"]} rows={TERMS} highlight={-1} />
          <div className="flex flex-col gap-3">
            <h3 className="text-[19px] font-semibold">Published closing times</h3>
            <dl className="grid gap-x-8 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
              {SPEED.map(([k, v]) => (
                <div key={k} className="border-t border-line py-3 text-[15px]">
                  <dt className="font-semibold">{k}</dt>
                  <dd className="mt-1 leading-relaxed text-ink-2">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section id="choose" className="scroll-mt-20 border-t border-line">
        <Container className="grid items-start gap-12 py-[88px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="flex flex-col gap-3.5">
            <Eyebrow>Picking the loan</Eyebrow>
            <H2>Three questions pick the loan.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">Answer them in order. Most deals end up with two loans: one to get in, one to get out.</p>
          </div>
          <ol className="flex flex-col">
            {QUESTIONS.map((s, i) => (
              <li key={s.q} className="grid grid-cols-[44px_1fr] gap-3 border-t border-line py-5 last:border-b">
                <span className="font-mono text-[15px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="text-[17px] font-semibold">{s.q}</div>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-ink text-paper">
        <Container className="grid gap-12 py-[88px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr))]">
          <div className="flex flex-col gap-3.5">
            <Eyebrow tone="lime">Your deal, your loan</Eyebrow>
            <H2 className="text-white">Find your situation. That’s your loan.</H2>
            <p className="text-[17px] leading-relaxed text-mist">
              Still between two? Start the form anyway. Tell us the deal in a few taps, and on the call a loan specialist settles the program with the numbers in front of you both.
            </p>
            <div className="mt-3">
              <ButtonLink href="/get-funding" variant="lime" size="lg">
                {SITE.cta}
              </ButtonLink>
            </div>
          </div>
          <ul className="flex flex-col">
            {MATCH.map(([situation, loan, href]) => (
              <li key={situation} className="border-t border-night-line last:border-b">
                <Link href={href} className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-5 hover:text-lime">
                  <span className="text-[17px]">{situation}</span>
                  <span className="font-mono text-sm text-lime">{loan} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FaqSection heading="Questions investors ask before they pick a loan" items={FAQ} />
      <Sources sources={SOURCES} updated="2026-10-26" />
    </>
  );
}
