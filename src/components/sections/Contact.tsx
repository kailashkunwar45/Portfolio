"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";
import { GithubIcon, GeneralLinkedinIcon, FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { portfolioConfig } from "@/data/config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden backdrop-blur-sm">
      {/* Decorative gradient behind contact section */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind? Let's discuss how we can work together."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-space-grotesk text-white">Contact Information</h3>
              <p className="text-zinc-400">
                Feel free to reach out for collaborations, project inquiries, or just to say hi. I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: "Email", value: portfolioConfig.contact.email, icon: Mail, href: `mailto:${portfolioConfig.contact.email}` },
                { label: "Phone", value: portfolioConfig.contact.phone, icon: Phone, href: `tel:${portfolioConfig.contact.phone}` },
                { label: "Location", value: portfolioConfig.contact.location, icon: MapPin },
              ].map((item) => (
                <GlassCard
                  key={item.label}
                  className="group flex items-center gap-4 border-white/5 hover:border-cyan-500/20 p-4"
                  hoverEffect={false}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
                    <item.icon size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-cyan-400 font-bold transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-bold">{item.value}</span>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold font-space-grotesk text-white">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: GeneralLinkedinIcon, href: portfolioConfig.socials.linkedin, label: "LinkedIn" },
                  { icon: GithubIcon, href: portfolioConfig.socials.github, label: "GitHub" },
                  { icon: FacebookIcon, href: portfolioConfig.socials.facebook, label: "Facebook" },
                  { icon: InstagramIcon, href: portfolioConfig.socials.instagram, label: "Instagram" },
                ].map((social) => (
                  social.href && (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:text-cyan-400"
                      aria-label={social.label}
                    >
                      <social.icon size={22} />
                    </a>
                  )
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <GlassCard className="relative p-8 border-white/5 bg-zinc-950/40 backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Full Name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3 px-4 text-white placeholder:text-zinc-600 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Email Address</label>
                    <input
                      required
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3 px-4 text-white placeholder:text-zinc-600 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Subject</label>
                  <input
                    required
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3 px-4 text-white placeholder:text-zinc-600 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={6}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 py-3 px-4 text-white placeholder:text-zinc-600 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                  />
                </div>

                <button
                  disabled={status === "submitting" || status === "success"}
                  type="submit"
                  className="group relative w-full flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-white shadow-lg transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <AnimatePresence mode="wait">
                    {status === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle size={20} /> Sent Successfully
                      </motion.div>
                    ) : (
                      <motion.div
                        key="submit"
                        className="flex items-center gap-2"
                      >
                        {status === "submitting" ? "Sending..." : "Send Message"}
                        <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
