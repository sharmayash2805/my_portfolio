import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Trophy, CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { projectFilters, projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";

const featuredProject = projects[0];

function ProjectCard({ project }: { project: Project }) {
  const primaryRepo = project.repos?.[0]?.url || project.liveUrl;

  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col justify-between h-full rounded-3xl border border-border/80 bg-card/70 p-6 shadow-sm backdrop-blur-sm"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              {project.category}
            </span>
            <h3 className="mt-1 text-xl font-bold text-foreground">{project.title}</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">{project.subtitle}</p>
          </div>
          <Badge
            variant="outline"
            className="rounded-full px-2.5 py-0.5 text-[10px] uppercase font-mono tracking-wider shrink-0"
          >
            {project.year}
          </Badge>
        </div>

        {/* Short Summary */}
        <p className="mt-3.5 text-xs leading-relaxed text-muted-foreground">{project.summary}</p>

        {/* Award Badge if present */}
        {project.award && (
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold text-amber-500">
            <Trophy className="h-3.5 w-3.5 shrink-0" />
            <span>{project.award}</span>
          </div>
        )}

        {/* 3 Key Pointers */}
        <div className="mt-4 rounded-2xl border border-border/60 bg-background/50 p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-2.5">
            Key Highlights
          </p>
          <ul className="space-y-2 text-xs text-muted-foreground">
            {project.highlights.slice(0, 3).map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-primary shrink-0" />
                <span className="leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge
              key={`${project.id}-${tech}`}
              variant="outline"
              className="rounded-md border-border/60 bg-background/80 px-2 py-0.5 text-[10px] text-muted-foreground font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Action Buttons: Live & GitHub */}
      <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-4 border-t border-border/50">
        {project.liveUrl && (
          <Button asChild size="sm" className="rounded-full px-4 text-xs font-semibold">
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <span>Visit Live Project</span>
              <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
            </a>
          </Button>
        )}
        {primaryRepo && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-full px-4 text-xs font-semibold"
          >
            <a href={primaryRepo} target="_blank" rel="noreferrer">
              <Github className="h-3.5 w-3.5 mr-1.5" />
              <span>GitHub Repo</span>
            </a>
          </Button>
        )}
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="srijan" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
        >
          <SectionHeader
            eyebrow="Srijan · Software Projects"
            title="Systems, distributed vaults & environmental automation."
            description="Selected work designed with 3-pointer clarity, direct live deployment links, and open-source repositories."
            align="center"
          />
        </motion.div>

        {/* Filter Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {projectFilters.map((filter) => (
            <Button
              key={filter.id}
              type="button"
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              className="rounded-full text-xs"
              onClick={() => setActiveFilter(filter.id)}
              aria-pressed={activeFilter === filter.id}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Featured Project */}
        <motion.div
          layout
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
          className="mt-10"
        >
          <Card className="overflow-hidden border border-border/80 bg-card/70 shadow-sm">
            <CardHeader className="border-b border-border/70 bg-gradient-to-r from-primary/10 via-background to-violet-500/10 pb-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                    Featured Project
                  </p>
                  <CardTitle className="mt-1 text-2xl font-bold text-foreground">
                    {featuredProject.title}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">{featuredProject.subtitle}</p>
                </div>
                <Badge
                  variant="outline"
                  className="w-fit rounded-full px-3 py-1 text-[10px] uppercase font-mono tracking-wider shrink-0"
                >
                  {featuredProject.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {featuredProject.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {featuredProject.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="rounded-md border-border/60 bg-background/80 px-2 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background/60 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    3-Point Impact Summary
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                    {featuredProject.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-3 pt-3 border-t border-border/40">
                    {featuredProject.liveUrl && (
                      <Button asChild size="sm" className="rounded-full px-4 text-xs font-semibold">
                        <a href={featuredProject.liveUrl} target="_blank" rel="noreferrer">
                          Visit Live Project
                          <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                        </a>
                      </Button>
                    )}
                    {featuredProject.repos?.[0] && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-full px-4 text-xs font-semibold"
                      >
                        <a href={featuredProject.repos[0].url} target="_blank" rel="noreferrer">
                          <Github className="h-3.5 w-3.5 mr-1.5" />
                          GitHub Repo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Project Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
