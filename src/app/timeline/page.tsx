"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const timelineEvents = [
  {
    year: "2024",
    events: [
      { title: "Road Safety Monitoring", type: "Computer Vision" },
      { title: "IoT Pipeline", type: "Data Engineering" },
      { title: "Edge Computing Research", type: "Infrastructure" }
    ]
  },
  {
    year: "2025",
    events: [
      { title: "Weather Analytics Platform", type: "Cloud Engineering" },
      { title: "Cloud Engineering Projects", type: "Infrastructure" },
      { title: "Privacy-First Remote Access", type: "Security" }
    ]
  },
  {
    year: "2026",
    events: [
      { title: "SkillTree", type: "AI Systems" },
      { title: "JarvisGemma", type: "Spatial AI" },
      { title: "Local AI Infrastructure", type: "Local AI" },
      { title: "WhisperKit", type: "Speech Intelligence" },
      { title: "NAS Infrastructure", type: "Hardware" }
    ]
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={containerRef} className="flex-1 flex flex-col min-h-[100dvh] relative max-w-[1400px] mx-auto w-full px-6 md:px-12 overflow-hidden">
      
      {/* Background Volumetric Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-foreground/5 to-transparent pointer-events-none -z-10 translate-z-0" />

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-start pt-48 pb-20 relative z-20 border-b border-foreground/10 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-3 px-0 py-1 text-[10px] uppercase tracking-[0.4em] font-medium text-muted-foreground border-b border-foreground/10 pb-2"
        >
          Chronology
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight text-balance leading-none text-foreground mb-8"
        >
          Engineering <br className="hidden md:block" />
          <span className="italic text-muted-foreground">Journey.</span>
        </motion.h1>
      </section>

      {/* Spatial Journey Exhibits */}
      <div className="relative z-20 pb-40">
        {timelineEvents.map((yearBlock, idx) => (
          <motion.div 
            key={yearBlock.year} 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-start justify-between min-h-[60vh] relative mb-40 border-l border-foreground/10 pl-6 md:pl-12 ml-4 md:ml-8"
          >
            {/* Huge Cinematic Year Typography behind content */}
            <div className="absolute top-0 right-0 md:-right-12 text-[12rem] md:text-[20rem] font-serif tracking-tighter text-foreground-[0.02] text-foreground/5 leading-none select-none z-0 pointer-events-none">
              {yearBlock.year}
            </div>

            <div className="w-full md:w-1/3 relative z-10 pt-4 mb-16 md:mb-0">
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">{yearBlock.year}</h2>
               <div className="w-12 h-px bg-foreground/20 mt-6" />
            </div>

            <div className="w-full md:w-2/3 relative z-10 flex flex-col gap-12 pt-4">
              {yearBlock.events.map((event, eIdx) => (
                <motion.div 
                  key={eIdx}
                  className="group relative flex flex-col md:flex-row md:items-center justify-between gap-4 pb-12 border-b border-foreground/5 last:border-none"
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif tracking-tight text-foreground group-hover:text-primary transition-colors duration-500 mb-2">
                      {event.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-muted-foreground bg-foreground/5 px-4 py-2 border border-foreground/5">
                      {event.type}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
