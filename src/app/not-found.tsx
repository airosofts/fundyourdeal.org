import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { CALCULATORS, PROGRAMS, SITE } from "@/lib/site";

// Root 404: shown for unknown URLs and for notFound() in any route. Next adds
// noindex on its own; it's set here as well so the intent is visible. No
// breadcrumbs (and so no BreadcrumbList): there's no page to place it under.
export const metadata: Metadata = {
  title: "Page not found",
  description: `This page isn't on ${SITE.name}. Find a loan program, a deal calculator or a guide, or send the deal itself.`,
  robots: { index: false, follow: true },
};

const MORE = [
  { href: "/guides", label: "Investor guides" },
  { href: "/rates", label: "Rate ranges" },
  { href: "/glossary", label: "Loan terms glossary" },
  { href: "/how-it-works", label: "How funding works" },
  { href: "/contact", label: "Contact us" },
];

function LinkList({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">{title}</h2>
      <ul className="flex flex-col">
        {links.map((l) => (
          <li key={l.href} className="border-b border-line last:border-b-0">
            <Link href={l.href} className="block py-2.5 text-[16px] font-semibold leading-snug hover:text-brand">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function NotFound() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="flex flex-col gap-5 pb-12 pt-14">
          <Eyebrow>Error 404 · Page not found</Eyebrow>
          <h1 className="max-w-[760px] text-[clamp(36px,4.4vw,58px)] font-bold leading-[1.04] tracking-[-0.035em]">That link didn’t close. Your deal still can.</h1>
          <p className="max-w-[640px] text-lg leading-relaxed text-ink-2">
            The page you were after has moved or never existed. Pick the loan that fits the deal, run the numbers in a calculator, or send us the deal and a loan specialist
            will call you about it.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/get-funding" size="lg">
              {SITE.cta}
            </ButtonLink>
            <ButtonLink href="/" variant="outline" size="lg">
              Back to the home page
            </ButtonLink>
          </div>
        </Container>
      </section>
      <Container className="grid gap-10 py-14 [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
        <LinkList title="Loan programs" links={PROGRAMS.map((p) => ({ href: p.href, label: p.title }))} />
        <LinkList title="Deal calculators" links={CALCULATORS.map((c) => ({ href: c.href, label: c.title }))} />
        <LinkList title="Read up first" links={MORE} />
      </Container>
    </>
  );
}
