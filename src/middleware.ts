import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isValidLocale, locales } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.match(/^\/[^/]+\/sitemap\.xml$/)
  ) {
    return NextResponse.next();
  }

  const pathnameLocale = pathname.split("/")[1];
  if (isValidLocale(pathnameLocale)) {
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

  return NextResponse.redirect(
    new URL(`/${detected}${pathname === "/" ? "" : pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
