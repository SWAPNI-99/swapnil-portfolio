export type FinanceLevel = "Beginner" | "Intermediate";

export interface FinanceSkill {
  area: string;
  level: FinanceLevel;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    items: ["C", "C++", "Python"]
  },
  {
    category: "Data Structures & Algorithms",
    items: [
      "Arrays",
      "Linked Lists",
      "Sorting Algorithms",
      "Trees (currently learning)"
    ]
  },
  {
    category: "AI & Automation",
    items: [
      "Agentic AI",
      "Local LLMs",
      "AI-assisted development",
      "AI automation"
    ]
  },
  {
    category: "Web Development",
    items: ["Full-Stack Development", "AI-integrated applications"]
  },
  {
    category: "Data",
    items: ["Data Science (learning)", "Data Analytics (learning)"]
  }
];

export const financeSkills: FinanceSkill[] = [
  { area: "Stock Market", level: "Beginner" },
  { area: "Fundamental Analysis", level: "Beginner" },
  { area: "Technical Analysis", level: "Intermediate" },
  { area: "Financial Statements", level: "Beginner" },
  { area: "Valuation", level: "Beginner" },
  { area: "Portfolio Management", level: "Beginner" },
  { area: "Risk Management", level: "Intermediate" },
  { area: "Mutual Funds", level: "Intermediate" },
  { area: "Options", level: "Beginner" },
  { area: "Trading", level: "Intermediate" },
  { area: "Equity Research", level: "Beginner" }
];

export interface LeetCodeStats {
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  profileUrl: string;
}

export const leetCodeStats: LeetCodeStats = {
  totalSolved: 29,
  easy: 22,
  medium: 7,
  hard: 0,
  profileUrl: "https://leetcode.com/u/Swapnil_00/"
};