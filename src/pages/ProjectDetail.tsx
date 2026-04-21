import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, MapPin, Ruler, Building, CheckCircle2, Play } from "lucide-react";
import { useState } from "react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-black mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-amber hover:underline">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Cinematic Hero */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden bg-carbon flex items-end pb-20">
        <div className="absolute inset-0 z-0">
          {!isPlaying ? (
            <>
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "linear" }}
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-50" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/40 to-transparent" />
              
              {project.videoUrl && (
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group"
                >
                  <div className="w-24 h-24 rounded-full bg-amber/90 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-amber transition-all duration-500">
                    <Play className="w-8 h-8 fill-carbon text-carbon ml-1" />
                  </div>
                  <span className="block text-center mt-4 text-white text-xs font-black uppercase tracking-[0.3em]">Play Project Showcase</span>
                </button>
              )}
            </>
          ) : (
            <iframe 
              className="w-full h-full"
              src={`${project.videoUrl}?autoplay=1`}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <Link to="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-amber mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Back to Portfolio</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber text-carbon text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded">
                {project.category}
              </span>
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-white/20 rounded">
                {project.status}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.9] tracking-tighter mb-4">
              {project.title}.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <div className="bg-amber py-10 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 border-r lg:border-r border-carbon/10 last:border-0">
              <MapPin className="w-6 h-6 text-carbon" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-carbon/40 mb-1">Location</p>
                <p className="text-lg font-heading font-black text-carbon leading-none">{project.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-r lg:border-r border-carbon/10 last:border-0">
              <Ruler className="w-6 h-6 text-carbon" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-carbon/40 mb-1">Area</p>
                <p className="text-lg font-heading font-black text-carbon leading-none">{project.area}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-r lg:border-r border-carbon/10 last:border-0">
              <Building className="w-6 h-6 text-carbon" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-carbon/40 mb-1">Client</p>
                <p className="text-lg font-heading font-black text-carbon leading-none">{project.client}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-6 h-6 text-carbon" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-carbon/40 mb-1">Timeline</p>
                <p className="text-lg font-heading font-black text-carbon leading-none">Completed {project.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-black text-ink mb-10 tracking-tight">Project Overview</h2>
              <p className="text-xl text-ink-muted leading-relaxed font-sans mb-12">
                {project.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-surface-subtle border border-surface-mid rounded-2xl">
                    <CheckCircle2 className="w-6 h-6 text-amber flex-shrink-0" />
                    <p className="font-heading font-bold text-lg text-ink leading-snug">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-carbon p-10 rounded-[2.5rem] sticky top-32">
                <h3 className="text-2xl font-heading font-black text-white mb-6 tracking-tight">Technical Data</h3>
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Category</p>
                    <p className="text-lg font-bold text-white">{project.category}</p>
                  </div>
                  <div className="border-b border-white/10 pb-5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Build Method</p>
                    <p className="text-lg font-bold text-white">Pre-Engineered Structural Steel</p>
                  </div>
                  <div className="border-b border-white/10 pb-5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Safety Standard</p>
                    <p className="text-lg font-bold text-white">IS 800:2007 (Steel Design Code)</p>
                  </div>
                </div>
                <Link to="/contact" className="mt-12 block w-full bg-amber text-carbon text-center font-black py-4 rounded-xl hover:bg-white transition-all shadow-xl shadow-amber/10">
                  Request Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
