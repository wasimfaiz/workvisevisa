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

    // Sign JWT and set cookie
    const token = signToken({
      id: admin._id.toString(),
      email: admin.email,
      role: admin.role,
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
          role: admin.role,
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
 * Returns the currently authenticated admin's info.
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
    const admin = await AdminUser.findById(payload.id).lean();

    if (!admin) {
      return Response.json(
        { success: false, message: "Admin user not found." },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      user: {
        id: (admin._id as unknown as { toString(): string }).toString(),
        email: admin.email,
        name: admin.name,
        role: admin.role,
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
