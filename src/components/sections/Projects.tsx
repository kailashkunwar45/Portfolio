"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Code2, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { portfolioConfig } from "@/data/config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my recent work and open-source contributions"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioConfig.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="group h-full flex flex-col p-0 border-white/5 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-cyan-500/20">

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <Link href={`/projects/${project.id}`}>
                    <h4 className="mb-2 text-xl font-bold font-space-grotesk text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h4>
                  </Link>
                  <p className="mb-4 text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500"
                        >
                            {tech}
                        </span>
                        ))}
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-white transition-colors"
                        >
                            <GithubIcon size={16} />
                        </a>
                        {project.live && (
                            <a 
                                href={project.live} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-zinc-500 hover:text-cyan-400 transition-colors"
                            >
                                <ExternalLink size={16} />
                            </a>
                        )}
                        <Link 
                            href={`/projects/${project.id}`}
                            className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400 hover:text-white transition-colors ml-2"
                        >
                            Details <ArrowRight size={12} />
                        </Link>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* View More on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <a
            href={portfolioConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-white/10 px-8 py-3.5 font-semibold text-zinc-400 transition-all hover:bg-white/5 hover:text-white"
          >
            <span>See more on GitHub</span>
            <GithubIcon size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
