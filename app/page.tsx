import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CountriesGrid from "@/components/CountriesGrid";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import FeaturedJobs from "@/components/FeaturedJobs";
import ConsultationForm from "@/components/ConsultationForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CountriesGrid />
        <Services />
        <WhyUs />
        <ProcessTimeline />
        <Testimonials />
        <FeaturedJobs />
        <ConsultationForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
