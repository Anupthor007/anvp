import Link from "next/link";
import { Inter } from "next/font/google";
import { profile } from "@/data/profile";
import ProjectCard from "@/components/ProjectCard";
import CommandSnippet from "@/components/CommandSnippet";
import TypedName from "@/components/TypedName";

const inter = Inter({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export default function Home() {
  const featuredProjects = profile.projects.filter((p) => p.featured);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-8 pb-20 md:pt-10 md:pb-28 space-y-32">

      {/* ── HERO ── */}
      <section className="space-y-8">
        {/* Status */}
        <div className="flex items-center gap-2 fade-up">
          <span
            className="pulse w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: "var(--green)" }}
          />
          <span style={{ color: "var(--text-muted)", fontSize: "13px" }}>
            open to opportunities
          </span>
        </div>

        {/* Name */}
        <div className="fade-up-1">
          <h1
            className={inter.className}
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "var(--text-primary)",
              marginBottom: "0.5rem",
            }}
          >
            <TypedName text={profile.name} />
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              fontFamily: "var(--syne)",
              fontWeight: 500,
              color: "var(--text-secondary)",
              letterSpacing: "-0.01em",
            }}
          >
            {profile.title}
          </p>

          <CommandSnippet
            helperText="Run this in your terminal to know more."
            command="npx anuppp"
          />
        </div>

        {/* Bio */}
        <p
          className="fade-up-2 max-w-xl"
          style={{
            color: "var(--text-secondary)",
            fontSize: "15px",
            lineHeight: 1.85,
          }}
        >
          {profile.short_bio}
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 fade-up-3">
          <Link
            href="/projects"
            className="btn-primary px-6 py-3 rounded-lg text-sm font-medium"
            style={{
              backgroundColor: "var(--text-primary)",
              color: "var(--bg)",
              textDecoration: "none",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            View Projects →
          </Link>
          <Link
            href="/blog"
            className="btn-secondary px-6 py-3 rounded-lg text-sm font-medium border"
            style={{
              backgroundColor: "transparent",
              color: "var(--text-secondary)",
              borderColor: "var(--border)",
              textDecoration: "none",
              fontFamily: "var(--font-display)",
              fontWeight: 500,
            }}
          >
            Read Blog
          </Link>
          <Link
            href="/contact"
            className="btn-secondary px-6 py-3 rounded-lg text-sm font-medium border"
            style={{
              backgroundColor: "transparent",
              color: "var(--text-secondary)",
              borderColor: "var(--border)",
              textDecoration: "none",
              fontFamily: "var(--font-display)",
              fontWeight: 500,
            }}
          >
            Contact
          </Link>
        </div>

        {/* Social */}
        <div className="flex items-center gap-5 fade-up-4">
          <a
            href={profile.social_links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
            style={{ color: "var(--text-muted)", fontSize: "13px" }}
          >
            github
          </a>
          <span style={{ color: "var(--border)" }}>·</span>
          <a
            href={profile.social_links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
            style={{ color: "var(--text-muted)", fontSize: "13px" }}
          >
            linkedin
          </a>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <h2
            style={{
              fontFamily: "var(--syne)",
              fontSize: "clamp(1.4rem, 3vw, 1.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
            }}
          >
            Featured Projects
          </h2>
          <Link
            href="/projects"
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            all projects →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-1">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section>
        <h2
          className="mb-10"
          style={{
            fontFamily: "var(--syne)",
            fontSize: "clamp(1.4rem, 3vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
          }}
        >
          Skills & Tools
        </h2>
        <div className="space-y-6">
          {[
            { label: "AI / ML", items: profile.skills.ai_ml },
            { label: "Programming", items: profile.skills.programming },
            { label: "Frameworks", items: profile.skills.frameworks },
            { label: "Tools", items: profile.skills.tools },
          ].map(({ label, items }) => (
            <div
              key={label}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:items-start"
            >
              <span
                className="shrink-0 sm:w-32 text-xs pt-1"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </span>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section>
        <h2
          className="mb-8"
          style={{
            fontFamily: "var(--syne)",
            fontSize: "clamp(1.4rem, 3vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
          }}
        >
          Education
        </h2>
        <div
          className="card-hover p-6 rounded-xl border"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <p
                style={{
                  fontFamily: "var(--syne)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                }}
              >
                {profile.education.degree}
              </p>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "4px" }}>
                {profile.education.institution}
              </p>
            </div>
            <span
              className="shrink-0 text-xs px-3 py-1 rounded border"
              style={{
                color: "var(--text-muted)",
                borderColor: "var(--border)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {profile.education.duration}
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}