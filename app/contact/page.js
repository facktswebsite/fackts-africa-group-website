
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/content";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return <main className="contact-page"><div className="shell contact-grid"><div className="contact-copy"><div className="eyebrow">Enter the FACKTS world</div><h1 className="section-title page-title" style={{marginTop:20}}>WHAT SHOULD BECOME BETTER?</h1><p className="body-xl text-muted" style={{maxWidth:650,marginTop:28}}>Start with the outcome. We can work backward into basketball, music, people, experiences, media or a partnership structure.</p><div className="contact-meta"><div><span>Email</span><span>{siteConfig.email}</span></div><div><span>Phone</span><span>{siteConfig.phone}</span></div><div><span>Address</span><span>{siteConfig.addressLine1}, {siteConfig.addressLine2}</span></div></div></div><ContactForm /></div></main>;
}
