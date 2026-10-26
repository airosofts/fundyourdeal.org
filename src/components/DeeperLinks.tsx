import Link from "next/link";
import { Container, Eyebrow, H2 } from "./ui";
import { guidePath } from "./templates/GuidePage";
import { statePath } from "./templates/StatePage";
import { GUIDES } from "@/content/guides";
import { statesFor } from "@/content/states";
import type { Guide } from "@/content/types";

const CATEGORY: Record<"dscr" | "fix-and-flip", Guide["category"][]> = {
  dscr: ["DSCR", "Short-term rental"],
  "fix-and-flip": ["Fix & flip", "Financing basics"],
};

/** "Go deeper" block on a program page: its state pages and guides. */
export function DeeperLinks({ program }: { program: "dscr" | "fix-and-flip" }) {
  const states = statesFor(program);
  const guides = GUIDES.filter((g) => CATEGORY[program].includes(g.category));
  return (
    <section className="border-t border-line bg-white">
      <Container className="grid gap-12 py-[88px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="flex flex-col gap-3">
          <Eyebrow>Go deeper</Eyebrow>
          <H2>{program === "dscr" ? "DSCR guides and state pages." : "Flipping guides and state pages."}</H2>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Guides</div>
            {guides.map((g) => (
              <Link key={g.slug} href={guidePath(g)} className="border-t border-line pt-3 text-[16px] font-semibold leading-snug hover:text-brand">
                {g.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted">By state</div>
            {states.map((s) => (
              <Link key={s.slug} href={statePath(s)} className="border-t border-line pt-3 text-[16px] font-semibold hover:text-brand">
                {s.state} {program === "dscr" ? "DSCR loans" : "fix and flip loans"} →
              </Link>
            ))}
            <p className="border-t border-line pt-3 text-sm text-muted">More states coming soon.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
