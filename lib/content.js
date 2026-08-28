
// FACKTS Africa Group public-site content.
// This is intentionally centralized so it can later be moved into a protected
// Supabase-backed admin without redesigning the front-end components.

export const siteConfig = {
  email: "info@facktsafrica.co.ke",
  phone: "+254 711 468 303",
  addressLine1: "3rd Floor, Krishna Centre, E05",
  addressLine2: "Westlands, Nairobi, Kenya",
  hoopsPlatform: "https://fackts-hoops-web.vercel.app/",
  musicPlatform: "https://kreyoh.facktsafrica.co.ke/",
};

export const management = [
  { name: "Joseph Millighan", role: "Founder & Director", city: "Kenya" },
  { name: "Hanss", role: "General Captain", city: "Kenya" },
  { name: "Liam", role: "Floor Captain / Operations", city: "Kenya" },
  { name: "Gerito", role: "Operations", city: "Kenya" },
  { name: "Felix Matheka", role: "Finance", city: "Kenya" },
  { name: "Mark", role: "Strategy & Partnerships", city: "Kenya" },
  { name: "Damaris", role: "Administration & PA", city: "Kenya" },
];

export const stories = [
  {
    slug: "court-session-archive",
    category: "HOOPS / ARCHIVE",
    title: "What the court looked like before the next chapter.",
    city: "NAIROBI",
    image: "/fackts/hoops/court-action.webp",
    excerpt: "The archive begins with real courts, real players and the everyday basketball culture that FACKTS has been documenting before the next Court Takeover chapter begins.",
  },
  {
    slug: "credits-roll",
    category: "MUSIC / DOCUMENTARY / COMING SOON",
    title: "Put the camera on the people behind the sound.",
    city: "KENYA",
    image: "/fackts/music/booth-mic.webp",
    excerpt: "Credits Roll is on the way: a documentary treatment of producers, engineers, directors and other builders who often sit behind the visible artist.",
  },
  {
    slug: "project-001",
    category: "MUSIC / PROJECT WORLD",
    title: "A release is stronger when the system around it is visible.",
    city: "NAIROBI",
    image: "/fackts/music/artist-group.webp",
    excerpt: "Project 001 is evidence of FACKTS building creative ventures, not only publishing music content.",
  },
  {
    slug: "behind-the-frame",
    category: "PEOPLE / CREATOR CULTURE",
    title: "The people holding the camera move culture too.",
    city: "NAIROBI",
    image: "/fackts/people/creator-camera.webp",
    excerpt: "Athletes and artists are not the whole ecosystem. Creators, shooters, editors and operators shape what the world eventually sees.",
  },
  {
    slug: "street-hoops-sessions",
    category: "HOOPS / COMMUNITY",
    title: "Small court. Big signal.",
    city: "KENYA",
    image: "/fackts/hoops/court-group.webp",
    excerpt: "The size of the venue does not determine the value of the culture happening inside it.",
  },
  {
    slug: "booth-after-dark",
    category: "MUSIC / STUDIO CULTURE",
    title: "Every sound starts somewhere real.",
    city: "NAIROBI",
    image: "/fackts/music/studio-session.webp",
    excerpt: "Real rooms, real equipment, real creators. The booth is an environment, not a music-note icon.",
  },
];

// Culture profiles currently use supplied photography without attaching unconfirmed identities.
// Individual names/photos can be mapped once the FACKTS team confirms each person.
export const people = [
  { slug: "player-01", name: "PLAYER PROFILE", role: "HOOPER", city: "NAIROBI", image: "/fackts/hoops/player-portrait.webp" },
  { slug: "producer-01", name: "PRODUCER PROFILE", role: "MUSIC CREATIVE", city: "NAIROBI", image: "/fackts/music/producer-session.webp" },
  { slug: "creator-01", name: "CREATOR PROFILE", role: "CAMERA / STORY", city: "NAIROBI", image: "/fackts/people/creator-camera.webp" },
  { slug: "player-02", name: "PLAYER PROFILE", role: "HOOPER", city: "NAIROBI", image: "/fackts/hoops/player-portrait-2.webp" },
  { slug: "artist-01", name: "ARTIST PROFILE", role: "ARTIST", city: "NAIROBI", image: "/fackts/music/artist-blue.webp" },
  { slug: "player-03", name: "PLAYER PROFILE", role: "HOOPER", city: "NAIROBI", image: "/fackts/people/court-portrait.webp" },
];

export const experiences = [
  {
    slug: "court-takeovers",
    title: "COURT TAKEOVERS",
    type: "HOOPS / STORY / COMMUNITY",
    city: "NAIROBI",
    status: "STARTING LATE SEP / EARLY OCT 2026",
    image: "/fackts/events/court-moment.webp",
    description: "Court Takeovers begin at the end of September / first week of October 2026, building a story-world around players, teams, fans, cameras and the court itself.",
  },
  {
    slug: "versus-beats-buckets",
    title: "VERSUS: BEATS × BUCKETS",
    type: "MUSIC / BASKETBALL / LIVE",
    city: "PAN-AFRICAN FORMAT",
    status: "COMING SOON",
    image: "/fackts/hoops/court-contest.webp",
    description: "An upcoming FACKTS property: artist versus artist, hood versus hood, basketball, performances, dance, cyphers and crowd energy in one live experience.",
  },
  {
    slug: "credits-roll-live",
    title: "CREDITS ROLL",
    type: "MUSIC / DOCUMENTARY / PEOPLE",
    city: "KENYA",
    status: "COMING SOON",
    image: "/fackts/music/booth-mic.webp",
    description: "An upcoming documentary format focused on the producers, engineers, directors and creative operators behind music culture.",
  },
  {
    slug: "fackts-3x3",
    title: "FACKTS 3×3",
    type: "HOOPS / MUSIC / ACTIVATION",
    city: "NAIROBI",
    status: "COMING SOON",
    image: "/fackts/events/court-run.webp",
    description: "An upcoming basketball format designed to carry music, brands, creators, fans and community participation together.",
  },
];

export const cityVision = [
  { city: "NAIROBI", note: "ROOT / CURRENT BASE", state: "LIVE" },
  { city: "JOHANNESBURG", note: "EXPANSION VISION", state: "NEXT" },
  { city: "LUANDA", note: "EXPANSION VISION", state: "NEXT" },
  { city: "LAGOS", note: "EXPANSION VISION", state: "NEXT" },
  { city: "ACCRA", note: "EXPANSION VISION", state: "NEXT" },
  { city: "KAMPALA", note: "EXPANSION VISION", state: "NEXT" },
  { city: "KIGALI", note: "EXPANSION VISION", state: "NEXT" },
  { city: "LONDON", note: "DIASPORA HORIZON", state: "HORIZON" },
];
