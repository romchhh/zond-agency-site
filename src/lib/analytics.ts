export const GTM_ID = "GTM-MP2VQMBJ";
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

