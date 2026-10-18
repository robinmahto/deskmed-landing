const values = [
  {
    title: "Patients first, always",
    body: "Every feature is judged by one question — does this lead to better care? If it only looks good in a demo, it doesn't ship.",
    icon: (
      <path
        d="M10 16.5S3.5 12.6 3.5 8.2A3.7 3.7 0 0 1 10 5.8a3.7 3.7 0 0 1 6.5 2.4c0 4.4-6.5 8.3-6.5 8.3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Built for India",
    body: "ABHA, UPI, GST invoices, regional languages, patchy networks — we design for how clinics actually work here, not how Silicon Valley imagines they do.",
    icon: (
      <path
        d="M10 2.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Zm0 0c2 1.8 3 4.6 3 7.5s-1 5.7-3 7.5c-2-1.8-3-4.6-3-7.5s1-5.7 3-7.5ZM2.8 10h14.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Privacy by default",
    body: "Health data is sacred. Every clinic's records are isolated, encrypted, and DPDP-aligned — never sold, never mixed, never an afterthought.",
    icon: (
      <path
        d="M10 2.8l5.5 2.2v4.3c0 3.7-2.4 6.4-5.5 7.9-3.1-1.5-5.5-4.2-5.5-7.9V5L10 2.8ZM7.6 9.8l1.7 1.7 3.1-3.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Ship with care",
    body: "We move fast, but never on top of a live clinic. Small, tested, reversible changes — because a bug here means a real patient waiting.",
    icon: (
      <path
        d="M10 2.5l1.8 5.7H17l-4.6 3.4 1.8 5.7L10 13.9l-4.6 3.4 1.8-5.7L2.6 8.2h5.2L10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function AboutValues() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-24 sm:py-28">
      {/* Dotted texture */}
      <div aria-hidden="true" className="bg-dot-grid-dark absolute inset-0 opacity-60" />
      {/* Ambient blue glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#0284C7] opacity-20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0284C7]">
            What We Value
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            The principles behind every decision
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0284C7]/30 hover:bg-white/[0.04]"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0284C7]/15 text-[#0284C7] ring-1 ring-[#0284C7]/20 transition-transform duration-300 group-hover:-translate-y-0.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  {value.icon}
                </svg>
              </span>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
