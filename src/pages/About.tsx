import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import MissionVision from "@/components/MissionVision";
import TimelineSection from "@/components/TimelineSection";
import AchievementsSection from "@/components/AchievementsSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustedPartners from "@/components/TrustedPartners";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="bg-surface-subtle py-16 border-b border-surface-mid">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-ink mb-4">
            About <span className="text-amber">Our Story</span>
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto font-sans">
            A legacy of structural integrity and industrial excellence spanning over 15 years.
          </p>
        </div>
      </div>
      <AboutSection />
      <MissionVision />
      <TimelineSection />
      <AchievementsSection />
      <StatsSection />
      <TestimonialsSection />
      <TrustedPartners />
      <Footer />
    </div>
  );
};

export default About;
