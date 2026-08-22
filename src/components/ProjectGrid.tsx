import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects, categoryOrder, categoryIntros } from "../data/projects";
import { techToProjects } from "../data/techStack";
import { cx } from "../lib/utils";

interface ProjectGridProps {
  activeTech: string | null;
  onClearTech: () => void;
}

export default function ProjectGrid({ activeTech, onClearTech }: ProjectGridProps) {
  const highlightedIds = activeTech ? techToProjects[activeTech] ?? [] : null;
  const tiedToFlagship = !!highlightedIds?.includes("dexterous-6-pro");

  return (
    <section id="projects" className="border-b hairline">
      <div className="max-w-content mx-auto px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            eyebrow="frame: selected_projects"
            title="Selected projects"
            description="Ordered by progression: embedded control fundamentals → autonomous systems → manipulation research, with applied AI work as a supporting track."
          />
          {activeTech && (
            <button
              type="button"
              onClick={onClearTech}
              className="font-mono text-2xs px-3 py-2 border border-accent text-accent rounded hover:bg-accent hover:text-canvas transition-colors"
            >
              clear filter: {activeTech} ×
            </button>
          )}
        </div>

        {tiedToFlagship && (
          <a
            href="#flagship"
            className="mt-6 flex items-center gap-2 font-mono text-2xs text-signal hover:text-accent transition-colors"
          >
            → {activeTech} is also central to the Dexterous 6 Pro flagship research above
          </a>
        )}

        <div className="mt-14 space-y-16">
          {categoryOrder.map((category) => {
            const items = projects.filter((p) => p.category === category);
            if (items.length === 0) return null;
            const isSupporting = category === "Perception & AI";
            return (
              <div key={category}>
                <div className="mb-6 pb-3 border-b hairline">
                  <h3 className="font-mono text-2xs uppercase tracking-wider text-ink-muted">
                    {category}
                  </h3>
                  {categoryIntros[category] && (
                    <p className="mt-1.5 text-sm text-ink-secondary">{categoryIntros[category]}</p>
                  )}
                </div>
                <div
                  className={cx(
                    "grid gap-4",
                    isSupporting ? "max-w-md opacity-90" : "sm:grid-cols-2"
                  )}
                >
                  {items.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      dimmed={!!highlightedIds && !highlightedIds.includes(project.id)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
