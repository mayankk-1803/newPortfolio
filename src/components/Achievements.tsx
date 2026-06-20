"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy } from "lucide-react";

interface CounterProps {
  value: number;
  duration?: number; // in seconds
}

function Counter({ value, duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    if (start === end) return;

    // Calculate dynamic delay step based on target value
    const totalMs = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMs / end), 15);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  {
    value: 4,
    suffix: "+",
    label: "Major Projects",
    desc: "Production-ready MERN and Next.js applications.",
  },
  {
    value: 2,
    suffix: "",
    label: "Internships",
    desc: "Collaborative corporate experience.",
  },
  {
    value: 10,
    suffix: "+",
    label: "Core Techs",
    desc: "Libraries and tools mastered.",
  },
  {
    value: 100,
    suffix: "+",
    label: "Daily AI Requests",
    desc: "Integrated pipelines under continuous load.",
  },
];

export default function Achievements() {
  return (
    <section className="relative py-24 px-6 md:px-12 w-full max-w-7xl mx-auto z-20">
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
                <Counter value={stat.value} />
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
