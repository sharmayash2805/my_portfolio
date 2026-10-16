import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, Users, Trophy, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";
import { SectionHeader } from "@/components/ui/section-header";
import { awardsList, experienceList } from "@/data/resume";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
});

function ExperiencePage() {
  const shouldReduceMotion = useReducedMotion();

  const internships = experienceList.filter((e) => e.type === "internship");
  const leaderships = experienceList.filter(
    (e) => e.type === "leadership" || e.type === "community",
  );

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
            <span className="text-primary font-medium">Experience</span>
          </div>

          <SectionHeader
            eyebrow="Leadership & Corporate Exposure"
            title="Professional internship, chapter governance & verified honors."
            description="From analyzing supply-chain integration touchpoints at Dalmia Bharat Group in Rajgangpur to leading the 500+ member IEEE student branch at Chandigarh University."
            align="left"
          />
        </motion.div>

        {/* Professional Internship Section */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold text-foreground">Corporate & Industrial Internship</h3>
          </div>

          <div className="space-y-6">
            {internships.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-border/80 bg-card/70 p-6 shadow-sm sm:p-8"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-foreground sm:text-2xl">{item.role}</h4>
                    <p className="mt-1 text-base font-semibold text-primary">{item.organisation}</p>
                  </div>
                  <div className="flex flex-col text-xs text-muted-foreground sm:text-right">
                    <span className="font-mono text-primary font-medium">{item.period}</span>
                    <span className="mt-1 flex items-center gap-1 sm:justify-end">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                  {item.description}
                </p>

                <div className="mt-6 rounded-2xl border border-border/60 bg-background/50 p-5">
                  <h5 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Core Technical Deliverables & Methodology
                  </h5>
                  <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-1 h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/70 bg-background/80 px-2.5 py-1 font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Co-Curricular & Student Leadership Section */}
        <div className="mt-16 border-t border-border/60 pt-12">
          <div className="flex items-center gap-2 mb-6">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold text-foreground">
              Community Leadership & IEEE Governance
            </h3>
          </div>

          <div className="space-y-8">
            {leaderships.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-border/80 bg-card/60 p-6 sm:p-8"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{item.role}</h4>
                    <p className="mt-0.5 text-sm font-semibold text-primary">{item.organisation}</p>
                  </div>
                  <div className="text-xs text-muted-foreground sm:text-right">
                    <span className="font-mono text-primary font-medium">{item.period}</span>
                    <p className="mt-0.5">{item.location}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                  {item.description}
                </p>

                {item.subRoles && (
                  <div className="mt-5 rounded-2xl border border-border/60 bg-background/50 p-4">
                    <h5 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Leadership Progression
                    </h5>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {item.subRoles.map((role, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-xs py-1 border-b border-border/40 last:border-0"
                        >
                          <span className="font-medium text-foreground">{role.title}</span>
                          <span className="font-mono text-muted-foreground">{role.period}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <ul className="mt-5 space-y-2 text-xs text-muted-foreground">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-bold">·</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5 text-xs">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/60 bg-background/70 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Honors & Awards Grid */}
        <div className="mt-16 border-t border-border/60 pt-12">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold text-foreground">Honors, Awards & Recognitions</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {awardsList.map((award) => (
              <div
                key={award.id}
                className="rounded-2xl border border-border/80 bg-card/60 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-primary font-medium">{award.year}</span>
                    {award.badge && (
                      <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                        {award.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="mt-3 text-base font-bold text-foreground">{award.title}</h4>
                  <p className="text-xs font-semibold text-muted-foreground mt-0.5">
                    {award.organisation}
                  </p>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-border/60 pt-8">
          <Link
            to="/projects"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Projects
          </Link>
          <Link
            to="/chess"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:underline"
          >
            Live Chess Ledger →
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
