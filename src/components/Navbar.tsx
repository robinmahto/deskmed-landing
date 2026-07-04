"use client";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FF5C3A]">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M7 2v10M2 7h10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <span className="font-semibold tracking-tight text-white">DeskMed</span>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // While the overlay is open: lock body scroll, move focus into it,
  // close on Escape, and restore on unmount.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeAndRestoreFocus() {
    setOpen(false);
    menuButtonRef.current?.focus();
  }

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0D1117]/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/55 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://app.deskmed.online/login"
              className="text-sm text-white/55 transition-colors duration-200 hover:text-white"
            >
              Login
            </a>
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-3">
            <a
              href="https://app.deskmed.online/setup"
              className="hidden whitespace-nowrap rounded-lg bg-[#FF5C3A] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#e84e2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117] md:inline-flex"
            >
              Start Free Trial
            </a>

            {/* Mobile menu button */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              style={{ touchAction: "manipulation" }}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors duration-200 hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C3A] md:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex animate-fade-up flex-col bg-[#0D1117] md:hidden"
        >
          {/* Overlay header — mirrors the bar so the close sits where the menu button was */}
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/5 px-4 sm:px-6">
            <Logo />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeAndRestoreFocus}
              aria-label="Close menu"
              style={{ touchAction: "manipulation" }}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors duration-200 hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C3A]"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-1 flex-col px-6 pt-8">
            <nav className="flex flex-col">
              {navLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeAndRestoreFocus}
                  className="border-b border-white/5 py-4 text-2xl font-medium text-white/90 transition-colors duration-200 hover:text-[#FF5C3A] focus-visible:outline-none focus-visible:text-[#FF5C3A]"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://app.deskmed.online/login"
                onClick={closeAndRestoreFocus}
                className="border-b border-white/5 py-4 text-2xl font-medium text-white/90 transition-colors duration-200 hover:text-[#FF5C3A] focus-visible:outline-none focus-visible:text-[#FF5C3A]"
              >
                Login
              </a>
            </nav>

            {/* CTA pinned near the bottom */}
            <a
              href="https://app.deskmed.online/setup"
              onClick={closeAndRestoreFocus}
              className="mt-auto mb-10 inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF5C3A] px-6 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#e84e2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117]"
            >
              Start Free Trial
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
