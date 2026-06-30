import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  aboutProfile,
  aboutStats,
  aboutValues,
  aboutHighlights,
} from "@/data/about";
import { siteConfig } from "@/data/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { AboutPortrait } from "@/components/about/AboutPortrait";
import { StatCounter } from "@/components/about/StatCounter";
import { SocialCard } from "@/components/about/SocialCard";
import CustomButton from "@/components/kokonutui/CustomButton/CustomButton";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.brand} — freelance design and web development based in Lagos.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding min-h-[55vh] flex flex-col justify-end">
        <div className="container-wide">
          <FadeIn>
            <SectionLabel>About me</SectionLabel>
            <p className="text-sm text-muted mb-2">(01)</p>
            <h1 className="title2 textDisplay mb-4 uppercase">About</h1>
            <h1 className="title2 textDisplay text-muted mb-8 uppercase -mt-2 md:-mt-6">
              {siteConfig.name}
            </h1>
            <p className="desc">{aboutProfile.tagline}</p>
          </FadeIn>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn className="order-2 lg:order-1">
              <p className="text-xs uppercase tracking-widest text-muted mb-4">
                {aboutProfile.role}
              </p>
              <h2 className="heading-lg uppercase mb-2">{aboutProfile.title}</h2>
              <h2 className="heading-lg text-muted uppercase mb-8">
                {aboutProfile.subtitle}
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">{aboutProfile.bio}</p>
              <p className="text-muted leading-relaxed mb-8">{aboutProfile.extendedBio}</p>

              <div className="flex flex-wrap gap-2 mb-10">
                {aboutProfile.focusAreas.map((area, i) => (
                  <FadeIn key={area} delay={i * 0.05}>
                    <span className="text-xs px-3 py-1.5 rounded-full border border-border text-muted bg-card transition-colors hover:border-foreground/20">
                      {area}
                    </span>
                  </FadeIn>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
                <div className="flex items-center gap-2 text-muted">
                  <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  <span>{siteConfig.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  <a href={`mailto:${siteConfig.email}`} className="link-hover text-foreground">
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="link-hover text-foreground">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </FadeIn>

            <div className="order-1 lg:order-2">
              <AboutPortrait />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding border-t border-border bg-card/40">
        <div className="container-wide">
          <FadeIn>
            <SectionLabel>By the numbers</SectionLabel>
            <p className="text-sm text-muted mb-2">(02)</p>
            <h2 className="heading-lg uppercase mb-3">What I&apos;ve</h2>
            <h2 className="heading-lg text-muted uppercase mb-12 md:mb-16">Built so far</h2>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {aboutStats.map((stat, i) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <FadeIn>
            <SectionLabel>Philosophy</SectionLabel>
            <p className="text-sm text-muted mb-2">(03)</p>
            <h2 className="heading-lg uppercase mb-3">How I</h2>
            <h2 className="heading-lg text-muted uppercase mb-6 md:mb-10">Approach work</h2>
            <p className="desc mb-12 lg:mb-20">
              Good design isn&apos;t just how something looks — it&apos;s how clearly it
              communicates and how smoothly it works for the people using it.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
            {aboutValues.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="group border border-border rounded-2xl p-8 md:p-10 h-full bg-card hover:border-foreground/20 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-display text-3xl! md:text-4xl! uppercase font-medium leading-none mb-1">
                    {value.title}
                  </h3>
                  <h3 className="text-display text-3xl! md:text-4xl! uppercase font-medium text-muted leading-none mb-6">
                    {value.subtitle}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <FadeIn>
            <SectionLabel>Journey</SectionLabel>
            <p className="text-sm text-muted mb-2">(04)</p>
            <h2 className="heading-lg uppercase mb-12 md:mb-16">My path so far</h2>
          </FadeIn>

          <div className="relative">
            <div
              className="hidden md:block absolute left-[7.5rem] top-0 bottom-0 w-px bg-border"
              aria-hidden
            />
            <div className="space-y-6 md:space-y-8">
              {aboutHighlights.map((item, i) => (
                <FadeIn key={item.year + item.title} delay={i * 0.1}>
                  <div className="group grid grid-cols-1 md:grid-cols-[7.5rem_1fr] gap-4 md:gap-10 items-start">
                    <div className="flex md:flex-col md:items-end gap-3 md:gap-2">
                      <span className="text-display text-2xl! font-medium tabular-nums">
                        {item.year}
                      </span>
                      <span className="hidden md:block h-3 w-3 rounded-full border-2 border-foreground bg-background relative z-10 transition-transform duration-300 group-hover:scale-125" />
                    </div>
                    <div className="border border-border rounded-2xl p-6 md:p-8 bg-card hover:border-foreground/20 transition-all duration-300">
                      <h3 className="text-lg md:text-xl font-semibold uppercase tracking-tight mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Socials & CTA */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <FadeIn>
            <SectionLabel>Connect</SectionLabel>
            <p className="text-sm text-muted mb-2">(05)</p>
            <h2 className="heading-lg uppercase mb-3">Let&apos;s stay</h2>
            <h2 className="heading-lg text-muted uppercase mb-6 md:mb-10">In touch</h2>
            <p className="desc mb-12 lg:mb-16">
              Follow my work, drop a message, or reach out if you have a project in mind —
              I&apos;d love to hear from you.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {siteConfig.socials.map((social, i) => (
                <SocialCard
                  key={social.label}
                  label={social.label}
                  href={social.href}
                  handle={social.handle}
                  index={i}
                />
              ))}
            </div>

            <FadeIn delay={0.15}>
              <div className="border border-border rounded-2xl p-8 md:p-10 lg:p-12 bg-card h-full flex flex-col justify-between gap-10">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted mb-4">
                    Direct contact
                  </p>
                  <h3 className="text-display text-3xl! md:text-4xl! uppercase font-medium mb-2">
                    Work with
                  </h3>
                  <h3 className="text-display text-3xl! md:text-4xl! uppercase font-medium text-muted mb-6">
                    me
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">
                    {aboutProfile.availability}. Whether you need a new website, a brand
                    refresh, or print-ready designs — send a brief and I&apos;ll get back
                    to you within 24 hours.
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-lg font-semibold link-hover inline-block"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div className="flex flex-wrap gap-4">
                  <CustomButton
                    text="Start a project"
                    href="/#contact"
                    variant="primary"
                    className="min-w-40! text-sm uppercase py-3 px-1 rounded-lg text-center font-bold!"
                  />
                  <CustomButton
                    text="View my work"
                    href="/work"
                    variant="ghost"
                    className="min-w-40! text-sm uppercase py-3 px-1 rounded-lg text-center font-semibold!"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-t border-y border-border py-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...aboutProfile.focusAreas, ...aboutProfile.focusAreas].map((area, i) => (
            <span
              key={`${area}-${i}`}
              className="text-display text-2xl! md:text-3xl font-medium mx-8 md:mx-12 text-muted uppercase"
            >
              {area} ✦
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
