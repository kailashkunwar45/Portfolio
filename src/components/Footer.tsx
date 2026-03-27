"use client";

import { motion } from "framer-motion";
import { GithubIcon, GeneralLinkedinIcon, FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { portfolioConfig } from "@/data/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-zinc-950/40 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <a href="#hero" className="text-2xl font-bold font-space-grotesk tracking-tighter">
              <span className="text-gradient">KK</span>
            </a>
            <p className="text-sm text-zinc-500">
              © {currentYear} {portfolioConfig.name}. All rights reserved.
            </p>
          </div>


          {/* Social Links */}
          <div className="flex gap-4">
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
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:text-cyan-400"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              )
            ))}
          </div>
        </div>

        {/* Back to top (Visual only) */}
        <div className="mt-8 flex justify-center">
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xs uppercase font-bold tracking-widest text-zinc-600 hover:text-cyan-400 transition-colors"
            >
                Back to top ↑
            </button>
        </div>
      </div>
    </footer>
  );
}
