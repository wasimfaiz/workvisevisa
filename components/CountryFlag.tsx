"use client";

import React, { useState } from "react";

// Standard ISO code normalizer map for common inputs
const CODE_MAP: Record<string, string> = {
  uae: "ae",
  dubai: "ae",
  "united arab emirates": "ae",
  sa: "sa",
  ksa: "sa",
  "saudi arabia": "sa",
  qa: "qa",
  qatar: "qa",
  om: "om",
  oman: "om",
  kw: "kw",
  kuwait: "kw",
  bh: "bh",
  bahrain: "bh",
  in: "in",
  india: "in",
  pk: "pk",
  pakistan: "pk",
  np: "np",
  nepal: "np",
  bd: "bd",
  bangladesh: "bd",
  de: "de",
  germany: "de",
  fr: "fr",
  france: "fr",
  uk: "gb",
  gb: "gb",
  "united kingdom": "gb",
  us: "us",
  usa: "us",
  "united states": "us",
  ca: "ca",
  can: "ca",
  canada: "ca",
  au: "au",
  australia: "au",
  ru: "ru",
  russia: "ru",
  pl: "pl",
  poland: "pl",
  ro: "ro",
  romania: "ro",
  hr: "hr",
  croatia: "hr",
  hu: "hu",
  hungary: "hu",
  mt: "mt",
  malta: "mt",
  cz: "cz",
  "czech republic": "cz",
  it: "it",
  italy: "it",
  es: "es",
  spain: "es",
};

interface CountryFlagProps {
  code?: string;
  countryName?: string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  showCode?: boolean;
}

const SIZE_CLASSES = {
  xs: "w-4 h-2.5 rounded-[2px]",
  sm: "w-5 h-3.5 rounded-[3px]",
  md: "w-6 h-4 rounded-[3px]",
  lg: "w-8 h-5 rounded-[4px]",
  xl: "w-10 h-6 rounded-md",
};

export default function CountryFlag({
  code,
  countryName,
  className = "",
  size = "md",
  showCode = false,
}: CountryFlagProps) {
  const [hasError, setHasError] = useState(false);

  // Normalize code
  const raw = (code || countryName || "").toLowerCase().trim();
  const isoCode = CODE_MAP[raw] || (raw.length === 2 ? raw : "un");

  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;

  if (hasError || !isoCode || isoCode === "un") {
    return (
      <span
        className={`inline-flex items-center justify-center bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-600 uppercase ${sizeClass} ${className}`}
        title={countryName || code}
      >
        {isoCode !== "un" ? isoCode.toUpperCase() : "🌐"}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 shrink-0 ${className}`}>
      <img
        src={`https://flagcdn.com/w80/${isoCode}.png`}
        alt={`${countryName || code || "Country"} Flag`}
        loading="lazy"
        onError={() => setHasError(true)}
        className={`object-cover border border-slate-200/80 shadow-xs ${sizeClass}`}
      />
      {showCode && (
        <span className="text-[10px] font-black uppercase tracking-wider text-slate-700 font-mono">
          {isoCode.toUpperCase()}
        </span>
      )}
    </span>
  );
}
