"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const letters = ["M", "A", "Y", "A", "N", "K"];
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Hold animation for 2.6s, then start fade-out transition
    const timer = setTimeout(() => {
      setIsDone(true);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isDone && (
        <motion.div
          key="loader"
          className="fixed inset-0 bg-[#080808] z-[99999] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          {/* Grid Background */}
          <div className="absolute inset-0 grid-backdrop opacity-20 pointer-events-none" />

          {/* Animated Center Vertical Glow Line */}
          <motion.div
            className="w-[1px] h-20 bg-gradient-to-b from-accent-teal via-accent-cyan to-accent-blue"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: [0, 1, 1] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Staggered Title Reveal */}
          <div className="flex gap-3 md:gap-6 mt-8 select-none z-10">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                className="text-5xl md:text-8xl font-display font-extrabold tracking-wider text-white relative block"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  textShadow: [
                    "0 0 0px rgba(0, 245, 212, 0)",
                    "0 0 25px rgba(0, 245, 212, 0.5)",
                    "0 0 0px rgba(0, 245, 212, 0)",
                  ],
                }}
                transition={{
                  duration: 1.0,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Dynamic tagline */}
          <motion.div
            className="mt-6 text-[10px] md:text-xs tracking-[0.5em] font-medium text-accent-cyan uppercase select-none opacity-0"
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            Full Stack Developer &amp; AI Engineer
          </motion.div>

          {/* Bottom loading progress indicator */}
          <div className="absolute bottom-16 w-40 h-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-teal to-accent-blue"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
