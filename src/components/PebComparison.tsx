import { motion } from "framer-motion";
import { Check, X, Clock, TrendingDown, ShieldCheck, Construction } from "lucide-react";

const COMPARISON = [
  {
    feature: "Construction Speed",
    peb: "30-50% Faster",
    conventional: "Slow & Weather Dependent",
    pebFaster: true
  },
  {
    feature: "Maintenance",
    peb: "Virtually Zero",
    conventional: "Regular Painting & Repair",
    pebFaster: true
  },
  {
    feature: "Foundation Needs",
    peb: "Lightweight (Cost Effective)",
    conventional: "Heavy & Expensive",
    pebFaster: true
  },
  {
    feature: "Clear Span Capacity",
    peb: "Up to 90m without pillars",
    conventional: "Limited (Requires Columns)",
    pebFaster: true
  },
  {
    feature: "Future Expansion",
    peb: "Easy & Modular",
    conventional: "Rigid & Complex",
    pebFaster: true
  }
];

const PebComparison = () => {
  return (
    <section className="py-24 bg-surface-subtle overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Branding & Message */}
          <div className="lg:w-[40%]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10 bg-amber" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-amber">The PEB Advantage</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-heading font-black text-ink leading-none tracking-tighter mb-10"
            >
              Why Choose <br />
              <span className="text-transparent [-webkit-text-stroke:1px_#000] opacity-30">Pre-Engineered?</span>
            </motion.h2>

            <p className="text-lg text-ink-muted leading-relaxed font-sans mb-12">
              Deepika Builtech's PEB solutions outperform conventional RCC structures in every metrics—from cost-efficiency to seismic resilience and turnaround time.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h4 className="font-bold text-ink">Rapid ROI</h4>
                  <p className="text-sm text-ink-muted">Business starts months earlier compared to traditional builds.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                  <TrendingDown className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h4 className="font-bold text-ink">Cost Controlled</h4>
                  <p className="text-sm text-ink-muted">Lower material wastage and optimized structural weight.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Comparison Card */}
          <div className="lg:w-[60%] w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] shadow-2xl shadow-carbon/5 border border-surface-mid overflow-hidden"
            >
              {/* Table Header */}
              <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-carbon p-8 md:p-10 border-b border-white/10">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-surface/40">Feature</div>
                <div className="text-xs font-black uppercase tracking-[0.2em] text-amber text-center">PEB Structure</div>
                <div className="text-xs font-black uppercase tracking-[0.2em] text-surface/40 text-center">Conventional</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-surface-mid">
                {COMPARISON.map((row, idx) => (
                  <motion.div 
                    key={row.feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    className="grid grid-cols-[1.5fr_1fr_1fr] p-8 md:p-10 items-center hover:bg-surface-subtle transition-colors"
                  >
                    <div className="font-bold text-ink text-sm md:text-base">{row.feature}</div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600 font-black" />
                      </div>
                      <span className="text-[11px] font-black text-carbon text-center leading-tight">{row.peb}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                        <X className="w-4 h-4 text-red-400" />
                      </div>
                      <span className="text-[11px] font-bold text-ink-muted/60 text-center leading-tight">{row.conventional}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Technical Bottom Bar */}
              <div className="bg-surface-subtle p-6 border-t border-surface-mid flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber" />
                  <span className="text-[10px] font-black text-ink-muted uppercase tracking-widest">Certified Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Construction className="w-4 h-4 text-amber" />
                  <span className="text-[10px] font-black text-ink-muted uppercase tracking-widest">Rapid Deployment</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PebComparison;
