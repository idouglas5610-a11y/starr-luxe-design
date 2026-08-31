import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import {
  images,
  processSteps,
  services,
  transformations,
} from "@/lib/site-content";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-32">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-lg mt-6 max-w-3xl">{title}</h1>
          {intro ? <p className="body-lg mt-7 max-w-xl">{intro}</p> : null}
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="display-lg mt-5">Services made to fit the way you live.</h2>
        </Reveal>

        <ul className="mt-16 grid gap-x-16 border-t border-border md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.number}
              delay={i * 70}
              className="group border-b border-border py-10"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-display text-2xl text-taupe">{service.number}</span>
                <div>
                  <h3 className="text-base font-normal tracking-[0.14em] uppercase">
                    {service.title}
                  </h3>
                  <p className="body-lg mt-3 max-w-md">{service.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        {compact ? (
          <Reveal className="mt-14">
            <Link to="/services" className="btn-base btn-outline">
              Explore all services
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export function BeforeAfterSection() {
  return (
    <section className="border-t border-border bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Before &amp; After</p>
          <h2 className="display-lg mt-5">Transforming spaces. Elevating lives.</h2>
          <p className="body-lg mt-6 max-w-xl">
            Drag each slider to see how thoughtful planning, materials, and styling
            reshape a room from the ground up.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {transformations.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <BeforeAfterSlider
                before={item.before}
                after={item.after}
                label={item.title}
              />
              <h3 className="mt-5 text-sm font-normal tracking-[0.16em] uppercase">
                {item.title}
              </h3>
              <p className="mt-1 text-xs font-light text-muted-foreground">
                {item.location}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">The process</p>
          <h2 className="display-lg mt-5">How we work together.</h2>
        </Reveal>

        <ol className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 80} className="bg-background p-8 lg:p-10">
              <span className="font-display text-5xl text-beige">{step.number}</span>
              <h3 className="mt-6 text-sm font-normal tracking-[0.2em] uppercase">
                {step.title}
              </h3>
              <span className="rule-champagne mt-4" />
              <p className="body-lg mt-4 text-sm">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function MissionSection() {
  return (
    <section className="border-t border-border bg-cream">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
        <Reveal className="img-zoom order-2 lg:order-1">
          <img
            src={images.mission}
            alt="Warm, elegant dining room designed by Starr Decor Luxe"
            loading="lazy"
            width={1400}
            height={900}
            className="aspect-4/3 w-full object-cover"
          />
        </Reveal>
        <Reveal className="order-1 lg:order-2 lg:pl-10">
          <p className="eyebrow">Our mission</p>
          <blockquote className="display-md mt-6">
            “At Starr Decor Luxe, our mission is to create timeless, functional spaces
            that reflect the unique story of every client. We believe great design should
            feel beautiful, personal, and effortless.”
          </blockquote>
          <span className="rule-champagne mt-8" />
        </Reveal>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="bg-charcoal">
      <div className="mx-auto max-w-[1400px] px-6 py-24 text-center lg:px-10 lg:py-36">
        <Reveal>
          <p className="eyebrow text-champagne">Let's begin</p>
          <h2 className="display-lg mx-auto mt-6 max-w-2xl text-ivory">
            Ready to design a home you love?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed font-light text-ivory/70">
            Let's bring your vision to life. Book a consultation and take the first step
            toward creating a home that feels like you.
          </p>
          <Link to="/contact" className="btn-base btn-light mt-10">
            Book Your Consultation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
