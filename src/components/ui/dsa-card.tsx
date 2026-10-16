import { useEffect, useState } from "react";
import { ArrowUpRight, Code2, Terminal, Award, CheckCircle } from "lucide-react";
import { dsaService, type DsaProfileSnapshot } from "@/services/dsaService";

export function DsaCard() {
  const [snapshot, setSnapshot] = useState<DsaProfileSnapshot | null>(null);

  useEffect(() => {
    void dsaService.getSnapshot().then(setSnapshot);
  }, []);

  return (
    <div className="rounded-3xl border border-border/80 bg-card/70 p-6 shadow-sm backdrop-blur-sm sm:p-7">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Code2 className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Algorithmic Problem Solving & DSA</h3>
            <p className="text-xs text-muted-foreground">
              Continuous practice on competitive programming platforms
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={snapshot?.leetcode.profileUrl ?? "https://leetcode.com/u/_yash_2805"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/80 px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-accent"
          >
            <span>LeetCode</span>
            <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
          </a>

          <a
            href={snapshot?.codeforces.profileUrl ?? "https://codeforces.com/profile/_yash_2805"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/80 px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-accent"
          >
            <span>Codeforces</span>
            <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
          </a>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        A core part of my technical foundation is disciplined problem solving: breaking down complex
        constraints, proving invariants, and optimizing time and space trade-offs across data
        structures and graph algorithms.
      </p>

      {/* Grid of Profile Telemetry */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {/* LeetCode Card */}
        <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-foreground">LeetCode Discipline</span>
            <span className="font-mono text-[11px] text-primary">@_yash_2805</span>
          </div>

          <p className="mt-2 text-xs text-muted-foreground">
            Daily practice across Trees, Graphs, Dynamic Programming, and Two Pointers in Java.
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {snapshot?.leetcode.focusAreas.slice(0, 3).map((area) => (
              <span
                key={area}
                className="rounded-md border border-border/40 bg-card px-2 py-0.5 text-[10px] font-medium text-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Codeforces Card */}
        <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-foreground">Codeforces Contests</span>
            <span className="font-mono text-[11px] text-primary">@_yash_2805</span>
          </div>

          <div className="mt-2.5 flex items-baseline gap-3">
            <div>
              <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Rating:
              </span>
              <span className="ml-1.5 font-mono text-base font-bold text-foreground">
                {snapshot?.codeforces.rating ?? 1145}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Max:
              </span>
              <span className="ml-1.5 font-mono text-base font-bold text-primary">
                {snapshot?.codeforces.maxRating ?? 1159}
              </span>
            </div>
          </div>

          <p className="mt-2 text-xs text-muted-foreground">
            Rank:{" "}
            <strong className="text-foreground">{snapshot?.codeforces.rank ?? "Competitor"}</strong>{" "}
            · Regular division contest participant.
          </p>
        </div>
      </div>
    </div>
  );
}
