const badges = [
  { label: "Encryption", value: "AES-256" },
  { label: "Data residency", value: "India only" },
  { label: "Uptime SLA", value: "99.9%" },
  { label: "Compliance", value: "DPDP-aligned" },
];

export default function SecurityHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] pt-36 pb-24 sm:pt-40 sm:pb-28">
      {/* Ambient blue glow */}
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute left-1/2 -top-28 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#0284C7] opacity-40 blur-[130px]"
      />
      {/* Dotted texture */}
      <div aria-hidden="true" className="bg-dot-grid-dark absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Shield emblem */}
        <span className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0284C7]/15 text-[#0284C7] ring-1 ring-[#0284C7]/30">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3l7 2.8v5.2c0 4.5-3 7.8-7 9.5-4-1.7-7-5-7-9.5V5.8L12 3Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 12l2 2 4-4.5"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0284C7]">
          Security
        </p>
        <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl md:text-[4.25rem]">
          Patient data,
          <br className="hidden sm:block" /> protected by design.
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
          Health records are among the most sensitive data a clinic holds. DeskMed
          is built so every clinic&rsquo;s data stays encrypted, isolated, and in
          India &mdash; with security baked into the architecture, not bolted on.
        </p>

        {/* Badges */}
        <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-4">
          {badges.map((item) => (
            <div key={item.label} className="text-center">
              <dt className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
                {item.label}
              </dt>
              <dd className="mt-1 font-display text-xl font-bold text-white">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
