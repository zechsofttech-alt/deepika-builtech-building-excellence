"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Trophy } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const completedPebDrone = "/assets/completed-peb-drone.png";
const completedPebDroneWebp = "/assets/completed-peb-drone.webp";
const completedPebDronePortrait = "/assets/completed-peb-drone-portrait.png";
const completedPebDronePortraitWebp = "/assets/completed-peb-drone-portrait.webp";
const warehouseImg = "/assets/warehouse.jpg";
const warehouseWebp = "/assets/warehouse.webp";
const coldStorageImg = "/assets/cold-storage.jpg";
const coldStorageWebp = "/assets/cold-storage.webp";
const heroBg = "/assets/hero-bg.jpg";
const heroBgWebp = "/assets/hero-bg.webp";

const slides = [
  {
    image: completedPebDrone,
    imageWebp: completedPebDroneWebp,
    imageMobile: completedPebDronePortrait,
    imageMobileWebp: completedPebDronePortraitWebp,
    title: "Completed PEB Structure — Drone View",
    alt: "Drone view of a completed pre-engineered steel building by Deepika Builtech, Chennai"
  },
  {
    image: warehouseImg,
    imageWebp: warehouseWebp,
    title: "Interior View — Column-Free Warehouse",
    alt: "Interior view of a column-free industrial warehouse built by Deepika Builtech, Tamil Nadu"
  },
  {
    image: heroBg,
    imageWebp: heroBgWebp,
    title: "Aerial View — Under-Construction PEB Site",
    alt: "Drone aerial shot of a PEB steel structure under construction by Deepika Builtech, Tamil Nadu"
  }
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full bg-white overflow-hidden">

      {/* ── MOBILE ONLY: Fullscreen Auto-Rotating Image Carousel with Text Overlay ── */}
      <div className="lg:hidden relative w-full h-[100svh] pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <picture>
              {slides[activeSlide].imageMobileWebp ? (
                <source srcSet={slides[activeSlide].imageMobileWebp} type="image/webp" />
              ) : (
                slides[activeSlide].imageWebp && (
                  <source srcSet={slides[activeSlide].imageWebp} type="image/webp" />
                )
              )}
              <img
                src={slides[activeSlide].imageMobile || slides[activeSlide].image}
                alt={slides[activeSlide].alt}
                width={640}
                height={960}
                loading="eager"
                fetchPriority="high"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </picture>
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent z-10" />

        {/* Mobile Content Overlay */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end px-6 pb-20 pt-48">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-amber mb-2 block"
          >
            Winner of Excellence Award 2022 & 2025
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-heading font-black text-white leading-tight tracking-tight mb-3"
          >
            Chennai's Leading <span className="text-amber">PEB Construction</span> & Steel Building Company
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xs text-white/80 leading-relaxed font-sans font-medium mb-6"
          >
            Pre-engineered steel buildings designed, fabricated and erected across Chennai and Tamil Nadu — faster, stronger, at lower cost.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-3 w-full"
          >
            <Link
              href="/contact"
              className="w-full bg-amber text-carbon px-6 py-4 rounded-xl font-black text-xs uppercase tracking-[0.15em] text-center hover:bg-white hover:text-carbon transition-all duration-300 shadow-lg flex items-center justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
            >
              Start Your Project
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/about"
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-[0.15em] text-center hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`rounded-full transition-all duration-500 ${
                activeSlide === idx
                  ? "w-8 h-2 bg-amber"
                  : "w-2 h-2 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP ONLY: Original full layout ── */}
      <div className="hidden lg:flex flex-col justify-center lg:min-h-screen pt-36 pb-12 relative">

      {/* Background Structural Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Massive Vertical Background Text */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 select-none pointer-events-none">
        <span className="text-[12rem] font-black text-surface-mid/20 rotate-90 inline-block uppercase tracking-widest leading-none">
          ESTD 2015
        </span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center lg:items-start">

          {/* Left: Content Block (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-start">


            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.2rem] font-heading font-black text-ink leading-[1.0] tracking-tighter mb-6">
              Chennai's Leading{' '}
              <span style={{ color: '#e07b39' }}>PEB Construction</span>
              {' '}& Steel Building Company
            </h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl font-bold text-ink-muted leading-relaxed font-sans max-w-2xl mb-6"
            >
              Pre-engineered steel buildings designed, fabricated and erected across Chennai and Tamil Nadu — faster, stronger, at lower cost.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans max-w-2xl mb-4"
            >
              Deepika Builtech is Chennai's most trusted Pre-Engineered Building (PEB) contractor with over 10 years of experience delivering industrial-grade PEB structures across Tamil Nadu. From precision-fabricated PEB warehouses and cold storage facilities to mezzanine floors, industrial sheds, and EOT cranes — we handle every project end-to-end, from structural design and factory fabrication to on-site erection and handover.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden sm:block text-sm sm:text-base text-ink-muted leading-relaxed font-sans max-w-2xl mb-8"
            >
              With 150+ completed projects and 100+ satisfied clients across Chennai, Kanchipuram, Thiruvallur, Sriperumbudur, and beyond, Deepika Builtech brings unmatched technical expertise and on-time delivery to every build. Our CNC-precision manufacturing, IS-code compliant structural engineering, and experienced erection teams ensure your project is completed safely, on schedule, and within budget.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-carbon text-white px-8 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-amber hover:text-carbon transition-all duration-500 shadow-xl group flex items-center justify-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                href="/about"
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

          {/* Right: Architectural Offset Image (5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="lg:col-span-5 relative lg:mt-16"
          >
            {/* Background Blue-Frame */}
            <div className="absolute inset-x-4 -inset-y-4 border-2 border-amber/30 z-0 translate-x-8 translate-y-8" />

            <div className="relative z-10 w-full aspect-[4/5] bg-carbon-mid overflow-hidden shadow-[40px_40px_0px_rgba(0,0,0,0.05)] border border-white/10 rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.8, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full absolute inset-0"
                >
                  <picture>
                    {slides[activeSlide].imageWebp && (
                      <source srcSet={slides[activeSlide].imageWebp} type="image/webp" />
                    )}
                    <img
                      src={slides[activeSlide].image}
                      alt={slides[activeSlide].alt}
                      width={640}
                      height={800}
                      loading="eager"
                      fetchPriority="high"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </motion.div>
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

      </div>

    </section>
  );
}


