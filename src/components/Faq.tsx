import { JsonLd } from "./ui";

export type QA = { q: string; a: string };

/** Accordion (native <details>, no JS) plus FAQPage structured data. */
export function Faq({ items, schema = true }: { items: QA[]; schema?: boolean }) {
  return (
    <div className="border-t border-line">
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
        <details key={i.q} className="border-b border-line py-[22px]">
          <summary className="flex justify-between gap-4 text-lg font-semibold">
            {i.q}
            <span className="faq-plus font-mono font-normal transition-transform" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="mt-3 text-base leading-relaxed text-ink-2">{i.a}</p>
        </details>
      ))}
    </div>
  );
}
