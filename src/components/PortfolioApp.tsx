"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { usePortfolioStore, hydratePortfolioStore } from "@/store/portfolioStore";
import { AiAssistant } from "@/components/AiAssistant";
import { AnimatePresence, motion } from "framer-motion";

export function PortfolioApp() {
  const { hydrated, theme } = usePortfolioStore();

  // Use a local state to ensure we only show the splash on the very first mount
  // This is more resilient to back-navigation than just relying on the store
  useEffect(() => {
    if (!hydrated) {
      hydratePortfolioStore();
    }
  }, [hydrated]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // If we're on the server or not yet hydrated on the client, show the splash
  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050709] text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
          <p className="font-space-grotesk text-sm font-medium tracking-widest text-zinc-500 uppercase">
            Initializing Portfolio...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#050709] text-white selection:bg-cyan-500/30 selection:text-white">
      {/* Visual background elements */}
      <CustomCursor />
      <ParticlesBackground />
      
      {/* Progress / Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <AiAssistant />
      
      {/* Subtle overlays */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-cyan-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-600/5 blur-[120px]" />
      </div>
    </div>
  );
}
