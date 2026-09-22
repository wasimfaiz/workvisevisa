"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { jobDemands, JobDemand } from "@/lib/data";
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
} from "react-icons/fa6";

export default function JobsPage() {
  const { currentLang } = useLanguage();
  const t = translations[currentLang]?.jobsPage || translations.en.jobsPage;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDemand, setSelectedDemand] = useState<JobDemand | null>(null);

  // Filter demands based on search query
  const filteredDemands = jobDemands.filter((item) => {
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
      <main className="min-h-screen bg-slate-50 pt-24 md:pt-32 pb-24">
        {/* Page Hero Header */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 via-white to-slate-50 py-16 md:py-24 text-slate-900 border-b border-slate-200/80 shadow-xs">
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
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto">
                {t.title}
              </h1>
              <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
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
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                All Job Vacancies & Client Demands ({filteredDemands.length})
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Direct employer vacancies with guaranteed work visa quotas and trade test selection dates
              </p>
            </div>
          </div>

          {filteredDemands.length === 0 ? (
            <div className="text-center py-20 rounded-3xl border border-dashed border-slate-300 bg-white p-8">
              <FaBriefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800">No Job Vacancies Found</h3>
              <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                No matching vacancy found for "{searchQuery}". Try searching for another trade or country.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-600 transition-colors cursor-pointer"
              >
                Clear Search
              </button>
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

                      <a
                        href={`https://wa.me/918130161603?text=${waMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        <span>{t.applyWhatsApp}</span>
                      </a>
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
                  <a
                    href={`https://wa.me/918130161603?text=${encodeURIComponent(
                      `Hi WorkWise Visa, I want to apply for vacancy: "${selectedDemand.title}" in ${selectedDemand.country} (Ref ID: ${selectedDemand.id}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-emerald-500 transition-all cursor-pointer"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Apply Now on WhatsApp</span>
                  </a>
                </div>
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
