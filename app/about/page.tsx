import { profile } from "@/data/profile";

export const metadata = {
  title: "About — Anup Thorat",
  description: "About Anup Thorat — AI Engineer",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">
      <div>
        <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
          /about
        </p>
        <h1
          className="text-4xl font-display font-bold tracking-tight mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          About Me
        </h1>

        <div className="space-y-4">
          {profile.long_bio.split("\n\n").map((para, i) => (
            <p key={i} className="text-sm leading-loose" style={{ color: "var(--text-secondary)" }}>
              {para}
            </p>
          ))}
        </div>
      </div>

      <section>
        <h2
          className="text-xl font-display font-bold mb-5"
          style={{ color: "var(--text-primary)" }}
        >
          Education
        </h2>
        <div
          className="p-6 rounded-lg border"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p
                className="font-display font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {profile.education.degree}
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
                {profile.education.institution}
              </p>
            </div>
            <span className="text-xs shrink-0 ml-4" style={{ color: "var(--text-muted)" }}>
              {profile.education.duration}
            </span>
          </div>
        </div>
      </section>

      <section>
        <h2
          className="text-xl font-display font-bold mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          Skills
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
              className="p-5 rounded-lg border"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              <p className="text-xs font-medium mb-3" style={{ color: "var(--text-muted)" }}>
                {label}
              </p>
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
    </div>
  );
}