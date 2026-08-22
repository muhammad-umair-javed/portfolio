import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { education, contact } from "../data/research";
import { atAGlanceFacts } from "../data/flagship";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="relative border-b hairline">
      <div className="max-w-content mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <p className="eyebrow mb-5">// frame: hero</p>

          <h1 className="font-display text-[2.35rem] leading-[1.1] md:text-5xl font-medium text-ink-primary">
            Developing and debugging the software stack for
            <span className="text-accent"> Dexterous 6 Pro</span>, a custom-built 6-DOF
            collaborative manipulator.
          </h1>

          <p className="mt-6 text-ink-secondary text-lg leading-relaxed max-w-xl">
            Muhammad Umair Javed — {education.degree}, {education.institution.split(",")[0]}.
            Research spans EtherCAT hardware interfacing, inverse kinematics, trajectory
            execution, and vision-guided pick-and-place — the full path from perception to
            actuation, not a single layer of it.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#flagship"
              className="px-5 py-2.5 bg-accent text-canvas font-medium text-sm rounded hover:bg-accent-bright transition-colors"
            >
              See the Dexterous 6 Pro research
            </a>
            <a
              href="#projects"
              className="px-5 py-2.5 border border-line-strong text-sm font-medium rounded text-ink-primary hover:border-accent transition-colors"
            >
              View all projects
            </a>
            <a
              href={contact.cvPath}
              className="px-5 py-2.5 text-sm font-medium text-ink-secondary hover:text-accent transition-colors"
            >
              CV ↓
            </a>
          </div>
        </div>

        <div className="frame border hairline rounded bg-surface p-6 md:p-8" aria-hidden="true">
          <ArmSchematic animate={!reduced} />
        </div>
      </div>

      <div className="max-w-content mx-auto px-6 pb-12">
        <div className="border-t hairline pt-6">
          <p className="font-mono text-2xs text-ink-muted mb-4 uppercase tracking-wider">
            At a glance — not "used ROS," but this
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded overflow-hidden">
            {atAGlanceFacts.map((fact) => (
              <div key={fact.label} className="bg-surface p-4">
                <p className="font-mono text-2xs text-accent">{fact.label}</p>
                <p className="mt-1.5 text-sm text-ink-secondary leading-snug">{fact.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArmSchematic({ animate }: { animate: boolean }) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { delay: i * 0.18, duration: 0.9, ease: "easeInOut" as const },
    }),
  };

  return (
    <svg viewBox="0 0 400 320" className="w-full h-auto" role="img" aria-label="Schematic diagram of a 6-DOF robot arm">
      <title>6-DOF manipulator schematic</title>
      <g stroke="#3A424A" strokeWidth="0.5" opacity="0.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" x2="400" y1={i * 40} y2={i * 40} />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v-${i}`} y1="0" y2="320" x1={i * 40} x2={i * 40} />
        ))}
      </g>

      <motion.line
        x1="60" y1="280" x2="60" y2="220"
        stroke="#666E74" strokeWidth="6" strokeLinecap="round"
        custom={0} initial={animate ? "hidden" : "visible"} animate="visible" variants={draw}
      />
      <motion.line
        x1="60" y1="220" x2="160" y2="180"
        stroke="#9BA3A9" strokeWidth="5" strokeLinecap="round"
        custom={1} initial={animate ? "hidden" : "visible"} animate="visible" variants={draw}
      />
      <motion.line
        x1="160" y1="180" x2="230" y2="110"
        stroke="#CC8B3C" strokeWidth="5" strokeLinecap="round"
        custom={2} initial={animate ? "hidden" : "visible"} animate="visible" variants={draw}
      />
      <motion.line
        x1="230" y1="110" x2="310" y2="95"
        stroke="#CC8B3C" strokeWidth="4" strokeLinecap="round"
        custom={3} initial={animate ? "hidden" : "visible"} animate="visible" variants={draw}
      />
      <motion.line
        x1="310" y1="95" x2="345" y2="60"
        stroke="#E3A75B" strokeWidth="3" strokeLinecap="round"
        custom={4} initial={animate ? "hidden" : "visible"} animate="visible" variants={draw}
      />

      {[
        [60, 280, 8],
        [60, 220, 6],
        [160, 180, 5],
        [230, 110, 5],
        [310, 95, 4],
        [345, 60, 3],
      ].map(([cx, cy, r], i) => (
        <motion.circle
          key={i}
          cx={cx} cy={cy} r={r}
          fill="#15181B" stroke="#5C8CB0" strokeWidth="1.5"
          initial={animate ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.18 + 0.2, duration: 0.4 }}
        />
      ))}

      <text x="352" y="52" className="font-mono" fontSize="9" fill="#5C8CB0">
        ee
      </text>
      <text x="20" y="300" className="font-mono" fontSize="9" fill="#666E74">
        base_link
      </text>
    </svg>
  );
}
