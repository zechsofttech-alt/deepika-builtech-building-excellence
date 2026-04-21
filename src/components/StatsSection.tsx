import { useEffect, useRef, useState } from "react";
import { Trophy, Building2, Users, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: 15, suffix: "+", label: "Years Experience", desc: "Delivering world-class structure." },
  { icon: Building2, value: 150, suffix: "+", label: "Projects Completed", desc: "Across diverse industries." },
  { icon: Users, value: 100, suffix: "+", label: "Enterprise Clients", desc: "Long-term forged partnerships." },
  { icon: Trophy, value: 5, suffix: "", label: "Industry Awards", desc: "Recognized for innovation." },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-heading font-black mb-2 gradient-text tracking-tighter">
      {count}{suffix}
    </div>
  );
};

import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-surface-mid to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-surface-mid to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="w-14 h-14 mb-8 glass-panel flex items-center justify-center rounded-2xl bg-surface-subtle group-hover:bg-amber group-hover:shadow-lg group-hover:shadow-amber/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                <stat.icon className="w-6 h-6 text-amber group-hover:text-carbon transition-colors" />
              </div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <h4 className="font-heading font-bold text-xl text-ink mb-2 tracking-tight">{stat.label}</h4>
              <p className="text-sm md:text-base text-ink-muted leading-relaxed font-sans">{stat.desc}</p>
              
              {/* Vertical separator for desktop */}
              {idx !== stats.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-px h-24 bg-surface-mid" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
