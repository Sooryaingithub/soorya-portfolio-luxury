"use client";

import { motion } from "framer-motion";
import { LiquidGlassInteractive } from "simple-liquid-glass/interactive";
import { ArrowUpRight, Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full p-4 md:p-8 flex items-center justify-center relative z-20">
      
      <div 
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6"
        style={{ gridAutoRows: 'minmax(250px, auto)' }}
      >
        
        {/* Bento 1: Massive Intro */}
        <LiquidGlassInteractive 
          renderer="webgl"
          lensProfile="player"
          lensOptions={{ strength: 0.2, chromaticAberration: 0.15 }}
          className="md:col-span-2 md:row-span-2 border border-white/20 p-10 flex flex-col justify-between group"
          style={{ borderRadius: '2.5rem' }}
          background="rgba(20, 20, 25, 0.1)"
        >
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span 
                className="px-4 py-2 text-xs uppercase font-medium border border-white/30 rounded-full backdrop-blur-md"
                style={{ letterSpacing: '0.2em' }}
              >
                Soorya Sendilnath
              </span>
              <ArrowUpRight className="w-8 h-8 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] mb-6">
                Designing <br/> 
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Intelligent</span> <br/>
                Interfaces
              </h2>
              <p className="text-lg opacity-80 max-w-md font-light">
                Bridging the gap between raw computational power and seamless human experience through design engineering.
              </p>
            </div>
          </div>
        </LiquidGlassInteractive>

        {/* Bento 2: Featured Project */}
        <LiquidGlassInteractive 
          renderer="webgl"
          lensProfile="player"
          className="md:col-span-2 md:row-span-1 border border-white/20 p-10 group"
          style={{ borderRadius: '2.5rem' }}
          background="rgba(20, 20, 25, 0.1)"
        >
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-serif">Project: Spatial AI</h3>
              <ArrowUpRight className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="opacity-70 text-sm">
              An immersive computing interface powered by local LLMs, wrapped in a hyper-realistic glassmorphic UI.
            </p>
          </div>
        </LiquidGlassInteractive>

        {/* Bento 3: Tech Stack / Data */}
        <LiquidGlassInteractive 
          renderer="webgl"
          lensProfile="player"
          className="md:col-span-1 md:row-span-1 border border-white/20 p-8 flex flex-col justify-center items-center text-center group"
          style={{ borderRadius: '2.5rem' }}
          background="rgba(20, 20, 25, 0.1)"
        >
          <div className="relative z-10">
            <h4 className="text-5xl font-black mb-2 italic">10<span className="text-cyan-400">+</span></h4>
            <p className="text-xs uppercase tracking-widest opacity-70">Years of Code</p>
          </div>
        </LiquidGlassInteractive>

        {/* Bento 4: Social / Contact */}
        <LiquidGlassInteractive 
          renderer="webgl"
          lensProfile="player"
          className="md:col-span-1 md:row-span-1 border border-white/20 p-8 flex flex-col justify-between group"
          style={{ borderRadius: '2.5rem' }}
          background="rgba(20, 20, 25, 0.1)"
        >
          <div className="relative z-10 h-full flex flex-col justify-between">
            <h3 className="text-xl font-serif">Connect</h3>
            <div className="flex gap-4">
              <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-colors border border-white/10"><Github className="w-5 h-5"/></Link>
              <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-colors border border-white/10"><Twitter className="w-5 h-5"/></Link>
              <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-colors border border-white/10"><Mail className="w-5 h-5"/></Link>
            </div>
          </div>
        </LiquidGlassInteractive>

      </div>
    </main>
  );
}
