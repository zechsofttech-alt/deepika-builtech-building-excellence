import { 
  ClipboardCheck, 
  Map, 
  Ruler, 
  Factory, 
  Construction, 
  ShieldCheck, 
  Truck 
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Site Initiation", desc: "Detailed requirements gathering and comprehensive site topographical analysis.", icon: ClipboardCheck },
  { num: "02", title: "Strategic Planning", desc: "Developing rigorous timelines, logistics planning, and risk mitigation strategies.", icon: Map },
  { num: "03", title: "Advanced Design", desc: "Structural engineering utilizing state-of-the-art CAD and BIM modeling simulation.", icon: Ruler },
  { num: "04", title: "Precision Fab", desc: "Automated CNC manufacturing and quality-controlled steel component fabrication.", icon: Factory },
  { num: "05", title: "On-site Erection", desc: "Expert assembly and heavy structural erection by specialized engineering teams.", icon: Construction },
  { num: "06", title: "Operational Audit", desc: "Rigorous ISO-compliant quality audits and structural integrity verification.", icon: ShieldCheck },
  { num: "07", title: "Final Handover", desc: "Project completion certification and comprehensive post-build support.", icon: Truck },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-32 bg-white relative overflow-hidden">
      {/* Structural Decoration */}
      <div className="absolute top-0 left-0 w-full h-[0.5px] bg-surface-mid" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-amber" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-amber">Masterclass Execution</span>
            <div className="h-px w-8 bg-amber" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-black text-ink leading-none tracking-tighter mb-8"
          >
            The <span className="text-transparent [-webkit-text-stroke:1px_#000] opacity-30">Engineering</span> <br />
            Journey.
          </motion.h2>
          <p className="text-xl text-ink-muted leading-relaxed font-sans">
            Seven precise milestones that transform raw structural concepts into industrial landmarks.
          </p>
        </div>

        {/* Vertical Staggered Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Vertical Connector Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-surface-mid -translate-x-1/2 hidden lg:block overflow-hidden">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-amber via-amber to-transparent"
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={step.num} className="relative flex flex-col lg:flex-row items-center justify-center">
                  {/* Step Card */}
                  <div className={`w-full lg:w-[45%] ${isEven ? 'lg:mr-auto lg:text-right' : 'lg:ml-auto lg:text-left'} order-2 lg:order-none`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="group relative p-8 md:p-12 glass-panel rounded-[2.5rem] bg-surface-subtle border-surface-mid hover:border-amber/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber/5"
                    >
                      <div className={`flex flex-col ${isEven ? 'lg:items-end' : 'lg:items-start'} items-center mb-6`}>
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-surface-mid flex items-center justify-center mb-6 group-hover:bg-amber group-hover:scale-110 transition-all duration-500">
                          <Icon className="w-7 h-7 text-amber group-hover:text-carbon transition-colors" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-black text-ink group-hover:text-amber transition-colors tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-base md:text-lg text-ink-muted leading-relaxed font-sans max-w-md mx-auto lg:mx-0">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Central Node (Desktop Only) */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden lg:block">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="w-12 h-12 rounded-full bg-white border-4 border-surface shadow-xl flex items-center justify-center group"
                    >
                      <div className="w-3 h-3 rounded-full bg-amber animate-pulse" />
                    </motion.div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-black text-6xl text-black/[0.03] select-none pointer-events-none">
                      {step.num}
                    </div>
                  </div>

                  {/* Mobile Mobile Number Icon */}
                  <div className="lg:hidden w-12 h-12 rounded-full bg-carbon text-surface flex items-center justify-center font-heading font-black text-xl mb-6 order-1">
                    {step.num}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Architectural Background Text */}
      <div className="absolute right-[-5%] top-[20%] text-[15vw] font-black text-black/[0.01] pointer-events-none select-none tracking-tighter leading-none -rotate-90 origin-right">
        Workflow
      </div>
    </section>
  );
};

export default ProcessSection;
