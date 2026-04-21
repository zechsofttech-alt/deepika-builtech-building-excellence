import { useState } from "react";
import { ArrowRight, Play, X } from "lucide-react";
import { Link } from "react-router-dom";
import peb from "@/assets/peb-building.jpg";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="home" className="relative w-full min-h-screen bg-surface flex flex-col pt-28 pb-12 justify-center overflow-hidden">
      {/* Mobile Video Background - DARK THEME */}
      <div className="absolute inset-0 z-0 lg:hidden pointer-events-none">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 mix-blend-overlay"
        >
          <source src="https://assets.mixkit.io/videos/preview/mixkit-welding-with-sparks-and-flames-40114-large.mp4" type="video/mp4" />
        </video>
        {/* Deep Industrial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon via-carbon/90 to-carbon" />
        <div className="absolute inset-0 bg-amber/5 mix-blend-color" />
      </div>

      {/* Desktop Background Architectural Canvas - REMAINS same */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem'
          }}
        />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber/10 blur-[120px] rounded-full animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-carbon/5 blur-[120px] rounded-full animate-float-delayed" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full">
        <AnimatePresence mode="wait">
          {!showVideo ? (
            <div key="content-grid" className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">
              {/* Left: Text Content */}
              <motion.div
                key="text-content"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.4 } }}
                className="text-center lg:text-left flex flex-col items-center lg:items-start"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-6 py-2.5 glass-panel-dark rounded-full mb-8 border-white/10"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-black tracking-[0.25em] uppercase text-white leading-none">Limited Subsidy Opportunity</span>
                </motion.div>
                
                <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-heading font-black text-white lg:text-ink leading-[1.05] tracking-tighter mb-8 max-w-4xl">
                  Build Your <br />
                  <span className="gradient-text relative inline-block drop-shadow-2xl">
                    Industrial <br /> Warehouse
                  </span>
                </h1>

                <div className="mb-10 space-y-4">
                  <div className="bg-red-600 inline-block px-6 py-3 rounded-lg transform -skew-x-12 shadow-xl shadow-red-600/20">
                    <p className="text-xl md:text-3xl font-heading font-black text-white skew-x-12 uppercase tracking-tighter">
                      Up to 50% Govt. Subsidy
                    </p>
                  </div>
                  <p className="text-base md:text-xl text-white/60 lg:text-ink-muted max-w-lg leading-relaxed font-sans px-4 sm:px-0">
                    Why invest full money when you can cut your cost by half? 
                    <span className="block mt-2 font-bold text-amber">Expert Engineering for Warehouses & Agri Storage.</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-5 md:gap-6 w-full sm:w-auto">
                  <Link to="/contact" className="w-[85%] sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-carbon px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all group active:scale-95 shadow-2xl">
                    Check Eligibility
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="inline-flex items-center justify-center gap-4 hover:bg-white/5 py-4 px-6 rounded-full font-black text-xs uppercase tracking-[0.2em] text-white lg:text-ink transition-all group active:scale-95"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 lg:border-surface-mid group-hover:border-amber shadow-sm transition-all group-hover:scale-105 bg-white/10 lg:bg-white">
                      <Play className="w-4 h-4 ml-0.5 fill-white lg:fill-ink" />
                    </div>
                    How It Works
                  </button>
                </div>

                {/* Benefits List - Derived from Image */}
                <div className="mt-12 hidden sm:grid grid-cols-2 gap-x-8 gap-y-4 text-left max-w-lg">
                  {[
                    "Subsidy Documentation",
                    "Project Planning",
                    "Expert Construction",
                    "Fast Approvals"
                  ].map(benefit => (
                    <div key={benefit} className="flex items-center gap-3 text-white/80 lg:text-ink/80 text-xs font-bold uppercase tracking-widest leading-none">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Modern Image Layout */}
              <motion.div 
                key="image-content"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative hidden lg:block"
              >
                <div className="relative aspect-[4/5] w-full max-w-[540px] ml-auto">
                  <div className="absolute inset-0 bg-carbon rounded-3xl -translate-x-6 translate-y-6 opacity-10" />
                  
                  <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl p-2 bg-gradient-to-br from-white/40 to-transparent backdrop-blur-sm border border-white/40">
                    <img 
                      src={peb} 
                      alt="Industrial Warehouse Construction" 
                      className="w-full h-full object-cover rounded-[2rem] hover:scale-105 transition-all duration-1000 object-[60%_center]"
                    />
                  </div>
                  
                  {/* Subsidy Badge */}
                  <div className="absolute -left-12 bottom-16 z-20 bg-red-600 p-8 rounded-[2.5rem] shadow-2xl border-white/20 animate-float text-white">
                    <div className="font-heading font-black text-6xl leading-none mb-1">50%</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Government <br/>Subsidy Support</div>
                  </div>
                  
                  <div className="absolute -right-6 top-16 z-20 bg-carbon p-8 rounded-[2.5rem] shadow-2xl border-white/10 animate-float-delayed text-white">
                    <div className="font-heading font-black text-3xl text-amber mb-1">SAVE LAKHS</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">ON YOUR NEXT <br/>ENGINEERING PROJECT</div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            <motion.div 
              key="video-player"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="absolute inset-x-0 -inset-y-12 z-50 bg-carbon rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-8 right-8 z-[60] w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-amber hover:text-carbon backdrop-blur-md rounded-full text-white transition-all shadow-xl"
              >
                <X className="w-6 h-6" />
              </button>
              
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&showinfo=0" 
                title="Deepika Builtech Workflow"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              
              {/* Technical Overlay */}
              <div className="absolute bottom-8 left-8 z-[60] text-white/40 font-heading font-bold flex items-center gap-4 text-xs tracking-[0.3em] uppercase">
                <span className="w-2 h-2 rounded-full bg-amber animate-ping" />
                Live Engineering Workflow // 4K 60FPS
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
