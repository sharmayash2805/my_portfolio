import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as AppShell } from "./app-shell-Cyv2fJD8.mjs";
import { n as motion, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { t as SkillsSection } from "./skills-DFJm9BGg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills-D7A64Tkq.js
var import_jsx_runtime = require_jsx_runtime();
function SkillsPage() {
	const shouldReduceMotion = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14",
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
				className: "mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground",
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
						children: "Skills & Hobbies"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex items-center justify-between border-t border-border/60 pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/experience",
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors",
					children: "← Experience & Governance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:underline",
					children: "Get In Touch →"
				})]
			})
		]
	}) });
}
//#endregion
export { SkillsPage as component };
