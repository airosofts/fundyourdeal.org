"use client";

import { useSearchParams } from "next/navigation";
import { LeadForm } from "./LeadForm";
import { programBySlug } from "@/lib/site";

/** The page form, pre-filled from ?loan=<program slug> (links from program pages and calculators). */
export function MatchedForm() {
  const slug = useSearchParams().get("loan") ?? "";
  const preset = programBySlug(slug)?.preset;
  return <LeadForm key={slug} variant="page" preset={preset} />;
}
