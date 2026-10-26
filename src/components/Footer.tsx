import Link from "next/link";
import { CALCULATORS, PROGRAMS, SITE } from "@/lib/site";
import { Logo } from "./Logo";
import { ButtonLink } from "./ui";

type FooterLink = { href: string; label: string };

const toLinks = (group: "Project" | "Rental"): FooterLink[] => PROGRAMS.filter((p) => p.group === group).map((p) => ({ href: p.href, label: p.title }));

const TOOLS: FooterLink[] = [
  ...CALCULATORS.map((c) => ({ href: c.href, label: c.title })),
  { href: "/rates", label: "Current rate ranges" },
  { href: "/guides", label: "Deal guides" },
  { href: "/glossary", label: "Loan terms glossary" },
];
const COMPANY: FooterLink[] = [
  { href: "/how-it-works", label: "How funding works" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
];
const LEGAL: FooterLink[] = [
  { href: "/disclosures", label: "Disclosures" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of use" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-mist">
      <div aria-hidden="true" className="h-1.5 bg-brand" />
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 pb-10 pt-14">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-7">
          <div className="flex max-w-[460px] flex-col gap-4">
            <Logo tone="white" />
            <p className="text-[15px] leading-relaxed">
              Under contract, bidding at auction or halfway through a rehab? Send us the deal. We’ll tell you what it needs to get funded and close on time.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <ButtonLink href="/get-funding" variant="lime">
              {SITE.cta}
            </ButtonLink>
            <p className="flex flex-col gap-0.5 text-[14px]">
              <span>Or email the deal desk:</span>
              <a href={`mailto:${SITE.email}`} className="break-words text-paper underline-offset-4 hover:text-lime hover:underline focus-visible:outline-lime">
                {SITE.email}
              </a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-night-line pt-10 text-[15px] sm:grid-cols-3 lg:grid-cols-5">
          <Col title="Fund the project" links={toLinks("Project")} />
          <Col title="Hold or refinance" links={toLinks("Rental")} />
          <Col title="Deal tools" links={TOOLS} />
          <Col title="Company" links={COMPANY} />
          <Col title="Legal" links={LEGAL} />
        </div>

        <div className="flex flex-col gap-3 border-t border-night-line pt-6 text-[13px] leading-relaxed text-mist-2">
          <p>
            {SITE.name} is an associate of a licensed lender. Every loan here is a business-purpose loan on investment property, never on a home you or your family will live
            in, and each one goes through underwriting and approval. Any rate, term or payment you see on this site is an example rather than an offer, and it can change
            without notice.
          </p>
          <p>© 2026 {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="flex min-w-0 flex-col gap-3">
      <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-lime">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-paper underline-offset-4 hover:text-lime hover:underline focus-visible:outline-lime">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
