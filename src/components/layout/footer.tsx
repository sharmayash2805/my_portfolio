import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { siteConfig } from "@/config/site";
import { navItems } from "@/config/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-background/90">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-primary/15 font-sanskrit text-xs font-bold text-primary">
                {siteConfig.monogram}
              </span>
              <span className="text-base font-bold text-foreground">{siteConfig.name}</span>
            </div>
            <p className="mt-2 text-xs font-medium text-primary">{siteConfig.headline}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <p className="mt-3 font-sanskrit text-xs text-primary font-medium">
              {siteConfig.mantra}
            </p>
          </div>

          {/* Quick Page Links */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Chapters
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Channels */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Connect
            </p>
            <div className="flex flex-col gap-2 text-xs text-muted-foreground">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub (sharmayash2805)</span>
                <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn (sharmayash2805)</span>
                <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Yash Sharma. Built with React & TypeScript.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Roots: Rajgangpur, Odisha</span>
            <span aria-hidden="true">·</span>
            <span>Campus: Mohali, Punjab</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
