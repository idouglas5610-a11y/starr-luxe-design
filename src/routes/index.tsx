import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import {
  BeforeAfterSection,
  CtaSection,
  MissionSection,
  ProcessSection,
  ServicesSection,
} from "@/components/sections";
import { brand, images } from "@/lib/site-content";

const title = "Starr Decor Luxe — Luxury Interior Design Studio";
const description =
  "Starr Decor Luxe designs timeless, warm, sophisticated interiors — full-service residential design, space planning, styling, and virtual design.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={images.hero}
          alt="Elegant living room with warm neutral furnishings"
          width={1920}
          height={1200}
          className="absolute inset-0 size-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/25" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-[1400px] flex-col justify-end px-6 pb-24 lg:px-10 lg:pb-32">
          <Reveal>
            <p className="eyebrow text-champagne">{brand.tagline}</p>
            <span className="rule-champagne mt-7" />
            <h1 className="display-xl mt-8 max-w-3xl text-ivory">
              Interiors designed to feel like home, crafted to last a lifetime.
            </h1>
            <p className="mt-8 max-w-lg text-base leading-[1.85] font-light text-ivory/75">
              A full-service interior design studio creating warm, elevated spaces
              tailored to the way you live.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-base btn-light">
                Book a Consultation
              </Link>
              <Link to="/portfolio" className="btn-base btn-outline-light">
                View Portfolio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ServicesSection compact />
      <BeforeAfterSection />

      <section className="seam-top bg-background">
        <div className="section-pad mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="display-lg mt-6">A portfolio of quiet luxury.</h2>
          </Reveal>
          <div className="mt-16">
            <PortfolioGrid limit={4} />
          </div>
          <Reveal className="mt-16">
            <Link to="/portfolio" className="btn-base btn-outline">
              See the full portfolio
            </Link>
          </Reveal>
        </div>
      </section>


      <MissionSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
