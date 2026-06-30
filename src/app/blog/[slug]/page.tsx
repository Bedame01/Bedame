import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blog";
import { FadeIn } from "@/components/ui/FadeIn";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="section-padding min-h-screen">
      <div className="container-wide max-w-3xl">
        <FadeIn>
          <Link href="/blog" className="text-sm text-muted link-hover mb-12 inline-block">
            ← Back to Journal
          </Link>
          <p className="text-sm text-muted mb-6">( {post.date} )</p>
          <h1 className="heading-lg mb-8">{post.title}</h1>
          <p className="text-muted text-lg mb-12">{post.excerpt}</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-6 text-muted leading-relaxed text-lg border-t border-border pt-12">
            {post.content.map((para) => (
              <p key={para.slice(0, 30)}>{para}</p>
            ))}
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
