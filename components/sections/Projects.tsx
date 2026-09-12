import { Github, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-6 sm:p-8 ${
        project.featured ? "sm:col-span-2" : ""
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {project.type}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
            {project.name}
          </h3>
        </div>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Github size={18} />
          </a>
        )}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
        {project.description}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted">Role</p>
          <p className="mt-1 text-foreground">{project.role}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted">
            Status
          </p>
          <p className="mt-1 text-foreground">{project.status}</p>
        </div>
      </div>

      {project.technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} tone="info">
              {tech}
            </Badge>
          ))}
        </div>
      )}

          <a
        
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          View demo <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Projects"
          title="What I've built"
          description="A mix of independent builds and team-based competition work."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}