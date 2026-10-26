"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { JobDemand, jobDemands } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import {
  FaBriefcase,
  FaMagnifyingGlass,
  FaWhatsapp,
  FaFire,
  FaCalendarDays,
  FaClock,
  FaCircleCheck,
  FaUserGroup,
  FaPassport,
  FaBuilding,
  FaFileContract,
  FaArrowRight,
  FaXmark,
  FaCircleInfo,
  FaSpinner,
  FaPaperPlane,
  FaUser,
  FaPhone,
  FaLocationDot,
  FaCircleExclamation,
} from "react-icons/fa6";

function JobsPageContent() {
  const { currentLang } = useLanguage();
  const t = translations[currentLang]?.jobsPage || translations.en.jobsPage;
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDemand, setSelectedDemand] = useState<JobDemand | null>(null);
  const [liveJobs, setLiveJobs] = useState<JobDemand[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sync search query from URL ?country= param
  useEffect(() => {
    const country = searchParams.get("country");
    if (country) {
      setSearchQuery(country);
    }
  }, [searchParams]);

  // Apply Modal & Lead Submission state
  const [applyJob, setApplyJob] = useState<JobDemand | null>(null);
  const [applyForm, setApplyForm] = useState({
    name: "",
    phone: "",
    city: "",
    experience: "1-2 Years Relevant Experience",
    passportStatus: "ECNR (10th Pass)",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submittedInquiryId, setSubmittedInquiryId] = useState<string | null>(null);

  const handleOpenApply = (job: JobDemand) => {
    setApplyJob(job);
    setSubmitSuccess(false);
    setSubmitError("");
    setSubmittedInquiryId(null);
    setApplyForm({
      name: "",
      phone: "",
      city: "",
      experience: "1-2 Years Relevant Experience",
      passportStatus: "ECNR (10th Pass)",
      message: "",
    });
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyJob) return;

    const trimmedName = applyForm.name.trim();
    const cleanPhoneDigits = applyForm.phone.replace(/\D/g, "");

    if (!trimmedName || trimmedName.length < 2) {
      setSubmitError("Please enter candidate full name (minimum 2 characters).");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(trimmedName)) {
      setSubmitError("Candidate name can only contain alphabets and spaces (no numbers).");
      return;
    }
    if (cleanPhoneDigits.length !== 10) {
      setSubmitError("Please enter a valid 10-digit mobile number (digits only, e.g. 9876543210).");
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      const detailedNotes = [
        `Job Title: ${applyJob.title}`,
        `Company: ${applyJob.company}`,
        `Country: ${applyJob.country}`,
        `Salary: ${applyJob.salary}`,
        `Job Ref ID: ${applyJob.id}`,
        `Experience: ${applyForm.experience}`,
        `Passport: ${applyForm.passportStatus}`,
        applyForm.city.trim() ? `City/Location: ${applyForm.city.trim()}` : null,
        applyForm.message.trim() ? `Remarks: ${applyForm.message.trim()}` : null,
      ]
        .filter(Boolean)
        .join(" | ");

      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          phone: applyForm.phone.trim(),
          country: applyJob.country,
          occupation: applyJob.title,
          source: `Job Application: ${applyJob.title} (${applyJob.company})`,
          status: "new",
          notes: detailedNotes,
        }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setSubmittedInquiryId(json.data?.id || null);
        setSubmitSuccess(true);
      } else {
        setSubmitError(json.message || "Failed to submit application. Please try again.");
      }
    } catch (err) {
      console.error("Job application submission error:", err);
      setSubmitError("Network connection error. Please check your internet and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Fetch live jobs from API with static fallback
  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/jobs");
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            setLiveJobs(json.data as JobDemand[]);
            return;
          }
        }
        setLiveJobs(jobDemands);
      } catch (err) {
        console.error("Failed to load jobs from API:", err);
        setLiveJobs(jobDemands);
      } finally {
        setIsLoading(false);
      }
    }
    fetchJobs();
  }, []);

  // Filter demands based on search query
  const filteredDemands = liveJobs.filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.country.toLowerCase().includes(q) ||
      item.company.toLowerCase().includes(q) ||
      item.requirements.some((r) => r.toLowerCase().includes(q))
    );
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-16 sm:pt-20 pb-20">
        {/* Page Hero Header */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 via-white to-slate-50 pt-8 sm:pt-12 pb-12 sm:pb-16 text-slate-900 border-b border-slate-200/80 shadow-xs">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-6 shadow-xs">
                <FaFire className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                {t.badge}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto">
                {t.title}
              </h1>
              <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
                {t.subtitle}
              </p>

              {/* Search Bar */}
              <div className="mt-10 max-w-2xl mx-auto relative">
                <div className="relative flex items-center rounded-2xl bg-white border border-slate-200 p-2 shadow-lg shadow-slate-200/50 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all">
                  <FaMagnifyingGlass className="w-5 h-5 text-emerald-600 ml-4 shrink-0" />
                  <input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent px-4 py-3 text-sm sm:text-base text-slate-900 placeholder-slate-400 outline-none font-medium"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="p-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                    >
                      <FaXmark className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Unified Job Vacancies List Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 flex items-center gap-3">
                All Job Vacancies &amp; Client Demands ({filteredDemands.length})
                {isLoading && <FaSpinner className="w-5 h-5 text-emerald-500 animate-spin" />}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Direct employer vacancies with guaranteed work visa quotas and trade test selection dates
              </p>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-20 rounded-3xl border border-dashed border-slate-300 bg-white p-8">
              <FaSpinner className="w-10 h-10 text-emerald-600 animate-spin mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800">Loading Job Vacancies…</h3>
              <p className="text-sm text-slate-500 mt-1">Fetching latest openings from database</p>
            </div>
          ) : filteredDemands.length === 0 ? (
            <div className="text-center py-20 rounded-3xl border border-dashed border-slate-300 bg-white p-8">
              <FaBriefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800">No Job Vacancies Found</h3>
              <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                {searchQuery
                  ? `No matching vacancy found for "${searchQuery}". Try searching for another trade or country.`
                  : "Currently no vacancies are posted. Please check back soon."}
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  Clear Search
                </button>
              )}
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {filteredDemands.map((demand, idx) => {
                const waMessage = encodeURIComponent(
                  `Hi WorkWise Visa, I am interested in applying for the job vacancy: "${demand.title}" in ${demand.country} (Ref: ${demand.id}). Please review my eligibility.`
                );

                return (
                  <motion.article
                    key={demand.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div>
                      {/* Top Header: Country Flag, Badges & Date */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{demand.flag}</span>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 rounded-full px-3 py-1">
                            {demand.country}
                          </span>
                          {demand.urgent && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 border border-rose-200 px-2.5 py-0.5 text-[11px] font-bold text-rose-700 animate-pulse">
                              <FaFire className="w-3 h-3 text-rose-500" />
                              Urgent Vacancy
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                          <FaClock className="w-3 h-3" />
                          Posted: {demand.postedDate}
                        </span>
                      </div>

                      {/* Job Title & Client */}
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {demand.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-emerald-600 flex items-center gap-1.5 mt-1">
                        <FaBuilding className="w-3.5 h-3.5 shrink-0" />
                        {demand.company}
                      </p>

                      {/* Salary & Vacancies Bar */}
                      <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl bg-emerald-50/70 border border-emerald-100 p-3.5 text-center">
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                            Salary Package
                          </span>
                          <span className="text-base sm:text-lg font-extrabold text-emerald-900">
                            {demand.salary}
                          </span>
                        </div>
                        <div className="border-l border-emerald-200/80 pl-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                            {t.openingsLabel}
                          </span>
                          <span className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center justify-center gap-1">
                            <FaUserGroup className="w-4 h-4 text-emerald-600" />
                            {demand.totalOpenings} Vacancies
                          </span>
                        </div>
                      </div>

                      {/* Interview & Duty Details */}
                      <div className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600">
                        <div className="flex items-start gap-2">
                          <FaCalendarDays className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900">{t.interviewDateLabel}: </span>
                            <span>{demand.interviewDate}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <FaClock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900">{t.dutyLabel}: </span>
                            <span>{demand.dutyHours}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <FaPassport className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900">Visa Type: </span>
                            <span>{demand.visaType}</span>
                          </div>
                        </div>
                      </div>

                      {/* Perks & Benefits Pills */}
                      <div className="mt-5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                          {t.perksLabel}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {demand.perks.map((perk) => (
                            <span
                              key={perk}
                              className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
                            >
                              <FaCircleCheck className="w-3 h-3 text-emerald-500 shrink-0" />
                              {perk}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedDemand(demand)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-emerald-600 transition-colors cursor-pointer"
                      >
                        <FaCircleInfo className="w-3.5 h-3.5" />
                        View Full Requirements
                      </button>

                      <button
                        onClick={() => handleOpenApply(demand)}
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                      >
                        <FaPaperPlane className="w-3.5 h-3.5" />
                        <span>{t.applyNowBtn || "Apply for this Job"}</span>
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </section>

        {/* Employer Demand Posting Banner */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
          <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 border border-white/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-white mb-3 backdrop-blur-sm">
                <FaFileContract className="w-3.5 h-3.5" /> Client Recruitment Services
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {t.employerCtaTitle}
              </h3>
              <p className="mt-3 text-emerald-50 text-sm sm:text-base font-medium leading-relaxed">
                {t.employerCtaSub}
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20an%20employer/client%20and%20want%20to%20post%20a%20new%20job%20vacancy/demand."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-500 hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>{t.employerCtaBtn}</span>
                <FaArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Demand Detail Modal */}
        <AnimatePresence>
          {selectedDemand && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto"
              onClick={() => setSelectedDemand(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl my-8"
              >
                <button
                  onClick={() => setSelectedDemand(null)}
                  className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <FaXmark className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{selectedDemand.flag}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 rounded-full px-3 py-1">
                    {selectedDemand.country}
                  </span>
                  {selectedDemand.urgent && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 border border-rose-200 px-2.5 py-0.5 text-xs font-bold text-rose-700">
                      Urgent Vacancy
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-display font-extrabold text-slate-900 pr-8">
                  {selectedDemand.title}
                </h3>
                <p className="text-sm font-semibold text-emerald-600 mt-1">
                  Client / Employer: {selectedDemand.company}
                </p>

                <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-4 grid grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 block font-bold text-[11px] uppercase">Salary Package</span>
                    <span className="font-extrabold text-emerald-700 text-base">{selectedDemand.salary}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-bold text-[11px] uppercase">Total Vacancies</span>
                    <span className="font-extrabold text-slate-900 text-base">{selectedDemand.totalOpenings} Openings</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-bold text-[11px] uppercase">Selection / Test</span>
                    <span className="font-bold text-slate-800">{selectedDemand.interviewDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-bold text-[11px] uppercase">Test / Interview Venue</span>
                    <span className="font-bold text-slate-800">{selectedDemand.venue}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {t.requirementsLabel}
                  </h4>
                  <ul className="space-y-2">
                    {selectedDemand.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <FaCircleCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {t.perksLabel}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDemand.perks.map((perk) => (
                      <span
                        key={perk}
                        className="rounded-lg bg-emerald-50 border border-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-800"
                      >
                        ✓ {perk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedDemand(null)}
                    className="rounded-full px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const d = selectedDemand;
                      setSelectedDemand(null);
                      handleOpenApply(d);
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-emerald-500 transition-all cursor-pointer"
                  >
                    <FaPaperPlane className="w-4 h-4" />
                    <span>{t.applyNowBtn || "Apply for this Vacancy"}</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Direct Job Application Modal (Submits Lead to /api/inquiries & Admin Portal) */}
        <AnimatePresence>
          {applyJob && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto"
              onClick={() => {
                if (!submitting) {
                  setApplyJob(null);
                  setSubmitSuccess(false);
                }
              }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl my-8 overflow-hidden"
              >
                {/* Close Modal Button */}
                <button
                  onClick={() => {
                    setApplyJob(null);
                    setSubmitSuccess(false);
                  }}
                  className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
                  title="Close"
                >
                  <FaXmark className="w-5 h-5" />
                </button>

                {submitSuccess ? (
                  /* Confirmation Success View */
                  <div className="text-center py-4 sm:py-6">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4 animate-bounce">
                      <FaCircleCheck className="h-10 w-10" />
                    </div>
                    <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                      Lead Registered #{submittedInquiryId?.slice(-6) || "NEW"}
                    </span>
                    <h3 className="text-2xl font-display font-extrabold text-slate-900">
                      Application Submitted Successfully!
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-900">{applyForm.name}</strong>! Your application for{" "}
                      <strong className="text-emerald-700">{applyJob.title}</strong> at{" "}
                      <strong className="text-slate-900">{applyJob.company}</strong> has been routed directly to our recruitment counselors.
                    </p>

                    <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-4 text-left space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                        <span className="text-slate-500 font-medium">Applied Position:</span>
                        <span className="font-bold text-slate-800">{applyJob.title}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                        <span className="text-slate-500 font-medium">Country / Salary:</span>
                        <span className="font-bold text-emerald-700">{applyJob.flag} {applyJob.country} ({applyJob.salary})</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                        <span className="text-slate-500 font-medium">Candidate Phone:</span>
                        <span className="font-bold text-slate-800 font-mono">{applyForm.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 font-medium">Application Status:</span>
                        <span className="inline-flex items-center gap-1 font-bold text-emerald-700">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          New Lead — Under Verification
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                      📞 Our overseas recruitment team will contact you within <strong>2–4 working hours</strong> to verify your passport &amp; schedule trade test.
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={() => {
                          setApplyJob(null);
                          setSubmitSuccess(false);
                        }}
                        className="w-full sm:w-auto rounded-full bg-slate-100 px-6 py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                      >
                        Close Window
                      </button>
                      <a
                        href={`https://wa.me/918130161603?text=${encodeURIComponent(
                          `Hi WorkWise Visa, I have submitted my application for "${applyJob.title}" in ${applyJob.country} (Ref: ${submittedInquiryId || applyJob.id}). Candidate: ${applyForm.name}, Phone: ${applyForm.phone}. Please guide me on next steps.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-emerald-500 transition-all cursor-pointer"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        <span>Chat on WhatsApp with Reference</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Form View */
                  <div>
                    {/* Header info */}
                    <div className="pr-8 mb-5">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="text-xl">{applyJob.flag}</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 rounded-full px-2.5 py-0.5">
                          {applyJob.country}
                        </span>
                        {applyJob.urgent && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 border border-rose-200 px-2 py-0.5 text-[11px] font-bold text-rose-700">
                            Urgent Vacancy
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                        Apply for: {applyJob.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-emerald-700">{applyJob.company}</span>
                        <span>•</span>
                        <span className="font-extrabold text-slate-900 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-xs">
                          {applyJob.salary}
                        </span>
                        <span>•</span>
                        <span className="text-slate-600 font-medium">{applyJob.totalOpenings} Openings</span>
                      </p>
                    </div>

                    {submitError && (
                      <div className="mb-4 flex items-center gap-2 rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs sm:text-sm font-bold text-rose-700">
                        <FaCircleExclamation className="w-4 h-4 shrink-0 text-rose-600" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <form onSubmit={handleApplySubmit} className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Full Name (पूरा नाम) <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <FaUser className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="Enter candidate full name (alphabets only)"
                            value={applyForm.name}
                            onChange={(e) => {
                              const alphabetsOnly = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                              setApplyForm({ ...applyForm, name: alphabetsOnly });
                              if (submitError) setSubmitError("");
                            }}
                            onKeyDown={(e) => {
                              if (/[0-9]/.test(e.key)) {
                                e.preventDefault();
                              }
                            }}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium"
                          />
                        </div>
                      </div>

                      {/* Phone / WhatsApp */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          WhatsApp / Mobile Number (मोबाइल नंबर) <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <FaPhone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="tel"
                            inputMode="numeric"
                            required
                            maxLength={10}
                            placeholder="Enter 10-digit mobile number (e.g. 9876543210)"
                            value={applyForm.phone}
                            onChange={(e) => {
                              const digitsOnly = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                              setApplyForm({ ...applyForm, phone: digitsOnly });
                              if (submitError) setSubmitError("");
                            }}
                            onKeyDown={(e) => {
                              if (
                                !/[0-9]/.test(e.key) &&
                                !["Backspace", "Tab", "Delete", "ArrowLeft", "ArrowRight", "Enter"].includes(e.key) &&
                                !e.ctrlKey &&
                                !e.metaKey
                              ) {
                                e.preventDefault();
                              }
                            }}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium font-mono"
                          />
                        </div>
                      </div>

                      {/* Current City / District */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Current City / District (वर्तमान शहर / जिला)
                        </label>
                        <div className="relative">
                          <FaLocationDot className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            placeholder="e.g. Patna, Siwan, Gopalganj, Gorakhpur, Delhi, Lucknow..."
                            value={applyForm.city}
                            onChange={(e) => {
                              const lettersOnly = e.target.value.replace(/[^a-zA-Z\s,.-]/g, "");
                              setApplyForm({ ...applyForm, city: lettersOnly });
                            }}
                            onKeyDown={(e) => {
                              if (/[0-9]/.test(e.key)) {
                                e.preventDefault();
                              }
                            }}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium"
                          />
                        </div>
                      </div>

                      {/* Experience & Passport Status Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Trade Experience (अनुभव)
                          </label>
                          <select
                            value={applyForm.experience}
                            onChange={(e) => setApplyForm({ ...applyForm, experience: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium cursor-pointer"
                          >
                            <option value="Fresher (0–1 Year)">Fresher (0–1 Year)</option>
                            <option value="1–2 Years Relevant Experience">1–2 Years Relevant Experience</option>
                            <option value="3–5 Years Experience">3–5 Years Experience</option>
                            <option value="5+ Years / Gulf Return Candidate">5+ Years / Gulf Return Candidate</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Passport Status (पासपोर्ट स्थिति)
                          </label>
                          <select
                            value={applyForm.passportStatus}
                            onChange={(e) => setApplyForm({ ...applyForm, passportStatus: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium cursor-pointer"
                          >
                            <option value="ECNR (10th / Matric Pass)">ECNR (10th Pass / Emigration Check Not Required)</option>
                            <option value="ECR (Non-Matric Passport)">ECR (Non-Matric Passport)</option>
                            <option value="Passport Under Process / Applied">Passport Under Process / Applied</option>
                            <option value="Don't Have Passport Yet">Don't Have Passport Yet</option>
                          </select>
                        </div>
                      </div>

                      {/* Remarks (Optional) */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Remarks / Previous Projects (वैकल्पिक टिप्पणी)
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Tell us about your previous site work, skills, or any specific question..."
                          value={applyForm.message}
                          onChange={(e) => setApplyForm({ ...applyForm, message: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium resize-none"
                        />
                      </div>

                      {/* Form Actions */}
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <span className="text-[11px] text-slate-500 font-medium text-center sm:text-left">
                          🔒 Direct Client Application • Free Registration
                        </span>
                        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
                          <button
                            type="button"
                            onClick={() => setApplyJob(null)}
                            disabled={submitting}
                            className="rounded-full px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            disabled={submitting}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-600/25 hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
                          >
                            {submitting ? (
                              <>
                                <FaSpinner className="w-4 h-4 animate-spin" />
                                <span>Submitting…</span>
                              </>
                            ) : (
                              <>
                                <FaPaperPlane className="w-3.5 h-3.5" />
                                <span>Submit Application</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default function JobsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <FaSpinner className="w-8 h-8 text-emerald-600 animate-spin" />
        </div>
      }
    >
      <JobsPageContent />
    </Suspense>
  );
}
