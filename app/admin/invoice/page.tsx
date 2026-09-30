"use client";

/* ================================================================
   app/admin/invoice/page.tsx — WorkWise Visa Invoice & Financial Dashboard
   Full CRUD: View Invoices, Stats KPIs, Search/Filter, Edit, Add, and Print A4.
   ================================================================ */

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Printer,
  Plus,
  Trash2,
  Building2,
  User,
  FileText,
  Save,
  Search,
  Wallet,
  CheckCircle2,
  Clock,
  Calendar,
  RotateCcw,
  Edit3,
  Eye,
  FileSpreadsheet,
  ArrowLeft,
  X,
  Phone,
  Globe,
  Lock,
} from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";

interface InvoiceItem {
  id: string;
  date: string;
  description: string;
  packageAmt: number;
  paymentMode: string;
  totalAmt: number;
  paidAmt: number;
  balanceAmt: number;
}

interface InvoiceState {
  id?: string;
  _id?: string;
  billTo: string;
  mobileNumber: string;
  date: string;
  invoiceNumber: string;
  invoiceFor: string;
  countryApplyingFor: string;
  positionApplyingFor: string;
  courseApplyingFor?: string;

  companyName: string;
  brandUnit: string;
  gstNo: string;
  officeAddress: string;
  patnaOfficeAddress?: string;

  items: InvoiceItem[];

  bankAccountName: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  upiId: string;

  totalPaidAmount?: number;
  totalBalanceAmount?: number;
  footerNote: string;
  phone?: string;
  website?: string;
  createdAt?: string;
}

const DEFAULT_TEMPLATE: InvoiceState = {
  billTo: "",
  mobileNumber: "",
  date: "",
  invoiceNumber: "",
  invoiceFor: "Work Visa Consultancy & Documentation",
  countryApplyingFor: "Croatia / Schengen",
  positionApplyingFor: "Heavy Vehicle Driver",

  companyName: "Europass Immigration Pvt. Ltd.",
  brandUnit: "A Unit of Europass Immigration Pvt. Ltd.",
  gstNo: "09AAHCE6130D1ZW",
  officeAddress: "Urbtech Trade Centre, D-701 C, Sector 132, Noida, Uttar Pradesh 201304",
  patnaOfficeAddress: "Office No. 606, 6th Floor, Verma Centre, Boring Rd Crossing, Sri Krishna Puri, Patna, Bihar 800001",

  phone: "+91 81301 61603",
  website: "www.workwisevisa.com",

  items: [
    {
      id: "item-1",
      date: "",
      description: "",
      packageAmt: 0,
      paymentMode: "ONLINE",
      totalAmt: 0,
      paidAmt: 0,
      balanceAmt: 0,
    },
  ],

  bankAccountName: "Europass Immigration Pvt. Ltd.",
  bankName: "Union Bank",
  accountNumber: "902301010000036",
  ifscCode: "UBIN0590231",
  upiId: "",

  footerNote: "Thank you for your business!",
};

// ── Date & Time Helper Functions ──────────────────────────────────
function getDatePickerValue(dateStr?: string): string {
  if (!dateStr) {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  if (dateStr.includes("T")) {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    }
  }
  const match = dateStr.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
  if (match) {
    const [, dd, mm, yyyy] = match;
    return `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
  }
  const matchIso = dateStr.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/);
  if (matchIso) {
    const [, yyyy, mm, dd] = matchIso;
    return `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
  }
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function getTimeValue(dateStr?: string): string {
  if (!dateStr) {
    return new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  }
  if (dateStr.includes("T")) {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    }
  }
  const timeMatch = dateStr.match(/(\d{1,2}:\d{2}(?::\d{2})?\s*(?:AM|PM|am|pm)?)/);
  if (timeMatch) {
    return timeMatch[1].trim();
  }
  return new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
}

function formatDisplayDate(dateStr?: string): string {
  if (!dateStr) return "—";
  if (dateStr.includes("T")) {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      const dd = String(d.getDate()).padStart(2, "0");
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const yyyy = d.getFullYear();
      const time = d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
      return `${dd}/${mm}/${yyyy}, ${time}`;
    }
  }
  return dateStr;
}

import { EmployeePermissions } from "@/lib/types/rbac";

interface AdminProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  permissions?: EmployeePermissions;
}

export default function AdminInvoicePage() {
  const router = useRouter();
  const invoiceRef = useRef<HTMLDivElement>(null);

  const [admin, setAdmin] = useState<AdminProfile | null>(null);
  const [invoices, setInvoices] = useState<InvoiceState[]>([]);
  const [loading, setLoading] = useState(true);

  // View Mode: 'list' (Financial Management Dashboard) | 'editor' (Form + Live A4 Preview)
  const [viewMode, setViewMode] = useState<"list" | "editor">("list");
  const [currentInvoice, setCurrentInvoice] = useState<InvoiceState>(DEFAULT_TEMPLATE);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // Save / Delete states
  const [saveLoading, setSaveLoading] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // ── Auth Guard ───────────────────────────────────────────────────
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
        const isSuper = data.user.role === "superadmin" || data.user.email === "wasim@yastudy.com";
        if (!isSuper && !data.user.permissions?.invoices?.view) {
          router.replace("/admin/dashboard");
          return;
        }
      } catch {
        router.replace("/admin");
      }
    }
    checkAuth();
  }, [router]);

  // ── Load Invoices from Database ──────────────────────────────────
  const loadInvoices = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/invoices");
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setInvoices(data.data);
      }
    } catch (err) {
      console.error("Failed to load invoices", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadInvoices();
  }, [loadInvoices]);

  // ── Financial Metrics Calculation ────────────────────────────────
  const totalAmountSum = invoices.reduce((sum, inv) => {
    const itemsTotal = inv.items?.reduce((iSum, it) => iSum + (Number(it.totalAmt) || 0), 0) || 0;
    return sum + itemsTotal;
  }, 0);

  const totalPaidSum = invoices.reduce((sum, inv) => {
    if (inv.totalPaidAmount !== undefined) return sum + (Number(inv.totalPaidAmount) || 0);
    const itemsPaid = inv.items?.reduce((iSum, it) => iSum + (Number(it.paidAmt) || 0), 0) || 0;
    return sum + itemsPaid;
  }, 0);

  const totalBalanceSum = invoices.reduce((sum, inv) => {
    if (inv.totalBalanceAmount !== undefined) return sum + (Number(inv.totalBalanceAmount) || 0);
    const itemsBal = inv.items?.reduce((iSum, it) => iSum + (Number(it.balanceAmt) || 0), 0) || 0;
    return sum + itemsBal;
  }, 0);

  // ── Current Editing Calculations ─────────────────────────────────
  const currentTotalPaid = currentInvoice.items.reduce((sum, it) => sum + (Number(it.paidAmt) || 0), 0);
  const currentTotalBalance = currentInvoice.items.reduce((sum, it) => sum + (Number(it.balanceAmt) || 0), 0);

  // ── Filtered Invoices List ───────────────────────────────────────
  const filteredInvoices = invoices.filter((inv) => {
    const q = searchQuery.toLowerCase().trim();
    const matchQuery =
      !q ||
      inv.billTo.toLowerCase().includes(q) ||
      inv.mobileNumber.toLowerCase().includes(q) ||
      inv.invoiceNumber.toLowerCase().includes(q) ||
      (inv.positionApplyingFor && inv.positionApplyingFor.toLowerCase().includes(q));

    const matchDate =
      !dateFilter ||
      (inv.date && (getDatePickerValue(inv.date) === dateFilter || inv.date.includes(dateFilter)));

    const matchCountry =
      countryFilter === "all" ||
      (inv.countryApplyingFor && inv.countryApplyingFor.toLowerCase().includes(countryFilter.toLowerCase()));

    const invBalance =
      inv.totalBalanceAmount !== undefined
        ? Number(inv.totalBalanceAmount)
        : inv.items?.reduce((s, it) => s + (Number(it.balanceAmt) || 0), 0) || 0;

    const matchStatus =
      statusFilter === "all" ||
      (statusFilter === "paid" && invBalance <= 0) ||
      (statusFilter === "pending" && invBalance > 0);

    return matchQuery && matchDate && matchCountry && matchStatus;
  });

  // ── Actions ──────────────────────────────────────────────────────
  const handleAddNewInvoice = () => {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, "0");
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const yyyy = now.getFullYear();
    const autoTime = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    const formattedDate = `${dd}/${mm}/${yyyy}, ${autoTime}`;
    const dateOnly = `${dd}/${mm}/${yyyy}`;
    const randomInvNum = `WWV-${Math.floor(100 + Math.random() * 900)}`;

    setCurrentInvoice({
      ...DEFAULT_TEMPLATE,
      billTo: "",
      mobileNumber: "",
      date: formattedDate,
      invoiceNumber: randomInvNum,
      invoiceFor: "Work Visa Consultancy",
      countryApplyingFor: "",
      positionApplyingFor: "",
      items: [
        {
          id: `item-${Date.now()}`,
          date: dateOnly,
          description: "",
          packageAmt: 0,
          paymentMode: "ONLINE",
          totalAmt: 0,
          paidAmt: 0,
          balanceAmt: 0,
        },
      ],
    });
    setEditingId(null);
    setSaveMessage(null);
    setViewMode("editor");
  };

  const handleDatePickerChange = (newYmd: string) => {
    if (!newYmd) return;
    const [yyyy, mm, dd] = newYmd.split("-");
    const currentTime = getTimeValue(currentInvoice.date);
    const formatted = `${dd}/${mm}/${yyyy}, ${currentTime}`;
    setCurrentInvoice((prev) => ({
      ...prev,
      date: formatted,
      items: prev.items.map((it, idx) =>
        idx === 0 ? { ...it, date: `${dd}/${mm}/${yyyy}` } : it
      ),
    }));
  };

  const handleRefreshTimeNow = () => {
    const now = new Date();
    const newTime = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    const ymd = getDatePickerValue(currentInvoice.date);
    const [yyyy, mm, dd] = ymd.split("-");
    const formatted = `${dd}/${mm}/${yyyy}, ${newTime}`;
    setCurrentInvoice((prev) => ({
      ...prev,
      date: formatted,
    }));
  };

  const handleEditInvoice = (inv: InvoiceState) => {
    setCurrentInvoice(inv);
    setEditingId(inv.id || inv._id || null);
    setSaveMessage(null);
    setViewMode("editor");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/admin");
  };

  // ── Save / Update Invoice ────────────────────────────────────────
  const handleSaveInvoice = async () => {
    if (!currentInvoice.billTo.trim()) {
      setSaveMessage({ type: "error", text: "Please enter Client Name (Bill to)." });
      return;
    }
    if (!currentInvoice.invoiceNumber.trim()) {
      setSaveMessage({ type: "error", text: "Please enter an Invoice Number." });
      return;
    }

    setSaveLoading(true);
    setSaveMessage(null);

    try {
      const payload = {
        ...currentInvoice,
        totalPaidAmount: currentTotalPaid,
        totalBalanceAmount: currentTotalBalance,
      };

      let res;
      if (editingId) {
        res = await fetch(`/api/invoices/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch("/api/invoices", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      const data = await res.json();
      if (data.success) {
        setSaveMessage({ type: "success", text: "✅ Invoice saved successfully!" });
        await loadInvoices();
        setTimeout(() => {
          setViewMode("list");
        }, 1200);
      } else {
        setSaveMessage({ type: "error", text: data.message || "Failed to save invoice." });
      }
    } catch {
      setSaveMessage({ type: "error", text: "Error saving invoice." });
    } finally {
      setSaveLoading(false);
    }
  };

  const handleDeleteInvoice = async (id: string) => {
    try {
      const res = await fetch(`/api/invoices/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setInvoices((prev) => prev.filter((i) => i.id !== id && i._id !== id));
        setDeleteConfirmId(null);
      }
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  // ── Item Row Handlers ────────────────────────────────────────────
  const handleItemChange = (index: number, field: keyof InvoiceItem, value: string | number) => {
    setCurrentInvoice((prev) => {
      const updated = [...prev.items];
      const item = { ...updated[index], [field]: value };

      if (field === "packageAmt") {
        const numVal = Number(value) || 0;
        item.totalAmt = numVal;
        item.balanceAmt = numVal - (Number(item.paidAmt) || 0);
      } else if (field === "totalAmt") {
        const numVal = Number(value) || 0;
        item.balanceAmt = numVal - (Number(item.paidAmt) || 0);
      } else if (field === "paidAmt") {
        const numVal = Number(value) || 0;
        item.balanceAmt = (Number(item.totalAmt) || 0) - numVal;
      }

      updated[index] = item;
      return { ...prev, items: updated };
    });
  };

  const addItemRow = () => {
    const ymd = getDatePickerValue(currentInvoice.date);
    const [yyyy, mm, dd] = ymd.split("-");
    const newItem: InvoiceItem = {
      id: `item-${Date.now()}`,
      date: `${dd}/${mm}/${yyyy}`,
      description: "",
      packageAmt: 0,
      paymentMode: "ONLINE",
      totalAmt: 0,
      paidAmt: 0,
      balanceAmt: 0,
    };
    setCurrentInvoice((prev) => ({ ...prev, items: [...prev.items, newItem] }));
  };

  const removeItemRow = (index: number) => {
    if (currentInvoice.items.length <= 1) return;
    setCurrentInvoice((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const isSuper = admin?.role === "superadmin" || admin?.email === "wasim@yastudy.com";
  const canViewJobs = isSuper || Boolean(admin?.permissions?.jobs?.view !== false);
  const canViewInquiries = isSuper || Boolean(admin?.permissions?.inquiries?.view !== false);
  const canViewEmployees = isSuper || Boolean(admin?.permissions?.employees?.view);
  const canCreateInvoice = isSuper || Boolean(admin?.permissions?.invoices?.create !== false);
  const canEditInvoice = isSuper || Boolean(admin?.permissions?.invoices?.edit !== false);
  const canDeleteInvoice = isSuper || Boolean(admin?.permissions?.invoices?.delete !== false);
  const canPrintInvoice = isSuper || Boolean(admin?.permissions?.invoices?.print !== false);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col lg:flex-row font-sans">
      {/* ── RESPONSIVE UNIFIED ADMIN SIDEBAR ── */}
      <AdminSidebar
        currentUser={admin}
        counts={{
          invoices: invoices.length,
        }}
      />

      {/* ── MAIN CONTENT AREA ────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Top Header Bar (Hidden in print) */}
        <header className="print:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                Invoices
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                  FINANCIAL MANAGEMENT
                </span>
              </h1>
              <p className="text-xs text-slate-500">
                Track client payments, outstanding balances, and generate printable invoices.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {viewMode === "editor" ? (
              <button
                onClick={() => setViewMode("list")}
                className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-lg border border-slate-200 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Invoices
              </button>
            ) : null}

            {canCreateInvoice && (
              <button
                onClick={handleAddNewInvoice}
                className="flex items-center gap-1.5 text-xs sm:text-sm font-bold bg-[#4338ca] hover:bg-[#3730a3] text-white px-4 py-2 rounded-xl shadow-md transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Plus className="w-4 h-4" />
                Add Invoice
              </button>
            )}
          </div>
        </header>

        {/* ══════════════════════════════════════════════════════════
            VIEW 1: FINANCIAL MANAGEMENT DASHBOARD (Table + KPI Cards)
            ══════════════════════════════════════════════════════════ */}
        {viewMode === "list" && (
          <div className="p-6 space-y-6 max-w-[1600px] w-full mx-auto">
            {/* 4 Financial KPI Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1: TOTAL AMOUNT */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-500">
                    TOTAL AMOUNT
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    ₹{totalAmountSum.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/20">
                  <Wallet className="w-6 h-6" />
                </div>
              </div>

              {/* Card 2: PAID AMOUNT */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                    PAID AMOUNT
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    ₹{totalPaidSum.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>

              {/* Card 3: BALANCE AMOUNT */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-500">
                    BALANCE AMOUNT
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    ₹{totalBalanceSum.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-rose-500 flex items-center justify-center text-white shadow-md shadow-rose-500/20">
                  <Clock className="w-6 h-6" />
                </div>
              </div>

              {/* Card 4: TOTAL INVOICES */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                    TOTAL INVOICES
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    {invoices.length} <span className="text-sm font-normal text-slate-500">Generated</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20">
                  <RotateCcw className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center gap-3">
              {/* Search input */}
              <div className="relative flex-1 min-w-[240px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search name, mobile, or invoice no..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 bg-slate-50/50"
                />
              </div>

              {/* Country Filter */}
              <div className="w-44">
                <select
                  value={countryFilter}
                  onChange={(e) => setCountryFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 bg-slate-50/50 text-slate-700"
                >
                  <option value="all">All Countries</option>
                  <option value="Croatia">Croatia / Schengen</option>
                  <option value="Poland">Poland</option>
                  <option value="Germany">Germany</option>
                  <option value="UAE">UAE / Dubai</option>
                  <option value="Saudi">Saudi Arabia</option>
                  <option value="Russia">Russia</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>

              {/* Status Filter */}
              <div className="w-40">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 bg-slate-50/50 text-slate-700"
                >
                  <option value="all">All Status</option>
                  <option value="paid">Fully Paid (0 Bal)</option>
                  <option value="pending">Balance Due</option>
                </select>
              </div>

              {/* Date Filter */}
              <div className="w-44 flex items-center gap-1.5 bg-slate-50/50 border border-slate-200 rounded-xl px-2.5 py-1.5" title="Filter by Invoice Date">
                <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full bg-transparent text-xs text-slate-700 focus:outline-none cursor-pointer"
                />
              </div>

              {(searchQuery || countryFilter !== "all" || statusFilter !== "all" || dateFilter) && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCountryFilter("all");
                    setStatusFilter("all");
                    setDateFilter("");
                  }}
                  className="px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl border border-rose-200 transition"
                >
                  Reset Filters
                </button>
              )}
            </div>

            {/* Invoices Table Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {loading ? (
                <div className="py-20 text-center text-slate-400 text-sm">
                  Loading invoices database...
                </div>
              ) : filteredInvoices.length === 0 ? (
                <div className="py-16 text-center">
                  <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-3">
                    <FileText className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800">No Invoices Found</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    {searchQuery || dateFilter
                      ? "No invoices matched your search criteria. Try resetting the filters."
                      : "You have not generated any invoices yet. Click below to create your first invoice."}
                  </p>
                  <button
                    onClick={handleAddNewInvoice}
                    className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow transition inline-flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Create First Invoice
                  </button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        <th className="py-3 px-4 w-12 text-center">#</th>
                        <th className="py-3 px-4">Bill To</th>
                        <th className="py-3 px-4">Mobile</th>
                        <th className="py-3 px-4">Date</th>
                        <th className="py-3 px-4">Invoice No.</th>
                        <th className="py-3 px-4">Position / Service</th>
                        <th className="py-3 px-4 text-right">Total Amount</th>
                        <th className="py-3 px-4 text-right">Paid Amount</th>
                        <th className="py-3 px-4 text-right">Balance</th>
                        <th className="py-3 px-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs text-slate-700 font-medium">
                      {filteredInvoices.map((inv, idx) => {
                        const total = inv.items?.reduce((s, it) => s + (Number(it.totalAmt) || 0), 0) || 0;
                        const paid =
                          inv.totalPaidAmount !== undefined
                            ? Number(inv.totalPaidAmount)
                            : inv.items?.reduce((s, it) => s + (Number(it.paidAmt) || 0), 0) || 0;
                        const balance =
                          inv.totalBalanceAmount !== undefined
                            ? Number(inv.totalBalanceAmount)
                            : inv.items?.reduce((s, it) => s + (Number(it.balanceAmt) || 0), 0) || 0;

                        return (
                          <tr key={inv.id || inv._id || idx} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-3.5 px-4 text-center text-slate-400 font-bold">{idx + 1}</td>
                            <td className="py-3.5 px-4 font-bold text-slate-900">{inv.billTo}</td>
                            <td className="py-3.5 px-4 text-slate-600 font-mono text-[11px]">
                              {inv.mobileNumber}
                            </td>
                            <td className="py-3.5 px-4 text-slate-500 text-[11px] whitespace-nowrap">
                              {formatDisplayDate(inv.date)}
                            </td>
                            <td className="py-3.5 px-4 font-mono font-bold text-indigo-700">
                              <span className="bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md">
                                {inv.invoiceNumber}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-slate-600 max-w-[200px] truncate">
                              {inv.positionApplyingFor || inv.courseApplyingFor || inv.invoiceFor || "—"}
                            </td>
                            <td className="py-3.5 px-4 text-right font-bold text-slate-900">
                              ₹{total.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                            </td>
                            <td className="py-3.5 px-4 text-right font-semibold text-emerald-600">
                              ₹{paid.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              {balance <= 0 ? (
                                <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                                  0.00 Paid
                                </span>
                              ) : (
                                <span className="inline-flex items-center text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full">
                                  ₹{balance.toLocaleString("en-IN", { minimumFractionDigits: 2 })} Due
                                </span>
                              )}
                            </td>
                            <td className="py-3.5 px-4 text-center whitespace-nowrap">
                              <div className="flex items-center justify-center gap-1.5">
                                {canEditInvoice && (
                                  <button
                                    onClick={() => handleEditInvoice(inv)}
                                    className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                                    title="Edit Invoice"
                                  >
                                    <Edit3 className="w-4 h-4" />
                                  </button>
                                )}
                                <button
                                  onClick={() => {
                                    setCurrentInvoice(inv);
                                    setEditingId(inv.id || inv._id || null);
                                    setViewMode("editor");
                                  }}
                                  className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg transition"
                                  title="View / Print Preview"
                                >
                                  <Eye className="w-4 h-4" />
                                </button>
                                {canDeleteInvoice && (inv.id || inv._id) && (
                                  <button
                                    onClick={() => setDeleteConfirmId(inv.id || inv._id || null)}
                                    className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition"
                                    title="Delete Invoice"
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
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════
            VIEW 2: INVOICE CREATOR & EDITOR + LIVE A4 PRINTABLE SHEET
            ══════════════════════════════════════════════════════════ */}
        {viewMode === "editor" && (
          <div className="flex-1 flex flex-col xl:flex-row gap-6 p-4 sm:p-6 max-w-[1700px] w-full mx-auto">
            {/* LEFT COLUMN: Input Form Panel (Hidden in Print) */}
            <div className="print:hidden w-full xl:w-[520px] 2xl:w-[560px] flex-shrink-0 space-y-4">
              {/* Actions & Save Card */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Edit3 className="w-3.5 h-3.5 text-indigo-600" />
                    {editingId ? `Editing: ${currentInvoice.invoiceNumber}` : "New Invoice Generator"}
                  </span>
                  <button
                    onClick={() => setViewMode("list")}
                    className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3" /> All Invoices
                  </button>
                </div>

                {/* Save Feedback Banner */}
                {saveMessage && (
                  <div
                    className={`p-2.5 rounded-lg text-xs font-medium flex items-center gap-2 ${
                      saveMessage.type === "success"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-rose-50 text-rose-800 border border-rose-200"
                    }`}
                  >
                    {saveMessage.type === "success" ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : null}
                    <span>{saveMessage.text}</span>
                  </div>
                )}

                {/* Save & Action Buttons */}
                <div className="flex gap-2">
                  {((editingId && canEditInvoice) || (!editingId && canCreateInvoice)) ? (
                    <button
                      type="button"
                      disabled={saveLoading}
                      onClick={handleSaveInvoice}
                      className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
                    >
                      <Save className="w-4 h-4" />
                      {saveLoading ? "Saving..." : editingId ? "Save Changes" : "Save Invoice"}
                    </button>
                  ) : (
                    <div className="flex-1 py-2.5 px-3 bg-slate-100 text-slate-500 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 border border-slate-200">
                      <Lock className="w-3.5 h-3.5" /> Read-Only Mode
                    </div>
                  )}

                  {canPrintInvoice && (
                    <button
                      type="button"
                      onClick={handlePrint}
                      className="py-2.5 px-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
                    >
                      <Printer className="w-4 h-4" />
                      Print / PDF
                    </button>
                  )}

                  {canCreateInvoice && (
                    <button
                      type="button"
                      onClick={handleAddNewInvoice}
                      className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold text-xs transition flex items-center gap-1"
                      title="New Blank Invoice"
                    >
                      <Plus className="w-3.5 h-3.5" /> New
                    </button>
                  )}
                </div>
              </div>

              {/* Section 1: Client & Invoice Info */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <User className="w-4 h-4 text-indigo-600" /> Client &amp; Invoice Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Bill to (Client Name) *</label>
                    <input
                      type="text"
                      value={currentInvoice.billTo}
                      onChange={(e) => setCurrentInvoice({ ...currentInvoice, billTo: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Mobile Number *</label>
                    <input
                      type="text"
                      value={currentInvoice.mobileNumber}
                      onChange={(e) => setCurrentInvoice({ ...currentInvoice, mobileNumber: e.target.value })}
                      placeholder="e.g. +91 9876543210"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none font-mono"
                    />
                  </div>

                  {/* Date & Auto-Time Selector */}
                  <div className="sm:col-span-2 bg-gradient-to-r from-slate-50 to-indigo-50/40 p-3.5 rounded-xl border border-slate-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-indigo-600" />
                        Invoice Date &amp; Auto Time
                      </label>
                      <button
                        type="button"
                        onClick={handleRefreshTimeNow}
                        className="text-[11px] font-semibold text-indigo-700 hover:text-indigo-900 bg-white hover:bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition shadow-2xs"
                        title="Click to take current live time"
                      >
                        <Clock className="w-3.5 h-3.5 text-indigo-600" />
                        Sync Current Time
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                          📅 Select Date (Calendar):
                        </label>
                        <input
                          type="date"
                          value={getDatePickerValue(currentInvoice.date)}
                          onChange={(e) => handleDatePickerChange(e.target.value)}
                          className="w-full max-w-full box-border px-2.5 py-2 bg-white border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none cursor-pointer"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                          ⏰ Auto Generated Time:
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={getTimeValue(currentInvoice.date)}
                            onChange={(e) => {
                              const ymd = getDatePickerValue(currentInvoice.date);
                              const [yyyy, mm, dd] = ymd.split("-");
                              setCurrentInvoice({
                                ...currentInvoice,
                                date: `${dd}/${mm}/${yyyy}, ${e.target.value}`,
                              });
                            }}
                            placeholder="e.g. 02:15 PM"
                            className="w-full pl-3 pr-8 py-2 bg-white border border-slate-300 rounded-lg text-xs font-mono font-medium text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                          />
                          <Clock className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 font-medium">Invoice Timestamp:</span>
                      <span className="font-mono text-indigo-700 font-bold bg-white px-2 py-0.5 rounded border border-indigo-100">
                        {currentInvoice.date}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Invoice Number *</label>
                    <input
                      type="text"
                      value={currentInvoice.invoiceNumber}
                      onChange={(e) => setCurrentInvoice({ ...currentInvoice, invoiceNumber: e.target.value })}
                      placeholder="e.g. WWV-101"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Invoice For</label>
                    <input
                      type="text"
                      value={currentInvoice.invoiceFor}
                      onChange={(e) => setCurrentInvoice({ ...currentInvoice, invoiceFor: e.target.value })}
                      placeholder="e.g. Work Visa Consultancy"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Country Applying For</label>
                    <input
                      type="text"
                      value={currentInvoice.countryApplyingFor}
                      onChange={(e) => setCurrentInvoice({ ...currentInvoice, countryApplyingFor: e.target.value })}
                      placeholder="e.g. Croatia / Europe"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-semibold text-slate-700 mb-1">Position Applying For</label>
                    <input
                      type="text"
                      value={currentInvoice.positionApplyingFor || currentInvoice.courseApplyingFor || ""}
                      onChange={(e) =>
                        setCurrentInvoice({
                          ...currentInvoice,
                          positionApplyingFor: e.target.value,
                          courseApplyingFor: e.target.value,
                        })
                      }
                      placeholder="e.g. CNC Operator / Heavy Driver / Welder"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Line Items Table Inputs */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-600" /> Invoice Line Items ({currentInvoice.items.length})
                  </h3>
                  <button
                    type="button"
                    onClick={addItemRow}
                    className="text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-semibold px-2.5 py-1 rounded-md flex items-center gap-1 transition"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Row
                  </button>
                </div>

                <div className="space-y-3">
                  {currentInvoice.items.map((item, index) => (
                    <div key={item.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-2">
                      <div className="flex items-center justify-between font-semibold text-slate-700">
                        <span>Row #{index + 1}</span>
                        {currentInvoice.items.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeItemRow(index)}
                            className="text-rose-600 hover:text-rose-800 p-1 rounded"
                            title="Remove row"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      {/* Date & Payment Mode */}
                      <div className="space-y-2">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <label className="block text-[11px] font-semibold text-slate-700">Date</label>
                            <button
                              type="button"
                              onClick={() => {
                                const ymd = getDatePickerValue(currentInvoice.date);
                                const [yyyy, mm, dd] = ymd.split("-");
                                handleItemChange(index, "date", `${dd}/${mm}/${yyyy}`);
                              }}
                              className="text-[10px] text-indigo-600 hover:text-indigo-800 hover:underline font-semibold"
                              title="Copy invoice date"
                            >
                              Same as Inv Date
                            </button>
                          </div>
                          <input
                            type="date"
                            value={getDatePickerValue(item.date)}
                            onChange={(e) => {
                              if (!e.target.value) return;
                              const [yyyy, mm, dd] = e.target.value.split("-");
                              handleItemChange(index, "date", `${dd}/${mm}/${yyyy}`);
                            }}
                            className="w-full box-border px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none cursor-pointer"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 mb-1">Payment Mode</label>
                          <select
                            value={item.paymentMode}
                            onChange={(e) => handleItemChange(index, "paymentMode", e.target.value)}
                            className="w-full box-border px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-xs font-semibold text-slate-800"
                          >
                            <option value="ONLINE">ONLINE</option>
                            <option value="UPI">UPI</option>
                            <option value="BANK TRANSFER">BANK TRANSFER</option>
                            <option value="NEFT / RTGS">NEFT / RTGS</option>
                            <option value="CASH">CASH</option>
                            <option value="CHEQUE">CHEQUE</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">Description</label>
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => handleItemChange(index, "description", e.target.value)}
                          placeholder="e.g. Work Permit & Visa Application Service"
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-xs"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-2 min-w-0">
                        <div className="min-w-0">
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1 truncate" title="Package Amt">
                            Package Amt
                          </label>
                          <input
                            type="number"
                            value={item.packageAmt === 0 ? "" : item.packageAmt}
                            onChange={(e) =>
                              handleItemChange(
                                index,
                                "packageAmt",
                                e.target.value === "" ? 0 : parseFloat(e.target.value) || 0
                              )
                            }
                            placeholder="0.00"
                            className="w-full min-w-0 px-2 py-1.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-xs font-mono font-medium [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                        </div>
                        <div className="min-w-0">
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1 truncate" title="Paid Amt">
                            Paid Amt
                          </label>
                          <input
                            type="number"
                            value={item.paidAmt === 0 ? "" : item.paidAmt}
                            onChange={(e) =>
                              handleItemChange(
                                index,
                                "paidAmt",
                                e.target.value === "" ? 0 : parseFloat(e.target.value) || 0
                              )
                            }
                            placeholder="0.00"
                            className="w-full min-w-0 px-2 py-1.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-xs font-mono font-bold text-emerald-700 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                        </div>
                        <div className="min-w-0">
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1 truncate" title="Balance Amt">
                            Balance Amt
                          </label>
                          <input
                            type="number"
                            value={item.balanceAmt === 0 ? "" : item.balanceAmt}
                            placeholder="0.00"
                            readOnly
                            className="w-full min-w-0 px-2 py-1.5 bg-slate-100 border border-slate-300 rounded-lg font-mono font-bold text-xs text-slate-700 cursor-not-allowed [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Company & Office Details */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Building2 className="w-4 h-4 text-indigo-600" /> Company &amp; Office Details
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        value={currentInvoice.companyName}
                        onChange={(e) => setCurrentInvoice({ ...currentInvoice, companyName: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">GST Number</label>
                      <input
                        type="text"
                        value={currentInvoice.gstNo}
                        onChange={(e) => setCurrentInvoice({ ...currentInvoice, gstNo: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Noida Head Office Address</label>
                    <textarea
                      rows={2}
                      value={currentInvoice.officeAddress}
                      onChange={(e) => setCurrentInvoice({ ...currentInvoice, officeAddress: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Patna Branch Office Address</label>
                    <textarea
                      rows={2}
                      value={currentInvoice.patnaOfficeAddress || ""}
                      onChange={(e) => setCurrentInvoice({ ...currentInvoice, patnaOfficeAddress: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Company Phone</label>
                      <input
                        type="text"
                        value={currentInvoice.phone || "+91 81301 61603"}
                        onChange={(e) => setCurrentInvoice({ ...currentInvoice, phone: e.target.value })}
                        placeholder="+91 81301 61603"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Website URL</label>
                      <input
                        type="text"
                        value={currentInvoice.website || "www.workwisevisa.com"}
                        onChange={(e) => setCurrentInvoice({ ...currentInvoice, website: e.target.value })}
                        placeholder="www.workwisevisa.com"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Footer Note</label>
                    <input
                      type="text"
                      value={currentInvoice.footerNote}
                      onChange={(e) => setCurrentInvoice({ ...currentInvoice, footerNote: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Live Printable A4 Invoice Container */}
            <div className="flex-1 flex flex-col items-center">
              {/* THE EXACT A4 INVOICE SHEET */}
              <div
                id="invoice-paper"
                ref={invoiceRef}
                className="w-full max-w-[850px] min-h-[1050px] bg-white text-slate-900 shadow-xl border border-slate-200 rounded-sm pt-4 px-6 pb-8 sm:pt-6 sm:px-8 sm:pb-10 relative flex flex-col justify-between overflow-hidden"
                style={{
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                {/* Background Watermark Graphics using WorkWise Favicon */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.055] flex items-center justify-center overflow-hidden">
                  <div className="w-[620px] h-[620px] sm:w-[720px] sm:h-[720px] relative">
                    <Image
                      src="/icon.png"
                      alt="WorkWise Visa Favicon Watermark"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Subtle Decorative Background Accents */}
                <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-orange-200/25 via-indigo-100/10 to-transparent pointer-events-none" />
                <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-bl from-blue-200/25 via-indigo-100/10 to-transparent pointer-events-none" />

                <div>
                  {/* TOP HEADER SECTION: Centered Big Logo & Subtitle */}
                  <div className="relative z-10 pb-1 -mt-3 sm:-mt-4">
                    {/* Big Centered Logo */}
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="relative w-72 h-32 sm:w-[380px] sm:h-40 md:w-[420px] md:h-44 flex-shrink-0">
                        <Image
                          src="/images/workwise_logo.png"
                          alt="WorkWise Visa"
                          fill
                          className="object-contain object-center"
                          priority
                          unoptimized
                        />
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-600 -mt-3 sm:-mt-5 tracking-wide">
                        A Unit of Europass Immigration Pvt. Ltd.
                      </p>
                    </div>

                    {/* Right Aligned Invoice Title */}
                    <div className="flex justify-end mt-1 sm:mt-0">
                      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#162a6b]">
                        Invoice
                      </h2>
                    </div>
                  </div>

                  {/* Thin Divider Line */}
                  <div className="w-full h-[1.5px] bg-slate-300 my-4" />

                  {/* TWO COLUMN METADATA SECTION */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[13px] text-slate-800 leading-relaxed py-2 relative z-10">
                    {/* Left: Bill To Details */}
                    <div className="space-y-1.5">
                      <p>
                        <span className="font-semibold text-slate-900">Bill to :</span>{" "}
                        <span className="font-normal text-slate-800">{currentInvoice.billTo}</span>
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Mobile Number:</span>{" "}
                        <span className="font-normal text-slate-800">{currentInvoice.mobileNumber}</span>
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Date:</span>{" "}
                        <span className="font-normal text-slate-800">{currentInvoice.date}</span>
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Invoice Number:</span>{" "}
                        <span className="font-medium text-slate-900">{currentInvoice.invoiceNumber}</span>
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Invoice For:</span>{" "}
                        <span className="font-normal text-slate-800">{currentInvoice.invoiceFor}</span>
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Country Applying For:</span>{" "}
                        <span className="font-normal text-slate-800">{currentInvoice.countryApplyingFor}</span>
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Position Applying For:</span>{" "}
                        <span className="font-normal text-slate-800">
                          {currentInvoice.positionApplyingFor || currentInvoice.courseApplyingFor || "null"}
                        </span>
                      </p>
                    </div>

                    {/* Right: From Company Details (Noida HQ & Patna Branch & GST) */}
                    <div className="sm:pl-6 space-y-2">
                      <p className="font-semibold text-slate-900 text-[13px]">
                        From, {currentInvoice.companyName}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">GST No.:</span>{" "}
                        <span className="font-mono text-slate-800">{currentInvoice.gstNo}</span>
                      </p>
                      <div className="space-y-1.5 pt-0.5">
                        <div>
                          <span className="font-semibold text-slate-900 text-xs block">Noida Head Office:</span>
                          <p className="text-slate-800 text-[12px] leading-snug">
                            {currentInvoice.officeAddress}
                          </p>
                        </div>
                        <div>
                          <span className="font-semibold text-slate-900 text-xs block">Patna Branch Office:</span>
                          <p className="text-slate-800 text-[12px] leading-snug">
                            {currentInvoice.patnaOfficeAddress}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TABLE SECTION */}
                  <div className="mt-8 relative z-10 border border-slate-300 w-full overflow-hidden bg-white">
                    <table className="w-full text-left border-collapse text-xs table-fixed">
                      <colgroup>
                        <col style={{ width: "13.5%" }} />
                        <col style={{ width: "21.5%" }} />
                        <col style={{ width: "13%" }} />
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "13%" }} />
                        <col style={{ width: "13%" }} />
                        <col style={{ width: "16%" }} />
                      </colgroup>
                      <thead>
                        <tr className="bg-[#0b1a4a] text-white">
                          <th className="py-2.5 px-1 font-bold border-r border-[#1a2d6b] text-center text-[10.5px] sm:text-[11px]">
                            Date
                          </th>
                          <th className="py-2.5 px-2.5 font-bold border-r border-[#1a2d6b] text-left text-[10.5px] sm:text-[11px]">
                            Description
                          </th>
                          <th className="py-2 px-1 font-bold border-r border-[#1a2d6b] text-right text-[10.5px] sm:text-[11px]">
                            <span className="block leading-tight truncate">Package</span>
                            <span className="block leading-tight truncate">Amt.</span>
                          </th>
                          <th className="py-2 px-0.5 font-bold border-r border-[#1a2d6b] text-center text-[10.5px] sm:text-[11px]">
                            <span className="block leading-tight truncate">Payment</span>
                            <span className="block leading-tight truncate">Mode</span>
                          </th>
                          <th className="py-2 px-1 font-bold border-r border-[#1a2d6b] text-right text-[10.5px] sm:text-[11px]">
                            <span className="block leading-tight truncate">Total</span>
                            <span className="block leading-tight truncate">Amt.</span>
                          </th>
                          <th className="py-2 px-1 font-bold border-r border-[#1a2d6b] text-right text-[10.5px] sm:text-[11px]">
                            <span className="block leading-tight truncate">Paid</span>
                            <span className="block leading-tight truncate">Amt.</span>
                          </th>
                          <th className="py-2 px-1 font-bold text-right text-[10.5px] sm:text-[11px]">
                            <span className="block leading-tight truncate">Balance</span>
                            <span className="block leading-tight truncate">Amt.</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {currentInvoice.items.map((item) => (
                          <tr key={item.id} className="text-slate-800 hover:bg-slate-50/50">
                            <td className="py-3 px-1 border-r border-slate-200 text-center whitespace-nowrap align-top text-slate-700 text-[11px] font-medium">
                              {item.date || "—"}
                            </td>
                            <td className="py-3 px-2.5 border-r border-slate-200 font-medium break-words leading-relaxed text-slate-900 align-top text-xs [overflow-wrap:anywhere]">
                              {item.description || "—"}
                            </td>
                            <td className="py-3 px-1 border-r border-slate-200 text-right align-top font-mono whitespace-nowrap text-[11px] text-slate-900">
                              {Number(item.packageAmt || 0).toFixed(2)}
                            </td>
                            <td className="py-3 px-0.5 border-r border-slate-200 text-center font-medium align-top text-[10.5px] sm:text-[11px]">
                              <span className="block leading-tight">{item.paymentMode || "ONLINE"}</span>
                            </td>
                            <td className="py-3 px-1 border-r border-slate-200 text-right align-top font-mono whitespace-nowrap text-[11px] text-slate-900">
                              {Number(item.totalAmt || 0).toFixed(2)}
                            </td>
                            <td className="py-3 px-1 border-r border-slate-200 text-right font-medium align-top font-mono whitespace-nowrap text-[11px] text-slate-900">
                              {Number(item.paidAmt || 0).toFixed(2)}
                            </td>
                            <td className="py-3 px-1 text-right align-top font-mono whitespace-nowrap text-[11px] font-semibold text-slate-900">
                              {Number(item.balanceAmt || 0).toFixed(2)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* TOTALS SUMMARY SECTION (Right Aligned) */}
                  <div className="mt-5 flex justify-end relative z-10">
                    <div className="space-y-1.5 text-right text-xs sm:text-[14px]">
                      <p className="font-bold text-[#0284c7]">
                        Total Paid Amount :{" "}
                        <span className="text-slate-900 ml-2">
                          Rs. {currentTotalPaid.toFixed(2)}/-
                        </span>
                      </p>
                      <p className="font-bold text-[#0284c7]">
                        Total Balance Amount :{" "}
                        <span className="text-slate-900 ml-2">
                          Rs. {currentTotalBalance.toFixed(2)}/-
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* BOTTOM SECTION: Thank you note, Website & Phone Footer */}
                <div className="mt-14 pt-6 border-t border-slate-300 relative z-10">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <div>
                      <p className="text-[#0284c7] font-bold text-base sm:text-lg">
                        {currentInvoice.footerNote}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        This is a computer-generated invoice and official acknowledgment of payment receipt.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2 text-xs text-slate-700 font-medium">
                      <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg">
                        <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-semibold text-slate-800">{currentInvoice.phone || "+91 81301 61603"}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg">
                        <Globe className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                        <span className="font-semibold text-slate-800">{currentInvoice.website || "www.workwisevisa.com"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── DELETE CONFIRMATION MODAL ────────────────────────────── */}
      {deleteConfirmId && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 text-center animate-in fade-in zoom-in duration-150">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-3">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Delete Invoice?</h3>
            <p className="text-xs text-slate-500 mt-1">
              This invoice will be permanently deleted from the database. This action cannot be undone.
            </p>
            <div className="flex gap-2.5 mt-5">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteInvoice(deleteConfirmId)}
                className="flex-1 py-2 px-3 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl shadow-sm transition"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── PRINT-ONLY CSS RULES ─────────────────────────────────── */}
      <style jsx global>{`
        @media print {
          /* Hide all non-printable elements */
          header,
          .print\\:hidden,
          nav,
          aside {
            display: none !important;
          }

          body,
          html {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          #invoice-paper {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            min-height: 100% !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            margin: 0 !important;
            padding: 24px !important;
          }

          @page {
            size: A4 portrait;
            margin: 8mm;
          }
        }
      `}</style>
    </div>
  );
}
