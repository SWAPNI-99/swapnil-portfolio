import React from "react";
import { Terminal, Lightbulb, Compass, Code, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { profile } from "@/data/profile";

export default function About() {
  const { about, education } = profile;

  return (
    <section id="about" className="relative px-6 py-20 sm:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Identity & Ambition"
          title="Who I am"
          description="A Computer Science student combining low-level engineering curiosity, autonomous agent architecture, and market-driven thinking."
        />

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Editorial narrative */}
          <div className="lg:col-span-7 space-y-6">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg leading-relaxed text-muted font-normal"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#jarvis"
                className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:text-accent-light transition-colors"
              >
                <span>Read the Jarvis architecture</span>
                <ArrowRight size={14} />
              </a>
              <span className="text-muted-dark">•</span>
              <a
                href="#equity-minds"
                className="inline-flex items-center gap-2 text-sm font-mono text-muted hover:text-foreground transition-colors"
              >
                <span>Learn about Equity Minds</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Structured Domains & Primary vs Secondary */}
          <div className="lg:col-span-5 space-y-5">
            {/* Primary Technical Identity */}
            <Card glow="indigo" className="p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/15 border border-accent/30">
                  <Code size={14} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                    Primary Technical Identity
                  </h3>
                  <p className="text-[11px] text-muted font-mono">Core engineering & software systems</p>
                </div>
              </div>

              <ul className="mt-3 divide-y divide-border/60">
                {about.primaryFocus.map((focus) => (
                  <li
                    key={focus}
                    className="py-2 flex items-center justify-between text-xs sm:text-sm text-foreground font-medium"
                  >
                    <span>{focus}</span>
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Core
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Secondary Strategic Differentiators */}
            <Card glow="cyan" className="p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500/15 border border-cyan-500/30">
                  <Compass size={14} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                    Secondary Differentiators
                  </h3>
                  <p className="text-[11px] text-muted font-mono">Markets, finance & entrepreneurship</p>
                </div>
              </div>

              <ul className="mt-3 divide-y divide-border/60">
                {about.secondaryInterests.map((interest) => (
                  <li
                    key={interest}
                    className="py-2 flex items-center justify-between text-xs sm:text-sm text-muted"
                  >
                    <span>{interest}</span>
                    <span className="font-mono text-[10px] text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      Domain
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}