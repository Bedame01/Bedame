import { homeServices } from "@/data/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

export function ServicesSection() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-wide">
        <FadeIn>
          <SectionLabel>What i do</SectionLabel>
          <p className="text-sm text-muted mb-2">(02)</p>
          <h2 className="title textDisplay mb-6 uppercase">Services</h2>
          <p className="text-foreground font-medium max-w-xl md:max-w-4xl text-xl/7 md:text-3xl! lg:text-4xl/12! mb-10 lg:mb-18">
            Discover my tailored services designed to elevate your brand, enhance
            user experience.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {homeServices.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="border border-border rounded-2xl p-8 md:p-10 h-full bg-card hover:border-foreground/20 transition-colors">
                <div className="mb-8">
                  <h3 className="text-display text-3xl! md:text-4xl! uppercase font-medium">
                    {service.title}
                  </h3>
                  <h3 className="text-display text-3xl! md:text-4xl! uppercase font-medium text-muted">
                    {service.subtitle}
                  </h3>
                </div>
                <p className="text-muted mb-8 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
