import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-carbon text-surface">
      <div className="container mx-auto px-6 lg:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="section-label mb-6">Core Capabilities</h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black leading-none tracking-tighter text-white">
              Bespoke Industrial <br />
              <span className="gradient-text">Engineering.</span>
            </h3>
          </div>
          <p className="text-surface-mid text-lg max-w-sm font-sans mb-2 border-l border-white/10 pl-8">
            A comprehensive suite of heavy-duty engineering solutions built to weather the toughest conditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {services.map((service, index) => {
            let colSpan = "col-span-1";
            let rowSpan = "row-span-1";

            if (service.size === "large") {
              colSpan = "md:col-span-2";
              rowSpan = "md:row-span-2";
            } else if (service.size === "horizontal") {
              colSpan = "md:col-span-2";
            }

            return (
              <Link
                key={service.slug}
                to={`/service/${service.slug}`}
                className={`group relative overflow-hidden bg-carbon-mid border border-white/5 rounded-2xl ${colSpan} ${rowSpan}`}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-transparent group-hover:from-carbon/40 transition-colors duration-700" />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="self-end opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <div className="w-12 h-12 glass-panel flex items-center justify-center rounded-xl bg-white/10 border-white/20 hover:bg-amber hover:text-carbon transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 tracking-tight text-white">
                      {service.title}
                    </h3>
                    <p className="text-surface-subtle text-sm md:text-base max-w-xs group-hover:text-white transition-colors duration-500 font-sans font-medium">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
                
                {/* Subtle highlight line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

