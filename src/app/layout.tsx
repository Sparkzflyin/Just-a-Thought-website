import type { Metadata } from "next";
import { Be_Vietnam_Pro, Lora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ExitIntentModal from "@/components/ui/ExitIntentModal";
import { ScrollProvider } from "@/context/ScrollContext";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
});

const lora = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
});

const siteUrl = "https://www.your-domain.com"; // Replace with your actual domain

export const metadata: Metadata = {
  title: "Just a Thought - Business and Lifestyle Coaching",
  description:
    "We provide lifestyle and business coaching for those looking to improve the quality of their business or lives.",
  keywords: [
    "lifestyle coaching",
    "business coaching",
    "executive agility",
    "transformation",
    "leadership",
  ],
  openGraph: {
    title: "Just a Thought",
    description:
      "We provide lifestyle and business coaching for those looking to improve the quality of their business or lives.",
    url: siteUrl,
    siteName: "Just a Thought",
    images: [
      {
        url: `${siteUrl}/logo-latest.png`,
        width: 800,
        height: 600,
        alt: "Just a Thought logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Just a Thought",
    description:
      "We provide lifestyle and business coaching for those looking to improve the quality of their business or lives.",
    images: [`${siteUrl}/logo-latest.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Just a Thought",
    url: siteUrl,
    logo: `${siteUrl}/logo-latest.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "302-382-6437",
      contactType: "Customer Service",
    },
  };
  return (
    <html
      lang="en"
      className={`${beVietnamPro.variable} ${lora.variable} scroll-smooth`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo-latest.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <ScrollProvider>
          <ScrollProgress />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
          <ExitIntentModal />
        </ScrollProvider>
      </body>
    </html>
  );
}
