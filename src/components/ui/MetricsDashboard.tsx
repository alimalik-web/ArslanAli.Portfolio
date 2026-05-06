"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Target, Globe, Zap, BarChart3 } from "lucide-react";
import { campaignMetrics } from "@/lib/data";

function AnimatedNumber({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(parseFloat(start.toFixed(2)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {suffix === "%" ? display.toFixed(2) : display.toFixed(2)}
      {suffix}
    </span>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  ROAS: <TrendingUp size={20} />,
  CTR: <Target size={20} />,
  Market: <Globe size={20} />,
  Channel: <Zap size={20} />,
};

export default function MetricsDashboard() {
  const { campaign, metrics, context, market, channel } = campaignMetrics;

  return (
    <div className="w-full">
      {/* Header bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-6 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
          >
            <BarChart3 size={20} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--text-muted)" }}>
              Live Campaign Data
            </p>
            <h3 className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>
              {campaign}
            </h3>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="tag-pill">{market}</span>
          <span className="tag-pill">{channel} Ads</span>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: "rgba(16,185,129,0.15)", color: "#10b981", border: "1px solid rgba(16,185,129,0.3)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Profitable
          </span>
        </div>
      </motion.div>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card rounded-xl p-5 flex flex-col gap-2 group"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center mb-1 transition-all duration-300 group-hover:scale-110"
              style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
            >
              {iconMap[metric.label]}
            </div>
            <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--text-muted)" }}>
              {metric.description}
            </p>
            <p
              className="text-3xl font-black tracking-tight"
              style={{ color: "var(--accent)" }}
            >
              {metric.raw !== null ? (
                <AnimatedNumber value={metric.raw} suffix={metric.suffix} />
              ) : (
                metric.value
              )}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Context block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass-card rounded-2xl p-6 relative overflow-hidden"
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
          style={{ background: "var(--accent)" }}
        />
        <p className="text-sm leading-relaxed pl-4" style={{ color: "var(--text-secondary)" }}>
          <span className="font-semibold" style={{ color: "var(--text-primary)" }}>Strategy: </span>
          {context}
        </p>
      </motion.div>
    </div>
  );
}
