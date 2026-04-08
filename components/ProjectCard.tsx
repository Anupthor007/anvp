import { Project } from "@/data/profile";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <div
      className="card-hover p-6 md:p-8 rounded-xl border"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border)",
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3
          style={{
            fontFamily: "var(--syne)",
            fontWeight: 700,
            fontSize: "1.05rem",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            lineHeight: 1.3,
          }}
        >
          {project.name}
        </h3>
        <span
          className="shrink-0 ml-4 text-xs mt-0.5"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
        >
          #{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p
        className="mb-5 leading-relaxed"
        style={{ color: "var(--text-secondary)", fontSize: "14px" }}
      >
        {project.description}
      </p>

      <ul className="mb-5 space-y-2">
        {project.highlights.map((h, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5"
            style={{ color: "var(--text-muted)", fontSize: "13px" }}
          >
            <span style={{ color: "var(--green)", marginTop: "2px", flexShrink: 0 }}>›</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tech_stack.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
    </div>
  );
}