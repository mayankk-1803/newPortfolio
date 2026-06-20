"use client";

import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";

const certificates = [
  {
    title: "JavaScript Intermediate",
    issuer: "HackerRank",
    date: "June 2024",
    desc: "Validates core language capability in intermediate JavaScript, async callbacks, prototypes, event handlers, and data mutations.",
    accent: "rgba(0, 245, 212, 0.2)",
    color: "#00F5D4",
  },
  {
    title: "Web Development Workshop",
    issuer: "Microsoft Learn Student Ambassador",
    date: "April 2024",
    desc: "Covers modern responsive layouts, state handling, document object models, APIs, and standard hosting configurations.",
    accent: "rgba(0, 187, 249, 0.2)",
    color: "#00BBF9",
  },
];

export default function Certifications() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="relative py-24 px-6 md:px-12 w-full max-w-5xl mx-auto z-20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[250px] h-[250px] bg-accent-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Headings */}
      <div className="flex flex-col items-center text-center gap-4 mb-16 select-none">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-accent-cyan" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
            Credentials
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          CERTIFICATIONS
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            className="p-6 md:p-8 rounded-3xl glass-panel relative overflow-hidden group cursor-default glow-border"
            style={{
              // Set fallback custom properties for styling
              "--mouse-x": "50%",
              "--mouse-y": "50%",
            } as React.CSSProperties}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Holographic Glare Overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `
                  radial-gradient(220px circle at var(--mouse-x) var(--mouse-y), ${cert.accent}, transparent 80%),
                  linear-gradient(135deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.01) 100%)
                `,
                mixBlendMode: "overlay",
              }}
            />

            {/* Glowing dot in glare */}
            <div
              className="absolute w-20 h-20 rounded-full blur-[40px] opacity-0 group-hover:opacity-30 pointer-events-none transition-opacity duration-300"
              style={{
                left: "calc(var(--mouse-x) - 40px)",
                top: "calc(var(--mouse-y) - 40px)",
                backgroundColor: cert.color,
              }}
            />

            <div className="relative z-10 flex flex-col gap-6">
              {/* Badge Icon &amp; Date */}
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/5 transition-transform duration-300 group-hover:scale-110">
                  <Award className="w-6 h-6 text-accent-teal" />
                </div>
                <span className="text-xs font-mono text-text-secondary">{cert.date}</span>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-2">
                <div className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">
                  {cert.issuer}
                </div>
                <h3 className="text-xl md:text-2xl font-display font-extrabold text-white">
                  {cert.title}
                </h3>
                <p className="text-text-secondary text-sm font-light leading-relaxed mt-2">
                  {cert.desc}
                </p>
              </div>

              {/* Verification badge */}
              <div className="flex items-center gap-1.5 text-[10px] text-accent-teal font-mono bg-accent-teal/5 border border-accent-teal/15 px-3 py-1 rounded-full self-start">
                <Sparkles className="w-3 h-3 text-accent-teal" />
                VERIFIED CREDENTIAL
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
