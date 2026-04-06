import { profile } from "@/data/profile";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects — Anup Thorat",
  description: "AI and ML projects built by Anup Thorat",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
          /projects
        </p>
        <h1
          className="text-4xl font-display font-bold tracking-tight mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Projects
        </h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Things I&apos;ve built — from AI agents to full-stack applications.
        </p>
      </div>

      <div className="grid gap-4">
        {profile.projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}