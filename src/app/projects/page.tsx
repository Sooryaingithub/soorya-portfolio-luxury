"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const allCategories = Array.from(new Set(projects.flatMap(p => p.category)));

function SpaceCard({ project, index }: { project: Project, index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center w-full min-h-[60vh] py-24 border-b border-foreground/5 last:border-none`}
    >
      {/* "Image" Area - Simulated for now with architectural textures */}
      <Link href={`/project/${project.slug}`} className="relative w-full md:w-[55%] h-[50vh] md:h-[70vh] overflow-hidden bg-foreground/5 block border border-foreground/5">
         {/* Subtle architectural grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-foreground)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none" />
         
         {/* Slow Zoom Effect */}
         <motion.div 
            className="w-full h-full bg-gradient-to-br from-primary/5 to-transparent transform scale-100 group-hover:scale-110 transition-transform duration-[2s] ease-out origin-center translate-z-0" 
            style={{ willChange: "transform" }}
         />
         
         {/* Hover Overlay */}
         <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-1000" />
      </Link>

      {/* Content Area */}
      <div className="w-full md:w-[45%] flex flex-col items-start py-8">
         <div className="flex gap-4 items-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-muted-foreground">0{index + 1}</span>
            <span className="w-16 h-[1px] bg-foreground/10" />
            <span className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 border border-foreground/10 text-foreground/70">{project.category[0]}</span>
         </div>

         <Link href={`/project/${project.slug}`}>
           <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-foreground mb-8 leading-tight group-hover:text-primary transition-colors duration-700">
             {project.title}
           </h3>
         </Link>

         <p className="text-lg text-muted-foreground leading-relaxed font-sans font-light mb-12 max-w-md text-balance">
           {project.shortDescription}
         </p>

         <Link href={`/project/${project.slug}`} className="inline-flex items-center gap-6 text-xs font-sans uppercase tracking-[0.2em] text-foreground transition-all">
           <span className="relative overflow-hidden pb-1">
             Explore Space
             <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground transition-all duration-700 ease-in-out group-hover:w-full" />
           </span>
           <ArrowRight className="w-4 h-4 opacity-40 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-2" />
         </Link>
      </div>
    </motion.div>
  );
}

export default function Spaces() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter 
    ? projects.filter(p => p.category.includes(activeFilter))
    : projects;

  const headerVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <main className="flex-1 flex flex-col min-h-[100dvh] px-6 md:px-12 pt-48 pb-32 relative max-w-[1400px] mx-auto w-full overflow-x-clip">
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="flex flex-col items-start gap-8 mb-32 relative z-20"
      >
        <motion.div variants={headerVariants} className="inline-flex items-center gap-3 px-0 py-1 text-xs uppercase tracking-[0.4em] font-medium text-muted-foreground border-b border-foreground/10 pb-2">
          Architectural Exhibition
        </motion.div>
        <motion.h1 variants={headerVariants} className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight text-foreground leading-none">
          Spaces Hub
        </motion.h1>
        <motion.p variants={headerVariants} className="text-xl md:text-2xl text-muted-foreground font-serif italic max-w-2xl mt-8">
          A curated gallery of systems, architectures, and platforms built across cloud, edge, and spatial ecosystems.
        </motion.p>
      </motion.div>

      {/* Filter Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-8 overflow-x-auto pb-8 mb-16 scrollbar-hide relative z-20 border-b border-foreground/10"
      >
        <button 
          onClick={() => setActiveFilter(null)}
          className={`flex-shrink-0 pb-4 text-xs uppercase tracking-[0.2em] transition-all duration-500 relative ${activeFilter === null ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
        >
          All Domains
          {activeFilter === null && (
            <motion.div layoutId="filter-indicator" className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground" />
          )}
        </button>
        {allCategories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveFilter(cat === activeFilter ? null : cat)}
            className={`flex-shrink-0 pb-4 text-xs uppercase tracking-[0.2em] transition-all duration-500 relative ${activeFilter === cat ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {cat}
            {activeFilter === cat && (
              <motion.div layoutId="filter-indicator" className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground" />
            )}
          </button>
        ))}
      </motion.div>

      {/* Index View */}
      <div className="relative z-20">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] font-sans text-muted-foreground">Exhibits</h2>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-foreground bg-foreground/5 px-6 py-3 border border-foreground/10">
            <Filter className="w-3 h-3" />
            <span>{filteredProjects.length} Spaces</span>
          </div>
        </div>
        
        <div className="flex flex-col w-full relative">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <SpaceCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
