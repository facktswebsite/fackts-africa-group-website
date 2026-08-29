// FACKTS Africa Group public-site content.
// Kept centralized so a future protected admin/CMS can replace this file
// without forcing a front-end redesign.

export const siteConfig = {
  website: "https://www.facktsafrica.co.ke",
  email: "info@facktsafrica.co.ke",
  phone: "+254 711 468 303",
  addressLine1: "3rd Floor, Krishna Centre, E05",
  addressLine2: "Westlands, Nairobi, Kenya",
  hoopsPlatform: "https://hoops.facktsafrica.co.ke",
  hoopsPlayers: "https://hoops.facktsafrica.co.ke/players",
  musicPlatform: "https://music.facktsafrica.co.ke",
  musicProfileExample: "https://music.facktsafrica.co.ke/people/27ccbdf0-6561-4c13-a846-3844c2deab40",
  hoopsYouTube: "https://www.youtube.com/@facktshoops",
  hoopsYouTubeUser: "facktshoops",
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

export const featuredWatch = [
  {
    kind: "youtube",
    eyebrow: "FACKTS HOOPS / LATEST",
    category: "BASKETBALL / VIDEO",
    title: "LATEST FROM THE FACKTS HOOPS ARCHIVE",
    description: "Games, interviews and court culture presented through a FACKTS-native player. The YouTube player only loads after you choose to watch.",
    image: "/fackts/events/court-run.webp",
    youtubeUser: siteConfig.hoopsYouTubeUser,
    index: 0,
  },
  {
    kind: "youtube",
    eyebrow: "FACKTS HOOPS / NEXT UP",
    category: "PLAYER / CULTURE",
    title: "ANOTHER CUT FROM THE COURT",
    description: "Move through the FACKTS Hoops upload archive without leaving the FACKTS website experience first.",
    image: "/fackts/people/court-embrace.webp",
    youtubeUser: siteConfig.hoopsYouTubeUser,
    index: 1,
  },
  {
    kind: "link",
    eyebrow: "FACKTS MUSIC / LIVE PROFILE",
    category: "MUSIC / PEOPLE",
    format: "PROFILE",
    title: "CREATORS INSIDE THE MUSIC WORLD",
    description: "Open a real FACKTS Music profile and move from the group site into the living music ecosystem.",
    image: "/fackts/music/artist-blue.webp",
    url: siteConfig.musicProfileExample,
    cta: "Open profile",
  },
];

export const proofItems = [
  {
    eyebrow: "LIVE PROFILES / BASKETBALL",
    title: "PLAYER PROFILES",
    copy: "Current player profiles live inside FACKTS Hoops, where basketball identities, team context and records can stay current instead of being copied into static corporate cards.",
    image: "/fackts/hoops/player-rim.webp",
    url: siteConfig.hoopsPlayers,
    cta: "Browse player profiles",
  },
  {
    eyebrow: "VIDEO ARCHIVE / BASKETBALL",
    title: "COURTS ON CAMERA",
    copy: "Games, interviews, athlete stories and court culture are already documented in the FACKTS Hoops YouTube archive.",
    image: "/fackts/hoops/court-group.webp",
    url: siteConfig.hoopsYouTube,
    cta: "Watch the archive",
  },
  {
    eyebrow: "LIVE PROFILE / MUSIC",
    title: "CREATORS, NOT PLACEHOLDERS",
    copy: "Real artist and creator profiles live inside FACKTS Music. The corporate site routes into that living ecosystem rather than inventing anonymous public identities.",
    image: "/fackts/music/artist-group.webp",
    url: siteConfig.musicProfileExample,
    cta: "View a live profile",
  },
];

export const stories = [
  {
    slug: "court-session-archive",
    category: "HOOPS / ARCHIVE",
    title: "What the court looked like before the next chapter.",
    city: "NAIROBI",
    image: "/fackts/hoops/court-archive.webp",
    excerpt: "The archive begins with real courts, real players and the everyday basketball culture FACKTS has been documenting before the next Court Takeover chapter begins.",
    evidenceLabel: "Watch basketball evidence",
    evidenceUrl: siteConfig.hoopsYouTube,
  },
  {
    slug: "credits-roll",
    category: "MUSIC / DOCUMENTARY / COMING SOON",
    title: "Put the camera on the people behind the sound.",
    city: "KENYA",
    image: "/fackts/music/booth-mic.webp",
    excerpt: "Credits Roll is on the way: a documentary treatment of producers, engineers, directors and other builders who often sit behind the visible artist.",
    evidenceLabel: "Enter FACKTS Music",
    evidenceUrl: siteConfig.musicPlatform,
  },
  {
    slug: "project-001",
    category: "MUSIC / PROJECT WORLD",
    title: "A release is stronger when the system around it is visible.",
    city: "NAIROBI",
    image: "/fackts/music/artist-group.webp",
    excerpt: "Project 001 is evidence of FACKTS building creative ventures, not only publishing music content.",
    evidenceLabel: "Explore the music platform",
    evidenceUrl: siteConfig.musicPlatform,
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
    evidenceLabel: "Watch FACKTS Hoops",
    evidenceUrl: siteConfig.hoopsYouTube,
  },
  {
    slug: "booth-after-dark",
    category: "MUSIC / STUDIO CULTURE",
    title: "Every sound starts somewhere real.",
    city: "NAIROBI",
    image: "/fackts/music/studio-session.webp",
    excerpt: "Real rooms, real equipment, real creators. The booth is an environment, not a music-note icon.",
    evidenceLabel: "Enter FACKTS Music",
    evidenceUrl: siteConfig.musicPlatform,
  },
];

// Public anonymous profile cards are intentionally hidden until identities are confirmed.
// Athlete profiles route to FACKTS Hoops; artist/producer discovery routes to FACKTS Music.
export const people = [];

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
  { city: "JOHANNESBURG", note: "EXPANSION HORIZON", state: "NEXT" },
  { city: "LUANDA", note: "EXPANSION HORIZON", state: "NEXT" },
  { city: "LAGOS", note: "EXPANSION HORIZON", state: "NEXT" },
  { city: "ACCRA", note: "EXPANSION HORIZON", state: "NEXT" },
  { city: "KAMPALA", note: "EXPANSION HORIZON", state: "NEXT" },
  { city: "KIGALI", note: "EXPANSION HORIZON", state: "NEXT" },
  { city: "LONDON", note: "DIASPORA HORIZON", state: "HORIZON" },
];

// Homepage image slots are centralized so the future admin/CMS can reshuffle
// homepage photography without changing layout code.
export const homeMedia = {
  hero: "/fackts/brand/hero-main.jpg",
  hoops: "/fackts/hoops/court-action.webp",
  music: "/fackts/music/studio-session.webp",
  hoopsProof: "/fackts/hoops/court-archive.webp",
  musicProof: "/fackts/music/artist-blue.webp",
};

export const platformCapabilities = {
  hoops: ["Player profiles", "Team portals", "Games, stats & records", "Events & basketball coverage"],
  music: ["Creator profiles", "Projects & sessions", "Studio / producer ecosystem", "Credits & discovery"],
};

export const platformOutcomes = [
  { title: "Visibility", copy: "Give talent and organisations a clearer digital identity people can actually find and understand." },
  { title: "Structure", copy: "Put profiles, teams, projects and activity into systems that are easier to operate and grow." },
  { title: "Continuity", copy: "Keep the record of games, people, projects and experiences alive beyond a single event or release." },
  { title: "Access", copy: "Create stronger entry points for partners, communities and opportunities around active ecosystems." },
];
