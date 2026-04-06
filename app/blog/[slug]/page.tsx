import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
 
interface Props {
  params: { slug: string };
}
 
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
 
export async function generateMetadata({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Anup Thorat`,
    description: post.description,
  };
}
 
export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
 
  if (!post) notFound();
 
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="text-xs inline-flex items-center gap-1 mb-10 transition-colors"
        style={{ color: "var(--text-muted)" }}
      >
        ← back to blog
      </Link>
 
      <header className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
 
        <h1
          className="text-4xl font-display font-bold tracking-tight mb-4 leading-tight"
          style={{ color: "var(--text-primary)" }}
        >
          {post.title}
        </h1>
 
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>
 
      <hr style={{ borderColor: "var(--border)" }} className="mb-10" />
 
      <article
        className="prose-dark"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
 
      <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
        <Link
          href="/blog"
          className="text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          ← all posts
        </Link>
      </div>
    </div>
  );
}
 
