import { useEffect, useState } from "react";
import { cx } from "../lib/utils";

const links = [
  { href: "#research-focus", label: "Research" },
  { href: "#flagship", label: "Dexterous 6 Pro" },
  { href: "#pipeline", label: "Pipeline" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#timeline", label: "Timeline" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled ? "bg-canvas/90 backdrop-blur border-line" : "bg-transparent border-transparent"
      )}
    >
      <nav
        className="max-w-content mx-auto flex items-center justify-between px-6 py-4"
        aria-label="Primary"
      >
        <a href="#top" className="font-display text-sm font-medium tracking-tight text-ink-primary">
          M. Umair Javed
        </a>

        <ul className="hidden md:flex items-center gap-7 font-mono text-2xs uppercase tracking-wider text-ink-secondary">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-accent transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden text-ink-primary"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="font-mono text-2xs">{open ? "close" : "menu"}</span>
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 font-mono text-xs uppercase tracking-wider text-ink-secondary">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 hover:text-accent transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
