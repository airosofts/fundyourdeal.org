import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Prose, Todo } from "@/components/Prose";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern use of the Fund Your Deal website.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Terms" }]} title="Terms of use">
        <p>
          Effective October 21, 2026. <Todo>COUNSEL TO REVIEW</Todo>
        </p>
      </PageIntro>
      <Prose>
        <p>These terms govern your use of {SITE.domain} (&quot;{SITE.name}&quot;, &quot;we&quot;). By using the site or submitting a request, you agree to them.</p>

        <h2>1. Loans</h2>
        <p>
          {SITE.name} is an associate of a licensed lender. Loans are subject to underwriting and approval, and submitting a request doesn&apos;t guarantee a loan or any
          particular rate or terms. Any loan is made on the terms in your signed loan documents.
        </p>

        <h2>2. Investment property only</h2>
        <p>
          The site is only for loans on investment (non-owner-occupied) property. Before any loan closes you&apos;ll be asked to certify that neither you, your family members, nor any
          owner of the borrowing entity live in or will live in the property, and that the loan is for business or investment purposes. If you or your family will live in the property,
          we can&apos;t offer you a loan through this site.
        </p>

        <h2>3. Your information</h2>
        <p>
          You agree to give accurate, current information and to update it if it changes. You must be at least 18 and authorized to act for any entity you name. We handle your information
          as described in our <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2>4. Calls and texts</h2>
        <p>
          If you check the consent box, you agree that {SITE.name} and its licensed lending partner may call and text you about your request, including with automated technology or
          prerecorded messages. You can revoke consent at any time by replying STOP or emailing <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>

        <h2>5. Information on this site</h2>
        <p>
          Rates, terms, calculators and guides are general information, not offers of credit or financial, tax or legal advice. Figures are market ranges on the dates shown and may be out of
          date. Make your own decisions and consult qualified professionals.
        </p>

        <h2>6. Acceptable use</h2>
        <p>Don&apos;t submit false information or requests on someone else&apos;s behalf without authority, interfere with the site, scrape it at scale, or use it to violate any law.</p>

        <h2>7. Intellectual property</h2>
        <p>The site&apos;s content, design and calculators belong to {SITE.name} or its licensors. You may use them for your own investing decisions, not to republish or resell.</p>

        <h2>8. Disclaimers and limitation of liability</h2>
        <p>
          The site is provided &quot;as is&quot;. To the extent permitted by law, we disclaim all warranties and are not liable for indirect, incidental or consequential damages.{" "}
          <Todo>LIABILITY CAP, INDEMNITY AND DISPUTE RESOLUTION / ARBITRATION LANGUAGE</Todo>
        </p>

        <h2>9. Governing law and changes</h2>
        <p>
          These terms are governed by the laws of <Todo>STATE</Todo>. We may update them by posting a new version here; continued use means you accept the changes. Questions:{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </Prose>
    </>
  );
}
