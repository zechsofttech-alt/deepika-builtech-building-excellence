import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import MissionVision from "@/components/MissionVision";
import TimelineSection from "@/components/TimelineSection";
import AchievementsSection from "@/components/AchievementsSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustedPartners from "@/components/TrustedPartners";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import directorImg from "@/assets/director.jpg";
import awardImg from "@/assets/excellence-award-2025.jpg";
import { useEffect } from "react";
import { Users, Globe, Building, Award } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="About Us | Deepika Builtech — 10+ Years in PEB Construction Chennai"
        description="Deepika Builtech is Chennai's trusted Pre-Engineered Building (PEB) company with 10+ years experience in steel structures, cold storage, warehouses, mezzanine floors, and EOT cranes. 150+ projects delivered. Call +91 96000 67611."
      />
      <Navbar />
      
      <div className="bg-surface-subtle py-16 border-b border-surface-mid">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-ink mb-4">
            About <span className="text-amber">Our Story</span>
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto font-sans">
            A legacy of structural integrity, engineering excellence, and industrial scale.
          </p>
        </div>
      </div>

      <Breadcrumbs items={[{ label: "About Us" }]} />

      <main id="content">
        <AboutSection />
        
        {/* Director Profile & Founding Story Section */}
        <section className="py-24 bg-surface border-t border-surface-mid">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Left: MD Portrait Photo */}
              <div className="lg:col-span-5 relative">
                <div className="absolute inset-x-4 -inset-y-4 border-2 border-amber/30 z-0 translate-x-4 translate-y-4" />
                <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-surface-subtle border border-surface-mid">
                  <img 
                    src={directorImg} 
                    alt="Siva Adithya, Managing Director of Deepika Builtech Engineering" 
                    width={500}
                    height={625}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                    <h3 className="font-heading font-black text-2xl">Siva Adithya</h3>
                    <p className="text-amber text-xs uppercase tracking-widest font-bold mt-1">Managing Director / Founder</p>
                  </div>
                </div>
              </div>

              {/* Right: Leadership & Core Facts */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-amber text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Leadership & Legacy</span>
                  <h2 className="text-4xl md:text-5xl font-heading font-black text-ink tracking-tighter leading-none mb-6">
                    Engineering the <br />
                    <span className="gradient-text">Future of Infrastructure.</span>
                  </h2>
                </div>

                <div className="prose prose-lg text-ink-muted leading-relaxed font-sans space-y-6">
                  <p>
                    Established in <strong>2015</strong>, Deepika Builtech was founded by <strong>Siva Adithya</strong> with a vision to revolutionize the pre-engineered building (PEB) sector in South India. Over the last decade, we have grown from a local contractor into a premier engineering firm, delivering high-integrity steel sheds, cold storages, industrial warehouses, and crane structures.
                  </p>
                  <p>
                    Under Siva Adithya's strategic leadership, Deepika Builtech has successfully commissioned over 150+ major projects, serving a diverse client base ranging from local small-scale industries to global third-party logistics firms. We maintain our core corporate philosophy of precision fabrication, absolute site safety, and timely delivery.
                  </p>
                </div>

                {/* Grid of Key Info Points */}
                <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-surface-mid">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-surface-subtle flex items-center justify-center text-amber shrink-0 border border-surface-mid">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-ink text-base">50+ Team Members</h4>
                      <p className="text-xs text-ink-muted font-sans mt-1">Skilled engineers, fabricators, and certified on-site erection specialists.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-surface-subtle flex items-center justify-center text-amber shrink-0 border border-surface-mid">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-ink text-base">South India Service Area</h4>
                      <p className="text-xs text-ink-muted font-sans mt-1">Actively executing heavy industrial structures in TN, AP, Karnataka, and Kerala.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-surface-subtle flex items-center justify-center text-amber shrink-0 border border-surface-mid">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-ink text-base">Two Production Units</h4>
                      <p className="text-xs text-ink-muted font-sans mt-1">State-of-the-art fabrication facilities located in Vaiyavur and Ambattur.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-surface-subtle flex items-center justify-center text-amber shrink-0 border border-surface-mid">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-ink text-base">Excellence Award (2025)</h4>
                      <p className="text-xs text-ink-muted font-sans mt-1">Awarded for innovative clear-span design and safety execution standards.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <MissionVision />
        <TimelineSection />
        
        {/* Certificate Section for Excellence Award 2025 */}
        <section className="py-24 bg-surface-subtle border-t border-surface-mid">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <span className="text-amber text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Accreditation</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-ink mb-12 tracking-tighter">
              Award-Winning <span className="gradient-text">Engineering Standards.</span>
            </h2>
            
            <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-surface-mid bg-white p-4">
              <figure>
                <img 
                  src={awardImg} 
                  alt="Deepika Builtech Excellence Award 2025 ceremony certificate photo" 
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-auto rounded-2xl object-cover border border-surface-mid"
                />
                <figcaption className="text-sm font-heading font-bold text-ink-muted mt-6 uppercase tracking-wider">
                  Deepika Builtech receives Excellence Award, 2025
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <AchievementsSection />
        <StatsSection />
        <TestimonialsSection />
        <TrustedPartners />
      </main>

      <Footer />
    </div>
  );
};

export default About;
