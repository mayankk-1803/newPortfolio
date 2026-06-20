"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDownToLine } from "lucide-react";
import * as THREE from "three";
import Magnetic from "./Magnetic";

// Embedded 3D mesh generator for the Hero Right Side
function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let width = canvasRef.current.clientWidth;
    let height = canvasRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Outer Torus Knot
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.38, 150, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00F5D4, // Teal
      wireframe: true,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);

    // Inner Torus Knot Points
    const pointsGeo = new THREE.TorusKnotGeometry(1.2, 0.38, 150, 16);
    const pointsMat = new THREE.PointsMaterial({
      color: 0x4361EE, // Blue
      size: 0.035,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const knotPoints = new THREE.Points(pointsGeo, pointsMat);
    scene.add(knotPoints);

    // Dynamic rotation velocities
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotationX = y * 0.4;
      targetRotationY = x * 0.4;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Inertia lerp
      knot.rotation.x += (targetRotationX + elapsed * 0.05 - knot.rotation.x) * 0.05;
      knot.rotation.y += (targetRotationY + elapsed * 0.06 - knot.rotation.y) * 0.05;

      knotPoints.rotation.x = knot.rotation.x;
      knotPoints.rotation.y = knot.rotation.y;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!canvasRef.current) return;
      width = canvasRef.current.clientWidth;
      height = canvasRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      renderer.dispose();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 bg-radial-gradient from-accent-teal/5 to-transparent rounded-full filter blur-3xl pointer-events-none" />
      <canvas ref={canvasRef} className="w-full h-full z-10" />
    </div>
  );
}

export default function Hero() {
  const badges = ["Available For Freelance", "Open To Opportunities", "Building AI Products"];
  const [currentBadgeIndex, setCurrentBadgeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBadgeIndex((prev) => (prev + 1) % badges.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [badges.length]);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-24 md:py-32 overflow-hidden px-6 md:px-12 z-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 select-none z-10 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
            </span>
            <div className="h-5 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentBadgeIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.8 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-xs font-semibold text-text-secondary uppercase tracking-[0.15em] block"
                >
                  {badges[currentBadgeIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col">
            <h1 className="text-6xl sm:text-7xl md:text-[90px] font-display font-extrabold tracking-tight text-white leading-[0.9]">
              <motion.span
                className="block overflow-hidden"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                MAYANK
              </motion.span>
              <motion.span
                className="gradient-text block overflow-hidden mt-2"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              >
                MATHUR
              </motion.span>
            </h1>
          </div>

          {/* Titles */}
          <motion.div
            className="flex flex-col gap-1 text-lg md:text-2xl font-semibold text-white tracking-wide"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2>Full Stack Developer</h2>
            <h2 className="text-accent-cyan font-mono text-base md:text-lg">
              &amp; AI Integration Engineer
            </h2>
          </motion.div>

          {/* Bio Description */}
          <motion.p
            className="max-w-xl text-sm md:text-base text-text-secondary leading-relaxed font-light"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            MERN Stack Developer specializing in crafting scalable web applications,
            AI-powered products, secure cloud architectures, and modern high-fidelity digital experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Magnetic range={0.15}>
              <button
                onClick={() => handleScrollTo("#projects")}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-accent-teal via-accent-cyan to-accent-blue text-black font-semibold text-sm transition-transform duration-300 active:scale-95 shadow-[0_0_30px_rgba(0,245,212,0.15)] hover:shadow-[0_0_40px_rgba(0,245,212,0.3)]"
              >
                View Projects
                <ArrowUpRight className="w-4 h-4 text-black" />
              </button>
            </Magnetic>

            <Magnetic range={0.15}>
              <a
                href="/resume/Mayank-Mathur-Resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 text-white font-semibold text-sm transition-all duration-300"
              >
                Download Resume
                <ArrowDownToLine className="w-4 h-4 text-accent-cyan" />
              </a>
            </Magnetic>

            <Magnetic range={0.15}>
              <button
                onClick={() => handleScrollTo("#contact")}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full hover:bg-white/5 text-text-secondary hover:text-white font-semibold text-sm transition-colors duration-300"
              >
                Contact Me
              </button>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right 3D Visual Mesh */}
        <motion.div
          className="lg:col-span-5 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <Hero3D />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none opacity-40">
        <span className="text-[10px] tracking-[0.25em] font-semibold text-white uppercase">
          Scroll Down
        </span>
        <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-accent-teal rounded-full"
            animate={{
              y: [0, 14, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
}
