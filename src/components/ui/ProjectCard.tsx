"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  color: string;
  featured?: boolean;
  index?: number;
}

export default function ProjectCard({
  name,
  description,
  url,
  category,
  tags,
  color,
  featured = false,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        style={{ cursor: "none" }}
      >
        <div
          className="glass-card rounded-xl p-6 h-full flex flex-col gap-4 relative overflow-hidden"
        >
          {/* Accent glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
            style={{
              background: `radial-gradient(circle at top left, ${color}10 0%, transparent 60%)`,
            }}
          />

          {/* Top row */}
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-center gap-2">
              {/* Color dot */}
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: color, boxShadow: `0 0 8px ${color}80` }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                {category}
              </span>
            </div>
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.2 }}
            >
              <ArrowUpRight size={18} style={{ color }} />
            </motion.div>
          </div>

          {/* Title */}
          <h3
            className="text-lg font-bold relative z-10 group-hover:translate-x-1 transition-transform duration-300"
            style={{ color: "var(--text-primary)" }}
          >
            {name}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed flex-1 relative z-10"
            style={{ color: "var(--text-secondary)" }}
          >
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 relative z-10">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider transition-all duration-200 group-hover:scale-105"
                style={{
                  background: `${color}15`,
                  color: color,
                  border: `1px solid ${color}30`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* URL row */}
          <div
            className="flex items-center gap-1.5 text-xs relative z-10"
            style={{ color: "var(--text-muted)" }}
          >
            <ExternalLink size={12} />
            <span className="truncate">{url.replace(/^https?:\/\//, "")}</span>
          </div>

          {/* Featured badge */}
          {featured && (
            <div
              className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full"
              style={{
                background: `${color}20`,
                color: color,
                border: `1px solid ${color}40`,
              }}
            >
              Featured
            </div>
          )}
        </div>
      </a>
    </motion.div>
  );
}
