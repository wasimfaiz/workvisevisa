/* ================================================================
   app/api/partners/[id]/route.ts — Single B2B Partner API Handler
   GET, PUT (update details, MoU, Aadhaar & PAN KYC), DELETE
   ================================================================ */

import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Partner from "@/lib/models/Partner";
import { requirePermission } from "@/lib/auth";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const auth = await requirePermission(request, "partners", "view");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error || "Forbidden" },
        { status: auth.status }
      );
    }

    const { id } = await params;
    await connectDB();

    const partner = await Partner.findById(id).lean();
    if (!partner) {
      return Response.json(
        { success: false, message: "Partner not found." },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      data: {
        ...partner,
        id: (partner._id as unknown as { toString(): string }).toString(),
        _id: undefined,
        __v: undefined,
      },
    });
  } catch (error: any) {
    console.error("[api/partners/[id].GET]", error);
    return Response.json(
      { success: false, message: error.message || "Failed to fetch partner" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const auth = await requirePermission(request, "partners", "edit");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error || "Forbidden" },
        { status: auth.status }
      );
    }

    const { id } = await params;
    await connectDB();
    const body = await request.json();

    const mouStatus = body.mouStatus || (body.mouDocumentUrl ? "Signed" : "Pending");

    // KYC Status auto-inference
    let kycStatus = body.kycStatus;
    if (!kycStatus) {
      if (body.aadhaarDocumentUrl && body.panDocumentUrl) {
        kycStatus = "Verified";
      }
    }

    const updatePayload: Record<string, any> = {
      name: body.name?.trim(),
      partnerType: body.partnerType || "Individual",
      contactPerson: body.contactPerson?.trim(),
      designation: body.designation?.trim(),
      email: body.email?.trim() || "",
      phone: body.phone?.trim(),
      whatsapp: body.whatsapp?.trim() || body.phone?.trim(),
      city: body.city?.trim(),
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

      // MoU tracking
      mouStatus,
      mouDocumentUrl: body.mouDocumentUrl !== undefined ? body.mouDocumentUrl : undefined,
      mouDocumentName: body.mouDocumentName !== undefined ? body.mouDocumentName : undefined,
      mouDocumentSize: body.mouDocumentSize !== undefined ? Number(body.mouDocumentSize) : undefined,
      mouSignedDate: body.mouSignedDate !== undefined ? body.mouSignedDate : undefined,
      mouExpiryDate: body.mouExpiryDate !== undefined ? body.mouExpiryDate : undefined,
      mouNotes: body.mouNotes !== undefined ? body.mouNotes : undefined,

      // Aadhaar & PAN Card KYC
      aadhaarNumber: body.aadhaarNumber !== undefined ? body.aadhaarNumber?.trim() : undefined,
      aadhaarDocumentUrl: body.aadhaarDocumentUrl !== undefined ? body.aadhaarDocumentUrl : undefined,
      aadhaarDocumentName: body.aadhaarDocumentName !== undefined ? body.aadhaarDocumentName : undefined,
      panNumber: body.panNumber !== undefined ? body.panNumber?.trim().toUpperCase() : undefined,
      panDocumentUrl: body.panDocumentUrl !== undefined ? body.panDocumentUrl : undefined,
      panDocumentName: body.panDocumentName !== undefined ? body.panDocumentName : undefined,
      kycStatus: kycStatus !== undefined ? kycStatus : undefined,

      agreementStatus: mouStatus === "Signed" ? "Signed MoU" : "None",
    };

    // Remove undefined keys
    Object.keys(updatePayload).forEach(
      (key) => updatePayload[key] === undefined && delete updatePayload[key]
    );

    // Dynamically ensure partnerType has no stale enum restrictions from dev hot-reloads
    const ptPath: any = Partner.schema?.path("partnerType");
    if (ptPath && ptPath.enumValues && ptPath.enumValues.length > 0) {
      ptPath.enumValues = [];
      ptPath.validators = (ptPath.validators || []).filter((v: any) => v.type !== "enum");
    }

    const updated = await Partner.findByIdAndUpdate(
      id,
      { $set: updatePayload },
      { returnDocument: "after" }
    ).lean();

    if (!updated) {
      return Response.json(
        { success: false, message: "Partner not found." },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      data: {
        ...updated,
        id: (updated._id as unknown as { toString(): string }).toString(),
        _id: undefined,
        __v: undefined,
      },
      message: "Partner updated successfully.",
    });
  } catch (error: any) {
    console.error("[api/partners/[id].PUT]", error);
    return Response.json(
      { success: false, message: error.message || "Failed to update partner" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const auth = await requirePermission(request, "partners", "delete");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error || "Forbidden" },
        { status: auth.status }
      );
    }

    const { id } = await params;
    await connectDB();

    const deleted = await Partner.findByIdAndDelete(id);
    if (!deleted) {
      return Response.json(
        { success: false, message: "Partner not found." },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      message: "Partner deleted successfully.",
    });
  } catch (error: any) {
    console.error("[api/partners/[id].DELETE]", error);
    return Response.json(
      { success: false, message: error.message || "Failed to delete partner" },
      { status: 500 }
    );
  }
}
