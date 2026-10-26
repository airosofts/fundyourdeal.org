import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Addresses from the first mock-up (shared for review) → their new homes.
  redirects() {
    return [
      { source: "/loans/dscr", destination: "/dscr-loans", permanent: true },
      { source: "/dscr-calculator", destination: "/calculators/dscr", permanent: true },
      { source: "/blended-rate-calculator", destination: "/calculators", permanent: true },
      { source: "/lenders", destination: "/contact", permanent: true },
      // Roland, Oct 21: one company the borrower deals with — no "matched"/lender-recruiting pages.
      { source: "/get-matched", destination: "/get-funding", permanent: true },
      { source: "/for-lenders", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
