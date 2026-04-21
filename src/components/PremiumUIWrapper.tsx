import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const PremiumUIWrapper = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = target.closest('button, a, .cursor-pointer');
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

      {/* Industrial Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-amber pointer-events-none z-[1000] hidden lg:block"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? "rgba(242, 166, 0, 0.1)" : "rgba(242, 166, 0, 0)",
          borderColor: isHovering ? "rgba(242, 166, 0, 0.5)" : "rgba(242, 166, 0, 0.3)"
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5, opacity: { duration: 0.2 } }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-amber rounded-full pointer-events-none z-[1001] hidden lg:block"
        animate={{
          x: mousePos.x - 2,
          y: mousePos.y - 2,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
      />
    </>
  );
};

export default PremiumUIWrapper;
