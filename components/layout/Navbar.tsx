"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, FileDown, Terminal } from "lucide-react";
import Button from "@/components/ui/Button";

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Focus", href: "#focus", id: "focus" },
  { label: "Jarvis", href: "#jarvis", id: "jarvis" },
  { label: "Equity Minds", href: "#equity-minds", id: "equity-minds" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Coding", href: "#coding", id: "coding" },
  { label: "Contact", href: "#contact", id: "contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection based on viewport position
      const sections = ["home", ...navItems.map((n) => n.id)];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        if (!id) continue;
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/80 shadow-2xl shadow-black/40 py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8"
        aria-label="Primary Navigation"
      >
        {/* Brand identifier */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 font-mono text-sm tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg px-2 py-1 -ml-2 transition-colors"
          aria-label="Swapnil Nitin Joshirao - Return to top"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface-raised group-hover:border-accent/40 transition-colors">
            <Terminal size={14} className="text-accent" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-foreground tracking-wider text-xs">
                SWAPNIL
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <span className="text-[10px] font-mono text-muted leading-none">
              MNIT JAIPUR
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-1 rounded-full border border-border/70 bg-surface/60 px-3 py-1.5 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 text-xs font-medium tracking-tight rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white bg-surface-elevated shadow-sm border border-border-highlight"
                    : "text-muted hover:text-foreground hover:bg-surface-raised/50"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            href="/resume/Swapnil_Nitin_Joshirao_Resume.pdf"
            external
            variant="secondary"
            size="sm"
            iconLeft={<FileDown size={14} className="text-accent" />}
          >
            Resume
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="sm:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-raised text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile animated drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="sm:hidden border-b border-border bg-background/95 backdrop-blur-2xl px-6 py-6 transition-all"
        >
          <div className="flex flex-col gap-2">
            <div className="px-3 py-1 mb-2 font-mono text-[11px] uppercase tracking-widest text-muted">
              Navigation Index
            </div>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "text-white bg-surface-raised border border-border-highlight font-medium"
                      : "text-muted hover:text-foreground hover:bg-surface"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="mt-6 pt-5 border-t border-border flex flex-col gap-3">
            <Button
              href="/resume/Swapnil_Nitin_Joshirao_Resume.pdf"
              external
              variant="primary"
              size="md"
              className="w-full"
              iconLeft={<FileDown size={16} />}
            >
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
