/* ================================================================
   app/api/b2b-candidates/[id]/route.ts — Single Candidate Operations
   Supports:
   - GET: Detailed candidate info
   - PUT/PATCH: Update processing stage, milestones, commission, and remarks
   - DELETE: Remove candidate record
   ================================================================ */

import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import AgentCandidate from "@/lib/models/AgentCandidate";
import Partner from "@/lib/models/Partner";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    const candidate = await AgentCandidate.findById(id).lean();
    if (!candidate) {
      return Response.json(
        { success: false, message: "Candidate not found." },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      data: {
        ...(candidate as any),
        id: (candidate as any)._id.toString(),
      },
    });
  } catch (error: any) {
    console.error("[api/b2b-candidates/[id].GET]", error);
    return Response.json(
      { success: false, message: error.message || "Failed to fetch candidate" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();

    const existing = await AgentCandidate.findById(id);
    if (!existing) {
      return Response.json(
        { success: false, message: "Candidate not found." },
        { status: 404 }
      );
    }

    const previousStage = existing.stage;
    const newStage = body.stage || existing.stage;

    // Check if stage transitioned to selected or deployed to increment partner metrics
    if (newStage === "selected" && previousStage !== "selected") {
      await Partner.findByIdAndUpdate(existing.agentId, {
        $inc: { totalSelected: 1 },
      });
    } else if (newStage === "deployed" && previousStage !== "deployed") {
      await Partner.findByIdAndUpdate(existing.agentId, {
        $inc: { totalDeployed: 1 },
      });
    }

    // Set commission paid date if status changed to paid
    let commissionPaidDate = existing.commissionPaidDate;
    if (body.commissionStatus === "paid" && existing.commissionStatus !== "paid") {
      commissionPaidDate = new Date();
    } else if (body.commissionStatus && body.commissionStatus !== "paid") {
      commissionPaidDate = undefined;
    }

    const updateFields: any = {
      ...(body.candidateName && { candidateName: body.candidateName.trim() }),
      ...(body.phone && { phone: body.phone.trim() }),
      ...(body.whatsapp !== undefined && { whatsapp: body.whatsapp.trim() }),
      ...(body.passportNumber !== undefined && {
        passportNumber: body.passportNumber.trim().toUpperCase(),
      }),
      ...(body.trade && { trade: body.trade.trim() }),
      ...(body.targetCompany !== undefined && {
        targetCompany: body.targetCompany.trim(),
      }),
      ...(body.targetCountry !== undefined && {
        targetCountry: body.targetCountry.trim(),
      }),
      ...(body.experienceYears !== undefined && {
        experienceYears: Number(body.experienceYears) || 0,
      }),
      ...(body.city && { city: body.city.trim() }),
      ...(body.state && { state: body.state.trim() }),

      ...(body.stage && { stage: body.stage }),
      ...(body.stageNotes !== undefined && { stageNotes: body.stageNotes.trim() }),

      ...(body.tradeTestScore !== undefined && {
        tradeTestScore: body.tradeTestScore.trim(),
      }),
      ...(body.tradeTestCenter !== undefined && {
        tradeTestCenter: body.tradeTestCenter.trim(),
      }),
      ...(body.interviewDate !== undefined && {
        interviewDate: body.interviewDate.trim(),
      }),
      ...(body.interviewRemarks !== undefined && {
        interviewRemarks: body.interviewRemarks.trim(),
      }),
      ...(body.medicalStatus !== undefined && {
        medicalStatus: body.medicalStatus,
      }),
      ...(body.medicalCenter !== undefined && {
        medicalCenter: body.medicalCenter.trim(),
      }),
      ...(body.visaNumber !== undefined && {
        visaNumber: body.visaNumber.trim(),
      }),
      ...(body.visaIssuedDate !== undefined && {
        visaIssuedDate: body.visaIssuedDate.trim(),
      }),
      ...(body.flightDate !== undefined && {
        flightDate: body.flightDate.trim(),
      }),
      ...(body.flightPnr !== undefined && {
        flightPnr: body.flightPnr.trim(),
      }),

      ...(body.commissionAmount !== undefined && {
        commissionAmount: Number(body.commissionAmount) || 0,
      }),
      ...(body.commissionStatus !== undefined && {
        commissionStatus: body.commissionStatus,
        commissionPaidDate,
      }),
      ...(body.commissionNotes !== undefined && {
        commissionNotes: body.commissionNotes.trim(),
      }),

      ...(body.notes !== undefined && { notes: body.notes.trim() }),
      ...(body.processedBy !== undefined && {
        processedBy: body.processedBy.trim(),
      }),
    };

    const updated = await AgentCandidate.findByIdAndUpdate(id, updateFields, {
      new: true,
      runValidators: true,
    }).lean();

    return Response.json({
      success: true,
      data: {
        ...(updated as any),
        id: (updated as any)._id.toString(),
      },
      message: "Candidate processing stage updated successfully.",
    });
  } catch (error: any) {
    console.error("[api/b2b-candidates/[id].PUT]", error);
    return Response.json(
      { success: false, message: error.message || "Failed to update candidate" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    const candidate = await AgentCandidate.findById(id);
    if (!candidate) {
      return Response.json(
        { success: false, message: "Candidate not found." },
        { status: 404 }
      );
    }

    const agentId = candidate.agentId;
    await AgentCandidate.findByIdAndDelete(id);

    // Decrement agent's referred candidates counter
    if (agentId) {
      await Partner.findByIdAndUpdate(agentId, {
        $inc: { totalCandidatesReferred: -1 },
      });
    }

    return Response.json({
      success: true,
      message: "Candidate deleted successfully.",
    });
  } catch (error: any) {
    console.error("[api/b2b-candidates/[id].DELETE]", error);
    return Response.json(
      { success: false, message: error.message || "Failed to delete candidate" },
      { status: 500 }
    );
  }
}
