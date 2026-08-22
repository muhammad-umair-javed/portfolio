import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { pipelineStages } from "../data/pipeline";
import { cx } from "../lib/utils";

export default function ArchitectureDiagram() {
  const [activeId, setActiveId] = useState<string>(pipelineStages[0].id);
  const active = pipelineStages.find((s) => s.id === activeId) ?? pipelineStages[0];

  return (
    <section id="pipeline" className="border-b hairline">
      <div className="max-w-content mx-auto px-6 py-24">
        <SectionHeader
          eyebrow="frame: pipeline"
          title="Research & engineering pipeline"
          description="The stack from camera to drive, as implemented on Dexterous 6 Pro. Select a stage to see the technology behind it."
        />

        <div className="mt-14 flex flex-col lg:flex-row gap-3 lg:gap-0" role="list">
          {pipelineStages.map((stage, i) => (
            <button
              key={stage.id}
              type="button"
              role="listitem"
              onClick={() => setActiveId(stage.id)}
              onMouseEnter={() => setActiveId(stage.id)}
              aria-pressed={activeId === stage.id}
              className={cx(
                "group relative flex-1 text-left px-4 py-4 border transition-colors",
                "lg:border-l-0 lg:first:border-l",
                activeId === stage.id
                  ? "bg-surface-raised border-accent"
                  : "bg-surface border-line hover:border-line-strong"
              )}
            >
              <span className="font-mono text-2xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <p
                className={cx(
                  "mt-1 text-sm font-medium leading-tight",
                  activeId === stage.id ? "text-ink-primary" : "text-ink-secondary"
                )}
              >
                {stage.label}
              </p>
              <span
                className={cx(
                  "hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-px z-10",
                  i === pipelineStages.length - 1 ? "hidden" : "bg-line-strong"
                )}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>

        <div className="frame mt-6 border hairline rounded bg-surface p-6 md:p-8">
          <p className="eyebrow mb-2">{active.technology}</p>
          <h3 className="font-display text-xl text-ink-primary mb-3">{active.label}</h3>
          <p className="text-ink-secondary leading-relaxed max-w-2xl">{active.detail}</p>
          <a
            href="#flagship"
            className="inline-block mt-4 font-mono text-2xs text-signal hover:text-accent transition-colors"
          >
            → see this stage on Dexterous 6 Pro
          </a>
        </div>
      </div>
    </section>
  );
}
