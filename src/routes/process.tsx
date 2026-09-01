import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CtaSection, PageHero, ProcessSection } from "@/components/sections";

const title = "Our Design Process — Starr Decor Luxe";
const description =
  "Discover, design, refine, transform — a clear four-step interior design process built for calm, collaborative projects.";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProcessPage,
});

const expectations = [
  {
    title: "Clear communication",
    body: "Scheduled check-ins, shared timelines, and one point of contact from start to finish.",
  },
  {
    title: "Transparent budgets",
    body: "Itemized proposals so you always know what a decision costs before it's made.",
  },
  {
    title: "Full project management",
    body: "We coordinate trades, orders, and installation so the details never land on you.",
  },
];

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A calm, considered path from first call to final styling."
        intro="Design should feel exciting, not overwhelming. Here's exactly how a project unfolds."
      />
      <ProcessSection />
      <section className="border-t border-border bg-cream">
        <div className="section-pad mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What to expect</p>
            <h2 className="display-lg mt-5">The experience, start to finish.</h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {expectations.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <span className="rule-champagne" />
                <h3 className="mt-6 text-sm font-normal tracking-[0.16em] uppercase">
                  {item.title}
                </h3>
                <p className="body-lg mt-3 text-sm">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
