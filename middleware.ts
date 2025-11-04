import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { defaultLanguage, languages } from "@/config/i18n";

const PUBLIC_FILE = /\.(?:ico|png|svg|jpg|jpeg|webp|gif|woff|woff2|ttf|eot|css|js)$/;

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Skip middleware for Next.js internals, API routes, and static files
  if (
    pathname.startsWith("/_next") || 
    pathname.startsWith("/api") || 
    pathname.startsWith("/images") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already has a language prefix
  const hasLocale = languages.some((lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`));

  // If no language prefix, redirect to default language
  if (!hasLocale) {
    const redirectURL = request.nextUrl.clone();
    const normalized = pathname === "/" ? "" : pathname;
    redirectURL.pathname = `/${defaultLanguage}${normalized}`;
    redirectURL.search = search;
    
    console.log(`[Middleware] Redirecting ${pathname} -> ${redirectURL.pathname}`);
    return NextResponse.redirect(redirectURL);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap.xml|images/).*)"
};


