export type BuildStatus = "implemented" | "in-development" | "planned";

export interface ArchitectureItem {
  name: string;
  category?: string;
  status: BuildStatus;
  detail: string;
}

export interface ArchitectureLayer {
  id: string;
  layer: string;
  shortDescription: string;
  fullDescription: string;
  items: ArchitectureItem[];
}

export interface PipelineStage {
  id: string;
  step: string;
  title: string;
  description: string;
  subtext: string;
}

export interface Project {
  id: string;
  name: string;
  badge: string;
  type: string;
  tagline: string;
  description: string;
  highlights: string[];
  role: string;
  status: string;
  statusType: "active" | "completed" | "milestone";
  teamSize?: number;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const jarvisProject: Project = {
  id: "jarvis",
  name: "JARVIS",
  badge: "Active Development",
  type: "Agentic AI Personal Automation Assistant",
  tagline: "Autonomous desktop assistant designed to execute complex workflows across a laptop.",
  description:
    "An AI-powered personal assistant designed to automate tasks and workflows across a laptop. I independently architected the end-to-end system design, subsystem communication patterns, and technical roadmap, using AI tools for assisted code generation while driving the engineering decisions. Currently running local LLM inference and web research, with OS automation and memory architecture in active development.",
  highlights: [
    "Independent system architecture and subsystem design",
    "Local LLM inference running completely private on-device",
    "Semantic intent classification routing between offline & real-time web agents",
    "Layered execution sandbox separating decision brain from OS actuators"
  ],
  role: "Sole Architect & Developer",
  status: "Active Development",
  statusType: "active",
  technologies: [
    "Python",
    "Local LLMs (Ollama)",
    "FastAPI",
    "Pydantic v2",
    "Asyncio",
    "WebAgent / Search",
    "OS Sandbox (In Dev)",
    "LangGraph (Planned)"
  ],
  githubUrl: "https://github.com/SWAPNI-99/Agentic-AI",
  featured: true
};

export const sihProject: Project = {
  id: "sih-2026",
  name: "Smart India Hackathon 2026",
  badge: "College Internal Round",
  type: "Real-Time Public Transport Tracking for Small Cities",
  tagline: "Web-based public transit tracking solution tailored for small city logistics.",
  description:
    "Participated in Smart India Hackathon 2026 solving the problem statement of real-time public transport tracking for tier-2 and tier-3 cities. Collaborated with a 6-member multidisciplinary student team, serving as the Full Stack Developer responsible for building the primary web platform.",
  highlights: [
    "Selected for the college internal round at MNIT Jaipur",
    "Collaborative development within a 6-member student engineering team",
    "Designed and built the user-facing web interface for live vehicle route display",
    "Structured for low-bandwidth environments typical of smaller municipalities"
  ],
  role: "Full Stack Developer",
  status: "Selected for college internal round",
  statusType: "milestone",
  teamSize: 6,
  technologies: ["Full Stack Web", "Responsive UI", "Team Collaboration"],
  featured: false
};

export const projects: Project[] = [jarvisProject, sihProject];

export const jarvisPipelineStages: PipelineStage[] = [
  {
    id: "user",
    step: "01",
    title: "User Input",
    description: "Natural language instructions via text terminal, voice intent, or system event triggers.",
    subtext: "Raw Prompt / System Event"
  },
  {
    id: "planner",
    step: "02",
    title: "Agent & Planner",
    description: "Intent classification and async state machine determining whether task needs offline reasoning, web search, or OS execution.",
    subtext: "Intent Classifier & State Graph"
  },
  {
    id: "reasoning",
    step: "03",
    title: "LLM & Reasoning",
    description: "Private local inference executing on-device via Ollama / LLaMA-3 models with zero telemetry leakage.",
    subtext: "Local On-Device Models"
  },
  {
    id: "memory",
    step: "04",
    title: "Memory & Tools",
    description: "Retrieval augmentation, SQLite WAL session state, and Model Context Protocol (MCP) tool bindings.",
    subtext: "Context, WAL & Vector Store"
  },
  {
    id: "actuators",
    step: "05",
    title: "Hands & Actuators",
    description: "Targeted actuators controlling the host OS, web automation via Playwright/httpx, and sandboxed subprocesses.",
    subtext: "OS, Web, Shell & File System"
  },
  {
    id: "automation",
    step: "06",
    title: "Autonomous Outcome",
    description: "Closed-loop task resolution delivering completed user actions, file manipulation, or synthesized reports.",
    subtext: "Verified Workflow Execution"
  }
];

export const jarvisCapabilities = {
  implemented: [
    {
      title: "Local LLM Inference",
      description: "On-device inference pipeline running through Ollama with configurable local models (LLaMA-3)."
    },
    {
      title: "Semantic Web Search",
      description: "Automated real-time web retrieval via WebAgent when the intent classifier detects time-sensitive queries."
    },
    {
      title: "Pydantic Schema Validation",
      description: "Strict payload parsing and response serialization using Pydantic v2 and FastAPI async endpoints."
    }
  ],
  inDevelopment: [
    {
      title: "Agent Orchestration State Machine",
      description: "Custom async state graph routing multi-step tasks between planning, reflection, and tool calling."
    },
    {
      title: "Desktop OS Automation (OSAgent)",
      description: "Sandboxed workspace controller interfacing with psutil, subprocesses, and host system state."
    },
    {
      title: "Memory & State Store",
      description: "Lightweight persistent memory using SQLite in WAL mode and vector indexing for long-term context."
    },
    {
      title: "MCP Tool Execution Engine",
      description: "Standardized tool discovery and invocation following Model Context Protocol standards."
    }
  ],
  planned: [
    {
      title: "Voice Perceptual Layer",
      description: "Hands-free interaction using openWakeWord, faster-whisper STT, and low-latency Piper/Kokoro-82M TTS."
    },
    {
      title: "Vision Perception",
      description: "Screen understanding and visual document inspection using lightweight vision models and OpenCV."
    },
    {
      title: "High-Speed Subsystem IPC",
      description: "Decoupled inter-process messaging connecting Python agent engine with native UI via gRPC & ZeroMQ."
    },
    {
      title: "Native Desktop Dashboard",
      description: "Lightweight telemetry UI built with Tauri + React or PySide6 for real-time memory and task inspection."
    }
  ]
};

export const jarvisArchitecture: ArchitectureLayer[] = [
  {
    id: "brain",
    layer: "Core Brain",
    shortDescription: "LLM inference, reasoning, memory architecture, and agent orchestration.",
    fullDescription:
      "The central intelligence engine that processes user intent, formulates execution plans, maintains episodic memory, and coordinates tool execution.",
    items: [
      { name: "Ollama", status: "implemented", detail: "Local model serving layer hosting LLaMA-3 models" },
      { name: "Llama-3.1-8B-Instruct", status: "implemented", detail: "Primary local reasoning model" },
      { name: "FastAPI + Pydantic v2", status: "implemented", detail: "Typed async REST service layer" },
      { name: "Custom Async State Machine", status: "in-development", detail: "Multi-step agent cycle with fallback paths" },
      { name: "SQLite (WAL mode)", status: "in-development", detail: "Zero-latency transactional memory storage" },
      { name: "MCP Protocol", status: "in-development", detail: "Model Context Protocol for dynamic tool integration" },
      { name: "LangGraph", status: "planned", detail: "Cyclic multi-agent graph orchestration" },
      { name: "vLLM / llama.cpp", status: "planned", detail: "High-throughput quantized C++ inference backends" },
      { name: "Qdrant / ChromaDB", status: "planned", detail: "Vector database for semantic document search" },
      { name: "bge-small-en-v1.5", status: "planned", detail: "Dense text embeddings for RAG" },
      { name: "Qwen-2.5-7B & Phi-3.5", status: "planned", detail: "Alternative task-specific reasoning models" }
    ]
  },
  {
    id: "senses",
    layer: "Senses",
    shortDescription: "Multimodal perception across wake-word, speech-to-text, voice, and vision.",
    fullDescription:
      "Perceptual subsystems capturing auditory triggers, voice commands, and screen visuals without external cloud dependencies.",
    items: [
      { name: "openWakeWord", status: "planned", detail: "Lightweight on-device wake phrase detection" },
      { name: "Picovoice Porcupine", status: "planned", detail: "Ultra-low power hotword engine fallback" },
      { name: "faster-whisper", status: "planned", detail: "CTranslate2-optimized local speech transcription" },
      { name: "Silero VAD v5", status: "planned", detail: "Voice activity detector filtering ambient silence" },
      { name: "Kokoro-82M", status: "planned", detail: "Expressive on-device neural voice generation" },
      { name: "Piper TTS", status: "planned", detail: "Ultra-fast local text-to-speech engine" },
      { name: "OpenCV", status: "planned", detail: "Screen frame capture and visual region processing" }
    ]
  },
  {
    id: "hands",
    layer: "Hands & Actuators",
    shortDescription: "Execution environment controlling host OS, web automation, and file manipulation.",
    fullDescription:
      "The actuation layer that translates planned actions into concrete system commands, browser interactions, and sandboxed scripts.",
    items: [
      { name: "WebAgent / HTTP Search", status: "implemented", detail: "Real-time web queries and content extraction" },
      { name: "OSAgent Controller", status: "in-development", detail: "Workspace-aware host actuator" },
      { name: "psutil", status: "in-development", detail: "Process monitoring and resource profiling" },
      { name: "PyAutoGUI / pynput", status: "in-development", detail: "Mouse and keyboard event synthesizers" },
      { name: "Subprocess Sandbox", status: "in-development", detail: "Isolated CLI execution environment" },
      { name: "Playwright", status: "planned", detail: "Headless browser automation for complex web workflows" },
      { name: "httpx / BeautifulSoup4", status: "implemented", detail: "Asynchronous HTTP scraping & HTML parsing" },
      { name: "watchdog", status: "planned", detail: "Real-time file system event listener" }
    ]
  },
  {
    id: "ipc",
    layer: "IPC & Messaging",
    shortDescription: "High-speed inter-process communication connecting backend with clients.",
    fullDescription:
      "Reliable low-latency communication layer ensuring fluid decoupled messaging between the Python agent and UI interfaces.",
    items: [
      { name: "asyncio", status: "implemented", detail: "Non-blocking event loop managing concurrent tasks" },
      { name: "Pydantic Serializers", status: "implemented", detail: "Type-safe JSON schema contracts" },
      { name: "gRPC", status: "planned", detail: "Binary protobuf protocol for inter-process speed" },
      { name: "ZeroMQ", status: "planned", detail: "High-performance asynchronous socket messaging" },
      { name: "WebSockets", status: "planned", detail: "Bi-directional streaming for live agent thought traces" }
    ]
  },
  {
    id: "ui",
    layer: "Dashboard & UI",
    shortDescription: "Desktop interface, HUD telemetry, and system tray management.",
    fullDescription:
      "Modern native user interface providing live insight into agent decisions, memory state, and active workflows.",
    items: [
      { name: "Rich Telemetry", status: "implemented", detail: "Formatted terminal logging and diagnostics" },
      { name: "Tauri + React", status: "planned", detail: "Lightweight Rust-backed desktop frontend" },
      { name: "PySide6 (Qt)", status: "planned", detail: "Alternative native system tray & floating HUD" }
    ]
  }
];