import type { SocialLink } from "@/types";
import { siteConfig } from "./site";

export const contactEmail = siteConfig.email;
export const contactPhone = siteConfig.phone;

export const socialLinks: SocialLink[] = [
  { id: "github", label: "GitHub", href: siteConfig.github, icon: "github" },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: "linkedin",
  },
  {
    id: "leetcode",
    label: "LeetCode",
    href: siteConfig.leetcode,
    icon: "code",
  },
  {
    id: "codeforces",
    label: "Codeforces",
    href: siteConfig.codeforces,
    icon: "code",
  },
  {
    id: "chess",
    label: "Chess.com",
    href: `https://www.chess.com/member/${siteConfig.chessUsername}`,
    icon: "crown",
  },
  { id: "email", label: "Email", href: `mailto:${siteConfig.email}`, icon: "mail" },
  {
    id: "phone",
    label: "Phone",
    href: `tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`,
    icon: "phone",
  },
];
