import "./globals.css";
import "./turnaround.css";
import { Archivo, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteMotion from "@/components/SiteMotion";
import { siteConfig } from "@/lib/content";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.website),
  title: {
    default: "FACKTS Africa Group | Sports, Music & Culture Platforms in Kenya",
    template: "%s | FACKTS Africa Group",
  },
  description: "FACKTS Africa builds platforms, experiences and systems for basketball, music and African youth culture, connecting talent, teams, events and partners across Kenya.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "FACKTS Africa Group | Sports, Music & Culture Platforms in Kenya",
    description: "FACKTS Africa builds platforms, experiences and systems for basketball, music and African youth culture, connecting talent, teams, events and partners across Kenya.",
    url: siteConfig.website,
    siteName: "FACKTS Africa Group",
    images: [{ url: "/fackts/brand/hero-main.jpg", width: 2400, height: 1347, alt: "FACKTS Africa Group" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FACKTS Africa Group | Sports, Music & Culture Platforms in Kenya",
    description: "FACKTS Africa builds platforms, experiences and systems for basketball, music and African youth culture.",
    images: ["/fackts/brand/hero-main.jpg"],
  },
  icons: { icon: "/fackts/brand/logo.png", apple: "/fackts/brand/logo.png" },
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FACKTS Africa Group",
    alternateName: "FACKTS Africa",
    url: siteConfig.website,
    logo: `${siteConfig.website}/fackts/brand/logo.png`,
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

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FACKTS Africa Group",
    alternateName: "FACKTS Africa",
    url: siteConfig.website,
  };

  return (
    <html lang="en" className={`${archivo.variable} ${manrope.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <SiteMotion />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
