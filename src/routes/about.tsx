import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GraduationCap, MapPin, Award, CheckCircle2 } from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/config/site";
import { educationList, resumeSummary } from "@/data/resume";
import { skillGroups, spokenLanguages, certificationsList } from "@/data/skills";
import { timeline } from "@/data/timeline";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Header Breadcrumb / Intro */}
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
            <span className="text-primary font-medium">About</span>
          </div>

          <SectionHeader
            eyebrow="Journey & Roots"
            title="Calm discipline, rooted heritage, and engineering rigor."
            description="From Rajgangpur, Odisha through the competitive classrooms of Pilani and Kota to Chandigarh University — my journey bridges cultural roots with core computer science."
            align="left"
          />
        </motion.div>

        {/* Narrative & Philosophy Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p className="text-foreground text-lg font-medium leading-relaxed">{resumeSummary}</p>

            <p>
              My journey began in{" "}
              <strong className="text-foreground font-semibold">Rajgangpur, Odisha</strong>, an
              industrial township that gave me my roots, community values, and bilingual fluency in
              Odia (<span className="font-sanskrit text-primary">ଓଡ଼ିଆ</span>), alongside my mother
              tongue Hindi (<span className="font-sanskrit text-primary">हिन्दी</span>). Early on,
              residential schooling at{" "}
              <strong className="text-foreground font-semibold">Birla School, Pilani</strong> taught
              me self-reliance, which I carried to{" "}
              <strong className="text-foreground font-semibold">Kota, Rajasthan</strong> during
              Classes IX through XII, where the rigorous environment instilled mathematical stamina
              and disciplined work habits.
            </p>

            <p>
              Today, pursuing my undergraduate degree in Computer Science &amp; Engineering at{" "}
              <strong className="text-foreground font-semibold">Chandigarh University</strong>{" "}
              (Class of 2027), I bring those same principles to software development, systems
              design, and competitive programming. Whether designing conflict-safe ticketing engines
              in Java Spring Boot, architecting Web3 dApps on the Internet Computer Protocol (ICP),
              auditing logistics workflows at Dalmia Bharat Group, or serving as Chairperson of an
              IEEE student branch of over 500 members, I focus on building calm, verifiable, and
              resilient software.
            </p>

            <div className="rounded-2xl border border-border/80 bg-card/60 p-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                <span>Guiding Philosophy</span>
                <span>·</span>
                <span className="font-sanskrit text-sm font-normal text-foreground">
                  {siteConfig.mantra}
                </span>
              </div>
              <p className="mt-2 text-sm text-foreground italic">
                &ldquo;{siteConfig.mantraTranslation}&rdquo;
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                In engineering as on the chessboard, decisions made with patience, fairness, and
                systematic reasoning yield lasting victories.
              </p>
            </div>
          </div>

          {/* Snapshot Details Card */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                Origins & Current Base
              </h3>
              <div className="mt-4 space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Roots & Hometown:</span>
                    <p className="text-xs text-muted-foreground">
                      Rajgangpur, Sundargarh, Odisha, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Current Campus:</span>
                    <p className="text-xs text-muted-foreground">
                      Chandigarh University, Mohali, Punjab (2023 — 2027)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-border/60 pt-5">
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Languages Spoken
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {spokenLanguages.map((lang) => (
                    <div
                      key={lang.name}
                      className="rounded-lg border border-border bg-background/80 px-3 py-1.5 text-xs text-foreground"
                    >
                      <span className="font-medium">{lang.name}</span>
                      <span className="ml-1 text-[11px] text-muted-foreground">
                        ({lang.proficiency})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                  Key Certifications
                </h3>
              </div>
              <ul className="mt-4 space-y-3 text-xs">
                {certificationsList.map((cert) => (
                  <li key={cert.name} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{cert.name}</p>
                      <p className="text-muted-foreground">
                        {cert.issuer} · {cert.period}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-16 border-t border-border/60 pt-12">
          <SectionHeader
            eyebrow="Academic Path"
            title="Education"
            description="Foundational schooling in Pilani and Kota culminating in a Bachelor of Engineering in Computer Science."
            align="left"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/70 bg-card/60 p-5 transition-all hover:border-border"
              >
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-mono text-primary font-medium">{edu.period}</span>
                  <span>{edu.location}</span>
                </div>
                <h4 className="mt-2 text-base font-semibold text-foreground">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                {edu.grade && (
                  <p className="mt-2 text-xs font-semibold text-primary">{edu.grade}</p>
                )}
                {edu.highlights && (
                  <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                    {edu.highlights.map((h, i) => (
                      <li key={i}>· {h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Competencies Matrix */}
        <div className="mt-16 border-t border-border/60 pt-12">
          <SectionHeader
            eyebrow="Technical Stack"
            title="Core Skills & Technologies"
            description="Technologies and engineering domains I utilize across production projects and algorithmic problem solving."
            align="left"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.id} className="rounded-2xl border border-border/80 bg-card/60 p-5">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                  {group.title}
                </h4>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-md border border-border/60 bg-background/70 px-2.5 py-1 text-xs font-medium text-foreground"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="mt-16 border-t border-border/60 pt-12">
          <SectionHeader
            eyebrow="Chronicle"
            title="Journey Milestones"
            description="Key phases of growth, competitions, leadership elections, and industrial exposure."
            align="left"
          />

          <div className="mt-8 space-y-6">
            {timeline.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-border/70 bg-card/50 p-5 transition-all hover:border-border sm:p-6"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-primary">{item.year}</span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-sm font-semibold text-foreground">{item.title}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.organisation}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                  {item.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Page CTA */}
        <div className="mt-16 flex items-center justify-between border-t border-border/60 pt-8">
          <Link
            to="/"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Overview
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:underline"
          >
            Explore Projects →
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
