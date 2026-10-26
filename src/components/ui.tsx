import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, tone = "ink" }: { children: ReactNode; tone?: "ink" | "lime" }) {
  return (
    <div className={`font-mono text-[13px] uppercase tracking-[0.08em] ${tone === "lime" ? "text-lime" : "text-ink-2"}`}>{children}</div>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-[clamp(32px,3.6vw,46px)] font-semibold leading-[1.08] tracking-[-0.035em] ${className}`}>{children}</h2>;
}

type BtnProps = { href: string; children: ReactNode; variant?: "primary" | "outline" | "dark" | "light" | "lime"; size?: "md" | "lg"; className?: string };
export function ButtonLink({ href, children, variant = "primary", size = "md", className = "" }: BtnProps) {
  const v = {
    primary: "bg-brand text-white hover:bg-brand-deep",
    outline: "border border-ink text-ink hover:bg-ink hover:text-white",
    dark: "bg-ink text-white hover:bg-night",
    light: "bg-white text-ink hover:bg-paper",
    lime: "bg-lime text-ink hover:brightness-95",
  }[variant];
  const s = size === "lg" ? "min-h-[52px] px-6 text-base rounded-xl" : "min-h-11 px-[18px] text-[15px] rounded-[10px]";
  return (
    <Link href={href} className={`inline-flex items-center justify-center font-semibold transition-colors ${v} ${s} ${className}`}>
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
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      {items.map((it, i) => (
        <span key={it.label}>
          {i > 0 && " / "}
          {it.href ? (
            <Link href={it.href} className="hover:text-ink">
              {it.label}
            </Link>
          ) : (
            <span aria-current="page">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
