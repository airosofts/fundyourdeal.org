import { ImageResponse } from "next/og";

// Home-screen icon (180×180 PNG at /apple-icon): the LogoMark from
// src/components/Logo.tsx, the F-arrow in white on signal orange. iOS rounds
// the corners and shows transparency as black, so the orange fills the whole
// square instead of sitting in a disc. Keep GLYPH and BRAND in step with
// Logo.tsx and the --color-brand token in globals.css.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const BRAND = "#C4410D";
const GLYPH = "M9.1 10.9 12.6 7.4l3.5 3.5M12.6 7.4v14.2M12.6 14.6h7.4M12.6 18.7h4.9";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: BRAND }}>
        {/* The glyph (strokes included) is centred on (14.55, 14.5) of Logo.tsx's 28-unit grid; shifting the viewBox centres it on the tile. */}
        <svg width="180" height="180" viewBox="0.55 0.5 28 28">
          <path d={GLYPH} fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    size
  );
}
