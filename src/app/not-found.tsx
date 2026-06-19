import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found — DeskMed",
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0D1117] px-6 py-16">
      {/* Ambient coral glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF5C3A]/10 blur-[150px]"
      />
      {/* Dot-grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50"
      />

      {/* Vitals monitor panel */}
      <div className="relative w-full max-w-2xl">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40 backdrop-blur-sm">
          {/* Monitor status bar */}
          <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-2 w-2 animate-blink rounded-full bg-[#FF5C3A]"
              />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
                DeskMed · Vitals
              </span>
            </div>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
              No Signal
            </span>
          </div>

          {/* Screen */}
          <div className="relative px-6 pb-10 pt-8 text-center">
            <span
              className="block animate-fade-up font-display text-[clamp(4.5rem,18vw,9rem)] font-bold leading-none text-white"
              style={{ animationFillMode: "both" }}
            >
              404
            </span>

            {/* ECG trace — beats twice, then flatlines */}
            <svg
              aria-hidden="true"
              viewBox="0 0 760 140"
              className="mt-1 h-20 w-full"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                pathLength={1}
                d="M0,70 H40 L60,70 L70,55 L80,70 L94,70 L100,82 L106,20 L112,110 L120,70 L132,60 L144,70 H170 L210,70 L220,55 L230,70 L244,70 L250,82 L256,20 L262,110 L270,70 L282,60 L294,70 H330 H760"
                stroke="#FF5C3A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-ecg"
                style={{ filter: "drop-shadow(0 0 6px rgba(255,92,58,0.5))" }}
              />
            </svg>

            <h1
              className="mt-4 animate-fade-up font-display text-2xl font-bold text-white text-balance sm:text-3xl"
              style={{ animationDelay: "120ms", animationFillMode: "both" }}
            >
              Page Not Found
            </h1>
            <p
              className="mx-auto mt-3 max-w-md animate-fade-up text-sm leading-relaxed text-white/45 text-pretty sm:text-base"
              style={{ animationDelay: "200ms", animationFillMode: "both" }}
            >
              This page has no pulse — it doesn&rsquo;t exist or may have been moved. Let&rsquo;s
              get you back to a healthy one.
            </p>

            <div
              className="mt-8 flex animate-fade-up flex-wrap items-center justify-center gap-4"
              style={{ animationDelay: "280ms", animationFillMode: "both" }}
            >
              <a
                href="/"
                className="rounded-xl bg-[#FF5C3A] px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#e84e2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117]"
              >
                Back to Home
              </a>
              <a
                href="/#features"
                className="text-sm text-white/50 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
