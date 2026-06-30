import type { Metadata } from "next";
import { serviceDetails } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { WorkProcess } from "@/components/WorkProcess";

export const metadata: Metadata = {
  title: "Service",
};

export default function ServicePage() {
  return (
    <>
      <section className="section-padding min-h-[50vh] flex flex-col justify-end">
        <div className="container-wide">
          <FadeIn>
            <h1 className="title2 textDisplay mb-8">Service</h1>
            <p className="desc">
              Explore our tailored services designed to elevate your brand.
            </p>
          </FadeIn>
        </div>
      </section>

      {serviceDetails.map((service) => (
        <section key={service.id} className="section-padding border-t border-border">
          <div className="container-wide">
            <FadeIn>
              <h2 className="heading-lg mb-2 uppercase">{service.title}</h2>
              <h2 className="heading-lg text-muted mb-8 uppercase">{service.subtitle}</h2>
              <p className="text-muted max-w-2xl text-lg mb-16 md:mb-20">
                {service.description}
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {service.items.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.08}>
                  <div className="border-t border-border pt-8">
                    <h3 className="text-xl! md:text-2xl! uppercase font-semibold tracking-tight mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted leading-relaxed">{item.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <FadeIn>
            <SectionLabel>Testimonials</SectionLabel>
            <p className="text-sm text-muted mb-2">(02)</p>
            <h2 className="heading-lg title2 uppercase mb-2">What our</h2>
            <h2 className="heading-lg title2 uppercase text-muted mb-16">clients say</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <FadeIn key={t.author} delay={i * 0.1}>
                <div className="border border-border rounded-2xl p-8 bg-card h-full">
                  <p className="text-sm text-muted mb-4">{t.company}</p>
                  <p className="text-display font-medium mb-6 leading-snug">{t.quote}</p>
                  <p className="text-sm font-medium">{t.author}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <WorkProcess showHeader sectionIndex="(03)" />
        </div>
      </section>
    </>
  );
}
