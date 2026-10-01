"use client";

/* ================================================================
   app/track/page.tsx — WorkWise Visa Live Candidate Application Tracker
   Public-facing portal for candidates to check their live 7-stage
   work visa processing milestones, work permit approvals, VFS
   biometrics appointments, visa grant, and flight departure status.
   ================================================================ */

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  Award,
  Building2,
  Plane,
  FileSearch,
  UserCheck,
  Briefcase,
  Globe,
  Phone,
  MessageCircle,
  FileText,
  Calendar,
  ShieldCheck,
  Compass,
  ArrowRight,
  Printer,
  Share2,
  Check,
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Info,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProcessingStage } from "@/lib/types/application";

interface StageMeta {
  step: number;
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  color: string;
}

interface StageHistoryItem {
  stageNumber: number;
  stageName: string;
  status: "in_progress" | "completed" | "on_hold" | "rejected";
  date: string;
  remarks: string;
}

interface TrackedApplication {
  id: string;
  applicationNo: string;
  candidateName: string;
  passportNumber: string;
  fullPassportNumber?: string;
  phone: string;
  targetCountry: string;
  jobTrade: string;
  currentStage: number;
  stageStatus: "in_progress" | "completed" | "on_hold" | "rejected";
  currentStageMeta: StageMeta;
  workPermitNumber?: string;
  vfsAppointmentDate?: string;
  visaNumber?: string;
  flightDate?: string;
  flightPnr?: string;
  assignedCounselor?: {
    name: string;
    role: string;
  };
  stageHistory: StageHistoryItem[];
  createdAt: string;
  updatedAt: string;
  allStages: StageMeta[];
}

function TrackerContent() {
  const searchParams = useSearchParams();
  const initialQuery =
    searchParams.get("app") ||
    searchParams.get("q") ||
    searchParams.get("passport") ||
    searchParams.get("phone") ||
    "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [loading, setLoading] = useState(false);
  const [application, setApplication] = useState<TrackedApplication | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  // Perform search query
  const handleSearch = async (queryToSearch: string) => {
    const q = queryToSearch.trim();
    if (!q || q.length < 3) {
      setErrorMessage("Please enter at least 3 characters (e.g. Application No, Passport No, or Phone Number).");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setApplication(null);

    try {
      const res = await fetch(`/api/applications/track?query=${encodeURIComponent(q)}`, {
        cache: "no-store",
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.message || "No application record found for the provided details. Please verify and try again.");
      } else {
        setApplication(data.data);
      }
    } catch (err) {
      console.error("Track search error:", err);
      setErrorMessage("Failed to connect to the tracking server. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialQuery) {
      handleSearch(initialQuery);
    }
  }, [initialQuery]);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  const getStatusBadge = (status: TrackedApplication["stageStatus"]) => {
    switch (status) {
      case "completed":
        return {
          bg: "bg-emerald-50 text-emerald-700 border-emerald-200",
          dot: "bg-emerald-500",
          label: "Stage Completed",
        };
      case "in_progress":
        return {
          bg: "bg-blue-50 text-blue-700 border-blue-200",
          dot: "bg-blue-500 animate-ping",
          label: "In Active Processing",
        };
      case "on_hold":
        return {
          bg: "bg-amber-50 text-amber-700 border-amber-200",
          dot: "bg-amber-500",
          label: "Action Required / On Hold",
        };
      case "rejected":
        return {
          bg: "bg-rose-50 text-rose-700 border-rose-200",
          dot: "bg-rose-500",
          label: "Under Appeal / Review",
        };
      default:
        return {
          bg: "bg-slate-50 text-slate-700 border-slate-200",
          dot: "bg-slate-400",
          label: status,
        };
    }
  };

  const copyShareLink = () => {
    if (typeof window !== "undefined" && application) {
      const link = `${window.location.origin}/track?app=${encodeURIComponent(application.applicationNo)}`;
      navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      <Navbar />

      {/* ── TOP HERO HEADER WITH SEARCH BAR ── */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-white overflow-hidden print:hidden">
        {/* Glow ambient effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[250px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-emerald-300 uppercase tracking-widest mb-6 backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>WorkWise Visa Live Milestone Tracker</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white mb-4">
            Track Your Work Visa Application
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Enter your <strong>Application Number (e.g., WWV-2026-...)</strong>, <strong>Passport Number</strong>, or <strong>Registered Phone Number</strong> to check your real-time processing status and visa milestones.
          </p>

          {/* Search Box */}
          <form
            onSubmit={onFormSubmit}
            className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl p-2 sm:p-2.5 rounded-2xl border border-white/20 shadow-2xl shadow-black/40 flex flex-col sm:flex-row gap-2"
          >
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. WWV-2026-1001-492, Passport Number, or Phone..."
                className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl text-slate-900 text-sm sm:text-base font-semibold placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shrink-0 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <span>Track Status</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Helper tags */}
          <div className="mt-4 flex items-center justify-center gap-2 flex-wrap text-xs text-slate-400">
            <span>Try searching by:</span>
            <span className="bg-white/10 text-slate-200 px-2 py-0.5 rounded font-mono">WWV-2026-XXXX</span>
            <span>·</span>
            <span className="bg-white/10 text-slate-200 px-2 py-0.5 rounded font-mono">Passport No</span>
            <span>·</span>
            <span className="bg-white/10 text-slate-200 px-2 py-0.5 rounded font-mono">WhatsApp Mobile No</span>
          </div>
        </div>
      </section>

      {/* ── ERROR FEEDBACK ── */}
      {errorMessage && (
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-8">
          <div className="bg-rose-50 border border-rose-200 text-rose-800 p-5 rounded-2xl flex items-start gap-3 shadow-sm">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-rose-900">Application Lookup Notice</h3>
              <p className="text-xs text-rose-700 mt-1 leading-relaxed">{errorMessage}</p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20need%20help%20tracking%20my%20application."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-rose-800 underline hover:text-rose-900 inline-flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat with Support Counselor</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── APPLICATION TRACKING RESULT VIEW ── */}
      {application && (
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* Action Ribbon: Share & Print */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-2 border-b border-slate-200 print:hidden">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Application File:</span>
              <span className="font-mono font-black text-sm text-indigo-900 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
                {application.applicationNo}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyShareLink}
                className="px-3.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold shadow-sm transition inline-flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? "Link Copied!" : "Share Link"}</span>
              </button>
              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold shadow-sm transition inline-flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Status Slip</span>
              </button>
            </div>
          </div>

          {/* 1. Candidate Overview Card */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-500/10 via-emerald-500/10 to-transparent rounded-bl-full pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-mono">
                    {application.applicationNo}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border text-xs font-bold ${
                      getStatusBadge(application.stageStatus).bg
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${getStatusBadge(application.stageStatus).dot}`}
                    />
                    {getStatusBadge(application.stageStatus).label}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mt-2 flex items-center gap-2">
                  {application.candidateName}
                  {application.passportNumber && (
                    <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                      🛂 {application.passportNumber}
                    </span>
                  )}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Enrolled Candidate · File registered on {new Date(application.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                </p>
              </div>

              {/* Destination Tag */}
              <div className="sm:text-right">
                <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-4 py-2 rounded-2xl shadow-sm text-sm font-bold">
                  <Globe className="w-4 h-4 text-emerald-300" />
                  <span>{application.targetCountry}</span>
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-1.5 flex items-center sm:justify-end gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                  <span>{application.jobTrade}</span>
                </div>
              </div>
            </div>

            {/* 4 Quick Milestone Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {/* Box 1: Current Stage */}
              <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Processing Stage
                </span>
                <div className="text-base font-black text-indigo-700 mt-1">
                  Stage {application.currentStage} of 7
                </div>
                <div className="text-xs font-medium text-slate-600 mt-0.5 truncate">
                  {application.currentStageMeta.shortName}
                </div>
              </div>

              {/* Box 2: Work Permit */}
              <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Work Permit / Approval
                </span>
                <div className="text-base font-black text-slate-800 mt-1 font-mono">
                  {application.workPermitNumber || (application.currentStage >= 4 ? "Under Grant" : "Stage 4 Step")}
                </div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">
                  {application.workPermitNumber ? "Official Permit No." : "Ministry Approval"}
                </div>
              </div>

              {/* Box 3: VFS / Embassy */}
              <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  VFS / Embassy Slot
                </span>
                <div className="text-base font-black text-slate-800 mt-1">
                  {application.vfsAppointmentDate || (application.currentStage >= 5 ? "Slot Scheduled" : "Stage 5 Step")}
                </div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">Biometrics Filing</div>
              </div>

              {/* Box 4: Visa Grant / Flight */}
              <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Visa Grant / Flight
                </span>
                <div className="text-base font-black text-emerald-700 mt-1">
                  {application.visaNumber ? `Granted (${application.visaNumber})` : application.flightDate ? `Flown: ${application.flightDate}` : "Processing"}
                </div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">
                  {application.flightPnr ? `PNR: ${application.flightPnr}` : "Work Visa Issuance"}
                </div>
              </div>
            </div>
          </div>

          {/* 2. Visual 7-Stage Milestone Roadmap */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 sm:p-8">
            <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  7-Stage Work Visa Processing Roadmap
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Real-time status breakdown for international employment verification and deployment.
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-400 uppercase">Progress</span>
                <div className="text-xl font-black text-emerald-600 font-mono">
                  {Math.round((application.currentStage / 7) * 100)}%
                </div>
              </div>
            </div>

            {/* Stage Progress Roadmap Strip */}
            <div className="space-y-3">
              {application.allStages.map((stg) => {
                const isPassed = stg.step < application.currentStage;
                const isCurrent = stg.step === application.currentStage;
                const isFuture = stg.step > application.currentStage;

                return (
                  <div
                    key={stg.step}
                    className={`p-4 rounded-2xl border transition-all ${
                      isCurrent
                        ? "bg-indigo-50/90 border-indigo-300 ring-2 ring-indigo-500/20 shadow-md"
                        : isPassed
                        ? "bg-emerald-50/40 border-emerald-200"
                        : "bg-slate-50/50 border-slate-200/70 opacity-60"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3.5">
                        {/* Step Number Badge */}
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 shadow-sm ${
                            isPassed
                              ? "bg-emerald-600 text-white"
                              : isCurrent
                              ? "bg-indigo-600 text-white ring-4 ring-indigo-200 animate-pulse"
                              : "bg-slate-200 text-slate-500"
                          }`}
                        >
                          {isPassed ? <Check className="w-5 h-5" /> : stg.step}
                        </div>

                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                              Stage {stg.step}: {stg.name}
                            </h4>
                            {isCurrent && (
                              <span className="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
                                Active Live Stage
                              </span>
                            )}
                            {isPassed && (
                              <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                                Verified &amp; Completed
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal max-w-2xl">
                            {stg.description}
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        {isPassed && (
                          <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg">
                            Done
                          </span>
                        )}
                        {isCurrent && (
                          <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-lg">
                            In Progress
                          </span>
                        )}
                        {isFuture && (
                          <span className="text-xs font-medium text-slate-400">Upcoming</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Action History Timeline & Counselor Support */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Timeline Logs (2 Cols) */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 sm:p-8">
              <h3 className="text-base font-extrabold text-slate-900 mb-1">
                Official Milestone &amp; Status Logs
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Chronological timeline of milestone progress recorded by the visa processing cell.
              </p>

              {application.stageHistory && application.stageHistory.length > 0 ? (
                <div className="relative border-l-2 border-indigo-200 ml-3.5 space-y-6">
                  {application.stageHistory.map((hist, idx) => (
                    <div key={idx} className="relative pl-6">
                      {/* Node Bullet */}
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white ring-2 ring-indigo-200" />
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
                        <div className="flex items-center justify-between font-extrabold text-slate-800">
                          <span className="text-sm">
                            Stage {hist.stageNumber}: {hist.stageName}
                          </span>
                          <span className="text-[11px] text-slate-400 font-normal">
                            {new Date(hist.date).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        {hist.remarks && (
                          <div className="text-xs text-slate-700 mt-2 bg-white p-3 rounded-xl border border-slate-100 leading-relaxed">
                            {hist.remarks}
                          </div>
                        )}
                        <div className="mt-2 text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                          Status: <strong className="text-slate-700">{hist.status.toUpperCase()}</strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-xs text-slate-400">
                  Initial enrollment record created. Live timeline updates will appear here as your file progresses.
                </div>
              )}
            </div>

            {/* Support Counselor Card (1 Col) */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-6 shadow-lg relative overflow-hidden">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-[11px] font-bold uppercase tracking-wider mb-4 border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified File</span>
                </div>

                <h3 className="text-lg font-black text-white">Dedicated Visa Counselor</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Have questions about your work permit, documents, or embassy schedule? Contact your counselor directly.
                </p>

                <div className="mt-4 p-3.5 bg-white/10 rounded-2xl border border-white/10 text-xs space-y-1">
                  <div className="font-bold text-white text-sm">
                    {application.assignedCounselor?.name || "Senior Immigration Officer"}
                  </div>
                  <div className="text-slate-300 text-[11px]">
                    {application.assignedCounselor?.role || "Europe Visa Specialist"}
                  </div>
                </div>

                <div className="mt-5 space-y-2.5">
                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20checking%20my%20application%20status."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <a
                    href="tel:+918130161603"
                    className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-white/10 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Helpline: +91 81301 61603</span>
                  </a>
                </div>
              </div>

              {/* Important Candidate Notice Box */}
              <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200 text-amber-900 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-amber-950">
                  <Info className="w-4 h-4 text-amber-700" />
                  <span>Important Candidate Guidelines</span>
                </div>
                <p className="leading-relaxed text-amber-800">
                  Please keep your passport, PCC (Police Clearance Certificate), and original trade certificates ready for the Stage 5 VFS Biometrics appointment.
                </p>
                <p className="leading-relaxed text-amber-800">
                  Always verify official letters through our WorkWise Visa portal before making any travel arrangements.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 7-STAGE PROCESS EXPLAINER SECTION (WHEN NO ACTIVE SEARCH OR BELOW SEARCH) ── */}
      {!application && (
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              Transparent &amp; Verified Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight mt-3">
              How the 7-Stage Work Visa Processing Operates
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
              Every candidate enrolled with WorkWise Visa receives end-to-end transparent updates across every critical government milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: 1,
                title: "Registration & Agreement",
                desc: "Formal enrollment, legal service agreement execution, and document intake.",
                icon: UserCheck,
              },
              {
                step: 2,
                title: "Doc Audit & PCC Attestation",
                desc: "Passport verification, educational apostille, and Police Clearance Certificate (PCC) clearance.",
                icon: FileSearch,
              },
              {
                step: 3,
                title: "Employer Selection & Contract",
                desc: "International employer shortlisting, interviews, and official work contract signing.",
                icon: Briefcase,
              },
              {
                step: 4,
                title: "Work Permit Approval",
                desc: "Official government work permit / labor approval issued by destination ministry.",
                icon: Award,
              },
              {
                step: 5,
                title: "Embassy / VFS Filing",
                desc: "VFS biometrics scheduling and formal visa dossier submission to the embassy.",
                icon: Building2,
              },
              {
                step: 6,
                title: "Visa Stamping / Grant",
                desc: "Work visa officially stamped in passport or digital visa grant letter issued.",
                icon: CheckCircle2,
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.step}
                  className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 font-bold text-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Stage 0{card.step}
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mt-1">{card.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>

          {/* 7th final deployment banner */}
          <div className="mt-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 text-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-white shrink-0">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-200">
                  Stage 07 — Final Step
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white mt-0.5">
                  Flight Ticket, Pre-Departure Briefing &amp; Deployment
                </h3>
                <p className="text-xs text-emerald-100 mt-1">
                  Air ticket booking, airport assistance, accommodation orientation, and destination onboarding.
                </p>
              </div>
            </div>

            <a
              href="mailto:workwisevisa@gmail.com"
              className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold text-xs shrink-0 shadow-md transition"
            >
              Contact Support
            </a>
          </div>
        </section>
      )}

      {/* ── FAQ ACCORDION FOR CANDIDATES ── */}
      <section className="bg-slate-100/70 border-t border-slate-200 py-16 print:hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
              Frequently Asked Questions (Tracking &amp; Processing)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Quick answers regarding your application numbers, timelines, and embassy slots.
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="font-extrabold text-slate-900 mb-1">
                Where do I find my Application Number?
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Your Application Number starts with <strong>WWV-2026-XXXX</strong> and is provided in your initial registration receipt, WhatsApp confirmation message, and candidate invoice agreement.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="font-extrabold text-slate-900 mb-1">
                Can I track using only my passport number?
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Yes! If your passport number was provided during registration, you can directly enter your passport number (e.g. M1234567) in the search box above to fetch your live file.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="font-extrabold text-slate-900 mb-1">
                How frequently is candidate progress updated?
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Our immigration processing officers update the portal in real-time immediately whenever a government approval, PCC submission, work permit issue, VFS biometric appointment, or flight confirmation is logged.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function TrackApplicationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
          <div className="w-8 h-8 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin mb-3" />
          <p className="text-sm font-bold text-slate-300">Loading Application Tracker...</p>
        </div>
      }
    >
      <TrackerContent />
    </Suspense>
  );
}
