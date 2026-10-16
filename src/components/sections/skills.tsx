import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Languages,
  Workflow,
  Sparkles,
  Trophy,
  Gamepad2,
  Heart,
  ExternalLink,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { interpersonalTags, skillGroups, spokenLanguages } from "@/data/skills";
import { useChessSnapshot } from "@/hooks/use-chess-snapshot";
import { siteConfig } from "@/config/site";

const icons = [Code2, Languages, Workflow, Sparkles];

function SkillLevelPill({ level }: { level: "core" | "proficient" | "familiar" }) {
  const tone = {
    core: "bg-primary/15 text-primary font-semibold",
    proficient: "bg-violet-500/15 text-violet-300 font-medium",
    familiar: "bg-slate-500/15 text-slate-300",
  };

  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] ${tone[level]}`}
    >
      {level}
    </span>
  );
}

export function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();
  const { data: chessData } = useChessSnapshot();

  return (
    <section id="vidya" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
        >
          <SectionHeader
            eyebrow="Vidya & Kausalam"
            title="Technical capabilities, leadership & strategic hobbies."
            description="Engineering stacks, chapter governance expertise, and strategic disciplines like competitive chess."
            align="center"
          />
        </motion.div>

        {/* Technical Skill Groups Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={group.id}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.45,
                  delay: prefersReducedMotion ? 0 : index * 0.06,
                  ease: "easeOut",
                }}
                className="rounded-3xl border border-border/80 bg-card/70 p-6 shadow-sm backdrop-blur-sm"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        {group.sanskrit}
                      </p>
                      <h3 className="text-lg font-bold text-foreground">{group.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-3 py-1.5 text-xs text-foreground"
                    >
                      <span>{skill.name}</span>
                      <SkillLevelPill level={skill.level} />
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Unified Hobbies & Passions Card (Chess & Strategic Discipline) */}
        <div className="mt-10">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
            className="rounded-3xl border border-border/80 bg-card/70 p-6 sm:p-8 shadow-sm"
          >
            <div className="flex items-center justify-between pb-4 border-b border-border/60">
              <div className="flex items-center gap-2.5">
                <Gamepad2 className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">
                  Strategic Hobbies & Chess Discipline
                </h3>
              </div>

              <a
                href={`https://www.chess.com/member/${siteConfig.chessUsername}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>Chess.com Profile ({siteConfig.chessUsername})</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              In competitive chess, hasty tactical maneuvers usually collapse against calm
              prophylactic play. Understanding edge cases, verifying invariants, and designing clean
              interfaces is the software engineering counterpart to endgame technique.
            </p>

            {/* Live Ratings Summary */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {chessData?.stats ? (
                chessData.stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="rounded-2xl border border-border/60 bg-background/60 p-4"
                  >
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="font-bold uppercase tracking-wider">{stat.label}</span>
                      <Trophy className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="mt-2 text-2xl font-black text-foreground">
                      {stat.rating ?? "—"}
                    </div>
                    <div className="mt-1 text-[11px] text-muted-foreground">
                      Peak: <strong className="text-foreground">{stat.best ?? "—"}</strong>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 rounded-2xl border border-border/60 bg-background/50 p-4 text-xs text-muted-foreground">
                  Active in Rapid, Blitz, and Bullet chess time controls on Chess.com.
                </div>
              )}
            </div>

            {/* Hobbies list */}
            <div className="mt-6 pt-5 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Heart className="h-4 w-4 text-primary" />
                <span className="font-semibold text-foreground">
                  Other Hobbies & Personal Passions:
                </span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <Badge variant="outline" className="rounded-full px-3 py-1 font-medium">
                  Competitive Chess Analysis
                </Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1 font-medium">
                  Distributed Systems Literature
                </Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1 font-medium">
                  Open-Source Hackathons
                </Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1 font-medium">
                  Technical Mentorship
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Languages and Interpersonal Strengths */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
            className="rounded-3xl border border-border/80 bg-card/70 p-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Spoken Languages
            </p>
            <div className="mt-4 space-y-3">
              {spokenLanguages.map((language) => (
                <div
                  key={language.name}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-background/70 p-3 text-xs"
                >
                  <div>
                    <div className="font-bold text-foreground">{language.name}</div>
                    <div className="text-muted-foreground text-[11px]">{language.script}</div>
                  </div>
                  <Badge variant="outline" className="text-[10px] font-mono">
                    {language.proficiency}
                  </Badge>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : 0.08,
              ease: "easeOut",
            }}
            className="rounded-3xl border border-border/80 bg-card/70 p-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Interpersonal Strengths
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {interpersonalTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-xs text-foreground font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
