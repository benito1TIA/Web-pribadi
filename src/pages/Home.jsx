import MainLayout from "@/components/layout/MainLayout";
import BentoOverview from "@/components/sections/BentoOverview";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";
import Certificates from "@/components/sections/Certificates";


export default function Home() {
  return (
    <MainLayout>

      <Hero />
      <BentoOverview />
      <About />
      <Skills />
      <Experience />
      <Projects />
       <Certificates />
      <Contact />
    </MainLayout>
  );
}