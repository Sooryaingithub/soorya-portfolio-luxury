"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <main className="bg-background">
      <div className="h-[300vh] relative" ref={targetRef}>
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          
          <div className="px-4 md:px-12 mb-12 max-w-7xl mx-auto w-full">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">
              Engineering Journey
            </h1>
            <p className="text-lg text-muted-foreground">Scroll to explore the timeline.</p>
          </div>

          <motion.div style={{ x }} className="flex gap-12 px-4 md:px-12 pb-24 items-center">
            {/* Start point */}
            <div className="flex-none w-24 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white/20" />
            </div>

            {timelineEvents.map((yearBlock, idx) => (
              <div key={yearBlock.year} className="flex-none flex items-center gap-12">
                <div className="flex flex-col gap-6">
                  <h2 className="text-8xl md:text-[12rem] font-bold tracking-tighter text-foreground/5 leading-none select-none">
                    {yearBlock.year}
                  </h2>
                  <div className="flex gap-4 items-start pt-8">
                    {yearBlock.events.map((event, eIdx) => (
                      <motion.div 
                        key={eIdx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: eIdx * 0.1 }}
                        className="glass-panel p-6 w-64 md:w-80 shrink-0 hover:bg-white/10 transition-colors"
                      >
                        <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
                          {event.type}
                        </p>
                        <h3 className="text-xl font-medium tracking-tight">
                          {event.title}
                        </h3>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Connecting line segment */}
                {idx !== timelineEvents.length - 1 && (
                  <div className="w-24 h-px bg-white/10" />
                )}
              </div>
            ))}
            
            {/* End point */}
            <div className="flex-none w-24 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
