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
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/45" />
        <div className="relative mx-auto flex min-h-[86vh] max-w-[1400px] flex-col justify-end px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <p className="eyebrow text-champagne">{brand.tagline}</p>
            <h1 className="display-xl mt-6 max-w-3xl text-ivory">
              Interiors designed to feel like home, crafted to last a lifetime.
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed font-light text-ivory/75">
              A full-service interior design studio creating warm, elevated spaces
              tailored to the way you live.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
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

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="display-lg mt-5">A portfolio of quiet luxury.</h2>
          </Reveal>
          <div className="mt-14">
            <PortfolioGrid limit={4} />
          </div>
          <Reveal className="mt-14">
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
