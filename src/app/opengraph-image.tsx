import { ImageResponse } from "next/og";

// Default social share image for every page that doesn't define its own.
export const alt = "Fund Your Deal — fast funding for real estate investors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#131C18", padding: 72, color: "#F5F6F2" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 28 28">
            <rect x="1" y="1" width="26" height="26" rx="7" fill="#0D1411" stroke="#26302B" />
            <path d="M7 15.5 14 9l7 6.5" fill="none" stroke="#CDEB6E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.5 19.5h9" fill="none" stroke="#CDEB6E" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 40, fontWeight: 600 }}>Fund Your Deal</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.04, letterSpacing: -2 }}>Fast funding for real estate investors.</span>
          <span style={{ fontSize: 30, color: "#B7C0BA" }}>DSCR · Fix and flip · Bridge · BRRRR · Construction · Portfolio</span>
        </div>
        <span style={{ fontSize: 24, color: "#CDEB6E" }}>fundyourdeal.org</span>
      </div>
    ),
    size
  );
}
