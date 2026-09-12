export interface SocialLink {
  label: string;
  url: string;
  username?: string;
}

export interface EducationRecord {
  institution: string;
  shortInstitution: string;
  degree: string;
  branch: string;
  year: string;
  semester: string;
  expectedGraduation: string;
  cgpa: string;
  cgpaScale: string;
}

export interface SchoolingRecord {
  level: string;
  percentage: string;
  year?: string;
}

export interface FocusDashboard {
  currentlyBuilding: {
    title: string;
    subtitle: string;
    description: string;
    tag: string;
  }[];
  currentlyLearning: {
    title: string;
    topics: string[];
    description: string;
  }[];
  currentlyExploring: {
    title: string;
    description: string;
  }[];
}

export const profile = {
  name: "Swapnil Nitin Joshirao",
  preferredName: "Swapnil",
  headline: "Computer Science Student • AI Builder • Software Developer",
  tagline:
    "Building software, experimenting with AI systems, and exploring how technology can solve real-world problems.",
  location: "Jaipur, Rajasthan, India",
  campus: "MNIT Jaipur",
  availability: "Open to Summer 2025/2026 Internships & AI Collaborations",
  about: {
    heading: "Who I am",
    paragraphs: [
      "I am a Computer Science student at MNIT Jaipur, currently in my second year, with a primary focus on software development and applied AI.",
      "Alongside coursework, I build and design systems independently — most notably Jarvis, an agentic AI assistant I am architecting from the ground up.",
      "I am also interested in entrepreneurship and financial markets, which led me to found Equity Minds, a student initiative focused on financial literacy and practical understanding of equity markets.",
      "My broader ambition is to become a technically capable entrepreneur who can use modern technology to create valuable and commercially successful products."
    ],
    primaryFocus: [
      "Software Development",
      "Agentic AI & LLMs",
      "Full-Stack Development with AI",
      "Data Analytics & Pipelines",
      "System Automation"
    ],
    secondaryInterests: [
      "Financial Markets & FinTech",
      "Equity Research & Valuation",
      "Investment Management",
      "Startups & Product Building"
    ]
  },
  focusDashboard: {
    currentlyBuilding: [
      {
        title: "Jarvis",
        subtitle: "Agentic AI Personal Assistant",
        description:
          "Architecting an autonomous desktop agent with local LLM inference, web tool execution, and an OS sandbox.",
        tag: "Flagship Project"
      },
      {
        title: "Equity Minds",
        subtitle: "Financial Literacy Initiative",
        description:
          "Leading a 15-member student team researching equities, financial statements, and fundamental analysis.",
        tag: "Founder Initiative"
      }
    ],
    currentlyLearning: [
      {
        title: "Data Structures & Algorithms",
        topics: ["Trees & Traversal", "Sorting Algorithms", "Linked Lists"],
        description: "Sharpening core algorithmic problem solving with consistent LeetCode practice."
      },
      {
        title: "Data Science & Analytics",
        topics: ["Data Pipelines", "Statistical Foundations", "Analytics Workflows"],
        description: "Deepening practical analytics and predictive data modelling skills."
      }
    ],
    currentlyExploring: [
      {
        title: "Local Multi-Agent Systems",
        description: "Autonomous planning, tool-use protocols (MCP), and local model execution via Ollama/vLLM."
      },
      {
        title: "Quantitative Financial Modeling",
        description: "Synthesizing fundamental corporate research with algorithmic market analysis."
      }
    ]
  } satisfies FocusDashboard,
  education: {
    current: {
      institution: "Malaviya National Institute of Technology, Jaipur",
      shortInstitution: "MNIT Jaipur",
      degree: "Bachelor of Technology",
      branch: "Computer Science and Technology",
      year: "2nd Year",
      semester: "3rd Semester",
      expectedGraduation: "2029",
      cgpa: "6.7",
      cgpaScale: "10"
    } satisfies EducationRecord,
    schooling: [
      { level: "Class XII", percentage: "86%" },
      { level: "Class X", percentage: "83%" }
    ] satisfies SchoolingRecord[]
  },
  contact: {
    email: "snjoshirao@gmail.com",
    phone: "9426245424",
    location: "Jaipur, Rajasthan, India"
  },
  resumePath: "/resume/Swapnil_Nitin_Joshirao_Resume.pdf",
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/SWAPNI-99",
      username: "SWAPNI-99"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/swapnil-joshirao-3a811436a",
      username: "swapnil-joshirao"
    },
    {
      label: "LeetCode",
      url: "https://leetcode.com/u/Swapnil_00/",
      username: "Swapnil_00"
    }
  ] satisfies SocialLink[]
};

export type Profile = typeof profile;