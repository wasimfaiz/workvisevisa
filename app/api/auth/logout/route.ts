/* ================================================================
   app/api/auth/logout/route.ts  — MVC: Route/View Layer
   POST /api/auth/logout
   ================================================================ */

import { logout } from "@/lib/controllers/authController";

export async function POST() {
  return logout();
}
