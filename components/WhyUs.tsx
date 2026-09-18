"use client";

import { motion } from "motion/react";
import {
  FaShieldHalved,
  FaMoneyBillWave,
  FaUserCheck,
  FaBolt,
  FaAward,
  FaChartLine,
  FaCheckDouble,
} from "react-icons/fa6";
import { whyUsPoints } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck: FaShieldHalved,
  BadgeDollarSign: FaMoneyBillWave,
  UserCheck: FaUserCheck,
  Zap: FaBolt,
  Award: FaAward,
  Activity: FaChartLine,
};

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative py-24 md:py-32 overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0 section-alt pointer-events-none" />

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
            <FaCheckDouble className="w-3.5 h-3.5" /> Proven Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Why Professionals Choose WorkWise
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-slate-600 text-lg font-medium">
            Built from the ground up for total transparency, speed, and uncompromised visa approval success rates.
          </p>
        </motion.div>

        {/* 6 bento-style cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsPoints.map((p, i) => {
            const Icon = iconMap[p.iconName] ?? FaShieldHalved;
            const num = String(i + 1).padStart(2, "0");

            return (
              <motion.div
                key={p.title}
                className="group relative rounded-2xl border border-slate-200/90 bg-white p-8 transition-all duration-200 hover:border-emerald-500/50 hover:shadow-xl overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-4xl font-display font-black text-slate-200 group-hover:text-emerald-100 transition-colors select-none">
                    {num}
                  </span>
                </div>

                <h3 className="mb-2.5 text-xl font-display font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
