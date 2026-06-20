import PortfolioHome from "@/components/PortfolioHome";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Mayank Mathur | Full Stack MERN Developer & AI Integration Engineer",
  description: "Portfolio of Mayank Mathur, a premium Full Stack MERN Developer and AI Integration Engineer crafting scalable web applications, intelligent chatbots, and high-performance digital experiences.",
  keywords: [
    "Mayank Mathur",
    "MERN Stack Developer",
    "AI Integration Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Docker",
    "AWS",
    "Groq API",
    "SaaS Developer",
    "India",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Mayank Mathur", url: "https://github.com/mayankk-1803" }],
  creator: "Mayank Mathur",
  openGraph: {
    title: "Mayank Mathur | Full Stack MERN Developer & AI Integration Engineer",
    description: "Premium developer portfolio showcasing scalable applications, AI product integrations, and digital products.",
    url: "https://mayankmathur.dev",
    siteName: "Mayank Mathur Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Mathur | Full Stack MERN Developer & AI Integration Engineer",
    description: "Premium developer portfolio showcasing scalable applications, AI product integrations, and digital products.",
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
