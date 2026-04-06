import Link from "next/link";
import { profile } from "@/data/profile";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featuredProjects = profile.projects.filter((p) => p.featured);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-24">
      {/* ── HERO ── */}
      <section className="space-y-6">
        {/* Status badge */}
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--green)" }}
          />
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            open to opportunities
          </span>
        </div>

        <div className="fade-up">
          <h1
            className="text-5xl font-display font-bold tracking-tight mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            {profile.name}
          </h1>
          <p
            className="text-lg font-display font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            {profile.title}
          </p>
        </div>

        <p
          className="text-sm leading-loose max-w-xl fade-up fade-up-delay-1"
          style={{ color: "var(--text-secondary)" }}
        >
          {profile.short_bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 fade-up fade-up-delay-2">
          <Link
            href="/projects"
            className="px-5 py-2.5 text-xs font-medium rounded border transition-all duration-200"
            style={{
              backgroundColor: "var(--text-primary)",
              color: "var(--bg)",
              borderColor: "var(--text-primary)",
            }}
          >
            View Projects →
          </Link>
          <Link
            href="/blog"
            className="px-5 py-2.5 text-xs font-medium rounded border transition-all duration-200"
            style={{
              backgroundColor: "transparent",
              color: "var(--text-secondary)",
              borderColor: "var(--border)",
            }}
          >
            Read Blog
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 text-xs font-medium rounded border transition-all duration-200"
            style={{
              backgroundColor: "transparent",
              color: "var(--text-secondary)",
              borderColor: "var(--border)",
            }}
          >
            Contact
          </Link>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4 fade-up fade-up-delay-3">
          <a
            href={profile.social_links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs link-underline"
            style={{ color: "var(--text-muted)" }}
          >
            github
          </a>
          <span style={{ color: "var(--border)" }}>·</span>
          <a
            href={profile.social_links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs link-underline"
            style={{ color: "var(--text-muted)" }}
          >
            linkedin
          </a>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-xl font-display font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            all projects →
          </Link>
        </div>

        <div className="grid gap-4">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section>
        <h2
          className="text-xl font-display font-bold mb-8"
          style={{ color: "var(--text-primary)" }}
        >
          Skills & Tools
        </h2>

        <div className="space-y-5">
          {[
            { label: "AI / ML", items: profile.skills.ai_ml },
            { label: "Programming", items: profile.skills.programming },
            { label: "Frameworks", items: profile.skills.frameworks },
            { label: "Tools", items: profile.skills.tools },
          ].map(({ label, items }) => (
            <div key={label} className="flex gap-4 items-start">
              <span
                className="text-xs w-28 shrink-0 mt-1"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </span>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section>
        <h2
          className="text-xl font-display font-bold mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          Education
        </h2>
        <div
          className="p-5 rounded-lg border"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <p
            className="font-display font-semibold text-sm"
            style={{ color: "var(--text-primary)" }}
          >
            {profile.education.degree}
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
            {profile.education.institution}
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
            {profile.education.duration}
          </p>
        </div>
      </section>
    </div>
  );
}