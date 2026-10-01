/* ================================================================
   app/api/applications/track/route.ts — Public Candidate Tracking API
   Allows candidates to look up their live work visa application status
   using Application Number (WWV-...), Passport Number, or Phone Number.
   Returns safe, public-friendly tracking details without leaking internal notes.
   ================================================================ */

import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Application from "@/lib/models/Application";
import { PROCESSING_STAGES } from "@/lib/types/application";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query =
      searchParams.get("query") ||
      searchParams.get("app") ||
      searchParams.get("passport") ||
      searchParams.get("phone") ||
      "";

    const cleanQuery = query.trim();
    if (!cleanQuery || cleanQuery.length < 3) {
      return Response.json(
        {
          success: false,
          message:
            "Please enter a valid Application Number, Passport Number, or Phone Number (minimum 3 characters).",
        },
        { status: 400 }
      );
    }

    await connectDB();

    const normalizedDigits = cleanQuery.replace(/\D/g, "");

    const searchConditions: Record<string, unknown>[] = [
      { applicationNo: { $regex: `^${cleanQuery}$`, $options: "i" } },
      { applicationNo: { $regex: cleanQuery, $options: "i" } },
      { passportNumber: { $regex: `^${cleanQuery}$`, $options: "i" } },
    ];

    if (normalizedDigits.length >= 7) {
      searchConditions.push({ phone: { $regex: normalizedDigits } });
      searchConditions.push({ phone: { $regex: cleanQuery, $options: "i" } });
    }

    const application = await Application.findOne({
      $or: searchConditions,
    }).lean();

    if (!application) {
      return Response.json(
        {
          success: false,
          message:
            "No application found matching your details. Please check your Application ID (e.g., WWV-2026-...) or Passport Number and try again.",
        },
        { status: 404 }
      );
    }

    // Resolve stage meta
    const currentStageNumber = application.currentStage || 1;
    const stageMeta =
      PROCESSING_STAGES.find((s) => s.step === currentStageNumber) || PROCESSING_STAGES[0];

    // Sanitize output for public view
    const publicData = {
      id: (application._id as unknown as { toString(): string }).toString(),
      applicationNo: application.applicationNo,
      candidateName: application.candidateName,
      passportNumber: application.passportNumber
        ? `${application.passportNumber.slice(0, 2)}****${application.passportNumber.slice(-2)}`
        : "",
      fullPassportNumber: application.passportNumber || "",
      phone: application.phone
        ? `+91 ******${application.phone.replace(/\D/g, "").slice(-4)}`
        : "",
      targetCountry: application.targetCountry,
      jobTrade: application.jobTrade,
      currentStage: currentStageNumber,
      stageStatus: application.stageStatus,
      currentStageMeta: {
        step: stageMeta.step,
        name: stageMeta.name,
        shortName: stageMeta.shortName,
        description: stageMeta.description,
        icon: stageMeta.icon,
        color: stageMeta.color,
      },
      workPermitNumber: application.workPermitNumber || "",
      vfsAppointmentDate: application.vfsAppointmentDate || "",
      visaNumber: application.visaNumber || "",
      flightDate: application.flightDate || "",
      flightPnr: application.flightPnr || "",
      assignedCounselor: {
        name: application.assignedCounselor?.name || "Senior Visa Processing Officer",
        role: application.assignedCounselor?.role || "Immigration Counselor",
      },
      stageHistory: Array.isArray(application.stageHistory)
        ? application.stageHistory.map((hist) => ({
            stageNumber: hist.stageNumber,
            stageName: hist.stageName,
            status: hist.status,
            date: hist.date,
            remarks: hist.remarks || "",
          }))
        : [],
      createdAt: application.createdAt,
      updatedAt: application.updatedAt,
      allStages: PROCESSING_STAGES.map((s) => ({
        step: s.step,
        id: s.id,
        name: s.name,
        shortName: s.shortName,
        description: s.description,
        icon: s.icon,
        color: s.color,
      })),
    };

    return Response.json(
      {
        success: true,
        data: publicData,
      },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Error in public tracking API:", error);
    return Response.json(
      {
        success: false,
        message: "An error occurred while fetching tracking details. Please try again.",
      },
      { status: 500 }
    );
  }
}
