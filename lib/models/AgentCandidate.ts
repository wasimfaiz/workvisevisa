/* ================================================================
   lib/models/AgentCandidate.ts — B2B Sourcing Agent Candidate Model
   Tracks candidates recruited by B2B sourcing agents / sub-agents.
   WorkWise Visa team executes the forward operations:
   - Passport & Document Screening
   - Trade Test & Skill Verification
   - Overseas Client Interview (e.g., AFGC Holding Dubai)
   - Medical Examination (GAMCA / Fit)
   - Visa Stamping & Submission
   - Flight & Deployment Abroad
   - Agent Commission Payout Settlement
   ================================================================ */

import mongoose, { Schema, Document, Model } from "mongoose";

export type AgentCandidateStage =
  | "agent_submitted"    // 1. Agent dwara recruit karke bheja gaya
  | "document_verified"  // 2. Passport & Documents verified by WorkWise
  | "trade_test"         // 3. Trade Test / Skill Verification
  | "client_interview"   // 4. Overseas Employer Interview (e.g. AFGC Dubai)
  | "selected"           // 5. Selected / Offer Letter Issued
  | "medical_fit"        // 6. GAMCA / Fit Medical Report
  | "visa_processing"    // 7. Visa Application Submitted
  | "visa_issued"        // 8. Visa Stamped / Work Permit Received
  | "deployed"           // 9. Flight Done & Deployed Abroad
  | "rejected"           // 10. Rejected / Unfit
  | "on_hold";           // 11. On Hold

export type CommissionStatus = "pending" | "approved" | "paid";

export interface IAgentCandidate extends Document {
  candidateRefNo: string; // e.g. WW-B2B-1001
  candidateName: string;
  phone: string;
  whatsapp?: string;
  passportNumber?: string;
  trade: string; // Mason, Scaffolder, Carpenter, Steel Fixer, Construction Helper, Welder, Electrician, Plumber, Driver, etc.
  targetCompany?: string; // e.g. AFGC Holding (Dubai)
  targetCountry: string; // e.g. UAE, Saudi Arabia, Kuwait, Qatar, Croatia, etc.
  experienceYears?: number;
  city: string; // Siwan, Gopalganj, Gorakhpur, Patna, etc.
  state?: string; // Bihar, UP, etc.

  // Sourcing Agent Link
  agentId: mongoose.Types.ObjectId;
  agentName: string;
  agentCode: string; // e.g. WW-AGT-01
  agentPhone: string;

  // Processing Lifecycle
  stage: AgentCandidateStage;
  stageNotes?: string;

  // Milestone Details
  tradeTestScore?: string;
  tradeTestCenter?: string;
  interviewDate?: string;
  interviewRemarks?: string;
  medicalStatus?: "Pending" | "Fit" | "Unfit" | "Repeat";
  medicalCenter?: string;
  visaNumber?: string;
  visaIssuedDate?: string;
  flightDate?: string;
  flightPnr?: string;

  // Agent Commission Tracking
  commissionAmount: number;
  commissionStatus: CommissionStatus;
  commissionPaidDate?: Date;
  commissionNotes?: string;

  // Notes & Audit
  notes?: string;
  processedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

const AgentCandidateSchema = new Schema<IAgentCandidate>(
  {
    candidateRefNo: {
      type: String,
      unique: true,
      trim: true,
      uppercase: true,
      index: true,
    },
    candidateName: {
      type: String,
      required: [true, "Candidate Name is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Candidate Mobile Number is required"],
      trim: true,
    },
    whatsapp: {
      type: String,
      trim: true,
      default: "",
    },
    passportNumber: {
      type: String,
      trim: true,
      uppercase: true,
      default: "",
    },
    trade: {
      type: String,
      required: [true, "Trade / Skill is required"],
      trim: true,
      default: "Construction Helper",
    },
    targetCompany: {
      type: String,
      trim: true,
      default: "AFGC Holding Dubai",
    },
    targetCountry: {
      type: String,
      required: true,
      trim: true,
      default: "UAE",
    },
    experienceYears: {
      type: Number,
      default: 0,
      min: 0,
    },
    city: {
      type: String,
      required: true,
      trim: true,
      default: "Siwan",
    },
    state: {
      type: String,
      trim: true,
      default: "Bihar",
    },

    // Submitting Agent
    agentId: {
      type: Schema.Types.ObjectId,
      ref: "Partner",
      required: true,
      index: true,
    },
    agentName: {
      type: String,
      required: true,
      trim: true,
    },
    agentCode: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      index: true,
    },
    agentPhone: {
      type: String,
      required: true,
      trim: true,
    },

    // Processing Stages
    stage: {
      type: String,
      enum: [
        "agent_submitted",
        "document_verified",
        "trade_test",
        "client_interview",
        "selected",
        "medical_fit",
        "visa_processing",
        "visa_issued",
        "deployed",
        "rejected",
        "on_hold",
      ],
      default: "agent_submitted",
      index: true,
    },
    stageNotes: {
      type: String,
      trim: true,
      default: "Candidate registered by sourcing agent.",
    },

    tradeTestScore: { type: String, trim: true, default: "" },
    tradeTestCenter: { type: String, trim: true, default: "" },
    interviewDate: { type: String, trim: true, default: "" },
    interviewRemarks: { type: String, trim: true, default: "" },
    medicalStatus: {
      type: String,
      enum: ["Pending", "Fit", "Unfit", "Repeat"],
      default: "Pending",
    },
    medicalCenter: { type: String, trim: true, default: "" },
    visaNumber: { type: String, trim: true, default: "" },
    visaIssuedDate: { type: String, trim: true, default: "" },
    flightDate: { type: String, trim: true, default: "" },
    flightPnr: { type: String, trim: true, default: "" },

    // Commission
    commissionAmount: {
      type: Number,
      default: 5000,
      min: 0,
    },
    commissionStatus: {
      type: String,
      enum: ["pending", "approved", "paid"],
      default: "pending",
      index: true,
    },
    commissionPaidDate: {
      type: Date,
      default: null,
    },
    commissionNotes: {
      type: String,
      trim: true,
      default: "",
    },

    notes: {
      type: String,
      trim: true,
      default: "",
    },
    processedBy: {
      type: String,
      trim: true,
      default: "WorkWise Operations",
    },
  },
  {
    timestamps: true,
  }
);

// Auto-generate candidateRefNo if missing
AgentCandidateSchema.pre("validate", async function () {
  if (!this.candidateRefNo) {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const dateStr = new Date().getFullYear();
    this.candidateRefNo = `WW-B2B-${dateStr}-${randomSuffix}`;
  }
});

const AgentCandidate: Model<IAgentCandidate> =
  mongoose.models.AgentCandidate ||
  mongoose.model<IAgentCandidate>("AgentCandidate", AgentCandidateSchema);

export default AgentCandidate;
