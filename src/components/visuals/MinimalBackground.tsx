"use client";

import { motion } from "framer-motion";

export default function MinimalBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
        backgroundColor: "#08090d",
      }}
    >
      {/* Background Architectural Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 80%)",
        }}
      />

      {/* Floating Luminous Orbs for Rich Glass Refraction */}
      <motion.div
        style={{
          position: "absolute",
          top: "-15%",
          left: "15%",
          width: "55vw",
          height: "55vw",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(99, 102, 241, 0.12) 45%, transparent 70%)",
          filter: "blur(90px)",
          willChange: "transform",
        }}
        animate={{
          x: ["0%", "8%", "-6%", "0%"],
          y: ["0%", "6%", "-8%", "0%"],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.20) 0%, rgba(236, 72, 153, 0.10) 45%, transparent 70%)",
          filter: "blur(110px)",
          willChange: "transform",
        }}
        animate={{
          x: ["0%", "-10%", "5%", "0%"],
          y: ["0%", "-8%", "10%", "0%"],
          scale: [1, 0.94, 1.1, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "25%",
          width: "60vw",
          height: "60vw",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(20, 184, 166, 0.18) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 70%)",
          filter: "blur(120px)",
          willChange: "transform",
        }}
        animate={{
          x: ["0%", "-6%", "8%", "0%"],
          y: ["0%", "10%", "-6%", "0%"],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle Vignette Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 50%, transparent 60%, rgba(8, 9, 13, 0.8) 100%)",
        }}
      />
    </div>
  );
}
