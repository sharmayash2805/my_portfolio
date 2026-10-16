import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";

import { AppShell } from "@/components/layout/app-shell";
import { ChessSection } from "@/components/sections/chess";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/chess")({
  component: ChessPage,
});

function ChessPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Breadcrumb & Intro */}
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
            <span className="text-primary font-medium">Chess</span>
          </div>

          <SectionHeader
            eyebrow="Shatranj · Chess Ledger"
            title="Calculated moves, patient strategy & live game history."
            description="Live stats, rapid and blitz ratings, and recent match telemetry queried from the public Chess.com API."
            align="left"
          />
        </motion.div>

        {/* Philosophy Callout: Chess & Software Engineering */}
        <div className="mt-8 rounded-2xl border border-border/80 bg-card/60 p-5 sm:p-6">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Engineering Analogy · The Endgame Mindset
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/90">
            In competitive chess, hasty tactical maneuvers usually collapse against calm
            prophylactic play. The same holds true for software architecture: understanding edge
            cases, verifying invariants, and designing clean interfaces is the software counterpart
            to endgame technique.
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
            <span>
              Chess.com Username:{" "}
              <strong className="text-foreground">{siteConfig.chessUsername}</strong>
            </span>
            <span>·</span>
            <span>Discipline: Rapid, Blitz & Bullet</span>
          </div>
        </div>

        {/* Live Chess Component */}
        <div className="mt-8">
          <ChessSection />
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-border/60 pt-8">
          <Link
            to="/experience"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Experience & Leadership
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:underline"
          >
            Get In Touch →
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
