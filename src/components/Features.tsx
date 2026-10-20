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

/* ----- Per-feature preview mockups (decorative, clinical-grade) ----- */

function ApptMockup() {
  const rows = [
    { t: "09:00", n: "Priya Sharma", token: "T-14", status: "In Doctor Room", c: "bg-emerald-500 text-emerald-700 bg-emerald-50" },
    { t: "09:15", n: "Rahul Patel", token: "T-15", status: "Next in Queue", c: "bg-sky-500 text-sky-700 bg-sky-50" },
    { t: "09:30", n: "Meena Iyer", token: "T-16", status: "Checked In", c: "bg-slate-400 text-slate-600 bg-slate-100" },
    { t: "09:45", n: "Arun Kumar", token: "T-17", status: "Walk-in", c: "bg-amber-400 text-amber-700 bg-amber-50" },
  ];
  return (
    <div className="w-full max-w-[16rem]">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-slate-900">OPD Live Queue</span>
        </div>
        <span className="text-[10px] font-mono tabular-nums text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
          TV Screen Sync
        </span>
      </div>
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div
            key={r.t}
            className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/70 px-2.5 py-1.5"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-mono text-[9px] font-bold text-[#0284C7] bg-sky-50 px-1 rounded">
                {r.token}
              </span>
              <span className="truncate text-[11px] font-medium text-slate-800">{r.n}</span>
            </div>
            <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-medium ${r.c}`}>
              {r.status}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 text-[10px] text-slate-500">
        <span>Tokens Called: 14</span>
        <span className="text-emerald-600 font-medium">Avg wait: 7 mins</span>
      </div>
    </div>
  );
}

function EmrMockup() {
  return (
    <div className="w-full max-w-[16rem]">
      <div className="mb-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#0284C7] to-[#0D9488] text-[10px] font-bold text-white shadow-xs"
            aria-hidden="true"
          >
            PS
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-900">Priya Sharma, 34/F</div>
            <div className="text-[9px] font-mono text-slate-500">ABHA: 91-8273-1920-3341</div>
          </div>
        </div>
        <span className="rounded bg-sky-50 px-1.5 py-0.5 text-[9px] font-medium text-sky-700 border border-sky-200">
          General OPD
        </span>
      </div>

      {/* Vitals row */}
      <div className="mb-2.5 grid grid-cols-3 gap-1 rounded-lg bg-slate-100/70 p-1.5 text-center text-[9px]">
        <div>
          <span className="text-slate-400 block">BP</span>
          <span className="font-semibold text-slate-800">120/80</span>
        </div>
        <div>
          <span className="text-slate-400 block">SpO2</span>
          <span className="font-semibold text-slate-800">99%</span>
        </div>
        <div>
          <span className="text-slate-400 block">Pulse</span>
          <span className="font-semibold text-slate-800">72 bpm</span>
        </div>
      </div>

      {/* Structured diagnosis */}
      <div className="space-y-1.5 text-[10px]">
        <div className="rounded border border-slate-200/80 bg-white p-2">
          <span className="text-slate-400 text-[9px] font-medium uppercase tracking-wider block mb-0.5">
            Active Diagnosis
          </span>
          <p className="font-medium text-slate-900">Type 2 Diabetes Mellitus (E11.9)</p>
          <p className="text-[9px] text-slate-500 mt-0.5">HbA1c: 7.1% · Follow-up in 30 days</p>
        </div>
        <div className="flex items-center justify-between text-[9px] text-slate-500 px-1">
          <span>Past Visits: 4 records</span>
          <span className="text-[#0284C7] font-medium">View Timeline →</span>
        </div>
      </div>
    </div>
  );
}

function AiScribeMockup() {
  return (
    <div className="w-full max-w-[16rem]">
      <div className="mb-2.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping" />
          <span className="text-xs font-semibold text-slate-900">Ambient AI Scribe</span>
        </div>
        <span className="rounded-full bg-rose-50 border border-rose-200 px-2 py-0.5 text-[9px] font-semibold text-rose-700">
          Listening (Hinglish/EN)
        </span>
      </div>

      {/* Waveform indicator */}
      <div className="mb-3 flex items-center justify-center gap-1 h-6 rounded-lg bg-slate-900 px-3 py-1">
        {[4, 12, 18, 8, 22, 14, 20, 10, 16, 6].map((h, i) => (
          <span
            key={i}
            className="w-1 rounded-full bg-gradient-to-t from-sky-400 to-teal-300 transition-all duration-200"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>

      {/* Auto-extracted summary */}
      <div className="space-y-1.5 rounded-lg border border-slate-200/80 bg-slate-50/70 p-2.5 text-[10px]">
        <div>
          <span className="font-semibold text-slate-700">Chief Complaint:</span>{" "}
          <span className="text-slate-900">Dry cough × 3d, fever 100.2°F</span>
        </div>
        <div>
          <span className="font-semibold text-slate-700">Diagnosis:</span>{" "}
          <span className="text-slate-900 font-medium text-sky-800">Acute Bronchitis</span>
        </div>
        <div className="border-t border-slate-200/60 pt-1 text-[9px]">
          <span className="font-semibold text-slate-700">Suggested Rx:</span>{" "}
          <span className="text-slate-800">Tab Augmentin 625 (1-0-1) × 5d</span>
        </div>
      </div>

      <div className="mt-2.5 flex items-center justify-between">
        <span className="text-[9px] text-emerald-600 font-medium">✓ Parsed in 2.1s</span>
        <span className="rounded-full bg-[#0F172A] px-2.5 py-1 text-[10px] font-medium text-white shadow-xs">
          Insert in EMR
        </span>
      </div>
    </div>
  );
}

function RxMockup() {
  const meds = [
    { name: "Augmentin 625 Duo", dosage: "1 - 0 - 1", dur: "5 days", ins: "After food" },
    { name: "Pan-D Capsule", dosage: "1 - 0 - 0", dur: "5 days", ins: "Before breakfast" },
    { name: "Paracetamol 650mg", dosage: "SOS", dur: "3 days", ins: "If fever > 100°F" },
  ];
  return (
    <div className="w-full max-w-[16rem]">
      <div className="mb-2.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="font-display text-lg font-bold leading-none text-[#0284C7]">℞</span>
          <span className="text-xs font-semibold text-slate-900">100k+ Drug Database</span>
        </div>
        <span className="rounded bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 text-[9px] font-medium text-emerald-700">
          No Allergy Alert
        </span>
      </div>
      <div className="space-y-1.5">
        {meds.map((m) => (
          <div key={m.name} className="rounded-md border border-slate-100 bg-white p-1.5 text-[10px] shadow-2xs">
            <div className="flex justify-between font-medium text-slate-800">
              <span>{m.name}</span>
              <span className="font-mono text-[9px] text-[#0284C7] bg-sky-50 px-1 rounded">{m.dosage}</span>
            </div>
            <div className="mt-0.5 flex justify-between text-[9px] text-slate-500">
              <span>{m.ins}</span>
              <span>{m.dur}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <span className="inline-flex items-center justify-center flex-1 rounded-lg bg-[#0F172A] py-1 text-[10px] font-medium text-white shadow-xs">
          Print PDF
        </span>
        <span className="inline-flex items-center justify-center flex-1 rounded-lg bg-emerald-600 py-1 text-[10px] font-medium text-white shadow-xs">
          WhatsApp Rx
        </span>
      </div>
    </div>
  );
}

function BillingMockup() {
  return (
    <div className="w-full max-w-[16rem]">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] font-mono text-slate-500">Invoice #2041</span>
        <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
          ✓ Paid via UPI
        </span>
      </div>

      <div className="space-y-1 text-[10px] border-b border-slate-100 pb-2 mb-2">
        <div className="flex justify-between text-slate-600">
          <span>Doctor Consultation</span>
          <span className="font-mono">₹600</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>CBC Blood Panel</span>
          <span className="font-mono">₹450</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>In-Clinic Pharmacy</span>
          <span className="font-mono">₹800</span>
        </div>
      </div>

      {/* Dynamic UPI QR display */}
      <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50/80 p-2">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-white p-1 shadow-xs border border-slate-200">
          {/* Mini QR representation */}
          <svg viewBox="0 0 24 24" className="h-full w-full text-slate-900 fill-current">
            <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v2h-4v-2zm-4 0h2v4h-2v-4zm4 4h4v2h-4v-2zm-2-2h2v2h-2v-2z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[9px] font-semibold text-slate-900">Dynamic Counter QR</div>
          <div className="text-[9px] text-slate-500">Auto-settles with GPay, PhonePe, Paytm</div>
        </div>
      </div>

      <div className="mt-2.5 flex items-center justify-between border-t border-slate-200/80 pt-2">
        <span className="text-[10px] font-semibold text-slate-900">Total (incl. GST)</span>
        <span className="text-xs font-bold tabular-nums text-slate-900">₹1,850</span>
      </div>
    </div>
  );
}

function WhatsAppMockup() {
  return (
    <div className="w-full max-w-[16rem] space-y-2">
      <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2 text-[10px] text-slate-800 shadow-xs">
        <p className="font-medium text-slate-900 mb-0.5">Dr. Mehta Clinic</p>
        Reminder: Appointment tomorrow at 9:30 AM. Your Token is #14.
      </div>
      <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3 py-1.5 text-[10px] text-slate-900 shadow-xs border border-emerald-100">
        Confirmed, see you tomorrow! ✓
      </div>
      <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-sky-50 border border-sky-100 px-3 py-2 text-[10px] text-slate-800 shadow-xs">
        <p className="font-semibold text-sky-900 mb-0.5">3-Month Follow-up Recall</p>
        Hi Priya, your HbA1c diabetes review is due this week. Tap to book your slot.
      </div>
    </div>
  );
}

function LabMockup() {
  const rows = [
    { n: "CBC Blood Panel", s: "Ready · Shared", c: "text-emerald-700 bg-emerald-50 border border-emerald-200" },
    { n: "HbA1c Glycated", s: "Ready · Shared", c: "text-emerald-700 bg-emerald-50 border border-emerald-200" },
    { n: "Lipid Profile", s: "In Lab Processing", c: "text-sky-700 bg-sky-50 border border-sky-200" },
    { n: "Thyroid Panel (T3 T4)", s: "Sample Collected", c: "text-slate-600 bg-slate-100 border border-slate-200" },
  ];
  return (
    <div className="w-full max-w-[16rem] space-y-1.5">
      <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-900">
        <span>Diagnostic Orders</span>
        <span className="text-[10px] font-normal text-slate-500">Auto-links to EMR</span>
      </div>
      {rows.map((r) => (
        <div
          key={r.n}
          className="flex items-center justify-between rounded border border-slate-100 bg-white px-2 py-1.5"
        >
          <span className="text-[10px] font-medium text-slate-800">{r.n}</span>
          <span className={`rounded-full px-2 py-0.5 text-[8px] font-medium ${r.c}`}>
            {r.s}
          </span>
        </div>
      ))}
      <div className="mt-2 text-center">
        <span className="text-[9px] text-[#0284C7] font-medium">WhatsApp PDF auto-delivered to patient</span>
      </div>
    </div>
  );
}

function AbdmMockup() {
  return (
    <div className="w-full max-w-[16rem]">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 text-[8px] font-bold text-white">
            ✓
          </span>
          <span className="text-xs font-semibold text-slate-900">ABDM & ABHA Ready</span>
        </div>
        <span className="rounded bg-sky-50 border border-sky-200 px-1.5 py-0.5 text-[9px] font-bold text-sky-800">
          Govt of India
        </span>
      </div>

      <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-3 text-white shadow-sm mb-3">
        <div className="flex items-center justify-between text-[9px] text-slate-300 mb-1.5">
          <span>AYUSHMAN BHARAT HEALTH ACCOUNT</span>
          <span className="text-[#FF9933] font-bold">ABHA</span>
        </div>
        <div className="font-mono text-xs font-bold tracking-wider text-white mb-1">
          91-8273-1920-3341
        </div>
        <div className="flex items-center justify-between text-[9px] text-slate-400">
          <span>Priya Sharma · F/34</span>
          <span className="text-emerald-400 font-medium">Aadhaar Verified ✓</span>
        </div>
      </div>

      <div className="space-y-1.5 text-[10px]">
        <div className="flex items-center justify-between rounded border border-slate-100 bg-slate-50/80 px-2 py-1">
          <span className="text-slate-600">M1 / M2 / M3 Milestone</span>
          <span className="font-semibold text-emerald-700">Compliant</span>
        </div>
        <div className="flex items-center justify-between rounded border border-slate-100 bg-slate-50/80 px-2 py-1">
          <span className="text-slate-600">FHIR Health Records</span>
          <span className="font-semibold text-sky-700">Auto Sync</span>
        </div>
      </div>
    </div>
  );
}

const features: Feature[] = [
  {
    id: "appointments",
    label: "Smart Appointments",
    eyebrow: "Front desk & queue",
    headline: "Your Whole Day, Booked in Seconds",
    description:
      "Calendar view, time slots, walk-ins, and queue tokens — the full day at a glance with waiting room TV display sync.",
    mockup: <ApptMockup />,
  },
  {
    id: "emr",
    label: "EMR & Consultations",
    eyebrow: "In the consultation room",
    headline: "Every Consultation, Structured & Searchable",
    description:
      "Notes, diagnoses, and follow-ups, linked to a complete and searchable patient history with specialty templates.",
    mockup: <EmrMockup />,
  },
  {
    id: "ai-scribe",
    label: "AI Medical Scribe",
    eyebrow: "DeskMed AI Ambient Voice",
    headline: "Dictate Naturally. Chart in 30 Seconds.",
    description:
      "Speak in English, Hindi, or Hinglish. DeskMed AI extracts chief complaints, vitals, ICD-10 diagnoses, and prescriptions automatically without typing.",
    mockup: <AiScribeMockup />,
  },
  {
    id: "prescriptions",
    label: "Prescriptions",
    eyebrow: "After the visit",
    headline: "Prescriptions Ready to Print in One Click",
    description:
      "Medicine templates and dosage instructions from a 100,000+ Indian drug database, generated as a clean PDF or WhatsApp link instantly.",
    mockup: <RxMockup />,
  },
  {
    id: "billing",
    label: "GST Billing",
    eyebrow: "Payments & UPI",
    headline: "GST-compliant Invoices, Zero Spreadsheets",
    description:
      "Auto-generate invoices tied to each visit, then track payments, discounts, and refunds with dynamic counter UPI QR codes.",
    mockup: <BillingMockup />,
  },
  {
    id: "whatsapp",
    label: "WhatsApp Alerts",
    eyebrow: "Engagement & recall",
    headline: "Reminders That Reach Every Patient",
    description:
      "Automated appointment reminders, digital prescription delivery, and chronic care follow-up recall nudges over WhatsApp.",
    mockup: <WhatsAppMockup />,
  },
  {
    id: "lab",
    label: "Lab Management",
    eyebrow: "Diagnostics",
    headline: "From Sample to Shared Report",
    description:
      "Order tests, track samples through processing, and share digital reports securely with automatic EMR timeline linking.",
    mockup: <LabMockup />,
  },
  {
    id: "abdm",
    label: "ABDM & ABHA Integration",
    eyebrow: "Government compliance",
    headline: "100% Ayushman Bharat Digital Mission Ready",
    description:
      "Generate and verify 14-digit ABHA cards in 30 seconds via Aadhaar OTP. Seamlessly link OPD health records to the National Health Network.",
    mockup: <AbdmMockup />,
  },
];

/* ----- High-demand clinic workflow spotlight items ----- */
const workflowPillars = [
  {
    title: "Zero-Typing Ambient AI Scribe",
    badge: "Most Demanded",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    desc: "Indian doctors see 40–80 patients in a 4-hour OPD. Speak naturally in English or Hinglish; DeskMed AI extracts clinical notes, vitals, and medications with zero typing.",
    icon: (
      <path
        d="M10 2a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Zm5 6v2a5 5 0 0 1-10 0V8M10 15v3M7 18h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Dynamic Counter UPI QR",
    badge: "Payment Speed",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    desc: "Eliminate receptionist screen checks. The counter screen shows a dynamic UPI QR with the exact invoice total. Once paid via GPay or PhonePe, the bill auto-settles instantly.",
    icon: (
      <path
        d="M3 3h6v6H3V3Zm12 0h6v6h-6V3ZM3 15h6v6H3v-6Zm12 0h3v3h-3v-3Zm3 3h3v3h-3v-3Zm-3 3h3v-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "ABDM & ABHA Card in 30s",
    badge: "NMC Compliant",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    desc: "Create and verify 14-digit ABHA IDs via Aadhaar OTP right at the front desk. Fully aligned with National Medical Commission guidelines and NHA digital health records.",
    icon: (
      <path
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Specialty-Specific Templates",
    badge: "Clinical Depth",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    desc: "Out-of-the-box templates for Pediatrics (IAP growth percentiles & vaccination), Gynecology (LMP/EDD tracker), Dental (visual odontograms), and General OPD.",
    icon: (
      <path
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
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
            One platform for the entire patient journey — from the front desk to the doctor&rsquo;s room,
            the lab, and the dynamic UPI invoice.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,18rem)_1fr]">
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
                  className={`group flex shrink-0 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] focus-visible:ring-offset-2 ${
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
            className="relative flex min-h-[22rem] items-center overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 md:p-9 shadow-sm"
          >
            <div
              key={current.id}
              className="flex w-full animate-fade-up flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
            >
              <div className="max-w-md">
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

              {/* Decorative clinical product mockup */}
              <div className="shrink-0 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 sm:p-5 shadow-xs">
                {current.mockup}
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Demand Spotlight Grid */}
        <div className="mt-20 border-t border-slate-200/80 pt-16">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-xs font-semibold text-[#0284C7] mb-3">
              Built For High-Volume OPDs
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
              The Features Clinics Actually Ask For
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Engineered to save 3 minutes per consultation, eliminate payment discrepancies, and keep your clinic 100% compliant.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workflowPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-slate-200/90 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-[#0284C7] ring-1 ring-slate-200 group-hover:bg-sky-50 group-hover:ring-sky-200 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      {pillar.icon}
                    </svg>
                  </span>
                  <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${pillar.badgeColor}`}>
                    {pillar.badge}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-slate-900 mb-2">{pillar.title}</h4>
                <p className="text-xs leading-relaxed text-slate-600">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

