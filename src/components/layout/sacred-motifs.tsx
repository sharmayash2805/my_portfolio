export function SacredMotifs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Subtle warm architectural hairline watermark */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.04] text-foreground dark:opacity-[0.06]"
        viewBox="0 0 1200 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="200"
          cy="240"
          r="180"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="200" cy="240" r="90" stroke="currentColor" strokeWidth="0.8" />
        <circle
          cx="1000"
          cy="200"
          r="220"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 6"
        />
        <circle cx="1000" cy="200" r="110" stroke="currentColor" strokeWidth="0.8" />
        <path d="M100 650 L 500 650 M 500 650 L 800 650" stroke="currentColor" strokeWidth="0.6" />
      </svg>
    </div>
  );
}
