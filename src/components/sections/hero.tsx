import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, ShieldCheck, Cpu, Code2, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="mahadrishti"
      className="relative isolate overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.12),_transparent_35%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          <Badge variant="default" className="rounded-full px-3 py-1 text-[11px] font-semibold">
            {siteConfig.availability}
          </Badge>
          <Badge
            variant="outline"
            className="rounded-full px-3 py-1 text-[11px] font-medium font-sanskrit"
          >
            {siteConfig.mantra}
          </Badge>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              ease: "easeOut",
              delay: shouldReduceMotion ? 0 : 0.08,
            }}
          >
            {/* Primary Text Greeting as requested */}
            <div className="rounded-3xl border border-border/80 bg-card/80 p-6 sm:p-8 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.22em] text-primary font-bold">
                <Sparkles className="h-4 w-4" />
                <span>Personal Ledger</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
                Namaste! I&apos;m Yash Sharma.
              </h1>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground font-normal">
                Welcome to my portfolio. Explore a digital version of my journey, projects, and
                problem-solving ledger — and feel free to reach out!
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="rounded-full px-6 font-semibold">
                  <a href="#srijan">
                    Explore Projects
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-6 font-semibold"
                >
                  <a href={`mailto:${siteConfig.email}`}>Direct Connect</a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Clean Editorial Analytical Focus Card (NO Avatar / NO Cartoon) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              ease: "easeOut",
              delay: shouldReduceMotion ? 0 : 0.12,
            }}
            className="relative"
          >
            <div className="rounded-3xl border border-border/80 bg-card/90 p-6 shadow-md backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 font-sanskrit text-base font-bold text-primary">
                    {siteConfig.monogram}
                  </div>
                  <div>
                    <h2 className="font-bold text-foreground text-sm">{siteConfig.name}</h2>
                    <p className="text-[11px] font-mono text-muted-foreground">
                      {siteConfig.currentLocation}
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="text-[10px] uppercase font-mono tracking-wider">
                  CU CSE &apos;27
                </Badge>
              </div>

              <div className="mt-5 space-y-3 text-xs">
                <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/60 p-3.5">
                  <Cpu className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground block">
                      Systems & Distributed Logic
                    </span>
                    <span className="text-muted-foreground">
                      Rust canisters on ICP & Spring Boot backend microservices
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/60 p-3.5">
                  <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground block">IEEE Chapter Governance</span>
                    <span className="text-muted-foreground">
                      Former Chairperson @ IEEE CUSB Main Branch & Mentor @ IEEE CIS
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/60 p-3.5">
                  <Code2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground block">
                      Algorithmic Problem Solving
                    </span>
                    <span className="text-muted-foreground">
                      Competitive Programming & Rapid/Blitz Chess calculations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex justify-center lg:mt-16">
          <a
            href="#srijan"
            className="inline-flex flex-col items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>Explore Ledger</span>
            <ArrowDown className="h-4 w-4 animate-bounce text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
