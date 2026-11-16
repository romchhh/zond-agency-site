"use client";

import { trackGoogleAdsLeadConversion } from "@/lib/analytics";
import { useEffect } from "react";

/** Fires Google Ads lead conversion on thank-you pages (deduped per session). */
export default function GoogleAdsConversion() {
  useEffect(() => {
    trackGoogleAdsLeadConversion();
  }, []);

  return null;
}
