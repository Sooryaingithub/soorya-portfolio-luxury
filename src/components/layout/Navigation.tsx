"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, Command } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Craft & Stack" },
  { href: "/timeline", label: "Timeline" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 inset-x-0 mx-auto z-50 flex justify-center px-4 max-w-5xl w-full pointer-events-none"
    >
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto liquid-glass-card px-4 py-2.5 rounded-full flex items-center justify-between gap-2 sm:gap-6 w-full max-w-3xl shadow-2xl transition-all duration-300"
      >
        {/* Brand / Monogram */}
        <Link
          href="/"
          className="flex items-center gap-2.5 px-2 py-1 group transition-transform active:scale-95"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold tracking-tight shadow-md">
            S
          </div>
          <span className="hidden sm:inline text-xs font-mono font-medium tracking-wider uppercase text-foreground/90 group-hover:text-cyan-400 transition-colors">
            SOORYA
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-300 rounded-full ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-400/30 -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open command palette"
            onClick={() => {
              window.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
              );
            }}
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-zinc-400 hover:text-zinc-200 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 transition-colors"
          >
            <Command className="w-3 h-3" />
            <span>K</span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
