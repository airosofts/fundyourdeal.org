import type { ReactNode } from "react";

/** Long-form text column for legal and company pages. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[760px] px-6 pb-[88px] pt-2 text-[17px] leading-[1.7] text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:text-[26px] [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:text-[19px] [&_h3]:font-semibold [&_h3]:text-ink [&_li]:mt-1.5 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:pl-6">
      {children}
    </div>
  );
}

/** Marks text that needs a business or legal decision before launch. */
export function Todo({ children }: { children: ReactNode }) {
  return <span className="rounded bg-[#FFF3C4] px-1 font-mono text-[0.85em] text-ink">[{children}]</span>;
}
