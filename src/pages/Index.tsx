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
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustedPartners />
      <AboutSection />
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
      <Footer />
    </div>
  );
};

export default Index;
