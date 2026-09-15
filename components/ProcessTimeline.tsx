"use client";

import { motion } from "motion/react";
import {
  FaComments,
  FaMagnifyingGlass,
  FaFolderOpen,
  FaPaperPlane,
  FaCircleCheck,
  FaPlane,
  FaClock,
} from "react-icons/fa6";
import { processSteps } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const iconMap: Record<string, React.ElementType> = {
  MessageCircle: FaComments,
  Search: FaMagnifyingGlass,
  FolderOpen: FaFolderOpen,
  Send: FaPaperPlane,
  CheckCircle: FaCircleCheck,
  Plane: FaPlane,
};

export default function ProcessTimeline() {
  const { currentLang } = useLanguage();
  const t = translations[currentLang]?.timeline || translations.en.timeline;

  return (
    <section
      id="process"
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
            <FaClock className="w-3.5 h-3.5" /> {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-slate-600 text-lg font-medium">
            {t.subtitle}
          </p>
        </motion.div>

        {/* timeline container */}
        <div className="relative">
          {/* connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[6%] right-[6%] h-[2px] bg-emerald-200" />

          {/* connecting line (Mobile) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-[27px] w-[2px] bg-emerald-200" />

          <div className="grid gap-8 lg:grid-cols-6 lg:gap-4">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.iconName] ?? FaCircleCheck;
              return (
                <motion.div
                  key={step.step}
                  className="group relative flex lg:flex-col items-start lg:items-center lg:text-center gap-5 lg:gap-0"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  {/* Step node icon */}
                  <div
                    className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-emerald-500 bg-white text-emerald-700 shadow-md lg:mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200"
                  >
                    <Icon className="w-6 h-6" />

                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-xs font-bold text-white shadow-sm">
                      0{step.step}
                    </span>
                  </div>

                  {/* Step content card */}
                  <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm transition-colors duration-200 group-hover:border-emerald-500/50 lg:w-full">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-2 border border-emerald-200">
                      {step.duration}
                    </span>
                    <h3 className="text-base font-display font-bold text-slate-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
