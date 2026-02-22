import { PROJECTS } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const statusColors = {
  live: "bg-primary/20 text-primary border-primary/30",
  "in-development": "bg-accent/20 text-accent border-accent/30",
  archived: "bg-muted text-muted-foreground border-muted-foreground/30",
};

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32">
      <div className="container">
        <div className="mb-16 space-y-4">
          <p className="code-comment">featured work</p>
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="text-primary">{"{ "}</span> Projects
            <span className="text-primary">{" }"}</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm max-w-lg">
            {/* A curated selection of projects spanning full-stack development,
            creative coding, and developer tools. */}
            A curated selection of projects I like the most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="group relative block rounded-lg border border-border bg-card p-6 translate-y-0 transition-all duration-500 hover:border-primary/30 hover:shadow-(--glow-primary)"
              style={{
                // transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono border ${statusColors[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-accent mb-3">
                {project.subtitle}
              </p>
              <p className="text-sm text-secondary-foreground leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-1 rounded-sm bg-secondary text-secondary-foreground font-mono text-xs border border-border"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 5 && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-muted-foreground font-mono text-xs">
                    +{project.techStack.length - 5} {/* TODO: change this */}
                  </span>
                )}
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 font-mono text-sm opacity-0 group-hover:opacity-100">
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
