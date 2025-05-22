import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const pathname = req.nextUrl.pathname;

  const isAdminBase = pathname === "/admin"; // Your login page
  const isAdminSubRoute =
    pathname.startsWith("/admin/") && pathname !== "/admin";

  // If trying to access protected admin subpages without token or proper role -> redirect to /admin (login)
  if (isAdminSubRoute && !token) {
    const loginUrl = new URL("/admin", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // If already logged in and trying to access login page (/admin), redirect to dashboard (/admin/overview)
  if (isAdminBase && token) {
    const dashboardUrl = new URL("/admin/overview", req.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // Otherwise, allow request
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Protect all /admin routes including /admin itself
};
