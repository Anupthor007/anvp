import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer
      className="border-t mt-24"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p style={{ color: "var(--text-muted)", fontSize: "13px" }}>
          © {new Date().getFullYear()} {profile.name} — Built with Next.js
        </p>
        <div className="flex items-center gap-6">
          <a
            href={profile.social_links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
            style={{ color: "var(--text-muted)", fontSize: "13px" }}
          >
            github
          </a>
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
      </div>
    </footer>
  );
}