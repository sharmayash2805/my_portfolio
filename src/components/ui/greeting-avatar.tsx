import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { siteConfig } from "@/config/site";

interface CaptionSegment {
  id: number;
  text: string;
  start: number; // seconds
  end: number;
}

const GREETING_TEXT =
  "Namaste! I'm Yash Sharma — a software developer and analytical problem solver from India. Welcome to my portfolio. Explore my projects, journey, and chess ledger below.";

const CAPTIONS: CaptionSegment[] = [
  { id: 1, text: "Namaste!", start: 0, end: 1.4 },
  { id: 2, text: "I'm Yash Sharma —", start: 1.4, end: 3.2 },
  {
    id: 3,
    text: "a software developer & analytical problem solver from India.",
    start: 3.2,
    end: 7.2,
  },
  { id: 4, text: "Welcome to my portfolio.", start: 7.2, end: 9.6 },
  {
    id: 5,
    text: "Explore my projects, journey, and chess ledger below.",
    start: 9.6,
    end: 13.5,
  },
];

const TOTAL_DURATION = 13.5;

export function GreetingAvatar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  const timerRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const speechUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Play a pleasant warm introductory chime using Web Audio API
  const playIntroChime = useCallback(() => {
    if (isMuted || typeof window === "undefined") return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContextRef.current || audioContextRef.current.state === "closed") {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        void ctx.resume();
      }

      // Chord: F3, C4, F4, A4 (warm, grounding)
      const freqs = [174.61, 261.63, 349.23, 440.0];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.04 / (idx + 1), ctx.currentTime + 0.08 + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.04);
        osc.stop(ctx.currentTime + 2.5);
      });
    } catch (e) {
      console.warn("Audio chime initialization notice:", e);
    }
  }, [isMuted]);

  // Handle browser speech synthesis for vocal greeting
  const startSpeech = useCallback(
    (offsetSeconds = 0) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

      window.speechSynthesis.cancel();
      if (isMuted) return;

      const utterance = new SpeechSynthesisUtterance(GREETING_TEXT);
      speechUtteranceRef.current = utterance;

      // Prefer Indian English voice if installed
      const voices = window.speechSynthesis.getVoices();
      const indianVoice = voices.find(
        (v) =>
          v.lang.toLowerCase().includes("en-in") ||
          v.name.toLowerCase().includes("india") ||
          v.lang.toLowerCase().includes("hi-in"),
      );
      if (indianVoice) {
        utterance.voice = indianVoice;
      }
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      utterance.onend = () => {
        // Will be naturally finished by progress timer
      };

      utterance.onerror = () => {
        // Fallback to purely timer-driven kinetic captions
      };

      // If resuming midway, adjust text if possible or start fresh
      if (offsetSeconds < 0.5) {
        window.speechSynthesis.speak(utterance);
      } else {
        window.speechSynthesis.speak(utterance);
      }
    },
    [isMuted],
  );

  const stopAudio = useCallback(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  }, []);

  const playFrom = useCallback(
    (startTimeSec: number) => {
      stopAudio();
      setIsPlaying(true);
      setHasPlayedOnce(true);
      setCurrentTime(startTimeSec);

      if (startTimeSec === 0) {
        playIntroChime();
        startSpeech(0);
      } else {
        startSpeech(startTimeSec);
      }

      const startTimestamp = Date.now() - startTimeSec * 1000;

      timerRef.current = window.setInterval(() => {
        const elapsed = (Date.now() - startTimestamp) / 1000;
        if (elapsed >= TOTAL_DURATION) {
          setCurrentTime(TOTAL_DURATION);
          stopAudio();
        } else {
          setCurrentTime(elapsed);
        }
      }, 50);
    },
    [playIntroChime, startSpeech, stopAudio],
  );

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      stopAudio();
    } else {
      const startAt = currentTime >= TOTAL_DURATION ? 0 : currentTime;
      playFrom(startAt);
    }
  }, [currentTime, isPlaying, playFrom, stopAudio]);

  const restart = useCallback(() => {
    playFrom(0);
  }, [playFrom]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      if (next && typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      return next;
    });
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Determine current active caption segment
  const activeSegment =
    CAPTIONS.find((cap) => currentTime >= cap.start && currentTime <= cap.end) ??
    (currentTime >= TOTAL_DURATION ? CAPTIONS[CAPTIONS.length - 1] : CAPTIONS[0]);

  const progressPercent = Math.min(100, (currentTime / TOTAL_DURATION) * 100);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-4 shadow-sm backdrop-blur-md sm:p-5">
      {/* Subtle warm accent bar when speaking */}
      <div
        className="absolute left-0 top-0 h-1 bg-primary/70 transition-all duration-150 ease-out"
        style={{ width: `${progressPercent}%` }}
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: Avatar with soundwave aura */}
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* Animated sound wave rings when speaking */}
            {isPlaying && (
              <>
                <motion.span
                  animate={{ scale: [1, 1.4, 1.6], opacity: [0.6, 0.3, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full border border-primary/50"
                />
                <motion.span
                  animate={{ scale: [1, 1.25, 1.4], opacity: [0.5, 0.2, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
                  className="absolute inset-0 rounded-full border border-primary/40"
                />
              </>
            )}

            {/* Avatar Circle with Devanagari Monogram & Portrait representation */}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent shadow-sm">
              <span className="font-sanskrit text-2xl font-bold tracking-tight text-primary">
                {siteConfig.monogram}
              </span>
              {/* Little audio indicator badge */}
              <div
                className={`absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-background ${
                  isPlaying
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {isPlaying ? (
                  <Volume2 className="h-2.5 w-2.5 animate-pulse" />
                ) : (
                  <Play className="h-2.5 w-2.5 ml-0.5" />
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-foreground">{siteConfig.name}</p>
              <span className="text-[11px] text-muted-foreground">·</span>
              <span className="font-sanskrit text-xs font-medium text-primary">
                {siteConfig.mantra}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              {isPlaying
                ? "Introducing myself..."
                : hasPlayedOnce
                  ? "Audio introduction paused"
                  : "13-second audio welcome"}
            </p>
          </div>
        </div>

        {/* Audio Controls */}
        <div className="flex items-center gap-2">
          {/* Animated Equalizer Waveform */}
          <div className="flex h-6 items-end gap-1 px-2" aria-hidden="true">
            {[40, 75, 55, 90, 65, 45, 80].map((height, i) => (
              <motion.span
                key={i}
                animate={
                  isPlaying
                    ? {
                        height: [`${height * 0.3}%`, `${height}%`, `${height * 0.4}%`],
                      }
                    : { height: "20%" }
                }
                transition={
                  isPlaying
                    ? {
                        duration: 0.6 + (i % 3) * 0.15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse",
                      }
                    : { duration: 0.2 }
                }
                className="w-1 rounded-full bg-primary/70"
              />
            ))}
          </div>

          <button
            type="button"
            onClick={togglePlay}
            className="inline-flex h-9 items-center gap-2 rounded-full bg-primary px-3.5 text-xs font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={isPlaying ? "Pause greeting" : "Listen to introduction"}
          >
            {isPlaying ? (
              <>
                <Pause className="h-3.5 w-3.5" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>{hasPlayedOnce ? "Resume" : "Listen to intro"}</span>
              </>
            )}
          </button>

          {hasPlayedOnce && (
            <button
              type="button"
              onClick={restart}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              title="Replay introduction"
              aria-label="Replay introduction"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          )}

          <button
            type="button"
            onClick={toggleMute}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            title={isMuted ? "Unmute audio" : "Mute audio"}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      {/* Kinetic Synchronized Captions Box */}
      <div className="mt-3.5 rounded-xl border border-border/60 bg-background/50 p-3">
        <div className="flex items-center justify-between text-[11px] text-muted-foreground">
          <span className="font-medium uppercase tracking-[0.18em]">Live Captions</span>
          <span className="tabular-nums font-mono text-[11px]">
            {currentTime.toFixed(1)}s / {TOTAL_DURATION}s
          </span>
        </div>

        <div className="mt-1.5 min-h-[44px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeSegment ? activeSegment.id : "idle"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="text-sm font-medium leading-relaxed text-foreground"
            >
              {activeSegment ? (
                <>
                  <span className="text-primary font-semibold">{activeSegment.text}</span>{" "}
                  <span className="text-muted-foreground/70">
                    {CAPTIONS.filter((c) => c.id > activeSegment.id)
                      .map((c) => c.text)
                      .join(" ")}
                  </span>
                </>
              ) : (
                <span className="text-muted-foreground">{GREETING_TEXT}</span>
              )}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
