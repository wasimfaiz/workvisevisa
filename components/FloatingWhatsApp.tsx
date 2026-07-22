"use client";

import { FaWhatsapp } from "react-icons/fa6";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <a
        href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20would%20like%20to%20book%20a%20free%20consultation!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp +91 8130161603"
        className="group relative flex items-center gap-2.5 rounded-full bg-emerald-500 px-4.5 py-3.5 text-white shadow-2xl shadow-emerald-500/50 hover:bg-emerald-600 hover:scale-105 transition-all duration-200"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
        <FaWhatsapp className="relative z-10 w-6 h-6 text-white" />
        <span className="relative z-10 text-xs font-extrabold hidden sm:inline-block">
          Book Free Call on WhatsApp
        </span>
      </a>
    </div>
  );
}
