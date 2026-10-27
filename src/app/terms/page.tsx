import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Prose, Todo } from "@/components/Prose";
import { SUBMIT_LABEL } from "@/lib/consent";
import { SITE } from "@/lib/site";

const UPDATED = "October 26, 2026";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms for using fundyourdeal.org and requesting investment property funding from Fund Your Deal: who can apply, call and text consent, and liability.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  const mail = <a href={`mailto:${SITE.email}`}>{SITE.email}</a>;
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Terms" }]} title="Terms of use">
        <p>
          Effective {UPDATED}. Last updated {UPDATED}. <Todo>COUNSEL TO REVIEW</Todo>
        </p>
      </PageIntro>
      <Prose>
        <p>
          These terms apply when you use {SITE.domain}, the website of {SITE.name} (“we”, “us”). By using the site, or by pressing “{SUBMIT_LABEL}” on the first screen of the loan request form, you accept them.
        </p>

        <h2>1. Who can use the site</h2>
        <p>
          You must be at least 18. If you name a company or other entity, you must have authority to act for it. The information you give us must be accurate and current, and
          you agree to update it if it changes.
        </p>

        <h2>2. Investment property only</h2>
        <p>
          This site is only for loans on investment property that isn’t owner-occupied. You’ll be asked, before any loan closes, to certify that the loan is for a business or
          investment purpose, and that the property isn’t, and won’t be, lived in by you, a member of your family or any owner of the borrowing entity. Regulation Z’s 14-day
          rule applies: if the property’s owner expects to occupy it for more than 14 days over the next 12 months, it doesn’t qualify as non-owner-occupied.
        </p>
        <p>If the property will be home to you or your family, this site can’t offer you a loan on it.</p>

        <h2>3. A request isn’t an approval</h2>
        <p>
          {SITE.name} is an associate of a licensed lender. Every loan depends on underwriting and approval, and sending a request doesn’t guarantee a loan, a rate or particular
          terms. If you get a loan, its terms are the ones in the loan documents you sign.
        </p>

        <h2>4. Calls and texts</h2>
        <p>
          Ticking the consent box on our form lets {SITE.name} and its licensed lending partner reach you by phone call and text message about the deal you sent, and those
          calls and texts may use automated technology or prerecorded messages. To withdraw that consent at any time, reply STOP to a text or email {mail}.
        </p>

        <h2>5. Rates, calculators and guides</h2>
        <p>
          Rates and terms shown on the site are examples: market ranges as of the dates shown, and they may be out of date. Like our calculators and guides, they’re general
          information. None of it is an offer of credit, or financial, tax or legal advice. Make your own decisions and check them with qualified professionals.
        </p>

        <h2>6. Your information</h2>
        <p>
          We collect and use what you give us as our <Link href="/privacy">Privacy Policy</Link> describes.
        </p>

        <h2>7. What you may not do</h2>
        <p>
          Don’t submit false information. Don’t send a request for someone else unless you have authority to. Don’t scrape the site at scale, interfere with how it works or use it
          to break any law.
        </p>

        <h2>8. Our content</h2>
        <p>
          {SITE.name} or its licensors own the words, design and calculators on this site. Use them to work through your own deals; don’t copy them onto another site or sell them.
        </p>

        <h2>9. No warranties, limited liability</h2>
        <p>
          We provide the site “as is”. As far as the law allows, we disclaim all warranties, and we aren’t liable for indirect, incidental or consequential damages.{" "}
          <Todo>COUNSEL: LIABILITY CAP, INDEMNITY, DISPUTE RESOLUTION AND ARBITRATION</Todo>
        </p>

        <h2>10. Governing law</h2>
        <p>
          The laws of <Todo>STATE</Todo> govern these terms.
        </p>

        <h2>11. Changes to these terms</h2>
        <p>We may update these terms by posting a new version on this page. If you keep using the site after that, you accept the update.</p>

        <h2>12. Contact</h2>
        <p>Questions about these terms: {mail}.</p>
      </Prose>
    </>
  );
}
