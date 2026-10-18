"use client";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="/#hero"
      onClick={onClick}
      className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7]"
      aria-label="DeskMed AI home"
    >
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0284C7] shadow-xs">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M7 2v10M2 7h10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <span className="font-bold tracking-tight text-slate-900">DeskMed AI</span>
    </a>
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
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md transition-all">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Logo />

            {/* Desktop nav */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors duration-150 hover:text-slate-900"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://app.deskmed.online/login"
                className="text-sm font-medium text-slate-600 transition-colors duration-150 hover:text-slate-900"
              >
                Login
              </a>
            </div>

            {/* Right cluster */}
            <div className="flex items-center gap-3">
              <a
                href="https://app.deskmed.online/setup"
                className="hidden whitespace-nowrap rounded-xl bg-[#0F172A] px-4 py-2 text-sm font-medium text-white shadow-xs transition-all duration-150 hover:bg-[#1E293B] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A] focus-visible:ring-offset-2 md:inline-flex"
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
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors duration-150 hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] md:hidden"
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
          className="fixed inset-0 z-50 flex animate-fade-up flex-col bg-white md:hidden"
        >
          {/* Overlay header — mirrors the bar so the close sits where the menu button was */}
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200/80 px-4 sm:px-6">
            <Logo onClick={closeAndRestoreFocus} />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeAndRestoreFocus}
              aria-label="Close menu"
              style={{ touchAction: "manipulation" }}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors duration-150 hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7]"
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
                  className="border-b border-slate-100 py-4 text-2xl font-medium text-slate-800 transition-colors duration-150 hover:text-[#0284C7] focus-visible:outline-none focus-visible:text-[#0284C7]"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://app.deskmed.online/login"
                onClick={closeAndRestoreFocus}
                className="border-b border-slate-100 py-4 text-2xl font-medium text-slate-800 transition-colors duration-150 hover:text-[#0284C7] focus-visible:outline-none focus-visible:text-[#0284C7]"
              >
                Login
              </a>
            </nav>

            {/* CTA pinned near the bottom */}
            <a
              href="https://app.deskmed.online/setup"
              onClick={closeAndRestoreFocus}
              className="mt-auto mb-10 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-6 py-4 text-base font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A] focus-visible:ring-offset-2"
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
