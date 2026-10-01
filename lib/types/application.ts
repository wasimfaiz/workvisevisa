/* ================================================================
   lib/types/application.ts — Candidate Application & Processing Stages
   Client-safe and Server-safe types and constants for 7-stage
   work visa milestone tracking.
   ================================================================ */

export interface IStageHistory {
  stageNumber: number;
  stageName: string;
  status: "in_progress" | "completed" | "on_hold" | "rejected";
  date: Date | string;
  remarks?: string;
  updatedBy?: string;
}

export interface ProcessingStage {
  step: number;
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  color: string;
}

export const PROCESSING_STAGES: readonly ProcessingStage[] = [
  {
    step: 1,
    id: "registration",
    name: "Registration & Agreement",
    shortName: "Registration",
    description: "Candidate enrolled, agreement executed, advance registration fee processed.",
    icon: "UserCheck",
    color: "#6366f1",
  },
  {
    step: 2,
    id: "document_audit",
    name: "Document Audit & PCC Attestation",
    shortName: "Doc Audit / PCC",
    description: "Passport verified, Police Clearance Certificate (PCC) issued, educational apostille done.",
    icon: "FileSearch",
    color: "#0284c7",
  },
  {
    step: 3,
    id: "employer_selection",
    name: "Employer Selection & Contract",
    shortName: "Offer Letter",
    description: "Candidate shortlisted by international employer, formal work agreement signed.",
    icon: "Briefcase",
    color: "#0d9488",
  },
  {
    step: 4,
    id: "work_permit",
    name: "Work Permit / Ministry Approval",
    shortName: "Work Permit",
    description: "Official Work Permit / Labor Approval issued by destination government.",
    icon: "Award",
    color: "#f59e0b",
  },
  {
    step: 5,
    id: "embassy_vfs",
    name: "Embassy Appointment & VFS Filing",
    shortName: "VFS / Biometrics",
    description: "Biometrics scheduled at VFS / Embassy, visa dossier formally submitted.",
    icon: "Building2",
    color: "#8b5cf6",
  },
  {
    step: 6,
    id: "visa_stamped",
    name: "Visa Stamping / Visa Issued",
    shortName: "Visa Approved",
    description: "Work visa successfully stamped in passport or official e-visa grant issued.",
    icon: "CheckCircle2",
    color: "#10b981",
  },
  {
    step: 7,
    id: "deployment",
    name: "Flight Ticket & Deployment",
    shortName: "Flight & Departure",
    description: "Air ticket booked, pre-departure briefing done, candidate departed.",
    icon: "Plane",
    color: "#059669",
  },
] as const;
