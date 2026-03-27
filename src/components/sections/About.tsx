"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { UserIcon, MapPinIcon, BriefcaseIcon, GraduationCapIcon, DownloadIcon } from "@/components/ui/SocialIcons";
import { portfolioConfig } from "@/data/config";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="About Me" subtitle="A passion for building high-quality web experiences" align="left" />

        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left: Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-2 shadow-2xl">
              <div className="aspect-square relative overflow-hidden rounded-2xl bg-zinc-900">
                {portfolioConfig.profileImage ? (
                  <Image
                    src={portfolioConfig.profileImage}
                    alt={portfolioConfig.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-zinc-700">
                    <UserIcon size={80} />
                  </div>
                )}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 -z-0 h-32 w-32 rounded-full bg-cyan-500/20 blur-2xl" />
            <div className="absolute -top-6 -left-6 -z-0 h-32 w-32 rounded-full bg-blue-600/20 blur-2xl" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-space-grotesk md:text-3xl text-white">
                Who am I?
              </h3>
              <p className="text-lg leading-relaxed text-zinc-400">
                {portfolioConfig.bio}
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Experience", value: "Fresher", icon: BriefcaseIcon },
                { label: "Education", value: "BCA (4th Sem)", icon: GraduationCapIcon },
                { label: "Location", value: "Kathmandu", icon: MapPinIcon },
                { label: "Languages", value: portfolioConfig.languages.join(", "), icon: UserIcon },
              ].map((stat) => (
                <GlassCard key={stat.label} className="flex flex-col items-center justify-center p-4 text-center" hoverEffect={false}>
                  <div className="mb-2 text-cyan-400">
                    <stat.icon size={20} />
                  </div>
                  <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                  <div className="font-bold text-white text-[11px] leading-tight mt-1">{stat.value}</div>
                </GlassCard>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="pt-4">
              <a
                href={portfolioConfig.resumeFile}
                download
                className="group inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-3.5 font-semibold text-white transition-all hover:bg-white/10 hover:border-cyan-500/30"
              >
                <span>Download Resume</span>
                <DownloadIcon size={18} className="transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
