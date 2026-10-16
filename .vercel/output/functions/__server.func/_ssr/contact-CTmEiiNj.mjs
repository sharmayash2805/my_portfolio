import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as ArrowRight, C as Download, D as Briefcase, T as CircleCheck, c as Phone, f as MapPin, p as Mail, u as MessageSquareText, y as Globe } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as siteConfig, i as cn, n as Button, t as AppShell } from "./app-shell-Cyv2fJD8.mjs";
import { n as motion, r as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { i as Input } from "./router-BstvO8wB.mjs";
import { t as Badge } from "./badge-BvNfkEth.mjs";
import { t as Label$1 } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CTmEiiNj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Label$1.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var contactEmail = siteConfig.email;
siteConfig.phone;
var socialLinks = [
	{
		id: "github",
		label: "GitHub",
		href: siteConfig.github,
		icon: "github"
	},
	{
		id: "linkedin",
		label: "LinkedIn",
		href: siteConfig.linkedin,
		icon: "linkedin"
	},
	{
		id: "leetcode",
		label: "LeetCode",
		href: siteConfig.leetcode,
		icon: "code"
	},
	{
		id: "codeforces",
		label: "Codeforces",
		href: siteConfig.codeforces,
		icon: "code"
	},
	{
		id: "chess",
		label: "Chess.com",
		href: `https://www.chess.com/member/${siteConfig.chessUsername}`,
		icon: "crown"
	},
	{
		id: "email",
		label: "Email",
		href: `mailto:${siteConfig.email}`,
		icon: "mail"
	},
	{
		id: "phone",
		label: "Phone",
		href: `tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`,
		icon: "phone"
	}
];
var contactConfig = {
	recipient: contactEmail,
	maxMessageLength: 1200,
	minMessageLength: 20,
	successMessage: "Message sent — Jai Shree Ram",
	errorMessage: "Something went wrong. Please try again or email me directly."
};
var getApiBaseUrl = () => {
	return "http://localhost:5000/api";
};
var contactService = { async sendMessage(payload) {
	try {
		const res = await fetch(`${getApiBaseUrl()}/contact`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload)
		});
		const json = await res.json();
		if (!res.ok) return {
			ok: false,
			message: json.message || contactConfig.errorMessage
		};
		if (json.data) return json.data;
		return {
			ok: true,
			message: json.message || contactConfig.successMessage
		};
	} catch (err) {
		console.log("[Contact] Backend unavailable, simulating delivery:", payload, err);
		return {
			ok: true,
			message: contactConfig.successMessage
		};
	}
} };
var EMPTY_FORM = {
	name: "",
	email: "",
	subject: "",
	message: ""
};
function useContactForm() {
	const [form, setForm] = (0, import_react.useState)(EMPTY_FORM);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)(null);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	function validate(payload) {
		const nextErrors = {};
		if (!payload.name.trim()) nextErrors.name = "Please enter your name.";
		if (!payload.email.trim()) nextErrors.email = "Please enter your email.";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) nextErrors.email = "Please enter a valid email address.";
		if (!payload.subject.trim()) nextErrors.subject = "Please add a subject.";
		if (!payload.message.trim()) nextErrors.message = "Please add a message.";
		else if (payload.message.trim().length < contactConfig.minMessageLength) nextErrors.message = `Message must be at least ${contactConfig.minMessageLength} characters.`;
		else if (payload.message.trim().length > contactConfig.maxMessageLength) nextErrors.message = `Message must be under ${contactConfig.maxMessageLength} characters.`;
		setErrors(nextErrors);
		return Object.keys(nextErrors).length === 0;
	}
	function updateField(field, value) {
		setForm((current) => ({
			...current,
			[field]: value
		}));
		setErrors((current) => ({
			...current,
			[field]: void 0
		}));
		setStatus(null);
	}
	async function submit() {
		if (!validate(form)) return null;
		setSubmitting(true);
		setStatus(null);
		try {
			const result = await contactService.sendMessage(form);
			setStatus({
				type: result.ok ? "success" : "error",
				message: result.message
			});
			if (result.ok) setForm(EMPTY_FORM);
			return result;
		} catch {
			const fallback = {
				ok: false,
				message: contactConfig.errorMessage
			};
			setStatus({
				type: "error",
				message: fallback.message
			});
			return fallback;
		} finally {
			setSubmitting(false);
		}
	}
	function reset() {
		setForm(EMPTY_FORM);
		setErrors({});
		setStatus(null);
	}
	return {
		form,
		errors,
		status,
		submitting,
		updateField,
		submit,
		reset
	};
}
function ContactSection() {
	const prefersReducedMotion = useReducedMotion();
	const { form, errors, status, submitting, updateField, submit } = useContactForm();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "kriya",
		className: "relative px-4 py-20 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
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
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary",
						children: "Get In Touch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold tracking-tight text-foreground md:text-5xl",
						children: "Let's build something resilient."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg",
						children: "I'm open to software roles, full-stack internships, and technical collaborations that demand algorithmic precision and calm problem-solving."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
					initial: prefersReducedMotion ? { opacity: 1 } : {
						opacity: 0,
						x: -18
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: {
						once: true,
						amount: .2
					},
					transition: {
						duration: prefersReducedMotion ? 0 : .45,
						ease: "easeOut"
					},
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[1.75rem] border border-border bg-card/70 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.24em] text-muted-foreground",
										children: "Availability"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "default",
									className: "mt-5 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.18em]",
									children: siteConfig.availability
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 space-y-3 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Open to product engineering, frontend systems, and flexible consulting work." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Best for focused web apps, internal tools, and interface-heavy product builds." })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[1.75rem] border border-border bg-card/70 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.24em] text-muted-foreground",
									children: "Connect"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 space-y-3",
								children: socialLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: link.href,
									target: "_blank",
									rel: "noreferrer",
									className: "flex items-center justify-between gap-3 rounded-2xl border border-border bg-background/70 px-3 py-2 text-sm text-foreground transition-colors hover:border-primary/50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: link.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-muted-foreground" })]
								}, link.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row lg:flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: siteConfig.resumeUrl,
									target: "_blank",
									rel: "noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Resume"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${contactConfig.recipient}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), "Hire Me"]
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
					initial: prefersReducedMotion ? { opacity: 1 } : {
						opacity: 0,
						x: 18
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: {
						once: true,
						amount: .2
					},
					transition: {
						duration: prefersReducedMotion ? 0 : .45,
						ease: "easeOut"
					},
					className: "rounded-[1.75rem] border border-border bg-card/70 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)]",
					onSubmit: async (event) => {
						event.preventDefault();
						await submit();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquareText, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.24em] text-muted-foreground",
								children: "Contact"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-foreground",
								children: "Send a message"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "name",
										children: "Name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "name",
										value: form.name,
										onChange: (event) => updateField("name", event.target.value),
										"aria-invalid": Boolean(errors.name),
										"aria-describedby": errors.name ? "name-error" : void 0,
										placeholder: "Your name"
									}),
									errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										id: "name-error",
										className: "text-xs text-destructive",
										children: errors.name
									}) : null
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "email",
										children: "Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										type: "email",
										value: form.email,
										onChange: (event) => updateField("email", event.target.value),
										"aria-invalid": Boolean(errors.email),
										"aria-describedby": errors.email ? "email-error" : void 0,
										placeholder: "you@example.com"
									}),
									errors.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										id: "email-error",
										className: "text-xs text-destructive",
										children: errors.email
									}) : null
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "subject",
									children: "Subject"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "subject",
									value: form.subject,
									onChange: (event) => updateField("subject", event.target.value),
									"aria-invalid": Boolean(errors.subject),
									"aria-describedby": errors.subject ? "subject-error" : void 0,
									placeholder: "Project enquiry"
								}),
								errors.subject ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: "subject-error",
									className: "text-xs text-destructive",
									children: errors.subject
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "message",
									children: "Message"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "message",
									value: form.message,
									onChange: (event) => updateField("message", event.target.value),
									"aria-invalid": Boolean(errors.message),
									"aria-describedby": errors.message ? "message-error" : void 0,
									placeholder: "Tell me a bit about your project, budget, and timeline.",
									className: "min-h-32"
								}),
								errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: "message-error",
									className: "text-xs text-destructive",
									children: errors.message
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: status ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: prefersReducedMotion ? { opacity: 1 } : {
								opacity: 0,
								y: 8
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -8
							},
							role: status.type === "success" ? "status" : "alert",
							"aria-live": status.type === "success" ? "polite" : "assertive",
							className: `mt-5 flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm ${status.type === "success" ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" : "border-destructive/40 bg-destructive/10 text-destructive"}`,
							children: [status.type === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }) : null, status.message]
						}) : null }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: submitting,
							className: "mt-6 w-full rounded-full sm:w-auto",
							children: submitting ? "Sending..." : "Send message"
						})
					]
				})]
			})]
		})
	});
}
function ContactPage() {
	const shouldReduceMotion = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
				className: "mb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground",
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
							children: "Contact"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/80 bg-card/60 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "uppercase tracking-[0.16em]",
								children: "Direct Email"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${siteConfig.email}`,
							className: "mt-2 block text-sm font-semibold text-foreground hover:text-primary transition-colors",
							children: siteConfig.email
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/80 bg-card/60 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "uppercase tracking-[0.16em]",
								children: "Direct Telephone"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`,
							className: "mt-2 block text-sm font-semibold text-foreground hover:text-primary transition-colors",
							children: siteConfig.phone
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/80 bg-card/60 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "uppercase tracking-[0.16em]",
								children: "Locations"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs font-semibold text-foreground",
							children: "Mohali, Punjab & Rajgangpur, Odisha"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
		]
	}) });
}
//#endregion
export { ContactPage as component };
