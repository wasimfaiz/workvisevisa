"use client";

/* ================================================================
   app/admin/applications/page.tsx — Candidate Application Tracker
   Complete 7-Stage Work Visa Processing & Record Management:
   1. Registration & Agreement
   2. Document Audit & PCC Attestation
   3. Employer Selection & Contract Signing
   4. Work Permit / MOI Ministry Approval
   5. Embassy Appointment & VFS Filing
   6. Visa Stamping / Visa Approved
   7. Flight Ticket & Deployment
   ================================================================ */

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Search,
  RefreshCw,
  Phone,
  MessageCircle,
  Trash2,
  Edit3,
  Calendar,
  Briefcase,
  Globe,
  User,
  CheckCircle2,
  Clock,
  AlertCircle,
  X,
  FileText,
  Filter,
  Users,
  Compass,
  Plus,
  ArrowRight,
  ChevronRight,
  Eye,
  Award,
  Building2,
  Plane,
  FileSearch,
  UserCheck,
  ShieldCheck,
  CreditCard,
  Send,
  AlertTriangle,
  History,
  Check,
  HelpCircle,
  Save,
  Copy,
  ExternalLink,
  Printer,
  Share2,
  Download,
} from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";
import { PROCESSING_STAGES, IStageHistory } from "@/lib/types/application";
import { EmployeePermissions } from "@/lib/types/rbac";

export interface ApplicationItem {
  id: string;
  applicationNo: string;
  candidateName: string;
  passportNumber?: string;
  phone: string;
  email?: string;
  targetCountry: string;
  jobTrade: string;
  currentStage: number; // 1 to 7
  stageStatus: "in_progress" | "completed" | "on_hold" | "rejected";
  assignedCounselor?: {
    id?: string | null;
    name?: string;
    email?: string;
    role?: string;
  };
  packageAmount: number;
  paidAmount: number;
  balanceAmount: number;
  workPermitNumber?: string;
  vfsAppointmentDate?: string;
  visaNumber?: string;
  flightDate?: string;
  flightPnr?: string;
  notes?: string;
  stageHistory: IStageHistory[];
  createdAt: string;
  updatedAt: string;
}

export interface EmployeeOption {
  id: string;
  name: string;
  email: string;
  role: string;
  status?: string;
}

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  permissions?: EmployeePermissions & {
    applications?: {
      view?: boolean;
      create?: boolean;
      edit?: boolean;
      delete?: boolean;
    };
  };
}

export default function AdminApplicationsPage() {
  const router = useRouter();

  // Auth state
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Data state
  const [applications, setApplications] = useState<ApplicationItem[]>([]);
  const [employees, setEmployees] = useState<EmployeeOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Filters & Search
  const [search, setSearch] = useState("");
  const [stageFilter, setStageFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [countryFilter, setCountryFilter] = useState<string>("all");
  const [counselorFilter, setCounselorFilter] = useState<string>("all");

  // View Case Timeline Drawer / Modal state
  const [activeCase, setActiveCase] = useState<ApplicationItem | null>(null);
  const [updatingStage, setUpdatingStage] = useState(false);
  const [newRemarkText, setNewRemarkText] = useState("");
  const [selectedNextStage, setSelectedNextStage] = useState<number>(1);
  const [selectedNextStatus, setSelectedNextStatus] = useState<ApplicationItem["stageStatus"]>("in_progress");

  // Create / Edit Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingApp, setEditingApp] = useState<ApplicationItem | null>(null);
  const [savingApp, setSavingApp] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    candidateName: "",
    passportNumber: "",
    phone: "",
    email: "",
    targetCountry: "Poland",
    jobTrade: "",
    currentStage: 1,
    stageStatus: "in_progress" as ApplicationItem["stageStatus"],
    assignedCounselorId: "",
    packageAmount: 0,
    paidAmount: 0,
    workPermitNumber: "",
    vfsAppointmentDate: "",
    visaNumber: "",
    flightDate: "",
    flightPnr: "",
    notes: "",
    remarks: "",
  });

  // Delete confirm state
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Toast feedback
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Helper currency format
  const formatCurrency = (amount: number) => {
    const num = Number(amount) || 0;
    if (num % 1 === 0) {
      return num.toLocaleString("en-IN", { maximumFractionDigits: 0 });
    }
    return num.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  // 1. Auth Check
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
          if (!isSuper && data.user.permissions?.applications?.view === false) {
            router.replace("/admin/dashboard");
            return;
          }
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

  // 2. Fetch Data
  const fetchEmployees = useCallback(async () => {
    try {
      const res = await fetch("/api/employees");
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          setEmployees(data.data);
        }
      }
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  }, []);

  const fetchApplications = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);

    try {
      const res = await fetch("/api/applications", { cache: "no-store" });
      if (!res.ok) {
        if (res.status === 401) {
          router.replace("/admin");
          return;
        }
        throw new Error("Failed to load applications");
      }
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setApplications(data.data);
      }
    } catch (err) {
      console.error("Error loading applications:", err);
      showToast("Unable to load candidate tracker data. Please refresh.", "error");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [router]);

  useEffect(() => {
    if (!authLoading && admin) {
      fetchApplications();
      fetchEmployees();
    }
  }, [authLoading, admin, fetchApplications, fetchEmployees]);

  // 3. Derived Metrics & Filters
  const metrics = useMemo(() => {
    const total = applications.length;
    const inProgress = applications.filter((a) => a.stageStatus === "in_progress").length;
    const visaApproved = applications.filter((a) => a.currentStage >= 6 && a.stageStatus !== "rejected").length;
    const deployed = applications.filter((a) => a.currentStage === 7 && a.stageStatus === "completed").length;
    const onHold = applications.filter((a) => a.stageStatus === "on_hold").length;
    const rejected = applications.filter((a) => a.stageStatus === "rejected").length;

    const totalBilled = applications.reduce((sum, a) => sum + (Number(a.packageAmount) || 0), 0);
    const totalCollected = applications.reduce((sum, a) => sum + (Number(a.paidAmount) || 0), 0);
    const totalPending = applications.reduce((sum, a) => sum + (Number(a.balanceAmount) || 0), 0);

    return {
      total,
      inProgress,
      visaApproved,
      deployed,
      onHold,
      rejected,
      totalBilled,
      totalCollected,
      totalPending,
    };
  }, [applications]);

  const uniqueCountries = useMemo(() => {
    const set = new Set<string>();
    applications.forEach((a) => {
      if (a.targetCountry) set.add(a.targetCountry.trim());
    });
    return Array.from(set).sort();
  }, [applications]);

  const filteredApplications = useMemo(() => {
    return applications.filter((item) => {
      if (stageFilter !== "all" && item.currentStage !== Number(stageFilter)) return false;
      if (statusFilter !== "all" && item.stageStatus !== statusFilter) return false;
      if (countryFilter !== "all" && item.targetCountry !== countryFilter) return false;

      if (counselorFilter !== "all") {
        if (counselorFilter === "unassigned") {
          if (item.assignedCounselor && (item.assignedCounselor.id || item.assignedCounselor.name)) return false;
        } else {
          if (
            item.assignedCounselor?.id !== counselorFilter &&
            item.assignedCounselor?.name !== counselorFilter
          ) {
            return false;
          }
        }
      }

      if (search.trim()) {
        const q = search.toLowerCase();
        const matchName = item.candidateName?.toLowerCase().includes(q);
        const matchPassport = item.passportNumber?.toLowerCase().includes(q);
        const matchAppNo = item.applicationNo?.toLowerCase().includes(q);
        const matchPhone = item.phone?.toLowerCase().includes(q);
        const matchTrade = item.jobTrade?.toLowerCase().includes(q);
        const matchCountry = item.targetCountry?.toLowerCase().includes(q);
        const matchPermit = item.workPermitNumber?.toLowerCase().includes(q);
        const matchVisa = item.visaNumber?.toLowerCase().includes(q);
        if (!matchName && !matchPassport && !matchAppNo && !matchPhone && !matchTrade && !matchCountry && !matchPermit && !matchVisa) {
          return false;
        }
      }

      return true;
    });
  }, [applications, stageFilter, statusFilter, countryFilter, counselorFilter, search]);

  // Stage Meta Resolver
  const getStageMeta = (stageNumber: number) => {
    return PROCESSING_STAGES.find((s) => s.step === stageNumber) || PROCESSING_STAGES[0];
  };

  const getStatusBadgeStyle = (status: ApplicationItem["stageStatus"]) => {
    switch (status) {
      case "completed":
        return {
          bg: "#ecfdf5",
          color: "#047857",
          border: "#a7f3d0",
          label: "Completed / Deployed",
        };
      case "in_progress":
        return {
          bg: "#eff6ff",
          color: "#1d4ed8",
          border: "#bfdbfe",
          label: "In Progress",
        };
      case "on_hold":
        return {
          bg: "#fffbeb",
          color: "#b45309",
          border: "#fde68a",
          label: "On Hold",
        };
      case "rejected":
        return {
          bg: "#fef2f2",
          color: "#b91c1c",
          border: "#fecaca",
          label: "Rejected / Appeal",
        };
      default:
        return {
          bg: "#f8fafc",
          color: "#475569",
          border: "#e2e8f0",
          label: status,
        };
    }
  };

  // 4. Open Case Details
  const handleOpenCase = (app: ApplicationItem) => {
    setActiveCase(app);
    setSelectedNextStage(app.currentStage);
    setSelectedNextStatus(app.stageStatus);
    setNewRemarkText("");
  };

  // 5. Advance Stage / Update Milestone
  const handleUpdateMilestone = async () => {
    if (!activeCase) return;
    setUpdatingStage(true);

    try {
      const res = await fetch(`/api/applications/${activeCase.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentStage: selectedNextStage,
          stageStatus: selectedNextStatus,
          newRemark: newRemarkText.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to update milestone");
      }

      showToast(`Milestone updated to Stage ${selectedNextStage}: ${getStageMeta(selectedNextStage).name}`);
      setActiveCase(data.data);
      setApplications((prev) => prev.map((item) => (item.id === activeCase.id ? data.data : item)));
      setNewRemarkText("");
    } catch (err) {
      console.error("Milestone update error:", err);
      const msg = err instanceof Error ? err.message : "Failed to update stage";
      showToast(msg, "error");
    } finally {
      setUpdatingStage(false);
    }
  };

  // 6. Quick Advance 1 Step
  const handleQuickAdvance = async (app: ApplicationItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (app.currentStage >= 7 && app.stageStatus === "completed") {
      showToast("Candidate is already at final deployment stage!");
      return;
    }

    const nextStep = app.currentStage < 7 ? app.currentStage + 1 : 7;
    const nextStatus = nextStep === 7 ? "completed" : "in_progress";
    const nextMeta = getStageMeta(nextStep);

    try {
      const res = await fetch(`/api/applications/${app.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentStage: nextStep,
          stageStatus: nextStatus,
          newRemark: `Quick advanced to Stage ${nextStep}: ${nextMeta.name}`,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to advance stage");
      }

      showToast(`Advanced ${app.candidateName} to Stage ${nextStep}: ${nextMeta.name}`);
      setApplications((prev) => prev.map((item) => (item.id === app.id ? data.data : item)));
      if (activeCase?.id === app.id) {
        setActiveCase(data.data);
      }
    } catch (err) {
      console.error("Quick advance error:", err);
      showToast("Failed to advance stage.", "error");
    }
  };

  // 7. Open Create / Edit Modal
  const handleOpenAddModal = () => {
    setEditingApp(null);
    setFormData({
      candidateName: "",
      passportNumber: "",
      phone: "",
      email: "",
      targetCountry: "Poland",
      jobTrade: "",
      currentStage: 1,
      stageStatus: "in_progress",
      assignedCounselorId: "",
      packageAmount: 0,
      paidAmount: 0,
      workPermitNumber: "",
      vfsAppointmentDate: "",
      visaNumber: "",
      flightDate: "",
      flightPnr: "",
      notes: "",
      remarks: "Candidate registered for processing",
    });
    setShowAddModal(true);
  };

  const handleOpenEditModal = (app: ApplicationItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setEditingApp(app);
    setFormData({
      candidateName: app.candidateName,
      passportNumber: app.passportNumber || "",
      phone: app.phone,
      email: app.email || "",
      targetCountry: app.targetCountry,
      jobTrade: app.jobTrade,
      currentStage: app.currentStage,
      stageStatus: app.stageStatus,
      assignedCounselorId: app.assignedCounselor?.id || "",
      packageAmount: app.packageAmount || 0,
      paidAmount: app.paidAmount || 0,
      workPermitNumber: app.workPermitNumber || "",
      vfsAppointmentDate: app.vfsAppointmentDate || "",
      visaNumber: app.visaNumber || "",
      flightDate: app.flightDate || "",
      flightPnr: app.flightPnr || "",
      notes: app.notes || "",
      remarks: "",
    });
    setShowAddModal(true);
  };

  // 8. Save Application Form (Create or Edit)
  const handleSaveApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.candidateName.trim() || formData.candidateName.trim().length < 2) {
      showToast("Candidate full name is required (min 2 characters)", "error");
      return;
    }
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, "").length < 7) {
      showToast("Valid phone / WhatsApp number is required (min 7 digits)", "error");
      return;
    }

    setSavingApp(true);
    try {
      let assignedCounselorPayload: unknown = null;
      if (formData.assignedCounselorId && formData.assignedCounselorId !== "unassigned") {
        const found = employees.find((emp) => emp.id === formData.assignedCounselorId);
        if (found) {
          assignedCounselorPayload = {
            id: found.id,
            name: found.name,
            email: found.email,
            role: found.role,
          };
        } else {
          assignedCounselorPayload = formData.assignedCounselorId;
        }
      }

      if (editingApp) {
        // Edit existing
        const res = await fetch(`/api/applications/${editingApp.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            candidateName: formData.candidateName.trim(),
            passportNumber: formData.passportNumber.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            targetCountry: formData.targetCountry.trim(),
            jobTrade: formData.jobTrade.trim(),
            currentStage: formData.currentStage,
            stageStatus: formData.stageStatus,
            assignedCounselor: assignedCounselorPayload,
            packageAmount: Number(formData.packageAmount) || 0,
            paidAmount: Number(formData.paidAmount) || 0,
            workPermitNumber: formData.workPermitNumber.trim(),
            vfsAppointmentDate: formData.vfsAppointmentDate.trim(),
            visaNumber: formData.visaNumber.trim(),
            flightDate: formData.flightDate.trim(),
            flightPnr: formData.flightPnr.trim(),
            notes: formData.notes.trim(),
            newRemark: formData.remarks.trim() || undefined,
          }),
        });

        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.message || "Failed to update application");
        }

        showToast("Application case updated successfully!");
        setShowAddModal(false);
        setApplications((prev) => prev.map((item) => (item.id === editingApp.id ? data.data : item)));
        if (activeCase?.id === editingApp.id) {
          setActiveCase(data.data);
        }
      } else {
        // Create new
        const res = await fetch("/api/applications", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            candidateName: formData.candidateName.trim(),
            passportNumber: formData.passportNumber.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            targetCountry: formData.targetCountry.trim(),
            jobTrade: formData.jobTrade.trim(),
            currentStage: formData.currentStage,
            stageStatus: formData.stageStatus,
            assignedCounselor: assignedCounselorPayload,
            packageAmount: Number(formData.packageAmount) || 0,
            paidAmount: Number(formData.paidAmount) || 0,
            workPermitNumber: formData.workPermitNumber.trim(),
            vfsAppointmentDate: formData.vfsAppointmentDate.trim(),
            visaNumber: formData.visaNumber.trim(),
            flightDate: formData.flightDate.trim(),
            flightPnr: formData.flightPnr.trim(),
            notes: formData.notes.trim(),
            remarks: formData.remarks.trim() || "Candidate registered for visa processing",
          }),
        });

        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.message || "Failed to create application");
        }

        showToast("New candidate processing case created successfully!");
        setShowAddModal(false);
        fetchApplications(true);
      }
    } catch (err) {
      console.error("Save error:", err);
      const msg = err instanceof Error ? err.message : "Failed to save application";
      showToast(msg, "error");
    } finally {
      setSavingApp(false);
    }
  };

  // 9. Delete Application
  const handleDeleteApplication = async () => {
    if (!deletingId) return;
    setIsDeleting(true);

    try {
      const res = await fetch(`/api/applications/${deletingId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to delete application");
      }

      showToast("Application case deleted successfully.");
      setApplications((prev) => prev.filter((item) => item.id !== deletingId));
      if (activeCase?.id === deletingId) {
        setActiveCase(null);
      }
      setDeletingId(null);
    } catch (err) {
      console.error("Delete error:", err);
      showToast("Failed to delete application case.", "error");
    } finally {
      setIsDeleting(false);
    }
  };

  // 10. WhatsApp Update Builder with Live Public Tracker Link
  const getWhatsAppUpdateUrl = (app: ApplicationItem) => {
    const cleanPhone = app.phone.replace(/\D/g, "");
    const stageMeta = getStageMeta(app.currentStage);
    const origin = typeof window !== "undefined" ? window.location.origin : "https://workwisevisa.com";
    const trackingUrl = `${origin}/track?app=${encodeURIComponent(app.applicationNo)}`;
    const msg = `Hello ${app.candidateName},\n\nThis is an official milestone update regarding your Work Visa Application (*${app.applicationNo}*) for *${app.targetCountry}* (${app.jobTrade}) with WorkWise Visa.\n\n📍 *Current Processing Stage:* Stage ${app.currentStage}/7 — ${stageMeta.name}\n⚡ *Status:* ${app.stageStatus.toUpperCase()}\n${app.workPermitNumber ? `📄 *Work Permit No:* ${app.workPermitNumber}\n` : ""}${app.vfsAppointmentDate ? `🗓️ *VFS Appointment:* ${app.vfsAppointmentDate}\n` : ""}${app.visaNumber ? `✅ *Visa Grant No:* ${app.visaNumber}\n` : ""}${app.flightDate ? `✈️ *Flight Departure:* ${app.flightDate} (PNR: ${app.flightPnr || "Confirmed"})\n` : ""}\n🔗 *Track your live status anytime here:*\n${trackingUrl}\n\nOur visa processing division is actively managing your file. Please feel free to reach out if you have any questions.\n\nWarm Regards,\n*WorkWise Visa Immigration Team*`;
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
  };

  const copyTrackingLink = (app: ApplicationItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const origin = typeof window !== "undefined" ? window.location.origin : "https://workwisevisa.com";
    const link = `${origin}/track?app=${encodeURIComponent(app.applicationNo)}`;
    navigator.clipboard.writeText(link);
    showToast(`Live Tracking link copied for ${app.candidateName}!`);
  };

  if (authLoading || !admin) {
    return (
      <div style={s.loadingContainer}>
        <div style={s.spinner} />
        <p style={{ marginTop: "12px", color: "white", fontSize: "14px" }}>
          Verifying admin access...
        </p>
      </div>
    );
  }

  const isSuper = admin.role === "superadmin" || admin.email === "wasim@yastudy.com";
  const canCreate = isSuper || Boolean(admin.permissions?.applications?.create !== false);
  const canEdit = isSuper || Boolean(admin.permissions?.applications?.edit !== false);
  const canDelete = isSuper || Boolean(admin.permissions?.applications?.delete !== false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f8fafc] font-sans">
      {/* Toast Notification */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "24px",
            right: "24px",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 20px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            fontSize: "14px",
            fontWeight: 600,
            background: toast.type === "success" ? "#10b981" : "#ef4444",
            color: "white",
            animation: "fadeIn 0.2s ease-in-out",
          }}
        >
          {toast.type === "success" ? (
            <CheckCircle2 style={{ width: "18px", height: "18px" }} />
          ) : (
            <AlertCircle style={{ width: "18px", height: "18px" }} />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      {/* ── RESPONSIVE SIDEBAR ── */}
      <AdminSidebar
        currentUser={admin}
        counts={{
          applications: applications.length,
        }}
      />

      {/* ── MAIN CONTENT AREA ── */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-screen">
        {/* Header */}
        <div style={s.header}>
          <div>
            <h1 style={s.pageTitle}>Candidate Application Tracker</h1>
            <p style={s.pageSubtitle}>
              Live milestone tracker for enrolled candidates from agreement to visa stamping &amp; flight departure.
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <button
              onClick={() => fetchApplications(true)}
              style={s.btnSecondary}
              disabled={refreshing}
              title="Refresh applications list"
            >
              <RefreshCw className={refreshing ? "animate-spin" : ""} style={{ width: "15px", height: "15px" }} />
              <span>{refreshing ? "Refreshing..." : "Refresh"}</span>
            </button>
            {canCreate && (
              <button onClick={handleOpenAddModal} style={s.btnPrimary}>
                <Plus style={{ width: "16px", height: "16px" }} />
                <span>New Candidate Case</span>
              </button>
            )}
          </div>
        </div>

        {/* ── 5 EXECUTIVE KPI OVERVIEW CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {/* Card 1: Total Enrolled */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Total In Processing
              </span>
              <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <Compass className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-black text-slate-900 tracking-tight">{metrics.total}</div>
              <div className="text-[11px] font-medium text-slate-400 mt-0.5">Enrolled candidates</div>
            </div>
          </div>

          {/* Card 2: In Progress */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                Active Processing
              </span>
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-black text-blue-600 tracking-tight">{metrics.inProgress}</div>
              <div className="text-[11px] font-medium text-slate-400 mt-0.5">Stages 1 to 5 active</div>
            </div>
          </div>

          {/* Card 3: Visa Approved */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                Visa Stamped / Approved
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-black text-emerald-600 tracking-tight">{metrics.visaApproved}</div>
              <div className="text-[11px] font-medium text-slate-400 mt-0.5">Visa granted</div>
            </div>
          </div>

          {/* Card 4: Deployed */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600">
                Deployed / Flown
              </span>
              <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
                <Plane className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-black text-teal-700 tracking-tight">{metrics.deployed}</div>
              <div className="text-[11px] font-medium text-slate-400 mt-0.5">Successfully departed</div>
            </div>
          </div>

          {/* Card 5: On Hold / Review */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                Action / On Hold
              </span>
              <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                <AlertTriangle className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-black text-amber-600 tracking-tight">
                {metrics.onHold + metrics.rejected}
              </div>
              <div className="text-[11px] font-medium text-slate-400 mt-0.5">
                {metrics.onHold} on hold · {metrics.rejected} rejected
              </div>
            </div>
          </div>
        </div>

        {/* ── 7-STAGE PIPELINE ROADMAP STRIP ── */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 overflow-x-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
            <span>Work Visa 7-Stage Milestone Workflow</span>
            <span className="text-[11px] text-slate-400 font-normal">Click a stage chip to filter candidates</span>
          </div>
          <div className="flex items-center gap-2 min-w-[780px]">
            {PROCESSING_STAGES.map((stg) => {
              const isSelected = stageFilter === String(stg.step);
              const countInStage = applications.filter((a) => a.currentStage === stg.step).length;
              return (
                <button
                  key={stg.step}
                  onClick={() => setStageFilter(isSelected ? "all" : String(stg.step))}
                  className={`flex-1 flex items-center gap-2 p-2.5 rounded-xl border text-left transition ${
                    isSelected
                      ? "bg-indigo-50 border-indigo-300 ring-2 ring-indigo-500/20 shadow-sm"
                      : "bg-slate-50/70 border-slate-200 hover:bg-slate-100/80"
                  }`}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0"
                    style={{
                      background: isSelected ? "#4338ca" : "#e2e8f0",
                      color: isSelected ? "white" : "#475569",
                    }}
                  >
                    {stg.step}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-bold text-slate-800 truncate leading-tight">
                      {stg.shortName}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      {countInStage} {countInStage === 1 ? "case" : "cases"}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── SEARCH & FILTER CONTROLS ── */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search candidate name, passport no, app id, trade..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 bg-slate-50/50"
            />
          </div>

          {/* Stage Filter */}
          <div className="w-44">
            <select
              value={stageFilter}
              onChange={(e) => setStageFilter(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 bg-slate-50/50 text-slate-700 cursor-pointer"
            >
              <option value="all">All Stages (1-7)</option>
              {PROCESSING_STAGES.map((s) => (
                <option key={s.step} value={s.step}>
                  Stage {s.step}: {s.shortName}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="w-36">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 bg-slate-50/50 text-slate-700 cursor-pointer"
            >
              <option value="all">All Statuses</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="on_hold">On Hold</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          {/* Country Filter */}
          <div className="w-40">
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 bg-slate-50/50 text-slate-700 cursor-pointer"
            >
              <option value="all">All Countries</option>
              {uniqueCountries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Counselor Filter */}
          <div className="w-44">
            <select
              value={counselorFilter}
              onChange={(e) => setCounselorFilter(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 bg-slate-50/50 text-slate-700 cursor-pointer"
            >
              <option value="all">All Counselors</option>
              <option value="unassigned">Unassigned</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.name}
                </option>
              ))}
            </select>
          </div>

          {/* Reset button */}
          {(search || stageFilter !== "all" || statusFilter !== "all" || countryFilter !== "all" || counselorFilter !== "all") && (
            <button
              onClick={() => {
                setSearch("");
                setStageFilter("all");
                setStatusFilter("all");
                setCountryFilter("all");
                setCounselorFilter("all");
              }}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-semibold transition"
            >
              Reset
            </button>
          )}
        </div>

        {/* ── CANDIDATE APPLICATIONS DATA TABLE ── */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
          {loading ? (
            <div className="py-20 text-center text-slate-400 text-sm">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-indigo-500" />
              Loading candidate tracking database...
            </div>
          ) : filteredApplications.length === 0 ? (
            <div className="py-16 text-center">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-3">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-slate-800">No Candidate Applications Found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                {search || stageFilter !== "all"
                  ? "No candidate tracker matched your search criteria. Try clearing filters."
                  : "No candidates have been enrolled in processing yet. Click below to create your first application tracker."}
              </p>
              {canCreate && (
                <button
                  onClick={handleOpenAddModal}
                  className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow transition inline-flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Enroll First Candidate
                </button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4 w-12 text-center">#</th>
                    <th className="py-3 px-4">Candidate &amp; Passport</th>
                    <th className="py-3 px-4">Destination &amp; Trade</th>
                    <th className="py-3 px-4">Processing Progress</th>
                    <th className="py-3 px-4">Active Stage &amp; Status</th>
                    <th className="py-3 px-4">Assigned Counselor</th>
                    <th className="py-3 px-4 text-right">Payment Status</th>
                    <th className="py-3 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs text-slate-700 font-medium">
                  {filteredApplications.map((app, idx) => {
                    const stageMeta = getStageMeta(app.currentStage);
                    const statusStyle = getStatusBadgeStyle(app.stageStatus);
                    const progressPercent = Math.round((app.currentStage / 7) * 100);

                    return (
                      <tr
                        key={app.id || idx}
                        onClick={() => handleOpenCase(app)}
                        className="hover:bg-indigo-50/40 transition-colors cursor-pointer"
                      >
                        {/* Index */}
                        <td className="py-3.5 px-4 text-center text-slate-400 font-bold">{idx + 1}</td>

                        {/* Candidate & Passport */}
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900 text-sm">{app.candidateName}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="bg-slate-100 text-slate-600 font-mono text-[10px] px-1.5 py-0.5 rounded border border-slate-200 font-bold">
                              {app.applicationNo}
                            </span>
                            {app.passportNumber ? (
                              <span className="font-mono text-[11px] text-indigo-700 font-semibold">
                                🛂 {app.passportNumber}
                              </span>
                            ) : (
                              <span className="text-[10px] text-slate-400">Passport pending</span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-500 font-mono mt-0.5">{app.phone}</div>
                        </td>

                        {/* Destination & Trade */}
                        <td className="py-3.5 px-4">
                          <div className="inline-flex items-center gap-1 font-bold text-slate-900 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-lg text-xs">
                            <Globe className="w-3 h-3 text-indigo-600" />
                            {app.targetCountry}
                          </div>
                          <div className="text-slate-600 text-xs font-semibold mt-1 flex items-center gap-1">
                            <Briefcase className="w-3 h-3 text-slate-400" />
                            {app.jobTrade}
                          </div>
                        </td>

                        {/* Processing Progress */}
                        <td className="py-3.5 px-4 min-w-[170px]">
                          <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                            <span className="text-indigo-600">Stage {app.currentStage} of 7</span>
                            <span className="text-slate-500 font-mono">{progressPercent}%</span>
                          </div>
                          {/* Progress bar */}
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200 flex">
                            <div
                              className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full transition-all duration-500"
                              style={{ width: `${progressPercent}%` }}
                            />
                          </div>
                          {/* Mini milestone dots */}
                          <div className="flex justify-between items-center mt-1.5 px-0.5">
                            {[1, 2, 3, 4, 5, 6, 7].map((sNum) => (
                              <div
                                key={sNum}
                                className={`w-2 h-2 rounded-full ${
                                  sNum < app.currentStage
                                    ? "bg-emerald-500"
                                    : sNum === app.currentStage
                                    ? "bg-indigo-600 ring-2 ring-indigo-200"
                                    : "bg-slate-200"
                                }`}
                                title={`Stage ${sNum}: ${getStageMeta(sNum).shortName}`}
                              />
                            ))}
                          </div>
                        </td>

                        {/* Active Stage & Status */}
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900 text-xs">{stageMeta.name}</div>
                          <div className="mt-1">
                            <span
                              className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full border"
                              style={{
                                background: statusStyle.bg,
                                color: statusStyle.color,
                                borderColor: statusStyle.border,
                              }}
                            >
                              {statusStyle.label}
                            </span>
                          </div>
                        </td>

                        {/* Counselor */}
                        <td className="py-3.5 px-4">
                          <div className="text-xs font-semibold text-slate-800">
                            {app.assignedCounselor?.name || "Unassigned"}
                          </div>
                          <div className="text-[10px] text-slate-400 capitalize">
                            {app.assignedCounselor?.role || "General Pool"}
                          </div>
                        </td>

                        {/* Payment Status */}
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <div className="text-xs font-bold text-slate-900 font-mono">
                            ₹{formatCurrency(app.paidAmount)} / ₹{formatCurrency(app.packageAmount)}
                          </div>
                          <div className="text-[10px] mt-0.5">
                            {app.balanceAmount <= 0 ? (
                              <span className="text-emerald-600 font-bold">Cleared</span>
                            ) : (
                              <span className="text-rose-600 font-semibold font-mono">
                                ₹{formatCurrency(app.balanceAmount)} Balance
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 text-center whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-center gap-1">
                            {/* Quick Next Stage Advance */}
                            {app.currentStage < 7 && (
                              <button
                                onClick={(e) => handleQuickAdvance(app, e)}
                                className="p-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition font-semibold text-[11px] flex items-center gap-1"
                                title={`Advance to Next Stage (${getStageMeta(app.currentStage + 1).shortName})`}
                              >
                                <ArrowRight className="w-3.5 h-3.5" />
                                <span>Next</span>
                              </button>
                            )}

                            {/* WhatsApp Direct */}
                            <a
                              href={getWhatsAppUpdateUrl(app)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition"
                              title="Send WhatsApp Milestone Update"
                            >
                              <MessageCircle className="w-4 h-4" />
                            </a>

                            {/* Copy Public Tracking URL */}
                            <button
                              onClick={(e) => copyTrackingLink(app, e)}
                              className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                              title="Copy Candidate Tracking Link"
                            >
                              <Copy className="w-4 h-4" />
                            </button>

                            {/* Open Public Live Tracker */}
                            <a
                              href={`/track?app=${encodeURIComponent(app.applicationNo)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 text-indigo-500 hover:bg-indigo-50 rounded-lg transition"
                              title="Open Live Public Tracking Page"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>

                            {/* View / Manage Details */}
                            <button
                              onClick={() => handleOpenCase(app)}
                              className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                              title="View Full Case History"
                            >
                              <Eye className="w-4 h-4" />
                            </button>

                            {/* Edit */}
                            {canEdit && (
                              <button
                                onClick={(e) => handleOpenEditModal(app, e)}
                                className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg transition"
                                title="Edit Candidate Details"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                            )}

                            {/* Delete */}
                            {canDelete && (
                              <button
                                onClick={() => setDeletingId(app.id)}
                                className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition"
                                title="Delete Case"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* ══════════════════════════════════════════════════════════
          VIEW CASE DETAILS & TIMELINE DRAWER / MODAL
          ══════════════════════════════════════════════════════════ */}
      {activeCase && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.65)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
              maxWidth: "840px",
              width: "100%",
              maxHeight: "92vh",
              overflowY: "auto",
              border: "1px solid #e2e8f0",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-t-2xl flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase">
                    {activeCase.applicationNo}
                  </span>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: getStatusBadgeStyle(activeCase.stageStatus).bg,
                      color: getStatusBadgeStyle(activeCase.stageStatus).color,
                    }}
                  >
                    {getStatusBadgeStyle(activeCase.stageStatus).label}
                  </span>
                </div>
                <h2 className="text-xl font-extrabold text-white mt-1.5 flex items-center gap-2">
                  {activeCase.candidateName}
                  {activeCase.passportNumber && (
                    <span className="text-xs font-mono text-slate-300 font-semibold bg-white/10 px-2 py-0.5 rounded">
                      🛂 {activeCase.passportNumber}
                    </span>
                  )}
                </h2>
                <p className="text-xs text-slate-300 mt-1 flex items-center gap-3">
                  <span>
                    🌍 <strong>{activeCase.targetCountry}</strong> · {activeCase.jobTrade}
                  </span>
                  <span>📞 {activeCase.phone}</span>
                </p>
              </div>

              <button
                onClick={() => setActiveCase(null)}
                className="p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="p-6 space-y-6 flex-1 overflow-y-auto">
              {/* 1. Quick Info Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Assigned Counselor</span>
                  <div className="font-bold text-slate-800 mt-0.5">
                    {activeCase.assignedCounselor?.name || "Unassigned"}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Total Package</span>
                  <div className="font-bold text-slate-800 mt-0.5 font-mono">
                    ₹{formatCurrency(activeCase.packageAmount)}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Paid Amount</span>
                  <div className="font-bold text-emerald-600 mt-0.5 font-mono">
                    ₹{formatCurrency(activeCase.paidAmount)}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Balance Due</span>
                  <div className="font-bold text-rose-600 mt-0.5 font-mono">
                    ₹{formatCurrency(activeCase.balanceAmount)}
                  </div>
                </div>
              </div>

              {/* 2. Visual 7-Stage Tracker */}
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                  Processing Milestone Roadmap
                </h4>
                <div className="space-y-2">
                  {PROCESSING_STAGES.map((stg) => {
                    const isPassed = stg.step < activeCase.currentStage;
                    const isCurrent = stg.step === activeCase.currentStage;
                    const isFuture = stg.step > activeCase.currentStage;

                    return (
                      <div
                        key={stg.step}
                        className={`p-3 rounded-xl border flex items-center justify-between transition ${
                          isCurrent
                            ? "bg-indigo-50/80 border-indigo-300 ring-2 ring-indigo-500/20 shadow-sm"
                            : isPassed
                            ? "bg-emerald-50/50 border-emerald-200"
                            : "bg-slate-50/60 border-slate-200 opacity-60"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                              isPassed
                                ? "bg-emerald-600 text-white shadow-sm"
                                : isCurrent
                                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                                : "bg-slate-200 text-slate-500"
                            }`}
                          >
                            {isPassed ? <Check className="w-4 h-4" /> : stg.step}
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-xs sm:text-sm">
                              Stage {stg.step}: {stg.name}
                            </div>
                            <div className="text-[11px] text-slate-500">{stg.description}</div>
                          </div>
                        </div>

                        <div>
                          {isPassed && (
                            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                              Completed
                            </span>
                          )}
                          {isCurrent && (
                            <span className="text-[11px] font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-md animate-pulse">
                              Active Stage
                            </span>
                          )}
                          {isFuture && (
                            <span className="text-[11px] font-semibold text-slate-400">Upcoming</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3. Milestone Update Form */}
              {canEdit && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <History className="w-4 h-4 text-indigo-600" />
                    Advance Stage &amp; Log Progress Update
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                        Move to Stage
                      </label>
                      <select
                        value={selectedNextStage}
                        onChange={(e) => setSelectedNextStage(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800"
                      >
                        {PROCESSING_STAGES.map((s) => (
                          <option key={s.step} value={s.step}>
                            Stage {s.step}: {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                        Processing Status
                      </label>
                      <select
                        value={selectedNextStatus}
                        onChange={(e) => setSelectedNextStatus(e.target.value as ApplicationItem["stageStatus"])}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800"
                      >
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed / Deployed</option>
                        <option value="on_hold">On Hold</option>
                        <option value="rejected">Rejected / Appeal</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                        Milestone Remarks / Notes (e.g. Work permit approved, VFS appointment date, Flight PNR)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Work permit received from Voivodeship #PO-88192, appointment scheduled for 18th Oct..."
                        value={newRemarkText}
                        onChange={(e) => setNewRemarkText(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      onClick={handleUpdateMilestone}
                      disabled={updatingStage}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow transition flex items-center gap-1.5"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>{updatingStage ? "Saving..." : "Save Milestone Progress"}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* 4. Complete Timeline History Log */}
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                  Historical Action &amp; Audit Log
                </h4>
                {activeCase.stageHistory && activeCase.stageHistory.length > 0 ? (
                  <div className="space-y-2 border-l-2 border-indigo-200 pl-4 ml-2">
                    {activeCase.stageHistory.map((hist, hIdx) => (
                      <div key={hIdx} className="relative text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <div className="absolute -left-[23px] top-3.5 w-3 h-3 bg-indigo-600 rounded-full border-2 border-white ring-2 ring-indigo-200" />
                        <div className="flex items-center justify-between font-bold text-slate-800">
                          <span>
                            Stage {hist.stageNumber}: {hist.stageName}
                          </span>
                          <span className="text-[10px] text-slate-400 font-normal">
                            {new Date(hist.date).toLocaleString("en-IN")}
                          </span>
                        </div>
                        {hist.remarks && (
                          <div className="text-[11px] text-slate-600 mt-1 bg-white p-2 rounded-lg border border-slate-100">
                            {hist.remarks}
                          </div>
                        )}
                        <div className="text-[10px] text-slate-400 mt-1">Updated by: {hist.updatedBy || "Staff"}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-xs text-slate-400 italic">No timeline history recorded yet.</div>
                )}
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-2xl flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={getWhatsAppUpdateUrl(activeCase)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow transition inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send WhatsApp Update</span>
                </a>

                <button
                  onClick={() => copyTrackingLink(activeCase)}
                  className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-bold transition inline-flex items-center gap-1.5"
                  title="Copy direct candidate tracking link"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Tracker Link</span>
                </button>

                <a
                  href={`/track?app=${encodeURIComponent(activeCase.applicationNo)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs font-bold transition inline-flex items-center gap-1.5"
                  title="Open candidate tracking page in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Candidate View</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                {canEdit && (
                  <button
                    onClick={() => {
                      const caseToEdit = activeCase;
                      setActiveCase(null);
                      handleOpenEditModal(caseToEdit);
                    }}
                    className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-bold transition"
                  >
                    Edit Case Profile
                  </button>
                )}
                <button
                  onClick={() => setActiveCase(null)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-bold transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
          CREATE / EDIT CANDIDATE CASE MODAL
          ══════════════════════════════════════════════════════════ */}
      {showAddModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.65)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
              maxWidth: "680px",
              width: "100%",
              maxHeight: "92vh",
              overflowY: "auto",
              padding: "28px",
              border: "1px solid #e2e8f0",
            }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {editingApp ? `Edit Case: ${editingApp.candidateName}` : "Enroll Candidate in Processing"}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Register candidate &amp; initialize work visa milestone tracking
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveApplication} className="space-y-4 text-xs font-medium">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Candidate Name */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Candidate Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma / Mohd Ali"
                    value={formData.candidateName}
                    onChange={(e) => setFormData({ ...formData, candidateName: e.target.value })}
                    style={s.input}
                    className="w-full"
                  />
                </div>

                {/* Passport Number */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Passport Number (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. M1234567"
                    value={formData.passportNumber}
                    onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
                    style={s.input}
                    className="w-full uppercase font-mono"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Phone / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={s.input}
                    className="w-full"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="candidate@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={s.input}
                    className="w-full"
                  />
                </div>

                {/* Destination Country */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Destination Country <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.targetCountry}
                    onChange={(e) => setFormData({ ...formData, targetCountry: e.target.value })}
                    style={s.input}
                    className="w-full bg-white cursor-pointer"
                  >
                    <optgroup label="Europe &amp; Schengen Area">
                      <option value="Poland">Poland</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Romania">Romania</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Malta">Malta</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Germany">Germany</option>
                      <option value="Lithuania">Lithuania</option>
                    </optgroup>
                    <optgroup label="GCC &amp; Middle East">
                      <option value="United Arab Emirates (UAE / Dubai)">United Arab Emirates (UAE / Dubai)</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Oman">Oman</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Bahrain">Bahrain</option>
                    </optgroup>
                    <optgroup label="Other Destinations">
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Russia">Russia</option>
                      <option value="General Destination">General Destination</option>
                    </optgroup>
                  </select>
                </div>

                {/* Job Trade */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Job Trade / Occupation <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Heavy Driver, Electrician, Cook..."
                    value={formData.jobTrade}
                    onChange={(e) => setFormData({ ...formData, jobTrade: e.target.value })}
                    style={s.input}
                    className="w-full"
                  />
                </div>

                {/* Current Stage */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Initial Stage
                  </label>
                  <select
                    value={formData.currentStage}
                    onChange={(e) => setFormData({ ...formData, currentStage: Number(e.target.value) })}
                    style={s.input}
                    className="w-full bg-white cursor-pointer"
                  >
                    {PROCESSING_STAGES.map((s) => (
                      <option key={s.step} value={s.step}>
                        Stage {s.step}: {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Initial Status */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Status
                  </label>
                  <select
                    value={formData.stageStatus}
                    onChange={(e) => setFormData({ ...formData, stageStatus: e.target.value as ApplicationItem["stageStatus"] })}
                    style={s.input}
                    className="w-full bg-white cursor-pointer"
                  >
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="on_hold">On Hold</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                {/* Assigned Counselor */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Assign To Counselor / Staff
                  </label>
                  <select
                    value={formData.assignedCounselorId}
                    onChange={(e) => setFormData({ ...formData, assignedCounselorId: e.target.value })}
                    style={s.input}
                    className="w-full bg-white cursor-pointer"
                  >
                    <option value="">Unassigned (General Pool)</option>
                    {employees.map((emp) => (
                      <option key={emp.id} value={emp.id}>
                        {emp.name} ({emp.role ? emp.role.toUpperCase() : "STAFF"})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Total Package Amount */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Total Package Amount (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 150000"
                    value={formData.packageAmount || ""}
                    onChange={(e) => setFormData({ ...formData, packageAmount: Number(e.target.value) })}
                    style={s.input}
                    className="w-full font-mono"
                  />
                </div>

                {/* Paid Amount */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Initial Paid Amount (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 50000"
                    value={formData.paidAmount || ""}
                    onChange={(e) => setFormData({ ...formData, paidAmount: Number(e.target.value) })}
                    style={s.input}
                    className="w-full font-mono"
                  />
                </div>

                {/* Work Permit No */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Work Permit Number (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. PL-WP-9821"
                    value={formData.workPermitNumber}
                    onChange={(e) => setFormData({ ...formData, workPermitNumber: e.target.value })}
                    style={s.input}
                    className="w-full font-mono"
                  />
                </div>

                {/* Notes */}
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Initial Case Remarks / Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Agreement executed, deposit received, PCC submitted..."
                    value={formData.remarks}
                    onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                    style={s.input}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  style={s.btnSecondary}
                  disabled={savingApp}
                >
                  Cancel
                </button>
                <button type="submit" disabled={savingApp} style={s.btnPrimary}>
                  <Save className="w-4 h-4" />
                  <span>{savingApp ? "Saving Case..." : editingApp ? "Update Case" : "Enroll Candidate"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── DELETE CONFIRMATION MODAL ── */}
      {deletingId && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.65)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              maxWidth: "440px",
              width: "100%",
              padding: "24px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#fee2e2",
                color: "#dc2626",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <Trash2 style={{ width: "24px", height: "24px" }} />
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>
              Delete Application Case?
            </h3>
            <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "20px", lineHeight: "1.5" }}>
              Are you sure you want to delete this candidate application? All stage milestone logs will be permanently removed.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
              <button onClick={() => setDeletingId(null)} style={s.btnSecondary} disabled={isDeleting}>
                Cancel
              </button>
              <button
                onClick={handleDeleteApplication}
                disabled={isDeleting}
                style={{
                  ...s.btnPrimary,
                  background: "#dc2626",
                  borderColor: "#dc2626",
                }}
              >
                {isDeleting ? "Deleting..." : "Yes, Delete Case"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Inline Design System Styles ──────────────────────────────────────
const s: Record<string, React.CSSProperties> = {
  loadingContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f172a",
  },
  spinner: {
    width: "32px",
    height: "32px",
    border: "3px solid rgba(255,255,255,0.1)",
    borderTopColor: "#6366f1",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "20px",
    flexWrap: "wrap",
    gap: "16px",
  },
  pageTitle: {
    margin: 0,
    fontSize: "24px",
    fontWeight: 800,
    color: "#0f172a",
    letterSpacing: "-0.5px",
  },
  pageSubtitle: {
    margin: "4px 0 0",
    fontSize: "13px",
    color: "#64748b",
  },
  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    background: "#4338ca",
    color: "white",
    border: "1px solid #3730a3",
    borderRadius: "10px",
    padding: "8px 16px",
    fontSize: "13px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(67, 56, 202, 0.25)",
    transition: "all 0.15s ease",
  },
  btnSecondary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    background: "white",
    color: "#334155",
    border: "1.5px solid #e2e8f0",
    borderRadius: "10px",
    padding: "8px 14px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.15s ease",
  },
  input: {
    padding: "8px 12px",
    border: "1.5px solid #e2e8f0",
    borderRadius: "10px",
    fontSize: "12px",
    color: "#1e293b",
    outline: "none",
  },
};
