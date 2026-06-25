import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isValidLocale, locales } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.match(/^\/[^/]+\/sitemap\.xml$/) ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|txt|xml|json|woff2?)$/)
  ) {
    return NextResponse.next();
  }

  const pathnameLocale = pathname.split("/")[1];
  if (pathnameLocale && isValidLocale(pathnameLocale)) {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase())
    .find((lang) => {
      if (isValidLocale(lang)) return true;
      const base = lang.split("-")[0];
      return locales.some((l) => l === lang || l.startsWith(base));
    });

  let detected: string = defaultLocale;
  if (preferred) {
    if (isValidLocale(preferred)) {
      detected = preferred;
    } else {
      const match = locales.find(
        (l) => l === preferred || l.startsWith(preferred.split("-")[0])
      );
      if (match) detected = match;
    }
  }

  const suffix = pathname === "/" ? "" : pathname;
  return NextResponse.redirect(new URL(`/${detected}${suffix}`, request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
