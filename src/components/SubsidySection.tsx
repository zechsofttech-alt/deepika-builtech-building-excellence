import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calculator, FileText, Construction, ClipboardCheck, Wallet, Zap, ShieldCheck, Warehouse } from 'lucide-react';

const SubsidySection = () => {
  const steps = [
    { icon: FileText, title: "Project Planning", desc: "Strategic blueprinting for industrial scale." },
    { icon: Construction, title: "Design & Construction", desc: "Expert engineering from foundation to roof." },
    { icon: ClipboardCheck, title: "Subsidy Documentation", desc: "We manage 100% of the complex paperwork." },
    { icon: Zap, title: "Approval Process", desc: "Accelerated clearances from all authorities." },
  ];

  const benefits = [
    { title: "Reduce Your Investment Cost", icon: Wallet },
    { title: "Get Faster Approvals", icon: ShieldCheck },
    { title: "Build with Expert Engineers", icon: Construction },
    { title: "Maximize Storage Efficiency", icon: Warehouse },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-subtle/50 skew-x-12 translate-x-20 z-0" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: We Handle Everything */}
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 glass-panel rounded-full mb-8 border-amber/20">
              <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-carbon/70">Our Responsibility</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-black text-ink leading-tight mb-8">
              We Handle <br />
              <span className="gradient-text">Everything For You.</span>
            </h2>
            
            <p className="text-lg text-ink-muted leading-relaxed font-sans mb-12 max-w-lg">
              Don't let government procedures slow you down. Our specialized team manages the entire lifecycle of your project, from the first sketch to the final subsidy credit.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {steps.map((step, idx) => (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center mb-6 group-hover:bg-carbon group-hover:text-white transition-all duration-500 shadow-sm">
                    <step.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-ink mb-2">{step.title}</h4>
                  <p className="text-sm text-ink-muted leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Save Lakhs Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="bg-carbon rounded-[2.5rem] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden group">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber/10 blur-[80px] -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="mb-10">
                  <h3 className="text-3xl md:text-4xl font-heading font-black mb-4">
                    Save <span className="text-amber">Lakhs</span> <br />
                    On Your Project.
                  </h3>
                  <div className="h-1 w-20 bg-amber rounded-full" />
                </div>

                <div className="space-y-6 mb-12">
                  {benefits.map((benefit, idx) => (
                    <div key={benefit.title} className="flex items-center gap-5 group/item">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-amber group-hover/item:text-carbon transition-colors duration-500">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-lg font-semibold text-white/90">{benefit.title}</span>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-4 mb-4">
                    <Calculator className="w-6 h-6 text-amber" />
                    <p className="text-sm font-black uppercase tracking-widest text-white/60">Estimated Savings</p>
                  </div>
                  <p className="text-4xl font-heading font-black text-white">50% <span className="text-xl font-sans font-normal text-white/40">Reduction</span></p>
                  <p className="text-xs text-white/40 mt-3 leading-relaxed italic">
                    "Every day you delay is a day you lose potential subsidy benefits."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Urgency Badge */}
            <div className="absolute -bottom-6 -left-6 bg-amber text-carbon px-8 py-6 rounded-2xl shadow-xl z-20 animate-float">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1">Time Sensitive</p>
              <h5 className="font-heading font-black text-xl leading-none">Act Now Before <br/>Subsidy Ends!</h5>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubsidySection;
