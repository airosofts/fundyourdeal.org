import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageIntro } from "@/components/PageIntro";
import { CompareTable, FaqSection, Sources } from "@/components/sections";
import { ButtonLink, Container, Eyebrow, H2 } from "@/components/ui";
import { PROGRAMS, SITE, type ProgramGroup } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Real Estate Investor Loan Programs | Fund Your Deal" },
  description: "Real estate investor loan programs: DSCR, short-term rental, fix and flip, bridge, BRRRR, construction and portfolio loans, with 2026 terms. Funded fast.",
  alternates: { canonical: "/loans" },
};

const A = "text-brand underline underline-offset-2";

const GROUPS: { group: ProgramGroup; eyebrow: string; title: string; text: ReactNode }[] = [
  {
    group: "Rental",
    eyebrow: "Rental loans",
    title: "For properties you hold and rent out",
    text: (
      <>
        Long-term loans sized on the property’s rent rather than your personal income. Lenders measure it with the{" "}
        <Link href="/glossary#dscr" className={A}>
          debt service coverage ratio (DSCR)
        </Link>
        : the property’s monthly rent divided by its monthly payment of principal, interest, taxes, insurance and association dues (PITIA). 30-year terms, often closed in an
        LLC.
      </>
    ),
  },
  {
    group: "Project",
    eyebrow: "Project loans",
    title: "For properties you buy, renovate or build",
    text: "Short-term, interest-only loans sized on the deal: purchase price, rehab or build budget and the finished value. Repaid when you sell or refinance.",
  },
];

const SIZING: { term: string; href: string; formula: string; text: string }[] = [
  {
    term: "DSCR",
    href: "/glossary#dscr",
    formula: "Rent ÷ PITIA",
    text: "Rental loans. At 1.00 the rent exactly covers the payment. Many lenders want at least 1.00 and some go to 0.75; the ratio also caps how big a payment, and so how big a loan, the rent can carry.",
  },
  {
    term: "LTV",
    href: "/glossary#ltv",
    formula: "Loan ÷ value",
    text: "Rental, bridge and cash-out loans. DSCR lenders published 80% on purchases in October 2026 and about 75% on cash-out refinances.",
  },
  {
    term: "LTC",
    href: "/glossary#ltc",
    formula: "Loan ÷ (price + budget)",
    text: "Flips and new builds, where the value before the work doesn’t reflect what you’re spending. Construction lenders published 82.5–90% of total cost.",
  },
  {
    term: "ARV",
    href: "/glossary#arv",
    formula: "Value after the work",
    text: "The ceiling on project loans: fix and flip lenders cap the total loan at 70–80% of after-repair value. Whichever limit is lowest sets the loan.",
  },
];

// Published lender ranges, October 2026 (docs/research/loan-terms-2026-10.md).
const TERMS_TABLE: string[][] = [
  ["DSCR rental", "620–680", "80% LTV on purchases (85% at a few lenders for 720–740+ credit)", "About $70K–$4.5M", "30-year fixed, ARMs, interest-only options"],
  ["Short-term rental", "700 at Lima One", "75% purchase, 70% cash-out (Lima One); 80% / 75% (Easy Street)", "$75K–$2.5M (Lima One)", "30-year"],
  ["Fix and flip / hard money", "600–660", "85–100% of purchase, 100% of rehab, capped at 70–80% of ARV", "$50K–$5M", "6–24 months, interest-only"],
  ["Bridge", "660–700", "70–85% LTV; up to 85% of cost", "$50K–$5M", "12–24 months"],
  ["BRRRR", "Rehab loan, then DSCR minimums", "Up to 95% of cost and 100% of rehab, then about 75% of ARV on the refinance", "Varies by phase", "9–24 month rehab loan, then 30-year DSCR"],
  ["Ground-up construction", "650 (the one lender that publishes it)", "82.5–90% of cost, 100% of hard costs, capped at 65–75% of completed value", "$50K–$10M", "12–24 months, extensions at some lenders"],
  ["Rental portfolio", "680", "60–80% LTV on purchases, 55–75% cash-out", "$225K–$5M for smaller portfolios", "30-year, or 5-, 7- or 10-year balloons"],
  ["Cash-out refinance", "DSCR minimums; lower scores cut leverage", "70–80% LTV, most at 75%", "As DSCR", "30-year fixed, ARMs"],
];

const PATHS: { title: string; text: ReactNode }[] = [
  {
    title: "Buy, renovate, sell",
    text: (
      <>
        A <Link href="/fix-and-flip-loans">fix and flip loan</Link> funds the purchase and the rehab, and the sale repays it. Lenders publish 6- to 24-month terms; pick one with room
        for a slow sale.
      </>
    ),
  },
  {
    title: "Buy, renovate, rent, refinance",
    text: (
      <>
        A <Link href="/brrrr-loans">BRRRR</Link> rehab loan first, then a DSCR refinance at about 75% of the after-repair value. Outside lenders typically want 90 days of{" "}
        <Link href="/glossary#seasoning">seasoning</Link>, though the lender that made the rehab loan will often skip it on its own refinance.
      </>
    ),
  },
  {
    title: "Buy fast, refinance later",
    text: (
      <>
        A <Link href="/bridge-loans">bridge loan</Link> closes in 7–14 business days at published lenders, often with no prepayment penalty, then a{" "}
        <Link href="/dscr-loans">DSCR loan</Link> replaces it once the property is leased.
      </>
    ),
  },
  {
    title: "Build, then rent",
    text: (
      <>
        A <Link href="/ground-up-construction-loans">construction loan</Link> funds the land and the build in draws; a DSCR loan on the finished home replaces it if you hold it as a
        rental.
      </>
    ),
  },
  {
    title: "Grow, then consolidate",
    text: (
      <>
        Single-property DSCR loans as you buy, then a <Link href="/rental-portfolio-loans">portfolio loan</Link> across several rentals, or a{" "}
        <Link href="/investment-property-cash-out-refinance">cash-out refinance</Link> to fund the next down payment.
      </>
    ),
  },
];

const COMMON: [string, string][] = [
  ["Business purpose only", "Investment property only: never a home you or your family will live in."],
  ["The property qualifies", "Rent, value, budget and exit carry the file. No tax returns or pay stubs on rental loans."],
  ["LLCs welcome", "Borrow in your name or your entity; some lenders require an LLC, usually with a personal guarantee."],
  ["An appraisal sets the numbers", "Value for every loan, market rent for rentals, after-repair value for projects."],
  ["Credit still counts", "Scores move leverage and pricing on every program. No credit pull to apply, though."],
  ["Terms in writing", "Rate, leverage, points, fees and prepayment terms before you commit, subject to underwriting and approval."],
];

const CHOOSE: [string, string, string][] = [
  ["You'll keep it and rent it out long-term", "DSCR rental loan", "/dscr-loans"],
  ["You'll rent it by the night on Airbnb or VRBO", "Short-term rental loan", "/short-term-rental-loans"],
  ["You'll renovate it and sell within a year", "Fix and flip loan", "/fix-and-flip-loans"],
  ["You'll renovate it, rent it, then refinance", "BRRRR loan", "/brrrr-loans"],
  ["You need to close fast and refinance later", "Bridge loan", "/bridge-loans"],
  ["You're building from the ground up", "Construction loan", "/ground-up-construction-loans"],
  ["You own several rentals and want one loan", "Portfolio loan", "/rental-portfolio-loans"],
  ["You own a rental and want the equity out", "Cash-out refinance", "/investment-property-cash-out-refinance"],
];

const FAQ = [
  {
    q: "Which loan is right for a rental property?",
    a: "If you plan to hold it and rent it long-term, a DSCR loan is the usual fit: it qualifies on the rent rather than your income and can close in an LLC. For nightly rentals, a short-term rental DSCR loan counts booking income or a projection instead of a lease.",
  },
  {
    q: "What's the difference between hard money, bridge and fix and flip loans?",
    a: "They overlap. All three are short-term, interest-only loans from private or non-bank lenders. Fix and flip loans add rehab funds paid out in draws; bridge loans finance a property that needs little work until you sell or refinance; hard money describes the asset-based lending style behind both.",
  },
  {
    q: "What is a business-purpose loan?",
    a: "A loan made for an investment or business rather than personal use. In real estate, that means financing property you rent out, renovate and sell, or build, and that neither you nor your family will live in. Business-purpose loans fall outside many consumer-mortgage rules, which is why lenders underwrite them on the property and often lend to LLCs.",
  },
  {
    q: "What credit score do I need for an investor loan?",
    a: "It depends on the program. Published minimums in October 2026 ran 620–680 for DSCR rental loans, 600–660 for fix and flip, 660–700 for bridge, 680 for rental portfolios and 700 for one lender’s short-term rental program. Above the minimum, a higher score mostly buys more leverage and a better rate.",
  },
  {
    q: "How much down payment does an investment property loan need?",
    a: "On rental loans, plan on 20–25%: DSCR lenders published 80% maximum loan-to-value on purchases, and 85% at a few for top credit. Project loans work differently. Fix and flip lenders fund 85–100% of the purchase and all of the rehab, but cap the loan at 70–80% of the after-repair value, so a thin deal still needs cash.",
  },
  {
    q: "Can one loan cover the purchase and the renovation?",
    a: "Yes. Fix and flip loans and BRRRR rehab loans fund the purchase at closing and hold the renovation budget back, releasing it in draws after each stage is inspected. Lenders published 100% of rehab costs financed in October 2026, and interest is usually charged only on money already drawn.",
  },
  {
    q: "Do investor loans have prepayment penalties?",
    a: "Long-term rental loans usually do. A 5-4-3-2-1 step-down over five years is the default on DSCR loans, with shorter options or none available for a higher rate. Short-term loans often don’t: bridge loans at Lima One and Kiavi carry no published prepayment penalty. Some larger portfolio loans use yield maintenance instead.",
  },
  {
    q: "Can I finance a home I'll live in?",
    a: "Not through Fund Your Deal. Every program here is a business-purpose loan for investment property that neither you nor your family will occupy, and that includes living in one unit of a duplex while renting the other. A home you'll live in, even part of the year, needs a residential mortgage from a residential lender.",
  },
  {
    q: "Do investor loans require experience?",
    a: "Rental (DSCR) loans usually don't. Project loans often do: many fix and flip lenders lend to first-timers at lower leverage, and ground-up construction lenders typically want at least one completed build in the last few years. On fix and flip loans, experience tiers also move the rate and the share of the purchase a lender will fund.",
  },
];

const SOURCES = [
  { label: "Kiavi — DSCR loans", url: "https://www.kiavi.com/loans/dscr" },
  { label: "Kiavi — Fix and flip loans", url: "https://www.kiavi.com/loans/fix-and-flip" },
  { label: "Kiavi — Bridge loans", url: "https://www.kiavi.com/loans/bridge-loans" },
  { label: "Lima One — Rental loans", url: "https://www.limaone.com/rental/" },
  { label: "Lima One — Short-term rental loans", url: "https://www.limaone.com/short-term-rental-loans/" },
  { label: "Lima One — Bridge loans", url: "https://www.limaone.com/bridge-loans/" },
  { label: "LendingOne — Fix to rent loans", url: "https://lendingone.com/loan-types/fix-to-rent-loans/" },
  { label: "LendingOne — SFR portfolio loans", url: "https://lendingone.com/loan-types/sfr-portfolio-loans/" },
  { label: "Roc Capital — Rental portfolios", url: "https://roccapital.com/rental-portfolios" },
  { label: "Roc Capital — Ground-up construction", url: "https://roccapital.com/ground-up" },
  { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
  { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
  { label: "Easy Street Capital — EasyFix", url: "https://www.easystreetcap.com/easyfix/" },
  { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
  { label: "Civic — Product overview", url: "https://civicfs.com/product-overview/" },
];

export default function Page() {
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Loans" }]} eyebrow={`${PROGRAMS.length} programs · Investment property only`} title="Investor loan programs">
        <p>
          {PROGRAMS.length} real estate investor loan programs, funded fast: rental loans that qualify on the property’s rent, and project loans sized on the deal. Tell us about
          yours and a loan specialist will call you back with your terms.
        </p>
      </PageIntro>

      {GROUPS.map((g, i) => (
        <section key={g.group} className={`border-t border-line ${i === 0 ? "bg-white" : ""}`}>
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
                      ["Best for", p.bestFor],
                      ["Qualifies on", p.qualifies],
                      ["Terms", p.term],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4 border-t border-line py-2.5">
                        <dt className="shrink-0 text-muted">{k}</dt>
                        <dd className="text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link href={p.href} className="text-sm font-semibold underline-offset-4 hover:underline">
                    {p.short} explained →
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="border-t border-line bg-white">
        <Container className="flex flex-col gap-8 py-[72px]">
          <H2>Every program side by side</H2>
          <CompareTable columns={["Program", "Best for", "Qualifies on", "Terms"]} rows={PROGRAMS.map((p) => [p.title, p.bestFor, p.qualifies, p.term])} highlight={-1} />
        </Container>
      </section>

      <section id="sizing" className="scroll-mt-20 border-t border-line">
        <Container className="flex flex-col gap-10 py-[88px]">
          <div className="flex max-w-[720px] flex-col gap-3">
            <Eyebrow>How loans are sized</Eyebrow>
            <H2>Four numbers decide how much you can borrow.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              Investor lenders size a loan on the property, not your paycheck. Each program leans on a different measure, and most apply two at once and lend the lower result.
            </p>
          </div>
          <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))]">
            {SIZING.map((s) => (
              <div key={s.term} className="flex flex-col gap-2.5 rounded-2xl border border-line bg-white p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <Link href={s.href} className="text-[21px] font-semibold tracking-[-0.02em] hover:text-brand">
                    {s.term}
                  </Link>
                  <span className="font-mono text-[13px] text-muted">{s.formula}</span>
                </div>
                <p className="text-[15px] leading-relaxed text-ink-2">{s.text}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-ink-2">
            Every term on a term sheet, defined:{" "}
            <Link href="/glossary" className="font-semibold underline underline-offset-4">
              the investor loan glossary
            </Link>
            .
          </p>
        </Container>
      </section>

      <section id="terms" className="scroll-mt-20 border-t border-line bg-white">
        <Container className="flex flex-col gap-8 py-[88px]">
          <div className="flex max-w-[720px] flex-col gap-3">
            <Eyebrow>Published terms</Eyebrow>
            <H2>What lenders published for each program in October 2026.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              Minimum credit scores, leverage, loan sizes and terms from lenders’ own program pages. These are market ranges, not an offer: what you’re offered depends on the
              property, your credit and your track record. Current rates are on the <Link href="/rates" className={A}>rates page</Link>.
            </p>
          </div>
          <CompareTable columns={["Program", "Minimum credit", "Leverage", "Loan amounts", "Term"]} rows={TERMS_TABLE} highlight={-1} />
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="flex flex-col gap-10 py-[88px]">
          <div className="flex max-w-[720px] flex-col gap-3">
            <Eyebrow>Financing paths</Eyebrow>
            <H2>Most deals use two loans, one after the other.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              A short-term loan gets the property bought, fixed or built; a long-term loan, or a sale, takes it out. Plan the second loan before you close the first.
            </p>
          </div>
          <ol className="grid gap-x-8 gap-y-2 [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
            {PATHS.map((p, i) => (
              <li key={p.title} className="grid grid-cols-[44px_1fr] gap-3 border-t border-line py-5">
                <span className="font-mono text-[15px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="text-[17px] font-semibold">{p.title}</div>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line bg-white">
        <Container className="grid items-start gap-12 py-[88px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="flex flex-col gap-3.5">
            <Eyebrow>Every program</Eyebrow>
            <H2>What every program has in common.</H2>
          </div>
          <dl className="flex flex-col text-[15px]">
            {COMMON.map(([k, v]) => (
              <div key={k} className="grid gap-1 border-t border-line py-4 last:border-b sm:grid-cols-[220px_1fr] sm:gap-6">
                <dt className="font-semibold">{k}</dt>
                <dd className="leading-relaxed text-ink-2">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-ink text-paper">
        <Container className="grid gap-12 py-[88px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr))]">
          <div className="flex flex-col gap-3.5">
            <Eyebrow tone="lime">Not sure which?</Eyebrow>
            <H2 className="text-white">Start from what you plan to do with the property.</H2>
            <p className="text-[17px] leading-relaxed text-mist">
              Pick the closest match below, or start the form: it asks what you’re financing, and a loan specialist confirms the right program on the call.
            </p>
            <div className="mt-3">
              <ButtonLink href="/get-funding" variant="lime" size="lg">
                {SITE.cta}
              </ButtonLink>
            </div>
          </div>
          <ul className="flex flex-col">
            {CHOOSE.map(([plan, loan, href]) => (
              <li key={plan} className="border-t border-night-line last:border-b">
                <Link href={href} className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-5 hover:text-lime">
                  <span className="text-[17px]">{plan}</span>
                  <span className="font-mono text-sm text-lime">{loan} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FaqSection heading="Investor loan questions" items={FAQ} />
      <Sources sources={SOURCES} updated="2026-10-23" />
    </>
  );
}
