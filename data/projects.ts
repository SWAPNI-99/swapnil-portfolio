export type BuildStatus = "implemented" | "in-development" | "planned";

export interface ArchitectureItem {
  name: string;
  status: BuildStatus;
}

export interface ArchitectureLayer {
  layer: string;
  description: string;
  items: ArchitectureItem[];
}

export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  role: string;
  status: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "jarvis",
    name: "Jarvis",
    type: "Agentic AI Personal Automation Assistant",
    description:
      "An AI-powered assistant I'm building to automate tasks and workflows across my laptop. I independently designed the architecture and project direction, using AI tools extensively for coding assistance. Currently under active development, with local LLM inference and web search already working.",
    role: "Sole Architect & Developer",
    status: "Currently under development",
    technologies: ["Local LLMs", "Web Search", "Python"],
    githubUrl: "https://github.com/SWAPNI-99/Agentic-AI",
    featured: true
  },
  {
    id: "sih-2026",
    name: "Real-Time Public Transport Tracking for Small Cities",
    type: "Smart India Hackathon 2026",
    description:
      "Built a web-based solution addressing real-time public transport tracking for small cities, as part of a 6-member team. Selected for the college internal round of Smart India Hackathon 2026.",
    role: "Full Stack Developer",
    status: "Selected — college internal round",
    technologies: [],
    featured: false
  }
];

export const jarvisArchitecture: ArchitectureLayer[] = [
  {
    layer: "Core Brain",
    description: "LLM routing, reasoning, memory, and orchestration.",
    items: [
      { name: "Ollama", status: "planned" },
      { name: "vLLM", status: "planned" },
      { name: "llama.cpp", status: "planned" },
      { name: "LangGraph", status: "planned" },
      { name: "Custom async state machine", status: "planned" },
      { name: "MCP", status: "planned" },
      { name: "Qdrant / ChromaDB", status: "planned" },
      { name: "HuggingFace Optimum / ONNX", status: "planned" },
      { name: "SQLite (WAL mode)", status: "planned" },
      { name: "Llama 3.1 8B Instruct", status: "planned" },
      { name: "Qwen 2.5 7B", status: "planned" },
      { name: "Phi-3.5-mini", status: "planned" },
      { name: "Gemma-2-2B", status: "planned" }
    ]
  },
  {
    layer: "Senses",
    description: "Voice, vision, and input perception.",
    items: [
      { name: "openWakeWord", status: "planned" },
      { name: "Picovoice Porcupine", status: "planned" },
      { name: "faster-whisper", status: "planned" },
      { name: "Silero VAD", status: "planned" },
      { name: "Kokoro-82M", status: "planned" },
      { name: "Piper TTS", status: "planned" },
      { name: "OpenCV", status: "planned" }
    ]
  },
  {
    layer: "Hands",
    description: "Action execution — OS control, automation, web interaction.",
    items: [
      { name: "psutil", status: "planned" },
      { name: "PyAutoGUI", status: "planned" },
      { name: "pynput", status: "planned" },
      { name: "subprocess sandbox", status: "planned" },
      { name: "Playwright", status: "planned" },
      { name: "httpx", status: "planned" },
      { name: "BeautifulSoup4", status: "planned" },
      { name: "watchdog", status: "planned" }
    ]
  },
  {
    layer: "Communication",
    description: "Inter-process and network messaging between subsystems.",
    items: [
      { name: "gRPC", status: "planned" },
      { name: "ZeroMQ", status: "planned" },
      { name: "WebSockets", status: "planned" },
      { name: "Pydantic v2", status: "planned" },
      { name: "asyncio", status: "planned" }
    ]
  },
  {
    layer: "UI",
    description: "User-facing interface layer.",
    items: [
      { name: "PySide6", status: "planned" },
      { name: "Tauri", status: "planned" },
      { name: "React", status: "planned" },
      { name: "Rich", status: "planned" }
    ]
  }
];