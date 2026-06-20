"use client";

import { motion } from "framer-motion";
import { Laptop, Cpu, Database, HardDrive, Sparkles, Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Laptop className="w-5 h-5 text-accent-teal" />,
    skills: ["React.js", "Next.js 15", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    color: "rgba(0, 245, 212, 0.15)",
    text: "#00F5D4",
  },
  {
    title: "Backend Engineering",
    icon: <Cpu className="w-5 h-5 text-accent-cyan" />,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "WebSocket", "Groq Client"],
    color: "rgba(0, 187, 249, 0.15)",
    text: "#00BBF9",
  },
  {
    title: "Database Systems",
    icon: <Database className="w-5 h-5 text-accent-blue" />,
    skills: ["MongoDB", "NeonDB (PostgreSQL)", "Mongoose", "SQL Basics"],
    color: "rgba(67, 97, 238, 0.15)",
    text: "#4361EE",
  },
  {
    title: "DevOps & Cloud",
    icon: <HardDrive className="w-5 h-5 text-accent-teal" />,
    skills: ["Docker", "AWS Hosting", "Linux Terminal", "Git", "GitHub Action"],
    color: "rgba(0, 245, 212, 0.15)",
    text: "#00F5D4",
  },
  {
    title: "AI Integration",
    icon: <Sparkles className="w-5 h-5 text-accent-cyan" />,
    skills: ["Groq API", "Prompt Engineering", "AI Chatbots", "Generative AI", "Vector Embeddings"],
    color: "rgba(0, 187, 249, 0.15)",
    text: "#00BBF9",
  },
];

export default function FeaturedTechnologies() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-12 w-full max-w-7xl mx-auto z-20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-teal/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Headings */}
      <div className="flex flex-col items-center text-center gap-4 mb-16 select-none">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-accent-teal" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">
            Technical Stack
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          SKILLS &amp; TECHNOLOGIES
        </h2>
        <p className="max-w-xl text-text-secondary text-sm md:text-base font-light">
          A breakdown of libraries, tools, database structures, and artificial intelligence models I work with.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="p-6 rounded-2xl glass-panel relative overflow-hidden group cursor-default glow-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            {/* Hover Spotlight Glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(150px at 50% 50%, ${category.color}, transparent 100%)`,
              }}
            />

            <div className="relative z-10 flex flex-col gap-5 h-full">
              {/* Category Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5">{category.icon}</div>
                  <h3 className="font-display font-bold text-white text-base">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Badges Grid */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/5 text-xs text-text-secondary transition-colors duration-300 hover:text-white hover:border-white/25 cursor-pointer"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
