const stats = [
  { value: "2,400+", label: "Clinics on DeskMed" },
  { value: "120+", label: "Cities across India" },
  { value: "18L+", label: "Patients managed" },
  { value: "₹500Cr+", label: "Billed through us" },
];

export default function AboutMission() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF6] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Sticky heading */}
          <div className="md:col-span-4">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF5C3A]">
              Our Mission
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-[#0D1117] sm:text-4xl">
              Healthcare runs on details. We sweat them so doctors don&rsquo;t.
            </h2>
          </div>

          {/* Narrative */}
          <div className="md:col-span-8">
            <div className="space-y-6 text-base leading-relaxed text-[#1C1C28]/75 md:text-lg">
              <p>
                A clinic is one of the most information-dense businesses in the
                world. Every visit is a small mountain of records &mdash;
                history, vitals, prescriptions, lab orders, payments &mdash; and
                for most Indian clinics, all of it still lives in registers,
                WhatsApp threads, and a billing book at the desk.
              </p>
              <p>
                We believe that doctors should spend their attention on patients,
                not paperwork; that a receptionist should be able to find any
                record in seconds; and that a clinic owner should see how the
                practice is really doing without exporting a single spreadsheet.
              </p>
              <p>
                DeskMed brings appointments, EMR, prescriptions, billing, and lab
                reports into one calm dashboard &mdash; designed for Indian
                workflows, priced for Indian clinics, and built to keep patient
                data private and compliant by default.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-10 border-l-2 border-[#FF5C3A] pl-6">
              <p className="font-display text-xl font-medium italic leading-snug text-[#0D1117] md:text-2xl">
                &ldquo;If the software gets out of the way, the care gets
                better. That&rsquo;s the whole job.&rdquo;
              </p>
              <footer className="mt-3 text-sm font-medium text-[#1C1C28]/55">
                &mdash; Aarav Mehta, Co-founder &amp; CEO
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Traction stats */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#E5E5DF] bg-[#E5E5DF] md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center bg-[#FAFAF6] px-4 py-8 text-center transition-colors duration-300 hover:bg-white"
            >
              <p className="font-display text-3xl font-bold leading-none text-[#0D1117] md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium tracking-wide text-[#1C1C28]/55 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
