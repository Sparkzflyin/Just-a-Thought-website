import type { Metadata } from "next";
import { Be_Vietnam_Pro, Lora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ExitIntentModal from "@/components/ui/ExitIntentModal";
import { ScrollProvider } from "@/context/ScrollContext";
import CustomCursor from "@/components/ui/CustomCursor";
import SectionProgress from "@/components/ui/SectionProgress";
import LoadingIntro from "@/components/ui/LoadingIntro";
import SignOff from "@/components/ui/SignOff";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Just a Thought — Executive & Lifestyle Coaching",
    template: "%s | Just a Thought",
  },
  description:
    "Executive coaching and leadership development through The Subtraction Framework — remove what's in the way so leaders, founders, and teams can lead with clarity and purpose.",
  keywords: [
    "executive coaching",
    "leadership coaching",
    "business coaching",
    "lifestyle coaching",
    "leadership development",
    "executive agility",
    "team culture consulting",
    "subtraction framework",
    "burnout coaching for leaders",
    "founder coaching",
  ],
  authors: [{ name: "Autumn Tuxward" }],
  creator: "Just a Thought",
  publisher: "Just a Thought",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Just a Thought — Executive & Lifestyle Coaching",
    description:
      "Leadership coaching built on The Subtraction Framework — remove what's in the way so leaders, founders, and teams can lead with clarity.",
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
    title: "Just a Thought — Executive & Lifestyle Coaching",
    description:
      "Leadership coaching built on The Subtraction Framework — remove what's in the way so leaders, founders, and teams can lead with clarity.",
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
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteUrl}/#organization`,
    name: "Just a Thought",
    alternateName: "JAT",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo-latest.png`,
      width: 800,
      height: 600,
    },
    description:
      "Executive coaching and leadership development built on The Subtraction Framework — helping leaders, founders, and teams lead with clarity by removing what's in the way.",
    founder: {
      "@type": "Person",
      name: "Autumn Tuxward",
      jobTitle: "Executive Coach",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-302-382-6437",
      contactType: "Customer Service",
      availableLanguage: ["English"],
    },
    knowsAbout: [
      "Executive Coaching",
      "Leadership Development",
      "Team Culture",
      "Business Strategy",
      "Personal Growth",
      "Burnout Recovery",
    ],
  };
  return (
    <html lang="en" className={`${beVietnamPro.variable} ${lora.variable}`}>
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
        <LoadingIntro />
        <SmoothScrollProvider>
          <ScrollProvider>
            <CustomCursor />
            <SectionProgress />
            <ScrollProgress />
            <Header />
            <main className="flex-grow">{children}</main>
            <SignOff />
            <Footer />
            <ScrollToTop />
            <ExitIntentModal />
          </ScrollProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
