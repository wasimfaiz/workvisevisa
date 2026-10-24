"use client";

/* ================================================================
   app/b2b-partner/page.tsx — Official B2B Sourcing Partner Program
   High-converting landing page for:
   1. Overseas Recruitment Agencies & Manpower Consultancies
   2. Local Sourcing Agents & Field Mobilizers (Bihar, UP, WB, etc.)
   3. Technical Skill Institutes & Vocational Centers
   
   Allows inbound prospective partners to submit partnership inquiries
   which directly feed into the Admin B2B Pipeline (/admin/partners).
   ================================================================ */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  Building2,
  User,
  Users,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Phone,
  MessageSquare,
  FileCheck,
  Sparkles,
  Lock,
  Globe2,
  Briefcase,
  Clock,
  Send,
  AlertCircle,
  ChevronRight,
  Award,
} from "lucide-react";

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

const TRADES_LIST = [
  "Construction Helpers & Labour",
  "Masons (Tile / Block / Plaster)",
  "Welders (3G / 4G / 6G / MIG / TIG)",
  "Electricians & Plumbers",
  "Steel Fixers & Scaffolders",
  "Heavy & Light Drivers",
  "HVAC & Maintenance Techs",
  "Hospitality & Food Service",
  "Factory & Warehouse Workers",
];

export default function B2BPartnerLandingPage() {
  // Form State
  const [partnerType, setPartnerType] = useState<"Company" | "Individual">("Company");
  const [name, setName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [designation, setDesignation] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [sourcingCapacity, setSourcingCapacity] = useState("10-25 candidates / month");
  const [selectedTrades, setSelectedTrades] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ id: string; partnerCode: string } | null>(null);

  const toggleTrade = (trade: string) => {
    setSelectedTrades((prev) =>
      prev.includes(trade) ? prev.filter((t) => t !== trade) : [...prev, trade]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim() || !contactPerson.trim() || !phone.trim() || !city.trim()) {
      setErrorMsg("Please fill in Agency/Partner Name, Contact Person, Phone, and City.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/partners/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          partnerType,
          contactPerson: contactPerson.trim(),
          designation: designation.trim() || (partnerType === "Company" ? "Managing Director" : "Sourcing Partner"),
          phone: phone.trim(),
          whatsapp: whatsapp.trim() || phone.trim(),
          email: email.trim(),
          city: city.trim(),
          state: state.trim(),
          country: "India",
          sourcingCapacity,
          trades: selectedTrades.length > 0 ? selectedTrades.join(", ") : "All Technical & General Trades",
          notes: notes.trim(),
          source: "Website B2B Partner Form",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccessData(data.data || { id: "1", partnerCode: "WW-LEAD-NEW" });
      } else {
        setErrorMsg(data.message || "Something went wrong while submitting. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please try again or message us directly on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* ── TOP NAV BAR ─────────────────────────────────── */}
      <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/workwise_logo.webp"
              alt="WorkWise Visa Logo"
              width={140}
              height={40}
              className="h-9 sm:h-11 w-auto object-contain"
              priority
            />
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
              B2B Partner Network
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/partner/login"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"
            >
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span>Partner Login</span>
            </Link>
            <a
              href="#apply-partner-form"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-md shadow-emerald-600/20 transition-all cursor-pointer active:scale-95"
            >
              <span>Join as Partner</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white pt-12 sm:pt-20 pb-16 sm:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Value Prop */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 backdrop-blur-sm">
                <Handshake className="w-4 h-4 text-emerald-400" />
                <span>WorkWise Visa B2B Partner Network 2026</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Scale Your Overseas Recruitment Business with{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Direct Employer Demands
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                WorkWise Visa partners with overseas recruitment consultancies, local sub-agents,
                and field recruiters across Bihar, UP, West Bengal, and Pan-India. Get access to
                verified GCC &amp; European work visas, clear commission agreements, and real-time candidate tracking.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">450+</div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-semibold mt-0.5">
                    Live Gulf &amp; Europe Vacancies
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl font-black text-cyan-400">₹5K - ₹15K</div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-semibold mt-0.5">
                    Commission per Candidate
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm col-span-2 sm:col-span-1">
                  <div className="text-xl sm:text-2xl font-black text-teal-400">100% MoU</div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-semibold mt-0.5">
                    Legal Protection &amp; Safety
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="#apply-partner-form"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all shadow-lg shadow-emerald-500/25 text-center cursor-pointer active:scale-95"
                >
                  Submit Partnership Inquiry ↓
                </a>
                <a
                  href="https://wa.me/918130161603?text=Hello%20WorkWise%20Visa%20Team,%20I%20am%20interested%20in%20becoming%20a%20B2B%20Sourcing%20Partner..."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Chat with Partner Desk</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Feature Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Why Top Agencies Choose WorkWise
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Direct Employer Ties
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Direct Employer Contracts (AFGC, Adriatic, etc.)</h4>
                      <p className="text-slate-400 text-xs mt-0.5">
                        No 4th or 5th sub-broker chain. Direct tie-ups with leading Gulf contractors &amp; European employers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Dedicated Sub-Agent Portal &amp; Live Tracking</h4>
                      <p className="text-slate-400 text-xs mt-0.5">
                        Unique Partner Code, instant candidate document upload, and real-time visa status updates.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Signed MoU &amp; Safe Payment Guarantee</h4>
                      <p className="text-slate-400 text-xs mt-0.5">
                        Written mutual agreement with clear commission slabs, payment terms, and candidate safety clauses.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs text-emerald-300">
                  <span className="font-semibold">Already an authorized partner?</span>
                  <Link href="/partner/login" className="font-bold underline hover:text-white flex items-center gap-1">
                    <span>Login to Portal</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4-PHASE PARTNERSHIP ONBOARDING ROADMAP ───────── */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
              Transparent Onboarding Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              4 Phases to Activate Your Partnership
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              From initial introduction to sending candidates abroad, our streamlined process ensures
              total clarity, legal protection, and maximum speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Phase 1 */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 font-black text-sm flex items-center justify-center">
                01
              </div>
              <h3 className="text-base font-black text-slate-900">1. Submit Inquiry</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fill the partner application form below with your agency details, sourcing cities, and monthly mobilization capacity.
              </p>
              <div className="text-[11px] font-bold text-blue-700">
                Phase: <span className="underline">New Inquiry</span>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 font-black text-sm flex items-center justify-center">
                02
              </div>
              <h3 className="text-base font-black text-slate-900">2. Commercial Discussion</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our B2B partnership desk connects via call or in-office meeting at Noida HQ or Patna Branch to finalize trade commissions and demand quotas.
              </p>
              <div className="text-[11px] font-bold text-amber-700">
                Phase: <span className="underline">In Discussion</span>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 font-black text-sm flex items-center justify-center">
                03
              </div>
              <h3 className="text-base font-black text-slate-900">3. KYC &amp; MoU Signing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mutual MoU execution with safety compliance. Upload authorized signatory Aadhaar and PAN documents for safety verification.
              </p>
              <div className="text-[11px] font-bold text-purple-700">
                Phase: <span className="underline">KYC &amp; MoU Pending</span>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-emerald-300 bg-gradient-to-b from-emerald-50/50 to-white hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-sm">
                04
              </div>
              <h3 className="text-base font-black text-slate-900">4. Portal Access &amp; Mobilize</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Get your official Partner Code (e.g. WWP-1042) and login credentials. Start submitting candidates and tracking commissions live.
              </p>
              <div className="text-[11px] font-bold text-emerald-700">
                Phase: <span className="underline">Partnership Active 🤝</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO CAN PARTNER SECTION ─────────────────────── */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Who Can Partner with WorkWise Visa?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              We collaborate with both registered entities and verified individual field mobilizers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-900">Manpower Agencies &amp; Consultancies</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Agencies with active candidate databases looking for direct, verified overseas employer requirements in the UAE, Saudi Arabia, Qatar, and European nations (Croatia, Bulgaria, Poland, Russia).
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-900">Local Sourcing Sub-Agents</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Field mobilizers in key candidate sourcing hubs across Bihar (Siwan, Gopalganj, Chhapra, Patna) and Eastern UP (Gorakhpur, Deoria, Azamgarh) who can mobilize skilled and unskilled workers.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-900">ITIs &amp; Trade Training Centers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Welding, electrical, plumbing, HVAC, and driving training centers wanting reliable overseas placement partnerships for their certified passing-out batches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP INQUIRY FORM SECTION ─────────────── */}
      <section id="apply-partner-form" className="py-14 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
              Apply for Partnership
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Submit Your Partnership Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Our B2B Partner Onboarding Desk will review your application and contact you within 24 hours.
            </p>
          </div>

          {successData ? (
            /* Success Confirmation State */
            <div className="bg-emerald-50/70 border-2 border-emerald-300 rounded-3xl p-8 sm:p-10 text-center space-y-4 animate-in fade-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Partnership Inquiry Submitted Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to WorkWise Visa. Your inquiry has been registered in our B2B onboarding pipeline under reference code:
              </p>
              <div className="inline-block px-4 py-2 rounded-xl bg-white border border-emerald-300 font-mono font-black text-emerald-800 text-base shadow-sm">
                {successData.partnerCode}
              </div>
              <p className="text-xs text-slate-500">
                Phase 1 is complete! Our team is reviewing your profile and will connect with you on WhatsApp/Phone.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/918130161603?text=Hello%20WorkWise%20Visa%20Partnership%20Desk,%20I%20have%20submitted%20my%20B2B%20Partnership%20Inquiry%20with%20reference%20${encodeURIComponent(
                    successData.partnerCode
                  )}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 inline-flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect with Partner Desk on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSuccessData(null);
                    setName("");
                    setContactPerson("");
                    setPhone("");
                    setCity("");
                  }}
                  className="px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-600 bg-white border border-slate-200 hover:bg-slate-50"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Inquiry Form */
            <form
              onSubmit={handleSubmit}
              className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl space-y-6"
            >
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* 1. Entity Type Toggle */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Partner Category *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPartnerType("Company")}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                      partnerType === "Company"
                        ? "bg-purple-50/80 border-purple-500 ring-2 ring-purple-500/20 text-purple-900"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${
                        partnerType === "Company" ? "bg-purple-600 text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black">Agency / Consultancy</div>
                      <div className="text-[11px] text-slate-500">Registered business / firm</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPartnerType("Individual")}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                      partnerType === "Individual"
                        ? "bg-blue-50/80 border-blue-500 ring-2 ring-blue-500/20 text-blue-900"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${
                        partnerType === "Individual" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black">Individual Mobilizer</div>
                      <div className="text-[11px] text-slate-500">Local sub-agent / recruiter</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* 2. Agency Name & Contact Person */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {partnerType === "Company" ? "Agency / Company Name *" : "Full Name / Agency Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={
                      partnerType === "Company"
                        ? "e.g. Purvanchal Overseas Placement"
                        : "e.g. Ramesh Kumar Sharma"
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="e.g. Sunil Kumar Pandey"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-800"
                  />
                </div>
              </div>

              {/* 3. Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      const val = e.target.value;
                      setPhone(val);
                      if (!whatsapp) setWhatsapp(val);
                    }}
                    placeholder="e.g. +91 94501 23456"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="e.g. +91 94501 23456"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-800"
                  />
                </div>
              </div>

              {/* 4. Location & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City / District *
                  </label>
                  <input
                    type="text"
                    required
                    list="city-options"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Siwan, Gorakhpur"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-800"
                  />
                  <datalist id="city-options">
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
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="e.g. Bihar / UP"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. partner@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-800"
                  />
                </div>
              </div>

              {/* 5. Sourcing Capacity */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Estimated Monthly Candidate Mobilization Capacity
                </label>
                <select
                  value={sourcingCapacity}
                  onChange={(e) => setSourcingCapacity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-800 font-semibold"
                >
                  <option value="5-10 candidates / month">5 - 10 candidates / month</option>
                  <option value="10-25 candidates / month">10 - 25 candidates / month (Recommended)</option>
                  <option value="25-50 candidates / month">25 - 50 candidates / month</option>
                  <option value="50+ candidates / month">50+ candidates / month (Bulk Sourcing)</option>
                </select>
              </div>

              {/* 6. Primary Trades */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Primary Trades &amp; Specialization (Select All That Apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {TRADES_LIST.map((trade) => {
                    const isSelected = selectedTrades.includes(trade);
                    return (
                      <button
                        type="button"
                        key={trade}
                        onClick={() => toggleTrade(trade)}
                        className={`p-2 rounded-xl text-[11px] font-bold text-left transition-all border cursor-pointer ${
                          isSelected
                            ? "bg-emerald-50 border-emerald-500 text-emerald-800"
                            : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {isSelected ? "✓ " : "+ "}
                        {trade}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 7. Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Additional Details or Experience (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your field reach, current trade tests, or overseas destinations you work with."
                  className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-800"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-2xl font-black text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-98"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Partnership Application (Phase 1)</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  🔒 We protect your data. No spam. Official partnership desk contact only.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER / HELP DESK ───────────────────────────── */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-base font-black tracking-tight text-white">WorkWise Visa</span>
              <span className="text-xs text-emerald-400 font-bold">• B2B Partnership Division</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-md">
              Corporate Desk: Noida Sector 132 | Regional Mobilization Hub: Boring Road, Patna, Bihar.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/partner/login"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold transition-colors"
            >
              Partner Portal Login
            </Link>
            <Link
              href="/b2b-partner/submit"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-bold transition-colors"
            >
              Submit Candidate
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
