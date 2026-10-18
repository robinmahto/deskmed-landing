const highlights = [
  { label: "Avg. first reply", value: "< 1 business day" },
  { label: "Support hours", value: "Mon–Sat, 9am–7pm IST" },
  { label: "Languages", value: "English, हिन्दी & more" },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] pt-36 pb-20 sm:pt-40 sm:pb-24">
      {/* Ambient blue glow */}
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute left-1/2 -top-28 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#0284C7] opacity-40 blur-[130px]"
      />
      {/* Dotted texture */}
      <div aria-hidden="true" className="bg-dot-grid-dark absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0284C7]">
          Contact
        </p>
        <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl md:text-[4.25rem]">
          Let&rsquo;s talk about
          <br className="hidden sm:block" /> your clinic.
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
          Book a demo, ask a question, or tell us what your practice needs. A
          real person from our team &mdash; not a bot &mdash; will get back to
          you.
        </p>

        {/* Highlights strip */}
        <dl className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {highlights.map((item) => (
            <div key={item.label} className="text-center">
              <dt className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
                {item.label}
              </dt>
              <dd className="mt-1 font-display text-lg font-bold text-white">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
