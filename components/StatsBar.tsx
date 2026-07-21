"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { FaUsers, FaGlobe, FaChartLine, FaCalendarDays } from "react-icons/fa6";
import { stats } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Users: FaUsers,
  Globe: FaGlobe,
  TrendingUp: FaChartLine,
  CalendarDays: FaCalendarDays,
};

function useCounter(target: number, run: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start = 0;
    const t0 = performance.now();
    function tick(now: number) {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = Math.round(eased * target);
      if (v !== start) { start = v; setCount(v); }
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [run, target, duration]);
  return count;
}

function StatCard({
  value, suffix, label, iconName, index, run,
}: {
  value: number; suffix: string; label: string; iconName: string; index: number; run: boolean;
}) {
  const count = useCounter(value, run);
  const Icon = iconMap[iconName] ?? FaGlobe;

  return (
    <motion.div
      className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-slate-200/90 bg-white transition-all duration-200 hover:border-emerald-500/50 hover:shadow-xl shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={run ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 mb-5 text-emerald-700">
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-4xl sm:text-5xl font-display font-black text-slate-900 tabular-nums tracking-tight">
        {count}
        <span className="text-emerald-600">{suffix}</span>
      </span>
      <span className="mt-2 text-sm text-slate-600 font-bold">{label}</span>
    </motion.div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 md:py-24 overflow-hidden bg-slate-50">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <StatCard
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              iconName={s.iconName}
              index={i}
              run={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
