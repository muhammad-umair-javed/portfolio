import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { researchNodes } from "../data/research";
import { cx } from "../lib/utils";

const positions: Record<string, { x: number; y: number }> = {
  manipulation: { x: 200, y: 150 },
  planning: { x: 340, y: 70 },
  vision: { x: 60, y: 70 },
  hrc: { x: 60, y: 230 },
  control: { x: 340, y: 230 },
};

export default function ResearchFocus() {
  const [active, setActive] = useState<string>("manipulation");
  const activeNode = researchNodes.find((n) => n.id === active) ?? researchNodes[0];

  const isConnected = (id: string) => {
    if (active === id) return true;
    return researchNodes.find((n) => n.id === active)?.connections.includes(id) ?? false;
  };

  return (
    <section id="research-focus" className="border-b hairline">
      <div className="max-w-content mx-auto px-6 py-24">
        <SectionHeader
          eyebrow="frame: research_focus"
          title="Research focus"
          description="Five interconnected areas centered on collaborative manipulation. Hover a node to see how it relates to the others."
        />

        <div className="mt-14 grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <svg
            viewBox="0 0 400 300"
            className="w-full h-auto"
            role="img"
            aria-label="Diagram of five interconnected robotics research areas centered on collaborative manipulation"
          >
            <title>Research focus relationships</title>
            {researchNodes.flatMap((node) =>
              node.connections.map((targetId) => {
                const a = positions[node.id];
                const b = positions[targetId];
                if (!a || !b) return null;
                const edgeActive = active === node.id || active === targetId;
                return (
                  <line
                    key={`${node.id}-${targetId}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke={edgeActive ? "#CC8B3C" : "#282E33"}
                    strokeWidth={edgeActive ? 1.5 : 1}
                    className="transition-all duration-300"
                  />
                );
              })
            )}

            {researchNodes.map((node) => {
              const pos = positions[node.id];
              const connected = isConnected(node.id);
              return (
                <g
                  key={node.id}
                  transform={`translate(${pos.x}, ${pos.y})`}
                  onMouseEnter={() => setActive(node.id)}
                  onMouseLeave={() => setActive("manipulation")}
                  onFocus={() => setActive(node.id)}
                  onBlur={() => setActive("manipulation")}
                  tabIndex={0}
                  role="button"
                  aria-label={`${node.label}: ${node.description}`}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    r={node.id === "manipulation" ? 42 : 34}
                    fill="#1B1F23"
                    stroke={connected ? "#CC8B3C" : "#3A424A"}
                    strokeWidth={active === node.id ? 2 : 1}
                    className="transition-all duration-300"
                    opacity={connected ? 1 : 0.4}
                  />
                  <text
                    textAnchor="middle"
                    className="font-mono"
                    fontSize="9.5"
                    fill={connected ? "#E9EBEC" : "#666E74"}
                  >
                    {labelLines(node.label).map((line, i, arr) => (
                      <tspan key={i} x="0" dy={i === 0 ? `${-((arr.length - 1) * 5.5)}` : "11"}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className={cx("frame border hairline rounded bg-surface p-6 min-h-[140px] flex flex-col justify-center transition-colors")}>
            <p className="eyebrow mb-2">{activeNode.label}</p>
            <p className="text-ink-secondary leading-relaxed text-sm">{activeNode.description}</p>
            <p className="mt-4 font-mono text-2xs text-ink-muted">
              hover or focus another node to compare
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function labelLines(label: string): string[] {
  const words = label.split(" ");
  if (words.length <= 1) return words;
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}
