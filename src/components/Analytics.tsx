import Script from "next/script";

// Google Tag Manager, only when NEXT_PUBLIC_GTM_ID is set. GA4 and Google Ads
// conversions are configured inside GTM; the lead form pushes
// `gf_lead_step` and `gf_lead_submitted` events to the dataLayer.
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GTM_ID;
  if (!id || !/^GTM-[A-Z0-9]+$/.test(id)) return null;
  return (
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`}
    </Script>
  );
}
