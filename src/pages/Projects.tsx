import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Heavy-Duty Header */}
      <div className="bg-carbon pt-40 pb-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div 
            className="w-full h-full" 
            style={{ 
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }} 
          />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
            <div className="max-w-3xl">
              <span className="text-amber text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Our Legacy of Steel</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.9] tracking-tighter mb-8">
                Building the <br />
                <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">Future.</span>
              </h1>
            </div>
            <p className="text-surface-mid text-lg max-w-sm font-sans mb-2 border-l border-white/10 pl-8">
              A comprehensive showcase of industrial scale, technical precision, and structural engineering across South India.
            </p>
          </div>
        </div>
      </div>

      {/* Modern Filtered Grid */}
      <div className="py-24 bg-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {projects.map((project) => (
              <Link key={project.slug} to={`/project/${project.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-10 shadow-2xl shadow-carbon/5">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/40 to-transparent opacity-60" />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-md text-carbon text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="w-14 h-14 bg-amber text-carbon rounded-2xl flex items-center justify-center shadow-2xl">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 px-2">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-amber" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-ink-muted">{project.location}</span>
                  </div>
                  <h3 className="font-heading font-black text-3xl text-ink group-hover:text-amber transition-colors tracking-tighter leading-none">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-sm font-sans font-bold text-ink-muted opacity-60">Architectural Area</span>
                    <span className="text-xl font-heading font-black text-ink">{project.area}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <StatsSection />

      {/* Cinematic CTA */}
      <div className="bg-carbon py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber opacity-5 blur-[120px]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-10 tracking-tighter leading-none">
            Ready to Forge <br />
            <span className="gradient-text">Your Next Asset?</span>
          </h2>
          <Link to="/contact" className="inline-flex items-center justify-center gap-4 bg-amber hover:bg-white text-carbon font-black px-12 py-5 rounded-2xl transition-all transform hover:-translate-y-1 shadow-2xl shadow-amber/20 group">
            Consult Our Engineering Head
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;

