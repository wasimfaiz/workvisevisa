"use client";

/* ================================================================
   app/admin/applications/page.tsx — Clean & Optimized Application Tracker
   Comprehensive 7-Stage Work Visa Milestone Tracker featuring:
   - 5-KPI executive overview cards
   - Interactive 7-Stage workflow filter strip
   - Multi-facet search & filtering (Country, Counselor, Stage, Status)
   - Progress meter with 7 milestone step dots
   - 1-Click WhatsApp milestone update with live tracking link (/track)
   - Interactive Case Timeline Drawer with stage advance & audit logs
   - Strictly numeric inputs & Granular RBAC permission enforcement
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
  Plane,
  FileSearch,
  UserCheck,
  ShieldCheck,
  CreditCard,
  Send,
  AlertTriangle,
  History,
  Check,
  Save,
  Copy,
  ExternalLink,
  Share2,
  Sparkles,
  ChevronDown,
  Layers,
} from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";
import { PROCESSING_STAGES, IStageHistory } from "@/lib/types/application";
import { EmployeePermissions } from "@/lib/types/rbac";

// ── Types ─────────────────────────────────────────────────────────

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
    return num.toLocaleString("en-IN", { maximumFractionDigits: 0 });
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
    const inProgress = applications.filter((a) => a.currentStage <= 5 && a.stageStatus === "in_progress").length;
    const visaApproved = applications.filter((a) => a.currentStage === 6 && a.stageStatus !== "rejected").length;
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
          bg: "bg-emerald-50",
          color: "text-emerald-700",
          border: "border-emerald-200",
          label: "Completed",
        };
      case "in_progress":
        return {
          bg: "bg-blue-50",
          color: "text-blue-700",
          border: "border-blue-200",
          label: "In Progress",
        };
      case "on_hold":
        return {
          bg: "bg-amber-50",
          color: "text-amber-700",
          border: "border-amber-200",
          label: "On Hold",
        };
      case "rejected":
        return {
          bg: "bg-rose-50",
          color: "text-rose-700",
          border: "border-rose-200",
          label: "Rejected",
        };
      default:
        return {
          bg: "bg-slate-50",
          color: "text-slate-700",
          border: "border-slate-200",
          label: status,
        };
    }
  };

  // 4. Open Case Details Drawer
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
      remarks: "Candidate enrolled for processing",
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
    const cleanDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim() || cleanDigits.length < 7) {
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
            remarks: formData.remarks.trim() || "Candidate enrolled for visa processing",
          }),
        });

        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.message || "Failed to create application");
        }

        showToast("New candidate case created successfully!");
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
    const waPhone = cleanPhone.startsWith("+")
      ? cleanPhone.replace("+", "")
      : cleanPhone.length === 10
      ? `91${cleanPhone}`
      : cleanPhone;

    const stageMeta = getStageMeta(app.currentStage);
    const origin = typeof window !== "undefined" ? window.location.origin : "https://workwisevisa.com";
    const trackingUrl = `${origin}/track?app=${encodeURIComponent(app.applicationNo)}`;
    const msg = `Hello ${app.candidateName},\n\nThis is an official milestone update regarding your Work Visa Application (*${app.applicationNo}*) for *${app.targetCountry}* (${app.jobTrade}) with WorkWise Visa.\n\n📍 *Current Processing Stage:* Stage ${app.currentStage}/7 — ${stageMeta.name}\n⚡ *Status:* ${app.stageStatus.toUpperCase()}\n${app.workPermitNumber ? `📄 *Work Permit No:* ${app.workPermitNumber}\n` : ""}${app.vfsAppointmentDate ? `🗓️ *VFS Appointment:* ${app.vfsAppointmentDate}\n` : ""}${app.visaNumber ? `✅ *Visa Grant No:* ${app.visaNumber}\n` : ""}${app.flightDate ? `✈️ *Flight Departure:* ${app.flightDate} (PNR: ${app.flightPnr || "Confirmed"})\n` : ""}\n🔗 *Track your live status anytime here:*\n${trackingUrl}\n\nOur visa processing division is actively managing your file. Please feel free to reach out if you have any questions.\n\nWarm Regards,\n*WorkWise Visa Immigration Team*`;
    return `https://wa.me/${waPhone}?text=${encodeURIComponent(msg)}`;
  };

  const copyTrackingLink = (app: ApplicationItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const origin = typeof window !== "undefined" ? window.location.origin : "https://workwisevisa.com";
    const link = `${origin}/track?app=${encodeURIComponent(app.applicationNo)}`;
    navigator.clipboard.writeText(link);
    showToast(`Live tracking link copied for ${app.candidateName}!`);
  };

  if (authLoading || !admin) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e1b4b]">
        <div className="w-10 h-10 border-4 border-white/20 border-t-purple-400 rounded-full animate-spin" />
        <p className="mt-3 text-white text-sm font-semibold">Verifying tracker access...</p>
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
          className={`fixed top-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-lg text-sm font-bold text-white transition-all animate-bounce ${
            toast.type === "success" ? "bg-emerald-600" : "bg-rose-600"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle2 className="w-4 h-4" />
          ) : (
            <AlertCircle className="w-4 h-4" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      {/* ── RESPONSIVE UNIFIED SIDEBAR ── */}
      <AdminSidebar
        currentUser={admin}
        counts={{
          applications: applications.length,
        }}
      />

      {/* ── MAIN CONTENT AREA ── */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-screen space-y-5">
        
        {/* Header Bar */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Candidate Application Tracker
              </h1>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-purple-100 text-purple-800 border border-purple-200">
                <Compass className="w-3.5 h-3.5 text-purple-600" />
                {applications.length} Active Files
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              End-to-end 7-stage work visa milestone management &amp; candidate passport tracking
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={() => fetchApplications(true)}
              disabled={refreshing || loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200 cursor-pointer disabled:opacity-50"
              title="Sync latest application cases"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-indigo-600" : "text-slate-600"}`} />
              <span>{refreshing ? "Syncing..." : "Sync"}</span>
            </button>

            {canCreate && (
              <button
                onClick={handleOpenAddModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-sm transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Enroll Candidate</span>
              </button>
            )}
          </div>
        </div>

        {/* ── 5 Executive KPI Highlights ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {/* Total Cases */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Enrolled</span>
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-black text-slate-900 tracking-tight">{metrics.total}</div>
              <div className="text-[11px] text-slate-500 font-medium">All processing files</div>
            </div>
          </div>

          {/* Active Processing */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500">In Progress</span>
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-black text-blue-600 tracking-tight">{metrics.inProgress}</div>
              <div className="text-[11px] text-slate-500 font-medium">Stages 1 to 5 active</div>
            </div>
          </div>

          {/* Visa Ready */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600">Visa Ready</span>
              <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-black text-teal-700 tracking-tight">{metrics.visaApproved}</div>
              <div className="text-[11px] text-slate-500 font-medium">Stage 6 · Stamped</div>
            </div>
          </div>

          {/* Deployed & Flown */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Deployed</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Plane className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-black text-emerald-700 tracking-tight">{metrics.deployed}</div>
              <div className="text-[11px] text-slate-500 font-medium">Stage 7 · Landed</div>
            </div>
          </div>

          {/* Financial Balance */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between col-span-2 sm:col-span-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Collected</span>
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <CreditCard className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2">
              <div className="text-lg font-black text-slate-900 tracking-tight">₹{formatCurrency(metrics.totalCollected)}</div>
              <div className="text-[11px] text-rose-600 font-bold">₹{formatCurrency(metrics.totalPending)} pending</div>
            </div>
          </div>
        </div>

        {/* ── 7-Stage Interactive Pipeline Roadmap Strip ── */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm overflow-x-auto">
          <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-700">
              <Layers className="w-3.5 h-3.5 text-purple-600" />
              Work Visa 7-Stage Milestone Workflow
            </span>
            <span className="text-[10px] text-slate-400 font-normal">Click a stage chip to filter list</span>
          </div>

          <div className="flex items-center gap-2 min-w-[820px]">
            {PROCESSING_STAGES.map((stg) => {
              const isSelected = stageFilter === String(stg.step);
              const count = applications.filter((a) => a.currentStage === stg.step).length;

              return (
                <button
                  key={stg.step}
                  onClick={() => setStageFilter(isSelected ? "all" : String(stg.step))}
                  className={`flex-1 flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-purple-50 border-purple-300 ring-2 ring-purple-500/20 shadow-xs"
                      : "bg-slate-50/70 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                      isSelected ? "bg-purple-700 text-white" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {stg.step}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-bold text-slate-800 truncate leading-tight">
                      {stg.shortName}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      {count} {count === 1 ? "case" : "cases"}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Search & Multi-Facet Filters ── */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search candidate name, passport no, application id, trade, permit..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 bg-slate-50"
            />
          </div>

          {/* Stage Dropdown */}
          <select
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 cursor-pointer outline-none"
          >
            <option value="all">All Stages (1-7)</option>
            {PROCESSING_STAGES.map((s) => (
              <option key={s.step} value={s.step}>
                Stage {s.step}: {s.shortName}
              </option>
            ))}
          </select>

          {/* Status Dropdown */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 cursor-pointer outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="on_hold">On Hold</option>
            <option value="rejected">Rejected</option>
          </select>

          {/* Destination Dropdown */}
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 cursor-pointer outline-none"
          >
            <option value="all">All Destinations ({uniqueCountries.length})</option>
            {uniqueCountries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* Counselor Dropdown */}
          <select
            value={counselorFilter}
            onChange={(e) => setCounselorFilter(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 cursor-pointer outline-none"
          >
            <option value="all">All Counselors</option>
            <option value="unassigned">Unassigned</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.name}
              </option>
            ))}
          </select>

          {/* Reset Filters */}
          {(search || stageFilter !== "all" || statusFilter !== "all" || countryFilter !== "all" || counselorFilter !== "all") && (
            <button
              onClick={() => {
                setSearch("");
                setStageFilter("all");
                setStatusFilter("all");
                setCountryFilter("all");
                setCounselorFilter("all");
              }}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-bold cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>

        {/* ── Candidate Applications Data Table ── */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          {loading ? (
            <div className="py-20 text-center text-slate-400 text-xs font-medium">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-purple-600" />
              Loading candidate tracking database...
            </div>
          ) : filteredApplications.length === 0 ? (
            <div className="py-16 text-center">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-3">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-800">No Applications Found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                {search || stageFilter !== "all"
                  ? "No candidate files match your search criteria. Try clearing active filters."
                  : "No candidates enrolled in processing yet. Click below to add your first case."}
              </p>
              {canCreate && (
                <button
                  onClick={handleOpenAddModal}
                  className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-sm transition inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Enroll First Candidate
                </button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-extrabold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4 w-12 text-center">#</th>
                    <th className="py-3 px-4">Candidate &amp; Passport</th>
                    <th className="py-3 px-4">Destination &amp; Trade</th>
                    <th className="py-3 px-4">7-Stage Progress</th>
                    <th className="py-3 px-4">Current Milestone</th>
                    <th className="py-3 px-4">Assigned Counselor</th>
                    <th className="py-3 px-4 text-right">Payment</th>
                    <th className="py-3 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {filteredApplications.map((app, idx) => {
                    const stageMeta = getStageMeta(app.currentStage);
                    const statusBadge = getStatusBadgeStyle(app.stageStatus);
                    const progressPercent = Math.round((app.currentStage / 7) * 100);

                    return (
                      <tr
                        key={app.id || idx}
                        onClick={() => handleOpenCase(app)}
                        className="hover:bg-purple-50/40 transition-colors cursor-pointer"
                      >
                        {/* Index */}
                        <td className="py-3.5 px-4 text-center text-slate-400 font-bold">{idx + 1}</td>

                        {/* Candidate Name & Passport */}
                        <td className="py-3.5 px-4">
                          <div className="font-extrabold text-slate-900 text-sm">{app.candidateName}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="bg-slate-100 text-slate-600 font-mono text-[10px] px-1.5 py-0.5 rounded border border-slate-200 font-bold">
                              {app.applicationNo}
                            </span>
                            {app.passportNumber ? (
                              <span className="font-mono text-[11px] text-purple-700 font-bold">
                                🛂 {app.passportNumber}
                              </span>
                            ) : (
                              <span className="text-[10px] text-slate-400">Passport pending</span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono mt-0.5">{app.phone}</div>
                        </td>

                        {/* Destination & Trade */}
                        <td className="py-3.5 px-4">
                          <div className="inline-flex items-center gap-1 font-bold text-slate-800 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-lg text-xs">
                            <Globe className="w-3 h-3 text-purple-600" />
                            {app.targetCountry}
                          </div>
                          <div className="text-slate-600 text-xs font-semibold mt-1 flex items-center gap-1">
                            <Briefcase className="w-3 h-3 text-slate-400" />
                            {app.jobTrade}
                          </div>
                        </td>

                        {/* Processing Progress */}
                        <td className="py-3.5 px-4 min-w-[160px]">
                          <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                            <span className="text-purple-700">Stage {app.currentStage}/7</span>
                            <span className="text-slate-400 font-mono">{progressPercent}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200 flex">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full transition-all duration-500"
                              style={{ width: `${progressPercent}%` }}
                            />
                          </div>
                          {/* Mini milestone dots */}
                          <div className="flex justify-between items-center mt-1 px-0.5">
                            {[1, 2, 3, 4, 5, 6, 7].map((sNum) => (
                              <div
                                key={sNum}
                                className={`w-1.5 h-1.5 rounded-full ${
                                  sNum < app.currentStage
                                    ? "bg-emerald-500"
                                    : sNum === app.currentStage
                                    ? "bg-purple-600 ring-2 ring-purple-200"
                                    : "bg-slate-200"
                                }`}
                              />
                            ))}
                          </div>
                        </td>

                        {/* Active Stage & Status */}
                        <td className="py-3.5 px-4">
                          <div className="font-extrabold text-slate-900 text-xs">{stageMeta.name}</div>
                          <div className="mt-1">
                            <span
                              className={`inline-flex items-center text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${statusBadge.bg} ${statusBadge.color} ${statusBadge.border}`}
                            >
                              {statusBadge.label}
                            </span>
                          </div>
                        </td>

                        {/* Counselor */}
                        <td className="py-3.5 px-4">
                          <div className="text-xs font-bold text-slate-800">
                            {app.assignedCounselor?.name || "Unassigned"}
                          </div>
                          <div className="text-[10px] text-slate-400 capitalize">
                            {app.assignedCounselor?.role || "General"}
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
                        <td className="py-3.5 px-4 text-center">
                          <div className="flex items-center justify-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                            {/* Copy Live Tracking Link */}
                            <button
                              onClick={(e) => copyTrackingLink(app, e)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition-all cursor-pointer"
                              title="Copy Live Public Tracking Link"
                            >
                              <Copy className="w-3.5 h-3.5" />
                            </button>

                            {/* 1-Click WhatsApp Milestone Update */}
                            <a
                              href={getWhatsAppUpdateUrl(app)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-all"
                              title="Send WhatsApp Milestone Update"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                            </a>

                            {/* Quick Advance 1 Step */}
                            {canEdit && app.currentStage < 7 && (
                              <button
                                onClick={(e) => handleQuickAdvance(app, e)}
                                className="p-1.5 rounded-lg text-purple-700 bg-purple-50 hover:bg-purple-100 transition-all cursor-pointer font-bold text-[10px] inline-flex items-center gap-0.5"
                                title="Quick Advance to Next Stage"
                              >
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            )}

                            {/* Edit Case */}
                            {canEdit && (
                              <button
                                onClick={(e) => handleOpenEditModal(app, e)}
                                className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
                                title="Edit Candidate Details"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                            )}

                            {/* Delete Case */}
                            {canDelete && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setDeletingId(app.id);
                                }}
                                className="p-1.5 rounded-lg text-rose-600 bg-rose-50 hover:bg-rose-100 transition-all cursor-pointer"
                                title="Delete Candidate File"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
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

      {/* ── CASE TIMELINE & MILESTONE ADVANCE DRAWER ── */}
      {activeCase && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-end">
          <div className="bg-white w-full max-w-xl h-full shadow-2xl overflow-y-auto p-6 flex flex-col justify-between border-l border-slate-200">
            <div>
              {/* Drawer Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-black text-slate-900">{activeCase.candidateName}</h2>
                    <span className="font-mono text-xs font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border">
                      {activeCase.applicationNo}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                    <span>{activeCase.jobTrade}</span>
                    <span>·</span>
                    <span className="font-bold text-purple-700">{activeCase.targetCountry}</span>
                    {activeCase.passportNumber && (
                      <>
                        <span>·</span>
                        <span className="font-mono font-bold">Pass: {activeCase.passportNumber}</span>
                      </>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setActiveCase(null)}
                  className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Actions Row */}
              <div className="flex items-center gap-2 my-4">
                <a
                  href={getWhatsAppUpdateUrl(activeCase)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-[#25d366] hover:bg-[#20ba59] shadow-xs transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Send WhatsApp Update
                </a>
                <Link
                  href={`/track?app=${encodeURIComponent(activeCase.applicationNo)}`}
                  target="_blank"
                  className="inline-flex items-center gap-1 py-2 px-3 rounded-xl text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Track Page
                </Link>
              </div>

              {/* Advance Milestone Box */}
              {canEdit && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    Advance Milestone / Change Status
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Target Stage</label>
                      <select
                        value={selectedNextStage}
                        onChange={(e) => setSelectedNextStage(Number(e.target.value))}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 font-bold text-slate-800 text-xs outline-none cursor-pointer"
                      >
                        {PROCESSING_STAGES.map((s) => (
                          <option key={s.step} value={s.step}>
                            Stage {s.step}: {s.shortName}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Status</label>
                      <select
                        value={selectedNextStatus}
                        onChange={(e) => setSelectedNextStatus(e.target.value as ApplicationItem["stageStatus"])}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 font-bold text-slate-800 text-xs outline-none cursor-pointer"
                      >
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="on_hold">On Hold</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Stage Remarks / Audit Note</label>
                    <input
                      type="text"
                      placeholder="e.g. Work permit approved by ministry, reference #PL-9821"
                      value={newRemarkText}
                      onChange={(e) => setNewRemarkText(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs outline-none"
                    />
                  </div>

                  <button
                    onClick={handleUpdateMilestone}
                    disabled={updatingStage}
                    className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer disabled:opacity-50"
                  >
                    {updatingStage ? "Updating Milestone..." : "Save Milestone Progress"}
                  </button>
                </div>
              )}

              {/* Stage Milestone Timeline */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <History className="w-3.5 h-3.5 text-purple-600" />
                  Chronological Processing Timeline
                </h3>

                <div className="space-y-4 pl-2 border-l-2 border-slate-200">
                  {PROCESSING_STAGES.map((stg) => {
                    const isDone = stg.step < activeCase.currentStage || (stg.step === activeCase.currentStage && activeCase.stageStatus === "completed");
                    const isCurrent = stg.step === activeCase.currentStage;
                    const historyRecord = activeCase.stageHistory?.find((h) => h.stageNumber === stg.step);

                    return (
                      <div key={stg.step} className="relative pl-6">
                        {/* Dot indicator */}
                        <div
                          className={`absolute -left-[9px] top-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black text-white ${
                            isDone
                              ? "bg-emerald-500"
                              : isCurrent
                              ? "bg-purple-600 ring-4 ring-purple-100"
                              : "bg-slate-300"
                          }`}
                        >
                          {isDone ? "✓" : stg.step}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-xs text-slate-900">
                              Stage {stg.step}: {stg.name}
                            </span>
                            {isCurrent && (
                              <span className="bg-purple-100 text-purple-800 text-[9px] font-black px-1.5 py-0.5 rounded uppercase">
                                Active ({activeCase.stageStatus})
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">{stg.description}</p>
                          {historyRecord && (
                            <div className="mt-1 text-[10px] text-slate-600 bg-slate-50 border border-slate-200 rounded px-2 py-1">
                              <strong>{new Date(historyRecord.date).toLocaleDateString("en-IN")}:</strong>{" "}
                              {historyRecord.remarks || "Updated by counselor"}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400">Created: {new Date(activeCase.createdAt).toLocaleDateString("en-IN")}</span>
              <button
                onClick={() => handleOpenEditModal(activeCase)}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg cursor-pointer"
              >
                Edit Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── CREATE / EDIT CANDIDATE CASE MODAL ── */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    {editingApp ? "Edit Candidate Case" : "Enroll New Candidate"}
                  </h3>
                  <p className="text-xs text-slate-500">7-Stage work visa tracking file</p>
                </div>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveApplication} className="mt-4 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Candidate Name */}
                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Candidate Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mohd Rashid Khan"
                    value={formData.candidateName}
                    onChange={(e) => setFormData({ ...formData, candidateName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-purple-500 outline-none"
                  />
                </div>

                {/* Passport Number */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Passport Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Z5689124"
                    value={formData.passportNumber}
                    onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value.toUpperCase() })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white font-mono outline-none"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    required
                    placeholder="e.g. 9876543210 or +919876543210"
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9+]/g, "");
                      setFormData({ ...formData, phone: val });
                    }}
                    className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white outline-none"
                  />
                </div>

                {/* Target Country */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Destination Country
                  </label>
                  <select
                    value={formData.targetCountry}
                    onChange={(e) => setFormData({ ...formData, targetCountry: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none cursor-pointer"
                  >
                    <optgroup label="Europe &amp; Schengen">
                      <option value="Poland">Poland</option>
                      <option value="Romania">Romania</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Malta">Malta</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Germany">Germany</option>
                    </optgroup>
                    <optgroup label="GCC &amp; Gulf">
                      <option value="United Arab Emirates (UAE / Dubai)">UAE / Dubai</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Oman">Oman</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Bahrain">Bahrain</option>
                    </optgroup>
                    <optgroup label="Other Destinations">
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="United States">United States</option>
                      <option value="General Destination">General Destination</option>
                    </optgroup>
                  </select>
                </div>

                {/* Job Trade */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Job Trade / Occupation <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Heavy Driver, Tile Mason"
                    value={formData.jobTrade}
                    onChange={(e) => setFormData({ ...formData, jobTrade: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white outline-none"
                  />
                </div>

                {/* Initial Stage */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Current Milestone Stage
                  </label>
                  <select
                    value={formData.currentStage}
                    onChange={(e) => setFormData({ ...formData, currentStage: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none cursor-pointer"
                  >
                    {PROCESSING_STAGES.map((s) => (
                      <option key={s.step} value={s.step}>
                        Stage {s.step}: {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Status
                  </label>
                  <select
                    value={formData.stageStatus}
                    onChange={(e) => setFormData({ ...formData, stageStatus: e.target.value as ApplicationItem["stageStatus"] })}
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none cursor-pointer"
                  >
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="on_hold">On Hold</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                {/* Assigned Counselor */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Assigned Counselor
                  </label>
                  <select
                    value={formData.assignedCounselorId}
                    onChange={(e) => setFormData({ ...formData, assignedCounselorId: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none cursor-pointer"
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
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Total Package Amount (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 150000"
                    value={formData.packageAmount || ""}
                    onChange={(e) => setFormData({ ...formData, packageAmount: Number(e.target.value) })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 font-mono outline-none"
                  />
                </div>

                {/* Paid Amount */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Paid Amount (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 50000"
                    value={formData.paidAmount || ""}
                    onChange={(e) => setFormData({ ...formData, paidAmount: Number(e.target.value) })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 font-mono outline-none"
                  />
                </div>

                {/* Work Permit No */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Work Permit Number (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. PL-WP-9821"
                    value={formData.workPermitNumber}
                    onChange={(e) => setFormData({ ...formData, workPermitNumber: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 font-mono outline-none"
                  />
                </div>

                {/* Initial Remarks */}
                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Initial Case Remarks / Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Agreement executed, advance received, PCC in progress..."
                    value={formData.remarks}
                    onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                    className="w-full p-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none resize-none leading-relaxed"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  disabled={savingApp}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingApp}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 shadow-sm cursor-pointer disabled:opacity-50"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{savingApp ? "Saving..." : editingApp ? "Update Case" : "Enroll Candidate"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── DELETE CONFIRMATION MODAL ── */}
      {deletingId && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-center border border-slate-200">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-3">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">Delete Application Case?</h3>
            <p className="text-xs text-slate-500 mt-1">
              Are you sure you want to delete this candidate application? All stage milestone logs will be permanently removed.
            </p>

            <div className="flex items-center justify-center gap-2.5 mt-5">
              <button
                type="button"
                onClick={() => setDeletingId(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteApplication}
                disabled={isDeleting}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-sm cursor-pointer disabled:opacity-50"
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
