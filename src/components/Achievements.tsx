import { scholarships, leadership } from "../data/research";

export default function Achievements() {
  return (
    <section id="achievements" className="border-b hairline">
      <div className="max-w-content mx-auto px-6 py-16">
        <p className="eyebrow mb-8">// frame: achievements</p>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 text-sm">
          <div>
            <p className="font-mono text-2xs uppercase tracking-wider text-ink-muted mb-4">
              Scholarships &amp; awards
            </p>
            <ul className="space-y-3">
              {scholarships.map((item) => (
                <li key={item.label}>
                  <span className="text-ink-primary font-medium">{item.label}</span>
                  <span className="text-ink-secondary"> — {item.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-2xs uppercase tracking-wider text-ink-muted mb-4">
              Leadership
            </p>
            <ul className="space-y-3">
              {leadership.map((item) => (
                <li key={item.label}>
                  <span className="text-ink-primary font-medium">{item.label}</span>
                  <span className="text-ink-secondary"> — {item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
