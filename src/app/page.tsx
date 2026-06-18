"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const renderCinematicText = (text: string) => {
    return text.split(" ").map((word, i) => (
      <motion.span key={i} variants={textVariants} className="inline-block mr-[0.25em]">
        {word}
      </motion.span>
    ));
  };

  return (
    <main ref={containerRef} className="flex-1 flex flex-col items-center w-full min-h-[150vh] relative">
      
      {/* 1. HERO FULL SCREEN */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity, willChange: "transform, opacity" }}
        className="h-[100vh] w-full flex flex-col justify-center items-center text-center px-4 relative z-10"
      >
        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
           className="mb-12 px-0 py-1 text-[10px] uppercase tracking-[0.5em] font-medium text-muted-foreground border-b border-foreground/5 pb-3"
        >
          AI Systems Architect
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-5xl md:text-[6rem] lg:text-[8rem] font-serif tracking-tight text-balance leading-[0.95] text-foreground"
        >
          BUILDING INTELLIGENCE<br />
          <span className="text-muted-foreground italic">WITH PURPOSE</span>
        </motion.h1>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
          className="absolute bottom-16 flex flex-col items-center gap-6 text-muted-foreground/40"
        >
          <span className="text-[9px] uppercase tracking-[0.4em]">Explore</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
        </motion.div>
      </motion.section>

      {/* 2. THE REVEAL SECTION */}
      <section className="min-h-[100vh] w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-start text-left relative z-20 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-full flex flex-col items-start"
        >
          <p className="text-4xl md:text-6xl lg:text-8xl font-serif tracking-tight text-foreground/90 leading-none mb-16">
            Beyond the Cloud.<br />
            <span className="text-muted-foreground italic">Intelligence Anywhere.</span>
          </p>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start w-full mt-12 border-t border-foreground/10 pt-16">
             <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed text-balance font-sans font-light max-w-2xl">
               Built where intelligence lives smarter, closer, and faster. Engineering on-device, 
               privacy-first artificial intelligence across cloud infrastructure, 
               local intelligence, and spatial computing ecosystems.
             </p>

             <div className="flex flex-col gap-8 w-full lg:w-auto">
               {/* Elegant Links (No bulky buttons) */}
               <Link href="/projects" className="group flex items-center justify-between lg:justify-start gap-8 text-sm font-sans uppercase tracking-[0.2em] text-foreground transition-all py-4 border-b border-foreground/5 hover:border-foreground/20">
                  <span className="relative overflow-hidden pb-1">
                    View Spaces
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground transition-all duration-700 ease-in-out group-hover:w-full" />
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-50 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-2" />
               </Link>

               <Link href="/timeline" className="group flex items-center justify-between lg:justify-start gap-8 text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground transition-all hover:text-foreground py-4 border-b border-foreground/5 hover:border-foreground/20">
                  <span className="relative overflow-hidden pb-1">
                    Explore Journey
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground transition-all duration-700 ease-in-out group-hover:w-full" />
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0" />
               </Link>
             </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
