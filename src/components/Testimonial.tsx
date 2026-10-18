"use client";

import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "DeskMed transformed how we run our clinic. Appointment management used to take 2 hours a day — now it's fully automated. Our patients love the WhatsApp reminders, and our receptionist finally has time to breathe.",
    name: "Dr. Rajan Mehta",
    clinic: "Mehta Family Clinic, Pune",
    meta: "Est. 1998",
    initials: "RM",
  },
  {
    quote:
      "We switched from three separate tools to just DeskMed. Billing, lab reports, and prescriptions all live in one place now. Onboarding our front desk took less than a day.",
    name: "Dr. Ananya Reddy",
    clinic: "Sunrise Multispeciality, Hyderabad",
    meta: "4 doctors",
    initials: "AR",
  },
  {
    quote:
      "Running three branches used to mean three sets of registers. The multi-clinic dashboard gives me one view of everything — collections, no-shows, pending reports — from my phone.",
    name: "Dr. Vikram Nair",
    clinic: "Nair Polyclinic, Kochi",
    meta: "3 branches",
    initials: "VN",
  },
];

const stats = [
  { value: "42%", label: "Fewer no-shows", sub: "with automated WhatsApp reminders" },
  { value: "2 hrs", label: "Saved every day", sub: "on scheduling & front-desk admin" },
  { value: "3×", label: "Faster billing", sub: "GST invoices generated at checkout" },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const count = testimonials.length;

  const go = useCallback(
    (next: number) => setActive((next + count) % count),
    [count]
  );

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % count), 5000);
    return () => clearInterval(id);
  }, [count]);

  return (
    <section id="testimonials" className="bg-slate-50/70 border-t border-slate-200/80 py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        {/* Eyebrow */}
        <p className="text-[#0284C7] text-xs font-semibold tracking-widest uppercase mb-12 text-center">
          Loved by clinics across India
        </p>

        <div className="relative max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-12 shadow-sm">
          {/* Decorative quote mark */}
          <div
            className="absolute top-2 left-6 text-[100px] leading-none select-none pointer-events-none z-0"
            style={{ color: "rgba(2, 132, 199, 0.08)", fontFamily: "Georgia, serif" }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          {/* Slider viewport */}
          <div className="overflow-hidden relative z-10">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((t) => (
                <blockquote key={t.name} className="w-full shrink-0 px-1">
                  <p className="font-display text-xl sm:text-2xl text-slate-900 leading-[1.6] mb-10 font-normal text-center min-h-[8.5rem] md:min-h-[7rem] flex items-center justify-center">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <footer className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0D9488] flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-xs">
                      {t.initials}
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2.5">
                        <p className="text-slate-900 font-semibold text-sm">{t.name}</p>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} width="12" height="12" viewBox="0 0 14 14" fill="#F59E0B">
                              <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.455.59 3.46L7 9l-3.09 1.55.59-3.46L2 4.635l3.455-.545L7 1z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-500 text-xs mt-0.5">
                        <span>{t.clinic}</span>
                        <span className="text-slate-400"> · {t.meta}</span>
                      </p>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(active - 1)}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:border-slate-300 hover:text-slate-900 shadow-xs transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-[#0284C7]" : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(active + 1)}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:border-slate-300 hover:text-slate-900 shadow-xs transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Outcome stats */}
        <div className="mt-16 pt-12 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-[#0284C7] leading-none mb-3 tabular-nums">
                {stat.value}
              </p>
              <p className="text-slate-900 font-semibold text-sm mb-1">{stat.label}</p>
              <p className="text-slate-500 text-xs leading-relaxed max-w-[14rem] mx-auto">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
