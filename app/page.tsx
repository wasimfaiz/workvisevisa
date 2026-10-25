import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Dynamically code-split below-the-fold sections so the mobile browser loads the initial hero instantly
const Services = dynamic(() => import("@/components/Services"));
const Industries = dynamic(() => import("@/components/Industries"));
const WhyUs = dynamic(() => import("@/components/WhyUs"));
const ProcessTimeline = dynamic(() => import("@/components/ProcessTimeline"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FeaturedJobs = dynamic(() => import("@/components/FeaturedJobs"));
const SalaryCalculator = dynamic(() => import("@/components/SalaryCalculator"));
const ConsultationForm = dynamic(() => import("@/components/ConsultationForm"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp"));

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "WorkWise Visa | Overseas Job Placement & Work Visa Agency",
  description:
    "Trusted work visa consultancy & overseas job placement. Secure verified Gulf & Europe jobs for trade workers & drivers. Book your free consultation now!",
  alternates: {
    canonical: "https://www.workwisevisa.com",
  },
  openGraph: {
    title: "WorkWise Visa | Overseas Job Placement & Work Visa Agency",
    description:
      "Trusted work visa consultancy & overseas job placement. Secure verified Gulf & Europe jobs for trade workers & drivers. Book your free consultation now!",
    url: "https://www.workwisevisa.com",
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkWise Visa | Overseas Job Placement & Work Visa Agency",
    description:
      "Trusted work visa consultancy & overseas job placement. Secure verified Gulf & Europe jobs for trade workers & drivers. Book your free consultation now!",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <WhyUs />
        <ProcessTimeline />
        <Testimonials />
        <FeaturedJobs />
        <SalaryCalculator />
        <ConsultationForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
