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
    { t: "09:00", n: "Priya Sharma", c: "bg-[#28C840]" },
    { t: "09:30", n: "Rahul Patel", c: "bg-[#FF5C3A]" },
    { t: "10:00", n: "Meena Iyer", c: "bg-[#C9CCD6]" },
    { t: "10:30", n: "Arun Kumar", c: "bg-[#C9CCD6]" },
  ];
  return (
    <div className="w-full max-w-[15rem]">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium text-[#0D1117]">Today · Mon 4</span>
        <span className="text-[10px] tabular-nums text-[#8A8FA8]">4 booked</span>
      </div>
      {rows.map((r) => (
        <div
          key={r.t}
          className="flex items-center gap-2.5 border-b border-[#EFEFEA] py-1.5 last:border-0"
        >
          <span className="w-9 shrink-0 text-[10px] tabular-nums text-[#8A8FA8]">{r.t}</span>
          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${r.c}`} aria-hidden="true" />
          <span className="text-[11px] text-[#0D1117]">{r.n}</span>
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
          className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-[#FF5C3A] to-[#FF8F73]"
          aria-hidden="true"
        />
        <div className="min-w-0">
          <div className="h-2 w-24 rounded-full bg-[#0D1117]/15" aria-hidden="true" />
          <div className="mt-1 h-1.5 w-14 rounded-full bg-[#0D1117]/8" aria-hidden="true" />
        </div>
      </div>
      <div className="space-y-1.5" aria-hidden="true">
        <div className="h-1.5 w-full rounded-full bg-[#0D1117]/8" />
        <div className="h-1.5 w-5/6 rounded-full bg-[#0D1117]/8" />
        <div className="h-1.5 w-2/3 rounded-full bg-[#FF5C3A]/30" />
      </div>
    </div>
  );
}

function RxMockup() {
  return (
    <div className="w-full max-w-[15rem]">
      <div className="mb-3 flex items-center gap-2">
        <span className="font-display text-lg leading-none text-[#FF5C3A]">℞</span>
        <div className="h-1.5 w-20 rounded-full bg-[#0D1117]/12" aria-hidden="true" />
      </div>
      <div className="space-y-2" aria-hidden="true">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="h-1.5 w-24 rounded-full bg-[#0D1117]/10" />
            <div className="h-1.5 w-8 rounded-full bg-[#0D1117]/10" />
          </div>
        ))}
      </div>
      <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-[#0D1117] px-2.5 py-1 text-[10px] font-medium text-white">
        Print PDF
      </span>
    </div>
  );
}

function LabMockup() {
  const rows = [
    { n: "CBC Panel", s: "Ready", c: "text-[#28C840] bg-[#28C840]/10" },
    { n: "Lipid Profile", s: "Processing", c: "text-[#FF5C3A] bg-[#FF5C3A]/10" },
    { n: "Thyroid (T3 T4)", s: "Collected", c: "text-[#8A8FA8] bg-[#0D1117]/5" },
  ];
  return (
    <div className="w-full max-w-[15rem] space-y-1.5">
      {rows.map((r) => (
        <div
          key={r.n}
          className="flex items-center justify-between border-b border-[#EFEFEA] pb-1.5 last:border-0"
        >
          <span className="text-[11px] text-[#0D1117]">{r.n}</span>
          <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium ${r.c}`}>
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
        <span className="text-[10px] text-[#8A8FA8]">Invoice #2041</span>
        <span className="rounded-full bg-[#28C840]/10 px-1.5 py-0.5 text-[9px] font-medium text-[#28C840]">
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
            <div className={`h-1.5 ${a} rounded-full bg-[#0D1117]/10`} />
            <div className={`h-1.5 ${b} rounded-full bg-[#0D1117]/10`} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-[#EFEFEA] pt-2.5">
        <span className="text-[10px] font-semibold text-[#0D1117]">Total (incl. GST)</span>
        <span className="text-xs font-bold tabular-nums text-[#0D1117]">₹1,850</span>
      </div>
    </div>
  );
}

function WhatsAppMockup() {
  return (
    <div className="w-full max-w-[15rem] space-y-2">
      <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-[#0D1117]/5 px-3 py-2 text-[11px] text-[#0D1117]">
        Reminder: appointment tomorrow at 9:30 AM with Dr. Mehta.
      </div>
      <div className="ml-auto max-w-[70%] rounded-2xl rounded-tr-sm bg-[#25D366]/15 px-3 py-2 text-[11px] text-[#0D1117]">
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
      className="relative overflow-hidden border-t border-[#E5E5DF] bg-[#FAFAF6] py-24"
    >
      {/* Ambient coral glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-24 h-[28rem] w-[40rem] translate-x-1/3 rounded-full bg-[#FF5C3A]/8 blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5C3A]">
              Platform Features
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-[#0D1117] text-balance md:text-5xl">
              Everything Your Clinic Needs
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-[#8A8FA8] md:pb-1.5 md:text-right text-pretty">
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
                  className={`group flex shrink-0 items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF6] ${
                    selected
                      ? "border-[#0D1117] bg-[#0D1117] text-white"
                      : "border-[#E5E5DF] bg-white text-[#0D1117] hover:border-[#FF5C3A]/40"
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
                      selected ? "opacity-100 text-[#FF5C3A]" : "opacity-0"
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
            className="relative flex min-h-[20rem] items-center overflow-hidden rounded-2xl border border-[#E5E5DF] bg-white p-7 md:p-9"
          >
            <div
              key={current.id}
              className="flex w-full animate-fade-up flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
            >
              <div className="max-w-sm">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF5C3A]">
                  {current.eyebrow}
                </p>
                <h3 className="font-display text-2xl font-bold leading-snug text-[#0D1117] text-balance md:text-[1.75rem]">
                  {current.headline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#8A8FA8] text-pretty">
                  {current.description}
                </p>
              </div>

              {/* Decorative product mockup */}
              <div className="shrink-0 rounded-xl border border-[#EFEFEA] bg-[#FAFAF6] p-5">
                {current.mockup}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
