export type SectionId = "home" | "about" | "projects" | "experience" | "chess" | "contact";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  sanskrit?: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "crown" | "phone" | "code";
}

export type SkillLevel = "core" | "proficient" | "familiar";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  id: string;
  title: string;
  sanskrit?: string;
  skills: Skill[];
}

export interface SpokenLanguage {
  name: string;
  script: string;
  proficiency: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights?: string[];
}

export interface ExperienceRole {
  title: string;
  period: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  organisation: string;
  role: string;
  type: "internship" | "leadership" | "community";
  location: string;
  period: string;
  description: string;
  bullets: string[];
  tags: string[];
  subRoles?: ExperienceRole[];
}

export interface AwardItem {
  id: string;
  title: string;
  organisation: string;
  year: string;
  description: string;
  badge?: string;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  organisation: string;
  description: string;
  tags: string[];
}

export type ProjectCategory = "web" | "fullstack" | "systems" | "cloud";

export interface ProjectRepo {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  sanskrit?: string;
  summary: string;
  story: string;
  category: ProjectCategory;
  stack: string[];
  year: string;
  award?: string;
  repos: ProjectRepo[];
  liveUrl?: string;
  highlights: string[];
}

export interface ProjectFilter {
  id: ProjectCategory | "all";
  label: string;
}

export interface ChessProfile {
  username: string;
  displayName: string;
  profileUrl: string;
  avatar?: string;
  country?: string;
}

export interface ChessStat {
  id: string;
  label: string;
  rating: number | null;
  best: number | null;
  record: { win: number; loss: number; draw: number } | null;
}

export type ChessResult = "win" | "loss" | "draw";

export interface ChessGame {
  id: string;
  opponent: string;
  opponentRating: number | null;
  result: ChessResult;
  timeClass: string;
  playedAt: string;
  url: string;
}

export interface RatingPoint {
  date: string;
  rating: number;
}

export interface ChessSnapshot {
  profile: ChessProfile;
  stats: ChessStat[];
  games: ChessGame[];
  ratingHistory: RatingPoint[];
}

export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: number;
}

export interface BuiltResponse {
  answer: string;
  matchedIntent: string | null;
  confidence: number;
  suggestions: string[];
}

export interface QaPair {
  id: string;
  intent: string;
  questions: string[];
  answer: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResult {
  ok: boolean;
  message: string;
}

export type AsyncState = "idle" | "loading" | "success" | "error";
