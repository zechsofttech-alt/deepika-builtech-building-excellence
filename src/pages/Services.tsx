import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="bg-surface-subtle py-16 border-b border-surface-mid">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-ink mb-4">
            Industrial <span className="text-amber">Solutions</span>
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto font-sans">
            Precision engineering and structural durability for modern infrastructure.
          </p>
        </div>
      </div>
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <TargetAudienceSection />
      <Footer />
    </div>
  );
};

export default Services;
