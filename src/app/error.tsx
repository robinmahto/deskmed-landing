"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error for observability; replace with a real logger in production.
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0D1117] px-6 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[26rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#FF5C3A]/10 blur-[140px]"
      />

      <div className="relative">
        <p className="font-display text-[6rem] font-bold leading-none text-[#FF5C3A] sm:text-[8rem]">
          500
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold text-white text-balance sm:text-4xl">
          Something Went Wrong
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/45 text-pretty">
          An unexpected error occurred on our end. Please try again — if it keeps happening,
          our team has been notified.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            style={{ touchAction: "manipulation" }}
            className="rounded-xl bg-[#FF5C3A] px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#e84e2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117]"
          >
            Try Again
          </button>
          <a
            href="/"
            className="text-sm text-white/50 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:text-white"
          >
            Back to Home
          </a>
        </div>

        {error.digest && (
          <p className="mt-8 text-xs tabular-nums text-white/25">Error ID: {error.digest}</p>
        )}
      </div>
    </main>
  );
}
