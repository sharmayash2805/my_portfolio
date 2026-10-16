import { siteConfig } from "@/config/site";
import { readCache, writeCache } from "@/utils/storage";

export interface CodeforcesUser {
  handle: string;
  rating?: number;
  maxRating?: number;
  rank?: string;
  maxRank?: string;
}

export interface DsaProfileSnapshot {
  codeforces: {
    handle: string;
    profileUrl: string;
    rating: number;
    maxRating: number;
    rank: string;
  };
  leetcode: {
    handle: string;
    profileUrl: string;
    focusAreas: string[];
    topBadges: string[];
  };
  coreTopics: string[];
}

const CACHE_KEY = "dsa:profiles:snapshot";
const CACHE_TTL_MS = 1000 * 60 * 60 * 6; // 6 hours

export const dsaService = {
  async getSnapshot(): Promise<DsaProfileSnapshot> {
    const cached = readCache<DsaProfileSnapshot>(CACHE_KEY);
    if (cached) {
      return cached;
    }

    let cfRating = 1145;
    let cfMaxRating = 1159;
    let cfRank = "Practicing Competitor";

    try {
      const res = await fetch("https://codeforces.com/api/user.info?handles=_yash_2805");
      if (res.ok) {
        const json = (await res.json()) as { status: string; result?: CodeforcesUser[] };
        if (json.status === "OK" && json.result && json.result[0]) {
          const user = json.result[0];
          cfRating = user.rating ?? cfRating;
          cfMaxRating = user.maxRating ?? cfMaxRating;
          cfRank = user.rank ? user.rank.charAt(0).toUpperCase() + user.rank.slice(1) : cfRank;
        }
      }
    } catch (e) {
      console.warn("[dsaService] Codeforces API fetch note:", e);
    }

    const snapshot: DsaProfileSnapshot = {
      codeforces: {
        handle: "_yash_2805",
        profileUrl: siteConfig.codeforces,
        rating: cfRating,
        maxRating: cfMaxRating,
        rank: cfRank,
      },
      leetcode: {
        handle: "_yash_2805",
        profileUrl: siteConfig.leetcode,
        focusAreas: [
          "Arrays & Two Pointers",
          "Dynamic Programming",
          "Trees & Graphs",
          "Binary Search",
          "Greedy Algorithms",
        ],
        topBadges: ["Consistent Problem Solver", "DSA in Java", "Algorithmic Invariants"],
      },
      coreTopics: [
        "Data Structures & Algorithms",
        "Time & Space Complexity Optimization",
        "Graph Traversal & Shortest Path",
        "Dynamic Programming Subproblems",
        "Object-Oriented System Modeling",
      ],
    };

    writeCache(CACHE_KEY, snapshot);
    return snapshot;
  },
};
