"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import Magnetic from "./Magnetic";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4 ${
          scrolled
            ? "bg-bg-dark/80 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleClick(e, "#")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-teal via-accent-cyan to-accent-blue flex items-center justify-center font-display font-black text-black text-lg transition-transform group-hover:rotate-12">
              M
            </div>
            <span className="font-display font-bold text-white tracking-wider hidden sm:inline-block">
              MAYANK<span className="text-accent-teal">.</span>M
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Magnetic key={item.name} range={0.25}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="relative text-sm font-medium text-text-secondary hover:text-white transition-colors py-2 px-1 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-teal transition-all duration-300 group-hover:w-full" />
                </a>
              </Magnetic>
            ))}
          </nav>

          {/* CTA: Resume Button */}
          <div className="hidden md:flex items-center">
            <Magnetic range={0.2}>
              <a
                href="/resume/Mayank-Mathur-Resume.pdf"
                download
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-accent-teal text-white text-xs font-semibold bg-white/5 hover:bg-accent-teal/10 transition-all duration-300 shadow-lg"
              >
                <ArrowDownToLine className="w-3.5 h-3.5 text-accent-teal" />
                Resume
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden p-2 rounded-lg border border-white/5 bg-white/5 text-white hover:text-accent-teal transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg-dark flex flex-col justify-center px-8 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background Grid */}
            <div className="absolute inset-0 grid-backdrop opacity-20" />

            <div className="flex flex-col gap-6 z-10">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-4xl font-display font-semibold text-text-secondary hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <span className="text-accent-teal mr-4">0{index + 1}.</span>
                  {item.name}
                </motion.a>
              ))}

              <motion.div
                className="mt-8 pt-8 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="/resume/Mayank-Mathur-Resume.pdf"
                  download
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-accent-teal/30 bg-accent-teal/5 text-white text-base font-semibold transition-all duration-300 active:scale-95"
                >
                  <ArrowDownToLine className="w-5 h-5 text-accent-teal" />
                  Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
