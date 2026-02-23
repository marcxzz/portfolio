export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="container relative z-10 py-32">
        <div className="max-w-3xl space-y-8">
          <p className="code-comment animate-fade-in-up">initializing portfolio...</p>

          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s", opacity: 1 }}
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Marco</span>
            <br />
            <span className="text-gradient">Angioni</span>
            <span className="text-foreground">.</span>
          </h1>

          <p
            className="text-lg text-secondary-foreground max-w-xl font-mono leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s", opacity: 1 }}
          >
            <span className="text-muted-foreground">{"{ "}</span>
            "front-end developer"
            <span className="text-muted-foreground">{", "}</span>
            "clean UIs lover"
            <span className="text-muted-foreground">{", "}</span>
            "UI/UX enthusiast"
            <span className="text-muted-foreground">{" }"}</span>
          </p>

          <div
            className="flex items-center gap-2 font-mono text-sm animate-fade-in-up"
            style={{ animationDelay: "0.3s", opacity: 1 }}
          >
            <span className="text-muted-foreground">const</span>
            <span className="text-accent">status</span>
            <span className="text-muted-foreground">=</span>
            <span className="text-primary">"available for work"</span>
            <span className="text-muted-foreground">;</span>
            <span className="terminal-cursor" />
          </div>

          <div
            className="flex gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 1 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary/30 bg-primary/10 text-primary font-mono text-sm transition-all hover:bg-primary/20 hover:shadow-[var(--glow-primary)]"
            >
              {">"} view_projects()
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-secondary-foreground font-mono text-sm transition-all hover:border-accent/30 hover:text-accent"
            >
              {">"} contact_me()
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}