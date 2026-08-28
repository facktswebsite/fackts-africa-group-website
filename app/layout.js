import "./globals.css";
import { Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/content";

const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-mono", display: "swap" });

export const metadata = {
  metadataBase: new URL(siteConfig.website),
  title: { default: "FACKTS Africa Group", template: "%s | FACKTS Africa Group" },
  description: "Born in Kenya. Built for Africa. Made for the world. Basketball, music, people, stories and live culture by FACKTS Africa Group.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "FACKTS Africa Group",
    description: "Basketball, music, people, stories and live culture. Born in Kenya. Built for Africa. Made for the world.",
    url: siteConfig.website,
    siteName: "FACKTS Africa Group",
    images: [{ url: "/fackts/brand/hero-main.jpg", width: 1800, height: 1200, alt: "FACKTS Africa Group" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FACKTS Africa Group",
    description: "Basketball, music, people, stories and live culture.",
    images: ["/fackts/brand/hero-main.jpg"],
  },
  icons: { icon: "/fackts/brand/logo.png", apple: "/fackts/brand/logo.png" },
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FACKTS Africa Group",
    url: siteConfig.website,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressLine1,
      addressLocality: "Westlands",
      addressRegion: "Nairobi",
      addressCountry: "KE",
    },
    sameAs: [siteConfig.hoopsYouTube],
  };

  return <html lang="en" className={`${interTight.variable} ${plexMono.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} /><Header />{children}<Footer /></body></html>;
}
