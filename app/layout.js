import "./globals.css";
import { Inter_Tight, Barlow } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/content";

const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const barlow = Barlow({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-ui", display: "swap" });

export const metadata = {
  metadataBase: new URL(siteConfig.website),
  title: { default: "FACKTS Africa Group", template: "%s | FACKTS Africa Group" },
  description: "FACKTS Africa Group builds platforms for African basketball and music, connecting talent, teams, studios, communities, experiences and partners.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "FACKTS Africa Group",
    description: "Platforms for African basketball and music. Born in Kenya. Built for Africa.",
    url: siteConfig.website,
    siteName: "FACKTS Africa Group",
    images: [{ url: "/fackts/brand/hero-main.jpg", width: 2400, height: 1347, alt: "FACKTS Africa Group" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FACKTS Africa Group",
    description: "Platforms for African basketball and music.",
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

  return <html lang="en" className={`${interTight.variable} ${barlow.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} /><Header />{children}<Footer /></body></html>;
}
