const founders = [
  {
    name: "Aarav Mehta",
    role: "Co-founder & CEO",
    bio: "Former product lead at a payments unicorn. Grew up in a family of doctors and started DeskMed after watching his mother's clinic drown in registers.",
    initials: "AM",
  },
  {
    name: "Dr. Priya Nair",
    role: "Co-founder & Chief Medical Officer",
    bio: "Practising physician for 12 years. Keeps the product honest about how clinical work actually happens, from triage to discharge.",
    initials: "PN",
  },
  {
    name: "Rohan Iyer",
    role: "Co-founder & CTO",
    bio: "Built distributed systems at scale before DeskMed. Obsessed with uptime, data isolation, and making the dashboard feel instant on a 3G connection.",
    initials: "RI",
  },
];

const team = [
  { name: "Sneha Kulkarni", role: "Head of Design", initials: "SK" },
  { name: "Vikram Reddy", role: "Engineering Lead", initials: "VR" },
  { name: "Ananya Bose", role: "Customer Success", initials: "AB" },
  { name: "Imran Sheikh", role: "Clinic Partnerships", initials: "IS" },
];

function Avatar({ initials, size }: { initials: string; size: "lg" | "sm" }) {
  const dims = size === "lg" ? "h-16 w-16 text-lg" : "h-12 w-12 text-sm";
  return (
    <span
      aria-hidden="true"
      className={`flex ${dims} shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF5C3A] to-[#e84e2d] font-display font-bold tracking-tight text-white shadow-lg shadow-[#FF5C3A]/20`}
    >
      {initials}
    </span>
  );
}

export default function AboutTeam() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF6] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF5C3A]">
            The People
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-[#0D1117] sm:text-4xl">
            A small team that loves clinics
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[#1C1C28]/65">
            Doctors, engineers, and designers who&rsquo;d rather sit in a waiting
            room than a boardroom. We build alongside the clinics we serve.
          </p>
        </div>

        {/* Founders */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {founders.map((person) => (
            <div
              key={person.name}
              className="group rounded-2xl border border-[#E5E5DF] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0D1117]/5"
            >
              <Avatar initials={person.initials} size="lg" />
              <h3 className="mt-5 text-lg font-semibold text-[#0D1117]">
                {person.name}
              </h3>
              <p className="text-sm font-medium text-[#FF5C3A]">{person.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#1C1C28]/65">
                {person.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Wider team */}
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {team.map((person) => (
            <div
              key={person.name}
              className="flex items-center gap-3 rounded-2xl border border-[#E5E5DF] bg-white px-5 py-4"
            >
              <Avatar initials={person.initials} size="sm" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-[#0D1117]">
                  {person.name}
                </p>
                <p className="truncate text-xs text-[#1C1C28]/55">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring nudge */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#E5E5DF] bg-white px-8 py-7 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-lg font-semibold text-[#0D1117]">
              We&rsquo;re hiring across India
            </p>
            <p className="mt-1 text-sm text-[#1C1C28]/65">
              Engineering, design, and clinic success roles are open.
            </p>
          </div>
          <a
            href="/careers"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#FF5C3A] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e84e2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF6]"
          >
            See open roles
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
    </section>
  );
}
