"use client";

import {
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLocationDot,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaYoutube,
  FaBuildingColumns,
} from "react-icons/fa6";

const quickLinks = [
  { label: "Track Application", href: "/track", highlight: true },
  { label: "Jobs & Openings", href: "/jobs" },
  { label: "Countries", href: "/countries" },
  { label: "Our Locations", href: "/locations" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Drop CV", href: "mailto:workwisevisa@gmail.com" },
];

const offices = [
  {
    city: "Noida (Corporate HQ)",
    href: "/locations/noida",
    address: "Urbtech Trade Centre, D-701 C, Sector 132, Noida, Uttar Pradesh 201304",
  },
  {
    city: "Patna (Regional Branch)",
    href: "/locations/patna",
    address: "6th floor office no 606, Varma Centre, Boring Rd Crossing, Sri Krishna Puri, Patna, Bihar 800001",
  },
];

const socials = [
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/workwisevisa/" },
  { label: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/workwisevisa/" },
  { label: "X (Twitter)", icon: FaXTwitter, href: "https://x.com/workwisevisa" },
  { label: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20would%20like%20to%20book%20a%20free%20consultation!" },
  { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/company/workwisevisa/" },
];

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { currentLang } = useLanguage();
  const t = translations[currentLang]?.footer || translations.en.footer;

  return (
    <footer className="relative border-t border-slate-200 bg-slate-50 text-slate-700 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo Image: /images/workwise_logo.png */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <a href="/" className="inline-block group">
                <img
                  src="/images/workwise_logo.png"
                  alt="WorkWise Visa Logo"
                  className="h-12 sm:h-14 md:h-16 max-w-[200px] sm:max-w-[230px] w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </a>
              <div className="mt-2 text-xs font-medium text-slate-600 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                <span>
                  A Unit of{" "}
                  <a
                    href="https://www.europass.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-extrabold text-slate-900 hover:text-emerald-700 underline decoration-slate-300 hover:decoration-emerald-600 underline-offset-2 transition-colors"
                  >
                    Europass Immigration Pvt Ltd
                  </a>
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-xs font-normal">
              {t.desc}
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-emerald-600 hover:border-emerald-400/50 hover:bg-emerald-50/50 transition-all shadow-xs"
                    aria-label={s.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h4 className="text-sm font-display font-bold text-slate-900 uppercase tracking-wider mb-5">
              {t.quickLinksHeading}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className={`text-sm transition-colors font-medium inline-flex items-center gap-1.5 ${
                      l.highlight
                        ? "text-emerald-600 font-bold hover:text-emerald-700"
                        : "text-slate-600 hover:text-emerald-600"
                    }`}
                  >
                    <span>{l.label}</span>
                    {l.highlight && (
                      <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 border border-emerald-300">
                        Live Status
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* offices */}
          <div>
            <h4 className="text-sm font-display font-bold text-slate-900 uppercase tracking-wider mb-5">
              {currentLang === "hi" ? "हमारे कार्यालय" : "Our Offices"}
            </h4>
            <ul className="space-y-4">
              {offices.map((o) => (
                <li key={o.city} className="flex items-start gap-2.5">
                  <FaLocationDot className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" />
                  <div>
                    <a
                      href={o.href}
                      className="text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{o.city}</span>
                      <span className="text-xs text-emerald-600 group-hover:translate-x-0.5 transition-transform">→</span>
                    </a>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed mt-0.5">{o.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-sm font-display font-bold text-slate-900 uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2.5">
                <FaPhone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="tel:+918130161603" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                  +91 81301 61603
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaWhatsapp className="w-4 h-4 text-emerald-600 shrink-0" />
                <a
                  href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20would%20like%20to%20book%20a%20free%20consultation!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium"
                >
                  WhatsApp: +91 81301 61603
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="mailto:workwisevisa@gmail.com" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                  workwisevisa@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaGlobe className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="#" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                  www.workwisevisa.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Authority Linking: Country Work Visa Hubs & Top Immigration Guides */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3.5">
            <h4 className="text-xs font-display font-extrabold text-slate-900 uppercase tracking-wider">
              {currentLang === "hi" ? "आधिकारिक देश कार्य वीज़ा गाइड्स" : "Official Overseas Work Visa Portals & Career Manuals"}
            </h4>
            <span className="text-[11px] text-slate-500 font-medium">
              Verified Government Compliance (MOHRE, Qiwa, QVC, LMRA, ROP &amp; Make it in Germany)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-600 font-medium">
            <a href="/countries/uae" className="hover:text-emerald-700 transition-colors">
              🇦🇪 UAE (Dubai) Work Visa
            </a>
            <span className="text-slate-300">•</span>
            <a href="/countries/saudi-arabia" className="hover:text-emerald-700 transition-colors">
              🇸🇦 Saudi Arabia Work Visa (Qiwa)
            </a>
            <span className="text-slate-300">•</span>
            <a href="/countries/qatar" className="hover:text-emerald-700 transition-colors">
              🇶🇦 Qatar Work Visa (QVC)
            </a>
            <span className="text-slate-300">•</span>
            <a href="/countries/oman" className="hover:text-emerald-700 transition-colors">
              🇴🇲 Oman Work Permit (ROP)
            </a>
            <span className="text-slate-300">•</span>
            <a href="/countries/bahrain" className="hover:text-emerald-700 transition-colors">
              🇧🇭 Bahrain LMRA Work Visa
            </a>
            <span className="text-slate-300">•</span>
            <a href="/countries/germany" className="hover:text-emerald-700 transition-colors">
              🇩🇪 Germany Opportunity Card
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="/blogs/gcc-unified-tourist-visa-grand-tours-2026-rules-cross-border-jobs"
              className="text-emerald-700 font-bold hover:underline"
            >
              🌟 GCC Grand Tours Unified Visa 2026 Manual
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="/blogs/luxembourg-work-visa-guide-2026-salaried-worker-adem-salaries-culture-guide"
              className="text-emerald-700 font-bold hover:underline"
            >
              🇱🇺 Luxembourg Work Visa 2026 Guide
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="/locations/noida"
              className="text-slate-900 font-bold hover:text-emerald-700 hover:underline transition-colors"
            >
              🏢 Noida Corporate HQ (Sector 132)
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="/locations/patna"
              className="text-slate-900 font-bold hover:text-emerald-700 hover:underline transition-colors"
            >
              🏢 Patna Regional Branch (Boring Rd)
            </a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-8">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} WorkWise Visa — A Unit of{" "}
            <a
              href="https://www.europass.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 font-bold hover:text-emerald-700 underline decoration-slate-300 hover:decoration-emerald-600 underline-offset-2 transition-colors"
            >
              Europass Immigration Pvt. Ltd.
            </a>{" "}
            All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500 font-medium">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
