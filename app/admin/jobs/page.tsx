"use client";

/* ================================================================
   app/admin/jobs/page.tsx — WorkWise Visa Job Postings & Demands Management
   Dedicated Job Demands CRUD UI for Admin and Counselors.
   ================================================================ */

import { useState, useEffect, FormEvent, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Plus,
  RefreshCw,
  Search,
  Calendar,
  Globe,
  DollarSign,
  Users,
  Clock,
  Trash2,
  Edit3,
  CheckCircle2,
  AlertCircle,
  X,
  Building,
  Flame,
} from "lucide-react";

import { EmployeePermissions } from "@/lib/types/rbac";
import AdminSidebar from "@/components/AdminSidebar";

// ── Types ─────────────────────────────────────────────────────────

export interface Job {
  id: string;
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
}

interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
  permissions?: EmployeePermissions;
}

const EMPTY_JOB: Omit<Job, "id"> = {
  title: "",
  company: "",
  country: "",
  flag: "🌍",
  category: "",
  salary: "",
  totalOpenings: 1,
  visaType: "Employment Visa",
  interviewDate: "Direct Selection",
  venue: "WorkWise Visa Office",
  dutyHours: "Standard Duty + Overtime",
  perks: [],
  requirements: [],
  postedDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
  urgent: false,
};

// ── Job Form Component ────────────────────────────────────────────

interface JobFormProps {
  form: Omit<Job, "id">;
  setForm: React.Dispatch<React.SetStateAction<Omit<Job, "id">>>;
  perksInput: string;
  setPerksInput: React.Dispatch<React.SetStateAction<string>>;
  requirementsInput: string;
  setRequirementsInput: React.Dispatch<React.SetStateAction<string>>;
  formLoading: boolean;
  formMessage: { type: "success" | "error"; text: string } | null;
  editingJob: Job | null;
  onSubmit: (e: FormEvent) => void;
  submitLabel: string;
  onCancel?: () => void;
}

function JobForm({
  form,
  setForm,
  perksInput,
  setPerksInput,
  requirementsInput,
  setRequirementsInput,
  formLoading,
  formMessage,
  editingJob,
  onSubmit,
  submitLabel,
  onCancel,
}: JobFormProps) {
  return (
    <form onSubmit={onSubmit} style={s.form}>
      <div style={s.formGrid}>
        {/* Title */}
        <div style={s.field}>
          <label style={s.label}>Job Title *</label>
          <input
            style={s.input}
            required
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            placeholder="e.g. Heavy Truck Driver / Warehouse Worker"
          />
        </div>

        {/* Company */}
        <div style={s.field}>
          <label style={s.label}>Company / Employer</label>
          <input
            style={s.input}
            value={form.company}
            onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
            placeholder="e.g. Logistics Sp. z o.o. / Dubai Contracting"
          />
        </div>

        {/* Country */}
        <div style={s.field}>
          <label style={s.label}>Destination Country *</label>
          <input
            style={s.input}
            required
            value={form.country}
            onChange={(e) => setForm((f) => ({ ...f, country: e.target.value }))}
            placeholder="e.g. Poland / Romania / Croatia / UAE"
          />
        </div>

        {/* Flag */}
        <div style={s.field}>
          <label style={s.label}>Flag Emoji</label>
          <input
            style={s.input}
            value={form.flag}
            onChange={(e) => setForm((f) => ({ ...f, flag: e.target.value }))}
            placeholder="🇵🇱"
          />
        </div>

        {/* Category */}
        <div style={s.field}>
          <label style={s.label}>Industry / Category *</label>
          <input
            style={s.input}
            required
            value={form.category}
            onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
            placeholder="e.g. Transportation, Warehousing, Construction"
          />
        </div>

        {/* Salary */}
        <div style={s.field}>
          <label style={s.label}>Salary &amp; Currency *</label>
          <input
            style={s.input}
            required
            value={form.salary}
            onChange={(e) => setForm((f) => ({ ...f, salary: e.target.value }))}
            placeholder="e.g. 4,500 – 6,000 PLN / 1,800 AED"
          />
        </div>

        {/* Total Openings */}
        <div style={s.field}>
          <label style={s.label}>Total Openings / Vacancies *</label>
          <input
            style={s.input}
            type="number"
            min={1}
            required
            value={form.totalOpenings}
            onChange={(e) => setForm((f) => ({ ...f, totalOpenings: Number(e.target.value) }))}
          />
        </div>

        {/* Visa Type */}
        <div style={s.field}>
          <label style={s.label}>Visa Type</label>
          <input
            style={s.input}
            value={form.visaType}
            onChange={(e) => setForm((f) => ({ ...f, visaType: e.target.value }))}
            placeholder="Employment Visa / Work Permit"
          />
        </div>

        {/* Interview Date */}
        <div style={s.field}>
          <label style={s.label}>Interview / Selection Process</label>
          <input
            style={s.input}
            value={form.interviewDate}
            onChange={(e) => setForm((f) => ({ ...f, interviewDate: e.target.value }))}
            placeholder="Direct Document Selection / Client Interview"
          />
        </div>

        {/* Venue */}
        <div style={s.field}>
          <label style={s.label}>Processing Office / Venue</label>
          <input
            style={s.input}
            value={form.venue}
            onChange={(e) => setForm((f) => ({ ...f, venue: e.target.value }))}
            placeholder="WorkWise Visa Office"
          />
        </div>

        {/* Duty Hours */}
        <div style={s.field}>
          <label style={s.label}>Duty Hours &amp; Overtime</label>
          <input
            style={s.input}
            value={form.dutyHours}
            onChange={(e) => setForm((f) => ({ ...f, dutyHours: e.target.value }))}
            placeholder="8 hrs/day + Overtime / 5-6 days"
          />
        </div>

        {/* Posted Date */}
        <div style={s.field}>
          <label style={s.label}>Posted Date</label>
          <input
            style={s.input}
            value={form.postedDate}
            onChange={(e) => setForm((f) => ({ ...f, postedDate: e.target.value }))}
            placeholder="e.g. Sep 30, 2026"
          />
        </div>
      </div>

      {/* Perks */}
      <div style={s.field}>
        <label style={s.label}>
          Perks &amp; Benefits <span style={{ color: "#6b7280", fontWeight: 400 }}>(one per line)</span>
        </label>
        <textarea
          style={{ ...s.input, minHeight: "80px", resize: "vertical" } as React.CSSProperties}
          value={perksInput}
          onChange={(e) => setPerksInput(e.target.value)}
          placeholder={"Free Accommodation & Transport provided\nOvertime Allowance\nMedical & Insurance included"}
        />
      </div>

      {/* Requirements */}
      <div style={s.field}>
        <label style={s.label}>
          Requirements &amp; Eligibility <span style={{ color: "#6b7280", fontWeight: 400 }}>(one per line)</span>
        </label>
        <textarea
          style={{ ...s.input, minHeight: "80px", resize: "vertical" } as React.CSSProperties}
          value={requirementsInput}
          onChange={(e) => setRequirementsInput(e.target.value)}
          placeholder={"Valid Passport with min 2 years validity\nMinimum 1-2 years relevant trade experience\nBasic English/Hindi communication"}
        />
      </div>

      {/* Urgent toggle */}
      <label style={s.checkboxLabel}>
        <input
          type="checkbox"
          checked={form.urgent}
          onChange={(e) => setForm((f) => ({ ...f, urgent: e.target.checked }))}
          style={{ width: "16px", height: "16px", accentColor: "#ef4444" }}
        />
        Mark as <span style={{ color: "#ef4444", fontWeight: 700 }}>🔥 Urgent Demand / Fast Track</span>
      </label>

      {formMessage && (
        <div
          style={{
            ...s.msgBox,
            background: formMessage.type === "success" ? "#f0fdf4" : "#fef2f2",
            borderColor: formMessage.type === "success" ? "#86efac" : "#fca5a5",
            color: formMessage.type === "success" ? "#166534" : "#991b1b",
          }}
        >
          {formMessage.text}
        </div>
      )}

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
        <button
          type="submit"
          disabled={formLoading}
          style={{ ...s.btnPrimary, opacity: formLoading ? 0.7 : 1 }}
        >
          {formLoading ? "Saving…" : submitLabel}
        </button>
        {(editingJob || onCancel) && (
          <button type="button" onClick={onCancel} style={s.btnSecondary}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

// ── Main Page Component ───────────────────────────────────────────

export default function AdminJobsPage() {
  const router = useRouter();

  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"jobs" | "new">("jobs");
  const [search, setSearch] = useState("");
  const [countryFilter, setCountryFilter] = useState("all");

  // Modal & Edit state
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  // Form state
  const [form, setForm] = useState<Omit<Job, "id">>(EMPTY_JOB);
  const [perksInput, setPerksInput] = useState("");
  const [requirementsInput, setRequirementsInput] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // ── Auth Check ──────────────────────────────────────────────────
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/me");
        if (!res.ok) {
          router.replace("/admin");
          return;
        }
        const data = await res.json();
        setAdmin(data.user);
      } catch {
        router.replace("/admin");
      }
    }
    checkAuth();
  }, [router]);

  // ── Load Jobs ───────────────────────────────────────────────────
  const loadJobs = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setJobs(data.data);
      }
    } catch (e) {
      console.error("Failed to load jobs", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  // ── Helpers ─────────────────────────────────────────────────────
  function openEditModal(job: Job) {
    setEditingJob(job);
    setForm({
      title: job.title,
      company: job.company,
      country: job.country,
      flag: job.flag,
      category: job.category,
      salary: job.salary,
      totalOpenings: job.totalOpenings,
      visaType: job.visaType,
      interviewDate: job.interviewDate,
      venue: job.venue,
      dutyHours: job.dutyHours,
      perks: job.perks,
      requirements: job.requirements,
      postedDate: job.postedDate,
      urgent: job.urgent,
    });
    setPerksInput((job.perks || []).join("\n"));
    setRequirementsInput((job.requirements || []).join("\n"));
    setFormMessage(null);
  }

  function openNewForm() {
    setEditingJob(null);
    setForm({
      ...EMPTY_JOB,
      postedDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    });
    setPerksInput("");
    setRequirementsInput("");
    setFormMessage(null);
    setActiveTab("new");
  }

  function getFormData() {
    return {
      ...form,
      perks: perksInput.split("\n").map((s) => s.trim()).filter(Boolean),
      requirements: requirementsInput.split("\n").map((s) => s.trim()).filter(Boolean),
    };
  }

  // ── CRUD Actions ────────────────────────────────────────────────
  async function handleCreate(e: FormEvent) {
    e.preventDefault();
    setFormLoading(true);
    setFormMessage(null);

    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(getFormData()),
      });
      const data = await res.json();

      if (data.success) {
        setFormMessage({ type: "success", text: "✅ Job demand posted successfully!" });
        setForm({ ...EMPTY_JOB });
        setPerksInput("");
        setRequirementsInput("");
        await loadJobs();
        setActiveTab("jobs");
      } else {
        setFormMessage({ type: "error", text: data.message || "Failed to post job." });
      }
    } catch {
      setFormMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setFormLoading(false);
    }
  }

  async function handleUpdate(e: FormEvent) {
    e.preventDefault();
    if (!editingJob) return;
    setFormLoading(true);
    setFormMessage(null);

    try {
      const res = await fetch(`/api/jobs/${editingJob.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(getFormData()),
      });
      const data = await res.json();

      if (data.success) {
        setFormMessage({ type: "success", text: "✅ Job demand updated successfully!" });
        setEditingJob(null);
        await loadJobs();
      } else {
        setFormMessage({ type: "error", text: data.message || "Failed to update job." });
      }
    } catch {
      setFormMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setFormLoading(false);
    }
  }

  async function handleDelete(id: string) {
    try {
      const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setShowDeleteConfirm(null);
        await loadJobs();
      }
    } catch (e) {
      console.error("Failed to delete job", e);
    }
  }

  // ── Derived Stats & Filtering ───────────────────────────────────
  const urgentCount = jobs.filter((j) => j.urgent).length;
  const totalOpenings = jobs.reduce((sum, j) => sum + (j.totalOpenings || 1), 0);

  const uniqueCountries = Array.from(new Set(jobs.map((j) => j.country).filter(Boolean))).sort();

  const filteredJobs = jobs.filter((job) => {
    if (countryFilter !== "all" && job.country !== countryFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const matchTitle = job.title?.toLowerCase().includes(q);
      const matchComp = job.company?.toLowerCase().includes(q);
      const matchCat = job.category?.toLowerCase().includes(q);
      const matchCountry = job.country?.toLowerCase().includes(q);
      if (!matchTitle && !matchComp && !matchCat && !matchCountry) return false;
    }
    return true;
  });

  if (!admin) {
    return (
      <div style={s.loadingContainer}>
        <div style={s.spinner} />
        <p style={{ marginTop: "12px", color: "white", fontSize: "14px" }}>
          Verifying access...
        </p>
      </div>
    );
  }

  const isSuper = admin.role === "superadmin" || admin.email === "wasim@yastudy.com";
  const canCreateJob = isSuper || Boolean(admin.permissions?.jobs?.create !== false);
  const canEditJob = isSuper || Boolean(admin.permissions?.jobs?.edit !== false);
  const canDeleteJob = isSuper || Boolean(admin.permissions?.jobs?.delete !== false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f8fafc] font-sans">
      {/* Responsive Unified Admin Sidebar */}
      <AdminSidebar
        currentUser={admin}
        counts={{
          jobs: jobs.length,
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-screen">
        {/* Header */}
        <div style={s.header}>
          <div>
            <h1 style={s.pageTitle}>
              {editingJob
                ? "Edit Job Demand"
                : activeTab === "new"
                ? "Post New Job Demand"
                : "Overseas Job Postings & Demands"}
            </h1>
            <p style={s.pageSubtitle}>
              {editingJob
                ? `Editing: ${editingJob.title}`
                : activeTab === "new"
                ? "Create and publish a new visa job vacancy"
                : `${jobs.length} active demand listings · ${totalOpenings} total open visa positions`}
            </p>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {activeTab === "jobs" && !editingJob && (
              <>
                <button
                  onClick={loadJobs}
                  disabled={loading}
                  style={{ ...s.btnSecondary, display: "flex", alignItems: "center", gap: "8px" }}
                  title="Refresh Jobs"
                >
                  <RefreshCw className={loading ? "animate-spin" : ""} style={{ width: "15px", height: "15px" }} />
                  <span>Refresh</span>
                </button>

                {canCreateJob && (
                  <button
                    onClick={openNewForm}
                    style={{
                      ...s.btnPrimary,
                      background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      boxShadow: "0 4px 14px rgba(79, 70, 229, 0.35)",
                    }}
                  >
                    <Plus style={{ width: "16px", height: "16px" }} />
                    <span>Post New Job</span>
                  </button>
                )}
              </>
            )}

            {activeTab === "new" && (
              <button onClick={() => setActiveTab("jobs")} style={s.btnSecondary}>
                ← Back to All Postings
              </button>
            )}
          </div>
        </div>

        {/* KPI Stat Cards */}
        {activeTab === "jobs" && !editingJob && (
          <div style={s.statsRow}>
            {[
              { label: "Total Active Demands", value: jobs.length, color: "#6366f1" },
              { label: "Total Open Vacancies", value: totalOpenings, color: "#10b981" },
              { label: "Urgent Hot Vacancies", value: urgentCount, color: "#ef4444" },
              { label: "Destination Countries", value: uniqueCountries.length, color: "#06b6d4" },
            ].map((stat) => (
              <div key={stat.label} style={s.statCard}>
                <div style={{ fontSize: "28px", fontWeight: 800, color: stat.color }}>{stat.value}</div>
                <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px", fontWeight: 600 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Edit Form Card */}
        {editingJob && (
          <div style={{ ...s.card, padding: "28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid #f1f5f9", paddingBottom: "16px" }}>
              <div>
                <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>Edit Job Posting</h3>
                <div style={{ fontSize: "12px", color: "#64748b" }}>Update requirements, salary, openings or perks</div>
              </div>
              <button onClick={() => setEditingJob(null)} style={{ background: "#f1f5f9", border: "none", borderRadius: "8px", padding: "6px", cursor: "pointer" }}>
                <X style={{ width: "18px", height: "18px", color: "#64748b" }} />
              </button>
            </div>
            <JobForm
              form={form}
              setForm={setForm}
              perksInput={perksInput}
              setPerksInput={setPerksInput}
              requirementsInput={requirementsInput}
              setRequirementsInput={setRequirementsInput}
              formLoading={formLoading}
              formMessage={formMessage}
              editingJob={editingJob}
              onSubmit={handleUpdate}
              submitLabel="Save Changes"
              onCancel={() => setEditingJob(null)}
            />
          </div>
        )}

        {/* New Job Form Card */}
        {activeTab === "new" && !editingJob && (
          <div style={{ ...s.card, padding: "28px" }}>
            <div style={{ marginBottom: "20px", borderBottom: "1px solid #f1f5f9", paddingBottom: "16px" }}>
              <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>Create New Overseas Job Demand</h3>
              <div style={{ fontSize: "12px", color: "#64748b" }}>Fill in details to publish vacancy on the public jobs portal</div>
            </div>
            <JobForm
              form={form}
              setForm={setForm}
              perksInput={perksInput}
              setPerksInput={setPerksInput}
              requirementsInput={requirementsInput}
              setRequirementsInput={setRequirementsInput}
              formLoading={formLoading}
              formMessage={formMessage}
              editingJob={editingJob}
              onSubmit={handleCreate}
              submitLabel="🚀 Publish Job Demand"
              onCancel={() => setActiveTab("jobs")}
            />
          </div>
        )}

        {/* Jobs Table & Search */}
        {activeTab === "jobs" && !editingJob && (
          <div style={s.card}>
            {/* Search and Filters */}
            <div style={{ padding: "16px 20px", borderBottom: "1px solid #f1f5f9", display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ position: "relative", flex: 1, minWidth: "260px" }}>
                <Search style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", width: "16px", height: "16px", color: "#9ca3af" }} />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search job title, category, company..."
                  style={{ ...s.input, paddingLeft: "40px", width: "100%" }}
                />
              </div>

              <select
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
                style={{ ...s.input, width: "auto", minWidth: "160px", background: "white", cursor: "pointer" }}
              >
                <option value="all">All Countries ({uniqueCountries.length})</option>
                {uniqueCountries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {loading ? (
              <div style={{ padding: "60px", textAlign: "center", color: "#64748b" }}>
                <div style={{ ...s.spinner, margin: "0 auto 16px", borderColor: "rgba(99,102,241,0.2)", borderTopColor: "#6366f1" }} />
                <div>Loading job demands...</div>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div style={{ padding: "60px", textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "12px" }}>📋</div>
                <div style={{ color: "#0f172a", fontWeight: 700, fontSize: "16px" }}>No job postings found</div>
                <div style={{ color: "#64748b", fontSize: "13px", marginTop: "4px" }}>
                  {search || countryFilter !== "all" ? "Try clearing search filters." : "Click 'Post New Job' to publish your first demand."}
                </div>
              </div>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table style={s.table}>
                  <thead>
                    <tr>
                      <th style={s.th}>Job Title &amp; Employer</th>
                      <th style={s.th}>Country</th>
                      <th style={s.th}>Category</th>
                      <th style={s.th}>Salary</th>
                      <th style={{ ...s.th, textAlign: "center" }}>Openings</th>
                      <th style={{ ...s.th, textAlign: "center" }}>Status</th>
                      <th style={s.th}>Posted Date</th>
                      <th style={{ ...s.th, textAlign: "right" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredJobs.map((job, idx) => (
                      <tr key={job.id} style={{ background: idx % 2 === 0 ? "white" : "#f9fafb" }}>
                        <td style={s.td}>
                          <div style={{ fontWeight: 700, color: "#0f172a" }}>{job.title}</div>
                          <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>
                            {job.company || "Direct Recruitment"}
                          </div>
                        </td>
                        <td style={s.td}>
                          <span style={{ fontSize: "15px", marginRight: "6px" }}>{job.flag}</span>
                          <span style={{ fontWeight: 600, color: "#334155" }}>{job.country}</span>
                        </td>
                        <td style={s.td}>
                          <span style={s.categoryTag}>{job.category}</span>
                        </td>
                        <td style={{ ...s.td, fontWeight: 700, color: "#059669" }}>{job.salary}</td>
                        <td style={{ ...s.td, textAlign: "center", fontWeight: 800, color: "#4f46e5" }}>
                          {job.totalOpenings || 1}
                        </td>
                        <td style={{ ...s.td, textAlign: "center" }}>
                          {job.urgent ? (
                            <span style={s.urgentBadge}>🔥 Urgent</span>
                          ) : (
                            <span style={s.normalBadge}>Standard</span>
                          )}
                        </td>
                        <td style={{ ...s.td, fontSize: "12px", color: "#64748b" }}>{job.postedDate}</td>
                        <td style={{ ...s.td, textAlign: "right" }}>
                          <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                            {canEditJob && (
                              <button
                                onClick={() => openEditModal(job)}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "4px",
                                  background: "#eff6ff",
                                  border: "1px solid #bfdbfe",
                                  borderRadius: "8px",
                                  padding: "6px 10px",
                                  fontSize: "12px",
                                  fontWeight: 600,
                                  color: "#2563eb",
                                  cursor: "pointer",
                                }}
                              >
                                <Edit3 style={{ width: "12px", height: "12px" }} />
                                Edit
                              </button>
                            )}
                            {canDeleteJob && (
                              <button
                                onClick={() => setShowDeleteConfirm(job.id)}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "4px",
                                  background: "#fef2f2",
                                  border: "1px solid #fecaca",
                                  borderRadius: "8px",
                                  padding: "6px 10px",
                                  fontSize: "12px",
                                  fontWeight: 600,
                                  color: "#dc2626",
                                  cursor: "pointer",
                                }}
                              >
                                <Trash2 style={{ width: "12px", height: "12px" }} />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div style={s.overlay}>
            <div style={s.modal}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#fef2f2",
                  color: "#dc2626",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <Trash2 style={{ width: "24px", height: "24px" }} />
              </div>
              <h3 style={{ margin: "0 0 8px", fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>
                Delete this Job Posting?
              </h3>
              <p style={{ margin: "0 0 24px", fontSize: "13px", color: "#64748b", lineHeight: "1.5" }}>
                Are you sure? This job posting will be removed from both the admin table and the public candidate website.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <button onClick={() => setShowDeleteConfirm(null)} style={s.btnSecondary}>
                  Cancel
                </button>
                <button onClick={() => handleDelete(showDeleteConfirm)} style={s.btnDanger}>
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// ── Styles ────────────────────────────────────────────────────────

const s = {
  loadingContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#1e1b4b",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid rgba(255,255,255,0.2)",
    borderTopColor: "#6366f1",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "24px",
    flexWrap: "wrap" as const,
    gap: "16px",
  },
  pageTitle: {
    margin: 0,
    fontSize: "24px",
    fontWeight: 800,
    color: "#0f172a",
    letterSpacing: "-0.3px",
  },
  pageSubtitle: {
    margin: "4px 0 0",
    fontSize: "14px",
    color: "#64748b",
  },
  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "16px",
    marginBottom: "24px",
  },
  statCard: {
    background: "white",
    borderRadius: "16px",
    padding: "20px 24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
    border: "1px solid #f1f5f9",
  },
  card: {
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
    border: "1px solid #f1f5f9",
    overflow: "hidden",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "16px",
  },
  field: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px",
  },
  label: {
    fontSize: "12px",
    fontWeight: 700,
    color: "#334155",
    textTransform: "uppercase" as const,
  },
  input: {
    border: "1.5px solid #e2e8f0",
    borderRadius: "10px",
    padding: "10px 14px",
    fontSize: "14px",
    color: "#0f172a",
    background: "#fafafa",
    outline: "none",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    color: "#334155",
    cursor: "pointer",
  },
  msgBox: {
    padding: "12px 16px",
    borderRadius: "10px",
    fontSize: "13px",
    fontWeight: 600,
    border: "1px solid",
  },
  btnPrimary: {
    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    fontSize: "13px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(99,102,241,0.35)",
  },
  btnSecondary: {
    background: "white",
    color: "#374151",
    border: "1.5px solid #e5e7eb",
    borderRadius: "10px",
    padding: "10px 18px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
  },
  btnDanger: {
    background: "linear-gradient(135deg, #ef4444, #dc2626)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    fontSize: "13px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(239,68,68,0.35)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: "14px",
  },
  th: {
    textAlign: "left" as const,
    padding: "14px 16px",
    fontSize: "12px",
    fontWeight: 700,
    color: "#6b7280",
    textTransform: "uppercase" as const,
    background: "#f9fafb",
    borderBottom: "1px solid #f1f5f9",
  },
  td: {
    padding: "14px 16px",
    color: "#334155",
    borderBottom: "1px solid #f9fafb",
    verticalAlign: "middle" as const,
  },
  categoryTag: {
    background: "#eff6ff",
    color: "#2563eb",
    borderRadius: "6px",
    padding: "3px 8px",
    fontSize: "12px",
    fontWeight: 600,
    display: "inline-block",
  },
  urgentBadge: {
    background: "#fef2f2",
    color: "#dc2626",
    border: "1px solid #fecaca",
    borderRadius: "6px",
    padding: "3px 8px",
    fontSize: "11px",
    fontWeight: 800,
  },
  normalBadge: {
    background: "#f1f5f9",
    color: "#64748b",
    borderRadius: "6px",
    padding: "3px 8px",
    fontSize: "11px",
    fontWeight: 600,
  },
  overlay: {
    position: "fixed" as const,
    inset: 0,
    background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "20px",
  },
  modal: {
    background: "white",
    borderRadius: "20px",
    padding: "32px",
    maxWidth: "420px",
    width: "100%",
    textAlign: "center" as const,
    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
    border: "1px solid #e2e8f0",
  },
};
