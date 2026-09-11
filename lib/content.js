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
  musicProfileExample: "https://music.facktsafrica.co.ke/creators/joseph-millighan",
  musicYouTube: "https://www.youtube.com/@FacktsAfricaMusicEntertainment",
  hoopsYouTube: "https://www.youtube.com/@facktshoops",
  hoopsYouTubeUser: "facktshoops",
};

export const management = [
  { name: "Joseph Millighan", role: "Founder & Senior Developer", city: "Nairobi, Kenya" },
  { name: "Thomas Hanss", role: "General Manager", city: "Nairobi, Kenya" },
  { name: "Jonathan Thuo", role: "FACKTS Music Admin", city: "Nairobi, Kenya" },
  { name: "Allan Kimanzi", role: "Junior Developer", city: "Nairobi, Kenya" },
  { name: "Felix Matheka", role: "Finance", city: "Nairobi, Kenya" },
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
    type: "HOOPS / LIVE / COMMUNITY",
    city: "NAIROBI",
    status: "STARTING LATE SEP / EARLY OCT 2026",
    description:
      "A basketball experience that takes FACKTS into real courts, campuses and local playing communities. Court Takeovers are built around live matchups, player visibility, competitive energy and a crowd that is close enough to feel part of the game. Each stop also creates a record of the players, teams and basketball culture found there.",
    shortDescription:
      "FACKTS enters real courts and campuses for live basketball, player visibility and community-centred competition.",
    audience:
      "Players, teams, campuses, local basketball communities, fans and partners looking to engage the game where it is actually played.",
    experience:
      "A close-to-the-court basketball environment where competition, personalities and local court culture are the centre of attention.",
  },
  {
    slug: "versus-beats-buckets",
    title: "VERSUS: BEATS × BUCKETS",
    type: "BASKETBALL / MUSIC / CULTURE",
    city: "NAIROBI",
    status: "COMING SOON",
    description:
      "A crossover FACKTS property built specifically for the point where basketball and music genuinely meet. VERSUS brings competitive basketball and creative performance into one shared audience environment, allowing the energy of the court and the energy of the sound to shape the same experience without turning either side into background entertainment.",
    shortDescription:
      "A true basketball-and-music crossover where both sides of FACKTS share one live cultural stage.",
    audience:
      "Basketball audiences, artists, producers, creators, youth communities and partners interested in the space where sport and music naturally overlap.",
    experience:
      "Competition and creative performance presented as equal parts of one cultural experience rather than separate events placed next to each other.",
  },
  {
    slug: "fackts-3x3",
    title: "FACKTS 3×3",
    type: "HOOPS / COMPETITION",
    city: "NAIROBI",
    status: "COMING SOON",
    description:
      "A faster, more compact basketball competition centred on small-sided play, quick decisions and individual impact within a team. FACKTS 3×3 is designed to make games easy to follow, keep the competitive intensity high and create a format that can work strongly in courts, campuses and focused tournament environments.",
    shortDescription:
      "Fast, compact 3×3 basketball built around quick games, visible matchups and concentrated competition.",
    audience:
      "Players, small squads, campuses, basketball communities, spectators and organisations looking for a focused competitive format.",
    experience:
      "Shorter, high-intensity games where space, decision-making, chemistry and individual execution become much more visible.",
  },
];

export const originals = {
  music: [
    {
      title: "THE STREETS ARE TALKING",
      platform: "FACKTS MUSIC",
      type: "FACKTS AFRICA PODCAST / CONVERSATION",
      count: "PODCAST",
      description: "FACKTS Africa conversations from the street level: culture, music, people and the issues being talked about around the scene.",
      id: "PL9zP5uo753eQkeBl8GUoV5XQdasiAwNJZ",
      firstVideo: "K_Yzy2qmxtc",
      poster: "/fackts/music/studio-session.webp",
      posterTitle: "THE STREETS ARE TALKING",
      posterSubtitle: "FACKTS AFRICA PODCAST",
      featured: true,
    },
    {
      title: "HOOD REP",
      platform: "FACKTS MUSIC",
      type: "IDENTITY / CONVERSATION",
      count: "2 VIDEOS",
      description: "Conversations rooted in neighbourhood, identity and sound, giving artists room to explain where they come from and what they represent.",
      id: "PL9zP5uo753eRPZW4O5dkdboBmcksjh2Rn",
      firstVideo: "6krs0Oc3AWs",
    },
    {
      title: "ON NEXT",
      platform: "FACKTS MUSIC",
      type: "EMERGING ARTISTS / DISCOVERY",
      count: "10 VIDEOS",
      description: "A forward-looking series around artists, projects and creative moves worth paying attention to next.",
      id: "PL9zP5uo753eTBQ04j8Zu4vlbi7FuxSdkm",
      firstVideo: "fIOUWTC-BUI",
    },
    {
      title: "ON SET NA MILLZ",
      platform: "FACKTS MUSIC",
      type: "BEHIND THE SCENES / SERIES",
      count: "3 VIDEOS",
      description: "Millz takes viewers behind the work: sets, sessions, creative process and the moments around the finished music.",
      id: "PL9zP5uo753eSQNP9uSHOYWJFgPjz6rQML",
      firstVideo: "nCcXLiKsiUM",
      homeFeatured: true,
    },
    {
      title: "KENYAN MUSIC SAGA",
      platform: "FACKTS MUSIC",
      type: "KENYAN MUSIC / CONVERSATION",
      count: "5 VIDEOS",
      description: "Stories and conversations around Kenyan music, its personalities, turning points and the wider ecosystem shaping the sound.",
      id: "PL9zP5uo753eR3Amj-xumlT63chOdmtfVO",
      firstVideo: "bDI5KNezjL0",
    },
    {
      title: "FACKTS ARTISTS",
      platform: "FACKTS MUSIC",
      type: "ARTISTS / RELEASES / CULTURE",
      count: "2 VIDEOS",
      description: "A FACKTS Music series centred on artists, their releases and the people and conversations shaping the local music ecosystem.",
      id: "PL9zP5uo753eSadsE0WzP1YKvdSz5_lnAe",
      firstVideo: "UhPvMLs1Kqk",
    },
    {
      title: "MUSIC EXPLAINED",
      platform: "FACKTS MUSIC",
      type: "EXPLAINER / MUSIC CULTURE",
      count: "2 VIDEOS",
      description: "Music stories, moments and industry conversations broken down with the context behind what audiences are seeing and hearing.",
      id: "PL9zP5uo753eQbb-ZN2ckx4ZCXMYS_4XN1",
      firstVideo: "TjFbRfkM7Uw",
    },
  ],
  hoops: [
    {
      title: "FACKTS AFRICA ACADEMIES",
      platform: "FACKTS HOOPS",
      type: "ACADEMY TOUR / DEVELOPMENT",
      count: "1 VIDEO",
      description: "Visits into basketball academies and development environments shaping players before the wider public ever sees them compete.",
      id: "PLao2Mso_Mk4eM2Oy3q1buL5UbOoo4iwfL",
      firstVideo: "nh_fov0knEk",
    },
    {
      title: "CAREER TALKS",
      platform: "FACKTS HOOPS",
      type: "CAREER STORIES / PODCAST",
      count: "1 EPISODE",
      description: "Players and basketball people unpack the journeys, turning points, decisions and lessons behind a career in the game.",
      id: "PLao2Mso_Mk4fDpa5QVOxA73HSmjdxQ_G1",
      firstVideo: "c8AVw5UqkM4",
      featured: true,
    },
    {
      title: "BASKETBALL UNCOVERED",
      platform: "FACKTS HOOPS",
      type: "CONVERSATION / ISSUES",
      count: "1 VIDEO",
      description: "Candid basketball conversations that go beyond highlights and ask what is working, what is not and what the game needs next.",
      id: "PLao2Mso_Mk4eEYM2-kbyz9JCpdUGeoiqh",
      firstVideo: "iF6-icO6RB4",
    },
    {
      title: "FACKTS AFRICA CUPS",
      platform: "FACKTS HOOPS",
      type: "TOURNAMENT / ARCHIVE",
      count: "2 VIDEOS",
      description: "Tournament films and competition coverage that preserve the games, people and atmosphere around FACKTS Cup events.",
      id: "PLao2Mso_Mk4ccCgk1h1C7bhZ0d8_mkpxa",
      firstVideo: "1RNvkg8Wt8w",
    },
    {
      title: "1 ON 1s",
      platform: "FACKTS HOOPS",
      type: "1V1 / COMPETITION",
      count: "9 VIDEOS",
      description: "Head-to-head basketball where individual skill, matchups, personality and competitive pressure take centre court.",
      id: "PLao2Mso_Mk4dlqZkIKV8iuyxCwq5k6HKU",
      firstVideo: "2---0TFlhws",
    },
    {
      title: "TOMMY HANNS",
      platform: "FACKTS HOOPS",
      type: "PROFILE / CONVERSATION",
      count: "2 VIDEOS",
      description: "A focused collection of appearances and basketball conversations featuring Tommy Hanns across the FACKTS Hoops archive.",
      id: "PLao2Mso_Mk4cC3MGg-eUcDwnS8INpQsHw",
      firstVideo: "LCSTVayLHNA",
    },
    {
      title: "HISTORY OF KENYAN BASKETBALL",
      platform: "FACKTS HOOPS",
      type: "HISTORY / ARCHIVE",
      count: "3 VIDEOS",
      description: "Conversations and archival storytelling that protect the people, moments and context that built Kenyan basketball before today.",
      id: "PLao2Mso_Mk4dLQlWHBzlCHtFPfsf-dAxI",
      firstVideo: "ToZ7m0qhvOM",
    },
    {
      title: "COURT TAKE-OVERS",
      platform: "FACKTS HOOPS",
      type: "LIVE PROPERTY / FILMS",
      count: "17 VIDEOS",
      description: "The video record of FACKTS Court Take-Overs: matchups, players, crowd energy and the culture surrounding the live basketball property.",
      id: "PLao2Mso_Mk4cfYmvl11Pz5MyefBx43JCa",
      firstVideo: "l-NREwn3_dM",
      featured: true,
      homeFeatured: true,
    },
  ],
};

// Shared group-level supporting data retained from the V4.4 site model.
// These exports are still consumed by the homepage and other existing components.
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
