import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Github, i as Trophy, k as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./app-shell-Cyv2fJD8.mjs";
import { n as motion, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { a as SectionHeader } from "./router-BstvO8wB.mjs";
import { n as projects, t as projectFilters } from "./projects-DlOEdZNE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-CqgUuH36.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	const [activeFilter, setActiveFilter] = (0, import_react.useState)("all");
	const shouldReduceMotion = useReducedMotion();
	const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: shouldReduceMotion ? { opacity: 1 } : {
					opacity: 0,
					y: 16
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: shouldReduceMotion ? 0 : .5,
					ease: "easeOut"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-foreground transition-colors",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary font-medium",
							children: "Projects"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Portfolio of Works",
					title: "Engineered systems, competition triumphs & open-source code.",
					description: "Detailed case studies of key projects built across full-stack web, algorithmic transit scheduling, cloud governance, and digital inheritance.",
					align: "left"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap items-center gap-2",
				children: projectFilters.map((filter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setActiveFilter(filter.id),
					className: `rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${activeFilter === filter.id ? "bg-primary text-primary-foreground shadow-sm" : "border border-border/80 bg-card/60 text-muted-foreground hover:bg-accent hover:text-foreground"}`,
					children: filter.label
				}, filter.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-12",
				children: filteredProjects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					initial: shouldReduceMotion ? { opacity: 1 } : {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						amount: .1
					},
					transition: {
						duration: shouldReduceMotion ? 0 : .5,
						delay: index * .08
					},
					className: "rounded-3xl border border-border/80 bg-card/70 p-6 shadow-sm backdrop-blur-sm sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-primary font-medium",
											children: project.year
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											children: "·"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "capitalize",
											children: project.category
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
									children: project.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-sm font-medium text-primary",
									children: project.subtitle
								})
							] }), project.award && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.award })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-2xl border border-border/60 bg-background/60 p-5 sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground",
								children: "The Story & Engineering Challenge"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-foreground/90 sm:text-base",
								children: project.story
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground",
								children: "Key Architectural Highlights"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3",
								children: project.highlights.map((highlight, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-xl border border-border/60 bg-card/50 p-3 text-xs leading-relaxed text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-semibold text-foreground",
											children: [
												"0",
												idx + 1,
												"."
											]
										}),
										" ",
										highlight
									]
								}, idx))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col gap-4 border-t border-border/60 pt-5 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground mr-1",
									children: "Stack:"
								}), project.stack.map((tech, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-background/80 px-2 py-0.5 font-medium text-foreground border border-border/40",
										children: tech
									}), i < project.stack.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-1 text-muted-foreground/40" })]
								}, tech))]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: project.repos.map((repo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: repo.url,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-1.5 rounded-full border border-border/90 bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-accent",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-3.5 w-3.5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: repo.label }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3 text-muted-foreground" })
									]
								}, repo.url))
							})]
						})
					]
				}, project.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex items-center justify-between border-t border-border/60 pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about",
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors",
					children: "← About & Journey"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/experience",
					className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:underline",
					children: "Experience & Leadership →"
				})]
			})
		]
	}) });
}
//#endregion
export { ProjectsPage as component };
