import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageIntro } from "@/components/PageIntro";
import { CompareTable, DefinitionSection, FaqSection, Sources, StepsBand } from "@/components/sections";
import { ButtonLink, Container, Eyebrow, H2 } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "How It Works: Investor Loans Funded Fast | Fund Your Deal" },
  description: "How Fund Your Deal works: your details and a few quick taps in about 60 seconds, a call from a loan specialist, your terms in writing and a fast close.",
  alternates: { canonical: "/how-it-works" },
};

// The lead form, in order (docs/lead-form.md, form v3).
const WE_ASK: [string, string][] = [
  ["Your name and number", "First and last name, mobile number and your OK to be called or texted. Email is optional. These come first so a loan specialist can reach you even if you stop partway."],
  ["Investment property or not", "Will you or a family member live in the property? Our loans are for investment property only. If it’s a home you’ll live in, a residential mortgage is the right fit."],
  ["What you’re financing", "A rental, a short-term rental, a fix and flip, a buy-rehab-rent deal, a bridge loan, a new build or several rentals."],
  ["Buying or refinancing", "A purchase, a refinance or, on rental loans, a cash-out refinance."],
  ["The property", "Single-family, 2–4 units, a condo or townhome, 5+ units, or land for a new build."],
  ["How much you need", "One tap from five ranges, from under $150,000 to $1 million and up. The exact number comes on the call."],
  ["Your credit, roughly", "Under 620, 620–675, 675–720 or 720+. A rough range is enough; the form never pulls your credit."],
  ["Your experience", "Project loans only (flips, buy-rehab-rent, bridge and new builds): deals in the last 3 years, from none to 4 or more."],
  ["Property ZIP code", "Five digits. Still shopping? Use the ZIP code where you plan to buy."],
];

const AFTER: { title: string; text: ReactNode }[] = [
  {
    title: "A fast call back",
    text: (
      <>
        A loan specialist calls to confirm the property address, the price or current value, the rent or lease and, for project loans, the rehab budget, the after-repair value
        and your track record. Expect questions about your timeline and whether you’ll borrow in your own name or an LLC.
      </>
    ),
  },
  {
    title: "Your terms in writing",
    text: (
      <>
        The rate, leverage, term, points and fees and the prepayment structure, in writing, with what’s needed to close. See <Link href="/rates#factors">what moves the rate</Link>,
        and look up any term in the <Link href="/glossary">investor loan glossary</Link>.
      </>
    ),
  },
  {
    title: "Credit check and documents",
    text: (
      <>
        We tell you before any credit check. Rental loans qualify on the property’s DSCR, the <Link href="/glossary#dscr">debt service coverage ratio</Link>: each month’s rent
        divided by the property’s monthly payment, counting principal, interest, taxes, insurance and association dues (PITIA). So there are no tax returns or pay stubs to send, just
        documents on the property, your cash and your entity.
      </>
    ),
  },
  {
    title: "Appraisal and underwriting",
    text: (
      <>
        The appraiser confirms value and, for rentals, market rent; for projects, the after-repair value. Underwriting checks title, insurance, the entity and the numbers against the
        program’s limits. If the appraisal comes in low, the leverage can change, and your loan specialist walks you through the options.
      </>
    ),
  },
  {
    title: "Close and get funded",
    text: (
      <>
        Sign in your name or your LLC. Rental loans fund in full at closing. Project loans fund the purchase at closing and release the rehab or construction budget in{" "}
        <Link href="/glossary#draws">draws</Link> as work is done.
      </>
    ),
  },
];

const DOCUMENTS: [string, string][] = [
  ["DSCR rental loan", "Purchase contract or current mortgage statement, the lease if it’s rented, bank statements for the down payment and reserves, entity documents if you borrow in an LLC, and proof of insurance."],
  ["Short-term rental", "The same, plus 12 months of booking history on a refinance. On a purchase, lenders work from a third-party income projection or long-term market rent."],
  ["Cash-out refinance", "Current mortgage statement, the lease, the purchase settlement statement and receipts for any work you’ve done since you bought, which matter if you’ve owned it only a few months."],
  ["Fix and flip or BRRRR", "Purchase contract, a rehab budget and scope of work, your track record if you have one, bank statements and entity documents."],
  ["Bridge loan", "Purchase contract or payoff statement, bank statements and the exit plan: who refinances it, or how and when you’ll sell."],
  ["Ground-up construction", "Lot details, plans, permit status, a construction budget and schedule, and your builder’s details and completed projects."],
  ["Portfolio loan", "A schedule of every property with its rent, lease, current loan balance and value, plus entity documents."],
];

const TIMELINE: string[][] = [
  ["DSCR rental loan", "About 2–5 weeks: 14–21 days at Defy, an average of 34 days at Griffin", "The appraisal and its market-rent estimate"],
  ["Fix and flip", "About 1–3 weeks: 7 days at Kiavi, 7–10 business days at LendingOne, 10 business days at RCN", "The appraisal with after-repair value, and the rehab budget review"],
  ["Bridge loan", "7–14 business days (Kiavi, LendingOne)", "The appraisal and the exit review"],
];

const FAQ = [
  {
    q: "How fast will someone call me?",
    a: "Fast. A loan specialist reaches out as soon as your request comes in during business hours, by phone or text at the number you gave. Have the property address, the price or value, and the rent or rehab numbers handy, and the first call can get you most of the way to written terms.",
  },
  {
    q: "Do you pull my credit?",
    a: "Not to apply. The form asks for a rough credit range and never touches your credit report. Before a loan is approved, the lender does check credit, because your score affects leverage and rate even when the property qualifies on its rent. We tell you before any credit check happens.",
  },
  {
    q: "Why does the form ask for my phone number first?",
    a: "So a loan specialist can reach you even if you don’t finish every question. Your name, mobile number and consent to a call or text come first; email is optional. The quick taps after that, covering the property, the amount, your credit range and the ZIP code, take seconds and let the specialist come to the call prepared.",
  },
  {
    q: "What documents will I need?",
    a: "Nothing to start. Once you move forward, expect the purchase contract or current mortgage statement, recent bank statements, leases for rentals, a rehab budget and scope of work for flips, plans and a budget for new builds, and LLC documents if you borrow in an entity. Rental loans that qualify on the property’s rent don’t need tax returns or pay stubs.",
  },
  {
    q: "Can I apply before I have a property under contract?",
    a: "Yes. Applying while you shop tells you your budget and lets you move fast when you find the deal. Pick the property type you’re after, your best estimate of the amount and the ZIP code where you plan to buy. Final terms depend on the actual property and its appraisal, so expect them once you have an address.",
  },
  {
    q: "Do I need an LLC to apply?",
    a: "No. You can apply as an individual and decide later. Investor lenders lend to LLCs, and some require one at closing, usually with a personal guarantee from the owners. Whether to set one up, and how, is a legal and tax question for your attorney or CPA.",
  },
  {
    q: "What if I’m not sure which loan I need?",
    a: "Pick the closest option, or describe your plan on the call. Holding and renting long-term usually means a DSCR loan. Renovating and selling means fix and flip. Renovating, renting and then refinancing is BRRRR. Buying fast and refinancing later is a bridge loan. Your loan specialist confirms the fit before you get terms.",
  },
  {
    q: "How long does it take to close an investor loan?",
    a: "It depends on the program. Lenders publish about one to three weeks for fix and flip loans, 7–14 business days for bridge loans and about two to five weeks for DSCR rental loans, where the appraisal takes longest. Sending documents quickly and lining up insurance early are the two things that most shorten your own timeline.",
  },
  {
    q: "Is the rate on your website the rate I’ll get?",
    a: "No. The rates page shows published market ranges with dates, so you can see where investor rates sit. Your rate depends on your credit, leverage, the property’s rent coverage or your experience, the prepayment structure and any points, and it comes in writing after the call.",
  },
  {
    q: "Why do you only lend on investment property?",
    a: "Investment property loans are business loans, with their own rules and underwriting, and that’s all we do. The property has to be one that neither you nor a family member will live in. If you plan to live there, a residential mortgage lender is the right fit.",
  },
];

const SOURCES = [
  { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
  { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
  { label: "Kiavi — Fix and flip loans", url: "https://www.kiavi.com/loans/fix-and-flip" },
  { label: "Kiavi — Bridge loans", url: "https://www.kiavi.com/loans/bridge-loans" },
  { label: "LendingOne — Fix and flip loans", url: "https://lendingone.com/loan-types/fix-and-flip-loans/" },
  { label: "LendingOne — Bridge loans", url: "https://lendingone.com/loan-types/bridge-loans/" },
  { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
];

export default function Page() {
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "How it works" }]} eyebrow="Fast funding for investors" title="From first question to funded — fast.">
        <p>
          Here’s how it works at {SITE.name}: start with your name and number, answer a few quick taps about the deal, and you’re done in about 60 seconds with no credit pull.
          Then a loan specialist calls, you get your terms in writing and you close fast. Investment property only.
        </p>
      </PageIntro>

      <StepsBand
        eyebrow="Four steps"
        heading="How you get funded."
        items={[
          { title: "Tell us who you are, then about the deal", text: "Name, mobile number and email if you like, then a few quick taps: loan type, amount, credit range, ZIP. About 60 seconds, no credit pull." },
          { title: "Talk to a loan specialist", text: "A loan specialist calls back fast to walk through the property, your numbers and your deadline." },
          { title: "Get your terms", text: "Rate, leverage, fees and prepayment terms in writing, so you can lock in the deal and move." },
          { title: "Close and get funded", text: "Lenders publish one to three weeks for most short-term loans and two to five weeks for rental loans, mostly waiting on the appraisal." },
        ]}
      />

      <section className="bg-white">
        <Container className="grid items-start gap-12 py-[88px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="flex flex-col gap-3.5">
            <Eyebrow>What we ask</Eyebrow>
            <H2>Your details first, then a few quick taps.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              Investor lenders care more about the property than your paycheck, so that’s what the questions cover. It isn’t a long application: no income, no
              documents and no Social Security number to start.
            </p>
            <p className="text-[15px] leading-relaxed text-ink-2">Starting from a loan program’s page? The form skips the questions that page already answers.</p>
          </div>
          <dl className="flex flex-col text-[15px]">
            {WE_ASK.map(([k, v]) => (
              <div key={k} className="grid gap-1 border-t border-line py-4 last:border-b sm:grid-cols-[220px_1fr] sm:gap-6">
                <dt className="font-semibold">{k}</dt>
                <dd className="leading-relaxed text-ink-2">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="flex flex-col gap-10 py-[88px]">
          <div className="flex max-w-[680px] flex-col gap-3">
            <Eyebrow>After you submit</Eyebrow>
            <H2>What happens between the form and the closing table.</H2>
          </div>
          <ol className="grid gap-x-8 gap-y-2 [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
            {AFTER.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[44px_1fr] gap-3 border-t border-line py-5">
                <span className="font-mono text-[15px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="text-[17px] font-semibold">{s.title}</div>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <DefinitionSection
        eyebrow="Documents"
        heading="What you’ll send, by loan type."
        intro="Nothing is needed to apply. These are the documents lenders typically ask for once you move forward. Have them ready and you take days off the closing."
        rows={DOCUMENTS}
      />

      <section className="border-t border-line">
        <Container className="flex flex-col gap-8 py-[88px]">
          <div className="flex max-w-[720px] flex-col gap-3">
            <Eyebrow>Timeline</Eyebrow>
            <H2>How long closing takes.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              Published closing times from lenders’ own program pages, October 2026. Short-term loans move fastest because they’re sized on the deal; rental loans wait on an
              appraisal that also has to estimate market rent.
            </p>
          </div>
          <CompareTable columns={["Loan", "Published closing times", "What takes the longest"]} rows={TIMELINE} highlight={-1} />
        </Container>
      </section>

      <FaqSection heading="How-it-works questions" items={FAQ}>
        <p className="text-[15px] text-ink-2">
          Ready?{" "}
          <Link href="/get-funding" className="font-semibold underline underline-offset-4">
            Get your deal funded
          </Link>{" "}
          — or read the{" "}
          <Link href="/disclosures" className="font-semibold underline underline-offset-4">
            disclosures
          </Link>
          .
        </p>
      </FaqSection>

      <Container className="pb-[72px]">
        <div className="flex flex-wrap items-center justify-between gap-7 rounded-3xl bg-brand p-[clamp(32px,5vw,64px)] text-white">
          <h2 className="max-w-[560px] text-[clamp(28px,3.2vw,40px)] font-semibold leading-[1.1] tracking-[-0.03em]">Get your deal funded fast.</h2>
          <ButtonLink href="/get-funding" variant="light" size="lg">
            {SITE.cta}
          </ButtonLink>
        </div>
      </Container>

      <Sources sources={SOURCES} updated="2026-10-23" />
    </>
  );
}
