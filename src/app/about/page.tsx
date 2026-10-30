import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageIntro } from "@/components/PageIntro";
import { FaqSection, Sources } from "@/components/sections";
import { ButtonLink, Container, Eyebrow, H2 } from "@/components/ui";
import { SITE } from "@/lib/site";
import { alternatesFor } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "About Fund Your Deal: Deal-First Investor Loans" },
  description:
    "Fund Your Deal gets investors’ deals funded: flips, hard money, bridge, BRRRR, new builds, and rental loans to refinance out. Investment property only.",
  alternates: alternatesFor("/about"),
};

// The moments this site is built for, and the loan that fits each one.
const SITUATIONS: { moment: string; text: ReactNode }[] = [
  {
    moment: "Under contract, closing date set",
    text: (
      <>
        A <Link href="/fix-and-flip-loans">fix and flip loan</Link> or a <Link href="/hard-money-loans">hard money loan</Link> covers the purchase and the renovation in one
        short-term loan, sized on what the house will be worth after the work.
      </>
    ),
  },
  {
    moment: "Buying before the long-term loan is lined up",
    text: (
      <>
        A <Link href="/bridge-loans">bridge loan</Link> lets you close now and sell or refinance later. Lenders size it on the property and on a believable exit.
      </>
    ),
  },
  {
    moment: "Renovating a house you plan to keep",
    text: (
      <>
        <Link href="/brrrr-loans">BRRRR financing</Link> pays for the purchase and the rehab first, then a rental loan replaces it once the house is rented.
      </>
    ),
  },
  {
    moment: "A lot, a set of plans and a builder",
    text: (
      <>
        A <Link href="/ground-up-construction-loans">ground-up construction loan</Link> releases the build budget in <Link href="/glossary#draws">draws</Link> as each stage
        passes inspection.
      </>
    ),
  },
  {
    moment: "Rehab finished, tenant moving in",
    text: (
      <>
        Refinance out into a rental loan that qualifies on DSCR (<Link href="/glossary#dscr">debt service coverage ratio</Link>): the property’s monthly rent divided by its
        total monthly payment. <Link href="/dscr-loans">DSCR loans</Link> look at the house, not your pay stubs, and a{" "}
        <Link href="/investment-property-cash-out-refinance">cash-out refinance</Link> can pull your cash back out.
      </>
    ),
  },
  {
    moment: "Keeping it as a rental, or several of them",
    text: (
      <>
        <Link href="/short-term-rental-loans">Short-term rental loans</Link> for nightly-stay homes, and <Link href="/rental-portfolio-loans">portfolio loans</Link> that put a
        group of rentals under one loan.
      </>
    ),
  },
];

const PRINCIPLES: { title: string; text: ReactNode }[] = [
  {
    title: "The property comes before the paperwork.",
    text: (
      <>
        Investor loans are sized on the asset: the price, the rehab budget, the <Link href="/glossary#arv">after-repair value</Link>, the rent and the exit. So those are the first
        questions we ask, and applying takes about 60 seconds, mostly taps, with no tax returns to upload.
      </>
    ),
  },
  {
    title: "Every deal has one number that decides it.",
    text: (
      <>
        On a flip it’s usually the after-repair value. On a rental it’s the rent against the payment. On a contract it’s the closing date. Finding that number early tells you
        whether the deal works before you spend money on inspections and appraisals.
      </>
    ),
  },
  {
    title: "A figure without a date is a guess.",
    text: (
      <>
        Rates and limits on this site are ranges that lenders published, with the month they were pulled and the source listed under each page. They show where the market sits.
        Your own numbers arrive in writing, after the call. The <Link href="/rates">rates page</Link> keeps the current ranges.
      </>
    ),
  },
  {
    title: "Costs go on paper before you commit.",
    text: (
      <>
        Rate, <Link href="/glossary#points">points</Link>, lender fees and any prepayment terms come with your written terms, so the settlement statement holds no surprises.
      </>
    ),
  },
  {
    title: "A fast no beats a slow maybe.",
    text: (
      <>
        If a deal doesn’t fit a business-purpose loan, you should hear that on the first call, not after a week of uploads. That leaves you time to find other money while the
        contract is still alive.
      </>
    ),
  },
];

const WONT: { title: string; text: ReactNode }[] = [
  {
    title: "Fund a property you or a relative will occupy",
    text: (
      <>
        Living upstairs in a duplex and renting out the downstairs counts too, as does a vacation place you’ll use yourself. Those loans belong with a residential mortgage
        lender, under the consumer rules that come with them.
      </>
    ),
  },
  { title: "Make personal or consumer loans", text: <>Every loan is for a business purpose: buying, fixing, building or holding investment property.</> },
  {
    title: "Promise approval, a rate or a closing date up front",
    text: <>Each loan goes through the licensed lender’s underwriting. Published ranges and lender timelines are a guide, not a quote.</>,
  },
  { title: "Pull your credit so you can apply", text: <>The form asks for a rough range. You’re told before any credit check happens later in the process.</> },
  {
    title: "Act as your CPA or attorney",
    text: <>Happy to walk through how an LLC, a seasoning rule or a 1031 deadline changes the loan. The entity and tax decisions are for your own advisers.</>,
  },
];

const FAQ = [
  {
    q: "Who makes the loan when I work with Fund Your Deal?",
    a: "Fund Your Deal is an associate of a licensed lender. Fund Your Deal is your point of contact from the first call to the closing, and the licensed lender underwrites the loan and makes the credit decision. Your loan documents name the lender of record. Every loan is subject to that underwriting and approval.",
  },
  {
    q: "What does deal-first mean in practice?",
    a: "It means the conversation starts with the property and its deadline, not with your income. The first questions cover the price, the rehab, the after-repair value or the rent, and the closing date. Investor loans are sized on those numbers, so knowing them early tells you whether the deal can be funded on time.",
  },
  {
    q: "Do I need experience to work with Fund Your Deal?",
    a: "Not always. Several flip lenders, including Roc Capital, Civic and New Silver, published no minimum experience in October 2026, though track record changes leverage and rate. Rental loans usually require none. New construction is stricter: lenders such as LendingOne, Roc, Civic and Lima One usually look for one finished ground-up build within roughly three years.",
  },
  {
    q: "Can Fund Your Deal finance a house I’m going to live in?",
    a: "No. Fund Your Deal only funds property held as an investment, where no one in your household or family will be living. A house you’ll occupy, a unit you’ll live in while renting out the others, and a second home you’ll use are all off the table. For any of those, start with a residential mortgage lender.",
  },
  {
    q: "Why does the site lead with flips, bridge and construction loans?",
    a: "Because those are the loans with a clock on them: a contract closing, an auction deadline, a contractor waiting on a draw. Rental loans still matter here, as the way out of a project. Once the work is done, a rental loan lets you refinance out, keep the property and often pull cash back out.",
  },
  {
    q: "Are the rates and terms on this site an offer?",
    a: "No. They are ranges lenders published on their own program pages, each with the date pulled and the source listed. They show the market, not your deal. Your rate, leverage and fees turn on the house, your credit score and the deals you’ve done before, and they reach you in writing after you talk to a loan specialist.",
  },
];

const SOURCES = [
  { label: "eCFR — 12 CFR 1026.3, exempt transactions (business purpose)", url: "https://www.ecfr.gov/current/title-12/part-1026/section-1026.3" },
  { label: "eCFR — Regulation Z official interpretations: rental property as business purpose (comment 3(a)-4)", url: "https://www.ecfr.gov/current/title-12/part-1026/appendix-Supplement%20I%20to%20Part%201026" },
  { label: "Roc Capital — Fix and flip", url: "https://roccapital.com/fix-and-flip" },
  { label: "Civic Financial Services — Fix and flip", url: "https://civicfs.com/fix-and-flip/" },
  { label: "New Silver — Fix and flip loans", url: "https://newsilver.com/fix-and-flip-loans/" },
  { label: "RCN Capital — Loan programs (experience tiers)", url: "https://www.rcncapital.com/loan-programs" },
  { label: "Lima One Capital — Rental loans", url: "https://www.limaone.com/rental/" },
  { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
  { label: "Lima One Capital — New construction loans", url: "https://www.limaone.com/new-construction-loans/" },
  { label: "LendingOne — New construction loans", url: "https://lendingone.com/loan-types/new-construction-loans/" },
  { label: "Roc Capital — Ground-up construction", url: "https://roccapital.com/ground-up" },
  { label: "Civic Financial Services — Ground-up construction", url: "https://civicfs.com/ground-up-construction-loan/" },
];

export default function Page() {
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "About" }]} eyebrow="About us" title="For investors with a deal on the clock.">
        <p>
          {SITE.name} gets business-purpose loans funded for real estate investors who already have a property in play: under contract, half-renovated, ready to build or
          ready to refinance out. {SITE.name} is an associate of a licensed lender. Investment property only.
        </p>
      </PageIntro>

      <section className="border-t border-line">
        <Container className="flex flex-col gap-10 py-[72px]">
          <div className="flex max-w-[700px] flex-col gap-3">
            <Eyebrow>Who it’s for</Eyebrow>
            <H2>You found the deal. Now the money has to keep up.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              This site is built for six moments. Each one points to a different kind of loan, and each loan moves on its own timeline.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
            {SITUATIONS.map((s) => (
              <li key={s.moment} className="flex flex-col gap-2 bg-white p-6">
                <span className="text-[18px] font-semibold tracking-[-0.01em]">{s.moment}</span>
                <p className="text-[15px] leading-relaxed text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2">{s.text}</p>
              </li>
            ))}
          </ul>
          <p className="text-[15px] text-ink-2">
            Not sure which one you’re in?{" "}
            <Link href="/loans" className="font-semibold text-brand underline underline-offset-2">
              Line up every program by what you plan to do with the property
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="border-t border-line bg-white">
        <Container className="grid items-start gap-12 py-[72px] lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="flex flex-col gap-4 text-[17px] leading-relaxed text-ink-2">
            <Eyebrow>The lender behind the loan</Eyebrow>
            <H2>One company on your side of the table.</H2>
            <p>
              {SITE.name} is an associate of a licensed lender. In practice, that means you have one point of contact at {SITE.name} for the whole deal: the first call, your
              written terms, the list of documents and the push to close on time.
            </p>
            <p>
              The licensed lender underwrites the loan and makes the credit decision. Its name appears on your loan documents as the lender of record, and every loan is subject to
              its underwriting and approval.
            </p>
          </div>
          <dl className="flex flex-col gap-5 rounded-2xl border border-line bg-paper p-7 text-[15px] leading-relaxed">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.08em] text-muted">{SITE.name} handles</dt>
              <dd className="mt-1.5 text-ink-2">The first call, your terms in writing, the document list and keeping the closing timeline on track.</dd>
            </div>
            <div className="border-t border-line pt-5">
              <dt className="font-mono text-xs uppercase tracking-[0.08em] text-muted">The licensed lender handles</dt>
              <dd className="mt-1.5 text-ink-2">Underwriting, the credit decision and the loan itself, as the lender of record named on your documents.</dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="flex flex-col gap-10 py-[72px]">
          <div className="flex max-w-[700px] flex-col gap-3">
            <Eyebrow>Deal-first principles</Eyebrow>
            <H2>Five rules we work by.</H2>
          </div>
          <ol className="flex flex-col">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} className="grid gap-2 border-t border-line py-6 last:border-b sm:grid-cols-[64px_minmax(0,1fr)_minmax(0,1.6fr)] sm:gap-6">
                <span className="font-mono text-[15px] text-brand">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[19px] font-semibold leading-snug">{p.title}</span>
                <p className="text-[15px] leading-relaxed text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2">{p.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line bg-white">
        <Container className="grid items-start gap-12 py-[72px] lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="flex flex-col gap-4 text-[17px] leading-relaxed text-ink-2">
            <Eyebrow>Limits</Eyebrow>
            <H2>What we won’t do.</H2>
            <p>
              The occupancy line comes from federal Truth in Lending commentary. Credit to buy, improve or maintain rental property that isn’t owner-occupied is treated as business
              purpose. But if the owner plans to spend over 14 days there during the next year, the property stops counting as non-owner-occupied.
            </p>
          </div>
          <ul className="flex flex-col">
            {WONT.map((w) => (
              <li key={w.title} className="border-t border-line py-5 last:border-b">
                <div className="text-[17px] font-semibold">{w.title}</div>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-2">{w.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="flex flex-col gap-4 py-[72px] text-[17px] leading-relaxed text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2">
          <Eyebrow>Before you call</Eyebrow>
          <H2 className="max-w-[700px]">Run the deal yourself first.</H2>
          <p className="max-w-[760px]">
            The math lenders use is on this site, free: the <Link href="/calculators/fix-and-flip">fix and flip calculator</Link> for profit and cash to close, the{" "}
            <Link href="/calculators/brrrr">BRRRR calculator</Link> for what comes back at the refinance, and the <Link href="/calculators/dscr">DSCR calculator</Link> and{" "}
            <Link href="/calculators/rental-cash-flow">rental cash flow calculator</Link> for the hold. If a term on your sheet is new to you, the{" "}
            <Link href="/glossary">glossary</Link> defines it, and <Link href="/guides/closing-an-investor-loan-fast">our guide to closing fast</Link> covers what sets the
            timeline.
          </p>
          <p className="max-w-[760px]">
            Want the step-by-step version? Read <Link href="/how-it-works">how it works</Link>, check the <Link href="/disclosures">disclosures</Link>, or{" "}
            <Link href="/contact">send us a message</Link>.
          </p>
        </Container>
      </section>

      <FaqSection heading="Questions about Fund Your Deal" items={FAQ} />

      <Container className="pb-[72px]">
        <div className="flex flex-wrap items-center justify-between gap-7 rounded-3xl bg-ink p-[clamp(32px,5vw,64px)] text-white">
          <div className="flex max-w-[560px] flex-col gap-3">
            <h2 className="text-[clamp(28px,3.2vw,40px)] font-semibold leading-[1.1] tracking-[-0.03em]">Got a deal in hand?</h2>
            <p className="text-[17px] leading-relaxed text-mist">About 60 seconds to apply, no credit pull to apply, and a loan specialist on the phone with you.</p>
          </div>
          <ButtonLink href="/get-funding" variant="lime" size="lg">
            {SITE.cta}
          </ButtonLink>
        </div>
      </Container>

      <Sources sources={SOURCES} updated="2026-10-26" />
    </>
  );
}
