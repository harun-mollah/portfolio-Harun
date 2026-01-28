import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MD Harun Al Roshid Mollah | Portfolio",
  description:
    "Professional portfolio of MD Harun Al Roshid Mollah - CSE Diploma Student at Central Institute of Technology, Kokrajhar. Showcasing projects, skills, and experience.",
  keywords: [
    "portfolio",
    "frontend",
    "backend",
    "developer",
    "CSE",
    "Kokrajhar",
    "CodelithLabs",
  ],
  openGraph: {
    title: "MD Harun Al Roshid Mollah | Portfolio",
    description:
      "Professional portfolio showcasing projects and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark text-light">
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
