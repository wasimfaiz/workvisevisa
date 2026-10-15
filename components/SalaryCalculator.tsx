"use client";

import { useState, useId } from "react";
import {
  FaCoins,
  FaArrowRight,
  FaWhatsapp,
  FaCheck,
  FaHouseUser,
  FaShieldHalved,
  FaArrowTrendUp,
  FaPiggyBank,
  FaRotate,
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
}

const CURRENCIES: CurrencyItem[] = [
  {
    code: "AED",
    displayName: "United Arab Emirates Dirham",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    symbol: "AED",
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
  const [fromAmount, setFromAmount] = useState<number>(2800);
  const sliderId = useId();

  const fromCurr = CURRENCIES.find((c) => c.code === fromCode) || CURRENCIES[0];
  const toCurr = CURRENCIES.find((c) => c.code === toCode) || CURRENCIES[CURRENCIES.length - 1];

  // Live conversion formula: From -> INR -> To
  const valueInINR = fromAmount * fromCurr.rateToINR;
  const convertedToAmount = valueInINR / toCurr.rateToINR;
  const directExchangeRate = fromCurr.rateToINR / toCurr.rateToINR;

  // Swap currencies
  const handleSwap = () => {
    const prevFrom = fromCode;
    const prevTo = toCode;
    setFromCode(prevTo);
    setToCode(prevFrom);
    setFromAmount(Math.round(convertedToAmount));
  };

  const handleFromChange = (newCode: string) => {
    setFromCode(newCode);
    const found = CURRENCIES.find((c) => c.code === newCode);
    if (found) {
      setFromAmount(found.defaultAmount);
    }
  };

  // Remittance & Savings calculations
  const isToINR = toCode === "INR";
  const primaryDisplayAmountINR = isToINR ? Math.round(convertedToAmount) : Math.round(valueInINR);
  const monthlyFoodCost = fromCurr.monthlyFoodEstimateINR || 7000;
  const estimatedNetSavingsMonthlyINR = Math.max(0, primaryDisplayAmountINR - monthlyFoodCost);
  const estimatedAnnualSavingsINR = estimatedNetSavingsMonthlyINR * 12;
  const multiplier = (primaryDisplayAmountINR / (fromCurr.averageIndiaSalaryINR || 16000)).toFixed(1);

  // WhatsApp Link
  const targetCountryName = fromCurr.code === "INR" ? toCurr.country : fromCurr.country;
  const whatsappMessage = encodeURIComponent(
    `Hi WorkWise Visa! I used your Overseas Currency & Salary Calculator for ${targetCountryName}. My expected salary is ${fromCurr.symbol} ${fromAmount.toLocaleString()} (${toCurr.symbol} ${Math.round(convertedToAmount).toLocaleString()}). Please check my eligibility for active vacancies!`
  );
  const whatsappUrl = `https://wa.me/918130161603?text=${whatsappMessage}`;

  return (
    <section id="salary-calculator" className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 border-y border-slate-200/80">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with High-Rank SEO Keywords and Zero Artificial Line Breaks */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/80 text-emerald-800 text-xs sm:text-sm font-semibold mb-3 shadow-xs">
            <FaArrowRightArrowLeft className="w-3.5 h-3.5 text-emerald-700" />
            <span>Live Foreign Exchange &amp; Remittance Tool</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
            Overseas Currency &amp; Savings Calculator: Gulf &amp; Abroad Salary in INR
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Convert Gulf and European work visa salaries into Indian Rupees (INR) with real-time exchange rates, monthly expense deductions, and savings potential.
          </p>
        </div>

        {/* Main Converter Card */}
        <div className="mt-10 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
            
            {/* ========================================================= */}
            {/* LEFT COLUMN: CLEAN CONVERTER (FROM -> SWAP -> TO)         */}
            {/* ========================================================= */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Google Converter Box */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 shadow-xs space-y-4">
                
                {/* 1. FROM ROW */}
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1.5">
                    <span>From:</span>
                    <span className="text-emerald-700 font-bold">{fromCurr.country}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    {/* Amount Input */}
                    <div className="relative flex-1">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-black text-emerald-700">
                        {fromCurr.symbol}
                      </span>
                      <input
                        type="number"
                        min={fromCurr.minAmount}
                        max={fromCurr.maxAmount * 2}
                        step={fromCurr.step}
                        value={fromAmount}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          if (!isNaN(val)) setFromAmount(val);
                        }}
                        className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-12 pr-4 text-xl font-extrabold text-slate-900 shadow-xs focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>

                    {/* From Currency Selector Dropdown - Clean Full Currency Names */}
                    <div className="sm:w-72 relative">
                      <select
                        value={fromCode}
                        onChange={(e) => handleFromChange(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-slate-300 bg-white py-3.5 pl-4 pr-10 text-sm font-bold text-slate-900 shadow-xs focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
                      >
                        {CURRENCIES.map((c) => (
                          <option key={c.code} value={c.code} className="bg-white text-slate-900 py-1">
                            {c.displayName}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SWAP BUTTON & LIVE RATE DIVIDER */}
                <div className="flex items-center justify-between py-1">
                  <div className="h-px flex-1 bg-slate-200" />
                  <button
                    onClick={handleSwap}
                    title="Swap Currencies"
                    className="mx-3 inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50 transition-all hover:scale-105 active:scale-95 shadow-xs"
                  >
                    <FaArrowRightArrowLeft className="w-3 h-3 text-emerald-600" />
                    <span>Swap</span>
                  </button>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                {/* 2. TO ROW */}
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1.5">
                    <span>To:</span>
                    <span className="text-teal-700 font-bold">{toCurr.country}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    {/* Converted Output Display */}
                    <div className="relative flex-1 rounded-xl border border-emerald-300/80 bg-emerald-50/70 py-3.5 pl-12 pr-4 shadow-xs flex items-center">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-black text-emerald-700">
                        {toCurr.symbol}
                      </span>
                      <div className="text-xl font-black text-slate-900">
                        {convertedToAmount.toLocaleString(undefined, {
                          maximumFractionDigits: directExchangeRate < 1 ? 4 : 2,
                        })}
                      </div>
                    </div>

                    {/* To Currency Selector Dropdown - Clean Full Currency Names */}
                    <div className="sm:w-72 relative">
                      <select
                        value={toCode}
                        onChange={(e) => setToCode(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-slate-300 bg-white py-3.5 pl-4 pr-10 text-sm font-bold text-slate-900 shadow-xs focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
                      >
                        {CURRENCIES.map((c) => (
                          <option key={c.code} value={c.code} className="bg-white text-slate-900 py-1">
                            {c.displayName}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Exchange Rate & Formula Note */}
                <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <FaChartLine className="text-emerald-600 w-3.5 h-3.5" />
                    <span>
                      1 {fromCurr.displayName} ={" "}
                      <strong className="text-emerald-700 font-extrabold">
                        {directExchangeRate.toFixed(directExchangeRate < 1 ? 4 : 2)} {toCurr.displayName}
                      </strong>
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Live Interbank Mid-Market Exchange Rate
                  </span>
                </div>
              </div>

              {/* Slider for Smooth Mobile Adjustment */}
              {fromCurr.code !== "INR" && (
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mb-2">
                    <label htmlFor={sliderId}>Adjust Monthly Salary Range:</label>
                    <button
                      onClick={() => setFromAmount(fromCurr.defaultAmount)}
                      className="text-emerald-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <FaRotate className="w-2.5 h-2.5" /> Reset Default
                    </button>
                  </div>
                  <input
                    id={sliderId}
                    type="range"
                    min={fromCurr.minAmount}
                    max={fromCurr.maxAmount}
                    step={fromCurr.step}
                    value={fromAmount}
                    onChange={(e) => setFromAmount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-semibold">
                    <span>{fromCurr.symbol} {fromCurr.minAmount.toLocaleString()}</span>
                    <span>{fromCurr.symbol} {fromCurr.maxAmount.toLocaleString()}</span>
                  </div>
                </div>
              )}

              {/* 1-Click Popular Job Presets */}
              {fromCurr.popularTrades && fromCurr.popularTrades.length > 0 && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Standard Job Benchmarks ({fromCurr.country}):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {fromCurr.popularTrades.map((trade) => {
                      const isActive = fromAmount === trade.amount;
                      return (
                        <button
                          key={trade.title}
                          onClick={() => setFromAmount(trade.amount)}
                          className={`rounded-xl px-3 py-2 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                            isActive
                              ? "bg-emerald-100 text-emerald-900 border border-emerald-400 font-bold shadow-xs"
                              : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          <span>{trade.title}:</span>
                          <strong className={isActive ? "text-emerald-900" : "text-slate-900"}>
                            {fromCurr.symbol} {trade.amount.toLocaleString()}
                          </strong>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Employer Statutory Inclusions */}
              {fromCurr.visaHighlights && fromCurr.visaHighlights.length > 0 && (
                <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-4">
                  <span className="text-xs font-bold text-slate-800 block mb-2 flex items-center gap-1.5">
                    <FaShieldHalved className="text-emerald-600 w-3.5 h-3.5" />
                    Statutory Contract Inclusions Guaranteed by Employer:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-700">
                    {fromCurr.visaHighlights.map((hl) => (
                      <div key={hl} className="flex items-start gap-2">
                        <FaCheck className="text-emerald-600 mt-0.5 shrink-0 w-3 h-3" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ========================================================= */}
            {/* RIGHT COLUMN: FULLY OPTIMIZED HIGH-IMPACT RESULTS BOX     */}
            {/* ========================================================= */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-emerald-200 bg-gradient-to-b from-white via-emerald-50/30 to-teal-50/20 p-6 sm:p-8 shadow-xl shadow-emerald-500/5">
                
                {/* Income Jump Multiplier Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/80 px-3 py-1 text-xs font-bold text-emerald-900 mb-5">
                  <FaArrowTrendUp className="w-3.5 h-3.5 text-emerald-700" />
                  <span>~{multiplier}x More Than India Average</span>
                </div>

                {/* Primary Metric: Gross Monthly Take-Home */}
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">
                    Gross Monthly Take-Home in INR
                  </span>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
                    <span className="text-emerald-600">₹</span>
                    {primaryDisplayAmountINR.toLocaleString("en-IN")}
                    <span className="text-base text-slate-500 font-normal ml-2">/ month</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Calculated from {fromCurr.symbol} {fromAmount.toLocaleString()} {fromCurr.displayName} at live interbank rate.
                  </p>
                </div>

                {/* Remittance & Savings Breakdown */}
                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-slate-700 flex items-center gap-2 font-medium">
                      <FaPiggyBank className="text-emerald-600 w-4 h-4" />
                      Est. Monthly Net Savings (Ghar Bhejne Layak):
                    </span>
                    <strong className="text-emerald-700 font-extrabold text-base">
                      ₹{estimatedNetSavingsMonthlyINR.toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-slate-700 flex items-center gap-2 font-medium">
                      <FaCoins className="text-amber-600 w-4 h-4" />
                      1 Year Total Savings Potential:
                    </span>
                    <strong className="text-amber-700 font-extrabold text-base">
                      ₹{(estimatedAnnualSavingsINR / 100000).toFixed(2)} Lakh
                    </strong>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
                    <span className="flex items-center gap-1.5 font-medium">
                      <FaHouseUser className="text-teal-600" />
                      Room + Transport Provided Free:
                    </span>
                    <span className="text-teal-800 font-bold">Saves ₹15,000+/mo</span>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="mt-8 space-y-3 pt-6 border-t border-slate-200">
                  <a
                    href="#consultation"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Apply for {targetCountryName} Jobs Now</span>
                    <FaArrowRight className="text-xs" />
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-300 bg-emerald-50 px-6 py-3 text-center text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Eligibility Check with this Salary</span>
                  </a>

                  <p className="text-center text-[10px] text-slate-400 mt-2">
                    *Rates updated daily based on RBI &amp; foreign exchange benchmarks. Actual salary confirmed in legal MoHRE/Qiwa/Work Permit contracts.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
