import { experiences, originals, siteConfig } from "./content";

const originalsCount = originals.music.length + originals.hoops.length;
const courtTakeoverArchive = originals.hoops.find((item) =>
  item.title.toLowerCase().includes("court take")
);
const courtArchiveCount =
  String(courtTakeoverArchive?.count || "").match(/\d+/)?.[0] || "17";

export const institutionalMetrics = [
  {
    value: "2",
    label: "operating platforms",
    note: "FACKTS Hoops + FACKTS Music",
  },
  {
    value: String(originalsCount),
    label: "Originals collections",
    note: "basketball + music archive",
  },
  {
    value: "≈22",
    label: "teams",
    note: "Health Check-Up Cup 2025",
  },
  {
    value: "43",
    label: "consent / release records",
    note: "Health Check-Up Cup 2025",
  },
  {
    value: "21",
    label: "tracks selected",
    note: "current FACKTS Music production cycle",
  },
];

export const trustPillars = [
  {
    number: "01",
    title: "Owned platforms",
    copy:
      "FACKTS operates dedicated Hoops and Music infrastructure rather than depending entirely on social media feeds.",
  },
  {
    number: "02",
    title: "Structured records",
    copy:
      "Players, games, creators, projects, credits, sessions and cultural archives are organised into systems that can stay useful over time.",
  },
  {
    number: "03",
    title: "Real operations",
    copy:
      "The work reaches courts, tournaments, studios, creator projects and live properties. The website points back to visible execution.",
  },
  {
    number: "04",
    title: "Consent & governance",
    copy:
      "FACKTS uses consent and release records where required and is formalising operating frameworks as the platforms and properties grow.",
  },
  {
    number: "05",
    title: "Reporting & evidence",
    copy:
      "The aim is not to finish at an activation. Work should leave behind records, assets, participation evidence and a basis for the next decision.",
  },
  {
    number: "06",
    title: "Named operators",
    copy:
      "The People page identifies the team responsible for development, management, music administration and finance.",
  },
];

export const selectedWork = [
  {
    slug: "court-takeovers",
    title: "FACKTS Court Takeovers",
    category: "BASKETBALL PROPERTY / COMMUNITY",
    summary:
      "A FACKTS-owned basketball property that enters real courts and communities, creates structured live matchups and leaves behind a record of the people and game around each stop.",
    image: "/fackts/hoops/court-action.webp",
    context:
      "Local basketball activity is often energetic but fragmented. Players, teams and court communities can compete without a durable record of the game, the people involved or the culture around it.",
    operated: [
      "Live basketball matchups and court-centred activations",
      "Player and community visibility around each takeover",
      "Game, photography and video documentation",
      "A growing archive connected back to FACKTS Hoops and FACKTS Originals",
    ],
    delivered: [
      "A repeatable FACKTS basketball property",
      "Documented matchups and player stories",
      "Content and archive material that outlives a single day",
      "A partner-ready environment built around participation rather than logo placement alone",
    ],
    evidence: [
      { value: courtArchiveCount, label: "videos in the current Court Take-Overs Originals archive" },
      { value: "LIVE", label: "FACKTS-owned basketball property" },
      { value: "HOOPS", label: "linked to the FACKTS Hoops platform" },
    ],
    outcome:
      "Court Takeovers demonstrates that FACKTS can take its basketball infrastructure into physical communities and preserve a usable record around the live experience.",
    relatedLabel: "Explore Court Takeovers",
    relatedHref: "/experiences/court-takeovers",
  },
  {
    slug: "health-check-up-cup",
    title: "Health Check-Up Cup 2025",
    category: "BASKETBALL EVENT / DOCUMENTATION",
    summary:
      "A three-day basketball event at KMTC Upper Hill that shows FACKTS working at multi-team event scale while maintaining photography, consent and participant records.",
    image: "/fackts/hoops/court-contest.webp",
    context:
      "Large community basketball events need more than fixtures and a final whistle. They also need a reliable record of participation, media assets and permissions that can be used after the event.",
    operated: [
      "Event documentation across a three-day competition",
      "Photography capture and archive organisation",
      "Participant consent and release record collection",
      "Basketball coverage across men's and women's participation",
    ],
    delivered: [
      "A documented multi-team event record",
      "A substantial photography archive",
      "Consent / release records for participants",
      "Evidence that can support reporting, storytelling and future event planning",
    ],
    evidence: [
      { value: "≈22", label: "teams" },
      { value: "6", label: "women's teams" },
      { value: "3", label: "event days" },
      { value: "≈500", label: "photographs" },
      { value: "43", label: "consent / release records" },
    ],
    outcome:
      "The Health Check-Up Cup is evidence that FACKTS can document a real basketball event at meaningful scale and leave behind organised assets and participation records.",
    relatedLabel: "Enter FACKTS Hoops",
    relatedHref: siteConfig.hoopsPlatform,
  },
  {
    slug: "music-project-system",
    title: "FACKTS Music Project System",
    category: "MUSIC / CREATOR OPERATIONS",
    summary:
      "An active creator-production cycle connecting artists, producers, studio sessions, song selection, contributor records and public creator profiles inside one operating environment.",
    image: "/fackts/music/studio-session.webp",
    context:
      "Music projects can easily disappear into chats, disconnected studio sessions and unclear contributor histories. FACKTS Music is being built to keep the people, project activity and credits connected to the work.",
    operated: [
      "Artist and producer collaboration around shared projects",
      "Studio sessions and production workflow",
      "Song review and selection",
      "Contributor / credit tracking and creator profiles",
    ],
    delivered: [
      "21 selected tracks in the current production cycle",
      "A planned three-EP structure of seven tracks each",
      "A connected record of creators and contributions",
      "A working digital platform around projects, profiles and sessions",
    ],
    evidence: [
      { value: "21", label: "tracks selected" },
      { value: "3", label: "planned EPs" },
      { value: "7", label: "tracks planned per EP" },
      { value: "LIVE", label: "creator-profile infrastructure" },
    ],
    outcome:
      "The production cycle demonstrates that FACKTS Music is not only presenting artists publicly; it is building structure around how creative work moves from collaboration toward a finished project.",
    relatedLabel: "Enter FACKTS Music",
    relatedHref: siteConfig.musicPlatform,
  },
  {
    slug: "originals-cultural-archive",
    title: "FACKTS Originals",
    category: "CULTURAL ARCHIVE / PROGRAMMING",
    summary:
      "A growing record of Kenyan basketball and music culture covering competition, history, academies, careers, artist conversations, music context and recurring FACKTS formats.",
    image: "/fackts/brand/hero-main.jpg",
    context:
      "Culture moves quickly. Without an archive, important games, people, conversations and creative moments become difficult to find, reference or learn from later.",
    operated: [
      "Basketball and music series organised as named collections",
      "Inline viewing within the FACKTS site experience",
      "Recurring archive categories rather than isolated posts",
      "A bridge between live properties, platform activity and documentation",
    ],
    delivered: [
      `${originalsCount} current Originals collections across Hoops and Music`,
      "Court Take-Overs, Basketball Uncovered, academies, career talks and 1V1 coverage",
      "Music conversations, artist formats and contextual series",
      "A public record that institutions and communities can return to",
    ],
    evidence: [
      { value: String(originalsCount), label: "current Originals collections" },
      { value: String(originals.hoops.length), label: "Hoops collections" },
      { value: String(originals.music.length), label: "Music collections" },
    ],
    outcome:
      "Originals turns FACKTS media into institutional evidence: a searchable cultural record connected to the systems and experiences that produced it.",
    relatedLabel: "Explore FACKTS Originals",
    relatedHref: "/originals",
  },
];

export const engagementModels = [
  {
    number: "01",
    title: "Brand activations",
    audience:
      "For organisations that want to enter basketball, music or youth culture through participation and experience rather than traditional advertising.",
    outputs: [
      "Branded Court Takeovers or competition integrations",
      "Creator / athlete integrations",
      "Audience engagement and physical activation",
      "Branded documentation and post-activation evidence",
    ],
  },
  {
    number: "02",
    title: "Property partnerships",
    audience:
      "For organisations seeking longer-term association with an existing or developing FACKTS property.",
    outputs: [
      "Title or presenting partnership",
      "Category partnership",
      "Official supplier relationship",
      "Community partnership",
    ],
    examples:
      "Court Takeovers, FACKTS Kings, FACKTS 3×3, VERSUS: Beats × Buckets and selected FACKTS Music properties.",
  },
  {
    number: "03",
    title: "Teams, academies & leagues",
    audience:
      "For basketball organisations that need stronger player, game and competition infrastructure.",
    outputs: [
      "Team and player digital profiles",
      "Game documentation and statistics",
      "Competition records and reporting",
      "Visibility and content infrastructure",
    ],
  },
  {
    number: "04",
    title: "Universities & institutions",
    audience:
      "For campuses and institutions building relevant youth participation, talent and cultural programmes.",
    outputs: [
      "Campus activations and tournaments",
      "Music and creator programmes",
      "Talent discovery and participation initiatives",
      "Documentation and reporting",
    ],
  },
  {
    number: "05",
    title: "Music & creative businesses",
    audience:
      "For studios, producers, artists, labels, creative companies and media organisations working around the creator economy.",
    outputs: [
      "Creator discovery and profiles",
      "Project and session documentation",
      "Credits Roll and contribution visibility",
      "Music activations, creator data and archive",
    ],
  },
  {
    number: "06",
    title: "Corporate / CSR / community programmes",
    audience:
      "For organisations that need a programme designed and operated around a real community outcome.",
    outputs: [
      "Sport and health programming",
      "Youth and talent development",
      "Creative-economy participation",
      "Community activation with documented evidence",
    ],
  },
];

export const partnershipSteps = [
  {
    number: "01",
    title: "Brief",
    copy: "What does the organisation want to change, reach, improve or understand?",
  },
  {
    number: "02",
    title: "Design",
    copy: "FACKTS identifies the relevant audience, platform, property, programme or activation.",
  },
  {
    number: "03",
    title: "Build",
    copy: "The experience, platform integration, documentation and operating plan are developed.",
  },
  {
    number: "04",
    title: "Operate",
    copy: "The project or activation is executed in the relevant community or environment.",
  },
  {
    number: "05",
    title: "Document",
    copy: "Participation, content, statistics, records and evidence are captured as part of the work.",
  },
  {
    number: "06",
    title: "Report",
    copy: "The organisation receives a clear record of what happened, what was delivered and what should happen next.",
  },
];

// Add only relationships that are approved for public display.
// Keeping this empty prevents the site from implying a client/sponsor relationship that has not been confirmed.
export const publicRelationships = [];
