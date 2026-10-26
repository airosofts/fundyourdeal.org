import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StatePage, stateMetadata } from "@/components/templates/StatePage";
import { stateFor, statesFor } from "@/content/states";

export function generateStaticParams() {
  return statesFor("dscr").map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/dscr-loans/[state]">): Promise<Metadata> {
  const s = stateFor("dscr", (await params).state);
  return s ? stateMetadata(s) : {};
}

export default async function Page({ params }: PageProps<"/dscr-loans/[state]">) {
  const s = stateFor("dscr", (await params).state);
  if (!s) notFound();
  return <StatePage s={s} />;
}
