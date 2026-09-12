import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090d",
        surface: "#0f1218",
        "surface-raised": "#151922",
        "surface-elevated": "#1c2230",
        border: "#202532",
        "border-highlight": "#2f3647",
        foreground: "#f3f5f9",
        muted: "#8e96a7",
        "muted-dark": "#5a6273",
        accent: "#6366f1",
        "accent-light": "#818cf8",
        "accent-muted": "#4f46e5",
        "accent-glow": "rgba(99, 102, 241, 0.15)",
        status: {
          online: "#10b981",
          building: "#06b6d4",
          dev: "#f59e0b",
          planned: "#8e96a7"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"]
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.08) 0%, transparent 60%)",
        "radial-status":
          "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 70%)"
      },
      animation: {
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-slow": "glowSlow 6s ease-in-out infinite alternate"
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" }
        },
        glowSlow: {
          "0%": { transform: "translateY(0px)", opacity: "0.4" },
          "100%": { transform: "translateY(-10px)", opacity: "0.7" }
        }
      }
    }
  },
  plugins: []
};

export default config;