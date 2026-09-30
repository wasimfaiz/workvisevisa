"use client";

/* ================================================================
   app/admin/dashboard/page.tsx  — Admin Dashboard
   Full CRUD UI for job postings. Auth-guarded via /api/auth/me.
   ================================================================ */

import { useState, useEffect, FormEvent, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  RefreshCw,
  Download,
  Trash2,
  Search,
  Calendar,
  User,
  Briefcase,
  Globe,
  CheckCircle2,
  Clock,
  Filter,
} from "lucide-react";

import { EmployeePermissions } from "@/lib/types/rbac";
import AdminSidebar from "@/components/AdminSidebar";

// ── Types ─────────────────────────────────────────────────────────

interface Job {
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

interface Inquiry {
  id: string;
  name: string;
  phone: string;
  country: string;
  occupation: string;
  status: "new" | "contacted" | "in_progress" | "converted" | "closed";
  notes?: string;
  source?: string;
  createdAt: string;
  updatedAt: string;
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

// ── Job Form Component (Outside parent to prevent remounting on typing) ──

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
            onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
            placeholder="e.g. Tile Mason & Helper"
          />
        </div>
        {/* Company */}
        <div style={s.field}>
          <label style={s.label}>Company / Project</label>
          <input
            style={s.input}
            value={form.company}
            onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
            placeholder="e.g. Dubai Project"
          />
        </div>
        {/* Country */}
        <div style={s.field}>
          <label style={s.label}>Country *</label>
          <input
            style={s.input}
            required
            value={form.country}
            onChange={e => setForm(f => ({ ...f, country: e.target.value }))}
            placeholder="e.g. Dubai, UAE"
          />
        </div>
        {/* Flag */}
        <div style={s.field}>
          <label style={s.label}>Flag Emoji</label>
          <input
            style={s.input}
            value={form.flag}
            onChange={e => setForm(f => ({ ...f, flag: e.target.value }))}
            placeholder="🇦🇪"
          />
        </div>
        {/* Category */}
        <div style={s.field}>
          <label style={s.label}>Category *</label>
          <input
            style={s.input}
            required
            value={form.category}
            onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
            placeholder="e.g. Construction & Civil"
          />
        </div>
        {/* Salary */}
        <div style={s.field}>
          <label style={s.label}>Salary *</label>
          <input
            style={s.input}
            required
            value={form.salary}
            onChange={e => setForm(f => ({ ...f, salary: e.target.value }))}
            placeholder="e.g. 1,200 – 1,800 AED"
          />
        </div>
        {/* Total Openings */}
        <div style={s.field}>
          <label style={s.label}>Total Openings *</label>
          <input
            style={s.input}
            type="number"
            min={1}
            required
            value={form.totalOpenings}
            onChange={e => setForm(f => ({ ...f, totalOpenings: Number(e.target.value) }))}
          />
        </div>
        {/* Visa Type */}
        <div style={s.field}>
          <label style={s.label}>Visa Type</label>
          <input
            style={s.input}
            value={form.visaType}
            onChange={e => setForm(f => ({ ...f, visaType: e.target.value }))}
            placeholder="Employment Visa"
          />
        </div>
        {/* Interview Date */}
        <div style={s.field}>
          <label style={s.label}>Interview / Selection</label>
          <input
            style={s.input}
            value={form.interviewDate}
            onChange={e => setForm(f => ({ ...f, interviewDate: e.target.value }))}
            placeholder="Direct Selection"
          />
        </div>
        {/* Venue */}
        <div style={s.field}>
          <label style={s.label}>Venue</label>
          <input
            style={s.input}
            value={form.venue}
            onChange={e => setForm(f => ({ ...f, venue: e.target.value }))}
            placeholder="WorkWise Visa Office"
          />
        </div>
        {/* Duty Hours */}
        <div style={s.field}>
          <label style={s.label}>Duty Hours</label>
          <input
            style={s.input}
            value={form.dutyHours}
            onChange={e => setForm(f => ({ ...f, dutyHours: e.target.value }))}
            placeholder="Standard Duty + Overtime"
          />
        </div>
        {/* Posted Date */}
        <div style={s.field}>
          <label style={s.label}>Posted Date</label>
          <input
            style={s.input}
            value={form.postedDate}
            onChange={e => setForm(f => ({ ...f, postedDate: e.target.value }))}
            placeholder="Sep 17, 2026"
          />
        </div>
      </div>

      {/* Perks */}
      <div style={s.field}>
        <label style={s.label}>Perks / Allowances <span style={{ color: "#6b7280", fontWeight: 400 }}>(one per line)</span></label>
        <textarea
          style={{ ...s.input, minHeight: "80px", resize: "vertical" } as React.CSSProperties}
          value={perksInput}
          onChange={e => setPerksInput(e.target.value)}
          placeholder={"5 Tile Mason (Salary: 1,800 AED)\n5 Helper (Salary: 1,200 AED)"}
        />
      </div>

      {/* Requirements */}
      <div style={s.field}>
        <label style={s.label}>Requirements <span style={{ color: "#6b7280", fontWeight: 400 }}>(one per line)</span></label>
        <textarea
          style={{ ...s.input, minHeight: "80px", resize: "vertical" } as React.CSSProperties}
          value={requirementsInput}
          onChange={e => setRequirementsInput(e.target.value)}
          placeholder={"Must have 2+ years experience\nValid passport required"}
        />
      </div>

      {/* Urgent toggle */}
      <label style={s.checkboxLabel}>
        <input
          type="checkbox"
          checked={form.urgent}
          onChange={e => setForm(f => ({ ...f, urgent: e.target.checked }))}
          style={{ width: "16px", height: "16px", accentColor: "#ef4444" }}
        />
        Mark as <span style={{ color: "#ef4444", fontWeight: 700 }}>Urgent Vacancy</span>
      </label>

      {formMessage && (
        <div style={{ ...s.msgBox, background: formMessage.type === "success" ? "#f0fdf4" : "#fef2f2", borderColor: formMessage.type === "success" ? "#86efac" : "#fca5a5", color: formMessage.type === "success" ? "#166534" : "#991b1b" }}>
          {formMessage.text}
        </div>
      )}

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
        <button type="submit" disabled={formLoading} style={{ ...s.btnPrimary, opacity: formLoading ? 0.7 : 1 }}>
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

// ── Component ─────────────────────────────────────────────────────

export default function AdminDashboardPage() {
  const router = useRouter();

  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"jobs" | "new" | "inquiries">("jobs");

  // Inquiries state
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [inquiriesLoading, setInquiriesLoading] = useState(false);
  const [inquirySearch, setInquirySearch] = useState("");
  const [inquiryFilter, setInquiryFilter] = useState<string>("all");
  const [deleteInquiryId, setDeleteInquiryId] = useState<string | null>(null);
  const [statusUpdatingId, setStatusUpdatingId] = useState<string | null>(null);

  // Modal state
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  // Form state
  const [form, setForm] = useState<Omit<Job, "id">>(EMPTY_JOB);
  const [perksInput, setPerksInput] = useState("");
  const [requirementsInput, setRequirementsInput] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Check URL query for tab
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("tab") === "inquiries") {
        setActiveTab("inquiries");
      }
    }
  }, []);

  // ── Auth Check ──────────────────────────────────────────────────

  useEffect(() => {
    async function checkAuth() {
      const res = await fetch("/api/auth/me");
      if (!res.ok) {
        router.replace("/admin");
        return;
      }
      const data = await res.json();
      setAdmin(data.user);
    }
    checkAuth();
  }, [router]);

  // ── Load Jobs & Inquiries ───────────────────────────────────────

  const loadJobs = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/jobs");
    const data = await res.json();
    if (data.success) setJobs(data.data);
    setLoading(false);
  }, []);

  const loadInquiries = useCallback(async () => {
    setInquiriesLoading(true);
    try {
      const res = await fetch("/api/inquiries");
      const data = await res.json();
      if (data.success) setInquiries(data.data || []);
    } catch (e) {
      console.error("Failed to load inquiries", e);
    } finally {
      setInquiriesLoading(false);
    }
  }, []);

  useEffect(() => {
    loadJobs();
    loadInquiries();
  }, [loadJobs, loadInquiries]);

  // ── Inquiry Handlers ────────────────────────────────────────────

  async function handleStatusChange(id: string, newStatus: string) {
    setStatusUpdatingId(id);
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) =>
          prev.map((inq) =>
            inq.id === id ? { ...inq, status: newStatus as Inquiry["status"] } : inq
          )
        );
      }
    } catch (e) {
      console.error("Failed to update status", e);
    } finally {
      setStatusUpdatingId(null);
    }
  }

  async function handleDeleteInquiry(id: string) {
    try {
      const res = await fetch(`/api/inquiries/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) => prev.filter((inq) => inq.id !== id));
        setDeleteInquiryId(null);
      }
    } catch (e) {
      console.error("Failed to delete inquiry", e);
    }
  }

  function exportInquiriesCSV() {
    if (inquiries.length === 0) return;
    const headers = ["Name", "Phone", "Target Destination", "Occupation", "Status", "Date Submitted"];
    const rows = filteredInquiries.map((i) => [
      `"${i.name.replace(/"/g, '""')}"`,
      `"${i.phone.replace(/"/g, '""')}"`,
      `"${i.country.replace(/"/g, '""')}"`,
      `"${i.occupation.replace(/"/g, '""')}"`,
      `"${i.status}"`,
      `"${new Date(i.createdAt).toLocaleString("en-IN")}"`,
    ]);
    const csvContent =
      "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `workwise_consultation_inquiries_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // ── Logout ──────────────────────────────────────────────────────

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/admin");
  }

  // ── Form Helpers ────────────────────────────────────────────────

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
    setPerksInput(job.perks.join("\n"));
    setRequirementsInput(job.requirements.join("\n"));
    setFormMessage(null);
  }

  function openNewForm() {
    setEditingJob(null);
    setForm({ ...EMPTY_JOB, postedDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) });
    setPerksInput("");
    setRequirementsInput("");
    setFormMessage(null);
    setActiveTab("new");
  }

  function getFormData() {
    return {
      ...form,
      perks: perksInput.split("\n").map(s => s.trim()).filter(Boolean),
      requirements: requirementsInput.split("\n").map(s => s.trim()).filter(Boolean),
    };
  }

  // ── CRUD Actions ────────────────────────────────────────────────

  async function handleCreate(e: FormEvent) {
    e.preventDefault();
    setFormLoading(true);
    setFormMessage(null);

    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(getFormData()),
    });
    const data = await res.json();

    if (data.success) {
      setFormMessage({ type: "success", text: "✅ Job posted successfully!" });
      setForm({ ...EMPTY_JOB });
      setPerksInput("");
      setRequirementsInput("");
      await loadJobs();
      setActiveTab("jobs");
    } else {
      setFormMessage({ type: "error", text: data.message || "Failed to post job." });
    }
    setFormLoading(false);
  }

  async function handleUpdate(e: FormEvent) {
    e.preventDefault();
    if (!editingJob) return;
    setFormLoading(true);
    setFormMessage(null);

    const res = await fetch(`/api/jobs/${editingJob.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(getFormData()),
    });
    const data = await res.json();

    if (data.success) {
      setFormMessage({ type: "success", text: "✅ Job updated successfully!" });
      setEditingJob(null);
      await loadJobs();
    } else {
      setFormMessage({ type: "error", text: data.message || "Failed to update job." });
    }
    setFormLoading(false);
  }

  async function handleDelete(id: string) {
    const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (data.success) {
      setShowDeleteConfirm(null);
      await loadJobs();
    }
  }

  // ── Stats ───────────────────────────────────────────────────────

  const urgentCount = jobs.filter(j => j.urgent).length;
  const totalOpenings = jobs.reduce((sum, j) => sum + j.totalOpenings, 0);

  const newInquiriesCount = inquiries.filter((i) => i.status === "new").length;
  const contactedCount = inquiries.filter((i) => i.status === "contacted" || i.status === "in_progress").length;
  const convertedCount = inquiries.filter((i) => i.status === "converted").length;
  const todayInquiriesCount = inquiries.filter((i) => {
    const today = new Date().toDateString();
    return new Date(i.createdAt).toDateString() === today;
  }).length;

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesFilter = inquiryFilter === "all" || inq.status === inquiryFilter;
    const q = inquirySearch.toLowerCase().trim();
    const matchesSearch =
      !q ||
      inq.name.toLowerCase().includes(q) ||
      inq.phone.toLowerCase().includes(q) ||
      inq.country.toLowerCase().includes(q) ||
      inq.occupation.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  // ── Render ──────────────────────────────────────────────────────

  if (!admin) {
    return (
      <div style={{ minHeight: "100vh", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "#6b7280", fontSize: "15px" }}>Verifying access…</div>
      </div>
    );
  }

  const isSuper = admin.role === "superadmin" || admin.email === "wasim@yastudy.com";
  const canViewJobs = isSuper || Boolean(admin.permissions?.jobs?.view !== false);
  const canCreateJob = isSuper || Boolean(admin.permissions?.jobs?.create !== false);
  const canEditJob = isSuper || Boolean(admin.permissions?.jobs?.edit !== false);
  const canDeleteJob = isSuper || Boolean(admin.permissions?.jobs?.delete !== false);
  const canViewInvoices = isSuper || Boolean(admin.permissions?.invoices?.view);
  const canViewInquiries = isSuper || Boolean(admin.permissions?.inquiries?.view !== false);
  const canViewEmployees = isSuper || Boolean(admin.permissions?.employees?.view);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f8fafc] font-sans">
      {/* Responsive Unified Admin Sidebar */}
      <AdminSidebar
        currentUser={admin}
        counts={{
          jobs: jobs.length,
          inquiries: inquiries.length,
          newInquiries: newInquiriesCount,
        }}
        onDashboardTabChange={(tab) => {
          setActiveTab(tab);
          setEditingJob(null);
        }}
        activeDashboardTab={activeTab}
      />

      {/* Main Content */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-screen">
        {/* Header */}
        <div style={s.header}>
          <div>
            <h1 style={s.pageTitle}>
              {editingJob
                ? "Edit Job Posting"
                : activeTab === "new"
                ? "Post New Job"
                : activeTab === "inquiries"
                ? "Consultation Inquiries & Leads"
                : "Job Listings"}
            </h1>
            <p style={s.pageSubtitle}>
              {editingJob
                ? `Editing: ${editingJob.title}`
                : activeTab === "new"
                ? "Create a new job vacancy"
                : activeTab === "inquiries"
                ? `${inquiries.length} total consultation requests · ${newInquiriesCount} new leads pending review`
                : `${jobs.length} active postings`}
            </p>
          </div>
          {activeTab === "jobs" && !editingJob && canCreateJob && (
            <button onClick={openNewForm} style={s.btnPrimary}>
              + Post New Job
            </button>
          )}
          {activeTab === "inquiries" && (
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button
                onClick={loadInquiries}
                disabled={inquiriesLoading}
                style={{
                  ...s.btnSecondary,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  padding: "10px 16px",
                }}
                title="Refresh leads"
              >
                <RefreshCw style={{ width: "14px", height: "14px" }} />
                Refresh
              </button>
              <button
                onClick={exportInquiriesCSV}
                disabled={inquiries.length === 0}
                style={{
                  ...s.btnPrimary,
                  background: "linear-gradient(135deg, #10b981, #059669)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  padding: "10px 18px",
                  boxShadow: "0 4px 12px rgba(16,185,129,0.3)",
                }}
              >
                <Download style={{ width: "14px", height: "14px" }} />
                Export CSV
              </button>
            </div>
          )}
        </div>

        {/* Stats Row */}
        {activeTab === "jobs" && !editingJob && (
          <div style={s.statsRow}>
            {[
              { label: "Total Postings", value: jobs.length, color: "#6366f1" },
              { label: "Urgent Vacancies", value: urgentCount, color: "#ef4444" },
              { label: "Total Openings", value: totalOpenings, color: "#10b981" },
            ].map(stat => (
              <div key={stat.label} style={s.statCard}>
                <div style={{ fontSize: "30px", fontWeight: 800, color: stat.color }}>{stat.value}</div>
                <div style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Edit Form */}
        {editingJob && (
          <div style={s.card}>
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

        {/* New Job Form */}
        {activeTab === "new" && !editingJob && (
          <div style={s.card}>
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
              submitLabel="🚀 Post Job"
              onCancel={() => setActiveTab("jobs")}
            />
          </div>
        )}

        {/* Jobs Table */}
        {activeTab === "jobs" && !editingJob && (
          <div style={s.card}>
            {loading ? (
              <div style={{ padding: "48px", textAlign: "center", color: "#6b7280" }}>Loading jobs…</div>
            ) : jobs.length === 0 ? (
              <div style={{ padding: "48px", textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "12px" }}>📋</div>
                <div style={{ color: "#374151", fontWeight: 600, fontSize: "16px" }}>No jobs posted yet</div>
                <div style={{ color: "#9ca3af", fontSize: "14px", marginTop: "4px" }}>Click "Post New Job" to add your first vacancy</div>
              </div>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table style={s.table}>
                  <thead>
                    <tr>
                      {["Job Title", "Country", "Category", "Salary", "Openings", "Urgent", "Posted", "Actions"].map(h => (
                        <th key={h} style={s.th}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job, idx) => (
                      <tr key={job.id} style={{ background: idx % 2 === 0 ? "white" : "#f9fafb" }}>
                        <td style={s.td}>
                          <div style={{ fontWeight: 600, color: "#111827" }}>{job.title}</div>
                          <div style={{ fontSize: "12px", color: "#9ca3af" }}>{job.company}</div>
                        </td>
                        <td style={s.td}>
                          <span style={{ fontSize: "16px" }}>{job.flag}</span> {job.country}
                        </td>
                        <td style={s.td}>
                          <span style={s.categoryTag}>{job.category}</span>
                        </td>
                        <td style={{ ...s.td, fontWeight: 600, color: "#059669" }}>{job.salary}</td>
                        <td style={{ ...s.td, textAlign: "center" as const, fontWeight: 700 }}>{job.totalOpenings}</td>
                        <td style={{ ...s.td, textAlign: "center" as const }}>
                          {job.urgent ? <span style={s.urgentBadge}>🔥 Urgent</span> : <span style={s.normalBadge}>Normal</span>}
                        </td>
                        <td style={{ ...s.td, fontSize: "12px", color: "#9ca3af" }}>{job.postedDate}</td>
                        <td style={s.td}>
                          <div style={{ display: "flex", gap: "8px" }}>
                            {canEditJob && (
                              <button onClick={() => openEditModal(job)} style={s.editBtn}>Edit</button>
                            )}
                            {canDeleteJob && (
                              <button onClick={() => setShowDeleteConfirm(job.id)} style={s.deleteBtn}>Delete</button>
                            )}
                            {!canEditJob && !canDeleteJob && (
                              <span style={{ fontSize: "12px", color: "#9ca3af" }}>Read only</span>
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

        {/* ══════════════════════════════════════════════════════════
            INQUIRIES / LEADS TAB VIEW
            ══════════════════════════════════════════════════════════ */}
        {activeTab === "inquiries" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Stats Row */}
            <div style={s.statsRow}>
              {[
                { label: "Total Leads", value: inquiries.length, color: "#6366f1" },
                { label: "New Leads", value: newInquiriesCount, color: "#10b981" },
                { label: "Contacted / In Progress", value: contactedCount, color: "#f59e0b" },
                { label: "Converted Clients", value: convertedCount, color: "#8b5cf6" },
                { label: "Received Today", value: todayInquiriesCount, color: "#06b6d4" },
              ].map((stat) => (
                <div key={stat.label} style={s.statCard}>
                  <div style={{ fontSize: "28px", fontWeight: 800, color: stat.color }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px", fontWeight: 600 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Search & Filter Bar */}
            <div style={{ ...s.card, padding: "16px 20px" }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "14px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* Search input */}
                <div style={{ position: "relative", flex: 1, minWidth: "260px" }}>
                  <Search
                    style={{
                      position: "absolute",
                      left: "14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "16px",
                      height: "16px",
                      color: "#9ca3af",
                      pointerEvents: "none",
                    }}
                  />
                  <input
                    type="text"
                    value={inquirySearch}
                    onChange={(e) => setInquirySearch(e.target.value)}
                    placeholder="Search by candidate name, phone, country, occupation..."
                    style={{ ...s.input, paddingLeft: "40px", fontSize: "13px", width: "100%" }}
                  />
                </div>

                {/* Filter buttons */}
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                  {[
                    { id: "all", label: `All (${inquiries.length})` },
                    { id: "new", label: `✨ New (${newInquiriesCount})` },
                    { id: "contacted", label: `📞 Contacted (${inquiries.filter((i) => i.status === "contacted").length})` },
                    { id: "in_progress", label: `⏳ In Progress (${inquiries.filter((i) => i.status === "in_progress").length})` },
                    { id: "converted", label: `🎉 Converted (${convertedCount})` },
                    { id: "closed", label: `Closed (${inquiries.filter((i) => i.status === "closed").length})` },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setInquiryFilter(tab.id)}
                      style={{
                        padding: "7px 14px",
                        borderRadius: "8px",
                        fontSize: "12px",
                        fontWeight: 700,
                        cursor: "pointer",
                        border: "1px solid",
                        transition: "all 0.15s",
                        background: inquiryFilter === tab.id ? "#6366f1" : "#f8fafc",
                        color: inquiryFilter === tab.id ? "white" : "#475569",
                        borderColor: inquiryFilter === tab.id ? "#6366f1" : "#e2e8f0",
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquiries Table Card */}
            <div style={s.card}>
              {inquiriesLoading ? (
                <div style={{ padding: "48px", textAlign: "center", color: "#6b7280" }}>
                  <RefreshCw className="animate-spin" style={{ width: "24px", height: "24px", margin: "0 auto 12px", color: "#6366f1" }} />
                  Loading consultation inquiries…
                </div>
              ) : filteredInquiries.length === 0 ? (
                <div style={{ padding: "56px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: "44px", marginBottom: "12px" }}>📬</div>
                  <div style={{ color: "#374151", fontWeight: 700, fontSize: "16px" }}>
                    No Consultation Inquiries Found
                  </div>
                  <p style={{ color: "#9ca3af", fontSize: "13px", marginTop: "4px", maxWidth: "460px", margin: "4px auto 0" }}>
                    {inquirySearch || inquiryFilter !== "all"
                      ? "No leads matched your search/filter criteria. Try clearing filters."
                      : "When candidates fill the 'Book Free Consultation' form on the website, they will appear here in real time."}
                  </p>
                  {(inquirySearch || inquiryFilter !== "all") && (
                    <button
                      onClick={() => {
                        setInquirySearch("");
                        setInquiryFilter("all");
                      }}
                      style={{ ...s.btnSecondary, marginTop: "16px", fontSize: "12px", padding: "8px 16px" }}
                    >
                      Clear Search Filters
                    </button>
                  )}
                </div>
              ) : (
                <div style={{ overflowX: "auto" }}>
                  <table style={s.table}>
                    <thead>
                      <tr>
                        <th style={{ ...s.th, width: "40px", textAlign: "center" }}>#</th>
                        <th style={s.th}>Candidate &amp; Submission Date</th>
                        <th style={s.th}>Phone &amp; Quick Connect</th>
                        <th style={s.th}>Target Destination</th>
                        <th style={s.th}>Current Occupation</th>
                        <th style={s.th}>Status</th>
                        <th style={{ ...s.th, textAlign: "right" }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredInquiries.map((inq, idx) => {
                        const cleanPhone = inq.phone.replace(/[^\d+]/g, "");
                        const waPhone = cleanPhone.startsWith("+")
                          ? cleanPhone.replace("+", "")
                          : cleanPhone.length === 10
                          ? `91${cleanPhone}`
                          : cleanPhone;

                        const formattedDate = new Date(inq.createdAt).toLocaleString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        });

                        const waMessage = encodeURIComponent(
                          `Hello ${inq.name}, greetings from WorkWise Visa! Thank you for requesting an overseas work visa consultation for ${inq.country}. We would love to assess your profile for ${inq.occupation}.`
                        );

                        return (
                          <tr key={inq.id} style={{ background: idx % 2 === 0 ? "white" : "#f9fafb" }}>
                            <td style={{ ...s.td, textAlign: "center", color: "#9ca3af", fontWeight: 700, fontSize: "12px" }}>
                              {idx + 1}
                            </td>
                            <td style={s.td}>
                              <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "14px" }}>
                                {inq.name}
                              </div>
                              <div
                                style={{
                                  fontSize: "11px",
                                  color: "#64748b",
                                  marginTop: "3px",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px",
                                }}
                              >
                                <Clock style={{ width: "12px", height: "12px", color: "#94a3b8" }} />
                                {formattedDate}
                              </div>
                            </td>
                            <td style={s.td}>
                              <div style={{ fontFamily: "monospace", fontWeight: 600, color: "#1e293b", fontSize: "13px" }}>
                                {inq.phone}
                              </div>
                              <div style={{ display: "flex", gap: "8px", marginTop: "6px" }}>
                                <a
                                  href={`https://wa.me/${waPhone}?text=${waMessage}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    background: "#ecfdf5",
                                    color: "#059669",
                                    border: "1px solid #a7f3d0",
                                    borderRadius: "6px",
                                    padding: "3px 8px",
                                    fontSize: "11px",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                  }}
                                  title="Chat on WhatsApp"
                                >
                                  <MessageCircle style={{ width: "12px", height: "12px" }} />
                                  WhatsApp
                                </a>
                                <a
                                  href={`tel:${cleanPhone}`}
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    background: "#eff6ff",
                                    color: "#2563eb",
                                    border: "1px solid #bfdbfe",
                                    borderRadius: "6px",
                                    padding: "3px 8px",
                                    fontSize: "11px",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                  }}
                                  title="Direct Call"
                                >
                                  <Phone style={{ width: "11px", height: "11px" }} />
                                  Call
                                </a>
                              </div>
                            </td>
                            <td style={s.td}>
                              <span
                                style={{
                                  background: "#f0fdf4",
                                  color: "#166534",
                                  border: "1px solid #bbf7d0",
                                  borderRadius: "6px",
                                  padding: "4px 10px",
                                  fontSize: "12px",
                                  fontWeight: 700,
                                  display: "inline-block",
                                }}
                              >
                                📍 {inq.country}
                              </span>
                            </td>
                            <td style={s.td}>
                              <div style={{ color: "#334155", fontSize: "13px", fontWeight: 600 }}>
                                {inq.occupation}
                              </div>
                            </td>
                            <td style={s.td}>
                              <select
                                value={inq.status}
                                disabled={statusUpdatingId === inq.id}
                                onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                                style={{
                                  padding: "5px 10px",
                                  borderRadius: "8px",
                                  fontSize: "12px",
                                  fontWeight: 700,
                                  cursor: "pointer",
                                  border: "1.5px solid",
                                  outline: "none",
                                  background:
                                    inq.status === "new"
                                      ? "#ecfdf5"
                                      : inq.status === "contacted"
                                      ? "#fef3c7"
                                      : inq.status === "in_progress"
                                      ? "#eff6ff"
                                      : inq.status === "converted"
                                      ? "#f3e8ff"
                                      : "#f1f5f9",
                                  color:
                                    inq.status === "new"
                                      ? "#047857"
                                      : inq.status === "contacted"
                                      ? "#b45309"
                                      : inq.status === "in_progress"
                                      ? "#1d4ed8"
                                      : inq.status === "converted"
                                      ? "#7e22ce"
                                      : "#64748b",
                                  borderColor:
                                    inq.status === "new"
                                      ? "#a7f3d0"
                                      : inq.status === "contacted"
                                      ? "#fde68a"
                                      : inq.status === "in_progress"
                                      ? "#bfdbfe"
                                      : inq.status === "converted"
                                      ? "#e9d5ff"
                                      : "#cbd5e1",
                                }}
                              >
                                <option value="new">✨ New Lead</option>
                                <option value="contacted">📞 Contacted</option>
                                <option value="in_progress">⏳ In Progress</option>
                                <option value="converted">🎉 Converted</option>
                                <option value="closed">Closed</option>
                              </select>
                            </td>
                            <td style={{ ...s.td, textAlign: "right" }}>
                              <button
                                onClick={() => setDeleteInquiryId(inq.id)}
                                style={{ ...s.deleteBtn, padding: "6px 12px" }}
                                title="Delete inquiry"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Delete Job Confirm Modal */}
      {showDeleteConfirm && (
        <div style={s.overlay}>
          <div style={s.modal}>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>🗑️</div>
            <h3 style={{ margin: "0 0 8px", fontSize: "18px", fontWeight: 700, color: "#111827" }}>Delete Job Posting?</h3>
            <p style={{ margin: "0 0 24px", color: "#6b7280", fontSize: "14px" }}>
              This action cannot be undone. The job will be permanently removed.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <button onClick={() => handleDelete(showDeleteConfirm)} style={s.btnDanger}>Yes, Delete</button>
              <button onClick={() => setShowDeleteConfirm(null)} style={s.btnSecondary}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Inquiry Confirm Modal */}
      {deleteInquiryId && (
        <div style={s.overlay}>
          <div style={s.modal}>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>🗑️</div>
            <h3 style={{ margin: "0 0 8px", fontSize: "18px", fontWeight: 700, color: "#111827" }}>
              Delete Consultation Lead?
            </h3>
            <p style={{ margin: "0 0 24px", color: "#6b7280", fontSize: "14px" }}>
              Are you sure you want to delete this consultation inquiry? This action cannot be undone.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <button onClick={() => handleDeleteInquiry(deleteInquiryId)} style={s.btnDanger}>
                Yes, Delete
              </button>
              <button onClick={() => setDeleteInquiryId(null)} style={s.btnSecondary}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        * { box-sizing: border-box; }
        input, textarea, button { font-family: 'Inter', sans-serif; }
        input:focus, textarea:focus { outline: none; border-color: #6366f1 !important; box-shadow: 0 0 0 3px rgba(99,102,241,0.15) !important; }
        button:hover { opacity: 0.9; }
        tr:hover td { background: #eff6ff !important; }
      `}</style>
    </div>
  );
}

// ── Styles ────────────────────────────────────────────────────────

const s: Record<string, React.CSSProperties> = {
  page: {
    display: "flex",
    minHeight: "100vh",
    background: "#f8fafc",
    fontFamily: "'Inter', sans-serif",
  },
  sidebar: {
    width: "260px",
    flexShrink: 0,
    background: "linear-gradient(180deg, #1e1b4b 0%, #312e81 100%)",
    display: "flex",
    flexDirection: "column",
    padding: "0",
    position: "sticky",
    top: 0,
    height: "100vh",
    overflowY: "auto",
  },
  sidebarLogo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "28px 24px 24px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    marginBottom: "8px",
  },
  sidebarIconWrap: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.95)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px",
    flexShrink: 0,
    boxShadow: "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,1)",
  },
  nav: {
    flex: 1,
    padding: "8px 12px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "none",
    background: "transparent",
    color: "rgba(255,255,255,0.6)",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    textAlign: "left",
    transition: "all 0.15s",
    width: "100%",
  },
  navItemActive: {
    background: "rgba(255,255,255,0.12)",
    color: "white",
    fontWeight: 600,
  },
  badge: {
    marginLeft: "auto",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "999px",
    padding: "2px 8px",
    fontSize: "11px",
    fontWeight: 700,
    color: "rgba(255,255,255,0.8)",
  },
  sidebarFooter: {
    padding: "16px 16px 24px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  adminInfo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  adminAvatar: {
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "15px",
    color: "white",
    flexShrink: 0,
  },
  logoutBtn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "100%",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "transparent",
    color: "rgba(255,255,255,0.5)",
    fontSize: "13px",
    cursor: "pointer",
    fontWeight: 500,
  },
  main: {
    flex: 1,
    padding: "32px",
    overflowY: "auto",
    maxHeight: "100vh",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "28px",
    flexWrap: "wrap",
    gap: "16px",
  },
  pageTitle: {
    margin: 0,
    fontSize: "24px",
    fontWeight: 800,
    color: "#111827",
    letterSpacing: "-0.3px",
  },
  pageSubtitle: {
    margin: "4px 0 0",
    fontSize: "14px",
    color: "#6b7280",
  },
  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: "16px",
    marginBottom: "28px",
  },
  statCard: {
    background: "white",
    borderRadius: "16px",
    padding: "20px 24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.06)",
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
    flexDirection: "column",
    gap: "20px",
    padding: "28px",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "16px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "13px",
    fontWeight: 600,
    color: "#374151",
  },
  input: {
    border: "1.5px solid #e5e7eb",
    borderRadius: "10px",
    padding: "10px 14px",
    fontSize: "14px",
    color: "#111827",
    background: "#fafafa",
    width: "100%",
    transition: "all 0.15s",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    color: "#374151",
    cursor: "pointer",
    fontWeight: 500,
  },
  msgBox: {
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1.5px solid",
    fontSize: "14px",
    fontWeight: 500,
  },
  btnPrimary: {
    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "12px 24px",
    fontSize: "14px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(99,102,241,0.35)",
    letterSpacing: "0.02em",
  },
  btnSecondary: {
    background: "white",
    color: "#374151",
    border: "1.5px solid #e5e7eb",
    borderRadius: "10px",
    padding: "12px 24px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
  },
  btnDanger: {
    background: "linear-gradient(135deg, #ef4444, #dc2626)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "12px 24px",
    fontSize: "14px",
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
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
    background: "#f9fafb",
    borderBottom: "1px solid #f1f5f9",
  },
  td: {
    padding: "14px 16px",
    color: "#374151",
    borderBottom: "1px solid #f9fafb",
    verticalAlign: "middle" as const,
  },
  categoryTag: {
    background: "#eff6ff",
    color: "#3b82f6",
    borderRadius: "6px",
    padding: "4px 10px",
    fontSize: "12px",
    fontWeight: 600,
    whiteSpace: "nowrap" as const,
  },
  urgentBadge: {
    background: "#fef2f2",
    color: "#ef4444",
    borderRadius: "6px",
    padding: "4px 10px",
    fontSize: "12px",
    fontWeight: 700,
  },
  normalBadge: {
    background: "#f3f4f6",
    color: "#9ca3af",
    borderRadius: "6px",
    padding: "4px 10px",
    fontSize: "12px",
    fontWeight: 600,
  },
  editBtn: {
    background: "#eff6ff",
    color: "#3b82f6",
    border: "none",
    borderRadius: "8px",
    padding: "7px 14px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
  },
  deleteBtn: {
    background: "#fef2f2",
    color: "#ef4444",
    border: "none",
    borderRadius: "8px",
    padding: "7px 14px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
  },
  overlay: {
    position: "fixed" as const,
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    backdropFilter: "blur(4px)",
  },
  modal: {
    background: "white",
    borderRadius: "20px",
    padding: "40px",
    maxWidth: "400px",
    width: "90%",
    textAlign: "center" as const,
    boxShadow: "0 24px 48px rgba(0,0,0,0.2)",
  },
};
