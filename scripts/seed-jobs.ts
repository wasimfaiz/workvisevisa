/* ================================================================
   scripts/seed-jobs.ts
   Seed the initial 2 jobs into MongoDB Atlas.
   Usage: npx tsx scripts/seed-jobs.ts
   ================================================================ */

import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { resolve } from "path";

// Load .env.local
dotenv.config({ path: resolve(process.cwd(), ".env.local") });

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI not found in .env.local");
  process.exit(1);
}

const JobSchema = new mongoose.Schema(
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
  { timestamps: true }
);

const Job = mongoose.models.Job || mongoose.model("Job", JobSchema);

const INITIAL_JOBS = [
  {
    title: "Tile Mason & Helper",
    company: "Dubai Project",
    country: "Dubai, UAE",
    flag: "🇦🇪",
    category: "Construction & Civil",
    salary: "1,200 – 1,800 AED",
    totalOpenings: 10,
    visaType: "Employment Visa",
    interviewDate: "Direct Selection",
    venue: "WorkWise Visa Office",
    dutyHours: "Standard Duty + Overtime",
    perks: [
      "5 Tile Mason (Salary: 1,800 AED)",
      "5 Helper (Salary: 1,200 AED)",
    ],
    requirements: [
      "5 Tile Mason — Salary: 1,800 AED",
      "5 Helper — Salary: 1,200 AED",
    ],
    postedDate: "Sep 17, 2026",
    urgent: true,
  },
  {
    title: "Cleaner",
    company: "Dubai Project",
    country: "Dubai, UAE",
    flag: "🇦🇪",
    category: "Cleaning & Support",
    salary: "1,080 AED",
    totalOpenings: 5,
    visaType: "Employment Visa",
    interviewDate: "Direct Selection",
    venue: "WorkWise Visa Office",
    dutyHours: "Standard Duty + Overtime",
    perks: [
      "5 Cleaner (Salary: 1,080 AED)",
      "Only Telugu Speaking Candidates",
    ],
    requirements: [
      "5 Cleaner — Salary: 1,080 AED",
      "Only who can speak Telugu language",
    ],
    postedDate: "Sep 17, 2026",
    urgent: true,
  },
];

async function seedJobs() {
  try {
    console.log("Connecting to MongoDB Atlas...");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB Atlas!");

    for (const job of INITIAL_JOBS) {
      const existing = await Job.findOne({ title: job.title, company: job.company });
      if (existing) {
        console.log(`Job already exists: "${job.title}". Updating...`);
        await Job.updateOne({ _id: existing._id }, job);
      } else {
        await Job.create(job);
        console.log(`✅ Created job: "${job.title}"`);
      }
    }

    const count = await Job.countDocuments();
    console.log(`🎉 Total jobs in database now: ${count}`);
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding jobs:", error);
    process.exit(1);
  }
}

seedJobs();
