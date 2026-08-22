import { useState } from "react";
import type { Project } from "../data/projects";
import { cx } from "../lib/utils";

interface ProjectCardProps {
  project: Project;
  dimmed: boolean;
}

export default function ProjectCard({ project, dimmed }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cx(
        "border hairline rounded bg-surface transition-opacity duration-300",
        dimmed ? "opacity-35" : "opacity-100"
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full text-left px-5 py-5"
      >
        <h4 className="font-medium text-ink-primary leading-snug">{project.title}</h4>
        <p className="mt-2 text-sm text-ink-secondary leading-relaxed">{project.summary}</p>

        {project.metric && (
          <p className="mt-3 font-mono text-2xs text-accent">{project.metric}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="font-mono text-2xs px-2 py-1 rounded border border-line-strong text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="inline-block mt-4 font-mono text-2xs text-signal">
          {open ? "− hide details" : "+ details"}
        </span>
      </button>

      {open && (
        <ul className="px-5 pb-5 space-y-2 border-t hairline pt-4">
          {project.detail.map((line, i) => (
            <li key={i} className="text-sm text-ink-secondary leading-relaxed flex gap-2">
              <span className="text-accent shrink-0">·</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
