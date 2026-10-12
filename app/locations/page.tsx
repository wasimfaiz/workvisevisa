import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { locationsList } from "@/data/locations";
import {
  FaLocationDot,
  FaBuilding,
  FaRoute,
  FaPhone,
  FaWhatsapp,
  FaArrowRight,
  FaStar,
  FaCheck,
  FaShieldHalved,
  FaUsers,
  FaPlaneDeparture,
} from "react-icons/fa6";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Our Locations & Branches in India | WorkWise Visa Network",
  description:
    "Explore WorkWise Visa branch offices and regional candidate service hubs across Bihar, Uttar Pradesh and Delhi NCR. Visit our Patna & Noida branches or apply online from Siwan, Gopalganj, Gorakhpur, Lucknow and more.",
  keywords: [
    "workwise visa branches",
    "visa consultancy locations india",
    "gulf job consultancy bihar up",
    "work visa office patna",
    "work visa office noida",
    "overseas recruitment hubs india",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations",
  },
  openGraph: {
    title: "Our Locations & Branches in India | WorkWise Visa Network",
    description:
      "Official branch offices and candidate hubs in Patna, Noida, Siwan, Gopalganj, Gorakhpur, Muzaffarpur, Lucknow & more.",
    url: "https://www.workwisevisa.com/locations",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/workwise_logo.png",
        width: 1200,
        height: 630,
        alt: "WorkWise Visa Office Network",
      },
    ],
  },
};

export default function LocationsHubPage() {
  const branchOffices = locationsList.filter((loc) => loc.isPhysicalBranch);
  const serviceAreas = locationsList.filter((loc) => !loc.isPhysicalBranch);

  const biharHubs = serviceAreas.filter((loc) => loc.state === "Bihar");
  const upHubs = serviceAreas.filter((loc) => loc.state === "Uttar Pradesh");

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 text-slate-800">
        {/* ========================================================= */}
        {/* HERO */}
        {/* ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-24 sm:pt-28 pb-16 sm:pb-20 border-b border-emerald-950/40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.2),rgba(255,255,255,0))]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-5">
              <FaLocationDot className="w-3.5 h-3.5 text-emerald-400" />
              <span>Pan-India Presence & Regional Assistance</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight max-w-4xl mx-auto">
              WorkWise Visa{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                Locations & Candidate Hubs
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
              Chahe aap hamare Patna ya Noida corporate office me aamne-saamne visit karein, ya Siwan, Gopalganj, Gorakhpur se 100% online apply karein — WorkWise Visa har candidate ko authentic Gulf & Europe opportunities provide karta hai.
            </p>

            {/* Quick Stat Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-slate-300">
              <div className="bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700 font-medium flex items-center gap-2">
                <FaBuilding className="text-emerald-400 w-4 h-4" />
                <span>2 Full-Fledged Walk-In Branches</span>
              </div>
              <div className="bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700 font-medium flex items-center gap-2">
                <FaUsers className="text-teal-400 w-4 h-4" />
                <span>10+ District Assistance Hubs</span>
              </div>
              <div className="bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700 font-medium flex items-center gap-2">
                <FaShieldHalved className="text-emerald-400 w-4 h-4" />
                <span>100% Direct Employer Demands</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 1: PHYSICAL BRANCH OFFICES */}
        {/* ========================================================= */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-600">
                  Walk-In Facilitation Centers
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                  Official Branch Offices
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Face-to-face counseling, client interviews aur direct document submission ke liye:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {branchOffices.map((branch) => (
                <div
                  key={branch.slug}
                  className="rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-300 hover:shadow-xl transition-all p-7 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                      <div>
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                          {branch.name === "Noida" ? "Corporate HQ • Delhi NCR" : "Regional Branch • Bihar"}
                        </span>
                        <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                          {branch.name} Office
                        </h3>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1">
                        <FaStar className="text-amber-500 fill-amber-500 w-3 h-3" /> 4.9 / 5
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                      {branch.districtIntro}
                    </p>

                    {branch.branchDetails && (
                      <div className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-700 bg-white p-4 rounded-2xl border border-slate-200/80">
                        <p className="flex items-start gap-2">
                          <FaLocationDot className="text-emerald-600 w-4 h-4 shrink-0 mt-0.5" />
                          <span>
                            <strong>Address:</strong> {branch.branchDetails.streetAddress},{" "}
                            {branch.branchDetails.city} - {branch.branchDetails.pincode}
                          </span>
                        </p>
                        <p className="flex items-center gap-2">
                          <FaPhone className="text-emerald-600 w-4 h-4 shrink-0" />
                          <span>
                            <strong>Call:</strong> {branch.branchDetails.phone}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                    <Link
                      href={`/locations/${branch.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs sm:text-sm shadow-md hover:from-emerald-500 hover:to-teal-500 transition-all"
                    >
                      <span>Explore {branch.name} Branch Details</span>
                      <FaArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={`https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20want%20to%20visit%20your%20${branch.name}%20office.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                    >
                      <FaWhatsapp className="w-4 h-4 text-emerald-600" />
                      <span>Book Appointment</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: REGIONAL CANDIDATE HUBS (BIHAR & UP) */}
        {/* ========================================================= */}
        <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-wider font-bold text-teal-600">
                Service Coverage & Assistance
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Regional Candidate Assistance Hubs
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                In shehron ke candidates ghar baithe 100% online verification le sakte hain aur final interviews ke liye nazdeeki center visit kar sakte hain:
              </p>
            </div>

            {/* Bihar Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
                <span className="text-lg font-black text-slate-900">
                  📍 Bihar Candidate Districts
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Connected to Patna Varma Centre
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {biharHubs.map((hub) => (
                  <Link
                    key={hub.slug}
                    href={`/locations/${hub.slug}`}
                    className="group rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                          {hub.name}
                        </h3>
                        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                          {hub.serviceAreaDetails?.distanceFromCity}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {hub.districtIntro}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                      <span>View Jobs & Guide</span>
                      <FaArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Uttar Pradesh Section */}
            <div>
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
                <span className="text-lg font-black text-slate-900">
                  📍 Uttar Pradesh Candidate Districts
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800">
                  Connected to Noida HQ & Patna Branch
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {upHubs.map((hub) => (
                  <Link
                    key={hub.slug}
                    href={`/locations/${hub.slug}`}
                    className="group rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                          {hub.name}
                        </h3>
                        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                          {hub.state}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {hub.districtIntro}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-600 group-hover:text-teal-700">
                      <span>View Jobs & Guide</span>
                      <FaArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* HOW OUR HYBRID NETWORK WORKS */}
        {/* ========================================================= */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-600">
                Transparent Process
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                How Our Regional Network Works For You
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Apply Online</h3>
                <p className="text-xs text-slate-600">
                  Apne shehar se direct WhatsApp par CV aur passport send karein.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Trade Test Slot</h3>
                <p className="text-xs text-slate-600">
                  Saudi Takamol aur client interview ke liye nazdeek center par slot booking.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="font-bold text-slate-900 mb-2">GAMCA & MOFA</h3>
                <p className="text-xs text-slate-600">
                  Approved GAMCA medical aur Delhi/Mumbai embassy se direct visa stamping.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Flight & Placement</h3>
                <p className="text-xs text-slate-600">
                  Patna, Lucknow ya Delhi Airport se direct company deployment flight.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
