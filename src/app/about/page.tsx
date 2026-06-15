"use client";

import { motion } from "framer-motion";

const domains = [
  "Artificial Intelligence",
  "Machine Learning",
  "Spatial Computing",
  "Cloud Engineering",
  "Edge Computing",
  "Computer Vision",
  "Distributed Systems",
  "Apple Ecosystem Development",
  "Systems Engineering",
];

export default function About() {
  return (
    <main className="flex-1 flex flex-col items-center min-h-[100dvh] px-4 pt-32 pb-24 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter">
            Soorya Sendilnath
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
            <span>Chennai, Tamil Nadu, India</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a href="mailto:sooryasendilnath@gmail.com" className="hover:text-foreground transition-colors">
              sooryasendilnath@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-24"
        >
          <h2 className="text-xl md:text-2xl font-medium tracking-tight mb-6 text-foreground/60">
            Professional Philosophy
          </h2>
          <p className="text-2xl md:text-4xl leading-tight font-medium tracking-tight text-balance">
            Build scalable, privacy-focused intelligent systems that operate efficiently across cloud, edge, and local environments.
          </p>
        </motion.div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-sm font-medium tracking-wide uppercase text-foreground/40 mb-6">Education</h3>
              <div className="glass-panel p-6">
                <h4 className="text-lg font-medium">B.Tech Computer Science Engineering</h4>
                <p className="text-muted-foreground mt-1">Specialization in Internet of Things</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium tracking-wide uppercase text-foreground/40 mb-6">Certifications</h3>
              <div className="space-y-4">
                <div className="glass-panel p-6">
                  <h4 className="text-lg font-medium">IBM Cloud Certification</h4>
                </div>
                <div className="glass-panel p-6">
                  <h4 className="text-lg font-medium">IBM Data Science Certification</h4>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-sm font-medium tracking-wide uppercase text-foreground/40 mb-6">Core Domains</h3>
            <div className="flex flex-col gap-3">
              {domains.map((domain, i) => (
                <div key={domain} className="group flex items-center gap-4 py-3 border-b border-white/5">
                  <span className="text-foreground/20 text-xs font-mono">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg tracking-tight group-hover:translate-x-2 transition-transform">{domain}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
