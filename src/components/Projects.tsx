"use client";

import { ExternalLink, Sparkles, AlertCircle, Compass, ShieldCheck } from "lucide-react";
import { Github } from "./BrandIcons";

const projects = [
  {
    id: "ai-saas",
    title: "AI SaaS Platform",
    category: "AI + SaaS",
    role: "Full Stack & AI Developer",
    duration: "2 Months",
    desc: "A premium software-as-a-service application integrating natural language models and automated agent workflows.",
    problem: "High computational latency for batch AI requests, lack of integrated client request caching.",
    solution: "Designed a Redis queue and integrated the Groq API to parallelize prompts.",
    impact: "100+ daily requests at 40% faster response times.",
    techs: ["Next.js", "React", "Groq API", "Redis", "Docker", "Tailwind CSS"],
    github: "https://github.com/mayankk-1803",
    live: "https://github.com/mayankk-1803",
    accent: "from-accent-teal to-accent-cyan",
    glowColor: "rgba(0, 245, 212, 0.15)",
    featured: false,
  },
  {
    id: "irecharge",
    title: "iRecharge – FinTech Recharge & Wallet Platform",
    category: "FinTech + MERN",
    role: "Full Stack Developer",
    duration: "Production",
    desc: "Production-grade fintech platform supporting mobile recharge, DTH, FASTag, electricity, broadband, and utility bill payments with wallet management, cashback, referral system, and provider failover.",
    problem: "No unified platform handling multi-provider recharge with wallet, cashback, and failover in real-time.",
    solution: "Built a full MERN stack fintech system with Redis caching, JWT auth, PM2 process management, and smart provider routing.",
    impact: "Live production platform at irecharge.in with real users, wallet transactions, and multiple payment API integrations.",
    techs: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "Docker", "PM2", "aaPanel", "Linux", "AWS", "JWT"],
    github: "https://github.com/mayankk-1803",
    live: "https://irecharge.in",
    accent: "from-accent-teal to-accent-blue",
    glowColor: "rgba(0, 245, 212, 0.2)",
    featured: true,
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat Application",
    category: "MERN + WebSockets",
    role: "Full Stack Engineer",
    duration: "1 Month",
    desc: "A highly responsive messaging app featuring real-time room communication and online state alerts.",
    problem: "Standard polling-based message models experience substantial latency under high concurrent chats.",
    solution: "Implemented pure WebSockets with database transactional writing on Node.",
    impact: "Scales to 50+ concurrent users keeping latency below 200ms.",
    techs: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "JWT"],
    github: "https://github.com/mayankk-1803",
    live: "https://github.com/mayankk-1803",
    accent: "from-accent-blue to-accent-teal",
    glowColor: "rgba(67, 97, 238, 0.15)",
    featured: false,
  },
  {
    id: "prime-origin",
    title: "Prime Origin Export",
    category: "Business Platform",
    role: "Frontend Architect",
    duration: "1.5 Months",
    desc: "A high-performance export showcase site optimizing corporate logistics visualization and contact funnels.",
    problem: "Business website had sub-par mobile performance, affecting Google Search visibility index.",
    solution: "Configured server-side rendering, metadata layers, and optimized assets.",
    impact: "Achieved an 80% improvement in performance and 100% responsiveness.",
    techs: ["Next.js", "React.js", "Tailwind CSS", "SEO Engine", "Responsive Design"],
    github: "https://github.com/mayankk-1803",
    live: "https://github.com/mayankk-1803",
    accent: "from-accent-teal to-accent-blue",
    glowColor: "rgba(0, 245, 212, 0.15)",
    featured: false,
  },
  {
    id: "medimind",
    title: "MediMind AI",
    category: "AI Healthcare",
    role: "Lead Developer",
    duration: "3 Months",
    desc: "An intelligent healthcare support application empowering users with symptom checking and clinical document parsing.",
    problem: "Patients lack direct tools to cross-reference health symptoms or parse clinical reports.",
    solution: "Developed an interactive symptom chatbot fueled by quantized models and custom medical prompt maps.",
    impact: "Delivers instant symptom summaries and clinical insights safely.",
    techs: ["React.js", "Node.js", "Express.js", "MongoDB", "Groq API", "JWT"],
    github: "https://github.com/mayankk-1803",
    live: "https://github.com/mayankk-1803",
    accent: "from-accent-cyan to-accent-blue",
    glowColor: "rgba(0, 187, 249, 0.15)",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-12 w-full max-w-6xl mx-auto z-20">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-start gap-4 mb-16 text-left select-none">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-accent-cyan" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
            Selected Works
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          FEATURED PROJECTS
        </h2>
        <p className="max-w-xl text-text-secondary text-sm md:text-base font-light">
          A showcase of production fintech platforms, full-stack products, real-time messaging, and AI-powered applications.
        </p>
      </div>

      {/* Sticky Stacking Projects Grid */}
      <div className="flex flex-col gap-16 relative">
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            // sticky top gives the awesome stacking effect on scroll!
            className="sticky w-full rounded-3xl glass-panel relative overflow-hidden flex flex-col lg:flex-row items-stretch p-8 md:p-10 gap-8 md:gap-12 glow-border"
            style={{
              top: `${100 + idx * 30}px`,
              background: "rgba(17, 17, 17, 0.95)",
            }}
          >
            {/* Background Accent Highlight */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                background: `radial-gradient(250px at top right, ${proj.glowColor}, transparent 100%)`,
              }}
            />

            {/* Left Content Column */}
            <div className="flex-1 flex flex-col justify-between text-left gap-6 z-10">
              <div className="flex flex-col gap-4">
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono">
                  <span className="text-accent-teal uppercase tracking-widest font-semibold">
                    {proj.category}
                  </span>
                  {proj.featured && (
                    <span className="px-2.5 py-1 rounded-full bg-accent-teal/15 border border-accent-teal/30 text-accent-teal text-[10px] font-bold tracking-widest uppercase">
                      ⭐ Featured
                    </span>
                  )}
                  <span className="text-white/20">|</span>
                  <span className="text-text-secondary">Role: {proj.role}</span>
                  <span className="text-white/20">|</span>
                  <span className="text-text-secondary">Duration: {proj.duration}</span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
                  {proj.title}
                </h3>

                <p className="text-text-secondary text-sm md:text-base font-light leading-relaxed">
                  {proj.desc}
                </p>

                {/* Grid details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/5 pt-4 text-xs">
                  <div>
                    <div className="font-mono text-white/40 mb-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-accent-cyan" />
                      PROBLEM
                    </div>
                    <p className="text-text-secondary leading-relaxed font-light">{proj.problem}</p>
                  </div>
                  <div>
                    <div className="font-mono text-white/40 mb-1 flex items-center gap-1">
                      <Compass className="w-3 h-3 text-accent-teal" />
                      SOLUTION
                    </div>
                    <p className="text-text-secondary leading-relaxed font-light">{proj.solution}</p>
                  </div>
                  <div>
                    <div className="font-mono text-white/40 mb-1 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-accent-blue" />
                      IMPACT
                    </div>
                    <p className="text-white font-medium leading-relaxed">{proj.impact}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-auto">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 text-white text-xs font-semibold hover:bg-white/10 transition-colors duration-300"
                >
                  <Github className="w-4 h-4 text-text-secondary" />
                  GitHub Code
                </a>
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-teal to-accent-cyan text-black text-xs font-semibold hover:opacity-90 transition-opacity duration-300"
                >
                  {proj.featured ? "Live Demo" : "Live Preview"}
                  <ExternalLink className="w-4 h-4 text-black" />
                </a>
              </div>
            </div>

            {/* Right Card Column: Tech List Visual */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 min-h-[200px] lg:min-h-auto">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${proj.accent} opacity-5 blur-xl pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center">
                {/* Visual grid layout showing tech stack tags in a creative design */}
                <div className="text-[10px] tracking-[0.25em] font-mono text-white/30 uppercase mb-2">
                  Built With
                </div>

                <div className="flex flex-wrap justify-center gap-2 max-w-xs">
                  {proj.techs.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-2 rounded-xl bg-black/60 border border-white/5 text-xs text-white/80 font-mono shadow-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Subtitle tag */}
                <div className="mt-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-accent-cyan font-bold tracking-widest uppercase">
                  {proj.featured ? "Live in Production" : "Production Optimized"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
