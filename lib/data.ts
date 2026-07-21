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

// ── Countries ────────────────────────────────────────────────────

export const countries: Country[] = [
  {
    name: "United Arab Emirates",
    code: "AE",
    flag: "🇦🇪",
    region: "Gulf",
    description:
      "Dubai & Abu Dhabi offer tax-free salaries, world-class infrastructure, and fast-growing sectors in tech, finance, and construction.",
    visaTypes: ["Employment Visa", "Golden Visa", "Green Visa"],
    processingTime: "2–4 weeks",
    popularRoles: ["Software Engineer", "Project Manager", "Financial Analyst"],
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    flag: "🇸🇦",
    region: "Gulf",
    description:
      "Vision 2030 is driving massive investment across healthcare, tourism, and technology — creating thousands of international roles.",
    visaTypes: ["Work Visa", "Premium Residency"],
    processingTime: "3–6 weeks",
    popularRoles: ["Healthcare Professional", "Civil Engineer", "IT Specialist"],
  },
  {
    name: "Qatar",
    code: "QA",
    flag: "🇶🇦",
    region: "Gulf",
    description:
      "Post-World Cup infrastructure and the National Vision 2030 continue to fuel demand for skilled professionals across sectors.",
    visaTypes: ["Work Visa", "Business Visa"],
    processingTime: "2–4 weeks",
    popularRoles: ["Mechanical Engineer", "Hospitality Manager", "Architect"],
  },
  {
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    region: "Schengen",
    description:
      "Europe's largest economy with critical talent shortages in engineering, IT, and healthcare. The Opportunity Card makes entry easier than ever.",
    visaTypes: ["EU Blue Card", "Job Seeker Visa", "Opportunity Card"],
    processingTime: "6–12 weeks",
    popularRoles: ["Software Developer", "Mechanical Engineer", "Nurse"],
  },
  {
    name: "France",
    code: "FR",
    flag: "🇫🇷",
    region: "Schengen",
    description:
      "A thriving tech startup scene (La French Tech) combined with demand in luxury, aerospace, and engineering sectors.",
    visaTypes: ["Talent Passport", "Salaried Employee Visa"],
    processingTime: "4–8 weeks",
    popularRoles: ["Data Scientist", "Aerospace Engineer", "Marketing Manager"],
  },
  {
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    region: "North America",
    description:
      "Express Entry, Provincial Nominee Programs, and Global Talent Stream offer multiple pathways to both work and permanent residency.",
    visaTypes: ["Express Entry", "PNP", "LMIA Work Permit", "Global Talent Stream"],
    processingTime: "8–16 weeks",
    popularRoles: ["Full Stack Developer", "Registered Nurse", "Accountant"],
  },
  {
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    region: "North America",
    description:
      "H-1B, L-1, and O-1 visas for specialists. We navigate the complex lottery system and employer sponsorship for you.",
    visaTypes: ["H-1B", "L-1", "O-1", "EB Categories"],
    processingTime: "3–6 months",
    popularRoles: ["Software Engineer", "Data Analyst", "Research Scientist"],
  },
  {
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    region: "United Kingdom",
    description:
      "Skilled Worker and Global Talent visas offer clear pathways for professionals in tech, healthcare, finance, and engineering.",
    visaTypes: ["Skilled Worker Visa", "Global Talent Visa", "Health & Care Worker"],
    processingTime: "3–8 weeks",
    popularRoles: ["Registered Nurse", "Software Engineer", "Financial Analyst"],
  },
  {
    name: "Russia",
    code: "RU",
    flag: "🇷🇺",
    region: "Russia & CIS",
    description:
      "Growing opportunities in energy, mining, construction, and technology with streamlined work permits for qualified professionals.",
    visaTypes: ["Highly Qualified Specialist", "Standard Work Permit"],
    processingTime: "4–8 weeks",
    popularRoles: ["Mining Engineer", "IT Architect", "Project Director"],
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
    role: "Senior Software Engineer",
    company: "Tech Solutions",
    country: "UAE",
    flag: "🇦🇪",
    quote:
      "WorkWise Visa secured my Dubai job offer and processed my Employment Visa in just 18 days. The team handled everything from degree attestation to airport pickup. Incredible service!",
  },
  {
    name: "Priya Nair",
    role: "Registered Nurse",
    company: "Helios Hospital",
    country: "Germany",
    flag: "🇩🇪",
    quote:
      "Getting an EU Blue Card felt intimidating until I found WorkWise. They guided me through document recognition, mock interviews, and visa stamping seamlessly. Highly recommended!",
  },
  {
    name: "Vikram Patel",
    role: "Civil Project Manager",
    company: "Red Sea Development",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    quote:
      "Transparent fees, zero false promises, and real-time updates throughout. Secured my Work Visa for Riyadh ahead of schedule. Truly professional consultancy.",
  },
  {
    name: "Ananya Roy",
    role: "Full Stack Developer",
    company: "Shopify Partner",
    country: "Canada",
    flag: "🇨🇦",
    quote:
      "Their Express Entry and LMIA guidance was spot-on. Within 4 months, I landed in Toronto with a permanent work permit. Forever grateful to the WorkWise team!",
  },
  {
    name: "Siddharth Verma",
    role: "Financial Analyst",
    company: "Barclays UK",
    country: "United Kingdom",
    flag: "🇬🇧",
    quote:
      "The Skilled Worker Visa process was stress-free thanks to my dedicated case manager. Every document was checked twice. Approved on the first attempt!",
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
  { value: 15, suffix: "+", label: "Years of Excellence", iconName: "CalendarDays" },
  { value: 5000, suffix: "+", label: "Successful Placements", iconName: "Users" },
  { value: 98, suffix: "%", label: "Visa Approval Rate", iconName: "TrendingUp" },
  { value: 12, suffix: "+", label: "Partner Nations", iconName: "Globe" },
];
