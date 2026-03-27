"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  GithubIcon, 
  GlobeIcon, 
  ExternalLinkIcon, 
  ArrowLeftIcon, 
  CodeIcon, 
  CalendarIcon, 
  LayoutIcon 
} from "@/components/ui/SocialIcons";
import { portfolioConfig } from "@/data/config";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";

export default function ProjectDetails() {
  const params = useParams();
  const router = useRouter();
  
  // Handled for Next.js 15/16 client-side params
  const id = params?.id as string;

  const project = portfolioConfig.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050709] text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <button
            onClick={() => router.push("/")}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050709] text-white selection:bg-cyan-500/30 font-inter">
      <Navbar />

      <main className="container mx-auto max-w-5xl px-6 pt-32 pb-24">
        {/* Back Link */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push("/#projects")}
          className="group mb-12 flex items-center gap-2 text-zinc-500 transition-colors hover:text-white"
        >
          <ArrowLeftIcon size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Projects</span>
        </motion.button>

        <div className="grid gap-12 lg:grid-cols-[1fr_350px]">
          {/* Main Content */}
          <div className="space-y-10">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-4xl font-bold font-space-grotesk md:text-6xl tracking-tight mb-4 leading-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Banner Image / Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl shadow-cyan-500/5"
            >
              {project.image ? (
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950">
                  <LayoutIcon size={64} className="text-zinc-800" />
                </div>
              )}
            </motion.div>

            {/* Description Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-12 bg-cyan-500/50" />
                <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-cyan-500">Overview</h2>
              </div>
              <p className="text-lg leading-relaxed text-zinc-400">
                {project.description}
              </p>
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <aside className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <GlassCard className="p-8 border-white/10 space-y-8 h-fit static">
                <div className="space-y-6">
                  <h3 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">Project Links</h3>
                  <div className="flex flex-col gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group rounded-xl bg-white/5 border border-white/5 p-4 transition-all hover:bg-white/10 hover:border-white/20"
                    >
                      <div className="flex items-center gap-3 text-white">
                        <GithubIcon size={20} />
                        <span className="font-bold">Source Code {!project.live && "(Ongoing)"}</span>
                      </div>
                      <ExternalLinkIcon size={16} className="text-zinc-500 group-hover:text-white" />
                    </a>
                    
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between group rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-4 transition-all hover:bg-cyan-500/20 hover:border-cyan-500/40"
                      >
                        <div className="flex items-center gap-3 text-cyan-400">
                          <GlobeIcon size={20} />
                          <span className="font-bold">Live Demo</span>
                        </div>
                        <ExternalLinkIcon size={16} className="text-cyan-500 group-hover:text-cyan-400" />
                      </a>
                    ) : (
                        <div className="flex items-center justify-between rounded-xl bg-amber-500/5 border border-amber-500/10 p-4">
                            <div className="flex items-center gap-3 text-amber-500 opacity-60">
                                <CalendarIcon size={20} />
                                <span className="font-bold">Ongoing Project</span>
                            </div>
                        </div>
                    )}
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <h3 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500 text-center">Development Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-zinc-400">
                        <CodeIcon size={18} className="text-cyan-500" />
                        <div className="text-xs">
                            <span className="block font-bold text-white uppercase tracking-tighter">Architecture</span>
                            Modern Web Microservices
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-zinc-400">
                        <CalendarIcon size={18} className="text-cyan-500" />
                        <div className="text-xs">
                            <span className="block font-bold text-white uppercase tracking-tighter">Status</span>
                            {project.live ? 'Production Ready' : 'In Development'}
                        </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </aside>
        </div>
      </main>

      <Footer />
      
      {/* Background visual accents */}
      <div className="fixed inset-0 -z-50 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
