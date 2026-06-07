import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Structured schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.deepikabuiltech.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://www.deepikabuiltech.com/projects"
      }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Deepika Builtech Industrial Projects Portfolio",
    "description": "Completed pre-engineered buildings, warehouse structures, mezzanine floors, and cold storage facilities by Deepika Builtech in Chennai and across South India.",
    "url": "https://www.deepikabuiltech.com/projects",
    "numberOfItems": projects.length,
    "itemListElement": projects.map((p, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://www.deepikabuiltech.com/project/${p.slug}`,
      "name": p.title
    }))
  };

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Our Projects | Industrial PEB & Warehouse Portfolio | Deepika Builtech"
        description="Explore the portfolio of completed pre-engineered building (PEB) sheds, industrial warehouses, cold storages, and mezzanine floor projects in Chennai by Deepika Builtech."
      />
      
      {/* Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(itemListSchema)}
      </script>

      <Navbar />
      
      {/* Heavy-Duty Header */}
      <div className="bg-carbon py-16 border-b border-white/5 relative overflow-hidden">
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
                Industrial PEB <br />
                <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">Projects.</span>
              </h1>
            </div>
            <p className="text-surface-mid text-lg max-w-sm font-sans mb-2 border-l border-white/10 pl-8">
              A comprehensive showcase of industrial scale, technical precision, and structural engineering across South India.
            </p>
          </div>
        </div>
      </div>

      <Breadcrumbs items={[{ label: "Projects" }]} />

      {/* Modern Filtered Grid */}
      <main id="content" className="py-24 bg-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {projects.map((project) => (
              <Link 
                key={project.slug} 
                to={`/project/${project.slug}`} 
                className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded-3xl p-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-8 shadow-2xl shadow-carbon/5">
                  <picture>
                    <source srcSet={project.webpImage} type="image/webp" />
                    <img 
                      src={project.image} 
                      alt={`PEB ${project.category.toLowerCase()} construction project ${project.location} by Deepika Builtech, ${project.area.toLowerCase().replace(' ', '')}, ${project.year}`}
                      width="640"
                      height="480"
                      loading="lazy"
                      {...{ fetchpriority: "low" }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                  </picture>
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
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber">{project.category}</span>
                  </div>
                  <h3 className="font-heading font-black text-2xl text-ink group-hover:text-amber transition-colors tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-ink-muted font-sans font-medium">Client: {project.client}</p>
                  
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 pt-4 border-t border-surface-mid text-xs font-sans">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase tracking-widest text-ink-muted/50">Location</span>
                      <span className="font-bold text-ink">{project.location}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase tracking-widest text-ink-muted/50">Completed</span>
                      <span className="font-bold text-ink">{project.year}</span>
                    </div>
                    <div className="flex flex-col col-span-2">
                      <span className="text-[9px] font-black uppercase tracking-widest text-ink-muted/50">Architectural Scale</span>
                      <span className="font-bold text-ink">{project.area}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <StatsSection />

      {/* Cinematic CTA */}
      <div className="bg-carbon py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber opacity-5 blur-[120px]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-10 tracking-tighter leading-none">
            Ready to Forge <br />
            <span className="gradient-text">Your Next Asset?</span>
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-4 bg-amber hover:bg-white text-carbon font-black px-12 py-5 rounded-2xl transition-all transform hover:-translate-y-1 shadow-2xl shadow-amber/20 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
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
