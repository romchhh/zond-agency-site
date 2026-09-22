import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { resolveLegacyRewrite } from "@/i18n/routing";

function withLocale(request: NextRequest, locale: Locale, rewritePath?: string) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  if (rewritePath) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = rewritePath;
    return NextResponse.rewrite(rewriteUrl, {
      request: { headers: requestHeaders },
    });
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/uk" || pathname.startsWith("/uk/")) {
    const nextPath = pathname.replace(/^\/uk/, "") || "/";
    return NextResponse.redirect(new URL(nextPath, request.url));
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
