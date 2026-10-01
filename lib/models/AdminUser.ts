/* ================================================================
   lib/models/AdminUser.ts — Mongoose Model
   Stores admin users and staff with role-based permissions (RBAC).
   ================================================================ */

import mongoose, { Schema, Document, Model } from "mongoose";
import { AdminRole, EmployeePermissions, DEFAULT_PERMISSIONS } from "@/lib/types/rbac";

export type { AdminRole, EmployeePermissions };
export { DEFAULT_PERMISSIONS };

export interface IAdminUser extends Document {
  email: string;
  passwordHash: string;
  name: string;
  phone?: string;
  role: AdminRole;
  status: "active" | "inactive";
  permissions: EmployeePermissions;
  lastLoginAt?: Date;
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
    phone: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["superadmin", "admin", "manager", "counselor", "accountant", "staff"],
      default: "staff",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    permissions: {
      invoices: {
        view: { type: Boolean, default: false },
        create: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
        print: { type: Boolean, default: false },
      },
      inquiries: {
        view: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
        export: { type: Boolean, default: false },
      },
      jobs: {
        view: { type: Boolean, default: false },
        create: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
      },
      applications: {
        view: { type: Boolean, default: true },
        create: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
      },
      employees: {
        view: { type: Boolean, default: false },
        manage: { type: Boolean, default: false },
      },
    },
    lastLoginAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_doc, ret: Record<string, unknown>) => {
        ret.id = (ret._id as { toString(): string }).toString();
        delete ret._id;
        delete ret.__v;
        delete ret.passwordHash;
        return ret;
      },
    },
  }
);

const AdminUser: Model<IAdminUser> =
  (mongoose.models.AdminUser as Model<IAdminUser>) ||
  mongoose.model<IAdminUser>("AdminUser", AdminUserSchema);

export default AdminUser;
