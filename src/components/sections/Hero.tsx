"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { siteMetadata } from "@/lib/data";

const GithubIcon = ({ size }: { size: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const LinkedinIcon = ({ size }: { size: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Left Column (Span-7) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 uppercase tracking-widest bg-white/[0.03] border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-white/80">Available for new projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl sm:text-8xl font-black tracking-tighter leading-[1.1] mb-6"
          >
            I&apos;m Arslan.<br />
            <span className="text-reveal block mt-2">Scalable Apps</span> &amp; <span className="text-reveal">Funnels</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed text-white/70"
          >
            {siteMetadata.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <a href="#projects" className="px-8 py-3.5 rounded-2xl border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold flex items-center gap-2">
              Explore Work <ArrowRight size={18} />
            </a>
            <a href="#metrics" className="px-8 py-3.5 rounded-2xl border border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 font-semibold flex items-center gap-2">
              View Case Studies <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-5"
          >
            {[
              { href: siteMetadata.github, icon: <GithubIcon size={20} />, label: "GitHub" },
              { href: siteMetadata.linkedin, icon: <LinkedinIcon size={20} />, label: "LinkedIn" },
              { href: `mailto:${siteMetadata.email}`, icon: <Mail size={20} />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/10 bg-white/[0.03] border border-white/10 text-white/60 hover:text-purple-400"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column (Span-5) */}
        <div className="lg:col-span-5 relative w-full h-[500px] hidden lg:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, rotate: -15, x: -50, y: 20 }}
            animate={{ opacity: 1, rotate: -5, x: -30, y: 10 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="absolute w-[280px] h-[380px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.15)] z-10 bg-[#050505]"
          >
            <Image src="/hero/img1.png" alt="Workspace" fill sizes="(max-width: 1024px) 100vw, 300px" className="object-cover opacity-80" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, rotate: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="absolute w-[300px] h-[400px] rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_60px_rgba(59,130,246,0.2)] z-20 bg-[#0a0a0a]"
          >
            <Image src="/hero/img2.png" alt="Funnel" fill sizes="(max-width: 1024px) 100vw, 300px" className="object-cover opacity-90" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 15, x: 50, y: 20 }}
            animate={{ opacity: 1, rotate: 5, x: 30, y: 10 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            className="absolute w-[280px] h-[380px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.15)] z-30 bg-[#050505]"
          >
            <Image src="/hero/img3.png" alt="Keyboard" fill sizes="(max-width: 1024px) 100vw, 300px" className="object-cover opacity-80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
