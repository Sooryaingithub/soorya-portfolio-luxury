"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Command } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Spaces" },
  { href: "/skills", label: "Craft" },
  { href: "/timeline", label: "Timeline" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-8 inset-x-0 mx-auto z-50 flex justify-center px-4"
    >
      <nav className="glass-panel flex items-center px-6 py-3 gap-4 max-w-2xl w-full justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
        <div className="flex items-center gap-1 sm:gap-3">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-500 ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-x-4 -bottom-1 h-[1px] bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-muted-foreground bg-foreground/5 hover:bg-foreground/10 rounded-none transition-colors border border-foreground/10">
            <Command className="w-3 h-3" />
            <span>K</span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
