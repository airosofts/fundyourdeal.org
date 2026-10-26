import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/ui";
import { SITE } from "@/lib/site";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

// Plus Jakarta Sans for text, JetBrains Mono for figures. The variable names are the ones
// globals.css maps to --font-sans and --font-mono; keep them in step if you rename either.
const sans = Plus_Jakarta_Sans({ variable: "--font-geist-sans", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — Fast Fix and Flip, Bridge and BRRRR Loans`, template: `%s | ${SITE.name}` },
  description:
    "Deal under contract? Get fast funding for flips, hard money, bridge, BRRRR and new builds, then a rental loan sized on the rent when you refinance out.",
  openGraph: { siteName: SITE.name, type: "website", locale: "en_US" },
  // Off until launch: NEXT_PUBLIC_INDEXABLE=true on the live domain lets search engines in.
  robots: SITE.indexable ? { index: true, follow: true } : { index: false, follow: false },
};

// Matches the navy header so the phone browser bar runs into it.
export const viewport: Viewport = { themeColor: "#0E2042" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, logo: `${SITE.url}/icon.svg`, description: SITE.tagline, email: SITE.email },
              { "@type": "WebSite", "@id": `${SITE.url}/#website`, name: SITE.name, url: SITE.url, publisher: { "@id": `${SITE.url}/#org` } },
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
