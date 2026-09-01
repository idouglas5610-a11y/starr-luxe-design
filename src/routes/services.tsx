import { createFileRoute } from "@tanstack/react-router";
import { CtaSection, PageHero, ProcessSection, ServicesSection } from "@/components/sections";

const title = "Interior Design Services — Starr Decor Luxe";
const description =
  "Full-service interior design, residential design, room refresh, space planning, furnishings and styling, and virtual design.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Considered design at every scale."
        intro="Whether you're furnishing one room or reimagining a whole home, we shape the scope around your goals, timeline, and budget."
      />
      <ServicesSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
