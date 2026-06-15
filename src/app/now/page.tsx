export default function Now() {
  return (
    <main className="flex-1 flex flex-col min-h-[100dvh] px-4 pt-32 pb-24 relative max-w-4xl mx-auto w-full">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Updated June 2026
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">
          Now
        </h1>
        <p className="text-lg text-muted-foreground">
          What I'm focused on right now.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-foreground/40 mb-6">Current Focus</h2>
          <div className="glass-panel p-6 md:p-8 text-lg leading-relaxed">
            I am currently heavily invested in building out robust, privacy-first local AI architectures that operate efficiently on edge devices, particularly within the Apple ecosystem using MLX and CoreML.
          </div>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-foreground/40 mb-6">Technologies Being Explored</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["MLX Swift", "Gemma 2", "Vision-Language Models", "WebGPU"].map(tech => (
              <div key={tech} className="glass-panel p-4 flex items-center justify-center text-center">
                <span className="font-medium text-foreground/80">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-foreground/40 mb-6">Current Projects</h2>
          <div className="glass-panel p-6 md:p-8">
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h3 className="font-semibold text-lg">SkillTree Evolution</h3>
                  <p className="text-muted-foreground">Scaling the platform to handle more complex, branching logic paths for multi-modal learning.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h3 className="font-semibold text-lg">JarvisGemma Optimization</h3>
                  <p className="text-muted-foreground">Reducing memory footprint and increasing frames per second for real-time spatial vision tasks.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
