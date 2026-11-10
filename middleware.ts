import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Clean parameterized filter query URLs on /jobs (e.g. ?country=Qatar, ?country=Oman)
  // and issue a 301 Permanent Redirect to the canonical /jobs URL.
  if (pathname === "/jobs" && searchParams.has("country")) {
    const url = new URL("/jobs", request.url);
    const q = searchParams.get("q");
    if (q) {
      url.searchParams.set("q", q);
    }
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/jobs"],
};

