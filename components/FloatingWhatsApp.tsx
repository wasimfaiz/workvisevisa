"use client";

import { FaWhatsapp } from "react-icons/fa6";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20would%20like%20to%20book%20a%20free%20consultation!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp +91 8130161603"
        className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
        <FaWhatsapp className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </a>
    </div>
  );
}
