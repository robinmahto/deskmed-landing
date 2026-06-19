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
      "Basic billing",
      "Email support",
    ],
    cta: "Start Free Trial",
    ctaHref: "https://app.deskmed.in/setup",
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
      "Lab management",
      "WhatsApp alerts",
      "Priority support",
    ],
    cta: "Start Free Trial",
    ctaHref: "https://app.deskmed.in/setup",
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
      "Custom integrations",
      "Dedicated manager",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    ctaHref: "mailto:sales@deskmed.in",
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
      className="relative overflow-hidden bg-[#FAFAF6] py-24 border-t border-[#E5E5DF]"
    >
      {/* Ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[48rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#FF5C3A]/10 blur-[130px]"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-[#FF5C3A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Pricing
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1117]">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#8A8FA8] mt-4 text-base">
            Start free for 14 days. No credit card required.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <div className="relative inline-grid grid-cols-2 items-center rounded-full border border-[#E5E5DF] bg-white p-1 shadow-sm">
            {/* Sliding pill */}
            <span
              aria-hidden="true"
              className={`absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-[#0D1117] shadow-md transition-transform duration-300 ease-out ${
                cycle === "annual" ? "translate-x-full" : "translate-x-0"
              }`}
            />
            <button
              type="button"
              onClick={() => setCycle("monthly")}
              aria-pressed={cycle === "monthly"}
              className={`relative z-10 whitespace-nowrap text-sm font-medium px-7 py-2 rounded-full transition-colors duration-200 ${
                cycle === "monthly" ? "text-white" : "text-[#8A8FA8] hover:text-[#0D1117]"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setCycle("annual")}
              aria-pressed={cycle === "annual"}
              className={`relative z-10 whitespace-nowrap text-sm font-medium px-7 py-2 rounded-full transition-colors duration-200 ${
                cycle === "annual" ? "text-white" : "text-[#8A8FA8] hover:text-[#0D1117]"
              }`}
            >
              Annual
            </button>
          </div>

          {/* Savings badge — sits beside the toggle, wraps below on narrow screens */}
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#FF5C3A]/10 px-3 py-1.5 text-xs font-semibold text-[#FF5C3A]">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            2 months free
          </span>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 items-stretch">
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
                    ? "bg-[#0D1117] md:-my-3 shadow-2xl shadow-[#FF5C3A]/15 ring-1 ring-white/10 md:z-10"
                    : "bg-white border border-[#E5E5DF] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 hover:border-[#D8D8CF]"
                }`}
              >
                {/* Coral glow inside featured card */}
                {plan.featured && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-px left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-full bg-[#FF5C3A]/25 blur-3xl"
                  />
                )}

                <div className="relative flex flex-col h-full">
                  {plan.featured ? (
                    <div className="mb-5">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase bg-[#FF5C3A] text-white px-2.5 py-1 rounded-full shadow-lg shadow-[#FF5C3A]/30">
                        <span className="h-1 w-1 rounded-full bg-white" />
                        Most Popular
                      </span>
                    </div>
                  ) : (
                    <div className="mb-5 h-[22px]" aria-hidden="true" />
                  )}

                  <h3
                    className={`font-semibold text-lg mb-1 ${
                      plan.featured ? "text-white" : "text-[#0D1117]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      plan.featured ? "text-white/40" : "text-[#8A8FA8]"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-2">
                    <div className="flex items-end gap-1">
                      <span
                        className={`font-display text-5xl font-bold leading-none ${
                          plan.featured ? "text-white" : "text-[#0D1117]"
                        }`}
                      >
                        {priceValue}
                      </span>
                      {!plan.custom && (
                        <span
                          className={`text-sm mb-1 ${
                            plan.featured ? "text-white/35" : "text-[#8A8FA8]"
                          }`}
                        >
                          /mo
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Billing sub-line — fixed height so cards align */}
                  <p
                    className={`text-xs mb-8 h-4 ${
                      plan.featured ? "text-white/30" : "text-[#A8ACBE]"
                    }`}
                  >
                    {plan.custom
                      ? "Tailored to your network"
                      : showAnnual
                        ? `${formatINR(plan.annualTotal as number)} billed yearly`
                        : "billed monthly"}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2.5 text-sm ${
                          plan.featured ? "text-white/65" : "text-[#6B7280]"
                        }`}
                      >
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full mt-0.5 ${
                            plan.featured ? "bg-[#FF5C3A]/20" : "bg-[#FF5C3A]/10"
                          }`}
                        >
                          <svg
                            className="text-[#FF5C3A]"
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
                        ? "bg-[#FF5C3A] text-white hover:bg-[#e84e2d] hover:-translate-y-0.5 shadow-lg shadow-[#FF5C3A]/25"
                        : "bg-[#0D1117] text-white hover:bg-[#1a2234]"
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
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#8A8FA8]">
          {[
            "14-day free trial",
            "No credit card required",
            "Cancel anytime",
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <svg
                className="text-[#16A34A]"
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
