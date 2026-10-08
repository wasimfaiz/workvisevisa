"use client";

/* ================================================================
   app/admin/inquiry/page.tsx — Clean & Optimized Leads & Inquiries CRM
   Streamlined, high-performance lead management dashboard with:
   - Live KPI Stat Highlights & Pipeline overview
   - Fast instant search, multi-faceted filters (Country, Staff, Status)
   - 1-Click WhatsApp integration & Direct Phone calling
   - Inline Status & Counselor Assignment updaters
   - Strictly numeric phone input validation & CSV Export
   - Clean, accessible modal dialogs for Notes and New Lead creation
   ================================================================ */

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Search,
  RefreshCw,
  Phone,
  MessageCircle,
  Download,
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
  FileSpreadsheet,
  Save,
  ArrowUpDown,
  Plus,
  UserPlus,
  MapPin,
  Tag,
  FileText,
  Inbox,
  Filter,
  Users,
  CheckCheck,
  Building,
  CreditCard,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";
import { EmployeePermissions } from "@/lib/types/rbac";

// ── Types ─────────────────────────────────────────────────────────

export interface InquiryItem {
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
  source: string;
  assignedTo?: {
    id?: string | null;
    name?: string;
    email?: string;
    role?: string;
  };
  createdAt: string;
  updatedAt?: string;
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
  permissions?: EmployeePermissions;
}

export default function AdminInquiryPage() {
  const router = useRouter();

  // Authentication & Admin state
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Data & Loading state
  const [inquiries, setInquiries] = useState<InquiryItem[]>([]);
  const [employees, setEmployees] = useState<EmployeeOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [statusUpdatingId, setStatusUpdatingId] = useState<string | null>(null);
  const [assigningId, setAssigningId] = useState<string | null>(null);

  // Filters & Search
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [countryFilter, setCountryFilter] = useState<string>("all");
  const [assignedFilter, setAssignedFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest");

  // Notes Modal state
  const [activeNoteInquiry, setActiveNoteInquiry] = useState<InquiryItem | null>(null);
  const [noteText, setNoteText] = useState("");
  const [savingNote, setSavingNote] = useState(false);

  // Add Lead Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [newLead, setNewLead] = useState({
    name: "",
    phone: "",
    country: "United Arab Emirates (UAE / Dubai)",
    customCountry: "",
    occupation: "",
    status: "new" as InquiryItem["status"],
    source: "Walk-in Office",
    customSource: "",
    notes: "",
    assignedToId: "",
  });
  const [addingLead, setAddingLead] = useState(false);

  // Delete Modal state
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Toast feedback state
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // 1. Check Authentication on Mount
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
          if (!isSuper && data.user.permissions?.inquiries?.view === false) {
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

  // 2. Fetch Inquiries & Staff Assignees
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
      console.error("Error fetching employees list:", err);
    }
  }, []);

  const fetchInquiries = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);

    try {
      const res = await fetch("/api/inquiries", { cache: "no-store" });
      if (!res.ok) {
        if (res.status === 401) {
          router.replace("/admin");
          return;
        }
        throw new Error("Failed to load inquiries");
      }
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setInquiries(data.data);
      }
    } catch (err) {
      console.error("Error fetching inquiries:", err);
      showToast("Unable to load latest inquiries. Please refresh.", "error");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [router]);

  useEffect(() => {
    if (!authLoading && admin) {
      fetchInquiries();
      fetchEmployees();
    }
  }, [authLoading, admin, fetchInquiries, fetchEmployees]);

  // Handle Add Lead Submission
  const handleAddLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLead.name.trim() || newLead.name.trim().length < 2) {
      showToast("Please enter candidate's full name (at least 2 characters)", "error");
      return;
    }
    const cleanDigits = newLead.phone.replace(/\D/g, "");
    if (!newLead.phone.trim() || cleanDigits.length < 7) {
      showToast("Please enter a valid phone or WhatsApp number (minimum 7 digits)", "error");
      return;
    }

    setAddingLead(true);
    try {
      const selectedCountry =
        newLead.country === "Other"
          ? newLead.customCountry.trim() || "Other"
          : newLead.country;

      const selectedOccupation = newLead.occupation.trim() || "General / Not Specified";

      const selectedSource =
        newLead.source === "Other"
          ? newLead.customSource.trim() || "Manual Entry"
          : newLead.source;

      let assignedPayload = null;
      if (newLead.assignedToId && newLead.assignedToId !== "unassigned") {
        const found = employees.find((emp) => emp.id === newLead.assignedToId);
        if (found) {
          assignedPayload = {
            id: found.id,
            name: found.name,
            email: found.email,
            role: found.role,
          };
        } else {
          assignedPayload = { id: newLead.assignedToId };
        }
      }

      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newLead.name.trim(),
          phone: newLead.phone.trim(),
          country: selectedCountry,
          occupation: selectedOccupation,
          status: newLead.status,
          source: selectedSource,
          notes: newLead.notes.trim(),
          assignedTo: assignedPayload,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to add lead");
      }

      showToast("Lead added successfully!", "success");
      setShowAddModal(false);
      setNewLead({
        name: "",
        phone: "",
        country: "United Arab Emirates (UAE / Dubai)",
        customCountry: "",
        occupation: "",
        status: "new",
        source: "Walk-in Office",
        customSource: "",
        notes: "",
        assignedToId: "",
      });
      fetchInquiries();
    } catch (err) {
      console.error("Error adding lead:", err);
      const msg = err instanceof Error ? err.message : "Failed to add lead";
      showToast(msg, "error");
    } finally {
      setAddingLead(false);
    }
  };

  // Handle Assigning Lead to an Employee / Counselor
  const handleAssignChange = async (inquiryId: string, employeeIdOrValue: string) => {
    setAssigningId(inquiryId);
    let targetAssignee: { id: string | null; name: string; email: string; role: string } | null = null;

    if (employeeIdOrValue && employeeIdOrValue !== "unassigned") {
      const found = employees.find((e) => e.id === employeeIdOrValue || e.name === employeeIdOrValue);
      if (found) {
        targetAssignee = {
          id: found.id,
          name: found.name,
          email: found.email,
          role: found.role,
        };
      } else {
        targetAssignee = {
          id: employeeIdOrValue,
          name: employeeIdOrValue,
          email: "",
          role: "staff",
        };
      }
    }

    // Optimistic UI update
    setInquiries((prev) =>
      prev.map((item) =>
        item.id === inquiryId
          ? {
              ...item,
              assignedTo: targetAssignee || undefined,
            }
          : item
      )
    );

    try {
      const res = await fetch(`/api/inquiries/${inquiryId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ assignedTo: targetAssignee || employeeIdOrValue }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to update assigned counselor");
      }

      if (data.data) {
        setInquiries((prev) =>
          prev.map((item) =>
            item.id === inquiryId
              ? {
                  ...item,
                  assignedTo: data.data.assignedTo,
                }
              : item
          )
        );
      }

      const assignedName = data.data?.assignedTo?.name || targetAssignee?.name;
      if (assignedName) {
        showToast(`Lead assigned to ${assignedName}`);
      } else {
        showToast("Lead unassigned");
      }
    } catch (err) {
      console.error("Assign update error:", err);
      showToast("Failed to assign lead on server. Please try again.", "error");
      fetchInquiries();
    } finally {
      setAssigningId(null);
    }
  };

  // 3. Handle Status Update
  const handleStatusChange = async (id: string, newStatus: InquiryItem["status"]) => {
    setStatusUpdatingId(id);
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );

    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to update status");
      }
      showToast(`Status updated to "${newStatus.replace("_", " ").toUpperCase()}"`);
    } catch (err) {
      console.error("Status update error:", err);
      showToast("Failed to update status on server. Please try again.", "error");
      fetchInquiries();
    } finally {
      setStatusUpdatingId(null);
    }
  };

  // 4. Handle Save Notes
  const handleSaveNote = async () => {
    if (!activeNoteInquiry) return;
    setSavingNote(true);

    try {
      const res = await fetch(`/api/inquiries/${activeNoteInquiry.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: noteText }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to save notes");
      }
      setInquiries((prev) =>
        prev.map((item) =>
          item.id === activeNoteInquiry.id ? { ...item, notes: noteText } : item
        )
      );
      showToast("Notes saved successfully.");
      setActiveNoteInquiry(null);
    } catch (err) {
      console.error("Notes save error:", err);
      showToast("Failed to save note. Please try again.", "error");
    } finally {
      setSavingNote(false);
    }
  };

  // 5. Handle Delete
  const handleDeleteInquiry = async () => {
    if (!deletingId) return;
    setIsDeleting(true);

    try {
      const res = await fetch(`/api/inquiries/${deletingId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to delete inquiry");
      }
      setInquiries((prev) => prev.filter((item) => item.id !== deletingId));
      showToast("Inquiry deleted successfully.");
      setDeletingId(null);
    } catch (err) {
      console.error("Delete inquiry error:", err);
      showToast("Failed to delete inquiry. Please try again.", "error");
    } finally {
      setIsDeleting(false);
    }
  };

  // 6. Export Inquiries to CSV
  const handleExportCSV = () => {
    if (inquiries.length === 0) {
      showToast("No inquiries available to export.", "error");
      return;
    }

    const headers = [
      "Inquiry ID",
      "Candidate Name",
      "Phone / WhatsApp",
      "Target Country",
      "Occupation",
      "Status",
      "Assigned Counselor",
      "Counselor Email",
      "Source",
      "Created Date & Time",
      "Admin Notes",
    ];

    const rows = filteredInquiries.map((item) => [
      `"${item.id}"`,
      `"${(item.name || "").replace(/"/g, '""')}"`,
      `"${(item.phone || "").replace(/"/g, '""')}"`,
      `"${(item.country || "").replace(/"/g, '""')}"`,
      `"${(item.occupation || "").replace(/"/g, '""')}"`,
      `"${item.status}"`,
      `"${(item.assignedTo?.name || "Unassigned").replace(/"/g, '""')}"`,
      `"${(item.assignedTo?.email || "").replace(/"/g, '""')}"`,
      `"${(item.source || "").replace(/"/g, '""')}"`,
      `"${new Date(item.createdAt).toLocaleString("en-IN")}"`,
      `"${(item.notes || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8,\uFEFF" +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    const dateStr = new Date().toISOString().slice(0, 10);
    link.setAttribute("download", `workwise-inquiries-${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Exported ${filteredInquiries.length} inquiries to CSV.`);
  };

  // 7. Derived Stats & Filtered Data
  const stats = useMemo(() => {
    const total = inquiries.length;
    const newCount = inquiries.filter((i) => i.status === "new").length;
    const interested = inquiries.filter((i) => i.status === "interested").length;
    const dnp = inquiries.filter((i) => i.status === "dnp").length;
    const contacted = inquiries.filter((i) => i.status === "contacted").length;
    const inProgress = inquiries.filter((i) => i.status === "in_progress").length;
    const paymentMode = inquiries.filter((i) => i.status === "payment_mode").length;
    const converted = inquiries.filter((i) => i.status === "converted").length;
    const notInterested = inquiries.filter((i) => i.status === "not_interested").length;
    const closed = inquiries.filter((i) => i.status === "closed").length;

    const unassignedCount = inquiries.filter(
      (i) => !i.assignedTo || (!i.assignedTo.id && !i.assignedTo.name)
    ).length;

    return {
      total,
      newCount,
      interested,
      dnp,
      contacted,
      inProgress,
      paymentMode,
      converted,
      notInterested,
      closed,
      unassignedCount,
    };
  }, [inquiries]);

  const uniqueCountries = useMemo(() => {
    const set = new Set<string>();
    inquiries.forEach((i) => {
      if (i.country) set.add(i.country.trim());
    });
    return Array.from(set).sort();
  }, [inquiries]);

  const filteredInquiries = useMemo(() => {
    return inquiries
      .filter((item) => {
        if (statusFilter !== "all" && item.status !== statusFilter) return false;
        if (countryFilter !== "all" && item.country !== countryFilter) return false;

        // Assignee filter
        if (assignedFilter !== "all") {
          const isItemAssigned = Boolean(item.assignedTo && (item.assignedTo.id || item.assignedTo.name));
          if (assignedFilter === "unassigned") {
            if (isItemAssigned) return false;
          } else {
            if (
              item.assignedTo?.id !== assignedFilter &&
              item.assignedTo?.name !== assignedFilter &&
              item.assignedTo?.email !== assignedFilter
            ) {
              return false;
            }
          }
        }

        if (search.trim()) {
          const q = search.toLowerCase();
          const matchName = item.name?.toLowerCase().includes(q);
          const matchPhone = item.phone?.toLowerCase().includes(q);
          const matchCountry = item.country?.toLowerCase().includes(q);
          const matchOcc = item.occupation?.toLowerCase().includes(q);
          const matchNotes = item.notes?.toLowerCase().includes(q);
          const matchAssignee =
            item.assignedTo?.name?.toLowerCase().includes(q) ||
            item.assignedTo?.role?.toLowerCase().includes(q);
          if (!matchName && !matchPhone && !matchCountry && !matchOcc && !matchNotes && !matchAssignee) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        const timeA = new Date(a.createdAt).getTime();
        const timeB = new Date(b.createdAt).getTime();
        return sortBy === "newest" ? timeB - timeA : timeA - timeB;
      });
  }, [inquiries, statusFilter, countryFilter, assignedFilter, search, sortBy]);

  // Status Style Helper
  const getStatusStyle = (status: InquiryItem["status"]) => {
    switch (status) {
      case "new":
        return {
          bg: "bg-emerald-50",
          text: "text-emerald-700",
          border: "border-emerald-200",
          dot: "bg-emerald-500",
          label: "New Lead",
        };
      case "interested":
        return {
          bg: "bg-teal-50",
          text: "text-teal-700",
          border: "border-teal-200",
          dot: "bg-teal-500",
          label: "Interested",
        };
      case "dnp":
        return {
          bg: "bg-rose-50",
          text: "text-rose-700",
          border: "border-rose-200",
          dot: "bg-rose-500",
          label: "DNP",
        };
      case "contacted":
        return {
          bg: "bg-amber-50",
          text: "text-amber-700",
          border: "border-amber-200",
          dot: "bg-amber-500",
          label: "Contacted",
        };
      case "in_progress":
        return {
          bg: "bg-blue-50",
          text: "text-blue-700",
          border: "border-blue-200",
          dot: "bg-blue-500",
          label: "In Progress",
        };
      case "payment_mode":
        return {
          bg: "bg-fuchsia-50",
          text: "text-fuchsia-700",
          border: "border-fuchsia-200",
          dot: "bg-fuchsia-500",
          label: "Payment Mode",
        };
      case "converted":
        return {
          bg: "bg-purple-50",
          text: "text-purple-700",
          border: "border-purple-200",
          dot: "bg-purple-500",
          label: "Converted",
        };
      case "not_interested":
        return {
          bg: "bg-red-50",
          text: "text-red-700",
          border: "border-red-200",
          dot: "bg-red-500",
          label: "Not Interested",
        };
      case "closed":
        return {
          bg: "bg-slate-100",
          text: "text-slate-600",
          border: "border-slate-300",
          dot: "bg-slate-400",
          label: "Closed",
        };
      default:
        return {
          bg: "bg-slate-50",
          text: "text-slate-700",
          border: "border-slate-200",
          dot: "bg-slate-400",
          label: status,
        };
    }
  };

  if (authLoading || !admin) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e1b4b]">
        <div className="w-10 h-10 border-4 border-white/20 border-t-indigo-400 rounded-full animate-spin" />
        <p className="mt-3 text-white text-sm font-semibold">Verifying admin access...</p>
      </div>
    );
  }

  const isSuper = admin?.role === "superadmin" || admin?.email === "wasim@yastudy.com";
  const canExportCSV = isSuper || Boolean(admin?.permissions?.inquiries?.export !== false);
  const canDeleteInquiry = isSuper || Boolean(admin?.permissions?.inquiries?.delete !== false);
  const canEditInquiry = isSuper || Boolean(admin?.permissions?.inquiries?.edit !== false);

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
          inquiries: inquiries.length,
          newInquiries: stats.newCount,
        }}
      />

      {/* ── MAIN CONTENT AREA ── */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-screen space-y-5">
        
        {/* Header Bar */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Candidate Leads &amp; Consultations
              </h1>
              {stats.newCount > 0 && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {stats.newCount} New
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {inquiries.length} total overseas candidate inquiries registered
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {canEditInquiry && (
              <button
                onClick={() => setShowAddModal(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-sm transition-all cursor-pointer"
                title="Add New Lead Manually"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Add Lead</span>
              </button>
            )}

            <button
              onClick={() => fetchInquiries(true)}
              disabled={refreshing || loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200 cursor-pointer disabled:opacity-50"
              title="Sync Latest Leads"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-indigo-600" : "text-slate-600"}`} />
              <span>{refreshing ? "Syncing..." : "Sync"}</span>
            </button>

            {canExportCSV && (
              <button
                onClick={handleExportCSV}
                disabled={inquiries.length === 0}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all cursor-pointer disabled:opacity-50"
                title="Export to Excel CSV"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>Export CSV</span>
              </button>
            )}
          </div>
        </div>

        {/* ── Compact Stat Highlights ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {[
            { label: "Total Leads", value: stats.total, color: "text-slate-900", bg: "bg-white" },
            { label: "New Leads", value: stats.newCount, color: "text-emerald-700", bg: "bg-emerald-50/70" },
            { label: "Interested", value: stats.interested, color: "text-teal-700", bg: "bg-teal-50/70" },
            { label: "In Progress", value: stats.inProgress + stats.contacted, color: "text-blue-700", bg: "bg-blue-50/70" },
            { label: "Payment Mode", value: stats.paymentMode, color: "text-fuchsia-700", bg: "bg-fuchsia-50/70" },
            { label: "Converted", value: stats.converted, color: "text-purple-700", bg: "bg-purple-50/70" },
            { label: "DNP (No Answer)", value: stats.dnp, color: "text-rose-700", bg: "bg-rose-50/70" },
            { label: "Not Interested", value: stats.notInterested, color: "text-slate-600", bg: "bg-slate-100/70" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`p-3 rounded-xl border border-slate-200/80 ${stat.bg} shadow-xs text-center transition-all hover:scale-[1.02]`}
            >
              <div className={`text-xl font-black ${stat.color}`}>{stat.value}</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tight mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Search & Filter Controls ── */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search candidate name, phone number, destination, occupation..."
                className="w-full pl-10 pr-9 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
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

            {/* Dropdown Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Destination Filter */}
              <select
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 outline-none cursor-pointer"
              >
                <option value="all">All Destinations ({uniqueCountries.length})</option>
                {uniqueCountries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              {/* Staff Assignee Filter */}
              <select
                value={assignedFilter}
                onChange={(e) => setAssignedFilter(e.target.value)}
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 outline-none cursor-pointer"
              >
                <option value="all">All Staff Leads ({inquiries.length})</option>
                <option value="unassigned">Unassigned Leads ({stats.unassignedCount})</option>
                {employees.map((emp) => {
                  const count = inquiries.filter(
                    (i) => i.assignedTo?.id === emp.id || i.assignedTo?.name === emp.name || i.assignedTo?.email === emp.email
                  ).length;
                  return (
                    <option key={emp.id} value={emp.id}>
                      {emp.name} ({count})
                    </option>
                  );
                })}
              </select>

              {/* Sort Toggle */}
              <button
                onClick={() => setSortBy((prev) => (prev === "newest" ? "oldest" : "newest"))}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 cursor-pointer"
              >
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
                <span>{sortBy === "newest" ? "Newest First" : "Oldest First"}</span>
              </button>
            </div>
          </div>

          {/* Status Tabs Row */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
            {[
              { id: "all", label: "All Leads", count: inquiries.length },
              { id: "new", label: "New", count: stats.newCount },
              { id: "interested", label: "Interested", count: stats.interested },
              { id: "in_progress", label: "In Progress", count: stats.inProgress },
              { id: "payment_mode", label: "Payment", count: stats.paymentMode },
              { id: "converted", label: "Converted", count: stats.converted },
              { id: "dnp", label: "DNP", count: stats.dnp },
              { id: "not_interested", label: "Not Interested", count: stats.notInterested },
              { id: "closed", label: "Closed", count: stats.closed },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  statusFilter === tab.id
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* ── Leads Data Table ── */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-sm text-slate-500 font-medium">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto text-indigo-600 mb-2" />
              Loading inquiries...
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="p-12 text-center">
              <Inbox className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="font-extrabold text-base text-slate-800">No Consultation Leads Found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                {search || statusFilter !== "all" || countryFilter !== "all" || assignedFilter !== "all"
                  ? "No leads match your active filters. Try clearing your search parameters."
                  : "When candidates submit the consultation form on the website, they will appear here."}
              </p>
              {(search || statusFilter !== "all" || countryFilter !== "all" || assignedFilter !== "all") && (
                <button
                  onClick={() => {
                    setSearch("");
                    setStatusFilter("all");
                    setCountryFilter("all");
                    setAssignedFilter("all");
                  }}
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 cursor-pointer"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-extrabold text-slate-500 uppercase tracking-wider">
                    <th className="py-3.5 px-4 w-12 text-center">#</th>
                    <th className="py-3.5 px-4">Candidate &amp; Submission</th>
                    <th className="py-3.5 px-4">Phone &amp; Connect</th>
                    <th className="py-3.5 px-4">Destination &amp; Trade</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4">Assigned Counselor</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredInquiries.map((inq, idx) => {
                    const cleanPhone = inq.phone.replace(/[^\d+]/g, "");
                    const waPhone = cleanPhone.startsWith("+")
                      ? cleanPhone.replace("+", "")
                      : cleanPhone.length === 10
                      ? `91${cleanPhone}`
                      : cleanPhone;

                    const waMessage = encodeURIComponent(
                      `Hello ${inq.name}, greetings from WorkWise Visa! Thank you for requesting an overseas work visa consultation for ${inq.country}. We would love to assess your profile for ${inq.occupation}.`
                    );

                    const badge = getStatusStyle(inq.status);

                    return (
                      <tr
                        key={inq.id}
                        className={`transition-all hover:bg-slate-50/80 ${
                          inq.status === "new" ? "bg-emerald-50/30" : ""
                        }`}
                      >
                        {/* Index */}
                        <td className="py-3.5 px-4 text-center font-bold text-slate-400">
                          {idx + 1}
                        </td>

                        {/* Candidate Name & Submission Date */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-sm text-slate-900">
                              {inq.name}
                            </span>
                            {inq.status === "new" && (
                              <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black px-1.5 py-0.5 rounded uppercase">
                                NEW
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {new Date(inq.createdAt).toLocaleString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          </div>
                          {inq.notes && (
                            <div className="mt-1.5 text-[11px] bg-amber-50 border border-amber-200/80 rounded-lg px-2 py-1 text-amber-900 max-w-xs truncate">
                              <strong>Note:</strong> {inq.notes}
                            </div>
                          )}
                        </td>

                        {/* Phone & 1-Click WhatsApp / Call */}
                        <td className="py-3.5 px-4">
                          <div className="font-mono font-bold text-slate-800">
                            {inq.phone}
                          </div>
                          <div className="flex items-center gap-1.5 mt-1">
                            <a
                              href={`https://wa.me/${waPhone}?text=${waMessage}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-bold text-white bg-[#25d366] hover:bg-[#20ba59] shadow-2xs transition-all"
                              title="Chat on WhatsApp"
                            >
                              <MessageCircle className="w-3 h-3" />
                              <span>WhatsApp</span>
                            </a>
                            <a
                              href={`tel:${cleanPhone}`}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-all"
                              title="Direct Phone Call"
                            >
                              <Phone className="w-3 h-3" />
                              <span>Call</span>
                            </a>
                          </div>
                        </td>

                        {/* Country & Occupation */}
                        <td className="py-3.5 px-4">
                          <div className="inline-flex items-center gap-1 font-bold text-slate-800">
                            <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span>{inq.country || "General Destination"}</span>
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            {inq.occupation || "General / Unspecified"}
                          </div>
                        </td>

                        {/* Status Select Badge */}
                        <td className="py-3.5 px-4">
                          <select
                            value={inq.status}
                            disabled={statusUpdatingId === inq.id}
                            onChange={(e) =>
                              handleStatusChange(inq.id, e.target.value as InquiryItem["status"])
                            }
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold border outline-none cursor-pointer ${badge.bg} ${badge.text} ${badge.border}`}
                          >
                            <option value="new">New Lead</option>
                            <option value="interested">Interested</option>
                            <option value="dnp">DNP (No Answer)</option>
                            <option value="contacted">Contacted</option>
                            <option value="in_progress">In Progress</option>
                            <option value="payment_mode">Payment Mode</option>
                            <option value="converted">Converted</option>
                            <option value="not_interested">Not Interested</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>

                        {/* Assigned Counselor */}
                        <td className="py-3.5 px-4">
                          {(() => {
                            let selectedVal = "unassigned";
                            if (inq.assignedTo) {
                              if (inq.assignedTo.id && employees.some((e) => e.id === inq.assignedTo?.id)) {
                                selectedVal = inq.assignedTo.id;
                              } else if (inq.assignedTo.name) {
                                const foundByName = employees.find(
                                  (e) => e.name.trim().toLowerCase() === inq.assignedTo?.name?.trim().toLowerCase()
                                );
                                selectedVal = foundByName ? foundByName.id : (inq.assignedTo.id || inq.assignedTo.name);
                              } else if (inq.assignedTo.id) {
                                selectedVal = inq.assignedTo.id;
                              }
                            }

                            const hasAssignee = selectedVal !== "unassigned";

                            return (
                              <div className="flex items-center gap-1.5">
                                <select
                                  value={selectedVal}
                                  disabled={assigningId === inq.id}
                                  onChange={(e) => handleAssignChange(inq.id, e.target.value)}
                                  className={`px-2 py-1 rounded-lg text-xs font-bold border outline-none cursor-pointer max-w-[150px] ${
                                    hasAssignee
                                      ? "bg-purple-50 text-purple-800 border-purple-200"
                                      : "bg-slate-50 text-slate-500 border-dashed border-slate-300"
                                  }`}
                                >
                                  <option value="unassigned">Unassigned</option>
                                  {employees.map((emp) => (
                                    <option key={emp.id} value={emp.id}>
                                      {emp.name} ({emp.role ? emp.role.toUpperCase() : "STAFF"})
                                    </option>
                                  ))}
                                </select>
                                {assigningId === inq.id && (
                                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-indigo-600" />
                                )}
                              </div>
                            );
                          })()}
                        </td>

                        {/* Actions (Notes / Delete) */}
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                setActiveNoteInquiry(inq);
                                setNoteText(inq.notes || "");
                              }}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
                              title="View & Edit Notes"
                            >
                              <Edit3 className="w-3 h-3 text-slate-500" />
                              <span>{inq.notes ? "Note" : "+ Note"}</span>
                            </button>

                            {canDeleteInquiry && (
                              <button
                                onClick={() => setDeletingId(inq.id)}
                                className="p-1.5 rounded-lg text-rose-600 bg-rose-50 hover:bg-rose-100 transition-all cursor-pointer"
                                title="Delete Lead"
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

      {/* ── Follow-up Notes Modal ── */}
      {activeNoteInquiry && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-5 sm:p-6 border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">Follow-up Notes</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Candidate: <strong>{activeNoteInquiry.name}</strong> ({activeNoteInquiry.phone})
                </p>
              </div>
              <button
                onClick={() => setActiveNoteInquiry(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Discussion History &amp; Remarks
              </label>
              <textarea
                rows={4}
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="e.g. Spoke on WhatsApp, interested in Poland Heavy Driver permit, passport valid till 2029, will submit advance next week..."
                className="w-full p-3 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 outline-none resize-none leading-relaxed"
              />

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveNoteInquiry(null)}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveNote}
                  disabled={savingNote}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm cursor-pointer disabled:opacity-50"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{savingNote ? "Saving..." : "Save Note"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Confirmation Modal ── */}
      {deletingId && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-center border border-slate-200">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-3">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">Delete this Lead?</h3>
            <p className="text-xs text-slate-500 mt-1">
              Are you sure you want to permanently delete this consultation record? This cannot be undone.
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
                onClick={handleDeleteInquiry}
                disabled={isDeleting}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-sm cursor-pointer disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Add New Lead Modal ── */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <UserPlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">Add New Lead</h3>
                  <p className="text-xs text-slate-500">Register candidate consultation request</p>
                </div>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddLead} className="mt-4 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Candidate Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={newLead.name}
                  onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  required
                  placeholder="e.g. 9876543210 or +919876543210"
                  value={newLead.phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9+]/g, "");
                    setNewLead({ ...newLead, phone: val });
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 outline-none"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Add country code for direct 1-click WhatsApp messaging.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Target Country
                  </label>
                  <select
                    value={newLead.country}
                    onChange={(e) => setNewLead({ ...newLead, country: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none cursor-pointer"
                  >
                    <optgroup label="GCC &amp; Gulf (High Demand)">
                      <option value="United Arab Emirates (UAE / Dubai)">UAE / Dubai</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Oman">Oman</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Bahrain">Bahrain</option>
                    </optgroup>
                    <optgroup label="Europe &amp; Schengen">
                      <option value="Poland">Poland</option>
                      <option value="Romania">Romania</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Malta">Malta</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Germany">Germany</option>
                    </optgroup>
                    <optgroup label="Other Destinations">
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="United States">United States</option>
                      <option value="General Destination">General Destination</option>
                      <option value="Other">Other Country...</option>
                    </optgroup>
                  </select>
                  {newLead.country === "Other" && (
                    <input
                      type="text"
                      placeholder="Custom Country..."
                      value={newLead.customCountry}
                      onChange={(e) => setNewLead({ ...newLead, customCountry: e.target.value })}
                      className="w-full mt-2 px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none"
                    />
                  )}
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Occupation / Trade <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Heavy Driver, Welder"
                    value={newLead.occupation}
                    onChange={(e) => setNewLead({ ...newLead, occupation: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Lead Source
                  </label>
                  <select
                    value={newLead.source}
                    onChange={(e) => setNewLead({ ...newLead, source: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none cursor-pointer"
                  >
                    <option value="Walk-in Office">Walk-in Office</option>
                    <option value="Phone Call Inquiry">Phone Call Inquiry</option>
                    <option value="WhatsApp Direct">WhatsApp Direct</option>
                    <option value="Instagram / Facebook Ad">Social Media Ad</option>
                    <option value="Agent / Referral">Agent / Referral</option>
                    <option value="Website Form">Website Form</option>
                    <option value="Other">Other Source...</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Initial Status
                  </label>
                  <select
                    value={newLead.status}
                    onChange={(e) => setNewLead({ ...newLead, status: e.target.value as InquiryItem["status"] })}
                    className="w-full px-3 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none cursor-pointer"
                  >
                    <option value="new">New Lead</option>
                    <option value="interested">Interested</option>
                    <option value="dnp">DNP (Did Not Pick)</option>
                    <option value="contacted">Contacted</option>
                    <option value="in_progress">In Progress</option>
                    <option value="payment_mode">Payment Mode</option>
                    <option value="converted">Converted</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Assign To Staff / Counselor
                </label>
                <select
                  value={newLead.assignedToId}
                  onChange={(e) => setNewLead({ ...newLead, assignedToId: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none cursor-pointer"
                >
                  <option value="">Unassigned (General Pool)</option>
                  {employees.map((emp) => (
                    <option key={emp.id} value={emp.id}>
                      {emp.name} ({emp.role ? emp.role.toUpperCase() : "STAFF"})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Initial Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Passport valid till 2030, GCC driving license holder..."
                  value={newLead.notes}
                  onChange={(e) => setNewLead({ ...newLead, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white outline-none resize-none leading-relaxed"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  disabled={addingLead}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={addingLead}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm cursor-pointer disabled:opacity-50"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{addingLead ? "Saving..." : "Create Lead"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
