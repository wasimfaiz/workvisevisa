"use client";

/* ================================================================
   app/admin/dashboard/page.tsx — Clean & Optimized Executive Dashboard
   Streamlined, modern, role-aware dashboard featuring:
   - Dynamic KPI metric cards with subtle micro-badges
   - Interactive Pipeline Hub (Leads Funnel & Visa Milestones)
   - Balanced 2-Column Activity Hub with Tabbed Feeds
   - 100% role-based permission enforcement (Zero clutter)
   ================================================================ */

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  Briefcase,
  FileText,
  Users,
  Plus,
  RefreshCw,
  TrendingUp,
  UserPlus,
  Phone,
  MessageCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  Calendar,
  DollarSign,
  ArrowUpRight,
  ShieldCheck,
  Flame,
  Globe,
  ChevronRight,
  Receipt,
  UserCheck,
  MapPin,
  Compass,
  Layers,
  Sparkles,
  Award,
  Filter,
} from "lucide-react";

import { EmployeePermissions } from "@/lib/types/rbac";
import AdminSidebar from "@/components/AdminSidebar";

// ── Types ─────────────────────────────────────────────────────────

interface Inquiry {
  id: string;
  name: string;
  phone: string;
  country: string;
  occupation: string;
  status:
    | "new"
    | "interested"
    | "contacted"
    | "in_progress"
    | "payment_mode"
    | "converted"
    | "dnp"
    | "not_interested"
    | "closed";
  notes?: string;
  source?: string;
  assignedTo?: {
    id?: string | null;
    name?: string;
    email?: string;
    role?: string;
  };
  createdAt: string;
  updatedAt?: string;
}

interface ApplicationItem {
  id: string;
  applicationNo: string;
  candidateName: string;
  passportNumber?: string;
  targetCountry: string;
  jobTrade: string;
  currentStage: number;
  stageStatus: "in_progress" | "completed" | "on_hold" | "rejected";
  phone: string;
  createdAt: string;
}

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
  urgent: boolean;
  postedDate: string;
}

interface InvoiceItem {
  id: string;
  invoiceNumber: string;
  clientName: string;
  clientPhone: string;
  candidateCountry?: string;
  totalAmount: number;
  currency: string;
  status: "paid" | "partial" | "pending" | "cancelled";
  createdAt: string;
}

interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
}

interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
  permissions?: EmployeePermissions;
}

export default function AdminDashboardPage() {
  const router = useRouter();

  // Authentication & User state
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Data states
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [applications, setApplications] = useState<ApplicationItem[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [invoices, setInvoices] = useState<InvoiceItem[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Tab State for Activity Hub
  const [leftTab, setLeftTab] = useState<"inquiries" | "applications">("inquiries");
  const [rightTab, setRightTab] = useState<"jobs" | "invoices">("jobs");
  const [pipelineTab, setPipelineTab] = useState<"leads" | "milestones">("leads");

  // 1. Check Authentication
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
        } else {
          router.replace("/admin");
        }
      } catch {
        router.replace("/admin");
      } finally {
        setAuthLoading(false);
      }
    }
    checkAuth();
  }, [router]);

  // 2. Fetch All Dashboard Metrics & Data
  const loadDashboardData = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);

    try {
      const [inqRes, jobsRes, invRes, empRes, appRes] = await Promise.all([
        fetch("/api/inquiries", { cache: "no-store" }).catch(() => null),
        fetch("/api/jobs", { cache: "no-store" }).catch(() => null),
        fetch("/api/invoices", { cache: "no-store" }).catch(() => null),
        fetch("/api/employees", { cache: "no-store" }).catch(() => null),
        fetch("/api/applications", { cache: "no-store" }).catch(() => null),
      ]);

      if (inqRes && inqRes.ok) {
        const inqData = await inqRes.json();
        if (inqData.success && Array.isArray(inqData.data)) {
          setInquiries(inqData.data);
        }
      }

      if (jobsRes && jobsRes.ok) {
        const jobsData = await jobsRes.json();
        if (jobsData.success && Array.isArray(jobsData.data)) {
          setJobs(jobsData.data);
        }
      }

      if (invRes && invRes.ok) {
        const invData = await invRes.json();
        if (invData.success && Array.isArray(invData.data)) {
          setInvoices(invData.data);
        }
      }

      if (empRes && empRes.ok) {
        const empData = await empRes.json();
        if (empData.success && Array.isArray(empData.data)) {
          setEmployees(empData.data);
        }
      }

      if (appRes && appRes.ok) {
        const appData = await appRes.json();
        if (appData.success && Array.isArray(appData.data)) {
          setApplications(appData.data);
        }
      }
    } catch (err) {
      console.error("Error loading dashboard data:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    if (admin) {
      loadDashboardData();
    }
  }, [admin, loadDashboardData]);

  // 3. Computed Metrics & Stats
  const metrics = useMemo(() => {
    // Inquiries metrics
    const totalInquiries = inquiries.length;
    const newInquiries = inquiries.filter((i) => i.status === "new").length;
    const interestedInquiries = inquiries.filter((i) => i.status === "interested").length;
    const dnpInquiries = inquiries.filter((i) => i.status === "dnp").length;
    const inProgressInquiries = inquiries.filter((i) => i.status === "in_progress" || i.status === "contacted").length;
    const paymentModeInquiries = inquiries.filter((i) => i.status === "payment_mode").length;
    const convertedInquiries = inquiries.filter((i) => i.status === "converted").length;

    // Applications metrics
    const totalApplications = applications.length;
    const inProgressApplications = applications.filter((a) => a.currentStage <= 5 && a.stageStatus === "in_progress").length;
    const visaApprovedApplications = applications.filter((a) => a.currentStage === 6 && a.stageStatus !== "rejected").length;
    const deployedApplications = applications.filter((a) => a.currentStage === 7 && a.stageStatus === "completed").length;

    // Jobs metrics
    const totalJobs = jobs.length;
    const totalOpenings = jobs.reduce((sum, j) => sum + (j.totalOpenings || 1), 0);
    const urgentJobs = jobs.filter((j) => j.urgent).length;

    // Invoices metrics
    const totalInvoices = invoices.length;
    const totalBilled = invoices.reduce((sum, inv) => sum + (inv.totalAmount || 0), 0);
    const paidInvoices = invoices.filter((inv) => inv.status === "paid").length;

    // Employees metrics
    const totalEmployees = employees.length;
    const activeEmployees = employees.filter((e) => e.status === "active").length;

    return {
      totalInquiries,
      newInquiries,
      interestedInquiries,
      dnpInquiries,
      inProgressInquiries,
      paymentModeInquiries,
      convertedInquiries,
      totalApplications,
      activeApplications: inProgressApplications,
      inProgressApplications,
      visaApprovedApplications,
      deployedApplications,
      totalJobs,
      totalOpenings,
      urgentJobs,
      totalInvoices,
      totalBilled,
      paidInvoices,
      totalEmployees,
      activeEmployees,
    };
  }, [inquiries, applications, jobs, invoices, employees]);

  // Permissions
  const isSuper = admin?.role === "superadmin" || admin?.email === "wasim@yastudy.com";
  const canViewInquiries = isSuper || Boolean(admin?.permissions?.inquiries?.view !== false);
  const canViewApplications = isSuper || Boolean(admin?.permissions?.applications?.view !== false);
  const canViewJobs = isSuper || Boolean(admin?.permissions?.jobs?.view !== false);
  const canViewInvoices = isSuper || Boolean(admin?.permissions?.invoices?.view);
  const canViewEmployees = isSuper || Boolean(admin?.permissions?.employees?.view);

  const canCreateInquiries = canViewInquiries && (isSuper || Boolean(admin?.permissions?.inquiries?.edit !== false));
  const canCreateApplications = canViewApplications && (isSuper || Boolean(admin?.permissions?.applications?.create !== false));
  const canCreateJobs = canViewJobs && (isSuper || Boolean(admin?.permissions?.jobs?.create !== false));
  const canCreateInvoices = canViewInvoices && (isSuper || Boolean(admin?.permissions?.invoices?.create !== false));

  // Sync default tabs with available permissions
  useEffect(() => {
    if (!canViewInquiries && canViewApplications) {
      setLeftTab("applications");
      setPipelineTab("milestones");
    } else if (canViewInquiries && !canViewApplications) {
      setLeftTab("inquiries");
      setPipelineTab("leads");
    }
    if (!canViewJobs && canViewInvoices) {
      setRightTab("invoices");
    } else if (canViewJobs && !canViewInvoices) {
      setRightTab("jobs");
    }
  }, [canViewInquiries, canViewApplications, canViewJobs, canViewInvoices]);

  // Status Badge styling helper
  const getStatusBadge = (status: Inquiry["status"]) => {
    switch (status) {
      case "new":
        return { bg: "#ecfdf5", text: "#047857", border: "#a7f3d0", label: "New" };
      case "interested":
        return { bg: "#f0fdf4", text: "#15803d", border: "#86efac", label: "Interested" };
      case "dnp":
        return { bg: "#fff1f2", text: "#be123c", border: "#fecdd3", label: "DNP" };
      case "contacted":
        return { bg: "#fffbeb", text: "#b45309", border: "#fde68a", label: "Contacted" };
      case "in_progress":
        return { bg: "#eff6ff", text: "#1d4ed8", border: "#bfdbfe", label: "In Progress" };
      case "payment_mode":
        return { bg: "#fdf4ff", text: "#a21caf", border: "#f5d0fe", label: "Payment" };
      case "converted":
        return { bg: "#f5f3ff", text: "#6d28d9", border: "#ddd6fe", label: "Converted" };
      case "not_interested":
        return { bg: "#fef2f2", text: "#b91c1c", border: "#fecaca", label: "Not Int." };
      case "closed":
        return { bg: "#f1f5f9", text: "#64748b", border: "#cbd5e1", label: "Closed" };
      default:
        return { bg: "#f8fafc", text: "#475569", border: "#e2e8f0", label: status };
    }
  };

  const getStageName = (stage: number) => {
    switch (stage) {
      case 1: return "1. Registration";
      case 2: return "2. Doc Audit / PCC";
      case 3: return "3. Offer Letter";
      case 4: return "4. Work Permit";
      case 5: return "5. VFS / Embassy";
      case 6: return "6. Visa Ready";
      case 7: return "7. Flown / Deployed";
      default: return `Stage ${stage}`;
    }
  };

  if (authLoading || !admin) {
    return (
      <div style={s.loadingContainer}>
        <div style={s.spinner} />
        <p style={{ marginTop: "14px", color: "white", fontSize: "14px", fontWeight: 600 }}>
          Securing workspace...
        </p>
      </div>
    );
  }

  const roleName = isSuper
    ? "Super Admin"
    : admin.role.charAt(0).toUpperCase() + admin.role.slice(1);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f8fafc] font-sans">
      {/* ── RESPONSIVE UNIFIED SIDEBAR ── */}
      <AdminSidebar
        currentUser={admin}
        counts={{
          applications: applications.length,
          jobs: jobs.length,
          inquiries: inquiries.length,
          newInquiries: metrics.newInquiries,
          invoices: invoices.length,
          employees: employees.length,
        }}
      />

      {/* ── MAIN EXECUTIVE DASHBOARD ── */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-screen space-y-6">
        
        {/* 1. Header Banner & Quick Actions */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Welcome back, {admin.name}! 👋
              </h1>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                {roleName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {new Date().toLocaleDateString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              · Operational Live Control Center
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={() => loadDashboardData(true)}
              disabled={refreshing || loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 transition-all border border-slate-200 cursor-pointer disabled:opacity-50"
              title="Sync Live Data"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-indigo-600" : "text-slate-600"}`} />
              <span>{refreshing ? "Syncing..." : "Sync"}</span>
            </button>

            {canCreateApplications && (
              <Link
                href="/admin/applications"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-sm transition-all"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>+ Enroll Candidate</span>
              </Link>
            )}

            {canCreateInquiries && (
              <Link
                href="/admin/inquiry"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-sm transition-all"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>+ Add Lead</span>
              </Link>
            )}

            {canCreateJobs && (
              <Link
                href="/admin/jobs"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-sm transition-all"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Post Job</span>
              </Link>
            )}

            {canCreateInvoices && (
              <Link
                href="/admin/invoice"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span>Invoice</span>
              </Link>
            )}
          </div>
        </div>

        {/* 2. Primary KPI Cards Grid (Compact & Role-Aware) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Applications Tracker */}
          {canViewApplications && (
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Visa Tracker
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    {metrics.totalApplications}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                  {metrics.visaApprovedApplications} Visa Ready
                </span>
                <Link
                  href="/admin/applications"
                  className="font-bold text-purple-600 hover:text-purple-700 inline-flex items-center gap-0.5"
                >
                  Manage <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Card 2: Leads & Inquiries */}
          {canViewInquiries && (
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Candidate Leads
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    {metrics.totalInquiries}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                  {metrics.newInquiries} New Leads
                </span>
                <Link
                  href="/admin/inquiry"
                  className="font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-0.5"
                >
                  View All <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Card 3: Job Demands */}
          {canViewJobs && (
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Active Jobs
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    {metrics.totalJobs}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded-md">
                  {metrics.totalOpenings} Open Vacancies
                </span>
                <Link
                  href="/admin/jobs"
                  className="font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-0.5"
                >
                  Demands <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Card 4: Invoices & Revenue */}
          {canViewInvoices && (
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Total Invoiced
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    ₹{metrics.totalBilled.toLocaleString("en-IN")}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
                  <Receipt className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-pink-700 font-bold bg-pink-50 px-2 py-0.5 rounded-md">
                  {metrics.paidInvoices} Settled
                </span>
                <Link
                  href="/admin/invoice"
                  className="font-bold text-pink-600 hover:text-pink-700 inline-flex items-center gap-0.5"
                >
                  Billing <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* 3. Interactive Operations Pipeline Hub */}
        {(canViewApplications || canViewInquiries) && (
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                  Conversion &amp; Milestone Pipelines
                </h2>
              </div>

              {/* Selector Tabs if user has both permissions */}
              {canViewApplications && canViewInquiries && (
                <div className="inline-flex rounded-xl bg-slate-100 p-1 self-start">
                  <button
                    onClick={() => setPipelineTab("leads")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      pipelineTab === "leads"
                        ? "bg-white text-emerald-700 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Candidate Leads Pipeline
                  </button>
                  <button
                    onClick={() => setPipelineTab("milestones")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      pipelineTab === "milestones"
                        ? "bg-white text-purple-700 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Visa Milestones (Stages 1-7)
                  </button>
                </div>
              )}
            </div>

            {/* Leads Pipeline Body */}
            {(pipelineTab === "leads" && canViewInquiries) && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
                {[
                  { label: "New Leads", count: metrics.newInquiries, bg: "bg-emerald-50/70", text: "text-emerald-800", border: "border-emerald-200/70" },
                  { label: "Interested", count: metrics.interestedInquiries, bg: "bg-teal-50/70", text: "text-teal-800", border: "border-teal-200/70" },
                  { label: "In Progress", count: metrics.inProgressInquiries, bg: "bg-blue-50/70", text: "text-blue-800", border: "border-blue-200/70" },
                  { label: "Payment Mode", count: metrics.paymentModeInquiries, bg: "bg-fuchsia-50/70", text: "text-fuchsia-800", border: "border-fuchsia-200/70" },
                  { label: "Converted", count: metrics.convertedInquiries, bg: "bg-indigo-50/70", text: "text-indigo-800", border: "border-indigo-200/70" },
                  { label: "DNP (No Answer)", count: metrics.dnpInquiries, bg: "bg-rose-50/70", text: "text-rose-800", border: "border-rose-200/70" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`p-3.5 rounded-xl border ${item.border} ${item.bg} text-center transition-all hover:scale-[1.02]`}
                  >
                    <div className={`text-xl font-black ${item.text}`}>{item.count}</div>
                    <div className="text-[11px] font-bold text-slate-600 mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Visa Milestones Body */}
            {(pipelineTab === "milestones" && canViewApplications) && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                {[
                  { label: "Total Cases Enrolled", count: metrics.totalApplications, color: "text-slate-800", bg: "bg-slate-50", border: "border-slate-200" },
                  { label: "In Verification / Audit", count: metrics.inProgressApplications, color: "text-blue-700", bg: "bg-blue-50/70", border: "border-blue-200" },
                  { label: "Visa Approved & Stamped", count: metrics.visaApprovedApplications, color: "text-emerald-700", bg: "bg-emerald-50/70", border: "border-emerald-200" },
                  { label: "Successfully Deployed", count: metrics.deployedApplications, color: "text-purple-700", bg: "bg-purple-50/70", border: "border-purple-200" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`p-3.5 rounded-xl border ${item.border} ${item.bg} text-center transition-all hover:scale-[1.02]`}
                  >
                    <div className={`text-2xl font-black ${item.color}`}>{item.count}</div>
                    <div className="text-[11px] font-bold text-slate-600 mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 4. Tabbed Real-Time Activity Hub (Clean 2-Column Responsive Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* ── LEFT COLUMN: Candidate Operations (Leads vs Applications) ── */}
          {(canViewInquiries || canViewApplications) && (
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
              {/* Header with Switcher Tabs */}
              <div className="p-4 sm:px-5 sm:py-4 border-b border-slate-100 flex items-center justify-between gap-3 bg-slate-50/50">
                <div className="flex items-center gap-2">
                  {canViewInquiries && canViewApplications ? (
                    <div className="inline-flex rounded-xl bg-slate-200/70 p-1">
                      <button
                        onClick={() => setLeftTab("inquiries")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          leftTab === "inquiries"
                            ? "bg-white text-emerald-700 shadow-xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Recent Leads ({inquiries.length})
                      </button>
                      <button
                        onClick={() => setLeftTab("applications")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          leftTab === "applications"
                            ? "bg-white text-purple-700 shadow-xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Active Visa Cases ({applications.length})
                      </button>
                    </div>
                  ) : (
                    <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                      {canViewInquiries ? (
                        <>
                          <MessageSquare className="w-4 h-4 text-emerald-600" />
                          Recent Candidate Inquiries
                        </>
                      ) : (
                        <>
                          <Compass className="w-4 h-4 text-purple-600" />
                          Active Visa Applications
                        </>
                      )}
                    </h3>
                  )}
                </div>

                <Link
                  href={leftTab === "inquiries" && canViewInquiries ? "/admin/inquiry" : "/admin/applications"}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-0.5 shrink-0"
                >
                  Full View →
                </Link>
              </div>

              {/* Body: Leads List */}
              {leftTab === "inquiries" && canViewInquiries && (
                <div className="p-4 divide-y divide-slate-100 flex-1">
                  {loading ? (
                    <div className="py-10 text-center text-xs text-slate-400 font-medium">
                      Loading inquiries...
                    </div>
                  ) : inquiries.length === 0 ? (
                    <div className="py-10 text-center text-xs text-slate-400 font-medium">
                      No candidate inquiries registered yet.
                    </div>
                  ) : (
                    inquiries.slice(0, 5).map((inq) => {
                      const cleanPhone = inq.phone.replace(/[^\d+]/g, "");
                      const waPhone = cleanPhone.startsWith("+")
                        ? cleanPhone.replace("+", "")
                        : cleanPhone.length === 10
                        ? `91${cleanPhone}`
                        : cleanPhone;

                      const waMessage = encodeURIComponent(
                        `Hello ${inq.name}, greetings from WorkWise Visa! We received your overseas consultation request for ${inq.country}.`
                      );
                      const badge = getStatusBadge(inq.status);

                      return (
                        <div
                          key={inq.id}
                          className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-3 hover:bg-slate-50/70 p-2 rounded-xl transition-all"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-bold text-sm text-slate-900 truncate">
                                {inq.name}
                              </span>
                              <span
                                className="text-[10px] font-extrabold px-2 py-0.5 rounded-full border"
                                style={{ background: badge.bg, color: badge.text, borderColor: badge.border }}
                              >
                                {badge.label}
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 mt-1 flex items-center gap-2 flex-wrap">
                              <span className="inline-flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-slate-400" />
                                {inq.country}
                              </span>
                              <span>·</span>
                              <span>{inq.occupation || "General"}</span>
                              {inq.assignedTo?.name && (
                                <>
                                  <span>·</span>
                                  <span className="text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded text-[10px] font-bold">
                                    {inq.assignedTo.name}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>

                          <a
                            href={`https://wa.me/${waPhone}?text=${waMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-white bg-[#25d366] hover:bg-[#20ba59] shadow-xs shrink-0 transition-all"
                            title="Chat on WhatsApp"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">WhatsApp</span>
                          </a>
                        </div>
                      );
                    })
                  )}
                </div>
              )}

              {/* Body: Applications List */}
              {leftTab === "applications" && canViewApplications && (
                <div className="p-4 divide-y divide-slate-100 flex-1">
                  {loading ? (
                    <div className="py-10 text-center text-xs text-slate-400 font-medium">
                      Loading candidate cases...
                    </div>
                  ) : applications.length === 0 ? (
                    <div className="py-10 text-center text-xs text-slate-400 font-medium">
                      No candidate cases enrolled yet.
                    </div>
                  ) : (
                    applications.slice(0, 5).map((app) => (
                      <div
                        key={app.id}
                        className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-3 hover:bg-slate-50/70 p-2 rounded-xl transition-all"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-slate-900 truncate">
                              {app.candidateName}
                            </span>
                            <span className="font-mono text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                              {app.applicationNo}
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 mt-1 flex items-center gap-2 flex-wrap">
                            <span>{app.jobTrade}</span>
                            <span>·</span>
                            <span>{app.targetCountry}</span>
                            {app.passportNumber && (
                              <>
                                <span>·</span>
                                <span className="font-mono text-slate-400">Pass: {app.passportNumber}</span>
                              </>
                            )}
                          </div>
                        </div>

                        <span
                          className={`text-[11px] font-bold px-2.5 py-1 rounded-lg shrink-0 border ${
                            app.currentStage === 7
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : app.currentStage === 6
                              ? "bg-teal-50 text-teal-700 border-teal-200"
                              : "bg-indigo-50 text-indigo-700 border-indigo-200"
                          }`}
                        >
                          {getStageName(app.currentStage)}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          )}

          {/* ── RIGHT COLUMN: Job Demands & Invoicing Snapshot ── */}
          {(canViewJobs || canViewInvoices) && (
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
              {/* Header with Switcher Tabs */}
              <div className="p-4 sm:px-5 sm:py-4 border-b border-slate-100 flex items-center justify-between gap-3 bg-slate-50/50">
                <div className="flex items-center gap-2">
                  {canViewJobs && canViewInvoices ? (
                    <div className="inline-flex rounded-xl bg-slate-200/70 p-1">
                      <button
                        onClick={() => setRightTab("jobs")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          rightTab === "jobs"
                            ? "bg-white text-blue-700 shadow-xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Active Demands ({jobs.length})
                      </button>
                      <button
                        onClick={() => setRightTab("invoices")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          rightTab === "invoices"
                            ? "bg-white text-pink-700 shadow-xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Recent Invoices ({invoices.length})
                      </button>
                    </div>
                  ) : (
                    <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                      {canViewJobs ? (
                        <>
                          <Briefcase className="w-4 h-4 text-blue-600" />
                          Active Overseas Demands
                        </>
                      ) : (
                        <>
                          <Receipt className="w-4 h-4 text-pink-600" />
                          Recent Invoices &amp; Billing
                        </>
                      )}
                    </h3>
                  )}
                </div>

                <Link
                  href={rightTab === "jobs" && canViewJobs ? "/admin/jobs" : "/admin/invoice"}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-0.5 shrink-0"
                >
                  Full View →
                </Link>
              </div>

              {/* Body: Jobs List */}
              {rightTab === "jobs" && canViewJobs && (
                <div className="p-4 divide-y divide-slate-100 flex-1">
                  {loading ? (
                    <div className="py-10 text-center text-xs text-slate-400 font-medium">
                      Loading job openings...
                    </div>
                  ) : jobs.length === 0 ? (
                    <div className="py-10 text-center text-xs text-slate-400 font-medium">
                      No active overseas job demands posted yet.
                    </div>
                  ) : (
                    jobs.slice(0, 5).map((job) => (
                      <div
                        key={job.id}
                        className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-3 hover:bg-slate-50/70 p-2 rounded-xl transition-all"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-base">{job.flag}</span>
                            <span className="font-bold text-sm text-slate-900 truncate">
                              {job.title}
                            </span>
                            {job.urgent && (
                              <span className="text-[10px] font-black bg-rose-50 text-rose-600 border border-rose-200 px-1.5 py-0.5 rounded">
                                URGENT
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                            <span>{job.country}</span>
                            <span>·</span>
                            <span>{job.totalOpenings || 1} Openings</span>
                            <span>·</span>
                            <span className="font-bold text-emerald-600">{job.salary}</span>
                          </div>
                        </div>

                        <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg shrink-0">
                          {job.visaType}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* Body: Invoices List */}
              {rightTab === "invoices" && canViewInvoices && (
                <div className="p-4 divide-y divide-slate-100 flex-1">
                  {loading ? (
                    <div className="py-10 text-center text-xs text-slate-400 font-medium">
                      Loading billing records...
                    </div>
                  ) : invoices.length === 0 ? (
                    <div className="py-10 text-center text-xs text-slate-400 font-medium">
                      No invoices generated yet.
                    </div>
                  ) : (
                    invoices.slice(0, 5).map((inv) => (
                      <div
                        key={inv.id}
                        className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-3 hover:bg-slate-50/70 p-2 rounded-xl transition-all"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-slate-900 truncate">
                              {inv.clientName}
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            Inv #{inv.invoiceNumber || inv.id.substring(0, 8)} ·{" "}
                            {new Date(inv.createdAt).toLocaleDateString("en-IN")}
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="font-black text-sm text-slate-900">
                            ₹{(inv.totalAmount || 0).toLocaleString("en-IN")}
                          </div>
                          <span
                            className={`text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded ${
                              inv.status === "paid"
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-amber-50 text-amber-700"
                            }`}
                          >
                            {inv.status || "paid"}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// ── Fallback Spinner Styles ───────────────────────────────────────

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
    width: "36px",
    height: "36px",
    border: "3px solid rgba(255,255,255,0.2)",
    borderTopColor: "#818cf8",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
};

