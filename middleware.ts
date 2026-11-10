import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LEGACY_BLOG_REDIRECTS: Record<string, string> = {
  // GSC "Page with redirect" legacy blog slugs -> Canonical destination
  "dubai-construction-work-complete-guide-jobs-salaries-visas-recruitment-2026":
    "dubai-construction-work-jobs-guide-2026-salaries-trades-visa-process-labor-laws-wps",
  "saudi-arabia-neom-work-visa-recruitment-guide-2026":
    "saudi-arabia-neom-megaprojects-recruitment-work-visa-guide-2026",
  "kuwait-work-visa-reopening-degree-attestation-guide-2026":
    "kuwait-work-visa-reopening-labor-law-reforms-degree-attestation-2026",
  "police-clearance-certificate-pcc-gulf-work-visas-passport-office-guide-2026":
    "police-clearance-certificate-pcc-gulf-european-visas-psk-apostille-guide-2026",
  "wafid-gamca-medical-test-gulf-visa-complete-guide-2026":
    "wafid-gamca-medical-examination-2026-online-appointment-rules-fit-unfit-criteria",
  "gulf-gcc-work-visa-complete-guide-2026-saudi-uae-qatar-kuwait-oman-bahrain":
    "gulf-work-visa-complete-guide-2026-saudi-arabia-uae-qatar-kuwait-oman-bahrain",
  "dubai-residence-permit-complete-guide-2026-pathways-application-fees-rules":
    "dubai-residence-visa-permit-complete-guide-2026-eligibility-process-cost-official-portals",
  "saudi-arabia-skill-verification-program-takamol-trade-test-guide-2026":
    "takamol-svp-skill-verification-program-saudi-arabia-trade-test-guide-2026",
  "qatar-visa-center-qvc-biometrics-medical-guide-2026":
    "qatar-work-visa-qvc-process-guide-2026-medical-biometrics-contract-qid",
  "kuwait-work-visa-article-18-regulations-degree-attestation-2026":
    "kuwait-work-visa-reopening-labor-law-reforms-degree-attestation-2026",
  "uk-european-caregiver-work-visa-complete-guide-2026":
    "uk-health-and-care-worker-visa-essential-requirements-caregivers-2026",
  "dubai-construction-work-visa-salary-recruitment-guide-2026":
    "dubai-construction-work-jobs-guide-2026-salaries-trades-visa-process-labor-laws-wps",
};

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // 1. Clean parameterized filter query URLs on /jobs (e.g. ?country=Qatar, ?country=Oman)
  // and issue an immediate 301 Permanent Redirect to the canonical /jobs URL.
  if (pathname === "/jobs" && searchParams.has("country")) {
    const url = new URL("/jobs", request.url);
    const q = searchParams.get("q");
    if (q) {
      url.searchParams.set("q", q);
    }
    return NextResponse.redirect(url, 301);
  }

  // 2. Immediate 301 Permanent Redirect for legacy blog slugs
  if (pathname.startsWith("/blogs/")) {
    const slug = pathname.replace(/^\/blogs\//, "").replace(/\/+$/, "");
    const canonical = LEGACY_BLOG_REDIRECTS[slug];
    if (canonical) {
      const targetUrl = new URL(`/blogs/${canonical}`, request.url);
      return NextResponse.redirect(targetUrl, 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/jobs", "/blogs/:path*"],
};
