import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { ContactForm } from "@/components/forms";
import { Container } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Fund Your Deal about funding for a rental, flip, bridge or construction loan — or anything else.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]} title="Contact us">
        <p>
          Have a deal in hand? The fastest way to get funded is the{" "}
          <Link href="/get-funding" className="font-semibold text-ink underline underline-offset-4">
            60-second form
          </Link>
          . For anything else, send us a note.
        </p>
      </PageIntro>
      <Container className="grid items-start gap-10 pb-[88px] pt-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr))]">
        <ContactForm />
        <div className="flex flex-col gap-6 text-[16px] leading-relaxed text-ink-2">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Email</div>
            <a href={`mailto:${SITE.email}`} className="text-lg font-semibold text-ink underline-offset-4 hover:underline">
              {SITE.email}
            </a>
          </div>
          <p className="text-sm text-muted">We can&apos;t give tax or legal advice — for entity, tax or 1031 questions, talk to a CPA or attorney.</p>
        </div>
      </Container>
    </>
  );
}
