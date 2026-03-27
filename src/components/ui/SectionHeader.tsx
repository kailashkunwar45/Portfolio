"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({ title, subtitle, align = "center" }: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl font-space-grotesk"
      >
        <span className="text-gradient">{title}</span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 max-w-[600px] text-zinc-400 md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
        className={`mt-4 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
