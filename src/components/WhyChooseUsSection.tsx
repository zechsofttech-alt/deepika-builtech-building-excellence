"use client";

import { Factory, ShieldCheck, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const REASONS = [
  {
    num: "01",
    stat: "100%",
    title: "In-House Fabrication",
    desc: "We own and operate our fabrication facilities — no outsourcing. CNC profiling, MIG, MAG and submerged arc welding all done in-house at our Ambattur and Kanchipuram units.",
    icon: Factory,
  },
  {
    num: "02",
    stat: "IS-Code",
    title: "IS Code Compliant Engineering",
    desc: "Every structure is engineered to IS 800 and IS 801 standards. Structural drawings, BOQ, and approval documentation prepared by our in-house engineering team.",
    icon: ShieldCheck,
  },
  {
    num: "03",
    stat: "45-75 Days",
    title: "On-Time Delivery",
    desc: "Our integrated design-fabricate-erect model means no dependency on third-party vendors. Average PEB project delivered in 45–75 days from design approval to handover.",
    icon: Clock,
  },
  {
    num: "04",
    stat: "TN",
    title: "Tamil Nadu Service",
    desc: "We serve all major industrial zones: Chennai, Ambattur, Sriperumbudur, Oragadam, Kanchipuram, Thiruvallur, Hosur, Coimbatore, and beyond. Free site visit anywhere in Tamil Nadu.",
    icon: MapPin,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Architectural Grid (subtle) */}
      <div 
        className="absolute inset-x-0 top-0 h-64 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '2.5rem 2.5rem'
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Branding & Headline */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-[42%]"
          >
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-10 bg-amber-dark" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-dark">The Deepika Standard</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] font-heading font-black text-ink leading-[0.85] tracking-tighter mb-10">
                Why <br />
                <span className="text-transparent [-webkit-text-stroke:1px_#000] opacity-30 select-none">Partner</span> <br />
                With Us?
              </h2>

              <div className="grid grid-cols-2 gap-8 py-10 border-y border-surface-mid/50">
                <div className="group/stat">
                  <div className="text-3xl font-heading font-black text-ink mb-1 group-hover/stat:text-amber transition-colors">10+</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-ink-muted">Years of Innovation</div>
                </div>
                <div className="group/stat">
                  <div className="text-3xl font-heading font-black text-ink mb-1 group-hover/stat:text-amber transition-colors">750+</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-ink-muted">Tons Steel/Month</div>
                </div>
              </div>

              <p className="text-lg text-ink-muted leading-relaxed font-sans max-w-sm mt-10 opacity-80">
                As one of the premier PEB structure manufacturers in Chennai, our structures are more than just steel; they are precisely engineered assets designed to optimize your industrial efficiency for decades.
              </p>
            </div>
          </motion.div>

          {/* Right: Technical Blueprint Cards */}
          <div className="lg:w-[58%] flex flex-col gap-4 md:gap-5">
            {REASONS.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div 
                  key={reason.num} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative bg-[#fcfcfc] border border-surface-mid p-6 md:p-10 rounded-[1.5rem] transition-all duration-700 hover:bg-carbon hover:border-carbon shadow-sm hover:shadow-2xl hover:shadow-carbon/10 active:scale-[0.99]"
                >
                  {/* Technical Backdrop Number */}
                  <div className="absolute right-10 top-8 font-heading font-black text-[100px] md:text-[140px] text-black/[0.02] group-hover:text-white/[0.03] select-none transition-colors duration-700 leading-none">
                    {reason.num}
                  </div>

                  <div className="relative z-10">
                    {/* Icon & Stat Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-surface-mid flex items-center justify-center group-hover:bg-amber transition-all duration-700 group-hover:scale-110">
                        <Icon className="w-6 h-6 text-ink group-hover:text-carbon transition-colors" />
                      </div>
                      <div className="text-3xl md:text-4xl font-heading font-black text-transparent [-webkit-text-stroke:1px_#000] opacity-20 group-hover:opacity-100 group-hover:[-webkit-text-stroke:1px_#FFBF00] group-hover:text-amber transition-all duration-700">
                        {reason.stat}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="max-w-xl">
                      <h3 className="text-xl md:text-2xl font-heading font-black text-ink group-hover:text-white transition-colors duration-500 mb-2 tracking-tight">
                        {reason.title}
                      </h3>
                      <p className="text-sm md:text-base text-ink-muted group-hover:text-surface/60 transition-colors duration-500 leading-relaxed font-sans font-medium">
                        {reason.desc}
                      </p>
                    </div>
                  </div>

                  {/* Blueprint Detail Accent */}
                  <div className="absolute bottom-8 right-8 flex gap-2 opacity-0 group-hover:opacity-40 transition-opacity duration-700 scale-75">
                    <div className="w-10 h-[1px] bg-white" />
                    <div className="w-1 h-1 rounded-full bg-white" />
                  </div>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;


