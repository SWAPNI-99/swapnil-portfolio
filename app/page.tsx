import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import JarvisArchitecture from "@/components/sections/JarvisArchitecture";
import Experience from "@/components/sections/Experience";
import EquityMinds from "@/components/sections/EquityMinds";
import Skills from "@/components/sections/Skills";
import Coding from "@/components/sections/Coding";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <JarvisArchitecture />
        <Experience />
        <EquityMinds />
        <Skills />
        <Coding />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}