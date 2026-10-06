import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { resolveLegacyRewrite } from "@/i18n/routing";
import { getThanksLocale } from "@/lib/lead";
import {
  CANONICAL_HOST,
  getRequestHostname,
  isApexHost,
  shouldBlockSearchIndexing,
} from "@/lib/site";
import { PAGE_CACHE_CONTROL } from "@/lib/http-cache";

function applyResponseHeaders(response: NextResponse, request: NextRequest) {
  const host = getRequestHostname(request.headers) ?? request.nextUrl.hostname;
  if (shouldBlockSearchIndexing(host)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  if (request.method === "GET" || request.method === "HEAD") {
    response.headers.set("Cache-Control", PAGE_CACHE_CONTROL);
    response.headers.set("CDN-Cache-Control", PAGE_CACHE_CONTROL);
    response.headers.set("Vercel-CDN-Cache-Control", PAGE_CACHE_CONTROL);
  }
  return response;
}

function redirectApexToWww(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = CANONICAL_HOST;
  url.port = "";
  return NextResponse.redirect(url, 308);
}

function withLocale(request: NextRequest, locale: Locale, rewritePath?: string) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  if (rewritePath) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = rewritePath;
    return applyResponseHeaders(
      NextResponse.rewrite(rewriteUrl, {
        request: { headers: requestHeaders },
      }),
      request,
    );
  }

  return applyResponseHeaders(
    NextResponse.next({
      request: { headers: requestHeaders },
    }),
    request,
  );
}

export function middleware(request: NextRequest) {
  const host = getRequestHostname(request.headers) ?? request.nextUrl.hostname;
  if (isApexHost(host)) {
    return redirectApexToWww(request);
  }

  const { pathname } = request.nextUrl;
  const thanksLocale = getThanksLocale(pathname);

  if (thanksLocale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", thanksLocale);
    const response = NextResponse.next({
      request: { headers: requestHeaders },
    });
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  if (pathname === "/robots.txt" || pathname === "/sitemap.xml") {
    return applyResponseHeaders(NextResponse.next(), request);
  }

  if (pathname === "/uk" || pathname.startsWith("/uk/")) {
    const nextPath = pathname.replace(/^\/uk/, "") || "/";
    return applyResponseHeaders(
      NextResponse.redirect(new URL(nextPath, request.url)),
      request,
    );
  }

  const legacyRewrite = resolveLegacyRewrite(pathname);
  if (legacyRewrite) {
    return withLocale(request, legacyRewrite.locale, legacyRewrite.internalPath);
  }

  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  if (maybeLocale && isLocale(maybeLocale) && maybeLocale !== defaultLocale) {
    return withLocale(request, maybeLocale);
  }

  const rewritePath = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return withLocale(request, defaultLocale, rewritePath);
}

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|assets|fonts|.*\\..*).*)",
    "/robots.txt",
    "/sitemap.xml",
  ],
};
