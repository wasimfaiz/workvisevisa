/* ================================================================
   app/api/b2b-candidates/route.ts — B2B Agent Candidates API
   Supports:
   - GET: List candidates with search, stage, agent filters & KPI metrics
   - POST: Register a new candidate sourced by an agent
   ================================================================ */

import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import AgentCandidate from "@/lib/models/AgentCandidate";
import Partner from "@/lib/models/Partner";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search")?.trim() || "";
    const stage = searchParams.get("stage")?.trim() || "";
    const agentId = searchParams.get("agentId")?.trim() || "";
    const trade = searchParams.get("trade")?.trim() || "";
    const commissionStatus = searchParams.get("commissionStatus")?.trim() || "";

    const query: any = {};

    if (stage && stage !== "all") {
      query.stage = stage;
    }

    if (agentId && agentId !== "all") {
      query.agentId = agentId;
    }

    if (trade && trade !== "all") {
      query.trade = trade;
    }

    if (commissionStatus && commissionStatus !== "all") {
      query.commissionStatus = commissionStatus;
    }

    if (search) {
      query.$or = [
        { candidateName: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { passportNumber: { $regex: search, $options: "i" } },
        { city: { $regex: search, $options: "i" } },
        { agentName: { $regex: search, $options: "i" } },
        { candidateRefNo: { $regex: search, $options: "i" } },
        { trade: { $regex: search, $options: "i" } },
      ];
    }

    const [candidates, allCandidates] = await Promise.all([
      AgentCandidate.find(query).sort({ createdAt: -1 }).lean(),
      AgentCandidate.find({}).lean(),
    ]);

    // Aggregate stats calculation
    const totalCandidates = allCandidates.length;
    let submitted = 0;
    let inScreening = 0;
    let inVisa = 0;
    let deployed = 0;
    let totalCommissionPending = 0;
    let totalCommissionPaid = 0;

    for (const c of allCandidates) {
      if (c.stage === "agent_submitted") submitted++;
      else if (
        c.stage === "document_verified" ||
        c.stage === "trade_test" ||
        c.stage === "client_interview"
      ) {
        inScreening++;
      } else if (
        c.stage === "selected" ||
        c.stage === "medical_fit" ||
        c.stage === "visa_processing" ||
        c.stage === "visa_issued"
      ) {
        inVisa++;
      } else if (c.stage === "deployed") {
        deployed++;
      }

      if (c.commissionStatus === "paid") {
        totalCommissionPaid += c.commissionAmount || 0;
      } else {
        totalCommissionPending += c.commissionAmount || 0;
      }
    }

    const formatted = candidates.map((c: any) => ({
      ...c,
      id: c._id.toString(),
      agentId: c.agentId ? c.agentId.toString() : "",
    }));

    return Response.json({
      success: true,
      count: formatted.length,
      data: formatted,
      stats: {
        totalCandidates,
        submitted,
        inScreening,
        inVisa,
        deployed,
        totalCommissionPending,
        totalCommissionPaid,
      },
    });
  } catch (error: any) {
    console.error("[api/b2b-candidates.GET]", error);
    return Response.json(
      { success: false, message: error.message || "Failed to fetch candidates" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();

    const candidateName = body.candidateName?.trim();
    const phone = body.phone?.trim();
    const trade = body.trade?.trim();
    let agentId = body.agentId?.trim();
    const agentCode = body.agentCode?.trim();

    if (!candidateName) {
      return Response.json(
        { success: false, message: "Candidate Name is required." },
        { status: 400 }
      );
    }

    if (!phone) {
      return Response.json(
        { success: false, message: "Candidate Mobile Number is required." },
        { status: 400 }
      );
    }

    if (!trade) {
      return Response.json(
        { success: false, message: "Candidate Trade/Skill is required." },
        { status: 400 }
      );
    }

    // Lookup Agent if agentCode was provided instead of agentId, or vice versa
    let agent: any = null;
    if (agentId) {
      agent = await Partner.findById(agentId);
    }
    if (!agent && agentCode) {
      agent = await Partner.findOne({
        agentCode: { $regex: new RegExp(`^${agentCode}$`, "i") },
      });
    }

    if (!agent) {
      // Fallback: If no agent found, look for any default Sourcing Sub-Agent
      agent = await Partner.findOne({ partnerType: "Sourcing Sub-Agent" });
      if (!agent) {
        return Response.json(
          {
            success: false,
            message:
              "Valid Sourcing Agent not found. Please provide an active Agent ID or Agent Code.",
          },
          { status: 404 }
        );
      }
    }

    agentId = agent._id;
    const agentName = agent.name;
    const finalAgentCode = agent.agentCode || `WW-AGT-${agent._id.toString().slice(-4).toUpperCase()}`;
    const agentPhone = agent.phone;

    // Determine default commission from agent's commissionTerms if possible
    let commissionAmount = Number(body.commissionAmount);
    if (isNaN(commissionAmount) || commissionAmount <= 0) {
      // Check if agent terms have an amount e.g. "5000"
      const match = (agent.commissionTerms || "").match(/\d[\d,.]*/);
      if (match) {
        const parsed = parseInt(match[0].replace(/,/g, ""), 10);
        commissionAmount = !isNaN(parsed) && parsed > 500 ? parsed : 5000;
      } else {
        commissionAmount = 5000;
      }
    }

    const newCandidate = await AgentCandidate.create({
      candidateName,
      phone,
      whatsapp: body.whatsapp?.trim() || phone,
      passportNumber: (body.passportNumber || "").trim().toUpperCase(),
      trade,
      targetCompany: body.targetCompany?.trim() || "AFGC Holding Dubai",
      targetCountry: body.targetCountry?.trim() || "UAE",
      experienceYears: Number(body.experienceYears) || 0,
      city: body.city?.trim() || agent.city || "Siwan",
      state: body.state?.trim() || "Bihar",

      agentId,
      agentName,
      agentCode: finalAgentCode,
      agentPhone,

      stage: body.stage || "agent_submitted",
      stageNotes:
        body.stageNotes?.trim() ||
        `Registered by Agent ${agentName} (${finalAgentCode}). Ready for verification.`,

      commissionAmount,
      commissionStatus: body.commissionStatus || "pending",
      notes: body.notes?.trim() || "",
      processedBy: body.processedBy?.trim() || "Agent Portal Submission",
    });

    // Increment Agent's referred candidates counter
    await Partner.findByIdAndUpdate(agentId, {
      $inc: { totalCandidatesReferred: 1 },
    });

    return Response.json(
      {
        success: true,
        data: {
          ...newCandidate.toJSON(),
          id: newCandidate._id.toString(),
        },
        message: `Candidate ${candidateName} registered successfully under Agent ${agentName}.`,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("[api/b2b-candidates.POST]", error);
    return Response.json(
      { success: false, message: error.message || "Failed to register candidate" },
      { status: 500 }
    );
  }
}
