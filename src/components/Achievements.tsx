"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy } from "lucide-react";

interface CounterProps {
  value: number;
  start: boolean;
  duration?: number; // in seconds
}

function Counter({ value, start, duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frameId: number;
    let startTime: number | null = null;
    const totalMs = duration * 1000;

    const tick = (timestamp: number) => {
      startTime ??= timestamp;
      const progress = Math.min((timestamp - startTime) / totalMs, 1);
      setCount(Math.round(progress * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [value, duration, start]);

  return <span>{count}</span>;
}

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Projects Completed",
    desc: "Production-ready MERN, FinTech, and AI applications.",
  },
  {
    value: 5,
    suffix: "+",
    label: "Payment APIs Integrated",
    desc: "Multiple recharge & payment provider integrations.",
  },
  {
    value: 15,
    suffix: "+",
    label: "Core Technologies",
    desc: "React, Node.js, Redis, Docker, AWS & more mastered.",
  },
  {
    value: 1,
    suffix: "",
    label: "Live FinTech Platform",
    desc: "iRecharge — production fintech app serving real users.",
  },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 md:px-12 w-full max-w-7xl mx-auto z-20"
    >
      {/* Container Panel */}
      <div className="p-6 md:p-10 rounded-3xl glass-panel relative overflow-hidden flex flex-col md:flex-row items-center gap-10 glow-border text-left">
        {/* Decorative elements */}
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-accent-teal/5 rounded-full blur-xl pointer-events-none" />

        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-sm shrink-0">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-accent-teal" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">
              Milestones
            </span>
          </div>
          <h2 className="text-3xl font-display font-extrabold text-white leading-tight">
            NUMBERS THAT REFLECT QUALITY
          </h2>
          <p className="text-text-secondary text-xs md:text-sm font-light leading-relaxed">
            Consistently shipping robust system code, integrating intelligent API modules, and driving software performance standards.
          </p>
        </div>

        {/* Horizontal Divider for desktop, vertical for mobile */}
        <div className="w-full md:w-[1px] h-[1px] md:h-24 bg-white/5 shrink-0" />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col gap-1.5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-display font-black text-white flex items-center">
                <Counter value={stat.value} start={isInView} />
                <span className="text-accent-teal">{stat.suffix}</span>
              </div>
              <div className="text-sm font-bold text-white tracking-wide">{stat.label}</div>
              <div className="text-[10px] text-text-secondary leading-relaxed font-light">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
