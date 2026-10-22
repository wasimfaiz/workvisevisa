"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  FaBriefcase,
  FaLocationDot,
  FaMoneyBillWave,
  FaPassport,
  FaArrowRight,
  FaBolt,
  FaCircleCheck,
  FaBuilding,
  FaFire,
  FaXmark,
  FaPaperPlane,
  FaWhatsapp,
  FaIdCard,
  FaSuitcase,
} from "react-icons/fa6";
import { JobDemand, jobDemands as fallbackDemands } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function FeaturedJobs() {
  const { currentLang } = useLanguage();
  const t = translations[currentLang]?.featuredJobs || translations.en.featuredJobs;
  
  // Live job demands state with fallback to data.ts
  const [liveJobs, setLiveJobs] = useState<JobDemand[]>(fallbackDemands);
  const [activeCategory, setActiveCategory] = useState("All");

  // Application Modal state
  const [applyJob, setApplyJob] = useState<JobDemand | null>(null);
  const [applyForm, setApplyForm] = useState({
    name: "",
    phone: "",
    experience: "1-2 Years",
    passportType: "ECR",
    location: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedInquiryId, setSubmittedInquiryId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Fetch live jobs from API on mount
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
      } catch (err) {
        console.error("Failed to load live jobs on homepage:", err);
      }
    }
    fetchJobs();
  }, []);

  // Dynamic categories from loaded jobs
  const categories = [
    "All",
    ...Array.from(new Set(liveJobs.map((j) => j.category).filter(Boolean))),
  ];

  const filteredJobs =
    activeCategory === "All"
      ? liveJobs
      : liveJobs.filter((j) => j.category === activeCategory);

  const getCountryCode = (countryStr: string) => {
    const c = (countryStr || "").toLowerCase();
    if (c.includes("uae") || c.includes("dubai") || c.includes("emirates")) return "ae";
    if (c.includes("saudi") || c.includes("ksa") || c.includes("riyadh")) return "sa";
    if (c.includes("germany") || c.includes("munich") || c.includes("berlin")) return "de";
    if (c.includes("qatar") || c.includes("doha")) return "qa";
    if (c.includes("uk") || c.includes("united kingdom") || c.includes("london")) return "gb";
    if (c.includes("croatia") || c.includes("zagreb")) return "hr";
    if (c.includes("kuwait")) return "kw";
    if (c.includes("oman") || c.includes("muscat")) return "om";
    if (c.includes("poland")) return "pl";
    if (c.includes("romania")) return "ro";
    if (c.includes("canada")) return "ca";
    return "ae";
  };

  const handleOpenApply = (job: JobDemand) => {
    setApplyJob(job);
    setSubmitSuccess(false);
    setSubmitError(null);
    setApplyForm({
      name: "",
      phone: "",
      experience: "1-2 Years",
      passportType: "ECR",
      location: "",
    });
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyJob) return;

    if (!applyForm.name.trim() || applyForm.name.trim().length < 2) {
      setSubmitError("Please enter your full name (minimum 2 letters).");
      return;
    }
    if (applyForm.phone.length !== 10) {
      setSubmitError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: applyForm.name.trim(),
          phone: applyForm.phone.trim(),
          targetCountry: applyJob.country,
          service: `Job Application: ${applyJob.title}`,
          source: "Homepage Job Application",
          notes: `Company: ${applyJob.company} | Salary: ${applyJob.salary} | Experience: ${applyForm.experience} | Passport: ${applyForm.passportType} | Location: ${applyForm.location || "Not specified"}`,
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

  return (
    <section id="jobs" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 section-alt pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-4 shadow-sm">
            <FaFire className="w-3.5 h-3.5 text-emerald-600 animate-pulse" /> {t.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-slate-600 text-sm sm:text-base font-medium">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Category Filters */}
        {categories.length > 1 && (
          <motion.div
            className="flex flex-wrap justify-center gap-2.5 mb-12"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/20"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}

        {/* Job Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 transition-all duration-200 hover:border-emerald-500/50 hover:shadow-md shadow-sm flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Top Bar: Location Badge & Urgent Hiring Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200/90 px-3 py-1 text-xs font-bold text-slate-800">
                      <img
                        src={`https://flagcdn.com/w40/${getCountryCode(job.country)}.png`}
                        alt={`${job.country} flag`}
                        width={20}
                        height={14}
                        loading="lazy"
                        decoding="async"
                        className="h-3.5 w-5 object-cover rounded shadow-xs"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <span>{job.country}</span>
                    </div>

                    {job.urgent ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                        <FaBolt className="w-3 h-3 text-emerald-600" />
                        Urgent · {job.totalOpenings} Openings
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                        {job.totalOpenings} Openings
                      </span>
                    )}
                  </div>

                  {/* Job Title & Company */}
                  <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1.5 leading-snug">
                    {job.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-4">
                    <FaBuilding className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="line-clamp-1">{job.company}</span>
                  </p>

                  {/* Salary & Visa Sponsorship Pill Box */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-3 mb-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <FaMoneyBillWave className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                      <FaPassport className="w-4 h-4 text-teal-600 shrink-0" />
                      <span className="truncate">{job.visaType}</span>
                    </div>
                  </div>

                  {/* Included Perks List */}
                  <ul className="space-y-2 mb-6">
                    {(job.perks || []).slice(0, 3).map((perk) => (
                      <li key={perk} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => handleOpenApply(job)}
                  className="group/btn flex items-center justify-center gap-2 w-full rounded-xl bg-slate-900 py-3 text-xs font-bold text-white shadow-sm hover:bg-emerald-600 transition-all duration-200 cursor-pointer"
                >
                  Apply &amp; Claim Visa Sponsor
                  <FaArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Jobs Link */}
        <div className="mt-12 text-center">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2.5 rounded-full bg-white border border-slate-300 hover:border-emerald-500 px-7 py-3.5 text-xs sm:text-sm font-bold text-slate-800 hover:text-emerald-700 shadow-xs hover:shadow-md transition-all duration-200"
          >
            <span>Explore All {liveJobs.length}+ Verified Job Openings &amp; Requirements</span>
            <FaArrowRight className="w-3.5 h-3.5 text-emerald-600" />
          </Link>
        </div>
      </div>

      {/* Direct Job Application Modal on Homepage */}
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
                      <span className="font-bold text-emerald-700">{applyJob.country} ({applyJob.salary})</span>
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
                  <div className="pr-8 mb-5">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-extrabold text-emerald-800">
                        {applyJob.totalOpenings} Openings
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        • {applyJob.country}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                      Apply for {applyJob.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Employer: <strong className="text-slate-800">{applyJob.company}</strong> | Salary: <strong className="text-emerald-700">{applyJob.salary}</strong>
                    </p>
                  </div>

                  {submitError && (
                    <div className="mb-4 rounded-xl bg-red-50 border border-red-200 p-3 text-xs text-red-700 font-medium">
                      ⚠️ {submitError}
                    </div>
                  )}

                  <form onSubmit={handleApplySubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name (Candidate Name) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={applyForm.name}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (/^[a-zA-Z\s]*$/.test(val)) {
                            setApplyForm({ ...applyForm, name: val });
                          }
                        }}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        10-Digit Mobile / WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-2.5 text-sm font-bold text-slate-400 select-none">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          value={applyForm.phone}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                            setApplyForm({ ...applyForm, phone: val });
                          }}
                          placeholder="9876543210"
                          className="w-full rounded-xl border border-slate-300 pl-13 pr-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none font-mono"
                        />
                      </div>
                    </div>

                    {/* Experience & Passport Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Relevant Experience
                        </label>
                        <select
                          value={applyForm.experience}
                          onChange={(e) => setApplyForm({ ...applyForm, experience: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none bg-white"
                        >
                          <option value="Fresher (0-1 Year)">Fresher (0–1 Year)</option>
                          <option value="1-2 Years">1–2 Years Experience</option>
                          <option value="3-5 Years (Gulf/Domestic)">3–5 Years Experience</option>
                          <option value="5+ Years (Gulf Return)">5+ Years (Gulf Return)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Passport Category
                        </label>
                        <select
                          value={applyForm.passportType}
                          onChange={(e) => setApplyForm({ ...applyForm, passportType: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none bg-white"
                        >
                          <option value="ECR">ECR (Non-Matric / 10th Fail)</option>
                          <option value="ECNR">ECNR (10th Pass / Higher)</option>
                          <option value="Passport in Process">Passport in Process</option>
                        </select>
                      </div>
                    </div>

                    {/* Current City / District */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Current City / Home District
                      </label>
                      <input
                        type="text"
                        value={applyForm.location}
                        onChange={(e) => setApplyForm({ ...applyForm, location: e.target.value })}
                        placeholder="e.g. Patna, Siwan, Gopalganj, Gorakhpur, Delhi"
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                      />
                    </div>

                    {/* Quick Perks Summary */}
                    <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-3 text-xs text-slate-600 space-y-1">
                      <div className="font-semibold text-slate-800">Verified Benefits:</div>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-600">
                        <span>✓ Company Accommodation</span>
                        <span>✓ Company Transportation</span>
                        <span>✓ Overtime Paid</span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-500 transition-all disabled:opacity-60 cursor-pointer"
                      >
                        {submitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Registering Lead...</span>
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="w-4 h-4" />
                            <span>Submit Application for {applyJob.title}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
