/* ================================================================
   lib/partnerAuth.ts — B2B Partner Authentication & Session Utilities
   Used for securing B2B Sourcing Partner Portal logins & dashboards.
   ================================================================ */

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Partner, { IPartner } from "@/lib/models/Partner";

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = "7d";
export const PARTNER_COOKIE_NAME = "workwise_partner_token";

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables.");
}

// ── Password Hashing ──────────────────────────────────────────────

export async function hashPartnerPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, 12);
}

export async function comparePartnerPassword(
  plain: string,
  hash: string
): Promise<boolean> {
  if (!hash) return false;
  return bcrypt.compare(plain, hash);
}

// ── JWT Helpers ───────────────────────────────────────────────────

export interface PartnerJwtPayload {
  id: string;
  partnerCode: string;
  name: string;
  phone: string;
  email?: string;
}

export function signPartnerToken(payload: PartnerJwtPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyPartnerToken(token: string): PartnerJwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as PartnerJwtPayload;
  } catch {
    return null;
  }
}

// ── Cookie Helpers ────────────────────────────────────────────────

export const PARTNER_COOKIE_CONFIG = {
  name: PARTNER_COOKIE_NAME,
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
  path: "/",
};

/** Extract and verify the JWT from the partner request cookies. */
export function getAuthPartner(request: NextRequest): PartnerJwtPayload | null {
  const token = request.cookies.get(PARTNER_COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyPartnerToken(token);
}

/** Build a Set-Cookie header string for the Partner JWT. */
export function buildPartnerAuthCookie(token: string): string {
  return [
    `${PARTNER_COOKIE_NAME}=${token}`,
    `Path=${PARTNER_COOKIE_CONFIG.path}`,
    `Max-Age=${PARTNER_COOKIE_CONFIG.maxAge}`,
    `HttpOnly`,
    PARTNER_COOKIE_CONFIG.secure ? "Secure" : "",
    `SameSite=${PARTNER_COOKIE_CONFIG.sameSite}`,
  ]
    .filter(Boolean)
    .join("; ");
}

/** Build a cookie header that clears the partner auth cookie. */
export function buildClearPartnerCookie(): string {
  return [
    `${PARTNER_COOKIE_NAME}=`,
    `Path=${PARTNER_COOKIE_CONFIG.path}`,
    `Max-Age=0`,
    `HttpOnly`,
    `SameSite=${PARTNER_COOKIE_CONFIG.sameSite}`,
  ].join("; ");
}

/** Helper to fetch the full authenticated Partner Mongoose document. */
export async function getAuthenticatedPartnerDoc(
  request: NextRequest
): Promise<IPartner | null> {
  const payload = getAuthPartner(request);
  if (!payload || !payload.id) return null;

  try {
    await connectDB();
    const partner = await Partner.findById(payload.id);
    if (!partner || !partner.isLoginEnabled || partner.status === "Inactive") {
      return null;
    }
    return partner;
  } catch {
    return null;
  }
}
