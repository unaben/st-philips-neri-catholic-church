import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { APP_LINKS } from "@/constants";

const ALLOWED_PATHS = new Set<string>(APP_LINKS);

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const normalizedPath =
    pathname !== "/" && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  if (!ALLOWED_PATHS.has(normalizedPath)) {
    const homeUrl = request.nextUrl.clone();
    homeUrl.pathname = "/";
    homeUrl.search = "";
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
