import { useState } from "react";
import { ArrowRight, Calculator, CheckCircle2, Play, Users } from "lucide-react";
import { Link } from "react-router-dom";
import peb from "@/assets/peb-building.jpg";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="home" className="relative w-full min-h-screen bg-white flex items-center overflow-hidden pt-20">
      {/* Background Structural Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Massive Vertical Background Text */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block">
        <span className="text-[12rem] font-black text-surface-mid/20 rotate-90 inline-block uppercase tracking-widest leading-none">
          ESTD 2009
        </span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Content Block (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-start">


            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-heading font-black text-ink leading-[0.9] tracking-tighter mb-10"
            >
              Build with <br />
              <span className="text-amber">Intelligence.</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row gap-8 mb-12"
            >
               <div className="flex-1 border-l-4 border-amber pl-8 py-2">
                 <p className="text-xl md:text-2xl text-ink font-bold leading-tight mb-4">
                   Your Warehouse. <br />Half the Cost.
                 </p>
                 <p className="text-sm text-ink-muted leading-relaxed max-w-[300px]">
                   Leveraging up to 50% Govt. subsidy to deliver world-class Agri and Industrial infrastructure.
                 </p>
               </div>
               
               <div className="flex flex-col justify-center gap-4 border-l border-surface-mid pl-8 py-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-ink/70">Structural Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-ink/70">Subsidy Processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-ink/70">Site Construction</span>
                  </div>
               </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <Link to="/contact" className="w-full sm:auto bg-carbon text-white px-12 py-6 rounded-none font-black text-xs uppercase tracking-[0.2em] hover:bg-amber hover:text-carbon transition-all duration-500 shadow-xl group flex items-center justify-center gap-4">
                Calculate My Subsidy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
              <button className="flex items-center gap-4 group">
                <div className="w-14 h-14 flex items-center justify-center border border-surface-mid rounded-none group-hover:border-amber transition-all">
                  <Play className="w-4 h-4 fill-ink" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-ink">The Masterclass</span>
              </button>
            </div>
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
            
            <div className="relative z-10 w-full aspect-[4/5] bg-surface-mid overflow-hidden shadow-[40px_40px_0px_rgba(0,0,0,0.05)]">
              <img src={peb} alt="PEB Facility" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100" />
              
              {/* Floating ROI Card */}
              <div className="absolute bottom-10 left-10 right-10 bg-white p-8 shadow-2xl flex items-center gap-6 border-b-4 border-amber z-20">
                <div className="w-14 h-14 bg-surface rounded-none flex items-center justify-center shrink-0">
                   <Calculator className="w-6 h-6 text-amber" />
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-ink-muted mb-1">Potential Savings</p>
                   <p className="text-3xl font-heading font-black text-ink leading-none">50%<span className="text-sm font-sans font-normal ml-2">Subsidy</span></p>
                </div>
              </div>
            </div>

            {/* Top Floating Stats - Relocated to avoid clipping */}
            <div className="absolute -right-8 -top-8 bg-amber p-10 shadow-2xl hidden lg:block z-30">
               <div className="flex items-center gap-6 text-carbon">
                  <Users className="w-8 h-8" />
                  <div>
                    <p className="text-[2.5rem] font-black leading-none">150+</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest leading-none mt-2">Scale Clients</p>
                  </div>
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
