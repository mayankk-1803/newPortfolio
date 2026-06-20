"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 100;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Constellation Geometry
    const particleCount = 1200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color("#00F5D4"), // Teal
      new THREE.Color("#00BBF9"), // Cyan
      new THREE.Color("#4361EE"), // Blue
    ];

    for (let i = 0; i < particleCount; i++) {
      // Coordinates
      positions[i * 3] = (Math.random() - 0.5) * 250;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 150;

      // Random palette color
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle Texture/Shader (soft circle)
    const pMaterial = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starParticles = new THREE.Points(particleGeometry, pMaterial);
    scene.add(starParticles);

    // Floating Low-Poly Geometric Wireframes
    const meshGroup = new THREE.Group();
    scene.add(meshGroup);

    const geoTypes = [
      new THREE.IcosahedronGeometry(20, 1),
      new THREE.OctahedronGeometry(12, 0),
      new THREE.TorusGeometry(15, 3, 8, 24),
    ];

    const meshes: THREE.Mesh[] = [];

    geoTypes.forEach((geometry, index) => {
      // Wireframe Material
      const material = new THREE.MeshBasicMaterial({
        color: index === 0 ? 0x00F5D4 : index === 1 ? 0x00BBF9 : 0x4361EE,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
      });

      const mesh = new THREE.Mesh(geometry, material);
      
      // Position offset
      mesh.position.set(
        (index - 1) * 60 + (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20
      );
      
      meshGroup.add(mesh);
      meshes.push(mesh);
    });

    // Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Event listeners
    const handleMouseMove = (event: MouseEvent) => {
      // Convert to normalized coordinates (-1 to 1)
      mouseRef.current.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Lerp mouse coordinates for smooth inertia motion
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Rotate meshes
      meshes.forEach((mesh, index) => {
        const factor = index + 1;
        mesh.rotation.x = elapsedTime * 0.08 * factor;
        mesh.rotation.y = elapsedTime * 0.1 * factor;
        
        // Add subtle floating translation
        mesh.position.y += Math.sin(elapsedTime * 0.5 + index) * 0.02;
      });

      // Subtle rotation of the particle system based on mouse
      starParticles.rotation.y = elapsedTime * 0.01 + mouseRef.current.x * 0.08;
      starParticles.rotation.x = mouseRef.current.y * 0.08;

      // Parallax effect on meshes group
      meshGroup.position.x = mouseRef.current.x * 12;
      meshGroup.position.y = mouseRef.current.y * 12;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      // Dispose resources
      particleGeometry.dispose();
      pMaterial.dispose();

      meshes.forEach((mesh) => {
        mesh.geometry.dispose();
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => mat.dispose());
        } else {
          mesh.material.dispose();
        }
      });

      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
    />
  );
}
