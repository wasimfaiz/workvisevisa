/* ================================================================
   app/api/partner/auth/me/route.ts — Get Authenticated Partner Info
   GET /api/partner/auth/me
   ================================================================ */

import { NextRequest } from "next/server";
import { getAuthenticatedPartnerDoc } from "@/lib/partnerAuth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const partner = await getAuthenticatedPartnerDoc(request);

    if (!partner) {
      return Response.json(
        { success: false, message: "Not authenticated as B2B Partner." },
        { status: 401 }
      );
    }

    return Response.json({
      success: true,
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
        country: partner.country,
        address: partner.address,
        commissionTerms: partner.commissionTerms,
        kycStatus: partner.kycStatus,
        mouStatus: partner.mouStatus,
        mouDocumentUrl: partner.mouDocumentUrl,
        mouDocumentName: partner.mouDocumentName,
        totalCandidatesReferred: partner.totalCandidatesReferred || 0,
        totalSelected: partner.totalSelected || 0,
        totalDeployed: partner.totalDeployed || 0,
        rating: partner.rating || 5,
        lastLoginAt: partner.lastLoginAt,
      },
    });
  } catch (error) {
    console.error("[partnerAuthMe]", error);
    return Response.json(
      { success: false, message: "Server error checking partner session." },
      { status: 500 }
    );
  }
}
