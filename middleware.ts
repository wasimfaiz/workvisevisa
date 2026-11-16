import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // All routes are served directly with HTTP 200 OK and self-referencing canonical tags.
  // No 301/308 redirects to eliminate GSC "Page with redirect" indexing warnings.
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
