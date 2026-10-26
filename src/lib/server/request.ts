import "server-only";
import type { NextRequest } from "next/server";

// Who sent a request: IP, rough location and browser. Cloudflare and Vercel
// both add location headers; ip-api.com is the fallback when neither does.

export function clientIp(req: NextRequest): string | null {
  const h = req.headers;
  return (
    h.get("cf-connecting-ip")?.trim() ||
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip")?.trim() ||
    h.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ||
    null
  );
}

export type Geo = { country: string | null; region: string | null; city: string | null };

const PRIVATE_IP = /^(127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|::1$|fc|fd)/;

export async function requestGeo(req: NextRequest, ip: string | null): Promise<Geo> {
  const h = req.headers;
  const country = h.get("cf-ipcountry") || h.get("x-vercel-ip-country");
  const region = h.get("x-vercel-ip-country-region");
  const city = h.get("x-vercel-ip-city");
  if (country && (region || city)) return { country, region, city: city ? decodeURIComponent(city) : null };
  if (!ip || PRIVATE_IP.test(ip)) return { country: country || null, region: null, city: null };
  try {
    const res = await fetch(`http://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,countryCode,region,city`, {
      cache: "no-store",
      signal: AbortSignal.timeout(2500),
    });
    const d = (await res.json()) as { status?: string; countryCode?: string; region?: string; city?: string };
    if (d.status === "success") return { country: d.countryCode ?? null, region: d.region ?? null, city: d.city ?? null };
  } catch {
    /* location is nice to have — never block a lead on it */
  }
  return { country: country || null, region: null, city: null };
}

export const requestMeta = (req: NextRequest) => ({
  user_agent: req.headers.get("user-agent")?.slice(0, 500) || null,
  referrer: req.headers.get("referer")?.slice(0, 1000) || null,
});

/** Read a JSON body without throwing; null when it isn't JSON or is too big. */
export async function readJson<T>(req: NextRequest, maxBytes = 20_000): Promise<T | null> {
  try {
    const text = await req.text();
    if (text.length > maxBytes) return null;
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

/** E.164 for a 10-digit US number. */
export function toE164(phone: string | undefined): string | null {
  const d = (phone ?? "").replace(/\D/g, "");
  const ten = d.length === 11 && d.startsWith("1") ? d.slice(1) : d;
  return ten.length === 10 ? `+1${ten}` : null;
}
