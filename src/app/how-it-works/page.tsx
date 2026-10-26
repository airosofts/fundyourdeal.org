import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageIntro } from "@/components/PageIntro";
import { CompareTable, FaqSection, Sources } from "@/components/sections";
import { ButtonLink, Check, Container, Eyebrow, H2 } from "@/components/ui";
import { OCCUPANCY_ANSWERS, OCCUPANCY_QUESTION, SHARE_CONSENT_TEXT, SUBMIT_LABEL, TCPA_CONSENT_TEXT } from "@/lib/consent";
import { CREDIT, EXPERIENCE, LOAN_RANGES, LOAN_TYPES, PROPERTY_TYPES, PURPOSES } from "@/lib/leadSpec";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "How It Works: From Contract to Closing | Fund Your Deal" },
  description:
    "Apply in about 60 seconds, no credit pull. Talk to a loan specialist, get terms in writing, then close. Published closing times and documents by loan type.",
  alternates: { canonical: "/how-it-works" },
};

const labels = (list: readonly { label: string }[]) => list.map((o) => o.label);

// The path at a glance; each item jumps to its section below.
const PATH: { href: string; label: string; text: string }[] = [
  { href: "#the-form", label: "Apply", text: "About 60 seconds. Contact details, then quick taps. No credit pull to apply." },
  { href: "#after", label: "Talk", text: "A loan specialist phones or texts you to work through the deal." },
  { href: "#after", label: "Terms", text: "Rate, leverage, points, fees and prepayment terms in writing, with the document list." },
  { href: "#timelines", label: "Close", text: "Appraisal, underwriting and signing. Project loans then pay out the rehab in draws." },
];

// Screens 2–9 of the lead form (docs/lead-form.md). Options come straight from leadSpec, so this list can't drift from the form.
const TAPS: { ask: string; why: string; options: readonly string[] }[] = [
  {
    ask: OCCUPANCY_QUESTION,
    why: "Fund Your Deal funds investment property only. Answering no confirms the loan is for a business purpose. A property you or a relative will occupy needs a residential mortgage lender instead.",
    options: Object.values(OCCUPANCY_ANSWERS),
  },
  { ask: "The kind of deal", why: "Picks the loan program, and with it the questions that follow.", options: labels(LOAN_TYPES) },
  { ask: "Purchase or refinance", why: "Cash-out appears for rental loans only. Flips, BRRRR and new builds buy or refinance.", options: labels(PURPOSES) },
  { ask: "The property type", why: "Land shows up only for new construction, and condos drop off that list.", options: labels(PROPERTY_TYPES) },
  { ask: "How much funding the deal needs", why: "A range is enough here. You settle the exact amount with the loan specialist.", options: labels(LOAN_RANGES) },
  { ask: "Your credit score, roughly", why: "You pick a band yourself. Nothing is pulled from a credit bureau.", options: CREDIT },
  {
    ask: "Deals completed in the past 3 years",
    why: "Project loans only: flips, BRRRR, bridge and new construction. Rental loans skip this screen. Track record moves leverage and rate on project loans.",
    options: labels(EXPERIENCE),
  },
  { ask: "The property’s ZIP code", why: "Five digits. No address yet? Enter the ZIP code of the area you’re targeting.", options: [] },
];

const AFTER: { stage: string; happens: ReactNode; faster: ReactNode }[] = [
  {
    stage: "The call",
    happens: (
      <>
        A loan specialist reaches you by phone or text at the mobile number from screen one. Expect questions on the address, the price or current value and the rent. On a rental, the rent and the expected
        payment give you the DSCR (<Link href="/glossary#dscr">debt service coverage ratio</Link>): the property’s monthly rent divided by its total monthly payment. On a project, it’s
        the rehab budget, the <Link href="/glossary#arv">after-repair value</Link> and your past deals. You’ll also cover your closing date and whose name goes on the loan: yours
        or your LLC’s.
      </>
    ),
    faster: <>Have the contract open. The closing date is often the number that decides it, because it sets which loan can close in time.</>,
  },
  {
    stage: "Your terms, in writing",
    happens: (
      <>
        The rate; the leverage, quoted as <Link href="/glossary#ltv">LTV</Link>, <Link href="/glossary#ltc">LTC</Link> or a share of after-repair value; the term;{" "}
        <Link href="/glossary#points">points</Link> and lender fees; any prepayment terms; and the conditions to close, with the document list attached. See{" "}
        <Link href="/rates">the rate ranges lenders have published</Link>.
      </>
    ),
    faster: <>Read the leverage line first. It tells you how much cash you bring to the closing table.</>,
  },
  {
    stage: "Credit, appraisal and underwriting",
    happens: (
      <>
        You’re told before any credit check. The appraiser confirms the value, plus market rent on a rental or after-repair value on a project. The licensed lender then
        underwrites the file: title, insurance, your entity, and whether the numbers fit the program. A low appraisal can change the leverage.
      </>
    ),
    faster: <>Get the insurance quote and your LLC documents together while the appraisal is out, so the file is complete the day it comes back.</>,
  },
  {
    stage: "Closing and funding",
    happens: (
      <>
        You sign in your own name or your LLC’s. A rental loan funds in full at closing. A project loan funds the purchase at closing and pays out the rehab or build budget in{" "}
        <Link href="/glossary#draws">draws</Link> after each inspection. Lima One published draw funding within 24 hours and Easy Street within 48 hours.
      </>
    ),
    faster: <>Send each draw request with photos as soon as a stage is done. LendingOne published same-day virtual inspections.</>,
  },
];

const TIMELINE: string[][] = [
  [
    "Fix and flip or hard money",
    "7 days (Kiavi); 7–10 business days (LendingOne); 10 business days (RCN Capital)",
    "The appraisal’s after-repair value and the lender’s review of your rehab budget",
  ],
  ["Bridge", "7–14 business days (Kiavi, LendingOne)", "Appraisal, title and a check that the sale or refinance exit holds up"],
  ["DSCR rental", "14–21 days (Defy); 30 days (Easy Street); 34-day average (Griffin)", "The appraisal, which has to estimate market rent as well as value"],
  [
    "BRRRR",
    "Two closings: the rehab loan on a fix and flip timeline, then a rental refinance on the DSCR timeline",
    "Seasoning before the refinance: 90 days at some lenders, waived at others when they refinance their own rehab loan",
  ],
  [
    "Ground-up construction",
    "Not published by Kiavi, LendingOne or Lima One (checked October 26, 2026)",
    "Plans, permits and the budget review. After closing, draws fund in as little as 24 hours (Lima One) or 2 days (LendingOne)",
  ],
];

const READY: { loan: string; items: string[]; note: ReactNode }[] = [
  {
    loan: "Fix and flip or hard money",
    items: [
      "Signed purchase contract showing the closing date",
      "Line-item rehab budget and scope of work",
      "Comparable sales that back up your after-repair value",
      "Past deals, if any: address, buy and sell price, dates",
      "Bank statements covering the down payment and closing costs",
      "LLC documents, if you’re borrowing in an entity",
    ],
    note: <>Lenders such as Kiavi, Lima One and RCN Capital published 100% rehab financing, but draws are paid after inspection, so you front each stage.</>,
  },
  {
    loan: "BRRRR",
    items: ["Everything on the flip list", "The rent you expect once it’s finished, with rental comps", "Your refinance plan: which loan, and roughly when"],
    note: (
      <>
        Seasoning rules decide when you can refinance out. Some lenders want about 90 days; others waive it when they refinance their own rehab loan. The{" "}
        <Link href="/calculators/brrrr">BRRRR calculator</Link> shows what comes back.
      </>
    ),
  },
  {
    loan: "Bridge",
    items: ["Purchase contract, or a payoff statement if you’re refinancing", "Proof of the cash or equity going in", "A written exit: list price and timing for a sale, or the loan you’ll refinance into"],
    note: (
      <>
        Published terms run 12 to 24 months (Roc Capital, Lima One, Kiavi), so the <Link href="/glossary#exit-strategy">exit</Link> has to fit inside them.
      </>
    ),
  },
  {
    loan: "Ground-up construction",
    items: ["Lot contract or deed", "Plans and permit status", "Construction budget and draw schedule", "Your builder’s contract and details", "A list of your completed builds"],
    note: <>Permits change the money: Roc Capital and Civic published land advances of up to 75%, or 60% on an unpermitted lot.</>,
  },
  {
    loan: "Rental purchase or refinance",
    items: [
      "Purchase contract, or the current mortgage statement",
      "Signed leases, or a market-rent estimate if it’s vacant",
      "Bank statements for the down payment and reserves",
      "A landlord insurance quote and your LLC documents",
      "Short-term rental: 12 months of bookings on a refinance, or an income projection such as AirDNA on a purchase",
    ],
    note: (
      <>
        Lenders count the lower of the lease and market rent. Published reserve rules ran from none (Kiavi) to 3 months of <Link href="/glossary#pitia">PITIA</Link> (Defy) and 3–9
        months (Easy Street).
      </>
    ),
  },
  {
    loan: "Cash-out refinance or portfolio",
    items: [
      "The settlement statement from your purchase",
      "Receipts for work done since you bought",
      "Current mortgage statements and leases",
      "Portfolio: a schedule of every property with value, loan balance, rent and lease status",
    ],
    note: <>Kiavi, LendingOne and Lima One typically ask for roughly 90 days on title before they’ll do a cash-out. On portfolios, Roc Capital and Civic look for at least 90% of units leased.</>,
  },
];

const FAQ = [
  {
    q: "Does applying affect my credit score?",
    a: "No. Applying never touches your credit report; you just pick a rough range on the form. A credit check comes later, before a loan can be approved, because your score still moves leverage and rate even when the property carries the loan. You’re told before that check happens, so nothing lands on your report by surprise.",
  },
  {
    q: "My closing is 10 days away. Can a loan close that fast?",
    a: "Sometimes, depending on the loan. In October 2026, Kiavi published 7-day closings on fix and flip loans, and Kiavi and LendingOne published 7–14 business days on bridge loans. Rental loans run longer; Defy published 14–21 days. Give the loan specialist your date on the first call and send documents the day they’re asked for. No closing date is guaranteed.",
  },
  {
    q: "What happens if I stop partway through the form?",
    a: `Your request is saved as soon as you press “${SUBMIT_LABEL}” on the first screen, so a loan specialist can still reach you at the number you gave. The taps after that only help the specialist prepare. Anything you skipped gets covered on the call instead.`,
  },
  {
    q: "Why does the form ask whether I’ll live in the property?",
    a: "Because Fund Your Deal funds investment property only, and the answer decides whether a business-purpose loan fits at all. If you or a family member will live there, including one side of a duplex or one apartment in a fourplex, the loan should come from a residential mortgage lender. Answering that it’s an investment property confirms the business purpose.",
  },
  {
    q: "Does the experience question decide whether I qualify?",
    a: "Not on its own. It only appears for flips, BRRRR, bridge and construction loans, and it mostly shapes leverage and pricing. RCN Capital, for example, treats 3 rehabs in 3 years as experienced, while Roc Capital and Civic published no experience minimum for flips in October 2026. New construction is the exception: lenders usually want at least one completed build.",
  },
  {
    q: "What do the written terms include?",
    a: "The rate, the leverage as a share of the price, cost or after-repair value, the term, points and lender fees, any prepayment terms or extension options, and the conditions to close, with the document list. Start with the leverage line, since it sets how much cash you bring. Nothing commits you until you sign the loan documents.",
  },
  {
    q: "Do I need an LLC before I apply?",
    a: "No. You can apply in your own name and decide later. Some rental lenders, including Lima One, Roc Capital and Civic, require an LLC by closing, and lenders such as Griffin pair the LLC with a personal guarantee. Whether to form one, and where, is a question for your attorney or CPA.",
  },
  {
    q: "Can I apply before I have a signed contract?",
    a: "Yes. Applying early gives you a working budget, so you can write offers knowing roughly how a loan would be sized. Use the ZIP code of the area you’re buying in and your best guess at the amount. Final terms wait for a real address, because the appraisal and the property itself drive them.",
  },
  {
    q: "What slows a closing down the most?",
    a: "Usually the appraisal, and then whatever is still missing from the file: an insurance binder, entity documents, a rehab budget the lender can follow, or a title problem. You can’t hurry the appraiser, but you can have everything else ready before the report comes back. The deal-ready lists on this page show what each loan needs.",
  },
];

const SOURCES = [
  { label: "Kiavi — Fix and flip loans", url: "https://www.kiavi.com/loans/fix-and-flip" },
  { label: "Kiavi — Bridge loans", url: "https://www.kiavi.com/loans/bridge-loans" },
  { label: "Kiavi — DSCR rental loans", url: "https://www.kiavi.com/loans/dscr" },
  { label: "LendingOne — Fix and flip loans", url: "https://lendingone.com/loan-types/fix-and-flip-loans/" },
  { label: "LendingOne — Bridge loans", url: "https://lendingone.com/loan-types/bridge-loans/" },
  { label: "LendingOne — Rental loans", url: "https://lendingone.com/rental-loans/" },
  { label: "LendingOne — New construction loans (fetched October 26, 2026)", url: "https://lendingone.com/loan-types/new-construction-loans/" },
  { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
  { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
  { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
  { label: "Easy Street Capital — EasyRent", url: "https://easystreetcap.com/easyrent" },
  { label: "Easy Street Capital — EasyFix", url: "https://easystreetcap.com/easyfix/" },
  { label: "Easy Street Capital — Short-term rental financing", url: "https://easystreetcap.com/short-term-rental-financing/" },
  { label: "Lima One Capital — Fix and flip", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
  { label: "Lima One Capital — Bridge loans", url: "https://www.limaone.com/bridge-loans/" },
  { label: "Lima One Capital — Rental loans", url: "https://www.limaone.com/rental/" },
  { label: "Lima One Capital — Short-term rental loans", url: "https://www.limaone.com/short-term-rental-loans/" },
  { label: "Lima One Capital — New construction loans (fetched October 26, 2026)", url: "https://www.limaone.com/new-construction-loans/" },
  { label: "Kiavi — New construction (fetched October 26, 2026)", url: "https://www.kiavi.com/loans/new-construction-infill" },
  { label: "Roc Capital — Fix and flip", url: "https://roccapital.com/fix-and-flip" },
  { label: "Roc Capital — Ground-up construction", url: "https://roccapital.com/ground-up" },
  { label: "Roc Capital — Stabilized bridge", url: "https://roccapital.com/stabilized-bridge" },
  { label: "Roc Capital — Single-property rentals", url: "https://roccapital.com/single-property-rentals" },
  { label: "Roc Capital — Rental portfolios", url: "https://roccapital.com/rental-portfolios" },
  { label: "Civic Financial Services — Fix and flip", url: "https://civicfs.com/fix-and-flip/" },
  { label: "Civic Financial Services — Ground-up construction", url: "https://civicfs.com/ground-up-construction-loan/" },
  { label: "Civic Financial Services — Rental loans", url: "https://civicfs.com/rental/" },
  { label: "Civic Financial Services — Rental portfolio loans", url: "https://civicfs.com/rental-portfolio-loan/" },
];

export default function Page() {
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "How it works" }]} eyebrow="How it works" title="From signed contract to funded loan, step by step.">
        <p>
          Applying takes about 60 seconds, and there’s no credit pull to apply: you type your name and mobile number, then tap through a handful of questions about the deal. After that, a loan specialist
          calls, your terms arrive in writing, and the file moves to closing. Investment property only.
        </p>
      </PageIntro>

      <Container className="pb-12 pt-2">
        <ol className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr))]">
          {PATH.map((p, i) => (
            <li key={p.label}>
              <a href={p.href} className="flex h-full flex-col gap-1.5 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-ink">
                <span className="font-mono text-xs uppercase tracking-[0.08em] text-brand">
                  {String(i + 1).padStart(2, "0")} · {p.label}
                </span>
                <span className="text-[15px] leading-relaxed text-ink-2">{p.text}</span>
              </a>
            </li>
          ))}
        </ol>
      </Container>

      <section id="the-form" className="scroll-mt-20 border-t border-line bg-white">
        <Container className="grid items-start gap-12 py-[80px] lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <Eyebrow>Part 1 · The form</Eyebrow>
            <H2>Contact details first. Then a few quick taps and a ZIP code.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              The first screen is where the typing happens; after it, you tap answers and finish with a five-digit ZIP code. Press “{SUBMIT_LABEL}” on that first screen and
              your request is saved, so if your phone rings halfway through, a loan specialist can still reach you.
            </p>
            <p className="text-[15px] leading-relaxed text-ink-2">
              Coming from a program page? The questions that page already answers, such as the kind of deal, are filled in and skipped.
            </p>
            <div>
              <ButtonLink href="/get-funding" size="lg">
                {SITE.cta}
              </ButtonLink>
            </div>
          </div>

          <ol className="flex flex-col gap-4">
            <li className="rounded-2xl border border-ink p-6">
              <div className="font-mono text-xs uppercase tracking-[0.08em] text-brand">Screen 01 · Your details</div>
              <ul className="mt-3 grid gap-2 text-[15px] sm:grid-cols-2">
                {["First and last name", "Mobile phone number", "Email (optional)", "Call and text consent (required)"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <details className="mt-4 text-sm leading-relaxed text-ink-2">
                <summary className="cursor-pointer font-semibold text-ink">Read the exact consent wording</summary>
                <p className="mt-2">{TCPA_CONSENT_TEXT}</p>
                <p className="mt-2">{SHARE_CONSENT_TEXT}</p>
              </details>
            </li>
            {TAPS.map((t, i) => (
              <li key={t.ask} className="rounded-2xl border border-line bg-paper p-6">
                <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Screen {String(i + 2).padStart(2, "0")}</div>
                <div className="mt-1.5 text-[17px] font-semibold">{t.ask}</div>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-2">{t.why}</p>
                {t.options.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2" aria-label="Answer choices">
                    {t.options.map((o) => (
                      <li key={o} className="rounded-lg border border-line bg-white px-3 py-1.5 text-sm">
                        {o}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="after" className="scroll-mt-20 border-t border-line">
        <Container className="flex flex-col gap-10 py-[80px]">
          <div className="flex max-w-[720px] flex-col gap-3">
            <Eyebrow>Part 2 · After you submit</Eyebrow>
            <H2>The call, your terms, then the closing table.</H2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line bg-white">
            <div className="hidden grid-cols-[200px_minmax(0,1.7fr)_minmax(0,1fr)] gap-6 bg-paper px-6 py-3 font-mono text-xs uppercase tracking-[0.06em] text-muted md:grid">
              <span>Stage</span>
              <span>What happens</span>
              <span>Move it faster</span>
            </div>
            <ol>
              {AFTER.map((s, i) => (
                <li key={s.stage} className="grid gap-3 border-t border-line px-6 py-6 first:border-t-0 md:grid-cols-[200px_minmax(0,1.7fr)_minmax(0,1fr)] md:gap-6 md:first:border-t">
                  <span className="text-[17px] font-semibold">
                    <span className="mr-2 font-mono text-[15px] font-normal text-brand">{String(i + 1).padStart(2, "0")}</span>
                    {s.stage}
                  </span>
                  <p className="text-[15px] leading-relaxed text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2">{s.happens}</p>
                  <p className="rounded-xl bg-paper p-4 text-[15px] leading-relaxed text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2">
                    <span className="mb-1 block font-mono text-xs uppercase tracking-[0.06em] text-muted md:hidden">Move it faster</span>
                    {s.faster}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section id="timelines" className="scroll-mt-20 border-t border-line bg-white">
        <Container className="flex flex-col gap-8 py-[80px]">
          <div className="flex max-w-[760px] flex-col gap-3">
            <Eyebrow>Closing timelines</Eyebrow>
            <H2>How fast each loan type can close.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              These closing times come from each lender’s program page, pulled in October 2026. They show what a lender says it can do, not a promise for your file.
            </p>
          </div>
          <CompareTable columns={["Loan", "Published closing time", "What usually sets the pace"]} rows={TIMELINE} highlight={1} />
          <p className="max-w-[760px] text-[15px] leading-relaxed text-ink-2">
            Short-term rental, cash-out refinance and portfolio loans are sized on rent the way DSCR loans are. Our October 2026 research found no separate published closing times for
            them. For the full picture, read <Link href="/guides/closing-an-investor-loan-fast" className="text-brand underline underline-offset-2">what sets an investor loan’s closing timeline</Link>.
          </p>
        </Container>
      </section>

      <section id="deal-ready" className="scroll-mt-20 border-t border-line">
        <Container className="flex flex-col gap-10 py-[80px]">
          <div className="flex max-w-[760px] flex-col gap-3">
            <Eyebrow>Part 3 · Be deal-ready</Eyebrow>
            <H2>The file each loan needs, so nothing waits on you.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              None of this is needed to apply. Pull it together before the call, and the document request won’t be what holds up your closing date.
            </p>
          </div>
          <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,330px),1fr))]">
            {READY.map((r) => (
              <div key={r.loan} className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-6">
                <h3 className="text-[19px] font-semibold tracking-[-0.01em]">{r.loan}</h3>
                <ul className="flex flex-col gap-2 text-[15px] leading-relaxed text-ink-2">
                  {r.items.map((it) => (
                    <li key={it} className="flex gap-2.5">
                      <Check className="mt-1.5 text-brand" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto border-t border-line pt-4 text-sm leading-relaxed text-muted [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2">{r.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection heading="Questions about the process" items={FAQ} />

      <Container className="pb-[72px]">
        <div className="flex flex-wrap items-center justify-between gap-7 rounded-3xl bg-brand p-[clamp(32px,5vw,64px)] text-white">
          <div className="flex max-w-[560px] flex-col gap-3">
            <h2 className="text-[clamp(28px,3.2vw,40px)] font-semibold leading-[1.1] tracking-[-0.03em]">Your closing date isn’t moving. Start now.</h2>
            <p className="text-[17px] leading-relaxed text-white">About 60 seconds, no credit pull to apply.</p>
          </div>
          <ButtonLink href="/get-funding" variant="light" size="lg">
            {SITE.cta}
          </ButtonLink>
        </div>
      </Container>

      <Sources sources={SOURCES} updated="2026-10-26" />
    </>
  );
}
