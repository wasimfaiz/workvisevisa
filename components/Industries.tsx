"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  FaHelmetSafety,
  FaTruck,
  FaWrench,
  FaIndustry,
  FaBroom,
  FaScrewdriverWrench,
  FaHandHoldingHeart,
  FaTractor,
  FaArrowRight,
  FaFire,
  FaWhatsapp,
} from "react-icons/fa6";
import { industries, Industry } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const iconMap: Record<string, React.ElementType> = {
  HelmetSafety: FaHelmetSafety,
  Truck: FaTruck,
  Wrench: FaWrench,
  Industry: FaIndustry,
  Broom: FaBroom,
  ScrewdriverWrench: FaScrewdriverWrench,
  HandHoldingHeart: FaHandHoldingHeart,
  Tractor: FaTractor,
};

export default function Industries() {
  const { currentLang } = useLanguage();
  const t = translations[currentLang]?.industries || translations.en.industries;
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");

  const filteredIndustries =
    selectedIndustry === "all"
      ? industries
      : industries.filter((ind) => ind.id === selectedIndustry);

  return (
    <section
      id="industries"
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4 shadow-xs">
            <FaHelmetSafety className="w-3.5 h-3.5 text-emerald-600" />
            {t.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 mx-auto max-w-3xl text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            {t.subtitle}
          </p>

          {/* Quick industry tab filters */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedIndustry("all")}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedIndustry === "all"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              All Trades ({industries.length})
            </button>
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedIndustry === ind.id
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {ind.title.split("&")[0].trim()}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid of Industry Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {filteredIndustries.map((ind, i) => {
            const Icon = iconMap[ind.iconName] ?? FaHelmetSafety;

            const badgeColor =
              ind.demandLevel === "Urgent Shortage"
                ? "bg-rose-50 text-rose-700 border-rose-200"
                : ind.demandLevel === "Very High"
                ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                : "bg-teal-50 text-teal-800 border-teal-200";

            return (
              <motion.article
                key={ind.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-emerald-500/60 hover:shadow-md"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  {/* Top card bar: Icon + Demand Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${badgeColor}`}
                    >
                      <FaFire className="w-3 h-3 shrink-0" />
                      <span>{ind.demandLevel}</span>
                    </div>
                  </div>

                  {/* Industry Title + Tagline */}
                  <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-emerald-600">
                    {ind.seoTagline}
                  </p>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                    {ind.description}
                  </p>

                  {/* Popular Job Roles (SEO tags) */}
                  <div className="mt-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      In-Demand Trade Roles
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.popularRoles.map((role) => (
                        <span
                          key={role}
                          className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-900 transition-colors"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          className="mt-16 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-8 sm:p-12 text-center text-white shadow-xl shadow-emerald-900/10 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Hiring Blue-Collar Workforce or Looking for Trade Jobs Abroad?
            </h3>
            <p className="mt-3 text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
              We organize trade testing centers, bulk visa quotas, embassy documentation, and flight deployment for skilled laborers, drivers, and technical crews.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20would%20like%20to%20apply%20for%20blue-collar%20work%20visas!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Apply for Blue-Collar Visas Now</span>
                <FaArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
