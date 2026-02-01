import ContactFooter from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Experience from "@/features/home/ExperienceSection";
import Hero from "@/features/home/HeroSection";
import ProjectSection from "@/features/home/ProjectSection";
import Skills from "@/features/home/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <ProjectSection />
    <Skills />
    <Experience />
    <ContactFooter />
    </>
  );
}
