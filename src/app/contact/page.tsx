"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { siteConfig } from "@/data/site";
import { FadeIn } from "@/components/ui/FadeIn";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your message right now.");
      }

      setSubmitted(true);
      setFormData(initialFormState);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding min-h-screen flex flex-col justify-center">
      <div className="container-wide">
        <FadeIn>
          <h1 className="title text-display mb-2">Let&apos;s</h1>
          <h1 className="title text-display text-muted mb-14 md:mb-22">Create</h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <FadeIn delay={0.1}>
            <p className="text-foreground text-lg leading-relaxed mb-8">
              Have a project in mind? We&apos;d love to hear about it. Send us a
              message and we&apos;ll get back to you within 24 hours.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-mono text-2xl! md:text-3xl! font-semibold hover:text-muted underline link-hover"
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
                <p className="text-display text-3xl! uppercase font-medium mb-3">Thank you!</p>
                <p className="text-muted">We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm text-foreground font-bold block mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-foreground font-bold block mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-foreground transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm text-foreground font-bold block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border border-border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                {errorMessage ? (
                  <p className="text-sm text-red-500">{errorMessage}</p>
                ) : null}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
