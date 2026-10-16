import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  Users,
  Trophy,
  CheckCircle2,
  MapPin,
  Image as ImageIcon,
  Plus,
} from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";
import { SectionHeader } from "@/components/ui/section-header";
import { LightboxModal } from "@/components/ui/lightbox-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { awardsList, experienceList } from "@/data/resume";
import { convertGoogleDriveUrl, isValidImageUrl } from "@/utils/mediaUtils";
import type { AwardItem } from "@/types";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
});

export function ExperiencePage() {
  const shouldReduceMotion = useReducedMotion();

  // State for Lightbox Modal
  const [activeMedia, setActiveMedia] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
    description?: string;
  }>({
    isOpen: false,
    url: "",
    title: "",
    description: "",
  });

  // State for custom image link insertion by user
  const [customLinks, setCustomLinks] = useState<Record<string, string[]>>({});
  const [inputValues, setInputValues] = useState<Record<string, string>>({});
  const [activeAddId, setActiveAddId] = useState<string | null>(null);

  const internships = experienceList.filter((e) => e.type === "internship");
  const leaderships = experienceList.filter(
    (e) => e.type === "leadership" || e.type === "community",
  );

  const handleAddCustomImage = (itemId: string) => {
    const val = inputValues[itemId]?.trim();
    if (!val || !isValidImageUrl(val)) return;

    setCustomLinks((prev) => ({
      ...prev,
      [itemId]: [...(prev[itemId] || []), val],
    }));
    setInputValues((prev) => ({ ...prev, [itemId]: "" }));
    setActiveAddId(null);
  };

  const openLightbox = (url: string, title: string, description?: string) => {
    setActiveMedia({
      isOpen: true,
      url,
      title,
      description,
    });
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Breadcrumb & Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
        >
          <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-primary font-medium">Experience & Governance</span>
          </div>

          <SectionHeader
            eyebrow="Leadership, Internships & Recognitions"
            title="Corporate exposure, verified honors & chapter governance."
            description="From supply-chain IT analysis at Dalmia Bharat Group through national honors to leading the 500+ member IEEE student branch and mentoring IEEE CIS CUSB."
            align="left"
          />
        </motion.div>

        {/* 1. Corporate & Industrial Internship Section */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold text-foreground">Corporate & Industrial Internship</h3>
          </div>

          <div className="space-y-6">
            {internships.map((item) => {
              const allImages = [...(item.imageUrls || []), ...(customLinks[item.id] || [])];

              return (
                <div
                  key={item.id}
                  className="rounded-3xl border border-border/80 bg-card/70 p-6 shadow-sm sm:p-8"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-foreground sm:text-2xl">{item.role}</h4>
                      <p className="mt-1 text-base font-semibold text-primary">
                        {item.organisation}
                      </p>
                    </div>
                    <div className="flex flex-col text-xs text-muted-foreground sm:text-right">
                      <span className="font-mono text-primary font-medium">{item.period}</span>
                      <span className="mt-1 flex items-center gap-1 sm:justify-end">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                    {item.description}
                  </p>

                  <div className="mt-6 rounded-2xl border border-border/60 bg-background/50 p-5">
                    <h5 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Core Technical Deliverables & Methodology
                    </h5>
                    <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-1 h-3.5 w-3.5 text-primary shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Media / Images Gallery with Lightbox */}
                  <div className="mt-6 pt-5 border-t border-border/40">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-1.5">
                        <ImageIcon className="h-3.5 w-3.5 text-primary" />
                        <span>Media & Verification Images</span>
                      </span>

                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs rounded-full"
                        onClick={() => setActiveAddId(activeAddId === item.id ? null : item.id)}
                      >
                        <Plus className="h-3.5 w-3.5 mr-1" />
                        <span>Embed Drive / Image Link</span>
                      </Button>
                    </div>

                    {/* Input drawer if add triggered */}
                    {activeAddId === item.id && (
                      <div className="mb-4 flex items-center gap-2 rounded-xl border border-border bg-background p-2">
                        <Input
                          type="url"
                          placeholder="Paste image or Google Drive link..."
                          value={inputValues[item.id] || ""}
                          onChange={(e) =>
                            setInputValues((prev) => ({ ...prev, [item.id]: e.target.value }))
                          }
                          className="h-8 text-xs bg-transparent border-0 focus-visible:ring-0"
                        />
                        <Button
                          type="button"
                          size="sm"
                          className="h-8 px-3 text-xs rounded-lg shrink-0"
                          onClick={() => handleAddCustomImage(item.id)}
                        >
                          Save
                        </Button>
                      </div>
                    )}

                    {/* Thumbnails grid */}
                    <div className="flex flex-wrap gap-3">
                      {allImages.map((imgUrl, idx) => {
                        const displayUrl = convertGoogleDriveUrl(imgUrl);
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() =>
                              openLightbox(
                                imgUrl,
                                `${item.organisation} - Photo ${idx + 1}`,
                                item.description,
                              )
                            }
                            className="group relative h-20 w-28 overflow-hidden rounded-xl border border-border bg-zinc-900 shadow-sm transition-transform hover:scale-105"
                          >
                            <img
                              src={displayUrl}
                              alt={`${item.organisation} reference`}
                              className="h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-semibold">
                              Expand Preview
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5 text-xs">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/70 bg-background/80 px-2.5 py-1 font-medium text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Honors, Awards & Recognitions Grid (Placed immediately after internships) */}
        <div className="mt-16 border-t border-border/60 pt-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Honors, Awards & Recognitions</h3>
            </div>

            <Button
              type="button"
              variant="outline"
              size="sm"
              className="rounded-full text-xs"
              onClick={() => setActiveAddId(activeAddId === "award-custom" ? null : "award-custom")}
            >
              <Plus className="h-3.5 w-3.5 mr-1" />
              <span>Add Custom Award Link</span>
            </Button>
          </div>

          {activeAddId === "award-custom" && (
            <div className="mb-6 flex items-center gap-2 rounded-xl border border-border bg-background p-3">
              <Input
                type="url"
                placeholder="Paste certificate or Google Drive link..."
                value={inputValues["award-custom"] || ""}
                onChange={(e) =>
                  setInputValues((prev) => ({ ...prev, "award-custom": e.target.value }))
                }
                className="h-8 text-xs bg-transparent border-0 focus-visible:ring-0"
              />
              <Button
                type="button"
                size="sm"
                className="h-8 px-3 text-xs rounded-lg shrink-0"
                onClick={() => handleAddCustomImage("award-custom")}
              >
                Attach
              </Button>
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {awardsList.map((award: AwardItem) => {
              const awardImage = customLinks[award.id]?.[0] || award.imageUrl;
              const displayUrl = awardImage ? convertGoogleDriveUrl(awardImage) : null;

              return (
                <div
                  key={award.id}
                  className="group rounded-2xl border border-border/80 bg-card/60 p-5 flex flex-col justify-between shadow-sm transition-all hover:border-primary/50"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-primary font-medium">{award.year}</span>
                      {award.badge && (
                        <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                          {award.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="mt-3 text-base font-bold text-foreground">{award.title}</h4>
                    <p className="text-xs font-semibold text-muted-foreground mt-0.5">
                      {award.organisation}
                    </p>

                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                      {award.description}
                    </p>

                    {award.details && (
                      <ul className="mt-3 space-y-1 text-[11px] text-muted-foreground/90 border-t border-border/40 pt-2">
                        {award.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-primary">·</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Thumbnail Preview Button */}
                  {displayUrl && (
                    <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => openLightbox(awardImage!, award.title, award.description)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
                      >
                        <div className="h-8 w-12 overflow-hidden rounded-md border border-border bg-zinc-900 shrink-0">
                          <img
                            src={displayUrl}
                            alt={award.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span>Expand Certificate / Memory</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Community Leadership & IEEE Governance Section */}
        <div className="mt-16 border-t border-border/60 pt-12">
          <div className="flex items-center gap-2 mb-6">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold text-foreground">
              Community Leadership & IEEE Governance
            </h3>
          </div>

          <div className="space-y-8">
            {leaderships.map((item) => {
              const allImages = [...(item.imageUrls || []), ...(customLinks[item.id] || [])];

              return (
                <div
                  key={item.id}
                  className="rounded-3xl border border-border/80 bg-card/60 p-6 sm:p-8"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{item.role}</h4>
                      <p className="mt-0.5 text-sm font-semibold text-primary">
                        {item.organisation}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground sm:text-right">
                      <span className="font-mono text-primary font-medium">{item.period}</span>
                      <p className="mt-0.5">{item.location}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                    {item.description}
                  </p>

                  {item.subRoles && (
                    <div className="mt-5 rounded-2xl border border-border/60 bg-background/50 p-4">
                      <h5 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Leadership & Mentorship Progression
                      </h5>
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {item.subRoles.map((role, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between text-xs py-1.5 border-b border-border/40 last:border-0"
                          >
                            <span className="font-semibold text-foreground">{role.title}</span>
                            <span className="font-mono text-muted-foreground text-[11px]">
                              {role.period}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <ul className="mt-5 space-y-2 text-xs text-muted-foreground">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary font-bold">·</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Media / Image embedding & thumbnail lightbox */}
                  <div className="mt-6 pt-5 border-t border-border/40">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-1.5">
                        <ImageIcon className="h-3.5 w-3.5 text-primary" />
                        <span>Memories & Event Documentation</span>
                      </span>

                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs rounded-full"
                        onClick={() => setActiveAddId(activeAddId === item.id ? null : item.id)}
                      >
                        <Plus className="h-3.5 w-3.5 mr-1" />
                        <span>Embed Drive / Image Link</span>
                      </Button>
                    </div>

                    {activeAddId === item.id && (
                      <div className="mb-4 flex items-center gap-2 rounded-xl border border-border bg-background p-2">
                        <Input
                          type="url"
                          placeholder="Paste image or Google Drive link..."
                          value={inputValues[item.id] || ""}
                          onChange={(e) =>
                            setInputValues((prev) => ({ ...prev, [item.id]: e.target.value }))
                          }
                          className="h-8 text-xs bg-transparent border-0 focus-visible:ring-0"
                        />
                        <Button
                          type="button"
                          size="sm"
                          className="h-8 px-3 text-xs rounded-lg shrink-0"
                          onClick={() => handleAddCustomImage(item.id)}
                        >
                          Save
                        </Button>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      {allImages.map((imgUrl, idx) => {
                        const displayUrl = convertGoogleDriveUrl(imgUrl);
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() =>
                              openLightbox(
                                imgUrl,
                                `${item.organisation} - Memory ${idx + 1}`,
                                item.description,
                              )
                            }
                            className="group relative h-20 w-28 overflow-hidden rounded-xl border border-border bg-zinc-900 shadow-sm transition-transform hover:scale-105"
                          >
                            <img
                              src={displayUrl}
                              alt={`${item.organisation} event reference`}
                              className="h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-semibold">
                              Expand Preview
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5 text-xs">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/60 bg-background/70 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Lightbox Modal */}
        <LightboxModal
          isOpen={activeMedia.isOpen}
          onClose={() => setActiveMedia((prev) => ({ ...prev, isOpen: false }))}
          imageUrl={activeMedia.url}
          title={activeMedia.title}
          description={activeMedia.description}
        />

        {/* Bottom Navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-border/60 pt-8">
          <Link
            to="/projects"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:underline"
          >
            Get In Touch →
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
