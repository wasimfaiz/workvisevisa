/* ================================================================
   lib/auth.ts — Auth Utilities (JWT + bcrypt + RBAC Permission helpers)
   Used by controllers, API routes, and middleware.
   ================================================================ */

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import AdminUser, {
  IAdminUser,
  EmployeePermissions,
  DEFAULT_PERMISSIONS,
} from "@/lib/models/AdminUser";

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = "7d";
const COOKIE_NAME = "workwise_admin_token";

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables.");
}

// ── Password Helpers ──────────────────────────────────────────────

export async function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, 12);
}

export async function comparePassword(
  plain: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}

// ── JWT Helpers ───────────────────────────────────────────────────

export interface JwtPayload {
  id: string;
  email: string;
  role: string;
}

export function signToken(payload: JwtPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    return null;
  }
}

// ── Cookie Helpers ────────────────────────────────────────────────

export const COOKIE_CONFIG = {
  name: COOKIE_NAME,
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
  path: "/",
};

/** Extract and verify the JWT from the request cookies. */
export function getAuthUser(request: NextRequest): JwtPayload | null {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyToken(token);
}

/** Build a Set-Cookie header string for the JWT. */
export function buildAuthCookie(token: string): string {
  return [
    `${COOKIE_NAME}=${token}`,
    `Path=${COOKIE_CONFIG.path}`,
    `Max-Age=${COOKIE_CONFIG.maxAge}`,
    `HttpOnly`,
    COOKIE_CONFIG.secure ? "Secure" : "",
    `SameSite=${COOKIE_CONFIG.sameSite}`,
  ]
    .filter(Boolean)
    .join("; ");
}

/** Build a cookie header that clears the auth cookie. */
export function buildClearCookie(): string {
  return [
    `${COOKIE_NAME}=`,
    `Path=${COOKIE_CONFIG.path}`,
    `Max-Age=0`,
    `HttpOnly`,
    `SameSite=${COOKIE_CONFIG.sameSite}`,
  ].join("; ");
}

// ── RBAC Helpers ──────────────────────────────────────────────────

/**
 * Fetch the full AdminUser document from the DB using the JWT cookie.
 * Ensures the account is active and loads up-to-date permissions.
 */
export async function getAuthAdmin(request: NextRequest): Promise<IAdminUser | null> {
  const payload = getAuthUser(request);
  if (!payload) return null;

  await connectDB();
  const admin = await AdminUser.findById(payload.id);
  if (!admin || admin.status === "inactive") return null;

  // Ensure superadmin has full permissions if missing or empty
  if (
    admin.role === "superadmin" ||
    admin.email === "wasim@yastudy.com"
  ) {
    if (!admin.permissions || !admin.permissions.invoices?.view) {
      admin.permissions = DEFAULT_PERMISSIONS.superadmin;
      await admin.save();
    }
  }

  return admin;
}

/**
 * Check if the authenticated user has permission to perform `action` on `module`.
 * Superadmin or primary email always has full access.
 */
export async function requirePermission(
  request: NextRequest,
  module: keyof EmployeePermissions,
  action: string
): Promise<{ allowed: boolean; user?: IAdminUser; error?: string; status: number }> {
  const admin = await getAuthAdmin(request);
  if (!admin) {
    return {
      allowed: false,
      error: "Unauthorized. Please log in as admin.",
      status: 401,
    };
  }

  // Superadmin or main owner has unconditional access
  if (admin.role === "superadmin" || admin.email === "wasim@yastudy.com") {
    return { allowed: true, user: admin, status: 200 };
  }

  // Check specific permission
  const modulePerms = admin.permissions?.[module] as Record<string, boolean> | undefined;
  if (!modulePerms || !modulePerms[action]) {
    return {
      allowed: false,
      error: `Access Denied: You do not have permission to ${action} ${module}.`,
      status: 403,
    };
  }

  return { allowed: true, user: admin, status: 200 };
}
