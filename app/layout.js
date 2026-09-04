import "./globals.css";
import { Inter_Tight, Barlow } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/content";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.website),

  title: {
    default:
      "FACKTS Africa Group | Sports, Music & Culture Platforms in Kenya",
    template: "%s | FACKTS Africa Group",
  },

  description:
    "FACKTS Africa builds platforms, experiences and systems for basketball, music and African youth culture, connecting talent, teams, events and partners across Kenya.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "FACKTS Africa Group | Sports, Music & Culture Platforms in Kenya",
    description:
      "FACKTS Africa builds platforms, experiences and systems for basketball, music and African youth culture, connecting talent, teams, events and partners across Kenya.",
    url: siteConfig.website,
    siteName: "FACKTS Africa Group",
    images: [
      {
        url: "/fackts/brand/hero-main.jpg",
        width: 2400,
        height: 1347,
        alt: "FACKTS Africa Group",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "FACKTS Africa Group | Sports, Music & Culture Platforms in Kenya",
    description:
      "FACKTS Africa builds platforms, experiences and systems for basketball, music and African youth culture.",
    images: ["/fackts/brand/hero-main.jpg"],
  },

  icons: {
    icon: "/fackts/brand/logo.png",
    apple: "/fackts/brand/logo.png",
  },
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
    <html lang="en" className={`${interTight.variable} ${barlow.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}