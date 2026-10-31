import { redirect } from "next/navigation";

/* ================================================================
   app/partner/page.tsx
   Redirects to the unified Role-Based Access Control login at /admin.
   ================================================================ */

export default function PartnerRootPage() {
  redirect("/admin");
}
