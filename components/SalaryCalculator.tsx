"use client";

import { useState } from "react";
import {
  FaCoins,
  FaArrowRight,
  FaWhatsapp,
  FaArrowTrendUp,
  FaPiggyBank,
  FaArrowRightArrowLeft,
  FaChartLine,
} from "react-icons/fa6";

interface CurrencyItem {
  code: string;
  displayName: string;
  country: string;
  flag: string;
  symbol: string;
  rateToINR: number;
  defaultAmount: number;
  minAmount: number;
  maxAmount: number;
  step: number;
  monthlyFoodEstimateINR: number;
  averageIndiaSalaryINR: number;
  popularTrades: Array<{
    title: string;
    amount: number;
  }>;
  visaHighlights: string[];
  guideUrl?: string;
}

const CURRENCIES: CurrencyItem[] = [
  {
    code: "AED",
    displayName: "United Arab Emirates Dirham",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    symbol: "AED",
    guideUrl: "/countries/uae",
    rateToINR: 22.9,
    defaultAmount: 2800,
    minAmount: 1200,
    maxAmount: 12000,
    step: 100,
    monthlyFoodEstimateINR: 7000,
    averageIndiaSalaryINR: 16000,
    popularTrades: [
      { title: "Hotel Staff", amount: 1800 },
      { title: "Electrician", amount: 2500 },
      { title: "Taxi Driver", amount: 3600 },
      { title: "Trailer Driver", amount: 4500 },
    ],
    visaHighlights: [
      "Free Company Accommodation Included",
      "Overtime Wages Under MOHRE Law",
      "Comprehensive Health Insurance Card",
    ],
  },
  {
    code: "SAR",
    displayName: "Saudi Riyal",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    symbol: "SAR",
    guideUrl: "/countries/saudi-arabia",
    rateToINR: 22.5,
    defaultAmount: 2600,
    minAmount: 1200,
    maxAmount: 12000,
    step: 100,
    monthlyFoodEstimateINR: 6500,
    averageIndiaSalaryINR: 15000,
    popularTrades: [
      { title: "Mason", amount: 1800 },
      { title: "Heavy Driver", amount: 2800 },
      { title: "6G Welder", amount: 3400 },
      { title: "Supervisor", amount: 4800 },
    ],
    visaHighlights: [
      "Direct Qiwa Digital Contract",
      "Free Furnished Bachelor Camp",
      "CCHI Health Cover & Travel Pass",
    ],
  },
  {
    code: "QAR",
    displayName: "Qatari Riyal",
    country: "Qatar",
    flag: "🇶🇦",
    symbol: "QAR",
    guideUrl: "/countries/qatar",
    rateToINR: 23.1,
    defaultAmount: 2500,
    minAmount: 1200,
    maxAmount: 12000,
    step: 100,
    monthlyFoodEstimateINR: 6500,
    averageIndiaSalaryINR: 16000,
    popularTrades: [
      { title: "General Worker", amount: 1500 },
      { title: "Pipe Fitter", amount: 2300 },
      { title: "Crane Operator", amount: 3200 },
      { title: "Safety Officer", amount: 4200 },
    ],
    visaHighlights: [
      "QVC Biometric Verification Cleared",
      "Fixed 300 QAR Food Allowance",
      "Free AC Housing & Utilities",
    ],
  },
  {
    code: "OMR",
    displayName: "Omani Rial",
    country: "Oman",
    flag: "🇴🇲",
    symbol: "OMR",
    guideUrl: "/countries/oman",
    rateToINR: 218.5,
    defaultAmount: 260,
    minAmount: 120,
    maxAmount: 1200,
    step: 10,
    monthlyFoodEstimateINR: 6500,
    averageIndiaSalaryINR: 15000,
    popularTrades: [
      { title: "Maintenance", amount: 180 },
      { title: "Electrician", amount: 250 },
      { title: "Heavy Driver", amount: 340 },
      { title: "Foreman", amount: 450 },
    ],
    visaHighlights: [
      "High Value Currency (1 OMR ≈ ₹218)",
      "Free Return Flight Tickets",
      "Company Medical & Living Facilities",
    ],
  },
  {
    code: "KWD",
    displayName: "Kuwaiti Dinar",
    country: "Kuwait",
    flag: "🇰🇼",
    symbol: "KWD",
    guideUrl: "/blogs/kuwait-work-visa-reopening-labor-law-reforms-degree-attestation-2026",
    rateToINR: 274.5,
    defaultAmount: 220,
    minAmount: 100,
    maxAmount: 1000,
    step: 10,
    monthlyFoodEstimateINR: 7000,
    averageIndiaSalaryINR: 15000,
    popularTrades: [
      { title: "Construction", amount: 160 },
      { title: "Electrician", amount: 230 },
      { title: "Trailer Driver", amount: 300 },
      { title: "Foreman", amount: 420 },
    ],
    visaHighlights: [
      "World's Highest Currency Value (1 KWD ≈ ₹274)",
      "Direct Kuwait PAM Verified Work Visa",
      "Free Bachelor Camp & Medical Support",
    ],
  },
  {
    code: "BHD",
    displayName: "Bahraini Dinar",
    country: "Bahrain",
    flag: "🇧🇭",
    symbol: "BHD",
    guideUrl: "/countries/bahrain",
    rateToINR: 223.0,
    defaultAmount: 250,
    minAmount: 120,
    maxAmount: 1000,
    step: 10,
    monthlyFoodEstimateINR: 6500,
    averageIndiaSalaryINR: 15000,
    popularTrades: [
      { title: "Fabricator", amount: 220 },
      { title: "Heavy Driver", amount: 300 },
      { title: "Storekeeper", amount: 360 },
      { title: "Supervisor", amount: 450 },
    ],
    visaHighlights: [
      "LMRA Registered Work Permit",
      "Free Bachelor Accommodation",
      "Comprehensive State Healthcare",
    ],
  },
  {
    code: "EUR",
    displayName: "Euro",
    country: "Europe",
    flag: "🇪🇺",
    symbol: "€",
    guideUrl: "/countries/germany",
    rateToINR: 91.2,
    defaultAmount: 1250,
    minAmount: 800,
    maxAmount: 4000,
    step: 50,
    monthlyFoodEstimateINR: 12000,
    averageIndiaSalaryINR: 20000,
    popularTrades: [
      { title: "Warehouse", amount: 1050 },
      { title: "Forklift Driver", amount: 1250 },
      { title: "Welder", amount: 1500 },
      { title: "CNC Programmer", amount: 1850 },
    ],
    visaHighlights: [
      "Schengen Zone 29-Nation Mobility",
      "NFZ Free European Public Healthcare",
      "Overtime @ 1.5x Hourly Rate",
    ],
  },
  {
    code: "PLN",
    displayName: "Polish Zloty",
    country: "Poland",
    flag: "🇵🇱",
    symbol: "zł",
    rateToINR: 21.4,
    defaultAmount: 5200,
    minAmount: 3500,
    maxAmount: 16000,
    step: 100,
    monthlyFoodEstimateINR: 11000,
    averageIndiaSalaryINR: 20000,
    popularTrades: [
      { title: "Production Line", amount: 4200 },
      { title: "Warehouse Picker", amount: 5000 },
      { title: "Welder", amount: 6500 },
      { title: "Machine Operator", amount: 7800 },
    ],
    visaHighlights: [
      "Voivodeship Type A Government Work Permit",
      "Free or Subsidized Living Accommodation",
      "Legal Polish Work & Residence Permit",
    ],
  },
  {
    code: "GBP",
    displayName: "British Pound",
    country: "United Kingdom",
    flag: "🇬🇧",
    symbol: "£",
    rateToINR: 109.5,
    defaultAmount: 2000,
    minAmount: 1200,
    maxAmount: 6000,
    step: 50,
    monthlyFoodEstimateINR: 20000,
    averageIndiaSalaryINR: 30000,
    popularTrades: [
      { title: "Caregiver", amount: 1900 },
      { title: "Hospitality", amount: 2100 },
      { title: "HGV Driver", amount: 2800 },
      { title: "Technician", amount: 3200 },
    ],
    visaHighlights: [
      "UK Skilled Worker Visa Route",
      "NHS Comprehensive Health Cover",
      "Strong British Pound Remittance",
    ],
  },
  {
    code: "USD",
    displayName: "United States Dollar",
    country: "United States",
    flag: "🇺🇸",
    symbol: "$",
    rateToINR: 84.1,
    defaultAmount: 1800,
    minAmount: 1000,
    maxAmount: 8000,
    step: 50,
    monthlyFoodEstimateINR: 15000,
    averageIndiaSalaryINR: 25000,
    popularTrades: [
      { title: "Logistics", amount: 1600 },
      { title: "Fabrication Welder", amount: 2200 },
      { title: "Technician", amount: 2800 },
      { title: "Supervisor", amount: 3600 },
    ],
    visaHighlights: [
      "Global Benchmark Currency",
      "International Employment Protection",
      "Direct USD Bank Transfers",
    ],
  },
  {
    code: "INR",
    displayName: "Indian Rupee",
    country: "India",
    flag: "🇮🇳",
    symbol: "₹",
    rateToINR: 1.0,
    defaultAmount: 60000,
    minAmount: 15000,
    maxAmount: 300000,
    step: 1000,
    monthlyFoodEstimateINR: 5000,
    averageIndiaSalaryINR: 16000,
    popularTrades: [
      { title: "India Average", amount: 18000 },
      { title: "India Skilled", amount: 30000 },
      { title: "Gulf Equivalent", amount: 65000 },
      { title: "Europe Equivalent", amount: 120000 },
    ],
    visaHighlights: [
      "Domestic Currency Benchmark",
      "Zero Currency Conversion Loss",
      "Local Savings Standard",
    ],
  },
];

export default function SalaryCalculator() {
  const [fromCode, setFromCode] = useState<string>("AED");
  const [toCode, setToCode] = useState<string>("INR");
  const [fromAmount, setFromAmount] = useState<number | "">("");
  const fromCurr = CURRENCIES.find((c) => c.code === fromCode) || CURRENCIES[0];
  const toCurr = CURRENCIES.find((c) => c.code === toCode) || CURRENCIES[CURRENCIES.length - 1];

  // Live conversion formula: From -> INR -> To
  const numericAmount = typeof fromAmount === "number" ? fromAmount : 0;
  const valueInINR = numericAmount * fromCurr.rateToINR;
  const convertedToAmount = valueInINR / toCurr.rateToINR;
  const directExchangeRate = fromCurr.rateToINR / toCurr.rateToINR;

  // Swap currencies
  const handleSwap = () => {
    const prevFrom = fromCode;
    const prevTo = toCode;
    setFromCode(prevTo);
    setToCode(prevFrom);
    if (numericAmount > 0) {
      setFromAmount(Math.round(convertedToAmount));
    }
  };

  const handleFromChange = (newCode: string) => {
    setFromCode(newCode);
  };

  // Remittance & Savings calculations
  const isToINR = toCode === "INR";
  const primaryDisplayAmountINR = isToINR ? Math.round(convertedToAmount) : Math.round(valueInINR);
  const monthlyFoodCost = fromCurr.monthlyFoodEstimateINR || 7000;
  const estimatedNetSavingsMonthlyINR = Math.max(0, primaryDisplayAmountINR - monthlyFoodCost);
  const estimatedAnnualSavingsINR = estimatedNetSavingsMonthlyINR * 12;
  const multiplier = numericAmount > 0 ? (primaryDisplayAmountINR / (fromCurr.averageIndiaSalaryINR || 16000)).toFixed(1) : null;

  // WhatsApp Link
  const targetCountryName = fromCurr.code === "INR" ? toCurr.country : fromCurr.country;
  const whatsappMsgAmount = numericAmount > 0 ? `${fromCurr.symbol} ${numericAmount.toLocaleString()} (${toCurr.symbol} ${Math.round(convertedToAmount).toLocaleString()})` : fromCurr.country;
  const whatsappMessage = encodeURIComponent(
    `Hi WorkWise Visa! I used your Overseas Currency & Salary Calculator for ${targetCountryName}. Expected salary: ${whatsappMsgAmount}. Please check my eligibility for active vacancies!`
  );
  const whatsappUrl = `https://wa.me/918130161603?text=${whatsappMessage}`;

  return (
    <section id="salary-calculator" className="relative overflow-hidden bg-slate-50 py-10 sm:py-16 border-y border-slate-200/80">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-72 w-72 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/80 text-emerald-800 text-xs font-semibold mb-2.5 shadow-2xs">
            <FaArrowRightArrowLeft className="w-3 h-3 text-emerald-700" />
            <span>Live Foreign Exchange &amp; Salary Tool</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
            Overseas Currency &amp; Salary Calculator (in INR)
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Calculate your monthly in-hand earnings in Indian Rupees with real-time exchange rates and estimated family savings.
          </p>
        </div>

        {/* Main Converter Card - Optimized & Compact */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-lg shadow-slate-200/50">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-center">
            
            {/* LEFT COLUMN: CONVERTER BOX */}
            <div className="lg:col-span-7 space-y-3.5">
              
              <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 shadow-2xs space-y-3">
                
                {/* 1. FROM ROW */}
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1">
                    <span>From Currency / Salary:</span>
                    <span className="text-emerald-700 font-bold">{fromCurr.country}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    {/* Amount Input */}
                    <div className="relative flex-1">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-black text-emerald-700">
                        {fromCurr.symbol}
                      </span>
                      <input
                        type="number"
                        min={1}
                        placeholder="Enter salary amount..."
                        value={fromAmount}
                        onChange={(e) => {
                          const raw = e.target.value;
                          if (raw === "") {
                            setFromAmount("");
                            return;
                          }
                          const clean = raw.replace(/^0+(?=\d)/, "");
                          const val = Number(clean);
                          if (!isNaN(val)) {
                            setFromAmount(val);
                          }
                        }}
                        className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-lg font-extrabold text-slate-900 placeholder:text-slate-400 placeholder:font-normal placeholder:text-sm shadow-2xs focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>

                    {/* From Currency Selector Dropdown */}
                    <div className="sm:w-64 relative">
                      <select
                        value={fromCode}
                        onChange={(e) => handleFromChange(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-slate-300 bg-white py-2.5 pl-3.5 pr-8 text-xs sm:text-sm font-bold text-slate-900 shadow-2xs focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
                      >
                        {CURRENCIES.map((c) => (
                          <option key={c.code} value={c.code} className="bg-white text-slate-900 py-1">
                            {c.displayName}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SWAP BUTTON & LIVE RATE DIVIDER */}
                <div className="flex items-center justify-between py-0.5">
                  <div className="h-px flex-1 bg-slate-200" />
                  <button
                    onClick={handleSwap}
                    title="Swap Currencies"
                    className="mx-3 inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-bold text-slate-700 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50 transition-all hover:scale-105 active:scale-95 shadow-2xs cursor-pointer"
                  >
                    <FaArrowRightArrowLeft className="w-2.5 h-2.5 text-emerald-600" />
                    <span>Swap</span>
                  </button>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                {/* 2. TO ROW */}
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1">
                    <span>Converted In:</span>
                    <span className="text-teal-700 font-bold">{toCurr.country}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    {/* Converted Output Display */}
                    <div className="relative flex-1 rounded-xl border border-emerald-300/80 bg-emerald-50/70 py-2.5 pl-10 pr-3 shadow-2xs flex items-center min-h-[46px]">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-black text-emerald-700">
                        {toCurr.symbol}
                      </span>
                      {numericAmount > 0 ? (
                        <div className="text-lg font-black text-slate-900">
                          {convertedToAmount.toLocaleString(undefined, {
                            maximumFractionDigits: directExchangeRate < 1 ? 4 : 2,
                          })}
                        </div>
                      ) : (
                        <div className="text-sm font-semibold text-slate-400 italic">
                          Enter salary above
                        </div>
                      )}
                    </div>

                    {/* To Currency Selector Dropdown */}
                    <div className="sm:w-64 relative">
                      <select
                        value={toCode}
                        onChange={(e) => setToCode(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-slate-300 bg-white py-2.5 pl-3.5 pr-8 text-xs sm:text-sm font-bold text-slate-900 shadow-2xs focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
                      >
                        {CURRENCIES.map((c) => (
                          <option key={c.code} value={c.code} className="bg-white text-slate-900 py-1">
                            {c.displayName}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Exchange Rate Note */}
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <FaChartLine className="text-emerald-600 w-3 h-3" />
                    <span>
                      1 {fromCurr.symbol} = <strong className="text-emerald-700">{directExchangeRate.toFixed(directExchangeRate < 1 ? 4 : 2)} {toCurr.symbol}</strong>
                    </span>
                  </div>
                  <span>Live Mid-Market Exchange Rate</span>
                </div>
              </div>

              {/* 1-Click Popular Job Benchmarks */}
              {fromCurr.popularTrades && fromCurr.popularTrades.length > 0 && (
                <div className="flex items-center flex-wrap gap-1.5 pt-0.5">
                  <span className="text-[11px] font-bold text-slate-500 mr-1">
                    Quick Benchmarks:
                  </span>
                  {fromCurr.popularTrades.map((trade) => {
                    const isActive = fromAmount === trade.amount;
                    return (
                      <button
                        key={trade.title}
                        onClick={() => setFromAmount(trade.amount)}
                        className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                          isActive
                            ? "bg-emerald-100 text-emerald-900 border border-emerald-400 font-bold"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        <span>{trade.title}:</span>
                        <strong>{fromCurr.symbol} {trade.amount.toLocaleString()}</strong>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Contextual Link */}
              {fromCurr.guideUrl && (
                <div className="pt-0.5">
                  <a
                    href={fromCurr.guideUrl}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
                  >
                    <span>View Official {fromCurr.country} Visa &amp; Jobs Guide →</span>
                  </a>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: COMPACT HIGH-IMPACT RESULTS */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-emerald-200 bg-gradient-to-b from-white via-emerald-50/30 to-teal-50/20 p-5 sm:p-6 shadow-md shadow-emerald-500/5 space-y-4">
                
                {/* Income Multiplier Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 text-xs font-bold text-emerald-900">
                  <FaArrowTrendUp className="w-3 h-3 text-emerald-700" />
                  <span>
                    {multiplier ? `~${multiplier}x More Than Average India Salary` : "Live Real-Time Salary Conversion"}
                  </span>
                </div>

                {/* Primary Metric */}
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                    Gross Monthly Take-Home (INR)
                  </span>
                  <div className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight mt-0.5">
                    <span className="text-emerald-600">₹</span>
                    {numericAmount > 0 ? (
                      <>
                        {primaryDisplayAmountINR.toLocaleString("en-IN")}
                        <span className="text-xs sm:text-sm text-slate-500 font-normal ml-1.5">/ month</span>
                      </>
                    ) : (
                      <span className="text-slate-400 font-bold text-2xl sm:text-3xl ml-1">—</span>
                    )}
                  </div>
                </div>

                {/* Savings 2-Card Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                      <FaPiggyBank className="text-emerald-600 w-3 h-3" />
                      Monthly In-Hand Savings
                    </span>
                    <strong className="text-emerald-700 font-extrabold text-sm block mt-0.5">
                      {numericAmount > 0 ? `₹${estimatedNetSavingsMonthlyINR.toLocaleString("en-IN")}` : "—"}
                    </strong>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                      <FaCoins className="text-amber-600 w-3 h-3" />
                      1-Year Savings Potential
                    </span>
                    <strong className="text-amber-700 font-extrabold text-sm block mt-0.5">
                      {numericAmount > 0 ? `₹${(estimatedAnnualSavingsINR / 100000).toFixed(2)} Lakh` : "—"}
                    </strong>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <a
                    href="#consultation"
                    className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-center text-xs sm:text-sm font-bold text-white shadow-sm hover:from-emerald-500 hover:to-teal-500 transition-all cursor-pointer"
                  >
                    <span>Check Eligibility for {targetCountryName} Jobs</span>
                    <FaArrowRight className="w-3 h-3" />
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2 text-center text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-all cursor-pointer"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp with this Salary</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Destination Work Visa Portals: Direct High-Priority Internal Links for Fast Crawl & Indexing */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <span className="font-bold text-slate-800 shrink-0">
              Explore Official Destination Guides:
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-semibold text-emerald-700">
              <a href="/countries/uae" className="hover:underline">🇦🇪 UAE Guide</a>
              <span className="text-slate-300">•</span>
              <a href="/countries/saudi-arabia" className="hover:underline">🇸🇦 Saudi Arabia Guide</a>
              <span className="text-slate-300">•</span>
              <a href="/countries/qatar" className="hover:underline">🇶🇦 Qatar Guide</a>
              <span className="text-slate-300">•</span>
              <a href="/countries/oman" className="hover:underline">🇴🇲 Oman Guide</a>
              <span className="text-slate-300">•</span>
              <a href="/countries/bahrain" className="hover:underline">🇧🇭 Bahrain Guide</a>
              <span className="text-slate-300">•</span>
              <a href="/countries/germany" className="hover:underline">🇩🇪 Germany Guide</a>
              <span className="text-slate-300">•</span>
              <a
                href="/blogs/gcc-unified-tourist-visa-grand-tours-2026-rules-cross-border-jobs"
                className="text-teal-800 font-extrabold hover:underline"
              >
                🌟 GCC Grand Tours Visa 2026
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
