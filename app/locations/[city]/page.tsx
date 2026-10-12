import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ConsultationForm from "@/components/ConsultationForm";
import {
  locationsList,
  getLocationBySlug,
  getAllLocationSlugs,
} from "@/data/locations";
import {
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaRoute,
  FaTrainSubway,
  FaShieldHalved,
  FaUserCheck,
  FaHandshake,
  FaFileContract,
  FaCheck,
  FaBriefcase,
  FaArrowRight,
  FaStar,
  FaBuildingUser,
  FaCircleQuestion,
  FaCarSide,
  FaMapPin,
  FaCompass,
  FaCity,
  FaPlaneDeparture,
  FaPassport,
} from "react-icons/fa6";

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    city: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) {
    return {
      title: "Location Not Found | WorkWise Visa",
    };
  }

  const canonicalUrl = `https://www.workwisevisa.com/locations/${location.slug}`;

  return {
    applicationName: "WorkWise Visa",
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: canonicalUrl,
      siteName: "WorkWise Visa",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/images/workwise_logo.png",
          width: 1200,
          height: 630,
          alt: `WorkWise Visa ${location.name} Office`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
      images: ["/images/workwise_logo.png"],
    },
  };
}

export default async function LocationCityPage({ params }: PageProps) {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    notFound();
  }

  const nearbyLocations = locationsList
    .filter((loc) => loc.slug !== location.slug)
    .slice(0, 4);

  // Schema generation
  const jsonLdSchema = location.isPhysicalBranch && location.branchDetails
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["EmploymentAgency", "LocalBusiness"],
            "@id": `https://www.workwisevisa.com/locations/${location.slug}#localbusiness`,
            name: `${location.branchDetails.officeName}`,
            legalName: "Europass Immigration Pvt Ltd",
            url: `https://www.workwisevisa.com/locations/${location.slug}`,
            logo: "https://www.workwisevisa.com/images/workwise_logo.png",
            image: "https://www.workwisevisa.com/images/workwise_logo.png",
            description: location.metaDescription,
            telephone: location.branchDetails.phone,
            email: location.branchDetails.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: location.branchDetails.streetAddress,
              addressLocality: location.branchDetails.city,
              addressRegion: location.branchDetails.state,
              postalCode: location.branchDetails.pincode,
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: location.branchDetails.geo.latitude,
              longitude: location.branchDetails.geo.longitude,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:30",
                closes: "18:30",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "380",
            },
            priceRange: "₹₹",
          },
        ],
      }
    : {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            name: `Overseas Work Visa & Recruitment Services in ${location.name}`,
            serviceType: "Employment Agency / Work Visa Consultancy",
            description: location.metaDescription,
            provider: {
              "@type": "EmploymentAgency",
              name: "WorkWise Visa (Europass Immigration Pvt Ltd)",
              url: "https://www.workwisevisa.com",
              telephone: "+918130161603",
              email: "workwisevisa@gmail.com",
            },
            areaServed: {
              "@type": "City",
              name: `${location.name}, ${location.state}`,
            },
          },
        ],
      };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <Navbar />

      <main className="min-h-screen bg-slate-50 text-slate-800">
        {/* ========================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-24 sm:pt-28 pb-16 sm:pb-24 border-b border-emerald-950/40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.22),rgba(255,255,255,0))]" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-6 font-medium">
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-emerald-400 transition-colors">
                Locations
              </Link>
              <span>/</span>
              <span className="text-emerald-400 font-semibold">{location.name}</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-5 shadow-inner">
                  <FaLocationDot className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{location.heroBadge}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
                  {location.isPhysicalBranch ? (
                    <>
                      Best Work Visa Consultancy in{" "}
                      <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                        {location.name}, {location.state}
                      </span>
                    </>
                  ) : (
                    <>
                      Overseas Work Visa & Gulf Jobs for Candidates in{" "}
                      <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                        {location.name} ({location.state})
                      </span>
                    </>
                  )}
                </h1>

                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  {location.districtIntro}
                </p>

                {/* Quick Trust Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60 font-medium">
                    <FaCheck className="text-emerald-400 w-3.5 h-3.5" /> 100% Verified Employer Demands
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60 font-medium">
                    <FaCheck className="text-emerald-400 w-3.5 h-3.5" /> Saudi Takamol & GAMCA Support
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60 font-medium">
                    <FaCheck className="text-emerald-400 w-3.5 h-3.5" /> Zero Unauthorized Sub-Agent
                  </span>
                </div>
              </div>

              {/* Right Side: Fast-Track Candidate Career & Visa Desk (Universal for all cities) */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-emerald-500/30 p-6 sm:p-7 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                          {location.name} Candidate Desk
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-white mt-1">
                        Fast-Track Visa Assistance
                      </h2>
                    </div>
                    <div className="flex items-center gap-1 bg-emerald-500/20 px-2.5 py-1 rounded-full text-emerald-300 text-xs font-bold border border-emerald-500/30">
                      <FaStar className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>4.9 / 5</span>
                    </div>
                  </div>

                  {/* Key Placement Highlights */}
                  <div className="mt-5 space-y-3.5 text-xs sm:text-sm">
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                      <span className="text-slate-400 font-medium">Top Destinations</span>
                      <span className="font-bold text-emerald-300">Saudi Arabia • UAE • Qatar • Europe</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                      <span className="text-slate-400 font-medium">Salary Range</span>
                      <span className="font-bold text-emerald-300">₹45,000 – ₹1,85,000 / mo</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                      <span className="text-slate-400 font-medium">Top Trades for {location.name}</span>
                      <span className="font-bold text-teal-300">
                        {location.inDemandTrades?.slice(0, 2).map((t) => t.category).join(" • ") || "Technical Trades • Drivers"}
                      </span>
                    </div>

                    {/* Candidate Protections */}
                    <div className="pt-2">
                      <p className="text-xs font-semibold text-slate-300 mb-2">
                        Candidate Facilities &amp; Protection:
                      </p>
                      <ul className="space-y-2 text-slate-300 text-xs">
                        <li className="flex items-center gap-2">
                          <FaCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>100% Online Document &amp; Passport Screening</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <FaCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>Genuine Company Demand &amp; eMigrate Clearance</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <FaCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>Takamol SVP &amp; GAMCA Medical Booking Support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <FaCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>Direct Flight Ticket &amp; Free Pre-Departure Guidance</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="mt-6 pt-5 border-t border-slate-800">
                    <a
                      href="#apply-form"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm shadow-md transition-all"
                    >
                      <span>Check Your Eligibility Online</span>
                      <FaArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* TRANSIT & MAP SECTION (If Branch) OR TRAVEL ROUTE (If Service Area) */}
        {/* ========================================================= */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {location.isPhysicalBranch && location.branchDetails ? (
              <div className="grid lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-emerald-600">
                      Easy Commute
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                      How to Reach {location.name} Branch
                    </h2>
                    <p className="text-sm text-slate-600 mt-2">
                      Local aur bahar se aane wale candidates ke liye transit guide:
                    </p>
                  </div>

                  <div className="space-y-4">
                    {location.branchDetails.transitPoints.map((tp, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                            <FaTrainSubway className="w-4 h-4 text-emerald-600" />
                            {tp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs font-semibold">
                            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                              {tp.distance}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                              {tp.time}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                          {tp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-slate-100">
                    <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="flex items-center gap-1.5">
                        <FaMapPin className="text-emerald-400" />
                        Google Maps Live Location: {location.name} Office
                      </span>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${location.branchDetails.mapQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline flex items-center gap-1"
                      >
                        Enlarge <FaArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                    <iframe
                      src={location.branchDetails.mapEmbedSrc}
                      width="100%"
                      height="380"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${location.name} Office Map`}
                      className="w-full h-[360px] sm:h-[400px]"
                    />
                  </div>
                </div>
              </div>
            ) : location.serviceAreaDetails ? (
              <div>
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <span className="text-xs uppercase tracking-wider font-bold text-teal-600">
                    Step-by-Step Guidance
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                    How Candidates from {location.name} Get Recruited
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 mt-2">
                    {location.name} ke candidates ke liye direct, transparent aur fraud-free process:
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {location.serviceAreaDetails.howCandidatesApply.map((step, idx) => (
                    <div
                      key={idx}
                      className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-lg flex items-center justify-center mb-4 shadow-md">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Transit Box */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 sm:p-8">
                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                        <FaRoute className="w-3.5 h-3.5" />
                        Travel Guide: {location.name} to Nearest Branch
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold">
                        Going from {location.name} to {location.serviceAreaDetails.nearestBranchName}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        <strong>Road Highway Route:</strong> {location.serviceAreaDetails.roadRoute}
                      </p>
                      <div className="mt-3">
                        <p className="text-xs font-semibold text-emerald-400 mb-1">
                          Recommended Trains / Bus Connectivity:
                        </p>
                        <ul className="text-xs text-slate-300 space-y-1">
                          {location.serviceAreaDetails.recommendedTrains.map((tr, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <FaTrainSubway className="w-3 h-3 text-emerald-400 shrink-0" />
                              <span>{tr}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 text-center">
                      <span className="text-xs text-slate-400">Total Travel Duration:</span>
                      <p className="text-2xl font-black text-emerald-400 mt-1">
                        {location.serviceAreaDetails.travelDuration}
                      </p>
                      <p className="text-xs text-slate-300 mt-1 mb-4">
                        Distance: {location.serviceAreaDetails.distanceFromCity}
                      </p>
                      <Link
                        href={`/locations/${location.serviceAreaDetails.nearestBranchSlug}`}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
                      >
                        <span>View Office Address & Google Map</span>
                        <FaArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {/* ========================================================= */}
        {/* IN-DEMAND TRADES & SALARY BENCHMARK */}
        {/* ========================================================= */}
        <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-600">
                Verified Vacancies
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                In-Demand Trades & Monthly Salaries for {location.name}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Gulf (Saudi, UAE, Qatar, Kuwait) aur Europe ke liye legal contract salary scales:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {location.inDemandTrades.map((trade, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                        Category {idx + 1}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                        {trade.category}
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-xs sm:text-sm border border-emerald-200 whitespace-nowrap">
                      {trade.monthlySalary}
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs font-semibold text-slate-500 mb-2">Key Job Roles:</p>
                    <div className="flex flex-wrap gap-2">
                      {trade.roles.map((r, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-400 block">Countries:</span>
                      <span className="font-semibold text-slate-700">{trade.countries}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Perks & OT:</span>
                      <span className="font-semibold text-emerald-600">{trade.overtime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* WHY CHOOSE WORKWISE VISA */}
        {/* ========================================================= */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-600">
                100% Genuine Recruitment
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Why Candidates in {location.name} Trust WorkWise Visa
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {location.whyChoosePoints.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
                    <FaShieldHalved className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CANDIDATE TESTIMONIALS */}
        {/* ========================================================= */}
        {location.testimonials && location.testimonials.length > 0 && (
          <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-600">
                  Real Success Stories
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                  Reviews from Candidates Connected to {location.name}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {location.testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1 text-amber-400 mb-3">
                        {[...Array(t.rating)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">{t.name}</h3>
                        <p className="text-xs text-slate-500">
                          {t.jobRole} • {t.destinationCountry}
                        </p>
                        <p className="text-[11px] text-emerald-600 font-semibold">
                          From: {t.cityOrDistrict}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                        {t.monthlySalary}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* APPLICATION FORM SECTION */}
        {/* ========================================================= */}
        <section id="apply-form" className="py-16 sm:py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-600">
                Direct Application
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Apply for Overseas Jobs from {location.name}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Apna trade aur contact details bharein. Hamari team 24 ghante ke andar aapse direct contact karegi.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 sm:p-10 shadow-xl">
              <ConsultationForm />
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* LOCAL FAQS */}
        {/* ========================================================= */}
        <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Frequently Asked Questions
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                FAQs for Candidates in {location.name}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Detailed answers to key queries on government compliance,
                medical requirements, document attestations, and overseas
                employment security:
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {location.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-slate-50/60 p-6"
                >
                  <h3 className="text-base font-bold text-slate-900">
                    {idx + 1}. {faq.q}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
