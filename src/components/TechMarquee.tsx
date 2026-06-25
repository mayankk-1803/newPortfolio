"use client";

const technologies = [
  { name: "React", color: "rgba(0, 187, 249, 0.15)", text: "#00BBF9" },
  { name: "Node.js", color: "rgba(0, 245, 212, 0.15)", text: "#00F5D4" },
  { name: "Express.js", color: "rgba(184, 192, 204, 0.1)", text: "#B8C0CC" },
  { name: "MongoDB", color: "rgba(0, 245, 212, 0.15)", text: "#00F5D4" },
  { name: "Redis", color: "rgba(220, 38, 38, 0.2)", text: "#FF6B6B" },
  { name: "Docker", color: "rgba(0, 187, 249, 0.15)", text: "#00BBF9" },
  { name: "PM2", color: "rgba(67, 97, 238, 0.15)", text: "#4361EE" },
  { name: "AWS", color: "rgba(67, 97, 238, 0.15)", text: "#4361EE" },
  { name: "Linux", color: "rgba(255, 255, 255, 0.1)", text: "#FFFFFF" },
  { name: "JavaScript", color: "rgba(0, 245, 212, 0.15)", text: "#00F5D4" },
  { name: "Tailwind CSS", color: "rgba(0, 187, 249, 0.15)", text: "#00BBF9" },
  { name: "Git", color: "rgba(220, 100, 50, 0.2)", text: "#F4845F" },
  { name: "GitHub", color: "rgba(255, 255, 255, 0.1)", text: "#FFFFFF" },
  { name: "REST APIs", color: "rgba(67, 97, 238, 0.15)", text: "#4361EE" },
  { name: "Groq API", color: "rgba(67, 97, 238, 0.15)", text: "#4361EE" },
  { name: "aaPanel", color: "rgba(0, 245, 212, 0.15)", text: "#00F5D4" },
];

export default function TechMarquee() {
  // Triple the items to ensure seamless visual looping
  const tripleTechs = [...technologies, ...technologies, ...technologies];

  return (
    <section className="relative w-full py-10 bg-bg-dark/50 border-y border-white/5 overflow-hidden z-20 select-none">
      <div className="flex w-full items-center">
        <div className="animate-marquee gap-6">
          {tripleTechs.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-6 py-3 rounded-2xl glass-panel relative group overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: tech.color,
                boxShadow: `0 0 15px ${tech.color.replace("0.15", "0.02")}`,
              }}
            >
              {/* Internal glow dot */}
              <div
                className="absolute -left-1 -top-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-300"
                style={{ backgroundColor: tech.text }}
              />

              <span
                className="font-display font-semibold tracking-wide text-sm md:text-base relative z-10"
                style={{ color: tech.text }}
              >
                {tech.name}
              </span>

              {/* Underlying hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${tech.text} 0%, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
