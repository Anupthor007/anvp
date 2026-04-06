import { Project } from "@/data/profile";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <div
      className="group p-6 rounded-lg border transition-all duration-300"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border)",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3
          className="font-display font-semibold text-base leading-tight"
          style={{ color: "var(--text-primary)" }}
        >
          {project.name}
        </h3>
        <span
          className="text-xs ml-4 mt-0.5 shrink-0"
          style={{ color: "var(--text-muted)" }}
        >
          #{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-xs leading-relaxed mb-4"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="mb-4 space-y-1">
        {project.highlights.map((h, i) => (
          <li
            key={i}
            className="text-xs flex items-start gap-2"
            style={{ color: "var(--text-muted)" }}
          >
            <span style={{ color: "var(--green)" }} className="mt-0.5 shrink-0">
              ›
            </span>
            {h}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech_stack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}