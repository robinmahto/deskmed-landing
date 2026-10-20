const certifications = [
  {
    name: "ABDM & ABHA",
    status: "Aligned",
    note: "Built to National Health Authority (NHA) specifications for ABHA creation and FHIR record exchange.",
  },
  {
    name: "DPDP Act 2023",
    status: "Aligned",
    note: "Built to India's Digital Personal Data Protection Act for consent, access, and erasure.",
  },
  {
    name: "ISO 27001",
    status: "In progress",
    note: "Information-security management certification, currently underway.",
  },
  {
    name: "HIPAA-aligned",
    status: "Practices",
    note: "We follow HIPAA-style safeguards for handling protected health information.",
  },
];

export default function SecurityCompliance() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-24 sm:py-28">
      {/* Dotted texture */}
      <div aria-hidden="true" className="bg-dot-grid-dark absolute inset-0 opacity-60" />
      {/* Ambient blue glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-[#0284C7] opacity-20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0284C7]">
            Compliance & residency
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Built for Indian healthcare rules
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/55">
            Your data is hosted in India and handled to the standards regulators
            and patients expect.
          </p>
        </div>

        {/* Certifications */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-white">
                  {cert.name}
                </h3>
                <span className="shrink-0 rounded-full bg-[#0284C7]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#0284C7]">
                  {cert.status}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-white/55">{cert.note}</p>
            </div>
          ))}
        </div>

        {/* Data residency + disclosure */}
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {/* Residency */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
              <span className="flex h-3.5 w-3.5 flex-col overflow-hidden rounded-[3px]">
                <span className="h-1/3 bg-[#FF9933]" />
                <span className="h-1/3 bg-white" />
                <span className="h-1/3 bg-[#138808]" />
              </span>
              <span className="text-xs font-medium text-white/70">
                Hosted in India
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white">Data residency</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              All clinic and patient data is stored and processed on AWS
              infrastructure in the Mumbai region (ap-south-1). Your records never
              leave the country.
            </p>
          </div>

          {/* Responsible disclosure */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#0284C7]/20 bg-[#0284C7]/[0.06] p-7">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Found a vulnerability?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                We welcome responsible disclosure from security researchers.
                Report an issue and we&rsquo;ll acknowledge it within two business
                days.
              </p>
            </div>
            <a
              href="mailto:security@deskmedai.com"
              className="group mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-[#0284C7] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0369A1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
            >
              security@deskmedai.com
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
