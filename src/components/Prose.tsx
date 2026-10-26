import type { ReactNode } from "react";

/** Reading column for the legal and company pages; each h2 opens with a rule. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[760px] px-6 pb-[88px] pt-2 text-[17px] leading-[1.75] text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-[3px] [&_h2]:mb-3 [&_h2]:mt-14 [&_h2]:border-t [&_h2]:border-line [&_h2]:pt-8 [&_h2]:text-[25px] [&_h2]:font-semibold [&_h2]:leading-[1.2] [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:text-[18px] [&_h3]:font-semibold [&_h3]:text-ink [&_li]:mt-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:pl-6">
      {children}
    </div>
  );
}

/** Flags wording that still needs a business or legal decision before launch. */
export function Todo({ children }: { children: ReactNode }) {
  return <span className="rounded bg-[#FFF3C4] px-1 font-mono text-[0.85em] text-ink">[{children}]</span>;
}
