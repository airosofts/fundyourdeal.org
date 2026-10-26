import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { LeadForm } from "@/components/LeadForm";
import { MatchedForm } from "@/components/MatchedForm";
import { PageIntro } from "@/components/PageIntro";
import { FaqSection } from "@/components/sections";
import { Container, Eyebrow, H2 } from "@/components/ui";

export const metadata: Metadata = {
  title: "Get Funding: Apply in 60 Seconds",
  description: "Get funding for investment property fast: DSCR, fix and flip, bridge, BRRRR, construction and portfolio loans. About 60 seconds to apply, no credit pull.",
  alternates: { canonical: "/get-funding" },
};

const NEXT: { title: string; text: string }[] = [
  { title: "A fast call back", text: "A loan specialist calls or texts the number you gave as soon as your request comes in during business hours." },
  { title: "The deal, in detail", text: "The property, the price or value, the rent or rehab budget, your timeline and how you’ll hold title." },
  { title: "Your terms in writing", text: "Rate, leverage, fees and prepayment terms, with the document list to close. Nothing you submit commits you to a loan." },
];

const FAQ = [
  {
    q: "What happens after I submit the form?",
    a: "A loan specialist calls or texts you at the number you gave, as soon as your request comes in during business hours. The call covers the property, the numbers and your timeline, and then you get your terms in writing. Submitting doesn’t commit you to a loan, and applying doesn’t touch your credit.",
  },
  {
    q: "How much do I need to know about the deal to apply?",
    a: "Very little. The form asks for ranges, not exact figures: what you’re financing, whether you’re buying or refinancing, the property type, a loan amount range, a credit range, your experience on project loans and the property ZIP code. The exact price, rent, rehab budget and timeline come on the call.",
  },
  {
    q: "What if I don’t know my credit score?",
    a: "Pick the range you think is closest. The form only asks for a rough band and never pulls your credit. If you’re unsure, the score many banks and card issuers show in their apps is usually close enough to choose a range. Your loan specialist tells you before any credit check later in the process.",
  },
  {
    q: "Why is email optional?",
    a: "Because a call or text is the fastest way for a loan specialist to reach you, so your mobile number is the one contact detail the form needs. Add an email if you’d also like to hear from us there. Either way, the first conversation is by phone, where the details of your deal get sorted quickly.",
  },
];

export default function Page() {
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Get funding" }]} title="Get your deal funded fast">
        <p>
          Start with your name and number, then a few quick taps about the deal: about 60 seconds, no credit pull. A loan specialist calls you back fast with your terms.
          Investment property only.
        </p>
      </PageIntro>
      <Container className="pb-[88px] pt-4">
        {/* The ?loan= preset is read on the client; the static shell shows the unfilled form. */}
        <Suspense fallback={<LeadForm variant="page" />}>
          <MatchedForm />
        </Suspense>
      </Container>

      <section className="border-t border-line bg-white">
        <Container className="grid items-start gap-12 py-[72px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr))]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Eyebrow>After you submit</Eyebrow>
              <H2>What happens next.</H2>
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
          <div className="flex flex-col gap-4 rounded-2xl border border-line bg-paper p-7 text-[15px] leading-relaxed text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2">
            <Eyebrow>Have these handy for the call</Eyebrow>
            <ul className="flex list-disc flex-col gap-2.5 pl-5">
              <li>The property address, or the area you’re buying in, and the price or current value.</li>
              <li>
                For a rental: the rent or lease, plus the tax and insurance bills. They set the property’s DSCR, the{" "}
                <Link href="/glossary#dscr">debt service coverage ratio</Link>: monthly rent ÷ the monthly payment of principal, interest, taxes, insurance and dues (PITIA).
              </li>
              <li>For a flip or BRRRR: the rehab budget, the after-repair value you expect and the deals you’ve done.</li>
              <li>For a new build: the lot, the plans, permit status and the construction budget.</li>
              <li>Whether you’ll borrow in your own name or an LLC.</li>
            </ul>
            <p>
              No documents are needed to apply. Want the steps in full? Read <Link href="/how-it-works">how it works</Link>, or check your numbers first with the{" "}
              <Link href="/calculators/dscr">DSCR calculator</Link>.
            </p>
          </div>
        </Container>
      </section>

      <FaqSection heading="Applying: quick answers" items={FAQ}>
        <p className="font-mono text-xs leading-relaxed text-muted">
          Business-purpose loans for investment property only. A property that you or a family member will live in needs a residential mortgage instead. All loans are subject to
          underwriting and approval.
        </p>
      </FaqSection>
    </>
  );
}
