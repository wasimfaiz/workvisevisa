/* ================================================================
   lib/models/Inquiry.ts — Consultation & Lead Inquiry Model
   Stores leads from the homepage Book Free Consultation form.
   ================================================================ */

import mongoose, { Schema, Document, Model } from "mongoose";

export type InquiryStatus =
  | "new"
  | "interested"
  | "contacted"
  | "in_progress"
  | "payment_mode"
  | "converted"
  | "dnp"
  | "not_interested"
  | "closed";

export interface IInquiry extends Document {
  name: string;
  phone: string;
  country: string;
  occupation: string;
  status: InquiryStatus;
  notes?: string;
  source?: string;
  assignedTo?: {
    id?: string | null;
    name?: string;
    email?: string;
    role?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const InquirySchema = new Schema<IInquiry>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    occupation: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: [
        "new",
        "interested",
        "contacted",
        "in_progress",
        "payment_mode",
        "converted",
        "dnp",
        "not_interested",
        "closed",
      ],
      default: "new",
    },
    notes: { type: String, default: "" },
    source: { type: String, default: "Consultation Form - Homepage" },
    assignedTo: {
      id: { type: String, default: null },
      name: { type: String, default: "" },
      email: { type: String, default: "" },
      role: { type: String, default: "" },
    },
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

// Prevent re-compilation during hot reloads
const Inquiry: Model<IInquiry> =
  (mongoose.models?.Inquiry as Model<IInquiry>) ||
  mongoose.model<IInquiry>("Inquiry", InquirySchema);

export default Inquiry;
