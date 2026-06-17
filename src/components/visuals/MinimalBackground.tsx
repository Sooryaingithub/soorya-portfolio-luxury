"use client";

"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function MinimalBackground() {
  const { scrollYProgress } = useScroll();
  
  // Parallax movement for the sunlight gradients
  const sunY1 = useTransform(scrollYProgress, [0, 1], ["-20%", "50%"]);
  const sunX1 = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"]);
  
  const sunY2 = useTransform(scrollYProgress, [0, 1], ["60%", "-10%"]);
  const sunX2 = useTransform(scrollYProgress, [0, 1], ["80%", "40%"]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
      
      {/* 
        Architectural Sunlight & Shadow 
        Using large radial gradients that mimic the sun casting light through massive windows.
      */}

      {/* Primary Sunlight (Warm, Champagne Gold / Ivory) */}
      <motion.div 
        style={{ y: sunY1, x: sunX1, willChange: "transform" }}
        className="absolute top-0 left-0 w-[120vw] h-[120vw] rounded-full mix-blend-screen opacity-50 dark:opacity-20 translate-z-0"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,var(--color-primary)_0%,transparent_50%)] translate-z-0" />
      </motion.div>

      {/* Secondary Ambient Light (Cooler / Stone reflection) */}
      <motion.div 
        style={{ y: sunY2, x: sunX2, willChange: "transform" }}
        className="absolute top-0 left-0 w-[100vw] h-[100vw] rounded-full mix-blend-screen opacity-40 dark:opacity-10 translate-z-0"
        animate={{ scale: [1.05, 1, 1.05], rotate: [0, -5, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,var(--color-secondary)_0%,transparent_50%)] translate-z-0" />
      </motion.div>

      {/* Subtle Structural Lines (Simulating Travertine / Marble Panels) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-foreground)_1px,transparent_1px)] bg-[size:33.33vw_100vh] opacity-[0.02]" />

      {/* Premium Noise Texture (Material Grain) */}
      <svg className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.04] mix-blend-overlay">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
