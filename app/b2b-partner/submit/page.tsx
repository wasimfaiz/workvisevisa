"use client";

/* ================================================================
   app/b2b-partner/submit/page.tsx — B2B Agent Candidate Intake Portal
   Mobile-first, high-conversion candidate submission portal for
   sourcing sub-agents and field associates.
   WorkWise Visa manages end-to-end forward processing.
   ================================================================ */

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  UserCheck,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  Phone,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  Send,
  Building2,
  FileCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface AgentOption {
  id: string;
  name: string;
  agentCode: string;
  contactPerson: string;
  phone: string;
  city: string;
  commissionTerms?: string;
}

const TRADES = [
  "Construction Helper",
  "Mason",
  "Scaffolder",
  "Carpenter",
  "Steel Fixer",
  "Welder (3G/4G/6G/MIG/TIG)",
  "Electrician",
  "Plumber",
  "Heavy / Light Driver",
  "HVAC Technician",
  "Painter",
  "Other Skilled Trade",
];

const TARGET_DEMANDS = [
  {
    company: "AFGC Holding Dubai",
    country: "UAE",
    badge: "Urgent Requirement • 460 Vacancies",
    roles: "Mason, Scaffolder, Carpenter, Steel Fixer, Helper",
  },
  {
    company: "Al-Futtaim Logistics & Transport",
    country: "UAE",
    badge: "High Demand",
    roles: "Drivers, Warehouse Associates, Loaders",
  },
  {
    company: "Al-Yamama Engineering & Contracting",
    country: "Saudi Arabia",
    badge: "Immediate Visa",
    roles: "Masons, Electricians, Plumbers, Welder",
  },
  {
    company: "Adriatic Infrastructure D.O.O.",
    country: "Croatia (Europe)",
    badge: "Work Permit Ready",
    roles: "Construction Workers, Steel Fixers",
  },
  {
    company: "General Gulf Sourcing Pool",
    country: "Gulf (UAE / Saudi / Qatar / Kuwait)",
    badge: "Continuous Intake",
    roles: "All Technical & General Trades",
  },
];

export default function AgentCandidateSubmitPage() {
  const [agents, setAgents] = useState<AgentOption[]>([]);
  const [loadingAgents, setLoadingAgents] = useState(true);

  // Form State
  const [selectedAgentCode, setSelectedAgentCode] = useState("");
  const [selectedAgent, setSelectedAgent] = useState<AgentOption | null>(null);

  const [candidateName, setCandidateName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [passportNumber, setPassportNumber] = useState("");
  const [trade, setTrade] = useState("Construction Helper");
  const [targetCompany, setTargetCompany] = useState("AFGC Holding Dubai");
  const [targetCountry, setTargetCountry] = useState("UAE");
  const [experienceYears, setExperienceYears] = useState("2");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Bihar");
  const [notes, setNotes] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedCandidate, setSubmittedCandidate] = useState<any | null>(null);

  // Fetch registered agents
  useEffect(() => {
    async function fetchAgents() {
      try {
        const res = await fetch("/api/partners");
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data)) {
            const sourcingAgents = json.data
              .filter(
                (p: any) =>
                  p.partnerType === "Sourcing Sub-Agent" ||
                  p.partnerType === "Channel Associate"
              )
              .map((p: any, idx: number) => ({
                id: p.id,
                name: p.name,
                agentCode: p.agentCode || `WW-AGT-0${idx + 1}`,
                contactPerson: p.contactPerson,
                phone: p.phone,
                city: p.city,
                commissionTerms: p.commissionTerms || "Standard B2B Terms",
              }));
            setAgents(sourcingAgents);

            // Preselect first agent if available
            if (sourcingAgents.length > 0) {
              setSelectedAgent(sourcingAgents[0]);
              setSelectedAgentCode(sourcingAgents[0].agentCode);
            }
          }
        }
      } catch (err) {
        console.error("Failed to load agents", err);
      } finally {
        setLoadingAgents(false);
      }
    }
    fetchAgents();
  }, []);

  // Update agent when code changes
  const handleAgentSelect = (code: string) => {
    setSelectedAgentCode(code);
    const found = agents.find(
      (a) => a.agentCode.toLowerCase() === code.toLowerCase()
    );
    setSelectedAgent(found || null);
  };

  // Target demand change
  const handleDemandChange = (companyName: string) => {
    setTargetCompany(companyName);
    const demand = TARGET_DEMANDS.find((d) => d.company === companyName);
    if (demand) setTargetCountry(demand.country);
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    const trimmedName = candidateName.trim();
    if (!trimmedName || !/^[a-zA-Z\s.]+$/.test(trimmedName)) {
      setErrorMessage("Please enter a valid candidate name (alphabets only).");
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!selectedAgent) {
      setErrorMessage("Please select your verified B2B Agent Profile or Code.");
      return;
    }

    setSubmitting(true);

    const payload = {
      candidateName: trimmedName,
      phone: cleanPhone.length === 10 ? `+91 ${cleanPhone}` : cleanPhone,
      whatsapp: sameAsPhone
        ? cleanPhone.length === 10
          ? `+91 ${cleanPhone}`
          : cleanPhone
        : whatsapp.trim(),
      passportNumber: passportNumber.trim().toUpperCase(),
      trade,
      targetCompany,
      targetCountry,
      experienceYears: Number(experienceYears) || 0,
      city: city.trim() || selectedAgent.city || "Siwan",
      state,
      agentId: selectedAgent.id,
      agentCode: selectedAgent.agentCode,
      notes: notes.trim(),
      processedBy: `Agent Portal (${selectedAgent.name})`,
    };

    try {
      const res = await fetch("/api/b2b-candidates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setSubmittedCandidate(json.data);
      } else {
        setErrorMessage(json.message || "Failed to submit candidate.");
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage("Connection error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setCandidateName("");
    setPhone("");
    setWhatsapp("");
    setPassportNumber("");
    setNotes("");
    setCity("");
    setSubmittedCandidate(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Top Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white font-bold text-lg">
              W
            </div>
            <div>
              <span className="font-bold text-lg text-white tracking-tight">
                WorkWise <span className="text-emerald-400">Visa</span>
              </span>
              <span className="block text-[11px] text-slate-400 font-medium">
                B2B Sourcing Partner Portal
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Intake Channel
            </span>
            <Link
              href="/admin/partners"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800/60 transition-colors"
            >
              Admin Login
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative overflow-hidden pt-8 pb-6 border-b border-slate-800/60 bg-gradient-to-b from-emerald-950/20 via-slate-900/40 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-3">
              <Handshake className="w-3.5 h-3.5 text-emerald-400" />
              Sourcing Sub-Agent & Field Partner Intake
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Aap Candidate Recruit Karein,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Aage Ka Har Process Hum Karenge.
              </span>
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
              Candidate ka trade test, foreign client interview (AFGC Dubai / Gulf),
              medical, visa stamping, flight aur aapka guaranteed commission payout
              — sab WorkWise Visa transparently manage karega.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8">
        {submittedCandidate ? (
          /* Success Screen */
          <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="text-center max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Candidate Successfully Registered!
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Candidate details WorkWise Visa operations desk par live queue me
                add ho chuki hain.
              </p>

              {/* Reference Card */}
              <div className="mt-6 bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-left space-y-2 text-sm">
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Tracking Reference No:</span>
                  <span className="font-mono font-bold text-emerald-400 text-base">
                    {submittedCandidate.candidateRefNo}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Candidate Name:</span>
                  <span className="font-semibold text-white">
                    {submittedCandidate.candidateName}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Trade / Skill:</span>
                  <span className="font-medium text-emerald-300">
                    {submittedCandidate.trade}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Target Employer:</span>
                  <span className="font-medium text-slate-200">
                    {submittedCandidate.targetCompany} ({submittedCandidate.targetCountry})
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Sourcing Agent:</span>
                  <span className="font-medium text-slate-200">
                    {submittedCandidate.agentName} ({submittedCandidate.agentCode})
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-slate-800/80">
                  <span className="text-slate-400">Commission Reserved:</span>
                  <span className="font-bold text-emerald-400">
                    ₹{submittedCandidate.commissionAmount?.toLocaleString("en-IN")} (On Visa/Flight)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/919450123456?text=${encodeURIComponent(
                    `Namaste WorkWise Visa! Maine [${submittedCandidate.agentName}] ki taraf se naya candidate [${submittedCandidate.candidateName}] (${submittedCandidate.trade}) submit kiya hai.\nRef No: ${submittedCandidate.candidateRefNo}\nKripya verification shuru karein.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Notify WorkWise on WhatsApp
                </a>
                <button
                  onClick={handleResetForm}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
                >
                  <UserCheck className="w-4 h-4" />
                  Submit Another Candidate
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Intake Form */
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left 8 Cols: Form Fields */}
            <div className="lg:col-span-8 space-y-6">
              {/* Step 1: Agent Identification */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <h3 className="font-bold text-white text-base">
                    Sourcing Agent Profile (Aapki Agency)
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Select Your Registered Agency / Code *
                    </label>
                    <select
                      value={selectedAgentCode}
                      onChange={(e) => handleAgentSelect(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      {agents.map((ag) => (
                        <option key={ag.id} value={ag.agentCode}>
                          {ag.name} ({ag.agentCode}) — {ag.city}
                        </option>
                      ))}
                    </select>
                  </div>

                  {selectedAgent && (
                    <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 flex flex-col justify-center">
                      <div className="text-xs text-slate-400">
                        Authorized Rep:{" "}
                        <span className="font-semibold text-slate-200">
                          {selectedAgent.contactPerson}
                        </span>
                      </div>
                      <div className="text-xs text-emerald-400 font-medium mt-1">
                        Commission: {selectedAgent.commissionTerms}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Step 2: Candidate Details */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <h3 className="font-bold text-white text-base">
                    Candidate Personal & Passport Info
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Candidate Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Candidate Full Name (As per Passport) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rameshwar Prasad Yadav"
                      value={candidateName}
                      onChange={(e) =>
                        setCandidateName(e.target.value.replace(/[^a-zA-Z\s.]/g, ""))
                      }
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  {/* Passport Number */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Passport Number (8 Characters)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Z5829140"
                      maxLength={9}
                      value={passportNumber}
                      onChange={(e) =>
                        setPassportNumber(
                          e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "")
                        )
                      }
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 uppercase"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Mobile Number (Calling) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-2.5 text-sm text-slate-400 font-medium">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="10 digit number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-12 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        WhatsApp Number
                      </label>
                      <label className="flex items-center gap-1.5 text-[11px] text-slate-400 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={sameAsPhone}
                          onChange={(e) => setSameAsPhone(e.target.checked)}
                          className="rounded border-slate-700 text-emerald-500 focus:ring-0"
                        />
                        Same as mobile
                      </label>
                    </div>
                    {!sameAsPhone && (
                      <input
                        type="tel"
                        placeholder="e.g. 9835044112"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    )}
                  </div>

                  {/* District / City */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Candidate Home District / City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Siwan, Gopalganj, Gorakhpur"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      State
                    </label>
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Bihar">Bihar</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Trade & Target Job Demand */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <h3 className="font-bold text-white text-base">
                    Candidate Trade & Target Overseas Job
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Trade / Skill */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Candidate Trade / Skill Category *
                    </label>
                    <select
                      value={trade}
                      onChange={(e) => setTrade(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      {TRADES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Experience (Years)
                    </label>
                    <select
                      value={experienceYears}
                      onChange={(e) => setExperienceYears(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="0">Fresher (Trained / Raw)</option>
                      <option value="1">1 Year Experience</option>
                      <option value="2">2 Years (India Experience)</option>
                      <option value="3">3 Years (Gulf Return / Ex-Gulf)</option>
                      <option value="5">5+ Years (Senior Technician)</option>
                      <option value="8">8+ Years (Foreman / Chargehand)</option>
                    </select>
                  </div>

                  {/* Target Employer Project */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Target Overseas Employer / Project *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {TARGET_DEMANDS.map((d) => {
                        const isSelected = targetCompany === d.company;
                        return (
                          <div
                            key={d.company}
                            onClick={() => handleDemandChange(d.company)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all ${
                              isSelected
                                ? "bg-emerald-500/10 border-emerald-400 text-white shadow-md shadow-emerald-500/10"
                                : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-sm">
                                {d.company}
                              </span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-emerald-400">
                                {d.country}
                              </span>
                            </div>
                            <div className="text-xs text-slate-400 mt-1">
                              {d.roles}
                            </div>
                            <div className="text-[11px] text-emerald-400 font-medium mt-1">
                              {d.badge}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Notes / Remarks */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Special Remarks / Candidate Profile Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Candidate has prior UAE visa cancellation, speaks basic Hindi/English, GAMCA medical fit ready..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  {errorMessage}
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                    Submitting Candidate to WorkWise Visa...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Candidate to WorkWise Visa Head Office
                  </>
                )}
              </button>
            </div>

            {/* Right 4 Cols: Operations Commitment & Commission Guarantee */}
            <div className="lg:col-span-4 space-y-6">
              {/* How it works for agents */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <h4 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  WorkWise Visa B2B Process
                </h4>
                <div className="space-y-3.5 text-xs">
                  <div className="flex gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        Aap Candidate Submit Karein
                      </div>
                      <div className="text-slate-400">
                        Bas candidate ki basic details aur trade enter karein.
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        Screening & Trade Test (Apex Patna)
                      </div>
                      <div className="text-slate-400">
                        WorkWise team candidate ka skill test aur document verify karegi.
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        Client Interview (AFGC Dubai)
                      </div>
                      <div className="text-slate-400">
                        Foreign client se interview aur selection offer letter issue.
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">
                      4
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        GAMCA Medical & Visa Stamping
                      </div>
                      <div className="text-slate-400">
                        Emigration clear karke Dubai / Gulf employment visa stamp.
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">
                      5
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        Flight & Agent Commission Payout
                      </div>
                      <div className="text-slate-400">
                        Flight depart hote hi aapka commission bank transfer / cash settle.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Support Desk */}
              <div className="bg-gradient-to-br from-slate-900 to-emerald-950/30 border border-emerald-500/20 rounded-2xl p-5 shadow-xl">
                <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  B2B Agent Support Desk
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Kisi candidate ke trade test, passport issue ya demand query ke liye
                  seedhe hamare B2B channel head se WhatsApp par baat karein.
                </p>
                <div className="mt-4">
                  <a
                    href="https://wa.me/919450123456?text=Namaste%20WorkWise%20Visa!%20Mujhe%20B2B%20Sourcing%20Agent%20Demand%20ke%20bare%20me%20baat%20karni%20hai."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Chat with B2B Channel Head
                  </a>
                </div>
              </div>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}
