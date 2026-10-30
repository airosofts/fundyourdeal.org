import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { ContactForm } from "@/components/forms";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { SITE } from "@/lib/site";
import { alternatesFor } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Contact Fund Your Deal" },
  description:
    "Message or email Fund Your Deal. Need a deal funded? The 60-second funding request reaches a loan specialist faster, with no credit pull to apply.",
  alternates: alternatesFor("/contact"),
};

export default function Page() {
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]} eyebrow="Contact" title="Contact Fund Your Deal">
        <p>
          A question about a loan, an update on a request you already sent, or a press inquiry: write to us here. If you have a deal that needs money, the{" "}
          <Link href="/get-funding" className="font-semibold text-ink underline underline-offset-4">
            funding request
          </Link>{" "}
          is the faster way in.
        </p>
      </PageIntro>

      <Container className="grid items-start gap-10 pb-[88px] pt-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <ContactForm />

        <aside className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 rounded-[20px] bg-ink p-7 text-white">
            <Eyebrow tone="lime">Funding a deal?</Eyebrow>
            <p className="text-[20px] font-semibold leading-snug">Skip the message. Send the deal.</p>
            <p className="text-[15px] leading-relaxed text-mist">
              The funding request takes about 60 seconds, with no credit pull to apply. It hands a loan specialist the kind of deal, the amount and the property ZIP code up front,
              so the first call can get straight to your numbers.
            </p>
            <div className="pt-1">
              <ButtonLink href="/get-funding" variant="lime">
                {SITE.cta}
              </ButtonLink>
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Email</div>
            <a href={`mailto:${SITE.email}`} className="text-lg font-semibold text-ink underline-offset-4 hover:underline">
              {SITE.email}
            </a>
          </div>

          <ul className="flex flex-col gap-4 border-t border-line pt-6 text-[15px] leading-relaxed text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2">
            <li>
              <strong className="text-ink">Already sent a funding request?</strong> Mention it in your message along with the phone number you used, so we can find it quickly.
            </li>
            <li>
              <strong className="text-ink">Buying a home to live in?</strong> {SITE.name} funds investment property only. For a home you or your family will live in, talk to a
              residential mortgage lender.
            </li>
            <li>
              <strong className="text-ink">Entity or tax questions?</strong> We can explain how an LLC or a 1031 deadline affects a loan, but the decision itself belongs with
              your CPA or attorney.
            </li>
            <li>
              Want to see the steps first? Read <Link href="/how-it-works">how it works</Link> or <Link href="/about">about {SITE.name}</Link>.
            </li>
          </ul>
        </aside>
      </Container>
    </>
  );
}
