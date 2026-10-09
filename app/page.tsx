import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import FeaturedJobs from "@/components/FeaturedJobs";
import ConsultationForm from "@/components/ConsultationForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "WorkWise Visa | Overseas Job Placement & Work Visa Agency",
  description:
    "Trusted overseas job placement & work visa consultancy. Secure verified jobs for trade workers, drivers & welders across Gulf & Europe. 5,000+ happy clients.",
  alternates: {
    canonical: "https://www.workwisevisa.com",
  },
  openGraph: {
    title: "WorkWise Visa | Overseas Job Placement & Work Visa Agency",
    description:
      "Trusted overseas job placement & work visa consultancy. Secure verified jobs for trade workers, drivers & welders across Gulf & Europe. 5,000+ happy clients.",
    url: "https://www.workwisevisa.com",
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkWise Visa | Overseas Job Placement & Work Visa Agency",
    description:
      "Trusted overseas job placement & work visa consultancy. Secure verified jobs for trade workers, drivers & welders across Gulf & Europe. 5,000+ happy clients.",
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
        <ConsultationForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
