"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/site";

// import CustomButton from "@/components/kokonutui/CustomButton/CustomButton";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', ...form }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess('Message sent — thank you!');
        setForm({ name: "", email: "", subject: "", message: "" });
        // auto-clear success notice
        setTimeout(() => setSuccess(null), 6000);
      } else {
        setError(data?.error || 'Something went wrong');
        setTimeout(() => setError(null), 6000);
      }
    } catch (err) {
      setError('Network error');
      setTimeout(() => setError(null), 6000);
    } finally {
      setLoading(false);
    }
  }

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subLoading, setSubLoading] = useState(false);
  const [subSuccess, setSubSuccess] = useState<string | null>(null);
  const [subError, setSubError] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (subscribed) return;
    setSubLoading(true);
    setSubSuccess(null);
    setSubError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'subscribe', email: newsletterEmail }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubSuccess('Subscribed — thanks!');
        setSubscribed(true);
        setNewsletterEmail('');
        setTimeout(() => setSubSuccess(null), 6000);
      } else {
        setSubError(data?.error || 'Subscription failed');
        setTimeout(() => setSubError(null), 6000);
      }
    } catch (err) {
      setSubError('Network error');
      setTimeout(() => setSubError(null), 6000);
    } finally {
      setSubLoading(false);
    }
  }

  return (
    <section className="section-padding border-t border-border">
      <div className="container-wide max-w-3xl mx-auto">
        <FadeIn>
          <SectionLabel>Contact</SectionLabel>
          <p className="text-sm text-muted mb-2">(05)</p>
          <h2 className="title tracking-tight! textDisplay mb-4">Get in touch</h2>
          <p className="text-foreground font-medium max-w-xl md:max-w-4xl text-xl/7 md:text-3xl! lg:text-4xl/12! mb-12 lg:mb-20">Have a project or just want to say hi? Send a message or subscribe to our newsletter.</p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-foreground font-semibold block mb-2">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full bg-transparent border border-border rounded-lg px-5 py-3 text-foreground" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-foreground font-semibold block mb-2">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full bg-transparent border border-border rounded-lg px-5 py-3 text-foreground" placeholder="you@email.com" />
              </div>
              <div>
                <label className="text-sm text-foreground font-semibold block mb-2">Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} className="w-full bg-transparent border border-border rounded-lg px-5 py-3 text-foreground" placeholder="Subject (optional)" />
              </div>
              <div>
                <label className="text-sm text-foreground font-semibold block mb-2">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={6} className="w-full bg-transparent border border-border rounded-lg px-5 py-3 text-foreground resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <div className="flex items-center gap-4">
                <button type="submit" disabled={loading} className="px-7 py-3 hover:bg-foreground/70 bg-foreground text-background font-medium transition-all cursor-pointer">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                {success && <p className="text-sm text-green-500">{success}</p>}
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>
            </form>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="p-6 border border-border rounded-2xl bg-card h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Subscribe to <span className="font-mono uppercase">newsletter.</span></h3>
                <p className="text-muted mb-6">Join the newsletter to get updates and exclusive content.</p>

                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <input type="email" required value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} placeholder="you@email.com" className="flex-1 bg-transparent border font-medium border-border rounded-xl px-4 py-2" />
                                  <button type="submit" disabled={subLoading || subscribed} className="px-4 py-2 rounded-full bg-foreground text-background">
                                    {subscribed ? 'Subscribed' : subLoading ? '...' : 'Subscribe'}
                  </button>
                </form>
                                {subSuccess && <p className="text-sm text-green-500 mt-3">{subSuccess}</p>}
                                {subError && <p className="text-sm text-red-500 mt-3">{subError}</p> }
              </div>

              <div className="mt-6 text-sm text-muted">
                <p className="font-serif italic text-foreground">Contact email:</p>
                <a className="link-hover font-mono font-semibold underline text-foreground text-base" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                <div className="mt-4">
                  <p className="text-sm text-foreground uppercase font-semibold">Follow Me:</p>
                  <div className="flex gap-4 mt-2">
                    {siteConfig.socials.map(s => (
                      <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-sm text-muted">{s.label}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
