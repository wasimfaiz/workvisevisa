import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  FaCheck,
  FaArrowRight,
  FaWhatsapp,
  FaEnvelope,
  FaShieldHalved,
  FaBuildingColumns,
  FaBriefcase,
  FaClock,
  FaCalendarDays,
  FaMoneyBillWave,
  FaHospital,
  FaPlaneArrival,
  FaScaleUnbalanced,
  FaTriangleExclamation,
  FaMagnifyingGlass,
  FaLocationDot,
  FaCertificate,
  FaArrowTrendUp,
  FaWrench,
  FaHelmetSafety,
  FaGraduationCap,
  FaPassport,
  FaIndustry,
  FaGear,
  FaCar,
  FaTruckFast,
  FaAward,
  FaFileContract,
  FaUserTie,
  FaCoins,
  FaFingerprint,
  FaStethoscope,
  FaCircleCheck,
  FaCircleQuestion,
  FaCircleExclamation,
  FaLanguage,
  FaHouseUser,
  FaBan,
  FaBuilding,
  FaGlobe,
  FaPhone,
  FaFileLines,
  FaUtensils,
  FaBed,
  FaBus,
  FaUsers,
  FaIdCard,
  FaPiggyBank,
  FaCalculator,
} from "react-icons/fa6";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Croatia Work Visa & Jobs Guide 2026: Stay & Work Permit (MUP/HZZ), Schengen Rules & Salaries | WorkWise Visa",
  description:
    "Definitive 2026 statutory master guide to Croatia work visas for Indian skilled workers, 6G welders, heavy drivers, CNC machinists, construction trades & hospitality staff. Learn Stay & Work Permit (Dozvola za boravak i rad) approvals, HZZ shortage lists, Euro salaries, Schengen mobility, and legal consular deployment from India.",
  keywords: [
    "Croatia work visa 2026",
    "Croatia work visa for Indian citizens",
    "Croatia work permit process in India",
    "Croatia Stay and Work Permit Dozvola za boravak i rad",
    "Croatia MUP work permit approval",
    "HZZ labour market test Croatia",
    "Croatia shortage occupations list deficitarna zanimanja",
    "Croatia Schengen visa work rights 2026",
    "Croatia Embassy New Delhi Type D visa stamping",
    "VFS Croatia visa appointment India",
    "Croatia jobs for Indian welders masons drivers",
    "Croatia minimum wage 2026 EUR INR",
    "Cost of living Croatia vs monthly savings INR",
    "WorkWise Visa Croatia recruitment partner",
    "How to get work permit in Croatia from India",
    "Croatia EU Blue Card salary threshold 2026",
    "Zakon o strancima Croatia work permit amendments",
    "Croatia 3 year work permit rules 2026",
    "OIB number Croatia for foreign workers",
    "Porezna uprava Croatia tax rate",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/croatia`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Croatia Work Visa & Jobs Guide 2026: Stay & Work Permit (MUP/HZZ), Schengen Rules & Salaries | WorkWise Visa",
    description:
      "Comprehensive statutory manual for Indian professionals, skilled tradespeople, welders, CNC operators, heavy drivers, and hospitality staff migrating to the Republic of Croatia under the Foreigners Act (Zakon o strancima) and Schengen framework.",
    url: `${BASE_URL}/countries/croatia`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Croatia Work Visa & Employment Master Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Croatia Work Visa & Jobs Guide 2026: Stay & Work Permit (MUP/HZZ), Schengen Rules & Salaries | WorkWise Visa",
    description:
      "Complete 2026 Croatia work visa guide for Indian workers. Explore Stay & Work Permits (Dozvola za boravak i rad), HZZ shortage trades, Euro earnings, employer housing, and New Delhi Embassy consular stamping.",
    images: ["https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function CroatiaCountryPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE_URL}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Countries",
        item: `${BASE_URL}/countries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Croatia",
        item: `${BASE_URL}/countries/croatia`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Croatia Work Visa & Skilled Employment Guide 2026: Stay and Work Permit (Dozvola za boravak i rad), HZZ Labour Market Test, Schengen Accession & Euro Wage Benchmarks",
    description:
      "Authoritative statutory manual for Indian workers, industrial technicians, welders, and heavy drivers migrating to the Republic of Croatia under the Foreigners Act (Zakon o strancima) and Schengen rules.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    author: {
      "@type": "Organization",
      name: "WorkWise European Consular & Placement Desk",
      url: `${BASE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "WorkWise Visa",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/workwise_logo.webp`,
      },
    },
    datePublished: "2026-03-15T09:00:00+02:00",
    dateModified: "2026-10-26T00:00:00+02:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/countries/croatia`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Croatia Stay and Work Permit (Dozvola za boravak i rad) and how do Indian citizens qualify in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Stay and Work Permit (Dozvola za boravak i rad) is the official single statutory authorization issued by the Croatian Ministry of the Interior (MUP) in coordination with the Croatian Employment Service (HZZ) under the Foreigners Act (Zakon o strancima). Under recent statutory amendments, permits can be granted for up to 3 years for continuous contracts. To qualify, an Indian candidate must secure an authentic employment contract with a registered Croatian enterprise, clear the HZZ Labour Market Test (or belong to an occupational shortage trade), obtain a Croatian tax ID (OIB), and secure a National Long-Stay Type-D Visa from the Embassy of the Republic of Croatia in New Delhi.",
        },
      },
      {
        "@type": "Question",
        name: "Does a Croatian work permit allow free travel across the Schengen Area?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Republic of Croatia officially joined the Schengen Area on January 1, 2023. As a result, third-country nationals holding a valid Croatian National Type-D Visa or biometric Croatian Residence Card (Boravišna iskaznica) are legally entitled to travel freely without border checks across all 29 Schengen member states (including Germany, France, Italy, Austria, and Switzerland) for up to 90 days within any 180-day rolling window for tourism or family visits.",
        },
      },
      {
        "@type": "Question",
        name: "What is the statutory minimum wage and typical salary for Indian workers in Croatia in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In 2026, the gross statutory minimum wage in Croatia is approximately €840 per month. However, skilled trade roles command substantially higher remuneration: 6G pipe welders earn €1,250 to €1,850/month (₹1,14,000 to ₹1,68,000 INR), heavy commercial drivers earn €1,200 to €1,750/month, and civil construction trades (masons, carpenters, steel fixers) earn €950 to €1,450/month. Legitimate employers in Croatia must provide certified accommodation and subsidized meals under collective agreements.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Croatian Labour Market Test (Test tržišta rada) conducted by HZZ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Before an employer in Croatia can hire a non-EU worker, they must conduct a Labour Market Test through the Croatian Employment Service (HZZ) for 15 calendar days to verify if any domestic or EU job seeker is available. However, critical occupations on the official Shortage Occupations List (Deficitarna zanimanja)—such as welders, construction trades, commercial drivers, chefs, and IT specialists—are 100% exempt from this test, allowing fast-tracked work permit approvals.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to process a Croatian work permit and Type-D visa from India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The complete deployment pipeline typically spans 8 to 12 weeks: 3 to 5 weeks for HZZ clearance and MUP Stay and Work Permit issuance in Croatia, followed by 3 to 4 weeks for consular VFS appointment scheduling, document verification, and National Type-D Visa stamping at the Croatian Embassy in New Delhi.",
        },
      },
      {
        "@type": "Question",
        name: "Can Indian citizens with non-matriculation (ECR) passports apply for Croatian work permits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, absolutely. European nations are not part of the 18 ECR-notified countries that require Protector of Emigrants (PoE) clearance. Indian citizens holding either ECR or ECNR passports are fully eligible to apply for Croatian work permits provided they possess the required trade skills, valid passport, and clean police background.",
        },
      },
      {
        "@type": "Question",
        name: "Is police clearance (PCC) with MEA Apostille mandatory for Croatia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. An authentic Police Clearance Certificate (PCC) issued by the Regional Passport Office (PSK) in India, legalized with the Hague Apostille sticker from the Ministry of External Affairs (MEA) in New Delhi, is mandatory for Croatian visa stamping and MUP residence registration.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Croatian employer provide free accommodation and utilities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Under Croatian collective agreements and Foreigners Act amendments, employers recruiting third-country nationals in industrial, construction, transport, and hospitality sectors must provide certified, fully furnished residential accommodation (with heating, electricity, water, and Wi-Fi) or a mandatory tax-exempt housing allowance.",
        },
      },
      {
        "@type": "Question",
        name: "Can a foreign worker switch employers in Croatia if their company delays salary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Under Croatian Labour Law, if an employer fails to pay wages, breaches safety, or declares bankruptcy, foreign workers have the statutory right to lodge an inspection grievance and transfer their Stay and Work Permit to another licensed enterprise through the local MUP Police Administration without being deported.",
        },
      },
      {
        "@type": "Question",
        name: "Can I bring my spouse and children to Croatia under Family Reunification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Article 55 of the Croatian Foreigners Act, third-country nationals holding a valid Stay and Work Permit can apply for Family Reunification (Spajanje obitelji) after completing 1 continuous year of lawful residence and demonstrating adequate registered family housing and sufficient financial means.",
        },
      },
      {
        "@type": "Question",
        name: "How can foreign workers obtain Croatian Permanent Residency (PR)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Third-country nationals who have lawfully and uninterruptedly resided in Croatia for 5 continuous years (with total absences not exceeding 10 months, or 6 consecutive months) are eligible to apply for Permanent Residence (Stalni boravak) under Article 92 of the Foreigners Act, granting open work rights without employer sponsorship.",
        },
      },
      {
        "@type": "Question",
        name: "Can an Indian commercial driving license be converted in Croatia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Indian driving licenses cannot be directly swapped for a Croatian license. However, commercial truck and bus drivers undergo certified vocational training, practical refresher road tests, and COD 95 driver qualification certification in Croatia, funded or facilitated by corporate employers.",
        },
      },
      {
        "@type": "Question",
        name: "What is an OIB number and why is it required in Croatia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The OIB (Osobni identifikacijski broj) is an 11-digit permanent tax identification number issued by the Croatian Tax Administration (Porezna uprava). It is mandatory for registering employment contracts, issuing bank payroll accounts, and enrolling workers into state health (HZZO) and pension systems.",
        },
      },
      {
        "@type": "Question",
        name: "Do Indian workers need to learn the Croatian language before moving?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No initial language certificate is mandated for technical trade permits (welders, drivers, construction, manufacturing). Technical safety briefings and work instructions are given in English or translated. However, learning basic conversational Croatian is encouraged for daily community living and mandatory at A2 level for 5-year Permanent Residency.",
        },
      },
      {
        "@type": "Question",
        name: "How do Indian workers send money home from Croatia and what are the bank transfer charges?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Workers receive direct Euro (€) wages into personal Croatian bank accounts (such as Zagrebačka banka, PBZ, or Erste Bank). Remittances to Indian family bank accounts are processed via SEPA/SWIFT wire transfers or online money transfer operators at competitive Euro-to-INR foreign exchange rates with minimal fees.",
        },
      },
      {
        "@type": "Question",
        name: "What healthcare benefits do foreign workers receive under HZZO in Croatia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under mandatory state health insurance (HZZO), foreign workers with registered employment contracts receive comprehensive state-funded medical coverage, including emergency care, general physician consultations, surgical treatment, prescription medications, and occupational injury compensation.",
        },
      },
      {
        "@type": "Question",
        name: "How can candidates spot and avoid fake Croatian work visa scams in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fake agent red flags include: PDF visas without electronic QR verification, promises of direct Schengen tourist visa conversion to work permits, demanding full cash fees upfront before HZZ approval, and refusal to provide the Croatian employer's company registration (OIB) number. WorkWise Visa provides 100% verified employer contracts with zero hidden agency fees.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Croatian EU Blue Card and what salary is required in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The EU Blue Card (EU Plava karta) is reserved for tertiary degree-holders (engineers, software architects, medical doctors, specialized technical directors). Under Article 124 of the Foreigners Act, the gross monthly salary must equal at least 1.5 times the Croatian national gross average wage (~€1,800 to €2,400+ per month).",
        },
      },
      {
        "@type": "Question",
        name: "What is the weekly working hour limit and overtime pay rate in Croatia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The standard working week in Croatia is 40 hours (8 hours/day across 5 days). Overtime is capped at 180 hours per year under the Labour Act (Zakon o radu) and must be compensated at an elevated rate—standardly 25% to 50% above the basic hourly rate, plus higher differentials for night and Sunday shifts.",
        },
      },
      {
        "@type": "Question",
        name: "What happens during winter off-season for construction and seasonal workers in Croatia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For year-round Stay & Work Permit holders, employers must pay regular base salaries even during weather-related construction slowdowns or reassign teams to indoor fabrication and pre-cast assembly yards. Seasonal permit holders generally return to India or transition to year-round industrial sponsors.",
        },
      },
      {
        "@type": "Question",
        name: "Where is the Embassy of India located in Croatia for consular assistance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Embassy of India in Zagreb is located at Vijenac 13, 10000 Zagreb, Croatia. It provides continuous 24/7 consular assistance, passport renewals, grievance redressal, and emergency repatriation support for Indian citizens.",
        },
      },
      {
        "@type": "Question",
        name: "What are the physical office locations of WorkWise Visa in India for Croatia recruitment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WorkWise Visa operates full-fledged regional trade assessment and counseling centers at: (1) Corporate HQ: Urbtech Trade Centre, Sector 132, Noida (Delhi-NCR); (2) Bihar Regional Hub: Varma Centre, Boring Road Crossing, Patna; (3) Eastern UP Hub: City Centre Mall, Park Road, Gorakhpur; plus trade centers in Siwan and Deoria.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Obtain a Croatia Work Visa & Stay and Work Permit (Dozvola za boravak i rad) from India in 2026",
    description:
      "A complete 7-phase statutory roadmap for Indian skilled workers, technicians, and heavy drivers to legally secure HZZ clearance, MUP permit approval, Embassy Type-D visa stamping, and biometric Croatian Residence Card.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Trade Skill Evaluation & Benchmark Testing in India",
        text: "Candidate completes practical bench testing (6G welding, heavy vehicle maneuvers, wiring, masonry) at authorized WorkWise Visa trade hubs in Patna or Noida.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Sponsoring Croatian Employer Contract & HZZ Labour Clearance",
        text: "The Croatian employer executes a compliant full-time employment contract and conducts the statutory Labour Market Test with HZZ (or bypasses via shortage trade list).",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "OIB Tax Registration & MUP Stay and Work Permit Approval",
        text: "The Croatian Tax Administration issues the worker's 11-digit OIB, and the Ministry of the Interior (MUP) Policijska uprava issues the official Stay and Work Permit decision.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Police Clearance Certificate (PCC) Legalization with MEA Hague Apostille",
        text: "The candidate obtains a fresh PCC from the Regional Passport Office in India and legalizes it with the Hague Apostille sticker from the Ministry of External Affairs in New Delhi.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "National Type-D Long-Stay Visa Application & Biometrics at VFS Global",
        text: "Candidate attends a biometric appointment at VFS Global India with their passport, MUP permit decision, apostilled PCC, medical insurance, and flight reservation for Croatian Embassy stamping.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Deployment & Flight Arrival in Croatia (Zagreb / Split)",
        text: "The worker travels to Croatia on their stamped Type-D visa, is received at Zagreb or Split airport by employer representatives, and is housed in furnished corporate quarters.",
      },
      {
        "@type": "HowToStep",
        position: 7,
        name: "MUP Residence Registration & Biometric Residence Card (Boravišna iskaznica)",
        text: "Within 3 days of arrival, the worker registers their address at the local police station (Prijava boravišta), submits digital fingerprints, and receives their plastic EU Residence Card.",
      },
    ],
  };

  const tradeSalaries = [
    {
      trade: "6G TIG & MIG Pipe Welder",
      spec: "ASME IX / ISO 9606-1, stainless steel, carbon steel & titanium piping",
      eur: "€1,250 – €1,850",
      inr: "₹1,14,000 – ₹1,68,000",
      demand: "Critical Shortage",
      overtime: "€9.50 – €14.00/hr",
    },
    {
      trade: "Heavy Truck Trailer Driver (Class C+E)",
      spec: "International transport, refrigerated container logistics & COD 95",
      eur: "€1,200 – €1,750",
      inr: "₹1,09,000 – ₹1,59,000",
      demand: "Urgent Demand",
      overtime: "€8.50 – €12.50/hr",
    },
    {
      trade: "CNC Machine Operator & Programmer",
      spec: "Fanuc / Siemens Sinumerik controls, 3/5-axis milling & turning",
      eur: "€1,150 – €1,650",
      inr: "₹1,05,000 – ₹1,50,000",
      demand: "Critical Shortage",
      overtime: "€8.00 – €11.50/hr",
    },
    {
      trade: "Structural Steel Fabricator / Fitter",
      spec: "Heavy industrial steel structures, shipyard hull pre-assembly",
      eur: "€1,100 – €1,550",
      inr: "₹1,00,000 – ₹1,41,000",
      demand: "Urgent Demand",
      overtime: "€7.50 – €11.00/hr",
    },
    {
      trade: "Civil Mason & Bricklayer",
      spec: "Block work, plastering, stone cladding & structural AAC masonry",
      eur: "€950 – €1,400",
      inr: "₹86,000 – ₹1,27,000",
      demand: "High Demand",
      overtime: "€6.50 – €9.50/hr",
    },
    {
      trade: "Shuttering Carpenter & Formwork Specialist",
      spec: "DOKA & PERI modular formwork, bridge piers & high-rise slabs",
      eur: "€1,000 – €1,450",
      inr: "₹91,000 – ₹1,32,000",
      demand: "High Demand",
      overtime: "€7.00 – €10.00/hr",
    },
    {
      trade: "Steel Fixer & Rebar Technician",
      spec: "Rebar bending, mat tying, foundation rebar cages & pre-stressing",
      eur: "€950 – €1,380",
      inr: "₹86,000 – ₹1,25,000",
      demand: "High Demand",
      overtime: "€6.50 – €9.50/hr",
    },
    {
      trade: "Industrial Electrician & Wireman",
      spec: "PLC wiring, 400V industrial switchboards, cable tray routing & earthing",
      eur: "€1,100 – €1,600",
      inr: "₹1,00,000 – ₹1,45,000",
      demand: "Critical Shortage",
      overtime: "€8.00 – €12.00/hr",
    },
    {
      trade: "Plumber & Pipe Installer",
      spec: "Commercial water distribution, PPR/PEX piping, drainage & hydronic heating",
      eur: "€1,000 – €1,450",
      inr: "₹91,000 – ₹1,32,000",
      demand: "High Demand",
      overtime: "€7.00 – €10.00/hr",
    },
    {
      trade: "HVAC & Refrigeration Technician",
      spec: "Ducting assembly, VRV/VRF central chiller units & copper brazing",
      eur: "€1,050 – €1,550",
      inr: "₹95,000 – ₹1,41,000",
      demand: "Urgent Demand",
      overtime: "€7.50 – €11.00/hr",
    },
    {
      trade: "Construction Scaffolder",
      spec: "Layher modular ring-lock scaffolding, fall-arrest rigging & safety certification",
      eur: "€950 – €1,350",
      inr: "₹86,000 – ₹1,23,000",
      demand: "High Demand",
      overtime: "€6.50 – €9.50/hr",
    },
    {
      trade: "Ceramic Tile Setter & Marble Mason",
      spec: "Floor and wall tiling, laser alignment, mosaic cutting & epoxy grouting",
      eur: "€1,050 – €1,450",
      inr: "₹95,000 – ₹1,32,000",
      demand: "High Demand",
      overtime: "€7.00 – €10.00/hr",
    },
    {
      trade: "Heavy Equipment Operator (Excavator / Loader)",
      spec: "CAT/Komatsu crawler excavators, trenching, grading & quarry handling",
      eur: "€1,150 – €1,600",
      inr: "₹1,05,000 – ₹1,45,000",
      demand: "Urgent Demand",
      overtime: "€8.00 – €11.50/hr",
    },
    {
      trade: "Mobile & Tower Crane Operator",
      spec: "Liebherr / Potain tower cranes, certified load chart calculations & slinging",
      eur: "€1,250 – €1,800",
      inr: "₹1,14,000 – ₹1,64,000",
      demand: "Critical Shortage",
      overtime: "€9.00 – €13.50/hr",
    },
    {
      trade: "Forklift Operator & Reach Truck Driver",
      spec: "Counterbalance forklift, high-bay reach trucks (VNA) & barcode RF scanning",
      eur: "€950 – €1,300",
      inr: "₹86,000 – ₹1,18,000",
      demand: "Steady Demand",
      overtime: "€6.50 – €9.00/hr",
    },
    {
      trade: "Public Transit & Tour Bus Driver (Class D)",
      spec: "Urban bus fleets (ZET Zagreb / Promet Split), coach touring & passenger safety",
      eur: "€1,150 – €1,650",
      inr: "₹1,05,000 – ₹1,50,000",
      demand: "Critical Shortage",
      overtime: "€8.00 – €12.00/hr",
    },
    {
      trade: "Auto Mechanic & Diesel Engine Technician",
      spec: "OBD diagnostic scanning, transmission overhaul, brake & suspension repairs",
      eur: "€1,100 – €1,600",
      inr: "₹1,00,000 – ₹1,45,000",
      demand: "Urgent Demand",
      overtime: "€8.00 – €11.50/hr",
    },
    {
      trade: "Automotive Spray Painter & Denter",
      spec: "Down-draft spray booths, waterborne automotive paints, body panel pulling",
      eur: "€1,050 – €1,500",
      inr: "₹95,000 – ₹1,36,000",
      demand: "Steady Demand",
      overtime: "€7.50 – €10.50/hr",
    },
    {
      trade: "Commercial Hotel Cook / Chef de Partie",
      spec: "Continental & Mediterranean culinary prep, buffet operations, HACCP hygiene",
      eur: "€1,100 – €1,650",
      inr: "₹1,00,000 – ₹1,50,000",
      demand: "Critical Shortage",
      overtime: "€8.00 – €12.00/hr",
    },
    {
      trade: "Kitchen Helper & Commis Chef",
      spec: "Vegetable prep, kitchen sanitization, basic grilling, HACCP compliance",
      eur: "€850 – €1,150",
      inr: "₹77,000 – ₹1,05,000",
      demand: "High Demand",
      overtime: "€6.00 – €8.00/hr",
    },
    {
      trade: "Hotel Housekeeping Attendant",
      spec: "Resort room cleaning, linen rotation, sanitization for luxury Adriatic hotels",
      eur: "€850 – €1,150",
      inr: "₹77,000 – ₹1,05,000",
      demand: "High Demand",
      overtime: "€6.00 – €8.00/hr",
    },
    {
      trade: "Restaurant Waiter / Food Server",
      spec: "English-speaking, table service, POS terminal billing, customer courtesy",
      eur: "€900 – €1,250",
      inr: "₹82,000 – ₹1,14,000",
      demand: "High Demand",
      overtime: "€6.50 – €8.50/hr + Tips",
    },
    {
      trade: "Industrial Meat Cutter / Butcher",
      spec: "Beef/pork deboning, industrial poultry slaughterlines, cold-chain safety",
      eur: "€1,000 – €1,450",
      inr: "₹91,000 – ₹1,32,000",
      demand: "Urgent Demand",
      overtime: "€7.00 – €10.00/hr",
    },
    {
      trade: "Food Processing Line Worker",
      spec: "Canned food packaging, confectionery sorting, automated conveyor ops",
      eur: "€850 – €1,150",
      inr: "₹77,000 – ₹1,05,000",
      demand: "Steady Demand",
      overtime: "€6.00 – €8.00/hr",
    },
    {
      trade: "Warehouse Order Picker & Packer",
      spec: "Voice-picking, barcode handheld terminals, shrink-wrapping & pallet staging",
      eur: "€900 – €1,250",
      inr: "₹82,000 – ₹1,14,000",
      demand: "Urgent Demand",
      overtime: "€6.50 – €9.00/hr",
    },
    {
      trade: "Solar PV Panel Installer",
      spec: "Rooftop mounting rails, DC inverter wiring, string testing & height safety",
      eur: "€1,050 – €1,500",
      inr: "₹95,000 – ₹1,36,000",
      demand: "Urgent Demand",
      overtime: "€7.50 – €11.00/hr",
    },
    {
      trade: "Thermal Insulation Technician (Insulator)",
      spec: "Rockwool industrial pipe insulation, building facade EPS cladding (ETICS)",
      eur: "€1,000 – €1,400",
      inr: "₹91,000 – ₹1,27,000",
      demand: "High Demand",
      overtime: "€7.00 – €10.00/hr",
    },
    {
      trade: "Agricultural Greenhouse & Farm Worker",
      spec: "Automated hydroponics, fruit harvesting, nursery pruning & irrigation",
      eur: "€850 – €1,150",
      inr: "₹77,000 – ₹1,05,000",
      demand: "Steady Demand",
      overtime: "€6.00 – €8.00/hr",
    },
    {
      trade: "Civil Site Foreman / Trade Supervisor",
      spec: "Blueprint interpretation, Hindi/English crew leadership, daily safety logs",
      eur: "€1,400 – €2,100",
      inr: "₹1,27,000 – ₹1,91,000",
      demand: "Urgent Demand",
      overtime: "€10.00 – €15.00/hr",
    },
    {
      trade: "MEP / Civil Project Engineer",
      spec: "AutoCAD, BIM modeling, subcontractor QA/QC audits & site billing",
      eur: "€1,600 – €2,400",
      inr: "₹1,45,000 – ₹2,18,000",
      demand: "High Qualification",
      overtime: "Performance Bonus",
    },
  ];

  const regionalCounties = [
    {
      name: "City of Zagreb & Zagreb County (Grad Zagreb)",
      badge: "National Capital & Economic Engine",
      focus: "Infrastructure, High-Rise Civil Works, Industrial MEP & Mega-Logistics",
      projects: "Rimac Campus Sveta Nedelja, Zagreb Urban Light Rail & Ring Distribution Centers",
      avgPay: "€1,100 – €1,750 / mo",
      desc: "Zagreb generates over 35% of Croatia's national GDP. It hosts the largest concentration of heavy logistics depots, pre-cast fabrication plants, high-voltage electrical grid contracts, and commercial construction projects with year-round work continuity.",
    },
    {
      name: "Split-Dalmatia County (Splitsko-dalmatinska)",
      badge: "Maritime & Tourism Epicenter",
      focus: "Shipbuilding, Civil Road Works, Resort Hospitality & Coastal Logistics",
      projects: "Split Port Terminal Modernization, Kozjak Tunnel & Luxury Island Resorts",
      avgPay: "€1,050 – €1,650 / mo",
      desc: "Croatia's premier coastal hub experiences massive demand for shipyard welders, civil highway construction crews, commercial drivers, chefs, and hotel staff with peak overtime incentives during the extended 8-month Adriatic operational window.",
    },
    {
      name: "Primorje-Gorski Kotar County (Rijeka & Kvarner)",
      badge: "Deepwater Port & Shipbuilding Corridor",
      focus: "3. Maj Shipyard, LNG Terminal Krk, Container Port & Pipeline Fitting",
      projects: "Rijeka Gateway Container Terminal (APM Terminals) & A6 Highway Viaducts",
      avgPay: "€1,200 – €1,850 / mo",
      desc: "Rijeka serves as the chief Mediterranean sea freight corridor for Central Europe. Specialized demand is highest here for heavy industrial 6G pipe welders, structural fitters, mobile crane operators, and heavy haulage transport drivers.",
    },
    {
      name: "Istria County (Istarska županija / Pula & Rovinj)",
      badge: "High-Standard Manufacturing & Hospitality",
      focus: "Precision Metal Works, Winery Automation, Luxury Hotel Infrastructure",
      projects: "Uljanik Shipyard Revitalization, Pula General Hospital Expansion & 5-Star Resorts",
      avgPay: "€1,100 – €1,600 / mo",
      desc: "Adjacent to Italy and Slovenia, Istria features some of the highest living standards in Southeastern Europe. Strong year-round demand for CNC operators, electricians, tile setters, and hospitality professionals with generous employer housing perks.",
    },
    {
      name: "Osijek-Baranja & Slavonia Agricultural Basin",
      badge: "Grain Basket & Agro-Industrial Hub",
      focus: "Modern Food Processing, Dairy Mechanization, Commercial Trucking & Biofuels",
      projects: "Pan-European Corridor Vc Highway & Belje Agro-Industrial Complexes",
      avgPay: "€950 – €1,450 / mo",
      desc: "Slavonia is the epicenter of Croatian agriculture, meat processing, and grain distribution. Lower local living costs allow workers here to achieve some of the highest monthly family remittance ratios to India.",
    },
    {
      name: "Sisak-Moslavina County (Post-Earthquake Reconstruction)",
      badge: "Priority State Rebuilding Zone",
      focus: "Seismic Retrofitting, Pre-cast Concrete, Masonry & Civic Infrastructure",
      projects: "EU-Funded National Seismic Reconstruction Masterplan ($1.8B Allocation)",
      avgPay: "€1,050 – €1,550 / mo",
      desc: "Backed by direct European Union Solidarity Funds, this region has an insatiable statutory demand for bricklayers, shuttering carpenters, steel fixers, and civil foremen with expedited HZZ shortage work permit clearances.",
    },
  ];

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <Navbar />

      <main className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
        {/* ── Hero Section (Strict Emerald/Teal/Slate UI Continuity) ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950 text-white pt-24 sm:pt-28 pb-16 md:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb inside Hero */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 sm:mb-8">
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
              <span className="text-slate-600">/</span>
              <Link href="/countries" className="hover:text-emerald-400 transition-colors">
                Countries
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-emerald-300 font-bold">Republic of Croatia (Republika Hrvatska)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 Croatia Schengen &amp; Ministry of the Interior (MUP) Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  Croatia Work Visa &amp; Skilled Jobs Guide{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    2026
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive, legally verified statutory master guide for Indian professionals, 6G welders, heavy commercial drivers, CNC machinists, civil trades, and hospitality personnel migrating to Central Europe&apos;s fastest-growing Adriatic economy. Explore official{" "}
                  <strong className="font-bold text-white">Stay and Work Permits (Dozvola za boravak i rad)</strong> under the Foreigners Act,{" "}
                  <strong className="font-bold text-emerald-300">full Schengen mobility across 29 nations</strong>, Eurozone currency security, employer-provided accommodation, and consular stamping through the Embassy of the Republic of Croatia in New Delhi.
                </p>

                {/* Key Benefits Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaMoneyBillWave className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">€850–€1,850+ EUR</div>
                      <div className="text-[10px] text-slate-400">₹77k–₹1.68L Monthly Pay</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaCoins className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Eurozone Economy</div>
                      <div className="text-[10px] text-slate-400">Direct Euro (€) Wages</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaPlaneArrival className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Full Schengen Member</div>
                      <div className="text-[10px] text-slate-400">29 Nations Visa-Free Travel</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaAward className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Stay &amp; Work Permit</div>
                      <div className="text-[10px] text-slate-400">Up to 3 Years Renewable</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaHouseUser className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">100% Free Housing</div>
                      <div className="text-[10px] text-slate-400">Company Flat &amp; Utilities</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaClock className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">8–12 Wks Processing</div>
                      <div className="text-[10px] text-slate-400">Direct Visa D Stamping</div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons - Clean 2-CTA Layout */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/jobs?country=Croatia"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <FaBriefcase className="w-4 h-4" />
                    Browse Active Croatia Vacancies
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20Croatia%20Work%20Permit%20and%20Jobs%20for%202026."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 px-6 py-3.5 text-sm font-bold text-white transition-all shadow-md"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-300" />
                    WhatsApp Croatia Desk
                  </a>
                </div>
              </div>

              {/* Quick Country Snapshot Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3.5">
                      <img
                        src="https://flagcdn.com/w160/hr.png"
                        alt="Croatia Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-display font-extrabold text-white">Republic of Croatia</h2>
                        <p className="text-xs text-emerald-300 font-medium">Zagreb • Split • Rijeka • Osijek • Zadar • Pula</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-bold text-emerald-300">
                      <FaShieldHalved className="w-3 h-3 text-emerald-400" />
                      EU &amp; Schengen
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Primary Work Permit:</span>
                      <span className="font-bold text-white">Stay &amp; Work Permit (Dozvola za boravak i rad)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Labor Market Authority:</span>
                      <span className="font-bold text-emerald-300">Croatian Employment Service (HZZ)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Police &amp; Residence Authority:</span>
                      <span className="font-bold text-white">Ministry of the Interior (MUP)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Consular Processing Time:</span>
                      <span className="font-bold text-white">8–12 Weeks (New Delhi Embassy / VFS)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">National Currency:</span>
                      <span className="font-bold text-amber-300">Euro (€ EUR) — 1 € ≈ ₹91 INR</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Monthly Take-Home:</span>
                      <span className="font-bold text-emerald-300">€950 – €1,650+ (₹86k – ₹1.50L)</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Permanent European Settlement:</span>
                      <span className="font-bold text-emerald-300">5 Continuous Years (EU PR / Passport)</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-950/50 border border-emerald-500/30 p-3.5 text-center text-xs text-slate-300">
                    <div className="flex items-center justify-center gap-2 text-emerald-300 font-semibold mb-0.5">
                      <FaShieldHalved className="w-3.5 h-3.5 text-emerald-400" />
                      <span>MUP &amp; HZZ Government Approved</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Direct Embassy Stamping • Full Schengen Work Rights • Zero Hidden Agency Charges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Table of Contents & Quick Navigation ────────────── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              <FaMagnifyingGlass className="w-3 h-3 text-emerald-600" />
              Croatia Comprehensive Master Guide Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. 2026 Schengen &amp; Macro Overview
              </a>
              <a href="#government-portals" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Official Government Verification Portals
              </a>
              <a href="#visa-pathways" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. Legal Work Permit Pathways
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. 2026 Salary Table (30+ Trades)
              </a>
              <a href="#deployment-pipeline" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. 7-Stage Statutory Deployment Pipeline
              </a>
              <a href="#document-checklist" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. Document Checklist &amp; Hague Apostille
              </a>
              <a href="#regional-hotspots" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. Regional Industrial Hotspots &amp; Counties
              </a>
              <a href="#living-housing" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. Free Housing, Living Costs &amp; Savings
              </a>
              <a href="#labour-law-tax" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                9. Labour Code &amp; Taxation Mathematics
              </a>
              <a href="#pr-citizenship" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                10. 5-Year Permanent Residency (PR)
              </a>
              <a href="#scam-prevention" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                11. Anti-Fraud &amp; Safe Hiring Protocol
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                12. Detailed FAQs (22 Inquiries)
              </a>
              <a href="#consultation-form" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                13. Free Profile Evaluation &amp; Branch Directory
              </a>
            </div>
          </div>
        </section>

        {/* ── Main Content Container ─────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* ── Section 1: Strategic European Overview & Schengen Integration ── */}
          <section id="overview" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaGlobe className="w-3.5 h-3.5 text-emerald-600" />
              Section 1: Strategic European Overview &amp; Schengen Integration
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Why Croatia Has Emerged as Europe&apos;s Premier Employment Corridor for Indian Tradespeople
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Situated strategically at the geographical nexus of Central Europe and the Mediterranean basin, the <strong>Republic of Croatia (Republika Hrvatska)</strong> has transformed into one of the most vibrant, rapidly expanding industrial and infrastructural economies in the European Union. In 2026, Croatia stands as a dual powerhouse: a full member of the European Union, a member of the Eurozone currency union, and an integral territory of the borderless Schengen Area.
              </p>
              <p>
                Propelled by massive European Union post-pandemic resilience funding, expansive regional infrastructure masterplans, and substantial state reconstruction efforts across Zagreb and Central Croatia, the nation faces a structural domestic demographic deficit. With hundreds of thousands of Croatian technicians migrating toward higher-wage Western European economies like Germany and Austria, Croatian industrial conglomerates, civil construction giants, shipyard consortia, transport fleets, and hotel resorts have increasingly partnered with overseas workforce placement specialists—most notably from India—to fulfill mission-critical skilled and technical vacancies.
              </p>
              <p>
                Over the past three years, the Indian expatriate technical workforce in Croatia has experienced an exponential five-fold expansion. Indian professionals, ASME 6G welders, CNC operators, heavy truck drivers, electricians, masons, and commercial kitchen specialists are now actively deployed across industrial estates in Zagreb, Split, Rijeka, Pula, and Slavonia. Supported by modern statutory protections under the Croatian Foreigners Act (<em>Zakon o strancima</em>), foreign workers in Croatia receive equal pay protection, state-guaranteed health insurance, employer-funded accommodation, and transparent pathways toward 5-year Permanent European Residency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <FaPlaneArrival className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Full Schengen Accession
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Croatia&apos;s accession to the Schengen Area guarantees borderless travel across 29 European countries for up to 90 days in any 180-day window for workers holding a valid Croatian biometric Residence Card (<em>Boravišna iskaznica</em>).
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <FaCoins className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Euro (€) Currency Stability
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Croatia officially transacts in the Euro (€ EUR), completely eliminating foreign currency conversion penalties. Earning in Euros provides direct, high remittance purchasing power to Indian families in Punjab, UP, Bihar, and Kerala.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <FaFileContract className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Up to 3-Year Stay &amp; Work Permits
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Recent statutory amendments to the Croatian Foreigners Act (<em>Zakon o strancima</em>) extend permit validity from 1 year to up to 3 years for continuous contracts, offering unprecedented job security and a direct runway toward 5-year Permanent Residency.
                </p>
              </div>
            </div>

            {/* Statutory Authority Citation */}
            <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50/60 p-5 space-y-2">
              <p className="text-xs sm:text-sm font-medium text-slate-800 italic leading-relaxed">
                &ldquo;Third-country nationals legally employed under the Croatian Foreigners Act (Zakon o strancima) and Labour Act (Zakon o radu) are entitled to identical basic working conditions, minimum wage thresholds, mandatory rest periods, occupational safety gear, and healthcare rights as Croatian citizens. Employers are prohibited from deducting recruitment agency commissions from worker wages.&rdquo;
              </p>
              <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                <cite className="not-italic font-bold text-slate-900 flex items-center gap-1.5">
                  <FaBuildingColumns className="w-3.5 h-3.5 text-emerald-600" />
                  Ministry of the Interior (MUP) &amp; Ministry of Labour, Republic of Croatia
                </cite>
                <a
                  href="https://mup.gov.hr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-2 flex items-center gap-1"
                >
                  Official MUP Source <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* Macro Statistics Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Foreign Work Permits 2026</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-slate-900 mt-1">190,000+</div>
                <p className="text-[11px] text-slate-500 mt-1">Record foreign labor quotas across construction &amp; tourism</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Currency Standard</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-emerald-600 mt-1">Euro (€)</div>
                <p className="text-[11px] text-slate-500 mt-1">100% official Eurozone legal tender since 2023</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Standard Permit Term</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-teal-600 mt-1">Up to 3 Yrs</div>
                <p className="text-[11px] text-slate-500 mt-1">Renewable multi-year stay and work authorization</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Permanent Settlement</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-amber-600 mt-1">5 Years</div>
                <p className="text-[11px] text-slate-500 mt-1">Lawful pathway to EU Permanent Residence (PR)</p>
              </div>
            </div>
          </section>

          {/* ── Section 2: Sovereign Government Verification Portals ── */}
          <section id="government-portals" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaBuildingColumns className="w-3.5 h-3.5 text-emerald-600" />
              Section 2: Sovereign Government Verification Portals
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Authentic Republic of Croatia Government Directories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              WorkWise Visa enforces total statutory transparency. Never accept informal WhatsApp printouts or unverifiable job offers. All legitimate Croatian employment authorizations are audited through these sovereign digital platforms:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Government Authority</th>
                    <th className="py-3.5 px-4 sm:px-6">Institutional Scope</th>
                    <th className="py-3.5 px-4 sm:px-6">Official Portal</th>
                    <th className="py-3.5 px-4 sm:px-6">Verification Function</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Ministry of the Interior (MUP)
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Ministarstvo unutarnjih poslova
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <a
                        href="https://mup.gov.hr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        mup.gov.hr
                      </a>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Stay and Work Permit (Dozvola za boravak i rad) issuance and biometric residence card enrollment.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Croatian Employment Service (HZZ)
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Hrvatski zavod za zapošljavanje
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <a
                        href="https://www.hzz.hr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        hzz.hr
                      </a>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Labour Market Test (Test tržišta rada) approvals and national Shortage Occupations List administration.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Tax Administration (Porezna uprava)
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Ministarstvo financija
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <a
                        href="https://www.porezna-uprava.hr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        porezna-uprava.hr
                      </a>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Issuance of 11-digit Personal Identification Number (OIB) required for salary contracts and taxation.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Embassy of Croatia, New Delhi
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Ministarstvo vanjskih i europskih poslova (MVEP)
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <a
                        href="https://mvep.gov.hr/in/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        mvep.gov.hr/in/en
                      </a>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      National Long-Stay (Type-D) Entry Visa stamping for Indian passport holders via VFS Global.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Croatian Health Insurance Fund (HZZO)
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Hrvatski zavod za zdravstveno osiguranje
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <a
                        href="https://hzzo.hr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        hzzo.hr
                      </a>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      State mandatory health insurance coverage, medical card enrollment, and hospital care registration.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      State Inspectorate (Državni inspektorat)
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Inspektorat rada
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <a
                        href="https://dirh.gov.hr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        dirh.gov.hr
                      </a>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Enforcement of worker rights, overtime verification, housing inspection, and wage dispute mediation.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 3: Legal Work Permit Pathways ── */}
          <section id="visa-pathways" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaBriefcase className="w-3.5 h-3.5 text-emerald-600" />
              Section 3: Statutory Work Permit Classifications
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Official Croatian Work Authorization Framework (Zakon o strancima)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Foreign employment in the Republic of Croatia is governed under the <strong>Foreigners Act (Zakon o strancima)</strong>. Depending on vocational qualifications and the sponsoring enterprise, four primary pathways exist:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Primary Pathway (90% of Trades)
                  </span>
                  <span className="text-xs font-semibold text-slate-400">1 to 3 Years</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Stay and Work Permit based on HZZ Positive Opinion
                </h3>
                <p className="text-xs text-emerald-600 font-semibold mb-2">
                  Dozvola za boravak i rad uz pozitivno mišljenje HZZ-a
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  The standard route for skilled trade workers, welders, heavy drivers, and civil technicians. The Croatian enterprise conducts a 15-day Labour Market Test (or requests a shortage occupation exemption), after which MUP issues the combined work and residence authorization.
                </p>
                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>Eligible for year-round industrial and infrastructure contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>Renewable in Croatia without requiring exit travel to India</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    Fast-Track Exemption
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Expedited 3-5 Wks</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Shortage Occupations Permit (Deficitarna zanimanja)
                </h3>
                <p className="text-xs text-teal-600 font-semibold mb-2">
                  Zapošljavanje na deficitarnim zanimanjima bez testa tržišta rada
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Critical shortage trades—including 6G welders, CNC operators, civil masons, carpenters, and commercial truck drivers—are officially exempt from the domestic labour search. HZZ grants an immediate positive opinion, cutting processing time by weeks.
                </p>
                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3 h-3 text-teal-500 shrink-0" />
                    <span>Immediate HZZ clearance without 15-day waiting period</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3 h-3 text-teal-500 shrink-0" />
                    <span>Covers over 45 certified technical, manufacturing &amp; driving trades</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    Highly Qualified Talent
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Up to 48 Months</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  EU Blue Card (EU Plava karta)
                </h3>
                <p className="text-xs text-blue-600 font-semibold mb-2">
                  Article 124 of the Croatian Foreigners Act
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Designed for degree-holding specialists, software engineers, and industrial project managers earning at least 1.5 times the gross average Croatian wage (~€1,800 to €2,400+ per month). Grants seamless cross-EU mobility rights and fast-track PR after 33 months (or 21 months with language proficiency).
                </p>
                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3 h-3 text-blue-500 shrink-0" />
                    <span>Immediate family accompaniment from Day 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3 h-3 text-blue-500 shrink-0" />
                    <span>Automatic EU work mobility after 12 months in Croatia</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    Tourism &amp; Agriculture
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Up to 90 Days / 6 Mos</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Seasonal Work Permit (Sezonski rad)
                </h3>
                <p className="text-xs text-amber-600 font-semibold mb-2">
                  Article 105 of the Croatian Foreigners Act
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Issued for peak summer tourism along the Dalmatian coast (Dubrovnik, Split, Zadar, Istria) and harvest agriculture in Slavonia. While ideal for short-term earnings, candidates seeking long-term European settlement should pursue continuous Stay &amp; Work Permits.
                </p>
                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3 h-3 text-amber-500 shrink-0" />
                    <span>High seasonal tips and overtime bonuses in luxury Adriatic resorts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3 h-3 text-amber-500 shrink-0" />
                    <span>Eligible to transition into year-round industrial permits</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 4: 2026 Salary, Overtime & Remittance Matrix (30+ Trades) ── */}
          <section id="salary-matrix" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaCoins className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: 2026 Salary, Overtime &amp; Remittance Matrix (30+ Trades)
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Verified Vocational Trade Packages &amp; Remittance Value (EUR € vs. INR ₹)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              All authentic employment contracts in Croatia are executed in Euros (€). The comprehensive benchmark matrix below details gross base salaries, typical overtime hourly rates, net monthly savings remitted to Indian family accounts (calculated at €1 = ₹91), and current HZZ shortage list status:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Vocational Trade / Occupation</th>
                    <th className="py-4 px-4 sm:px-6">Gross Base Pay (EUR €)</th>
                    <th className="py-4 px-4 sm:px-6">Overtime Hourly Rate</th>
                    <th className="py-4 px-4 sm:px-6">Monthly Savings in INR (₹)</th>
                    <th className="py-4 px-4 sm:px-6">HZZ Shortage Quota</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {tradeSalaries.map((s, idx) => (
                    <tr key={s.trade} className={idx % 2 === 0 ? "bg-white hover:bg-slate-50/80 transition-colors" : "bg-slate-50/50 hover:bg-slate-100/60 transition-colors"}>
                      <td className="py-4 px-4 sm:px-6">
                        <div className="font-bold text-slate-900">{s.trade}</div>
                        <div className="text-[11px] text-slate-500 font-normal">{s.spec}</div>
                      </td>
                      <td className="py-4 px-4 sm:px-6 font-extrabold text-blue-700 font-display whitespace-nowrap">
                        {s.eur}/mo
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                        {s.overtime}
                      </td>
                      <td className="py-4 px-4 sm:px-6 font-bold text-emerald-700 whitespace-nowrap">
                        {s.inr}
                      </td>
                      <td className="py-4 px-4 sm:px-6">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          {s.demand}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Overtime & Shift Allowance Notice */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                <FaCalculator className="w-3.5 h-3.5 text-emerald-600" />
                Statutory Shift Differentials Under the Croatian Labour Act:
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Under Article 94 of the Croatian Labour Act, work performed under non-standard conditions is subject to mandatory percentage increases: Night Shifts (22:00 to 06:00) carry a statutory <strong>+30% to +50%</strong> surcharge; Sunday and Public Holiday work carries a mandatory <strong>+50%</strong> rate; and emergency overtime exceeding 40 hours per week is billed at a minimum of <strong>+25% to +50%</strong> above base hourly wages.
              </p>
            </div>
          </section>

          {/* ── Section 5: 7-Stage Statutory Deployment Pipeline ── */}
          <section id="deployment-pipeline" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaPlaneArrival className="w-3.5 h-3.5 text-emerald-600" />
              Section 5: 7-Stage Statutory Deployment Pipeline
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              From Trade Evaluation in India to Residence Registration in Zagreb
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              WorkWise Visa manages every step of the sovereign Croatian compliance workflow with zero guesswork and complete legal audit trails:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-emerald-400 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-emerald-600 font-display">01</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">Days 1–3</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Practical Trade Trials</h3>
                  <p className="text-xs text-emerald-600 font-semibold mb-2">WorkWise Testing Hubs (Patna/Noida)</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Hands-on bench testing for 6G pipe welding, DB panel wiring, plumbing circuits, or heavy trailer maneuvers evaluated by licensed trade assessors.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-emerald-400 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-emerald-600 font-display">02</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">2–3 Weeks</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">HZZ Labour Clearance</h3>
                  <p className="text-xs text-emerald-600 font-semibold mb-2">Croatian Employment Service (HZZ)</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Employer files for labor clearance. Positions on the national Shortage List bypass the 15-day domestic search for fast-tracked positive opinion.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-emerald-400 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-emerald-600 font-display">03</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">3–5 Weeks</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">MUP Work Permit Approval</h3>
                  <p className="text-xs text-emerald-600 font-semibold mb-2">Ministry of the Interior (MUP)</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Following OIB tax number generation, the Police Administration (Policijska uprava) approves the official Stay and Work Permit (Dozvola za boravak i rad).
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-emerald-400 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-emerald-600 font-display">04</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">1–2 Weeks</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">PCC with MEA Apostille</h3>
                  <p className="text-xs text-emerald-600 font-semibold mb-2">Passport Seva Kendra &amp; MEA</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Candidate secures an Indian Police Clearance Certificate (PCC) legalized with the Hague Apostille sticker from the Ministry of External Affairs in New Delhi.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-emerald-400 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-emerald-600 font-display">05</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">2–4 Weeks</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Consular Type-D Visa Stamping</h3>
                  <p className="text-xs text-emerald-600 font-semibold mb-2">Embassy of Croatia &amp; VFS Global</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Submission of MUP permit, apostilled PCC, bilingual contract, and biometrics at VFS Global for National Long-Stay (Type-D) Visa passport stamping.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-emerald-400 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-emerald-600 font-display">06</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">Days 1–3</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Flight &amp; Housing Check-in</h3>
                  <p className="text-xs text-emerald-600 font-semibold mb-2">Zagreb / Split Airport Reception</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Worker travels to Croatia on their stamped Type-D visa, is received by corporate representatives, and checks into certified employer quarters.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-emerald-400 transition-all md:col-span-2 lg:col-span-3">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-emerald-600 font-display">07</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">Days 3–14</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Biometric Residence Card (Boravišna iskaznica)</h3>
                  <p className="text-xs text-emerald-600 font-semibold mb-2">MUP Police Administration (Zagreb / Split / Rijeka)</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Worker visits the local police administration, registers residential address (Prijava boravišta), submits digital fingerprints, and receives their plastic biometric Residence Permit card granting full Schengen mobility rights.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 6: Document Checklist & Hague Apostille ── */}
          <section id="document-checklist" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaFileContract className="w-3.5 h-3.5 text-emerald-600" />
              Section 6: Document Checklist &amp; Hague Apostille Protocol
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Consular Documentation Requirements for Croatian Type-D Visa
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To guarantee zero consular rejection at the Embassy of the Republic of Croatia in New Delhi and authorized VFS Global centers, candidates must prepare these verified credentials:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FaPassport className="w-4 h-4 text-emerald-600" /> Indian Identity &amp; Police Clearance Dossier
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Original Indian Passport:</strong> Minimum 15 months remaining validity with at least 3 blank visa pages.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>PSK Police Clearance Certificate (PCC):</strong> Issued by Regional Passport Office within 6 months of filing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Hague MEA Apostille Sticker:</strong> The PCC must carry the square Hague Apostille sticker from MEA New Delhi.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Trade Experience &amp; ITI Certificates:</strong> Trade diplomas, welder test certificates, or previous GCC employment service letters.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>12 Biometric Photographs:</strong> 3.5 x 4.5 cm, white background, 80% face coverage, matte finish.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FaBuildingColumns className="w-4 h-4 text-teal-600" /> Croatian Enterprise &amp; Consular Clearances
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>MUP Stay and Work Permit Decision:</strong> Original PDF approved by the Croatian Police Administration.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Bilingual Employment Contract:</strong> Executed in Croatian and English detailing gross wages, working hours, and benefits.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Registered Accommodation Lease:</strong> Municipality-registered residential rental contract verifying adequate living space.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Schengen Travel Medical Insurance:</strong> Minimum €30,000 emergency medical coverage valid for 90 days.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Confirmed Flight Booking:</strong> Travel itinerary showing transit route to Zagreb Franjo Tuđman Airport.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Section 7: Regional Industrial Hotspots & County Directory ── */}
          <section id="regional-hotspots" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaIndustry className="w-3.5 h-3.5 text-emerald-600" />
              Section 7: Regional Industrial Hotspots &amp; County Directory (Županije)
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Where the Jobs Are: Industrial Corridors &amp; Regional Hubs Across Croatia
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Employment demand in Croatia varies significantly by geographic region. Understanding regional economic specializations enables candidates to align their vocational skills with the most lucrative contracts:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionalCounties.map((c) => (
                <div key={c.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-emerald-400 hover:shadow-md transition-all">
                  <div className="space-y-3">
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-200">
                      {c.badge}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{c.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{c.desc}</p>
                    <div className="pt-2 border-t border-slate-100 text-xs space-y-1">
                      <div>
                        <span className="font-bold text-slate-700">Primary Trades: </span>
                        <span className="text-slate-500">{c.focus}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-700">Key Projects: </span>
                        <span className="text-slate-500">{c.projects}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Average Trade Earnings:</span>
                    <span className="font-bold text-emerald-700">{c.avgPay}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 8: Free Housing, Living Costs & Savings ── */}
          <section id="living-housing" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaHouseUser className="w-3.5 h-3.5 text-emerald-600" />
              Section 8: Free Housing, Living Costs &amp; Remittance Economics
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Cost of Living &amp; Net Family Savings in Croatia
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Under Croatian collective bargaining agreements, legitimate employers must provide certified accommodation or housing allowances. This drastically reduces monthly living expenses:
            </p>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Company Accommodation</div>
                  <div className="text-xl font-bold text-emerald-700 mb-2">100% Free / Subsidized</div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Furnished apartments or residential employee dormitories with central heating, washing machines, kitchen facilities, and high-speed Wi-Fi provided by the employer.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Supermarket Food Costs</div>
                  <div className="text-xl font-bold text-blue-700 mb-2">€150 – €180 / mo</div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Workers organizing room cooking messes purchase groceries (rice, wheat flour, lentils, chicken, vegetables) in bulk from Konzum, Lidl, Plodine, and Spar.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Net Monthly Savings (INR)</div>
                  <div className="text-xl font-bold text-emerald-600 mb-2">₹75,000 – ₹1,20,000</div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Even after food, mobile phone plans, and leisure, skilled tradespeople consistently remit the vast majority of their base pay and overtime to family bank accounts in India.
                  </p>
                </div>
              </div>

              {/* Monthly Expense Comparison Table */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3 px-4 sm:px-6">Living Expense Category</th>
                      <th className="py-3 px-4 sm:px-6">Independent Expat Cost</th>
                      <th className="py-3 px-4 sm:px-6">WorkWise Corporate Candidate</th>
                      <th className="py-3 px-4 sm:px-6">Monthly Savings Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="py-3 px-4 sm:px-6 font-bold text-slate-900">Rental Accommodation</td>
                      <td className="py-3 px-4 sm:px-6">€350 – €550 / mo</td>
                      <td className="py-3 px-4 sm:px-6 text-emerald-700 font-bold">€0 (100% Employer Funded)</td>
                      <td className="py-3 px-4 sm:px-6 font-bold text-slate-900">+₹32,000 – ₹50,000 saved</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 sm:px-6 font-bold text-slate-900">Electricity, Heating &amp; Wi-Fi</td>
                      <td className="py-3 px-4 sm:px-6">€80 – €120 / mo</td>
                      <td className="py-3 px-4 sm:px-6 text-emerald-700 font-bold">€0 (Included in Housing)</td>
                      <td className="py-3 px-4 sm:px-6 font-bold text-slate-900">+₹7,500 – ₹11,000 saved</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 sm:px-6 font-bold text-slate-900">Worksite Daily Commute</td>
                      <td className="py-3 px-4 sm:px-6">€40 – €60 / mo</td>
                      <td className="py-3 px-4 sm:px-6 text-emerald-700 font-bold">€0 (Company Shuttle Bus)</td>
                      <td className="py-3 px-4 sm:px-6 font-bold text-slate-900">+₹3,600 – ₹5,500 saved</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 sm:px-6 font-bold text-slate-900">Personal Groceries &amp; Cooking</td>
                      <td className="py-3 px-4 sm:px-6">€150 – €200 / mo</td>
                      <td className="py-3 px-4 sm:px-6 text-slate-800 font-medium">€150 – €180 / mo (Mess)</td>
                      <td className="py-3 px-4 sm:px-6 text-slate-500">Shared room kitchen pool</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── Section 9: Labour Code & Taxation Mathematics ── */}
          <section id="labour-law-tax" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaScaleUnbalanced className="w-3.5 h-3.5 text-emerald-600" />
              Section 9: Croatian Labour Act &amp; Statutory Taxation
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Statutory Employee Rights Under the Croatian Labour Act (Zakon o radu)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              All foreign workers in Croatia enjoy the exact same statutory protections as Croatian citizens under the law:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <h3 className="text-base font-bold text-slate-900">Working Hours &amp; Paid Leave</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>40-Hour Work Week:</strong> Maximum 8 hours per day across a standard 5-day week.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Overtime Premium:</strong> Minimum +25% to +50% for weekend, holiday, or night work.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>20–24 Days Paid Vacation:</strong> Minimum 4 weeks of fully compensated annual leave.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Paid Sick Leave (Bolovanje):</strong> Certified medical leave paid through HZZO health fund.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <h3 className="text-base font-bold text-slate-900">Healthcare &amp; Social Security</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>HZZO State Medical Cover:</strong> Free emergency and general healthcare in Croatian state hospitals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Workplace Injury Insurance:</strong> Full medical rehabilitation and statutory disability compensation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Strict Ban on Document Retention:</strong> Confiscating employee passports is a severe criminal offense.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Electronic Payroll Stamping:</strong> Wages disbursed directly to employee IBAN bank accounts.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Taxation Mathematics Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FaCalculator className="w-4 h-4 text-emerald-600" />
                Croatian Payroll Mathematics: Gross (Bruto 1) to Net Take-Home (Neto)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Croatian payroll follows a transparent national statutory structure:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-1 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1">1. Pension Contributions (20%)</div>
                  <p className="text-slate-500">15% goes to the 1st Pillar state solidarity fund, and 5% to the candidate&apos;s personal 2nd Pillar retirement account.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1">2. Basic Tax Allowance (€560)</div>
                  <p className="text-slate-500">The first €560 of monthly income is completely exempt from income tax (Osnovni osobni odbitak).</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1">3. Income Tax (Porez na dohodak)</div>
                  <p className="text-slate-500">Income above €560 is taxed at municipal rates (typically 20% in Zagreb/Split, lower in regional counties).</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 10: 5-Year Permanent Residency (PR) ── */}
          <section id="pr-citizenship" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaAward className="w-3.5 h-3.5 text-emerald-600" />
              Section 10: 5-Year Permanent Residency (Stalni boravak) &amp; EU Settlement
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Long-Term Settlement &amp; European Permanent Residence Pathway
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Croatia offers one of the most transparent, legally accessible settlement pathways in the European Union for dedicated third-country workers:
            </p>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Under Article 92 of the Foreigners Act, a third-country national who has resided in the Republic of Croatia continuously and lawfully on a temporary residence permit for <strong>5 continuous years</strong> is entitled to apply for <strong>Permanent Residence (Stalni boravak)</strong>.
              </p>
              <div className="grid md:grid-cols-3 gap-4 pt-2">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="font-bold text-slate-900 text-sm mb-1">Continuous Residency</div>
                  <p className="text-xs text-slate-500">Absences cannot exceed 10 months total or 6 consecutive months over 5 years.</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="font-bold text-slate-900 text-sm mb-1">Basic Croatian Language</div>
                  <p className="text-xs text-slate-500">A2-level fundamental language evaluation conducted by certified state universities.</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="font-bold text-slate-900 text-sm mb-1">Unrestricted EU Rights</div>
                  <p className="text-xs text-slate-500">Upon receiving PR, work permit renewals are no longer required for any Croatian employer.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 11: Anti-Fraud & Safe Hiring Protocol ── */}
          <section id="scam-prevention" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-rose-800">
              <FaTriangleExclamation className="w-3.5 h-3.5 text-rose-600" />
              Section 11: Anti-Fraud &amp; Safe Hiring Protocol
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Protecting Indian Workers Against Unlicensed Agent Fraud
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              With surging interest in European migration, dishonest sub-agents operate fraudulent schemes exploiting trade workers across Bihar, Uttar Pradesh, and Punjab. Protect your hard-earned savings with these official verification protocols:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-6 space-y-3">
                <h3 className="text-base font-bold text-rose-900 flex items-center gap-2">
                  <FaBan className="w-4 h-4 text-rose-600" /> Red Flags of Fraudulent Croatia Offers
                </h3>
                <ul className="space-y-2 text-xs text-rose-800">
                  <li className="flex items-start gap-2">
                    <span className="font-black text-rose-600">•</span>
                    <span><strong>Paper / WhatsApp &apos;Direct Visas&apos;:</strong> MUP never issues paper visas. Work permits are electronic decisions (<em>Rješenje</em>) issued to Croatian enterprises.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-black text-rose-600">•</span>
                    <span><strong>Tourist to Work Visa Promises:</strong> It is strictly illegal to enter Croatia on a Schengen tourist visa and convert to a work permit inside the country.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-black text-rose-600">•</span>
                    <span><strong>Advance Cash Demands:</strong> Sub-agents demanding ₹2 to ₹4 Lakhs upfront before HZZ Labour Market clearance is approved.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-black text-rose-600">•</span>
                    <span><strong>Unverified Employer Details:</strong> Inability to provide the Croatian employer&apos;s 11-digit OIB tax number or company address.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 space-y-3">
                <h3 className="text-base font-bold text-emerald-900 flex items-center gap-2">
                  <FaCircleCheck className="w-4 h-4 text-emerald-600" /> WorkWise Visa Verified Security Standards
                </h3>
                <ul className="space-y-2 text-xs text-emerald-800">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Government-Vetted Employers:</strong> Direct contracts with verified Croatian contractors possessing clean tax standing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>100% Genuine MUP Rješenje:</strong> Verifiable electronic permit decision with sovereign police administration seal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Direct Consular VFS Biometrics:</strong> Official in-person visa stamping through the Embassy of Croatia in New Delhi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Embassy of India in Zagreb Linkage:</strong> All candidate deployments are registered with the Indian diplomatic mission in Zagreb.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Indian Embassy in Zagreb Info Box */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2">
              <div className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2">
                <FaBuildingColumns className="w-3.5 h-3.5 text-emerald-600" />
                Sovereign Consular Support in Croatia:
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Embassy of India, Zagreb:</strong> Vijenac 13, 10000 Zagreb, Croatia. Emergency Consular Helpline: +385 1 4873 239 / +385 1 4873 240. Email: cons.zagreb@mea.gov.in. Website: <a href="https://www.indianembassyzagreb.gov.in" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">indianembassyzagreb.gov.in</a>.
              </p>
            </div>
          </section>

          {/* ── Section 12: Frequently Asked Questions (22 FAQs) ── */}
          <section id="faqs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaCircleQuestion className="w-3.5 h-3.5 text-emerald-600" />
              Section 12: Frequently Asked Questions (22 Inquiries)
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions: Croatia Work Visa 2026
            </h2>

            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {index + 1}. {faq.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 13: Free Consultation & Branch Directory ── */}
          <section id="consultation-form" className="scroll-mt-28 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
                  <FaUserTie className="w-3.5 h-3.5 text-emerald-400" />
                  European Placement Desk
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                  Start Your Croatia Work Visa Assessment Today
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Connect with certified European immigration counselors at WorkWise Visa. We evaluate your trade credentials, verify employer demand in Zagreb, Split, and Rijeka, and guide you through Ministry of External Affairs (MEA) Apostille and consular visa stamping with zero hidden charges.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <FaCheck className="w-4 h-4" />
                    </div>
                    <span>Government-vetted Croatian manufacturing, civil, and shipyard contractors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <FaCheck className="w-4 h-4" />
                    </div>
                    <span>End-to-end guidance: Trade testing, MEA Apostille, and New Delhi Embassy stamping</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <FaCheck className="w-4 h-4" />
                    </div>
                    <span>Free employer-provided housing, transport, and direct Euro (€) earnings</span>
                  </div>
                </div>

                {/* Office Directory Highlights */}
                <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                  <div className="font-bold text-white uppercase tracking-wider text-[11px]">
                    Physical Branch Offices:
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Link href="/locations/noida" className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500 transition-colors">
                      <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                        <FaLocationDot className="w-3.5 h-3.5" /> Noida Corporate HQ
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">Urbtech Trade Centre, Sector 132</div>
                    </Link>
                    <Link href="/locations/patna" className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500 transition-colors">
                      <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                        <FaLocationDot className="w-3.5 h-3.5" /> Patna Regional Branch
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">Varma Centre, Boring Rd Crossing</div>
                    </Link>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <FaPhone className="w-3.5 h-3.5 text-emerald-400" />
                    <a href="tel:+918130161603" className="hover:text-white transition-colors">
                      +91 81301 61603
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="w-3.5 h-3.5 text-emerald-400" />
                    <a href="mailto:workwisevisa@gmail.com" className="hover:text-white transition-colors">
                      workwisevisa@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Consultation Box Card */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
                  <h3 className="text-xl font-bold text-white mb-2">Book Free Consultation</h3>
                  <p className="text-xs text-slate-300 mb-6">
                    Fill in your details below and an overseas European advisor will call you within 24 hours.
                  </p>

                  <form
                    action="/contact"
                    method="GET"
                    className="space-y-4 text-xs sm:text-sm text-slate-800"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Full Name (as per Passport)
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Wasim Akram"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                          WhatsApp Mobile Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                          Trade / Profession
                        </label>
                        <input
                          type="text"
                          name="profession"
                          required
                          placeholder="e.g. 6G Welder, Heavy Driver"
                          className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Target Country Destination
                      </label>
                      <input
                        type="text"
                        name="destination"
                        readOnly
                        value="Croatia (Schengen Area)"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-emerald-400 font-bold focus:outline-none cursor-not-allowed"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 text-sm font-bold text-slate-950 shadow-md hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                      >
                        <span>Submit Croatia Profile For Free Audit</span>
                        <FaArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 text-center pt-2">
                      Your information is strictly protected under our Data Privacy Policy. No spam guaranteed.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
