import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/ui";
import { SITE } from "@/lib/site";
import { DESCRIPTION, FEED_TYPES, OG_SITE, ORG_ID, WEBSITE_ID } from "@/lib/seo";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

// Plus Jakarta Sans for text, JetBrains Mono for figures. The variable names are the ones
// globals.css maps to --font-sans and --font-mono; keep them in step if you rename either.
const sans = Plus_Jakarta_Sans({ variable: "--font-geist-sans", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  title: { default: `${SITE.name} — Fast Fix and Flip, Bridge and BRRRR Loans`, template: `%s | ${SITE.name}` },
  description:
    "Deal under contract? Get fast funding for flips, hard money, bridge, BRRRR and new builds, then a rental loan sized on the rent when you refinance out.",
  // No title, description or url here: Next fills og:title and og:description from each page's own
  // metadata, and a url set here would be inherited by every page. The image is opengraph-image.tsx.
  // A page that sets its own openGraph replaces this object, so it goes through openGraphFor() (lib/seo.ts).
  openGraph: { ...OG_SITE, type: "website" },
  // Title, description and image are copied from openGraph.
  twitter: { card: "summary_large_image" },
  // Every page sets its own canonical through alternatesFor() or alternates.canonical. A page's
  // alternates replace these, so alternatesFor() carries the feed link too.
  alternates: { types: FEED_TYPES },
  // Off until launch: NEXT_PUBLIC_INDEXABLE=true on the live domain lets search engines in.
  robots: SITE.indexable
    ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
    : { index: false, follow: false },
};

// Matches the navy header so the phone browser bar runs into it.
export const viewport: Viewport = { themeColor: "#0E2042" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        {/* Site-wide nodes. Pages point at them by @id; no rating, entity name or licence number belongs here. */}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": ORG_ID,
                name: SITE.name,
                url: SITE.url,
                logo: { "@type": "ImageObject", url: `${SITE.url}/apple-icon`, width: 180, height: 180 },
                description: DESCRIPTION,
                email: SITE.email,
                areaServed: "US",
                contactPoint: { "@type": "ContactPoint", contactType: "customer service", email: SITE.email, url: `${SITE.url}/contact`, availableLanguage: "English" },
              },
              { "@type": "WebSite", "@id": WEBSITE_ID, name: SITE.name, url: SITE.url, description: DESCRIPTION, inLanguage: "en-US", publisher: { "@id": ORG_ID } },
            ],
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:font-bold focus:text-ink focus:shadow-lg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
