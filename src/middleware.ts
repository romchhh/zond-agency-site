import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";

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
