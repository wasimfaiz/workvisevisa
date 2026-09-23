/* ================================================================
   app/api/auth/login/route.ts  — MVC: Route/View Layer
   POST /api/auth/login
   ================================================================ */

import { NextRequest } from "next/server";
import { login } from "@/lib/controllers/authController";

export async function POST(request: NextRequest) {
  return login(request);
}
