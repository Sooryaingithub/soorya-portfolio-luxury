"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Globe,
  Shield,
  Zap,
  Check,
  Copy,
  Download,
  Mail,
  GraduationCap,
  Award,
  ExternalLink,
  Code2,
} from "lucide-react";
import { projects, Project } from "@/data/projects";

// Custom SVG Icons for brands not present in recent lucide-react
const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const skillClusters = [
  {
    category: "Artificial Intelligence",
    icon: Sparkles,
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/30",
    skills: ["LLM Engineering", "Agentic Systems", "Prompt Architecture", "Computer Vision", "NLP", "LSTM Time-Series"],
  },
  {
    category: "Apple Ecosystem & Spatial",
    icon: Cpu,
    color: "from-indigo-500/20 to-purple-500/10",
    border: "border-indigo-500/30",
    skills: ["SwiftUI", "CoreML", "MLX Silicon", "Vision Framework", "WhisperKit", "Spatial Computing"],
  },
  {
    category: "Cloud & Distributed Infra",
    icon: Globe,
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    skills: ["Microsoft Azure", "Apache Spark", "Serverless Architecture", "Linux Systems", "NAS Self-Hosting", "VPN Networks"],
  },
  {
    category: "Core Languages",
    icon: Code2,
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/30",
    skills: ["Python", "Swift", "TypeScript", "JavaScript", "C++"],
  },
];

const categoryFilters = ["All", "AI & ML", "Apple & Spatial", "Cloud & Infra", "IoT & Edge"];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sooryasendilnath@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "AI & ML") {
      return project.category.some((c) =>
        ["Machine Learning", "AI Education Platform", "Computer Vision", "AI"].includes(c)
      );
    }
    if (activeFilter === "Apple & Spatial") {
      return project.category.some((c) =>
        ["Spatial Computing", "Apple Ecosystem", "Local AI"].includes(c)
      );
    }
    if (activeFilter === "Cloud & Infra") {
      return project.category.some((c) =>
        ["Cloud Engineering", "Infrastructure", "Azure", "Networking"].includes(c)
      );
    }
    if (activeFilter === "IoT & Edge") {
      return project.category.some((c) =>
        ["IoT", "Edge Computing", "Hardware"].includes(c)
      );
    }
    return true;
  });

  return (
    <main className="flex-1 flex flex-col items-center w-full min-h-screen relative pt-32 pb-24 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-20 pt-6 pb-20">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full liquid-glass-pill text-xs font-mono tracking-wide text-zinc-300 mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>AVAILABLE FOR AI SYSTEMS ENGINEERING & SPATIAL COMPUTING</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white leading-[1.05] max-w-5xl text-balance mb-8"
        >
          Engineering <br className="hidden sm:inline" />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-purple-300">
            Intelligent Systems
          </span>{" "}
          & Spatial Interfaces.
        </motion.h1>

        {/* Subtitle with Real Credentials */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl text-zinc-400 max-w-3xl leading-relaxed font-light mb-10 text-balance"
        >
          Hi, I&apos;m <span className="text-zinc-100 font-medium">Soorya Sendilnath</span> — B.Tech CSE (IoT) from SRM Institute of Science & Technology. I architect high-performance on-device AI models, spatial vision assistants, and resilient cloud-edge data pipelines.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full max-w-md"
        >
          <a
            href="#projects"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-100 transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-xl shadow-white/10"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full liquid-glass-card text-zinc-200 font-medium text-sm hover:text-white transition-all duration-200 hover:scale-[1.02] active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-3.5 rounded-full liquid-glass-card text-zinc-300 hover:text-white transition-all hover:scale-105 active:scale-95"
            title="Download Resume"
          >
            <Download className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Telemetry Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-16 pt-12 border-t border-white/5"
        >
          <div className="p-4 rounded-2xl liquid-glass-card text-left">
            <div className="text-2xl sm:text-3xl font-serif font-semibold text-cyan-400">11</div>
            <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mt-1">
              Production & Lab Projects
            </div>
          </div>
          <div className="p-4 rounded-2xl liquid-glass-card text-left">
            <div className="text-2xl sm:text-3xl font-serif font-semibold text-indigo-400">86.6%</div>
            <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mt-1">
              Azure Vision mAP Accuracy
            </div>
          </div>
          <div className="p-4 rounded-2xl liquid-glass-card text-left">
            <div className="text-2xl sm:text-3xl font-serif font-semibold text-purple-400">&lt;10ms</div>
            <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mt-1">
              5G Edge URLLC Latency
            </div>
          </div>
          <div className="p-4 rounded-2xl liquid-glass-card text-left">
            <div className="text-2xl sm:text-3xl font-serif font-semibold text-emerald-400">2x</div>
            <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mt-1">
              IBM Certified Specialist
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. INTERACTIVE LIQUID GLASS BENTO GRID */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-20 mb-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-2">
              System Highlights
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
              Pillars of Architectural Engineering
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Bridging native Apple Silicon silicon computation with hyper-scale distributed cloud pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento 1: Spatial & Local AI (Large) */}
          <div className="md:col-span-2 rounded-3xl liquid-glass-card p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-cyan-500/20 transition-all duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  FLAGSHIP INITIATIVE
                </span>
                <span className="text-xs font-mono text-zinc-400">2026</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-3">
                JarvisGemma &amp; WhisperKit
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl font-light mb-6">
                On-device spatial computing assistant using local computer vision and LLMs. Built with SwiftUI, CoreML, and Apple MLX for zero-latency, private sensory cognition.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded-md bg-white/5">Spatial Computing</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5">MLX</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5">CoreML</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5">SwiftUI</span>
              </div>
              <Link
                href="/project/jarvisgemma"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-transform"
              >
                <span>Read Architecture</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bento 2: Adaptive Education */}
          <div className="rounded-3xl liquid-glass-card p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -mr-10 -mt-10 group-hover:bg-purple-500/20 transition-all duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  AGENTIC AI
                </span>
                <span className="text-xs font-mono text-zinc-400">2026</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-white mb-2">
                SkillTree Platform
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-6">
                AI-powered adaptive learning ecosystem utilizing autonomous agents to dynamically curate curriculums based on student interaction telemetry.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Production Candidate</span>
              <Link
                href="/project/skilltree"
                className="inline-flex items-center gap-1 text-xs font-medium text-purple-400 hover:text-purple-300"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento 3: Weather Analytics & ML */}
          <div className="rounded-3xl liquid-glass-card p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-10 -mb-10 group-hover:bg-indigo-500/20 transition-all duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  DISTRIBUTED ML
                </span>
                <span className="text-xs font-mono text-zinc-400">2025</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-white mb-2">
                Weather Analytics
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-6">
                Distributed serverless pipeline integrating Apache Spark and LSTM neural networks for 7-day predictive forecasting and extreme anomaly detection.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Apache Spark + LSTM</span>
              <Link
                href="/project/weather-platform"
                className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300"
              >
                <span>Study Case</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento 4: Azure Road Safety & 5G Edge (Large) */}
          <div className="md:col-span-2 rounded-3xl liquid-glass-card p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-emerald-500/20 transition-all duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  AZURE COMPUTER VISION
                </span>
                <span className="text-xs font-mono text-zinc-400">Research &amp; Deployed</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-3">
                Azure Helmet Compliance &amp; 5G URLLC
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl font-light mb-6">
                Automated 24/7 road safety violation monitoring system achieving 86.6% mAP on live camera streams. Coupled with 5G edge computing research maintaining sub-10ms latency for real-time vehicular safety.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded-md bg-white/5">Azure Cognitive Services</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5">OpenCV</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5">5G URLLC</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5">86.6% mAP</span>
              </div>
              <Link
                href="/project/road-safety-monitoring"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1 transition-transform"
              >
                <span>Inspect Results</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPLETE FILTERABLE PROJECT DIRECTORY */}
      <section id="projects" className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-20 mb-28 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-2">
              Catalog of Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
              Selected Projects &amp; Systems
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full liquid-glass-pill max-w-full">
            {categoryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-white text-zinc-950 font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl liquid-glass-card p-6 flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/10">
                    {project.status}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">{project.year}</span>
                </div>

                <h3 className="text-xl font-serif text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light mb-6">
                  {project.shortDescription}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/project/${project.slug}`}
                  className="inline-flex items-center justify-between w-full pt-3 border-t border-white/5 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE CRAFT MATRIX (SKILLS & METHODOLOGY) */}
      <section id="craft" className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-20 mb-28 scroll-mt-24">
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-2">
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
            Craft &amp; Domain Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillClusters.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <div
                key={cluster.category}
                className="rounded-3xl liquid-glass-card p-8 relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${cluster.color} border ${cluster.border}`}>
                    <Icon className="w-5 h-5 text-zinc-100" />
                  </div>
                  <h3 className="text-xl font-serif text-white">{cluster.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cluster.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/5 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. EDUCATION & CERTIFICATIONS SPOTLIGHT */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-20 mb-28">
        <div className="rounded-3xl liquid-glass-card p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    Academic Foundation
                  </div>
                  <h3 className="text-xl font-serif text-white">SRM Institute of Science &amp; Technology</h3>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-base font-medium text-zinc-100">
                  B.Tech in Computer Science Engineering
                </div>
                <div className="text-xs font-mono text-cyan-400">
                  Specialization in Internet of Things (IoT)
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pt-2">
                  Focusing on embedded edge compute, distributed sensors, real-time networking protocols, and systems programming.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                  <Award className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    Industry Verification
                  </div>
                  <h3 className="text-xl font-serif text-white">IBM Professional Credentials</h3>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-zinc-100">IBM Cloud Certification</div>
                    <div className="text-xs text-zinc-400 font-mono">Cloud Native Systems &amp; Compute</div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    Verified
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-zinc-100">IBM Data Science Certification</div>
                    <div className="text-xs text-zinc-400 font-mono">Machine Learning, Analytics &amp; Pipelines</div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT & SOCIAL DOCK */}
      <section id="contact" className="w-full max-w-4xl mx-auto px-6 md:px-12 relative z-20 text-center mb-20 scroll-mt-24">
        <div className="rounded-3xl liquid-glass-card p-10 md:p-14 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 mx-auto flex items-center justify-center text-white text-xl font-bold shadow-xl mb-6">
              SS
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mb-4">
              Let&apos;s Build Together
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed font-light mb-8">
              Open to high-impact roles and engineering collaborations in AI Systems, Spatial Computing, Machine Learning, and Cloud-Edge Infrastructure.
            </p>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <a
                href="mailto:sooryasendilnath@gmail.com"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-zinc-950 font-medium text-xs sm:text-sm hover:bg-zinc-100 transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                <Mail className="w-4 h-4" />
                <span>sooryasendilnath@gmail.com</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full liquid-glass-card text-zinc-200 hover:text-white text-xs sm:text-sm transition-all hover:scale-105 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-mono">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* External Links Bar */}
            <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/5">
              <a
                href="https://github.com/Sooryaingithub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <span className="w-1 h-1 rounded-full bg-zinc-700" />

              <a
                href="https://www.linkedin.com/in/soorya-sendilnath/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <span className="w-1 h-1 rounded-full bg-zinc-700" />

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEMANTIC FOOTER */}
      <footer className="w-full max-w-6xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div>
          © {new Date().getFullYear()} Soorya Sendilnath · Chennai, India (IST GMT+5:30)
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>All Systems Operational · Built with Next.js &amp; Turbopack</span>
        </div>
      </footer>
    </main>
  );
}
