import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Trophy, Layers } from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";
import { SectionHeader } from "@/components/ui/section-header";
import { projectFilters, projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Breadcrumb & Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
        >
          <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-primary font-medium">Projects</span>
          </div>

          <SectionHeader
            eyebrow="Portfolio of Works"
            title="Engineered systems, competition triumphs & open-source code."
            description="Detailed case studies of key projects built across full-stack web, algorithmic transit scheduling, cloud governance, and digital inheritance."
            align="left"
          />
        </motion.div>

        {/* Filter Controls (Segmented buttons with working click handlers) */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {projectFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border/80 bg-card/60 text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Case Study Grid */}
        <div className="mt-10 space-y-12">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: index * 0.08 }}
              className="rounded-3xl border border-border/80 bg-card/70 p-6 shadow-sm backdrop-blur-sm sm:p-8"
            >
              {/* Card Header: Title & Meta */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-mono text-primary font-medium">{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize">{project.category}</span>
                  </div>

                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-primary">{project.subtitle}</p>
                </div>

                {/* Award Badge if any */}
                {project.award && (
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                    <Trophy className="h-3.5 w-3.5" />
                    <span>{project.award}</span>
                  </div>
                )}
              </div>

              {/* Story Narrative Box */}
              <div className="mt-6 rounded-2xl border border-border/60 bg-background/60 p-5 sm:p-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  The Story & Engineering Challenge
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 sm:text-base">
                  {project.story}
                </p>
              </div>

              {/* Key Technical Highlights */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Key Architectural Highlights
                </h4>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="rounded-xl border border-border/60 bg-card/50 p-3 text-xs leading-relaxed text-muted-foreground"
                    >
                      <span className="font-semibold text-foreground">0{idx + 1}.</span> {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer: Tech Stack & Repositories */}
              <div className="mt-6 flex flex-col gap-4 border-t border-border/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
                {/* Tech Stack (Zero-pill clean text) */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground mr-1">Stack:</span>
                  {project.stack.map((tech, i) => (
                    <span key={tech} className="inline-flex items-center">
                      <span className="rounded bg-background/80 px-2 py-0.5 font-medium text-foreground border border-border/40">
                        {tech}
                      </span>
                      {i < project.stack.length - 1 && (
                        <span className="ml-1 text-muted-foreground/40"></span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Repository Links */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.repos.map((repo) => (
                    <a
                      key={repo.url}
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border/90 bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-accent"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>{repo.label}</span>
                      <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Route Navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-border/60 pt-8">
          <Link
            to="/about"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← About & Journey
          </Link>
          <Link
            to="/experience"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:underline"
          >
            Experience & Leadership →
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
