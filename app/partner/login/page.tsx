import { redirect } from "next/navigation";

/* ================================================================
   app/partner/login/page.tsx
   Redirects to the unified Role-Based Access Control login at /admin.
   ================================================================ */

export default function PartnerLoginPage() {
  redirect("/admin");
}
