"use client";

import { motion } from "motion/react";
import {
  FaBriefcase,
  FaFileCircleCheck,
  FaFileLines,
  FaGraduationCap,
  FaHeadphones,
  FaCompass,
  FaCheck,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import { services } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const iconMap: Record<string, React.ElementType> = {
  Briefcase: FaBriefcase,
  FileCheck: FaFileCircleCheck,
  FileText: FaFileLines,
  GraduationCap: FaGraduationCap,
  Headphones: FaHeadphones,
  Compass: FaCompass,
};

export default function Services() {
  const { currentLang } = useLanguage();
  const t = translations[currentLang]?.services || translations.en.services;

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden bg-slate-50"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-4 shadow-sm">
            <FaWandMagicSparkles className="w-3.5 h-3.5 text-emerald-600" /> {t.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-slate-600 text-sm sm:text-base font-medium">
            {t.subtitle}
          </p>
        </motion.div>

        {/* 6 service cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.iconName] ?? FaBriefcase;
            const num = String(i + 1).padStart(2, "0");

            return (
              <motion.div
                key={s.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:border-emerald-500/50 hover:shadow-md"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200 text-emerald-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-display font-black text-slate-200 group-hover:text-emerald-100 transition-colors duration-200 select-none">
                      {num}
                    </span>
                  </div>

                  <h3 className="mb-2 text-lg font-display font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mb-6 text-sm text-slate-600 leading-relaxed font-normal">
                    {s.description}
                  </p>
                </div>

                {/* Checklist with checkmarks */}
                <ul className="space-y-3 pt-4 border-t border-slate-100">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-xs font-semibold text-slate-700"
                    >
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <FaCheck className="w-2.5 h-2.5" />
                      </div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
