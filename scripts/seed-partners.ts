/* ================================================================
   scripts/seed-partners.ts — Seed Initial B2B Candidate Sourcing Partners
   Includes MoU Agreement, Aadhaar Card & PAN Card KYC Documents.
   Usage: npm run seed:partners
   ================================================================ */

import dns from "node:dns";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { resolve } from "path";

try {
  dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
} catch {
  // Ignore in restricted environments
}

dotenv.config({ path: resolve(process.cwd(), ".env.local") });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI not found in .env.local");
  process.exit(1);
}

const INITIAL_PARTNERS = [
  {
    partnerCode: "WW-CMP-001",
    name: "Purvanchal Overseas Associates",
    partnerType: "Company",
    contactPerson: "Sunil Kumar Pandey",
    designation: "Managing Director",
    email: "purvanchal.overseas@gmail.com",
    phone: "+91 94501 23456",
    whatsapp: "+919450123456",
    city: "Gorakhpur",
    state: "Uttar Pradesh",
    country: "India",
    address: "Near Mohaddipur Crossing, Deoria Road, Gorakhpur, UP 273008",
    status: "Active",
    commissionTerms: "₹5,000 per Helper / ₹8,000 per Skilled Craftsman",
    totalCandidatesReferred: 85,
    totalSelected: 64,
    totalDeployed: 52,
    rating: 5,
    notes: "Top sourcing agency for Gorakhpur, Deoria, Kushinagar & Maharajganj districts. Specializes in civil construction & MEP trades.",
    mouStatus: "Signed",
    mouDocumentUrl: "/uploads/mou_purvanchal_signed.pdf",
    mouDocumentName: "Signed_MoU_Purvanchal_WorkWise_2026.pdf",
    mouDocumentSize: 184520,
    mouSignedDate: "2026-01-15",
    mouExpiryDate: "2027-01-14",
    mouNotes: "Official 1-Year Exclusive Sourcing Agreement signed for UP East region.",
    // KYC
    aadhaarNumber: "7829 4019 8214",
    aadhaarDocumentUrl: "/uploads/sample_aadhaar_card.pdf",
    aadhaarDocumentName: "Sunil_Pandey_Aadhaar.pdf",
    panNumber: "ABCPP8214K",
    panDocumentUrl: "/uploads/sample_pan_card.pdf",
    panDocumentName: "Purvanchal_Overseas_PAN.pdf",
    kycStatus: "Verified",
  },
  {
    partnerCode: "WW-CMP-002",
    name: "Mithila Overseas & Saran Manpower Link",
    partnerType: "Company",
    contactPerson: "Rajeev Ranjan Jha",
    designation: "Managing Partner",
    email: "mithila.overseas.siwan@gmail.com",
    phone: "+91 98350 98765",
    whatsapp: "+919835098765",
    city: "Siwan",
    state: "Bihar",
    country: "India",
    address: "Station Road, Near Babunia More, Siwan, Bihar 841226",
    status: "Active",
    commissionTerms: "₹5,000 per selected candidate upon visa stamping",
    totalCandidatesReferred: 112,
    totalSelected: 80,
    totalDeployed: 71,
    rating: 5,
    notes: "Primary candidate mobilization channel for Siwan, Gopalganj, and Chapra. High candidate retention rate.",
    mouStatus: "Signed",
    mouDocumentUrl: "/uploads/mou_mithila_signed.pdf",
    mouDocumentName: "Mithila_WorkWise_MoU_Contract.pdf",
    mouDocumentSize: 245100,
    mouSignedDate: "2026-02-01",
    mouExpiryDate: "2027-01-31",
    mouNotes: "MoU valid with direct bank settlement terms on visa approval.",
    // KYC
    aadhaarNumber: "9102 3847 1192",
    aadhaarDocumentUrl: "/uploads/sample_aadhaar_card.pdf",
    aadhaarDocumentName: "Rajeev_Jha_Aadhaar.pdf",
    panNumber: "AAMPJ9102B",
    panDocumentUrl: "/uploads/sample_pan_card.pdf",
    panDocumentName: "Mithila_Overseas_PAN.pdf",
    kycStatus: "Verified",
  },
  {
    partnerCode: "WW-IND-003",
    name: "Rajesh Kumar Sharma",
    partnerType: "Individual",
    contactPerson: "Rajesh Kumar Sharma",
    designation: "Field Sourcing Consultant",
    email: "rajesh.sharma.gopalganj@gmail.com",
    phone: "+91 91220 77889",
    whatsapp: "+919122077889",
    city: "Gopalganj",
    state: "Bihar",
    country: "India",
    address: "Main Road, Near Cinema Hall, Gopalganj, Bihar 841428",
    status: "Active",
    commissionTerms: "₹4,000 per Helper / ₹7,000 per Heavy Driver or Mason",
    totalCandidatesReferred: 38,
    totalSelected: 25,
    totalDeployed: 20,
    rating: 5,
    notes: "Experienced local agent with strong grassroots network across Gopalganj and Kuchaikote blocks.",
    mouStatus: "Signed",
    mouDocumentUrl: "/uploads/mou_purvanchal_signed.pdf",
    mouDocumentName: "MoU_RajeshSharma_CandidateChannel.pdf",
    mouDocumentSize: 156320,
    mouSignedDate: "2026-02-20",
    mouExpiryDate: "2027-02-19",
    mouNotes: "Individual consultant MoU signed with KYC and bank passbook verification.",
    // KYC
    aadhaarNumber: "4521 8839 2049",
    aadhaarDocumentUrl: "/uploads/sample_aadhaar_card.pdf",
    aadhaarDocumentName: "Rajesh_Sharma_Aadhaar.pdf",
    panNumber: "BPRPS4521M",
    panDocumentUrl: "/uploads/sample_pan_card.pdf",
    panDocumentName: "Rajesh_Sharma_PAN.pdf",
    kycStatus: "Verified",
  },
  {
    partnerCode: "WW-CMP-004",
    name: "Al-Ameen Manpower Solutions",
    partnerType: "Company",
    contactPerson: "Syed Tariq Anwar",
    designation: "Director of Operations",
    email: "tariq.anwar@alameenmanpower.in",
    phone: "+91 98351 11223",
    whatsapp: "+919835111223",
    city: "Patna",
    state: "Bihar",
    country: "India",
    address: "Fraser Road, Near Dak Bungalow Crossing, Patna, Bihar 800001",
    status: "Active",
    commissionTerms: "₹8,000 per Heavy Vehicle Driver / Certified Welder",
    totalCandidatesReferred: 45,
    totalSelected: 32,
    totalDeployed: 28,
    rating: 5,
    notes: "Well-established agency sourcing certified GCC heavy trailer drivers and 6G welders across Bihar.",
    mouStatus: "Signed",
    mouDocumentUrl: "/uploads/mou_mithila_signed.pdf",
    mouDocumentName: "Al_Ameen_MoU_B2B_Partnership.pdf",
    mouDocumentSize: 312400,
    mouSignedDate: "2026-03-01",
    mouExpiryDate: "2027-02-28",
    mouNotes: "Comprehensive B2B partnership MoU signed with trade testing protocols.",
    // KYC
    aadhaarNumber: "6231 9904 5512",
    aadhaarDocumentUrl: "/uploads/sample_aadhaar_card.pdf",
    aadhaarDocumentName: "Tariq_Anwar_Aadhaar.pdf",
    panNumber: "AACTA6231P",
    panDocumentUrl: "/uploads/sample_pan_card.pdf",
    panDocumentName: "Al_Ameen_PAN.pdf",
    kycStatus: "Verified",
  },
  {
    partnerCode: "WW-IND-005",
    name: "Dharmendra Yadav",
    partnerType: "Individual",
    contactPerson: "Dharmendra Yadav",
    designation: "Independent Sourcing Partner",
    email: "",
    phone: "+91 88771 99341",
    whatsapp: "+918877199341",
    city: "Deoria",
    state: "Uttar Pradesh",
    country: "India",
    address: "Salempur Road, Deoria, UP 274001",
    status: "Active",
    commissionTerms: "₹4,500 per selected candidate",
    totalCandidatesReferred: 19,
    totalSelected: 12,
    totalDeployed: 8,
    rating: 4,
    notes: "Mobilizes youth for Gulf helper and hospitality vacancies from Salempur and Bhatpar Rani.",
    mouStatus: "Pending",
    mouDocumentUrl: "",
    mouDocumentName: "",
    mouDocumentSize: 0,
    mouSignedDate: "",
    mouExpiryDate: "",
    mouNotes: "Draft MoU sent on WhatsApp. Physical signed copy to be collected next week.",
    // KYC
    aadhaarNumber: "3819 0021 7741",
    aadhaarDocumentUrl: "/uploads/sample_aadhaar_card.pdf",
    aadhaarDocumentName: "Dharmendra_Yadav_Aadhaar.pdf",
    panNumber: "",
    panDocumentUrl: "",
    panDocumentName: "",
    kycStatus: "Pending",
  },
  {
    partnerCode: "WW-CMP-006",
    name: "Avadh Technical Manpower Hub",
    partnerType: "Company",
    contactPerson: "Er. Arvind K. Srivastava",
    designation: "Executive Director",
    email: "avadh.manpower.lko@gmail.com",
    phone: "+91 94150 55667",
    whatsapp: "+919415055667",
    city: "Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    address: "Charbagh, Near Railway Station, Lucknow, UP 226004",
    status: "Pending Verification",
    commissionTerms: "₹6,000 per skilled technician",
    totalCandidatesReferred: 8,
    totalSelected: 3,
    totalDeployed: 0,
    rating: 4,
    notes: "New agency partner currently completing trade screening onboarding.",
    mouStatus: "Under Review",
    mouDocumentUrl: "",
    mouDocumentName: "",
    mouDocumentSize: 0,
    mouSignedDate: "",
    mouExpiryDate: "",
    mouNotes: "MoU draft shared; legal team reviewing commercial terms.",
    // KYC
    aadhaarNumber: "",
    aadhaarDocumentUrl: "",
    aadhaarDocumentName: "",
    panNumber: "",
    panDocumentUrl: "",
    panDocumentName: "",
    kycStatus: "Pending",
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI!);
    console.log("Connected to MongoDB Atlas");

    const PartnerSchema = new mongoose.Schema({}, { strict: false });
    const Partner = mongoose.models.Partner || mongoose.model("Partner", PartnerSchema);

    // Upsert each partner by name
    for (const p of INITIAL_PARTNERS) {
      await Partner.findOneAndUpdate(
        { name: p.name },
        { $set: p },
        { upsert: true, returnDocument: "after" }
      );
      console.log(`✓ Seeded B2B Partner: ${p.name} [${p.partnerType}] — MoU: ${p.mouStatus} — KYC: ${p.kycStatus}`);
    }

    const total = await Partner.countDocuments();
    console.log(`\n🎉 Successfully seeded B2B Sourcing Partners with KYC! Total in DB: ${total}`);
    await mongoose.disconnect();
    process.exit(0);
  } catch (err: any) {
    console.error("Seed error:", err.message);
    process.exit(1);
  }
}

seed();
