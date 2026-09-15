"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { FaBars, FaXmark, FaEnvelope } from "react-icons/fa6";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { currentLang } = useLanguage();
  const { scrollY } = useScroll();

  const t = translations[currentLang]?.nav || translations.en.nav;

  const navLinks = [
    { label: t.countries, href: "/countries" },
    { label: t.services, href: "/#services" },
    { label: t.industries, href: "/#industries" },
    { label: t.whyUs, href: "/#why-us" },
    { label: t.aboutUs, href: "/about" },
    { label: t.blogs, href: "/blogs" },
  ];

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
        className={`fixed top-0 inset-x-0 z-50 h-16 sm:h-20 flex items-center transition-all duration-300 ${
          isSolidNav
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Image: /workwise_logo.png */}
          <a href="/#hero" onClick={(e) => scrollTo(e, "/#hero")} className="flex items-center group notranslate shrink-0" translate="no">
            <img
              src="/workwise_logo.png"
              alt="WorkWise Visa Logo"
              className="h-12 sm:h-16 max-w-[280px] sm:max-w-[340px] w-auto object-contain group-hover:scale-[1.03] transition-transform duration-200"
            />
          </a>

          {/* desktop links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                className="relative text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors duration-200 group whitespace-nowrap"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-600 group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* desktop CTA & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <div className="notranslate" translate="no">
              <LanguageSwitcher />
            </div>
            <a
              href="mailto:workwisevisa@gmail.com?subject=CV%20Submission%20-%20WorkWise%20Visa&body=Hi%20WorkWise%20Visa%20Team,%0A%0AI%20am%20interested%20in%20job%20opportunities%20abroad.%20Please%20find%20my%20attached%20CV.%0A%0AName:%0APhone:%0APreferred%20Country:"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
            >
              <FaEnvelope className="w-4 h-4" />
              {t.dropCv}
            </a>
          </div>

          {/* mobile toggle & Language Switcher */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="notranslate" translate="no">
              <LanguageSwitcher />
            </div>
            <button
              className="p-2 text-slate-800"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <FaXmark className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-white/98 text-slate-900 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-2 notranslate" translate="no">
              <LanguageSwitcher />
            </div>
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
              href="mailto:workwisevisa@gmail.com?subject=CV%20Submission%20-%20WorkWise%20Visa&body=Hi%20WorkWise%20Visa%20Team,%0A%0AI%20am%20interested%20in%20job%20opportunities%20abroad.%20Please%20find%20my%20attached%20CV.%0A%0AName:%0APhone:%0APreferred%20Country:"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-3.5 text-lg font-bold text-white shadow-lg shadow-emerald-600/25"
            >
              <FaEnvelope className="w-5 h-5" />
              {t.dropCv}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
