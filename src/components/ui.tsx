import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-6 ${className}`}>{children}</div>;
}

/** Section label: a small square "stamp" and a mono caps line in the action colour (apricot on dark). */
export function Eyebrow({ children, tone = "ink" }: { children: ReactNode; tone?: "ink" | "lime" }) {
  return (
    <div className={`font-mono text-[12px] font-semibold uppercase leading-snug tracking-[0.14em] ${tone === "lime" ? "text-lime" : "text-brand"}`}>
      <span aria-hidden="true" className="mr-2.5 inline-block size-2 bg-current" />
      {children}
    </div>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-[clamp(30px,3.5vw,44px)] font-bold leading-[1.08] tracking-[-0.03em] ${className}`}>{children}</h2>;
}

type BtnProps = { href: string; children: ReactNode; variant?: "primary" | "outline" | "dark" | "light" | "lime"; size?: "md" | "lg"; className?: string };
/** Pill buttons. `light` sits on orange bands and `lime` on navy, so their focus rings switch colour to stay visible. */
export function ButtonLink({ href, children, variant = "primary", size = "md", className = "" }: BtnProps) {
  const v = {
    primary: "bg-brand text-white hover:bg-brand-deep",
    outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
    dark: "bg-ink text-white hover:bg-night",
    light: "bg-white text-ink hover:bg-brand-tint focus-visible:outline-white",
    lime: "bg-lime text-ink hover:bg-white focus-visible:outline-lime",
  }[variant];
  const s = size === "lg" ? "min-h-[54px] px-7 text-base" : "min-h-11 px-5 text-[15px]";
  return (
    <Link href={href} className={`inline-flex items-center justify-center rounded-full text-center font-bold tracking-[-0.01em] transition-colors ${v} ${s} ${className}`}>
      {children}
    </Link>
  );
}

export function Check({ className = "text-brand" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] font-medium text-muted">
      {items.map((it, i) => (
        <span key={it.label} className="flex items-center gap-2">
          {i > 0 && (
            <span aria-hidden="true" className="text-field">
              ›
            </span>
          )}
          {it.href ? (
            <Link href={it.href} className="underline-offset-4 hover:text-brand hover:underline">
              {it.label}
            </Link>
          ) : (
            <span aria-current="page" className="text-ink-2">
              {it.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

/** Structured data. "<" is escaped so no string in the data can close the script tag early. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
