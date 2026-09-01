import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  portfolioCategories,
  projects,
  type PortfolioCategory,
} from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function PortfolioGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<PortfolioCategory>("All");

  const filtered = useMemo(() => {
    const list =
      active === "All" ? projects : projects.filter((p) => p.category === active);
    return limit ? list.slice(0, limit) : list;
  }, [active, limit]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-x-8 gap-y-4 border-b border-border pb-6"
      >
        {portfolioCategories.map((category) => (
          <button
            key={category}
            role="tab"
            type="button"
            aria-selected={active === category}
            onClick={() => setActive(category)}
            className={cn(
              "spaced-caps transition-colors",
              active === category
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-16 grid gap-x-14 gap-y-20 md:grid-cols-2">
        {filtered.map((project, i) => (
          <Reveal as="article" key={project.name} delay={i * 70} className="group">
            <div className="img-frame">
              <img
                src={project.image}
                alt={`${project.name} interior design project`}
                loading="lazy"
                width={1200}
                height={1000}
                className="aspect-5/4 w-full object-cover"
              />
            </div>
            <div className="mt-7 flex items-start justify-between gap-6">
              <div>
                <h3 className="font-display text-[1.75rem] leading-tight">{project.name}</h3>
                <p className="mt-2 spaced-caps text-taupe">{project.location}</p>
              </div>
              <span className="mt-1 shrink-0 spaced-caps text-muted-foreground">
                {project.category}
              </span>
            </div>
            <p className="body-lg mt-5 max-w-md text-[0.9375rem]">{project.description}</p>
          </Reveal>
        ))}
      </div>


      {filtered.length === 0 ? (
        <p className="body-lg mt-14">No projects in this category yet.</p>
      ) : null}
    </div>
  );
}
