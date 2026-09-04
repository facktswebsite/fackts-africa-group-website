import Image from "next/image";
import Link from "next/link";
import { stories, siteConfig } from "@/lib/content";

export const metadata = {
  title: {
    absolute: "FACKTS Stories | Basketball, Music & Youth Culture in Kenya",
  },

  description:
    "Explore FACKTS Stories, documenting basketball, music, creators, events and youth culture through interviews, features, photography and original storytelling from Kenya.",

  alternates: {
    canonical: "/stories",
  },

  openGraph: {
    title: "FACKTS Stories | Basketball, Music & Youth Culture in Kenya",
    description:
      "Stories from the court, studio and wider FACKTS culture world, covering basketball, music, creators, events and the people behind them.",
    url: `${siteConfig.website}/stories`,
    siteName: "FACKTS Africa Group",
    images: [
      {
        url: stories?.[0]?.image || "/fackts/brand/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "FACKTS Stories archive",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FACKTS Stories | Basketball, Music & Youth Culture in Kenya",
    description:
      "Original FACKTS stories from basketball, music, creators, events and youth culture in Kenya.",
    images: [stories?.[0]?.image || "/fackts/brand/hero-main.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function StoriesPage() {
  return (
    <main>
      <section className="archive-hero">
        <div className="shell">
          <div className="eyebrow">Stories / FACKTS archive</div>

          <h1 className="mega tight" style={{ marginTop: 20 }}>
            CULTURE
            <br />
            LEAVES EVIDENCE.
          </h1>

          <p className="body-xl">
            Court stories, studio stories, people, process and the moments
            around the headline. This archive grows as FACKTS does.
          </p>
        </div>
      </section>

      <section className="shell archive-grid">
        {stories.map((story) => (
          <Link
            href={`/stories/${story.slug}`}
            className="archive-item"
            key={story.slug}
          >
            <Image
              src={story.image}
              alt={`${story.title} — FACKTS story`}
              fill
              sizes="(max-width:760px) 100vw, 55vw"
            />

            <div className="archive-item-copy">
              <div className="meta">
                {story.category} · {story.city}
              </div>

              <h2>{story.title}</h2>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}