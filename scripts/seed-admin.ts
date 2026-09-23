/* ================================================================
   scripts/seed-admin.ts
   Run once to seed the admin user into MongoDB.
   Usage: npx tsx scripts/seed-admin.ts
   ================================================================ */

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import * as dotenv from "dotenv";
import { resolve } from "path";

// Load .env.local
dotenv.config({ path: resolve(process.cwd(), ".env.local") });

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  console.error("❌  MONGODB_URI not found in .env.local");
  process.exit(1);
}

// Inline AdminUser schema to avoid module resolution issues in scripts
const AdminUserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ["admin", "superadmin"], default: "admin" },
}, { timestamps: true });

const AdminUser =
  mongoose.models.AdminUser || mongoose.model("AdminUser", AdminUserSchema);

async function seed() {
  console.log("🔌  Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);
  console.log("✅  Connected.");

  const ADMIN_EMAIL = "wasim@yastudy.com";
  const ADMIN_PASSWORD = "Wasim2001@";
  const ADMIN_NAME = "Wasim (Admin)";

  // Check if admin already exists
  const existing = await AdminUser.findOne({ email: ADMIN_EMAIL });
  if (existing) {
    console.log(`ℹ️   Admin user already exists: ${ADMIN_EMAIL}`);
    await mongoose.disconnect();
    return;
  }

  const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);
  await AdminUser.create({
    email: ADMIN_EMAIL,
    passwordHash,
    name: ADMIN_NAME,
    role: "admin",
  });

  console.log(`✅  Admin user created successfully!`);
  console.log(`   Email   : ${ADMIN_EMAIL}`);
  console.log(`   Password: ${ADMIN_PASSWORD}`);
  console.log(`   Role    : admin`);

  await mongoose.disconnect();
  console.log("🔌  Disconnected.");
}

seed().catch((err) => {
  console.error("❌  Seed failed:", err);
  mongoose.disconnect();
  process.exit(1);
});
