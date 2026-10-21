/* ================================================================
   app/api/applications/route.ts — Candidate Application Tracker API
   GET: List candidates with filtering by stage, country, status, counselor
   POST: Create new candidate processing case / enrollment
   ================================================================ */

import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Application from "@/lib/models/Application";
import Partner from "@/lib/models/Partner";
import { PROCESSING_STAGES } from "@/lib/types/application";
import AdminUser from "@/lib/models/AdminUser";
import { requirePermission, getAuthUser } from "@/lib/auth";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Helper to resolve counselor details
async function resolveCounselor(assignedInput: unknown) {
  if (!assignedInput || assignedInput === "unassigned") {
    return { id: null, name: "", email: "", role: "" };
  }

  let empId: string | null = null;
  let fallbackName = "";
  let fallbackEmail = "";
  let fallbackRole = "";

  if (typeof assignedInput === "string") {
    empId = assignedInput.trim();
  } else if (typeof assignedInput === "object" && assignedInput !== null) {
    const obj = assignedInput as Record<string, unknown>;
    empId = typeof obj.id === "string" && obj.id ? obj.id.trim() : null;
    fallbackName = typeof obj.name === "string" ? obj.name.trim() : "";
    fallbackEmail = typeof obj.email === "string" ? obj.email.trim() : "";
    fallbackRole = typeof obj.role === "string" ? obj.role.trim() : "";
  }

  if (!empId || empId === "unassigned" || empId === "null") {
    if (fallbackName) {
      return { id: null, name: fallbackName, email: fallbackEmail, role: fallbackRole || "counselor" };
    }
    return { id: null, name: "", email: "", role: "" };
  }

  try {
    const user = await AdminUser.findById(empId).select("name email role").lean();
    if (user) {
      return {
        id: (user._id as unknown as { toString(): string }).toString(),
        name: user.name || fallbackName || "Staff",
        email: user.email || fallbackEmail || "",
        role: user.role || fallbackRole || "staff",
      };
    }
  } catch {
    try {
      const user = await AdminUser.findOne({
        $or: [{ name: empId }, { email: empId }],
      }).select("name email role").lean();
      if (user) {
        return {
          id: (user._id as unknown as { toString(): string }).toString(),
          name: user.name,
          email: user.email,
          role: user.role || "staff",
        };
      }
    } catch {}
  }

  return {
    id: empId,
    name: fallbackName || empId,
    email: fallbackEmail,
    role: fallbackRole || "staff",
  };
}

// GET /api/applications — List applications with strict B2B scoping
export async function GET(request: NextRequest) {
  try {
    const auth = await requirePermission(request, "applications", "view");
    if (!auth.allowed) {
      return Response.json({ success: false, message: auth.error }, { status: auth.status });
    }

    await connectDB();

    const { searchParams } = new URL(request.url);
    const stageFilter = searchParams.get("stage");
    const statusFilter = searchParams.get("status");
    const countryFilter = searchParams.get("country");
    const counselorFilter = searchParams.get("counselor");
    const search = searchParams.get("search");

    const query: Record<string, unknown> = {};

    if (stageFilter && stageFilter !== "all") {
      query.currentStage = Number(stageFilter);
    }

    if (statusFilter && statusFilter !== "all") {
      query.stageStatus = statusFilter;
    }

    if (countryFilter && countryFilter !== "all") {
      query.targetCountry = { $regex: countryFilter, $options: "i" };
    }

    if (counselorFilter && counselorFilter !== "all") {
      if (counselorFilter === "unassigned") {
        query.$or = [
          { "assignedCounselor.id": null },
          { "assignedCounselor.id": "" },
          { "assignedCounselor.id": { $exists: false } },
        ];
      } else {
        query["assignedCounselor.id"] = counselorFilter;
      }
    }

    if (search && search.trim()) {
      const q = search.trim();
      const searchConditions = [
        { candidateName: { $regex: q, $options: "i" } },
        { passportNumber: { $regex: q, $options: "i" } },
        { phone: { $regex: q, $options: "i" } },
        { applicationNo: { $regex: q, $options: "i" } },
        { jobTrade: { $regex: q, $options: "i" } },
        { workPermitNumber: { $regex: q, $options: "i" } },
        { visaNumber: { $regex: q, $options: "i" } },
      ];
      if (query.$or) {
        query.$and = [{ $or: query.$or }, { $or: searchConditions }];
        delete query.$or;
      } else {
        query.$or = searchConditions;
      }
    }

    // ── STRICT B2B PARTNER DATA ISOLATION ────────────────────────────
    // If the authenticated user is a B2B partner, they MUST ONLY see
    // candidates that belong to them (sourced by them or assigned to them).
    // They must NEVER see other partners' candidates or direct self-applied cases.
    const user = auth.user;
    const isB2B = user?.role === "b2b";
    let b2bOwnershipConditions: any[] = [];

    if (isB2B && user) {
      const userIds = [user._id.toString()];
      const userEmails = [user.email.toLowerCase()];

      // Check if there is an associated partner profile in the partners collection
      const partnerDoc = await Partner.findOne({
        $or: [
          { email: { $regex: new RegExp(`^${user.email}$`, "i") } },
          ...(user.phone ? [{ phone: user.phone }] : []),
          { name: user.name },
        ],
      }).lean();

      const partnerIds = partnerDoc ? [(partnerDoc._id as any).toString()] : [];
      const partnerCodes = [
        ...(partnerDoc?.partnerCode ? [partnerDoc.partnerCode] : []),
        ...(partnerDoc?.agentCode ? [partnerDoc.agentCode] : []),
      ];
      const partnerNames = [user.name, ...(partnerDoc?.name ? [partnerDoc.name] : [])];

      b2bOwnershipConditions = [
        { "createdBy.id": { $in: userIds } },
        { "createdBy.email": { $in: userEmails } },
        { "assignedCounselor.id": { $in: [...userIds, ...partnerIds] } },
        { "assignedCounselor.email": { $in: userEmails } },
        { partnerId: { $in: [...userIds, ...partnerIds] } },
        { agentId: { $in: [...userIds, ...partnerIds] } },
        { partnerName: { $in: partnerNames } },
      ];
      if (partnerCodes.length > 0) {
        b2bOwnershipConditions.push({ partnerCode: { $in: partnerCodes } });
        b2bOwnershipConditions.push({ agentCode: { $in: partnerCodes } });
      }

      if (query.$and && Array.isArray(query.$and)) {
        query.$and.push({ $or: b2bOwnershipConditions });
      } else if (query.$or) {
        query.$and = [{ $or: query.$or }, { $or: b2bOwnershipConditions }];
        delete query.$or;
      } else {
        query.$or = b2bOwnershipConditions;
      }
    }

    const applications = await Application.find(query).sort({ updatedAt: -1, createdAt: -1 }).lean();

    const transformed = applications.map((app: any) => ({
      ...app,
      id: (app._id as unknown as { toString(): string }).toString(),
      _id: undefined,
      __v: undefined,
    }));

    // Metrics summary — strictly scoped to B2B's own candidates if role is B2B
    const allAppsQuery = isB2B && b2bOwnershipConditions.length > 0 ? { $or: b2bOwnershipConditions } : {};
    const allApps = await Application.find(allAppsQuery).lean();
    const totalCount = allApps.length;
    const inProgressCount = allApps.filter((a) => a.stageStatus === "in_progress").length;
    const visaApprovedCount = allApps.filter((a) => a.currentStage >= 6 && a.stageStatus !== "rejected").length;
    const deployedCount = allApps.filter((a) => a.currentStage === 7 && a.stageStatus === "completed").length;
    const onHoldCount = allApps.filter((a) => a.stageStatus === "on_hold").length;
    const rejectedCount = allApps.filter((a) => a.stageStatus === "rejected").length;

    return Response.json(
      {
        success: true,
        data: transformed,
        total: transformed.length,
        isB2B,
        metrics: {
          totalCount,
          inProgressCount,
          visaApprovedCount,
          deployedCount,
          onHoldCount,
          rejectedCount,
        },
      },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching applications:", error);
    return Response.json({ success: false, message: "Failed to fetch applications" }, { status: 500 });
  }
}

// POST /api/applications — Create a new candidate processing application
export async function POST(request: NextRequest) {
  try {
    const auth = await requirePermission(request, "applications", "create");
    if (!auth.allowed) {
      return Response.json({ success: false, message: auth.error }, { status: auth.status });
    }

    const user = auth.user;
    const body = await request.json();

    const {
      candidateName,
      passportNumber,
      phone,
      email,
      targetCountry,
      jobTrade,
      currentStage,
      stageStatus,
      assignedCounselor,
      packageAmount,
      paidAmount,
      workPermitNumber,
      vfsAppointmentDate,
      visaNumber,
      flightDate,
      flightPnr,
      notes,
      remarks,
    } = body;

    const trimmedName = typeof candidateName === "string" ? candidateName.trim() : "";
    const trimmedPhone = typeof phone === "string" ? phone.trim() : "";
    const trimmedCountry = typeof targetCountry === "string" ? targetCountry.trim() : "Poland";
    const trimmedTrade = typeof jobTrade === "string" ? jobTrade.trim() : "General Worker";

    if (!trimmedName || trimmedName.length < 2) {
      return Response.json(
        { success: false, message: "Candidate Full Name is required (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!trimmedPhone || trimmedPhone.replace(/\D/g, "").length < 7) {
      return Response.json(
        { success: false, message: "A valid candidate phone number is required (min 7 digits)." },
        { status: 400 }
      );
    }

    await connectDB();

    // Generate unique application number (e.g. WWV-2026-1001-492)
    const count = await Application.countDocuments();
    const appYear = new Date().getFullYear();
    const randomSuffix = Math.floor(100 + Math.random() * 900);
    const autoAppNo = `WWV-${appYear}-${count + 1001}-${randomSuffix}`;

    const parsedStage = Number(currentStage) >= 1 && Number(currentStage) <= 7 ? Number(currentStage) : 1;
    const stageMeta = PROCESSING_STAGES.find((s) => s.step === parsedStage) || PROCESSING_STAGES[0];

    // B2B Partner detection
    const isB2B = user?.role === "b2b";
    let partnerDoc: any = null;
    if (isB2B && user) {
      partnerDoc = await Partner.findOne({
        $or: [
          { email: { $regex: new RegExp(`^${user.email}$`, "i") } },
          ...(user.phone ? [{ phone: user.phone }] : []),
          { name: user.name },
        ],
      }).lean();
    }

    const assignedPartnerId = isB2B
      ? (partnerDoc ? (partnerDoc._id as any).toString() : user._id.toString())
      : (body.partnerId || null);

    const assignedPartnerName = isB2B
      ? user.name
      : (body.partnerName || "");

    const assignedPartnerCode = isB2B
      ? (partnerDoc?.partnerCode || partnerDoc?.agentCode || "")
      : (body.partnerCode || "");

    const finalSource = isB2B ? "b2b_partner" : (body.source || (assignedPartnerId ? "b2b_partner" : "direct"));

    const createdByData = {
      id: user?._id ? user._id.toString() : null,
      name: user?.name || "Admin",
      email: user?.email || "",
      role: user?.role || "admin",
    };

    // If B2B, force assignedCounselor to the B2B user so they retain ownership
    const cleanCounselor = isB2B
      ? {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: "b2b",
        }
      : await resolveCounselor(assignedCounselor);

    const numPackage = Number(packageAmount) || 0;
    const numPaid = Number(paidAmount) || 0;
    const numBalance = Math.max(0, numPackage - numPaid);

    const initialHistory = [
      {
        stageNumber: parsedStage,
        stageName: stageMeta.name,
        status: stageStatus || "in_progress",
        date: new Date(),
        remarks: remarks || `Application enrolled at stage ${parsedStage}: ${stageMeta.name}`,
        updatedBy: user?.email || "Admin",
      },
    ];

    const newApp = await Application.create({
      applicationNo: autoAppNo,
      candidateName: trimmedName,
      passportNumber: typeof passportNumber === "string" ? passportNumber.trim().toUpperCase() : "",
      phone: trimmedPhone,
      email: typeof email === "string" ? email.trim().toLowerCase() : "",
      targetCountry: trimmedCountry,
      jobTrade: trimmedTrade,
      currentStage: parsedStage,
      stageStatus: stageStatus || "in_progress",
      assignedCounselor: cleanCounselor,
      source: finalSource,
      partnerId: assignedPartnerId,
      partnerName: assignedPartnerName,
      partnerCode: assignedPartnerCode,
      createdBy: createdByData,
      packageAmount: numPackage,
      paidAmount: numPaid,
      balanceAmount: numBalance,
      workPermitNumber: typeof workPermitNumber === "string" ? workPermitNumber.trim() : "",
      vfsAppointmentDate: typeof vfsAppointmentDate === "string" ? vfsAppointmentDate.trim() : "",
      visaNumber: typeof visaNumber === "string" ? visaNumber.trim() : "",
      flightDate: typeof flightDate === "string" ? flightDate.trim() : "",
      flightPnr: typeof flightPnr === "string" ? flightPnr.trim().toUpperCase() : "",
      notes: typeof notes === "string" ? notes.trim() : "",
      stageHistory: initialHistory,
    });

    return Response.json(
      {
        success: true,
        message: "Candidate application tracker created successfully!",
        data: {
          id: newApp.id,
          applicationNo: newApp.applicationNo,
          candidateName: newApp.candidateName,
          targetCountry: newApp.targetCountry,
          jobTrade: newApp.jobTrade,
          currentStage: newApp.currentStage,
          stageStatus: newApp.stageStatus,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating application:", error);
    return Response.json({ success: false, message: "Failed to create application case." }, { status: 500 });
  }
}
