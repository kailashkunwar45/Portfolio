"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
};

export function GlassCard({ children, className = "", hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`glass relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-cyan-500/20 shadow-xl ${className}`}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
