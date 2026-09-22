"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaClock,
  FaChevronDown,
  FaLocationDot,
  FaWandMagicSparkles,
  FaCompass,
} from "react-icons/fa6";
import { countries, type Country } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const regions = [
  "All",
  "Gulf",
  "Schengen",
  "North America",
  "United Kingdom",
  "Russia & CIS",
];

export default function CountriesGrid() {
  const { currentLang } = useLanguage();
  const t = translations[currentLang]?.countries || translations.en.countries;
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered =
    active === "All"
      ? countries
      : countries.filter((c) => c.region === active);

  return (
    <section
      id="countries"
      className="relative py-24 md:py-32 overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0 section-alt pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-4 shadow-sm">
            <FaCompass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-slate-600 text-lg">
            {t.subtitle}
          </p>
        </motion.div>

        {/* region filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => {
                setActive(r);
                setExpanded(null);
              }}
              className={`relative rounded-full px-5 py-2 text-sm font-bold transition-all duration-200 cursor-pointer ${
                active === r
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/20"
                  : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm"
              }`}
            >
              {r}
            </button>
          ))}
        </motion.div>

        {/* country cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => (
              <CountryCard
                key={c.name}
                country={c}
                index={i}
                isExpanded={expanded === c.name}
                onToggle={() =>
                  setExpanded((prev) => (prev === c.name ? null : c.name))
                }
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function CountryCard({
  country,
  index,
  isExpanded,
  onToggle,
}: {
  country: Country;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 cursor-pointer transition-all duration-200 hover:border-emerald-500/50 hover:shadow-xl overflow-hidden shadow-sm"
      onClick={onToggle}
    >
      {/* Background Watermark Flag */}
      <div className="absolute -right-4 -top-4 w-24 h-16 opacity-[0.06] group-hover:opacity-[0.14] transition-opacity duration-300 pointer-events-none select-none overflow-hidden rounded-xl">
        <img
          src={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3.5">
            {/* Left Box with High-Definition Real Country Flag Image + Code Pill */}
            <div className="flex h-13 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm group-hover:border-emerald-500/50 group-hover:bg-emerald-50/60 transition-all p-1">
              <img
                src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                alt={`${country.name} flag`}
                className="h-6 w-9 object-cover rounded shadow-xs border border-slate-200/50"
              />
              <span className="text-[10px] font-black tracking-widest text-slate-700 uppercase mt-1 font-display">
                {country.code}
              </span>
            </div>

            <div>
              <h3 className="font-display font-bold text-slate-900 text-lg leading-tight group-hover:text-emerald-700 transition-colors">
                {country.name}
              </h3>
              <span className="inline-block mt-0.5 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                {country.region}
              </span>
            </div>
          </div>
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 border border-slate-200 group-hover:border-emerald-500/40 group-hover:bg-emerald-50 transition-colors"
          >
            <FaChevronDown className={`w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-700 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-5 font-normal">
          {country.description}
        </p>

        <div className="flex flex-wrap gap-2.5 mb-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-800">
            <FaClock className="w-3 h-3 text-emerald-600" />
            {country.processingTime}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
            <FaLocationDot className="w-3 h-3 text-teal-600" />
            {country.visaTypes.length} Visa Options
          </span>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
                  <FaWandMagicSparkles className="w-3 h-3 text-emerald-600" /> Visa Categories
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {country.visaTypes.map((v) => (
                    <span
                      key={v}
                      className="rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-900 shadow-xs"
                    >
                      {v}
                    </span>
                  ))}
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  High-Demand Roles
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {country.popularRoles.map((r) => (
                    <span
                      key={r}
                      className="rounded-md bg-slate-100 border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
