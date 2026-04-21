import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  ClipboardCheck, 
  Map, 
  Ruler, 
  Factory, 
  Construction, 
  ShieldCheck, 
  Truck 
} from "lucide-react";

const steps = [
  { num: "01", title: "Site Initiation", desc: "Detailed requirements gathering and site analysis.", icon: ClipboardCheck },
  { num: "02", title: "Strategic Planning", desc: "Developing timelines and risk mitigation.", icon: Map },
  { num: "03", title: "Advanced Design", desc: "Structural engineering utilizing state-of-the-art CAD.", icon: Ruler },
  { num: "04", title: "Precision Fab", desc: "Automated CNC manufacturing and steel fabrication.", icon: Factory },
  { num: "05", title: "On-site Erection", desc: "Expert assembly and heavy structural erection.", icon: Construction },
  { num: "06", title: "Operational Audit", desc: "Rigorous ISO-compliant quality audits.", icon: ShieldCheck },
  { num: "07", title: "Final Handover", desc: "Project completion and post-build support.", icon: Truck },
];

const HomeProcess = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Add spring physics for silky smooth motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Adjusted for smaller cards and more compact layout
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-68%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-surface-subtle">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Section Header */}
        <div className="container mx-auto px-6 lg:px-12 mb-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-px w-8 bg-amber" />
                <span className="text-xs font-black uppercase tracking-[0.5em] text-amber">The Workflow Protocol</span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-ink leading-[0.9] tracking-tighter">
                Precision <br />
                <span className="text-transparent [-webkit-text-stroke:1px_#000] opacity-30">Execution.</span>
              </h2>
            </div>
            <div className="max-w-xs md:mb-2">
              <p className="text-ink-muted text-base font-sans leading-relaxed mb-4">
                Explore our seven-stage engineering journey, optimized for industrial efficiency.
              </p>
              {/* Progress Track (Mini) */}
              <div className="w-full h-[2px] bg-surface-mid rounded-full overflow-hidden">
                <motion.div 
                   style={{ scaleX: smoothProgress }}
                   className="h-full bg-amber origin-left"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Moving Cards Wrapper */}
        <div className="relative z-10">
          <motion.div style={{ x }} className="flex gap-6 pr-24 lg:pr-[35vw] pl-6 lg:pl-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  className="w-[300px] md:w-[380px] shrink-0 group/card relative"
                >
                  <div className="bg-white border border-surface-mid p-8 md:p-10 rounded-[2.5rem] h-full transition-all duration-700 hover:bg-carbon group-hover/card:bg-carbon group-hover/card:border-carbon group-hover/card:shadow-2xl group-hover/card:shadow-carbon/20 relative overflow-hidden">
                    
                    <div className="flex justify-between items-start mb-10 relative z-10">
                      <div className="flex flex-col gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-surface-subtle border border-surface-mid flex items-center justify-center group-hover/card:bg-amber group-hover/card:scale-110 transition-all duration-700">
                          <Icon className="w-6 h-6 text-ink group-hover/card:text-carbon" />
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
                          <div className="w-4 h-[1px] bg-amber" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-amber">Phase {step.num}</span>
                        </div>
                      </div>
                      <span className="text-5xl md:text-6xl font-heading font-black text-black/[0.03] group-hover/card:text-white/[0.04] transition-colors duration-700 select-none">
                        {step.num}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-xl md:text-2xl font-heading font-black text-ink group-hover/card:text-white mb-3 transition-colors tracking-tight leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-ink-muted group-hover/card:text-white/50 leading-relaxed font-sans transition-colors mb-6">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Connecting Technical Line */}
                  {idx !== steps.length - 1 && (
                    <div className="absolute top-1/2 -right-3 w-6 h-[1px] bg-amber/10 hidden md:block" />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Floating Instruction */}
        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-ink-muted/50">Scroll Down</span>
          <div className="w-px h-8 bg-gradient-to-b from-amber to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeProcess;
