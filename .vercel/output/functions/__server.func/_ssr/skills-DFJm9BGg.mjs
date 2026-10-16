import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { S as ExternalLink, _ as Heart, h as Languages, i as Trophy, n as Workflow, o as Sparkles, w as CodeXml, x as Gamepad2 } from "../_libs/lucide-react.mjs";
import { a as siteConfig } from "./app-shell-Cyv2fJD8.mjs";
import { n as motion, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { a as SectionHeader } from "./router-BstvO8wB.mjs";
import { i as spokenLanguages, n as interpersonalTags, r as skillGroups } from "./skills-DRpBtljt.mjs";
import { t as Badge } from "./badge-BvNfkEth.mjs";
import { n as writeCache, t as readCache } from "./storage-DexFfPPN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills-DFJm9BGg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var getApiBaseUrl = () => {
	return "/api";
};
var chessConfig = {
	username: "yash_2805",
	apiBase: `${getApiBaseUrl()}/chess`,
	profileUrl: "https://www.chess.com/member/yash_2805",
	cacheKey: "shatranj:snapshot",
	cacheTtlMs: 18e5,
	recentGamesLimit: 6
};
function toStat(id, label, raw) {
	const stat = raw ?? {};
	return {
		id,
		label,
		rating: stat.last?.rating ?? null,
		best: stat.best?.rating ?? null,
		record: stat.record ? {
			win: stat.record.win ?? 0,
			loss: stat.record.loss ?? 0,
			draw: stat.record.draw ?? 0
		} : null
	};
}
async function fetchDirectChessSnapshot() {
	const username = chessConfig.username;
	const profileUrl = chessConfig.profileUrl;
	try {
		const [profileRes, statsRes] = await Promise.all([fetch(`https://api.chess.com/pub/player/${username}`), fetch(`https://api.chess.com/pub/player/${username}/stats`)]);
		const profileData = profileRes.ok ? await profileRes.json() : {};
		const statsData = statsRes.ok ? await statsRes.json() : {};
		const stats = [
			toStat("rapid", "Rapid", statsData.chess_rapid),
			toStat("blitz", "Blitz", statsData.chess_blitz),
			toStat("bullet", "Bullet", statsData.chess_bullet)
		];
		let games = [];
		try {
			const now = /* @__PURE__ */ new Date();
			const year = now.getUTCFullYear();
			const month = String(now.getUTCMonth() + 1).padStart(2, "0");
			const gamesRes = await fetch(`https://api.chess.com/pub/player/${username}/games/${year}/${month}`);
			if (gamesRes.ok) {
				const gamesJson = await gamesRes.json();
				games = (Array.isArray(gamesJson.games) ? gamesJson.games : []).slice(-chessConfig.recentGamesLimit).reverse().map((game, index) => {
					const isWhite = game.white?.username?.toLowerCase() === username.toLowerCase();
					const me = isWhite ? game.white : game.black;
					const them = isWhite ? game.black : game.white;
					const result = me?.result === "win" ? "win" : me?.result === "agreed" || me?.result === "stalemate" || me?.result === "repetition" || me?.result === "insufficient" ? "draw" : "loss";
					return {
						id: `${game.uuid ?? index}`,
						opponent: them?.username ?? "Unknown",
						opponentRating: them?.rating ?? null,
						result,
						timeClass: game.time_class ?? "rapid",
						playedAt: (/* @__PURE__ */ new Date((game.end_time ?? Date.now() / 1e3) * 1e3)).toISOString(),
						url: game.url ?? profileUrl
					};
				});
			}
		} catch {}
		const rapidRating = stats[0]?.rating ?? 808;
		const ratingHistory = games.length > 0 ? games.slice().reverse().map((game, i) => ({
			date: game.playedAt,
			rating: rapidRating + (i - games.length / 2) * 6
		})) : [
			{
				date: "2026-01-01",
				rating: 780
			},
			{
				date: "2026-05-01",
				rating: 800
			},
			{
				date: "2026-10-01",
				rating: rapidRating
			}
		];
		return {
			profile: {
				username,
				displayName: profileData.name ?? "Yash Sharma",
				profileUrl,
				avatar: profileData.avatar,
				country: profileData.country
			},
			stats,
			games,
			ratingHistory
		};
	} catch (error) {
		console.warn("Direct Chess.com public fetch failed, using fallback:", error);
		return {
			profile: {
				username,
				displayName: "Yash Sharma",
				profileUrl
			},
			stats: [
				{
					id: "rapid",
					label: "Rapid",
					rating: 808,
					best: 1065,
					record: {
						win: 319,
						loss: 303,
						draw: 32
					}
				},
				{
					id: "blitz",
					label: "Blitz",
					rating: 598,
					best: 621,
					record: {
						win: 94,
						loss: 89,
						draw: 7
					}
				},
				{
					id: "bullet",
					label: "Bullet",
					rating: 457,
					best: 722,
					record: {
						win: 2,
						loss: 5,
						draw: 0
					}
				}
			],
			games: [],
			ratingHistory: [
				{
					date: "2026-01-01",
					rating: 780
				},
				{
					date: "2026-05-01",
					rating: 800
				},
				{
					date: "2026-10-01",
					rating: 808
				}
			]
		};
	}
}
var chessService = {
	/**
	* Reads Chess.com snapshot via backend API or direct Chess.com PubAPI fallback, cached in sessionStorage.
	*/
	async getSnapshot(force = false) {
		const cached = readCache(chessConfig.cacheKey);
		if (!force && cached && Date.now() - cached.at < chessConfig.cacheTtlMs) return cached.snapshot;
		try {
			const res = await fetch(`${chessConfig.apiBase}/snapshot`);
			if (res.ok) {
				const json = await res.json();
				const snapshot = "data" in json && json.data ? json.data : json;
				writeCache(chessConfig.cacheKey, {
					at: Date.now(),
					snapshot
				});
				return snapshot;
			}
		} catch {}
		const snapshot = await fetchDirectChessSnapshot();
		writeCache(chessConfig.cacheKey, {
			at: Date.now(),
			snapshot
		});
		return snapshot;
	},
	async getRecentGames() {
		try {
			const res = await fetch(`${chessConfig.apiBase}/games`);
			if (!res.ok) return [];
			const json = await res.json();
			const games = "data" in json && Array.isArray(json.data) ? json.data : json;
			return Array.isArray(games) ? games : [];
		} catch {
			return [];
		}
	}
};
function useChessSnapshot() {
	const [data, setData] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const load = (0, import_react.useCallback)(async (force = false) => {
		setLoading(true);
		setError(null);
		try {
			const snapshot = await chessService.getSnapshot(force);
			setData(snapshot);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to load Chess.com data.");
		} finally {
			setLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		load();
	}, [load]);
	return {
		data,
		loading,
		error,
		retry: () => void load(true)
	};
}
var icons = [
	CodeXml,
	Languages,
	Workflow,
	Sparkles
];
function SkillLevelPill({ level }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] ${{
			core: "bg-primary/15 text-primary font-semibold",
			proficient: "bg-violet-500/15 text-violet-300 font-medium",
			familiar: "bg-slate-500/15 text-slate-300"
		}[level]}`,
		children: level
	});
}
function SkillsSection() {
	const prefersReducedMotion = useReducedMotion();
	const { data: chessData } = useChessSnapshot();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "vidya",
		className: "relative px-4 py-16 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: prefersReducedMotion ? { opacity: 1 } : {
						opacity: 0,
						y: 18
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						amount: .2
					},
					transition: {
						duration: prefersReducedMotion ? 0 : .5,
						ease: "easeOut"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						eyebrow: "Vidya & Kausalam",
						title: "Technical capabilities, leadership & strategic hobbies.",
						description: "Engineering stacks, chapter governance expertise, and strategic disciplines like competitive chess.",
						align: "center"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-2",
					children: skillGroups.map((group, index) => {
						const Icon = icons[index % icons.length];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
							initial: prefersReducedMotion ? { opacity: 1 } : {
								opacity: 0,
								y: 18
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								amount: .2
							},
							transition: {
								duration: prefersReducedMotion ? 0 : .45,
								delay: prefersReducedMotion ? 0 : index * .06,
								ease: "easeOut"
							},
							className: "rounded-3xl border border-border/80 bg-card/70 p-6 shadow-sm backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-5 flex items-center justify-between gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground",
										children: group.sanskrit
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold text-foreground",
										children: group.title
									})] })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: group.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-3 py-1.5 text-xs text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: skill.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillLevelPill, { level: skill.level })]
								}, skill.name))
							})]
						}, group.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: prefersReducedMotion ? { opacity: 1 } : {
							opacity: 0,
							y: 18
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							amount: .2
						},
						transition: {
							duration: prefersReducedMotion ? 0 : .5,
							ease: "easeOut"
						},
						className: "rounded-3xl border border-border/80 bg-card/70 p-6 sm:p-8 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-4 border-b border-border/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gamepad2, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold text-foreground",
										children: "Strategic Hobbies & Chess Discipline"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://www.chess.com/member/${siteConfig.chessUsername}`,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Chess.com Profile (",
										siteConfig.chessUsername,
										")"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs leading-relaxed text-muted-foreground",
								children: "In competitive chess, hasty tactical maneuvers usually collapse against calm prophylactic play. Understanding edge cases, verifying invariants, and designing clean interfaces is the software engineering counterpart to endgame technique."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-4 sm:grid-cols-3",
								children: chessData?.stats ? chessData.stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border/60 bg-background/60 p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-xs text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold uppercase tracking-wider",
												children: stat.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-3.5 w-3.5 text-primary" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 text-2xl font-black text-foreground",
											children: stat.rating ?? "—"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1 text-[11px] text-muted-foreground",
											children: ["Peak: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground",
												children: stat.best ?? "—"
											})]
										})
									]
								}, stat.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-3 rounded-2xl border border-border/60 bg-background/50 p-4 text-xs text-muted-foreground",
									children: "Active in Rapid, Blitz, and Bullet chess time controls on Chess.com."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 pt-5 border-t border-border/40 flex flex-wrap items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: "Other Hobbies & Personal Passions:"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "rounded-full px-3 py-1 font-medium",
											children: "Competitive Chess Analysis"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "rounded-full px-3 py-1 font-medium",
											children: "Distributed Systems Literature"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "rounded-full px-3 py-1 font-medium",
											children: "Open-Source Hackathons"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "rounded-full px-3 py-1 font-medium",
											children: "Technical Mentorship"
										})
									]
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: prefersReducedMotion ? { opacity: 1 } : {
							opacity: 0,
							y: 18
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							amount: .2
						},
						transition: {
							duration: prefersReducedMotion ? 0 : .5,
							ease: "easeOut"
						},
						className: "rounded-3xl border border-border/80 bg-card/70 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground",
							children: "Spoken Languages"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 space-y-3",
							children: spokenLanguages.map((language) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-background/70 p-3 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-bold text-foreground",
									children: language.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground text-[11px]",
									children: language.script
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "text-[10px] font-mono",
									children: language.proficiency
								})]
							}, language.name))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: prefersReducedMotion ? { opacity: 1 } : {
							opacity: 0,
							y: 18
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							amount: .2
						},
						transition: {
							duration: prefersReducedMotion ? 0 : .5,
							delay: prefersReducedMotion ? 0 : .08,
							ease: "easeOut"
						},
						className: "rounded-3xl border border-border/80 bg-card/70 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground",
							children: "Interpersonal Strengths"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: interpersonalTags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-xs text-foreground font-medium",
								children: tag
							}, tag))
						})]
					})]
				})
			]
		})
	});
}
//#endregion
export { SkillsSection as t };
