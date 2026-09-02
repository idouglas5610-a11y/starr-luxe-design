import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import {
  BeforeAfterSection,
  CtaSection,
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
      {/* Hero — copy left, designer portrait right */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid max-w-[1600px] items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <Reveal className="px-6 pt-20 pb-6 lg:py-32 lg:pr-16 lg:pl-10">
            <p className="eyebrow">{brand.tagline}</p>
            <h1 className="display-xl mt-8">
              Creating homes
              <br />
              <em className="font-normal italic">worth coming home to.</em>
            </h1>
            <span className="rule-champagne mt-9" />
            <p className="body-lg mt-8 max-w-md">
              Full-service interior design tailored to your lifestyle. From concept to
              completion, we handle every detail so you can simply enjoy your home.
            </p>
            <Link to="/contact" className="btn-base btn-dark mt-11">
              Book Your Consultation
            </Link>
          </Reveal>

          <Reveal className="relative">
            <img
              src={images.heroPortrait}
              alt="Lead designer of Starr Decor Luxe standing in a bright, neutral living room"
              width={1200}
              height={1500}
              className="h-[62vh] w-full object-cover object-top lg:h-[88vh]"
            />
          </Reveal>
        </div>
      </section>

      {/* Designer intro — image left, copy right */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1600px] items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <Reveal>
            <img
              src={images.designerKitchen}
              alt="Designer styling a light, modern kitchen"
              loading="lazy"
              width={1200}
              height={1500}
              className="h-[52vh] w-full object-cover lg:h-[82vh]"
            />
          </Reveal>
          <Reveal className="bg-cream px-6 py-16 lg:px-16 lg:py-28">
            <p className="eyebrow">Hi, I&apos;m Jessica</p>
            <h2 className="display-md mt-6">
              The designer
              <br />
              behind the details.
            </h2>
            <span className="rule-champagne mt-8" />
            <p className="body-lg mt-8 max-w-md">
              As the creative force behind Starr Decor Luxe, I believe your home should
              reflect who you are and how you live. I combine timeless elegance with
              cozy, livable luxury to create spaces that are both beautiful and
              functional.
            </p>
            <p className="font-display mt-7 text-2xl italic">
              Let&apos;s design your dream home.
            </p>
            <Link to="/about" className="btn-base btn-dark mt-10">
              Learn More About Me
            </Link>
          </Reveal>
        </div>
      </section>

      <BeforeAfterSection variant="dark" centered showLink />

      {/* Mission — copy left, still life right */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1600px] items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <Reveal className="px-6 py-16 lg:px-10 lg:py-28">
            <h2 className="display-md">Our Mission</h2>
            <span className="rule-champagne mt-7" />
            <p className="body-lg mt-8 max-w-md">
              At Starr Decor Luxe, our mission is to create timeless, functional spaces
              that reflect the unique story of each client. We are committed to
              delivering exceptional design, personalized service, and an elevated
              experience from concept to completion.
            </p>
          </Reveal>
          <Reveal>
            <img
              src={images.mission}
              alt="Styled console table with books, candle, and greenery"
              loading="lazy"
              width={1400}
              height={1000}
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <ServicesSection compact />
      <CtaSection withPortrait />
    </>
  );
}
