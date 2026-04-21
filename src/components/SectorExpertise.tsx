import { motion } from "framer-motion";
import { Plane, Package, ThermometerSnowflake, Factory, Car, ShoppingBag } from "lucide-react";

const sectors = [
  {
    icon: Package,
    name: "Warehousing & Logistics",
    desc: "Optimized clear-span designs for massive distribution centers and high-ceiling logistics hubs.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: Plane,
    name: "Aviation & Hangars",
    desc: "Expertly engineered wide-span hangers for aircraft maintenance and airport infrastructure.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a75c3?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: ThermometerSnowflake,
    name: "Cold Storage",
    desc: "Thermal-barrier structures designed for pharmaceutical and food-grade temperature control.",
    image: "https://images.unsplash.com/photo-1588619491741-995085e54c8e?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: Factory,
    name: "Manufacturing Plants",
    desc: "Heavy-duty industrial sheds designed for crane integration and high-vibration machinery.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: Car,
    name: "Automotive Facilities",
    desc: "Precision showrooms and service centers with premium architectural finishes.",
    image: "https://images.unsplash.com/photo-1562141984-780c8975949e?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: ShoppingBag,
    name: "Commercial & Retail",
    desc: "Modern PEB solutions for multi-story shopping complexes and commercial high-rises.",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=600"
  }
];

const SectorExpertise = () => {
  return (
    <section className="py-24 bg-carbon text-white relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none grayscale invert">
        <div style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} className="w-full h-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-amber" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-amber">Specialization</span>
            <div className="h-px w-8 bg-amber" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-black leading-none tracking-tighter mb-8"
          >
            Built for Every <br />
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]">Industrial Frontier.</span>
          </motion.h2>
          <p className="text-xl text-surface-mid/60 leading-relaxed font-sans">
            Tailored PEB solutions across high-stakes sectors, engineered for specific operational demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, idx) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/10"
            >
              {/* Image Overlay */}
              <div className="absolute inset-0 transition-all duration-700">
                <img src={sector.image} alt={sector.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-transparent group-hover:from-carbon/50 transition-colors duration-700" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 group-hover:bg-amber group-hover:border-amber transition-all duration-500">
                  <sector.icon className="w-7 h-7 text-white group-hover:text-carbon transition-colors" />
                </div>
                <h3 className="text-2xl font-heading font-black mb-3 tracking-tight group-hover:text-amber transition-colors">
                  {sector.name}
                </h3>
                <p className="text-sm text-surface-mid/80 leading-relaxed font-sans group-hover:text-white transition-all duration-500">
                  {sector.desc}
                </p>
              </div>

              {/* Technical Detail */}
              <div className="absolute top-6 right-6 font-heading font-black text-white/5 text-4xl group-hover:text-amber/10 transition-colors">
                {String(idx + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorExpertise;
