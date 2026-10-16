import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as AppShell } from "./app-shell-Cyv2fJD8.mjs";
import { t as SkillsSection } from "./skills-DFJm9BGg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chess-D-xHQc3f.js
var import_jsx_runtime = require_jsx_runtime();
function ChessPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about",
					className: "hover:text-foreground transition-colors",
					children: "Skills & Hobbies"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					children: "/"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary font-medium",
					children: "Chess"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsSection, {})]
	}) });
}
//#endregion
export { ChessPage as component };
