"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { portfolioConfig } from "@/data/config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export function Experience() {
  const allItems = [...portfolioConfig.experience, ...portfolioConfig.education].sort((a, b) => {
    // Basic sorting by year if available, for now just keeping them as is since they are small
    return 0;
  });

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-zinc-950/20">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Experience & Education" subtitle="My professional journey and academic background" />

        <div className="relative mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:max-w-4xl">
          {/* Work Experience */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold font-space-grotesk text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Briefcase size={22} />
              </div>
              Work Experience
            </h3>

            {portfolioConfig.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="group relative border-white/5 bg-gradient-to-br from-white/5 to-transparent p-6 hover:border-cyan-500/20">
                  <div className="mb-1 flex items-center justify-between">
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h4>
                  </div>
                  <div className="mb-4 text-sm font-semibold text-zinc-500 uppercase tracking-wider">
                    {exp.company}
                  </div>

                  <div className="mb-4 flex flex-wrap gap-4 text-xs text-zinc-500 font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-1.5 backdrop-blur-sm rounded-full bg-white/5 px-3 py-1 border border-white/5">
                      <Calendar size={12} className="text-cyan-500/50" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-400">
                    {exp.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold font-space-grotesk text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                <GraduationCap size={22} />
              </div>
              Education
            </h3>

            {portfolioConfig.education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="group relative border-white/5 bg-gradient-to-br from-white/5 to-transparent p-6 hover:border-blue-500/20">
                  <h4 className="mb-1 text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {edu.degree}
                  </h4>
                  <div className="mb-4 text-sm font-semibold text-zinc-500 uppercase tracking-wider">
                    {edu.institution}
                  </div>

                  <div className="mb-4 flex flex-wrap gap-4 text-xs text-zinc-500 font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-1.5 backdrop-blur-sm rounded-full bg-white/5 px-3 py-1 border border-white/5">
                      <Calendar size={12} className="text-blue-500/50" />
                      {edu.period}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-400">
                    {edu.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
