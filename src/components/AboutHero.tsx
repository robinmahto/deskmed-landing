const meta = [
  { label: "Founded", value: "2021" },
  { label: "Headquarters", value: "Bengaluru" },
  { label: "Team", value: "60+ people" },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0D1117] pt-36 pb-24 sm:pt-40 sm:pb-28">
      {/* Ambient coral glow */}
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute left-1/2 -top-28 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#FF5C3A] opacity-50 blur-[130px]"
      />
      {/* Dotted texture */}
      <div aria-hidden="true" className="bg-dot-grid absolute inset-0 opacity-70" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF5C3A]">
          Our Story
        </p>
        <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl md:text-[4.25rem]">
          We&rsquo;re rebuilding the clinic,
          <br className="hidden sm:block" /> one workflow at a time.
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
          DeskMed began in a single two-doctor clinic in Pune that was losing
          hours every day to paper files and scattered spreadsheets. We set out
          to give every Indian clinic the kind of software hospitals pay crores
          for &mdash; simple enough to run from the front desk.
        </p>

        {/* Meta strip */}
        <dl className="mx-auto mt-12 flex max-w-xl flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {meta.map((item) => (
            <div key={item.label} className="text-center">
              <dt className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
                {item.label}
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold text-white">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
