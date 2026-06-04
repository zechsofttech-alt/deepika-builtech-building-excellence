import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import peb from "@/assets/peb-building.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import coldStorageImg from "@/assets/cold-storage.jpg";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: peb,
    title: "High-Precision PEB Structure",
    alt: "Pre-engineered steel building construction site by Deepika Builtech"
  },
  {
    image: warehouseImg,
    title: "Column-Free Warehouse Hub",
    alt: "Large industrial warehouse facility construction by Deepika Builtech"
  },
  {
    image: coldStorageImg,
    title: "Insulated Cold Storage Facility",
    alt: "Cold storage facility construction by Deepika Builtech"
  }
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full lg:min-h-screen bg-white flex flex-col justify-center overflow-hidden pt-32 lg:pt-16 pb-12">
      {/* Mobile Only Background Image - Cinematic Layer */}
      <div className="absolute inset-0 z-0 lg:hidden pointer-events-none">
        <img 
          src={peb} 
          alt="Pre-engineered steel building construction site in Chennai by Deepika Builtech mobile background" 
          width={640}
          height={960}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-[0.35] mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />
      </div>
 
      {/* Background Structural Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Massive Vertical Background Text */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block">
        <span className="text-[12rem] font-black text-surface-mid/20 rotate-90 inline-block uppercase tracking-widest leading-none">
          ESTD 2015
        </span>
      </div>
 
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Content Block (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-amber mb-4 block"
            >
              Because your project deserves more than just a contractor.
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-heading font-black text-ink leading-[1.0] tracking-tighter mb-6"
            >
              South India's Most Trusted <br />
              <span className="text-amber">Name in Steel Construction</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-ink-muted leading-relaxed font-sans max-w-xl mb-8"
            >
              From small industrial sheds to large-scale logistics hubs, businesses across South India trust our engineered precision to deliver high-capacity steel structures—on time, within budget, and to exact IS-code specifications.
            </motion.p>
 
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-carbon text-white px-8 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-amber hover:text-carbon transition-all duration-500 shadow-xl group flex items-center justify-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="w-full sm:w-auto bg-surface border border-surface-mid text-ink px-8 py-5 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-surface-subtle transition-all duration-500 flex items-center justify-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
              >
                Our Story
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-[11px] sm:text-xs text-ink-muted/80 font-bold tracking-wide flex flex-col sm:flex-row items-center gap-2 sm:gap-4 border-t border-surface-mid/80 pt-6 w-full max-w-xl"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber shrink-0" />
                ISO 9001:2015 Certified Manufacturing
              </span>
              <span className="hidden sm:inline text-surface-mid">|</span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber shrink-0" />
                150+ Projects Erected
              </span>
            </motion.div>
          </div>
 
          {/* Right: Architectural Offset Image (5 Columns) - Hidden on Mobile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="hidden lg:block lg:col-span-5 relative"
          >
            {/* Background Blue-Frame */}
            <div className="absolute inset-x-4 -inset-y-4 border-2 border-amber/30 z-0 translate-x-8 translate-y-8" />
            
            <div className="relative z-10 w-full aspect-[4/5] bg-carbon-mid overflow-hidden shadow-[40px_40px_0px_rgba(0,0,0,0.05)] border border-white/10 rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeSlide}
                  src={slides[activeSlide].image} 
                  alt={slides[activeSlide].alt} 
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.8, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  width={640}
                  height={800}
                  loading="eager"
                  className="w-full h-full object-cover absolute inset-0" 
                />
              </AnimatePresence>

              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/30 pointer-events-none z-10" />

              {/* Live Project Feed Overlay (Glassmorphism Card) */}
              <div className="absolute bottom-6 left-6 right-6 bg-carbon/85 backdrop-blur-md p-6 border border-white/10 rounded-2xl z-20 flex items-center gap-4">
                <div className="w-10 h-10 bg-amber rounded-xl flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5 text-carbon" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/50 mb-0.5">Scale Reference</p>
                  <p className="text-xs font-heading font-black text-white leading-tight">
                    {slides[activeSlide].title}
                  </p>
                </div>
              </div>

              {/* Progress Slide Indicators */}
              <div className="absolute top-6 right-6 z-20 flex gap-1.5">
                {slides.map((_, idx) => (
                  <div 
                    key={idx} 
                    className="w-8 h-1 bg-white/20 rounded-full overflow-hidden"
                  >
                    <motion.div 
                      className="h-full bg-amber"
                      initial={{ width: 0 }}
                      animate={{ width: activeSlide === idx ? "100%" : "0%" }}
                      transition={{ duration: activeSlide === idx ? 6 : 0, ease: "linear" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
  
      {/* Decorative Blueprint Corner (Top Right) */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] border-l border-b border-surface-mid pointer-events-none opacity-20 -translate-y-1/2 translate-x-1/2 rotate-45" />

    </section>
  );
}
