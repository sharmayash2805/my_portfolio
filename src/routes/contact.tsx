import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";
import { ContactSection } from "@/components/sections/contact";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Breadcrumb */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-primary font-medium">Contact</span>
          </div>
        </motion.div>

        {/* Contact Info Strip */}
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border/80 bg-card/60 p-4">
            <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <span className="uppercase tracking-[0.16em]">Direct Email</span>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 block text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card/60 p-4">
            <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span className="uppercase tracking-[0.16em]">Direct Telephone</span>
            </div>
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="mt-2 block text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              {siteConfig.phone}
            </a>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card/60 p-4">
            <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="uppercase tracking-[0.16em]">Locations</span>
            </div>
            <p className="mt-2 text-xs font-semibold text-foreground">
              Mohali, Punjab & Rajgangpur, Odisha
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <ContactSection />
      </div>
    </AppShell>
  );
}
