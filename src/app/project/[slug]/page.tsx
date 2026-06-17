"use client";

import { useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

export default function SpacePage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!project) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center min-h-[100dvh]">
        <h1 className="text-2xl font-serif">Space not found</h1>
        <Link href="/projects" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground mt-8 border-b border-foreground/10 pb-1">Return to Exhibition</Link>
      </main>
    );
  }

  return (
    <main ref={containerRef} className="flex-1 bg-background relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col items-start justify-end pb-32 pt-48 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <motion.div style={{ y: y1, opacity: opacity1 }} className="absolute inset-0 z-0 pointer-events-none">
          {/* Very subtle architectural lines in background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-foreground)_1px,transparent_1px)] bg-[size:8rem_8rem] opacity-[0.02]" />
        </motion.div>

        <div className="z-10 w-full">
          <Link href="/projects" className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-all duration-500 mb-16 border border-foreground/10 px-4 py-2 bg-foreground/5">
            <ArrowLeft className="w-3 h-3" />
            Spaces Hub
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-serif tracking-tight mb-8 leading-[0.95]"
          >
            {project.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-3xl font-sans font-light text-muted-foreground text-balance max-w-4xl"
          >
            {project.shortDescription}
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative z-20 bg-background pb-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          
          {/* Museum Placard (Metadata) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-foreground/10 py-16 mb-32">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Status</p>
              <p className="text-lg font-serif">{project.status}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Timeline</p>
              <p className="text-lg font-serif">{project.year}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Complexity</p>
              <p className="text-lg font-serif">{project.complexity}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Domains</p>
              <div className="flex flex-col gap-2">
                {project.category.map(cat => (
                  <span key={cat} className="text-lg font-serif">{cat}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="max-w-4xl mx-auto space-y-40">
            
            {/* Executive Summary */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start"
            >
              <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground sticky top-32">Executive Summary</h2>
              {project.content ? (
                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-serif mb-6 text-foreground">The Problem</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground font-light">
                      {project.content.overview.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif mb-6 text-foreground">The Solution</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground font-light">
                      {project.content.overview.solution}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-2xl leading-relaxed text-muted-foreground font-serif">
                  This space represents a critical junction in building scalable intelligence. By pushing the boundaries of {project.category[0].toLowerCase()} and integrating deeply with {project.category[1]?.toLowerCase() || "modern systems"}, it delivers a seamless, high-performance architecture that operates entirely under strict privacy and efficiency constraints.
                </p>
              )}
            </motion.div>

            {/* Features / Capabilities */}
            {project.content?.capabilities && (
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start"
              >
                <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground sticky top-32">System Architecture</h2>
                <ul className="space-y-8">
                  {project.content.capabilities.map((feature, idx) => {
                    const parts = feature.split(': ');
                    return (
                      <li key={idx} className="pb-8 border-b border-foreground/10 last:border-none">
                        {parts.length > 1 ? (
                          <>
                            <h3 className="text-2xl font-serif mb-4 text-foreground">{parts[0]}</h3>
                            <p className="text-lg font-light text-muted-foreground leading-relaxed">{parts.slice(1).join(': ')}</p>
                          </>
                        ) : (
                          <p className="text-2xl font-serif text-foreground">{feature}</p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}

            {/* Dynamic Sections */}
            {project.content?.sections?.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start"
              >
                <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground sticky top-32">{section.title}</h2>
                
                <div className="w-full">
                  {Array.isArray(section.body) ? (
                    <ul className="space-y-6">
                      {section.body.map((item, idx) => (
                        <li key={idx} className="flex gap-6 items-start">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2 border border-foreground/10 px-2 py-1">0{idx + 1}</span>
                          <span className="text-lg font-light text-muted-foreground leading-relaxed pt-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xl leading-relaxed text-muted-foreground font-serif text-balance">
                      {section.body}
                    </p>
                  )}

                  {/* Inject Architecture Diagram into the Architecture section */}
                  {section.title.includes("Architecture") && project.content?.images?.architecture && (
                    <div className="w-full mt-16 p-8 border border-foreground/10 flex items-center justify-center relative">
                      <div className="absolute top-0 left-0 px-3 py-1 bg-foreground/5 border-b border-r border-foreground/10 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Blueprint</div>
                      <div className="relative w-full aspect-[16/9]">
                        <Image src={project.content.images.architecture} alt={`${project.title} Architecture`} fill className="object-contain" unoptimized />
                      </div>
                    </div>
                  )}
                  
                  {/* Inject Results/Output Images into Validation section */}
                  {section.title.includes("Validation") && (
                    <div className="flex flex-col gap-12 mt-16">
                      {project.content?.images?.results && (
                        <div className="w-full p-8 border border-foreground/10 relative">
                          <div className="absolute top-0 left-0 px-3 py-1 bg-foreground/5 border-b border-r border-foreground/10 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Performance</div>
                          <div className="relative w-full aspect-square">
                            <Image src={project.content.images.results} alt="Performance Results" fill className="object-contain" unoptimized />
                          </div>
                        </div>
                      )}
                      {project.content?.images?.output && (
                        <div className="w-full p-8 border border-foreground/10 relative">
                          <div className="absolute top-0 left-0 px-3 py-1 bg-foreground/5 border-b border-r border-foreground/10 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Output</div>
                          <div className="relative w-full aspect-square">
                            <Image src={project.content.images.output} alt="Model Output" fill className="object-contain" unoptimized />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}
