import type { ReactNode } from "react";
import { Breadcrumbs, Container, Eyebrow, JsonLd } from "./ui";
import { breadcrumbLd } from "@/lib/seo";

/** Page heading: breadcrumbs (+ BreadcrumbList schema), eyebrow, H1, an orange rule, intro. */
export function PageIntro({ crumbs, eyebrow, title, children, aside }: { crumbs: { href?: string; label: string }[]; eyebrow?: string; title: string; children?: ReactNode; aside?: ReactNode }) {
  return (
    <section>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <Container className="flex flex-wrap items-end justify-between gap-6 pb-8 pt-10 sm:pt-14">
        <div className="flex min-w-0 max-w-[780px] flex-col gap-4">
          <Breadcrumbs items={crumbs} />
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="break-words text-[clamp(36px,4.4vw,58px)] font-bold leading-[1.04] tracking-[-0.035em]">{title}</h1>
          <span aria-hidden="true" className="block h-1.5 w-14 rounded-full bg-brand" />
          {children && <div className="text-lg leading-relaxed text-ink-2">{children}</div>}
        </div>
        {aside}
      </Container>
    </section>
  );
}
