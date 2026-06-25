"use client";

import { motion } from "framer-motion";
import { Layers, Sparkles, Workflow, Palette, CloudLightning, Gauge, HelpCircle } from "lucide-react";

const cards = [
  {
    icon: <Layers className="w-6 h-6 text-accent-teal" />,
    title: "FinTech Development",
    desc: "Building production-grade fintech systems — wallet engines, recharge APIs, payment gateways, cashback logic, and smart provider failover at scale.",
    glow: "rgba(0, 245, 212, 0.15)",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-accent-cyan" />,
    title: "Full Stack Engineering",
    desc: "Seamlessly bridging React.js frontend with Node.js/Express.js backends — from REST API design to MongoDB data modeling and JWT security.",
    glow: "rgba(0, 187, 249, 0.15)",
  },
  {
    icon: <Workflow className="w-6 h-6 text-accent-blue" />,
    title: "Scalable Architecture",
    desc: "Engineering Redis caching, queue processing, decoupled service interfaces, and robust database models built for high-throughput production environments.",
    glow: "rgba(67, 97, 238, 0.15)",
  },
  {
    icon: <Palette className="w-6 h-6 text-accent-teal" />,
    title: "Modern UI/UX",
    desc: "Designing immersive web applications with fluid animations, micro-interactions, Tailwind CSS, and 100% device responsiveness.",
    glow: "rgba(0, 245, 212, 0.15)",
  },
  {
    icon: <CloudLightning className="w-6 h-6 text-accent-cyan" />,
    title: "DevOps & Deployment",
    desc: "Managing production deployments with PM2, Docker, aaPanel, Linux servers, AWS EC2/S3 — ensuring uptime, performance, and maintainability.",
    glow: "rgba(0, 187, 249, 0.15)",
  },
  {
    icon: <Gauge className="w-6 h-6 text-accent-blue" />,
    title: "Performance Optimization",
    desc: "Optimizing API latency, Redis-backed caching, bundle performance, and Lighthouse scores — delivering fast, reliable experiences under real production load.",
    glow: "rgba(67, 97, 238, 0.15)",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 w-full max-w-7xl mx-auto z-20">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Headings */}
      <div className="flex flex-col items-center text-center gap-4 mb-16 select-none">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-accent-cyan" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
            Valued Expertise
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          WHY WORK WITH ME?
        </h2>
        <p className="max-w-xl text-text-secondary text-sm md:text-base font-light">
          Bringing a balance of modern design aesthetics, cutting-edge AI features, and battle-tested code architecture.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            className="p-6 rounded-2xl glass-panel relative overflow-hidden glow-border group cursor-default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            {/* Spotlight Glow Background */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(150px at 50% 50%, ${card.glow}, transparent 100%)`,
              }}
            />

            {/* Glowing Accent Top Border */}
            <div
              className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(90deg, transparent, ${card.glow.replace("0.15", "0.8")}, transparent)`,
              }}
            />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {card.icon}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-display font-bold text-white text-lg group-hover:text-accent-teal transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
