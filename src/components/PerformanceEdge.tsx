import { motion, Variants } from "framer-motion";
import { Shield, Zap, ThermometerSnowflake, Ruler } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Seismic Resilient",
    desc: "Certified for Zone V seismic compliance as per IS 1893:2016 engineering standards.",
    tag: "Security // 0.1s"
  },
  {
    icon: Zap,
    title: "High-Tensile Steel",
    desc: "Exclusively using Grade 345 & 450 MPa steel for maximum structural integrity.",
    tag: "Material // FEA"
  },
  {
    icon: ThermometerSnowflake,
    title: "Thermal Barrier",
    desc: "Climate-optimized roofing systems reducing energy thermal leakage by up to 25%.",
    tag: "Efficiency // ISO"
  },
  {
    icon: Ruler,
    title: "CNC Precision",
    desc: "Zero-error automated fabrication ensuring perfect on-site fitment and speed.",
    tag: "Execution // CAD"
  }
];

const PerformanceEdge = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Architectural Grid Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div 
          className="w-full h-full" 
          style={{ 
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Cinematic Header (Tightened) */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-amber" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber">Structural Intelligence</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-ink leading-[0.9] tracking-tighter"
            >
              The Science of <br />
              <span className="text-transparent [-webkit-text-stroke:1.5px_#000] opacity-20">Performance.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block lg:w-1/4 pb-2"
          >
            <p className="text-base text-ink-muted leading-relaxed font-sans font-medium border-l border-amber/30 pl-6">
              Every joint and beam is engineered for resilient life-cycles.
            </p>
          </motion.div>
        </div>

        {/* High-End Technical Grid (Optimized Size) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-surface-mid/20 border border-surface-mid/20 rounded-[2.5rem] overflow-hidden"
        >
          {advantages.map((item, idx) => (
            <motion.div 
              key={item.title}
              variants={itemVariants}
              className="group relative bg-white p-8 pb-14 lg:p-10 lg:pb-16 transition-all duration-700 hover:bg-carbon border-r border-surface-mid/10 last:border-r-0"
            >
              {/* Floating ID Number */}
              <div className="text-[5rem] font-heading font-black text-black/[0.02] absolute top-6 right-8 group-hover:text-amber/[0.04] transition-colors pointer-events-none select-none">
                {idx + 1}
              </div>

              <div className="relative z-10">
                {/* Icon with Glowing Halo */}
                <div className="relative w-14 h-14 mb-10">
                  <div className="absolute inset-0 bg-amber/0 rounded-2xl blur-xl group-hover:bg-amber/20 transition-all duration-500" />
                  <div className="relative w-full h-full rounded-2xl bg-surface-subtle border border-surface-mid flex items-center justify-center group-hover:bg-amber group-hover:border-amber transition-all duration-500 shadow-sm group-hover:rotate-12">
                    <item.icon className="w-6 h-6 text-amber group-hover:text-carbon transition-colors" />
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-ink-muted group-hover:text-amber/60">
                      {item.tag}
                    </span>
                    <div className="h-px flex-1 bg-surface-mid/30 group-hover:bg-white/10" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-black text-ink mb-3 tracking-tighter group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-sans group-hover:text-surface-mid transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>

                {/* Technical Bottom Scan Bar */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber to-transparent group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Standard Decorative Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 opacity-30 grayscale"
        >
          {["ASTM A572", "IS 2062", "ASCE 7-10", "ISO 14001"].map(code => (
            <span key={code} className="text-[9px] font-black uppercase tracking-[0.4em] text-ink">{code}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceEdge;
