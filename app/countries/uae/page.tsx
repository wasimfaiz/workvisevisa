import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  FaCheck,
  FaArrowRight,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaShieldHalved,
  FaBuildingColumns,
  FaFileInvoiceDollar,
  FaBriefcase,
  FaUserCheck,
  FaClock,
  FaMoneyBillWave,
  FaHospital,
  FaTruckFast,
  FaUtensils,
  FaHelmetSafety,
  FaWrench,
  FaPassport,
  FaPlaneArrival,
  FaScaleUnbalanced,
  FaHandshakeAngle,
  FaTriangleExclamation,
  FaCircleQuestion,
  FaMagnifyingGlass,
  FaCalculator,
  FaLocationDot,
  FaCertificate,
  FaArrowTrendUp,
} from "react-icons/fa6";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "UAE Work Visa & Dubai Jobs Guide 2026 | WorkWise Visa",
  description:
    "Complete 2026 UAE work visa guide. Explore Dubai MOHRE work permits, tax-free salary scales across 40+ trades, DHA medical tests & genuine Gulf job vacancies.",
  keywords: [
    "UAE work visa 2026",
    "Dubai employment visa process",
    "MOHRE work permit UAE",
    "Dubai blue collar jobs salary 2026",
    "Dubai driver jobs recruitment",
    "UAE 6G welder jobs visa",
    "DHA medical test Dubai rules",
    "Emirates ID biometric appointment",
    "UAE labour law gratuity calculation 2026",
    "Dubai visit visa to employment visa change",
    "WPS salary system UAE",
    "Dubai construction recruitment agency",
    "WorkWise Visa UAE jobs",
    "MOHRE offer letter MB-1 verification",
    "Dubai hotel staff visa requirements",
    "UAE Green Visa skilled talent",
    "UAE Golden Visa 10 years",
    "Tadbeer domestic worker visa rules",
    "Tawteen Emiratization quota 2026",
    "UAE overstay fine 50 AED per day",
    "ILOE unemployment insurance UAE"
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/uae`,
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
    title: "UAE Work Visa & Dubai Jobs Guide 2026 | WorkWise Visa",
    description:
      "Complete 2026 UAE work visa guide. Explore Dubai MOHRE work permits, tax-free salary scales across 40+ trades, DHA medical tests & genuine Gulf job vacancies.",
    url: `${BASE_URL}/countries/uae`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "UAE Dubai Work Visa & Recruitment Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE Work Visa & Dubai Jobs Guide 2026 | WorkWise Visa",
    description:
      "Complete 2026 UAE work visa guide. Explore Dubai MOHRE work permits, tax-free salary scales across 40+ trades, DHA medical tests & genuine Gulf job vacancies.",
    images: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function UAECountryPage() {
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
        name: "United Arab Emirates (UAE)",
        item: `${BASE_URL}/countries/uae`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "UAE Work Visa & Dubai Employment Guide 2026: Complete MOHRE Process, Salaries, Trade Vacancies & Legal Rights",
    description:
      "Comprehensive, expert-backed manual for migrating and working in the United Arab Emirates (Dubai, Abu Dhabi, Sharjah). Covers MOHRE work permits, GDRFA entry visas, DHA medical clearance, 2026 salary scales across 40+ trades, and labour law protections.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    author: {
      "@type": "Organization",
      name: "WorkWise Visa Overseas Employment Editorial Team",
      url: `${BASE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "WorkWise Visa",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/workwise_logo.png`,
      },
    },
    datePublished: "2026-01-15T09:00:00+04:00",
    dateModified: "2026-10-20T10:00:00+04:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/countries/uae`,
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Obtain a UAE Work Permit and Residence Visa in 2026",
    description: "The 7-phase step-by-step statutory process for securing a legal employment residence visa in Dubai, Abu Dhabi, and across the UAE under MOHRE and GDRFA regulations.",
    totalTime: "P25D",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Phase 1: Job Offer Issuance & MOHRE Standard Offer Letter (MB-1 Form)",
        text: "The formal recruitment cycle begins when an accredited UAE employer extends a verified job offer to the overseas candidate. Under UAE Ministerial Resolution No. 764 of 2015, employers are strictly prohibited from using informal, non-standard appointment letters. The employer must generate an official bilingual (English and Arabic) MOHRE Offer Letter—designated as the MB-1 Form—directly from the MOHRE smart labor portal. This statutory document explicitly outlines the job title, MOHRE skill level classification, basic wage, accommodation allowances, transport provisions, medical insurance category, working hours, and termination notice periods. The candidate must carefully review, physically sign, and fingerprint every page of this document in their home country. Once signed, no employer can legally alter, reduce wages, or downgrade working conditions when generating the final electronic employment contract.",
        url: `${BASE_URL}/countries/uae#step-by-step`
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Phase 2: MOHRE Electronic Work Permit Quota & Pre-Approval",
        text: "Upon receiving the candidate's signed MB-1 offer letter, passport copy, and passport photograph, the sponsoring employer's licensed Public Relations Officer (PRO) submits an electronic application for an Initial Work Permit (Quota Pre-Approval). MOHRE verifies the company's legal standing: confirming the company holds valid commercial trade licenses, maintains 100% compliance with the Wage Protection System (WPS) for its existing workforce, and has satisfied mandatory national Emiratization (Tawteen) thresholds. For mainland firms, the employer pays the initial government quota fee and provides a statutory bank guarantee of AED 3,000 per worker or purchases a low-cost Taa-meen worker protection insurance policy (costing approximately AED 120 for two years) which secures up to AED 20,000 in unpaid wages and repatriation benefits for the employee in case of corporate insolvency.",
        url: `${BASE_URL}/countries/uae#step-by-step`
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Phase 3: Pre-Departure Wafid (GAMCA) Medical Fitness Examination",
        text: "Before applying for the electronic entry permit, candidates residing in notified countries (such as India, Pakistan, Nepal, Bangladesh, Philippines, and Sri Lanka) must undergo mandatory pre-departure medical screening at an accredited Wafid (formerly GAMCA) medical examination center. The candidate registers on the official Wafid online portal (wafid.com), pays the standard appointment fee (approximately $10 to $15 USD online plus local clinic examination fees), and is automatically assigned a licensed medical center in their home city. The screening protocol includes a digital chest X-ray to detect pulmonary tuberculosis lesions or pleural calcifications, comprehensive blood serology tests for HIV-1/2 antibodies, Hepatitis B surface antigen (HBsAg), and Hepatitis C antibodies (HCV), Venereal Disease Research Laboratory (VDRL / Syphilis) tests, urine routine analysis, and physical vitals assessment. Once cleared, the clinic uploads an official 'FIT' certificate directly to the GCC immigration database.",
        url: `${BASE_URL}/countries/uae#step-by-step`
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Phase 4: GDRFA / ICP Electronic Employment Entry Permit Issuance (Pink Visa)",
        text: "With the MOHRE work permit pre-approval and the online Wafid medical clearance registered, the file is automatically transferred through the unified electronic immigration gateway to the local residency authority—the General Directorate of Residency and Foreigners Affairs (GDRFA) for Dubai employment, or the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) for Abu Dhabi, Sharjah, Ajman, RAK, and Fujairah. The immigration system performs national security screening and generates the official Electronic Employment Entry Permit (widely referred to as the 'Pink Visa' or Entry Visa Paper). This document contains a unique visa number, unified number (UID), and a scannable encrypted QR barcode. It grants the foreign worker legal entry into the UAE for employment purposes and is strictly valid for 60 calendar days from the date of issuance to enter the country.",
        url: `${BASE_URL}/countries/uae#step-by-step`
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Phase 5: Indian Emigration Clearance (PoE / e-Migrate) & Flight Deployment",
        text: "For Indian nationals holding Emigration Check Required (ECR) passports, mandatory Emigration Clearance (EC) must be secured before departure under the Indian Emigration Act of 1983. The overseas employer or authorized recruiting agent (such as WorkWise Visa) uploads the candidate's verified employment contract and details onto the Indian government's e-Migrate digital platform (emigrate.gov.in). The candidate is simultaneously enrolled in the mandatory Pravasi Bharatiya Bima Yojana (PBBY) insurance scheme, which provides ₹10 Lakh INR in insurance coverage for accidental death, permanent disability, medical repatriation, and family travel assistance for a nominal premium of approximately ₹375 INR for two years. Candidates holding ECNR (Non-ECR) passports do not require PoE clearance. Sponsoring employers issue direct flight tickets to Dubai (DXB), Abu Dhabi (AUH), or Sharjah (SHJ). WorkWise Visa representatives coordinate airport departure briefings and organize reception at the UAE arrival terminal.",
        url: `${BASE_URL}/countries/uae#step-by-step`
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Phase 6: In-Country DHA / EHS Medical Fitness Screening & Emirates ID Biometrics",
        text: "Upon arriving in the UAE on their employment entry permit, the candidate has a statutory window of 60 days to complete all residency formalities. Within the first week of arrival, the company's PRO schedules and transports the worker to an accredited government medical fitness center—such as the DHA Al Muhaisnah Medical Fitness Centre, Karama Centre, or Al Quoz Mall Centre in Dubai, or an EHS Preventive Medicine Centre in Abu Dhabi or Sharjah. Workers undergo confirmatory in-country digital chest X-rays and blood tests. Simultaneously, the PRO registers the candidate for their Smart Emirates ID appointment at an ICP Customer Happiness Centre or authorized typing center. During the biometrics appointment, the worker's 10-digit fingerprints, high-resolution facial photograph, and optical iris scans are digitally captured for inclusion in the national population registry.",
        url: `${BASE_URL}/countries/uae#step-by-step`
      },
      {
        "@type": "HowToStep",
        position: 7,
        name: "Phase 7: Residence Visa Stamping, Smart Emirates ID Delivery & WPS Payroll Integration",
        text: "Once the DHA / EHS medical fitness certificate is transmitted electronically to immigration, the GDRFA or ICP issues the final digital Residence Visa. Under updated federal immigration guidelines, physical residence visa stickers in passports have been replaced by the unified Smart Emirates ID card, which serves as both national identity card and proof of legal residency. The physical card is produced and delivered to the employer via Emirates Post. Concurrently, the employer finalizes the employee's onboarding: executing company safety and operational inductions, enrolling the employee in mandatory private medical health insurance, and opening their Wage Protection System (WPS) bank account or issuing a Central Bank-approved pre-loaded electronic payroll card (such as an Al Ansari PayPlus or LuLu Exchange Payroll Card). The worker is formally deployed to their project worksite with full statutory legal status.",
        url: `${BASE_URL}/countries/uae#step-by-step`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I convert a 30-day or 60-day Dubai tourist or visit visa into an employment residence visa without leaving the UAE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Under current GDRFA Dubai and ICP immigration guidelines, foreign nationals who secure a genuine job offer while in the UAE on an entry permit, tourist visa, or visit visa can legally complete an in-country status change (Status Amendment / Inside Country Visa Change). Once your employer's Public Relations Officer (PRO) secures the MOHRE Electronic Work Permit Pre-Approval and the GDRFA Electronic Employment Entry Permit, an in-country status change transaction is executed online. The statutory government amendment fee (approximately AED 550 to AED 750, plus typing service charges) must by law be borne entirely by the sponsoring employer. You do not need to exit via Kish Island, Oman Hatta border, or undertake an airport-to-airport flight run."
        }
      },
      {
        "@type": "Question",
        name: "Who is legally responsible for paying UAE employment visa processing costs, flight tickets, and medical fees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Article 6 of UAE Federal Decree-Law No. 33 of 2021 (Regulation of Labour Relations), the sponsoring employer is legally and strictly required to bear all recruitment costs, government agency fees, quota application charges, work permit issuance fees, entry permit fees, in-country DHA/EHS medical screening costs, Emirates ID card fees, and residency stamping expenses. It is an unlawful statutory offense for any employer, HR manager, or recruitment agency to deduct visa costs from an employee's salary, withhold paychecks as visa reimbursement, or force candidates to pay upfront recruitment fees. Employers violating this rule face administrative fines of up to AED 100,000 per violation from MOHRE and potential commercial trade license suspension."
        }
      },
      {
        "@type": "Question",
        name: "Can an employer in Dubai or the UAE legally confiscate or hold an employee's passport?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Retaining or confiscating an employee's passport is strictly illegal under UAE Federal Law. Ministry of Interior Circular No. 267 of 2002 and judicial precedents under Federal Decree-Law No. 33 of 2021 stipulate that a worker's international passport is the legal property of the issuing government and personal possession of the individual worker. An employer may only temporarily hold a passport with the employee's explicit written consent for executing immigration procedures (such as residency stamping or visa renewal) and must return it immediately afterward. If an employer refuses to return your passport upon written request, you have the immediate legal right to lodge an emergency petition with the Dubai Labour Court or local police service to recover your travel document without filing a full labor dispute."
        }
      },
      {
        "@type": "Question",
        name: "How is End-of-Service Gratuity (ESB) calculated under UAE Labour Law in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Article 51 of Federal Decree-Law No. 33 of 2021, full-time expatriate employees completing at least one continuous year of service with an employer are legally entitled to End-of-Service Gratuity upon contract conclusion. The calculation is based strictly on the employee's final basic wage (excluding allowances such as housing, transport, or overtime):\\n1. For service between 1 and 5 years: 21 calendar days of basic wage for each completed year of service.\\n2. For service exceeding 5 years: 30 calendar days of basic wage for each additional completed year beyond year five.\\nFractions of a year are calculated proportionally. Under the 2021/2022 unified labour law reforms, there is no longer any distinction between employer termination and employee resignation—full gratuity is preserved. Total gratuity payout cannot exceed two years' gross remuneration. Alternatively, employers enrolled in the Cabinet Resolution No. 96 of 2023 voluntary savings investment scheme deposit monthly capital into accredited investment funds instead of a lump sum upon exit."
        }
      },
      {
        "@type": "Question",
        name: "What medical fitness tests are mandatory for obtaining a UAE residency work visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All foreign expatriates must pass medical fitness testing to secure a UAE residence visa. Before departure from home countries (such as India, Pakistan, Nepal, Bangladesh, Philippines, or Sri Lanka), applicants complete a screening at a GCC Authorized Medical Centers Association (GAMCA / Wafid) clinic. Upon arrival in the UAE, a mandatory in-country screening is conducted at a Dubai Health Authority (DHA) Medical Fitness Center or an Emirates Health Services (EHS) clinic. The core screening comprises a Chest Digital X-Ray (to screen for active pulmonary Tuberculosis or old fibrotic calcifications) and Blood Serology (to test for HIV-1/2 antibodies and Syphilis/VDRL). For six regulated high-contact job roles—including food and beverage handlers, restaurant staff, cafeteria cooks, barbers, beauty salon specialists, domestic workers, nursery teachers, and private drivers—a Hepatitis B surface antigen (HBsAg) blood test is also mandatory."
        }
      },
      {
        "@type": "Question",
        name: "What happens if old healed TB scars are detected on my chest X-ray in Dubai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under UAE Federal Ministerial Resolution No. 28 of 2010 and updated DHA medical fitness guidelines, candidates undergoing initial residence visa screening who exhibit pulmonary abnormalities or healed fibrotic scars on their chest X-ray are not automatically declared unfit or deported. Instead, they are referred to specialized preventive medicine hubs (such as the DHA Al Muhaisnah Medical Fitness Center) for advanced secondary diagnostic evaluation, including a GeneXpert MTB/RIF sputum PCR test and a 3-day sputum smear culture. If active mycobacterium tuberculosis is ruled out and the candidate is diagnosed with an inactive, healed scar, they are granted a conditional 1-year 'Fit under Treatment / Monitoring' residence visa. They undergo prophylactic outpatient therapy at a government chest clinic and obtain permanent clearance upon renewal."
        }
      },
      {
        "@type": "Question",
        name: "What is the UAE Wage Protection System (WPS) and how does it safeguard workers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Wage Protection System (WPS) is an electronic payroll auditing infrastructure developed jointly by the Central Bank of the UAE (CBUAE) and MOHRE. Under Cabinet Resolution No. 1 of 2022, all private-sector mainland employers are legally obligated to disburse salaries to at least 90% of their registered workforce electronically through authorized UAE commercial banks or Central Bank-licensed exchange houses (such as Al Ansari Exchange, LuLu Exchange, or Al Fardan Exchange) via pre-loaded ATM salary cards on or before the due date. The system automatically tracks every worker's basic wage and allowances against their registered MOHRE employment contract. If an employer delays salary payments past the 15th of the following month, the electronic WPS system immediately blocks the company's file, freezes its ability to issue new work permits, and issues automatic financial penalties."
        }
      },
      {
        "@type": "Question",
        name: "What is the penalty for overstaying a visa in Dubai and the UAE in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The UAE Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) has unified all overstay fines across all seven emirates (Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah) to a flat rate of AED 50 ($13.60 USD / ₹1,140 INR) per calendar day of illegal overstay. Following the expiry or cancellation of a residence visa, foreign nationals are granted a standard 30-day (or up to 60-day to 180-day grace period for skilled categories and Golden/Green visa holders) to either secure a new sponsor or exit the country without penalty. If you overstay beyond the grace period, daily fines accumulate. To exit the country or amend your status to a new employer, all accrued fines must be settled through the GDRFA portal, ICP website, or an authorized Amer center."
        }
      },
      {
        "@type": "Question",
        name: "Do blue-collar workers (electricians, welders, plumbers, drivers) need attested educational degrees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Educational degree attestation is strictly exempt for blue-collar and vocational trade categories classified under MOHRE Skill Levels 4 and 5 (such as carpenters, masons, steel fixers, 6G welders, industrial electricians, plumbing technicians, light and heavy drivers, housekeeping staff, and general helpers). To obtain a work permit and residence visa in these designations, applicants only require a valid international passport (minimum 6 months validity), passing medical clearance (Wafid + DHA), passing practical trade tests where applicable, and a signed MOHRE MB-1 offer letter. Degree attestation (4-tier legalization) is only mandatory for Skill Level 1 (Executive Managers, Engineers, Doctors), Skill Level 2 (Technologists, Accountants, Nurses), and Skill Level 3 (Supervisors, Foremen, Inspectors)."
        }
      },
      {
        "@type": "Question",
        name: "What is the legal maximum working hours and overtime calculation in the UAE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Article 17 of UAE Labour Law, standard working hours for private-sector employees are a maximum of 8 hours per day or 48 hours per week. During the holy month of Ramadan, standard daily working hours are reduced by 2 hours for all workers regardless of religion. Any work performed beyond 8 hours daily constitutes overtime under Article 19. Daytime overtime (between 4:00 AM and 10:00 PM) is remunerated at the employee's regular hourly basic wage plus a mandatory statutory bonus of at least 25%. Night overtime (between 10:00 PM and 4:00 AM) or overtime on designated rest days is remunerated at regular hourly pay plus at least 50%. Overtime cannot exceed 2 hours per day unless required to prevent substantial loss or serious accident."
        }
      },
      {
        "@type": "Question",
        name: "Can an employee be placed on probation, and what are the rules regarding dismissal during probation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Article 9 of Federal Decree-Law No. 33 of 2021, an employer may place a newly hired worker on a probationary period not exceeding six months from their official start date. During probation, an employer wishing to terminate the worker's contract must give at least 14 days' advance written notice. Conversely, if an employee wishes to resign during probation to join another UAE employer, they must provide at least 30 days' written notice, and the new employer is legally required to reimburse the initial employer for reasonable recruitment and visa expenses. If the employee wishes to resign and exit the country permanently during probation, they must provide at least 14 days' written notice."
        }
      },
      {
        "@type": "Question",
        name: "What is the UAE Mandatory Unemployment Insurance (ILOE) scheme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Involuntary Loss of Employment (ILOE) scheme is a mandatory social protection program established under Federal Decree-Law No. 13 of 2022. All private-sector and federal government workers in the UAE must enroll in ILOE. For workers earning a basic salary of AED 16,000 or less (Category A), the insurance premium is only AED 5 per month (AED 60 per year). For workers earning a basic salary above AED 16,000 (Category B), the premium is AED 10 per month (AED 120 per year). If an enrolled worker loses their job due to company termination or insolvency (and not voluntary resignation or disciplinary misconduct) after paying premiums for at least 12 consecutive months, they receive 60% of their average basic salary for up to 3 consecutive months (capped at AED 10,000/month for Category A and AED 20,000/month for Category B) while seeking new employment. Failure to subscribe to ILOE incurs a direct MOHRE fine of AED 400."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between a Mainland MOHRE visa and a Free Zone visa in the UAE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Mainland Employment Visa is governed under the dual jurisdiction of the Ministry of Human Resources and Emiratisation (MOHRE) and the local immigration authority (GDRFA Dubai or ICP). Mainland companies can operate anywhere in the UAE and tender for federal and local government contracts. Workers are protected directly by MOHRE labor dispute arbitration and the electronic Wages Protection System (WPS). A Free Zone Visa is issued by an autonomous economic zone authority (such as JAFZA, DMCC, DAFZA, DIFC, or Hamriyah) through immigration. Free zone companies are exempt from MOHRE mainland quota tiers and Emiratization (Tawteen) mandates, and initial labor disputes are mediated by the respective Free Zone Authority rather than MOHRE."
        }
      },
      {
        "@type": "Question",
        name: "What is the UAE Green Visa and who is eligible to apply for it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Green Visa is a 5-year self-sponsored residency permit established under Cabinet Resolution No. 65 of 2022. It eliminates the requirement for a local company sponsor. Eligible applicants include: 1) Skilled Employees who hold a valid employment contract, are classified under MOHRE Skill Level 1, 2, or 3, possess a bachelor's degree or higher diploma, and earn a minimum monthly salary of AED 15,000; 2) Freelancers and Self-Employed individuals holding a valid freelance permit from MOHRE or a free zone and demonstrating annual freelance income of at least AED 360,000 over the past two years; and 3) Investors or Commercial Partners participating in commercial entities. Green Visa holders can sponsor first-degree family members (spouses and male children up to 25 years old) and enjoy an extended 6-month grace period upon visa expiration or termination."
        }
      },
      {
        "@type": "Question",
        name: "Who qualifies for the 10-Year UAE Golden Visa without a company sponsor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 10-Year UAE Golden Visa provides self-sponsored permanent residency with zero company ties, 100% foreign business ownership, and the ability to stay outside the UAE for more than 6 months without visa invalidation. Major qualifying categories include: 1) Real Estate Investors purchasing property valued at AED 2,000,000 or more (including mortgaged or off-plan properties with approved bank letters); 2) Skilled Professionals holding MOHRE Skill Level 1 or 2 roles (Doctors, Engineers, Information Technology specialists, Healthcare leaders, Scientists, Executives) with a bachelor's degree and a certified employment contract showing a minimum monthly basic salary of AED 30,000; 3) Exceptional Talents in culture, art, sports, or digital technology; and 4) Outstanding university and high school graduates."
        }
      },
      {
        "@type": "Question",
        name: "Can I sponsor my spouse, children, or elderly parents for UAE residence visas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Under unified UAE immigration regulations, an expatriate resident (male or female) holding a valid residence visa can sponsor their legal spouse and children regardless of their specific job title, provided they earn a minimum monthly salary of AED 4,000, or AED 3,000 plus employer-provided accommodation. Male children can be sponsored up to the age of 25, while unmarried daughters can be sponsored with no age restriction. To sponsor elderly parents (both father and mother must be sponsored together unless legally separated or deceased), the applicant must earn a minimum monthly salary of AED 20,000 (or AED 19,000 plus two-bedroom company housing) and provide proof of being their sole financial supporter."
        }
      },
      {
        "@type": "Question",
        name: "What is the Midday Summer Work Break rule in the UAE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MOHRE strictly enforces a mandatory Midday Work Break annually between June 15 and September 15. Under this ministerial resolution, all outdoor work performed under direct sunlight in open construction yards, civil infrastructure sites, road paving, and logistics facilities must cease entirely between 12:30 PM and 3:00 PM daily to protect workers from extreme summer heat, heat exhaustion, and sunstroke. Sponsoring employers must provide shaded rest areas with air conditioning or industrial fans, potable drinking water, first-aid kits, electrolytes, and salt tablets. Sponsoring firms found violating the Midday Break face immediate administrative fines of AED 5,000 per worker, up to a maximum penalty of AED 50,000 per site."
        }
      },
      {
        "@type": "Question",
        name: "How does the MOHRE Labor Dispute Resolution process work if my employer delays salary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If an employer delays salary payments, refuses to issue an end-of-service gratuity settlement, or violates contract terms, the employee can lodge an official labor complaint via the MOHRE Smart Mobile App, website (mohre.gov.ae), or by calling the toll-free MOHRE contact center at 800-60. Under Federal Law No. 20 of 2023 amending the Labour Law, MOHRE dispute conciliation officers are empowered to issue final binding executive decisions on disputes where the claimed financial sum is AED 50,000 or less, or where a party fails to comply with prior amicable settlements. The aggrieved worker is exempt from all court filing fees across all stages of litigation up to claims of AED 100,000."
        }
      },
      {
        "@type": "Question",
        name: "Can I work for another company or take on part-time freelance work on a regular employment visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Article 7 of Federal Decree-Law No. 33 of 2021, employees can engage in part-time, temporary, or flexible employment alongside their primary job, provided they obtain an official MOHRE Part-Time Work Permit or Temporary Work Permit. Working for a second company without an official MOHRE part-time permit is strictly illegal and constitutes illegal employment, subjecting both the unauthorized hiring entity and the worker to steep immigration fines (AED 50,000 for the employer) and potential residency cancellation."
        }
      },
      {
        "@type": "Question",
        name: "How can I exchange my home country driving license for a Dubai or UAE driving license?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Foreign nationals holding driving licenses from 32 designated exempt countries (including the UK, USA, Canada, Germany, France, Japan, Australia, GCC nations, and select EU territories) can directly convert their foreign driving license into a UAE driving license without undergoing driving school lessons or road tests. For nationals of India, Pakistan, Egypt, Nepal, Bangladesh, and the Philippines, direct license swap is not permitted. However, holders of valid home-country licenses with over 2 to 5 years of verified driving experience are eligible for the 'Golden Chance' initiative or direct road test evaluation without mandatory full-cycle theoretical training classes, drastically reducing licensing costs from AED 6,500 down to approximately AED 2,200."
        }
      },
      {
        "@type": "Question",
        name: "What is the Tawteen (Emiratization) policy and does it restrict hiring of foreign workers in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tawteen is the UAE government's strategic national Emiratization mandate, overseen by MOHRE. Private-sector mainland companies employing 50 or more skilled workers are required to achieve a 2% annual increase in Emirati citizens hired for skilled roles, reaching a cumulative 10% Emiratization quota by the end of 2026. Companies with 20 to 49 workers in 14 specified economic sectors must hire at least one UAE citizen. While this policy prioritizes UAE nationals for supervisory, banking, HR, and administrative roles, it does not restrict the overseas recruitment of foreign workers for blue-collar trades, specialized technical engineering, construction, healthcare, hospitality, logistics, or digital tech. In fact, companies meeting their Tawteen targets are upgraded to MOHRE Tier 1 classification, granting them discounted government work permit fees and accelerated overseas quota allocations."
        }
      },
      {
        "@type": "Question",
        name: "What should I do if an employer fails to renew my UAE residence visa before it expires?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under UAE immigration law, it is the strict legal responsibility of the employer to renew an employee's residence visa and Emirates ID before its official expiration date. If an employer neglects renewal, an automatic 30-day grace period applies upon expiration. If the company still fails to renew within this grace period, daily overstay fines of AED 50 per day begin accruing against the visa file. In such cases, the employee should immediately submit an electronic inquiry or formal grievance via the MOHRE App (mohre.gov.ae) or visit an Amer center. MOHRE can intervene to compel the employer to execute the renewal transaction or permit the worker to transfer to a new sponsor without incurring personal liability for company-induced delay penalties."
        }
      },
      {
        "@type": "Question",
        name: "Are UAE salaries really 100% tax-free, and can I remit all my savings back to India or my home country?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The United Arab Emirates levies zero percent (0.0%) personal income tax, zero capital gains tax, and zero inheritance tax on employee earnings. Whatever gross salary is agreed upon in your MOHRE contract is paid to you in full without payroll deductions for personal tax. Furthermore, the UAE has no foreign exchange restrictions or limits on international capital repatriation. Expatriate workers can remit 100% of their earnings back to India, Pakistan, the Philippines, or any global destination through commercial banks, currency exchange houses, or instant digital rails like UPI-AANI integration at competitive market foreign exchange rates."
        }
      },
      {
        "@type": "Question",
        name: "What is an e-Migrate / PoE clearance for Indian passport holders traveling to Dubai on work permits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Government of India's Ministry of External Affairs mandates that Indian nationals holding Emigration Check Required (ECR) passports (typically individuals who have not passed Class 10 matriculation examinations) must obtain Emigration Clearance (EC) through the official e-Migrate online portal (emigrate.gov.in) before departing for overseas employment in 18 notified ECR countries, including the UAE. Clearance is granted upon verification of an authenticated foreign employment contract and enrollment in the mandatory Pravasi Bharatiya Bima Yojana (PBBY) insurance scheme. Indian workers holding ECNR passports (non-ECR, holders of Class 10/12 certificates or university degrees, or income tax payees) do not require PoE clearance and can travel directly on their valid UAE employment entry permit and flight ticket."
        }
      },
      {
        "@type": "Question",
        name: "How does WorkWise Visa assist candidates in securing verified, zero-fraud UAE jobs and work permits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WorkWise Visa operates as a licensed, ethical overseas recruitment and immigration facilitation consultancy. We partner directly with verified UAE mainland construction giants, MEP contractors, hotel groups, logistics fleets, and facility management firms. We ensure every job vacancy is backed by an authentic MOHRE electronic work permit quota and approved MB-1 offer letter. We guide candidates step-by-step through pre-departure Wafid medical tests, 5-stage degree attestation, e-Migrate PoE processing, airline ticketing, and airport reception in Dubai and Abu Dhabi. We strictly adhere to zero recruitment fee exploitation standards, ensuring our candidates enter the UAE safely, legally, and with guaranteed statutory protections."
        }
      }
    ]
  };

  return (
    <>
      {/* Schema.org Structured Data Injection */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
        {/* ── Hero Section ───────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950 text-white pt-24 sm:pt-28 pb-16 md:pb-24">
          {/* Subtle Grid overlay */}
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
              <span className="text-emerald-300 font-bold">United Arab Emirates (Dubai &amp; Abu Dhabi)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 MOHRE &amp; GDRFA Relocation Authority
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  UAE Work Visa &amp; Dubai Employment Guide <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">2026</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive, expert-verified guide to securing legal employment in <strong className="font-bold text-white">Dubai, Abu Dhabi, Sharjah, and across the UAE</strong>. Explore official <strong className="font-bold text-emerald-300">MOHRE work permit regulations</strong>, <strong className="font-bold text-white">tax-free salary benchmarks across 40+ trades</strong>, <strong className="font-bold text-emerald-300">DHA medical clearance</strong>, and <strong className="font-bold text-white">guaranteed worker protections under UAE Labour Law</strong>.
                </p>

                {/* Key Benefits Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaMoneyBillWave className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">0% Income Tax</div>
                      <div className="text-[10px] text-slate-400">100% Tax-Free Pay</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaBuildingColumns className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">MOHRE 2-Yr Visa</div>
                      <div className="text-[10px] text-slate-400">Renewable Residency</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaShieldHalved className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">100% WPS Protected</div>
                      <div className="text-[10px] text-slate-400">Central Bank Monitored</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaClock className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">15–25 Day Issuance</div>
                      <div className="text-[10px] text-slate-400">Express Processing</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaHospital className="w-4 h-4 text-rose-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Free Housing &amp; Care</div>
                      <div className="text-[10px] text-slate-400">Statutory Obligation</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaScaleUnbalanced className="w-4 h-4 text-purple-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Gratuity Guaranteed</div>
                      <div className="text-[10px] text-slate-400">Decree-Law No. 33</div>
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/jobs"
                    className="inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25"
                  >
                    <FaBriefcase className="w-4 h-4" />
                    Browse Active UAE Vacancies
                  </Link>

                  <a
                    href="https://wa.me/919152288874?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20UAE%20Dubai%20work%20visa%20and%20job%20vacancies."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 px-6 py-3.5 text-sm font-bold text-white transition-all shadow-md"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-300" />
                    WhatsApp UAE Desk
                  </a>

                  <Link
                    href="/track-application"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white underline underline-offset-4"
                  >
                    Track Existing UAE Application <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Quick Country Snapshot Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3.5">
                      <img
                        src="https://flagcdn.com/w160/ae.png"
                        alt="United Arab Emirates Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-display font-extrabold text-white">United Arab Emirates</h2>
                        <p className="text-xs text-emerald-300 font-medium">Dubai • Abu Dhabi • Sharjah</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-black text-emerald-300">
                      TIER-1 GCC
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-200">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Immigration Authority:</span>
                      <span className="font-bold text-white">MOHRE &amp; GDRFA Dubai</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Work Permit Validity:</span>
                      <span className="font-bold text-emerald-300">2 Years (Renewable)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Medical Screening:</span>
                      <span className="font-bold text-white">Wafid (Pre) + DHA (In-Country)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Wage Payment Mode:</span>
                      <span className="font-bold text-white">WPS Electronic Bank Card</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Blue-Collar Pay:</span>
                      <span className="font-bold text-amber-300">1,400 – 3,800 AED / Month</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Standard Processing:</span>
                      <span className="font-bold text-emerald-300">15 to 25 Business Days</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">High-Demand Sectors:</span>
                      <span className="font-bold text-white">Civil, MEP, Logistics &amp; Hotel</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Statutory Rest Day:</span>
                      <span className="font-bold text-emerald-300">Paid Weekly Rest (1–2 Days)</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-900/40 border border-emerald-500/30 p-4 text-center">
                    <p className="text-xs font-medium text-emerald-200 mb-2">
                      Ready to apply for high-paying UAE construction, MEP, or driving jobs?
                    </p>
                    <a
                      href="mailto:workwisevisa@gmail.com?subject=UAE%20Dubai%20Job%20Application&body=Hello%20WorkWise%20Visa%20Team,%0A%0AI%20am%20applying%20for%20a%20job%20in%20Dubai/UAE.%0A%0AFull%20Name:%0APhone%20Number:%0ATrade/Designation:%0APassport%20Number:%0AExperience%20(Years):"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-slate-100 transition-colors shadow-sm"
                    >
                      <FaEnvelope className="w-3.5 h-3.5 text-emerald-600" />
                      Submit CV for UAE Recruitment
                    </a>
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
              Comprehensive Page Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. 2026 Overview &amp; Economy
              </a>
              <a href="#visa-types" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Legal Visa Pathways (8)
              </a>
              <a href="#portals-dir" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. Official Verification Portals
              </a>
              <a href="#step-by-step" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. 7-Phase Visa Process
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. 2026 Salary Table (40+ Trades)
              </a>
              <a href="#documents" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. Documents &amp; Attestation
              </a>
              <a href="#labour-law" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. Labour Law &amp; Gratuity
              </a>
              <a href="#medical-dha" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. DHA Medical &amp; TB Rules
              </a>
              <a href="#tawteen-overstay" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                9. Tawteen &amp; Overstay Rules
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                10. Detailed FAQs (25+)
              </a>
            </div>
          </div>
        </section>

        {/* ── Main Content Container ─────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* ── Section 1: Overview & 2026 Regulatory Landscape ── */}
          <section id="overview" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaBuildingColumns className="w-3.5 h-3.5 text-emerald-600" />
              Section 1: Country Overview &amp; Regulatory Architecture
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The UAE Labor Market in 2026: Why Dubai &amp; Abu Dhabi Lead Global Migration
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>The United Arab Emirates (UAE) represents one of the world's most dynamic, economically robust, and expatriate-friendly labor markets. Driven by visionary national frameworks—most notably the UAE Centennial 2071, "We the UAE 2031," and the ambitious Dubai Economic Agenda (D33)—the nation has transitioned into a global epicentre for commercial trade, advanced civil engineering, logistics, digital innovation, tourism, and multinational enterprise. Unlike traditional western immigration destinations characterized by protracted visa backlogs and escalating tax liabilities, the UAE offers foreign professionals and skilled tradesmen an unparalleled proposition: zero personal income tax, streamlined digital visa processing timelines averaging 15 to 25 business days, and fully institutionalized worker protections backed by federal legislation.</p>
              <p>In 2026, the UAE's expatriate population stands at over 9.3 million, representing approximately 88.5% of the total resident population. Among these, the Indian diaspora represents the single largest overseas community, with over 3.8 million Indian nationals actively employed across the seven emirates—spanning vital frontline engineering, civil infrastructure construction, mechanical-electrical-plumbing (MEP) trades, road logistics, healthcare, hospitality, banking, and executive management. Supported by the landmark Comprehensive Economic Partnership Agreement (CEPA) signed between India and the UAE, bilateral trade and human capital mobility have reached unprecedented historic highs, further facilitated by instant cross-border remittance integrations linking India's Unified Payments Interface (UPI) with the UAE's AANI digital payment ecosystem.</p>
              <p>A historic catalyst behind this employment surge is the aggressive rollout of multi-billion-dollar infrastructure megaprojects. Key development landmarks transforming the UAE labor market include the massive AED 128 billion ($35 billion) Al Maktoum International Airport (DWC) expansion project—destined to become the world's largest aviation hub with 400 aircraft gates and capacity for 260 million passengers—the AED 18 billion ($5 billion) Dubai Metro Blue Line project connecting key economic corridors across 30 kilometers of advanced track, the ongoing nationwide Etihad Rail passenger and freight network, the ambitious coastal revitalizations of Palm Jebel Ali and Dubai Islands, and extensive sustainable industrial manufacturing zones in Abu Dhabi's Khalifa Industrial Zone (KEZAD). These capital investments have generated persistent, high-volume recruitment demand for verified blue-collar trades, certified equipment technicians, site supervisors, and project management talent.</p>
              <p>Simultaneously, the regulatory architecture governing expatriate employment in the UAE has undergone profound structural modernisation. The enactment of Federal Decree-Law No. 33 of 2021 regarding the Regulation of Labour Relations (which fully replaced the four-decade-old Federal Law No. 8 of 1980), coupled with Cabinet Resolution No. 1 of 2022 and Federal Decree-Law No. 29 of 2021 regarding the Entry and Residence of Foreigners, comprehensively dismantled outdated sponsorship paradigms. In their place stands a modern, transparent, contract-based employment relationship. Under this legal framework, all expatriate workers are issued fixed-term, electronically verifiable MOHRE employment contracts (standardly valid for two renewable years) with strict prohibitions against recruitment fee deductions, mandatory Wage Protection System (WPS) bank payroll monitoring, and statutory guarantees for end-of-service gratuity and occupational healthcare.</p>
            </div>

            {/* Official Statutory Authority Citation */}
            <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50/60 p-5 space-y-2">
              <p className="text-xs sm:text-sm font-medium text-slate-800 italic leading-relaxed">
                &ldquo;All employment relationships within the private sector of the United Arab Emirates are governed strictly under the provisions of Federal Decree-Law No. 33 of 2021 and its Executive Regulations under Cabinet Resolution No. 1 of 2022. It is unlawful for any employer to charge recruitment expenses, retain worker passports, or disburse wages outside the automated Wages Protection System (WPS).&rdquo;
              </p>
              <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                <cite className="not-italic font-bold text-slate-900 flex items-center gap-1.5">
                  <FaBuildingColumns className="w-3.5 h-3.5 text-emerald-600" />
                  Ministry of Human Resources &amp; Emiratisation (MOHRE), UAE
                </cite>
                <a
                  href="https://www.mohre.gov.ae/en/laws-and-regulations/laws.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-2 flex items-center gap-1"
                >
                  Official Decree Source <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* Key Macro Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Expatriate Workforce</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-slate-900 mt-1">3.8M+</div>
                <p className="text-[11px] text-slate-500 mt-1">From India, Pakistan, Bangladesh, Nepal & Philippines</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Personal Income Tax</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-emerald-600 mt-1">0.0%</div>
                <p className="text-[11px] text-slate-500 mt-1">100% tax-free take-home earnings</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Standard Visa Duration</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-teal-600 mt-1">2 Years</div>
                <p className="text-[11px] text-slate-500 mt-1">Renewable electronic MOHRE employment contract</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">WPS Compliance</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-amber-600 mt-1">100%</div>
                <p className="text-[11px] text-slate-500 mt-1">Automated salary tracking by UAE Central Bank</p>
              </div>
            </div>
          </section>

          {/* ── Section 2: Types of UAE Work Visas ─────────────── */}
          <section id="visa-types" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaPassport className="w-3.5 h-3.5 text-emerald-600" />
              Section 2: Legal Visa Classifications &amp; Eligibility
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Major UAE Work Visa Categories in 2026
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Depending on the hiring entity&rsquo;s jurisdiction (Mainland vs. Free Zone vs. Domestic Household), operational scope, and the candidate&rsquo;s professional classification, the UAE provides eight distinct legal immigration channels:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-emerald-100 text-emerald-900 font-extrabold text-xs px-2.5 py-1">
                      Most Common (88%)
                    </span>
                    <span className="text-xs font-bold text-slate-400">2-Year Validity</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    Mainland MOHRE Standard Employment Visa
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The primary legal vehicle for expatriates hired by commercial LLCs, construction contractors, engineering firms, retail establishments, logistics operators, and hospitality groups registered directly with the Ministry of Human Resources and Emiratisation (MOHRE). Encompasses all five national skill levels from executive directors down to vocational trade craftsmen and general site operatives.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>100% electronic Wage Protection System (WPS) bank payroll auditing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Mandatory employer sponsorship: all visa, medical, and recruitment costs borne by hiring company</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Direct legal recourse via MOHRE Labour Conciliation with binding resolution up to AED 50,000</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Renewable for successive 2-year periods upon mutual contractual agreement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Full entitlement to statutory End-of-Service Gratuity (ESB) under Article 51</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-teal-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-teal-100 text-teal-900 font-extrabold text-xs px-2.5 py-1">
                      Corporate & Logistics
                    </span>
                    <span className="text-xs font-bold text-slate-400">2–3 Year Validity</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    Free Zone Residence Visa
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Issued to employees working within the UAE's specialized economic free trade zones, including Dubai Multi Commodities Centre (DMCC), Jebel Ali Free Zone (JAFZA), Dubai Airport Freezone (DAFZA), Dubai International Financial Centre (DIFC), Sharjah Airport International Free Zone (SAIF), and Ras Al Khaimah Economic Zone (RAKEZ). Governed by individual Free Zone Authority labor regulations in coordination with local immigration desks.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Exempt from mainland MOHRE quota allocations and national Emiratization (Tawteen) thresholds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Issuance of dedicated Free Zone Identity Cards alongside standard UAE Emirates IDs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Direct internal labor dispute mediation handled through Free Zone Authority legal desks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Highly prevalent for international shipping, multi-modal air cargo, luxury retail, and tech start-ups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Seamless transferability between free zone member companies without mandatory labor bans</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-amber-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-amber-100 text-amber-900 font-extrabold text-xs px-2.5 py-1">
                      Self-Sponsored
                    </span>
                    <span className="text-xs font-bold text-slate-400">5-Year Validity</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    5-Year Green Visa for Skilled Talent & Freelancers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Introduced under Cabinet Resolution No. 65 of 2022, the Green Visa is a game-changing 5-year self-sponsored residency permit that decouples the foreign national's legal stay from an employer's sponsorship. Designed specifically for highly qualified professionals, certified technologists, and licensed freelancers seeking autonomy in the UAE market.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>No local company or national sponsor required; applicant holds independent residency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Eligibility: MOHRE Skill Level 1, 2, or 3, bachelor's degree, minimum monthly salary of AED 15,000</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Freelancer eligibility: valid freelance permit plus demonstrated annual income of AED 360,000</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Ability to sponsor first-degree relatives (spouses and male children up to age 25) for full 5-year terms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Extended 6-month flexible grace period to seek new employment or transition status upon contract end</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-purple-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-purple-100 text-purple-900 font-extrabold text-xs px-2.5 py-1">
                      Elite Residency
                    </span>
                    <span className="text-xs font-bold text-slate-400">10-Year Renewable</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    10-Year Golden Visa (Permanent Residence Track)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The UAE's flagship long-term residency program granting exceptional foreign investors, entrepreneurs, specialized medical clinicians, senior engineering researchers, digital creators, and executive corporate leaders full residential independence and prestige across all seven emirates.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Zero requirement for an employment sponsor or UAE national business partner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>No limit on duration spent outside the UAE: visa remains 100% active even after 6+ months abroad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Professional track: bachelor's degree, MOHRE Level 1/2 role, minimum basic monthly salary of AED 30,000</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Real estate track: property investment of AED 2,000,000 or greater (including approved bank mortgages)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Ability to sponsor unlimited family dependents and domestic domestic personnel with complete security</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-blue-100 text-blue-900 font-extrabold text-xs px-2.5 py-1">
                      Business Ownership
                    </span>
                    <span className="text-xs font-bold text-slate-400">2-Year Renewable</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    Investor & Commercial Partner Visa
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed for entrepreneurs, expatriate business owners, and commercial partners who establish a legal commercial entity, LLC company, or professional civil partnership registered with the Dubai Department of Economy and Tourism (DET) or equivalent economic departments across the northern emirates.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Requires active Commercial Trade License and Memorandum of Association (MoA) showing capital shareholding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Immigration Establishment Card issued directly in the corporate entity's commercial name</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>100% foreign business ownership permitted across over 1,000 commercial and industrial activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Exempt from MOHRE work permit quotas; processed directly via GDRFA Dubai or federal ICP portals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Enables corporate banking facility setup and sponsorship of corporate operational staff</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-rose-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-rose-100 text-rose-900 font-extrabold text-xs px-2.5 py-1">
                      Household & Private
                    </span>
                    <span className="text-xs font-bold text-slate-400">2-Year Validity</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    Tadbeer Domestic Worker Visa
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Regulated under Federal Decree-Law No. 9 of 2022 on Domestic Workers and administered exclusively through government-licensed Tadbeer Service Centers. Covers household staff including private family drivers, home cooks, personal maids, nannies, gardeners, and private home nurses.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Standardized electronic MOHRE unified domestic labor employment contracts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Strict statutory protections: 12 hours daily rest, 30 days paid annual leave, medical insurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>WPS payroll transfer option available through Tadbeer prepaid electronic salary cards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Clear prohibitions on recruitment agent salary deductions or retention of national identity documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>End-of-service compensation guaranteed at 14 days of basic salary per year of continuous service</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-orange-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-orange-100 text-orange-900 font-extrabold text-xs px-2.5 py-1">
                      Project-Specific
                    </span>
                    <span className="text-xs font-bold text-slate-400">90–180 Days</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    Temporary Work Permit & Mission Visa
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Specialized non-immigrant operational permits issued to foreign technicians, testing specialists, shutdown maintenance crews, and exhibition specialists deployed to execute specific short-term industrial contracts, plant commissioning, or emergency engineering assignments without transferring permanent residency.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Valid for 90 days with option for one-time statutory extension up to a maximum of 180 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Issued by MOHRE and GDRFA upon submission of approved commercial project contracts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Exempts company from long-term residency medical fitness and Emirates ID physical card issuance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Ideal for rapid turnaround maintenance during oil refinery overhauls and infrastructure commissioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Can be converted into a standard 2-year mainland employment visa if permanent hiring is agreed</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-cyan-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-cyan-100 text-cyan-900 font-extrabold text-xs px-2.5 py-1">
                      Digital Nomads
                    </span>
                    <span className="text-xs font-bold text-slate-400">1-Year Renewable</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    Remote Work Residence Visa (Virtual Work Program)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A cutting-edge 1-year residency visa that empowers remote software engineers, global consultants, creative directors, and multinational executives to reside in Dubai while continuing to work remotely for an overseas employer or their own overseas-registered company.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Full access to UAE resident utilities: Emirates ID, local bank accounts, phone lines, driving license conversion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Eligibility: employment contract with overseas firm, minimum monthly income of $3,500 USD (or equivalent)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Requires 3 months of bank statements and proof of international valid health insurance covering the UAE</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Zero local UAE corporate tax or personal income tax levied on foreign earnings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Renewable annually within the UAE without mandatory departure from the territory</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── Sub-Section: Official Verification Portals Directory ── */}
          <section id="portals-dir" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaShieldHalved className="w-3.5 h-3.5 text-emerald-600" />
              Section 3: Official Government Verification Portals Directory
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Official UAE Government Portals &amp; Electronic Verification
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every legitimate UAE work permit, job offer letter, entry visa, and medical clearance certificate contains a unique electronic transaction number and verifiable QR code that can be authenticated directly on official federal and emirate government systems:
            </p>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="py-3.5 px-4 text-xs font-extrabold uppercase tracking-wider">Government Portal</th>
                    <th className="py-3.5 px-4 text-xs font-extrabold uppercase tracking-wider">Sovereign Authority</th>
                    <th className="py-3.5 px-4 text-xs font-extrabold uppercase tracking-wider">Direct Verification Services</th>
                    <th className="py-3.5 px-4 text-xs font-extrabold uppercase tracking-wider">Official Access</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">MOHRE Portal & Smart App</td>
                    <td className="py-3.5 px-4 text-slate-600">Ministry of Human Resources & Emiratisation</td>
                    <td className="py-3.5 px-4 text-slate-600 leading-relaxed">MB-1 offer letter verification, electronic work permit approval, employment contract downloads, salary grievance filing (Toll-free: 80060).</td>
                    <td className="py-3.5 px-4">
                      <a
                        href="https://www.mohre.gov.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-2"
                      >
                        Visit Portal <FaArrowRight className="w-2.5 h-2.5" />
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">GDRFA Dubai / Amer Service</td>
                    <td className="py-3.5 px-4 text-slate-600">General Directorate of Residency & Foreigners Affairs</td>
                    <td className="py-3.5 px-4 text-slate-600 leading-relaxed">Dubai electronic entry permits, residence visa status tracking, inside-country visa amendments, overstay fine calculation and settlement.</td>
                    <td className="py-3.5 px-4">
                      <a
                        href="https://www.gdrfad.gov.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-2"
                      >
                        Visit Portal <FaArrowRight className="w-2.5 h-2.5" />
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">ICP Federal Portal</td>
                    <td className="py-3.5 px-4 text-slate-600">Federal Authority for Identity, Citizenship, Customs & Port Security</td>
                    <td className="py-3.5 px-4 text-slate-600 leading-relaxed">Abu Dhabi & Northern Emirates entry permits, Smart Emirates ID biometric appointments, residency renewals, unified fine tracking.</td>
                    <td className="py-3.5 px-4">
                      <a
                        href="https://icp.gov.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-2"
                      >
                        Visit Portal <FaArrowRight className="w-2.5 h-2.5" />
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">MoFA e-DAS System</td>
                    <td className="py-3.5 px-4 text-slate-600">Ministry of Foreign Affairs, UAE</td>
                    <td className="py-3.5 px-4 text-slate-600 leading-relaxed">Electronic Document Attestation System (e-DAS), verification of educational degrees, trade certificates, and commercial affidavits with QR code.</td>
                    <td className="py-3.5 px-4">
                      <a
                        href="https://www.mofa.gov.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-2"
                      >
                        Visit Portal <FaArrowRight className="w-2.5 h-2.5" />
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">DHA Salem Portal</td>
                    <td className="py-3.5 px-4 text-slate-600">Dubai Health Authority</td>
                    <td className="py-3.5 px-4 text-slate-600 leading-relaxed">Medical fitness screening appointments, Al Muhaisnah & Karama fast-track booking, blood serology tracking, digital fitness certificates.</td>
                    <td className="py-3.5 px-4">
                      <a
                        href="https://www.dha.gov.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-2"
                      >
                        Visit Portal <FaArrowRight className="w-2.5 h-2.5" />
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">CBUAE Wages Protection System</td>
                    <td className="py-3.5 px-4 text-slate-600">Central Bank of the UAE & MOHRE</td>
                    <td className="py-3.5 px-4 text-slate-600 leading-relaxed">Automated electronic payroll compliance monitoring, SIF file processing, corporate bank account integration, employer salary audits.</td>
                    <td className="py-3.5 px-4">
                      <a
                        href="https://www.centralbank.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-2"
                      >
                        Visit Portal <FaArrowRight className="w-2.5 h-2.5" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 4: End-to-End Recruitment Process (7 Phases) ── */}
          <section id="step-by-step" className="scroll-mt-28 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaPlaneArrival className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: Standard End-to-End Recruitment Process
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The 7-Phase UAE Work Visa Processing Pipeline
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Moving to Dubai, Abu Dhabi, or the Northern Emirates follows a strictly monitored statutory pipeline. From the execution of your bilingual MOHRE job offer to your final Emirates ID delivery, here is the day-by-day roadmap:
            </p>

            <div className="grid gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all flex flex-col md:flex-row gap-6 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-display font-black text-lg shadow-md shadow-emerald-600/20">
                  01
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-display font-bold text-slate-900">
                      Phase 1: Job Offer Issuance & MOHRE Standard Offer Letter (MB-1 Form)
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 1–3 Business Days
                    </span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Supervising Authority: Ministry of Human Resources & Emiratisation (MOHRE)
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The formal recruitment cycle begins when an accredited UAE employer extends a verified job offer to the overseas candidate. Under UAE Ministerial Resolution No. 764 of 2015, employers are strictly prohibited from using informal, non-standard appointment letters. The employer must generate an official bilingual (English and Arabic) MOHRE Offer Letter—designated as the MB-1 Form—directly from the MOHRE smart labor portal. This statutory document explicitly outlines the job title, MOHRE skill level classification, basic wage, accommodation allowances, transport provisions, medical insurance category, working hours, and termination notice periods. The candidate must carefully review, physically sign, and fingerprint every page of this document in their home country. Once signed, no employer can legally alter, reduce wages, or downgrade working conditions when generating the final electronic employment contract.
                  </p>
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-xs text-slate-700 leading-relaxed mt-2">
                    <strong className="text-emerald-700">💡 WorkWise Visa Expert Advisory:</strong> Always verify that the company trade name on the MB-1 form matches the official trade license number, and ensure the basic salary matches what was promised during interviews. You can independently verify the authenticity of your MB-1 offer letter on the MOHRE mobile app using the transaction barcode number.
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all flex flex-col md:flex-row gap-6 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-display font-black text-lg shadow-md shadow-emerald-600/20">
                  02
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-display font-bold text-slate-900">
                      Phase 2: MOHRE Electronic Work Permit Quota & Pre-Approval
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 3–6 Business Days
                    </span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Supervising Authority: MOHRE Labour Licensing Department
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Upon receiving the candidate's signed MB-1 offer letter, passport copy, and passport photograph, the sponsoring employer's licensed Public Relations Officer (PRO) submits an electronic application for an Initial Work Permit (Quota Pre-Approval). MOHRE verifies the company's legal standing: confirming the company holds valid commercial trade licenses, maintains 100% compliance with the Wage Protection System (WPS) for its existing workforce, and has satisfied mandatory national Emiratization (Tawteen) thresholds. For mainland firms, the employer pays the initial government quota fee and provides a statutory bank guarantee of AED 3,000 per worker or purchases a low-cost Taa-meen worker protection insurance policy (costing approximately AED 120 for two years) which secures up to AED 20,000 in unpaid wages and repatriation benefits for the employee in case of corporate insolvency.
                  </p>
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-xs text-slate-700 leading-relaxed mt-2">
                    <strong className="text-emerald-700">💡 WorkWise Visa Expert Advisory:</strong> Candidates do not need to take any action during Phase 2. The employer's PRO manages the entire quota allocation online through the MOHRE Tas'heel digital network.
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all flex flex-col md:flex-row gap-6 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-display font-black text-lg shadow-md shadow-emerald-600/20">
                  03
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-display font-bold text-slate-900">
                      Phase 3: Pre-Departure Wafid (GAMCA) Medical Fitness Examination
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–5 Business Days
                    </span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Supervising Authority: Gulf Health Council (Wafid / GAMCA Portal)
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Before applying for the electronic entry permit, candidates residing in notified countries (such as India, Pakistan, Nepal, Bangladesh, Philippines, and Sri Lanka) must undergo mandatory pre-departure medical screening at an accredited Wafid (formerly GAMCA) medical examination center. The candidate registers on the official Wafid online portal (wafid.com), pays the standard appointment fee (approximately $10 to $15 USD online plus local clinic examination fees), and is automatically assigned a licensed medical center in their home city. The screening protocol includes a digital chest X-ray to detect pulmonary tuberculosis lesions or pleural calcifications, comprehensive blood serology tests for HIV-1/2 antibodies, Hepatitis B surface antigen (HBsAg), and Hepatitis C antibodies (HCV), Venereal Disease Research Laboratory (VDRL / Syphilis) tests, urine routine analysis, and physical vitals assessment. Once cleared, the clinic uploads an official 'FIT' certificate directly to the GCC immigration database.
                  </p>
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-xs text-slate-700 leading-relaxed mt-2">
                    <strong className="text-emerald-700">💡 WorkWise Visa Expert Advisory:</strong> Ensure you obtain adequate sleep, avoid strenuous chest exertion, stay thoroughly hydrated, and carry your original passport along with 6 passport photographs with a white background on the morning of your examination.
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all flex flex-col md:flex-row gap-6 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-display font-black text-lg shadow-md shadow-emerald-600/20">
                  04
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-display font-bold text-slate-900">
                      Phase 4: GDRFA / ICP Electronic Employment Entry Permit Issuance (Pink Visa)
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–4 Business Days
                    </span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Supervising Authority: GDRFA Dubai / Federal ICP Immigration
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    With the MOHRE work permit pre-approval and the online Wafid medical clearance registered, the file is automatically transferred through the unified electronic immigration gateway to the local residency authority—the General Directorate of Residency and Foreigners Affairs (GDRFA) for Dubai employment, or the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) for Abu Dhabi, Sharjah, Ajman, RAK, and Fujairah. The immigration system performs national security screening and generates the official Electronic Employment Entry Permit (widely referred to as the 'Pink Visa' or Entry Visa Paper). This document contains a unique visa number, unified number (UID), and a scannable encrypted QR barcode. It grants the foreign worker legal entry into the UAE for employment purposes and is strictly valid for 60 calendar days from the date of issuance to enter the country.
                  </p>
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-xs text-slate-700 leading-relaxed mt-2">
                    <strong className="text-emerald-700">💡 WorkWise Visa Expert Advisory:</strong> The employer sends the digital PDF copy of this Entry Permit directly to the candidate via email or WhatsApp. The candidate must print at least 3 crisp color copies of this document to present to airport immigration officials upon departure and arrival.
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all flex flex-col md:flex-row gap-6 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-display font-black text-lg shadow-md shadow-emerald-600/20">
                  05
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-display font-bold text-slate-900">
                      Phase 5: Indian Emigration Clearance (PoE / e-Migrate) & Flight Deployment
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–3 Business Days
                    </span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Supervising Authority: Ministry of External Affairs (India) & UAE Civil Aviation
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    For Indian nationals holding Emigration Check Required (ECR) passports, mandatory Emigration Clearance (EC) must be secured before departure under the Indian Emigration Act of 1983. The overseas employer or authorized recruiting agent (such as WorkWise Visa) uploads the candidate's verified employment contract and details onto the Indian government's e-Migrate digital platform (emigrate.gov.in). The candidate is simultaneously enrolled in the mandatory Pravasi Bharatiya Bima Yojana (PBBY) insurance scheme, which provides ₹10 Lakh INR in insurance coverage for accidental death, permanent disability, medical repatriation, and family travel assistance for a nominal premium of approximately ₹375 INR for two years. Candidates holding ECNR (Non-ECR) passports do not require PoE clearance. Sponsoring employers issue direct flight tickets to Dubai (DXB), Abu Dhabi (AUH), or Sharjah (SHJ). WorkWise Visa representatives coordinate airport departure briefings and organize reception at the UAE arrival terminal.
                  </p>
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-xs text-slate-700 leading-relaxed mt-2">
                    <strong className="text-emerald-700">💡 WorkWise Visa Expert Advisory:</strong> Never travel on a tourist visa with promises of converting to employment unless you are entering through an established professional recruitment drive with an approved corporate client.
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all flex flex-col md:flex-row gap-6 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-display font-black text-lg shadow-md shadow-emerald-600/20">
                  06
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-display font-bold text-slate-900">
                      Phase 6: In-Country DHA / EHS Medical Fitness Screening & Emirates ID Biometrics
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 3–6 Business Days
                    </span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Supervising Authority: Dubai Health Authority (DHA) & ICP Customer Happiness Centers
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Upon arriving in the UAE on their employment entry permit, the candidate has a statutory window of 60 days to complete all residency formalities. Within the first week of arrival, the company's PRO schedules and transports the worker to an accredited government medical fitness center—such as the DHA Al Muhaisnah Medical Fitness Centre, Karama Centre, or Al Quoz Mall Centre in Dubai, or an EHS Preventive Medicine Centre in Abu Dhabi or Sharjah. Workers undergo confirmatory in-country digital chest X-rays and blood tests. Simultaneously, the PRO registers the candidate for their Smart Emirates ID appointment at an ICP Customer Happiness Centre or authorized typing center. During the biometrics appointment, the worker's 10-digit fingerprints, high-resolution facial photograph, and optical iris scans are digitally captured for inclusion in the national population registry.
                  </p>
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-xs text-slate-700 leading-relaxed mt-2">
                    <strong className="text-emerald-700">💡 WorkWise Visa Expert Advisory:</strong> Candidates receive an official stamped Emirates ID application form after biometric capture. This stamped document, along with your passport and entry visa copy, serves as legal temporary proof of residence until the physical card is printed.
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all flex flex-col md:flex-row gap-6 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-display font-black text-lg shadow-md shadow-emerald-600/20">
                  07
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-display font-bold text-slate-900">
                      Phase 7: Residence Visa Stamping, Smart Emirates ID Delivery & WPS Payroll Integration
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 3–5 Business Days
                    </span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Supervising Authority: GDRFA / ICP, Emirates Post & UAE Central Bank
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the DHA / EHS medical fitness certificate is transmitted electronically to immigration, the GDRFA or ICP issues the final digital Residence Visa. Under updated federal immigration guidelines, physical residence visa stickers in passports have been replaced by the unified Smart Emirates ID card, which serves as both national identity card and proof of legal residency. The physical card is produced and delivered to the employer via Emirates Post. Concurrently, the employer finalizes the employee's onboarding: executing company safety and operational inductions, enrolling the employee in mandatory private medical health insurance, and opening their Wage Protection System (WPS) bank account or issuing a Central Bank-approved pre-loaded electronic payroll card (such as an Al Ansari PayPlus or LuLu Exchange Payroll Card). The worker is formally deployed to their project worksite with full statutory legal status.
                  </p>
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-xs text-slate-700 leading-relaxed mt-2">
                    <strong className="text-emerald-700">💡 WorkWise Visa Expert Advisory:</strong> Always download the UAE ICP Smart App and MOHRE App on your smartphone. You can access your digital Emirates ID and digital MOHRE labor contract instantly anywhere in the UAE.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 5: Complete 2026 Salary Matrix (40+ Trades) ── */}
          <section id="salary-matrix" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaMoneyBillWave className="w-3.5 h-3.5 text-emerald-600" />
              Section 5: Complete Dubai &amp; UAE Salary Matrix 2026
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              2026 UAE Salary Scales by Trade &amp; Skill Category (40+ Trades)
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Compensation in the UAE is 100% tax-free. Below are real-world market salary benchmarks compiled from active 2026 recruitment drives across Dubai, Abu Dhabi, Sharjah, and Ras Al Khaimah. Figures represent basic wages, standard monthly allowances, gross earnings in UAE Dirhams (AED), and approximate Indian Rupee (INR) equivalents:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[760px]">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs">
                    <th className="py-3.5 px-4 font-extrabold uppercase tracking-wider">Trade / Designation</th>
                    <th className="py-3.5 px-3 font-extrabold uppercase tracking-wider">MOHRE Skill</th>
                    <th className="py-3.5 px-3 font-extrabold uppercase tracking-wider">Basic Pay (AED)</th>
                    <th className="py-3.5 px-3 font-extrabold uppercase tracking-wider">Allowances (AED)</th>
                    <th className="py-3.5 px-3 font-extrabold uppercase tracking-wider">Gross Pay (AED)</th>
                    <th className="py-3.5 px-3 font-extrabold uppercase tracking-wider">INR Equiv (₹)</th>
                    <th className="py-3.5 px-4 font-extrabold uppercase tracking-wider">Standard Company Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Shuttering Carpenter (Civil Infrastructure)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Civil Construction & Heavy Infrastructure</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 5
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,200 – 1,500 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">300 – 500 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">1,500 – 2,000 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹34,500 – ₹46,000</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Free Camp Housing, Mess Food, Overtime Pay, Medical Insurance & Transport</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Steel Fixer / Rebar Craftsman</div>
                      <div className="text-[10px] text-slate-400 font-normal">Civil Construction & Heavy Infrastructure</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 5
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,200 – 1,500 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">300 – 500 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">1,500 – 2,000 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹34,500 – ₹46,000</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Company Camp, Duty Transport, 1.25x Overtime, Work Uniform & PPE</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Mason (Block, Plaster & Tile Finisher)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Civil Construction & Heavy Infrastructure</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 5
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,300 – 1,650 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">300 – 500 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">1,600 – 2,150 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹36,800 – ₹49,500</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Free Accommodation, Central Mess, Flight Return Ticket & End-of-Service</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Scaffolder (CISRS / OSHA Certified)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Civil Construction & Heavy Infrastructure</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 4
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,400 – 1,800 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">350 – 550 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">1,750 – 2,350 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹40,200 – ₹54,000</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Safety Equipment, Site Bonus, Medical Care, Annual Paid Leave</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Tower Crane Operator (High-Rise)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Civil Construction & Heavy Infrastructure</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 4
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">2,500 – 3,800 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">500 – 800 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">3,000 – 4,600 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹69,000 – ₹1,05,800</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Air-Conditioned Cabin, High-Rise Hazard Allowance, Medical Insurance</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Heavy Excavator / Loader Operator</div>
                      <div className="text-[10px] text-slate-400 font-normal">Civil Construction & Heavy Infrastructure</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 4
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">2,200 – 3,200 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">450 – 700 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">2,650 – 3,900 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹61,000 – ₹89,700</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Free Housing, Food Allowance, UAE Heavy Equipment License Sponsorship</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Rigger / Heavy Lifting Specialist (LEEA)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Civil Construction & Heavy Infrastructure</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 4
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,600 – 2,200 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">400 – 600 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">2,000 – 2,800 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹46,000 – ₹64,400</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Safety Gear, Overtime, Medical Card, 2-Year Contract Renewable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Land Surveyor / Total Station Instrumentman</div>
                      <div className="text-[10px] text-slate-400 font-normal">Civil Construction & Heavy Infrastructure</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 3
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">2,800 – 4,200 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">600 – 1,000 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">3,400 – 5,200 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹78,200 – ₹1,19,600</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Bachelor Sharing Flat, Site Vehicle, Laptop, Health Insurance</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>6G Pipe Welder (TIG & ARC / ASME IX)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Mechanical, Electrical & Plumbing (MEP)</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 4
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">2,200 – 3,200 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">500 – 800 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">2,700 – 4,000 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹62,100 – ₹92,000</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">X-Ray Test Joint Bonus, Free Camp, Mess Food, PPE & Insurance</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>MIG / Structural Welder (Fabrication)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Mechanical, Electrical & Plumbing (MEP)</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 5
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,500 – 2,000 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">350 – 550 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">1,850 – 2,550 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹42,500 – ₹58,600</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Workshop Mess, Daily Transport, Overtime Pay, Return Flights</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Industrial / Building Electrician</div>
                      <div className="text-[10px] text-slate-400 font-normal">Mechanical, Electrical & Plumbing (MEP)</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 4
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,400 – 1,900 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">350 – 500 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">1,750 – 2,400 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹40,200 – ₹55,200</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Camp Accommodation, Tool Kit Allowance, Medical Coverage</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>HVAC Chiller & Ducting Technician</div>
                      <div className="text-[10px] text-slate-400 font-normal">Mechanical, Electrical & Plumbing (MEP)</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 4
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,800 – 2,600 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">400 – 700 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">2,200 – 3,300 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹50,600 – ₹75,900</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Free Housing, Maintenance Callout Bonus, Health Insurance</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Ductman / Sheet Metal Fabricator</div>
                      <div className="text-[10px] text-slate-400 font-normal">Mechanical, Electrical & Plumbing (MEP)</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 5
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,300 – 1,700 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">300 – 500 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">1,600 – 2,200 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹36,800 – ₹50,600</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Shared Room, Camp Kitchen, Overtime Opportunities, Visa Free</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Plumber / Pipefitter (Industrial & Firefighting)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Mechanical, Electrical & Plumbing (MEP)</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 5
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,300 – 1,750 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">300 – 500 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">1,600 – 2,250 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹36,800 – ₹51,700</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Free Mess, Air-Conditioned Transport, Gratuity Accrual</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Fire Alarm & Low Current (ELV) Technician</div>
                      <div className="text-[10px] text-slate-400 font-normal">Mechanical, Electrical & Plumbing (MEP)</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 3
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">2,200 – 3,400 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">500 – 800 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">2,700 – 4,200 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹62,100 – ₹96,600</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Company Vehicle, Mobile Allowance, Insurance & Flight Ticket</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Heavy Trailer Driver (RTA License No. 4)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Logistics, Driving & Automotive</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 4
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">2,600 – 3,800 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">600 – 1,200 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">3,200 – 5,000 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹73,600 – ₹1,15,000</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Trip Allowance, Fuel Card, Free Housing, Visa & Medical Free</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Heavy Bus Driver (RTA License No. 6)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Logistics, Driving & Automotive</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 4
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">2,400 – 3,400 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">500 – 900 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">2,900 – 4,300 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹66,700 – ₹98,900</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Free Accommodation, Shift Allowance, Medical Card, 30 Days Leave</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Light Delivery Van Driver (RTA License No. 3)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Logistics, Driving & Automotive</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 4
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,800 – 2,500 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">400 – 700 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">2,200 – 3,200 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹50,600 – ₹73,600</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Company Van, Salik Tag, Fuel Card, Health Insurance</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>RTA Motorcycle Delivery Rider (Talabat / Noon)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Logistics, Driving & Automotive</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 5
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,500 – 2,000 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">1,200 – 2,500 AED (Trips)</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">2,700 – 4,500 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹62,100 – ₹1,03,500</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Delivery Motorcycle, Helmet, SIM Data, Fuel Allowance, Insurance</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Forklift Operator (Electric & Diesel / Counterbalance)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Logistics, Driving & Automotive</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 4
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,600 – 2,300 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">350 – 600 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">1,950 – 2,900 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹44,800 – ₹66,700</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Warehouse Accommodation, Overtime, Medical Card, Free Visa</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Warehouse Picker, Packer & Inventory Handler</div>
                      <div className="text-[10px] text-slate-400 font-normal">Logistics, Driving & Automotive</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 5
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,200 – 1,600 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">300 – 500 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">1,500 – 2,100 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹34,500 – ₹48,300</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Air-Conditioned Logistics Hub, Free Housing, Shift Meals, Transport</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Automotive Mechanic / Diesel Engine Specialist</div>
                      <div className="text-[10px] text-slate-400 font-normal">Logistics, Driving & Automotive</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 4
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,800 – 2,800 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">400 – 700 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">2,200 – 3,500 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹50,600 – ₹80,500</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Workshop Tool Kit, Free Shared Room, Overtime, Health Care</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Hotel Waiter / Captain (4-Star & 5-Star Luxury)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Hospitality, Catering & Facilities</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 4
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,600 – 2,400 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">800 – 1,600 AED (Tips/Service)</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">2,400 – 4,000 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹55,200 – ₹92,000</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Duty Buffet Meals, Hotel Staff Residence, Uniform Laundry, Gratuity</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Commis Chef / Line Cook (Hot & Cold Kitchen)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Hospitality, Catering & Facilities</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 4
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,800 – 2,700 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">350 – 600 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">2,150 – 3,300 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹49,400 – ₹75,900</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Free Kitchen Meals, Shared Staff Villa, Medical Card, Flight Ticket</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Specialty Barista / Cafe Supervisor</div>
                      <div className="text-[10px] text-slate-400 font-normal">Hospitality, Catering & Facilities</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 4
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,800 – 2,600 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">400 – 800 AED (Tips)</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">2,200 – 3,400 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹50,600 – ₹78,200</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Duty Refreshments, Transport, Medical Coverage, Annual Vacation</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Housekeeping Attendant / Room Boy</div>
                      <div className="text-[10px] text-slate-400 font-normal">Hospitality, Catering & Facilities</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 5
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,200 – 1,600 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">300 – 600 AED (Tips)</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">1,500 – 2,200 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹34,500 – ₹50,600</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Free Accommodation, Duty Food, Service Tips, Medical Insurance</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>SIRA Certified Security Guard</div>
                      <div className="text-[10px] text-slate-400 font-normal">Hospitality, Catering & Facilities</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 4
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">2,000 – 2,600 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">400 – 700 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">2,400 – 3,300 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹55,200 – ₹75,900</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">SIRA Training Sponsorship, Barracks Housing, Uniform, 12h Shift OT</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Commercial Laundry / Pressman Specialist</div>
                      <div className="text-[10px] text-slate-400 font-normal">Hospitality, Catering & Facilities</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 5
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,200 – 1,600 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">300 – 450 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">1,500 – 2,050 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹34,500 – ₹47,150</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Free Mess, Staff Camp Stay, Air-Conditioned Facility, Health Card</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Kitchen Steward / Dishwasher Operative</div>
                      <div className="text-[10px] text-slate-400 font-normal">Hospitality, Catering & Facilities</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 5
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">1,100 – 1,400 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">300 – 450 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">1,400 – 1,850 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹32,200 – ₹42,550</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Free Food 3 Times Daily, Shared Room, Transport, Medical Coverage</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Civil Site Foreman / General Supervisor</div>
                      <div className="text-[10px] text-slate-400 font-normal">Technical, Supervisory & Engineering</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 3
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">3,200 – 5,000 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">800 – 1,500 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">4,000 – 6,500 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹92,000 – ₹1,49,500</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Private AC Room / Flat, Site Vehicle, Fuel, Family Visa Sponsorship</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>MEP Site Foreman (Electrical / Mechanical)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Technical, Supervisory & Engineering</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 3
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">3,200 – 4,800 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">800 – 1,400 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">4,000 – 6,200 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹92,000 – ₹1,42,600</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Company Vehicle, Bachelor Housing, Mobile Allowance, Medical Card</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>HSE Safety Officer (NEBOSH IGC Certified)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Technical, Supervisory & Engineering</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 2
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">3,500 – 5,500 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">900 – 1,800 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">4,400 – 7,300 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹1,01,200 – ₹1,67,900</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Single Accommodation / Allowance, Laptop, Flight Tickets Annually</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>QA / QC Welding & Piping Inspector (CSWIP / AWS)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Technical, Supervisory & Engineering</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 2
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">4,000 – 6,500 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">1,000 – 2,000 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">5,000 – 8,500 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹1,15,000 – ₹1,95,500</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Housing Allowance, Comprehensive Health Insurance, Site Vehicle</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Civil Site Engineer (B.Tech / B.E. Degree)</div>
                      <div className="text-[10px] text-slate-400 font-normal">Technical, Supervisory & Engineering</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 1
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">4,500 – 7,500 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">1,200 – 2,500 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">5,700 – 10,000 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹1,31,100 – ₹2,30,000</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Furnished Flat, Project Bonus, Medical Insurance, Annual Flights</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>Mechanical / Electrical Project Engineer</div>
                      <div className="text-[10px] text-slate-400 font-normal">Technical, Supervisory & Engineering</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 1
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">5,000 – 8,000 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">1,500 – 2,800 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">6,500 – 10,800 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹1,49,500 – ₹2,48,400</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Corporate Health Plan, Performance Bonus, Car Allowance, Family Visa</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>MEP Quantity Surveyor / Cost Estimator</div>
                      <div className="text-[10px] text-slate-400 font-normal">Technical, Supervisory & Engineering</div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        Level 2
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-emerald-700">4,500 – 7,000 AED</td>
                    <td className="py-3.5 px-3 text-slate-600">1,200 – 2,200 AED</td>
                    <td className="py-3.5 px-3 font-extrabold text-slate-900">5,700 – 9,200 AED</td>
                    <td className="py-3.5 px-3 font-bold text-teal-700">₹1,31,100 – ₹2,11,600</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-500">Head Office Role, Health Coverage, Yearly Tickets, Gratuity Accrual</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 text-xs text-amber-900 leading-relaxed space-y-2">
              <p>
                <strong>💡 Currency Conversion &amp; Wages Protection (WPS) Guarantee:</strong> Currency calculations are benchmarked at prevailing exchange rates (1 AED ≈ ₹22.80 to ₹23.20 INR / 76 to 78 PKR / 32 to 33 BDT / 36 to 37 NPR / 15.5 to 16.0 PHP). Under UAE Federal Law, salaries must be transferred 100% via the Wages Protection System (WPS) electronic banking network on or before the due date, with zero personal income tax deductions.
              </p>
            </div>
          </section>

          {/* ── Section 6: Required Documents & Attestation ─────── */}
          <section id="documents" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCertificate className="w-3.5 h-3.5 text-emerald-600" />
              Section 6: Required Documentation &amp; Attestation Guidelines
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Documentation Checklist for UAE Visa Processing
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Documentation requirements for UAE work permits are systematically bifurcated by MOHRE based on the candidate's designated National Occupational Skill Level. While professional, engineering, and managerial positions require comprehensive 5-stage document legalization, vocational blue-collar trades benefit from streamlined procedural exemptions designed to minimize onboarding friction.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              {/* Box 1: Trade Workers */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <FaHelmetSafety className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    For Blue-Collar &amp; Trade Craftsmen (Skill Level 4 &amp; 5)
                  </h3>
                </div>
                <p className="text-xs text-slate-500">
                  Welders, Electricians, Plumbers, Masons, Carpenters, Drivers, Helpers, Cooks &amp; Delivery Riders:
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Original Passport:</strong> Must possess a minimum validity of 6 to 8 months from the date of visa application, with at least 2 consecutive blank visa pages for entry stamps.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Passport Size Photographs:</strong> 8 to 12 recent color photographs (4.5 x 3.5 cm) taken against a crisp, non-reflective white background with neutral facial expression.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Wafid (GAMCA) Medical Fitness Certificate:</strong> Official 'FIT' medical clearance certificate issued by an accredited Gulf Health Council medical center in the candidate's home country.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Home Country Driving License (For Drivers Only):</strong> Original Indian, Pakistani, or home-country LMV/HTV driving license held for a minimum of 2 to 3 years (or valid GCC license if previously employed in the Gulf).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Signed MOHRE MB-1 Job Offer Letter:</strong> Fully executed and fingerprinted copy of the official standard bilingual offer letter issued by the sponsoring employer.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>No Degree Attestation Required:</strong> Skill Level 4 and 5 trades (carpenters, masons, welders, plumbers, electricians, drivers, helpers) are strictly exempt from educational certificate attestation.</span>
                  </li>
                </ul>
              </div>

              {/* Box 2: Supervisory & Engineers */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <FaBuildingColumns className="w-5 h-5 text-teal-600" />
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    For Supervisory, Engineering &amp; Management (Skill Level 1, 2, 3)
                  </h3>
                </div>
                <p className="text-xs text-slate-500">
                  Foremen, Site Engineers, QA/QC Inspectors, Safety Officers, HR, Accountants &amp; Managers:
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Fully Attested University Degree or Polytechnic Diploma:</strong> Original Bachelor's degree (B.Tech, B.E., B.Sc, B.Com, MBA) or 3-year State Technical Board Diploma legalized through the mandatory 5-stage chain.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Verified Employment Experience Certificates:</strong> Official company service letters demonstrating a minimum of 3 to 5 years of verified professional experience in the relevant engineering or supervisory domain.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Police Clearance Certificate (PCC):</strong> Issued by the Passport Seva Kendra (PSK) in India or the District Police Bureau in Pakistan/Nepal if required by specific security classifications.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Professional Licenses / Technical Certifications:</strong> NEBOSH IGC certificates for HSE officers, CSWIP / AWS 3.1 certificates for welding inspectors, or LEEA credentials for rigging supervisors.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Consolidated University Marksheets & Transcripts:</strong> Official academic transcripts supporting the authenticated degree for presentation during MoFA electronic file submission.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 5-Step Attestation Pipeline */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-display font-bold text-slate-900">
                The 5-Step Educational Document Legalization Pipeline (For Degree Holders)
              </h3>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col sm:flex-row gap-4 items-start">
                  <div className="rounded-xl bg-slate-900 text-emerald-400 px-3 py-1.5 text-xs font-black shrink-0">
                    Step 01
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display font-bold text-slate-900 text-sm">Notary Public Verification</h4>
                      <span className="text-[11px] font-semibold text-slate-500">Local District Notary Public in Home Country</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">The original educational degree or diploma is first verified and notarized by a licensed public notary in the applicant's home district to confirm identity and certificate authenticity.</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col sm:flex-row gap-4 items-start">
                  <div className="rounded-xl bg-slate-900 text-emerald-400 px-3 py-1.5 text-xs font-black shrink-0">
                    Step 02
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display font-bold text-slate-900 text-sm">State HRD / Higher Education Department Authentication</h4>
                      <span className="text-[11px] font-semibold text-slate-500">State Secretariat / Higher Education Department (HRD) or SDM</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">The certificate is submitted to the Regional Authentication Centre (RAC) of the State Government's Higher Education Department, or the Sub-Divisional Magistrate (SDM) in New Delhi, verifying university legitimacy.</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col sm:flex-row gap-4 items-start">
                  <div className="rounded-xl bg-slate-900 text-emerald-400 px-3 py-1.5 text-xs font-black shrink-0">
                    Step 03
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display font-bold text-slate-900 text-sm">Ministry of External Affairs (MEA) Legalization</h4>
                      <span className="text-[11px] font-semibold text-slate-500">Ministry of External Affairs (MEA), Government of India (CPV Division)</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">The MEA attaches its official apostille/attestation sticker and signature stamp, confirming that the document is authenticated by recognized sovereign state authorities.</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col sm:flex-row gap-4 items-start">
                  <div className="rounded-xl bg-slate-900 text-emerald-400 px-3 py-1.5 text-xs font-black shrink-0">
                    Step 04
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display font-bold text-slate-900 text-sm">UAE Embassy / Consulate Legalization</h4>
                      <span className="text-[11px] font-semibold text-slate-500">Embassy of the United Arab Emirates (New Delhi) or UAE Consulate (Mumbai / Kerala)</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">The UAE diplomatic mission inspects the MEA stamp, verifies consular processing fees, and applies the official diplomatic seal and hologram sticker onto the reverse of the certificate.</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col sm:flex-row gap-4 items-start">
                  <div className="rounded-xl bg-slate-900 text-emerald-400 px-3 py-1.5 text-xs font-black shrink-0">
                    Step 05
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display font-bold text-slate-900 text-sm">UAE Ministry of Foreign Affairs (MoFA e-DAS) Digital Attestation</h4>
                      <span className="text-[11px] font-semibold text-slate-500">Ministry of Foreign Affairs (MoFA), UAE Government</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">Upon arrival in the UAE (or electronically prior to arrival), the document is uploaded to the MoFA Electronic Document Attestation System (e-DAS), generating a verifiable QR barcode stamp validating the certificate across all UAE government portals.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 7: UAE Labour Law, Worker Rights & Gratuity ── */}
          <section id="labour-law" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaScaleUnbalanced className="w-3.5 h-3.5 text-emerald-600" />
              Section 7: Employment Law &amp; Worker Safeguards
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Legal Protections Guaranteed by UAE Labour Law (Decree-Law No. 33 of 2021)
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Expatriate workers in the UAE are shielded by rigorous statutory protections codified under Federal Decree-Law No. 33 of 2021 and its Executive Regulations under Cabinet Resolution No. 1 of 2022:
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-3">
                <span className="rounded-md bg-emerald-100 text-emerald-900 font-extrabold text-xs px-2.5 py-1">
                  Article 6
                </span>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Absolute Prohibition of Charging Recruitment Fees to Employees
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Federal Decree-Law No. 33 of 2021 explicitly prohibits employers, recruitment agencies, and third-party labor intermediaries from collecting, deducting, or charging any fees or expenses—directly or indirectly—from a worker in exchange for employment, visa processing, medical screening, flight deployment, or resident permit issuance. Sponsoring companies that violate this statute face administrative fines up to AED 100,000 per worker, immediate commercial trade license suspension, and referral to the Public Prosecution for human exploitation offenses.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-3">
                <span className="rounded-md bg-emerald-100 text-emerald-900 font-extrabold text-xs px-2.5 py-1">
                  Articles 13 & 39
                </span>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Strict Ban on Confiscating or Retaining Worker Passports
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under UAE Federal Law and Ministerial Circulars, an employee's passport is the recognized sovereign property of the issuing government and the personal possession of the individual. Employers are strictly prohibited from retaining, seizing, or locking away an employee's travel documents. An employer may temporarily receive the passport solely to execute immigration stamping and must return it to the worker immediately upon completion. If an employer unlawfully withholds a passport, the worker can seek an immediate emergency restitution order through the Dubai Courts or local police without incurring court filing fees.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-3">
                <span className="rounded-md bg-emerald-100 text-emerald-900 font-extrabold text-xs px-2.5 py-1">
                  Articles 17 & 19
                </span>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Statutory Working Hours, Summer Midday Break & Overtime Compensation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Standard working hours across the UAE private sector are strictly capped at 8 hours per day or 48 hours per week (reduced by 2 hours daily during the holy month of Ramadan). Work conducted beyond 8 hours daily constitutes statutory overtime. Daytime overtime (between 4:00 AM and 10:00 PM) requires regular basic hourly pay plus a mandatory minimum bonus of 25%. Night overtime (between 10:00 PM and 4:00 AM) or overtime on statutory weekly rest days requires regular hourly pay plus at least 50%. Overtime is legally capped at 2 hours per day. Furthermore, under the annual Midday Work Break (June 15 to September 15), all outdoor work under direct sunlight must cease entirely between 12:30 PM and 3:00 PM, with violators fined up to AED 50,000.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-3">
                <span className="rounded-md bg-emerald-100 text-emerald-900 font-extrabold text-xs px-2.5 py-1">
                  Article 51
                </span>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  End-of-Service Gratuity (ESB) Calculation & ILOE Social Insurance
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under Article 51, full-time workers completing at least one continuous year of employment are legally guaranteed End-of-Service Gratuity calculated strictly on their last drawn basic wage: 21 days of basic wage for each of the first 5 years of service, and 30 days of basic wage for each additional year thereafter. Resignation vs termination distinctions have been eliminated—workers who resign with proper statutory notice receive 100% of their accrued gratuity. Additionally, under Federal Decree-Law No. 13 of 2022, all employees must enroll in the Involuntary Loss of Employment (ILOE) scheme (AED 5/month for basic salaries under AED 16k), providing 60% of basic salary for 3 months if involuntarily terminated.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 8: DHA In-Country Medical Protocols ─────── */}
          <section id="medical-dha" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaHospital className="w-3.5 h-3.5 text-emerald-600" />
              Section 8: In-Country Health Protocols
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Dubai Health Authority (DHA) In-Country Medical Examination
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Medical fitness screening is the vital statutory prerequisite for obtaining or renewing a UAE employment residency visa. Governed by Federal Law No. 7 of 2008 and updated Dubai Health Authority (DHA) / Emirates Health Services (EHS) clinical protocols, the examination safeguards both individual worker well-being and public community health across the Emirates.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-sm flex items-center gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Pulmonary Tuberculosis (TB) & Healed Scars Protocol
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under Ministerial Resolution No. 28 of 2010 and current DHA guidelines, chest digital X-rays are examined for active pulmonary lesions, cavities, infiltrations, or old fibrotic scars. Candidates exhibiting active open tuberculosis are declared unfit and repatriated. However, candidates with old, healed, or inactive fibrotic lesions are not deported; they undergo secondary sputum smear cultures and GeneXpert MTB/RIF PCR testing at the DHA Al Muhaisnah Preventive Medicine Centre. If negative for active bacilli, candidates are granted a conditional 1-year 'Fit under Treatment / Follow-up' residence visa and complete outpatient prophylactic therapy.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-sm flex items-center gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600" />
                  HIV-1 & HIV-2 Antibody Blood Serology
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The UAE enforces a statutory zero-tolerance threshold for Human Immunodeficiency Virus (HIV). All candidates undergo mandatory fourth-generation ELISA blood screening for HIV-1/2 antibodies and p24 antigen. Candidates testing confirmed positive are declared medically unfit, their visa file is cancelled, and repatriation procedures are coordinated under humane consular supervision.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-sm flex items-center gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Hepatitis B Surface Antigen (HBsAg) for Regulated Trades
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hepatitis B screening is strictly mandatory for 6 regulated high-contact categories: 1) Food handlers, restaurant cooks, cafeteria staff, and beverage workers; 2) Housemaids, nannies, and private domestic helpers; 3) Nursery teachers and kindergarten supervisors; 4) Barbers, hair stylists, and salon personnel; 5) Health club, gym, and spa attendants; and 6) Healthcare professionals. General construction workers, civil engineers, MEP technicians, logistics drivers, and office executives are exempt from Hepatitis B screening.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-sm flex items-center gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Syphilis (VDRL / TPHA) Screening
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All expatriate workers undergo serological testing for Syphilis via Rapid Plasma Reagin (RPR) / VDRL, with confirmatory TPHA testing. Candidates with positive serology are not immediately deported; they are administered a mandatory supervised course of Benzathine Penicillin G injections at an accredited government chest clinic to clear infection before receiving medical fitness certification.
                </p>
              </div>
            </div>

            {/* DHA Centers Table */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-display font-bold text-slate-900">
                Primary Government Medical Fitness Screening Centers in Dubai
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                  <div className="text-xs font-bold text-emerald-700">Al Muhaisnah Medical Fitness Centre</div>
                  <div className="text-[11px] text-slate-500 font-medium">Al Muhaisnah 2, Dubai</div>
                  <p className="text-xs text-slate-600 leading-relaxed">24/7 dedicated hub for male corporate employees, blue-collar workers, and secondary TB diagnostic follow-up.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                  <div className="text-xs font-bold text-emerald-700">Karama Medical Fitness Centre</div>
                  <div className="text-[11px] text-slate-500 font-medium">Al Karama, Dubai</div>
                  <p className="text-xs text-slate-600 leading-relaxed">High-throughput central facility for commercial staff, retail employees, and administrative workers.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                  <div className="text-xs font-bold text-emerald-700">Al Quoz Mall Medical Fitness Centre</div>
                  <div className="text-[11px] text-slate-500 font-medium">Al Quoz Industrial Area 3, Dubai</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Express screening hub serving industrial logistics parks, MEP contracting fleets, and transport personnel.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                  <div className="text-xs font-bold text-emerald-700">Smart Salem VIP Screening Hubs</div>
                  <div className="text-[11px] text-slate-500 font-medium">City Walk, DIFC & Dubai Knowledge Park</div>
                  <p className="text-xs text-slate-600 leading-relaxed">AI-powered autonomous medical fitness centers delivering certified digital results within 30 minutes.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 9: Tawteen & Overstay Regulations ──────── */}
          <section id="tawteen-overstay" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaScaleUnbalanced className="w-3.5 h-3.5 text-emerald-600" />
              Section 9: Tawteen Emiratization &amp; Overstay Fine Regulations
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Tawteen Quotas &amp; Unified UAE Overstay Fine Structure
            </h2>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  MOHRE Tawteen (Emiratization) Quota Architecture
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">The UAE government's national Emiratization programme—commonly designated as "Tawteen"—is regulated by MOHRE under Cabinet Resolution No. 19/5M of 2022. Designed to accelerate the integration of skilled UAE national citizens into the private sector, the mandate requires mainland commercial companies employing 50 or more skilled workers to achieve a minimum 2% annual increase in Emirati employees in skilled roles (classified under MOHRE Skill Levels 1, 2, and 3), culminating in a cumulative 10% Emiratization quota by the end of 2026. Smaller companies employing 20 to 49 workers in 14 targeted economic sectors are required to hire at least one Emirati citizen.</p>
                <p className="text-xs text-slate-600 leading-relaxed">Crucially for overseas applicants, Tawteen does not restrict the overseas recruitment of foreign workers for vocational blue-collar trades, specialized industrial engineering, construction crafts, healthcare, hospitality, logistics, or digital technology. Instead, companies that satisfy their annual Tawteen milestones are rewarded with classification into MOHRE Tier 1 status. Tier 1 companies enjoy heavily subsidized government work permit issuance fees (reduced from AED 3,750 down to approximately AED 250) and accelerated electronic quota allocations for recruiting foreign talent. Consequently, applying for jobs with high-compliance, Tier-1 UAE employers ensures rapid visa approvals and guaranteed institutional stability.</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Unified UAE Overstay Fine Structure (AED 50 / Day)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">The Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) has standardized all immigration overstay fines across all seven emirates (Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah) to a single flat tariff of AED 50 ($13.60 USD / ₹1,140 INR) per calendar day of unauthorized stay. Following the official cancellation or natural expiration of a residence visa, foreign nationals are granted a standard 30-day grace period (which extends up to 60, 90, or 180 days for skilled workers, property owners, and Green Visa holders) during which they can legally exit the country or amend their status to a new employer without financial penalty.</p>
                <p className="text-xs text-slate-600 leading-relaxed">If an individual overstays past the grace period, daily fines accumulate automatically on their electronic immigration file. Settling accrued overstay fines does not result in an immigration blacklist or travel ban; once fines are paid online through the GDRFA portal, ICP website, or an authorized Amer typing center, an official Exit Permit (Outpass) is generated, enabling lawful departure or seamless transition to a new employment visa.</p>
              </div>
            </div>
          </section>

          {/* ── Section 10: Frequently Asked Questions (25+) ──── */}
          <section id="faqs" className="scroll-mt-28 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCircleQuestion className="w-3.5 h-3.5 text-emerald-600" />
              Section 10: Candidate Inquiries &amp; Government Advisory
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions Regarding UAE &amp; Dubai Work Permits
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Clear, legally cited answers to the most common immigration, visa conversion, gratuity, medical clearance, and labor dispute questions:
              </p>
            </div>

            <div className="grid gap-4">
              <div
                key="0"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    1
                  </span>
                  <span>Can I convert a 30-day or 60-day Dubai tourist or visit visa into an employment residence visa without leaving the UAE?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  Yes. Under current GDRFA Dubai and ICP immigration guidelines, foreign nationals who secure a genuine job offer while in the UAE on an entry permit, tourist visa, or visit visa can legally complete an in-country status change (Status Amendment / Inside Country Visa Change). Once your employer's Public Relations Officer (PRO) secures the MOHRE Electronic Work Permit Pre-Approval and the GDRFA Electronic Employment Entry Permit, an in-country status change transaction is executed online. The statutory government amendment fee (approximately AED 550 to AED 750, plus typing service charges) must by law be borne entirely by the sponsoring employer. You do not need to exit via Kish Island, Oman Hatta border, or undertake an airport-to-airport flight run.
                </p>
              </div>
              <div
                key="1"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    2
                  </span>
                  <span>Who is legally responsible for paying UAE employment visa processing costs, flight tickets, and medical fees?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  Under Article 6 of UAE Federal Decree-Law No. 33 of 2021 (Regulation of Labour Relations), the sponsoring employer is legally and strictly required to bear all recruitment costs, government agency fees, quota application charges, work permit issuance fees, entry permit fees, in-country DHA/EHS medical screening costs, Emirates ID card fees, and residency stamping expenses. It is an unlawful statutory offense for any employer, HR manager, or recruitment agency to deduct visa costs from an employee's salary, withhold paychecks as visa reimbursement, or force candidates to pay upfront recruitment fees. Employers violating this rule face administrative fines of up to AED 100,000 per violation from MOHRE and potential commercial trade license suspension.
                </p>
              </div>
              <div
                key="2"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    3
                  </span>
                  <span>Can an employer in Dubai or the UAE legally confiscate or hold an employee's passport?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  No. Retaining or confiscating an employee's passport is strictly illegal under UAE Federal Law. Ministry of Interior Circular No. 267 of 2002 and judicial precedents under Federal Decree-Law No. 33 of 2021 stipulate that a worker's international passport is the legal property of the issuing government and personal possession of the individual worker. An employer may only temporarily hold a passport with the employee's explicit written consent for executing immigration procedures (such as residency stamping or visa renewal) and must return it immediately afterward. If an employer refuses to return your passport upon written request, you have the immediate legal right to lodge an emergency petition with the Dubai Labour Court or local police service to recover your travel document without filing a full labor dispute.
                </p>
              </div>
              <div
                key="3"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    4
                  </span>
                  <span>How is End-of-Service Gratuity (ESB) calculated under UAE Labour Law in 2026?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  Under Article 51 of Federal Decree-Law No. 33 of 2021, full-time expatriate employees completing at least one continuous year of service with an employer are legally entitled to End-of-Service Gratuity upon contract conclusion. The calculation is based strictly on the employee's final basic wage (excluding allowances such as housing, transport, or overtime):<br/><br/>1. For service between 1 and 5 years: 21 calendar days of basic wage for each completed year of service.<br/><br/>2. For service exceeding 5 years: 30 calendar days of basic wage for each additional completed year beyond year five.<br/><br/>Fractions of a year are calculated proportionally. Under the 2021/2022 unified labour law reforms, there is no longer any distinction between employer termination and employee resignation—full gratuity is preserved. Total gratuity payout cannot exceed two years' gross remuneration. Alternatively, employers enrolled in the Cabinet Resolution No. 96 of 2023 voluntary savings investment scheme deposit monthly capital into accredited investment funds instead of a lump sum upon exit.
                </p>
              </div>
              <div
                key="4"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    5
                  </span>
                  <span>What medical fitness tests are mandatory for obtaining a UAE residency work visa?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  All foreign expatriates must pass medical fitness testing to secure a UAE residence visa. Before departure from home countries (such as India, Pakistan, Nepal, Bangladesh, Philippines, or Sri Lanka), applicants complete a screening at a GCC Authorized Medical Centers Association (GAMCA / Wafid) clinic. Upon arrival in the UAE, a mandatory in-country screening is conducted at a Dubai Health Authority (DHA) Medical Fitness Center or an Emirates Health Services (EHS) clinic. The core screening comprises a Chest Digital X-Ray (to screen for active pulmonary Tuberculosis or old fibrotic calcifications) and Blood Serology (to test for HIV-1/2 antibodies and Syphilis/VDRL). For six regulated high-contact job roles—including food and beverage handlers, restaurant staff, cafeteria cooks, barbers, beauty salon specialists, domestic workers, nursery teachers, and private drivers—a Hepatitis B surface antigen (HBsAg) blood test is also mandatory.
                </p>
              </div>
              <div
                key="5"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    6
                  </span>
                  <span>What happens if old healed TB scars are detected on my chest X-ray in Dubai?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  Under UAE Federal Ministerial Resolution No. 28 of 2010 and updated DHA medical fitness guidelines, candidates undergoing initial residence visa screening who exhibit pulmonary abnormalities or healed fibrotic scars on their chest X-ray are not automatically declared unfit or deported. Instead, they are referred to specialized preventive medicine hubs (such as the DHA Al Muhaisnah Medical Fitness Center) for advanced secondary diagnostic evaluation, including a GeneXpert MTB/RIF sputum PCR test and a 3-day sputum smear culture. If active mycobacterium tuberculosis is ruled out and the candidate is diagnosed with an inactive, healed scar, they are granted a conditional 1-year 'Fit under Treatment / Monitoring' residence visa. They undergo prophylactic outpatient therapy at a government chest clinic and obtain permanent clearance upon renewal.
                </p>
              </div>
              <div
                key="6"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    7
                  </span>
                  <span>What is the UAE Wage Protection System (WPS) and how does it safeguard workers?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  The Wage Protection System (WPS) is an electronic payroll auditing infrastructure developed jointly by the Central Bank of the UAE (CBUAE) and MOHRE. Under Cabinet Resolution No. 1 of 2022, all private-sector mainland employers are legally obligated to disburse salaries to at least 90% of their registered workforce electronically through authorized UAE commercial banks or Central Bank-licensed exchange houses (such as Al Ansari Exchange, LuLu Exchange, or Al Fardan Exchange) via pre-loaded ATM salary cards on or before the due date. The system automatically tracks every worker's basic wage and allowances against their registered MOHRE employment contract. If an employer delays salary payments past the 15th of the following month, the electronic WPS system immediately blocks the company's file, freezes its ability to issue new work permits, and issues automatic financial penalties.
                </p>
              </div>
              <div
                key="7"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    8
                  </span>
                  <span>What is the penalty for overstaying a visa in Dubai and the UAE in 2026?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  The UAE Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) has unified all overstay fines across all seven emirates (Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah) to a flat rate of AED 50 ($13.60 USD / ₹1,140 INR) per calendar day of illegal overstay. Following the expiry or cancellation of a residence visa, foreign nationals are granted a standard 30-day (or up to 60-day to 180-day grace period for skilled categories and Golden/Green visa holders) to either secure a new sponsor or exit the country without penalty. If you overstay beyond the grace period, daily fines accumulate. To exit the country or amend your status to a new employer, all accrued fines must be settled through the GDRFA portal, ICP website, or an authorized Amer center.
                </p>
              </div>
              <div
                key="8"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    9
                  </span>
                  <span>Do blue-collar workers (electricians, welders, plumbers, drivers) need attested educational degrees?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  No. Educational degree attestation is strictly exempt for blue-collar and vocational trade categories classified under MOHRE Skill Levels 4 and 5 (such as carpenters, masons, steel fixers, 6G welders, industrial electricians, plumbing technicians, light and heavy drivers, housekeeping staff, and general helpers). To obtain a work permit and residence visa in these designations, applicants only require a valid international passport (minimum 6 months validity), passing medical clearance (Wafid + DHA), passing practical trade tests where applicable, and a signed MOHRE MB-1 offer letter. Degree attestation (4-tier legalization) is only mandatory for Skill Level 1 (Executive Managers, Engineers, Doctors), Skill Level 2 (Technologists, Accountants, Nurses), and Skill Level 3 (Supervisors, Foremen, Inspectors).
                </p>
              </div>
              <div
                key="9"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    10
                  </span>
                  <span>What is the legal maximum working hours and overtime calculation in the UAE?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  Under Article 17 of UAE Labour Law, standard working hours for private-sector employees are a maximum of 8 hours per day or 48 hours per week. During the holy month of Ramadan, standard daily working hours are reduced by 2 hours for all workers regardless of religion. Any work performed beyond 8 hours daily constitutes overtime under Article 19. Daytime overtime (between 4:00 AM and 10:00 PM) is remunerated at the employee's regular hourly basic wage plus a mandatory statutory bonus of at least 25%. Night overtime (between 10:00 PM and 4:00 AM) or overtime on designated rest days is remunerated at regular hourly pay plus at least 50%. Overtime cannot exceed 2 hours per day unless required to prevent substantial loss or serious accident.
                </p>
              </div>
              <div
                key="10"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    11
                  </span>
                  <span>Can an employee be placed on probation, and what are the rules regarding dismissal during probation?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  Under Article 9 of Federal Decree-Law No. 33 of 2021, an employer may place a newly hired worker on a probationary period not exceeding six months from their official start date. During probation, an employer wishing to terminate the worker's contract must give at least 14 days' advance written notice. Conversely, if an employee wishes to resign during probation to join another UAE employer, they must provide at least 30 days' written notice, and the new employer is legally required to reimburse the initial employer for reasonable recruitment and visa expenses. If the employee wishes to resign and exit the country permanently during probation, they must provide at least 14 days' written notice.
                </p>
              </div>
              <div
                key="11"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    12
                  </span>
                  <span>What is the UAE Mandatory Unemployment Insurance (ILOE) scheme?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  The Involuntary Loss of Employment (ILOE) scheme is a mandatory social protection program established under Federal Decree-Law No. 13 of 2022. All private-sector and federal government workers in the UAE must enroll in ILOE. For workers earning a basic salary of AED 16,000 or less (Category A), the insurance premium is only AED 5 per month (AED 60 per year). For workers earning a basic salary above AED 16,000 (Category B), the premium is AED 10 per month (AED 120 per year). If an enrolled worker loses their job due to company termination or insolvency (and not voluntary resignation or disciplinary misconduct) after paying premiums for at least 12 consecutive months, they receive 60% of their average basic salary for up to 3 consecutive months (capped at AED 10,000/month for Category A and AED 20,000/month for Category B) while seeking new employment. Failure to subscribe to ILOE incurs a direct MOHRE fine of AED 400.
                </p>
              </div>
              <div
                key="12"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    13
                  </span>
                  <span>What is the difference between a Mainland MOHRE visa and a Free Zone visa in the UAE?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  A Mainland Employment Visa is governed under the dual jurisdiction of the Ministry of Human Resources and Emiratisation (MOHRE) and the local immigration authority (GDRFA Dubai or ICP). Mainland companies can operate anywhere in the UAE and tender for federal and local government contracts. Workers are protected directly by MOHRE labor dispute arbitration and the electronic Wages Protection System (WPS). A Free Zone Visa is issued by an autonomous economic zone authority (such as JAFZA, DMCC, DAFZA, DIFC, or Hamriyah) through immigration. Free zone companies are exempt from MOHRE mainland quota tiers and Emiratization (Tawteen) mandates, and initial labor disputes are mediated by the respective Free Zone Authority rather than MOHRE.
                </p>
              </div>
              <div
                key="13"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    14
                  </span>
                  <span>What is the UAE Green Visa and who is eligible to apply for it?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  The Green Visa is a 5-year self-sponsored residency permit established under Cabinet Resolution No. 65 of 2022. It eliminates the requirement for a local company sponsor. Eligible applicants include: 1) Skilled Employees who hold a valid employment contract, are classified under MOHRE Skill Level 1, 2, or 3, possess a bachelor's degree or higher diploma, and earn a minimum monthly salary of AED 15,000; 2) Freelancers and Self-Employed individuals holding a valid freelance permit from MOHRE or a free zone and demonstrating annual freelance income of at least AED 360,000 over the past two years; and 3) Investors or Commercial Partners participating in commercial entities. Green Visa holders can sponsor first-degree family members (spouses and male children up to 25 years old) and enjoy an extended 6-month grace period upon visa expiration or termination.
                </p>
              </div>
              <div
                key="14"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    15
                  </span>
                  <span>Who qualifies for the 10-Year UAE Golden Visa without a company sponsor?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  The 10-Year UAE Golden Visa provides self-sponsored permanent residency with zero company ties, 100% foreign business ownership, and the ability to stay outside the UAE for more than 6 months without visa invalidation. Major qualifying categories include: 1) Real Estate Investors purchasing property valued at AED 2,000,000 or more (including mortgaged or off-plan properties with approved bank letters); 2) Skilled Professionals holding MOHRE Skill Level 1 or 2 roles (Doctors, Engineers, Information Technology specialists, Healthcare leaders, Scientists, Executives) with a bachelor's degree and a certified employment contract showing a minimum monthly basic salary of AED 30,000; 3) Exceptional Talents in culture, art, sports, or digital technology; and 4) Outstanding university and high school graduates.
                </p>
              </div>
              <div
                key="15"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    16
                  </span>
                  <span>Can I sponsor my spouse, children, or elderly parents for UAE residence visas?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  Yes. Under unified UAE immigration regulations, an expatriate resident (male or female) holding a valid residence visa can sponsor their legal spouse and children regardless of their specific job title, provided they earn a minimum monthly salary of AED 4,000, or AED 3,000 plus employer-provided accommodation. Male children can be sponsored up to the age of 25, while unmarried daughters can be sponsored with no age restriction. To sponsor elderly parents (both father and mother must be sponsored together unless legally separated or deceased), the applicant must earn a minimum monthly salary of AED 20,000 (or AED 19,000 plus two-bedroom company housing) and provide proof of being their sole financial supporter.
                </p>
              </div>
              <div
                key="16"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    17
                  </span>
                  <span>What is the Midday Summer Work Break rule in the UAE?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  MOHRE strictly enforces a mandatory Midday Work Break annually between June 15 and September 15. Under this ministerial resolution, all outdoor work performed under direct sunlight in open construction yards, civil infrastructure sites, road paving, and logistics facilities must cease entirely between 12:30 PM and 3:00 PM daily to protect workers from extreme summer heat, heat exhaustion, and sunstroke. Sponsoring employers must provide shaded rest areas with air conditioning or industrial fans, potable drinking water, first-aid kits, electrolytes, and salt tablets. Sponsoring firms found violating the Midday Break face immediate administrative fines of AED 5,000 per worker, up to a maximum penalty of AED 50,000 per site.
                </p>
              </div>
              <div
                key="17"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    18
                  </span>
                  <span>How does the MOHRE Labor Dispute Resolution process work if my employer delays salary?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  If an employer delays salary payments, refuses to issue an end-of-service gratuity settlement, or violates contract terms, the employee can lodge an official labor complaint via the MOHRE Smart Mobile App, website (mohre.gov.ae), or by calling the toll-free MOHRE contact center at 800-60. Under Federal Law No. 20 of 2023 amending the Labour Law, MOHRE dispute conciliation officers are empowered to issue final binding executive decisions on disputes where the claimed financial sum is AED 50,000 or less, or where a party fails to comply with prior amicable settlements. The aggrieved worker is exempt from all court filing fees across all stages of litigation up to claims of AED 100,000.
                </p>
              </div>
              <div
                key="18"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    19
                  </span>
                  <span>Can I work for another company or take on part-time freelance work on a regular employment visa?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  Under Article 7 of Federal Decree-Law No. 33 of 2021, employees can engage in part-time, temporary, or flexible employment alongside their primary job, provided they obtain an official MOHRE Part-Time Work Permit or Temporary Work Permit. Working for a second company without an official MOHRE part-time permit is strictly illegal and constitutes illegal employment, subjecting both the unauthorized hiring entity and the worker to steep immigration fines (AED 50,000 for the employer) and potential residency cancellation.
                </p>
              </div>
              <div
                key="19"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    20
                  </span>
                  <span>How can I exchange my home country driving license for a Dubai or UAE driving license?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  Foreign nationals holding driving licenses from 32 designated exempt countries (including the UK, USA, Canada, Germany, France, Japan, Australia, GCC nations, and select EU territories) can directly convert their foreign driving license into a UAE driving license without undergoing driving school lessons or road tests. For nationals of India, Pakistan, Egypt, Nepal, Bangladesh, and the Philippines, direct license swap is not permitted. However, holders of valid home-country licenses with over 2 to 5 years of verified driving experience are eligible for the 'Golden Chance' initiative or direct road test evaluation without mandatory full-cycle theoretical training classes, drastically reducing licensing costs from AED 6,500 down to approximately AED 2,200.
                </p>
              </div>
              <div
                key="20"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    21
                  </span>
                  <span>What is the Tawteen (Emiratization) policy and does it restrict hiring of foreign workers in 2026?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  Tawteen is the UAE government's strategic national Emiratization mandate, overseen by MOHRE. Private-sector mainland companies employing 50 or more skilled workers are required to achieve a 2% annual increase in Emirati citizens hired for skilled roles, reaching a cumulative 10% Emiratization quota by the end of 2026. Companies with 20 to 49 workers in 14 specified economic sectors must hire at least one UAE citizen. While this policy prioritizes UAE nationals for supervisory, banking, HR, and administrative roles, it does not restrict the overseas recruitment of foreign workers for blue-collar trades, specialized technical engineering, construction, healthcare, hospitality, logistics, or digital tech. In fact, companies meeting their Tawteen targets are upgraded to MOHRE Tier 1 classification, granting them discounted government work permit fees and accelerated overseas quota allocations.
                </p>
              </div>
              <div
                key="21"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    22
                  </span>
                  <span>What should I do if an employer fails to renew my UAE residence visa before it expires?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  Under UAE immigration law, it is the strict legal responsibility of the employer to renew an employee's residence visa and Emirates ID before its official expiration date. If an employer neglects renewal, an automatic 30-day grace period applies upon expiration. If the company still fails to renew within this grace period, daily overstay fines of AED 50 per day begin accruing against the visa file. In such cases, the employee should immediately submit an electronic inquiry or formal grievance via the MOHRE App (mohre.gov.ae) or visit an Amer center. MOHRE can intervene to compel the employer to execute the renewal transaction or permit the worker to transfer to a new sponsor without incurring personal liability for company-induced delay penalties.
                </p>
              </div>
              <div
                key="22"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    23
                  </span>
                  <span>Are UAE salaries really 100% tax-free, and can I remit all my savings back to India or my home country?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  Yes. The United Arab Emirates levies zero percent (0.0%) personal income tax, zero capital gains tax, and zero inheritance tax on employee earnings. Whatever gross salary is agreed upon in your MOHRE contract is paid to you in full without payroll deductions for personal tax. Furthermore, the UAE has no foreign exchange restrictions or limits on international capital repatriation. Expatriate workers can remit 100% of their earnings back to India, Pakistan, the Philippines, or any global destination through commercial banks, currency exchange houses, or instant digital rails like UPI-AANI integration at competitive market foreign exchange rates.
                </p>
              </div>
              <div
                key="23"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    24
                  </span>
                  <span>What is an e-Migrate / PoE clearance for Indian passport holders traveling to Dubai on work permits?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  The Government of India's Ministry of External Affairs mandates that Indian nationals holding Emigration Check Required (ECR) passports (typically individuals who have not passed Class 10 matriculation examinations) must obtain Emigration Clearance (EC) through the official e-Migrate online portal (emigrate.gov.in) before departing for overseas employment in 18 notified ECR countries, including the UAE. Clearance is granted upon verification of an authenticated foreign employment contract and enrollment in the mandatory Pravasi Bharatiya Bima Yojana (PBBY) insurance scheme. Indian workers holding ECNR passports (non-ECR, holders of Class 10/12 certificates or university degrees, or income tax payees) do not require PoE clearance and can travel directly on their valid UAE employment entry permit and flight ticket.
                </p>
              </div>
              <div
                key="24"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all space-y-2"
              >
                <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    25
                  </span>
                  <span>How does WorkWise Visa assist candidates in securing verified, zero-fraud UAE jobs and work permits?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">
                  WorkWise Visa operates as a licensed, ethical overseas recruitment and immigration facilitation consultancy. We partner directly with verified UAE mainland construction giants, MEP contractors, hotel groups, logistics fleets, and facility management firms. We ensure every job vacancy is backed by an authentic MOHRE electronic work permit quota and approved MB-1 offer letter. We guide candidates step-by-step through pre-departure Wafid medical tests, 5-stage degree attestation, e-Migrate PoE processing, airline ticketing, and airport reception in Dubai and Abu Dhabi. We strictly adhere to zero recruitment fee exploitation standards, ensuring our candidates enter the UAE safely, legally, and with guaranteed statutory protections.
                </p>
              </div>
            </div>
          </section>

          {/* ── Internal Linking & Relevant Guides ─────────────── */}
          <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/70 p-8 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Explore Related UAE In-Depth Resources
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                Authoritative UAE Career &amp; Immigration Guides
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/blogs/gcc-unified-tourist-visa-grand-tours-2026-rules-cross-border-jobs"
                className="group rounded-2xl border border-emerald-300 bg-white p-5 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">Regional Landmark Visa</span>
                  <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    GCC Unified Tourist Visa (Grand Tours) 2026
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Single-visa mobility across UAE, Saudi, Qatar, Oman, Kuwait &amp; Bahrain. Eligibility, launch timeline &amp; job interview impact.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/blogs/complete-guide-uae-saudi-arabia-blue-collar-work-permits-2026"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-emerald-600">Work Permit Manual</span>
                  <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Complete UAE &amp; Saudi Blue-Collar Work Permits 2026
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    MOHRE vs Qiwa contrast, quota allocation, e-visa issuance, mandatory health insurance, and WPS compliance.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/blogs/dubai-delivery-rider-warehouse-logistics-work-permit-2026"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-teal-600">Logistics &amp; Transport</span>
                  <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Dubai Delivery Rider Jobs &amp; RTA Motorcycle License
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Onboarding for Talabat, Noon, Careem, RTA driving school lessons, and commission pay structures.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/blogs/dubai-hotel-hospitality-work-visa-guide-waiters-chefs-2026"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-amber-600">Hospitality &amp; Dining</span>
                  <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Dubai Hotel &amp; Hospitality Staff Recruitment 2026
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    5-star hotel recruitment, waiters, commis chefs, housekeeping, salary scales, tips, and MOHRE contracts.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </section>

          {/* ── Direct CTA Banner ──────────────────────────────── */}
          <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="inline-block rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3.5 py-1 text-xs font-bold text-emerald-300">
                Direct UAE Client Recruitment Drives Active
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
                Apply for Verified UAE &amp; Dubai Jobs with WorkWise Visa
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Connect with licensed UAE employers for zero-fee, government-registered recruitment in construction, engineering, hospitality, and driving. Get verified MOHRE contracts, medical guidance, and express flight deployment.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://wa.me/919152288874?text=Hello%20WorkWise%20Visa,%20I%20want%20to%20apply%20for%20a%20Dubai/UAE%20work%20visa%20and%20job%20vacancy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Chat on WhatsApp with UAE Specialist
                </a>

                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition-colors"
                >
                  <FaBriefcase className="w-3.5 h-3.5" />
                  View All Open Jobs
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
