import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { LeadForm } from "@/components/LeadForm";
import { MatchedForm } from "@/components/MatchedForm";
import { PageIntro } from "@/components/PageIntro";
import { FaqSection, Sources } from "@/components/sections";
import { Container, Eyebrow, H2 } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Get Funding for Your Deal in 60 Seconds | Fund Your Deal" },
  description: "Start an investor loan request with your name and number, then a few taps about the deal. No credit pull to apply. Flip, bridge, BRRRR, build or rental.",
  alternates: { canonical: "/get-funding" },
};

const WHY: { title: string; text: string }[] = [
  {
    title: "The deciding questions need a conversation.",
    text: "Does the rehab budget hold up line by line? Will the after-repair value survive the comps? When does the contract close? A short call settles those faster than twenty more form fields could.",
  },
  {
    title: "Stop halfway and we can still help.",
    text: "Your request is saved as soon as you tap the first button. If the rest of the form goes unfinished, a loan specialist can still reach you and pick it up from there.",
  },
  {
    title: "Nothing happens without your OK.",
    text: "The checkbox gives a loan specialist permission to call or text that number about this request. Email is optional, and nothing on the form pulls your credit.",
  },
];

const NEXT: { title: string; text: string }[] = [
  {
    title: "We call or text you",
    text: "Requests that land during business hours get a call back fast. Send one after hours and we reach you the next business day.",
  },
  {
    title: "We size the deal with you",
    text: "Price or value, rehab or build budget, after-repair value, rent and closing date. You hear which test limits the loan: cost, after-repair value, value or rent coverage. That’s the number that decides it.",
  },
  {
    title: "Your terms arrive in writing",
    text: "Rate, leverage, points, fees and any prepayment penalty, with the list of documents needed to close. Sending the form commits you to nothing.",
  },
  {
    title: "Appraisal, title, closing",
    text: "Once you say go, the appraisal and title work start. Lenders’ published timelines in October 2026: flips from 7 days to about 3 weeks, bridge loans in 7 to 14 business days, rental loans in roughly 2 to 5 weeks.",
  },
];

const FAQ = [
  {
    q: "Does applying affect my credit?",
    a: "No. You pick a rough credit range, and the form never pulls your credit report. If the deal goes ahead and a credit check is needed later, you hear about it first, so nothing lands on your file by surprise.",
  },
  {
    q: "Do I need the property under contract to apply?",
    a: "No. Applying before you make offers tells you what a deal can borrow before you bid. Enter the ZIP code where you’re buying, and have your target price and rehab budget ready for the call. Once you are under contract the clock is running, so give us the closing date as soon as you have it.",
  },
  {
    q: "What if I don’t know my credit score?",
    a: "Choose the band that seems closest; it’s a range, not an exact number. If your bank or credit card app shows a score, that’s good enough to pick one. The precise score matters later, when it sets your leverage and pricing tier.",
  },
  {
    q: "Why isn’t email required?",
    a: "The first conversation happens by phone, so your mobile number is the one way we need to reach you. Add an email if you’d like your written terms and document list sent there as well.",
  },
  {
    q: "Can I apply for a home I’ll live in?",
    a: "Not here. We only fund business-purpose loans on investment property that you and your family won’t occupy. If you, a spouse or a relative will live there, even in one unit of a duplex, talk to a residential mortgage lender instead.",
  },
];

const SOURCES = [
  { label: "Kiavi — Fix and flip loans", url: "https://www.kiavi.com/loans/fix-and-flip" },
  { label: "Lima One — Fix and flip", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
  { label: "Kiavi — Bridge loans", url: "https://www.kiavi.com/loans/bridge-loans" },
  { label: "LendingOne — Bridge loans", url: "https://lendingone.com/loan-types/bridge-loans/" },
  { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
  { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
  { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
];

export default function Page() {
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Get funding" }]} eyebrow="About 60 seconds · No credit pull to apply" title="Get funding for your deal">
        <p>
          Your name and mobile number first, then a few quick taps about the property: what you’re financing, roughly how much, your credit range and the ZIP code. A loan
          specialist calls back with what this deal needs to get funded. Investment property only.
        </p>
      </PageIntro>
      <Container className="pb-[88px] pt-4">
        {/* The ?loan= preset is read on the client; the static shell shows the unfilled form. */}
        <Suspense fallback={<LeadForm variant="page" />}>
          <MatchedForm />
        </Suspense>
      </Container>

      <section id="why-phone" className="scroll-mt-20 border-t border-line bg-white">
        <Container className="grid items-start gap-12 py-[72px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="flex flex-col gap-3">
            <Eyebrow>Why your number comes first</Eyebrow>
            <H2>Deals get funded on a call, not in a form.</H2>
          </div>
          <div className="grid gap-x-8 gap-y-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
            {WHY.map((w) => (
              <div key={w.title} className="flex flex-col gap-2 border-t-2 border-ink pt-4">
                <span className="text-[17px] font-semibold">{w.title}</span>
                <span className="text-[15px] leading-relaxed text-ink-2">{w.text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="next" className="scroll-mt-20 border-t border-line">
        <Container className="grid items-start gap-12 py-[72px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr))]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Eyebrow>Once you hit submit</Eyebrow>
              <H2>Four steps from form to closing table.</H2>
            </div>
            <ol className="flex flex-col">
              {NEXT.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[44px_1fr] gap-3 border-t border-line py-4">
                  <span className="font-mono text-[15px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="text-[17px] font-semibold">{s.title}</div>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-2">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-7 text-[15px] leading-relaxed text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2">
            <Eyebrow>Bring these to the call</Eyebrow>
            <ul className="flex list-disc flex-col gap-2.5 pl-5">
              <li>Where the property is (an address, or the neighborhood you’re shopping), plus what you’re paying or what it’s worth today.</li>
              <li>Flip or BRRRR: the scope of work, its budget, your ARV estimate and a list of projects you’ve completed.</li>
              <li>
                Rental: the lease or market rent, plus the tax and insurance bills. Together they set the{" "}
                <Link href="/glossary#dscr">debt service coverage ratio (DSCR)</Link>: monthly rent over the full payment, meaning principal and interest plus taxes, insurance
                and any HOA dues.
              </li>
              <li>New build: the lot, the plans, where permits stand and the construction budget.</li>
              <li>The closing date on your contract, and whose name goes on the loan: yours or your LLC’s.</li>
            </ul>
            <p>
              You don’t need any documents to apply. For the whole process, read <Link href="/how-it-works">how funding works</Link>. To test a deal first, try the{" "}
              <Link href="/calculators/fix-and-flip">fix and flip calculator</Link> or the <Link href="/calculators/dscr">DSCR calculator</Link>.
            </p>
          </div>
        </Container>
      </section>

      <FaqSection heading="Before you apply" items={FAQ}>
        <p className="font-mono text-xs leading-relaxed text-muted">
          Business-purpose loans on investment property only. Every loan is subject to underwriting and approval.
        </p>
      </FaqSection>
      <Sources sources={SOURCES} updated="2026-10-26" />
    </>
  );
}
