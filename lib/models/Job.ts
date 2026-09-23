/* ================================================================
   lib/models/Job.ts  — Mongoose Model (MVC: Model layer)
   Mirrors the JobDemand interface in lib/data.ts
   ================================================================ */

import mongoose, { Schema, Document, Model } from "mongoose";

export interface IJob extends Document {
  title: string;
  company: string;
  country: string;
  flag: string;
  category: string;
  salary: string;
  totalOpenings: number;
  visaType: string;
  interviewDate: string;
  venue: string;
  dutyHours: string;
  perks: string[];
  requirements: string[];
  postedDate: string;
  urgent: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    flag: { type: String, required: true, default: "🌍" },
    category: { type: String, required: true, trim: true },
    salary: { type: String, required: true, trim: true },
    totalOpenings: { type: Number, required: true, min: 1 },
    visaType: { type: String, required: true, trim: true },
    interviewDate: { type: String, required: true, default: "Direct Selection" },
    venue: { type: String, required: true, default: "WorkWise Visa Office" },
    dutyHours: { type: String, required: true, default: "Standard Duty + Overtime" },
    perks: { type: [String], default: [] },
    requirements: { type: [String], default: [] },
    postedDate: { type: String, required: true },
    urgent: { type: Boolean, default: false },
  },
  {
    timestamps: true,
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

// Prevent model re-compilation during hot reloads
const Job: Model<IJob> =
  (mongoose.models.Job as Model<IJob>) || mongoose.model<IJob>("Job", JobSchema);

export default Job;
