export interface ExperienceEntry {
  id: string;
  organization: string;
  role: string;
  period: string;
  status: "current" | "past";
  bullets: string[];
  skills: string[];
}

export interface EquityMindsData {
  organization: string;
  position: string;
  founded: string;
  teamSize: number;
  statusType: string;
  tagline: string;
  purpose: string;
  activities: string[];
  founderContributions: string[];
  longTermVision: string;
  nearTermGoal: string;
  disclaimer: string;
  progression: {
    stage: string;
    label: string;
    description: string;
    active: boolean;
  }[];
}

export const equityMinds: EquityMindsData = {
  organization: "Equity Minds",
  position: "Founder",
  founded: "August 15, 2026",
  teamSize: 15,
  statusType: "Student-Led Financial Initiative",
  tagline: "Cultivating practical financial literacy & equity research at MNIT Jaipur.",
  purpose:
    "A student-led initiative dedicated to improving financial literacy and practical understanding of equity markets among college students.",
  activities: [
    "Recruiting & mentoring college members in core financial literacy",
    "Teaching fundamental analysis and equity valuation frameworks",
    "Explaining technical analysis principles and market structure",
    "Conducting deep-dive company balance sheet and earnings research",
    "Organizing structured financial presentations and research discussions",
    "Developing team coordination and operational rhythm"
  ],
  founderContributions: [
    "Founded and spearheaded the initiative from inception",
    "Recruited and personally lead the 15-member student cohort",
    "Designed the curriculum covering equities, financial statements, and valuation",
    "Guide members through real-world company research and analytical presentations",
    "Establishing long-term strategic direction and operating culture"
  ],
  longTermVision:
    "Build Equity Minds into a high-caliber financial and investment-focused company, with the long-term ambition of evolving toward a fund-management-oriented enterprise.",
  nearTermGoal:
    "Establish a disciplined research methodology, conduct consistent company analyses, and build an exceptional core team prepared for expansion.",
  disclaimer:
    "Equity Minds is strictly an educational student-led initiative. It is not an asset management company, registered investment adviser (RIA), portfolio management service (PMS), or regulated financial entity.",
  progression: [
    {
      stage: "01",
      label: "Student Initiative",
      description: "Founding cohort established at MNIT Jaipur with 15 active members.",
      active: true
    },
    {
      stage: "02",
      label: "Financial Education",
      description: "Structured learning across fundamental valuation, financial statements, and markets.",
      active: true
    },
    {
      stage: "03",
      label: "Research Culture",
      description: "Rigorous student-authored company equity research and presentation cycles.",
      active: false
    },
    {
      stage: "04",
      label: "Structured Operations",
      description: "Formalizing research desks, sector coverage, and multi-college engagement.",
      active: false
    },
    {
      stage: "05",
      label: "Commercial Financial Firm",
      description: "Long-term transition toward a licensed fund management and research business.",
      active: false
    }
  ]
};

export const experiences: ExperienceEntry[] = [
  {
    id: "equity-minds",
    organization: "Equity Minds",
    role: "Founder",
    period: "August 2026 — Present",
    status: "current",
    bullets: [
      "Founded the initiative to bridge the financial knowledge gap among engineering students.",
      "Recruited, structured, and actively lead a 15-member team conducting equity research.",
      "Conduct training sessions on financial statements, fundamental valuation, and market mechanics.",
      "Direct weekly company research presentations and foster a collaborative analytical culture."
    ],
    skills: ["Leadership", "Team Building", "Financial Analysis", "Public Speaking", "Strategic Planning"]
  },
  {
    id: "finanza",
    organization: "Finanza",
    role: "Former Executive",
    period: "Past Role",
    status: "past",
    bullets: [
      "Managed teams and coordinated logistics for university-wide student events.",
      "Successfully organized and executed a flagship event during the university technical fest.",
      "Conducted student orientations and contributed to club recruitment drives.",
      "Developed practical foundations in team management, networking, and market basics."
    ],
    skills: ["Event Operations", "Team Coordination", "Public Orientation", "Networking"]
  },
  {
    id: "ed-cell",
    organization: "Ed Cell (Entrepreneurship Cell)",
    role: "Member → Executive",
    period: "Approx. 1 Year (Executive for final 2 months)",
    status: "past",
    bullets: [
      "Engaged in university entrepreneurial programs and startup workshops for one year.",
      "Stepped up into an Executive role during the final two months, taking on organizational duties.",
      "Built meaningful connections with student founders, alumni, and startup enthusiasts."
    ],
    skills: ["Entrepreneurship", "Cross-functional Collaboration", "Initiative Building"]
  },
  {
    id: "debate-club",
    organization: "Debate Club",
    role: "Member",
    period: "Approx. 6 Months",
    status: "past",
    bullets: [
      "Participated actively in club debates, parliamentary discussions, and speaker sessions.",
      "Refined critical thinking, structured argumentation, and quick articulate communication."
    ],
    skills: ["Structured Reasoning", "Verbal Communication", "Persuasion"]
  }
];