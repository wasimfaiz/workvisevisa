"use client";

/* ================================================================
   app/admin/partners/page.tsx — B2B Candidate Sourcing Partners Channel
   
   Streamlined & Optimized for:
   1. Managing Individuals (Local Agents / Freelancers) & Companies (Agencies)
      who supply/refer job candidates to WorkWise Visa.
   2. Storing partner contact details, commission terms & candidate counts.
   3. Uploading & Verifying Signed MoUs (PDF / Word / Scanned documents).
   4. Safety & KYC Verification: Upload & track Aadhaar Card and PAN Card.
   ================================================================ */

import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AdminSidebar from "@/components/AdminSidebar";
import {
  Handshake,
  Building2,
  User,
  Users,
  Search,
  Plus,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle,
  X,
  Edit3,
  Trash2,
  Eye,
  Download,
  LayoutGrid,
  List,
  MessageSquare,
  TrendingUp,
  FileCheck,
  Upload,
  ShieldCheck,
  CreditCard,
  IdCard,
  Key,
  Lock,
  Copy,
  Sparkles,
} from "lucide-react";

// ================================================================
// Types
// ================================================================

export interface B2BPartner {
  id: string;
  partnerCode?: string;
  name: string;
  partnerType: "Individual" | "Company" | string;
  contactPerson: string;
  designation?: string;
  email?: string;
  phone: string;
  whatsapp?: string;
  city: string;
  state?: string;
  country: string;
  address?: string;
  status: "Active" | "Pending Verification" | "Inactive" | string;
  onboardingStage?:
    | "New Inquiry"
    | "In Discussion"
    | "KYC & MoU Pending"
    | "Partnership Active"
    | "Inactive"
    | string;
  source?: string;
  sourcingCapacity?: string;
  commissionTerms?: string;
  totalCandidatesReferred: number;
  totalSelected?: number;
  totalDeployed?: number;
  rating?: number;
  notes?: string;

  // MoU / Agreement
  mouStatus: "Signed" | "Pending" | "Under Review" | "Expired" | "None" | string;
  mouDocumentUrl?: string;
  mouDocumentName?: string;
  mouDocumentSize?: number;
  mouSignedDate?: string;
  mouExpiryDate?: string;
  mouNotes?: string;

  // Safety & KYC Documents (Aadhaar & PAN)
  aadhaarNumber?: string;
  aadhaarDocumentUrl?: string;
  aadhaarDocumentName?: string;
  panNumber?: string;
  panDocumentUrl?: string;
  panDocumentName?: string;
  kycStatus?: "Verified" | "Pending" | "Incomplete" | string;

  // B2B Partner Portal Login
  isLoginEnabled?: boolean;
  lastLoginAt?: string;

  createdAt?: string;
}

interface PartnerStats {
  total: number;
  active: number;
  pipelineLeads: number;
  newInquiries: number;
  inDiscussion: number;
  mouReview: number;
  companies: number;
  individuals: number;
  signedMou: number;
  pendingMou: number;
  kycVerified: number;
  totalCandidates: number;
}

interface DocViewerState {
  title: string;
  partnerName: string;
  url: string;
  fileName?: string;
  date?: string;
}

const DEFAULT_FORM: Omit<B2BPartner, "id" | "createdAt"> = {
  partnerCode: "",
  name: "",
  partnerType: "Individual",
  contactPerson: "",
  designation: "Sourcing Partner",
  phone: "",
  whatsapp: "",
  email: "",
  city: "",
  state: "",
  country: "India",
  address: "",
  status: "Active",
  onboardingStage: "New Inquiry",
  source: "Admin Portal",
  sourcingCapacity: "10-25 candidates / month",
  commissionTerms: "₹5,000 per selected candidate",
  totalCandidatesReferred: 0,
  rating: 5,
  notes: "",
  mouStatus: "Pending",
  mouDocumentUrl: "",
  mouDocumentName: "",
  mouDocumentSize: 0,
  mouSignedDate: "",
  mouExpiryDate: "",
  mouNotes: "",
  aadhaarNumber: "",
  aadhaarDocumentUrl: "",
  aadhaarDocumentName: "",
  panNumber: "",
  panDocumentUrl: "",
  panDocumentName: "",
  kycStatus: "Pending",
};

// Quick city suggestions for Indian mobilization hubs
const COMMON_CITIES = [
  "Siwan",
  "Gopalganj",
  "Gorakhpur",
  "Patna",
  "Deoria",
  "Chhapra",
  "Muzaffarpur",
  "Darbhanga",
  "Gaya",
  "Lucknow",
  "Delhi",
  "Kolkata",
  "Mumbai",
];

export default function AdminPartnersPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [partners, setPartners] = useState<B2BPartner[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [stats, setStats] = useState<PartnerStats>({
    total: 0,
    active: 0,
    pipelineLeads: 0,
    newInquiries: 0,
    inDiscussion: 0,
    mouReview: 0,
    companies: 0,
    individuals: 0,
    signedMou: 0,
    pendingMou: 0,
    kycVerified: 0,
    totalCandidates: 0,
  });

  // Granular RBAC Permissions
  const isSuper = currentUser?.role === "superadmin" || currentUser?.email === "wasim@yastudy.com";
  const canView = isSuper || Boolean(currentUser?.permissions?.partners?.view);
  const canCreate = isSuper || Boolean(currentUser?.permissions?.partners?.create);
  const canEdit = isSuper || Boolean(currentUser?.permissions?.partners?.edit);
  const canDelete = isSuper || Boolean(currentUser?.permissions?.partners?.delete);

  // Auth Guard
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
          setCurrentUser(data.user);
          const superAdmin = data.user.role === "superadmin" || data.user.email === "wasim@yastudy.com";
          if (!superAdmin && !data.user.permissions?.partners?.view) {
            router.replace("/admin/dashboard");
            return;
          }
        } else {
          router.replace("/admin");
          return;
        }
      } catch {
        router.replace("/admin");
        return;
      } finally {
        setAuthLoading(false);
      }
    }
    checkAuth();
  }, [router]);

  // Interactive KPI Cards Quick Filter: 'all' | 'kyc_mou' | 'active' | 'mobilized'
  const [kpiFilter, setKpiFilter] = useState<"all" | "kyc_mou" | "active" | "mobilized">("all");
  const [stageFilter, setStageFilter] = useState<string>("All");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const stageParam = params.get("stage");
      if (stageParam) {
        setStageFilter(stageParam);
      }
      const kpiParam = params.get("kpi");
      if (kpiParam === "kyc_mou" || kpiParam === "active" || kpiParam === "mobilized") {
        setKpiFilter(kpiParam);
      }
    }
  }, []);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [mouFilter, setMouFilter] = useState<string>("All");
  const [kycFilter, setKycFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");

  // Modals & Forms
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPartner, setEditingPartner] = useState<B2BPartner | null>(null);
  const [form, setForm] = useState(DEFAULT_FORM);
  const [saving, setSaving] = useState(false);

  // File Upload States
  const [uploadingTarget, setUploadingTarget] = useState<"mou" | "aadhaar" | "pan" | null>(null);
  const mouFileInputRef = useRef<HTMLInputElement>(null);
  const aadhaarFileInputRef = useRef<HTMLInputElement>(null);
  const panFileInputRef = useRef<HTMLInputElement>(null);

  // Unified Document Viewer Modal
  const [viewingDoc, setViewingDoc] = useState<DocViewerState | null>(null);

  // Delete State
  const [partnerToDelete, setPartnerToDelete] = useState<B2BPartner | null>(null);
  const [deleting, setDeleting] = useState(false);

  // B2B Partner Portal Login Access Modal
  const [loginModalPartner, setLoginModalPartner] = useState<B2BPartner | null>(null);
  const [loginPasswordInput, setLoginPasswordInput] = useState("");
  const [loginEnabledInput, setLoginEnabledInput] = useState(true);
  const [savingLogin, setSavingLogin] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  // Toast
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3500);
  };

  // ================================================================
  // Fetch Partners
  // ================================================================

  const fetchPartners = async () => {
    setRefreshing(true);
    try {
      const res = await fetch("/api/partners", { cache: "no-store" });
      const json = await res.json();
      if (json.success) {
        setPartners(json.data || []);
        if (json.stats) setStats(json.stats);
      } else {
        showToast("error", json.message || "Failed to load partners.");
      }
    } catch {
      showToast("error", "Network error while loading partners.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (!authLoading && canView) {
      fetchPartners();
    }
  }, [authLoading, canView]);

  // ================================================================
  // Stage Transition Handlers
  // ================================================================

  const handleUpdateStage = async (partner: B2BPartner, newStage: string) => {
    if (!canEdit) {
      showToast("error", "You do not have permission to edit partners.");
      return;
    }
    if (newStage === "Partnership Active") {
      await handleFinalizePartnership(partner);
      return;
    }
    try {
      const body: any = { onboardingStage: newStage };
      const res = await fetch(`/api/partners/${partner.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (json.success) {
        setPartners((prev) =>
          prev.map((p) =>
            p.id === partner.id
              ? {
                  ...p,
                  onboardingStage: newStage,
                }
              : p
          )
        );
        showToast("success", `Partner phase updated to: ${newStage}`);
        fetchPartners();
      } else {
        showToast("error", json.message || "Failed to update phase.");
      }
    } catch {
      showToast("error", "Network error updating partner phase.");
    }
  };

  const handleFinalizePartnership = async (partner: B2BPartner) => {
    if (!canEdit) {
      showToast("error", "You do not have permission to edit partners.");
      return;
    }
    try {
      const generatedCode = partner.partnerCode || `WWP-${Math.floor(1000 + Math.random() * 9000)}`;
      const res = await fetch(`/api/partners/${partner.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          onboardingStage: "Partnership Active",
          status: "Active",
          partnerCode: generatedCode,
          isLoginEnabled: true,
        }),
      });
      const json = await res.json();
      if (json.success) {
        const updated = {
          ...partner,
          onboardingStage: "Partnership Active",
          status: "Active",
          partnerCode: generatedCode,
          isLoginEnabled: true,
        };
        setPartners((prev) =>
          prev.map((p) => (p.id === partner.id ? updated : p))
        );
        showToast("success", `🎉 Partnership finalized & activated with ${partner.name}!`);
        openLoginModal(updated);
        fetchPartners();
      } else {
        showToast("error", json.message || "Failed to finalize partnership.");
      }
    } catch {
      showToast("error", "Network error finalizing partnership.");
    }
  };

  // ================================================================
  // Filtered Partners
  // ================================================================

  const filteredPartners = useMemo(() => {
    return partners
      .filter((p) => {
        // 1. Interactive KPI Filter
        if (kpiFilter === "active") {
          const isActive = p.status === "Active" || p.onboardingStage === "Partnership Active";
          if (!isActive) return false;
        } else if (kpiFilter === "kyc_mou") {
          const isKycVerified =
            p.kycStatus === "Verified" ||
            (Boolean(p.aadhaarDocumentUrl) && Boolean(p.panDocumentUrl));
          const isMouSigned =
            p.mouStatus === "Signed" || Boolean(p.mouDocumentUrl);
          if (isKycVerified && isMouSigned) return false;
        } else if (kpiFilter === "mobilized") {
          if ((p.totalCandidatesReferred || 0) <= 0) return false;
        }

        // 2. Stage Filter
        if (stageFilter !== "All") {
          if (p.onboardingStage !== stageFilter) return false;
        }

        // 3. Search Box Query
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          q === "" ||
          p.name.toLowerCase().includes(q) ||
          p.contactPerson.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          (p.state && p.state.toLowerCase().includes(q)) ||
          p.phone.includes(q) ||
          (p.partnerCode && p.partnerCode.toLowerCase().includes(q)) ||
          (p.panNumber && p.panNumber.toLowerCase().includes(q)) ||
          (p.aadhaarNumber && p.aadhaarNumber.includes(q)) ||
          (p.source && p.source.toLowerCase().includes(q));

        // 4. Sub Filters
        const matchesType =
          typeFilter === "All" ||
          (typeFilter === "Individual" &&
            (p.partnerType === "Individual" || p.partnerType === "Sourcing Sub-Agent")) ||
          (typeFilter === "Company" &&
            (p.partnerType === "Company" ||
              p.partnerType === "Agency" ||
              p.partnerType === "Overseas Employer"));

        const matchesMou =
          mouFilter === "All" ||
          (mouFilter === "Signed" &&
            (p.mouStatus === "Signed" || Boolean(p.mouDocumentUrl))) ||
          (mouFilter === "Pending" &&
            (!p.mouStatus || p.mouStatus === "Pending" || p.mouStatus === "None") &&
            !p.mouDocumentUrl) ||
          (mouFilter === "Under Review" && p.mouStatus === "Under Review");

        const isVerified =
          p.kycStatus === "Verified" ||
          (Boolean(p.aadhaarDocumentUrl) && Boolean(p.panDocumentUrl));

        const matchesKyc =
          kycFilter === "All" ||
          (kycFilter === "Verified" && isVerified) ||
          (kycFilter === "Pending" && !isVerified);

        const matchesStatus = statusFilter === "All" || p.status === statusFilter;

        return matchesSearch && matchesType && matchesMou && matchesKyc && matchesStatus;
      })
      .sort((a, b) => {
        if (kpiFilter === "mobilized") {
          return (b.totalCandidatesReferred || 0) - (a.totalCandidatesReferred || 0);
        }
        return 0;
      });
  }, [
    partners,
    kpiFilter,
    stageFilter,
    searchQuery,
    typeFilter,
    mouFilter,
    kycFilter,
    statusFilter,
  ]);

  // ================================================================
  // File Upload Helper
  // ================================================================

  const handleUploadDocument = async (file: File, type: "mou" | "aadhaar" | "pan") => {
    if (!file) return;

    if (file.size > 25 * 1024 * 1024) {
      showToast("error", "File is too large. Maximum allowed size is 25MB.");
      return;
    }

    setUploadingTarget(type);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success && data.url) {
        if (type === "mou") {
          setForm((prev) => ({
            ...prev,
            mouDocumentUrl: data.url,
            mouDocumentName: file.name,
            mouDocumentSize: file.size,
            mouStatus: "Signed",
            mouSignedDate: prev.mouSignedDate || new Date().toISOString().split("T")[0],
          }));
          showToast("success", "Signed MoU document uploaded successfully!");
        } else if (type === "aadhaar") {
          setForm((prev) => {
            const hasPan = Boolean(prev.panDocumentUrl);
            return {
              ...prev,
              aadhaarDocumentUrl: data.url,
              aadhaarDocumentName: file.name,
              kycStatus: hasPan ? "Verified" : prev.kycStatus,
            };
          });
          showToast("success", "Aadhaar Card uploaded successfully!");
        } else if (type === "pan") {
          setForm((prev) => {
            const hasAadhaar = Boolean(prev.aadhaarDocumentUrl);
            return {
              ...prev,
              panDocumentUrl: data.url,
              panDocumentName: file.name,
              kycStatus: hasAadhaar ? "Verified" : prev.kycStatus,
            };
          });
          showToast("success", "PAN Card uploaded successfully!");
        }
      } else {
        showToast("error", data.message || "Upload failed. Please try again.");
      }
    } catch {
      showToast("error", "Error uploading document.");
    } finally {
      setUploadingTarget(null);
    }
  };

  // ================================================================
  // Modal Handlers
  // ================================================================

  const openCreateModal = () => {
    if (!canCreate) {
      showToast("error", "You do not have permission to add sourcing partners.");
      return;
    }
    setEditingPartner(null);
    setForm(DEFAULT_FORM);
    setIsModalOpen(true);
  };

  const openEditModal = (partner: B2BPartner) => {
    if (!canEdit) {
      showToast("error", "You do not have permission to edit sourcing partners.");
      return;
    }
    setEditingPartner(partner);
    setForm({
      partnerCode: partner.partnerCode || "",
      name: partner.name,
      partnerType: partner.partnerType || "Individual",
      contactPerson: partner.contactPerson,
      designation: partner.designation || "",
      phone: partner.phone,
      whatsapp: partner.whatsapp || partner.phone,
      email: partner.email || "",
      city: partner.city,
      state: partner.state || "",
      country: partner.country || "India",
      address: partner.address || "",
      status: partner.status || "Active",
      onboardingStage: partner.onboardingStage || "New Inquiry",
      source: partner.source || "Admin Portal",
      sourcingCapacity: partner.sourcingCapacity || "10-25 candidates / month",
      commissionTerms: partner.commissionTerms || "₹5,000 per selected candidate",
      totalCandidatesReferred: partner.totalCandidatesReferred || 0,
      rating: partner.rating || 5,
      notes: partner.notes || "",
      mouStatus: partner.mouStatus || (partner.mouDocumentUrl ? "Signed" : "Pending"),
      mouDocumentUrl: partner.mouDocumentUrl || "",
      mouDocumentName: partner.mouDocumentName || "",
      mouDocumentSize: partner.mouDocumentSize || 0,
      mouSignedDate: partner.mouSignedDate || "",
      mouExpiryDate: partner.mouExpiryDate || "",
      mouNotes: partner.mouNotes || "",
      aadhaarNumber: partner.aadhaarNumber || "",
      aadhaarDocumentUrl: partner.aadhaarDocumentUrl || "",
      aadhaarDocumentName: partner.aadhaarDocumentName || "",
      panNumber: partner.panNumber || "",
      panDocumentUrl: partner.panDocumentUrl || "",
      panDocumentName: partner.panDocumentName || "",
      kycStatus: partner.kycStatus || "Pending",
    });
    setIsModalOpen(true);
  };

  const handleSavePartner = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingPartner && !canEdit) {
      showToast("error", "You do not have permission to edit sourcing partners.");
      return;
    }
    if (!editingPartner && !canCreate) {
      showToast("error", "You do not have permission to add sourcing partners.");
      return;
    }

    if (!form.name.trim() || !form.contactPerson.trim() || !form.phone.trim() || !form.city.trim()) {
      showToast("error", "Please fill in Partner Name, Contact Person, Phone, and City.");
      return;
    }

    setSaving(true);
    try {
      const url = editingPartner ? `/api/partners/${editingPartner.id}` : "/api/partners";
      const method = editingPartner ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await res.json();
      if (json.success) {
        showToast(
          "success",
          editingPartner ? "Partner details & documents updated!" : "New B2B Partner added!"
        );
        setIsModalOpen(false);
        fetchPartners();
      } else {
        showToast("error", json.message || "Failed to save partner.");
      }
    } catch {
      showToast("error", "Network error occurred.");
    } finally {
      setSaving(false);
    }
  };

  const handleDeletePartner = async () => {
    if (!partnerToDelete) return;
    if (!canDelete) {
      showToast("error", "You do not have permission to delete sourcing partners.");
      return;
    }
    setDeleting(true);
    try {
      const res = await fetch(`/api/partners/${partnerToDelete.id}`, { method: "DELETE" });
      const json = await res.json();
      if (json.success) {
        showToast("success", `Partner "${partnerToDelete.name}" deleted.`);
        setPartnerToDelete(null);
        fetchPartners();
      } else {
        showToast("error", json.message || "Failed to delete partner.");
      }
    } catch {
      showToast("error", "Error deleting partner.");
    } finally {
      setDeleting(false);
    }
  };

  // B2B Partner Portal Login Modal Handlers
  const openLoginModal = (partner: B2BPartner) => {
    setLoginModalPartner(partner);
    setLoginEnabledInput(partner.isLoginEnabled ?? true);
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setLoginPasswordInput(`WW@${randomCode}`);
    setCopiedWhatsApp(false);
  };

  const handleSaveLoginAccess = async () => {
    if (!loginModalPartner) return;
    setSavingLogin(true);
    try {
      const res = await fetch(`/api/partners/${loginModalPartner.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          isLoginEnabled: loginEnabledInput,
          password: loginPasswordInput.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (data.success) {
        showToast("success", "Partner portal login access saved successfully!");
        setPartners((prev) =>
          prev.map((p) =>
            p.id === loginModalPartner.id
              ? { ...p, isLoginEnabled: loginEnabledInput }
              : p
          )
        );
      } else {
        showToast("error", data.message || "Failed to update login access.");
      }
    } catch {
      showToast("error", "Error updating partner login access.");
    } finally {
      setSavingLogin(false);
    }
  };

  const handleCopyWhatsAppCredentials = () => {
    if (!loginModalPartner) return;
    const origin = typeof window !== "undefined" ? window.location.origin : "https://workwisevisa.com";
    const loginUrl = `${origin}/admin`;
    const message = `🌟 *WorkWise Visa — B2B Partner Portal Access*

Hello *${loginModalPartner.contactPerson || loginModalPartner.name}*,
Your official WorkWise Visa Sourcing Partner access has been activated!

🔗 *Portal URL:* ${loginUrl}
👤 *Login Email / Phone:* ${loginModalPartner.email || loginModalPartner.phone}
🔑 *Password:* ${loginPasswordInput}

Through your portal at ${loginUrl}, you can:
✅ View live urgent Gulf & Europe hiring demands
✅ Submit & enroll candidates with documents directly
✅ Track candidate visa milestones in real-time

Best regards,
*WorkWise Visa Partner Operations Team*`;

    navigator.clipboard.writeText(message);
    setCopiedWhatsApp(true);
    showToast("success", "WhatsApp credentials copied to clipboard!");
    setTimeout(() => setCopiedWhatsApp(false), 2500);
  };

  // Quick increment candidate count
  const handleQuickAddCandidate = async (partner: B2BPartner) => {
    if (!canEdit) {
      showToast("error", "You do not have permission to edit partners.");
      return;
    }
    const newCount = (partner.totalCandidatesReferred || 0) + 1;
    try {
      const res = await fetch(`/api/partners/${partner.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ totalCandidatesReferred: newCount }),
      });
      const json = await res.json();
      if (json.success) {
        setPartners((prev) =>
          prev.map((p) => (p.id === partner.id ? { ...p, totalCandidatesReferred: newCount } : p))
        );
        setStats((prev) => ({ ...prev, totalCandidates: prev.totalCandidates + 1 }));
        showToast("success", `Candidate count updated for ${partner.name}: ${newCount}`);
      }
    } catch {
      showToast("error", "Failed to update candidate count.");
    }
  };

  const renderStageBadge = (stage?: string) => {
    switch (stage) {
      case "New Inquiry":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-100 text-blue-800 border border-blue-200">
            <Sparkles className="w-2.5 h-2.5 text-blue-600" />
            <span>New Inquiry</span>
          </span>
        );
      case "In Discussion":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-900 border border-amber-200">
            <MessageSquare className="w-2.5 h-2.5 text-amber-600" />
            <span>In Discussion</span>
          </span>
        );
      case "KYC & MoU Pending":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-purple-100 text-purple-800 border border-purple-200">
            <FileText className="w-2.5 h-2.5 text-purple-600" />
            <span>KYC &amp; MoU Pending</span>
          </span>
        );
      case "Partnership Active":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
            <span>Partnership Active</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-slate-100 text-slate-700 border border-slate-200">
            <span>{stage || "Inquiry"}</span>
          </span>
        );
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="text-center p-8 bg-white rounded-3xl border border-slate-200/80 shadow-sm max-w-sm w-full mx-4">
          <div className="w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm font-bold text-slate-800">Verifying B2B Partner Access...</p>
          <p className="text-xs text-slate-400 mt-1">Checking employee permissions</p>
        </div>
      </div>
    );
  }

  if (!canView) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row font-sans">
        <AdminSidebar />
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="text-center p-8 bg-white rounded-3xl border border-slate-200/80 shadow-sm max-w-md w-full mx-4">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Access Restricted</h2>
            <p className="text-xs text-slate-500 mt-1.5 mb-6">
              You do not have permission to view B2B Candidate Sourcing Partners. Please contact your Super Administrator to request access.
            </p>
            <Link
              href="/admin/dashboard"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all inline-block shadow-sm"
            >
              Back to Dashboard
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row font-sans">
      {/* ── UNIFIED SIDEBAR ─────────────────────────────────── */}
      <AdminSidebar counts={{ partners: partners.length }} />

      {/* ── MAIN CONTENT CONTAINER ─────────────────────────── */}
      <main className="flex-1 min-w-0 p-3 sm:p-6 lg:p-8 overflow-x-hidden lg:overflow-y-auto lg:max-h-screen space-y-4 sm:space-y-6">
        {/* Floating Toast */}
        {toast && (
          <div
            className={`fixed top-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-lg border text-sm font-semibold transition-all duration-300 animate-in fade-in slide-in-from-top-4 ${
              toast.type === "success"
                ? "bg-emerald-600 text-white border-emerald-500"
                : "bg-rose-600 text-white border-rose-500"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-100 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-100 flex-shrink-0" />
            )}
            <span>{toast.message}</span>
          </div>
        )}

        {/* ── HEADER BANNER ───────────────────────────────── */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold">
                <Handshake className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                B2B Candidate Sourcing Partners
              </h1>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {stats.active} Active
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
                <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
                {stats.pipelineLeads} In Pipeline
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Manage agencies, sub-agents, and candidate sourcing partners. Track inbound B2B inquiries through discussion, KYC &amp; MoU signing, to active partner mobilization.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={fetchPartners}
              disabled={refreshing}
              className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200 cursor-pointer disabled:opacity-50 active:scale-95"
              title="Refresh list"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-emerald-600" : ""}`} />
              <span>{refreshing ? "Syncing..." : "Refresh"}</span>
            </button>

            {canCreate && (
              <button
                onClick={openCreateModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all shadow-md shadow-emerald-600/20 cursor-pointer hover:shadow-lg active:scale-95"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span>Add Sourcing Partner</span>
              </button>
            )}
          </div>
        </div>



        {/* ── KPI METRICS CARDS ───────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          {/* Card 1: Pipeline Funnel (All Partners) */}
          <button
            type="button"
            onClick={() => {
              setKpiFilter("all");
              setStageFilter("All");
            }}
            className={`text-left rounded-2xl p-3 sm:p-5 border shadow-sm flex flex-col justify-between cursor-pointer transition-all group active:scale-[0.98] ${
              kpiFilter === "all" && stageFilter === "All"
                ? "bg-gradient-to-br from-amber-500/10 via-white to-amber-50/30 border-amber-400 ring-2 ring-amber-400/40 shadow-md"
                : "bg-white border-slate-200/80 hover:border-amber-300 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between gap-1.5 w-full">
              <div className="flex items-center gap-1.5 min-w-0">
                <p className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider truncate ${
                  kpiFilter === "all" && stageFilter === "All" ? "text-amber-700" : "text-slate-500 group-hover:text-amber-700"
                }`}>
                  Pipeline Funnel
                </p>
                {kpiFilter === "all" && stageFilter === "All" && (
                  <span className="text-[9px] font-black text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded-full shrink-0">
                    All
                  </span>
                )}
              </div>
              <div className={`w-7 h-7 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                kpiFilter === "all" && stageFilter === "All"
                  ? "bg-amber-500 text-white shadow-sm shadow-amber-500/30"
                  : "bg-amber-50 text-amber-600"
              }`}>
                <TrendingUp className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </div>
            </div>
            <div className="mt-1 sm:mt-2 min-w-0">
              <p className="text-xl sm:text-3xl font-black text-amber-600 leading-none">
                {partners.length}
              </p>
              <p className="text-[10px] sm:text-[11px] font-semibold text-slate-400 mt-1 truncate">
                {stats.active} Active • {stats.newInquiries} New
              </p>
            </div>
          </button>

          {/* Card 2: KYC & MoU Review */}
          <button
            type="button"
            onClick={() => {
              setKpiFilter(kpiFilter === "kyc_mou" ? "all" : "kyc_mou");
            }}
            className={`text-left rounded-2xl p-3 sm:p-5 border shadow-sm flex flex-col justify-between cursor-pointer transition-all group active:scale-[0.98] ${
              kpiFilter === "kyc_mou"
                ? "bg-gradient-to-br from-indigo-500/10 via-white to-indigo-50/30 border-indigo-400 ring-2 ring-indigo-400/40 shadow-md"
                : "bg-white border-slate-200/80 hover:border-indigo-300 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between gap-1.5 w-full">
              <div className="flex items-center gap-1.5 min-w-0">
                <p className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider truncate ${
                  kpiFilter === "kyc_mou" ? "text-indigo-700" : "text-slate-500 group-hover:text-indigo-700"
                }`}>
                  KYC &amp; MoU
                </p>
                {kpiFilter === "kyc_mou" && (
                  <span className="text-[9px] font-black text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded-full shrink-0">
                    Filtered
                  </span>
                )}
              </div>
              <div className={`w-7 h-7 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                kpiFilter === "kyc_mou"
                  ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
                  : "bg-indigo-50 text-indigo-600"
              }`}>
                <FileCheck className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </div>
            </div>
            <div className="mt-1 sm:mt-2 min-w-0">
              <p className="text-xl sm:text-3xl font-black text-indigo-600 leading-none">
                {stats.mouReview || stats.pendingMou}
              </p>
              <p className="text-[10px] sm:text-[11px] font-semibold text-indigo-600/80 mt-1 truncate">
                {stats.signedMou} Signed • {stats.kycVerified} KYC
              </p>
            </div>
          </button>

          {/* Card 3: Active Partners */}
          <button
            type="button"
            onClick={() => {
              setKpiFilter(kpiFilter === "active" ? "all" : "active");
            }}
            className={`text-left rounded-2xl p-3 sm:p-5 border shadow-sm flex flex-col justify-between cursor-pointer transition-all group active:scale-[0.98] ${
              kpiFilter === "active"
                ? "bg-gradient-to-br from-emerald-500/10 via-white to-emerald-50/30 border-emerald-400 ring-2 ring-emerald-400/40 shadow-md"
                : "bg-white border-slate-200/80 hover:border-emerald-300 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between gap-1.5 w-full">
              <div className="flex items-center gap-1.5 min-w-0">
                <p className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider truncate ${
                  kpiFilter === "active" ? "text-emerald-700" : "text-slate-500 group-hover:text-emerald-700"
                }`}>
                  Active Partners
                </p>
                {kpiFilter === "active" && (
                  <span className="text-[9px] font-black text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-full shrink-0">
                    Active
                  </span>
                )}
              </div>
              <div className={`w-7 h-7 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                kpiFilter === "active"
                  ? "bg-emerald-600 text-white shadow-sm shadow-emerald-600/30"
                  : "bg-emerald-50 text-emerald-600"
              }`}>
                <Handshake className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </div>
            </div>
            <div className="mt-1 sm:mt-2 min-w-0">
              <p className="text-xl sm:text-3xl font-black text-emerald-600 leading-none">
                {stats.active}
              </p>
              <p className="text-[10px] sm:text-[11px] font-semibold text-slate-400 mt-1 truncate">
                {stats.companies} Co. • {stats.individuals} Indiv.
              </p>
            </div>
          </button>

          {/* Card 4: Candidates Mobilized */}
          <button
            type="button"
            onClick={() => {
              setKpiFilter(kpiFilter === "mobilized" ? "all" : "mobilized");
            }}
            className={`text-left rounded-2xl p-3 sm:p-5 border shadow-sm flex flex-col justify-between cursor-pointer transition-all group active:scale-[0.98] ${
              kpiFilter === "mobilized"
                ? "bg-gradient-to-br from-teal-500/10 via-white to-teal-50/30 border-teal-400 ring-2 ring-teal-400/40 shadow-md"
                : "bg-white border-slate-200/80 hover:border-teal-300 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between gap-1.5 w-full">
              <div className="flex items-center gap-1.5 min-w-0">
                <p className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider truncate ${
                  kpiFilter === "mobilized" ? "text-teal-700" : "text-slate-500 group-hover:text-teal-700"
                }`}>
                  Mobilized
                </p>
                {kpiFilter === "mobilized" && (
                  <span className="text-[9px] font-black text-teal-700 bg-teal-100 px-1.5 py-0.5 rounded-full shrink-0">
                    Mobilized
                  </span>
                )}
              </div>
              <div className={`w-7 h-7 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                kpiFilter === "mobilized"
                  ? "bg-teal-600 text-white shadow-sm shadow-teal-600/30"
                  : "bg-teal-50 text-teal-600"
              }`}>
                <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </div>
            </div>
            <div className="mt-1 sm:mt-2 min-w-0">
              <p className="text-xl sm:text-3xl font-black text-teal-600 leading-none">
                {stats.totalCandidates}
              </p>
              <p className="text-[10px] sm:text-[11px] font-semibold text-slate-400 mt-1 truncate">
                Total candidates
              </p>
            </div>
          </button>
        </div>

        {/* ── FILTERS & SEARCH BAR ─────────────────────────── */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-sm flex flex-col gap-2.5">
          {/* Search Box */}
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Name, Contact Person, City, PAN, Aadhaar..."
              className="w-full pl-10 pr-9 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-800 placeholder-slate-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sub-Filters: Phase, Type, MoU, KYC, Status + View Toggle & Reset */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 flex-1">
              {/* Pipeline Phase Filter */}
              <select
                value={stageFilter}
                onChange={(e) => {
                  setStageFilter(e.target.value);
                  if (e.target.value !== "All") setKpiFilter("all");
                }}
                className={`w-full px-2.5 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                  stageFilter !== "All"
                    ? "bg-amber-50 text-amber-900 border-amber-300 ring-1 ring-amber-400/40"
                    : "bg-slate-50 border-slate-200 text-slate-700 focus:outline-none focus:border-emerald-500"
                }`}
              >
                <option value="All">All Phases ({partners.length})</option>
                <option value="New Inquiry">🟡 Phase 1: New Inquiry ({stats.newInquiries || 0})</option>
                <option value="In Discussion">🔵 Phase 2: In Discussion ({stats.inDiscussion || 0})</option>
                <option value="KYC & MoU Pending">🟣 Phase 3: KYC & MoU ({stats.mouReview || stats.pendingMou || 0})</option>
                <option value="Partnership Active">🟢 Phase 4: Active 🤝 ({stats.active || 0})</option>
              </select>

              {/* Entity Type Filter */}
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full px-2.5 py-2 rounded-xl text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="All">All Types</option>
                <option value="Individual">Individuals</option>
                <option value="Company">Agencies</option>
              </select>

              {/* MoU Status Filter */}
              <select
                value={mouFilter}
                onChange={(e) => setMouFilter(e.target.value)}
                className="w-full px-2.5 py-2 rounded-xl text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="All">All MoU</option>
                <option value="Signed">Signed MoU</option>
                <option value="Pending">Pending MoU</option>
              </select>

              {/* KYC Status Filter */}
              <select
                value={kycFilter}
                onChange={(e) => setKycFilter(e.target.value)}
                className="w-full px-2.5 py-2 rounded-xl text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="All">All KYC</option>
                <option value="Verified">KYC Verified</option>
                <option value="Pending">KYC Pending</option>
              </select>

              {/* Partner Status */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-2.5 py-2 rounded-xl text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Pending Verification">Pending</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* Actions: Reset Filter & View Mode Toggle */}
            <div className="flex items-center justify-end gap-1.5 self-end sm:self-auto shrink-0">
              {(kpiFilter !== "all" ||
                stageFilter !== "All" ||
                typeFilter !== "All" ||
                mouFilter !== "All" ||
                kycFilter !== "All" ||
                statusFilter !== "All" ||
                searchQuery.trim() !== "") && (
                <button
                  type="button"
                  onClick={() => {
                    setKpiFilter("all");
                    setStageFilter("All");
                    setTypeFilter("All");
                    setMouFilter("All");
                    setKycFilter("All");
                    setStatusFilter("All");
                    setSearchQuery("");
                  }}
                  className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                  title="Reset all filters"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset ({filteredPartners.length}/{partners.length})</span>
                </button>
              )}

              <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setViewMode("table")}
                  className={`p-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewMode === "table"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                  title="Table View"
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("cards")}
                  className={`p-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewMode === "cards"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                  title="Grid Cards View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── PARTNERS LIST / TABLE ───────────────────────── */}
        {loading ? (
          <div className="bg-white rounded-2xl p-12 border border-slate-200/90 shadow-sm flex flex-col items-center justify-center text-center">
            <RefreshCw className="w-8 h-8 text-emerald-600 animate-spin mb-3" />
            <p className="text-sm font-bold text-slate-700">Loading B2B Partners...</p>
            <p className="text-xs text-slate-400 mt-1">Connecting to MongoDB Atlas</p>
          </div>
        ) : filteredPartners.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 border border-slate-200/90 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-3xl bg-slate-100 text-slate-400 flex items-center justify-center mb-4">
              <Handshake className="w-8 h-8" />
            </div>
            <h3 className="text-base font-bold text-slate-900">No B2B Partners Found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              {searchQuery || typeFilter !== "All" || mouFilter !== "All"
                ? "No partners match your search or filter criteria. Try clearing filters."
                : "Get started by registering an individual local agent or partner agency."}
            </p>
            {canCreate && (
              <button
                onClick={openCreateModal}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add First Sourcing Partner</span>
              </button>
            )}
          </div>
        ) : viewMode === "table" ? (
          /* ── TABLE VIEW WITH DUAL-MODE FOR MOBILE ─────── */
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
            {/* ── MOBILE PARTNER CARDS (block lg:hidden) ── */}
            <div className="block lg:hidden space-y-3 p-3 bg-slate-50/60">
              {filteredPartners.map((partner) => {
                const isCompany =
                  partner.partnerType === "Company" ||
                  partner.partnerType === "Agency" ||
                  partner.partnerType === "Overseas Employer";

                const isMouSigned =
                  partner.mouStatus === "Signed" || Boolean(partner.mouDocumentUrl);

                const hasAadhaar = Boolean(partner.aadhaarDocumentUrl);
                const hasPan = Boolean(partner.panDocumentUrl);
                const isKycComplete =
                  partner.kycStatus === "Verified" || (hasAadhaar && hasPan);

                const cleanPhone = partner.whatsapp
                  ? partner.whatsapp.replace(/[^0-9]/g, "")
                  : partner.phone.replace(/[^0-9]/g, "");

                const isPipelineLead =
                  partner.status !== "Active" &&
                  partner.onboardingStage !== "Partnership Active";

                return (
                  <div
                    key={partner.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-3.5 sm:p-4 space-y-3 hover:border-emerald-300 transition-all"
                  >
                    {/* Header: Avatar, Name, Type, Status & Pipeline Phase */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold flex-shrink-0 ${
                            isCompany
                              ? "bg-purple-100 text-purple-700 border border-purple-200"
                              : "bg-blue-100 text-blue-700 border border-blue-200"
                          }`}
                        >
                          {isCompany ? <Building2 className="w-4 h-4 sm:w-5 sm:h-5" /> : <User className="w-4 h-4 sm:w-5 sm:h-5" />}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-sm text-slate-900 truncate">
                            {partner.name}
                          </h4>
                          <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                                isCompany
                                  ? "bg-purple-50 text-purple-700 border border-purple-200"
                                  : "bg-blue-50 text-blue-700 border border-blue-200"
                              }`}
                            >
                              {isCompany ? "Company" : "Individual"}
                            </span>
                            <span className="text-[11px] text-slate-500 font-medium truncate">
                              {partner.city}
                            </span>
                            {partner.partnerCode && (
                              <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                                {partner.partnerCode}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-1 shrink-0">
                        {renderStageBadge(partner.onboardingStage)}
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            partner.status === "Active"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : partner.status === "Pending Verification"
                              ? "bg-amber-50 text-amber-700 border border-amber-200"
                              : "bg-slate-100 text-slate-500 border border-slate-200"
                          }`}
                        >
                          {partner.status}
                        </span>
                      </div>
                    </div>

                    {/* Stage Quick Selector & Sourcing Capacity */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-200/70">
                      <div className="flex items-center gap-1.5 min-w-0 w-full sm:w-auto">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Phase:</span>
                        {canEdit ? (
                          <select
                            value={
                              partner.onboardingStage ||
                              (partner.status === "Active" ? "Partnership Active" : "New Inquiry")
                            }
                            onChange={(e) => handleUpdateStage(partner, e.target.value)}
                            className="w-full sm:w-auto text-xs font-bold py-1 px-2 rounded-lg border border-slate-200 bg-white text-slate-800 cursor-pointer hover:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
                          >
                            <option value="New Inquiry">🟡 1. New Inquiry</option>
                            <option value="In Discussion">🔵 2. In Discussion</option>
                            <option value="KYC & MoU Pending">🟣 3. KYC &amp; MoU Pending</option>
                            <option value="Partnership Active">🟢 4. Partnership Active 🤝</option>
                            <option value="Inactive">⚪ Inactive</option>
                          </select>
                        ) : (
                          <span className="text-xs font-bold text-slate-700">
                            {partner.onboardingStage || "Inquiry"}
                          </span>
                        )}
                      </div>

                      {partner.sourcingCapacity && (
                        <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 shrink-0 self-start sm:self-auto truncate max-w-full">
                          Cap: {partner.sourcingCapacity}
                        </span>
                      )}
                    </div>

                    {/* Contact Person & Contact Details */}
                    <div className="bg-slate-50/90 p-3 rounded-xl border border-slate-100 text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 text-[11px]">Contact Person:</span>
                        <span className="font-bold text-slate-800">{partner.contactPerson}</span>
                      </div>

                      {/* Touch-Friendly Action Buttons: Phone & WhatsApp */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <a
                          href={`tel:${partner.phone}`}
                          className="py-1.5 px-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 font-mono text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition-colors active:scale-95"
                        >
                          <Phone className="w-3.5 h-3.5 text-slate-500" />
                          <span className="truncate">{partner.phone}</span>
                        </a>

                        {cleanPhone ? (
                          <a
                            href={`https://wa.me/${cleanPhone}?text=Hello%20${encodeURIComponent(
                              partner.contactPerson
                            )},%20regarding%20candidate%20sourcing%20partnership%20with%20WorkWise%20Visa...`}
                            target="_blank"
                            rel="noreferrer"
                            className="py-1.5 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors active:scale-95"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>WhatsApp</span>
                          </a>
                        ) : (
                          <div className="py-1.5 px-2.5 rounded-xl bg-slate-100 text-slate-400 text-xs font-medium text-center">
                            No WhatsApp
                          </div>
                        )}
                      </div>

                      {partner.commissionTerms && (
                        <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-200/60">
                          <span className="text-slate-500 shrink-0">Terms:</span>
                          <span className="text-slate-700 font-medium truncate ml-2">
                            {partner.commissionTerms}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Candidates & Badges Grid */}
                    <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
                      {/* Candidates count */}
                      <div className="flex items-center gap-1.5">
                        <div className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-lg font-bold text-slate-800 text-[11px]">
                          <TrendingUp className="w-3 h-3 text-teal-600" />
                          <span>{partner.totalCandidatesReferred || 0} Cand.</span>
                        </div>
                        {canEdit && (
                          <button
                            onClick={() => handleQuickAddCandidate(partner)}
                            className="text-[10px] font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded active:scale-95 cursor-pointer"
                            title="Click to increment candidates referred count by 1"
                          >
                            +1
                          </button>
                        )}
                      </div>

                      {/* MoU & KYC Pills */}
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {isMouSigned ? (
                          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                            <FileCheck className="w-3 h-3 text-emerald-600" />
                            <span>MoU ✓</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-800 border border-amber-200">
                            <Clock className="w-3 h-3 text-amber-600" />
                            <span>MoU Pending</span>
                          </span>
                        )}

                        {isKycComplete ? (
                          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                            <ShieldCheck className="w-3 h-3 text-emerald-600" />
                            <span>KYC ✓</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-800 border border-amber-200">
                            <span>KYC Partial</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions Bar */}
                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
                      {/* Document Viewer links */}
                      <div className="flex items-center gap-2 flex-wrap">
                        {partner.mouDocumentUrl && (
                          <button
                            onClick={() =>
                              setViewingDoc({
                                title: "Signed Partnership MoU",
                                partnerName: partner.name,
                                url: partner.mouDocumentUrl!,
                                fileName: partner.mouDocumentName,
                                date: partner.mouSignedDate,
                              })
                            }
                            className="text-[11px] font-bold text-indigo-600 hover:underline flex items-center gap-0.5 cursor-pointer"
                          >
                            <FileText className="w-3 h-3" /> MoU
                          </button>
                        )}
                        {hasAadhaar && (
                          <button
                            onClick={() =>
                              setViewingDoc({
                                title: "Aadhaar Card",
                                partnerName: partner.name,
                                url: partner.aadhaarDocumentUrl!,
                                fileName: partner.aadhaarDocumentName,
                                date: partner.aadhaarNumber,
                              })
                            }
                            className="text-[11px] font-bold text-emerald-700 hover:underline flex items-center gap-0.5 cursor-pointer"
                          >
                            <IdCard className="w-3 h-3" /> Aadhaar
                          </button>
                        )}
                        {hasPan && (
                          <button
                            onClick={() =>
                              setViewingDoc({
                                title: "PAN Card",
                                partnerName: partner.name,
                                url: partner.panDocumentUrl!,
                                fileName: partner.panDocumentName,
                                date: partner.panNumber,
                              })
                            }
                            className="text-[11px] font-bold text-indigo-700 hover:underline flex items-center gap-0.5 cursor-pointer"
                          >
                            <CreditCard className="w-3 h-3" /> PAN
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {canEdit && (
                          <button
                            onClick={() => openLoginModal(partner)}
                            className={`p-1.5 rounded-xl border transition-colors cursor-pointer ${
                              partner.isLoginEnabled
                                ? "bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100"
                                : "bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200"
                            }`}
                            title="Partner Portal Login Credentials"
                          >
                            <Key className="w-3.5 h-3.5" />
                          </button>
                        )}

                        {canEdit && (
                          <button
                            onClick={() => openEditModal(partner)}
                            className="px-2.5 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl inline-flex items-center gap-1 active:scale-95 cursor-pointer"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Edit</span>
                          </button>
                        )}

                        {canDelete && (
                          <button
                            onClick={() => setPartnerToDelete(partner)}
                            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-xl active:scale-95 cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── DESKTOP TABLE VIEW (hidden lg:block) ── */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200/90 text-slate-500 font-bold text-[11px] uppercase tracking-wider">
                    <th className="py-3.5 px-4 w-[28%]">Partner &amp; Location</th>
                    <th className="py-3.5 px-3.5 w-[20%]">Contact Person</th>
                    <th className="py-3.5 px-3.5 w-[18%]">Pipeline Phase</th>
                    <th className="py-3.5 px-3.5 w-[20%]">Compliance (MoU &amp; KYC)</th>
                    <th className="py-3.5 px-2 w-[7%] text-center">Candidates</th>
                    <th className="py-3.5 px-4 w-[7%] text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredPartners.map((partner) => {
                    const isCompany =
                      partner.partnerType === "Company" ||
                      partner.partnerType === "Agency" ||
                      partner.partnerType === "Overseas Employer";

                    const isMouSigned =
                      partner.mouStatus === "Signed" || Boolean(partner.mouDocumentUrl);

                    const hasAadhaar = Boolean(partner.aadhaarDocumentUrl);
                    const hasPan = Boolean(partner.panDocumentUrl);
                    const isKycComplete =
                      partner.kycStatus === "Verified" || (hasAadhaar && hasPan);

                    const cleanPhone = partner.whatsapp
                      ? partner.whatsapp.replace(/[^0-9]/g, "")
                      : partner.phone.replace(/[^0-9]/g, "");

                    return (
                      <tr
                        key={partner.id}
                        className="hover:bg-slate-50/80 transition-colors group"
                      >
                        {/* 1. Partner Name, Entity & Location */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-start gap-2.5">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold flex-shrink-0 mt-0.5 ${
                                isCompany
                                  ? "bg-purple-100 text-purple-700 border border-purple-200"
                                  : "bg-blue-100 text-blue-700 border border-blue-200"
                              }`}
                            >
                              {isCompany ? (
                                <Building2 className="w-4 h-4" />
                              ) : (
                                <User className="w-4 h-4" />
                              )}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                                  {partner.name}
                                </span>
                                <span
                                  className={`px-1.5 py-0.2 rounded text-[10px] font-extrabold ${
                                    isCompany
                                      ? "bg-purple-50 text-purple-700 border border-purple-200"
                                      : "bg-blue-50 text-blue-700 border border-blue-200"
                                  }`}
                                >
                                  {isCompany ? "Company" : "Individual"}
                                </span>
                                {partner.partnerCode && (
                                  <span className="font-mono text-[10px] font-bold text-emerald-800 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200">
                                    {partner.partnerCode}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500 font-semibold flex-wrap">
                                <span className="flex items-center gap-1 text-slate-600">
                                  <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                                  <span>{partner.city}{partner.state ? `, ${partner.state}` : ""}</span>
                                </span>
                                {partner.sourcingCapacity && (
                                  <span className="text-[10px] text-amber-800 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                                    {partner.sourcingCapacity}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* 2. Contact Person & WhatsApp */}
                        <td className="py-3.5 px-3.5">
                          <div className="font-bold text-slate-800">
                            {partner.contactPerson}
                          </div>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-[11px] font-semibold text-slate-600 flex items-center gap-1 font-mono">
                              <Phone className="w-3 h-3 text-slate-400" />
                              {partner.phone}
                            </span>
                            {cleanPhone && (
                              <a
                                href={`https://wa.me/${cleanPhone}?text=Hello%20${encodeURIComponent(
                                  partner.contactPerson
                                )},%20regarding%20candidate%20sourcing%20partnership%20with%20WorkWise%20Visa...`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-[10px] font-bold border border-emerald-200 transition-colors"
                                title="Chat on WhatsApp"
                              >
                                <MessageSquare className="w-2.5 h-2.5" />
                                <span>WhatsApp</span>
                              </a>
                            )}
                          </div>
                        </td>

                        {/* 3. Pipeline Phase & Stage Selector */}
                        <td className="py-3.5 px-3.5">
                          <div className="space-y-1 max-w-[180px]">
                            <div>{renderStageBadge(partner.onboardingStage)}</div>
                            {canEdit && (
                              <select
                                value={
                                  partner.onboardingStage ||
                                  (partner.status === "Active"
                                    ? "Partnership Active"
                                    : "New Inquiry")
                                }
                                onChange={(e) => handleUpdateStage(partner, e.target.value)}
                                className="w-full text-[10px] font-bold py-1 px-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 cursor-pointer hover:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                              >
                                <option value="New Inquiry">1. New Inquiry</option>
                                <option value="In Discussion">2. In Discussion</option>
                                <option value="KYC & MoU Pending">3. KYC &amp; MoU Pending</option>
                                <option value="Partnership Active">4. Partnership Active 🤝</option>
                                <option value="Inactive">Inactive</option>
                              </select>
                            )}
                          </div>
                        </td>

                        {/* 4. Compliance: MoU & KYC */}
                        <td className="py-3.5 px-3.5">
                          <div className="space-y-1.5">
                            {/* MoU Status Row */}
                            <div className="flex items-center gap-1.5 flex-wrap">
                              {isMouSigned ? (
                                <>
                                  <span className="inline-flex items-center gap-1 px-2 py-0.2 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                                    <FileCheck className="w-3 h-3 text-emerald-600" />
                                    <span>MoU Signed</span>
                                  </span>
                                  {partner.mouDocumentUrl && (
                                    <button
                                      onClick={() =>
                                        setViewingDoc({
                                          title: "Signed Partnership MoU",
                                          partnerName: partner.name,
                                          url: partner.mouDocumentUrl!,
                                          fileName: partner.mouDocumentName,
                                          date: partner.mouSignedDate,
                                        })
                                      }
                                      className="text-[10px] font-bold text-indigo-600 hover:underline cursor-pointer"
                                    >
                                      View
                                    </button>
                                  )}
                                </>
                              ) : (
                                <>
                                  <span className="inline-flex items-center gap-1 px-2 py-0.2 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-800 border border-amber-200">
                                    <Clock className="w-3 h-3 text-amber-600" />
                                    <span>MoU Pending</span>
                                  </span>
                                  {canEdit && (
                                    <button
                                      onClick={() => openEditModal(partner)}
                                      className="text-[10px] font-bold text-emerald-600 hover:underline cursor-pointer"
                                    >
                                      +Upload
                                    </button>
                                  )}
                                </>
                              )}
                            </div>

                            {/* KYC Documents Row */}
                            <div className="flex items-center gap-1.5 flex-wrap">
                              {isKycComplete ? (
                                <span className="inline-flex items-center gap-1 px-2 py-0.2 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                                  <span>KYC Verified</span>
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2 py-0.2 rounded-full text-[10px] font-bold bg-slate-100 text-slate-500 border border-slate-200">
                                  <span>KYC Pending</span>
                                </span>
                              )}

                              {hasAadhaar ? (
                                <button
                                  onClick={() =>
                                    setViewingDoc({
                                      title: "Aadhaar Card",
                                      partnerName: partner.name,
                                      url: partner.aadhaarDocumentUrl!,
                                      fileName: partner.aadhaarDocumentName,
                                      date: partner.aadhaarNumber,
                                    })
                                  }
                                  className="text-[10px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-1 py-0.2 rounded border border-emerald-200 cursor-pointer"
                                  title="View Aadhaar"
                                >
                                  Aadhaar ✓
                                </button>
                              ) : (
                                <span className="text-[10px] text-slate-400">Aadhaar ✕</span>
                              )}

                              {hasPan ? (
                                <button
                                  onClick={() =>
                                    setViewingDoc({
                                      title: "PAN Card",
                                      partnerName: partner.name,
                                      url: partner.panDocumentUrl!,
                                      fileName: partner.panDocumentName,
                                      date: partner.panNumber,
                                    })
                                  }
                                  className="text-[10px] font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-1 py-0.2 rounded border border-indigo-200 cursor-pointer"
                                  title="View PAN"
                                >
                                  PAN ✓
                                </button>
                              ) : (
                                <span className="text-[10px] text-slate-400">PAN ✕</span>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* 5. Candidates Referred */}
                        <td className="py-3.5 px-2 text-center">
                          <div className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-lg font-bold text-slate-800 text-xs">
                            <TrendingUp className="w-3 h-3 text-teal-600" />
                            <span>{partner.totalCandidatesReferred || 0}</span>
                          </div>
                          {canEdit && (
                            <div className="mt-0.5">
                              <button
                                onClick={() => handleQuickAddCandidate(partner)}
                                className="text-[10px] font-bold text-emerald-700 hover:underline cursor-pointer"
                                title="+1 Candidate referred"
                              >
                                +1
                              </button>
                            </div>
                          )}
                        </td>

                        {/* 6. Actions */}
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            {canEdit && (
                              <button
                                onClick={() => openLoginModal(partner)}
                                className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                                  partner.isLoginEnabled
                                    ? "bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100"
                                    : "bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200"
                                }`}
                                title={
                                  partner.isLoginEnabled
                                    ? "Portal Login Active — Manage"
                                    : "Enable Partner Portal Login"
                                }
                              >
                                <Key className="w-4 h-4" />
                              </button>
                            )}
                            {canEdit && (
                              <button
                                onClick={() => openEditModal(partner)}
                                className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors cursor-pointer"
                                title="Edit Details, MoU & KYC"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                            )}
                            {canDelete && (
                              <button
                                onClick={() => setPartnerToDelete(partner)}
                                className="p-1.5 rounded-lg text-slate-500 hover:text-rose-700 hover:bg-rose-50 transition-colors cursor-pointer"
                                title="Delete Partner"
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
          </div>
        ) : (
          /* ── GRID CARDS VIEW ──────────────────────────── */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredPartners.map((partner) => {
              const isCompany =
                partner.partnerType === "Company" ||
                partner.partnerType === "Agency" ||
                partner.partnerType === "Overseas Employer";

              const isMouSigned =
                partner.mouStatus === "Signed" || Boolean(partner.mouDocumentUrl);

              const hasAadhaar = Boolean(partner.aadhaarDocumentUrl);
              const hasPan = Boolean(partner.panDocumentUrl);
              const isKycComplete =
                partner.kycStatus === "Verified" || (hasAadhaar && hasPan);

              const cleanPhone = partner.whatsapp
                ? partner.whatsapp.replace(/[^0-9]/g, "")
                : partner.phone.replace(/[^0-9]/g, "");

              return (
                <div
                  key={partner.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  {/* Card Header */}
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold flex-shrink-0 ${
                            isCompany
                              ? "bg-purple-100 text-purple-700 border border-purple-200"
                              : "bg-blue-100 text-blue-700 border border-blue-200"
                          }`}
                        >
                          {isCompany ? (
                            <Building2 className="w-5 h-5" />
                          ) : (
                            <User className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-black text-slate-900 leading-tight">
                            {partner.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${
                                isCompany
                                  ? "bg-purple-50 text-purple-700 border border-purple-200"
                                  : "bg-blue-50 text-blue-700 border border-blue-200"
                              }`}
                            >
                              {isCompany ? "Company" : "Individual"}
                            </span>
                            {partner.partnerCode && (
                              <span className="font-mono text-[10px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                                {partner.partnerCode}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-500 font-semibold flex-wrap">
                            {partner.sourcingCapacity && (
                              <span className="text-[10px] text-amber-800 bg-amber-50 px-1.5 rounded border border-amber-200">
                                Cap: {partner.sourcingCapacity}
                              </span>
                            )}
                            {partner.source && (
                              <span className="text-[10px] text-slate-400">
                                via {partner.source}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Status & Stage */}
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        {renderStageBadge(partner.onboardingStage)}
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                            partner.status === "Active"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                          }`}
                        >
                          {partner.status}
                        </span>
                      </div>
                    </div>

                    {/* Quick Stage Selector */}
                    {canEdit && (
                      <div className="mt-3 flex items-center justify-between gap-2 p-2 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                        <span className="text-slate-400 font-semibold text-[11px]">Phase:</span>
                        <select
                          value={
                            partner.onboardingStage ||
                            (partner.status === "Active" ? "Partnership Active" : "New Inquiry")
                          }
                          onChange={(e) => handleUpdateStage(partner, e.target.value)}
                          className="text-[10px] font-bold py-1 px-2 rounded-lg border border-slate-200 bg-white text-slate-700 cursor-pointer hover:border-emerald-500"
                        >
                          <option value="New Inquiry">1. New Inquiry</option>
                          <option value="In Discussion">2. In Discussion</option>
                          <option value="KYC & MoU Pending">3. KYC &amp; MoU Pending</option>
                          <option value="Partnership Active">4. Partnership Active 🤝</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </div>
                    )}

                    {/* Contact Details */}
                    <div className="mt-3 space-y-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                      <div className="flex items-center justify-between text-slate-700 font-semibold">
                        <span>{partner.contactPerson}</span>
                        <span className="text-slate-400 text-[11px]">
                          {partner.designation || "Representative"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          {partner.phone}
                        </span>
                        <span className="flex items-center gap-1 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {partner.city}
                          {partner.state ? `, ${partner.state}` : ""}
                        </span>
                      </div>
                    </div>

                    {/* Commercial Terms */}
                    <div className="mt-3 text-xs text-slate-600">
                      <span className="font-bold text-slate-800">Terms: </span>
                      <span>{partner.commissionTerms || "Standard Terms"}</span>
                    </div>

                    {/* Safety KYC Documents Status Bar */}
                    <div className="mt-3 p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck
                          className={`w-4 h-4 ${
                            isKycComplete ? "text-emerald-600" : "text-amber-500"
                          }`}
                        />
                        <span className="font-bold text-slate-800 text-[11px]">
                          {isKycComplete ? "KYC Verified" : "KYC Pending"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {hasAadhaar ? (
                          <button
                            onClick={() =>
                              setViewingDoc({
                                title: "Aadhaar Card",
                                partnerName: partner.name,
                                url: partner.aadhaarDocumentUrl!,
                                fileName: partner.aadhaarDocumentName,
                                date: partner.aadhaarNumber,
                              })
                            }
                            className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 hover:bg-emerald-100"
                          >
                            Aadhaar ✓
                          </button>
                        ) : (
                          <span className="text-[10px] text-slate-400">Aadhaar ✕</span>
                        )}

                        {hasPan ? (
                          <button
                            onClick={() =>
                              setViewingDoc({
                                title: "PAN Card",
                                partnerName: partner.name,
                                url: partner.panDocumentUrl!,
                                fileName: partner.panDocumentName,
                                date: partner.panNumber,
                              })
                            }
                            className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200 hover:bg-indigo-100"
                          >
                            PAN ✓
                          </button>
                        ) : (
                          <span className="text-[10px] text-slate-400">PAN ✕</span>
                        )}
                      </div>
                    </div>

                    {/* Candidates count */}
                    <div className="mt-3 flex items-center justify-between p-2.5 bg-teal-50/60 rounded-xl border border-teal-100 text-xs">
                      <span className="text-teal-900 font-semibold">Candidates Referred:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-teal-800 text-sm">
                          {partner.totalCandidatesReferred || 0}
                        </span>
                        <button
                          onClick={() => handleQuickAddCandidate(partner)}
                          className="px-2 py-0.5 rounded bg-teal-600 text-white font-bold text-[10px] hover:bg-teal-700 cursor-pointer"
                        >
                          +1
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: MoU & Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
                    <div>
                      {isMouSigned ? (
                        <div className="flex items-center gap-1.5">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                            <FileCheck className="w-3 h-3 text-emerald-600" />
                            <span>Signed MoU</span>
                          </span>
                          {partner.mouDocumentUrl && (
                            <button
                              onClick={() =>
                                setViewingDoc({
                                  title: "Signed Partnership MoU",
                                  partnerName: partner.name,
                                  url: partner.mouDocumentUrl!,
                                  fileName: partner.mouDocumentName,
                                  date: partner.mouSignedDate,
                                })
                              }
                              className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer"
                            >
                              View
                            </button>
                          )}
                        </div>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-800 border border-amber-200">
                          <Clock className="w-3 h-3 text-amber-600" />
                          <span>MoU Pending</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 flex-wrap">
                      {canEdit && (
                        <button
                          onClick={() => openLoginModal(partner)}
                          className={`p-1.5 rounded-lg border transition-colors ${
                            partner.isLoginEnabled
                              ? "bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100"
                              : "bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200"
                          }`}
                          title={
                            partner.isLoginEnabled
                              ? "Portal Login Active — Manage"
                              : "Enable Partner Portal Login"
                          }
                        >
                          <Key className="w-4 h-4" />
                        </button>
                      )}
                      {cleanPhone && (
                        <a
                          href={`https://wa.me/${cleanPhone}?text=Hello%20${encodeURIComponent(
                            partner.contactPerson
                          )},%20regarding%20candidate%20sourcing%20partnership%20with%20WorkWise%20Visa...`}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
                          title="WhatsApp"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </a>
                      )}
                      {canEdit && (
                        <button
                          onClick={() => openEditModal(partner)}
                          className="p-1.5 rounded-lg text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200"
                          title="Edit Details, MoU & KYC"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                      )}
                      {canDelete && (
                        <button
                          onClick={() => setPartnerToDelete(partner)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-700 hover:bg-rose-50 border border-slate-200"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── ADD / EDIT PARTNER MODAL ─────────────────────── */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl w-full max-w-2xl my-auto max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              {/* Modal Header */}
              <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
                <div>
                  <h2 className="text-base sm:text-xl font-black text-slate-900">
                    {editingPartner ? "Edit Sourcing Partner & KYC" : "Add New Sourcing Partner"}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    Configure details, commercial terms, signed MoU &amp; Aadhaar/PAN safety verification
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white text-slate-400 hover:text-slate-700 flex items-center justify-center border border-slate-200 shadow-sm shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body Form */}
              <form onSubmit={handleSavePartner} className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto flex-1">
                {/* 1. Entity Type Toggle */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Partner Category / Entity Type *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          partnerType: "Individual",
                          designation: prev.designation || "Sourcing Partner",
                        }))
                      }
                      className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                        form.partnerType === "Individual"
                          ? "bg-blue-50/80 border-blue-500 ring-2 ring-blue-500/20 text-blue-900"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${
                          form.partnerType === "Individual"
                            ? "bg-blue-600 text-white"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-black">Individual Agent</div>
                        <div className="text-[11px] text-slate-500">
                          Local recruiter, broker or freelancer
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          partnerType: "Company",
                          designation: prev.designation || "Managing Director",
                        }))
                      }
                      className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                        form.partnerType === "Company"
                          ? "bg-purple-50/80 border-purple-500 ring-2 ring-purple-500/20 text-purple-900"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${
                          form.partnerType === "Company"
                            ? "bg-purple-600 text-white"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-black">Agency / Company</div>
                        <div className="text-[11px] text-slate-500">
                          Recruitment firm or manpower agency
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* 2. Basic Profile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {form.partnerType === "Company"
                        ? "Company / Agency Name *"
                        : "Partner / Individual Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={
                        form.partnerType === "Company"
                          ? "e.g. Purvanchal Overseas Associates"
                          : "e.g. Rajesh Kumar Sharma"
                      }
                      className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.contactPerson}
                      onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                      placeholder="e.g. Sunil Kumar Pandey"
                      className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Designation / Role
                    </label>
                    <input
                      type="text"
                      value={form.designation}
                      onChange={(e) => setForm({ ...form, designation: e.target.value })}
                      placeholder="e.g. Sourcing Partner, Proprietor"
                      className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Onboarding Phase / Lead Stage *
                    </label>
                    <select
                      value={form.onboardingStage || "New Inquiry"}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          onboardingStage: e.target.value,
                          status:
                            e.target.value === "Partnership Active" ? "Active" : form.status,
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none text-slate-800 font-bold"
                    >
                      <option value="New Inquiry">1. New Inquiry (Nayi Lead)</option>
                      <option value="In Discussion">2. In Discussion (Baat chal rahi hai)</option>
                      <option value="KYC & MoU Pending">3. KYC &amp; MoU Pending (Under Verification)</option>
                      <option value="Partnership Active">4. Partnership Active (Signed &amp; Live)</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Account Status
                    </label>
                    <select
                      value={form.status}
                      onChange={(e) => setForm({ ...form, status: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none text-slate-800"
                    >
                      <option value="Active">Active (Mobilizing Candidates)</option>
                      <option value="Pending Verification">Pending Verification</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Lead / Inquiry Source
                    </label>
                    <input
                      type="text"
                      value={form.source || ""}
                      onChange={(e) => setForm({ ...form, source: e.target.value })}
                      placeholder="e.g. Website B2B Partner Form, Direct WhatsApp, Referral"
                      className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Monthly Sourcing Capacity
                    </label>
                    <input
                      type="text"
                      value={form.sourcingCapacity || ""}
                      onChange={(e) => setForm({ ...form, sourcingCapacity: e.target.value })}
                      placeholder="e.g. 10-25 candidates / month"
                      className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none text-slate-800"
                    />
                  </div>
                </div>

                {/* 3. Contact & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.phone}
                      onChange={(e) => {
                        const val = e.target.value;
                        setForm((prev) => ({
                          ...prev,
                          phone: val,
                          whatsapp: prev.whatsapp ? prev.whatsapp : val,
                        }));
                      }}
                      placeholder="e.g. +91 94501 23456"
                      className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp Number
                    </label>
                    <input
                      type="text"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      placeholder="e.g. +919450123456"
                      className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. partner@gmail.com"
                      className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      list="city-suggestions"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="e.g. Siwan, Gopalganj, Gorakhpur"
                      className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none text-slate-800"
                    />
                    <datalist id="city-suggestions">
                      {COMMON_CITIES.map((c) => (
                        <option key={c} value={c} />
                      ))}
                    </datalist>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      value={form.state}
                      onChange={(e) => setForm({ ...form, state: e.target.value })}
                      placeholder="e.g. Bihar, Uttar Pradesh"
                      className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Address (Office / Location)
                    </label>
                    <input
                      type="text"
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      placeholder="e.g. Station Road, Near Babunia More"
                      className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none text-slate-800"
                    />
                  </div>
                </div>

                {/* 4. Commercial Terms & Candidates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Commission &amp; Commercial Terms
                    </label>
                    <input
                      type="text"
                      value={form.commissionTerms}
                      onChange={(e) => setForm({ ...form, commissionTerms: e.target.value })}
                      placeholder="e.g. ₹5,000 per Helper / ₹8,000 per Mason"
                      className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Total Candidates Referred So Far
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={form.totalCandidatesReferred}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          totalCandidatesReferred: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-800 font-bold"
                    />
                  </div>
                </div>

                {/* ── 5. SAFETY & KYC VERIFICATION (AADHAAR & PAN CARD) ───────── */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-50/50 to-orange-50/50 border border-amber-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-amber-700" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-black text-slate-900">
                          Safety &amp; KYC Verification (Aadhaar &amp; PAN Card)
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          Verify identity of partner / authorized signatory for safety &amp; compliance
                        </p>
                      </div>
                    </div>

                    <select
                      value={form.kycStatus}
                      onChange={(e) => setForm({ ...form, kycStatus: e.target.value })}
                      className="px-2.5 py-1 rounded-xl text-xs font-bold bg-white border border-amber-300 text-amber-900 focus:outline-none"
                    >
                      <option value="Verified">KYC Verified</option>
                      <option value="Pending">KYC Pending</option>
                      <option value="Incomplete">Incomplete</option>
                    </select>
                  </div>

                  {/* Hidden inputs for Aadhaar and PAN files */}
                  <input
                    ref={aadhaarFileInputRef}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.webp"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleUploadDocument(file, "aadhaar");
                    }}
                  />
                  <input
                    ref={panFileInputRef}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.webp"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleUploadDocument(file, "pan");
                    }}
                  />

                  {/* Two Columns: Aadhaar & PAN */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Aadhaar Box */}
                    <div className="bg-white p-3.5 rounded-xl border border-amber-200/90 shadow-sm space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                          <IdCard className="w-4 h-4 text-emerald-600" />
                          Aadhaar Card
                        </span>
                        {form.aadhaarDocumentUrl ? (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            Uploaded ✓
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-400">Not Uploaded</span>
                        )}
                      </div>

                      <input
                        type="text"
                        value={form.aadhaarNumber}
                        onChange={(e) => setForm({ ...form, aadhaarNumber: e.target.value })}
                        placeholder="12-digit Aadhaar Number (e.g. 5829 1049 8214)"
                        className="w-full px-3 py-1.5 rounded-lg text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:outline-none text-slate-800"
                      />

                      {form.aadhaarDocumentUrl ? (
                        <div className="flex items-center justify-between text-xs pt-1">
                          <span className="text-[11px] text-slate-600 truncate max-w-[140px]">
                            {form.aadhaarDocumentName || "Aadhaar_Document"}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() =>
                                setViewingDoc({
                                  title: "Aadhaar Card",
                                  partnerName: form.name,
                                  url: form.aadhaarDocumentUrl!,
                                  fileName: form.aadhaarDocumentName,
                                  date: form.aadhaarNumber,
                                })
                              }
                              className="text-[11px] font-bold text-indigo-600 hover:underline"
                            >
                              Preview
                            </button>
                            <button
                              type="button"
                              onClick={() => aadhaarFileInputRef.current?.click()}
                              className="text-[11px] font-bold text-slate-600 hover:underline"
                            >
                              Change
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                setForm((prev) => ({
                                  ...prev,
                                  aadhaarDocumentUrl: "",
                                  aadhaarDocumentName: "",
                                }))
                              }
                              className="text-rose-600 hover:text-rose-800"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => aadhaarFileInputRef.current?.click()}
                          disabled={uploadingTarget === "aadhaar"}
                          className="w-full py-2 px-3 rounded-lg border border-dashed border-amber-300 hover:border-amber-500 hover:bg-amber-50/50 text-[11px] font-bold text-amber-900 transition-colors flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>
                            {uploadingTarget === "aadhaar"
                              ? "Uploading..."
                              : "Upload Aadhaar Card (PDF/Image)"}
                          </span>
                        </button>
                      )}
                    </div>

                    {/* PAN Card Box */}
                    <div className="bg-white p-3.5 rounded-xl border border-amber-200/90 shadow-sm space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                          <CreditCard className="w-4 h-4 text-indigo-600" />
                          PAN Card
                        </span>
                        {form.panDocumentUrl ? (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            Uploaded ✓
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-400">Not Uploaded</span>
                        )}
                      </div>

                      <input
                        type="text"
                        value={form.panNumber}
                        onChange={(e) => setForm({ ...form, panNumber: e.target.value.toUpperCase() })}
                        placeholder="10-digit PAN (e.g. ABCDE1234F)"
                        className="w-full px-3 py-1.5 rounded-lg text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:outline-none text-slate-800 uppercase font-mono"
                      />

                      {form.panDocumentUrl ? (
                        <div className="flex items-center justify-between text-xs pt-1">
                          <span className="text-[11px] text-slate-600 truncate max-w-[140px]">
                            {form.panDocumentName || "PAN_Card"}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() =>
                                setViewingDoc({
                                  title: "PAN Card",
                                  partnerName: form.name,
                                  url: form.panDocumentUrl!,
                                  fileName: form.panDocumentName,
                                  date: form.panNumber,
                                })
                              }
                              className="text-[11px] font-bold text-indigo-600 hover:underline"
                            >
                              Preview
                            </button>
                            <button
                              type="button"
                              onClick={() => panFileInputRef.current?.click()}
                              className="text-[11px] font-bold text-slate-600 hover:underline"
                            >
                              Change
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                setForm((prev) => ({
                                  ...prev,
                                  panDocumentUrl: "",
                                  panDocumentName: "",
                                }))
                              }
                              className="text-rose-600 hover:text-rose-800"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => panFileInputRef.current?.click()}
                          disabled={uploadingTarget === "pan"}
                          className="w-full py-2 px-3 rounded-lg border border-dashed border-amber-300 hover:border-amber-500 hover:bg-amber-50/50 text-[11px] font-bold text-amber-900 transition-colors flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>
                            {uploadingTarget === "pan"
                              ? "Uploading..."
                              : "Upload PAN Card (PDF/Image)"}
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* ── 6. SIGNED MOU / AGREEMENT DOCUMENT UPLOAD ───────────────── */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border border-emerald-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-emerald-700" />
                      <h4 className="text-xs sm:text-sm font-black text-slate-900">
                        Signed MoU &amp; Partnership Agreement
                      </h4>
                    </div>

                    {/* MoU Status Selector */}
                    <select
                      value={form.mouStatus}
                      onChange={(e) => setForm({ ...form, mouStatus: e.target.value })}
                      className="px-2.5 py-1 rounded-xl text-xs font-bold bg-white border border-emerald-300 text-emerald-900 focus:outline-none"
                    >
                      <option value="Signed">MoU Signed</option>
                      <option value="Pending">MoU Pending</option>
                      <option value="Under Review">Under Review</option>
                      <option value="Expired">Expired</option>
                    </select>
                  </div>

                  <p className="text-[11px] text-slate-600 mb-3">
                    Upload the executed MoU or contract (PDF, DOCX, or scanned copy). Once uploaded, you
                    can view or download it anytime.
                  </p>

                  {/* Hidden file input */}
                  <input
                    ref={mouFileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleUploadDocument(file, "mou");
                    }}
                  />

                  {/* File Upload Box */}
                  {form.mouDocumentUrl ? (
                    <div className="bg-white p-3.5 rounded-xl border border-emerald-300 flex items-center justify-between gap-3 shadow-sm">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-900 truncate">
                            {form.mouDocumentName || "Signed_MoU_Document.pdf"}
                          </div>
                          <div className="text-[10px] text-emerald-700 font-semibold flex items-center gap-2 mt-0.5">
                            <span className="flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              MoU Attached
                            </span>
                            {form.mouDocumentSize ? (
                              <span>• {(form.mouDocumentSize / 1024).toFixed(1)} KB</span>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          type="button"
                          onClick={() =>
                            setViewingDoc({
                              title: "Signed Partnership MoU",
                              partnerName: form.name,
                              url: form.mouDocumentUrl!,
                              fileName: form.mouDocumentName,
                              date: form.mouSignedDate,
                            })
                          }
                          className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 inline-flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Preview</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => mouFileInputRef.current?.click()}
                          className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200"
                        >
                          Replace
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setForm((prev) => ({
                              ...prev,
                              mouDocumentUrl: "",
                              mouDocumentName: "",
                              mouDocumentSize: 0,
                              mouStatus: "Pending",
                            }))
                          }
                          className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50"
                          title="Remove MoU"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => mouFileInputRef.current?.click()}
                      className="border-2 border-dashed border-emerald-300 hover:border-emerald-500 bg-white hover:bg-emerald-50/50 rounded-2xl p-6 text-center transition-all cursor-pointer group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                        {uploadingTarget === "mou" ? (
                          <RefreshCw className="w-6 h-6 animate-spin" />
                        ) : (
                          <Upload className="w-6 h-6" />
                        )}
                      </div>
                      <div className="text-xs font-bold text-slate-900">
                        {uploadingTarget === "mou"
                          ? "Uploading MoU..."
                          : "Click to upload Signed MoU Document"}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        Supports PDF, DOCX, DOC, JPG, PNG (Max: 25MB)
                      </div>
                    </div>
                  )}

                  {/* MoU Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        MoU Signed Date
                      </label>
                      <input
                        type="date"
                        value={form.mouSignedDate}
                        onChange={(e) => setForm({ ...form, mouSignedDate: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-xl text-xs bg-white border border-emerald-200 focus:outline-none focus:border-emerald-500 text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        MoU Expiry / Validity Date
                      </label>
                      <input
                        type="date"
                        value={form.mouExpiryDate}
                        onChange={(e) => setForm({ ...form, mouExpiryDate: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-xl text-xs bg-white border border-emerald-200 focus:outline-none focus:border-emerald-500 text-slate-800"
                      />
                    </div>
                  </div>
                </div>

                {/* 7. Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Notes / Sourcing Trades Focus
                  </label>
                  <textarea
                    rows={2}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="e.g. Specializes in Welder, Driver, Mason candidate sourcing from Gopalganj and Siwan blocks."
                    className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none text-slate-800"
                  />
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20 disabled:opacity-50 cursor-pointer inline-flex items-center gap-2"
                  >
                    {saving && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                    <span>{editingPartner ? "Save Changes" : "Save Sourcing Partner"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ── UNIFIED DOCUMENT VIEWER MODAL (MOU / AADHAAR / PAN) ───────── */}
        {viewingDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl w-full max-w-4xl my-auto overflow-hidden flex flex-col max-h-[92vh]">
              {/* Header */}
              <div className="p-3.5 sm:p-5 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight truncate">
                      {viewingDoc.title}: {viewingDoc.partnerName}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 truncate">
                      {viewingDoc.fileName || "Verified Document"}{" "}
                      {viewingDoc.date ? `• Ref/Date: ${viewingDoc.date}` : ""}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <a
                    href={viewingDoc.url}
                    download={viewingDoc.fileName || "Document.pdf"}
                    className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 inline-flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                  <a
                    href={viewingDoc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 inline-flex items-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Tab</span>
                  </a>
                  <button
                    onClick={() => setViewingDoc(null)}
                    className="w-8 h-8 rounded-full bg-white text-slate-400 hover:text-slate-700 flex items-center justify-center border border-slate-200 shadow-sm ml-auto sm:ml-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Document Display */}
              <div className="flex-1 bg-slate-100 p-2 sm:p-4 overflow-y-auto min-h-[300px] flex items-center justify-center">
                {viewingDoc.url ? (
                  viewingDoc.url.toLowerCase().endsWith(".pdf") ? (
                    <iframe
                      src={viewingDoc.url}
                      className="w-full h-[500px] sm:h-[600px] rounded-xl sm:rounded-2xl border border-slate-300 bg-white shadow-inner"
                      title={viewingDoc.title}
                    />
                  ) : (
                    <div className="max-w-2xl bg-white p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm text-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={viewingDoc.url}
                        alt="Document Preview"
                        className="max-h-[450px] sm:max-h-[550px] mx-auto rounded-xl object-contain border border-slate-100"
                      />
                    </div>
                  )
                ) : (
                  <div className="text-center p-8 text-slate-400">
                    <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm font-bold">No digital document URL attached.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── DELETE CONFIRMATION MODAL ────────────────────── */}
        {partnerToDelete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl w-full max-w-md p-5 sm:p-6 max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-900 text-center">
                Delete Sourcing Partner?
              </h3>
              <p className="text-xs text-slate-500 text-center mt-1">
                Are you sure you want to delete{" "}
                <span className="font-bold text-slate-800">{partnerToDelete.name}</span>? This action
                cannot be undone.
              </p>

              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  onClick={() => setPartnerToDelete(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeletePartner}
                  disabled={deleting}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 cursor-pointer disabled:opacity-50"
                >
                  {deleting ? "Deleting..." : "Yes, Delete Partner"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── B2B PARTNER LOGIN ACCESS MODAL ───────────────── */}
        {loginModalPartner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl w-full max-w-lg p-6 max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200 space-y-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-sm">
                    <Key className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900">
                      B2B Partner Portal Login Access
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {loginModalPartner.name} (
                      <span className="font-mono font-bold text-emerald-700">
                        {loginModalPartner.partnerCode || "No Code"}
                      </span>
                      )
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setLoginModalPartner(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Login Status Switch */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    Partner Portal Access
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {loginEnabledInput
                      ? "Partner can log in at /admin"
                      : "Login is currently disabled for this partner"}
                  </span>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={loginEnabledInput}
                    onChange={(e) => setLoginEnabledInput(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>

              {/* Password Setting & Generation */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Set / Reset Password
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      const code = Math.floor(1000 + Math.random() * 9000);
                      setLoginPasswordInput(`WW@${code}`);
                    }}
                    className="text-[11px] font-bold text-emerald-600 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Auto Generate</span>
                  </button>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={loginPasswordInput}
                    onChange={(e) => setLoginPasswordInput(e.target.value)}
                    placeholder="Enter password (min 4 chars)"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-mono font-bold text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <p className="text-[11px] text-slate-500">
                  Login ID:{" "}
                  <span className="font-mono font-bold text-slate-800">
                    {loginModalPartner.email || loginModalPartner.partnerCode || loginModalPartner.phone}
                  </span>{" "}
                  or phone <span className="font-bold text-slate-800">{loginModalPartner.phone}</span>
                </p>
              </div>

              {/* Ready-made WhatsApp Invitation Message Preview */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-900 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Ready WhatsApp Invitation</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyWhatsAppCredentials}
                    className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedWhatsApp ? "Copied!" : "Copy Message"}</span>
                  </button>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-emerald-200/80 font-mono text-[11px] text-slate-700 max-h-32 overflow-y-auto whitespace-pre-wrap leading-relaxed">
{`🌟 WorkWise Visa — Partner Portal Access
Hello ${loginModalPartner.contactPerson || loginModalPartner.name},
Your Sourcing Partner Portal is ready!

Portal: https://workwisevisa.com/admin
Login: ${loginModalPartner.email || loginModalPartner.phone}
Password: ${loginPasswordInput}

Submit & track candidates live!`}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setLoginModalPartner(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleSaveLoginAccess}
                  disabled={savingLogin}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
                >
                  {savingLogin ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Saving Access...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Save Login Credentials</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
