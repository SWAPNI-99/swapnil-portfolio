export interface ExperienceEntry {
  id: string;
  organization: string;
  role: string;
  duration: string;
  bullets: string[];
}

export interface EquityMindsData {
  organization: string;
  position: string;
  founded: string;
  teamSize: number;
  purpose: string;
  activities: string[];
  contributions: string[];
  longTermVision: string;
  nearTermGoal: string;
}

export const equityMinds: EquityMindsData = {
  organization: "Equity Minds",
  position: "Founder",
  founded: "August 15, 2026",
  teamSize: 15,
  purpose: "Improving financial literacy among college students.",
  activities: [
    "Teaching recruited members core finance concepts",
    "Teaching stock-market fundamentals",
    "Company research",
    "Stock research",
    "Presentations",
    "Recruitment",
    "Team building"
  ],
  contributions: [
    "Founded the initiative",
    "Recruited a 15-member team",
    "Lead the team on an ongoing basis",
    "Teach financial concepts to members",
    "Research companies and stocks",
    "Conduct presentations"
  ],
  longTermVision:
    "Build Equity Minds into a company focused on finance and investment-related activities.",
  nearTermGoal:
    "Build a structured, productive team and prepare the initiative for launch over the next 6–12 months."
};

export const experience: ExperienceEntry[] = [
  {
    id: "equity-minds",
    organization: "Equity Minds",
    role: "Founder",
    duration: "Aug 2026 — Present",
    bullets: [
      "Founded a student initiative focused on financial literacy",
      "Recruited and lead a 15-member team",
      "Teach finance and stock-market concepts to members",
      "Conduct company and stock research, and presentations"
    ]
  },
  {
    id: "finanza",
    organization: "Finanza",
    role: "Former Executive",
    duration: "Past",
    bullets: [
      "Managed a team and handled event operations",
      "Organized one major event during the university's technical fest",
      "Attended workshops, orientation, and recruitment drives",
      "Built communication, networking, and basic finance skills"
    ]
  },
  {
    id: "ed-cell",
    organization: "Ed Cell",
    role: "Member → Executive",
    duration: "~1 year (Executive for final 2 months)",
    bullets: [
      "Built professional connections through entrepreneurship-focused activities",
      "Attended workshops on entrepreneurship",
      "Transitioned to an Executive role in the final two months"
    ]
  },
  {
    id: "debate-club",
    organization: "Debate Club",
    role: "Member",
    duration: "~6 months",
    bullets: [
      "Participated in club events and debates",
      "Built connections within the club"
    ]
  }
];