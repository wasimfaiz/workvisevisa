"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { FaBars, FaXmark } from "react-icons/fa6";

const navLinks = [
  { label: "Countries", href: "/#countries" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Process", href: "/#process" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const hash = href.replace("/", "");
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isSolidNav = scrolled || pathname !== "/";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isSolidNav
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-md"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Image: /workwise_logo.png */}
          <a href="/#hero" onClick={(e) => scrollTo(e, "/#hero")} className="flex items-center group">
            <img
              src="/workwise_logo.png"
              alt="WorkWise Visa Logo"
              className="h-10 sm:h-12 max-w-[220px] sm:max-w-[280px] w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          {/* desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                className="relative text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors duration-200 group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-600 group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* desktop CTA */}
          <a
            href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20would%20like%20to%20book%20a%20free%20consultation!"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Book Consultation
          </a>

          {/* mobile toggle */}
          <button
            className="md:hidden p-2 text-slate-800"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <FaXmark className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-white/98 text-slate-900 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                className="text-2xl font-display font-bold text-slate-800 hover:text-emerald-600"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20would%20like%20to%20book%20a%20free%20consultation!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3.5 text-lg font-bold text-white shadow-lg shadow-amber-500/25"
            >
              Book Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
