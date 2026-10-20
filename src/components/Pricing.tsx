"use client";

import { useState } from "react";

type Cycle = "monthly" | "annual";

const plans = [
  {
    name: "Starter",
    tagline: "For solo practitioners",
    monthly: 999,
    annualPerMonth: 833, // 999 × 10 / 12, rounded
    annualTotal: 9990,
    custom: false,
    features: [
      "1 doctor",
      "Up to 500 patients",
      "Appointments & EMR",
      "Dynamic UPI & GST billing",
      "Email support",
    ],
    cta: "Start Free Trial",
    ctaHref: "https://app.deskmed.online/setup",
    featured: false,
  },
  {
    name: "Growth",
    tagline: "The plan most clinics choose",
    monthly: 2499,
    annualPerMonth: 2082, // 2499 × 10 / 12, rounded
    annualTotal: 24990,
    custom: false,
    features: [
      "Up to 5 doctors",
      "Unlimited patients",
      "Everything in Starter",
      "AI Medical Scribe (Voice-to-Rx)",
      "WhatsApp alerts & Patient Recall",
      "Lab management",
      "ABDM & ABHA sync",
      "Priority support",
    ],
    cta: "Start Free Trial",
    ctaHref: "https://app.deskmed.online/setup",
    featured: true,
  },
  {
    name: "Enterprise",
    tagline: "For multi-clinic networks",
    monthly: null,
    annualPerMonth: null,
    annualTotal: null,
    custom: true,
    features: [
      "Unlimited doctors",
      "Multi-clinic dashboard",
      "Everything in Growth",
      "Specialty EMR templates",
      "Custom integrations & API",
      "Dedicated manager",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    ctaHref: "mailto:sales@deskmedai.com",
    featured: false,
  },
];

function formatINR(n: number): string {
  return "₹" + n.toLocaleString("en-IN");
}

export default function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("monthly");

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white py-24 border-t border-slate-200/80"
    >
      {/* Ambient background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[48rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-sky-100/40 blur-[130px]"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-[#0284C7] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Pricing
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-600 mt-4 text-base">
            Start free for 14 days. No credit card required.
          </p>
        </div>

        {/* Billing toggle (Cal.com segmented style) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <div className="relative inline-grid grid-cols-2 items-center rounded-full border border-slate-200 bg-slate-100 p-1 shadow-xs">
            {/* Sliding pill */}
            <span
              aria-hidden="true"
              className={`absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-white shadow-sm transition-transform duration-300 ease-out ${
                cycle === "annual" ? "translate-x-full" : "translate-x-0"
              }`}
            />
            <button
              type="button"
              onClick={() => setCycle("monthly")}
              aria-pressed={cycle === "monthly"}
              className={`relative z-10 whitespace-nowrap text-sm font-semibold px-7 py-2 rounded-full transition-colors duration-200 ${
                cycle === "monthly" ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setCycle("annual")}
              aria-pressed={cycle === "annual"}
              className={`relative z-10 whitespace-nowrap text-sm font-semibold px-7 py-2 rounded-full transition-colors duration-200 ${
                cycle === "annual" ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Annual
            </button>
          </div>

          {/* Savings badge */}
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            2 months free
          </span>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {plans.map((plan) => {
            const showAnnual = cycle === "annual" && !plan.custom;
            const priceValue = plan.custom
              ? "Custom"
              : showAnnual
                ? formatINR(plan.annualPerMonth as number)
                : formatINR(plan.monthly as number);

            return (
              <div
                key={plan.name}
                className={`group relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                  plan.featured
                    ? "bg-gradient-to-b from-sky-50/50 via-white to-white border-2 border-[#0284C7] md:-my-3 shadow-xl ring-4 ring-sky-100/50 md:z-10"
                    : "bg-white border border-slate-200/90 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300"
                }`}
              >
                <div className="relative flex flex-col h-full">
                  {plan.featured ? (
                    <div className="mb-5">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase bg-[#0284C7] text-white px-2.5 py-1 rounded-full shadow-xs">
                        <span className="h-1 w-1 rounded-full bg-white" />
                        Most Popular
                      </span>
                    </div>
                  ) : (
                    <div className="mb-5 h-[22px]" aria-hidden="true" />
                  )}

                  <h3 className="font-semibold text-lg mb-1 text-slate-900">
                    {plan.name}
                  </h3>
                  <p className="text-sm mb-6 text-slate-500">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-2">
                    <div className="flex items-end gap-1">
                      <span className="font-display text-5xl font-bold leading-none text-slate-900">
                        {priceValue}
                      </span>
                      {!plan.custom && (
                        <span className="text-sm mb-1 text-slate-500">
                          /mo
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Billing sub-line */}
                  <p className="text-xs mb-8 h-4 text-slate-400 font-medium">
                    {plan.custom
                      ? "Tailored to your network"
                      : showAnnual
                        ? `${formatINR(plan.annualTotal as number)} billed yearly`
                        : "billed monthly"}
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-slate-700"
                      >
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full mt-0.5 bg-sky-50 text-[#0284C7] ring-1 ring-sky-200">
                          <svg
                            className="text-[#0284C7]"
                            width="10"
                            height="10"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M2.5 7.5L5.5 10.5L11.5 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.ctaHref}
                    className={`mt-auto block text-center py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                      plan.featured
                        ? "bg-[#0284C7] text-white hover:bg-[#0369A1] hover:-translate-y-0.5 shadow-md shadow-sky-600/20"
                        : plan.custom
                        ? "bg-[#0F172A] text-white hover:bg-[#1E293B]"
                        : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance row */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-600">
          {[
            "14-day free trial",
            "No credit card required",
            "Cancel anytime",
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <svg
                className="text-emerald-600"
                width="15"
                height="15"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2.5 7.5L5.5 10.5L11.5 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
