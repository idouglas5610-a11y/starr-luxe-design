import { createFileRoute } from "@tanstack/react-router";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { BeforeAfterSection, CtaSection, PageHero } from "@/components/sections";

const title = "Portfolio — Starr Decor Luxe Interior Design";
const description =
  "Explore living spaces, kitchens, bedrooms, dining rooms, and full-home projects by Starr Decor Luxe.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Spaces we've shaped, room by room."
        intro="A selection of recent work. Filter by the type of space to see how the same design language adapts across a home."
      />
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <PortfolioGrid />
        </div>
      </section>
      <BeforeAfterSection />
      <CtaSection />
    </>
  );
}
