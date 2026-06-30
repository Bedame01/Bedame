import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <section className="section-padding min-h-screen">
      <div className="container-wide">
        <FadeIn>
          <h1 className="heading-xl mb-8">Journal</h1>
          <p className="text-muted text-lg max-w-xl mb-16 md:mb-24">
            Explore insights, tips, and trends to elevate your brand.
          </p>
        </FadeIn>

        <div className="space-y-0">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block border-t border-border py-8 md:py-10"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="max-w-2xl">
                    <p className="text-sm text-muted mb-3">( {post.date} )</p>
                    <h2 className="text-display text-xl md:text-2xl font-medium group-hover:opacity-60 transition-opacity mb-3">
                      {post.title}
                    </h2>
                    <p className="text-muted text-sm md:text-base">{post.excerpt}</p>
                  </div>
                  <span className="text-muted text-sm shrink-0">→</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
