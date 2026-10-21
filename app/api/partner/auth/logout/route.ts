/* ================================================================
   app/api/partner/auth/logout/route.ts — B2B Partner Logout
   POST /api/partner/auth/logout
   ================================================================ */

import { buildClearPartnerCookie } from "@/lib/partnerAuth";

export const dynamic = "force-dynamic";

export async function POST() {
  const cookie = buildClearPartnerCookie();
  return new Response(
    JSON.stringify({ success: true, message: "Logged out successfully from Partner Portal." }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": cookie,
      },
    }
  );
}
