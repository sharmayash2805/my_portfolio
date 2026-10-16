import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createFileRoute, b as useRouter, d as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { E as Building2, S as ExternalLink, T as CircleCheck, f as MapPin, g as Image, i as Trophy, r as Users, s as Plus, t as X } from "../_libs/lucide-react.mjs";
import { a as siteConfig, i as cn, n as Button, r as ThemeProvider, t as AppShell } from "./app-shell-Cyv2fJD8.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as motion, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { i as __exportAll } from "./server-QPdmcZq3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BstvO8wB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var seoConfig = {
	title: `${siteConfig.name} — ${siteConfig.role}`,
	description: "Official portfolio of Yash Sharma: analytical problem solver, systems builder, former IEEE CUSB Chairperson, and competitive chess enthusiast.",
	siteUrl: "https://yashsharma.dev",
	ogType: "website",
	twitterCard: "summary_large_image"
};
var styles_default = "/assets/styles-GF7CiyQ2.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: seoConfig.title },
			{
				name: "description",
				content: seoConfig.description
			},
			{
				name: "author",
				content: siteConfig.name
			},
			{
				name: "theme-color",
				content: "#0f172a"
			},
			{
				property: "og:title",
				content: seoConfig.title
			},
			{
				property: "og:description",
				content: seoConfig.description
			},
			{
				property: "og:type",
				content: seoConfig.ogType
			},
			{
				property: "og:site_name",
				content: siteConfig.name
			},
			{
				property: "og:url",
				content: seoConfig.siteUrl
			},
			{
				property: "og:image",
				content: "/favicon.svg"
			},
			{
				name: "twitter:card",
				content: seoConfig.twitterCard
			},
			{
				name: "twitter:title",
				content: "Yash Sharma"
			},
			{
				name: "twitter:description",
				content: seoConfig.description
			},
			{
				name: "twitter:image",
				content: "/favicon.svg"
			},
			{
				name: "twitter:creator",
				content: "@yash_sharma"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "canonical",
				href: seoConfig.siteUrl
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	}) });
}
var $$splitComponentImporter$5 = () => import("./routes-BJUsKEF1.mjs");
var Route$6 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./about-FpRJ6iUV.mjs");
var Route$5 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./chess-D-xHQc3f.mjs");
var Route$4 = createFileRoute("/chess")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./contact-CTmEiiNj.mjs");
var Route$3 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
function SectionHeader({ eyebrow, title, description, align = "left", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs font-medium uppercase tracking-[0.24em] text-primary",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-bold tracking-tight text-foreground md:text-5xl",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base text-muted-foreground md:text-lg",
				children: description
			}) : null
		]
	});
}
/**
* Media utility for converting Google Drive links and sanitizing image URLs
*/
function convertGoogleDriveUrl(url) {
	if (!url || typeof url !== "string") return "";
	const trimmed = url.trim();
	const fileDMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
	if (fileDMatch && fileDMatch[1]) return `https://lh3.googleusercontent.com/d/${fileDMatch[1]}`;
	const idMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
	if (idMatch && idMatch[1] && trimmed.includes("drive.google.com")) return `https://lh3.googleusercontent.com/d/${idMatch[1]}`;
	return trimmed;
}
function isValidImageUrl(url) {
	if (!url || typeof url !== "string") return false;
	try {
		const parsed = new URL(url);
		return parsed.protocol === "http:" || parsed.protocol === "https:";
	} catch {
		return false;
	}
}
function LightboxModal({ isOpen, onClose, imageUrl, title, description, rawUrl }) {
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onClose();
		};
		if (isOpen) {
			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", handleKeyDown);
		}
		return () => {
			document.body.style.overflow = "unset";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);
	if (!isOpen || !imageUrl) return null;
	const displayUrl = convertGoogleDriveUrl(imageUrl);
	const linkUrl = rawUrl || imageUrl;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-200",
		onClick: onClose,
		"aria-modal": "true",
		role: "dialog",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex max-h-[90vh] max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 shadow-2xl",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-zinc-800 bg-zinc-900/90 px-5 py-3 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 truncate pr-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-sm truncate",
							children: title || "Media Preview"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 shrink-0",
						children: [linkUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: linkUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors",
							title: "Open original media link",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Original Link" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors",
							"aria-label": "Close modal",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex min-h-[300px] flex-1 items-center justify-center overflow-auto bg-black p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: displayUrl,
						alt: title || "Expanded image preview",
						className: "max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-lg",
						onError: (e) => {
							e.currentTarget.style.display = "none";
							const parent = e.currentTarget.parentElement;
							if (parent && !parent.querySelector(".fallback-error")) {
								const errDiv = document.createElement("div");
								errDiv.className = "fallback-error text-center p-8 text-zinc-400 text-sm flex flex-col items-center gap-3";
								errDiv.innerHTML = `<div class="p-3 bg-zinc-900 rounded-full text-amber-400"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg></div><p>Unable to load direct image preview. The link may require public access permissions.</p>`;
								parent.appendChild(errDiv);
							}
						}
					})
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-zinc-800 bg-zinc-900/90 px-5 py-3 text-xs text-zinc-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "leading-relaxed",
						children: description
					})
				})
			]
		})
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var resumeSummary = "Analytical problem solver and systems builder with strong fundamentals in Data Structures & Algorithms, Object-Oriented Programming, and Databases, complemented by practical engineering experience across Web3 dApps, enterprise logistics analysis, and distributed system design. Proven leader and communicator, having led a 500+ member IEEE student chapter to multiple national and university-level recognitions.";
var educationList = [
	{
		degree: "B.E. in Computer Science and Engineering",
		institution: "Chandigarh University",
		location: "Mohali, Punjab",
		period: "July 2023 — May 2027",
		grade: "CGPA: 7.4 / 10.0",
		highlights: ["Former Chairperson @ IEEE CUSB (Main Branch) & Mentor @ IEEE CIS CUSB", "Specializing in Distributed Systems, System Design, and Modern Web Architectures"]
	},
	{
		degree: "Senior Secondary (Class XII)",
		institution: "Lal Bahadur Shastri Sr. Sec School",
		location: "Kota, Rajasthan",
		period: "April 2022 — March 2023",
		highlights: ["Science & Mathematics focus with intensive competitive examination preparation"]
	},
	{
		degree: "Secondary Education (Class X)",
		institution: "Lal Bahadur Shastri Sr. Sec School",
		location: "Kota, Rajasthan",
		period: "April 2020 — March 2021",
		highlights: ["Academic excellence with foundation in computer science and mathematics"]
	},
	{
		degree: "Middle Schooling (Class VIII)",
		institution: "Birla School, Pilani",
		location: "Pilani, Rajasthan",
		period: "March 2018 — April 2019",
		highlights: ["Foundational residential schooling fostering discipline and independent thinking"]
	}
];
var experienceList = [
	{
		id: "dalmia-intern",
		organisation: "Dalmia Bharat Group (DCBL)",
		role: "Intern — IT & Logistics Analysis",
		type: "internship",
		location: "Rajgangpur, Sundargarh, Odisha",
		period: "May 2025 — July 2025 (3 mos)",
		description: "Analyzed and mapped SAP ERP–TMS (Blue Yonder) integration touchpoints across core supply chain workflows to identify process inefficiencies.",
		bullets: [
			"Mapped and analyzed integration touchpoints across 3 core workflows: order creation, dispatch management, and transit tracking.",
			"Applied structured, requirements-driven analysis to diagnose bottlenecks and propose data-backed operational improvements.",
			"Authored a comprehensive 51-page technical audit report for executive stakeholder review."
		],
		tags: [
			"SAP ERP",
			"Blue Yonder TMS",
			"Logistics Analysis",
			"System Integration",
			"Data Analytics"
		],
		imageUrls: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"]
	},
	{
		id: "ieee-cusb-chair",
		organisation: "IEEE Chandigarh University Student Branch (CUSB)",
		role: "Chairperson (Main Branch) & Executive Leadership",
		type: "leadership",
		location: "Mohali, Punjab",
		period: "July 2024 — Present (2 yrs 4 mos)",
		description: "Served across multiple executive leadership tiers for the Best Student Branch at Chandigarh University, managing a 500+ member community.",
		bullets: [
			"Chairperson, IEEE CUSB Main Branch (May 2026 – July 2026): Directed strategic alignment and institutional partnerships.",
			"Executive Member, IEEE CUSB (September 2024 – July 2026): Coordinated cross-departmental operations and student initiatives.",
			"Managed day-to-day operations for 500+ members through consistent communication and stakeholder alignment.",
			"Worked across 3 executive divisions to plan and deliver 15+ events, including major hackathons and industrial visits.",
			"Mentored 50+ junior students in full-stack development and Java fundamentals, with documented improvement in their project outcomes."
		],
		tags: [
			"Leadership",
			"Community Management",
			"Event Planning",
			"Technical Mentorship",
			"Stakeholder Alignment"
		],
		subRoles: [
			{
				title: "Chairperson, IEEE CUSB Main Branch",
				period: "May 2026 — July 2026"
			},
			{
				title: "Executive Member, IEEE CUSB",
				period: "September 2024 — July 2026"
			},
			{
				title: "Student Member",
				period: "July 2024 — Present"
			}
		],
		imageUrls: ["https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"]
	},
	{
		id: "ieee-cis-cusb",
		organisation: "IEEE Computational Intelligence Society (CIS) CUSB",
		role: "Mentor, Chairperson & Executive Leadership",
		type: "leadership",
		location: "Mohali, Punjab",
		period: "July 2024 — Present",
		description: "Led and currently mentor the specialized Computational Intelligence Society chapter at Chandigarh University through growth, technical workshops, and national competitions.",
		bullets: [
			"Mentor, IEEE CIS CUSB (July 2026 – Present): Guiding executive officers, advisory oversight, and technical direction for student project cohorts.",
			"Chairperson (August 2025 – May 2026): Led the society to winning Best Chapter at CU during IEEE Excellence Awards 2.0.",
			"Vice Chairperson (December 2024 – August 2025): Spearheaded technical hackathons, guest lectures, and AI/ML project cohorts.",
			"Public Relations Lead (September 2024 – December 2024): Drove community outreach and digital branding across university networks."
		],
		tags: [
			"Technical Mentorship",
			"Computational Intelligence",
			"AI/ML Workshops",
			"Chapter Governance",
			"Public Relations"
		],
		subRoles: [
			{
				title: "Mentor @ IEEE CIS CUSB",
				period: "July 2026 — Present"
			},
			{
				title: "Chairperson",
				period: "August 2025 — May 2026"
			},
			{
				title: "Vice Chairperson",
				period: "December 2024 — August 2025"
			},
			{
				title: "Public Relation Lead",
				period: "September 2024 — December 2024"
			},
			{
				title: "Student Member",
				period: "July 2024 — Present"
			}
		],
		imageUrls: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"]
	}
];
var awardsList = [
	{
		id: "icp-wchl",
		title: "Top 3 Nationally (Round 1)",
		organisation: "ICP WCHL 2025",
		year: "August 2025",
		description: "Secured 3rd Position nationally among 700+ competing collegiate teams with InheritNext; advanced to regional round and earned a $200 award.",
		badge: "National Top 3",
		details: ["Evaluated by DFINITY & ICP developer jury on canister Rust architecture and automated heartbeat dead-man switch.", "Competed against 700+ collegiate developer teams across India."],
		imageUrl: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: "pinnacle-command",
		title: "Pinnacle of Command Award",
		organisation: "IEEE Excellence Awards 2.0",
		year: "May 2026",
		description: "Honored for exceptional executive chapter leadership, guiding IEEE CUSB to Best Chapter at Chandigarh University.",
		badge: "Executive Leadership",
		details: ["Recognized for chapter governance, event execution velocity, and student member engagement metrics.", "Awarded during IEEE Annual Student Branch convocation."],
		imageUrl: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: "best-branch",
		title: "Best Student Branch 2025–26",
		organisation: "Chandigarh University IEEE",
		year: "May 2026",
		description: "Led IEEE CUSB through a transformative tenure, clinching the overall Best Student Branch trophy across the university.",
		badge: "University Honor",
		details: ["Organized 15+ high-impact technical bootcamps, industrial visits, and national hackathons.", "Maintained an active community of 500+ student members."],
		imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: "change-maker",
		title: "Change Maker Award",
		organisation: "Chandigarh University",
		year: "April 2026",
		description: "Recognized for technical leadership and impactful community initiatives supporting a 500+ student body.",
		badge: "Community Impact",
		details: ["Fostered open-source culture and technical peer mentorship programs.", "Bridged student developers with industrial opportunities and research projects."],
		imageUrl: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: "cu-project-expo",
		title: "1st Place Winner — CU Project Expo",
		organisation: "Chandigarh University",
		year: "April 2026",
		description: "Secured First Place for the Green Credit Program (GCP) Automation platform, automating Ministry of Environment, Forest and Climate Change (MoEFCC) workflows.",
		badge: "1st Place",
		details: ["Designed parcel geometry mapping and automated air/water credit verification pipelines.", "Judged on technical implementation, geospatial map rendering, and policy alignment."],
		imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: "ieee-day-global",
		title: "Global Winner — IEEE Day 2025 Photo Contest",
		organisation: "IEEE Global",
		year: "October 2025",
		description: "Led IEEE CUSB to world champion status in the global competition representing the student branch internationally.",
		badge: "World Champion",
		details: ["Global competition judged by IEEE international committee among hundreds of global chapters."],
		imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: "student-volunteer",
		title: "Outstanding Student Volunteer Award",
		organisation: "IEEE Student Activities Committee",
		year: "2025",
		description: "Awarded for dedicated volunteer contributions toward organizing national workshops, student hackathons, and technical bootcamps.",
		badge: "Volunteer Award",
		details: ["Recognized for 100+ hours of community volunteer service and technical event coordination."],
		imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: "vivibha",
		title: "VIVIBHA 2047 Finalist",
		organisation: "National Research Paper Writing Competition",
		year: "August 2024",
		description: "Qualified as a national finalist in technical research and academic paper writing on India's technological future.",
		badge: "National Finalist",
		details: ["Authored research synthesis on distributed systems and digital public infrastructure."],
		imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
	}
];
var Route$2 = createFileRoute("/experience")({ component: ExperiencePage });
function ExperiencePage() {
	const shouldReduceMotion = useReducedMotion();
	const [activeMedia, setActiveMedia] = (0, import_react.useState)({
		isOpen: false,
		url: "",
		title: "",
		description: ""
	});
	const [customLinks, setCustomLinks] = (0, import_react.useState)({});
	const [inputValues, setInputValues] = (0, import_react.useState)({});
	const [activeAddId, setActiveAddId] = (0, import_react.useState)(null);
	const internships = experienceList.filter((e) => e.type === "internship");
	const leaderships = experienceList.filter((e) => e.type === "leadership" || e.type === "community");
	const handleAddCustomImage = (itemId) => {
		const val = inputValues[itemId]?.trim();
		if (!val || !isValidImageUrl(val)) return;
		setCustomLinks((prev) => ({
			...prev,
			[itemId]: [...prev[itemId] || [], val]
		}));
		setInputValues((prev) => ({
			...prev,
			[itemId]: ""
		}));
		setActiveAddId(null);
	};
	const openLightbox = (url, title, description) => {
		setActiveMedia({
			isOpen: true,
			url,
			title,
			description
		});
	};
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
							children: "Experience & Governance"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Leadership, Internships & Recognitions",
					title: "Corporate exposure, verified honors & chapter governance.",
					description: "From supply-chain IT analysis at Dalmia Bharat Group through national honors to leading the 500+ member IEEE student branch and mentoring IEEE CIS CUSB.",
					align: "left"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-foreground",
						children: "Corporate & Industrial Internship"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-6",
					children: internships.map((item) => {
						const allImages = [...item.imageUrls || [], ...customLinks[item.id] || []];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border/80 bg-card/70 p-6 shadow-sm sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xl font-bold text-foreground sm:text-2xl",
										children: item.role
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-base font-semibold text-primary",
										children: item.organisation
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col text-xs text-muted-foreground sm:text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-primary font-medium",
											children: item.period
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-1 flex items-center gap-1 sm:justify-end",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), item.location]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-relaxed text-foreground/90",
									children: item.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 rounded-2xl border border-border/60 bg-background/50 p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
										children: "Core Technical Deliverables & Methodology"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 space-y-2.5 text-sm text-muted-foreground",
										children: item.bullets.map((bullet, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 h-3.5 w-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: bullet })]
										}, i))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 pt-5 border-t border-border/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Media & Verification Images" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												type: "button",
												variant: "ghost",
												size: "sm",
												className: "h-7 text-xs rounded-full",
												onClick: () => setActiveAddId(activeAddId === item.id ? null : item.id),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 mr-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Embed Drive / Image Link" })]
											})]
										}),
										activeAddId === item.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex items-center gap-2 rounded-xl border border-border bg-background p-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "url",
												placeholder: "Paste image or Google Drive link...",
												value: inputValues[item.id] || "",
												onChange: (e) => setInputValues((prev) => ({
													...prev,
													[item.id]: e.target.value
												})),
												className: "h-8 text-xs bg-transparent border-0 focus-visible:ring-0"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												type: "button",
												size: "sm",
												className: "h-8 px-3 text-xs rounded-lg shrink-0",
												onClick: () => handleAddCustomImage(item.id),
												children: "Save"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-3",
											children: allImages.map((imgUrl, idx) => {
												const displayUrl = convertGoogleDriveUrl(imgUrl);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => openLightbox(imgUrl, `${item.organisation} - Photo ${idx + 1}`, item.description),
													className: "group relative h-20 w-28 overflow-hidden rounded-xl border border-border bg-zinc-900 shadow-sm transition-transform hover:scale-105",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: displayUrl,
														alt: `${item.organisation} reference`,
														className: "h-full w-full object-cover transition-opacity group-hover:opacity-90"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-semibold",
														children: "Expand Preview"
													})]
												}, idx);
											})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 flex flex-wrap gap-1.5 text-xs",
									children: item.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md border border-border/70 bg-background/80 px-2.5 py-1 font-medium text-foreground",
										children: tag
									}, tag))
								})
							]
						}, item.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 border-t border-border/60 pt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-foreground",
								children: "Honors, Awards & Recognitions"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "rounded-full text-xs",
							onClick: () => setActiveAddId(activeAddId === "award-custom" ? null : "award-custom"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 mr-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add Custom Award Link" })]
						})]
					}),
					activeAddId === "award-custom" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center gap-2 rounded-xl border border-border bg-background p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "url",
							placeholder: "Paste certificate or Google Drive link...",
							value: inputValues["award-custom"] || "",
							onChange: (e) => setInputValues((prev) => ({
								...prev,
								"award-custom": e.target.value
							})),
							className: "h-8 text-xs bg-transparent border-0 focus-visible:ring-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "sm",
							className: "h-8 px-3 text-xs rounded-lg shrink-0",
							onClick: () => handleAddCustomImage("award-custom"),
							children: "Attach"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: awardsList.map((award) => {
							const awardImage = customLinks[award.id]?.[0] || award.imageUrl;
							const displayUrl = awardImage ? convertGoogleDriveUrl(awardImage) : null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group rounded-2xl border border-border/80 bg-card/60 p-5 flex flex-col justify-between shadow-sm transition-all hover:border-primary/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-primary font-medium",
											children: award.year
										}), award.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-semibold text-primary",
											children: award.badge
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "mt-3 text-base font-bold text-foreground",
										children: award.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-muted-foreground mt-0.5",
										children: award.organisation
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2.5 text-xs leading-relaxed text-muted-foreground",
										children: award.description
									}),
									award.details && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 space-y-1 text-[11px] text-muted-foreground/90 border-t border-border/40 pt-2",
										children: award.details.map((detail, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary",
												children: "·"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: detail })]
										}, idx))
									})
								] }), displayUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 pt-3 border-t border-border/40 flex items-center justify-between",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => openLightbox(awardImage, award.title, award.description),
										className: "inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-8 w-12 overflow-hidden rounded-md border border-border bg-zinc-900 shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: displayUrl,
												alt: award.title,
												className: "h-full w-full object-cover"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Expand Certificate / Memory" })]
									})
								})]
							}, award.id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 border-t border-border/60 pt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-foreground",
						children: "Community Leadership & IEEE Governance"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-8",
					children: leaderships.map((item) => {
						const allImages = [...item.imageUrls || [], ...customLinks[item.id] || []];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border/80 bg-card/60 p-6 sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xl font-bold text-foreground",
										children: item.role
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-sm font-semibold text-primary",
										children: item.organisation
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground sm:text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-primary font-medium",
											children: item.period
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5",
											children: item.location
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-relaxed text-foreground/80",
									children: item.description
								}),
								item.subRoles && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 rounded-2xl border border-border/60 bg-background/50 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
										children: "Leadership & Mentorship Progression"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 grid gap-2 sm:grid-cols-2",
										children: item.subRoles.map((role, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-xs py-1.5 border-b border-border/40 last:border-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-foreground",
												children: role.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-muted-foreground text-[11px]",
												children: role.period
											})]
										}, i))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-2 text-xs text-muted-foreground",
									children: item.bullets.map((bullet, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary font-bold",
											children: "·"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: bullet })]
									}, idx))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 pt-5 border-t border-border/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Memories & Event Documentation" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												type: "button",
												variant: "ghost",
												size: "sm",
												className: "h-7 text-xs rounded-full",
												onClick: () => setActiveAddId(activeAddId === item.id ? null : item.id),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 mr-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Embed Drive / Image Link" })]
											})]
										}),
										activeAddId === item.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex items-center gap-2 rounded-xl border border-border bg-background p-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "url",
												placeholder: "Paste image or Google Drive link...",
												value: inputValues[item.id] || "",
												onChange: (e) => setInputValues((prev) => ({
													...prev,
													[item.id]: e.target.value
												})),
												className: "h-8 text-xs bg-transparent border-0 focus-visible:ring-0"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												type: "button",
												size: "sm",
												className: "h-8 px-3 text-xs rounded-lg shrink-0",
												onClick: () => handleAddCustomImage(item.id),
												children: "Save"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-3",
											children: allImages.map((imgUrl, idx) => {
												const displayUrl = convertGoogleDriveUrl(imgUrl);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => openLightbox(imgUrl, `${item.organisation} - Memory ${idx + 1}`, item.description),
													className: "group relative h-20 w-28 overflow-hidden rounded-xl border border-border bg-zinc-900 shadow-sm transition-transform hover:scale-105",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: displayUrl,
														alt: `${item.organisation} event reference`,
														className: "h-full w-full object-cover transition-opacity group-hover:opacity-90"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-semibold",
														children: "Expand Preview"
													})]
												}, idx);
											})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 flex flex-wrap gap-1.5 text-xs",
									children: item.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md border border-border/60 bg-background/70 px-2 py-0.5 text-[11px] font-medium text-muted-foreground",
										children: tag
									}, tag))
								})
							]
						}, item.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LightboxModal, {
				isOpen: activeMedia.isOpen,
				onClose: () => setActiveMedia((prev) => ({
					...prev,
					isOpen: false
				})),
				imageUrl: activeMedia.url,
				title: activeMedia.title,
				description: activeMedia.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex items-center justify-between border-t border-border/60 pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/projects",
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors",
					children: "← Projects"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:underline",
					children: "Get In Touch →"
				})]
			})
		]
	}) });
}
var $$splitComponentImporter$1 = () => import("./projects-CqgUuH36.mjs");
var Route$1 = createFileRoute("/projects")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./skills-D7A64Tkq.mjs");
var Route = createFileRoute("/skills")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	ChessRoute: Route$4.update({
		id: "/chess",
		path: "/chess",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	ExperienceRoute: Route$2.update({
		id: "/experience",
		path: "/experience",
		getParentRoute: () => Route$7
	}),
	ProjectsRoute: Route$1.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$7
	}),
	SkillsRoute: Route.update({
		id: "/skills",
		path: "/skills",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { SectionHeader as a, Input as i, educationList as n, resumeSummary as r, router_exports as t };
