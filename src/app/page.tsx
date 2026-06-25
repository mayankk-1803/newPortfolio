import PortfolioHome from "@/components/PortfolioHome";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Mayank Mathur | Full Stack Developer | MERN Stack | FinTech Developer",
  description: "Portfolio of Mayank Mathur, Full Stack Developer specializing in MERN Stack, FinTech Applications, Redis, Docker, PM2, React.js, Node.js, and modern cloud technologies.",
  keywords: [
    "Mayank Mathur",
    "Full Stack Developer",
    "MERN Stack Developer",
    "FinTech Developer",
    "React Developer",
    "Node.js Developer",
    "Express.js",
    "MongoDB",
    "Redis",
    "Docker",
    "PM2",
    "AWS",
    "aaPanel",
    "Groq API",
    "Payment Gateway Integration",
    "Wallet System",
    "iRecharge",
    "India",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Mayank Mathur", url: "https://github.com/mayankk-1803" }],
  creator: "Mayank Mathur",
  openGraph: {
    title: "Mayank Mathur | Full Stack Developer | MERN Stack | FinTech Developer",
    description: "Portfolio of Mayank Mathur, Full Stack Developer specializing in MERN Stack, FinTech Applications, Redis, Docker, PM2, React.js, and Node.js.",
    url: "https://mayankmathur.dev",
    siteName: "Mayank Mathur Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Mathur | Full Stack Developer | MERN Stack | FinTech Developer",
    description: "Portfolio of Mayank Mathur, Full Stack Developer specializing in MERN Stack, FinTech Applications, Redis, Docker, PM2, React.js, and Node.js.",
    creator: "@mayankmathur",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return <PortfolioHome />;
}
