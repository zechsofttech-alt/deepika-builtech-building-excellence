import { motion, useScroll, useSpring } from "framer-motion";

const PremiumUIWrapper = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Cinematic Top Scroll Progress */}
      <motion.div 
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-amber z-[200] origin-left shadow-[0_0_15px_rgba(242,166,0,0.5)]"
      />

      {/* Global Grain/Noise Texture for Premium Feel */}
      <div className="fixed inset-0 pointer-events-none z-[150] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
        </svg>
      </div>
    </>
  );
};

export default PremiumUIWrapper;
