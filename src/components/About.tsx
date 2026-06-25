"use client";

import { motion } from "framer-motion";
import { Brain, Server, Code2, Cloud, Sparkles } from "lucide-react";

interface RevealTextProps {
  text: string;
}

function RevealText({ text }: RevealTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
  } as const;

  return (
    <motion.p
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="text-lg md:text-2xl text-text-secondary leading-relaxed font-light flex flex-wrap gap-x-2 gap-y-1.5"
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block text-white/95">
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default function About() {
  const corePillars = [
    {
      icon: <Code2 className="w-5 h-5 text-accent-teal" />,
      title: "FinTech Development",
      desc: "Building production-grade fintech applications — wallet systems, recharge platforms, and payment APIs at scale.",
    },
    {
      icon: <Brain className="w-5 h-5 text-accent-cyan" />,
      title: "AI Integration",
      desc: "Integrating Groq API, AI chatbots, prompt engineering, and AI-powered features into modern web applications.",
    },
    {
      icon: <Server className="w-5 h-5 text-accent-blue" />,
      title: "Backend Systems",
      desc: "Designing secure REST APIs, JWT authentication, Redis caching, queue processing, and MongoDB at production scale.",
    },
    {
      icon: <Cloud className="w-5 h-5 text-accent-teal" />,
      title: "DevOps & Cloud",
      desc: "PM2, Docker, aaPanel, AWS EC2/S3, and Linux server management for production deployments.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-36 px-6 md:px-12 w-full max-w-7xl mx-auto z-20 overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-accent-teal/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left column: Headings and Paragraphs */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Section Indicator */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent-teal" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">
              Who I Am
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            ABOUT ME
          </h2>

          <div className="mt-4">
            <RevealText
              text="I am a Full Stack Developer with hands-on experience building production-grade fintech applications — including wallet systems, recharge platforms, and payment API integrations. My technical foundation spans React.js, Node.js, Express.js, MongoDB, Redis, Docker, AWS, and AI integrations. I am passionate about scalable backend systems, modern frontend development, and cloud-first DevOps practices."
            />
          </div>

          {/* Floating graphic box */}
          <motion.div
            className="mt-8 p-6 rounded-2xl glass-panel relative overflow-hidden group border-white/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-teal/10 to-transparent rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
            <div className="font-mono text-xs text-accent-cyan mb-2">{"// CORE PRINCIPLE"}</div>
            <div className="text-white font-medium text-lg mb-1">
              Production Engineering & Modern Craftsmanship
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Every line of code is written with scalability, security, and performance
              in mind. From fintech payment pipelines to AI-powered interfaces — I build
              systems that run reliably in production at scale.
            </p>
          </motion.div>
        </div>

        {/* Right column: Core Pillars Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-8 lg:mt-16 text-left">
          {corePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="p-5 rounded-2xl glass-panel glass-panel-hover"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-white/5">{pillar.icon}</div>
                <h3 className="font-display font-semibold text-white text-base">
                  {pillar.title}
                </h3>
              </div>
              <p
                className="text-text-secondary text-xs leading-relaxed"
                dangerouslySetInnerHTML={{ __html: pillar.desc }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
