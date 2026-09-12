import { Github, Linkedin, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";

const socialIcons: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: Code2
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm font-semibold text-foreground">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-muted">{profile.location}</p>
        </div>

        <div className="flex items-center gap-5">
          {profile.socials.map((social) => {
            const Icon = socialIcons[social.label];
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                {Icon ? <Icon size={18} /> : social.label}
              </a>
            );
          })}
        </div>

        <p className="text-xs text-muted">
          © {currentYear} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}