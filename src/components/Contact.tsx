"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, FileText, Send, CheckCircle, AlertTriangle } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import Magnetic from "./Magnetic";

const contactCards = [
  {
    name: "Email",
    value: "mayankmathur183@gmail.com",
    href: "mailto:mayankmathur183@gmail.com",
    icon: <Mail className="w-5 h-5 text-accent-teal" />,
    accent: "#00F5D4",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/mayank-mathur-5095262aa",
    href: "https://www.linkedin.com/in/mayank-mathur-5095262aa/",
    icon: <Linkedin className="w-5 h-5 text-accent-cyan" />,
    accent: "#00BBF9",
  },
  {
    name: "GitHub",
    value: "github.com/mayankk-1803",
    href: "https://github.com/mayankk-1803",
    icon: <Github className="w-5 h-5 text-accent-blue" />,
    accent: "#4361EE",
  },
  {
    name: "Resume",
    value: "Download PDF Profile",
    href: "/resume/Mayank-Mathur-Resume.pdf",
    download: true,
    icon: <FileText className="w-5 h-5 text-accent-teal" />,
    accent: "#00F5D4",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed sending inquiry.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error, please try again.");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 px-6 md:px-12 w-full max-w-7xl mx-auto z-20">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-teal/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Title and Contact Cards */}
        <div className="lg:col-span-6 flex flex-col items-start gap-8 text-left select-none z-10">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-none tracking-tight">
              LET&apos;S BUILD<br />
              <span className="gradient-text">SOMETHING AMAZING</span>
            </h2>
          </div>

          <p className="text-text-secondary text-sm md:text-base font-light leading-relaxed max-w-md">
            Have an open opportunity, a freelance project, or an interest in integrating AI tools inside your product? Send a message.
          </p>

          {/* Social Contact Cards List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mt-4">
            {contactCards.map((card) => (
              <Magnetic key={card.name} range={0.15}>
                <a
                  href={card.href}
                  download={card.download}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl glass-panel flex items-center gap-4 w-full glow-border cursor-pointer transition-colors duration-300 hover:border-white/10"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">{card.icon}</div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                      {card.name}
                    </span>
                    <span className="text-xs font-semibold text-white truncate max-w-[150px] sm:max-w-none">
                      {card.value}
                    </span>
                  </div>
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Right Side: Working Contact Form */}
        <div className="lg:col-span-6 w-full z-10">
          <div className="p-6 md:p-8 rounded-3xl glass-panel relative glow-border overflow-hidden">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-mono text-white/50">
                  YOUR NAME <span className="text-accent-teal">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 focus:border-accent-teal focus:bg-white/[0.08] text-white text-sm outline-none transition-all duration-300 w-full"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-mono text-white/50">
                  EMAIL ADDRESS <span className="text-accent-teal">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 focus:border-accent-cyan focus:bg-white/[0.08] text-white text-sm outline-none transition-all duration-300 w-full"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-white/50">
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 focus:border-accent-blue focus:bg-white/[0.08] text-white text-sm outline-none transition-all duration-300 w-full"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-mono text-white/50">
                  YOUR MESSAGE <span className="text-accent-teal">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Hey, let's connect..."
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 focus:border-accent-teal focus:bg-white/[0.08] text-white text-sm outline-none resize-none transition-all duration-300 w-full"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-2 self-start">
                <Magnetic range={0.1}>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-accent-teal to-accent-cyan text-black font-semibold text-xs transition-transform duration-300 hover:opacity-95 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,245,212,0.1)]"
                  >
                    {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
                    <Send className="w-3.5 h-3.5 text-black" />
                  </button>
                </Magnetic>
              </div>

              {/* Status Alert Panels */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs mt-4"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Message sent! Thank you, I will get back to you shortly.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs mt-4"
                  >
                    <AlertTriangle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
