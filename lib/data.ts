/* ================================================================
   WorkWise Visa — Content Data
   All section data as strongly-typed arrays.
   ================================================================ */

// ── Types ────────────────────────────────────────────────────────

export interface Country {
  name: string;
  code: string;
  flag: string;
  region: string;
  description: string;
  visaTypes: string[];
  processingTime: string;
  popularRoles: string[];
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  country: string;
  flag: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
  duration: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  iconName: string;
}

export interface WhyUsPoint {
  title: string;
  description: string;
  iconName: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  author: string;
  tags: string[];
}

export interface Industry {
  id: string;
  title: string;
  seoTagline: string;
  description: string;
  iconName: string;
  demandLevel: "Very High" | "High" | "Urgent Shortage";
  popularRoles: string[];
  topDestinations: string[];
  averageSalary: string;
  keyBenefits: string[];
}

// ── Countries ────────────────────────────────────────────────────

export const countries: Country[] = [
  {
    name: "United Arab Emirates",
    code: "AE",
    flag: "🇦🇪",
    region: "Gulf",
    description:
      "Dubai & Abu Dhabi offer tax-free income, free company accommodation, and urgent vacancies for construction trades, heavy drivers, and facility helpers.",
    visaTypes: ["Employment Visa", "Work Permit", "Partner Visa"],
    processingTime: "2–3 weeks",
    popularRoles: ["Structural Welder (6G)", "Heavy Trailer Driver", "Masons & Tile Fixers"],
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    flag: "🇸🇦",
    region: "Gulf",
    description:
      "NEOM and Vision 2030 megaprojects are recruiting thousands of heavy equipment operators, pipefitters, electricians, and site helpers.",
    visaTypes: ["Work Visa", "Iqama Work Permit"],
    processingTime: "3–4 weeks",
    popularRoles: ["Heavy Equipment Operator", "Industrial Electrician", "Refinery Pipefitter"],
  },
  {
    name: "Qatar",
    code: "QA",
    flag: "🇶🇦",
    region: "Gulf",
    description:
      "Major commercial infrastructure, airport expansion, and energy projects drive ongoing demand for scaffolders, steel fixers, and stewards.",
    visaTypes: ["Work Visa", "Business Visa"],
    processingTime: "2–3 weeks",
    popularRoles: ["Scaffolder & Steel Fixer", "Kitchen Steward", "Facility Cleaner"],
  },
  {
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    region: "Schengen",
    description:
      "Germany has streamlined trade visas for CNC machine operators, auto mechanics, caregivers, and factory assembly operators.",
    visaTypes: ["Opportunity Card", "Skilled Work Visa", "Caregiver Permit"],
    processingTime: "6–10 weeks",
    popularRoles: ["CNC Machine Operator", "Auto Mechanic", "Factory Assembly Operator"],
  },
  {
    name: "France",
    code: "FR",
    flag: "🇫🇷",
    region: "Schengen",
    description:
      "High demand across hospitality, food processing, logistics, and workshop maintenance with guaranteed accommodation options.",
    visaTypes: ["Salaried Employee Visa", "Seasonal Work Visa"],
    processingTime: "4–8 weeks",
    popularRoles: ["Hotel Housekeeper", "Meat Packer & Cutter", "Workshop Technician"],
  },
  {
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    region: "North America",
    description:
      "Long-haul truck drivers, caregivers, and skilled trade workers enjoy fast-track work permits and permanent residency options.",
    visaTypes: ["LMIA Work Permit", "Caregiver Program", "Provincial Trade Visa"],
    processingTime: "8–14 weeks",
    popularRoles: ["Heavy Truck Driver", "Caregiver & Nursing Aide", "Warehouse Packer"],
  },
  {
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    region: "North America",
    description:
      "H-2B and technical work visas for specialized industrial welders, equipment technicians, and maintenance mechanics.",
    visaTypes: ["H-2B Visa", "EB-3 Unskilled/Skilled"],
    processingTime: "3–6 months",
    popularRoles: ["Industrial Welder", "Machine Operator", "Equipment Technician"],
  },
  {
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    region: "United Kingdom",
    description:
      "Urgent recruitment for care home assistants, nursing aides, security guards, and commercial plumbers with fast UK visa approval.",
    visaTypes: ["Health & Care Worker Visa", "Skilled Worker Visa"],
    processingTime: "3–6 weeks",
    popularRoles: ["Caregiver & Nursing Aide", "Security Guard", "Commercial Plumber"],
  },
  {
    name: "Russia",
    code: "RU",
    flag: "🇷🇺",
    region: "Russia & CIS",
    description:
      "Direct work permits and multi-entry visas for heavy tractor operators, construction masons, and mining rig helpers.",
    visaTypes: ["Standard Work Permit", "Multi-Entry Work Visa"],
    processingTime: "3–6 weeks",
    popularRoles: ["Mining Rig Helper", "Heavy Tractor Operator", "Construction Mason"],
  },
];

// ── Target Country Options for Form ──────────────────────────────

export const targetCountryOptions = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Germany",
  "France",
  "Canada",
  "United States",
  "United Kingdom",
  "Russia",
];

// ── Services ─────────────────────────────────────────────────────

export const services: Service[] = [
  {
    title: "Job Placement",
    description:
      "Direct connections with pre-vetted international employers seeking skilled professionals across engineering, healthcare, IT, and finance.",
    iconName: "Briefcase",
    features: [
      "Employer-backed job offers",
      "Salary negotiation assistance",
      "Contract review & legal compliance",
    ],
  },
  {
    title: "Visa Processing",
    description:
      "Comprehensive visa application management handled by licensed immigration attorneys to ensure maximum approval rates.",
    iconName: "FileCheck",
    features: [
      "Document auditing & preparation",
      "Embassy appointment scheduling",
      "Appeal & rejection recovery support",
    ],
  },
  {
    title: "Document Assistance",
    description:
      "Fast-track degree attestation, embassy apostille, police clearance certificates, and official certified translations.",
    iconName: "FileText",
    features: [
      "HRD & MEA attestation support",
      "Certified legal translations",
      "Medical test clearance guidance",
    ],
  },
  {
    title: "Interview Preparation",
    description:
      "1-on-1 mock interviews coached by former consular officers and industry HR leaders tailored to target country standards.",
    iconName: "GraduationCap",
    features: [
      "Embassy interview simulation",
      "Employer technical interview coaching",
      "Cultural & workplace communication",
    ],
  },
  {
    title: "Post-Landing Support",
    description:
      "We stay with you after arrival: airport reception, temporary housing, bank account opening, and residency registration.",
    iconName: "Headphones",
    features: [
      "Airport pickup & orientation",
      "Housing & lease assistance",
      "Local SIM & bank account setup",
    ],
  },
  {
    title: "Career Counseling",
    description:
      "Personalized international career mapping, skills gap analysis, certification pathways, and CV/LinkedIn optimization for foreign markets.",
    iconName: "Compass",
    features: [
      "Global CV & portfolio redesign",
      "Skill equivalency assessment",
      "Long-term PR & residency planning",
    ],
  },
];

// ── Why Us ───────────────────────────────────────────────────────

export const whyUsPoints: WhyUsPoint[] = [
  {
    title: "98% Visa Approval Rate",
    description:
      "Our multi-layer document audit process eliminates application errors before embassy submission.",
    iconName: "ShieldCheck",
  },
  {
    title: "Transparent Pricing",
    description:
      "Zero hidden fees. Complete fee breakdown upfront with milestone-based payment plans.",
    iconName: "BadgeDollarSign",
  },
  {
    title: "Dedicated Case Managers",
    description:
      "Single point of contact assigned to your file from initial call through visa stamping.",
    iconName: "UserCheck",
  },
  {
    title: "Fastest Processing Times",
    description:
      "Direct embassy ties and streamlined workflows reduce total processing time by up to 40%.",
    iconName: "Zap",
  },
  {
    title: "Licensed & Recognized",
    description:
      "Fully accredited by government migration authorities across all operating jurisdictions.",
    iconName: "Award",
  },
  {
    title: "Real-Time Tracking",
    description:
      "24/7 client portal access to monitor document status, embassy updates, and milestone timelines.",
    iconName: "Activity",
  },
];

// ── Process Steps ────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Free Profile Evaluation",
    description:
      "Book a 1-on-1 call with our specialist to assess your qualifications, work experience, and target country eligibility.",
    iconName: "MessageCircle",
    duration: "Day 1",
  },
  {
    step: 2,
    title: "Job Matching & Offer",
    description:
      "We align your resume with verified international job openings and arrange direct employer interviews.",
    iconName: "Search",
    duration: "Weeks 1–3",
  },
  {
    step: 3,
    title: "Document Compilation",
    description:
      "Our legal team prepares, translates, and attests all required certificates, police clearances, and medicals.",
    iconName: "FolderOpen",
    duration: "Weeks 3–5",
  },
  {
    step: 4,
    title: "Visa Application Submission",
    description:
      "Formal visa petition lodged with the respective embassy or immigration authority with full tracking.",
    iconName: "Send",
    duration: "Weeks 5–8",
  },
  {
    step: 5,
    title: "Visa Approval & Stamping",
    description:
      "Receive your stamped passport and official work authorization permit from the embassy.",
    iconName: "CheckCircle",
    duration: "Weeks 8–10",
  },
  {
    step: 6,
    title: "Flight & Relocation",
    description:
      "Flight booking, airport pickup, initial accommodation, and orientation in your destination city.",
    iconName: "Plane",
    duration: "Week 11+",
  },
];

// ── Testimonials ─────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh Sharma",
    role: "Structural Welder (6G)",
    company: "Al Habtoor Engineering",
    country: "UAE",
    flag: "🇦🇪",
    quote:
      "WorkWise Visa arranged my trade test in India and processed my Dubai Employment Visa in 18 days. Provided free company housing and food allowance. Genuine agency!",
  },
  {
    name: "Priya Nair",
    role: "Caregiver & Elderly Care Aide",
    company: "Standard Care Network",
    country: "United Kingdom",
    flag: "🇬🇧",
    quote:
      "Secured my Health & Care Worker Visa for Manchester smoothly. WorkWise handled embassy documentation, police clearance, and airport pickup seamlessly.",
  },
  {
    name: "Vikram Patel",
    role: "Heavy Trailer Driver (GCC)",
    company: "Riyadh Logistics Corp",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    quote:
      "Transparent fees and zero false promises. My GCC license transfer and Iqama work permit for Riyadh were completed ahead of schedule.",
  },
  {
    name: "Ananya Roy",
    role: "CNC Machine Operator",
    company: "Precision Auto Components",
    country: "Germany",
    flag: "🇩🇪",
    quote:
      "Landed in Munich with a guaranteed factory contract, trade work permit, and accommodation. Forever grateful to the WorkWise Visa team!",
  },
  {
    name: "Siddharth Verma",
    role: "Industrial Electrician",
    company: "Ras Laffan Energy Plant",
    country: "Qatar",
    flag: "🇶🇦",
    quote:
      "Their document verification and medical clearance audit helped me get my Qatar Work Permit on the first attempt without any embassy delays.",
  },
];

// ── FAQs ─────────────────────────────────────────────────────────

export const faqs: FAQItem[] = [
  {
    question: "How much does WorkWise Visa's service cost?",
    answer:
      "Our fees vary by destination country and service package. A standard job placement + visa processing package ranges from ₹75,000 to ₹2,500,000 depending on complexity. We provide a detailed fee breakdown during your free consultation — no hidden charges, ever. Payment plans are available.",
  },
  {
    question: "How long does the entire process take?",
    answer:
      "Timeline depends on the destination: Gulf visas (UAE, Saudi, Qatar) typically take 2–4 weeks; European visas (Germany, France) take 6–12 weeks; Canada and USA take 2–6 months. We provide guaranteed milestone schedules upfront.",
  },
  {
    question: "Do I need a job offer before applying for a visa?",
    answer:
      "Not necessarily. Certain countries offer Job Seeker or Opportunity Visas (e.g. Germany, UAE Green Visa) where you can enter first and look for work. For employer-sponsored visas, our recruitment division matches you with pre-verified job openings before visa filing.",
  },
  {
    question: "What if my visa application gets rejected?",
    answer:
      "We maintain a 98% first-time approval rate thanks to pre-submission legal audits. In the rare event of a rejection, our legal team files a formal appeal or re-applies at no additional consultancy charge.",
  },
  {
    question: "Is degree attestation mandatory for all countries?",
    answer:
      "Degree attestation (HRD, MEA, and Embassy stamping) is required for skilled professional visas in most Gulf countries and parts of Europe. We provide full-service document attestation so you don't have to visit government offices yourself.",
  },
  {
    question: "Can I bring my family with me on a work visa?",
    answer:
      "Yes! Most skilled work visas (such as UAE Golden Visa, Germany Blue Card, Canada Work Permit, UK Skilled Worker) allow you to sponsor your spouse and dependent children for family residency visas.",
  },
];

// ── Stats ────────────────────────────────────────────────────────

export const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Years of Excellence", iconName: "CalendarDays" },
  { value: 5000, suffix: "+", label: "Successful Placements", iconName: "Users" },
  { value: 98, suffix: "%", label: "Visa Approval Rate", iconName: "TrendingUp" },
  { value: 12, suffix: "+", label: "Partner Nations", iconName: "Globe" },
];

// ── Industries We Serve ──────────────────────────────────────────

export const industries: Industry[] = [
  {
    id: "construction-trades",
    title: "Construction & Civil Trades",
    seoTagline: "High-demand trade jobs & work permits for Gulf & Europe megaprojects",
    description:
      "Deploying certified masons, welders, electricians, plumbers, scaffolders, and heavy equipment operators for large-scale infrastructure and smart city developments.",
    iconName: "HelmetSafety",
    demandLevel: "Urgent Shortage",
    popularRoles: ["Masons & Tile Fixers", "Structural Welders (6G/3G)", "Electricians & Plumbers", "Heavy Equipment Operators", "Scaffolders & Steel Fixers"],
    topDestinations: ["Saudi Arabia 🇸🇦", "UAE 🇦🇪", "Qatar 🇶🇦", "Russia 🇷🇺", "Germany 🇩🇪"],
    averageSalary: "$1,200 – $3,500 / mo",
    keyBenefits: ["Free company accommodation", "Free transport & food allowance", "Overtime pay & return flight tickets"],
  },
  {
    id: "transport-driving",
    title: "Heavy Transport & Drivers",
    seoTagline: "Work visas for heavy bus/trailer drivers & logistics handlers",
    description:
      "Recruiting licensed heavy truck drivers, trailer operators, bus drivers, delivery riders, and warehouse material handlers for international transport hubs.",
    iconName: "Truck",
    demandLevel: "Urgent Shortage",
    popularRoles: ["Heavy Trailer Drivers (GCC license)", "Heavy Bus & Truck Drivers", "Forklift Operators", "Delivery Riders", "Warehouse Packers"],
    topDestinations: ["UAE 🇦🇪", "Saudi Arabia 🇸🇦", "Qatar 🇶🇦", "Germany 🇩🇪", "Canada 🇨🇦"],
    averageSalary: "$1,400 – $4,000 / mo",
    keyBenefits: ["GCC license transfer support", "Trip bonuses & overtime", "Free accommodation & medical cover"],
  },
  {
    id: "oil-gas-industrial",
    title: "Oil, Gas & Plant Maintenance",
    seoTagline: "Certified rig workers, pipefitters & industrial technicians",
    description:
      "Placing experienced pipefitters, industrial electricians, 6G argon welders, mechanical fitters, and safety attendants in refineries, power plants, and offshore rigs.",
    iconName: "Wrench",
    demandLevel: "Very High",
    popularRoles: ["TIG/MIG/Argon Welders", "Pipefitters & Fabricators", "Industrial Electricians", "Mechanical Fitters", "Safety Helpers & Riggers"],
    topDestinations: ["Saudi Arabia 🇸🇦", "UAE 🇦🇪", "Qatar 🇶🇦", "Russia 🇷🇺", "Kuwait 🇰🇼"],
    averageSalary: "$1,500 – $4,500 / mo",
    keyBenefits: ["Offshore & site hazard allowance", "Rotational flight tickets", "Free lodging & food"],
  },
  {
    id: "factory-manufacturing",
    title: "Factory & Manufacturing Workers",
    seoTagline: "Work permits for factory assembly, packing & machine operators",
    description:
      "Supplying reliable assembly line workers, packing staff, CNC machine operators, and quality checkers for manufacturing plants across Europe and the Middle East.",
    iconName: "Industry",
    demandLevel: "Very High",
    popularRoles: ["Assembly Line Operators", "Packing & Sorting Workers", "CNC Machine Operators", "Plastic & Metal Machine Helpers", "Quality Checkers"],
    topDestinations: ["Germany 🇩🇪", "Russia 🇷🇺", "UAE 🇦🇪", "Saudi Arabia 🇸🇦", "Poland 🇵🇱"],
    averageSalary: "$1,100 – $3,200 / mo",
    keyBenefits: ["Shift allowance & overtime", "Standardized work hours", "Full visa & work permit sponsorship"],
  },
  {
    id: "hospitality-cleaning",
    title: "Hospitality & Facility Cleaning",
    seoTagline: "Recruitment for hotel stewards, housekeepers & facility helpers",
    description:
      "Sponsoring stewards, housekeepers, facility cleaners, security guards, and kitchen helpers for 5-star hotel groups, commercial complexes, and international airports.",
    iconName: "Broom",
    demandLevel: "High",
    popularRoles: ["Kitchen Helpers & Stewards", "Housekeeping Room Attendants", "Facility Cleaners", "Security Guards", "Laundry Technicians"],
    topDestinations: ["UAE 🇦🇪", "Qatar 🇶🇦", "Saudi Arabia 🇸🇦", "UK 🇬🇧", "Oman 🇴🇲"],
    averageSalary: "$1,000 – $2,800 / mo",
    keyBenefits: ["Duty meals provided", "Company accommodation & uniforms", "Tips & service charge shares"],
  },
  {
    id: "automotive-mechanics",
    title: "Automotive & Workshop Technicians",
    seoTagline: "Work visas for auto mechanics, auto electricians & body painters",
    description:
      "Deploying skilled auto mechanics, diesel technicians, auto electricians, denters, and spray painters to commercial fleet workshops and service centers.",
    iconName: "ScrewdriverWrench",
    demandLevel: "Very High",
    popularRoles: ["Auto Mechanics (Diesel & Petrol)", "Auto Electricians", "Denters & Panel Beaters", "Automotive Spray Painters", "Tyre & AC Technicians"],
    topDestinations: ["UAE 🇦🇪", "Saudi Arabia 🇸🇦", "Qatar 🇶🇦", "Germany 🇩🇪", "Kuwait 🇰🇼"],
    averageSalary: "$1,300 – $3,800 / mo",
    keyBenefits: ["Trade test center support", "Work order bonuses", "Free medical & accommodation"],
  },
  {
    id: "caregiver-nursing-support",
    title: "Caregivers & Hospital Helpers",
    seoTagline: "Relocation support for nursing aides, caregivers & hospital staff",
    description:
      "Facilitating work visas for certified nursing aides, elderly caregivers, home health attendants, and hospital orderlies for care homes and medical centers.",
    iconName: "HandHoldingHeart",
    demandLevel: "Urgent Shortage",
    popularRoles: ["Caregivers & Elderly Care Aides", "Nursing Assistants", "Hospital Orderlies & Helpers", "Patient Care Technicians"],
    topDestinations: ["UK 🇬🇧", "Germany 🇩🇪", "Canada 🇨🇦", "UAE 🇦🇪", "Israel 🇮🇱"],
    averageSalary: "$1,500 – $4,200 / mo",
    keyBenefits: ["Fast-track Care Worker visas", "Overtime benefits", "PR & settlement pathways"],
  },
  {
    id: "agriculture-food-processing",
    title: "Agriculture & Food Processing",
    seoTagline: "Work permits for farm hands, greenhouse workers & food packers",
    description:
      "Placing agricultural workers, greenhouse technicians, livestock handlers, and food processing plant workers in seasonal and long-term overseas roles.",
    iconName: "Tractor",
    demandLevel: "High",
    popularRoles: ["Farm Workers & Harvesters", "Greenhouse Technicians", "Meat Cutters & Packers", "Agricultural Machine Helpers"],
    topDestinations: ["Russia 🇷🇺", "Germany 🇩🇪", "Canada 🇨🇦", "UK 🇬🇧", "UAE 🇦🇪"],
    averageSalary: "$1,200 – $3,200 / mo",
    keyBenefits: ["Seasonal & multi-year visas", "Provided farm housing", "Flight & transport allowance"],
  },
];

// ── Blog Posts ───────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Complete Guide to UAE & Saudi Arabia Blue-Collar Work Permits in 2026",
    category: "Gulf Visas",
    date: "Sep 10, 2026",
    readTime: "5 min read",
    excerpt:
      "Everything you need to know about GAMCA medical tests, trade center testing, Iqama rules, and employer accommodation allowances for overseas workers.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    author: "WorkWise Visa Team",
    tags: ["Gulf Visas", "Work Permits", "GAMCA Medical"],
  },
  {
    id: "blog-2",
    title: "Germany Opportunity Card: How Trade Workers & Technicians Can Apply",
    category: "Schengen Visa",
    date: "Sep 05, 2026",
    readTime: "6 min read",
    excerpt:
      "Detailed breakdown of eligibility points, trade skill recognition, and fast-track German work permit processing for mechanics, welders, and factory operators.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    author: "Immigration Desk",
    tags: ["Germany", "Opportunity Card", "Skilled Trades"],
  },
  {
    id: "blog-3",
    title: "UK Health & Care Worker Visa: Essential Requirements for Caregivers",
    category: "UK Immigration",
    date: "Aug 28, 2026",
    readTime: "4 min read",
    excerpt:
      "Understanding English language requirements, police clearance certificates, care home sponsorship, and settlement pathways in the United Kingdom.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    author: "UK Relocation Team",
    tags: ["UK Visa", "Caregiver Jobs", "Healthcare"],
  },
  {
    id: "blog-4",
    title: "GCC Heavy Vehicle License Transfer & Driving Jobs in Dubai & Riyadh",
    category: "Driver Recruitment",
    date: "Aug 20, 2026",
    readTime: "5 min read",
    excerpt:
      "Step-by-step guide for heavy bus and trailer drivers to convert licenses, pass driving tests, and land high-paying international transport contracts.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    author: "Logistics Desk",
    tags: ["Heavy Driver", "GCC License", "Dubai Jobs"],
  },
];
