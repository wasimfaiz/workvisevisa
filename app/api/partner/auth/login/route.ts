/* ================================================================
   app/api/partner/auth/login/route.ts — B2B Partner Login Endpoint
   POST /api/partner/auth/login
   Allows B2B partners to log in with Email, Phone, or Partner Code.
   ================================================================ */

import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Partner from "@/lib/models/Partner";
import {
  comparePartnerPassword,
  signPartnerToken,
  buildPartnerAuthCookie,
} from "@/lib/partnerAuth";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const { identifier, password } = body;

    if (!identifier || !password) {
      return Response.json(
        { success: false, message: "Please provide your Email / Phone / Partner Code and Password." },
        { status: 400 }
      );
    }

    const cleanId = String(identifier).trim();

    // Query partner by email, phone, or partnerCode
    const partner = await Partner.findOne({
      $or: [
        { email: cleanId.toLowerCase() },
        { phone: cleanId },
        { partnerCode: cleanId.toUpperCase() },
        { agentCode: cleanId.toUpperCase() },
      ],
    });

    if (!partner) {
      return Response.json(
        { success: false, message: "Invalid credentials or partner account not found." },
        { status: 401 }
      );
    }

    // Check if partner login is enabled
    if (!partner.isLoginEnabled) {
      return Response.json(
        {
          success: false,
          message:
            "Partner login access is not activated yet. Please contact WorkWise Visa Admin to activate your dashboard credentials.",
        },
        { status: 403 }
      );
    }

    if (partner.status === "Inactive") {
      return Response.json(
        { success: false, message: "Your partner account is currently suspended. Please contact Admin." },
        { status: 403 }
      );
    }

    if (!partner.passwordHash) {
      return Response.json(
        {
          success: false,
          message: "Password is not set for this partner account. Please contact Admin to set your password.",
        },
        { status: 403 }
      );
    }

    // Verify password
    const isMatch = await comparePartnerPassword(password, partner.passwordHash);
    if (!isMatch) {
      return Response.json(
        { success: false, message: "Invalid password. Please check your credentials." },
        { status: 401 }
      );
    }

    // Update lastLoginAt
    partner.lastLoginAt = new Date();
    await partner.save();

    // Sign Partner JWT
    const token = signPartnerToken({
      id: partner._id.toString(),
      partnerCode: partner.partnerCode || partner.agentCode || "PARTNER",
      name: partner.name,
      phone: partner.phone,
      email: partner.email,
    });

    const cookie = buildPartnerAuthCookie(token);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Logged in successfully to Partner Dashboard.",
        partner: {
          id: partner._id.toString(),
          name: partner.name,
          partnerCode: partner.partnerCode || partner.agentCode || "PARTNER",
          partnerType: partner.partnerType,
          contactPerson: partner.contactPerson,
          designation: partner.designation,
          email: partner.email,
          phone: partner.phone,
          whatsapp: partner.whatsapp,
          city: partner.city,
          state: partner.state,
          commissionTerms: partner.commissionTerms,
          kycStatus: partner.kycStatus,
          mouStatus: partner.mouStatus,
          mouDocumentUrl: partner.mouDocumentUrl,
          totalCandidatesReferred: partner.totalCandidatesReferred || 0,
          totalSelected: partner.totalSelected || 0,
          totalDeployed: partner.totalDeployed || 0,
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
    console.error("[partnerLogin]", error);
    return Response.json(
      { success: false, message: "An unexpected error occurred during partner login." },
      { status: 500 }
    );
  }
}
