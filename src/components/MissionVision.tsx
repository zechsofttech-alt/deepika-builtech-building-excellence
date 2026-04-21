import { motion } from "framer-motion";
import { Target, Eye, ArrowUpRight } from "lucide-react";
import peb from "@/assets/peb-building.jpg";
import warehouse from "@/assets/warehouse.jpg";

const MissionVision = () => {
  return (
    <section className="py-0 overflow-hidden bg-carbon">
      <div className="flex flex-col lg:flex-row">
        
        {/* Mission Side */}
        <div className="lg:w-1/2 relative min-h-[500px] flex items-center group">
          <div className="absolute inset-0 z-0">
            <img src={peb} alt="Mission" className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute inset-0 bg-carbon/60 mix-blend-multiply" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 p-12 lg:p-24"
          >
            <div className="w-16 h-1 w-24 bg-amber mb-10" />
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-6 h-6 text-amber" />
              <span className="text-amber text-[10px] font-black uppercase tracking-[0.4em]">Our Mission</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-white leading-none tracking-tighter mb-8 max-w-md">
              Engineering <br />
              <span className="gradient-text">Absolute Safety.</span>
            </h2>
            <p className="text-white/60 text-lg font-sans leading-relaxed max-w-sm mb-10">
              To fabricate steel structures that serve as the backbone for global industries, ensuring zero-waste production and maximum structural integrity.
            </p>
            <div className="inline-flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest border-b border-white/20 pb-2 hover:border-amber transition-colors cursor-pointer group/link">
              Read Operational Goals <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </div>

        {/* Vision Side */}
        <div className="lg:w-1/2 relative min-h-[500px] flex items-center group border-t lg:border-t-0 lg:border-l border-white/10">
          <div className="absolute inset-0 z-0">
            <img src={warehouse} alt="Vision" className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute inset-0 bg-amber/20 mix-blend-overlay" />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 p-12 lg:p-24"
          >
            <div className="w-16 h-1 w-24 bg-white mb-10" />
            <div className="flex items-center gap-4 mb-6">
              <Eye className="w-6 h-6 text-white" />
              <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Our Vision</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-white leading-none tracking-tighter mb-8 max-w-md">
              Defining the <br />
              <span className="text-amber">Modern Skyline.</span>
            </h2>
            <p className="text-white/60 text-lg font-sans leading-relaxed max-w-sm mb-10">
              To be the global benchmark for technical innovation in PEB fabrication, transforming industrial potential into structural reality.
            </p>
            <div className="inline-flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest border-b border-white/20 pb-2 hover:border-amber transition-colors cursor-pointer group/link">
              View Future Roadmap <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
