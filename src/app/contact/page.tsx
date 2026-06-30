"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding min-h-screen flex flex-col justify-center">
      <div className="container-wide">
        <FadeIn>
          <h1 className="heading-xl mb-2">Let&apos;s</h1>
          <h1 className="heading-xl text-muted mb-16 md:mb-24">Create</h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <FadeIn delay={0.1}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Have a project in mind? We&apos;d love to hear about it. Send us a
              message and we&apos;ll get back to you within 24 hours.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-display text-2xl md:text-3xl font-medium link-hover"
            >
              {siteConfig.email}
            </a>
            <div className="flex gap-6 mt-12">
              {siteConfig.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted link-hover"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {submitted ? (
              <div className="border border-border rounded-2xl p-10 bg-card text-center">
                <p className="text-display text-2xl font-medium mb-4">Thank you!</p>
                <p className="text-muted">We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm text-muted block mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border border-border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-muted block mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-transparent border border-border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-foreground transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm text-muted block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-transparent border border-border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
