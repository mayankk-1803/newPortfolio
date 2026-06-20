"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export default function MouseGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[2] hidden md:block"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(0, 245, 212, 0.04), rgba(0, 187, 249, 0.02), rgba(67, 97, 238, 0.02), transparent 75%)`,
      }}
    />
  );
}
