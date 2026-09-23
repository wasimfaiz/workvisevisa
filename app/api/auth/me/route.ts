/* ================================================================
   app/api/auth/me/route.ts  — MVC: Route/View Layer
   GET /api/auth/me
   ================================================================ */

import { NextRequest } from "next/server";
import { getMe } from "@/lib/controllers/authController";

export async function GET(request: NextRequest) {
  return getMe(request);
}
