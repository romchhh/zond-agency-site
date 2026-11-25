"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageviewBeacon() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin")) return;
    const controller = new AbortController();
    void fetch("/api/analytics/pageview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname }),
      signal: controller.signal,
      keepalive: true,
    }).catch(() => {
      // ignore beacon errors
    });
    return () => controller.abort();
  }, [pathname]);

  return null;
}
