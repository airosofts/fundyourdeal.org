"use client";

import { useSearchParams } from "next/navigation";
import { LeadForm } from "./LeadForm";
import { programBySlug } from "@/lib/site";

/** The /get-funding form. Program pages and calculators link with ?loan=<program slug>, which presets the deal type. */
export function MatchedForm() {
  const slug = useSearchParams().get("loan") ?? "";
  const preset = programBySlug(slug)?.preset;
  return <LeadForm key={slug} variant="page" preset={preset} />;
}
