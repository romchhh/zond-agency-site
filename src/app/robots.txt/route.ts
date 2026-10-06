import { NextResponse } from "next/server";
import { PAGE_CACHE_CONTROL } from "@/lib/http-cache";
import { getCanonicalSiteUrl, getRequestHostname, shouldBlockSearchIndexing } from "@/lib/site";

const BLOCKED_ROBOTS = `User-agent: *
Disallow: /
`;

function allowedRobots(): string {
  return `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${getCanonicalSiteUrl()}/sitemap.xml
`;
}

export function GET(request: Request) {
  const host = getRequestHostname(request.headers);
  const body = shouldBlockSearchIndexing(host) ? BLOCKED_ROBOTS : allowedRobots();

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": PAGE_CACHE_CONTROL,
    },
  });
}
