import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { education, contact } from "../data/research";
import { atAGlanceFacts } from "../data/flagship";

export default function Hero() {
  const reduced = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="top" className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-12 overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen animate-pulse-slow"></div>

      <div className="max-w-content mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
          <motion.div
            variants={containerVariants}
            initial={reduced ? "visible" : "hidden"}
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel mb-8 border border-accent/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <p className="font-mono text-xs tracking-wider text-ink-primary uppercase">
                Available for New Roles
              </p>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-display text-[2.75rem] leading-[1.05] md:text-6xl lg:text-[4.5rem] font-medium text-ink-primary tracking-tight">
              Engineering the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-signal-dim filter drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">software stack</span> <br/>
              for robotics.
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-8 text-ink-secondary text-lg md:text-xl leading-relaxed max-w-2xl font-light">
              Muhammad Umair Javed — {education.degree}, {education.institution.split(",")[0]}.
              Bridging the gap between perception and actuation with real-time control, inverse kinematics, and intelligent vision systems.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href="#flagship"
                className="group relative px-8 py-4 bg-accent/10 text-accent font-medium text-sm rounded-xl overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] border border-accent/30"
              >
                <div className="absolute inset-0 bg-accent/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative flex items-center gap-2">
                  Explore Dexterous 6 Pro
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </a>
              <a
                href={contact.cvPath}
                className="group px-8 py-4 glass-panel text-sm font-medium text-ink-primary hover:text-accent hover:border-accent/40 transition-all rounded-xl flex items-center gap-2"
              >
                Download CV
                <svg className="w-4 h-4 text-ink-secondary group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-signal/5 blur-3xl rounded-full -z-10"></div>
             <div className="glass-card p-6 md:p-8 animate-float relative overflow-hidden group">
              {/* Subtle grid background inside card */}
              <div className="absolute inset-0 bg-grid opacity-10"></div>
              <ArmSchematic animate={!reduced} />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 md:mt-32 pt-10 border-t border-white/5"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {atAGlanceFacts.map((fact) => (
              <div key={fact.label} className="group cursor-default">
                <p className="font-mono text-2xs text-accent/70 uppercase tracking-widest mb-2 group-hover:text-accent transition-colors">{fact.label}</p>
                <p className="text-base text-ink-primary font-medium">{fact.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
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
      transition: { delay: i * 0.15 + 0.5, duration: 1.2, ease: "easeInOut" as const },
    }),
  };

  return (
    <svg viewBox="0 0 400 320" className="w-full h-auto drop-shadow-2xl" role="img" aria-label="Schematic diagram of a 6-DOF robot arm">
      <title>6-DOF manipulator schematic</title>
      
      {/* glowing filter */}
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" x2="400" y1={i * 40} y2={i * 40} />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v-${i}`} y1="0" y2="320" x1={i * 40} x2={i * 40} />
        ))}
      </g>

      <motion.line
        x1="60" y1="280" x2="60" y2="220"
        stroke="#4B5563" strokeWidth="8" strokeLinecap="round"
        custom={0} initial={animate ? "hidden" : "visible"} animate="visible" variants={draw}
      />
      <motion.line
        x1="60" y1="220" x2="160" y2="180"
        stroke="#9CA3AF" strokeWidth="6" strokeLinecap="round"
        custom={1} initial={animate ? "hidden" : "visible"} animate="visible" variants={draw}
      />
      <motion.line
        x1="160" y1="180" x2="230" y2="110"
        stroke="#00E5FF" strokeWidth="6" strokeLinecap="round" filter="url(#glow)"
        custom={2} initial={animate ? "hidden" : "visible"} animate="visible" variants={draw}
      />
      <motion.line
        x1="230" y1="110" x2="310" y2="95"
        stroke="#00E5FF" strokeWidth="5" strokeLinecap="round" filter="url(#glow)"
        custom={3} initial={animate ? "hidden" : "visible"} animate="visible" variants={draw}
      />
      <motion.line
        x1="310" y1="95" x2="345" y2="60"
        stroke="#00FF9D" strokeWidth="4" strokeLinecap="round" filter="url(#glow)"
        custom={4} initial={animate ? "hidden" : "visible"} animate="visible" variants={draw}
      />

      {[
        [60, 280, 10],
        [60, 220, 8],
        [160, 180, 7],
        [230, 110, 6],
        [310, 95, 5],
        [345, 60, 4],
      ].map(([cx, cy, r], i) => (
        <motion.circle
          key={i}
          cx={cx} cy={cy} r={r}
          fill="#0D0D10" stroke={i >= 2 ? "#00E5FF" : "#4B5563"} strokeWidth="2"
          filter={i >= 2 ? "url(#glow)" : ""}
          initial={animate ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.15 + 0.8, duration: 0.6, type: "spring" }}
        />
      ))}

      <text x="355" y="55" className="font-mono" fontSize="10" fill="#00FF9D" filter="url(#glow)">
        ee_link
      </text>
      <text x="15" y="300" className="font-mono" fontSize="10" fill="#9CA3AF">
        base_link
      </text>
    </svg>
  );
}
