import type { MetadataRoute } from "next";
import { DESCRIPTION } from "@/lib/seo";
import { SITE } from "@/lib/site";

// Web app manifest (/manifest.webmanifest, linked from every page by Next).
// Colours are the globals.css tokens: --color-ink for the browser bar (the
// same navy as the header and viewport.themeColor), --color-paper for the
// page ground shown while the site opens from a home screen.
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: SITE.name,
    short_name: SITE.name,
    description: DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    lang: "en-US",
    dir: "ltr",
    theme_color: "#0e2042",
    background_color: "#f4f6fa",
    categories: ["finance", "business"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
  };
}
