import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ConsultationForm } from "@/components/ConsultationForm";
import { PageHero } from "@/components/sections";
import { brand } from "@/lib/site-content";

const title = "Book a Consultation — Starr Decor Luxe";
const description =
  "Start your interior design project with Starr Decor Luxe. Share your space, timeline, and budget to book a consultation.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's design a home you love."
        intro="Tell us a little about your space and we'll follow up within two business days."
      />
      <section className="bg-background">
        <div className="section-pad mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-24 lg:px-10">
          <Reveal>
            <p className="eyebrow">Studio details</p>
            <ul className="mt-8 space-y-6 text-sm font-light">
              <li>
                <span className="eyebrow block">Email</span>
                <a className="link-underline mt-2 inline-block" href={`mailto:${brand.email}`}>
                  {brand.email}
                </a>
              </li>
              <li>
                <span className="eyebrow block">Service area</span>
                <p className="mt-2 text-muted-foreground">{brand.serviceArea}</p>
              </li>
            </ul>
            <span className="rule-champagne mt-10" />
          </Reveal>
          <Reveal delay={90}>
            <ConsultationForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
