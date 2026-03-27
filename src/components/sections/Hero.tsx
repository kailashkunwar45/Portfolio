"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon, GeneralLinkedinIcon, FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { portfolioConfig } from "@/data/config";
import { useTypingEffect } from "@/hooks/useTypingEffect";

export function Hero() {
  const typingText = useTypingEffect([...portfolioConfig.typingWords]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-20 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="container mx-auto max-w-5xl text-center">
        {/* Availability Badge */}
        {portfolioConfig.availableForWork && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-medium text-cyan-400 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            Available for new projects
          </motion.div>
        )}

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500"
        >
          {portfolioConfig.tagline}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl font-space-grotesk"
        >
          I&apos;m <span className="text-gradient">{portfolioConfig.name}</span>
        </motion.h1>

        {/* Typing Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 text-xl text-zinc-400 md:text-2xl h-12"
        >
          I <span className="font-mono text-cyan-400">{typingText}</span>
          <span className="animate-pulse text-cyan-400">|</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            Explore My Work
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20"
          >
            Let&apos;s Talk
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          {[
            { icon: GithubIcon, href: portfolioConfig.socials.github, label: "GitHub" },
            { icon: GeneralLinkedinIcon, href: portfolioConfig.socials.linkedin, label: "LinkedIn" },
            { icon: FacebookIcon, href: portfolioConfig.socials.facebook, label: "Facebook" },
            { icon: InstagramIcon, href: portfolioConfig.socials.instagram, label: "Instagram" },
          ].map((social) => (
            social.href && (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-10 w-10 overflow-hidden rounded-full transition-transform hover:-translate-y-1"
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-white/5 transition-colors group-hover:bg-cyan-500/10" />
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 transition-colors group-hover:text-cyan-400">
                  <social.icon size={20} />
                </div>
              </a>
            )
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-6 justify-center rounded-full border-2 border-zinc-700/50 p-1">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1.5 rounded-full bg-cyan-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
