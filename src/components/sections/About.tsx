"use client";

import { motion } from "framer-motion";
import { Zap, Globe, Code2, TrendingUp } from "lucide-react";
import { skills } from "@/lib/data";

const journey = [
  {
    icon: <Zap size={16} />,
    label: "DAE Electrical Engineering",
    desc: "Strong analytical and systems-thinking foundation.",
  },
  {
    icon: <Code2 size={16} />,
    label: "Self-taught Full Stack Dev",
    desc: "MERN stack, Next.js, TypeScript — built in production.",
  },
  {
    icon: <Globe size={16} />,
    label: "WordPress & E-commerce",
    desc: "Scaling brands across Pakistan, UAE, and USA.",
  },
  {
    icon: <TrendingUp size={16} />,
    label: "Growth Architect",
    desc: "Data-driven Meta Ads, SEO, and conversion optimization.",
  },
];

export default function About() {
  return (
    <section id="about" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">About</p>
            <h2 className="section-title">
              Engineer by training.{" "}
              <span className="gradient-text">Builder by choice.</span>
            </h2>
            <div className="space-y-4 mt-6">
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I started as a <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>DAE Electrical Engineer</span> — trained to understand systems, signals, and how things connect at a fundamental level. That mindset never left me when I moved into software.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Today I build <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>full-stack MERN applications</span>, craft high-converting Shopify and WordPress stores, and design Meta Ads funnels that turn ad spend into measurable revenue — across Pakistan, UAE, and the USA.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                My edge? I understand <span style={{ color: "var(--accent)", fontWeight: 600 }}>both the technical architecture and the business ROI</span> behind every decision. I don&apos;t just write code — I engineer outcomes.
              </p>
            </div>

            {/* Journey timeline */}
            <div className="mt-8 space-y-4">
              {journey.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{step.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: skills grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {Object.entries(skills).map(([category, items], ci) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 + 0.3 }}
                className="glass-card rounded-xl p-5"
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:border-emerald-500 hover:text-emerald-400"
                      style={{
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
