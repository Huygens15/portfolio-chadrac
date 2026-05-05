import Hero from "@/components/Hero";
import About from "@/components/About";
import Parcours from "@/components/Parcours";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Parcours />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </main>
  );
}
