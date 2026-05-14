import BackgroundParticles from "@/components/BackgroundParticles";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Volunteering from "@/components/Volunteering";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-deeper">
      <BackgroundParticles />
      <Navbar />
      <Hero />
      <StatsBar />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Education />
      <Volunteering />
      <Footer />
    </main>
  );
}
