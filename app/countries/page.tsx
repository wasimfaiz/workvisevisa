"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { countries, Country } from "@/lib/data";
import {
  FaGlobe,
  FaClock,
  FaLocationDot,
  FaWandMagicSparkles,
  FaMagnifyingGlass,
  FaXmark,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
  FaCheck,
  FaBuildingColumns,
  FaCircleInfo,
  FaPassport,
  FaPlaneDeparture,
  FaBriefcase,
  FaMoneyBillWave,
  FaShield,
} from "react-icons/fa6";

const regions = [
  "All",
  "Gulf",
  "Schengen",
  "North America",
  "United Kingdom",
  "Russia & CIS",
];

const countryFaqs = [
  {
    q: "What is the difference between Gulf (UAE, Saudi, Qatar) and European (Germany, France) work permits?",
    a: "Gulf work permits (UAE, Saudi, Qatar) are typically employer-sponsored, fast-tracked in 2–4 weeks, and offer tax-free income with free company accommodation and food allowances. European visas (Germany, France) require skill equivalency or language basics, take 6–12 weeks, and offer permanent settlement pathways.",
  },
  {
    q: "What is the GAMCA Medical Test required for Gulf countries?",
    a: "GAMCA (Gulf Health Council) is a mandatory medical screening (blood tests, X-rays, physical fitness) required before visa stamping for Saudi Arabia, UAE, Qatar, Kuwait, and Oman. WorkWise Visa provides medical center appointment booking and clearance guidance.",
  },
  {
    q: "Do I need degree attestation for blue-collar or trade visa applications?",
    a: "Attestation is required for supervisory, engineering, and managerial visas. For trade roles (welders, drivers, masons), standard passport verification, police clearance (PCC), and trade test certificates are typically sufficient.",
  },
  {
    q: "Can I convert my GCC driving license when moving to Dubai or Saudi Arabia?",
    a: "Yes! Holders of valid GCC heavy vehicle licenses can fast-track their license transfer in Dubai, Abu Dhabi, or Riyadh with minimal refresher testing.",
  },
];

export default function CountriesPage() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const filteredCountries = countries.filter((c) => {
    const matchesRegion =
      activeRegion === "All" || c.region === activeRegion;
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.visaTypes.some((v) => v.toLowerCase().includes(searchQuery.toLowerCase())) ||
      c.popularRoles.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-slate-50 min-h-screen">
        {/* Page Hero Header */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-emerald-50/80 via-white to-slate-50 text-slate-900 border-b border-slate-200/80 shadow-xs overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-5 shadow-xs">
              <FaGlobe className="w-3.5 h-3.5 text-emerald-600" />
              Global Destinations & Work Permits
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              Work Visa Programs by Country
            </h1>
            
            <p className="mt-3 mx-auto max-w-3xl text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              Explore visa options, processing timelines, tax-free salary offers, and urgent trade role vacancies across 12+ top international destinations.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-2xl mx-auto relative">
              <div className="relative flex items-center">
                <FaMagnifyingGlass className="absolute left-4 w-4 h-4 text-emerald-600" />
                <input
                  type="text"
                  placeholder="Search by country, visa type (e.g. Work Permit), or role (e.g. Driver, Welder)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 shadow-md shadow-slate-200/40 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 text-slate-400 hover:text-slate-700"
                  >
                    <FaXmark className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Region Filter Tabs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setActiveRegion(reg)}
                  className={`rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeRegion === reg
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25"
                      : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Countries Grid Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
          {filteredCountries.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <p className="text-lg font-bold text-slate-700">
                No countries found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveRegion("All");
                }}
                className="mt-4 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-600 transition-colors"
              >
                Clear Search & Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCountries.map((country) => (
                <div
                  key={country.code}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-emerald-500/60 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                >
                  {/* Subtle Flag Overlay Watermark */}
                  <div className="absolute -right-4 -top-4 w-28 h-20 opacity-[0.05] group-hover:opacity-[0.12] transition-opacity duration-300 pointer-events-none select-none overflow-hidden rounded-2xl">
                    <img
                      src={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 p-1 group-hover:border-emerald-400 group-hover:bg-emerald-50/50 transition-all shadow-xs">
                          <img
                            src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                            alt={`${country.name} flag`}
                            className="h-7 w-10 object-cover rounded shadow-xs border border-slate-200/50"
                          />
                          <span className="text-[10px] font-black tracking-widest text-slate-700 uppercase mt-0.5 font-display">
                            {country.code}
                          </span>
                        </div>

                        <div>
                          <h2 className="font-display font-extrabold text-slate-900 text-xl leading-tight group-hover:text-emerald-700 transition-colors">
                            {country.name}
                          </h2>
                          <span className="inline-block mt-0.5 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                            {country.region}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {country.description}
                    </p>

                    {/* Timeline & Options */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-800">
                        <FaClock className="w-3 h-3 text-emerald-600" />
                        {country.processingTime}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                        <FaLocationDot className="w-3 h-3 text-teal-600" />
                        {country.visaTypes.length} Visa Options
                      </span>
                    </div>

                    {/* Visa Types Tags */}
                    <div className="mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Available Visa Categories:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {country.visaTypes.map((v) => (
                          <span
                            key={v}
                            className="rounded-lg bg-emerald-50/80 border border-emerald-200/80 px-2.5 py-1 text-xs font-bold text-emerald-900 shadow-2xs"
                          >
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Popular Roles */}
                    <div className="mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        In-Demand Trade Roles:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {country.popularRoles.map((r) => (
                          <span
                            key={r}
                            className="rounded-md bg-slate-100 border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700"
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedCountry(country)}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-emerald-600 transition-colors cursor-pointer"
                    >
                      <span>View Program Details</span>
                      <FaArrowRight className="w-3 h-3" />
                    </button>

                    <a
                      href={`https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20applying%20for%20a%20work%20visa%20in%20${encodeURIComponent(
                        country.name
                      )}!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm hover:bg-emerald-600 transition-colors shrink-0"
                      title={`Apply for ${country.name} via WhatsApp`}
                    >
                      <FaWhatsapp className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Country Visa FAQs */}
          <div className="mt-20 rounded-3xl bg-white p-8 sm:p-12 border border-slate-200/90 shadow-sm">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                <FaCircleInfo className="w-3.5 h-3.5 text-emerald-600" />
                Frequently Asked Questions
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                Overseas Visa & Destination FAQs
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {countryFaqs.map((faq, i) => (
                <div key={i} className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-start gap-2">
                    <span className="text-emerald-600">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal pl-5">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Consultation Banner */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Ready to Start Your Overseas Career Journey?
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Connect directly with our WorkWise Visa destination experts for employer matching, GAMCA medicals, document attestation, and embassy visa stamping.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20want%20to%20apply%20for%20an%20international%20work%20visa!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Start WhatsApp Visa Consultation</span>
                </a>
                <a
                  href="mailto:workwisevisa@gmail.com?subject=Country%20Visa%20Application%20Inquiry"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-800 border border-slate-700 px-6 py-3 text-sm font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
                >
                  <FaEnvelope className="w-4 h-4" />
                  <span>Email Application Resume</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Country Detail Modal */}
      {selectedCountry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl rounded-3xl bg-white p-6 sm:p-10 shadow-2xl my-8">
            <button
              onClick={() => setSelectedCountry(null)}
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <FaXmark className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <img
                src={`https://flagcdn.com/w80/${selectedCountry.code.toLowerCase()}.png`}
                alt={`${selectedCountry.name} flag`}
                className="h-8 w-12 object-cover rounded border border-slate-200 shadow-xs"
              />
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  {selectedCountry.region}
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 leading-tight">
                  {selectedCountry.name} Work Permit Program
                </h2>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
              {selectedCountry.description}
            </p>

            <div className="grid gap-4 sm:grid-cols-2 mb-6">
              <div className="rounded-2xl bg-emerald-50/80 border border-emerald-200 p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                  <FaClock className="w-4 h-4 text-emerald-600" />
                  Estimated Processing Time
                </div>
                <p className="text-lg font-extrabold text-emerald-950 font-display">
                  {selectedCountry.processingTime}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  <FaPassport className="w-4 h-4 text-teal-600" />
                  Visa Categories Handled
                </div>
                <p className="text-sm font-bold text-slate-900">
                  {selectedCountry.visaTypes.join(", ")}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <FaBriefcase className="w-4 h-4 text-emerald-600" />
                Popular Skilled & Trade Roles Vacancies
              </h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {selectedCountry.popularRoles.map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-2 rounded-xl bg-slate-100 border border-slate-200 px-3.5 py-2 text-xs font-bold text-slate-800"
                  >
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 text-white p-5 mb-8">
              <h4 className="font-bold text-emerald-400 text-sm mb-2 flex items-center gap-2">
                <FaShield className="w-4 h-4 text-emerald-400" />
                WorkWise Visa Sponsorship Package Guarantees:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span>• Verified employer work permit & contract audit</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>• Complete GAMCA medical & document attestation support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>• Free company accommodation & food/transport allowances (per contract)</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={`https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20want%20to%20apply%20for%20the%20${encodeURIComponent(
                  selectedCountry.name
                )}%20work%20permit%20program!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-emerald-500/25 hover:bg-emerald-400 transition-all"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Apply for {selectedCountry.name} on WhatsApp</span>
              </a>

              <button
                onClick={() => setSelectedCountry(null)}
                className="w-full sm:w-auto rounded-xl border border-slate-200 px-5 py-3 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
