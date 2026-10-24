/* ================================================================
   app/api/partners/inquiry/route.ts — Public B2B Partner Inquiry API
   Captures inquiries from agencies, training institutes, and agents
   who want to partner with WorkWise Visa.
   ================================================================ */

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Partner from "@/lib/models/Partner";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const contactPerson = body.contactPerson?.trim() || name;
    const phone = body.phone?.trim();
    const city = body.city?.trim();

    if (!name || !phone || !city) {
      return NextResponse.json(
        { success: false, message: "Agency/Partner Name, Phone, and City are required." },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if phone or email already registered
    const existing = await Partner.findOne({ phone }).lean();
    if (existing) {
      return NextResponse.json(
        {
          success: true,
          message:
            "Your inquiry is already registered with us. Our B2B partnership desk will connect with you shortly!",
          isDuplicate: true,
        },
        { status: 200 }
      );
    }

    // Auto-generate tentative partner inquiry code
    const count = await Partner.countDocuments();
    const partnerType = body.partnerType || "Agency";
    const prefix = partnerType === "Company" || partnerType === "Agency" ? "WW-LEAD" : "WW-AGT";
    const partnerCode = `${prefix}-${String(count + 1).padStart(3, "0")}`;

    const newPartnerLead = await Partner.create({
      partnerCode,
      name,
      partnerType,
      contactPerson,
      designation: body.designation?.trim() || "Agency Representative",
      email: body.email?.trim() || "",
      phone,
      whatsapp: body.whatsapp?.trim() || phone,
      city,
      state: body.state?.trim() || "",
      country: body.country?.trim() || "India",
      address: body.address?.trim() || "",
      status: "Pending Verification",
      onboardingStage: "New Inquiry",
      source: body.source?.trim() || "Website B2B Partner Form",
      sourcingCapacity: body.sourcingCapacity?.trim() || "10-25 candidates / month",
      commissionTerms: "Standard Sourcing Commission",
      notes: body.notes?.trim() || `Primary Trades: ${body.trades || "Not specified"}. Inquired via website.`,
      mouStatus: "None",
      kycStatus: "Pending",
      totalCandidatesReferred: 0,
      totalSelected: 0,
      totalDeployed: 0,
      rating: 5,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your partnership inquiry! Our B2B operations desk will review your details and connect within 24 hours.",
        data: {
          id: newPartnerLead._id.toString(),
          partnerCode: newPartnerLead.partnerCode,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("[api/partners/inquiry.POST]", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to submit partner inquiry" },
      { status: 500 }
    );
  }
}
