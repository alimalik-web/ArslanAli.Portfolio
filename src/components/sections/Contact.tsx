"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send message");
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative">
      {/* Background element */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <p className="section-label justify-center">Contact</p>
          <h2 className="section-title">
            Let&apos;s Build <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Whether you need a full-stack application, an e-commerce growth strategy, or just want to connect — my inbox is open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent rounded-lg px-4 py-3 text-sm transition-colors focus:outline-none"
                  style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent rounded-lg px-4 py-3 text-sm transition-colors focus:outline-none"
                  style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-transparent rounded-lg px-4 py-3 text-sm transition-colors focus:outline-none resize-none"
                style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                placeholder="How can I help you?"
              />
            </div>

            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="w-full btn-secondary justify-center py-4"
              style={{ opacity: isSubmitting || isSuccess ? 0.8 : 1 }}
            >
              {isSubmitting ? (
                <><Loader2 size={18} className="animate-spin" /> Sending...</>
              ) : isSuccess ? (
                <><CheckCircle2 size={18} /> Message Sent</>
              ) : (
                <><Send size={18} /> Send Message</>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
