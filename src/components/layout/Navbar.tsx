"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "var(--bg-secondary)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" style={{ cursor: "none" }}>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid var(--border-accent)" }}
            >
              <Code2 size={16} />
            </div>
            <span className="font-bold text-sm tracking-wide" style={{ color: "var(--text-primary)" }}>
              Arslan<span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="text-sm font-medium transition-colors duration-200 hover:text-emerald-400"
                style={{ color: "var(--text-secondary)", cursor: "none" }}
              >
                <span style={{ color: "var(--accent)", fontFamily: "var(--font-geist-mono)", fontSize: "0.7rem" }}>
                  0{i + 1}.{" "}
                </span>
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden md:inline-flex btn-primary text-xs py-2 px-4"
            >
              Hire Me
            </a>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)", cursor: "none" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-8 md:hidden"
            style={{ background: "var(--bg-primary)", borderLeft: "1px solid var(--border)" }}
          >
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-2xl font-bold"
                  style={{ color: "var(--text-primary)", cursor: "none" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <span style={{ color: "var(--accent)", fontSize: "1rem", fontFamily: "var(--font-geist-mono)" }}>
                    0{i + 1}.{" "}
                  </span>
                  {link.label}
                </motion.a>
              ))}
              <a href="#contact" className="btn-secondary mt-4 justify-center" onClick={() => setMobileOpen(false)}>
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
