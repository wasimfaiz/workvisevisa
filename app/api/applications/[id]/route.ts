/* ================================================================
   app/api/applications/[id]/route.ts — Single Application Case API
   GET: Fetch application with full milestone history
   PATCH: Advance/update stage, edit candidate profile, add timeline log
   DELETE: Remove application case (Admin only)
   ================================================================ */

import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Application from "@/lib/models/Application";
import { PROCESSING_STAGES } from "@/lib/types/application";
import AdminUser from "@/lib/models/AdminUser";
import { requirePermission, getAuthUser } from "@/lib/auth";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Helper to resolve counselor details
async function resolveCounselor(assignedInput: unknown) {
  if (!assignedInput || assignedInput === "unassigned") {
    return { id: null, name: "", email: "", role: "" };
  }

  let empId: string | null = null;
  let fallbackName = "";
  let fallbackEmail = "";
  let fallbackRole = "";

  if (typeof assignedInput === "string") {
    empId = assignedInput.trim();
  } else if (typeof assignedInput === "object" && assignedInput !== null) {
    const obj = assignedInput as Record<string, unknown>;
    empId = typeof obj.id === "string" && obj.id ? obj.id.trim() : null;
    fallbackName = typeof obj.name === "string" ? obj.name.trim() : "";
    fallbackEmail = typeof obj.email === "string" ? obj.email.trim() : "";
    fallbackRole = typeof obj.role === "string" ? obj.role.trim() : "";
  }

  if (!empId || empId === "unassigned" || empId === "null") {
    if (fallbackName) {
      return { id: null, name: fallbackName, email: fallbackEmail, role: fallbackRole || "counselor" };
    }
    return { id: null, name: "", email: "", role: "" };
  }

  try {
    const user = await AdminUser.findById(empId).select("name email role").lean();
    if (user) {
      return {
        id: (user._id as unknown as { toString(): string }).toString(),
        name: user.name || fallbackName || "Staff",
        email: user.email || fallbackEmail || "",
        role: user.role || fallbackRole || "staff",
      };
    }
  } catch {
    try {
      const user = await AdminUser.findOne({
        $or: [{ name: empId }, { email: empId }],
      }).select("name email role").lean();
      if (user) {
        return {
          id: (user._id as unknown as { toString(): string }).toString(),
          name: user.name,
          email: user.email,
          role: user.role || "staff",
        };
      }
    } catch {}
  }

  return {
    id: empId,
    name: fallbackName || empId,
    email: fallbackEmail,
    role: fallbackRole || "staff",
  };
}

// GET /api/applications/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requirePermission(request, "applications", "view");
    if (!auth.allowed) {
      return Response.json({ success: false, message: auth.error }, { status: auth.status });
    }

    const { id } = await params;
    await connectDB();

    const application = await Application.findById(id).lean();
    if (!application) {
      return Response.json({ success: false, message: "Application not found." }, { status: 404 });
    }

    const transformed = {
      ...application,
      id: (application._id as unknown as { toString(): string }).toString(),
      _id: undefined,
      __v: undefined,
    };

    return Response.json({ success: true, data: transformed });
  } catch (error) {
    console.error("Error fetching application:", error);
    return Response.json({ success: false, message: "Failed to fetch application" }, { status: 500 });
  }
}

// PATCH /api/applications/[id]
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requirePermission(request, "applications", "edit");
    if (!auth.allowed) {
      return Response.json({ success: false, message: auth.error }, { status: auth.status });
    }

    const user = getAuthUser(request);
    const { id } = await params;
    const body = await request.json();

    await connectDB();

    const currentDoc = await Application.findById(id);
    if (!currentDoc) {
      return Response.json({ success: false, message: "Application not found." }, { status: 404 });
    }

    const updates: Record<string, unknown> = {};

    if (body.candidateName && typeof body.candidateName === "string") {
      updates.candidateName = body.candidateName.trim();
    }
    if (body.passportNumber !== undefined) {
      updates.passportNumber = String(body.passportNumber).trim().toUpperCase();
    }
    if (body.phone && typeof body.phone === "string") {
      updates.phone = body.phone.trim();
    }
    if (body.email !== undefined) {
      updates.email = String(body.email).trim().toLowerCase();
    }
    if (body.targetCountry && typeof body.targetCountry === "string") {
      updates.targetCountry = body.targetCountry.trim();
    }
    if (body.jobTrade && typeof body.jobTrade === "string") {
      updates.jobTrade = body.jobTrade.trim();
    }
    if (body.workPermitNumber !== undefined) {
      updates.workPermitNumber = String(body.workPermitNumber).trim();
    }
    if (body.vfsAppointmentDate !== undefined) {
      updates.vfsAppointmentDate = String(body.vfsAppointmentDate).trim();
    }
    if (body.visaNumber !== undefined) {
      updates.visaNumber = String(body.visaNumber).trim();
    }
    if (body.flightDate !== undefined) {
      updates.flightDate = String(body.flightDate).trim();
    }
    if (body.flightPnr !== undefined) {
      updates.flightPnr = String(body.flightPnr).trim().toUpperCase();
    }
    if (body.notes !== undefined) {
      updates.notes = String(body.notes).trim();
    }

    // Update financial amounts
    if (body.packageAmount !== undefined || body.paidAmount !== undefined) {
      const pkg = body.packageAmount !== undefined ? Number(body.packageAmount) : currentDoc.packageAmount;
      const paid = body.paidAmount !== undefined ? Number(body.paidAmount) : currentDoc.paidAmount;
      updates.packageAmount = pkg;
      updates.paidAmount = paid;
      updates.balanceAmount = Math.max(0, pkg - paid);
    }

    // Update counselor
    if (body.assignedCounselor !== undefined) {
      updates.assignedCounselor = await resolveCounselor(body.assignedCounselor);
    }

    // Check if stage or stageStatus is changing -> append to stageHistory
    const isStageChange =
      body.currentStage !== undefined &&
      Number(body.currentStage) >= 1 &&
      Number(body.currentStage) <= 7 &&
      Number(body.currentStage) !== currentDoc.currentStage;

    const isStatusChange =
      body.stageStatus !== undefined &&
      ["in_progress", "completed", "on_hold", "rejected"].includes(body.stageStatus) &&
      body.stageStatus !== currentDoc.stageStatus;

    const hasNewRemark = typeof body.newRemark === "string" && body.newRemark.trim().length > 0;

    let targetStage = currentDoc.currentStage;
    if (body.currentStage !== undefined && Number(body.currentStage) >= 1 && Number(body.currentStage) <= 7) {
      targetStage = Number(body.currentStage);
      updates.currentStage = targetStage;
    }

    let targetStatus = currentDoc.stageStatus;
    if (body.stageStatus && ["in_progress", "completed", "on_hold", "rejected"].includes(body.stageStatus)) {
      targetStatus = body.stageStatus;
      updates.stageStatus = targetStatus;
    }

    if (isStageChange || isStatusChange || hasNewRemark) {
      const stageMeta = PROCESSING_STAGES.find((s) => s.step === targetStage) || PROCESSING_STAGES[0];
      const newHistoryEntry = {
        stageNumber: targetStage,
        stageName: stageMeta.name,
        status: targetStatus,
        date: new Date(),
        remarks: body.newRemark ? body.newRemark.trim() : `Status updated to ${targetStatus.toUpperCase()} at stage ${targetStage}`,
        updatedBy: user?.email || "Admin",
      };

      updates.$push = { stageHistory: newHistoryEntry };
    }

    const updated = await Application.findByIdAndUpdate(
      id,
      updates,
      { returnDocument: "after", new: true }
    ).lean();

    if (!updated) {
      return Response.json({ success: false, message: "Application not found." }, { status: 404 });
    }

    const transformed = {
      ...updated,
      id: (updated._id as unknown as { toString(): string }).toString(),
      _id: undefined,
      __v: undefined,
    };

    return Response.json({
      success: true,
      message: "Application updated successfully.",
      data: transformed,
    });
  } catch (error) {
    console.error("Error updating application:", error);
    return Response.json({ success: false, message: "Failed to update application." }, { status: 500 });
  }
}

// DELETE /api/applications/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requirePermission(request, "applications", "delete");
    if (!auth.allowed) {
      return Response.json({ success: false, message: auth.error }, { status: auth.status });
    }

    const { id } = await params;
    await connectDB();

    const deleted = await Application.findByIdAndDelete(id);
    if (!deleted) {
      return Response.json({ success: false, message: "Application not found." }, { status: 404 });
    }

    return Response.json({
      success: true,
      message: "Application case deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting application:", error);
    return Response.json({ success: false, message: "Failed to delete application" }, { status: 500 });
  }
}
