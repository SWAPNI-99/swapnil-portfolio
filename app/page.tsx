import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Focus from "@/components/sections/Focus";
import Jarvis from "@/components/sections/Jarvis";
import JarvisArchitecture from "@/components/sections/JarvisArchitecture";
import Hackathon from "@/components/sections/Hackathon";
import EquityMinds from "@/components/sections/EquityMinds";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Coding from "@/components/sections/Coding";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-accent/25 selection:text-white">
      {/* Top sticky navigation bar */}
      <Navbar />

      {/* Main content flow */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero with interactive System Status console */}
        <Hero />

        {/* 2. Editorial About: Identity & Ambition */}
        <About />

        {/* 3. Current Focus Dashboard: Building, Learning, Exploring */}
        <Focus />

        {/* 4. Flagship Project: Jarvis Spotlight */}
        <Jarvis />

        {/* 5. Jarvis Interactive Architecture & Subsystems */}
        <JarvisArchitecture />

        {/* 6. Technical Competition: Smart India Hackathon 2026 */}
        <Hackathon />

        {/* 7. Venture Initiative: Equity Minds (Mini Startup Profile) */}
        <EquityMinds />

        {/* 8. Formal Academic Credentials: MNIT Jaipur & Schooling */}
        <Education />

        {/* 9. Extracurricular Leadership & Experience Timeline */}
        <Experience />

        {/* 10. Honest Skill Matrix & Domain Proficiencies */}
        <Skills />

        {/* 11. Coding Consistency & LeetCode Tracker */}
        <Coding />

        {/* 12. Verified Milestones */}
        <Achievements />

        {/* 13. Direct Contact & Social Action Hub */}
        <Contact />
      </main>

      {/* Modern Minimal Footer */}
      <Footer />
    </div>
  );
}