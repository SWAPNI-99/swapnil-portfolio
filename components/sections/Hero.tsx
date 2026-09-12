"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Code2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

const socialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: Code2
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" }
  })
};

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-start justify-center px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUpVariant}
          className="mb-4 font-mono text-sm uppercase tracking-widest text-accent"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUpVariant}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          {profile.name.toUpperCase()}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUpVariant}
          className="mt-4 text-lg text-muted sm:text-xl"
        >
          {profile.headline}
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUpVariant}
          className="mt-4 max-w-2xl text-base leading-relaxed text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeUpVariant}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Button href="#projects">View Projects</Button>
          <Button
            href="/resume/Swapnil_Nitin_Joshirao_Resume.pdf"
            external
            variant="secondary"
          >
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.5}
          variants={fadeUpVariant}
          className="mt-10 flex items-center gap-5"
        >
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
                {Icon ? <Icon size={22} /> : social.label}
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}