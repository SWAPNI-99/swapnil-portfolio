import React from "react";
import { Github, Linkedin, Code2, ArrowUp, Terminal } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIconMap: Record<string, React.ReactNode> = {
    GitHub: <Github size={16} />,
    LinkedIn: <Linkedin size={16} />,
    LeetCode: <Code2 size={16} />
  };

  return (
    <footer className="relative border-t border-border bg-surface/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-8 md:grid-cols-12 items-start justify-between">
          {/* Main identity */}
          <div className="md:col-span-6 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded border border-border bg-surface-raised">
                <Terminal size={12} className="text-accent" />
              </div>
              <p className="font-mono text-sm font-semibold tracking-wider text-foreground">
                {profile.name.toUpperCase()}
              </p>
            </div>
            <p className="text-sm text-muted max-w-md leading-relaxed">
              Computer Science & Technology • Applied AI & Automation • Entrepreneurship
            </p>
            <p className="font-mono text-xs text-muted-dark flex items-center gap-2">
              <span>{profile.education.current.shortInstitution}</span>
              <span>•</span>
              <span>Jaipur, Rajasthan, India</span>
            </p>
          </div>

          {/* Quick links & socials */}
          <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-start md:justify-end gap-6 sm:gap-10">
            <div className="flex flex-wrap items-center gap-2">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border bg-surface-raised px-3.5 py-2 text-xs font-medium text-muted transition-all hover:border-accent/40 hover:text-foreground"
                  aria-label={social.label}
                >
                  {socialIconMap[social.label]}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>

            <a
              href="#home"
              className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-mono text-muted transition-colors hover:border-accent/40 hover:text-foreground"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp size={12} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            © {currentYear} {profile.name}. Crafted with Next.js, TypeScript & Tailwind CSS.
          </p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-muted-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}