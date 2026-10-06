"use client";

import { isLiveAnalyticsHost } from "@/lib/analytics";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type RingostatAnalytics = {
  sendHit?: (event: string) => void;
};

export default function RingostatPageviews() {
  const pathname = usePathname();
  const skipFirst = useRef(true);

  useEffect(() => {
    if (skipFirst.current) {
      skipFirst.current = false;
      return;
    }
    if (!isLiveAnalyticsHost(window.location.hostname)) return;
    const analytics = (window as Window & { ringostatAnalytics?: RingostatAnalytics })
      .ringostatAnalytics;
    analytics?.sendHit?.("pageview");
  }, [pathname]);

  return null;
}
