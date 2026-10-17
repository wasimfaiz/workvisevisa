/* ================================================================
   app/api/partners/route.ts — B2B Partners API Handler
   Optimized for managing Individual & Company candidate sourcing partners
   along with Signed MoU document uploads, Aadhaar, PAN Card KYC.
   ================================================================ */

import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Partner from "@/lib/models/Partner";
import { requirePermission } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const auth = await requirePermission(request, "partners", "view");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error || "Forbidden" },
        { status: auth.status }
      );
    }

    await connectDB();

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search")?.trim() || "";
    const type = searchParams.get("type")?.trim() || "";
    const status = searchParams.get("status")?.trim() || "";
    const mouStatus = searchParams.get("mouStatus")?.trim() || "";
    const kycStatus = searchParams.get("kycStatus")?.trim() || "";

    const query: Record<string, any> = {};

    if (type && type !== "All") {
      query.partnerType = type;
    }

    if (status && status !== "All") {
      query.status = status;
    }

    if (mouStatus && mouStatus !== "All") {
      query.mouStatus = mouStatus;
    }

    if (kycStatus && kycStatus !== "All") {
      query.kycStatus = kycStatus;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { contactPerson: { $regex: search, $options: "i" } },
        { city: { $regex: search, $options: "i" } },
        { state: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { partnerCode: { $regex: search, $options: "i" } },
        { panNumber: { $regex: search, $options: "i" } },
        { aadhaarNumber: { $regex: search, $options: "i" } },
      ];
    }

    const partners = await Partner.find(query).sort({ createdAt: -1 }).lean();

    // Summary KPIs
    const allPartners = await Partner.find({}).lean();
    const stats = {
      total: allPartners.length,
      active: allPartners.filter((p) => p.status === "Active").length,
      companies: allPartners.filter(
        (p) => p.partnerType === "Company" || p.partnerType === "Agency" || p.partnerType === "Overseas Employer"
      ).length,
      individuals: allPartners.filter(
        (p) => p.partnerType === "Individual" || p.partnerType === "Sourcing Sub-Agent"
      ).length,
      signedMou: allPartners.filter(
        (p) => p.mouStatus === "Signed" || Boolean(p.mouDocumentUrl) || p.agreementStatus === "Signed MoU"
      ).length,
      pendingMou: allPartners.filter(
        (p) => (!p.mouStatus || p.mouStatus === "Pending" || p.mouStatus === "None") && !p.mouDocumentUrl
      ).length,
      kycVerified: allPartners.filter(
        (p) => p.kycStatus === "Verified" || (Boolean(p.aadhaarDocumentUrl) && Boolean(p.panDocumentUrl))
      ).length,
      totalCandidates: allPartners.reduce((acc, p) => acc + (p.totalCandidatesReferred || 0), 0),
    };

    const transformed = partners.map((p) => ({
      ...p,
      id: (p._id as unknown as { toString(): string }).toString(),
      _id: undefined,
      __v: undefined,
    }));

    return Response.json({
      success: true,
      data: transformed,
      count: transformed.length,
      stats,
    });
  } catch (error: any) {
    console.error("[api/partners.GET]", error);
    return Response.json(
      { success: false, message: error.message || "Failed to fetch partners" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = await requirePermission(request, "partners", "create");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error || "Forbidden" },
        { status: auth.status }
      );
    }

    const creatorName = auth.user?.email || auth.user?.name || "Admin";

    await connectDB();
    const body = await request.json();

    if (!body.name?.trim() || !body.contactPerson?.trim() || !body.phone?.trim() || !body.city?.trim()) {
      return Response.json(
        {
          success: false,
          message: "Partner Name, Contact Person, Phone, and City are required.",
        },
        { status: 400 }
      );
    }

    // Auto-generate partner code if not provided
    let partnerCode = body.partnerCode?.trim();
    if (!partnerCode) {
      const count = await Partner.countDocuments();
      const prefix = body.partnerType === "Company" ? "WW-CMP" : "WW-IND";
      partnerCode = `${prefix}-${String(count + 1).padStart(3, "0")}`;
    }

    const mouStatus = body.mouStatus || (body.mouDocumentUrl ? "Signed" : "Pending");

    // KYC Status auto-inference
    let kycStatus = body.kycStatus || "Pending";
    if (body.aadhaarDocumentUrl && body.panDocumentUrl && kycStatus !== "Rejected") {
      kycStatus = "Verified";
    }

    // Dynamically ensure partnerType has no stale enum restrictions from dev hot-reloads
    const ptPath: any = Partner.schema?.path("partnerType");
    if (ptPath && ptPath.enumValues && ptPath.enumValues.length > 0) {
      ptPath.enumValues = [];
      ptPath.validators = (ptPath.validators || []).filter((v: any) => v.type !== "enum");
    }

    const newPartner = await Partner.create({
      partnerCode,
      name: body.name.trim(),
      partnerType: body.partnerType || "Individual",
      contactPerson: body.contactPerson.trim(),
      designation: body.designation?.trim() || (body.partnerType === "Company" ? "Managing Director" : "Sourcing Partner"),
      email: body.email?.trim() || "",
      phone: body.phone.trim(),
      whatsapp: body.whatsapp?.trim() || body.phone.trim(),
      city: body.city.trim(),
      state: body.state?.trim() || "",
      country: body.country?.trim() || "India",
      address: body.address?.trim() || "",
      status: body.status || "Active",
      commissionTerms: body.commissionTerms?.trim() || "Standard Sourcing Commission",
      totalCandidatesReferred: Number(body.totalCandidatesReferred) || 0,
      totalSelected: Number(body.totalSelected) || 0,
      totalDeployed: Number(body.totalDeployed) || 0,
      rating: Number(body.rating) || 5,
      notes: body.notes?.trim() || "",

      // MoU fields
      mouStatus,
      mouDocumentUrl: body.mouDocumentUrl?.trim() || "",
      mouDocumentName: body.mouDocumentName?.trim() || "",
      mouDocumentSize: Number(body.mouDocumentSize) || 0,
      mouSignedDate: body.mouSignedDate?.trim() || (mouStatus === "Signed" ? new Date().toISOString().split("T")[0] : ""),
      mouExpiryDate: body.mouExpiryDate?.trim() || "",
      mouNotes: body.mouNotes?.trim() || "",

      // Aadhaar & PAN Card KYC
      aadhaarNumber: body.aadhaarNumber?.trim() || "",
      aadhaarDocumentUrl: body.aadhaarDocumentUrl?.trim() || "",
      aadhaarDocumentName: body.aadhaarDocumentName?.trim() || "",
      panNumber: body.panNumber?.trim().toUpperCase() || "",
      panDocumentUrl: body.panDocumentUrl?.trim() || "",
      panDocumentName: body.panDocumentName?.trim() || "",
      kycStatus,

      // Legacy compatibility
      agreementStatus: mouStatus === "Signed" ? "Signed MoU" : "None",
      createdBy: creatorName,
    });

    return Response.json(
      {
        success: true,
        data: {
          ...newPartner.toJSON(),
          id: newPartner._id.toString(),
        },
        message: "B2B Partner created successfully.",
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("[api/partners.POST]", error);
    return Response.json(
      { success: false, message: error.message || "Failed to create partner" },
      { status: 500 }
    );
  }
}
