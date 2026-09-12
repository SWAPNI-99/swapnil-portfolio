export interface SocialLink {
  label: string;
  url: string;
}

export interface EducationRecord {
  institution: string;
  degree: string;
  branch: string;
  status: string;
  expectedGraduation: string;
  cgpa: string;
}

export interface PriorEducation {
  level: string;
  percentage: string;
}

export const profile = {
  name: "Swapnil Nitin Joshirao",
  location: "Jaipur, Rajasthan, India",
  headline: "Computer Science Student • AI Builder • Software Developer",
  tagline:
    "Building software, experimenting with AI systems, and exploring how technology can solve real-world problems.",
  about: {
    summary:
      "I'm a Computer Science student at MNIT Jaipur, currently in my second year, with a primary focus on software development and applied AI. Alongside coursework, I build and design systems on my own — most notably Jarvis, an agentic AI assistant I'm architecting from the ground up. I'm also drawn to entrepreneurship and financial markets as a secondary interest, which led me to found Equity Minds, a student initiative focused on financial literacy.",
    focusAreas: [
      "Software Development",
      "AI/ML",
      "Data Analytics",
      "Full-Stack Development integrated with AI"
    ],
    secondaryInterests: [
      "Investment Management",
      "Startups & Entrepreneurship",
      "Finance & FinTech",
      "Equity Research"
    ]
  } satisfies {
    summary: string;
    focusAreas: string[];
    secondaryInterests: string[];
  },
  education: {
    current: {
      institution: "Malaviya National Institute of Technology (MNIT), Jaipur",
      degree: "Bachelor of Technology",
      branch: "Computer Science and Technology",
      status: "2nd Year, 3rd Semester",
      expectedGraduation: "2029",
      cgpa: "6.7 / 10"
    } satisfies EducationRecord,
    prior: [
      { level: "Class XII", percentage: "86%" },
      { level: "Class X", percentage: "83%" }
    ] satisfies PriorEducation[]
  },
  contact: {
    email: "snjoshirao@gmail.com",
    phone: "9426245424"
  },
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/SWAPNI-99"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/swapnil-joshirao-3a811436a"
    },
    {
      label: "LeetCode",
      url: "https://leetcode.com/u/Swapnil_00/"
    }
  ] satisfies SocialLink[]
};

export type Profile = typeof profile;