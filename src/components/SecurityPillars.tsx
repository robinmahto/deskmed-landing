const pillars = [
  {
    title: "Encryption everywhere",
    body: "Traffic is protected with TLS 1.3 in transit and AES-256 at rest. Backups and file attachments — lab reports, scans, documents — are encrypted with the same standard.",
    icon: (
      <path
        d="M6 9V6.5a4 4 0 0 1 8 0V9M5 9h10v7H5V9Zm5 3v1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Tenant isolation",
    body: "Every clinic is a separate organization, and every record is scoped to it at the query layer. One clinic can never read or write another clinic's data — it's enforced on every request, not just the UI.",
    icon: (
      <path
        d="M4 7h5v6H4V7Zm7 0h5v6h-5V7ZM6.5 10h0M13.5 10h0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Role-based access",
    body: "Admins, doctors, receptionists, and lab technicians each see only what their role needs. Least-privilege access keeps prescriptions, billing, and reports in the right hands.",
    icon: (
      <path
        d="M10 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-4.5 5c0-2.2 2-3.6 4.5-3.6s4.5 1.4 4.5 3.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Audited & accountable",
    body: "Every change to a patient or appointment writes an immutable audit log — who did what, and when. If a record is touched, there's a trail.",
    icon: (
      <path
        d="M6 4h8v12H6V4Zm2.5 4h3M8.5 11h3M8.5 14h2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Secure authentication",
    body: "Passwords are hashed with bcrypt and never stored in plain text. Sessions use short-lived access tokens with rotating refresh tokens, so a leaked token expires fast.",
    icon: (
      <path
        d="M10 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v2.5M7 6V5a3 3 0 0 1 6 0v1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Backups & recovery",
    body: "Encrypted backups run automatically every day with point-in-time recovery. We test restores regularly, so your records are recoverable — not just backed up.",
    icon: (
      <path
        d="M4.5 7.5a5.5 5.5 0 0 1 10-1.5M15.5 5v3h-3M15.5 12.5a5.5 5.5 0 0 1-10 1.5M4.5 15v-3h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function SecurityPillars() {
  return (
    <section className="relative bg-slate-50/50 py-24 sm:py-28 border-t border-slate-200/80">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0284C7]">
            How we protect you
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Security at every layer
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-slate-600">
            From the database to the browser, here&rsquo;s what keeps your
            clinic&rsquo;s data safe.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7] ring-1 ring-sky-200 transition-transform duration-300 group-hover:-translate-y-0.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  {pillar.icon}
                </svg>
              </span>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
