import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Prose } from "@/components/Prose";
import { FaqSection } from "@/components/sections";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "About Fund Your Deal: Fast Loans for Real Estate Investors" },
  description:
    "About Fund Your Deal: fast business-purpose loans for investors on rentals, flips, bridge deals, new builds and portfolios. Investment property only.",
  alternates: { canonical: "/about" },
};

const FAQ = [
  {
    q: "Is Fund Your Deal a lender?",
    a: "Fund Your Deal is an associate of a licensed lender. You work with Fund Your Deal from the first call through closing, and every loan is subject to the licensed lender’s underwriting and approval; your loan documents name the lender of record. Fund Your Deal makes business-purpose loans on investment property only, never owner-occupied or consumer loans.",
  },
  {
    q: "What kinds of investors does Fund Your Deal work with?",
    a: "Anyone financing investment property for a business purpose, from a first rental or first flip to a portfolio of rentals held in an LLC. Rental loans usually don’t require experience. Project loans such as flips and new builds are priced and sized partly on your track record, and first-time investors often get lower leverage.",
  },
  {
    q: "Does Fund Your Deal finance a home I’ll live in?",
    a: "No. Every loan is for investment property that neither you nor a family member will live in, and that includes living in one unit of a 2–4 unit building while renting the others. If you’ll live in the property, a residential mortgage lender is the right place to start.",
  },
  {
    q: "Where do the rates and terms on this site come from?",
    a: "From lenders’ own published program pages and public loan data such as the federal HMDA files, each with the date it was pulled and the sources listed at the bottom of the page. They describe the market, not an offer. What you’re offered depends on the property, your credit and your track record, and it comes in writing after the call.",
  },
];

export default function Page() {
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "About" }]} eyebrow="About Fund Your Deal" title="Fast funding for real estate investors.">
        <p>
          {SITE.name} provides fast business-purpose loans to real estate investors on rentals, flips, bridge deals, new builds and portfolios, with a 60-second application and a
          fast close. Investment property only.
        </p>
      </PageIntro>
      <Prose>
        <h2>What Fund Your Deal does</h2>
        <p>
          We lend on property you own as an investment: homes you rent out, homes you renovate and sell, properties you need to buy before long-term financing is in place, and homes
          you build from the ground up. You deal with one company from the first call to the closing table: a loan specialist who knows investor lending, your terms in writing, and
          a closing timeline you can plan a contract around.
        </p>
        <p>
          Good deals don’t wait. Sellers want proof of funds, auctions want certainty, and a rehab that sits waiting on financing costs you interest, taxes and insurance every week.
          Most investor financing still starts with a long application and slow answers. {SITE.name} is built to move at the speed of the deal instead.
        </p>

        <h2>What we fund</h2>
        <ul>
          <li>
            <Link href="/dscr-loans">DSCR rental loans</Link> and <Link href="/short-term-rental-loans">short-term rental loans</Link>, which qualify on the property’s{" "}
            <Link href="/glossary#dscr">debt service coverage ratio (DSCR)</Link>: its monthly rent divided by its monthly payment of principal, interest, taxes, insurance and
            association dues (PITIA)
          </li>
          <li>
            <Link href="/fix-and-flip-loans">Fix and flip</Link>, <Link href="/hard-money-loans">hard money</Link>, <Link href="/bridge-loans">bridge</Link> and{" "}
            <Link href="/brrrr-loans">BRRRR</Link> financing for value-add deals, with rehab funds paid out in draws
          </li>
          <li>
            <Link href="/ground-up-construction-loans">Ground-up construction</Link> for spec homes and build-to-rent projects
          </li>
          <li>
            <Link href="/rental-portfolio-loans">Portfolio loans</Link> that put several rentals under one loan, and{" "}
            <Link href="/investment-property-cash-out-refinance">cash-out refinances</Link> that turn a rental’s equity into the next down payment
          </li>
        </ul>
        <p>
          Not sure which fits? <Link href="/loans">See every program side by side</Link>, sorted by what you plan to do with the property.
        </p>

        <h2>Who we work with</h2>
        <ul>
          <li>
            <strong>First-time investors</strong> buying a first rental or a first flip. Most rental lenders don’t require landlord experience; flip lenders often lend to
            first-timers at lower leverage.
          </li>
          <li>
            <strong>Self-employed investors</strong> whose write-offs make their tax returns look thinner than their business. A rental loan that qualifies on the property never
            asks for the return.
          </li>
          <li>
            <strong>Flippers and BRRRR investors</strong> who need the purchase and the rehab in one loan, and a refinance plan for the properties they keep.
          </li>
          <li>
            <strong>Builders</strong> financing a spec home or a build-to-rent project in stages as the work is inspected.
          </li>
          <li>
            <strong>Growing portfolio owners</strong> who hold rentals in an LLC, want one loan across several properties, or want to pull equity out to buy again.
          </li>
        </ul>

        <h2>How we work with our licensed lending partner</h2>
        <p>
          {SITE.name} is an associate of a licensed lender. You work with {SITE.name} throughout: the first call, your terms, the document list and the closing timeline. Credit
          decisions are made under the licensed lender’s underwriting standards, every loan is subject to underwriting and approval, and your loan documents identify the lender of
          record.
        </p>
        <p>
          What that means for you is one point of contact and one set of terms, so you aren’t passed around while the deal clock runs.
        </p>

        <h2>Investment property only</h2>
        <p>
          Every loan we make is a business-purpose loan on non-owner-occupied property: a property that neither you nor a family member will live in. That rules out living in one
          unit of a duplex or fourplex and renting the rest, and a vacation home you’ll use yourself. Federal Truth in Lending commentary draws the line at 14 days: plan to stay in the property longer than
          that in the coming year and it counts as owner-occupied (see <Link href="/glossary#non-owner-occupied">business-purpose loans</Link> in the glossary).
        </p>
        <p>
          If the property will be your home, you need a residential mortgage, which comes with its own consumer protections and rules. A residential mortgage lender is the right
          place to start, and we’ll say so rather than force a fit.
        </p>

        <h2>What we won’t do</h2>
        <ul>
          <li>Lend on a home you or your family will live in, or make consumer and personal loans.</li>
          <li>Promise approval or a rate before we know the deal. Every loan is subject to underwriting, and the rates on this site are dated market ranges, not quotes.</li>
          <li>Pull your credit to apply. The form asks for a rough range, and we tell you before any credit check later on.</li>
          <li>
            Give tax or legal advice. We’ll explain how an LLC, seasoning or a 1031 exchange deadline affects the loan; entity and tax decisions belong with your CPA or attorney.
          </li>
          <li>Leave costs for the closing table. Points, fees and the prepayment structure come in writing with your terms.</li>
        </ul>

        <h2>The principles we lend by</h2>
        <h3>Speed is part of the product</h3>
        <p>
          A seller’s deadline, an auction date or a contractor waiting on a draw doesn’t move for paperwork. The application takes about 60 seconds, the call back is fast, and the
          document list arrives with your terms so nothing waits on a second request.
        </p>
        <h3>The deal comes first</h3>
        <p>
          Investor loans are underwritten on the property: its rent, its value, the rehab budget and the exit. That’s what we ask about, and it’s why a strong rental can carry a
          borrower whose tax return doesn’t.
        </p>
        <h3>Numbers with dates and sources</h3>
        <p>
          Rate ranges and program terms on this site come from lenders’ published program pages and public loan data, with the date pulled and the sources listed on each page.
          The <Link href="/rates">rates page</Link> is updated monthly.
        </p>
        <h3>Plain English, and tools you can check us with</h3>
        <p>
          Every term on a term sheet is defined in the <Link href="/glossary">investor loan glossary</Link>, and the same math lenders use is in our calculators: the{" "}
          <Link href="/calculators/dscr">DSCR calculator</Link>, <Link href="/calculators/fix-and-flip">fix and flip calculator</Link>,{" "}
          <Link href="/calculators/brrrr">BRRRR calculator</Link> and <Link href="/calculators/rental-cash-flow">rental cash flow calculator</Link>. Run your deal before you call.
        </p>

        <h2>Contact</h2>
        <p>
          Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, read <Link href="/how-it-works">how it works</Link> and our <Link href="/disclosures">disclosures</Link>, or{" "}
          <Link href="/get-funding">get funding</Link> in about 60 seconds.
        </p>
      </Prose>
      <FaqSection heading="About Fund Your Deal: questions" items={FAQ} />
    </>
  );
}
