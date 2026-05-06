"use client";

import { motion } from "framer-motion";
import MetricsDashboard from "@/components/ui/MetricsDashboard";

export default function Metrics() {
  return (
    <section id="metrics" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Data Proof</p>
            <h2 className="section-title">
              Scaling E-com <br />
              <span className="gradient-text">With Data</span>
            </h2>
            <p className="text-base leading-relaxed mt-6 mb-6" style={{ color: "var(--text-secondary)" }}>
              Beyond writing scalable code, I specialize in architecting growth engines. This dashboard highlights a real-world Meta Ads campaign for a USA/UAE e-commerce brand.
            </p>
            <ul className="space-y-4">
              {[
                "Targeted high-intent UAE audiences",
                "Optimized funnel via custom analytics",
                "Achieved profitable ROAS within 2 weeks",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0"
                    style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
                  >
                    ✓
                  </span>
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Dashboard */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MetricsDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
