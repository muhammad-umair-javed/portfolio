import { useEffect, useState } from "react";
import { cx } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <nav
        className={cx(
          "max-w-content mx-auto flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-500",
          scrolled ? "glass-panel border border-white/10" : "bg-transparent border-transparent"
        )}
        aria-label="Primary"
      >
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-white flex items-center gap-3 group">
          <div className="w-2.5 h-2.5 rounded-full bg-accent group-hover:shadow-[0_0_15px_#00E5FF] transition-all"></div>
          M. Umair Javed
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-ink-secondary">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-accent transition-colors relative group py-2">
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 shadow-[0_0_10px_#00E5FF]"></span>
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="lg:hidden text-ink-primary w-8 h-8 flex items-center justify-center rounded-full bg-surface-alt border border-line"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="font-mono text-xs text-accent">{open ? "×" : "☰"}</span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-[calc(100%+8px)] left-4 right-4 glass-panel rounded-xl overflow-hidden shadow-2xl border border-white/10"
          >
            <ul className="flex flex-col px-6 py-4 font-mono text-xs uppercase tracking-wider text-ink-primary">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3 border-b border-white/5 hover:text-accent hover:pl-2 transition-all"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
