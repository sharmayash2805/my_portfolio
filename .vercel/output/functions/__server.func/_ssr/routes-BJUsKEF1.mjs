import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as ArrowRight, i as Trophy, k as ArrowUpRight, w as CodeXml } from "../_libs/lucide-react.mjs";
import { a as siteConfig, t as AppShell } from "./app-shell-Cyv2fJD8.mjs";
import { n as motion, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { n as writeCache, t as readCache } from "./storage-DexFfPPN.mjs";
import { n as projects } from "./projects-DlOEdZNE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BJUsKEF1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CACHE_KEY = "dsa:profiles:snapshot";
var dsaService = { async getSnapshot() {
	const cached = readCache(CACHE_KEY);
	if (cached) return cached;
	let cfRating = 1145;
	let cfMaxRating = 1159;
	let cfRank = "Practicing Competitor";
	try {
		const res = await fetch("https://codeforces.com/api/user.info?handles=_yash_2805");
		if (res.ok) {
			const json = await res.json();
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
	const snapshot = {
		codeforces: {
			handle: "_yash_2805",
			profileUrl: siteConfig.codeforces,
			rating: cfRating,
			maxRating: cfMaxRating,
			rank: cfRank
		},
		leetcode: {
			handle: "_yash_2805",
			profileUrl: siteConfig.leetcode,
			focusAreas: [
				"Arrays & Two Pointers",
				"Dynamic Programming",
				"Trees & Graphs",
				"Binary Search",
				"Greedy Algorithms"
			],
			topBadges: [
				"Consistent Problem Solver",
				"DSA in Java",
				"Algorithmic Invariants"
			]
		},
		coreTopics: [
			"Data Structures & Algorithms",
			"Time & Space Complexity Optimization",
			"Graph Traversal & Shortest Path",
			"Dynamic Programming Subproblems",
			"Object-Oriented System Modeling"
		]
	};
	writeCache(CACHE_KEY, snapshot);
	return snapshot;
} };
function DsaCard() {
	const [snapshot, setSnapshot] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		dsaService.getSnapshot().then(setSnapshot);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-border/80 bg-card/70 p-6 shadow-sm backdrop-blur-sm sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-foreground",
						children: "Algorithmic Problem Solving & DSA"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Continuous practice on competitive programming platforms"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: snapshot?.leetcode.profileUrl ?? "https://leetcode.com/u/_yash_2805",
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/80 px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LeetCode" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3 text-muted-foreground" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: snapshot?.codeforces.profileUrl ?? "https://codeforces.com/profile/_yash_2805",
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/80 px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Codeforces" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3 text-muted-foreground" })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted-foreground",
				children: "A core part of my technical foundation is disciplined problem solving: breaking down complex constraints, proving invariants, and optimizing time and space trade-offs across data structures and graph algorithms."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/60 bg-background/60 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: "LeetCode Discipline"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-primary",
								children: "@_yash_2805"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: "Daily practice across Trees, Graphs, Dynamic Programming, and Two Pointers in Java."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-1.5",
							children: snapshot?.leetcode.focusAreas.slice(0, 3).map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md border border-border/40 bg-card px-2 py-0.5 text-[10px] font-medium text-foreground",
								children: area
							}, area))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/60 bg-background/60 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: "Codeforces Contests"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-primary",
								children: "@_yash_2805"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex items-baseline gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.16em] text-muted-foreground",
								children: "Rating:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1.5 font-mono text-base font-bold text-foreground",
								children: snapshot?.codeforces.rating ?? 1145
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.16em] text-muted-foreground",
								children: "Max:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1.5 font-mono text-base font-bold text-primary",
								children: snapshot?.codeforces.maxRating ?? 1159
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: [
								"Rank:",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: snapshot?.codeforces.rank ?? "Competitor"
								}),
								" ",
								"· Regular division contest participant."
							]
						})
					]
				})]
			})
		]
	});
}
var PROOF_METRICS = [
	{
		value: "2023 — 2027",
		label: "Undergraduate in CSE",
		sub: "Chandigarh University (CGPA 7.4)"
	},
	{
		value: "Top 3 Nationally",
		label: "ICP WCHL 2025",
		sub: "Among 700+ competing teams"
	},
	{
		value: "500+ Members",
		label: "IEEE CUSB Chairperson",
		sub: "Best Student Branch at CU"
	},
	{
		value: "DCBL Logistics",
		label: "Corporate Intern",
		sub: "SAP ERP–TMS Blue Yonder audit"
	}
];
var EXPLORATION_CHAPTERS = [
	{
		id: "about",
		number: "01",
		title: "About & Roots",
		description: "From my hometown of Rajgangpur, Odisha through schooling in Pilani and Kota to Chandigarh University. Cultural roots, native Odia and Hindi heritage, and core engineering philosophy.",
		href: "/about",
		label: "Read journey & philosophy"
	},
	{
		id: "projects",
		number: "02",
		title: "Projects & Stories",
		description: "Detailed case studies of InheritNext (Digital Asset Vault), Concert Booking System (Spring Boot + React), Smart Metro Scheduling (KMRL), and GCP Automation with complete GitHub repos.",
		href: "/projects",
		label: "View project case studies"
	},
	{
		id: "experience",
		number: "03",
		title: "Experience & Leadership",
		description: "IT & Logistics Analysis corporate internship at Dalmia Bharat Group, comprehensive IEEE CIS & CUSB multi-tier executive leadership timeline, and 8+ verified national & collegiate awards.",
		href: "/experience",
		label: "Review leadership & awards"
	},
	{
		id: "skills",
		number: "04",
		title: "Skills & Strategic Hobbies",
		description: "Technical stacks, IEEE chapter governance, and strategic disciplines including live Chess.com ratings and game telemetry.",
		href: "/about",
		label: "Inspect skills & chess stats"
	}
];
function HomePage() {
	const shouldReduceMotion = useReducedMotion();
	const featuredProjects = projects.slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-8 lg:grid-cols-[1fr_1.15fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: shouldReduceMotion ? { opacity: 1 } : {
							opacity: 0,
							y: 18
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: shouldReduceMotion ? 0 : .6,
							ease: "easeOut"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 flex items-center gap-2.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-sanskrit text-xs font-semibold text-primary",
										children: siteConfig.mantra
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground text-xs",
										"aria-hidden": "true",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
										children: siteConfig.origin
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl",
								children: "Yash Sharma"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-lg font-medium text-primary sm:text-xl",
								children: siteConfig.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2.5 flex items-center gap-2 text-xs font-medium text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pursuing B.E. in CSE @ Chandigarh University ('23–'27)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-emerald-500 font-semibold",
										children: "Available for Internships"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground",
								children: siteConfig.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/projects",
										className: "inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-sm transition-colors hover:bg-primary/90",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore Projects" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/experience",
										className: "inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border bg-card/80 px-5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Experience & Awards" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contact" })
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: shouldReduceMotion ? { opacity: 1 } : {
							opacity: 0,
							scale: .98
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: shouldReduceMotion ? 0 : .65,
							delay: .1,
							ease: "easeOut"
						},
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-3xl border border-primary/25 bg-card/80 p-6 shadow-lg backdrop-blur-md sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-border/60 pb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 font-sanskrit text-sm font-bold text-primary",
											children: siteConfig.monogram
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-sm font-bold text-foreground",
											children: "Yash Sharma"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground",
											children: "Digital Profile & Overview"
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-500",
										children: "Active"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 border-l-2 border-primary/70 pl-4 py-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-base font-medium leading-relaxed text-foreground sm:text-lg italic",
										children: "“Namaste! I'm Yash Sharma. Welcome to my portfolio. Explore a digital version of my journey, projects, and problem-solving ledger — and feel free to reach out!”"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap gap-2 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-lg border border-border/70 bg-background/80 px-3 py-1 font-medium text-muted-foreground",
											children: ["📍 ", siteConfig.origin]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-lg border border-border/70 bg-background/80 px-3 py-1 font-medium text-muted-foreground",
											children: "🎓 Chandigarh University ('27)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-lg border border-border/70 bg-background/80 px-3 py-1 font-medium text-muted-foreground",
											children: "♟️ Competitive Chess"
										})
									]
								})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-14 border-y border-border/70 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4",
					children: PROOF_METRICS.map((metric, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xl font-bold tracking-tight text-foreground sm:text-2xl",
								children: metric.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 text-xs font-semibold text-foreground",
								children: metric.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 text-[11px] text-muted-foreground",
								children: metric.sub
							})
						]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DsaCard, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.22em] text-primary",
						children: "Featured Engineering"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
						children: "Recent Highlights"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects",
						className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"View all projects (",
							projects.length,
							")"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-2",
					children: featuredProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex flex-col justify-between rounded-3xl border border-border/80 bg-card/60 p-6 shadow-sm transition-all hover:border-primary/40 hover:bg-card/90 sm:p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-primary font-medium",
									children: project.year
								}), project.award ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-semibold text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-3 w-3" }), project.award]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "capitalize",
									children: project.category
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors",
								children: project.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs font-medium text-muted-foreground",
								children: project.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3.5 text-sm leading-relaxed text-muted-foreground",
								children: project.summary
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 border-t border-border/60 pt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5 text-[11px] text-muted-foreground",
									children: project.stack.slice(0, 3).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-background px-2 py-0.5 border border-border/40 font-medium text-foreground",
										children: s
									}, s))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/projects",
									className: "inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:underline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Read Story" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
								})]
							})
						})]
					}, project.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border/70 pt-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.24em] text-primary",
							children: "Explore Profile Chapters"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
							children: "Deep Dives & Structured Records"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-2xl text-sm text-muted-foreground",
							children: "Explore dedicated pages covering my roots, engineering stories, corporate analysis internship, leadership tenure, and live chess telemetry."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2",
					children: EXPLORATION_CHAPTERS.map((chap) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: chap.href,
						className: "group flex flex-col justify-between rounded-2xl border border-border/70 bg-card/50 p-6 transition-all hover:border-primary/50 hover:bg-card/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono font-bold text-primary",
									children: chap.number
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors",
								children: chap.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: chap.description
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center gap-1 text-xs font-semibold text-primary group-hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: chap.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
						})]
					}, chap.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20 rounded-3xl border border-border/80 bg-card/60 p-8 text-center sm:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.24em] text-primary",
						children: "Get In Touch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl",
						children: "Let's build software that lasts."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base",
						children: "Open to software engineering roles, full-stack internships, and technical collaborations. Available across Mohali, Rajgangpur, or remote."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-6 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow transition-colors hover:bg-primary/90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contact Directly" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${siteConfig.email}`,
							className: "inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-xs font-medium text-foreground transition-colors hover:bg-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: siteConfig.email })
						})]
					})
				]
			})
		]
	}) });
}
//#endregion
export { HomePage as component };
