import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Inquiry from "@/lib/models/Inquiry";
import AdminUser from "@/lib/models/AdminUser";
import { requirePermission } from "@/lib/auth";

// Helper to resolve full assignee details from database or payload
async function resolveAssignee(assignedToInput: unknown) {
  if (!assignedToInput || assignedToInput === "unassigned") {
    return { id: null, name: "", email: "", role: "" };
  }

  let empId: string | null = null;
  let fallbackName = "";
  let fallbackEmail = "";
  let fallbackRole = "";

  if (typeof assignedToInput === "string") {
    empId = assignedToInput.trim();
  } else if (typeof assignedToInput === "object" && assignedToInput !== null) {
    const obj = assignedToInput as Record<string, unknown>;
    empId = typeof obj.id === "string" && obj.id ? obj.id.trim() : null;
    fallbackName = typeof obj.name === "string" ? obj.name.trim() : "";
    fallbackEmail = typeof obj.email === "string" ? obj.email.trim() : "";
    fallbackRole = typeof obj.role === "string" ? obj.role.trim() : "";
  }

  if (!empId || empId === "unassigned" || empId === "null") {
    if (fallbackName) {
      return {
        id: null,
        name: fallbackName,
        email: fallbackEmail,
        role: fallbackRole || "counselor",
      };
    }
    return { id: null, name: "", email: "", role: "" };
  }

  // Look up employee in AdminUser collection
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
    // If not a valid ObjectId or not found by ID, attempt lookup by name/email
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
    } catch {
      // ignore
    }
  }

  return {
    id: empId,
    name: fallbackName || empId,
    email: fallbackEmail,
    role: fallbackRole || "staff",
  };
}

// PATCH /api/inquiries/[id] (Admin only - update status, assignee, or notes)
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requirePermission(request, "inquiries", "edit");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error },
        { status: auth.status }
      );
    }

    const { id } = await params;
    const body = await request.json();

    await connectDB();

    const allowedUpdates: Record<string, unknown> = {};
    const validStatuses = [
      "new",
      "interested",
      "contacted",
      "in_progress",
      "payment_mode",
      "converted",
      "dnp",
      "not_interested",
      "closed",
    ];
    if (body.status && validStatuses.includes(body.status)) {
      allowedUpdates.status = body.status;
    }
    if (typeof body.notes === "string") {
      allowedUpdates.notes = body.notes;
    }
    if (body.assignedTo !== undefined) {
      allowedUpdates.assignedTo = await resolveAssignee(body.assignedTo);
    }

    const updated = await Inquiry.findByIdAndUpdate(
      id,
      { $set: allowedUpdates },
      { new: true }
    );

    if (!updated) {
      return Response.json(
        { success: false, message: "Inquiry not found." },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      message: "Inquiry updated successfully.",
      data: updated,
    });
  } catch (error) {
    console.error("Error updating inquiry:", error);
    return Response.json(
      { success: false, message: "Failed to update inquiry." },
      { status: 500 }
    );
  }
}

// DELETE /api/inquiries/[id] (Admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requirePermission(request, "inquiries", "delete");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error },
        { status: auth.status }
      );
    }

    const { id } = await params;
    await connectDB();

    const deleted = await Inquiry.findByIdAndDelete(id);
    if (!deleted) {
      return Response.json(
        { success: false, message: "Inquiry not found." },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      message: "Inquiry deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting inquiry:", error);
    return Response.json(
      { success: false, message: "Failed to delete inquiry." },
      { status: 500 }
    );
  }
}
