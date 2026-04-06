import { profile } from "@/data/profile";

export const metadata = {
  title: "Contact — Anup Thorat",
  description: "Get in touch with Anup Thorat",
};

const contactLinks = [
  {
    label: "GitHub",
    handle: "@Anupthor007",
    description: "See my code and open source work",
    href: profile.social_links.github,
    icon: "gh",
  },
  {
    label: "LinkedIn",
    handle: "anup-thorat",
    description: "Connect professionally",
    href: profile.social_links.linkedin,
    icon: "in",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
          /contact
        </p>
        <h1
          className="text-4xl font-display font-bold tracking-tight mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Get in Touch
        </h1>
        <p className="text-sm max-w-md" style={{ color: "var(--text-secondary)" }}>
          Open to AI engineering roles, freelance projects, and interesting
          conversations. Reach out through any of the links below.
        </p>
      </div>

      <div className="space-y-3 mb-16">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-5 rounded-lg border transition-all duration-200 hover:border-zinc-600"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <div
              className="w-9 h-9 rounded flex items-center justify-center shrink-0 text-xs font-display font-bold"
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              {link.icon}
            </div>

            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-display font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {link.label}
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                {link.handle} — {link.description}
              </p>
            </div>

            <span
              className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: "var(--text-muted)" }}
            >
              →
            </span>
          </a>
        ))}
      </div>

      <p className="text-xs" style={{ color: "var(--text-muted)" }}>
        Response time:{" "}
        <span style={{ color: "var(--text-secondary)" }}>within 24–48 hours</span>
      </p>
    </div>
  );
}