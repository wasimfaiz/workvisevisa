/* ================================================================
   app/api/jobs/[id]/route.ts  — MVC: Route/View Layer
   Thin handler — delegates all logic to jobController.
   
   GET    /api/jobs/:id  → getJobById  (public)
   PUT    /api/jobs/:id  → updateJob   (admin only)
   DELETE /api/jobs/:id  → deleteJob   (admin only)
   ================================================================ */

import { NextRequest } from "next/server";
import { getJobById, updateJob, deleteJob } from "@/lib/controllers/jobController";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return getJobById(id);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return updateJob(request, id);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return deleteJob(request, id);
}
