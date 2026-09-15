"use client";

import { motion } from "framer-motion";

export default function MinimalBackground() {
  return (
    <div 
      style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', overflow: 'hidden', backgroundColor: '#09090b', fontFamily: 'serif' }}
    >
      
      {/* Massive Background Typography to be refracted by the glass */}
      <div 
        style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', 
          justifyContent: 'center', alignItems: 'center', fontWeight: 900, 
          opacity: 0.2, color: 'white', mixBlendMode: 'overlay',
          fontSize: '15vw', lineHeight: '0.85'
        }}
      >
        <span>CREATIVE</span>
        <span 
          style={{
            color: 'transparent',
            backgroundImage: 'linear-gradient(to right, #22d3ee, #3b82f6, #9333ea)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text'
          }}
        >
          ENGINEER
        </span>
        <span>VISION</span>
      </div>

      {/* Lava Lamp Orbs for deep color refraction */}
      <motion.div 
        style={{
          position: 'absolute', top: '10%', left: '20%', width: '50vw', height: '50vw', 
          borderRadius: '9999px', mixBlendMode: 'screen', opacity: 0.5, 
          filter: 'blur(100px)', backgroundColor: '#00f0ff',
          transform: 'translateZ(0)'
        }}
        animate={{ 
          x: ["0%", "30%", "-20%", "0%"],
          y: ["0%", "40%", "10%", "0%"],
          scale: [1, 1.2, 0.8, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        style={{
          position: 'absolute', bottom: '10%', right: '10%', width: '60vw', height: '60vw', 
          borderRadius: '9999px', mixBlendMode: 'screen', opacity: 0.4, 
          filter: 'blur(120px)', backgroundColor: '#ff003c',
          transform: 'translateZ(0)'
        }}
        animate={{ 
          x: ["0%", "-40%", "20%", "0%"],
          y: ["0%", "-20%", "-40%", "0%"],
          scale: [1, 0.9, 1.3, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        style={{
          position: 'absolute', top: '40%', left: '50%', width: '40vw', height: '40vw', 
          borderRadius: '9999px', mixBlendMode: 'screen', opacity: 0.3, 
          filter: 'blur(90px)', backgroundColor: '#7000ff',
          transform: 'translateZ(0)'
        }}
        animate={{ 
          x: ["0%", "-30%", "40%", "0%"],
          y: ["0%", "30%", "-20%", "0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
