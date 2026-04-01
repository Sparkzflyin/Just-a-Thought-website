import type { Metadata } from "next";
import { Be_Vietnam_Pro, Dancing_Script } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "Just a thought",
  description: "Your strategic partner in cultivating Executive Agility through profound transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${beVietnamPro.variable} ${dancingScript.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
