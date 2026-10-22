"use client";

import { isLiveAnalyticsHost } from "@/lib/analytics";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type Fbq = (...args: unknown[]) => void;

export default function MetaPixelPageviews() {
  const pathname = usePathname();
  const skipFirst = useRef(true);

  useEffect(() => {
    if (skipFirst.current) {
      skipFirst.current = false;
      return;
    }
    if (!isLiveAnalyticsHost(window.location.hostname)) return;
    const fbq = (window as Window & { fbq?: Fbq }).fbq;
    fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
