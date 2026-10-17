/* ================================================================
   scripts/seed-b2b-candidates.ts — Populate realistic agent candidates
   Recruited by B2B sourcing partners (Purvanchal Associates, Mithila Sourcing)
   for AFGC Holding Dubai (Mason, Scaffolder, Helper, Steel Fixer, Carpenter).
   ================================================================ */

import { connectDB } from "../lib/mongodb";
import Partner from "../lib/models/Partner";
import AgentCandidate from "../lib/models/AgentCandidate";

async function run() {
  await connectDB();
  console.log("Connected to MongoDB Atlas.");

  // Update partners with unique agent codes if missing
  const agents = await Partner.find({ partnerType: "Sourcing Sub-Agent" });
  console.log(`Found ${agents.length} Sourcing Sub-Agents.`);

  let purvanchal = agents.find((a) => a.name.includes("Purvanchal"));
  let mithila = agents.find((a) => a.name.includes("Mithila"));

  if (purvanchal) {
    purvanchal.agentCode = "WW-AGT-01";
    await purvanchal.save();
    console.log("Assigned code WW-AGT-01 to Purvanchal Associates");
  }

  if (mithila) {
    mithila.agentCode = "WW-AGT-02";
    await mithila.save();
    console.log("Assigned code WW-AGT-02 to Mithila Sourcing");
  }

  // Clear existing agent candidates to seed cleanly
  const deleted = await AgentCandidate.deleteMany({});
  console.log(`Cleared ${deleted.deletedCount} existing agent candidates.`);

  const sampleCandidates = [
    {
      candidateRefNo: "WW-B2B-2026-101",
      candidateName: "Rameshwar Prasad Yadav",
      phone: "+91 98350 44112",
      whatsapp: "+919835044112",
      passportNumber: "Z5829140",
      trade: "Mason",
      targetCompany: "AFGC Holding Dubai",
      targetCountry: "UAE",
      experienceYears: 4,
      city: "Gopalganj",
      state: "Bihar",
      agentId: purvanchal?._id,
      agentName: purvanchal?.name || "Purvanchal Overseas Associates",
      agentCode: "WW-AGT-01",
      agentPhone: "+91 94501 23456",
      stage: "visa_issued",
      stageNotes: "Dubai Employment Visa stamped. Ready for flight ticket booking.",
      tradeTestScore: "Grade A (Block & Plaster)",
      tradeTestCenter: "Apex Technical Trade Test Center Patna",
      interviewDate: "2026-10-02",
      interviewRemarks: "Selected by AFGC Client Representative Eng. Asad Faruk.",
      medicalStatus: "Fit",
      medicalCenter: "GAMCA Approved Medical Center Gorakhpur",
      visaNumber: "DXB-EV-2026-981042",
      visaIssuedDate: "2026-10-14",
      flightDate: "2026-10-25",
      flightPnr: "EK-512-DXB",
      commissionAmount: 7000,
      commissionStatus: "approved",
      notes: "Candidate has 3 years prior Gulf experience in Sharjah.",
      processedBy: "WorkWise Visa Operations",
    },
    {
      candidateRefNo: "WW-B2B-2026-102",
      candidateName: "Mohammad Irfan Ansari",
      phone: "+91 94712 88203",
      whatsapp: "+919471288203",
      passportNumber: "V3910248",
      trade: "Scaffolder",
      targetCompany: "AFGC Holding Dubai",
      targetCountry: "UAE",
      experienceYears: 3,
      city: "Siwan",
      state: "Bihar",
      agentId: mithila?._id,
      agentName: mithila?.name || "Mithila Overseas Link",
      agentCode: "WW-AGT-02",
      agentPhone: "+91 98350 98765",
      stage: "visa_processing",
      stageNotes: "MOHRE work permit approved. Visa stamping submitted at Dubai Immigration.",
      tradeTestScore: "Grade A (Cuplock & Tube Fitting)",
      tradeTestCenter: "Apex Technical Center Patna",
      interviewDate: "2026-10-05",
      interviewRemarks: "Direct client selection with basic salary 1300 + 100 bonus.",
      medicalStatus: "Fit",
      medicalCenter: "National GAMCA Center Patna",
      commissionAmount: 6000,
      commissionStatus: "pending",
      notes: "Passport valid till 2031, ECNR passport.",
      processedBy: "WorkWise Visa Operations",
    },
    {
      candidateRefNo: "WW-B2B-2026-103",
      candidateName: "Dharmendra Kumar Singh",
      phone: "+91 88771 99341",
      whatsapp: "+918877199341",
      passportNumber: "W7103892",
      trade: "Construction Helper",
      targetCompany: "AFGC Holding Dubai",
      targetCountry: "UAE",
      experienceYears: 1,
      city: "Deoria",
      state: "Uttar Pradesh",
      agentId: purvanchal?._id,
      agentName: purvanchal?.name || "Purvanchal Overseas Associates",
      agentCode: "WW-AGT-01",
      agentPhone: "+91 94501 23456",
      stage: "medical_fit",
      stageNotes: "Medical fit received from GAMCA Gorakhpur. Submitting for UAE Work Permit.",
      tradeTestScore: "Physical fitness & safety check passed",
      interviewDate: "2026-10-08",
      interviewRemarks: "Selected for AFGC Contracting project. 1200 + 100 bonus.",
      medicalStatus: "Fit",
      medicalCenter: "Al-Shifa Diagnostics Gorakhpur",
      commissionAmount: 5000,
      commissionStatus: "pending",
      notes: "PCC verified by local SP office.",
      processedBy: "WorkWise Visa Operations",
    },
    {
      candidateRefNo: "WW-B2B-2026-104",
      candidateName: "Satish Chand Chaudhary",
      phone: "+91 96312 00481",
      whatsapp: "+919631200481",
      passportNumber: "U1829045",
      trade: "Steel Fixer",
      targetCompany: "AFGC Holding Dubai",
      targetCountry: "UAE",
      experienceYears: 5,
      city: "Chhapra",
      state: "Bihar",
      agentId: mithila?._id,
      agentName: mithila?.name || "Mithila Overseas Link",
      agentCode: "WW-AGT-02",
      agentPhone: "+91 98350 98765",
      stage: "trade_test",
      stageNotes: "Practical rebar cutting & bending trade test scheduled at Apex Patna.",
      tradeTestScore: "Under Assessment",
      tradeTestCenter: "Apex Technical Center Patna",
      interviewRemarks: "Shortlisted based on Gulf experience letter.",
      medicalStatus: "Pending",
      commissionAmount: 6000,
      commissionStatus: "pending",
      notes: "Previously worked in Qatar with Al-Jaber Construction.",
      processedBy: "WorkWise Visa Operations",
    },
    {
      candidateRefNo: "WW-B2B-2026-105",
      candidateName: "Abdul Kalam Sheikh",
      phone: "+91 91223 55198",
      whatsapp: "+919122355198",
      passportNumber: "X9031247",
      trade: "Carpenter",
      targetCompany: "AFGC Holding Dubai",
      targetCountry: "UAE",
      experienceYears: 3,
      city: "Gorakhpur",
      state: "Uttar Pradesh",
      agentId: purvanchal?._id,
      agentName: purvanchal?.name || "Purvanchal Overseas Associates",
      agentCode: "WW-AGT-01",
      agentPhone: "+91 94501 23456",
      stage: "agent_submitted",
      stageNotes: "New candidate registered by Purvanchal Associates. Awaiting passport verification.",
      medicalStatus: "Pending",
      commissionAmount: 5000,
      commissionStatus: "pending",
      notes: "Shuttering carpenter with good safety knowledge.",
      processedBy: "Agent Portal Submission",
    },
    {
      candidateRefNo: "WW-B2B-2026-106",
      candidateName: "Pankaj Kumar Sah",
      phone: "+91 95461 33289",
      whatsapp: "+919546133289",
      passportNumber: "T6109241",
      trade: "Mason",
      targetCompany: "AFGC Holding Dubai",
      targetCountry: "UAE",
      experienceYears: 6,
      city: "Siwan",
      state: "Bihar",
      agentId: mithila?._id,
      agentName: mithila?.name || "Mithila Overseas Link",
      agentCode: "WW-AGT-02",
      agentPhone: "+91 98350 98765",
      stage: "deployed",
      stageNotes: "Candidate departed via FlyDubai FZ-442 to Dubai International Airport.",
      tradeTestScore: "Grade A+",
      tradeTestCenter: "Apex Technical Center Patna",
      interviewDate: "2026-09-15",
      interviewRemarks: "Selected. Joined AFGC Holding site.",
      medicalStatus: "Fit",
      medicalCenter: "GAMCA Patna",
      visaNumber: "DXB-EV-2026-871239",
      visaIssuedDate: "2026-09-28",
      flightDate: "2026-10-10",
      flightPnr: "FZ-442-DXB",
      commissionAmount: 7000,
      commissionStatus: "paid",
      commissionPaidDate: new Date("2026-10-12"),
      commissionNotes: "Paid via NEFT Ref: UTR2026101289410 to Mithila Overseas account.",
      notes: "Successfully deployed and received by AFGC camp supervisor.",
      processedBy: "WorkWise Visa Operations",
    },
  ];

  const inserted = await AgentCandidate.insertMany(sampleCandidates);
  console.log(`Seeded ${inserted.length} realistic B2B Agent candidates.`);

  // Update counters in Partner collection
  if (purvanchal) {
    const pCount = await AgentCandidate.countDocuments({ agentId: purvanchal._id });
    const pSelected = await AgentCandidate.countDocuments({
      agentId: purvanchal._id,
      stage: { $in: ["selected", "medical_fit", "visa_processing", "visa_issued", "deployed"] },
    });
    const pDeployed = await AgentCandidate.countDocuments({
      agentId: purvanchal._id,
      stage: "deployed",
    });
    await Partner.findByIdAndUpdate(purvanchal._id, {
      totalCandidatesReferred: pCount,
      totalSelected: pSelected,
      totalDeployed: pDeployed,
    });
    console.log(`Updated Purvanchal counters: Referred=${pCount}, Selected=${pSelected}, Deployed=${pDeployed}`);
  }

  if (mithila) {
    const mCount = await AgentCandidate.countDocuments({ agentId: mithila._id });
    const mSelected = await AgentCandidate.countDocuments({
      agentId: mithila._id,
      stage: { $in: ["selected", "medical_fit", "visa_processing", "visa_issued", "deployed"] },
    });
    const mDeployed = await AgentCandidate.countDocuments({
      agentId: mithila._id,
      stage: "deployed",
    });
    await Partner.findByIdAndUpdate(mithila._id, {
      totalCandidatesReferred: mCount,
      totalSelected: mSelected,
      totalDeployed: mDeployed,
    });
    console.log(`Updated Mithila counters: Referred=${mCount}, Selected=${mSelected}, Deployed=${mDeployed}`);
  }

  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
