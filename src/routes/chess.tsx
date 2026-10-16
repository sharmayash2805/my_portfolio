import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/app-shell";
import { SkillsSection } from "@/components/sections/skills";

export const Route = createFileRoute("/chess")({
  component: ChessPage,
});

function ChessPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link to="/about" className="hover:text-foreground transition-colors">
            Skills & Hobbies
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-primary font-medium">Chess</span>
        </div>

        <SkillsSection />
      </div>
    </AppShell>
  );
}
