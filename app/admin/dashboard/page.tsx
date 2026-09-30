"use client";

/* ================================================================
   app/admin/dashboard/page.tsx — Executive & Role-Aware Admin Dashboard
   Provides a comprehensive 360° overview across:
   - Leads & Consultations Pipeline (with 1-click WhatsApp & Status tracking)
   - Active Job Demands & Visa Openings
   - Invoices & Billing Operations
   - Team & Staff Access Management
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
  createdAt: string;
  updatedAt?: string;
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
  const [jobs, setJobs] = useState<Job[]>([]);
  const [invoices, setInvoices] = useState<InvoiceItem[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

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
      const [inqRes, jobsRes, invRes, empRes] = await Promise.all([
        fetch("/api/inquiries", { cache: "no-store" }).catch(() => null),
        fetch("/api/jobs", { cache: "no-store" }).catch(() => null),
        fetch("/api/invoices", { cache: "no-store" }).catch(() => null),
        fetch("/api/employees", { cache: "no-store" }).catch(() => null),
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
      totalJobs,
      totalOpenings,
      urgentJobs,
      totalInvoices,
      totalBilled,
      paidInvoices,
      totalEmployees,
      activeEmployees,
    };
  }, [inquiries, jobs, invoices, employees]);

  // Helper for Status Badge styling
  const getStatusBadge = (status: Inquiry["status"]) => {
    switch (status) {
      case "new":
        return { bg: "#ecfdf5", text: "#047857", border: "#a7f3d0", label: "✨ New Lead" };
      case "interested":
        return { bg: "#f0fdf4", text: "#15803d", border: "#86efac", label: "👍 Interested" };
      case "dnp":
        return { bg: "#fff1f2", text: "#be123c", border: "#fecdd3", label: "📵 DNP" };
      case "contacted":
        return { bg: "#fffbeb", text: "#b45309", border: "#fde68a", label: "📞 Contacted" };
      case "in_progress":
        return { bg: "#eff6ff", text: "#1d4ed8", border: "#bfdbfe", label: "⏳ In Progress" };
      case "payment_mode":
        return { bg: "#fdf4ff", text: "#a21caf", border: "#f5d0fe", label: "💳 Payment Mode" };
      case "converted":
        return { bg: "#f5f3ff", text: "#6d28d9", border: "#ddd6fe", label: "🎉 Converted" };
      case "not_interested":
        return { bg: "#fef2f2", text: "#b91c1c", border: "#fecaca", label: "❌ Not Interested" };
      case "closed":
        return { bg: "#f1f5f9", text: "#64748b", border: "#cbd5e1", label: "📁 Closed" };
      default:
        return { bg: "#f8fafc", text: "#475569", border: "#e2e8f0", label: status };
    }
  };

  if (authLoading || !admin) {
    return (
      <div style={s.loadingContainer}>
        <div style={s.spinner} />
        <p style={{ marginTop: "12px", color: "white", fontSize: "14px" }}>
          Verifying dashboard access...
        </p>
      </div>
    );
  }

  const isSuper = admin?.role === "superadmin" || admin?.email === "wasim@yastudy.com";
  const canViewInquiries = isSuper || Boolean(admin?.permissions?.inquiries?.view !== false);
  const canViewJobs = isSuper || Boolean(admin?.permissions?.jobs?.view !== false);
  const canViewInvoices = isSuper || Boolean(admin?.permissions?.invoices?.view);
  const canViewEmployees = isSuper || Boolean(admin?.permissions?.employees?.view);

  // Role formatted label
  const roleName = isSuper
    ? "Super Admin"
    : admin.role.charAt(0).toUpperCase() + admin.role.slice(1);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f8fafc] font-sans">
      {/* ── RESPONSIVE UNIFIED SIDEBAR ── */}
      <AdminSidebar
        currentUser={admin}
        counts={{
          jobs: jobs.length,
          inquiries: inquiries.length,
          newInquiries: metrics.newInquiries,
          invoices: invoices.length,
          employees: employees.length,
        }}
      />

      {/* ── MAIN EXECUTIVE DASHBOARD ── */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-screen">
        {/* Top Welcome Header */}
        <div style={s.header}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <h1 style={s.pageTitle}>Welcome back, {admin.name}! 👋</h1>
              <span
                style={{
                  background: isSuper ? "linear-gradient(135deg, #6366f1, #4f46e5)" : "#3b82f6",
                  color: "white",
                  padding: "3px 10px",
                  borderRadius: "999px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  boxShadow: "0 2px 6px rgba(99,102,241,0.25)",
                }}
              >
                {roleName}
              </span>
            </div>
            <p style={s.pageSubtitle}>
              {new Date().toLocaleDateString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              · Real-time operational overview of WorkWise Visa
            </p>
          </div>

          {/* Quick Actions Bar */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => loadDashboardData(true)}
              disabled={refreshing || loading}
              style={{ ...s.btnSecondary, display: "flex", alignItems: "center", gap: "6px" }}
              title="Refresh Dashboard"
            >
              <RefreshCw className={refreshing ? "animate-spin" : ""} style={{ width: "14px", height: "14px" }} />
              <span>{refreshing ? "Syncing..." : "Refresh"}</span>
            </button>

            {canViewInquiries && (
              <Link
                href="/admin/inquiry"
                style={{
                  ...s.btnPrimary,
                  background: "linear-gradient(135deg, #10b981, #059669)",
                  boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                }}
              >
                <UserPlus style={{ width: "15px", height: "15px" }} />
                <span>+ Add Lead</span>
              </Link>
            )}

            {canViewJobs && (
              <Link
                href="/admin/jobs"
                style={{
                  ...s.btnPrimary,
                  background: "linear-gradient(135deg, #4f46e5, #6366f1)",
                  boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                }}
              >
                <Briefcase style={{ width: "15px", height: "15px" }} />
                <span>Post Job Demand</span>
              </Link>
            )}

            {canViewInvoices && (
              <Link
                href="/admin/invoice"
                style={{
                  ...s.btnSecondary,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                }}
              >
                <FileText style={{ width: "15px", height: "15px" }} />
                <span>Create Invoice</span>
              </Link>
            )}
          </div>
        </div>

        {/* ── TOP 4 EXECUTIVE KPI CARDS ── */}
        <div style={s.kpiGrid}>
          {/* 1. Leads & Inquiries */}
          <div style={s.kpiCard}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <span style={s.kpiLabel}>Candidate Leads &amp; Inquiries</span>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "#0f172a", marginTop: "4px" }}>
                  {metrics.totalInquiries}
                </div>
              </div>
              <div style={{ ...s.iconBadge, background: "#ecfdf5", color: "#059669" }}>
                <MessageSquare style={{ width: "20px", height: "20px" }} />
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "14px" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, background: "#dcfce7", color: "#166534", padding: "2px 8px", borderRadius: "6px" }}>
                ✨ {metrics.newInquiries} New
              </span>
              <span style={{ fontSize: "11px", fontWeight: 700, background: "#f0fdf4", color: "#15803d", padding: "2px 8px", borderRadius: "6px" }}>
                👍 {metrics.interestedInquiries} Interested
              </span>
              <span style={{ fontSize: "11px", fontWeight: 700, background: "#fdf4ff", color: "#a21caf", padding: "2px 8px", borderRadius: "6px" }}>
                💳 {metrics.paymentModeInquiries} Payment
              </span>
              <span style={{ fontSize: "11px", fontWeight: 700, background: "#f5f3ff", color: "#6d28d9", padding: "2px 8px", borderRadius: "6px" }}>
                🎉 {metrics.convertedInquiries} Converted
              </span>
            </div>

            <Link href="/admin/inquiry" style={s.cardLink}>
              Manage Inquiries &amp; Leads <ArrowUpRight style={{ width: "14px", height: "14px" }} />
            </Link>
          </div>

          {/* 2. Active Job Demands */}
          <div style={s.kpiCard}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <span style={s.kpiLabel}>Active Job Demands</span>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "#0f172a", marginTop: "4px" }}>
                  {metrics.totalJobs}
                </div>
              </div>
              <div style={{ ...s.iconBadge, background: "#eff6ff", color: "#2563eb" }}>
                <Briefcase style={{ width: "20px", height: "20px" }} />
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "14px", fontSize: "12px", color: "#475569" }}>
              <div style={{ fontWeight: 700, color: "#2563eb" }}>
                {metrics.totalOpenings} Total Open Openings
              </div>
              {metrics.urgentJobs > 0 && (
                <div style={{ fontWeight: 700, color: "#dc2626", display: "flex", alignItems: "center", gap: "2px" }}>
                  <Flame style={{ width: "13px", height: "13px" }} /> {metrics.urgentJobs} Urgent Demands
                </div>
              )}
            </div>

            <Link href="/admin/jobs" style={s.cardLink}>
              View Job Demands &amp; Openings <ArrowUpRight style={{ width: "14px", height: "14px" }} />
            </Link>
          </div>

          {/* 3. Invoices & Billing */}
          <div style={s.kpiCard}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <span style={s.kpiLabel}>Invoices &amp; Billing</span>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "#0f172a", marginTop: "4px" }}>
                  {metrics.totalInvoices}
                </div>
              </div>
              <div style={{ ...s.iconBadge, background: "#fdf4ff", color: "#c026d3" }}>
                <Receipt style={{ width: "20px", height: "20px" }} />
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "14px", fontSize: "12px", color: "#475569" }}>
              <div style={{ fontWeight: 700, color: "#059669" }}>
                ₹{metrics.totalBilled.toLocaleString("en-IN")} Total Billed
              </div>
              <div style={{ color: "#64748b" }}>
                ({metrics.paidInvoices} Paid / Cleared)
              </div>
            </div>

            <Link href="/admin/invoice" style={s.cardLink}>
              Open Invoice Generator <ArrowUpRight style={{ width: "14px", height: "14px" }} />
            </Link>
          </div>

          {/* 4. Team & Employees Access */}
          <div style={s.kpiCard}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <span style={s.kpiLabel}>Staff &amp; Access Roles</span>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "#0f172a", marginTop: "4px" }}>
                  {metrics.totalEmployees || 1}
                </div>
              </div>
              <div style={{ ...s.iconBadge, background: "#f5f3ff", color: "#7c3aed" }}>
                <Users style={{ width: "20px", height: "20px" }} />
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "14px", fontSize: "12px", color: "#475569" }}>
              <div style={{ fontWeight: 700, color: "#7c3aed" }}>
                {metrics.activeEmployees || 1} Active Team Members
              </div>
              <div style={{ color: "#64748b" }}>
                Role-based RBAC protected
              </div>
            </div>

            {canViewEmployees ? (
              <Link href="/admin/employees" style={s.cardLink}>
                Manage Staff &amp; Roles <ArrowUpRight style={{ width: "14px", height: "14px" }} />
              </Link>
            ) : (
              <div style={{ ...s.cardLink, color: "#94a3b8" }}>
                Active Session ({admin.role})
              </div>
            )}
          </div>
        </div>

        {/* ── LEADS PIPELINE STATUS STRIP ── */}
        <div style={{ ...s.card, padding: "20px 24px", marginBottom: "28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
            <div>
              <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 800, color: "#0f172a" }}>
                Lead Status &amp; Conversion Pipeline
              </h3>
              <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#64748b" }}>
                Live breakdown of candidate consultation stages
              </p>
            </div>
            <Link
              href="/admin/inquiry"
              style={{ fontSize: "12px", fontWeight: 700, color: "#4f46e5", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}
            >
              Open Full Leads Manager →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px" }}>
            {[
              { label: "✨ New Leads", count: metrics.newInquiries, bg: "#ecfdf5", border: "#a7f3d0", color: "#047857" },
              { label: "👍 Interested", count: metrics.interestedInquiries, bg: "#f0fdf4", border: "#86efac", color: "#15803d" },
              { label: "⏳ In Progress", count: metrics.inProgressInquiries, bg: "#eff6ff", border: "#bfdbfe", color: "#1d4ed8" },
              { label: "💳 Payment Mode", count: metrics.paymentModeInquiries, bg: "#fdf4ff", border: "#f5d0fe", color: "#a21caf" },
              { label: "🎉 Converted", count: metrics.convertedInquiries, bg: "#f5f3ff", border: "#ddd6fe", color: "#6d28d9" },
              { label: "📵 DNP (Did Not Pick)", count: metrics.dnpInquiries, bg: "#fff1f2", border: "#fecdd3", color: "#be123c" },
            ].map((st) => (
              <div
                key={st.label}
                style={{
                  background: st.bg,
                  border: `1px solid ${st.border}`,
                  borderRadius: "12px",
                  padding: "12px 14px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "20px", fontWeight: 800, color: st.color }}>{st.count}</div>
                <div style={{ fontSize: "11px", fontWeight: 700, color: st.color, marginTop: "2px" }}>
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 2-COLUMN REAL-TIME ACTIVITY GRID ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "24px" }}>
          {/* Left Column: Recent Inquiries & Leads */}
          <div style={{ ...s.card, padding: "20px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MessageSquare style={{ width: "18px", height: "18px", color: "#059669" }} />
                <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 800, color: "#0f172a" }}>
                  Recent Inquiries &amp; Consultations
                </h3>
              </div>
              <Link href="/admin/inquiry" style={{ fontSize: "12px", fontWeight: 700, color: "#4f46e5", textDecoration: "none" }}>
                View All ({inquiries.length}) →
              </Link>
            </div>

            {loading ? (
              <div style={{ padding: "30px", textAlign: "center", color: "#64748b", fontSize: "13px" }}>
                Loading inquiries...
              </div>
            ) : inquiries.length === 0 ? (
              <div style={{ padding: "30px", textAlign: "center", color: "#64748b", fontSize: "13px" }}>
                No inquiries registered yet.
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {inquiries.slice(0, 5).map((inq) => {
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
                      style={{
                        background: inq.status === "new" ? "#f0fdf4" : "#fafafa",
                        border: inq.status === "new" ? "1px solid #bbf7d0" : "1px solid #f1f5f9",
                        borderRadius: "12px",
                        padding: "12px 14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                      }}
                    >
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ fontWeight: 700, fontSize: "14px", color: "#0f172a" }}>
                            {inq.name}
                          </span>
                          <span
                            style={{
                              background: badge.bg,
                              color: badge.text,
                              border: `1px solid ${badge.border}`,
                              borderRadius: "999px",
                              padding: "1px 8px",
                              fontSize: "10px",
                              fontWeight: 800,
                            }}
                          >
                            {badge.label}
                          </span>
                        </div>
                        <div style={{ fontSize: "12px", color: "#64748b", marginTop: "3px" }}>
                          📍 {inq.country} · 💼 {inq.occupation || "General"}
                        </div>
                      </div>

                      {/* Quick 1-Click WhatsApp */}
                      <a
                        href={`https://wa.me/${waPhone}?text=${waMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          background: "#25d366",
                          color: "white",
                          borderRadius: "8px",
                          padding: "6px 10px",
                          fontSize: "12px",
                          fontWeight: 700,
                          textDecoration: "none",
                          boxShadow: "0 2px 6px rgba(37,211,102,0.25)",
                          flexShrink: 0,
                        }}
                      >
                        <MessageCircle style={{ width: "13px", height: "13px" }} />
                        <span>Chat</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Hot Job Demands & Invoices Summary */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Active Overseas Job Demands */}
            <div style={{ ...s.card, padding: "20px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Briefcase style={{ width: "18px", height: "18px", color: "#2563eb" }} />
                  <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 800, color: "#0f172a" }}>
                    Active Job Demands
                  </h3>
                </div>
                <Link href="/admin/jobs" style={{ fontSize: "12px", fontWeight: 700, color: "#4f46e5", textDecoration: "none" }}>
                  Manage ({jobs.length}) →
                </Link>
              </div>

              {loading ? (
                <div style={{ padding: "20px", textAlign: "center", color: "#64748b", fontSize: "13px" }}>
                  Loading demands...
                </div>
              ) : jobs.length === 0 ? (
                <div style={{ padding: "20px", textAlign: "center", color: "#64748b", fontSize: "13px" }}>
                  No job demands posted.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {jobs.slice(0, 3).map((job) => (
                    <div
                      key={job.id}
                      style={{
                        background: "#fafafa",
                        border: "1px solid #f1f5f9",
                        borderRadius: "12px",
                        padding: "10px 14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ fontSize: "14px" }}>{job.flag}</span>
                          <span style={{ fontWeight: 700, fontSize: "13px", color: "#0f172a" }}>
                            {job.title}
                          </span>
                          {job.urgent && (
                            <span style={{ background: "#fef2f2", color: "#dc2626", padding: "1px 6px", borderRadius: "4px", fontSize: "10px", fontWeight: 800 }}>
                              HOT
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                          {job.country} · {job.totalOpenings || 1} Openings · {job.salary}
                        </div>
                      </div>

                      <span style={{ fontWeight: 700, fontSize: "12px", color: "#059669" }}>
                        {job.salary}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Invoices Summary */}
            <div style={{ ...s.card, padding: "20px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Receipt style={{ width: "18px", height: "18px", color: "#c026d3" }} />
                  <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 800, color: "#0f172a" }}>
                    Recent Billing &amp; Invoices
                  </h3>
                </div>
                <Link href="/admin/invoice" style={{ fontSize: "12px", fontWeight: 700, color: "#4f46e5", textDecoration: "none" }}>
                  View All ({invoices.length}) →
                </Link>
              </div>

              {loading ? (
                <div style={{ padding: "20px", textAlign: "center", color: "#64748b", fontSize: "13px" }}>
                  Loading invoices...
                </div>
              ) : invoices.length === 0 ? (
                <div style={{ padding: "20px", textAlign: "center", color: "#64748b", fontSize: "13px" }}>
                  No invoices created yet.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {invoices.slice(0, 3).map((inv) => (
                    <div
                      key={inv.id}
                      style={{
                        background: "#fafafa",
                        border: "1px solid #f1f5f9",
                        borderRadius: "12px",
                        padding: "10px 14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 700, fontSize: "13px", color: "#0f172a" }}>
                          {inv.clientName}
                        </div>
                        <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                          Invoice #{inv.invoiceNumber || inv.id.substring(0, 8)} · {new Date(inv.createdAt).toLocaleDateString("en-IN")}
                        </div>
                      </div>

                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontWeight: 800, fontSize: "13px", color: "#0f172a" }}>
                          ₹{(inv.totalAmount || 0).toLocaleString("en-IN")}
                        </div>
                        <span
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            color: inv.status === "paid" ? "#166534" : "#92400e",
                          }}
                        >
                          {inv.status || "paid"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
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
    marginBottom: "28px",
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
    fontSize: "13px",
    color: "#64748b",
  },
  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
    marginBottom: "28px",
  },
  kpiCard: {
    background: "white",
    borderRadius: "18px",
    padding: "20px 22px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
    border: "1px solid #f1f5f9",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
  },
  kpiLabel: {
    fontSize: "12px",
    fontWeight: 700,
    color: "#64748b",
    textTransform: "uppercase" as const,
    letterSpacing: "0.04em",
  },
  iconBadge: {
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  cardLink: {
    fontSize: "12px",
    fontWeight: 700,
    color: "#4f46e5",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    marginTop: "16px",
    paddingTop: "12px",
    borderTop: "1px solid #f8fafc",
  },
  card: {
    background: "white",
    borderRadius: "18px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    border: "1px solid #f1f5f9",
  },
  btnPrimary: {
    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 18px",
    fontSize: "13px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(99,102,241,0.3)",
  },
  btnSecondary: {
    background: "white",
    color: "#334155",
    border: "1.5px solid #e2e8f0",
    borderRadius: "10px",
    padding: "10px 16px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
  },
};
