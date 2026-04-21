import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

const MidPageCTA = () => {
  return (
    <section className="py-20 bg-amber relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="black" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-carbon leading-none tracking-tighter mb-6"
            >
              Ready to <span className="text-white">Engineer</span> Your Next Landmark?
            </motion.h2>
            <p className="text-carbon/80 text-xl font-medium font-sans">
              From initial blueprint to final erection, experience the gold standard of PEB excellence.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-6"
          >
            <a href="#contact" className="bg-carbon text-white font-black px-10 py-5 rounded-full hover:bg-black transition-all flex items-center gap-3 group shadow-xl">
              Request a Technical Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+91XXXXXXXXXX" className="bg-white/20 backdrop-blur-md border-2 border-carbon/20 text-carbon font-black px-10 py-5 rounded-full hover:bg-white transition-all flex items-center gap-3">
              <PhoneCall className="w-5 h-5" />
              Expert Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MidPageCTA;
