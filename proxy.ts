import { NextResponse, type NextRequest } from "next/server";
import { APP_LINKS } from "@/constants";
import { ADMIN_SESSION_COOKIE, verifySessionToken } from "@/app/lib/adminAuth";

const ALLOWED_PATHS = new Set<string>(APP_LINKS);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl; 

  const isAdminPage = pathname.startsWith("/admin");
  const isMutatingApiRequest =
    pathname.startsWith("/api/announcements") && request.method !== "GET";

  if (!pathname.startsWith("/api/") && !isAdminPage) {
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
  }

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  if (!isAdminPage && !isMutatingApiRequest) {
    return NextResponse.next();
  }

  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  const isAuthenticated = await verifySessionToken(token);

  if (isAuthenticated) {
    return NextResponse.next();
  }

  if (isAdminPage) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|sitemap.xml|robots.txt|.*\\..*).*)",
    "/api/announcements/:path*",
  ],
};
