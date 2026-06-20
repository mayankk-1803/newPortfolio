"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, GitCommit, FolderOpen, ExternalLink, GitPullRequest } from "lucide-react";

export default function GithubActivity() {
  const [totalCommits, setTotalCommits] = useState(0);
  const [reposCount, setReposCount] = useState(0);
  const [contributions, setContributions] = useState(0);

  useEffect(() => {
    // Smooth counting transition when entering view
    const commitTimer = setTimeout(() => {
      setTotalCommits(640);
      setReposCount(22);
      setContributions(1182);
    }, 400);

    return () => {
      clearTimeout(commitTimer);
    };
  }, []);

  // Generate 7 rows x 34 columns mock contribution graph matrix values (0, 1, 2, 3 activity levels)
  const columnsCount = 35;
  const rowsCount = 7;
  const matrix = Array.from({ length: rowsCount }, () =>
    Array.from({ length: columnsCount }, () => {
      const rand = Math.random();
      if (rand < 0.5) return 0;
      if (rand < 0.75) return 1;
      if (rand < 0.9) return 2;
      return 3;
    })
  );

  const getColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#003829]";
      case 2:
        return "bg-[#006d48]";
      case 3:
        return "bg-[#00f5d4]/80 shadow-[0_0_8px_rgba(0,245,212,0.2)]";
      default:
        return "bg-white/[0.02] border border-white/5";
    }
  };

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 w-full max-w-7xl mx-auto z-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-accent-teal/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Title */}
      <div className="flex flex-col items-center text-center gap-4 mb-16 select-none">
        <div className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-accent-teal" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">
            Open Source
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          GITHUB ACTIVITY
        </h2>
        <p className="max-w-xl text-text-secondary text-sm md:text-base font-light">
          Tracking commits, repository architectures, and real-time open-source contribution patterns.
        </p>
      </div>

      {/* Dashboard container */}
      <div className="p-6 md:p-8 rounded-3xl glass-panel relative overflow-hidden flex flex-col gap-8 glow-border">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-left">
          {/* Total Commits */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
              <GitCommit className="w-4 h-4 text-accent-cyan" />
              TOTAL COMMITS
            </div>
            <div className="text-3xl md:text-4xl font-display font-extrabold text-white">
              <motion.span>{totalCommits}</motion.span>+
            </div>
            <div className="text-[10px] text-text-secondary font-mono">Merged across main branches</div>
          </div>

          {/* Repositories */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
              <FolderOpen className="w-4 h-4 text-accent-teal" />
              REPOSITORIES
            </div>
            <div className="text-3xl md:text-4xl font-display font-extrabold text-white">
              <motion.span>{reposCount}</motion.span>
            </div>
            <div className="text-[10px] text-text-secondary font-mono">Projects, APIs &amp; modules</div>
          </div>

          {/* Pull Requests */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
              <GitPullRequest className="w-4 h-4 text-accent-blue" />
              PULL REQUESTS
            </div>
            <div className="text-3xl md:text-4xl font-display font-extrabold text-white">
              <span>85</span>+
            </div>
            <div className="text-[10px] text-text-secondary font-mono">Collaborations &amp; features</div>
          </div>

          {/* Contributions */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
              <GitBranch className="w-4 h-4 text-accent-cyan" />
              CONTRIBUTIONS
            </div>
            <div className="text-3xl md:text-4xl font-display font-extrabold text-white">
              <motion.span>{contributions}</motion.span>
            </div>
            <div className="text-[10px] text-text-secondary font-mono">Last 365 days aggregated</div>
          </div>
        </div>

        {/* Mock Matrix Graph */}
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-4 overflow-x-auto select-none">
          <div className="flex items-center justify-between min-w-[650px] mb-2">
            <span className="text-xs font-semibold text-white">Activity Heatmap</span>
            <div className="flex items-center gap-1.5 text-[10px] text-text-secondary font-mono">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded bg-white/[0.02] border border-white/5" />
              <div className="w-2.5 h-2.5 rounded bg-[#003829]" />
              <div className="w-2.5 h-2.5 rounded bg-[#006d48]" />
              <div className="w-2.5 h-2.5 rounded bg-[#00f5d4]/80" />
              <span>More</span>
            </div>
          </div>

          {/* Heat Grid */}
          <div className="flex flex-col gap-1 min-w-[650px]">
            {matrix.map((row, rIdx) => (
              <div key={rIdx} className="flex gap-1">
                {row.map((level, cIdx) => (
                  <motion.div
                    key={cIdx}
                    className={`w-3 h-3 rounded-[2px] ${getColor(level)}`}
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: (rIdx + cIdx) * 0.005,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-[10px] text-text-secondary font-mono min-w-[650px] pt-1">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>

        {/* GitHub link button */}
        <div className="flex justify-end mt-2">
          <a
            href="https://github.com/mayankk-1803"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-accent-teal bg-white/5 text-white text-xs font-semibold hover:bg-accent-teal/10 transition-all duration-300"
          >
            Visit GitHub Profile
            <ExternalLink className="w-3.5 h-3.5 text-accent-cyan" />
          </a>
        </div>
      </div>
    </section>
  );
}
