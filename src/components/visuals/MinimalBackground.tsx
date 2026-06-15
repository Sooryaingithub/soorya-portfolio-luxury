"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SHAPES = [
  [{x:0,y:0}, {x:1,y:0}, {x:2,y:0}, {x:3,y:0}], // I
  [{x:0,y:0}, {x:1,y:0}, {x:0,y:1}, {x:1,y:1}], // O
  [{x:1,y:0}, {x:0,y:1}, {x:1,y:1}, {x:2,y:1}], // T
  [{x:0,y:0}, {x:0,y:1}, {x:0,y:2}, {x:1,y:2}], // L
  [{x:1,y:0}, {x:1,y:1}, {x:1,y:2}, {x:0,y:2}], // J
  [{x:1,y:0}, {x:2,y:0}, {x:0,y:1}, {x:1,y:1}], // S
  [{x:0,y:0}, {x:1,y:0}, {x:1,y:1}, {x:2,y:1}], // Z
];

type Tetromino = {
  id: number;
  shapeIdx: number;
  startX: number;
  duration: number;
  colorClass: string;
};

const COLORS = [
  "bg-cyan-400/40 border-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.5)]",
  "bg-fuchsia-400/40 border-fuchsia-200 shadow-[0_0_20px_rgba(232,121,249,0.5)]",
  "bg-amber-400/40 border-amber-200 shadow-[0_0_20px_rgba(251,191,36,0.5)]",
  "bg-emerald-400/40 border-emerald-200 shadow-[0_0_20px_rgba(52,211,153,0.5)]",
  "bg-rose-400/40 border-rose-200 shadow-[0_0_20px_rgba(251,113,133,0.5)]",
  "bg-violet-400/40 border-violet-200 shadow-[0_0_20px_rgba(167,139,250,0.5)]",
  "bg-blue-400/40 border-blue-200 shadow-[0_0_20px_rgba(96,165,250,0.5)]",
];

export default function MinimalBackground() {
  const [pieces, setPieces] = useState<Tetromino[]>([]);

  useEffect(() => {
    let pieceId = 0;
    
    const spawnPiece = () => {
      const colCount = Math.floor(window.innerWidth / 32);
      // Ensure it doesn't spawn too close to the right edge
      const startX = Math.floor(Math.random() * (colCount - 4)) * 32;
      
      const newPiece: Tetromino = {
        id: pieceId++,
        shapeIdx: Math.floor(Math.random() * SHAPES.length),
        startX,
        duration: 20 + Math.random() * 15, // Super slow: 20-35s falling time
        colorClass: COLORS[Math.floor(Math.random() * COLORS.length)]
      };
      
      setPieces(prev => {
        // Keep max 15 pieces in DOM
        const next = [...prev, newPiece];
        if (next.length > 15) return next.slice(next.length - 15);
        return next;
      });
    };

    // Initial pieces distributed
    spawnPiece();
    setTimeout(spawnPiece, 3000);
    setTimeout(spawnPiece, 7000);

    // Spawn a new piece every 8 seconds
    const interval = setInterval(() => {
      spawnPiece();
    }, 8000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Falling Tetrominoes */}
      {pieces.map(piece => (
        <motion.div
          key={piece.id}
          className="absolute top-0 left-0"
          initial={{ y: -200, x: piece.startX, opacity: 0 }}
          animate={{ y: "120vh", opacity: [0, 1, 1, 0] }}
          transition={{ 
            y: { duration: piece.duration, ease: "linear" },
            opacity: { duration: piece.duration, ease: "linear", times: [0, 0.1, 0.8, 1] }
          }}
        >
          {SHAPES[piece.shapeIdx].map((block, idx) => (
            <div 
              key={idx}
              className={`absolute w-[32px] h-[32px] ${piece.colorClass} border border-white/40 dark:border-white/20 backdrop-blur-md rounded-[6px]`}
              style={{ left: block.x * 32, top: block.y * 32 }}
            />
          ))}
        </motion.div>
      ))}

      {/* Radial gradient mask to make it fade at the edges and blend with content */}
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,black_100%)]"></div>
      
      {/* Soft ambient glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 -right-40 w-[40rem] h-[40rem] bg-foreground/5 rounded-full blur-[150px] -translate-y-1/2"></div>
      <div className="absolute -bottom-40 left-1/4 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[120px]"></div>
    </div>
  );
}
