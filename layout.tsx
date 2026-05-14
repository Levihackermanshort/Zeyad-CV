import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeyad Maeen — AI Software Engineer & Data Scientist",
  description:
    "Final-year Computer Science student specialising in AI/ML, full-stack engineering, and data science. Builder of Enigma AI and contributor to production AI platforms.",
  keywords: [
    "Zeyad Maeen",
    "AI Engineer",
    "Data Scientist",
    "Machine Learning",
    "TensorFlow",
    "Next.js",
    "React",
    "Python",
    "University of Huddersfield",
  ],
  authors: [{ name: "Zeyad Maeen" }],
  openGraph: {
    title: "Zeyad Maeen — AI Software Engineer & Data Scientist",
    description: "Portfolio of Zeyad Maeen — AI/ML developer, data scientist, and builder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
