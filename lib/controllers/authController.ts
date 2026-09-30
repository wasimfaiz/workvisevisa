/* ================================================================
   lib/controllers/authController.ts  — MVC: Controller Layer
   Business logic for admin authentication.
   ================================================================ */

import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import AdminUser from "@/lib/models/AdminUser";
import {
  comparePassword,
  signToken,
  getAuthUser,
  buildAuthCookie,
  buildClearCookie,
} from "@/lib/auth";

// ── Controller Methods ────────────────────────────────────────────

/**
 * POST /api/auth/login
 * Validates credentials and sets an HttpOnly JWT cookie on success.
 */
export async function login(request: NextRequest): Promise<Response> {
  try {
    await connectDB();
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return Response.json(
        { success: false, message: "Email and password are required." },
        { status: 400 }
      );
    }

    // Find admin user
    const admin = await AdminUser.findOne({ email: email.toLowerCase().trim() });
    if (!admin) {
      return Response.json(
        { success: false, message: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Verify password
    const isMatch = await comparePassword(password, admin.passwordHash);
    if (!isMatch) {
      return Response.json(
        { success: false, message: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Update lastLoginAt
    admin.lastLoginAt = new Date();
    await admin.save();

    const isSuper = admin.role === "superadmin" || admin.email === "wasim@yastudy.com";
    const userPermissions = isSuper
      ? {
          invoices: { view: true, create: true, edit: true, delete: true, print: true },
          inquiries: { view: true, edit: true, delete: true, export: true },
          jobs: { view: true, create: true, edit: true, delete: true },
          employees: { view: true, manage: true },
        }
      : admin.permissions;

    // Sign JWT and set cookie
    const token = signToken({
      id: admin._id.toString(),
      email: admin.email,
      role: isSuper ? "superadmin" : admin.role,
    });

    const cookie = buildAuthCookie(token);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Logged in successfully.",
        user: {
          id: admin._id.toString(),
          email: admin.email,
          name: admin.name,
          role: isSuper ? "superadmin" : admin.role,
          status: admin.status || "active",
          permissions: userPermissions,
        },
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": cookie,
        },
      }
    );
  } catch (error) {
    console.error("[authController.login]", error);
    return Response.json(
      { success: false, message: "Login failed. Please try again." },
      { status: 500 }
    );
  }
}

/**
 * POST /api/auth/logout
 * Clears the auth cookie.
 */
export async function logout(): Promise<Response> {
  return new Response(
    JSON.stringify({ success: true, message: "Logged out successfully." }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": buildClearCookie(),
      },
    }
  );
}

/**
 * GET /api/auth/me
 * Returns the currently authenticated admin's info and active permissions.
 */
export async function getMe(request: NextRequest): Promise<Response> {
  try {
    const payload = getAuthUser(request);
    if (!payload) {
      return Response.json(
        { success: false, message: "Not authenticated." },
        { status: 401 }
      );
    }

    await connectDB();
    const admin = await AdminUser.findById(payload.id);

    if (!admin || admin.status === "inactive") {
      return Response.json(
        { success: false, message: "Account not found or has been deactivated." },
        { status: 403 }
      );
    }

    const isSuper = admin.role === "superadmin" || admin.email === "wasim@yastudy.com";
    const userPermissions = isSuper
      ? {
          invoices: { view: true, create: true, edit: true, delete: true, print: true },
          inquiries: { view: true, edit: true, delete: true, export: true },
          jobs: { view: true, create: true, edit: true, delete: true },
          employees: { view: true, manage: true },
        }
      : admin.permissions;

    return Response.json({
      success: true,
      user: {
        id: admin._id.toString(),
        email: admin.email,
        name: admin.name,
        role: isSuper ? "superadmin" : admin.role,
        status: admin.status || "active",
        permissions: userPermissions,
      },
    });
  } catch (error) {
    console.error("[authController.getMe]", error);
    return Response.json(
      { success: false, message: "Failed to get user info." },
      { status: 500 }
    );
  }
}
