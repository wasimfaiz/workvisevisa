/* ================================================================
   app/api/employees/route.ts — Employee Management API
   GET: List all staff & permissions
   POST: Create a new staff account with assigned role & permissions
   Guarded by RBAC: requires "employees.view" and "employees.manage"
   ================================================================ */

import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import AdminUser, { DEFAULT_PERMISSIONS, AdminRole } from "@/lib/models/AdminUser";
import { requirePermission, hashPassword, getAuthUser } from "@/lib/auth";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// GET /api/employees — List all employees
export async function GET(request: NextRequest) {
  try {
    const user = getAuthUser(request);
    if (!user) {
      return Response.json(
        { success: false, message: "Authentication required" },
        { status: 401 }
      );
    }

    await connectDB();
    const auth = await requirePermission(request, "employees", "view");

    // If full view permission is granted, return everything (permissions, phone, etc.)
    // If not, return sanitized list (id, name, email, role, status) for lead assignment dropdowns
    const query = AdminUser.find({ status: { $ne: "inactive" } });
    if (!auth.allowed) {
      query.select("name email role status");
    } else {
      query.select("-passwordHash");
    }

    const employees = await query.sort({ name: 1 }).lean();

    const transformed = employees.map((emp) => ({
      ...emp,
      id: (emp._id as unknown as { toString(): string }).toString(),
      _id: undefined,
      __v: undefined,
    }));

    return Response.json({
      success: true,
      data: transformed,
      total: transformed.length,
    });
  } catch (error) {
    console.error("Error fetching employees:", error);
    return Response.json(
      { success: false, message: "Failed to fetch employees list" },
      { status: 500 }
    );
  }
}

// POST /api/employees — Create a new employee
export async function POST(request: NextRequest) {
  try {
    const auth = await requirePermission(request, "employees", "manage");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error },
        { status: auth.status }
      );
    }

    const body = await request.json();
    const { name, email, password, phone, role, permissions, status } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return Response.json(
        { success: false, message: "Full Name is required (min 2 characters)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      return Response.json(
        { success: false, message: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!password || typeof password !== "string" || password.length < 6) {
      return Response.json(
        { success: false, message: "Password must be at least 6 characters." },
        { status: 400 }
      );
    }

    await connectDB();

    const cleanEmail = email.toLowerCase().trim();
    const existing = await AdminUser.findOne({ email: cleanEmail });
    if (existing) {
      return Response.json(
        { success: false, message: "An employee with this email already exists." },
        { status: 409 }
      );
    }

    const assignedRole: AdminRole = (role && DEFAULT_PERMISSIONS[role as AdminRole])
      ? (role as AdminRole)
      : "staff";

    // Use customized permissions if provided, otherwise fallback to role default
    const finalPermissions = permissions || DEFAULT_PERMISSIONS[assignedRole];

    const hashedPassword = await hashPassword(password);

    const newEmployee = await AdminUser.create({
      name: name.trim(),
      email: cleanEmail,
      phone: (phone || "").trim(),
      passwordHash: hashedPassword,
      role: assignedRole,
      status: status || "active",
      permissions: finalPermissions,
    });

    return Response.json(
      {
        success: true,
        message: "Employee account created successfully.",
        data: {
          id: newEmployee.id,
          name: newEmployee.name,
          email: newEmployee.email,
          role: newEmployee.role,
          status: newEmployee.status,
          permissions: newEmployee.permissions,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating employee:", error);
    return Response.json(
      { success: false, message: "Failed to create employee." },
      { status: 500 }
    );
  }
}
