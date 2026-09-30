/* ================================================================
   app/api/employees/[id]/route.ts — Employee Management API
   GET: Get employee by ID
   PATCH: Update role, permissions, status, or reset password
   DELETE: Remove employee account
   Guarded by RBAC: requires "employees.manage"
   ================================================================ */

import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import AdminUser from "@/lib/models/AdminUser";
import { requirePermission, hashPassword } from "@/lib/auth";

// GET /api/employees/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requirePermission(request, "employees", "view");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error },
        { status: auth.status }
      );
    }

    const { id } = await params;
    await connectDB();
    const emp = await AdminUser.findById(id).select("-passwordHash").lean();
    if (!emp) {
      return Response.json(
        { success: false, message: "Employee not found." },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      data: {
        ...emp,
        id: (emp._id as unknown as { toString(): string }).toString(),
        _id: undefined,
        __v: undefined,
      },
    });
  } catch (error) {
    console.error("Error fetching employee:", error);
    return Response.json(
      { success: false, message: "Failed to fetch employee details." },
      { status: 500 }
    );
  }
}

// PATCH /api/employees/[id] — Update employee, permissions, or password
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requirePermission(request, "employees", "manage");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error },
        { status: auth.status }
      );
    }

    const { id } = await params;
    const body = await request.json();

    await connectDB();
    const target = await AdminUser.findById(id);
    if (!target) {
      return Response.json(
        { success: false, message: "Employee not found." },
        { status: 404 }
      );
    }

    // Protect superadmin account from being downgraded or deactivated by someone else
    if (target.email === "wasim@yastudy.com" && auth.user?.email !== "wasim@yastudy.com") {
      return Response.json(
        { success: false, message: "Only the primary superadmin can modify this account." },
        { status: 403 }
      );
    }

    const updates: Record<string, unknown> = {};

    if (body.name && typeof body.name === "string" && body.name.trim().length >= 2) {
      updates.name = body.name.trim();
    }

    if (typeof body.phone === "string") {
      updates.phone = body.phone.trim();
    }

    if (body.role && ["superadmin", "admin", "manager", "counselor", "accountant", "staff"].includes(body.role)) {
      updates.role = body.role;
    }

    if (body.status && ["active", "inactive"].includes(body.status)) {
      // Prevent deactivating own account
      if (auth.user?._id.toString() === id && body.status === "inactive") {
        return Response.json(
          { success: false, message: "You cannot deactivate your own account." },
          { status: 400 }
        );
      }
      updates.status = body.status;
    }

    if (body.permissions && typeof body.permissions === "object") {
      updates.permissions = body.permissions;
    }

    // Password reset if provided
    if (body.password && typeof body.password === "string") {
      if (body.password.length < 6) {
        return Response.json(
          { success: false, message: "New password must be at least 6 characters." },
          { status: 400 }
        );
      }
      updates.passwordHash = await hashPassword(body.password);
    }

    const updated = await AdminUser.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true }
    ).select("-passwordHash");

    return Response.json({
      success: true,
      message: "Employee updated successfully.",
      data: updated,
    });
  } catch (error) {
    console.error("Error updating employee:", error);
    return Response.json(
      { success: false, message: "Failed to update employee." },
      { status: 500 }
    );
  }
}

// DELETE /api/employees/[id] — Delete employee
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requirePermission(request, "employees", "manage");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error },
        { status: auth.status }
      );
    }

    const { id } = await params;

    // Prevent deleting oneself
    if (auth.user?._id.toString() === id) {
      return Response.json(
        { success: false, message: "You cannot delete your own account." },
        { status: 400 }
      );
    }

    await connectDB();
    const target = await AdminUser.findById(id);
    if (!target) {
      return Response.json(
        { success: false, message: "Employee not found." },
        { status: 404 }
      );
    }

    // Protect primary superadmin
    if (target.email === "wasim@yastudy.com" || target.role === "superadmin") {
      return Response.json(
        { success: false, message: "Super Admin accounts cannot be deleted." },
        { status: 403 }
      );
    }

    await AdminUser.findByIdAndDelete(id);

    return Response.json({
      success: true,
      message: "Employee deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting employee:", error);
    return Response.json(
      { success: false, message: "Failed to delete employee." },
      { status: 500 }
    );
  }
}
