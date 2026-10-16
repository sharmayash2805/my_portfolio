import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, SunMedium, X, ArrowUpRight } from "lucide-react";

import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3 sm:px-6">
        {/* Zone 1: Single-element Brand Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-2.5 text-base font-bold tracking-tight text-foreground transition-opacity hover:opacity-90 whitespace-nowrap shrink-0"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 font-sanskrit text-sm font-bold text-primary">
            {siteConfig.monogram}
          </span>
          <span className="font-display tracking-tight text-foreground sm:text-lg">
            {siteConfig.name}
          </span>
        </Link>

        {/* Zone 2: Clean 4–5 single-line navigation links */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? currentPath === "/" : currentPath.startsWith(item.href);

            return (
              <Link
                key={item.id}
                to={item.href}
                className={`text-xs font-semibold uppercase tracking-[0.16em] transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-0.5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Theme Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Toggle light or dark theme"
            onClick={toggleTheme}
            className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground"
          >
            {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Link
            to="/contact"
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 whitespace-nowrap shrink-0"
          >
            Get in touch
          </Link>

          {/* Mobile Menu Trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full md:hidden"
                aria-label="Open mobile navigation"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-6">
              <SheetHeader className="text-left">
                <SheetTitle className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded bg-primary/15 font-sanskrit text-xs font-bold text-primary">
                    {siteConfig.monogram}
                  </span>
                  <span className="text-sm font-bold">{siteConfig.name}</span>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => {
                  const isActive =
                    item.href === "/" ? currentPath === "/" : currentPath.startsWith(item.href);

                  return (
                    <Link
                      key={item.id}
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-sm font-semibold tracking-wide py-1.5 transition-colors ${
                        isActive
                          ? "text-primary font-bold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-border/70 pt-6">
                <p className="font-sanskrit text-xs text-primary font-medium">
                  {siteConfig.mantra}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{siteConfig.currentLocation}</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
