import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { guidePath } from "@/components/templates/GuidePage";
import { Container } from "@/components/ui";
import { GUIDES } from "@/content/guides";
import type { Guide } from "@/content/types";

export const metadata: Metadata = {
  title: { absolute: "Real Estate Investor Financing Guides | Fund Your Deal" },
  description: "Plain-English guides to DSCR loans, short-term rental financing, fix and flip and hard money loans — requirements, rates, worked examples and the rules lenders use.",
  alternates: { canonical: "/guides" },
};

const ORDER: Guide["category"][] = ["DSCR", "Short-term rental", "Fix & flip", "BRRRR", "Construction", "Portfolio", "Financing basics"];

export default function Page() {
  const groups = ORDER.map((c) => ({ c, items: GUIDES.filter((g) => g.category === c) })).filter((g) => g.items.length);
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Guides" }]} title="Investor financing guides">
        <p>How investor loans actually work — the numbers lenders use, worked examples and the rules that decide your leverage and rate. Written for investors, sourced and dated.</p>
      </PageIntro>
      <Container className="flex flex-col gap-14 pb-[88px] pt-6">
        {groups.map(({ c, items }) => (
          <section key={c} className="flex flex-col gap-5">
            <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">{c}</h2>
            <div className="grid gap-x-6 gap-y-8 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
              {items.map((g) => (
                <Link key={g.slug} href={guidePath(g)} className="group flex flex-col gap-2.5 border-t-2 border-ink pt-5">
                  <span className="text-[21px] font-semibold leading-tight tracking-[-0.02em] group-hover:text-brand">{g.title}</span>
                  <span className="text-[15px] leading-relaxed text-ink-2">{g.dek}</span>
                  <span className="font-mono text-xs text-muted">{g.readMinutes} min read</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </Container>
    </>
  );
}
