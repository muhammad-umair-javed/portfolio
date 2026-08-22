import SectionHeader from "./SectionHeader";
import { timeline, timelineBranches } from "../data/timeline";

export default function Timeline() {
  return (
    <section id="timeline" className="border-b hairline">
      <div className="max-w-content mx-auto px-6 py-24">
        <SectionHeader
          eyebrow="frame: timeline"
          title="Research timeline"
          description="Embedded control → autonomous mobile robotics → collaborative manipulation."
        />

        <div className="mt-16 relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-line-strong hidden sm:block"
            aria-hidden="true"
          />
          <ol className="space-y-10">
            {timeline.map((entry) => (
              <li key={entry.id} className="relative sm:pl-10">
                <span
                  className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-surface border-2 border-accent hidden sm:block"
                  aria-hidden="true"
                />
                <p className="font-mono text-2xs text-accent">
                  {entry.period} · {entry.phase}
                </p>
                <h3 className="font-display text-lg text-ink-primary mt-1">{entry.title}</h3>
                <p className="mt-2 text-sm text-ink-secondary leading-relaxed max-w-2xl">
                  {entry.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 pt-8 border-t hairline">
          <p className="font-mono text-2xs uppercase tracking-wider text-ink-muted mb-6">
            Parallel tracks
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {timelineBranches.map((branch) => (
              <div key={branch.id} className="border hairline rounded p-5 bg-surface">
                <p className="font-mono text-2xs text-signal">{branch.period}</p>
                <h4 className="font-medium text-ink-primary mt-1 text-sm">{branch.title}</h4>
                <p className="mt-2 text-sm text-ink-secondary leading-relaxed">{branch.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
