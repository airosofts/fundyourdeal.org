import type { ReactNode } from "react";
import { Breadcrumbs, Container, Eyebrow, JsonLd } from "./ui";
import { SITE } from "@/lib/site";

/** Page heading: breadcrumbs (+ BreadcrumbList schema), eyebrow, H1, intro. */
export function PageIntro({ crumbs, eyebrow, title, children, aside }: { crumbs: { href?: string; label: string }[]; eyebrow?: string; title: string; children?: ReactNode; aside?: ReactNode }) {
  return (
    <section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, ...(c.href ? { item: SITE.url + c.href } : {}) })),
        }}
      />
      <Container className="flex flex-wrap items-end justify-between gap-6 pb-6 pt-12">
        <div className="flex max-w-[760px] flex-col gap-3.5">
          <Breadcrumbs items={crumbs} />
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="text-[clamp(38px,4.6vw,60px)] font-semibold leading-[1.04] tracking-[-0.04em]">{title}</h1>
          {children && <div className="text-lg leading-relaxed text-ink-2">{children}</div>}
        </div>
        {aside}
      </Container>
    </section>
  );
}
