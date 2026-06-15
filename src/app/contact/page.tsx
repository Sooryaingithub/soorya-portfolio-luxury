import { Copy, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-[100dvh] px-4 pt-32 pb-24 relative w-full">
      <div className="max-w-2xl w-full text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">
          Let's Build Something
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-balance">
          Open to opportunities in AI Engineering, Spatial Computing, Machine Learning, Cloud Engineering, and Systems Engineering.
        </p>
      </div>

      <div className="w-full max-w-xl glass-panel p-8 md:p-12">
        <div className="flex flex-col items-center gap-8">
          
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary/20 to-white/5 border border-foreground/10 flex items-center justify-center shadow-xl mb-4">
            <span className="text-3xl font-medium">SS</span>
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">Soorya Sendilnath</h2>
            <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
          </div>

          <div className="w-full h-px bg-foreground/5" />

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a href="mailto:sooryasendilnath@gmail.com" className="flex-1 flex items-center justify-center gap-3 glass-panel py-4 px-6 hover:bg-foreground/10 transition-colors group">
              <Mail className="w-5 h-5 text-foreground/50 group-hover:text-foreground" />
              <span className="font-medium">Email</span>
            </a>
            
            <a href="https://www.linkedin.com/in/soorya-sendilnath/" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-3 glass-panel py-4 px-6 hover:bg-foreground/10 transition-colors group">
              <Linkedin className="w-5 h-5 text-foreground/50 group-hover:text-foreground" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a href="https://github.com/Sooryaingithub" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-3 glass-panel py-4 px-6 hover:bg-foreground/10 transition-colors group">
              <Github className="w-5 h-5 text-foreground/50 group-hover:text-foreground" />
              <span className="font-medium">GitHub</span>
            </a>
            
            <a href="/resume.pdf" target="_blank" className="flex-1 flex items-center justify-center gap-3 bg-foreground text-background rounded-2xl py-4 px-6 hover:scale-[1.02] active:scale-95 transition-transform group">
              <Download className="w-5 h-5" />
              <span className="font-medium">Resume</span>
            </a>
          </div>

          <div className="w-full flex items-center justify-center pt-8">
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors" onClick={() => navigator.clipboard.writeText('sooryasendilnath@gmail.com')}>
              <Copy className="w-4 h-4" />
              Copy Email Address
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
