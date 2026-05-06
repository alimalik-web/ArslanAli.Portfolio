"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/lib/data";

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Framer Motion scroll hook to draw the line down the timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-purple-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="section-label">Journey</p>
          <h2 className="section-title">
            Experience <span className="text-reveal">&amp; Timeline</span>
          </h2>
          <p className="section-subtitle">
            My professional path bridging systems engineering, full-stack development, and e-commerce growth strategies.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Main vertical line background (subtle track) */}
          <div className="absolute left-[19px] md:left-[39px] top-6 bottom-0 w-[2px] bg-white/5 rounded-full" />
          
          {/* Animated fill line drawn on scroll */}
          <motion.div 
            className="absolute left-[19px] md:left-[39px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-blue-500 rounded-full origin-top"
            style={{ scaleY: lineHeight }}
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative grid grid-cols-[auto_1fr] gap-4 md:gap-8">
                
                {/* Line & Orb Container */}
                <div className="relative flex justify-center w-[40px] md:w-[80px] pt-6">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="w-6 h-6 bg-black border-2 border-purple-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  </motion.div>
                </div>

                {/* Content Container */}
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="aayush-card p-6 md:p-8 hover:border-purple-500/30 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold font-clash text-white group-hover:text-purple-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-blue-400 font-semibold mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-white/60 whitespace-nowrap w-fit">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-white/70 leading-relaxed mb-6 text-sm md:text-base">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white/60 transition-colors group-hover:border-blue-500/30 group-hover:text-white/90"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
