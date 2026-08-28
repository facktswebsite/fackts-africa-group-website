
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: { default: "FACKTS Africa Group", template: "%s | FACKTS Africa Group" },
  description: "Born in Kenya. Built for Africa. Made for the world. Basketball, music, people and culture experiences by FACKTS Africa Group.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
