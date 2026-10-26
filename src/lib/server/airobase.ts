import "server-only";
import { createClient, type AiroStackClient } from "@airostack/client";

// Server-side AiroBase client. Uses the secret key, which bypasses row-level
// security — so it must never be imported by client components ("server-only"
// makes that a build error). Tables have RLS on with no public policies.

let cached: AiroStackClient | null = null;

export function airobaseConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_AIROBASE_URL && process.env.AIROBASE_SECRET_KEY);
}

export function getAirobase(): AiroStackClient {
  if (cached) return cached;
  const url = process.env.NEXT_PUBLIC_AIROBASE_URL;
  const key = process.env.AIROBASE_SECRET_KEY;
  if (!url || !key) throw new Error("AiroBase env missing: set NEXT_PUBLIC_AIROBASE_URL and AIROBASE_SECRET_KEY");
  cached = createClient(url, key, { auth: { persistSession: false } });
  return cached;
}

export const TABLES = {
  leads: "gf_leads",
  rateAlerts: "gf_rate_alerts",
  partners: "gf_partner_inquiries",
  contact: "gf_contact_messages",
} as const;
