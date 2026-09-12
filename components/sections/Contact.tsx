import { Mail, Phone, Github, Linkedin, Code2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

const socialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: Code2
};

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Reach out directly, or find me on any of the platforms below."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${profile.contact.email}`}
            className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors duration-200 hover:bg-surface-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <Mail className="text-accent" size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                Email
              </p>
              <p className="mt-1 text-sm font-medium text-foreground sm:text-base">
                {profile.contact.email}
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <Phone className="text-accent" size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                Phone
              </p>
              <p className="mt-1 text-sm font-medium text-foreground sm:text-base">
                {profile.contact.phone}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {profile.socials.map((social) => {
            const Icon = socialIcons[social.label];
            return (
              <Button key={social.label} href={social.url} external variant="secondary">
                {Icon && <Icon size={16} />}
                {social.label}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}