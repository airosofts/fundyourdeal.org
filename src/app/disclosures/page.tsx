import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Prose, Todo } from "@/components/Prose";
import { TCPA_CONSENT_TEXT } from "@/lib/consent";
import { SITE } from "@/lib/site";

const UPDATED = "October 26, 2026";

export const metadata: Metadata = {
  title: "Loan Disclosures",
  description:
    "Fund Your Deal loan disclosures: business-purpose loans on investment property only, a licensed lending partner, example rates, and call and text consent.",
  alternates: { canonical: "/disclosures" },
};

export default function Page() {
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Disclosures" }]} title="Disclosures">
        <p>
          Effective {UPDATED}. Last updated {UPDATED}. <Todo>COUNSEL TO REVIEW</Todo>
        </p>
        <p className="mt-3">
          Read this before you send us a deal. It covers what we fund, who makes the loan, what the numbers on this site mean and how we contact you.
        </p>
      </PageIntro>
      <Prose>
        <h2>Investment property only. No homes you or your family will live in.</h2>
        <p>
          Every loan offered through {SITE.name} is a business-purpose loan secured by investment real estate. We don’t offer a loan on a property that you, a member of your
          family or an owner of the borrowing entity lives in, or expects to live in, as a primary or secondary residence.
        </p>
        <p>
          Before closing, you’ll sign a certification that the loan is for a business purpose and that the property isn’t owner-occupied. Regulation Z, the federal Truth in Lending
          rule, sets a 14-day limit: a property can’t be treated as non-owner-occupied when its owner expects to occupy it for more than 14 days during the next year.
        </p>
        <p>
          If the property will be a home for you or a family member, this site can’t offer you a loan on it. For a home you’ll live in, talk to a residential mortgage lender.
        </p>
        <p>
          Because these are business-purpose loans, consumer-credit laws, including the Truth in Lending Act and the Real Estate Settlement Procedures Act, generally don’t cover them.
        </p>

        <h2>Who makes your loan</h2>
        <p>
          {SITE.name} is an associate of a licensed lender. Every loan depends on underwriting and approval. Sending us a request doesn’t guarantee you a loan, or any specific rate
          or terms.
        </p>

        <h2>The rates on this site are examples</h2>
        <p>
          Rates, leverage limits and other loan terms on these pages are examples: market ranges drawn from published lender terms and public data, as of the dates shown. They’re
          for information only. They aren’t offers of credit, commitments to lend or rate locks, and rates move daily.
        </p>
        <p>
          Your own terms come from your deal: the property, your credit, your experience and liquidity, and how the loan is structured. Not all borrowers will qualify.
        </p>

        <h2>Calls and texts, and how to stop them</h2>
        <p>Our form asks before we call or text you. Checking the box means you agree to this wording:</p>
        <p className="border-l-2 border-line pl-4 italic">“{TCPA_CONSENT_TEXT}”</p>
        <p>
          You don’t have to give that consent to get a loan. To stop texts, reply STOP to any of them. To stop calls, tell the caller or email{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. To stop email, click the unsubscribe link in it. Our <Link href="/privacy">Privacy Policy</Link> and{" "}
          <Link href="/terms">Terms of Use</Link> say more.
        </p>

        <h2>Calculators and guides are estimates</h2>
        <p>
          What our calculators and guides give you is an estimate and general information for planning a deal. It isn’t financial, tax or legal advice. Take your own situation to
          a CPA, attorney or other qualified professional.
        </p>

        <h2>Fair lending</h2>
        <p>
          Under the federal Equal Credit Opportunity Act, a creditor may not discriminate against anyone who applies for credit because of race, color, religion, national origin
          or sex, because of marital status, or because of age (as long as the applicant can legally enter a contract). Nor may it discriminate because some or all of an
          applicant’s income comes from a public assistance program, or because the applicant has exercised, in good faith, any right under the Consumer Credit Protection Act.
        </p>

        <h2>Questions</h2>
        <p>
          Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </Prose>
    </>
  );
}
