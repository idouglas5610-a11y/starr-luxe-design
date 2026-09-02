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
      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-20 lg:px-10 lg:pt-40 lg:pb-32">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <span className="rule-champagne mt-7" />
          <h1 className="display-lg mt-8 max-w-3xl">{title}</h1>
          {intro ? <p className="body-lg mt-8 max-w-xl">{intro}</p> : null}
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="seam-top bg-background">
      <div className="section-pad mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="display-lg mt-6">Services made to fit the way you live.</h2>
        </Reveal>

        <ul className="mt-20 grid gap-x-20 border-t border-border md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.number}
              delay={i * 70}
              className="group border-b border-border py-12 transition-colors duration-500 hover:bg-cream/60"
            >
              <div className="flex items-baseline gap-8">
                <span className="font-display text-2xl text-taupe transition-colors duration-500 group-hover:text-champagne">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-[0.8125rem] font-normal tracking-[0.22em] uppercase">
                    {service.title}
                  </h3>
                  <p className="body-lg mt-4 max-w-md text-[1rem]">{service.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        {compact ? (
          <Reveal className="mt-16">
            <Link to="/services" className="btn-base btn-outline">
              Explore all services
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export function BeforeAfterSection({
  variant = "light",
  centered = false,
  showLink = false,
}: {
  variant?: "light" | "dark";
  centered?: boolean;
  showLink?: boolean;
}) {
  const dark = variant === "dark";
  return (
    <section
      className={dark ? "hairline-top bg-charcoal" : "seam-top bg-cream"}
    >
      <div className="section-pad mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          <p className={dark ? "eyebrow text-champagne" : "eyebrow"}>
            Transforming spaces. Elevating lives.
          </p>
          <h2 className={dark ? "display-lg mt-6 text-ivory" : "display-lg mt-6"}>
            Before &amp; After
          </h2>
          <p
            className={
              dark
                ? "mx-auto mt-7 max-w-xl text-base leading-[1.85] font-light text-ivory/70"
                : "body-lg mt-7 max-w-xl"
            }
          >
            Drag each slider to see how thoughtful planning, materials, and styling
            reshape a room from the ground up.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-14 lg:grid-cols-3">
          {transformations.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <BeforeAfterSlider
                before={item.before}
                after={item.after}
                label={item.title}
              />
              <h3
                className={
                  dark
                    ? "mt-6 text-sm font-medium tracking-[0.22em] text-ivory uppercase"
                    : "mt-6 text-sm font-medium tracking-[0.22em] uppercase"
                }
              >
                {item.title}
              </h3>
              <p
                className={
                  dark
                    ? "mt-2 text-[0.8125rem] font-light tracking-[0.08em] text-ivory/60"
                    : "mt-2 text-[0.8125rem] font-light tracking-[0.08em] text-muted-foreground"
                }
              >
                {item.location}
              </p>
            </Reveal>
          ))}
        </div>

        {showLink ? (
          <Reveal className="mt-16 text-center">
            <Link
              to="/portfolio"
              className={dark ? "btn-base btn-outline-light" : "btn-base btn-outline"}
            >
              View more projects
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="seam-top bg-background">
      <div className="section-pad mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">The process</p>
          <h2 className="display-lg mt-6">How we work together.</h2>
        </Reveal>

        <ol className="mt-20 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={i * 80}
              className="bg-background p-10 transition-colors duration-500 hover:bg-cream/70 lg:p-12"
            >
              <span className="font-display text-5xl text-beige">{step.number}</span>
              <h3 className="mt-8 text-[0.8125rem] font-normal tracking-[0.24em] uppercase">
                {step.title}
              </h3>
              <span className="rule-champagne mt-5" />
              <p className="body-lg mt-5 text-sm">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function MissionSection() {
  return (
    <section className="seam-top bg-cream">
      <div className="section-pad mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <Reveal className="img-frame order-2 lg:order-1">
          <img
            src={images.mission}
            alt="Warm, elegant dining room designed by Starr Decor Luxe"
            loading="lazy"
            width={1400}
            height={900}
            className="aspect-4/3 w-full object-cover"
          />
        </Reveal>
        <Reveal className="order-1 lg:order-2 lg:pl-12">
          <p className="eyebrow">Our mission</p>
          <blockquote className="display-md mt-7 max-w-xl">
            “At Starr Decor Luxe, our mission is to create timeless, functional spaces
            that reflect the unique story of every client. We believe great design should
            feel beautiful, personal, and effortless.”
          </blockquote>
          <span className="rule-champagne mt-10" />
        </Reveal>
      </div>
    </section>
  );
}

export function CtaSection({ withPortrait = false }: { withPortrait?: boolean }) {
  if (withPortrait) {
    return (
      <section className="hairline-top bg-charcoal">
        <div className="mx-auto grid max-w-[1400px] items-end gap-12 px-6 pt-20 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:gap-20 lg:px-10 lg:pt-28">
          <Reveal className="order-2 overflow-hidden lg:order-1">
            <img
              src={images.ctaPortrait}
              alt="Lead designer of Starr Decor Luxe in a bright living room"
              loading="lazy"
              width={900}
              height={1200}
              className="aspect-3/4 w-full scale-[1.15] object-cover object-[center_10%] grayscale-[0.15]"
            />
          </Reveal>
          <Reveal className="order-1 pb-20 lg:order-2 lg:pb-28">
            <p className="eyebrow text-champagne">Let&apos;s begin</p>
            <h2 className="display-lg mt-8 max-w-xl text-ivory">
              Ready to design a home you love?
            </h2>
            <span className="rule-champagne mt-8" />
            <p className="mt-7 max-w-lg text-base leading-[1.85] font-light text-ivory/70">
              Let&apos;s bring your vision to life. Book your consultation today and
              take the first step toward a home that feels like you.
            </p>
            <Link to="/contact" className="btn-base btn-light mt-12">
              Book Your Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    );
  }
  return (
    <section className="hairline-top bg-charcoal">
      <div className="mx-auto max-w-[1400px] px-6 py-28 text-center lg:px-10 lg:py-44">
        <Reveal>
          <p className="eyebrow text-champagne">Let's begin</p>
          <h2 className="display-lg mx-auto mt-8 max-w-2xl text-ivory">
            Ready to design a home you love?
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-[1.85] font-light text-ivory/70">
            Let's bring your vision to life. Book a consultation and take the first step
            toward creating a home that feels like you.
          </p>
          <Link to="/contact" className="btn-base btn-light mt-12">
            Book Your Consultation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
