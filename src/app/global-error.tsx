"use client";

import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0D1117]">
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="font-display text-[6rem] font-bold leading-none text-[#FF5C3A]">500</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-white">
            Something Went Wrong
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/45">
            A critical error occurred. Please try reloading the page.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{ touchAction: "manipulation" }}
            className="mt-9 rounded-xl bg-[#FF5C3A] px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#e84e2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117]"
          >
            Try Again
          </button>
          {error.digest && (
            <p className="mt-8 text-xs text-white/25">Error ID: {error.digest}</p>
          )}
        </main>
      </body>
    </html>
  );
}
