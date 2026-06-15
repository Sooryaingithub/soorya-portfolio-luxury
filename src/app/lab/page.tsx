import { ArrowUpRight, Beaker } from "lucide-react";

export default function Lab() {
  const areas = [
    "Local AI",
    "Spatial Computing",
    "On-Device Inference",
    "Quantization",
    "Apple Foundation Models",
    "Vision-Language Models",
    "Agentic Systems"
  ];

  return (
    <main className="flex-1 flex flex-col min-h-[100dvh] px-4 pt-32 pb-24 relative max-w-5xl mx-auto w-full">
      <div className="mb-16">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-6">
          <Beaker className="w-6 h-6" />
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">
          Research & Experiments
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A collection of ongoing explorations, prototypes, and technical research defining the edge of spatial and local intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.map((area, idx) => (
          <div key={idx} className="group glass-panel p-6 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150" />
            
            <h3 className="text-xl font-medium tracking-tight mt-auto pt-12">{area}</h3>
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-5 h-5 text-white/40" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
