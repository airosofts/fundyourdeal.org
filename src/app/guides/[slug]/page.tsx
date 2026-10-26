import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePage, guideMetadata } from "@/components/templates/GuidePage";
import { GUIDES, guideBySlug, relatedGuides } from "@/content/guides";

// Guides with their own path (e.g. /dscr-loans/requirements) are served there, not here.
export function generateStaticParams() {
  return GUIDES.filter((g) => !g.path).map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const g = guideBySlug((await params).slug);
  return g && !g.path ? guideMetadata(g) : {};
}

export default async function Page({ params }: PageProps<"/guides/[slug]">) {
  const g = guideBySlug((await params).slug);
  if (!g || g.path) notFound();
  return <GuidePage g={g} crumbs={[{ href: "/", label: "Home" }, { href: "/guides", label: "Guides" }, { label: g.title }]} related={relatedGuides(g)} />;
}
