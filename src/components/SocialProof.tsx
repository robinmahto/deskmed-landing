const stats = [
  {
    value: "2,400+",
    label: "Clinics",
    icon: (
      <path
        d="M3 17h14M5 17V8l4-3 4 3v9M9 9v3M7.5 10.5h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    value: "18L+",
    label: "Patients Managed",
    icon: (
      <path
        d="M7 9a2.2 2.2 0 1 0 0-4.4A2.2 2.2 0 0 0 7 9ZM2.5 16c0-2.3 2-3.8 4.5-3.8M13 9.2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM11.5 12.4c2.1.1 4 1.5 4 3.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    value: "99.9%",
    label: "Uptime",
    icon: (
      <path
        d="M2.5 10h3l1.8-5 3 11 1.9-6h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    value: "4.9★",
    label: "Average Rating",
    icon: (
      <path
        d="M10 2.5l2.2 4.45 4.9.72-3.55 3.46.84 4.87L10 14.7l-4.38 2.3.84-4.87L2.9 7.67l4.9-.72L10 2.5Z"
        fill="currentColor"
      />
    ),
  },
];

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-slate-50/75 border-y border-slate-200/80">
      <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-16">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="h-px w-8 bg-slate-200" />
          <p className="text-slate-500 text-[11px] font-semibold tracking-[0.2em] uppercase text-center">
            Trusted by clinics across India
          </p>
          <span className="h-px w-8 bg-slate-200" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => {
            const dividers = [
              "border-slate-200/80",
              i % 2 === 1 ? "border-l" : "",
              i >= 2 ? "border-t md:border-t-0" : "",
              i !== 0 ? "md:border-l" : "md:border-l-0",
            ].join(" ");

            return (
              <div
                key={stat.label}
                className={`group flex flex-col items-center text-center px-4 py-8 md:py-4 transition-all duration-200 ${dividers}`}
              >
                {/* Icon chip */}
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0284C7] ring-1 ring-slate-200/80 shadow-xs transition-all duration-300 group-hover:bg-sky-50 group-hover:ring-sky-200 group-hover:-translate-y-0.5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    {stat.icon}
                  </svg>
                </span>

                <p className="font-display text-4xl md:text-[2.75rem] font-bold text-slate-900 leading-none mb-2 transition-transform duration-300 group-hover:-translate-y-0.5 tabular-nums">
                  {stat.value}
                </p>
                <p className="text-slate-600 text-xs md:text-sm font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
