/* ================================================================
   lib/controllers/jobController.ts  — MVC: Controller Layer
   Business logic for all job-related operations.
   Route handlers are thin wrappers that call these functions.
   ================================================================ */

import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Job, { IJob } from "@/lib/models/Job";
import { getAuthUser } from "@/lib/auth";

// ── Types ─────────────────────────────────────────────────────────

export type JobInput = Omit<
  IJob,
  "_id" | "id" | "createdAt" | "updatedAt" | "__v"
>;

// ── Helpers ───────────────────────────────────────────────────────

function requireAdmin(request: NextRequest): Response | null {
  const user = getAuthUser(request);
  if (!user) {
    return Response.json(
      { success: false, message: "Unauthorized. Please log in as admin." },
      { status: 401 }
    );
  }
  return null;
}

function todayDateString(): string {
  return new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// ── Controller Methods ────────────────────────────────────────────

/**
 * GET /api/jobs
 * Returns all jobs, sorted newest first.
 */
export async function getAllJobs(): Promise<Response> {
  try {
    await connectDB();
    const jobs = await Job.find({}).sort({ createdAt: -1 }).lean();

    // Transform _id → id for each job
    const transformed = jobs.map((j) => ({
      ...j,
      id: (j._id as unknown as { toString(): string }).toString(),
      _id: undefined,
      __v: undefined,
    }));

    return Response.json({ success: true, data: transformed, count: transformed.length });
  } catch (error) {
    console.error("[jobController.getAllJobs]", error);
    return Response.json(
      { success: false, message: "Failed to fetch jobs." },
      { status: 500 }
    );
  }
}

/**
 * GET /api/jobs/:id
 * Returns a single job by MongoDB ObjectId.
 */
export async function getJobById(id: string): Promise<Response> {
  try {
    await connectDB();
    const job = await Job.findById(id).lean();

    if (!job) {
      return Response.json(
        { success: false, message: "Job not found." },
        { status: 404 }
      );
    }

    const transformed = {
      ...job,
      id: (job._id as unknown as { toString(): string }).toString(),
      _id: undefined,
      __v: undefined,
    };

    return Response.json({ success: true, data: transformed });
  } catch (error) {
    console.error("[jobController.getJobById]", error);
    return Response.json(
      { success: false, message: "Failed to fetch job." },
      { status: 500 }
    );
  }
}

/**
 * POST /api/jobs
 * Admin-only: Create a new job posting.
 */
export async function createJob(request: NextRequest): Promise<Response> {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    await connectDB();
    const body = await request.json();

    const jobData: Partial<JobInput> = {
      title: body.title,
      company: body.company,
      country: body.country,
      flag: body.flag || "🌍",
      category: body.category,
      salary: body.salary,
      totalOpenings: Number(body.totalOpenings),
      visaType: body.visaType,
      interviewDate: body.interviewDate || "Direct Selection",
      venue: body.venue || "WorkWise Visa Office",
      dutyHours: body.dutyHours || "Standard Duty + Overtime",
      perks: Array.isArray(body.perks) ? body.perks : [],
      requirements: Array.isArray(body.requirements) ? body.requirements : [],
      postedDate: body.postedDate || todayDateString(),
      urgent: Boolean(body.urgent),
    };

    // Basic validation
    const required = ["title", "company", "country", "category", "salary", "totalOpenings", "visaType"];
    for (const field of required) {
      if (!jobData[field as keyof typeof jobData]) {
        return Response.json(
          { success: false, message: `Field "${field}" is required.` },
          { status: 400 }
        );
      }
    }

    const job = await Job.create(jobData);
    const result = {
      ...job.toJSON(),
    };

    return Response.json({ success: true, data: result, message: "Job posted successfully." }, { status: 201 });
  } catch (error) {
    console.error("[jobController.createJob]", error);
    return Response.json(
      { success: false, message: "Failed to create job." },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/jobs/:id
 * Admin-only: Update an existing job posting.
 */
export async function updateJob(
  request: NextRequest,
  id: string
): Promise<Response> {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    await connectDB();
    const body = await request.json();

    const updatedJob = await Job.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    ).lean();

    if (!updatedJob) {
      return Response.json(
        { success: false, message: "Job not found." },
        { status: 404 }
      );
    }

    const transformed = {
      ...updatedJob,
      id: (updatedJob._id as unknown as { toString(): string }).toString(),
      _id: undefined,
      __v: undefined,
    };

    return Response.json({ success: true, data: transformed, message: "Job updated successfully." });
  } catch (error) {
    console.error("[jobController.updateJob]", error);
    return Response.json(
      { success: false, message: "Failed to update job." },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/jobs/:id
 * Admin-only: Delete a job posting.
 */
export async function deleteJob(
  request: NextRequest,
  id: string
): Promise<Response> {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    await connectDB();
    const job = await Job.findByIdAndDelete(id);

    if (!job) {
      return Response.json(
        { success: false, message: "Job not found." },
        { status: 404 }
      );
    }

    return Response.json({ success: true, message: "Job deleted successfully." });
  } catch (error) {
    console.error("[jobController.deleteJob]", error);
    return Response.json(
      { success: false, message: "Failed to delete job." },
      { status: 500 }
    );
  }
}
