"use client";

/* ================================================================
   app/admin/inquiry/page.tsx — WorkWise Visa Inquiries & Leads Management
   Matches the EXACT Admin Theme as Dashboard & Invoice Generator:
   - Deep Indigo/Purple gradient sidebar (#1e1b4b -> #312e81)
   - Consistent typography, stat cards, search/filter chips, and data table
   - 1-Click WhatsApp, Direct Call, Inline Status Updater, Notes & CSV Export
   ================================================================ */

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
} from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";

import { EmployeePermissions } from "@/lib/types/rbac";

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

      // Sync exact saved document from response
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

  // 6. Handle Sign Out
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      router.replace("/admin");
    }
  };

  // 7. Export Inquiries to CSV
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

  // 8. Derived Stats & Filtered Data
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
    const assignedCount = total - unassignedCount;

    const today = new Date().toDateString();
    const todayCount = inquiries.filter(
      (i) => new Date(i.createdAt).toDateString() === today
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
      assignedCount,
      todayCount,
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
          background: "#ecfdf5",
          color: "#047857",
          border: "1.5px solid #a7f3d0",
          dotColor: "#10b981",
          label: "New Lead",
        };
      case "interested":
        return {
          background: "#f0fdf4",
          color: "#15803d",
          border: "1.5px solid #86efac",
          dotColor: "#22c55e",
          label: "Interested",
        };
      case "dnp":
        return {
          background: "#fff1f2",
          color: "#be123c",
          border: "1.5px solid #fecdd3",
          dotColor: "#f43f5e",
          label: "DNP (Did Not Pick)",
        };
      case "contacted":
        return {
          background: "#fffbeb",
          color: "#b45309",
          border: "1.5px solid #fde68a",
          dotColor: "#f59e0b",
          label: "Contacted",
        };
      case "in_progress":
        return {
          background: "#eff6ff",
          color: "#1d4ed8",
          border: "1.5px solid #bfdbfe",
          dotColor: "#3b82f6",
          label: "In Progress",
        };
      case "payment_mode":
        return {
          background: "#fdf4ff",
          color: "#a21caf",
          border: "1.5px solid #f5d0fe",
          dotColor: "#d946ef",
          label: "Payment Mode",
        };
      case "converted":
        return {
          background: "#f5f3ff",
          color: "#6d28d9",
          border: "1.5px solid #ddd6fe",
          dotColor: "#8b5cf6",
          label: "Converted",
        };
      case "not_interested":
        return {
          background: "#fef2f2",
          color: "#b91c1c",
          border: "1.5px solid #fecaca",
          dotColor: "#ef4444",
          label: "Not Interested",
        };
      case "closed":
        return {
          background: "#f1f5f9",
          color: "#64748b",
          border: "1.5px solid #cbd5e1",
          dotColor: "#94a3b8",
          label: "Closed / Lost",
        };
      default:
        return {
          background: "#f8fafc",
          color: "#475569",
          border: "1.5px solid #e2e8f0",
          dotColor: "#64748b",
          label: status,
        };
    }
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

  const isSuper = admin?.role === "superadmin" || admin?.email === "wasim@yastudy.com";
  const canViewJobs = isSuper || Boolean(admin?.permissions?.jobs?.view !== false);
  const canViewInvoices = isSuper || Boolean(admin?.permissions?.invoices?.view);
  const canViewEmployees = isSuper || Boolean(admin?.permissions?.employees?.view);
  const canExportCSV = isSuper || Boolean(admin?.permissions?.inquiries?.export !== false);
  const canDeleteInquiry = isSuper || Boolean(admin?.permissions?.inquiries?.delete !== false);
  const canEditInquiry = isSuper || Boolean(admin?.permissions?.inquiries?.edit !== false);

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

      {/* ── RESPONSIVE UNIFIED SIDEBAR ── */}
      <AdminSidebar
        currentUser={admin}
        counts={{
          inquiries: inquiries.length,
          newInquiries: stats.newCount,
        }}
      />

      {/* ── MAIN CONTENT AREA ── */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-screen">
        {/* Header */}
        <div style={s.header}>
          <div>
            <h1 style={s.pageTitle}>Consultation Inquiries &amp; Leads</h1>
            <p style={s.pageSubtitle}>
              {inquiries.length} total consultation requests · {stats.newCount} new leads pending review
            </p>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
            {canEditInquiry && (
              <button
                onClick={() => setShowAddModal(true)}
                style={{
                  ...s.btnPrimary,
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  boxShadow: "0 4px 14px rgba(16, 185, 129, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                title="Add New Lead Manually"
              >
                <UserPlus style={{ width: "16px", height: "16px" }} />
                <span>+ Add Lead</span>
              </button>
            )}

            <button
              onClick={() => fetchInquiries(true)}
              disabled={refreshing || loading}
              style={{ ...s.btnSecondary, display: "flex", alignItems: "center", gap: "8px" }}
              title="Refresh Inquiries"
            >
              <RefreshCw
                className={refreshing ? "animate-spin" : ""}
                style={{ width: "15px", height: "15px", color: refreshing ? "#6366f1" : "inherit" }}
              />
              <span>{refreshing ? "Syncing..." : "Refresh"}</span>
            </button>

            <button
              onClick={handleExportCSV}
              disabled={inquiries.length === 0}
              style={{ ...s.btnPrimary, display: "flex", alignItems: "center", gap: "8px" }}
            >
              <Download style={{ width: "15px", height: "15px" }} />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* ── KPI Stat Cards ── */}
        <div style={s.statsRow}>
          {[
            { label: "Total Leads", value: stats.total, color: "#6366f1" },
            { label: "New Leads", value: stats.newCount, color: "#10b981" },
            { label: "Interested", value: stats.interested, color: "#059669" },
            { label: "DNP (Did Not Pick)", value: stats.dnp, color: "#e11d48" },
            { label: "Payment Mode", value: stats.paymentMode, color: "#c026d3" },
            { label: "In Progress / Contacted", value: stats.inProgress + stats.contacted, color: "#2563eb" },
            { label: "Converted Clients", value: stats.converted, color: "#7c3aed" },
            { label: "Not Interested", value: stats.notInterested, color: "#dc2626" },
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

        {/* ── Search & Filter Bar ── */}
        <div style={{ ...s.card, padding: "16px 20px", marginBottom: "20px" }}>
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by candidate name, phone, country, occupation..."
                style={{ ...s.input, paddingLeft: "40px", fontSize: "13px", width: "100%" }}
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#9ca3af",
                  }}
                >
                  <X style={{ width: "15px", height: "15px" }} />
                </button>
              )}
            </div>

            {/* Country Selector */}
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              style={{
                ...s.input,
                width: "auto",
                minWidth: "165px",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <option value="all">All Destinations ({uniqueCountries.length})</option>
              {uniqueCountries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {/* Assigned Staff Filter */}
            <select
              value={assignedFilter}
              onChange={(e) => setAssignedFilter(e.target.value)}
              style={{
                ...s.input,
                width: "auto",
                minWidth: "190px",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <option value="all">All Staff Leads ({inquiries.length})</option>
              <option value="unassigned">Unassigned Leads ({stats.unassignedCount})</option>
              {employees.map((emp) => {
                const empLeadCount = inquiries.filter(
                  (i) => i.assignedTo?.id === emp.id || i.assignedTo?.name === emp.name || i.assignedTo?.email === emp.email
                ).length;
                return (
                  <option key={emp.id} value={emp.id}>
                    {emp.name} ({empLeadCount})
                  </option>
                );
              })}
            </select>

            {/* Sort Order */}
            <button
              onClick={() => setSortBy((prev) => (prev === "newest" ? "oldest" : "newest"))}
              style={{ ...s.btnSecondary, padding: "10px 14px", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}
              title="Toggle Sort"
            >
              <ArrowUpDown style={{ width: "14px", height: "14px", color: "#6b7280" }} />
              <span>{sortBy === "newest" ? "Newest" : "Oldest"}</span>
            </button>

            {/* Status Filter Buttons */}
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
              {[
                { id: "all", label: `All (${inquiries.length})` },
                { id: "new", label: `New (${stats.newCount})` },
                { id: "interested", label: `Interested (${stats.interested})` },
                { id: "dnp", label: `DNP (${stats.dnp})` },
                { id: "contacted", label: `Contacted (${stats.contacted})` },
                { id: "in_progress", label: `In Progress (${stats.inProgress})` },
                { id: "payment_mode", label: `Payment Mode (${stats.paymentMode})` },
                { id: "converted", label: `Converted (${stats.converted})` },
                { id: "not_interested", label: `Not Interested (${stats.notInterested})` },
                { id: "closed", label: `Closed (${stats.closed})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setStatusFilter(tab.id)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: 700,
                    cursor: "pointer",
                    border: "1px solid",
                    transition: "all 0.15s",
                    background: statusFilter === tab.id ? "#6366f1" : "#f8fafc",
                    color: statusFilter === tab.id ? "white" : "#475569",
                    borderColor: statusFilter === tab.id ? "#6366f1" : "#e2e8f0",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Inquiries Table Card ── */}
        <div style={s.card}>
          {loading ? (
            <div style={{ padding: "48px", textAlign: "center", color: "#6b7280" }}>
              <RefreshCw
                className="animate-spin"
                style={{ width: "24px", height: "24px", margin: "0 auto 12px", color: "#6366f1" }}
              />
              Loading consultation inquiries…
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div style={{ padding: "56px 20px", textAlign: "center" }}>
              <Inbox style={{ width: "42px", height: "42px", color: "#cbd5e1", margin: "0 auto 12px" }} />
              <div style={{ color: "#374151", fontWeight: 700, fontSize: "16px" }}>
                No Consultation Inquiries Found
              </div>
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "13px",
                  marginTop: "4px",
                  maxWidth: "460px",
                  margin: "4px auto 0",
                }}
              >
                {search || statusFilter !== "all" || countryFilter !== "all" || assignedFilter !== "all"
                  ? "No leads matched your search/filter criteria. Try clearing filters."
                  : "When candidates fill the 'Book Free Consultation' form on the website, they will appear here in real time."}
              </p>
              {(search || statusFilter !== "all" || countryFilter !== "all" || assignedFilter !== "all") && (
                <button
                  onClick={() => {
                    setSearch("");
                    setStatusFilter("all");
                    setCountryFilter("all");
                    setAssignedFilter("all");
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
                    <th style={s.th}>Assigned Counselor / Staff</th>
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

                    const currentStyle = getStatusStyle(inq.status);

                    return (
                      <tr
                        key={inq.id}
                        style={{
                          background: inq.status === "new" ? "#f0fdf4" : idx % 2 === 0 ? "white" : "#f9fafb",
                          transition: "background 0.15s",
                        }}
                      >
                        {/* Index */}
                        <td
                          style={{
                            ...s.td,
                            textAlign: "center",
                            color: "#9ca3af",
                            fontWeight: 700,
                            fontSize: "12px",
                          }}
                        >
                          {idx + 1}
                        </td>

                        {/* Candidate Name & Date */}
                        <td style={s.td}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ fontWeight: 700, color: "#0f172a", fontSize: "14px" }}>
                              {inq.name}
                            </span>
                            {inq.status === "new" && (
                              <span
                                style={{
                                  background: "#dcfce7",
                                  color: "#15803d",
                                  border: "1px solid #86efac",
                                  borderRadius: "999px",
                                  padding: "1px 7px",
                                  fontSize: "10px",
                                  fontWeight: 800,
                                  textTransform: "uppercase",
                                }}
                              >
                                NEW
                              </span>
                            )}
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
                          {inq.notes && (
                            <div
                              style={{
                                marginTop: "6px",
                                fontSize: "11px",
                                background: "#fffbeb",
                                border: "1px solid #fef3c7",
                                borderRadius: "6px",
                                padding: "4px 8px",
                                color: "#92400e",
                                maxWidth: "320px",
                              }}
                            >
                              <strong>Note:</strong> {inq.notes}
                            </div>
                          )}
                        </td>

                        {/* Phone & Connect */}
                        <td style={s.td}>
                          <div
                            style={{
                              fontFamily: "monospace",
                              fontWeight: 600,
                              color: "#1e293b",
                              fontSize: "13px",
                            }}
                          >
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

                        {/* Country */}
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
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <MapPin style={{ width: "12px", height: "12px", color: "#166534" }} />
                            <span>{inq.country || "General Destination"}</span>
                          </span>
                        </td>

                        {/* Occupation */}
                        <td style={s.td}>
                          <div style={{ color: "#334155", fontSize: "13px", fontWeight: 600 }}>
                            {inq.occupation || "Not Specified"}
                          </div>
                        </td>

                        {/* Status Dropdown */}
                        <td style={s.td}>
                          <select
                            value={inq.status}
                            disabled={statusUpdatingId === inq.id}
                            onChange={(e) =>
                              handleStatusChange(inq.id, e.target.value as InquiryItem["status"])
                            }
                            style={{
                              padding: "5px 10px",
                              borderRadius: "8px",
                              fontSize: "12px",
                              fontWeight: 700,
                              cursor: "pointer",
                              border: currentStyle.border,
                              background: currentStyle.background,
                              color: currentStyle.color,
                              outline: "none",
                            }}
                          >
                            <option value="new">New Lead</option>
                            <option value="interested">Interested</option>
                            <option value="dnp">DNP (Did Not Pick)</option>
                            <option value="contacted">Contacted</option>
                            <option value="in_progress">In Progress</option>
                            <option value="payment_mode">Payment Mode</option>
                            <option value="converted">Converted</option>
                            <option value="not_interested">Not Interested</option>
                            <option value="closed">Closed / Lost</option>
                          </select>
                        </td>

                        {/* Assigned Counselor / Staff Column */}
                        <td style={s.td}>
                          {(() => {
                            let selectedVal = "unassigned";
                            if (inq.assignedTo) {
                              if (inq.assignedTo.id && employees.some((e) => e.id === inq.assignedTo?.id)) {
                                selectedVal = inq.assignedTo.id;
                              } else if (inq.assignedTo.name) {
                                const foundByName = employees.find(
                                  (e) => e.name.trim().toLowerCase() === inq.assignedTo?.name?.trim().toLowerCase()
                                );
                                if (foundByName) {
                                  selectedVal = foundByName.id;
                                } else {
                                  selectedVal = inq.assignedTo.id || inq.assignedTo.name;
                                }
                              } else if (inq.assignedTo.id) {
                                selectedVal = inq.assignedTo.id;
                              }
                            }

                            const hasAssignee =
                              selectedVal !== "unassigned" &&
                              Boolean(inq.assignedTo?.name || inq.assignedTo?.id);

                            return (
                              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                <select
                                  value={selectedVal}
                                  disabled={assigningId === inq.id}
                                  onChange={(e) => handleAssignChange(inq.id, e.target.value)}
                                  style={{
                                    padding: "5px 8px",
                                    borderRadius: "8px",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    outline: "none",
                                    border: hasAssignee ? "1.5px solid #c7d2fe" : "1.5px dashed #cbd5e1",
                                    background: hasAssignee ? "#f5f3ff" : "#f8fafc",
                                    color: hasAssignee ? "#4338ca" : "#64748b",
                                    maxWidth: "165px",
                                  }}
                                  title="Assign lead to a counselor or staff member"
                                >
                                  <option value="unassigned">Unassigned</option>
                                  {hasAssignee && !employees.some((emp) => emp.id === selectedVal) && (
                                    <option value={selectedVal}>
                                      {inq.assignedTo?.name || "Assigned"} ({inq.assignedTo?.role ? inq.assignedTo.role.toUpperCase() : "STAFF"})
                                    </option>
                                  )}
                                  {employees.map((emp) => (
                                    <option key={emp.id} value={emp.id}>
                                      {emp.name} ({emp.role ? emp.role.toUpperCase() : "STAFF"})
                                    </option>
                                  ))}
                                </select>
                                {assigningId === inq.id && (
                                  <RefreshCw
                                    className="animate-spin"
                                    style={{ width: "12px", height: "12px", color: "#6366f1", flexShrink: 0 }}
                                  />
                                )}
                              </div>
                            );
                          })()}
                        </td>

                        {/* Actions */}
                        <td style={{ ...s.td, textAlign: "right" }}>
                          <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                            <button
                              onClick={() => {
                                setActiveNoteInquiry(inq);
                                setNoteText(inq.notes || "");
                              }}
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "4px",
                                background: "white",
                                border: "1.5px solid #e2e8f0",
                                borderRadius: "8px",
                                padding: "6px 10px",
                                fontSize: "12px",
                                fontWeight: 600,
                                color: "#475569",
                                cursor: "pointer",
                              }}
                              title="Add/Edit Follow-up Notes"
                            >
                              <Edit3 style={{ width: "12px", height: "12px" }} />
                              {inq.notes ? "Edit Note" : "Note"}
                            </button>

                            <button
                              onClick={() => setDeletingId(inq.id)}
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
                              title="Delete Inquiry"
                            >
                              <Trash2 style={{ width: "12px", height: "12px" }} />
                            </button>
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

      {/* ── Notes Modal ── */}
      {activeNoteInquiry && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.6)",
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
              maxWidth: "520px",
              width: "100%",
              padding: "24px",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "14px",
                borderBottom: "1px solid #f1f5f9",
                marginBottom: "16px",
              }}
            >
              <div>
                <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 800, color: "#0f172a" }}>
                  Follow-up Notes
                </h3>
                <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>
                  Candidate: <strong>{activeNoteInquiry.name}</strong> ({activeNoteInquiry.phone})
                </div>
              </div>
              <button
                onClick={() => setActiveNoteInquiry(null)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#94a3b8",
                }}
              >
                <X style={{ width: "20px", height: "20px" }} />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <label style={{ fontSize: "12px", fontWeight: 700, color: "#475569", textTransform: "uppercase" }}>
                Notes &amp; Discussion History
              </label>
              <textarea
                rows={5}
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="e.g. Spoke on WhatsApp, interested in Poland Heavy Driver permit, passport valid till 2029, will send documents tomorrow..."
                style={{
                  ...s.input,
                  fontFamily: "inherit",
                  resize: "none",
                  padding: "12px",
                  lineHeight: "1.5",
                }}
              />

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "8px" }}>
                <button
                  type="button"
                  onClick={() => setActiveNoteInquiry(null)}
                  style={s.btnSecondary}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveNote}
                  disabled={savingNote}
                  style={{ ...s.btnPrimary, display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <Save style={{ width: "14px", height: "14px" }} />
                  <span>{savingNote ? "Saving..." : "Save Notes"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Confirmation Modal ── */}
      {deletingId && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.6)",
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
              maxWidth: "400px",
              width: "100%",
              padding: "24px",
              textAlign: "center",
              border: "1px solid #e2e8f0",
            }}
          >
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
            <h3 style={{ margin: "0 0 8px", fontSize: "17px", fontWeight: 800, color: "#0f172a" }}>
              Delete this Inquiry?
            </h3>
            <p style={{ margin: 0, fontSize: "13px", color: "#64748b", lineHeight: "1.5" }}>
              Are you sure you want to permanently delete this lead? This action cannot be undone.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "24px" }}>
              <button
                type="button"
                onClick={() => setDeletingId(null)}
                style={s.btnSecondary}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteInquiry}
                disabled={isDeleting}
                style={s.btnDanger}
              >
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ── Add New Lead Modal ── */}
      {showAddModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.6)",
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
              maxWidth: "620px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "28px",
              border: "1px solid #e2e8f0",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "16px",
                borderBottom: "1px solid #f1f5f9",
                marginBottom: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background: "#ecfdf5",
                    color: "#059669",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <UserPlus style={{ width: "22px", height: "22px" }} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>
                    Add New Lead / Inquiry
                  </h3>
                  <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>
                    Register candidate for work visa consultation
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                style={{
                  background: "#f1f5f9",
                  border: "none",
                  borderRadius: "8px",
                  padding: "6px",
                  cursor: "pointer",
                  color: "#64748b",
                  display: "flex",
                }}
              >
                <X style={{ width: "18px", height: "18px" }} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleAddLead} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                {/* Candidate Name */}
                <div style={{ gridColumn: "span 2" }}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "6px", textTransform: "uppercase" }}>
                    Candidate Full Name <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <User style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", width: "16px", height: "16px", color: "#94a3b8" }} />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma / Mohd Ali"
                      value={newLead.name}
                      onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
                      style={{ ...s.input, width: "100%", paddingLeft: "38px" }}
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div style={{ gridColumn: "span 2" }}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "6px", textTransform: "uppercase" }}>
                    Phone / WhatsApp Number <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <Phone style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", width: "16px", height: "16px", color: "#94a3b8" }} />
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
                      style={{ ...s.input, width: "100%", paddingLeft: "38px" }}
                    />
                  </div>
                  <span style={{ fontSize: "11px", color: "#64748b", marginTop: "3px", display: "block" }}>
                    Include country code (+91, +92, etc.) for direct 1-click WhatsApp messaging.
                  </span>
                </div>

                {/* Target Country */}
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "6px", textTransform: "uppercase" }}>
                    Target Destination
                  </label>
                  <select
                    value={newLead.country}
                    onChange={(e) => setNewLead({ ...newLead, country: e.target.value })}
                    style={{ ...s.input, width: "100%", background: "white", cursor: "pointer" }}
                  >
                    <optgroup label="GCC &amp; Gulf Countries (High Demand)">
                      <option value="United Arab Emirates (UAE / Dubai)">United Arab Emirates (UAE / Dubai)</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Oman">Oman</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Bahrain">Bahrain</option>
                    </optgroup>
                    <optgroup label="Europe &amp; Schengen Area">
                      <option value="Poland">Poland</option>
                      <option value="Romania">Romania</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Malta">Malta</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Germany">Germany</option>
                      <option value="Russia">Russia</option>
                    </optgroup>
                    <optgroup label="Other Global Destinations">
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
                      placeholder="Enter custom country..."
                      value={newLead.customCountry}
                      onChange={(e) => setNewLead({ ...newLead, customCountry: e.target.value })}
                      style={{ ...s.input, width: "100%", marginTop: "6px" }}
                      autoFocus
                    />
                  )}
                </div>

                {/* Occupation / Trade - Full Manual Input */}
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "6px", textTransform: "uppercase" }}>
                    Occupation / Trade <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <Briefcase style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", width: "16px", height: "16px", color: "#94a3b8" }} />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Heavy Driver, CNC Operator, Welder, Electrician..."
                      value={newLead.occupation}
                      onChange={(e) => setNewLead({ ...newLead, occupation: e.target.value })}
                      style={{ ...s.input, width: "100%", paddingLeft: "38px" }}
                    />
                  </div>
                </div>

                {/* Lead Source */}
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "6px", textTransform: "uppercase" }}>
                    Lead Source
                  </label>
                  <select
                    value={newLead.source}
                    onChange={(e) => setNewLead({ ...newLead, source: e.target.value })}
                    style={{ ...s.input, width: "100%", background: "white", cursor: "pointer" }}
                  >
                    <option value="Walk-in Office">Walk-in Office</option>
                    <option value="Phone Call Inquiry">Phone Call Inquiry</option>
                    <option value="WhatsApp Direct">WhatsApp Direct</option>
                    <option value="Instagram / Facebook Ad">Social Media Ad</option>
                    <option value="Agent / Referral">Agent / Referral</option>
                    <option value="Consultation Form - Homepage">Website Form</option>
                    <option value="Other">Other Source...</option>
                  </select>
                  {newLead.source === "Other" && (
                    <input
                      type="text"
                      placeholder="Enter source name..."
                      value={newLead.customSource}
                      onChange={(e) => setNewLead({ ...newLead, customSource: e.target.value })}
                      style={{ ...s.input, width: "100%", marginTop: "6px" }}
                      autoFocus
                    />
                  )}
                </div>

                {/* Initial Status */}
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "6px", textTransform: "uppercase" }}>
                    Initial Status
                  </label>
                  <select
                    value={newLead.status}
                    onChange={(e) => setNewLead({ ...newLead, status: e.target.value as InquiryItem["status"] })}
                    style={{ ...s.input, width: "100%", background: "white", cursor: "pointer" }}
                  >
                    <option value="new">New Lead</option>
                    <option value="interested">Interested</option>
                    <option value="dnp">DNP (Did Not Pick)</option>
                    <option value="contacted">Contacted</option>
                    <option value="in_progress">In Progress</option>
                    <option value="payment_mode">Payment Mode</option>
                    <option value="converted">Converted</option>
                    <option value="not_interested">Not Interested</option>
                    <option value="closed">Closed / Lost</option>
                  </select>
                </div>

                {/* Assign To Staff / Counselor */}
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "6px", textTransform: "uppercase" }}>
                    Assign To Counselor / Staff
                  </label>
                  <select
                    value={newLead.assignedToId}
                    onChange={(e) => setNewLead({ ...newLead, assignedToId: e.target.value })}
                    style={{ ...s.input, width: "100%", background: "white", cursor: "pointer" }}
                  >
                    <option value="">Unassigned (General Pool)</option>
                    {employees.map((emp) => (
                      <option key={emp.id} value={emp.id}>
                        {emp.name} ({emp.role ? emp.role.toUpperCase() : "STAFF"})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Notes & Candidate History */}
                <div style={{ gridColumn: "span 2" }}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "6px", textTransform: "uppercase" }}>
                    Follow-up Notes &amp; Profile Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Passport valid till 2030, 3 years GCC heavy driver experience, discussed Poland package, budget ready..."
                    value={newLead.notes}
                    onChange={(e) => setNewLead({ ...newLead, notes: e.target.value })}
                    style={{ ...s.input, width: "100%", resize: "none", fontFamily: "inherit", lineHeight: "1.5" }}
                  />
                </div>
              </div>

              {/* Form Buttons */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "12px",
                  marginTop: "12px",
                  paddingTop: "16px",
                  borderTop: "1px solid #f1f5f9",
                }}
              >
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  style={s.btnSecondary}
                  disabled={addingLead}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={addingLead}
                  style={{
                    ...s.btnPrimary,
                    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Save style={{ width: "15px", height: "15px" }} />
                  <span>{addingLead ? "Saving Lead..." : "Save & Create Lead"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Shared Dashboard & Admin Style System ──
const s = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    background: "#f8fafc",
    fontFamily: "'Inter', sans-serif",
  },
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
  sidebar: {
    width: "260px",
    flexShrink: 0,
    background: "linear-gradient(180deg, #1e1b4b 0%, #312e81 100%)",
    display: "flex",
    flexDirection: "column" as const,
    padding: "0",
    position: "sticky" as const,
    top: 0,
    height: "100vh",
    overflowY: "auto" as const,
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
    flexDirection: "column" as const,
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
    textAlign: "left" as const,
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
    flexDirection: "column" as const,
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
    overflowY: "auto" as const,
    maxHeight: "100vh",
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
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "16px",
    marginBottom: "24px",
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
  input: {
    border: "1.5px solid #e5e7eb",
    borderRadius: "10px",
    padding: "10px 14px",
    fontSize: "14px",
    color: "#111827",
    background: "#fafafa",
    transition: "all 0.15s",
    outline: "none",
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
    boxShadow: "0 4px 12px rgba(99,102,241,0.35)",
    letterSpacing: "0.02em",
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
    padding: "10px 18px",
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
};
