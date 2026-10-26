import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Prose, Todo } from "@/components/Prose";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclosures",
  description: "Fund Your Deal disclosures: investment property loans only, our licensed lending partner, rates shown, calls and texts.",
  alternates: { canonical: "/disclosures" },
};

export default function Page() {
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Disclosures" }]} title="Disclosures">
        <p>
          Last updated October 21, 2026. <Todo>COUNSEL TO REVIEW BEFORE LAUNCH</Todo>
        </p>
      </PageIntro>
      <Prose>
        <h2>Our lending partner</h2>
        <p>
          {SITE.name} is an associate of a licensed lender. Loans are subject to underwriting and approval. Submitting a request does not guarantee a loan or any
          particular rate or terms.
        </p>

        <h2>Investment property only</h2>
        <p>
          We only lend on non-owner-occupied property. Loans are business-purpose loans secured by investment real estate and are not available for property that the borrower, a member of
          the borrower&apos;s family, or an owner of the borrowing entity occupies or expects to occupy as a primary or secondary residence. You&apos;ll be asked to sign a
          business-purpose and occupancy certification before closing. Business-purpose loans are generally not subject to consumer-lending laws such as the Truth in Lending Act and the
          Real Estate Settlement Procedures Act.
        </p>

        <h2>Rates and terms shown on this site</h2>
        <p>
          Rates, leverage limits and other terms on this site are market ranges from published lender terms and public data on the dates shown. They are for information only and are not an
          offer of credit, a commitment to lend or a rate lock. Your terms depend on the property, your credit, experience and liquidity, and the loan structure. Rates change daily. Not
          all borrowers will qualify.
        </p>

        <h2>Calculators and guides</h2>
        <p>
          Calculator results and guide content are estimates and general information for planning only. They are not financial, tax or legal advice. Consult a CPA, attorney or other
          professional about your situation.
        </p>

        <h2>Calls, texts and email</h2>
        <p>
          When you check the box on our form, you agree that {SITE.name} and its licensed lending partner may call and text you about your loan request, including with automated
          technology or prerecorded messages. Consent isn&apos;t a condition of any loan. Reply STOP to any text to opt out, or use the unsubscribe link in any email. See our{" "}
          <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Use</Link>.
        </p>

        <h2>Equal credit opportunity</h2>
        <p>
          The federal Equal Credit Opportunity Act prohibits creditors from discriminating against credit applicants on the basis of race, color, religion, national origin, sex, marital
          status, or age (provided the applicant has the capacity to contract); because all or part of the applicant&apos;s income derives from any public assistance program; or because
          the applicant has in good faith exercised any right under the Consumer Credit Protection Act.
        </p>
      </Prose>
    </>
  );
}
