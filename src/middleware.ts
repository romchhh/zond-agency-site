import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { resolveLegacyRewrite } from "@/i18n/routing";
import { shouldBlockSearchIndexing } from "@/lib/site";

function applyIndexingHeaders(response: NextResponse, host: string) {
  if (shouldBlockSearchIndexing(host)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

function withLocale(request: NextRequest, locale: Locale, rewritePath?: string) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  const host = request.nextUrl.hostname;

  if (rewritePath) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = rewritePath;
    return applyIndexingHeaders(
      NextResponse.rewrite(rewriteUrl, {
        request: { headers: requestHeaders },
      }),
      host,
    );
  }

  return applyIndexingHeaders(
    NextResponse.next({
      request: { headers: requestHeaders },
    }),
    host,
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/uk" || pathname.startsWith("/uk/")) {
    const nextPath = pathname.replace(/^\/uk/, "") || "/";
    return applyIndexingHeaders(
      NextResponse.redirect(new URL(nextPath, request.url)),
      request.nextUrl.hostname,
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
  matcher: ["/((?!api|_next|_vercel|assets|fonts|.*\\..*).*)"],
};
