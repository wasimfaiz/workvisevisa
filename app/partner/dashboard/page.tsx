"use client";

/* ================================================================
   app/partner/dashboard/page.tsx — WorkWise Visa B2B Partner Portal
   Dedicated dashboard for sourcing partners, recruitment agencies,
   and field mobilization associates.
   ================================================================ */

import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  Users,
  UserCheck,
  Building2,
  Briefcase,
  TrendingUp,
  FileCheck,
  ShieldCheck,
  Search,
  Plus,
  RefreshCw,
  Phone,
  MessageSquare,
  LogOut,
  MapPin,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  ChevronRight,
  Plane,
  CreditCard,
  Download,
  Upload,
  Copy,
  ExternalLink,
  Award,
  Sparkles,
  ChevronDown,
  Layers,
  Filter,
} from "lucide-react";

// ================================================================
// Types & Interfaces
// ================================================================

interface PartnerUser {
  id: string;
  name: string;
  partnerCode: string;
  partnerType: string;
  contactPerson: string;
  designation?: string;
  email?: string;
  phone: string;
  whatsapp?: string;
  city: string;
  state?: string;
  country: string;
  address?: string;
  status: string;
  commissionTerms?: string;
  totalCandidatesReferred?: number;
  totalSelected?: number;
  totalDeployed?: number;
  mouStatus?: string;
  mouDocumentUrl?: string;
  mouDocumentName?: string;
  mouSignedDate?: string;
  aadhaarNumber?: string;
  aadhaarDocumentUrl?: string;
  panNumber?: string;
  panDocumentUrl?: string;
  kycStatus?: string;
  lastLoginAt?: string;
}

interface Candidate {
  id: string;
  candidateRefNo?: string;
  candidateName: string;
  phone: string;
  whatsapp?: string;
  passportNumber?: string;
  trade: string;
  targetCompany?: string;
  targetCountry: string;
  experienceYears?: number;
  city?: string;
  state?: string;
  agentId: string;
  agentName: string;
  agentCode: string;
  stage: string;
  stageNotes?: string;
  tradeTestScore?: string;
  interviewDate?: string;
  medicalStatus?: string;
  visaNumber?: string;
  flightDate?: string;
  flightPnr?: string;
  commissionAmount?: number;
  commissionStatus?: "pending" | "approved" | "paid";
  commissionPaidDate?: string;
  createdAt: string;
}

const STAGES = [
  { key: "agent_submitted", label: "Agent Submitted", step: 1, color: "bg-slate-100 text-slate-700" },
  { key: "document_verified", label: "Doc Verified", step: 2, color: "bg-blue-50 text-blue-700" },
  { key: "trade_test", label: "Trade Test", step: 3, color: "bg-indigo-50 text-indigo-700" },
  { key: "client_interview", label: "Client Interview", step: 4, color: "bg-purple-50 text-purple-700" },
  { key: "selected", label: "Selected / Offer", step: 5, color: "bg-teal-50 text-teal-700" },
  { key: "medical_fit", label: "GAMCA Medical Fit", step: 6, color: "bg-cyan-50 text-cyan-700" },
  { key: "visa_processing", label: "Visa Processing", step: 7, color: "bg-amber-50 text-amber-700" },
  { key: "visa_issued", label: "Visa Stamped", step: 8, color: "bg-emerald-50 text-emerald-700" },
  { key: "deployed", label: "Flight Deployed", step: 9, color: "bg-emerald-600 text-white" },
];

const TRADES = [
  "Construction Helper",
  "Mason (Block / Plaster / Tile)",
  "Scaffolder (Tubular / Cuplock)",
  "Shuttering Carpenter",
  "Steel Fixer",
  "Welder (3G/4G/6G/MIG/TIG)",
  "Electrician (Building / Industrial)",
  "Plumber & Pipe Fitter",
  "Heavy Trailer / Light Driver",
  "HVAC & AC Technician",
  "Civil Foreman / Chargehand",
  "Painter (Spray / Roller)",
  "Security Guard",
  "Warehouse Loader / Packer",
  "Other Skilled Trade",
];

const ACTIVE_DEMANDS = [
  {
    id: "dem-afgc-dubai",
    company: "AFGC Holding Dubai",
    country: "UAE",
    badge: "Urgent Requirement • 460 Openings",
    salary: "1,200 - 1,800 AED + Free Food & Accommodation",
    roles: ["Mason", "Scaffolder", "Carpenter", "Steel Fixer", "Construction Helper"],
    location: "Dubai, UAE",
    visas: "Employment Visa (2 Years Renewable)",
    medical: "Standard GCC Medical",
  },
  {
    id: "dem-alfuttaim-logistics",
    company: "Al-Futtaim Logistics & Transport",
    country: "UAE",
    badge: "High Intake • 120 Openings",
    salary: "1,800 - 2,400 AED + Overtime & Accomm",
    roles: ["Heavy Trailer / Light Driver", "Warehouse Loader / Packer"],
    location: "Dubai & Abu Dhabi",
    visas: "Direct Work Visa",
    medical: "GAMCA Fit",
  },
  {
    id: "dem-alyamama-saudi",
    company: "Al-Yamama Engineering & Contracting",
    country: "Saudi Arabia",
    badge: "Immediate Work Visa • 250 Openings",
    salary: "1,400 - 2,200 SAR + Free Food",
    roles: ["Electrician", "Plumber & Pipe Fitter", "Welder (3G/4G/6G/MIG/TIG)", "Mason"],
    location: "Riyadh & Dammam, KSA",
    visas: "Immediate Iqama Work Visa",
    medical: "GAMCA Approved",
  },
  {
    id: "dem-adriatic-croatia",
    company: "Adriatic Infrastructure D.O.O.",
    country: "Croatia (Europe)",
    badge: "Schengen Work Permit • 80 Openings",
    salary: "850 - 1,200 EUR Net + Free Accommodation",
    roles: ["Steel Fixer", "Shuttering Carpenter", "Welder (3G/4G/6G/MIG/TIG)", "Construction Helper"],
    location: "Zagreb & Split, Croatia",
    visas: "1-Year Renewable European Work Permit",
    medical: "Standard Medical Certificate",
  },
  {
    id: "dem-qatar-rail",
    company: "Doha Metro & Facility Works",
    country: "Qatar",
    badge: "Continuous Mobilization • 150 Openings",
    salary: "1,300 - 2,000 QAR + Free Food & Accomm",
    roles: ["HVAC & AC Technician", "Electrician (Building / Industrial)", "Construction Helper"],
    location: "Doha, Qatar",
    visas: "Qatar Employment Visa",
    medical: "QVC Fit",
  },
];

export default function PartnerDashboardPage() {
  const router = useRouter();

  // Auth State
  const [partner, setPartner] = useState<PartnerUser | null>(null);
  const [loadingPartner, setLoadingPartner] = useState(true);

  // Active Tab
  const [activeTab, setActiveTab] = useState<
    "overview" | "candidates" | "submit" | "commissions" | "profile"
  >("overview");

  // Candidates Data
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loadingCandidates, setLoadingCandidates] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [stageFilter, setStageFilter] = useState("all");

  // Submit Candidate Form State
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formCandidateName, setFormCandidateName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formWhatsapp, setFormWhatsapp] = useState("");
  const [formSamePhone, setFormSamePhone] = useState(true);
  const [formPassport, setFormPassport] = useState("");
  const [formTrade, setFormTrade] = useState(TRADES[0]);
  const [formTargetCountry, setFormTargetCountry] = useState("UAE");
  const [formTargetCompany, setFormTargetCompany] = useState("AFGC Holding Dubai");
  const [formCity, setFormCity] = useState("");
  const [formState, setFormState] = useState("");
  const [formExperience, setFormExperience] = useState("3");
  const [formPassportCopyUrl, setFormPassportCopyUrl] = useState("");
  const [formCandidatePhotoUrl, setFormCandidatePhotoUrl] = useState("");
  const [formCvUrl, setFormCvUrl] = useState("");
  const [formNotes, setFormNotes] = useState("");
  const [uploadingDoc, setUploadingDoc] = useState<string | null>(null);

  // Copy Feedback
  const [copiedLink, setCopiedLink] = useState(false);

  // Check Auth & Fetch Session
  useEffect(() => {
    async function fetchSession() {
      try {
        const res = await fetch("/api/partner/auth/me", { cache: "no-store" });
        if (!res.ok) {
          router.replace("/partner/login");
          return;
        }
        const data = await res.json();
        if (data.success && data.partner) {
          setPartner(data.partner);
        } else {
          router.replace("/partner/login");
        }
      } catch {
        router.replace("/partner/login");
      } finally {
        setLoadingPartner(false);
      }
    }
    fetchSession();
  }, [router]);

  // Fetch Candidates for this partner
  const fetchCandidates = async (partnerId: string) => {
    setLoadingCandidates(true);
    try {
      const res = await fetch(`/api/b2b-candidates?agentId=${partnerId}`, {
        cache: "no-store",
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setCandidates(data.data);
      }
    } catch (e) {
      console.error("Error fetching partner candidates:", e);
    } finally {
      setLoadingCandidates(false);
    }
  };

  useEffect(() => {
    if (partner?.id) {
      fetchCandidates(partner.id);
    }
  }, [partner?.id]);

  // Logout
  const handleLogout = async () => {
    try {
      await fetch("/api/partner/auth/logout", { method: "POST" });
    } catch {}
    router.replace("/partner/login");
  };

  // Upload File Helper
  const handleFileUpload = async (file: File, type: "passport" | "photo" | "cv") => {
    if (!file) return;
    if (file.size > 20 * 1024 * 1024) {
      alert("File is too large. Max allowed size is 20MB.");
      return;
    }
    setUploadingDoc(type);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success && data.url) {
        if (type === "passport") setFormPassportCopyUrl(data.url);
        if (type === "photo") setFormCandidatePhotoUrl(data.url);
        if (type === "cv") setFormCvUrl(data.url);
      } else {
        alert(data.message || "Upload failed. Please try again.");
      }
    } catch {
      alert("Network error while uploading file.");
    } finally {
      setUploadingDoc(null);
    }
  };

  // Candidate Submission
  const handleSubmitCandidate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!partner) return;
    setSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);

    const payload = {
      candidateName: formCandidateName.trim(),
      phone: formPhone.trim(),
      whatsapp: formSamePhone ? formPhone.trim() : formWhatsapp.trim() || formPhone.trim(),
      passportNumber: formPassport.trim().toUpperCase(),
      trade: formTrade,
      targetCountry: formTargetCountry,
      targetCompany: formTargetCompany,
      city: formCity.trim() || partner.city,
      state: formState.trim() || partner.state,
      experienceYears: Number(formExperience) || 0,
      agentId: partner.id,
      agentName: partner.name,
      agentCode: partner.partnerCode,
      agentPhone: partner.phone,
      notes: [
        formNotes.trim(),
        formPassportCopyUrl ? `Passport: ${formPassportCopyUrl}` : "",
        formCandidatePhotoUrl ? `Photo: ${formCandidatePhotoUrl}` : "",
        formCvUrl ? `CV: ${formCvUrl}` : "",
      ]
        .filter(Boolean)
        .join(" | "),
    };

    try {
      const res = await fetch("/api/b2b-candidates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitSuccess(
          `Candidate ${payload.candidateName} registered successfully! (Ref: ${
            data.data?.candidateRefNo || "Pending"
          })`
        );
        // Reset form
        setFormCandidateName("");
        setFormPhone("");
        setFormWhatsapp("");
        setFormPassport("");
        setFormNotes("");
        setFormPassportCopyUrl("");
        setFormCandidatePhotoUrl("");
        setFormCvUrl("");
        // Refresh candidates list
        fetchCandidates(partner.id);
        // Switch to candidates tab after 2 seconds
        setTimeout(() => {
          setActiveTab("candidates");
        }, 1800);
      } else {
        setSubmitError(data.message || "Failed to submit candidate. Please check all details.");
      }
    } catch {
      setSubmitError("Network error while submitting candidate.");
    } finally {
      setSubmitting(false);
    }
  };

  // Pre-fill demand when partner clicks "Submit Candidate for this Demand"
  const handleSelectDemand = (demand: (typeof ACTIVE_DEMANDS)[0]) => {
    setFormTargetCompany(demand.company);
    setFormTargetCountry(demand.country);
    if (demand.roles.length > 0) {
      setFormTrade(demand.roles[0]);
    }
    setActiveTab("submit");
  };

  // Copy Partner Referral Link
  const handleCopyLink = () => {
    if (!partner) return;
    const link = `${window.location.origin}/b2b-partner/submit?agent=${partner.partnerCode}`;
    navigator.clipboard.writeText(link);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Filtered Candidates
  const filteredCandidates = useMemo(() => {
    return candidates.filter((c) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        c.candidateName.toLowerCase().includes(q) ||
        c.phone.includes(q) ||
        (c.passportNumber && c.passportNumber.toLowerCase().includes(q)) ||
        (c.trade && c.trade.toLowerCase().includes(q)) ||
        (c.candidateRefNo && c.candidateRefNo.toLowerCase().includes(q));

      const matchesStage = stageFilter === "all" || c.stage === stageFilter;
      return matchesSearch && matchesStage;
    });
  }, [candidates, searchQuery, stageFilter]);

  // Calculations for stats
  const stats = useMemo(() => {
    const total = candidates.length;
    let inProgress = 0;
    let selected = 0;
    let deployed = 0;
    let totalComm = 0;
    let paidComm = 0;
    let pendingComm = 0;

    for (const c of candidates) {
      if (c.stage === "deployed") {
        deployed++;
      } else if (
        c.stage === "selected" ||
        c.stage === "medical_fit" ||
        c.stage === "visa_processing" ||
        c.stage === "visa_issued"
      ) {
        selected++;
      } else {
        inProgress++;
      }

      const amount = c.commissionAmount || 5000;
      totalComm += amount;
      if (c.commissionStatus === "paid") {
        paidComm += amount;
      } else {
        pendingComm += amount;
      }
    }

    return { total, inProgress, selected, deployed, totalComm, paidComm, pendingComm };
  }, [candidates]);

  if (loadingPartner) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-400 text-sm font-medium">Loading partner portal...</p>
      </div>
    );
  }

  if (!partner) return null;

  const isMouSigned = partner.mouStatus === "Signed" || Boolean(partner.mouDocumentUrl);
  const isKycVerified =
    partner.kycStatus === "Verified" ||
    (Boolean(partner.aadhaarDocumentUrl) && Boolean(partner.panDocumentUrl));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased">
      {/* ── TOP NAV BAR ────────────────────────────────────── */}
      <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Portal Badge */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Handshake className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-black text-lg tracking-tight text-white">WorkWise</span>
                <span className="font-extrabold text-[10px] text-emerald-400 block -mt-1 tracking-wider uppercase">
                  Partner Portal
                </span>
              </div>
            </Link>

            <span className="hidden sm:inline-block h-5 w-px bg-slate-700" />

            <div className="hidden sm:flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold font-mono">
                {partner.partnerCode}
              </span>
              <span className="text-xs text-slate-300 font-semibold">{partner.name}</span>
            </div>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Sourcing Referral Link */}
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition-all cursor-pointer"
              title="Copy your unique candidate intake portal link"
            >
              <Copy className="w-3.5 h-3.5" />
              <span className="hidden md:inline">
                {copiedLink ? "Link Copied!" : "My Intake Link"}
              </span>
            </button>

            {/* Ops WhatsApp Desk */}
            <a
              href={`https://wa.me/919999999999?text=Hello%20WorkWise%20Visa%20Team,%20this%20is%20${encodeURIComponent(
                partner.name
              )}%20(${partner.partnerCode}).%20Need%20assistance%20with%20candidate%20processing.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/10 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Ops Manager</span>
            </a>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-semibold border border-rose-500/20 transition-all cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* ── PARTNER PROFILE BANNER ───────────────────────────── */}
        <div className="bg-slate-950/70 border-t border-slate-800/80 px-4 sm:px-6 lg:px-8 py-3">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-slate-300">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                {partner.contactPerson || partner.name}
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {partner.city}
                {partner.state ? `, ${partner.state}` : ""}
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                {partner.phone}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* KYC Status Badge */}
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ${
                  isKycVerified
                    ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                    : "bg-amber-500/10 text-amber-300 border-amber-500/30"
                }`}
              >
                <ShieldCheck className="w-3 h-3" />
                <span>{isKycVerified ? "KYC Verified" : "KYC Pending"}</span>
              </span>

              {/* MoU Status Badge */}
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ${
                  isMouSigned
                    ? "bg-teal-500/10 text-teal-300 border-teal-500/30"
                    : "bg-amber-500/10 text-amber-300 border-amber-500/30"
                }`}
              >
                <FileCheck className="w-3 h-3" />
                <span>{isMouSigned ? "MoU Signed" : "MoU Pending"}</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* ── KPI METRICS CARDS ──────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {/* Card 1: Total Candidates */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Total Sourced
              </p>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-0.5">
                {stats.total}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1">Candidates Submitted</p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>

          {/* Card 2: In Screening Pipeline */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                In Pipeline
              </p>
              <h3 className="text-2xl sm:text-3xl font-black text-amber-600 mt-0.5">
                {stats.inProgress}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1">Trade Test & Interviews</p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </div>

          {/* Card 3: Selected & Deployed */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Visa / Deployed
              </p>
              <h3 className="text-2xl sm:text-3xl font-black text-emerald-600 mt-0.5">
                {stats.selected + stats.deployed}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1">
                {stats.deployed} Deployed • {stats.selected} In Visa
              </p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Plane className="w-5 h-5" />
            </div>
          </div>

          {/* Card 4: Commission Total */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Commission
              </p>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                ₹{stats.totalComm.toLocaleString("en-IN")}
              </h3>
              <p className="text-[11px] text-emerald-600 font-bold mt-1">
                ₹{stats.paidComm.toLocaleString("en-IN")} Paid • ₹
                {stats.pendingComm.toLocaleString("en-IN")} Pending
              </p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* ── TABS NAVIGATION ────────────────────────────────── */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-1.5 shadow-sm flex flex-wrap items-center gap-1">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "overview"
                ? "bg-slate-900 text-white shadow"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>Live Employer Demands</span>
            <span className="ml-1 px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-black">
              {ACTIVE_DEMANDS.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("candidates")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "candidates"
                ? "bg-slate-900 text-white shadow"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Users className="w-4 h-4 text-teal-400" />
            <span>Candidate Pipeline</span>
            <span className="ml-1 px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700 text-[10px] font-black">
              {candidates.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("submit")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "submit"
                ? "bg-emerald-600 text-white shadow"
                : "text-emerald-700 bg-emerald-50 hover:bg-emerald-100"
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>Submit Candidate</span>
          </button>

          <button
            onClick={() => setActiveTab("commissions")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "commissions"
                ? "bg-slate-900 text-white shadow"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <CreditCard className="w-4 h-4 text-amber-400" />
            <span>Commission Ledger</span>
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ml-auto ${
              activeTab === "profile"
                ? "bg-slate-900 text-white shadow"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>MoU & KYC Agreement</span>
          </button>
        </div>

        {/* ── TAB 1: OVERVIEW & ACTIVE DEMANDS ───────────────── */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Urgent Notice Banner */}
            <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-2xl p-5 sm:p-6 text-white shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold tracking-wide uppercase border border-emerald-500/30">
                  ⚡ High Priority Mobilization 2026
                </span>
                <h3 className="text-xl sm:text-2xl font-black">
                  Ready Visas for UAE, Saudi Arabia & Croatia
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
                  Mobilize candidates directly for ongoing civil, transport, and MEP contracts. Fast trade test booking, GAMCA medical clearance, and guaranteed prompt commission settlements.
                </p>
              </div>

              <button
                onClick={() => setActiveTab("submit")}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-500/30 transition-all cursor-pointer flex items-center gap-2 flex-shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Submit Candidate Now</span>
              </button>
            </div>

            {/* Demands Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ACTIVE_DEMANDS.map((demand) => (
                <div
                  key={demand.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-extrabold text-[11px]">
                        {demand.badge}
                      </span>
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {demand.country}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-black text-slate-900 text-base leading-tight">
                        {demand.company}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">{demand.location}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
                      <div>
                        <span className="text-slate-400 font-medium">Salary: </span>
                        <span className="font-black text-emerald-700">{demand.salary}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-medium">Visa Type: </span>
                        <span className="font-semibold text-slate-700">{demand.visas}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-medium">Medical: </span>
                        <span className="font-semibold text-slate-700">{demand.medical}</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Open Trades / Roles
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {demand.roles.map((role) => (
                          <span
                            key={role}
                            className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleSelectDemand(demand)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Submit Candidate for this Demand</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 2: CANDIDATE PIPELINE TRACKER ──────────────── */}
        {activeTab === "candidates" && (
          <div className="space-y-4">
            {/* Search and Filters Header */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by candidate name, passport, trade, mobile, or ref no..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-500 font-medium"
                />
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={stageFilter}
                  onChange={(e) => setStageFilter(e.target.value)}
                  className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none"
                >
                  <option value="all">All Stages ({candidates.length})</option>
                  {STAGES.map((s) => (
                    <option key={s.key} value={s.key}>
                      {s.label}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => fetchCandidates(partner.id)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  title="Refresh Pipeline"
                >
                  <RefreshCw
                    className={`w-4 h-4 ${loadingCandidates ? "animate-spin text-emerald-600" : ""}`}
                  />
                </button>

                <button
                  onClick={() => setActiveTab("submit")}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>New Candidate</span>
                </button>
              </div>
            </div>

            {/* Candidate List */}
            {loadingCandidates ? (
              <div className="bg-white rounded-2xl border border-slate-200/90 p-12 text-center">
                <div className="w-8 h-8 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                <p className="text-slate-500 text-xs">Loading candidate pipeline...</p>
              </div>
            ) : filteredCandidates.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200/90 p-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-800 text-base">No candidates found</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  {candidates.length === 0
                    ? "You haven't submitted any candidates yet. Click below to register your first candidate."
                    : "No candidates match your current search and filter criteria."}
                </p>
                <button
                  onClick={() => setActiveTab("submit")}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs inline-flex items-center gap-1.5 mt-2"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Submit Candidate</span>
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredCandidates.map((c) => {
                  const stageObj = STAGES.find((s) => s.key === c.stage) || STAGES[0];
                  const commissionAmount = c.commissionAmount || 5000;
                  const isPaid = c.commissionStatus === "paid";

                  return (
                    <div
                      key={c.id}
                      className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5 hover:border-slate-300 transition-all space-y-3"
                    >
                      {/* Top Row: Ref, Name, Trade, Stage Badge */}
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] font-black px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                              {c.candidateRefNo || "WW-B2B"}
                            </span>
                            <h4 className="font-black text-slate-900 text-base">
                              {c.candidateName}
                            </h4>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                            <span className="font-bold text-slate-700">{c.trade}</span>
                            <span>•</span>
                            <span>{c.targetCountry}</span>
                            {c.targetCompany && (
                              <>
                                <span>•</span>
                                <span className="text-slate-600 font-medium">{c.targetCompany}</span>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-black border ${stageObj.color}`}
                          >
                            Step {stageObj.step}/9: {stageObj.label}
                          </span>
                        </div>
                      </div>

                      {/* Middle Row: Progress Stepper */}
                      <div className="pt-2">
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
                          <div
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-500"
                            style={{ width: `${(stageObj.step / 9) * 100}%` }}
                          />
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mt-1">
                          <span>1. Submitted</span>
                          <span>3. Trade Test</span>
                          <span>5. Selected</span>
                          <span>7. Visa</span>
                          <span>9. Deployed</span>
                        </div>
                      </div>

                      {/* Bottom Row: Details and Commission Info */}
                      <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <div className="flex flex-wrap items-center gap-3 text-slate-600">
                          <span className="flex items-center gap-1">
                            <Phone className="w-3.5 h-3.5 text-slate-400" />
                            {c.phone}
                          </span>
                          {c.passportNumber && (
                            <span className="font-mono bg-slate-50 px-2 py-0.5 rounded border border-slate-200 text-slate-700 font-bold text-[11px]">
                              Passport: {c.passportNumber}
                            </span>
                          )}
                          {c.stageNotes && (
                            <span className="text-slate-500 italic">“{c.stageNotes}”</span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-slate-400">Commission:</span>
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-black border ${
                              isPaid
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                : "bg-amber-50 text-amber-700 border-amber-200"
                            }`}
                          >
                            ₹{commissionAmount.toLocaleString("en-IN")} •{" "}
                            {isPaid ? "Settled ✓" : "Pending"}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ── TAB 3: SUBMIT NEW CANDIDATE ────────────────────── */}
        {activeTab === "submit" && (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-2">
                <Plus className="w-3.5 h-3.5" />
                <span>Candidate Dossier Submission</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Register New Sourced Candidate
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                This candidate will be registered under your agency account (
                <span className="font-mono font-bold text-slate-800">{partner.partnerCode}</span> -{" "}
                {partner.name}). Our operations team will initiate document screening & trade test.
              </p>
            </div>

            {submitSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-800 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600 mt-0.5" />
                <div>
                  <p className="font-bold">{submitSuccess}</p>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    Redirecting to pipeline tracker...
                  </p>
                </div>
              </div>
            )}

            {submitError && (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-600 mt-0.5" />
                <div>
                  <p className="font-bold">{submitError}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmitCandidate} className="space-y-6">
              {/* Sourcing Partner Lock Info */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-500 uppercase tracking-wider">
                    Sourcing Partner:
                  </span>
                  <span className="font-black text-slate-900">{partner.name}</span>
                  <span className="font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px]">
                    {partner.partnerCode}
                  </span>
                </div>
                <div className="text-slate-500">
                  Commission: <span className="font-bold text-slate-800">{partner.commissionTerms || "₹5,000 / candidate"}</span>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  1. Candidate Personal & Contact Information
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Candidate Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formCandidateName}
                      onChange={(e) => setFormCandidateName(e.target.value)}
                      placeholder="As per Passport (e.g. Mohammad Irfan)"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        WhatsApp Number
                      </label>
                      <label className="flex items-center gap-1.5 text-xs text-slate-500 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formSamePhone}
                          onChange={(e) => setFormSamePhone(e.target.checked)}
                          className="rounded text-emerald-600 focus:ring-0"
                        />
                        <span>Same as mobile</span>
                      </label>
                    </div>
                    <input
                      type="tel"
                      disabled={formSamePhone}
                      value={formSamePhone ? formPhone : formWhatsapp}
                      onChange={(e) => setFormWhatsapp(e.target.value)}
                      placeholder="WhatsApp number for updates"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 font-medium disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Candidate Home City / District
                    </label>
                    <input
                      type="text"
                      value={formCity}
                      onChange={(e) => setFormCity(e.target.value)}
                      placeholder={partner.city || "Siwan, Gopalganj, Gorakhpur..."}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Trade & Target Employer */}
              <div className="space-y-4 pt-3 border-t border-slate-100">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  2. Trade, Country & Target Employer
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Trade / Job Skill *
                    </label>
                    <select
                      value={formTrade}
                      onChange={(e) => setFormTrade(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-emerald-500"
                    >
                      {TRADES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Target Country *
                    </label>
                    <select
                      value={formTargetCountry}
                      onChange={(e) => setFormTargetCountry(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-emerald-500"
                    >
                      <option value="UAE">UAE (Dubai / Abu Dhabi)</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Oman">Oman</option>
                      <option value="Croatia">Croatia (Europe)</option>
                      <option value="Poland">Poland (Europe)</option>
                      <option value="Other">Other Global Demand</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Target Company / Demand
                    </label>
                    <input
                      type="text"
                      value={formTargetCompany}
                      onChange={(e) => setFormTargetCompany(e.target.value)}
                      placeholder="e.g. AFGC Dubai, Al-Futtaim..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Passport Number
                    </label>
                    <input
                      type="text"
                      value={formPassport}
                      onChange={(e) => setFormPassport(e.target.value)}
                      placeholder="e.g. Z1234567"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono uppercase focus:outline-none focus:border-emerald-500 font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Years of Experience
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="30"
                      value={formExperience}
                      onChange={(e) => setFormExperience(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Document Uploads */}
              <div className="space-y-4 pt-3 border-t border-slate-100">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  3. Upload Documents (Passport Scan, Photo & CV)
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Passport Copy */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
                    <span className="text-xs font-bold text-slate-700 block">
                      Passport Scan Copy
                    </span>
                    {formPassportCopyUrl ? (
                      <span className="text-[11px] font-bold text-emerald-600 block">
                        Uploaded ✓
                      </span>
                    ) : (
                      <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer">
                        <Upload className="w-3.5 h-3.5 text-slate-500" />
                        <span>
                          {uploadingDoc === "passport" ? "Uploading..." : "Select File"}
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              handleFileUpload(e.target.files[0], "passport");
                            }
                          }}
                        />
                      </label>
                    )}
                  </div>

                  {/* Photo */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
                    <span className="text-xs font-bold text-slate-700 block">
                      White Background Photo
                    </span>
                    {formCandidatePhotoUrl ? (
                      <span className="text-[11px] font-bold text-emerald-600 block">
                        Uploaded ✓
                      </span>
                    ) : (
                      <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer">
                        <Upload className="w-3.5 h-3.5 text-slate-500" />
                        <span>
                          {uploadingDoc === "photo" ? "Uploading..." : "Select Photo"}
                        </span>
                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              handleFileUpload(e.target.files[0], "photo");
                            }
                          }}
                        />
                      </label>
                    )}
                  </div>

                  {/* CV / BioData */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
                    <span className="text-xs font-bold text-slate-700 block">
                      CV / Biodata / Trade Test
                    </span>
                    {formCvUrl ? (
                      <span className="text-[11px] font-bold text-emerald-600 block">
                        Uploaded ✓
                      </span>
                    ) : (
                      <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer">
                        <Upload className="w-3.5 h-3.5 text-slate-500" />
                        <span>{uploadingDoc === "cv" ? "Uploading..." : "Select CV"}</span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.jpg,.png"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              handleFileUpload(e.target.files[0], "cv");
                            }
                          }}
                        />
                      </label>
                    )}
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Special Remarks / Notes for Processing Desk
                </label>
                <textarea
                  rows={2}
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  placeholder="e.g. Candidate is GCC return, has valid Gulf trade experience, ready for immediate flight..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-500 font-medium"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("candidates")}
                  className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Dossier...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Submit Candidate to Operations</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ── TAB 4: COMMISSION & PAYOUTS LEDGER ─────────────── */}
        {activeTab === "commissions" && (
          <div className="space-y-6">
            {/* Commission Summary Hero */}
            <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Total Referral Value
                </span>
                <h3 className="text-3xl font-black text-white">
                  ₹{stats.totalComm.toLocaleString("en-IN")}
                </h3>
                <p className="text-xs text-slate-400">
                  Across {candidates.length} candidate dossiers submitted
                </p>
              </div>

              <div className="space-y-1 border-t md:border-t-0 md:border-l border-white/10 md:pl-6">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Settled / Paid Payouts
                </span>
                <h3 className="text-3xl font-black text-emerald-400">
                  ₹{stats.paidComm.toLocaleString("en-IN")}
                </h3>
                <p className="text-xs text-slate-400">
                  Transferred directly via NEFT / RTGS / UPI
                </p>
              </div>

              <div className="space-y-1 border-t md:border-t-0 md:border-l border-white/10 md:pl-6">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Pending Settlements
                </span>
                <h3 className="text-3xl font-black text-amber-400">
                  ₹{stats.pendingComm.toLocaleString("en-IN")}
                </h3>
                <p className="text-xs text-slate-400">
                  Settled upon candidate flight & deployment abroad
                </p>
              </div>
            </div>

            {/* Candidate Breakdown Table */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-black text-slate-900 text-base">
                    Candidate Referral Commission Ledger
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Commission terms: {partner.commissionTerms || "₹5,000 per selected candidate"}
                  </p>
                </div>

                <a
                  href={`https://wa.me/919999999999?text=Hello%20WorkWise%20Accounts,%20this%20is%20${encodeURIComponent(
                    partner.name
                  )}%20(${partner.partnerCode}).%20Requesting%20statement%20for%20settled%20commissions.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Request Statement</span>
                </a>
              </div>

              {candidates.length === 0 ? (
                <div className="p-12 text-center text-slate-400 text-xs">
                  No candidates submitted yet. Submit candidates to generate referral earnings.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-500 uppercase font-black tracking-wider text-[10px] border-b border-slate-100">
                      <tr>
                        <th className="py-3 px-4">Ref No</th>
                        <th className="py-3 px-4">Candidate</th>
                        <th className="py-3 px-4">Trade & Country</th>
                        <th className="py-3 px-4">Processing Stage</th>
                        <th className="py-3 px-4 text-right">Commission Amount</th>
                        <th className="py-3 px-4 text-right">Settlement Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {candidates.map((c) => {
                        const stageObj = STAGES.find((s) => s.key === c.stage) || STAGES[0];
                        const amount = c.commissionAmount || 5000;
                        const isPaid = c.commissionStatus === "paid";

                        return (
                          <tr key={c.id} className="hover:bg-slate-50/60">
                            <td className="py-3 px-4 font-mono font-bold text-slate-600">
                              {c.candidateRefNo || "WW-B2B"}
                            </td>
                            <td className="py-3 px-4 font-bold text-slate-900">
                              {c.candidateName}
                            </td>
                            <td className="py-3 px-4 text-slate-600">
                              {c.trade} • {c.targetCountry}
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-bold ${stageObj.color}`}
                              >
                                {stageObj.label}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right font-black text-slate-900">
                              ₹{amount.toLocaleString("en-IN")}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <span
                                className={`px-2.5 py-0.5 rounded-full text-[10px] font-black border ${
                                  isPaid
                                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                    : "bg-amber-50 text-amber-700 border-amber-200"
                                }`}
                              >
                                {isPaid ? "Paid ✓" : "Pending"}
                              </span>
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

        {/* ── TAB 5: PARTNER PROFILE, MOU & KYC ─────────────── */}
        {activeTab === "profile" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Partner Certificate Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-black">
                    Authorized Partner
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 tracking-widest uppercase">
                    Certificate of Partnership
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">{partner.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Partner Code: <span className="font-mono text-white font-bold">{partner.partnerCode}</span>
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Partner Type:</span>
                    <span className="font-bold text-white">{partner.partnerType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Contact Person:</span>
                    <span className="font-bold text-white">{partner.contactPerson}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Operational Hub:</span>
                    <span className="font-bold text-white">
                      {partner.city}
                      {partner.state ? `, ${partner.state}` : ""}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Registration Date:</span>
                    <span className="font-bold text-white">
                      {partner.mouSignedDate || "Active Partner"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span>WorkWise Visa Services Pvt. Ltd.</span>
                <span className="font-mono text-emerald-400 font-bold">Verified Channel</span>
              </div>
            </div>

            {/* Right: MoU & KYC Status Details */}
            <div className="lg:col-span-7 space-y-4">
              {/* Signed MoU Box */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-base">
                        Partnership Agreement / MoU
                      </h4>
                      <p className="text-xs text-slate-500">
                        Formal candidate mobilization agreement with WorkWise Visa
                      </p>
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-black border ${
                      isMouSigned
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-amber-50 text-amber-700 border-amber-200"
                    }`}
                  >
                    {isMouSigned ? "Signed & Active ✓" : "MoU Pending"}
                  </span>
                </div>

                {partner.mouDocumentUrl ? (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs">
                    <div>
                      <p className="font-bold text-slate-900">
                        {partner.mouDocumentName || "Signed_MoU_Document.pdf"}
                      </p>
                      <p className="text-slate-400 text-[11px] mt-0.5">
                        Signed Date: {partner.mouSignedDate || "Verified"}
                      </p>
                    </div>

                    <a
                      href={partner.mouDocumentUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors inline-flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download MoU</span>
                    </a>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs">
                    <p className="font-bold">Signed MoU document is pending upload.</p>
                    <p className="text-amber-700 mt-1">
                      Our partner operations manager will execute your digital or physical MoU shortly.
                    </p>
                  </div>
                )}
              </div>

              {/* KYC Verification Box */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-base">
                        KYC & Identity Verification
                      </h4>
                      <p className="text-xs text-slate-500">
                        Indian compliance identification (Aadhaar & PAN)
                      </p>
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-black border ${
                      isKycVerified
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-amber-50 text-amber-700 border-amber-200"
                    }`}
                  >
                    {isKycVerified ? "KYC Complete ✓" : "Pending Verification"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-slate-400 font-bold text-[10px] uppercase">
                      Aadhaar Card
                    </span>
                    <p className="font-black text-slate-900 font-mono">
                      {partner.aadhaarNumber ? `•••• •••• ${partner.aadhaarNumber.slice(-4)}` : "Uploaded"}
                    </p>
                    {partner.aadhaarDocumentUrl ? (
                      <span className="text-emerald-600 font-bold text-[11px] block">
                        Verified On File ✓
                      </span>
                    ) : (
                      <span className="text-slate-400 text-[11px] block">Pending Upload</span>
                    )}
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-slate-400 font-bold text-[10px] uppercase">
                      PAN Card
                    </span>
                    <p className="font-black text-slate-900 font-mono">
                      {partner.panNumber || "On File"}
                    </p>
                    {partner.panDocumentUrl ? (
                      <span className="text-emerald-600 font-bold text-[11px] block">
                        Verified On File ✓
                      </span>
                    ) : (
                      <span className="text-slate-400 text-[11px] block">Pending Upload</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} WorkWise Visa Services. Sourcing Partner Channel.</p>
          <div className="flex items-center gap-4">
            <span className="font-bold text-slate-700">Partner Code: {partner.partnerCode}</span>
            <span>•</span>
            <button
              onClick={handleLogout}
              className="text-rose-600 hover:underline font-semibold cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
