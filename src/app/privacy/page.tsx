import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Prose, Todo } from "@/components/Prose";
import { SUBMIT_LABEL } from "@/lib/consent";
import { SITE } from "@/lib/site";
import { alternatesFor } from "@/lib/seo";

const UPDATED = "October 26, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Fund Your Deal collects, uses, shares and keeps what you enter on our loan request form, plus cookies, analytics and the privacy choices you have.",
  alternates: alternatesFor("/privacy"),
};

export default function Page() {
  const mail = <a href={`mailto:${SITE.email}`}>{SITE.email}</a>;
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Privacy" }]} title="Privacy policy">
        <p>
          Effective {UPDATED}. Last updated {UPDATED}. <Todo>COUNSEL TO REVIEW</Todo> <Todo>ADD CCPA/CPRA AND OTHER STATE PRIVACY-LAW NOTICES</Todo>
        </p>
      </PageIntro>
      <Prose>
        <h2>The short version</h2>
        <ul>
          <li>We collect what you type into our forms, plus standard visit data your browser sends.</li>
          <li>We use it to work on your loan request, to contact you about it, and to run and improve the site.</li>
          <li>We share it with our licensed lending partner, the service providers that run the site, and advertising partners that measure our ads. We don’t sell it to marketing lists.</li>
          <li>Reply STOP to any text to stop them. Email {mail} to see, correct or delete your information.</li>
        </ul>

        <h2>Who this policy covers</h2>
        <p>
          This policy covers {SITE.name} (“we”, “us”) and the website at {SITE.domain}. It explains what we collect when you use the site, what we do with it and what you can
          control. We get investors funded on business-purpose loans for investment (non-owner-occupied) real estate.
        </p>

        <h2>What our loan request form collects, in order</h2>
        <p>The form saves each answer as soon as you give it, so a request you start and don’t finish can still be stored.</p>
        <ol>
          <li>
            <strong>Contact details and consents.</strong> Your first and last name, mobile phone and, if you choose to give it, email. You also check a box agreeing to calls and
            texts, and clicking “{SUBMIT_LABEL}” agrees to our <Link href="/terms">Terms of Use</Link> and this policy. We record the exact consent wording, the time you agreed
            and your IP address.
          </li>
          <li>
            <strong>Whether anyone will live in the property.</strong> We ask whether you or a family member will live there. If you answer yes, your answers are still saved, but
            no loan can be offered to you on this site.
          </li>
          <li>
            <strong>Your loan answers.</strong> The kind of loan you want, purchase or refinance, the type of property, about how much you need to borrow, a rough credit score
            range and, for project loans such as flips, bridge and construction, how many deals you’ve done recently.
          </li>
          <li>
            <strong>The property ZIP code,</strong> which we ask for last.
          </li>
        </ol>
        <p>Nothing on the form pulls your credit report.</p>
        <h3>Our other forms</h3>
        <p>
          If you write to us through the contact form, we keep your message and the details you send with it. If you sign up for rate alerts, we keep your email address.
        </p>

        <h2>What your browser sends us automatically</h2>
        <ul>
          <li>Your IP address and the approximate location it points to, your browser and device type, the page that sent you here, and the pages you view.</li>
          <li>
            Campaign tags in the link you arrived on, such as Google Ads click IDs (gclid, gbraid, wbraid), Microsoft Advertising click IDs and UTM parameters. We keep these in
            your browser for up to 90 days.
          </li>
        </ul>
        <h3>Cookies and analytics</h3>
        <p>
          We use Google Tag Manager, which can run tools such as Google Analytics 4 and Google Ads conversion tracking. These tools use cookies and similar technologies to measure
          how the site is used and which ads lead to loan requests.
        </p>
        <p>Your browser settings let you block or delete cookies. Some features may not work without them.</p>

        <h2>How we use your information</h2>
        <ul>
          <li>To review your loan request and contact you about it.</li>
          <li>To reach you by phone and text, including through automated technology, but only if you checked the consent box.</li>
          <li>To send the rate alerts you signed up for.</li>
          <li>To run, secure and improve the site, to prevent fraud and to measure how our advertising performs.</li>
          <li>
            To meet our legal obligations and enforce our <Link href="/terms">Terms of Use</Link>.
          </li>
        </ul>

        <h2>Who we share it with</h2>
        <ul>
          <li>
            <strong>Our licensed lending partner</strong>, which uses it to underwrite and fund your loan.
          </li>
          <li>
            <strong>Service providers</strong> that host the site and our database, send our email and texts, and run analytics and advertising for us. Their contracts limit what
            they can do with your data.
          </li>
          <li>
            <strong>Advertising partners such as Google</strong>, to measure which ads led to requests.{" "}
            <Todo>COUNSEL: IS THIS A “SALE” OR “SHARING” UNDER STATE PRIVACY LAWS, AND WHAT OPT-OUT IS REQUIRED</Todo>
          </li>
          <li>
            <strong>Others, when needed:</strong> where the law requires it, to protect rights and safety, or as part of a merger or sale of the business.
          </li>
        </ul>
        <p>We don’t sell your information to marketing lists.</p>

        <h2>How long we keep it, and how we protect it</h2>
        <p>
          Request and consent records stay on file for as long as we need them to work with you, and for as long as legal and record-keeping obligations require. <Todo>SET RETENTION PERIOD</Todo>
        </p>
        <p>We use reasonable administrative, technical and physical safeguards. No way of sending or storing data is completely secure.</p>

        <h2>Your choices and rights</h2>
        <ul>
          <li>
            <strong>Texts:</strong> reply STOP to any text.
          </li>
          <li>
            <strong>Calls:</strong> tell the caller to stop, or email us.
          </li>
          <li>
            <strong>Email:</strong> click the unsubscribe link in any marketing email.
          </li>
          <li>
            <strong>Your information:</strong> email {mail} to ask for access, correction or deletion. Your state may give you more rights, and we’ll honor them as the law requires.
          </li>
          <li>
            <strong>Cookies:</strong> block or delete them in your browser.
          </li>
        </ul>

        <h2>Children</h2>
        <p>This site is for adults looking for business loans. We don’t knowingly collect information from people under 18.</p>

        <h2>Changes to this policy</h2>
        <p>When we change this policy, we’ll post the new version on this page with a new effective date.</p>

        <h2>Contact us</h2>
        <p>Questions about your information: {mail}.</p>
      </Prose>
    </>
  );
}
