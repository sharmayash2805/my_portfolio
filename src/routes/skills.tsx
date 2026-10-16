import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";

import { AppShell } from "@/components/layout/app-shell";
import { SkillsSection } from "@/components/sections/skills";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
});

function SkillsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Breadcrumb Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
          className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground"
        >
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-primary font-medium">Skills & Hobbies</span>
        </motion.div>

        {/* Unified Skills & Strategic Hobbies Component */}
        <SkillsSection />

        {/* Bottom Page Navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-border/60 pt-8">
          <Link
            to="/experience"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Experience & Governance
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
