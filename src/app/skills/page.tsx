"use client";

import { motion } from "framer-motion";

const craftCategories = [
  {
    name: "Artificial Intelligence",
    materials: ["LLM Engineering", "Agentic Systems", "Prompt Engineering", "Computer Vision", "NLP"]
  },
  {
    name: "Apple Ecosystem",
    materials: ["SwiftUI", "CoreML", "MLX", "ARKit", "Vision Framework"]
  },
  {
    name: "Cloud & Infrastructure",
    materials: ["Azure", "Serverless", "Data Engineering", "Linux", "Networking", "Self Hosting", "VPN Infrastructure"]
  },
  {
    name: "Programming",
    materials: ["Python", "Swift", "TypeScript", "JavaScript", "C++"]
  }
];

export default function CraftPage() {
  return (
    <main className="flex-1 flex flex-col min-h-[100dvh] px-6 md:px-12 pt-48 pb-32 relative max-w-[1400px] mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-32"
      >
        <div className="inline-flex items-center gap-3 px-0 py-1 text-[10px] uppercase tracking-[0.4em] font-medium text-muted-foreground border-b border-foreground/10 pb-2 mb-8">
          Methodology
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight text-foreground leading-none mb-8">
          Craft
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-serif italic max-w-2xl text-balance">
          The materials, tools, and structural methods utilized to engineer intelligence.
        </p>
      </motion.div>

      <div className="w-full">
        {craftCategories.map((category, idx) => (
          <motion.div 
            key={category.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start py-16 border-t border-foreground/10"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
              {category.name}
            </h2>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
              {category.materials.map((material, mIdx) => (
                <li key={mIdx} className="flex gap-6 items-start border-b border-foreground/5 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2 px-2 py-1 bg-foreground/5">0{mIdx + 1}</span>
                  <span className="text-xl font-light text-foreground leading-relaxed pt-1">{material}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
