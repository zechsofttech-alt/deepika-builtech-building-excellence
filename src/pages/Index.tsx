import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedPartners from "@/components/TrustedPartners";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import PerformanceEdge from "@/components/PerformanceEdge";
import SectorExpertise from "@/components/SectorExpertise";
import MidPageCTA from "@/components/MidPageCTA";
import StatsSection from "@/components/StatsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import HomeBlogHighlight from "@/components/HomeBlogHighlight";
import HomeProcess from "@/components/HomeProcess";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import SubsidySection from "@/components/SubsidySection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Inject Structured Data (JSON-LD) dynamically
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Deepika Builtech Engineering",
      "url": "https://www.deepikabuiltech.com",
      "telephone": "+919600067611",
      "email": "dbtechengg@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "New No. 31,31A, Old No.14,15, Coromandal Town, SIDCO Industrial Estate",
        "addressLocality": "Ambattur, Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600098",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.0977,
        "longitude": 80.1534
      },
      "openingHours": "Mo-Sa 09:00-18:00",
      "description": "Pre-Engineered Building company in Chennai specialising in PEB structures, cold storage, warehouse construction, mezzanine floors, and EOT cranes.",
      "areaServed": "Chennai, Tamil Nadu",
      "foundingDate": "2015",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "50+"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ld-json-schema";
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("ld-json-schema");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        title="PEB Building Construction & Steel Structures in Chennai | Deepika Builtech"
        description="Deepika Builtech is Chennai's trusted Pre-Engineered Building (PEB) company with 10+ years experience in steel structures, cold storage, warehouses, mezzanine floors, and EOT cranes. 150+ projects delivered. Call +91 96000 67611."
      />
      <Navbar />
      <HeroSection />
      <TrustedPartners />
      <main id="content">
        <AboutSection />
        <SubsidySection />
        <ServicesSection />
        <FeaturedProjects />
        <PerformanceEdge />
        <SectorExpertise />
        <MidPageCTA />
        <StatsSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <HomeBlogHighlight />
        <HomeProcess />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
