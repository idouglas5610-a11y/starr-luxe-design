import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CtaSection, MissionSection, PageHero } from "@/components/sections";
import { brand, images } from "@/lib/site-content";

const title = "About the Studio — Starr Decor Luxe";
const description =
  "Meet the designer behind Starr Decor Luxe and the philosophy of warm, timeless, deeply personal interiors.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Design rooted in warmth, restraint, and how you actually live."
        intro={brand.tagline}
      />

      <section className="bg-background">
        <div className="section-pad mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
          <Reveal className="img-frame">
            <img
              src={images.designer}
              alt="Portrait of the lead designer at Starr Decor Luxe"
              loading="lazy"
              width={1200}
              height={1500}
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <Reveal className="lg:pl-10">
            <p className="eyebrow">The designer</p>
            <h2 className="display-md mt-5">A studio built on listening first.</h2>
            <p className="body-lg mt-6">
              Every project begins with a conversation — about routines, gatherings,
              light, and the pieces you already love. From there we build a layered,
              considered interior that feels collected rather than decorated.
            </p>
            <p className="body-lg mt-5">
              Our work leans on natural materials, honest craftsmanship, and a calm
              neutral palette punctuated by warmth. The result is a home that ages
              beautifully and never feels of-the-moment.
            </p>
            <span className="rule-champagne mt-8" />
            <dl className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                { k: "Founded", v: "Studio placeholder" },
                { k: "Projects", v: "Placeholder" },
                { k: "Serving", v: brand.serviceArea },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="eyebrow">{item.k}</dt>
                  <dd className="mt-2 text-sm font-light">{item.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <MissionSection />
      <CtaSection />
    </>
  );
}
