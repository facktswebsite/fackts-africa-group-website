import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const MUSIC_CREATORS_API = "https://music.facktsafrica.co.ke/api/public-creators";

// Real public FACKTS Music profiles captured from the live public feed.
// This is only used if the Music subdomain cannot be reached server-to-server.
// The route still tries the live feed first on every request.
const FALLBACK_CREATORS = [
  {
    id: "acd6a950-b28a-4746-9b55-8ec479604014",
    name: "Focvs",
    creatorTypes: ["Artist", "Producer"],
    tagline: "Kwani (Huyu Jamaa anajua Hii Shimo)",
    location: "",
    skills: ["Versatile."],
    imageUrl: "https://ijczdvlbeikfozgkezgb.supabase.co/storage/v1/object/public/profile-avatars/acd6a950-b28a-4746-9b55-8ec479604014/profile-6753b273-1e0c-41b7-b151-4bf966f840a1.jpg",
    topSongsCount: 0,
    achievementsCount: 0,
    publicSlug: "focvs",
    profileUrl: "/creators/focvs",
  },
  {
    id: "27ccbdf0-6561-4c13-a846-3844c2deab40",
    name: "Joseph Millighan",
    creatorTypes: [],
    tagline: "God always does it.",
    location: "Nairobi, Kenya",
    skills: ["Hiphop", "Rapping", "Freestyling", "Song Writing"],
    imageUrl: "https://ijczdvlbeikfozgkezgb.supabase.co/storage/v1/object/public/profile-avatars/27ccbdf0-6561-4c13-a846-3844c2deab40/profile-5af343cb-63e3-4bee-9854-6b30de6905f5.png",
    topSongsCount: 5,
    achievementsCount: 7,
    publicSlug: "joseph-millighan",
    profileUrl: "/creators/joseph-millighan",
  },
  {
    id: "29b38465-64fb-45b0-afdf-4fcb5ec17f8b",
    name: "Koechii Karamoko",
    creatorTypes: ["Artist"],
    tagline: "I rap. I make Kenyan Hiphop music. Mi ni Mgenge",
    location: "",
    skills: ["Songwriting", "Lyricism", "Digital Marketing"],
    imageUrl: "https://ijczdvlbeikfozgkezgb.supabase.co/storage/v1/object/public/profile-avatars/29b38465-64fb-45b0-afdf-4fcb5ec17f8b/profile-32c1bca1-1d7a-48d0-87bb-c3d99d1e7ff8.jpg",
    topSongsCount: 0,
    achievementsCount: 0,
    publicSlug: "koechii-karamoko-29b384",
    profileUrl: "/creators/koechii-karamoko-29b384",
  },
  {
    id: "9f74f383-b1d5-4495-81c8-4b59f8c2f5d3",
    name: "Monnokid Classic",
    creatorTypes: ["Artist"],
    tagline: "Good moral music uplifting the young generation",
    location: "Nairobi",
    skills: ["Rap/Song writting/Perfoming Artist"],
    imageUrl: "https://ijczdvlbeikfozgkezgb.supabase.co/storage/v1/object/public/profile-avatars/9f74f383-b1d5-4495-81c8-4b59f8c2f5d3/profile-ce8cdbb4-c843-457d-bc1d-5389eebe05ba.jpg",
    topSongsCount: 0,
    achievementsCount: 0,
    publicSlug: "monnokid-classic",
    profileUrl: "/creators/monnokid-classic",
  },
  {
    id: "41153d9f-7e97-43e6-bddb-13a7b32cb0c3",
    name: "Steamie",
    creatorTypes: ["Artist"],
    tagline: "I’m Steamie — introverted, introspective, but loud with the pen. From the backstreets of Nairobi to your screen, I’m telling real stories through rap, art, and hustle.",
    location: "",
    skills: ["Rapper"],
    imageUrl: "https://ijczdvlbeikfozgkezgb.supabase.co/storage/v1/object/public/profile-avatars/41153d9f-7e97-43e6-bddb-13a7b32cb0c3/profile-645a4824-ba3e-40c4-a70c-b4d00eca7633.png",
    topSongsCount: 0,
    achievementsCount: 0,
    publicSlug: "steamie",
    profileUrl: "/creators/steamie",
  },
  {
    id: "736e088f-a133-4df8-a17c-10398354f664",
    name: "Gish25_flow",
    creatorTypes: ["Songwriter", "Composer"],
    tagline: "Rapper.. Songwriter",
    location: "Nairobi",
    skills: [],
    imageUrl: "https://ijczdvlbeikfozgkezgb.supabase.co/storage/v1/object/public/profile-avatars/736e088f-a133-4df8-a17c-10398354f664/profile-f3c0e9d6-93c4-4531-9259-e7978bb6723d.webp",
    topSongsCount: 0,
    achievementsCount: 0,
    publicSlug: "gish25-flow",
    profileUrl: "/creators/gish25-flow",
  },
  {
    id: "141559e6-421e-4e5b-85a1-a9ef376d3a18",
    name: "Arkhima",
    creatorTypes: ["Engineer"],
    tagline: "Speaking through to the conscious mind",
    location: "Nairobi, Kenya",
    skills: ["Beat making", "mixing"],
    imageUrl: "https://ijczdvlbeikfozgkezgb.supabase.co/storage/v1/object/public/profile-media/141559e6-421e-4e5b-85a1-a9ef376d3a18/a2f7ffa3-c652-445d-a847-166c7dfd4bfd.jpg",
    topSongsCount: 4,
    achievementsCount: 0,
    publicSlug: "arkhima",
    profileUrl: "/creators/arkhima",
  },
  {
    id: "5503ea21-d73b-4176-a0cf-b64562a71906",
    name: "Kimenyi",
    creatorTypes: ["Artist"],
    tagline: "",
    location: "",
    skills: [],
    imageUrl: "https://ijczdvlbeikfozgkezgb.supabase.co/storage/v1/object/public/profile-avatars/5503ea21-d73b-4176-a0cf-b64562a71906/profile-f9ad9757-4623-4cb1-812d-7ee1222a23ae.jpg",
    topSongsCount: 0,
    achievementsCount: 0,
    publicSlug: "kimenyi-5503ea",
    profileUrl: "/creators/kimenyi-5503ea",
  },
  {
    id: "a844e102-087b-40b6-862d-e5adcd895129",
    name: "sxlewi",
    creatorTypes: ["Artist", "Producer"],
    tagline: "",
    location: "",
    skills: [],
    imageUrl: "https://ijczdvlbeikfozgkezgb.supabase.co/storage/v1/object/public/profile-avatars/a844e102-087b-40b6-862d-e5adcd895129/profile-fee2321a-0822-407f-b080-8b5073aa26ae.jpg",
    topSongsCount: 0,
    achievementsCount: 0,
    publicSlug: "sxlewi",
    profileUrl: "/creators/sxlewi",
  },
];

function json(creators, source, upstream = null) {
  return NextResponse.json(
    { creators, source, upstream },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}

export async function GET() {
  try {
    const response = await fetch(MUSIC_CREATORS_API, {
      method: "GET",
      cache: "no-store",
      redirect: "follow",
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(7000),
    });

    const contentType = response.headers.get("content-type") || "";
    const raw = await response.text();

    if (response.ok && contentType.toLowerCase().includes("application/json")) {
      try {
        const payload = JSON.parse(raw);
        const creators = Array.isArray(payload?.creators) ? payload.creators : [];
        if (creators.length) return json(creators, "live");
      } catch (error) {
        console.warn("FACKTS Music creator feed JSON parse failed; using public snapshot.", error);
      }
    }

    console.warn("FACKTS Music creator feed unavailable server-to-server; using public snapshot.", {
      status: response.status,
      contentType,
      finalUrl: response.url,
    });

    return json(FALLBACK_CREATORS, "snapshot", {
      status: response.status,
      contentType,
    });
  } catch (error) {
    console.warn("FACKTS Music creator feed could not be reached server-to-server; using public snapshot.", error);
    return json(FALLBACK_CREATORS, "snapshot");
  }
}
