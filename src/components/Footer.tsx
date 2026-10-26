import Link from "next/link";
import { CALCULATORS, PROGRAMS, SITE } from "@/lib/site";

const COMPANY = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
const LEGAL = [
  { href: "/disclosures", label: "Disclosures" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of use" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-mist">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 pb-10 pt-16">
        <div className="grid gap-8 text-[15px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,170px),1fr))]">
          <div className="flex flex-col gap-3">
            <span className="text-lg font-semibold text-white">{SITE.name}</span>
            <span className="leading-normal">{SITE.tagline}</span>
            <a href={`mailto:${SITE.email}`} className="text-[#E3E7E4] hover:text-white">
              {SITE.email}
            </a>
          </div>
          <Col title="RENTAL LOANS" links={PROGRAMS.filter((p) => p.group === "Rental").map((p) => ({ href: p.href, label: p.title }))} />
          <Col title="PROJECT LOANS" links={PROGRAMS.filter((p) => p.group === "Project").map((p) => ({ href: p.href, label: p.title }))} />
          <Col title="TOOLS" links={[...CALCULATORS.map((c) => ({ href: c.href, label: c.title })), { href: "/rates", label: "Investor loan rates" }, { href: "/guides", label: "Investor guides" }, { href: "/glossary", label: "Investor loan glossary" }]} />
          <Col title="COMPANY" links={[...COMPANY, ...LEGAL]} />
        </div>
        <div className="flex flex-col gap-3 border-t border-night-line pt-6 text-[13px] leading-relaxed text-mist-2">
          <p>
            {SITE.name} is an associate of a licensed lender. Loans are business-purpose loans for investment (non-owner-occupied) property only and are subject to
            underwriting and approval. Rates and terms shown on this site are examples and change without notice.
          </p>
          <p>© 2026 {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="font-mono text-xs text-lime">{title}</span>
      {links.map((l) => (
        <Link key={l.href} href={l.href} className="text-[#E3E7E4] hover:text-white">
          {l.label}
        </Link>
      ))}
    </div>
  );
}
