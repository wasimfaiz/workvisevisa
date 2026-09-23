/* ================================================================
   app/api/jobs/route.ts  — MVC: Route/View Layer
   Thin handler — delegates all logic to jobController.
   
   GET  /api/jobs   → getAllJobs  (public)
   POST /api/jobs   → createJob   (admin only)
   ================================================================ */

import { NextRequest } from "next/server";
import { getAllJobs, createJob } from "@/lib/controllers/jobController";

export async function GET() {
  return getAllJobs();
}

export async function POST(request: NextRequest) {
  return createJob(request);
}
