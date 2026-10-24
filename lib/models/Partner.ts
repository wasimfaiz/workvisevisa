/* ================================================================
   lib/models/Partner.ts — Optimized Mongoose Model for B2B Partners
   Designed for Individuals and Companies who supply/refer job candidates.
   Includes MoU Agreement Tracking, Aadhaar Card, and PAN Card KYC Verification.
   ================================================================ */

import mongoose, { Schema, Document, Model } from "mongoose";

export type PartnerType = "Individual" | "Company" | "Agency" | string;
export type PartnerStatus = "Active" | "Pending Verification" | "Inactive" | string;
export type MouStatus = "Signed" | "Pending" | "Under Review" | "Expired" | "None";
export type KycStatus = "Verified" | "Pending" | "Incomplete" | string;
export type OnboardingStage =
  | "New Inquiry"
  | "In Discussion"
  | "KYC & MoU Pending"
  | "Partnership Active"
  | "Inactive";

export interface IPartner extends Document {
  partnerCode?: string;
  name: string;
  partnerType: string;
  contactPerson: string;
  designation?: string;
  email?: string;
  phone: string;
  whatsapp?: string;
  city: string;
  state?: string;
  country: string;
  address?: string;
  status: string;
  onboardingStage?: OnboardingStage | string;
  source?: string;
  sourcingCapacity?: string;
  commissionTerms?: string;
  totalCandidatesReferred: number;
  totalSelected: number;
  totalDeployed: number;
  rating: number;
  notes?: string;

  // Signed MoU & Agreement Document
  mouStatus: MouStatus;
  mouDocumentUrl?: string;
  mouDocumentName?: string;
  mouDocumentSize?: number;
  mouSignedDate?: string;
  mouExpiryDate?: string;
  mouNotes?: string;

  // Aadhaar & PAN Card KYC Documents
  aadhaarNumber?: string;
  aadhaarDocumentUrl?: string;
  aadhaarDocumentName?: string;
  panNumber?: string;
  panDocumentUrl?: string;
  panDocumentName?: string;
  kycStatus: KycStatus;

  // Legacy compatibility fields
  agentCode?: string;
  agreementStatus?: string;
  assignedDemands?: string[];
  licenseNumber?: string;
  website?: string;

  // B2B Partner Portal Login Access
  passwordHash?: string;
  isLoginEnabled?: boolean;
  lastLoginAt?: Date;

  createdBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

const PartnerSchema = new Schema<IPartner>(
  {
    partnerCode: {
      type: String,
      trim: true,
      uppercase: true,
      sparse: true,
      index: true,
    },
    name: {
      type: String,
      required: [true, "Partner / Company Name is required"],
      trim: true,
    },
    partnerType: {
      type: String,
      required: true,
      default: "Individual",
      trim: true,
    },
    contactPerson: {
      type: String,
      required: [true, "Contact Person is required"],
      trim: true,
    },
    designation: {
      type: String,
      trim: true,
      default: "Sourcing Partner",
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: "",
    },
    phone: {
      type: String,
      required: [true, "Phone Number is required"],
      trim: true,
    },
    whatsapp: {
      type: String,
      trim: true,
      default: "",
    },
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
      default: "",
    },
    state: {
      type: String,
      trim: true,
      default: "",
    },
    country: {
      type: String,
      required: true,
      trim: true,
      default: "India",
    },
    address: {
      type: String,
      trim: true,
      default: "",
    },
    status: {
      type: String,
      default: "Active",
      trim: true,
    },
    onboardingStage: {
      type: String,
      default: "Partnership Active",
      trim: true,
      index: true,
    },
    source: {
      type: String,
      default: "Manual Admin Entry",
      trim: true,
    },
    sourcingCapacity: {
      type: String,
      trim: true,
      default: "",
    },
    commissionTerms: {
      type: String,
      trim: true,
      default: "Standard Sourcing Commission",
    },
    totalCandidatesReferred: {
      type: Number,
      default: 0,
      min: 0,
    },
    totalSelected: {
      type: Number,
      default: 0,
      min: 0,
    },
    totalDeployed: {
      type: Number,
      default: 0,
      min: 0,
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },
    notes: {
      type: String,
      trim: true,
      default: "",
    },

    // MoU / Signed Contract File Storage
    mouStatus: {
      type: String,
      default: "Pending",
      trim: true,
    },
    mouDocumentUrl: {
      type: String,
      trim: true,
      default: "",
    },
    mouDocumentName: {
      type: String,
      trim: true,
      default: "",
    },
    mouDocumentSize: {
      type: Number,
      default: 0,
    },
    mouSignedDate: {
      type: String,
      trim: true,
      default: "",
    },
    mouExpiryDate: {
      type: String,
      trim: true,
      default: "",
    },
    mouNotes: {
      type: String,
      trim: true,
      default: "",
    },

    // Aadhaar & PAN Card KYC Verification
    aadhaarNumber: {
      type: String,
      trim: true,
      default: "",
    },
    aadhaarDocumentUrl: {
      type: String,
      trim: true,
      default: "",
    },
    aadhaarDocumentName: {
      type: String,
      trim: true,
      default: "",
    },
    panNumber: {
      type: String,
      trim: true,
      uppercase: true,
      default: "",
    },
    panDocumentUrl: {
      type: String,
      trim: true,
      default: "",
    },
    panDocumentName: {
      type: String,
      trim: true,
      default: "",
    },
    kycStatus: {
      type: String,
      default: "Pending",
      trim: true,
    },

    // B2B Partner Portal Login Access
    passwordHash: {
      type: String,
      default: "",
    },
    isLoginEnabled: {
      type: Boolean,
      default: false,
      index: true,
    },
    lastLoginAt: {
      type: Date,
    },

    // Legacy fields
    agentCode: { type: String, trim: true },
    agreementStatus: { type: String, trim: true },
    assignedDemands: { type: [String], default: [] },
    licenseNumber: { type: String, trim: true, default: "" },
    website: { type: String, trim: true, default: "" },
    createdBy: { type: String, default: "Admin" },
  },
  {
    timestamps: true,
  }
);

// High-speed text & filter indexes
PartnerSchema.index({ name: "text", contactPerson: "text", city: "text", state: "text", panNumber: "text", aadhaarNumber: "text" });
PartnerSchema.index({ partnerType: 1, status: 1, mouStatus: 1, kycStatus: 1 });

// Ensure model compilation always uses the latest PartnerSchema without stale enum cache
if (mongoose.models && mongoose.models.Partner) {
  delete (mongoose.models as Record<string, any>).Partner;
}

const Partner: Model<IPartner> =
  mongoose.models.Partner || mongoose.model<IPartner>("Partner", PartnerSchema);

export default Partner;
