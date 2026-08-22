import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { flagshipMeta, engineeringLog } from "../data/flagship";
import { cx } from "../lib/utils";

const DEFAULT_OPEN_IDS = new Set([engineeringLog[0].id, engineeringLog[1].id]);

export default function FlagshipProject() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(DEFAULT_OPEN_IDS));

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="flagship" className="border-b hairline bg-surface/40">
      <div className="max-w-content mx-auto px-6 py-24">
        <SectionHeader eyebrow="frame: flagship_research" title="Flagship research — Dexterous 6 Pro" />

        <div className="mt-8 frame border hairline rounded bg-surface p-7 md:p-10">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <p className="font-mono text-2xs text-signal">{flagshipMeta.robot}</p>
            <p className="font-mono text-2xs text-ink-muted">{flagshipMeta.period}</p>
          </div>

          <h3 className="font-display text-2xl md:text-3xl text-ink-primary mt-3 max-w-3xl leading-snug">
            {flagshipMeta.title}
          </h3>
          <p className="mt-2 text-ink-secondary text-sm">
            {flagshipMeta.role} · {flagshipMeta.lab}
          </p>

          <div className="mt-6 border-l-2 border-accent pl-4 max-w-2xl">
            <p className="text-ink-primary text-sm leading-relaxed">{flagshipMeta.distinction}</p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <p className="eyebrow mb-2">problem</p>
              <p className="text-ink-secondary leading-relaxed text-sm">{flagshipMeta.problem}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">system</p>
              <p className="text-ink-secondary leading-relaxed text-sm">{flagshipMeta.system}</p>
            </div>
          </div>

          <div className="mt-12">
            <p className="eyebrow mb-5">engineering log — challenges, approach, results</p>
            <div className="space-y-3">
              {engineeringLog.map((card) => {
                const isOpen = openIds.has(card.id);
                return (
                  <div key={card.id} className="border hairline rounded overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggle(card.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-surface-alt hover:bg-surface-raised transition-colors"
                    >
                      <span className="font-medium text-sm md:text-base text-ink-primary">{card.title}</span>
                      <span className="font-mono text-accent text-sm shrink-0">{isOpen ? "−" : "+"}</span>
                    </button>

                    {isOpen && (
                      <div className="px-5 py-6 bg-surface space-y-4">
                        <LogRow label="challenge" text={card.challenge} />
                        <LogRow label="approach" text={card.approach} />
                        {card.result && <LogRow label="result" text={card.result} accent />}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {card.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-2xs px-2 py-1 rounded border border-line-strong text-ink-secondary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 border-t hairline pt-8">
            <p className="eyebrow mb-2">current research direction</p>
            <p className="text-ink-secondary leading-relaxed text-sm max-w-2xl">
              {flagshipMeta.currentDirection}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogRow({ label, text, accent }: { label: string; text: string; accent?: boolean }) {
  return (
    <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-4">
      <span className={cx("font-mono text-2xs pt-0.5", accent ? "text-accent" : "text-ink-muted")}>
        {label}
      </span>
      <p className="text-ink-secondary leading-relaxed text-sm">{text}</p>
    </div>
  );
}
