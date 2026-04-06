import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog — Anup Thorat",
  description: "Writings on AI, ML, and building systems that work.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
          /blog
        </p>
        <h1
          className="text-4xl font-display font-bold tracking-tight mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Blog
        </h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Writing about AI engineering, system design, and the learning process.
        </p>
      </div>

      {posts.length === 0 ? (
        <div
          className="text-center py-16 border rounded-lg"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--bg-card)",
          }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            No posts yet. Check back soon.
          </p>
        </div>
      ) : (
        <div className="space-y-px">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-start gap-6 py-5 border-b transition-all"
              style={{ borderColor: "var(--border)" }}
            >
              <span
                className="text-xs shrink-0 w-24 mt-0.5"
                style={{ color: "var(--text-muted)" }}
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>

              <div className="flex-1 min-w-0">
                <h2
                  className="text-sm font-display font-semibold mb-1 group-hover:text-white transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {post.title}
                </h2>
                <p
                  className="text-xs leading-relaxed mb-2 line-clamp-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {post.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <span
                className="text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "var(--text-muted)" }}
              >
                →
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}