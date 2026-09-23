/* ================================================================
   lib/models/AdminUser.ts  — Mongoose Model (MVC: Model layer)
   Stores admin users with hashed passwords and role info.
   ================================================================ */

import mongoose, { Schema, Document, Model } from "mongoose";

export type AdminRole = "admin" | "superadmin";

export interface IAdminUser extends Document {
  email: string;
  passwordHash: string;
  name: string;
  role: AdminRole;
  createdAt: Date;
  updatedAt: Date;
}

const AdminUserSchema = new Schema<IAdminUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      default: "Admin",
    },
    role: {
      type: String,
      enum: ["admin", "superadmin"],
      default: "admin",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_doc, ret: Record<string, unknown>) => {
        ret.id = (ret._id as { toString(): string }).toString();
        delete ret._id;
        delete ret.__v;
        delete ret.passwordHash; // Never expose the hash
        return ret;
      },
    },
  }
);

const AdminUser: Model<IAdminUser> =
  (mongoose.models.AdminUser as Model<IAdminUser>) ||
  mongoose.model<IAdminUser>("AdminUser", AdminUserSchema);

export default AdminUser;
