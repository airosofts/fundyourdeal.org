import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

// Default social share image for every page that doesn't define its own:
// navy ground, the F-arrow mark, an orange base strip and the deal types as chips.
export const alt = "Fund Your Deal: fast loans for flips, hard money, bridge, BRRRR and new builds";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#0E2042";
const NIGHT = "#172D57";
const NIGHT_LINE = "#2A4170";
const ORANGE = "#C4410D";
const APRICOT = "#FF9F5E";
const PAPER = "#F4F6FA";
const MIST = "#B8C4DA";
const GLYPH = "M9.1 10.9 12.6 7.4l3.5 3.5M12.6 7.4v14.2M12.6 14.6h7.4M12.6 18.7h4.9";
const CHIPS = ["Fix and flip", "Hard money", "Bridge", "BRRRR", "New builds", "Rentals"];

export default function Image() {
  const cut = SITE.name.lastIndexOf(" ");
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: NAVY, color: PAPER }}>
        {/* Oversized mark as a watermark, bleeding off the right edge. */}
        <svg width="620" height="620" viewBox="0 0 28 28" style={{ position: "absolute", right: -220, top: -80 }}>
          <circle cx="14" cy="14" r="13" fill={NIGHT} />
          <path d={GLYPH} fill="none" stroke={NAVY} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", padding: "64px 72px 84px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <svg width="60" height="60" viewBox="0 0 28 28">
                <circle cx="14" cy="14" r="13" fill={ORANGE} />
                <path d={GLYPH} fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div style={{ display: "flex", fontSize: 40, letterSpacing: -1 }}>
                <span>{SITE.name.slice(0, cut)}</span>
                <span style={{ color: APRICOT, marginLeft: 11 }}>{SITE.name.slice(cut + 1)}</span>
              </div>
            </div>
            <span style={{ fontSize: 24, color: MIST }}>{SITE.domain}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, letterSpacing: 4, color: APRICOT, marginBottom: 18 }}>
              <div style={{ width: 12, height: 12, background: APRICOT }} />
              <span>INVESTMENT PROPERTY LOANS</span>
            </div>
            <span style={{ fontSize: 88, lineHeight: 1.02, letterSpacing: -3 }}>Got a deal?</span>
            <span style={{ fontSize: 88, lineHeight: 1.02, letterSpacing: -3, color: APRICOT }}>Get it funded fast.</span>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            {CHIPS.map((c) => (
              <span key={c} style={{ display: "flex", padding: "8px 20px", borderRadius: 999, border: `2px solid ${NIGHT_LINE}`, fontSize: 22, color: MIST }}>
                {c}
              </span>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 18, background: ORANGE }} />
      </div>
    ),
    size
  );
}
