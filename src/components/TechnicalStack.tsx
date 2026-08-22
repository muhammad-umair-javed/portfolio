import SectionHeader from "./SectionHeader";
import { techGroups, techToProjects } from "../data/techStack";
import { cx } from "../lib/utils";

interface TechnicalStackProps {
  activeTech: string | null;
  onSelectTech: (tech: string | null) => void;
}

export default function TechnicalStack({ activeTech, onSelectTech }: TechnicalStackProps) {
  return (
    <section id="stack" className="border-b hairline">
      <div className="max-w-content mx-auto px-6 py-24">
        <SectionHeader
          eyebrow="frame: technical_stack"
          title="Technical stack"
          description="Spans the full hardware-to-perception chain, not one layer of it. Select a technology to highlight the projects it was actually used in."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-x-10 gap-y-10">
          {techGroups.map((group) => (
            <div key={group.id}>
              <p className="font-mono text-2xs uppercase tracking-wider text-ink-muted mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const usedIn = techToProjects[item] ?? [];
                  const disabled = usedIn.length === 0;
                  const active = activeTech === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      disabled={disabled}
                      onClick={() => onSelectTech(active ? null : item)}
                      className={cx(
                        "font-mono text-2xs px-3 py-2 rounded border transition-colors",
                        active
                          ? "bg-accent text-canvas border-accent"
                          : disabled
                          ? "border-line text-ink-muted cursor-default"
                          : "border-line-strong text-ink-secondary hover:border-accent hover:text-ink-primary"
                      )}
                      title={disabled ? undefined : `Used in ${usedIn.length} project${usedIn.length > 1 ? "s" : ""}`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
