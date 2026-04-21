import { motion } from "framer-motion";
import { Trophy, Users2, Building, ShieldCheck, Globe2 } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Best Structural Design 2022",
    issuer: "Industrial Excellence Awards",
    desc: "Recognized for innovative clear-span warehouse optimization in the Oragadam Industrial Belt."
  },
  {
    icon: ShieldCheck,
    title: "Zero-Incident Safety Record",
    issuer: "15 Years Running",
    desc: "Awarded for maintain absolute site safety performance across 150+ high-risk structural sites."
  },
  {
    icon: Users2,
    title: "Top 100 Small-Scale Industries",
    issuer: "TN Industrial Council",
    desc: "Selected for significant contribution to the regional manufacturing infrastructure ecosystem."
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <span className="text-amber text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Our Impact</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-ink mb-8 tracking-tighter leading-none">
              A Legacy of <br />
              <span className="text-transparent [-webkit-text-stroke:1px_#00000033]">Recognition.</span>
            </h2>
            <p className="text-lg text-ink-muted leading-relaxed font-sans max-w-lg mb-12">
              Our commitment to structural perfection and ethical engineering has earned us a position of trust and numerous accolades within the industrial fraternity.
            </p>
            
            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col border-l-4 border-amber pl-6">
                <span className="text-4xl font-heading font-black text-ink">150+</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-ink-muted">Projects Certified</span>
              </div>
              <div className="flex flex-col border-l-4 border-amber pl-6">
                <span className="text-4xl font-heading font-black text-ink">1.5M+</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-ink-muted">Sq.Ft Fabricated</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {achievements.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex gap-8 p-8 bg-white border border-surface-mid rounded-[2rem] hover:border-amber hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-surface-subtle flex items-center justify-center flex-shrink-0 group-hover:bg-amber group-hover:text-carbon transition-all">
                  <item.icon className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black text-amber uppercase tracking-widest">{item.issuer}</span>
                  </div>
                  <h3 className="text-xl font-heading font-black text-ink mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-ink-muted font-sans leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
