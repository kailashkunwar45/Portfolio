"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioConfig, SkillCategory } from "@/data/config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

const categories: SkillCategory[] = ["Frontend", "Backend", "Tools"];

export function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("Frontend");

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-zinc-950/20">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="My Skills"
          subtitle="A comprehensive toolkit for full-stack development"
        />

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1 gap-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === cat ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {activeTab === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {portfolioConfig.skills[activeTab].map((skill, index) => (
              <GlassCard key={skill.name} className="group flex flex-col gap-4 overflow-hidden border-white/5 hover:border-cyan-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h4 className="font-bold text-white tracking-tight">{skill.name}</h4>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-bold">{skill.level}%</span>
                </div>

                {/* Progress Bar Container */}
                <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-900 border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.1 + index * 0.05, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                  />
                </div>

                {/* Status Indicator */}
                <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-zinc-500 opacity-50">
                  <span>Level</span>
                  <span>{skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Skilled"}</span>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
