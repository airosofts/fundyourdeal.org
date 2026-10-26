import Link from "next/link";
import { Container, Eyebrow, H2 } from "./ui";
import { guidePath } from "./templates/GuidePage";
import { statePath } from "./templates/StatePage";
import { GUIDES } from "@/content/guides";
import { statesFor } from "@/content/states";
import { programBySlug } from "@/lib/site";
import type { Guide } from "@/content/types";

/** Guide categories worth reading from each program page. Rentals include the BRRRR refinance and portfolio guides. */
const CATEGORY: Record<"dscr" | "fix-and-flip", Guide["category"][]> = {
  dscr: ["DSCR", "Short-term rental", "BRRRR", "Portfolio"],
  "fix-and-flip": ["Fix & flip", "Financing basics"],
};

const HEADING: Record<"dscr" | "fix-and-flip", string> = {
  dscr: "Check the rental’s numbers before you buy it.",
  "fix-and-flip": "Check the flip’s numbers before you make the offer.",
};

/** Homework block on a program page: its guides as cards, then its state pages. Renders nothing until either exists. */
export function DeeperLinks({ program }: { program: "dscr" | "fix-and-flip" }) {
  const states = statesFor(program);
  const guides = GUIDES.filter((g) => CATEGORY[program].includes(g.category));
  const p = programBySlug(program);
  if (!guides.length && !states.length) return null;
  return (
    <section className="border-t border-line bg-white">
      <Container className="flex flex-col gap-10 py-[88px]">
        <div className="flex max-w-[720px] flex-col gap-3">
          <Eyebrow>Do the homework</Eyebrow>
          <H2>{HEADING[program]}</H2>
        </div>
        {guides.length > 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Step-by-step guides</h3>
            <ul className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link href={guidePath(g)} className="group flex h-full flex-col gap-2 rounded-xl border border-line bg-paper p-5 transition-colors hover:border-ink">
                    <span className="text-xs text-muted">
                      {g.category} · {g.readMinutes} min
                    </span>
                    <span className="text-[17px] font-semibold leading-snug group-hover:text-brand">{g.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {states.length > 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">State pages</h3>
            <ul className="flex flex-wrap gap-2.5">
              {states.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={statePath(s)}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink px-4 text-[15px] font-semibold transition-colors hover:bg-ink hover:text-white"
                  >
                    {p?.short ?? "Loans"} in {s.state} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted">More state pages are on the way.</p>
          </div>
        )}
      </Container>
    </section>
  );
}
