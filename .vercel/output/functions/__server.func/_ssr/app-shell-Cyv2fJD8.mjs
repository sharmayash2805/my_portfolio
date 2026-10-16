import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { f as useRouterState, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as SunMedium, b as Github, d as Menu, k as ArrowUpRight, l as Moon, m as Linkedin, p as Mail, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, c as DialogTrigger, d as Slot, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-Cyv2fJD8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var themeConfig = {
	storageKey: "portfolio:theme",
	defaultTheme: "dark",
	motion: {
		fast: .25,
		base: .5,
		slow: .9,
		ease: [
			.22,
			1,
			.36,
			1
		],
		stagger: .08
	},
	motifOpacity: {
		faint: .04,
		soft: .06,
		visible: .08
	},
	breakpoints: {
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280
	}
};
var ThemeContext = (0, import_react.createContext)(void 0);
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)(themeConfig.defaultTheme);
	(0, import_react.useEffect)(() => {
		const preferredTheme = localStorage.getItem(themeConfig.storageKey) ?? themeConfig.defaultTheme;
		setThemeState(preferredTheme);
		document.documentElement.classList.toggle("dark", preferredTheme === "dark");
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem(themeConfig.storageKey, theme);
	}, [theme]);
	const setTheme = (nextTheme) => {
		setThemeState(nextTheme);
	};
	const toggleTheme = () => {
		setThemeState((prev) => prev === "dark" ? "light" : "dark");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			toggleTheme,
			setTheme
		},
		children
	});
}
function useTheme() {
	const context = (0, import_react.useContext)(ThemeContext);
	if (!context) throw new Error("useTheme must be used within ThemeProvider");
	return context;
}
var siteConfig = {
	name: "Yash Sharma",
	monogram: "यश",
	role: "Problem Solver · Systems Thinker · Algorithmic Builder",
	shortRole: "Systems & Algorithms",
	headline: "Problem Solver, Systems Thinker & Algorithmic Builder",
	tagline: "Building thoughtful, resilient systems across distributed architectures and modern engineering — informed by competitive programming and the strategic discipline of chess.",
	origin: "Rajgangpur, Odisha, India",
	currentLocation: "Mohali, Punjab, India",
	university: "Chandigarh University",
	degree: "Pursuing B.E. in Computer Science & Engineering",
	graduationYear: "2027",
	cgpa: "7.4 / 10.0",
	availability: "Open to Software Roles & Internships",
	email: "yashrgp@gmail.com",
	phone: "+91 773-562-4820",
	github: "https://github.com/sharmayash2805",
	linkedin: "https://www.linkedin.com/in/sharmayash2805",
	leetcode: "https://leetcode.com/u/_yash_2805",
	codeforces: "https://codeforces.com/profile/_yash_2805",
	chessUsername: "yash_2805",
	mantra: "यशो धर्मस्ततो जयः",
	mantraTranslation: "Where there is righteousness, there is victory"
};
var navItems = [
	{
		id: "home",
		label: "Overview",
		href: "/"
	},
	{
		id: "about",
		label: "About",
		href: "/about"
	},
	{
		id: "projects",
		label: "Projects",
		href: "/projects"
	},
	{
		id: "experience",
		label: "Experience",
		href: "/experience"
	},
	{
		id: "skills",
		label: "Skills & Hobbies",
		href: "/skills"
	},
	{
		id: "contact",
		label: "Contact",
		href: "/contact"
	}
];
function Footer() {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/80 bg-background/90",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-8 md:flex-row md:items-start md:justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-7 w-7 items-center justify-center rounded bg-primary/15 font-sanskrit text-xs font-bold text-primary",
									children: siteConfig.monogram
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base font-bold text-foreground",
									children: siteConfig.name
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs font-medium text-primary",
								children: siteConfig.headline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: siteConfig.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-sanskrit text-xs text-primary font-medium",
								children: siteConfig.mantra
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-foreground",
							children: "Chapters"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs",
							children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.href,
								className: "text-muted-foreground hover:text-foreground transition-colors",
								children: item.label
							}, item.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-foreground",
							children: "Connect"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: siteConfig.github,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-1.5 hover:text-foreground transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-3.5 w-3.5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "GitHub (sharmayash2805)" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3 text-muted-foreground" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: siteConfig.linkedin,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-1.5 hover:text-foreground transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-3.5 w-3.5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LinkedIn (sharmayash2805)" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3 text-muted-foreground" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${siteConfig.email}`,
									className: "inline-flex items-center gap-1.5 hover:text-foreground transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: siteConfig.email })]
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					currentYear,
					" Yash Sharma. Built with React & TypeScript."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Roots: Rajgangpur, Odisha" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Campus: Mohali, Punjab" })
					]
				})]
			})]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
function Header() {
	const { theme, toggleTheme } = useTheme();
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const currentPath = useRouterState().location.pathname;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 text-base font-bold tracking-tight text-foreground transition-opacity hover:opacity-90 whitespace-nowrap shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 font-sanskrit text-sm font-bold text-primary",
						children: siteConfig.monogram
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display tracking-tight text-foreground sm:text-lg",
						children: siteConfig.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 md:flex",
					children: navItems.map((item) => {
						const isActive = item.href === "/" ? currentPath === "/" : currentPath.startsWith(item.href);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className: `text-xs font-semibold uppercase tracking-[0.16em] transition-colors whitespace-nowrap shrink-0 ${isActive ? "text-primary border-b-2 border-primary pb-0.5" : "text-muted-foreground hover:text-foreground"}`,
							children: item.label
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon",
							"aria-label": "Toggle light or dark theme",
							onClick: toggleTheme,
							className: "h-9 w-9 rounded-full text-muted-foreground hover:text-foreground",
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SunMedium, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 whitespace-nowrap shrink-0",
							children: "Get in touch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
							open: mobileOpen,
							onOpenChange: setMobileOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									size: "icon",
									className: "h-9 w-9 rounded-full md:hidden",
									"aria-label": "Open mobile navigation",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
								side: "right",
								className: "w-72 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, {
										className: "text-left",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex h-7 w-7 items-center justify-center rounded bg-primary/15 font-sanskrit text-xs font-bold text-primary",
												children: siteConfig.monogram
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-bold",
												children: siteConfig.name
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8 flex flex-col gap-4",
										children: navItems.map((item) => {
											const isActive = item.href === "/" ? currentPath === "/" : currentPath.startsWith(item.href);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: item.href,
												onClick: () => setMobileOpen(false),
												className: `text-sm font-semibold tracking-wide py-1.5 transition-colors ${isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"}`,
												children: item.label
											}, item.id);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 border-t border-border/70 pt-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-sanskrit text-xs text-primary font-medium",
											children: siteConfig.mantra
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: siteConfig.currentLocation
										})]
									})
								]
							})]
						})
					]
				})
			]
		})
	});
}
function SacredMotifs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "absolute inset-0 h-full w-full opacity-[0.04] text-foreground dark:opacity-[0.06]",
			viewBox: "0 0 1200 900",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "240",
					r: "180",
					stroke: "currentColor",
					strokeWidth: "1",
					strokeDasharray: "4 4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "240",
					r: "90",
					stroke: "currentColor",
					strokeWidth: "0.8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "1000",
					cy: "200",
					r: "220",
					stroke: "currentColor",
					strokeWidth: "1",
					strokeDasharray: "6 6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "1000",
					cy: "200",
					r: "110",
					stroke: "currentColor",
					strokeWidth: "0.8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M100 650 L 500 650 M 500 650 L 800 650",
					stroke: "currentColor",
					strokeWidth: "0.6"
				})
			]
		})
	});
}
function ScrollProgress() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const updateProgress = () => {
			const scrollTop = window.scrollY;
			const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
			const nextProgress = documentHeight > 0 ? scrollTop / documentHeight * 100 : 0;
			setProgress(Math.min(100, Math.max(0, nextProgress)));
		};
		updateProgress();
		window.addEventListener("scroll", updateProgress, { passive: true });
		window.addEventListener("resize", updateProgress);
		return () => {
			window.removeEventListener("scroll", updateProgress);
			window.removeEventListener("resize", updateProgress);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 top-0 z-50 h-1 w-full bg-white/5",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full bg-gradient-to-r from-saffron via-gold to-primary transition-[width] duration-300 ease-out",
			style: { width: `${progress}%` }
		})
	});
}
function AppShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SacredMotifs, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { siteConfig as a, cn as i, Button as n, ThemeProvider as r, AppShell as t };
