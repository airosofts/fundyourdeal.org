import { JsonLd } from "./ui";

export type QA = { q: string; a: string };

/** Question list on native <details> (no JS), with FAQPage structured data unless schema={false}. */
export function Faq({ items, schema = true }: { items: QA[]; schema?: boolean }) {
  return (
    <div className="flex flex-col gap-2.5">
      {schema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
          }}
        />
      )}
      {items.map((i) => (
        <details key={i.q} className="group rounded-xl border border-line bg-white px-5 py-4 open:border-ink">
          <summary className="flex items-start justify-between gap-4 text-[17px] font-semibold leading-snug">
            {i.q}
            <span
              className="faq-plus flex size-7 shrink-0 items-center justify-center rounded-full border border-line font-mono text-[15px] font-normal transition-transform group-open:border-ink"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <p className="mt-3 border-t border-dashed border-line pt-3 text-[15px] leading-relaxed text-ink-2">{i.a}</p>
        </details>
      ))}
    </div>
  );
}
