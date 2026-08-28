
import Image from "next/image";
import { notFound } from "next/navigation";
import { people } from "@/lib/content";

export function generateStaticParams() { return people.map(({ slug }) => ({ slug })); }

export default async function PersonDetail({ params }) {
  const { slug } = await params;
  const person = people.find(item => item.slug === slug);
  if (!person) notFound();
  return <main><section className="detail-hero"><Image src={person.image} alt={`${person.role} in the FACKTS ecosystem`} fill priority sizes="100vw" /><div className="shell detail-hero-copy"><div className="meta">{person.role} · {person.city}</div><h1 className="mega tight" style={{marginTop:18}}>{person.name}</h1></div></section><section className="detail-body"><div className="shell detail-body-grid"><div className="detail-side">PEOPLE PROFILE<br/>REAL FACKTS IMAGE<br/>IDENTITY PLACEHOLDER</div><div><p className="body-xl">This profile uses real FACKTS photography without guessing the identity of the person in the image.</p><p style={{fontSize:18,lineHeight:1.7,maxWidth:800}}>Replace the placeholder name with the confirmed person name, role, city, bio, links and related stories once the identity and profile information are supplied.</p></div></div></section></main>;
}
