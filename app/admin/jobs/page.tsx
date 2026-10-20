"use client";

/* ================================================================
   app/admin/jobs/page.tsx — WorkWise Visa Job Postings & Demands Management
   Clean, modern, responsive CRUD interface for Admin & Counselors.
   ================================================================ */

import { useState, useEffect, FormEvent, useCallback } from "react";
import { useRouter } from "next/navigation";
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
  LayoutGrid,
  List,
  Eye,
  Share2,
  MapPin,
  Check,
  ChevronRight,
  ShieldAlert,
  Sparkles,
  Award,
  Layers,
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
  dutyHours: "8 hrs/day + Overtime",
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
    <form onSubmit={onSubmit} className="space-y-5 sm:space-y-8">
      {/* Section 1: Basic Information */}
      <div className="bg-slate-50/70 p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 space-y-3.5 sm:space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0">
            1
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">Basic Job &amp; Employer Information</h4>
            <p className="text-xs text-slate-500">Destination country, job trade and sponsoring employer</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {/* Title */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Job Title / Trade <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              placeholder="e.g. Heavy Truck Driver / CNC Operator / Welder"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 font-medium"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Company / Employer
            </label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
              placeholder="e.g. Trans Logistics Sp. z o.o."
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Destination Country */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Destination Country <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.country}
              onChange={(e) => setForm((f) => ({ ...f, country: e.target.value }))}
              placeholder="e.g. Poland, Romania, Croatia, UAE"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 font-medium"
            />
          </div>

          {/* Country Flag / Code */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Country Flag / Code
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={form.flag}
                onChange={(e) => setForm((f) => ({ ...f, flag: e.target.value }))}
                placeholder="e.g. 🇵🇱 or PL"
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
              />
              <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                {["🇵🇱", "🇷🇴", "🇭🇷", "🇦🇪", "🇸🇦", "🇶🇦"].map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, flag: emoji }))}
                    className="p-2 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg text-sm transition-colors shrink-0"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Industry / Category <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.category}
              onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
              placeholder="e.g. Transportation, Construction, Warehouse"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Compensation & Terms */}
      <div className="bg-slate-50/70 p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 space-y-3.5 sm:space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0">
            2
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">Compensation, Vacancies &amp; Work Hours</h4>
            <p className="text-xs text-slate-500">Salary structure, total openings and duty shift details</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {/* Salary */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Salary &amp; Currency <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.salary}
              onChange={(e) => setForm((f) => ({ ...f, salary: e.target.value }))}
              placeholder="e.g. 4,500 – 6,000 PLN / 1,800 AED"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-emerald-700 font-bold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Total Openings */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Total Openings / Vacancies <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min={1}
              required
              value={form.totalOpenings || ""}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  totalOpenings: Math.max(1, parseInt(e.target.value.replace(/\D/g, "") || "1", 10)),
                }))
              }
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-indigo-700 font-bold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          {/* Visa Type */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Visa Type
            </label>
            <input
              type="text"
              value={form.visaType}
              onChange={(e) => setForm((f) => ({ ...f, visaType: e.target.value }))}
              placeholder="e.g. Employment Visa / Work Permit"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          {/* Duty Hours */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Duty Hours &amp; Shift
            </label>
            <input
              type="text"
              value={form.dutyHours}
              onChange={(e) => setForm((f) => ({ ...f, dutyHours: e.target.value }))}
              placeholder="e.g. 8 hrs/day + Overtime / 6 Days"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Selection Process & Urgency */}
      <div className="bg-slate-50/70 p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 space-y-3.5 sm:space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm shrink-0">
            3
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">Selection Mode &amp; Urgency Status</h4>
            <p className="text-xs text-slate-500">Interview mode, processing office location and priority flag</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {/* Interview Mode */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Interview / Selection Process
            </label>
            <input
              type="text"
              value={form.interviewDate}
              onChange={(e) => setForm((f) => ({ ...f, interviewDate: e.target.value }))}
              placeholder="e.g. Direct Document Selection / Client Video"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          {/* Processing Venue */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Processing Office / Venue
            </label>
            <input
              type="text"
              value={form.venue}
              onChange={(e) => setForm((f) => ({ ...f, venue: e.target.value }))}
              placeholder="e.g. WorkWise Visa Office, New Delhi"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          {/* Urgent Toggle Card */}
          <div className="flex items-center sm:col-span-2 lg:col-span-1">
            <label className={`w-full flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
              form.urgent
                ? "bg-red-50/80 border-red-200 text-red-900 shadow-sm"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}>
              <input
                type="checkbox"
                checked={form.urgent}
                onChange={(e) => setForm((f) => ({ ...f, urgent: e.target.checked }))}
                className="w-5 h-5 rounded text-red-600 focus:ring-red-500 border-slate-300 accent-red-600 shrink-0"
              />
              <div>
                <div className="text-xs font-bold flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Mark as Urgent Demand</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Highlights with Hot badge on candidate website
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Section 4: Perks & Requirements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
        {/* Perks */}
        <div className="bg-slate-50/70 p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 space-y-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Perks &amp; Benefits <span className="text-slate-400 font-normal lowercase">(one per line)</span>
          </label>
          <textarea
            rows={4}
            value={perksInput}
            onChange={(e) => setPerksInput(e.target.value)}
            placeholder={"Free Accommodation & Transport provided\nOvertime Allowance with 1.5x pay\nMedical Insurance & Work Permit renewal covered"}
            className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-mono leading-relaxed resize-none"
          />
        </div>

        {/* Requirements */}
        <div className="bg-slate-50/70 p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 space-y-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Requirements &amp; Eligibility <span className="text-slate-400 font-normal lowercase">(one per line)</span>
          </label>
          <textarea
            rows={4}
            value={requirementsInput}
            onChange={(e) => setRequirementsInput(e.target.value)}
            placeholder={"Valid Indian Passport with min 2 years validity\nMinimum 1-2 years heavy vehicle driving experience\nBasic English/Hindi communication skills"}
            className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-mono leading-relaxed resize-none"
          />
        </div>
      </div>

      {/* Feedback Messages */}
      {formMessage && (
        <div
          className={`p-3.5 sm:p-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 border ${
            formMessage.type === "success"
              ? "bg-emerald-50 border-emerald-200 text-emerald-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          {formMessage.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          )}
          <span>{formMessage.text}</span>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 pt-3.5 sm:pt-4 border-t border-slate-200">
        {(editingJob || onCancel) && (
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm text-center"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={formLoading}
          className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md shadow-indigo-500/20 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {formLoading && <RefreshCw className="w-4 h-4 animate-spin shrink-0" />}
          <span>{formLoading ? "Saving…" : submitLabel}</span>
        </button>
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
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [search, setSearch] = useState("");
  const [countryFilter, setCountryFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [urgentOnly, setUrgentOnly] = useState(false);

  // Modals & Drawers
  const [previewJob, setPreviewJob] = useState<Job | null>(null);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

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
        if (data.user) {
          setAdmin(data.user);
          const isSuper = data.user.role === "superadmin" || data.user.email === "wasim@yastudy.com";
          if (!isSuper && data.user.permissions?.jobs?.view === false) {
            router.replace("/admin/dashboard");
            return;
          }
        } else {
          router.replace("/admin");
        }
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
      company: job.company || "",
      country: job.country,
      flag: job.flag || "🌍",
      category: job.category,
      salary: job.salary,
      totalOpenings: job.totalOpenings || 1,
      visaType: job.visaType || "Employment Visa",
      interviewDate: job.interviewDate || "Direct Selection",
      venue: job.venue || "WorkWise Visa Office",
      dutyHours: job.dutyHours || "8 hrs/day + Overtime",
      perks: job.perks || [],
      requirements: job.requirements || [],
      postedDate: job.postedDate || new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      urgent: Boolean(job.urgent),
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

  function handleCopyShare(job: Job) {
    const text = `🔥 *${job.urgent ? "URGENT DEMAND: " : ""}${job.title}*\n📍 *Country:* ${job.flag} ${job.country}\n💰 *Salary:* ${job.salary}\n👥 *Vacancies:* ${job.totalOpenings || 1} Positions\n🕒 *Duty:* ${job.dutyHours}\n🏢 *Employer:* ${job.company || "WorkWise Direct"}\n\nApply now at WorkWise Visa!\nContact: +91 99999 99999`;
    navigator.clipboard.writeText(text);
    setCopiedId(job.id);
    setTimeout(() => setCopiedId(null), 2500);
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
        setTimeout(() => setActiveTab("jobs"), 1000);
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
        if (previewJob?.id === id) setPreviewJob(null);
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
  const uniqueCategories = Array.from(new Set(jobs.map((j) => j.category).filter(Boolean))).sort();

  const filteredJobs = jobs.filter((job) => {
    if (urgentOnly && !job.urgent) return false;
    if (countryFilter !== "all" && job.country !== countryFilter) return false;
    if (categoryFilter !== "all" && job.category !== categoryFilter) return false;
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] text-white">
        <div className="w-10 h-10 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4" />
        <p className="text-sm font-medium text-slate-400">Verifying authorization...</p>
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
      <main className="flex-1 min-w-0 p-3 sm:p-6 lg:p-8 overflow-x-hidden lg:overflow-y-auto lg:max-h-screen space-y-4 sm:space-y-6">
        {/* Header Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3.5 sm:gap-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {editingJob
                  ? "Edit Job Demand"
                  : activeTab === "new"
                  ? "Create New Overseas Demand"
                  : "Job Postings & Demands"}
              </h1>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-indigo-100 text-indigo-800 border border-indigo-200">
                <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
                {jobs.length} Active Listings
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {editingJob
                ? `Modifying vacancy specifications for ${editingJob.title}`
                : activeTab === "new"
                ? "Publish a new international visa vacancy to the public portal"
                : `${jobs.length} active demand listings · ${totalOpenings} verified open visa positions`}
            </p>
          </div>

          {/* Top Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
            {activeTab === "jobs" && !editingJob && (
              <>
                <button
                  onClick={loadJobs}
                  disabled={loading}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200 cursor-pointer disabled:opacity-50"
                  title="Sync latest job listings"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-indigo-600" : "text-slate-600"}`} />
                  <span>{loading ? "Syncing..." : "Sync"}</span>
                </button>

                <div className="bg-slate-200/70 p-1 rounded-xl flex items-center">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded-lg transition-all ${
                      viewMode === "grid"
                        ? "bg-white text-indigo-600 shadow-sm font-bold"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                    title="Grid Card View"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("table")}
                    className={`p-1.5 rounded-lg transition-all ${
                      viewMode === "table"
                        ? "bg-white text-indigo-600 shadow-sm font-bold"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                    title="Table View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {canCreateJob && (
                  <button
                    onClick={openNewForm}
                    className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-sm transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>+ Post New Job</span>
                  </button>
                )}
              </>
            )}

            {activeTab === "new" && (
              <button
                onClick={() => setActiveTab("jobs")}
                className="px-3.5 sm:px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-all"
              >
                ← Back to All Postings
              </button>
            )}
          </div>
        </div>

        {/* 4 KPI Metric Cards */}
        {activeTab === "jobs" && !editingJob && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-4 sm:mb-6">
            {/* Total Demands */}
            <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Total Demands</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
              <div className="text-xl sm:text-3xl font-black text-slate-900">{jobs.length}</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-1">Active overseas demands</div>
            </div>

            {/* Total Openings */}
            <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Total Openings</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
              <div className="text-xl sm:text-3xl font-black text-emerald-600">{totalOpenings}</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-1">Verified vacancies open</div>
            </div>

            {/* Urgent Demands */}
            <div
              onClick={() => setUrgentOnly((prev) => !prev)}
              className={`p-3.5 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                urgentOnly
                  ? "bg-red-50/90 border-red-300 ring-2 ring-red-500/20 shadow-sm"
                  : "bg-white border-slate-200/80 shadow-sm hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-500">Urgent Demands</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                  <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
              <div className="text-xl sm:text-3xl font-black text-red-600">{urgentCount}</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-1 truncate">
                {urgentOnly ? "✓ Filter active" : "View urgent only"}
              </div>
            </div>

            {/* Destination Countries */}
            <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Countries</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
              <div className="text-xl sm:text-3xl font-black text-sky-600">{uniqueCountries.length}</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-1 truncate">
                {uniqueCountries.slice(0, 3).join(", ") || "Global destinations"}
              </div>
            </div>
          </div>
        )}

        {/* Edit Modal / Inline Card */}
        {editingJob && (
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-8 mb-6">
            <div className="flex items-center justify-between pb-4 mb-5 sm:mb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Edit3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">Edit Job Demand Details</h3>
                  <p className="text-xs text-slate-500">Update salary, vacancies, country specs, or eligibility</p>
                </div>
              </div>
              <button
                onClick={() => setEditingJob(null)}
                className="p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
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

        {/* Create New Job Card */}
        {activeTab === "new" && !editingJob && (
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-8 mb-6">
            <div className="pb-4 mb-5 sm:mb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 shrink-0">
                  <Plus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">Publish New Overseas Job Demand</h3>
                  <p className="text-xs text-slate-500">
                    Provide accurate demand details to attract verified candidates
                  </p>
                </div>
              </div>
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

        {/* Jobs List Section */}
        {activeTab === "jobs" && !editingJob && (
          <div className="space-y-4">
            {/* Filter Bar */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3.5 sm:p-4">
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search job title, trade, country, employer..."
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full lg:w-auto">
                  {/* Country Filter */}
                  <select
                    value={countryFilter}
                    onChange={(e) => setCountryFilter(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 font-medium focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all cursor-pointer"
                  >
                    <option value="all">All Countries ({uniqueCountries.length})</option>
                    {uniqueCountries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>

                  {/* Category Filter */}
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 font-medium focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all cursor-pointer"
                  >
                    <option value="all">All Categories ({uniqueCategories.length})</option>
                    {uniqueCategories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Quick Filter Tags */}
              <div className="flex items-center gap-1.5 sm:gap-2 mt-3 pt-3 border-t border-slate-100 overflow-x-auto pb-1 text-xs">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] flex-shrink-0">
                  Quick Filter:
                </span>
                <button
                  onClick={() => {
                    setCountryFilter("all");
                    setCategoryFilter("all");
                    setUrgentOnly(false);
                    setSearch("");
                  }}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all flex-shrink-0 ${
                    countryFilter === "all" && categoryFilter === "all" && !urgentOnly && !search
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  All ({jobs.length})
                </button>
                <button
                  onClick={() => setUrgentOnly((u) => !u)}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all flex items-center gap-1 flex-shrink-0 ${
                    urgentOnly
                      ? "bg-red-600 text-white shadow-sm"
                      : "bg-red-50 text-red-600 hover:bg-red-100 border border-red-200"
                  }`}
                >
                  <Flame className="w-3 h-3" />
                  <span>Urgent Only ({urgentCount})</span>
                </button>
                {uniqueCountries.slice(0, 4).map((country) => (
                  <button
                    key={country}
                    onClick={() => setCountryFilter((c) => (c === country ? "all" : country))}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-all flex-shrink-0 ${
                      countryFilter === country
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Loading & Empty States */}
            {loading ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center">
                <div className="w-10 h-10 border-4 border-indigo-500/20 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4" />
                <p className="text-sm font-semibold text-slate-700">Loading overseas job listings...</p>
                <p className="text-xs text-slate-400 mt-1">Fetching demands from database</p>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-slate-800">No Job Demands Found</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 mb-5">
                  {search || countryFilter !== "all" || categoryFilter !== "all" || urgentOnly
                    ? "Try adjusting or clearing your filters to see more results."
                    : "No jobs are currently active. Click 'Post New Job' to publish your first overseas demand."}
                </p>
                {(search || countryFilter !== "all" || categoryFilter !== "all" || urgentOnly) && (
                  <button
                    onClick={() => {
                      setSearch("");
                      setCountryFilter("all");
                      setCategoryFilter("all");
                      setUrgentOnly(false);
                    }}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            ) : viewMode === "grid" ? (
              /* Grid View */
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5 sm:gap-4">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                  >
                    {/* Card Header */}
                    <div className="p-4 sm:p-5 pb-3">
                      <div className="flex items-start justify-between gap-3 mb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xl" title={job.country}>
                            {job.flag || "🌍"}
                          </span>
                          <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 font-semibold text-xs rounded-md">
                            {job.country}
                          </span>
                        </div>
                        {job.urgent ? (
                          <span className="px-2 py-0.5 bg-red-50 text-red-600 border border-red-200 text-[11px] font-bold rounded-full flex items-center gap-1 animate-pulse">
                            <Flame className="w-3 h-3 text-red-500" />
                            <span>Urgent</span>
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[11px] font-medium rounded-full">
                            Standard
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-indigo-600 transition-colors line-clamp-1">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                        <Building className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span className="truncate">{job.company || "Direct Employer Recruitment"}</span>
                      </div>
                    </div>

                    {/* Card Body / Specs */}
                    <div className="px-4 sm:px-5 py-3 bg-slate-50/60 border-y border-slate-100 grid grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Salary</span>
                        <span className="font-bold text-emerald-600 text-xs sm:text-sm truncate block">{job.salary}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Openings</span>
                        <span className="font-bold text-indigo-600 text-xs sm:text-sm truncate block">{job.totalOpenings || 1} Positions</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Category</span>
                        <span className="text-slate-700 font-medium truncate block">{job.category}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Duty Hours</span>
                        <span className="text-slate-700 font-medium truncate block">{job.dutyHours || "8 hrs + OT"}</span>
                      </div>
                    </div>

                    {/* Perks Preview */}
                    {job.perks && job.perks.length > 0 && (
                      <div className="px-4 sm:px-5 py-2.5 flex flex-wrap gap-1.5">
                        {job.perks.slice(0, 2).map((p, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-medium rounded-md border border-emerald-100 truncate max-w-[140px]"
                          >
                            ✓ {p}
                          </span>
                        ))}
                        {job.perks.length > 2 && (
                          <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-medium rounded-md">
                            +{job.perks.length - 2} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Card Actions Footer */}
                    <div className="p-3 px-4 sm:px-5 bg-white flex items-center justify-between border-t border-slate-100">
                      <button
                        onClick={() => setPreviewJob(job)}
                        className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview</span>
                      </button>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleCopyShare(job)}
                          className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                          title="Copy Shareable Job Summary"
                        >
                          {copiedId === job.id ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Share2 className="w-4 h-4" />
                          )}
                        </button>

                        {canEditJob && (
                          <button
                            onClick={() => openEditModal(job)}
                            className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
                            title="Edit Job Demand"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                        )}

                        {canDeleteJob && (
                          <button
                            onClick={() => setShowDeleteConfirm(job.id)}
                            className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                            title="Delete Demand"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Table View with Mobile Fallback Cards */
              <div>
                {/* Mobile Cards for Table View (< lg) */}
                <div className="block lg:hidden space-y-3">
                  {filteredJobs.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-base">{job.flag || "🌍"}</span>
                            <span className="font-extrabold text-sm text-slate-900">{job.title}</span>
                            {job.urgent && (
                              <span className="px-2 py-0.5 bg-red-50 text-red-600 border border-red-200 text-[10px] font-bold rounded-full">
                                🔥 Urgent
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {job.company || "Direct Recruitment"} · {job.country}
                          </div>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => setPreviewJob(job)}
                            className="p-1.5 text-slate-500 hover:text-slate-800 bg-slate-100 rounded-lg"
                            title="View"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          {canEditJob && (
                            <button
                              onClick={() => openEditModal(job)}
                              className="p-1.5 text-indigo-600 bg-indigo-50 rounded-lg"
                              title="Edit"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {canDeleteJob && (
                            <button
                              onClick={() => setShowDeleteConfirm(job.id)}
                              className="p-1.5 text-red-500 bg-red-50 rounded-lg"
                              title="Delete"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-2.5 rounded-xl">
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">Salary</span>
                          <span className="font-bold text-emerald-600">{job.salary}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">Openings</span>
                          <span className="font-bold text-indigo-600">{job.totalOpenings || 1} Positions</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop Table (lg+) */}
                <div className="hidden lg:block bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          <th className="py-3.5 px-4">Job Title &amp; Employer</th>
                          <th className="py-3.5 px-4">Country</th>
                          <th className="py-3.5 px-4">Category</th>
                          <th className="py-3.5 px-4">Salary</th>
                          <th className="py-3.5 px-4 text-center">Openings</th>
                          <th className="py-3.5 px-4 text-center">Status</th>
                          <th className="py-3.5 px-4">Posted Date</th>
                          <th className="py-3.5 px-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredJobs.map((job) => (
                          <tr key={job.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-3.5 px-4">
                              <div className="font-bold text-slate-900">{job.title}</div>
                              <div className="text-xs text-slate-500">{job.company || "Direct Recruitment"}</div>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-1.5">
                                <span>{job.flag || "🌍"}</span>
                                <span className="font-medium text-slate-700">{job.country}</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs rounded-md font-medium">
                                {job.category}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 font-bold text-emerald-600">{job.salary}</td>
                            <td className="py-3.5 px-4 text-center font-bold text-indigo-600">
                              {job.totalOpenings || 1}
                            </td>
                            <td className="py-3.5 px-4 text-center">
                              {job.urgent ? (
                                <span className="px-2 py-0.5 bg-red-50 text-red-600 border border-red-200 text-[10px] font-bold rounded-full">
                                  🔥 Urgent
                                </span>
                              ) : (
                                <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-medium rounded-full">
                                  Standard
                                </span>
                              )}
                            </td>
                            <td className="py-3.5 px-4 text-xs text-slate-500">{job.postedDate}</td>
                            <td className="py-3.5 px-4 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => setPreviewJob(job)}
                                  className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                                  title="View Details"
                                >
                                  <Eye className="w-4 h-4" />
                                </button>
                                {canEditJob && (
                                  <button
                                    onClick={() => openEditModal(job)}
                                    className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
                                    title="Edit"
                                  >
                                    <Edit3 className="w-4 h-4" />
                                  </button>
                                )}
                                {canDeleteJob && (
                                  <button
                                    onClick={() => setShowDeleteConfirm(job.id)}
                                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                    title="Delete"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Job Detail Preview Slide-Over Drawer */}
        {previewJob && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex justify-end">
            <div className="w-full max-w-xl bg-white h-full max-h-[100dvh] overflow-y-auto overscroll-contain shadow-2xl flex flex-col justify-between">
              {/* Drawer Header */}
              <div>
                <div className="p-4 sm:p-6 border-b border-slate-200 bg-slate-50/70 flex items-start justify-between gap-3 sm:gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="text-2xl">{previewJob.flag || "🌍"}</span>
                      <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-md">
                        {previewJob.country}
                      </span>
                      {previewJob.urgent && (
                        <span className="px-2.5 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-md flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5 text-red-600" />
                          <span>Urgent Hot Demand</span>
                        </span>
                      )}
                    </div>
                    <h2 className="text-lg sm:text-xl font-black text-slate-900">{previewJob.title}</h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Employer: {previewJob.company || "WorkWise Direct Contracting"}
                    </p>
                  </div>
                  <button
                    onClick={() => setPreviewJob(null)}
                    className="p-2 text-slate-400 hover:text-slate-700 bg-white border border-slate-200 rounded-xl transition-colors shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Drawer Body */}
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 text-sm">
                  {/* Key Stats Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 p-3.5 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">Salary</span>
                      <span className="font-black text-emerald-600 text-sm sm:text-base">{previewJob.salary}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">Vacancies</span>
                      <span className="font-black text-indigo-600 text-sm sm:text-base">
                        {previewJob.totalOpenings || 1} Open
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">Visa Category</span>
                      <span className="font-bold text-slate-800 text-xs truncate block">{previewJob.visaType}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">Duty Hours</span>
                      <span className="font-medium text-slate-800 text-xs truncate block">{previewJob.dutyHours}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">Selection</span>
                      <span className="font-medium text-slate-800 text-xs truncate block">{previewJob.interviewDate}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">Office Venue</span>
                      <span className="font-medium text-slate-800 text-xs truncate block">{previewJob.venue}</span>
                    </div>
                  </div>

                  {/* Perks & Benefits */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-emerald-600" />
                      <span>Included Perks &amp; Company Benefits</span>
                    </h4>
                    {previewJob.perks && previewJob.perks.length > 0 ? (
                      <div className="space-y-1.5">
                        {previewJob.perks.map((p, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 bg-emerald-50/60 border border-emerald-100 rounded-xl text-xs font-medium text-emerald-900 flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-slate-400 italic">No specific perks listed.</p>
                    )}
                  </div>

                  {/* Requirements & Eligibility */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-indigo-600" />
                      <span>Requirements &amp; Candidate Criteria</span>
                    </h4>
                    {previewJob.requirements && previewJob.requirements.length > 0 ? (
                      <div className="space-y-1.5">
                        {previewJob.requirements.map((req, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-medium text-slate-800 flex items-center gap-2"
                          >
                            <ChevronRight className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-slate-400 italic">Standard trade experience required.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-3.5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
                <button
                  onClick={() => handleCopyShare(previewJob)}
                  className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  {copiedId === previewJob.id ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      <span>Copy WhatsApp Text</span>
                    </>
                  )}
                </button>

                {canEditJob && (
                  <button
                    onClick={() => {
                      const j = previewJob;
                      setPreviewJob(null);
                      openEditModal(j);
                    }}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-500/20 flex items-center justify-center gap-1.5"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Edit Demand</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 max-w-md w-full shadow-2xl text-center border border-slate-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Trash2 className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">Delete this Job Demand?</h3>
              <p className="text-xs text-slate-500 mb-5 sm:mb-6 leading-relaxed">
                This vacancy listing will be permanently removed from both the administrative console and the public overseas jobs portal.
              </p>
              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(null)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(showDeleteConfirm)}
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-red-500/20"
                >
                  Yes, Delete Demand
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
