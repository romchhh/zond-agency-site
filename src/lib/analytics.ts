export const GTM_ID = "GTM-MP2VQMBJ";
/** Google tag shared from Google Ads (zond.des@gmail.com). */
export const GOOGLE_TAG_ID = "GTM-5KCW4RHH";
/** Google Ads conversion account. */
export const GOOGLE_ADS_ID = "AW-18539496369";
/** Lead form thank-you conversion: «Надсилання форми для лідів». */
export const GOOGLE_ADS_LEAD_SEND_TO = "AW-18539496369/wcm7CMbJ_rYdELGHqYhF";
export const META_PIXEL_ID = "990041854833416";
export const RINGOSTAT_SCRIPT_SRC =
  "https://script.ringostat.com/v4/34/340f71755772b153bd3f9fef7282d78bb7db805e.js";

export function isLiveAnalyticsHost(hostname: string): boolean {
  return hostname === "zond.agency" || hostname === "www.zond.agency";
}

const LIVE_HOST_GUARD =
  "var h=window.location.hostname;if(h!=='zond.agency'&&h!=='www.zond.agency')return;";

export const gtmInlineScript = `(function(){${LIVE_HOST_GUARD}
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
})();`;

/** gtag.js base tag + Google Ads config on every page. */
export const googleAdsInlineScript = `(function(){${LIVE_HOST_GUARD}
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('js',new Date());
gtag('config','${GOOGLE_TAG_ID}');
gtag('config','${GOOGLE_ADS_ID}');
var s=document.createElement('script');
s.async=true;
s.src='https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}';
document.head.appendChild(s);
})();`;

export const ringostatInlineScript = `(function(){${LIVE_HOST_GUARD}
(function (d,s,u,e,p) {
  p=d.getElementsByTagName(s)[0],e=d.createElement(s),e.async=1,e.src=u,p.parentNode.insertBefore(e, p);
})(document, 'script', '${RINGOSTAT_SCRIPT_SRC}');
var pw = function() {if (typeof(ringostatAnalytics) === "undefined") {setTimeout(pw,100);} else {ringostatAnalytics.sendHit('pageview');}};
pw();
})();`;

export const metaPixelInlineScript = `(function(){${LIVE_HOST_GUARD}
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${META_PIXEL_ID}');
fbq('track','PageView');
})();`;

export const metaPixelNoscriptSrc = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;

/** Browser Lead event after a confirmed consultation save (no PII in params). */
export function trackMetaPixelLead(): void {
  if (typeof window === "undefined") return;
  if (!isLiveAnalyticsHost(window.location.hostname)) return;

  const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
  if (!fbq) return;

  fbq("trackSingle", META_PIXEL_ID, "Lead");
}

const ADS_LEAD_CONV_KEY = "zond_ads_lead_conv";

/** Google Ads lead conversion — once per session (submit and/or /thanks-*). */
export function trackGoogleAdsLeadConversion(): void {
  if (typeof window === "undefined") return;
  if (!isLiveAnalyticsHost(window.location.hostname)) return;

  try {
    if (window.sessionStorage.getItem(ADS_LEAD_CONV_KEY)) return;
    window.sessionStorage.setItem(ADS_LEAD_CONV_KEY, "1");
  } catch {
    // private mode / blocked storage — still try to send
  }

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) return;

  gtag("event", "conversion", { send_to: GOOGLE_ADS_LEAD_SEND_TO });
}

