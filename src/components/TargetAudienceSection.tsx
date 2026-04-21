import { useState } from "react";
import { motion } from "framer-motion";
import { Plane, Package, ThermometerSnowflake, Factory, Car, ShoppingBag } from "lucide-react";

const audiences = [
  {
    icon: Package,
    name: "Warehousing & Logistics",
    desc: "Optimized clear-span designs for massive distribution centers and high-ceiling logistics hubs.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: Plane,
    name: "Aviation & Hangars",
    desc: "Expertly engineered wide-span hangers for aircraft maintenance and airport infrastructure.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a75c3?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: ThermometerSnowflake,
    name: "Cold Storage",
    desc: "Thermal-barrier structures designed for pharmaceutical and food-grade temperature control.",
    image: "https://images.unsplash.com/photo-1588619491741-995085e54c8e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: Factory,
    name: "Manufacturing Plants",
    desc: "Heavy-duty industrial sheds designed for crane integration and high-vibration machinery.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: Car,
    name: "Automotive Facilities",
    desc: "Precision showrooms and service centers with premium architectural finishes.",
    image: "https://images.unsplash.com/photo-1562141984-780c8975949e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: ShoppingBag,
    name: "Commercial & Retail",
    desc: "Modern PEB solutions for multi-story shopping complexes and commercial high-rises.",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=1200"
  }
];

const TargetAudienceSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <section className="py-24 bg-surface text-ink relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="section-label mx-auto mb-4">Who We Serve</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-6">
            Industries We <span className="gradient-text">Empower</span>
          </h3>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto font-sans">
            Delivering structurally advanced and operationally efficient environments across diverse sectors.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Image Side - Now appears first and larger on mobile */}
          <div className="w-full lg:w-1/2 h-[350px] md:h-[450px] lg:h-auto min-h-[400px] lg:min-h-[600px] relative rounded-[2.5rem] overflow-hidden shadow-2xl glass-panel p-2 order-1 lg:order-2">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-carbon/5">
              {audiences.map((item, idx) => (
                <div
                  key={item.name + "img"}
                  className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    hoveredIdx === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'
                  }`}
                >
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-transparent" />
                  
                  <div 
                    className="absolute bottom-0 left-0 right-0 p-8 md:p-12 transition-all duration-700 delay-100" 
                    style={{ 
                      opacity: hoveredIdx === idx ? 1 : 0, 
                      transform: hoveredIdx === idx ? 'translateY(0)' : 'translateY(20px)' 
                    }}
                  >
                    <div className="inline-flex items-center gap-2 mb-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                      <div className="w-2 h-2 rounded-full bg-amber animate-pulse" />
                      <span className="text-white font-bold tracking-widest uppercase text-[10px]">Industry Focus</span>
                    </div>
                    <h3 className="text-white text-3xl md:text-5xl font-heading font-black tracking-tight leading-none">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* List Side - Responsive padding and tap targets */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3 md:gap-4 order-2 lg:order-1">
            {audiences.map((item, idx) => {
              const isActive = hoveredIdx === idx;
              return (
                <div
                  key={item.name}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onClick={() => setHoveredIdx(idx)}
                  className={`cursor-pointer transition-all duration-500 rounded-3xl p-5 md:p-8 flex items-center gap-5 md:gap-6 border-2 select-none active:scale-[0.98] lg:active:scale-100 ${
                    isActive 
                      ? 'bg-carbon text-white border-carbon shadow-2xl lg:scale-[1.02] z-10' 
                      : 'bg-surface-subtle text-ink border-transparent hover:border-surface-mid hover:bg-white z-0'
                  }`}
                >
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-500 ${isActive ? 'bg-amber text-carbon' : 'bg-white border border-surface-mid text-ink-muted'}`}>
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className={`text-lg md:text-2xl font-heading font-bold mb-1 md:mb-2 transition-colors duration-500 ${isActive ? 'text-white' : 'text-ink'}`}>
                      {item.name}
                    </h4>
                    <p className={`text-xs md:text-base font-sans line-clamp-2 transition-colors duration-500 ${isActive ? 'text-white/80' : 'text-ink-muted'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
