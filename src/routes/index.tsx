import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Crown,
  FileText,
  GraduationCap,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";
import { DsaCard } from "@/components/ui/dsa-card";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const PROOF_METRICS = [
  {
    value: "2023 — 2027",
    label: "Undergraduate in CSE",
    sub: "Chandigarh University (CGPA 7.4)",
  },
  {
    value: "Top 3 Nationally",
    label: "ICP WCHL 2025",
    sub: "Among 700+ competing teams",
  },
  {
    value: "500+ Members",
    label: "IEEE CUSB Chairperson",
    sub: "Best Student Branch at CU",
  },
  {
    value: "DCBL Logistics",
    label: "Corporate Intern",
    sub: "SAP ERP–TMS Blue Yonder audit",
  },
];

const EXPLORATION_CHAPTERS = [
  {
    id: "about",
    number: "01",
    title: "About & Roots",
    description:
      "From my hometown of Rajgangpur, Odisha through schooling in Pilani and Kota to Chandigarh University. Cultural roots, native Odia and Hindi heritage, and core engineering philosophy.",
    href: "/about",
    label: "Read journey & philosophy",
  },
  {
    id: "projects",
    number: "02",
    title: "Projects & Stories",
    description:
      "Detailed case studies of InheritNext (Digital Asset Vault), Concert Booking System (Spring Boot + React), Smart Metro Scheduling (KMRL), and GCP Automation with complete GitHub repos.",
    href: "/projects",
    label: "View project case studies",
  },
  {
    id: "experience",
    number: "03",
    title: "Experience & Leadership",
    description:
      "IT & Logistics Analysis corporate internship at Dalmia Bharat Group, comprehensive IEEE CIS & CUSB multi-tier executive leadership timeline, and 8+ verified national & collegiate awards.",
    href: "/experience",
    label: "Review leadership & awards",
  },
  {
    id: "chess",
    number: "04",
    title: "Shatranj · Chess Ledger",
    description:
      "Live Chess.com ratings, rating trends, recent games, and the strategic parallels between chess endgame discipline and resilient software system design.",
    href: "/chess",
    label: "Inspect live chess stats",
  },
];

function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  // Featured projects for the overview
  const featuredProjects = projects.slice(0, 2);

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        {/* HERO SECTION */}
        <section className="relative">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.15fr]">
            {/* Left Column: Role, Name, Tagline & Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
            >
              <div className="mb-4 flex items-center gap-2.5">
                <span className="font-sanskrit text-xs font-semibold text-primary">
                  {siteConfig.mantra}
                </span>
                <span className="text-muted-foreground text-xs" aria-hidden="true">
                  ·
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {siteConfig.origin}
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Yash Sharma
              </h1>

              <p className="mt-2 text-lg font-medium text-primary sm:text-xl">{siteConfig.role}</p>

              <div className="mt-2.5 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <span>Pursuing B.E. in CSE @ Chandigarh University (&apos;23–&apos;27)</span>
                <span>·</span>
                <span className="text-emerald-500 font-semibold">Available for Internships</span>
              </div>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                {siteConfig.tagline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <Link
                  to="/experience"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border bg-card/80 px-5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground"
                >
                  <span>Experience & Awards</span>
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-border"
                >
                  <span>Contact</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Namaste Greeting Card (No avatar) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: 0.1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-3xl border border-primary/25 bg-card/80 p-6 shadow-lg backdrop-blur-md sm:p-8">
                {/* Header with Devanagari Monogram */}
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 font-sanskrit text-sm font-bold text-primary">
                      {siteConfig.monogram}
                    </span>
                    <div>
                      <h2 className="text-sm font-bold text-foreground">Yash Sharma</h2>
                      <p className="text-[11px] text-muted-foreground">
                        Digital Profile &amp; Overview
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-500">
                    Active
                  </span>
                </div>

                {/* The Namaste Greeting Statement */}
                <div className="mt-5 border-l-2 border-primary/70 pl-4 py-1">
                  <p className="text-base font-medium leading-relaxed text-foreground sm:text-lg italic">
                    &ldquo;Namaste! I&apos;m Yash Sharma. Welcome to my portfolio. Explore a digital
                    version of my journey, projects, and problem-solving ledger — and feel free to
                    reach out!&rdquo;
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-lg border border-border/70 bg-background/80 px-3 py-1 font-medium text-muted-foreground">
                    📍 {siteConfig.origin}
                  </span>
                  <span className="rounded-lg border border-border/70 bg-background/80 px-3 py-1 font-medium text-muted-foreground">
                    🎓 Chandigarh University (&apos;27)
                  </span>
                  <span className="rounded-lg border border-border/70 bg-background/80 px-3 py-1 font-medium text-muted-foreground">
                    ♟️ Competitive Chess
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROOF STRIP (4 Quantitative Pillars) */}
        <section className="mt-14 border-y border-border/70 py-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
            {PROOF_METRICS.map((metric, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-mono text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {metric.value}
                </span>
                <span className="mt-1 text-xs font-semibold text-foreground">{metric.label}</span>
                <span className="mt-0.5 text-[11px] text-muted-foreground">{metric.sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* DSA & PROBLEM SOLVING HIGHLIGHT */}
        <section className="mt-12">
          <DsaCard />
        </section>

        {/* FEATURED PROJECTS SHOWCASE */}
        <section className="mt-16">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Featured Engineering
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Recent Highlights
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary hover:underline"
            >
              <span>View all projects ({projects.length})</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-card/60 p-6 shadow-sm transition-all hover:border-primary/40 hover:bg-card/90 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-mono text-primary font-medium">{project.year}</span>
                    {project.award ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                        <Trophy className="h-3 w-3" />
                        {project.award}
                      </span>
                    ) : (
                      <span className="capitalize">{project.category}</span>
                    )}
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    {project.subtitle}
                  </p>

                  <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/60 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5 text-[11px] text-muted-foreground">
                      {project.stack.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="rounded bg-background px-2 py-0.5 border border-border/40 font-medium text-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:underline"
                    >
                      <span>Read Story</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPLORATION MATRIX (CHAPTER GATES TO SEPARATE PAGES) */}
        <section className="mt-20">
          <div className="border-t border-border/70 pt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Explore Profile Chapters
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Deep Dives & Structured Records
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Explore dedicated pages covering my roots, engineering stories, corporate analysis
              internship, leadership tenure, and live chess telemetry.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {EXPLORATION_CHAPTERS.map((chap) => (
              <Link
                key={chap.id}
                to={chap.href}
                className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-card/50 p-6 transition-all hover:border-primary/50 hover:bg-card/80"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-mono font-bold text-primary">{chap.number}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {chap.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {chap.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-primary group-hover:underline">
                  <span>{chap.label}</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* READY TO CONNECT CALLOUT */}
        <section className="mt-20 rounded-3xl border border-border/80 bg-card/60 p-8 text-center sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Get In Touch
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build software that lasts.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Open to software engineering roles, full-stack internships, and technical
            collaborations. Available across Mohali, Rajgangpur, or remote.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-6 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              <span>Contact Directly</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-xs font-medium text-foreground transition-colors hover:bg-accent"
            >
              <span>{siteConfig.email}</span>
            </a>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
