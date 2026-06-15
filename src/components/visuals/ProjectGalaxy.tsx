"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { projects, connections } from "@/data/projects";

export default function ProjectGalaxy({ activeFilter }: { activeFilter: string | null }) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // 3D Tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div 
      className="relative w-full aspect-square md:aspect-video max-h-[800px] border border-white/10 rounded-3xl bg-black/20 backdrop-blur-3xl shadow-2xl"
      style={{ perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        className="absolute inset-0 w-full h-full transform-style-preserve-3d"
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        {/* SVG Connections layer */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {connections.map((conn, idx) => {
            const fromNode = projects.find((p) => p.id === conn.from);
            const toNode = projects.find((p) => p.id === conn.to);
            
            if (!fromNode || !toNode) return null;

            const isHighlighted = hoveredNode === conn.from || hoveredNode === conn.to;
            const isDimmed = hoveredNode !== null && !isHighlighted;

            return (
              <motion.line
                key={idx}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke="white"
                strokeWidth="1.5"
                initial={{ strokeOpacity: 0.1 }}
                animate={{ 
                  strokeOpacity: isHighlighted ? 0.6 : isDimmed ? 0.05 : 0.15,
                  strokeWidth: isHighlighted ? 2 : 1.5
                }}
                transition={{ duration: 0.3 }}
              />
            );
          })}
        </svg>

        {/* Nodes layer */}
        {projects.map((project) => {
          const isHovered = hoveredNode === project.id;
          const isConnected = connections.some(c => (c.from === project.id && c.to === hoveredNode) || (c.to === project.id && c.from === hoveredNode));
          const isDimmedByHover = hoveredNode !== null && !isHovered && !isConnected;
          
          const isFilteredOut = activeFilter !== null && !project.category.includes(activeFilter);
          
          const finalOpacity = isFilteredOut ? 0.1 : (isDimmedByHover ? 0.3 : 1);
          const finalScale = isFilteredOut ? 0.8 : (isHovered ? 1.1 : 1);

          const sizeMap = {
            lg: "w-20 h-20 md:w-24 md:h-24",
            md: "w-16 h-16 md:w-20 md:h-20",
            sm: "w-12 h-12 md:w-16 md:h-16"
          };

          const titleSizeMap = {
            lg: "text-base md:text-lg",
            md: "text-sm md:text-base",
            sm: "text-xs md:text-sm"
          };

          return (
            <motion.div
              key={project.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: `${project.x}%`, top: `${project.y}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: finalOpacity, 
                scale: finalScale,
                zIndex: isHovered ? 50 : 10
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onMouseEnter={() => setHoveredNode(project.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <Link href={`/project/${project.slug}`} className={`block relative group ${isFilteredOut ? 'pointer-events-none' : ''}`}>
                <div className={`relative flex items-center justify-center rounded-full bg-black/60 border border-white/20 backdrop-blur-md shadow-lg transition-all ${sizeMap[project.size]} overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className={`font-semibold text-center leading-tight px-2 text-white/90 group-hover:text-white transition-colors ${titleSizeMap[project.size]}`}>
                    {project.title}
                  </span>
                </div>
                
                {/* Tooltip for the node */}
                {!isFilteredOut && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 p-3 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 shadow-2xl">
                    <p className="text-xs font-medium text-white/80">{project.shortDescription}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {project.category.slice(0, 2).map(cat => (
                        <span key={cat} className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/60">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
