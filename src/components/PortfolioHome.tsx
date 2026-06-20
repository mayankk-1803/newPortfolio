"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Experience from "@/components/Experience";
import FeaturedTechnologies from "@/components/FeaturedTechnologies";
import Projects from "@/components/Projects";
import GithubActivity from "@/components/GithubActivity";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function PortfolioHome() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Cinematic logo loading screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Landing page layout */}
      <SmoothScrollProvider>
        <div
          className={`flex flex-col w-full relative z-10 transition-opacity duration-1000 ${
            !isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Navbar />

          <main className="flex-1 w-full flex flex-col">
            <Hero />
            <TechMarquee />
            <About />
            <WhyWorkWithMe />
            <Experience />
            <FeaturedTechnologies />
            <Projects />
            <GithubActivity />
            <Achievements />
            <Certifications />
            <Contact />
          </main>

          <Footer />
        </div>
      </SmoothScrollProvider>
    </>
  );
}
