import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  ArrowUpRight,
  Send,
  MessageSquare
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { profile } from "@/data/profile";

export default function Contact() {
  const socialIconMap: Record<string, React.ReactNode> = {
    GitHub: <Github size={16} />,
    LinkedIn: <Linkedin size={16} />,
    LeetCode: <Code2 size={16} />
  };

  return (
    <section id="contact" className="relative px-6 py-24 sm:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Initiate Contact"
          title="Let's Connect & Collaborate"
          description="Interested in software engineering roles, AI agent development, summer internships, or strategic product discussions."
        />

        <div className="grid gap-6 lg:grid-cols-12 max-w-5xl mx-auto">
          {/* Direct Email Card (Primary Action) */}
          <Card glow="indigo" className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                    Direct Channel
                  </span>
                </div>
                <Badge tone="success" size="sm">
                  Responsive
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-foreground font-sans mb-2">
                Send an Email
              </h3>
              <p className="text-sm text-muted mb-6 leading-relaxed">
                Whether you have an engineering opening, wish to discuss Jarvis, or explore student collaborations, feel free to reach out directly.
              </p>

              <div className="rounded-xl border border-border bg-surface-raised/80 p-4 mb-6">
                <p className="font-mono text-xs text-muted uppercase tracking-wider mb-1">
                  Email Address
                </p>
                <p className="font-mono text-base sm:text-lg font-semibold text-foreground select-all">
                  {profile.contact.email}
                </p>
              </div>
            </div>

            <div>
              <Button
                href={`mailto:${profile.contact.email}`}
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
                iconRight={<Send size={15} />}
              >
                Compose Email via Mailto
              </Button>
            </div>
          </Card>

          {/* Quick Direct Details & Social Links */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone Card */}
            <Card hoverEffect className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-raised">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-muted uppercase tracking-wider">
                    Phone / WhatsApp
                  </p>
                  <a
                    href={`tel:+91${profile.contact.phone}`}
                    className="font-mono text-sm font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    +91 {profile.contact.phone}
                  </a>
                </div>
              </div>
            </Card>

            {/* Location Card */}
            <Card hoverEffect className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-raised">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-muted uppercase tracking-wider">
                    Current Base
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {profile.contact.location}
                  </p>
                </div>
              </div>
            </Card>

            {/* Platform Quick Links Card */}
            <Card className="p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-muted font-semibold mb-3">
                Professional Profiles
              </p>
              <div className="flex flex-col gap-2">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-border bg-surface-raised/50 p-2.5 text-xs text-foreground transition-all hover:border-accent/40 hover:bg-surface-raised"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-accent">{socialIconMap[social.label]}</span>
                      <span className="font-medium">{social.label}</span>
                    </div>
                    <ArrowUpRight size={14} className="text-muted" />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}