const categories = [
  {
    label: "frontend",
    icon: "◈",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"],
  },
  {
    label: "backend",
    icon: "◆",
    items: ["Node.js", "Python", "Go", "FastAPI", "Express", "GraphQL"],
  },
  {
    label: "database",
    icon: "◇",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Supabase"],
  },
  {
    label: "devops & tools",
    icon: "⬡",
    items: ["Docker", "Kubernetes", "Git", "CI/CD", "AWS", "Vercel"],
  },
];

export function TechStackSection() {
  const isVisible = true

  return (
    <section id="stack" className="relative py-32 border-t border-border">
      <div className="container">
        <div className="mb-16 space-y-4">
          <p className="code-comment">what i work with</p>
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="text-primary">import</span> {"{ "}
            <span className="text-foreground">Stack</span>
            {" }"} <span className="text-primary">from</span>{" "}
            <span className="text-accent">"@/skills"</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, catIndex) => (
            <div
              key={cat.label}
              className={`rounded-lg border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-[var(--glow-primary)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-primary text-lg">{cat.icon}</span>
                <h3 className="font-mono text-sm text-muted-foreground">
                  <span className="text-primary/60">// </span>
                  {cat.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1.5 rounded-sm bg-secondary text-secondary-foreground font-mono text-xs border border-border hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}