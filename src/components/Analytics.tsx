import Script from "next/script";

// Google Tag Manager on every page (Nov 23 2026: container GTM-WQQ4ZCQN, which
// runs Google Analytics 4, G-DNPJJNWTS7). GA4 and Google Ads conversions are
// configured inside GTM. The lead form pushes `gf_lead_step`, `gf_lead_submitted`
// and `gf_lead_completed`; src/lib/siteTrack.ts pushes `gf_form_start` and
// `gf_calculator_used` (with `calculator`). NEXT_PUBLIC_GTM_ID overrides the ID.
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GTM_ID || "GTM-WQQ4ZCQN";
  if (!/^GTM-[A-Z0-9]+$/.test(id)) return null;
  return (
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`}
    </Script>
  );
}
