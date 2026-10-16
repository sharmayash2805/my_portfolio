import { useEffect } from "react";
import { X, ExternalLink, Image as ImageIcon } from "lucide-react";
import { convertGoogleDriveUrl } from "@/utils/mediaUtils";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title?: string;
  description?: string;
  rawUrl?: string;
}

export function LightboxModal({
  isOpen,
  onClose,
  imageUrl,
  title,
  description,
  rawUrl,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative flex max-h-[90vh] max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/90 px-5 py-3 text-white">
          <div className="flex items-center gap-2 truncate pr-4">
            <ImageIcon className="h-4 w-4 text-primary shrink-0" />
            <span className="font-semibold text-sm truncate">{title || "Media Preview"}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {linkUrl && (
              <a
                href={linkUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors"
                title="Open original media link"
              >
                <span>Original Link</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Main Image Container */}
        <div className="relative flex min-h-[300px] flex-1 items-center justify-center overflow-auto bg-black p-4">
          <img
            src={displayUrl}
            alt={title || "Expanded image preview"}
            className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-lg"
            onError={(e) => {
              // Fallback if image fails to load
              (e.currentTarget as HTMLElement).style.display = "none";
              const parent = e.currentTarget.parentElement;
              if (parent && !parent.querySelector(".fallback-error")) {
                const errDiv = document.createElement("div");
                errDiv.className =
                  "fallback-error text-center p-8 text-zinc-400 text-sm flex flex-col items-center gap-3";
                errDiv.innerHTML = `<div class="p-3 bg-zinc-900 rounded-full text-amber-400"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg></div><p>Unable to load direct image preview. The link may require public access permissions.</p>`;
                parent.appendChild(errDiv);
              }
            }}
          />
        </div>

        {/* Footer Caption */}
        {description && (
          <div className="border-t border-zinc-800 bg-zinc-900/90 px-5 py-3 text-xs text-zinc-300">
            <p className="leading-relaxed">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
