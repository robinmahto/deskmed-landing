"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

type Feature = {
  id: string;
  label: string;
  eyebrow: string;
  headline: string;
  description: string;
  mockup: ReactNode;
};

/* ----- Per-feature preview mockups (decorative) ----- */

function ApptMockup() {
  const rows = [
    { t: "09:00", n: "Priya Sharma", c: "bg-emerald-500" },
    { t: "09:30", n: "Rahul Patel", c: "bg-[#0284C7]" },
    { t: "10:00", n: "Meena Iyer", c: "bg-slate-300" },
    { t: "10:30", n: "Arun Kumar", c: "bg-slate-300" },
  ];
  return (
    <div className="w-full max-w-[15rem]">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-900">Today · Mon 4</span>
        <span className="text-[10px] font-mono tabular-nums text-slate-500 bg-slate-200/60 px-1.5 py-0.5 rounded">4 booked</span>
      </div>
      {rows.map((r) => (
        <div
          key={r.t}
          className="flex items-center gap-2.5 border-b border-slate-100 py-1.5 last:border-0"
        >
          <span className="w-9 shrink-0 text-[10px] font-mono tabular-nums text-slate-400">{r.t}</span>
          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${r.c}`} aria-hidden="true" />
          <span className="text-[11px] font-medium text-slate-800">{r.n}</span>
        </div>
      ))}
    </div>
  );
}

function EmrMockup() {
  return (
    <div className="w-full max-w-[15rem]">
      <div className="mb-3 flex items-center gap-2">
        <div
          className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0D9488]"
          aria-hidden="true"
        />
        <div className="min-w-0">
          <div className="h-2 w-24 rounded-full bg-slate-900/15" aria-hidden="true" />
          <div className="mt-1 h-1.5 w-14 rounded-full bg-slate-900/10" aria-hidden="true" />
        </div>
      </div>
      <div className="space-y-1.5" aria-hidden="true">
        <div className="h-1.5 w-full rounded-full bg-slate-200/80" />
        <div className="h-1.5 w-5/6 rounded-full bg-slate-200/80" />
        <div className="h-1.5 w-2/3 rounded-full bg-[#0284C7]/30" />
      </div>
    </div>
  );
}

function RxMockup() {
  return (
    <div className="w-full max-w-[15rem]">
      <div className="mb-3 flex items-center gap-2">
        <span className="font-display text-lg font-bold leading-none text-[#0284C7]">℞</span>
        <div className="h-1.5 w-20 rounded-full bg-slate-900/15" aria-hidden="true" />
      </div>
      <div className="space-y-2" aria-hidden="true">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="h-1.5 w-24 rounded-full bg-slate-200/80" />
            <div className="h-1.5 w-8 rounded-full bg-slate-200/80" />
          </div>
        ))}
      </div>
      <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-[#0F172A] px-2.5 py-1 text-[10px] font-medium text-white shadow-xs">
        Print PDF
      </span>
    </div>
  );
}

function LabMockup() {
  const rows = [
    { n: "CBC Panel", s: "Ready", c: "text-emerald-700 bg-emerald-50 border border-emerald-200" },
    { n: "Lipid Profile", s: "Processing", c: "text-sky-700 bg-sky-50 border border-sky-200" },
    { n: "Thyroid (T3 T4)", s: "Collected", c: "text-slate-600 bg-slate-100 border border-slate-200" },
  ];
  return (
    <div className="w-full max-w-[15rem] space-y-2">
      {rows.map((r) => (
        <div
          key={r.n}
          className="flex items-center justify-between border-b border-slate-100 pb-1.5 last:border-0"
        >
          <span className="text-[11px] font-medium text-slate-800">{r.n}</span>
          <span className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${r.c}`}>
            {r.s}
          </span>
        </div>
      ))}
    </div>
  );
}

function BillingMockup() {
  return (
    <div className="w-full max-w-[15rem]">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] font-mono text-slate-500">Invoice #2041</span>
        <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9px] font-medium text-emerald-700">
          Paid
        </span>
      </div>
      <div className="mb-3 space-y-1.5" aria-hidden="true">
        {[
          ["w-16", "w-8"],
          ["w-12", "w-8"],
          ["w-20", "w-8"],
        ].map(([a, b], i) => (
          <div key={i} className="flex justify-between">
            <div className={`h-1.5 ${a} rounded-full bg-slate-200/80`} />
            <div className={`h-1.5 ${b} rounded-full bg-slate-200/80`} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-slate-200/80 pt-2.5">
        <span className="text-[10px] font-semibold text-slate-900">Total (incl. GST)</span>
        <span className="text-xs font-bold tabular-nums text-slate-900">₹1,850</span>
      </div>
    </div>
  );
}

function WhatsAppMockup() {
  return (
    <div className="w-full max-w-[15rem] space-y-2">
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2 text-[11px] text-slate-800 shadow-xs">
        Reminder: appointment tomorrow at 9:30 AM with Dr. Mehta.
      </div>
      <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3 py-2 text-[11px] text-slate-900 shadow-xs border border-emerald-100">
        Confirmed, thank you! ✓
      </div>
    </div>
  );
}

const features: Feature[] = [
  {
    id: "appointments",
    label: "Smart Appointments",
    eyebrow: "Front desk",
    headline: "Your Whole Day, Booked in Seconds",
    description:
      "Calendar view, time slots, walk-ins, and queue tokens — the full day at a glance.",
    mockup: <ApptMockup />,
  },
  {
    id: "emr",
    label: "EMR & Consultations",
    eyebrow: "In the room",
    headline: "Every Consultation, Structured & Searchable",
    description:
      "Notes, diagnoses, and follow-ups, linked to a complete and searchable patient history.",
    mockup: <EmrMockup />,
  },
  {
    id: "prescriptions",
    label: "Prescriptions",
    eyebrow: "After the visit",
    headline: "Prescriptions Ready to Print in One Click",
    description:
      "Medicine templates and dosage instructions, generated as a clean PDF instantly.",
    mockup: <RxMockup />,
  },
  {
    id: "lab",
    label: "Lab Management",
    eyebrow: "Diagnostics",
    headline: "From Sample to Shared Report",
    description:
      "Order tests, track samples through processing, and share digital reports securely.",
    mockup: <LabMockup />,
  },
  {
    id: "billing",
    label: "GST Billing",
    eyebrow: "Payments",
    headline: "GST-compliant Invoices, Zero Spreadsheets",
    description:
      "Auto-generate invoices tied to each visit, then track payments, discounts, and refunds.",
    mockup: <BillingMockup />,
  },
  {
    id: "whatsapp",
    label: "WhatsApp Alerts",
    eyebrow: "Engagement",
    headline: "Reminders That Reach Every Patient",
    description:
      "Automated appointment reminders, report alerts, and follow-up nudges over WhatsApp.",
    mockup: <WhatsAppMockup />,
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = features[active];

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const last = features.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;

    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  }

  return (
    <section
      id="features"
      className="relative overflow-hidden border-t border-slate-200/80 bg-slate-50/50 py-24"
    >
      {/* Ambient sky glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-24 h-[28rem] w-[40rem] translate-x-1/3 rounded-full bg-sky-200/20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
              Platform Features
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-slate-900 text-balance md:text-5xl">
              Everything Your Clinic Needs
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-slate-600 md:pb-1.5 md:text-right text-pretty">
            One platform for the entire patient journey — from the front desk to the lab and the
            invoice.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,17rem)_1fr]">
          {/* Tab list */}
          <div
            role="tablist"
            aria-label="Platform features"
            aria-orientation="vertical"
            className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0"
          >
            {features.map((f, i) => {
              const selected = i === active;
              return (
                <button
                  key={f.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${f.id}`}
                  aria-selected={selected}
                  aria-controls="feature-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={onKeyDown}
                  style={{ touchAction: "manipulation" }}
                  className={`group flex shrink-0 items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] focus-visible:ring-offset-2 ${
                    selected
                      ? "border-slate-900 bg-[#0F172A] text-white shadow-sm"
                      : "border-slate-200/80 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 shadow-xs"
                  }`}
                >
                  <span className="whitespace-nowrap text-sm font-medium md:whitespace-normal">
                    {f.label}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className={`hidden shrink-0 transition-opacity duration-200 md:block ${
                      selected ? "opacity-100 text-[#0284C7]" : "opacity-0"
                    }`}
                  >
                    <path
                      d="M3 7h8M8 4l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* Preview panel */}
          <div
            id="feature-panel"
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            aria-live="polite"
            className="relative flex min-h-[20rem] items-center overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 md:p-9 shadow-sm"
          >
            <div
              key={current.id}
              className="flex w-full animate-fade-up flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
            >
              <div className="max-w-sm">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0284C7]">
                  {current.eyebrow}
                </p>
                <h3 className="font-display text-2xl font-bold leading-snug text-slate-900 text-balance md:text-[1.75rem]">
                  {current.headline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
                  {current.description}
                </p>
              </div>

              {/* Decorative product mockup */}
              <div className="shrink-0 rounded-xl border border-slate-200/80 bg-slate-50/70 p-5 shadow-xs">
                {current.mockup}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
