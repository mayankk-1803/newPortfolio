"use client";

import { useEffect, useState } from "react";
import { Mail, ArrowUp, Compass, Clock, MapPin } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import Magnetic from "./Magnetic";

export default function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit" as const,
        minute: "2-digit" as const,
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 30000); // Update every 30s is plenty

    return () => clearInterval(interval);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 md:py-16 px-6 md:px-12 w-full border-t border-white/5 bg-[#0b0b0b]/60 backdrop-blur-md z-20 text-xs md:text-sm select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-left">
          {/* Column 1: Designer Credit */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 group">
              <div className="w-6 h-6 rounded bg-gradient-to-tr from-accent-teal to-accent-blue flex items-center justify-center font-display font-black text-black text-xs">
                M
              </div>
              <span className="font-display font-bold text-white tracking-widest text-xs uppercase">
                Mayank Mathur
              </span>
            </div>
            <p className="text-text-secondary text-xs leading-relaxed max-w-xs font-light">
              Designed &amp; Developed by Mayank Mathur. Built using Next.js 15, React 19, Tailwind CSS, and pure WebGL.
            </p>
          </div>

          {/* Column 2: Location, Response &amp; Availability Info */}
          <div className="flex flex-col gap-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-text-secondary">
              <MapPin className="w-3.5 h-3.5 text-accent-teal shrink-0" />
              <span>Location: Meerut, India</span>
            </div>

            <div className="flex items-center gap-2 text-text-secondary">
              <Clock className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
              <span>Local Time: {localTime || "Calculating..."} (IST)</span>
            </div>

            <div className="flex items-center gap-2 text-text-secondary">
              <Compass className="w-3.5 h-3.5 text-accent-blue shrink-0" />
              <span>Availability: Open For Work (24h turnaround)</span>
            </div>
          </div>

          {/* Column 3: Social Interactions */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex gap-4">
              <Magnetic range={0.2}>
                <a
                  href="https://github.com/mayankk-1803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center hover:border-accent-teal hover:bg-accent-teal/5 transition-colors duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-white" />
                </a>
              </Magnetic>

              <Magnetic range={0.2}>
                <a
                  href="https://www.linkedin.com/in/mayank-mathur-5095262aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center hover:border-accent-cyan hover:bg-accent-cyan/5 transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
              </Magnetic>

              <Magnetic range={0.2}>
                <a
                  href="mailto:mayankmathur183@gmail.com"
                  className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center hover:border-accent-blue hover:bg-accent-blue/5 transition-colors duration-300"
                  aria-label="Email Contact"
                >
                  <Mail className="w-4 h-4 text-white" />
                </a>
              </Magnetic>
            </div>

            {/* Back to top button */}
            <Magnetic range={0.15}>
              <button
                onClick={handleScrollTop}
                className="flex items-center gap-2 text-xs text-text-secondary hover:text-white transition-colors cursor-pointer border border-white/5 px-4 py-2 rounded-full bg-white/5 hover:border-white/10"
              >
                Back To Top
                <ArrowUp className="w-3.5 h-3.5 text-accent-teal" />
              </button>
            </Magnetic>
          </div>
        </div>

        {/* Bottom Section copyright */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-text-secondary font-mono">
          <span>&copy; {new Date().getFullYear()} MAYANK MATHUR. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
