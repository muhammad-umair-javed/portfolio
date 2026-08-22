import { contact } from "../data/research";

export default function Contact() {
  return (
    <section id="contact" className="border-b hairline">
      <div className="max-w-content mx-auto px-6 py-24">
        <p className="eyebrow mb-5">// frame: contact</p>
        <h2 className="section-heading max-w-xl">Get in touch</h2>
        <p className="mt-4 text-ink-secondary leading-relaxed max-w-xl">{contact.statement}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="px-5 py-2.5 bg-accent text-canvas font-medium text-sm rounded hover:bg-accent-bright transition-colors"
          >
            {contact.email}
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 border border-line-strong text-sm font-medium rounded text-ink-primary hover:border-accent transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 border border-line-strong text-sm font-medium rounded text-ink-primary hover:border-accent transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={contact.cvPath}
            className="px-5 py-2.5 border border-line-strong text-sm font-medium rounded text-ink-primary hover:border-accent transition-colors"
          >
            Download CV ↓
          </a>
        </div>
      </div>
    </section>
  );
}
