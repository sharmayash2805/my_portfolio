import { siteConfig } from "./site";

export const seoConfig = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description:
    "Official portfolio of Yash Sharma: analytical problem solver, systems builder, former IEEE CUSB Chairperson, and competitive chess enthusiast.",
  siteUrl: "https://yashsharma.dev",
  ogType: "website",
  twitterCard: "summary_large_image",
} as const;
