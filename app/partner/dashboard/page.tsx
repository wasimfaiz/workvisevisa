import { redirect } from "next/navigation";

/* ================================================================
   app/partner/dashboard/page.tsx
   Redirects to the unified Role-Based Access Control dashboard at /admin/applications.
   ================================================================ */

export default function PartnerDashboardPage() {
  redirect("/admin/applications");
}
