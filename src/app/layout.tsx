import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

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
      <body className="bg-light text-dark dark:bg-dark dark:text-light transition-colors duration-300">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
