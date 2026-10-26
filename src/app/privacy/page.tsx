import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Prose, Todo } from "@/components/Prose";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What Fund Your Deal collects, how we use it, who we share it with, and the choices you have.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Privacy" }]} title="Privacy policy">
        <p>
          Effective October 21, 2026. <Todo>COUNSEL TO REVIEW — incl. CCPA/CPRA notices and state privacy laws</Todo>
        </p>
      </PageIntro>
      <Prose>
        <p>
          This policy explains how {SITE.name} (&quot;we&quot;) collects, uses and shares information when you use {SITE.domain}. We fund loans for investment (non-owner-occupied) real
          estate.
        </p>

        <h2>What we collect</h2>
        <h3>Information you give us</h3>
        <ul>
          <li>Your loan request: what you&apos;re financing, purchase or refinance, property type, roughly how much you need, your credit range and, for project loans, your experience.</li>
          <li>Contact details: name, phone number, property ZIP code and, if you give it, email.</li>
          <li>Whether you or your family will live in the property, and your consent to calls and texts, with the exact wording, time and IP address.</li>
          <li>Messages you send through our contact form, and rate-alert sign-ups.</li>
        </ul>
        <p>We save your answers as you go, so a request you start but don&apos;t finish may still be stored.</p>
        <h3>Information collected automatically</h3>
        <ul>
          <li>IP address, approximate location derived from it, browser and device type, the page that referred you, and pages you visit.</li>
          <li>Advertising and campaign identifiers in the link you arrived from (such as Google and Microsoft click IDs and UTM parameters), stored in your browser for up to 90 days.</li>
          <li>Information from cookies and similar technologies used by our analytics and advertising partners. <Todo>LIST TOOLS ACTUALLY USED, e.g. Google Tag Manager, Google Analytics, Google Ads</Todo></li>
        </ul>
        <p>The application form does not pull your credit report.</p>

        <h2>How we use it</h2>
        <ul>
          <li>To review your request and contact you about your loan.</li>
          <li>To call and text you, including with automated technology, only if you checked the consent box.</li>
          <li>To send rate alerts you asked for.</li>
          <li>To operate, secure and improve the site, prevent fraud and measure our advertising.</li>
          <li>To comply with law and enforce our <Link href="/terms">Terms of Use</Link>.</li>
        </ul>

        <h2>Who we share it with</h2>
        <ul>
          <li>
            <strong>Our licensed lending partner</strong>, to underwrite and fund your loan.
          </li>
          <li>
            <strong>Service providers</strong> who host the site and our database, send email and texts, and provide analytics and advertising, under contracts limiting their use of the data.
          </li>
          <li>
            <strong>Advertising partners</strong>, such as Google, to measure which ads led to requests. <Todo>COUNSEL: whether this is a &quot;sale&quot; or &quot;sharing&quot; under state law and the opt-out required</Todo>
          </li>
          <li>When required by law, to protect rights and safety, or in connection with a merger or sale of the business.</li>
        </ul>
        <p>We don&apos;t sell your information to marketing lists.</p>

        <h2>Your choices</h2>
        <ul>
          <li>Texts: reply STOP to any text to stop them.</li>
          <li>Email: use the unsubscribe link in any marketing email.</li>
          <li>Calls: ask the caller to stop, or email us.</li>
          <li>Access, correction or deletion: email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Depending on your state, you may have additional rights, which we&apos;ll honor as the law requires.</li>
          <li>Cookies: you can block or delete cookies in your browser; some features may not work without them.</li>
        </ul>

        <h2>Retention and security</h2>
        <p>
          We keep request and consent records for as long as needed to serve you and to meet legal and record-keeping obligations. <Todo>RETENTION PERIOD</Todo> We use reasonable
          administrative, technical and physical safeguards; no method of transmission or storage is completely secure.
        </p>

        <h2>Children</h2>
        <p>The site is for adults seeking business loans. We don&apos;t knowingly collect information from anyone under 18.</p>

        <h2>Changes and contact</h2>
        <p>
          We&apos;ll post changes here with a new effective date. Questions: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </Prose>
    </>
  );
}
