import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kailash Kunwar | Full Stack / MERN Developer Portfolio",
  description:
    "Highly modern, animated developer portfolio of Kailash Kunwar. Showcasing expertise in MERN stack, Next.js, and scaling web applications.",
  keywords: ["Kailash Kunwar", "Portfolio", "Full Stack Developer", "MERN Stack", "Next.js", "React", "Developer Nepal"],
  authors: [{ name: "Kailash Kunwar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kailashkunwar.vercel.app/",
    title: "Kailash Kunwar | Full Stack / MERN Developer",
    description: "Modern portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    siteName: "Kailash Kunwar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kailash Kunwar | Full Stack Developer",
    description: "Full Stack / MERN developer from Nepal.",
    creator: "@kailashkunwar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="bg-black text-white antialiased selection:bg-cyan-500/30">
        <div id="particles-container"></div>
        {children}
      </body>
    </html>
  );
}
