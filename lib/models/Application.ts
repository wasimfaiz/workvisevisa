/* ================================================================
   lib/models/Application.ts — Candidate Application Tracker Model
   Tracks candidates whose processing has started from registration
   to visa issuance and deployment.
   ================================================================ */

import mongoose, { Schema, Document, Model } from "mongoose";
import { PROCESSING_STAGES, IStageHistory } from "@/lib/types/application";

export { PROCESSING_STAGES };
export type { IStageHistory };

export interface IApplication extends Document {
  applicationNo: string;
  candidateName: string;
  passportNumber?: string;
  phone: string;
  email?: string;
  targetCountry: string;
  jobTrade: string;
  currentStage: number; // 1 to 7
  stageStatus: "in_progress" | "completed" | "on_hold" | "rejected";
  assignedCounselor?: {
    id?: string | null;
    name?: string;
    email?: string;
    role?: string;
  };
  packageAmount: number;
  paidAmount: number;
  balanceAmount: number;
  workPermitNumber?: string;
  vfsAppointmentDate?: string;
  visaNumber?: string;
  flightDate?: string;
  flightPnr?: string;
  notes?: string;
  stageHistory: IStageHistory[];
  createdAt: Date;
  updatedAt: Date;
}

const ApplicationSchema = new Schema<IApplication>(
  {
    applicationNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    candidateName: {
      type: String,
      required: true,
      trim: true,
    },
    passportNumber: {
      type: String,
      default: "",
      trim: true,
      uppercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      default: "",
      trim: true,
      lowercase: true,
    },
    targetCountry: {
      type: String,
      required: true,
      trim: true,
    },
    jobTrade: {
      type: String,
      required: true,
      trim: true,
    },
    currentStage: {
      type: Number,
      required: true,
      min: 1,
      max: 7,
      default: 1,
    },
    stageStatus: {
      type: String,
      enum: ["in_progress", "completed", "on_hold", "rejected"],
      default: "in_progress",
    },
    assignedCounselor: {
      id: { type: String, default: null },
      name: { type: String, default: "" },
      email: { type: String, default: "" },
      role: { type: String, default: "" },
    },
    packageAmount: {
      type: Number,
      default: 0,
    },
    paidAmount: {
      type: Number,
      default: 0,
    },
    balanceAmount: {
      type: Number,
      default: 0,
    },
    workPermitNumber: {
      type: String,
      default: "",
      trim: true,
    },
    vfsAppointmentDate: {
      type: String,
      default: "",
    },
    visaNumber: {
      type: String,
      default: "",
      trim: true,
    },
    flightDate: {
      type: String,
      default: "",
    },
    flightPnr: {
      type: String,
      default: "",
      trim: true,
      uppercase: true,
    },
    notes: {
      type: String,
      default: "",
    },
    stageHistory: [
      {
        stageNumber: { type: Number, required: true },
        stageName: { type: String, required: true },
        status: { type: String, default: "in_progress" },
        date: { type: Date, default: Date.now },
        remarks: { type: String, default: "" },
        updatedBy: { type: String, default: "Admin" },
      },
    ],
  },
  {
    timestamps: true,
    strict: false,
    toJSON: {
      transform: (_doc, ret: Record<string, unknown>) => {
        ret.id = (ret._id as { toString(): string }).toString();
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Prevent re-compilation during hot reloads
const Application: Model<IApplication> =
  (mongoose.models?.Application as Model<IApplication>) ||
  mongoose.model<IApplication>("Application", ApplicationSchema);

export default Application;
