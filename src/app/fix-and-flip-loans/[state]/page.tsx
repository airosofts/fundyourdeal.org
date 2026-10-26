import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StatePage, stateMetadata } from "@/components/templates/StatePage";
import { stateFor, statesFor } from "@/content/states";

export function generateStaticParams() {
  return statesFor("fix-and-flip").map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/fix-and-flip-loans/[state]">): Promise<Metadata> {
  const s = stateFor("fix-and-flip", (await params).state);
  return s ? stateMetadata(s) : {};
}

export default async function Page({ params }: PageProps<"/fix-and-flip-loans/[state]">) {
  const s = stateFor("fix-and-flip", (await params).state);
  if (!s) notFound();
  return <StatePage s={s} />;
}
