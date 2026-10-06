export const GTM_ID = "GTM-MP2VQMBJ";
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
