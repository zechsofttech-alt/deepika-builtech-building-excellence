import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Award, Building2, Cpu } from "lucide-react";

const milestones = [
  {
    year: "2008",
    title: "The Foundation",
    description: "Deepika Builtech was established with a singular vision: to bring world-class structural engineering to the local industrial landscape.",
    icon: Building2,
    stats: "First 10,000 Sq.Ft Project"
  },
  {
    year: "2012",
    title: "Regional Expansion",
    description: "Expanded operations across South India, securing major contracts for large-scale logistics hubs and manufacturing units.",
    icon: TrendingUp,
    stats: "50+ Projects Completed"
  },
  {
    year: "2016",
    title: "Quality Benchmarking",
    description: "Achieved ISO certifications and launched a dedicated department for specialized Controlled Environment (Cold Storage) structures.",
    icon: Award,
    stats: "ISO 9001:2015 Certified"
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Integrated Building Information Modeling (BIM) and advanced CAD/CAM automation into our fabrication pipeline for zero-error delivery.",
    icon: Cpu,
    stats: "Zero-Error Precision"
  },
  {
    year: "2024",
    title: "Industry Leadership",
    description: "Recognized as a leading name in high-integrity PEB solutions, redefining the modern industrial skyline with sustainable engineering.",
    icon: CheckCircle2,
    stats: "150+ Success Stories"
  }
];

const TimelineSection = () => {
  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Our Journey</span>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-ink mb-6 tracking-tighter">
            Years of <span className="gradient-text">Architectural Growth.</span>
          </h2>
          <div className="h-1.5 w-24 bg-amber mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-surface-mid -translate-x-1/2 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {milestones.map((item, idx) => (
              <div key={item.year} className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${idx % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
                
                {/* Year Marker */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-12 group">
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`p-8 bg-white border border-surface-mid rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 max-w-md ${idx % 2 === 0 ? "lg:text-right" : "lg:text-left lg:pl-12 lg:pr-8"}`}
                  >
                    <div className={`flex items-center gap-4 mb-4 ${idx % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-xl bg-carbon text-white flex items-center justify-center shadow-lg group-hover:bg-amber group-hover:text-carbon transition-colors duration-500">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-heading font-black text-amber">{item.year}</span>
                    </div>
                    <h3 className="text-2xl font-heading font-black text-ink mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed font-sans mb-6">
                      {item.description}
                    </p>
                    <div className={`flex items-center gap-2 ${idx % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <span className="h-px w-6 bg-surface-mid" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-ink">{item.stats}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Central Point */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-surface border-4 border-amber rounded-full z-10 hidden lg:block">
                  <div className="w-full h-full bg-amber scale-0 rounded-full animate-pulse group-hover:scale-100 transition-transform" />
                </div>

                {/* Empty Side for Desktop Spacing */}
                <div className="lg:w-1/2" />
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TimelineSection;
