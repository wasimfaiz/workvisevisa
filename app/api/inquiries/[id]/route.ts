import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Inquiry from "@/lib/models/Inquiry";
import { requirePermission } from "@/lib/auth";

// PATCH /api/inquiries/[id] (Admin only - update status or notes)
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
      if (body.assignedTo === null || body.assignedTo.id === null || body.assignedTo.id === "") {
        allowedUpdates.assignedTo = {
          id: null,
          name: "",
          email: "",
          role: "",
        };
      } else if (typeof body.assignedTo === "object") {
        allowedUpdates.assignedTo = {
          id: body.assignedTo.id || null,
          name: typeof body.assignedTo.name === "string" ? body.assignedTo.name.trim() : "",
          email: typeof body.assignedTo.email === "string" ? body.assignedTo.email.trim() : "",
          role: typeof body.assignedTo.role === "string" ? body.assignedTo.role.trim() : "",
        };
      }
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
