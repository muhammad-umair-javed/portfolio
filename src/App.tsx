import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ResearchFocus from "./components/ResearchFocus";
import FlagshipProject from "./components/FlagshipProject";
import ArchitectureDiagram from "./components/ArchitectureDiagram";
import ProjectGrid from "./components/ProjectGrid";
import TechnicalStack from "./components/TechnicalStack";
import Timeline from "./components/Timeline";
import Achievements from "./components/Achievements";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <a
        href="#flagship"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] bg-accent text-canvas px-4 py-2 rounded"
      >
        Skip to main research
      </a>

      <Navigation />

      <main>
        <Hero />
        <ResearchFocus />
        <FlagshipProject />
        <ArchitectureDiagram />
        <ProjectGrid activeTech={activeTech} onClearTech={() => setActiveTech(null)} />
        <TechnicalStack activeTech={activeTech} onSelectTech={setActiveTech} />
        <Timeline />
        <Achievements />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
