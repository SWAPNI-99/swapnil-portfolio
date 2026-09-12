export type SkillTier = "Core" | "Developing" | "Foundational" | "Exploring";
export type FinanceLevel = "Beginner" | "Intermediate";

export interface SkillItem {
  name: string;
  note?: string;
  tag?: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  subtitle: string;
  badge: string;
  items: SkillItem[];
}

export interface FinanceSkillItem {
  area: string;
  level: FinanceLevel;
  highlight?: boolean;
}

export interface LeetCodeStats {
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  currentTopic: string;
  familiarTopics: string[];
  profileUrl: string;
  note: string;
}

export const technicalSkills: SkillGroup[] = [
  {
    id: "programming",
    category: "Programming Languages",
    subtitle: "Core languages for systems, algorithms, and AI tooling",
    badge: "Languages",
    items: [
      { name: "C", note: "Procedural programming & low-level memory basics" },
      { name: "C++", note: "Object-oriented design & DSA problem solving" },
      { name: "Python", note: "AI orchestration, backend scripting & analytics" }
    ]
  },
  {
    id: "dsa",
    category: "Data Structures & Algorithms",
    subtitle: "Active algorithmic progression through consistent practice",
    badge: "Problem Solving",
    items: [
      { name: "Arrays", tag: "Familiar" },
      { name: "Linked Lists", tag: "Familiar" },
      { name: "Sorting Algorithms", tag: "Familiar" },
      { name: "Trees & Binary Search Trees", tag: "Currently Learning" }
    ]
  },
  {
    id: "ai-automation",
    category: "AI & Agentic Systems",
    subtitle: "Designing autonomous agent architectures and local inference",
    badge: "Applied AI",
    items: [
      { name: "Agentic AI Systems", note: "State machines, planning, and tool calling" },
      { name: "Local LLM Experimentation", note: "Ollama, LLaMA-3, private inference" },
      { name: "AI-Assisted Development", note: "Accelerating execution through modern AI tools" },
      { name: "AI Automation Workflows", note: "Automated desktop tasks and search retrieval" },
      { name: "LLM Integration", note: "FastAPI endpoints with Pydantic serialization" }
    ]
  },
  {
    id: "web-systems",
    category: "Web & Full-Stack Development",
    subtitle: "Building responsive, modern, user-facing applications",
    badge: "Full Stack",
    items: [
      { name: "Full-Stack Web Development", note: "Next.js, React, modern CSS" },
      { name: "AI-Integrated Web Applications", note: "Bridging frontend interfaces with LLM backends" },
      { name: "RESTful API Integration", note: "Async client-server data flows" },
      { name: "Responsive & Accessible UI", note: "Tailwind CSS & semantic design" }
    ]
  },
  {
    id: "data-analytics",
    category: "Data Science & Analytics",
    subtitle: "Analytical fundamentals and data interpretation",
    badge: "Data",
    items: [
      { name: "Data Analytics Fundamentals", note: "Extracting actionable insights from data" },
      { name: "Data Science Concepts", note: "Foundational statistics & exploratory data analysis" }
    ]
  }
];

export const financeSkills: FinanceSkillItem[] = [
  { area: "Technical Analysis", level: "Intermediate", highlight: true },
  { area: "Risk Management", level: "Intermediate", highlight: true },
  { area: "Trading Principles", level: "Intermediate", highlight: true },
  { area: "Mutual Funds", level: "Intermediate", highlight: true },
  { area: "Stock Market Fundamentals", level: "Beginner" },
  { area: "Fundamental Analysis", level: "Beginner" },
  { area: "Financial Statements", level: "Beginner" },
  { area: "Company Valuation", level: "Beginner" },
  { area: "Portfolio Management", level: "Beginner" },
  { area: "Equity Research", level: "Beginner" },
  { area: "Options Basics", level: "Beginner" }
];

export const personalSkills: string[] = [
  "Strategic Leadership",
  "Team Management",
  "Independent Problem Solving",
  "Public Speaking & Presentation",
  "Analytical Research",
  "Event Coordination",
  "Professional Networking",
  "Video Editing"
];

export const leetCodeStats: LeetCodeStats = {
  totalSolved: 29,
  easy: 22,
  medium: 7,
  hard: 0,
  currentTopic: "Trees & Tree Traversals",
  familiarTopics: ["Arrays", "Linked Lists", "Sorting Algorithms"],
  profileUrl: "https://leetcode.com/u/Swapnil_00/",
  note: "Consistent algorithmic learning trajectory with zero inflated metrics."
};