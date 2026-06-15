"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "lucide-react";
import { projects } from "@/data/projects";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!open) return null;

  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Projects", url: "/projects" },
    { name: "Skills", url: "/skills" },
    { name: "Timeline", url: "/timeline" },
    { name: "Lab", url: "/lab" },
    { name: "Now", url: "/now" },
    { name: "Contact", url: "/contact" },
  ];

  const filteredLinks = links.filter(l => l.name.toLowerCase().includes(query.toLowerCase()));
  const filteredProjects = projects.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));

  const handleNavigate = (url: string) => {
    setOpen(false);
    setQuery("");
    router.push(url);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-[20vh] px-4" onClick={() => setOpen(false)}>
      <div 
        className="w-full max-w-xl glass-panel shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 border-b border-white/10">
          <Command className="w-5 h-5 text-foreground/40 mr-3" />
          <input
            autoFocus
            className="flex-1 bg-transparent border-none outline-none py-4 text-lg text-white placeholder:text-foreground/30"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="text-xs text-foreground/30 font-mono bg-foreground/5 px-2 py-1 rounded">ESC</div>
        </div>

        <div className="max-h-[300px] overflow-y-auto p-2">
          {filteredLinks.length > 0 && (
            <div className="mb-4">
              <h3 className="px-3 py-2 text-xs font-medium text-foreground/40 uppercase tracking-widest">Pages</h3>
              {filteredLinks.map((link) => (
                <button
                  key={link.url}
                  className="w-full text-left px-3 py-3 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 text-sm font-medium"
                  onClick={() => handleNavigate(link.url)}
                >
                  {link.name}
                </button>
              ))}
            </div>
          )}

          {filteredProjects.length > 0 && (
            <div>
              <h3 className="px-3 py-2 text-xs font-medium text-foreground/40 uppercase tracking-widest">Projects</h3>
              {filteredProjects.map((project) => (
                <button
                  key={project.id}
                  className="w-full text-left px-3 py-3 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between text-sm font-medium"
                  onClick={() => handleNavigate(`/project/${project.slug}`)}
                >
                  <span>{project.title}</span>
                  <span className="text-xs font-mono text-foreground/30">{project.status}</span>
                </button>
              ))}
            </div>
          )}
          
          {filteredLinks.length === 0 && filteredProjects.length === 0 && (
            <div className="py-8 text-center text-muted-foreground text-sm">
              No results found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
