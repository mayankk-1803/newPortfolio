"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Dizipay Innovations Pvt. Ltd.",
    role: "Full Stack Developer",
    duration: "April 2026 – Present",
    highlights: [
      "Developing and maintaining production-grade fintech applications using React.js, Node.js, Express.js, and MongoDB.",
      "Built secure recharge, wallet, and payment modules handling real-time transactions at scale.",
      "Integrated multiple recharge and payment providers with smart failover and retry logic.",
      "Implemented Redis caching and queue processing to optimize high-throughput API performance.",
      "Managing production deployment using PM2, Docker, Linux servers, and aaPanel.",
      "Optimized backend APIs and overall application performance for enterprise-grade reliability.",
    ],
    accent: "#00F5D4",
  },
  {
    company: "CodeTech IT Solutions Pvt. Ltd.",
    role: "Frontend Developer Intern",
    duration: "June 2024 - July 2024",
    highlights: [
      "Built highly responsive React.js web interfaces, enhancing user experiences.",
      "Optimized client-side rendering speed and improved UI modularity by 25%.",
      "Developed interactive user dashboards with elegant modern layouts and states.",
    ],
    accent: "#00BBF9",
  },
  {
    company: "Unified Mentor",
    role: "Full Stack Developer Intern",
    duration: "March 2024 - May 2024",
    highlights: [
      "Engineered end-to-end MERN stack web applications from layout to deployment.",
      "Designed secure REST APIs with JWT authentication tokens and MongoDB handlers.",
      "Integrated complex database relationships and optimized query latency schemas.",
      "Collaborated on designing highly scalable backend configurations and server APIs.",
    ],
    accent: "#4361EE",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook scroll progress on the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scrollSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-24 md:py-32 px-6 md:px-12 w-full max-w-5xl mx-auto z-20"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-accent-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Headings */}
      <div className="flex flex-col items-start gap-4 mb-16 text-left select-none">
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-accent-teal" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">
            Career Timeline
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          PROFESSIONAL EXPERIENCE
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative mt-12 pl-6 md:pl-0">
        {/* Scroll-Filling Progress Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent-teal via-accent-cyan to-accent-blue origin-top h-full"
            style={{ scaleY: scrollSpring }}
          />
        </div>

        {/* Experience Items */}
        <div className="flex flex-col gap-16 md:gap-24">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.company}
                className={`flex flex-col md:flex-row items-stretch justify-start md:justify-between relative ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-bg-dark border-2 flex items-center justify-center"
                    style={{ borderColor: exp.accent }}
                    whileInView={{
                      scale: [0.8, 1.3, 1],
                      backgroundColor: exp.accent,
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  </motion.div>
                </div>

                {/* Left/Right Card Spacer for Desktop */}
                <div className="hidden md:block w-[45%]" />

                {/* Content Card */}
                <motion.div
                  className="w-full md:w-[45%] p-6 rounded-2xl glass-panel relative overflow-hidden text-left glow-border"
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Glass Card Glowing Effect */}
                  <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                      background: `radial-gradient(150px at top left, ${exp.accent}, transparent 100%)`,
                    }}
                  />

                  {/* Header info */}
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 text-accent-cyan text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.duration}</span>
                    </div>

                    <h3 className="text-xl font-display font-extrabold text-white">
                      {exp.company}
                    </h3>
                    <h4 className="text-sm font-semibold text-text-secondary leading-none">
                      {exp.role}
                    </h4>
                  </div>

                  {/* Highlights list */}
                  <ul className="flex flex-col gap-2 mt-4 text-xs md:text-sm font-light text-text-secondary leading-relaxed list-none">
                    {exp.highlights.map((highlight, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-accent-teal" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
