import SectionHeader from "./SectionHeader";
import { education } from "../data/research";

export default function About() {
  return (
    <section id="about" className="border-b hairline bg-surface/40">
      <div className="max-w-content mx-auto px-6 py-24">
        <SectionHeader eyebrow="frame: about" title="Research philosophy" />

        <div className="mt-8 max-w-2xl space-y-5 text-ink-secondary leading-relaxed">
          <p>
            I started with bare-metal control — fusing noisy sensor data on a vibrating beam and
            tuning a PID loop by hand. That grounding in first-principles control is what shapes
            how I approach robotics now: even when working inside ROS 2 and MoveIt, I try not to
            treat the stack as a black box.
          </p>
          <p>
            On Dexterous 6 Pro, the most useful moments haven't been getting a pipeline to run —
            they've been tracing why it didn't: an IK solver silently jumping branches under
            Cartesian motion, a timestamp error two layers upstream of where it first appeared, an
            encoder conversion quietly capping how fast the arm could safely move.
          </p>
          <p>
            I'm working toward graduate research in manipulation and motion planning because
            that's where perception, planning, and real hardware constraints all have to be
            reconciled at once — and that reconciliation is the part I find most worth doing
            carefully.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t hairline font-mono text-2xs text-ink-muted">
          <p>{education.institution}</p>
          <p className="mt-1">
            {education.degree} · {education.period} · {education.gpa}
          </p>
        </div>
      </div>
    </section>
  );
}
