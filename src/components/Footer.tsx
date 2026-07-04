const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Integrations", href: "#integrations" },
  { label: "Changelog", href: "/changelog" },
];

const clinicLinks = [
  { label: "For Doctors", href: "#features" },
  { label: "For Labs", href: "#features" },
  { label: "Multi-clinic", href: "#features" },
  { label: "Security", href: "/security" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Support", href: "mailto:support@deskmed.in" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "DPDP Compliance", href: "/dpdp" },
  { label: "Status", href: "https://app.deskmed.online" },
];

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-white/40 text-[11px] font-semibold tracking-widest uppercase mb-4">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="group inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors duration-200"
            >
              {link.label}
              <span className="h-px w-0 bg-[#FF5C3A] group-hover:w-4 transition-all duration-300 ease-out" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#0D1117] overflow-hidden">
      {/* Ambient coral glow */}
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute left-1/2 -top-24 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[#FF5C3A] opacity-60 blur-[120px]"
      />
      {/* Dotted texture */}
      <div aria-hidden="true" className="bg-dot-grid absolute inset-0 opacity-70" />

      <div className="relative">
        {/* CTA band */}
        <section className="border-b border-white/[0.06] py-24 sm:py-28">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-[#FF5C3A] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Start today
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
              Ready to modernise
              <br className="hidden sm:block" /> your clinic?
            </h2>
            <p className="text-white/50 text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed">
              Join 2,400+ clinics already on DeskMed. Free for 14 days,
              no card needed.
            </p>
            <div className="flex items-center justify-center gap-5 flex-wrap">
              <a
                href="https://app.deskmed.online/setup"
                className="group relative inline-flex items-center gap-2 bg-[#FF5C3A] text-white px-8 py-4 rounded-xl font-medium text-sm hover:bg-[#e84e2d] transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#FF5C3A]/25"
              >
                Start Free Trial
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
              <a
                href="mailto:support@deskmed.in"
                className="text-white/60 hover:text-white text-sm transition-colors duration-200 underline-offset-4 hover:underline"
              >
                Talk to us
              </a>
            </div>
          </div>
        </section>

        {/* Main footer */}
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-y-12 gap-x-8">
            {/* Brand block */}
            <div className="col-span-2 md:col-span-4 md:pr-8">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-7 h-7 bg-[#FF5C3A] rounded-md flex items-center justify-center shrink-0">
                  <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M5 1v8M1 5h8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-white text-base font-semibold tracking-tight">
                  DeskMed
                </span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed max-w-[15rem] mb-6">
                The all-in-one operating system for modern Indian clinics —
                appointments, EMR, labs and billing in one place.
              </p>

              {/* Made in India badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 mb-6">
                <span className="flex h-3.5 w-3.5 flex-col overflow-hidden rounded-[3px]">
                  <span className="h-1/3 bg-[#FF9933]" />
                  <span className="h-1/3 bg-white" />
                  <span className="h-1/3 bg-[#138808]" />
                </span>
                <span className="text-white/55 text-xs font-medium">
                  Made in India
                </span>
              </div>

              {/* Social */}
              <div className="flex items-center gap-2.5">
                {[
                  {
                    label: "Twitter",
                    href: "https://twitter.com/deskmed",
                    path: "M13.5 2.5h2.2l-4.8 5.5 5.6 7.5h-4.4l-3.5-4.5-4 4.5H2.4l5.1-5.9L2.1 2.5h4.5l3.1 4.2 3.8-4.2Zm-.8 11.7h1.2L6.1 3.7H4.8l7.9 10.5Z",
                  },
                  {
                    label: "LinkedIn",
                    href: "https://linkedin.com/company/deskmed",
                    path: "M5 7v8H2.5V7H5ZM3.75 2.5a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8ZM7 7h2.4v1.1c.4-.7 1.3-1.3 2.6-1.3 2 0 3 1.3 3 3.6V15h-2.5v-4c0-1-.4-1.7-1.3-1.7-.8 0-1.3.6-1.3 1.6V15H7V7Z",
                  },
                  {
                    label: "Instagram",
                    href: "https://instagram.com/deskmed",
                    path: "M6 2.5h6A3.5 3.5 0 0 1 15.5 6v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 12V6A3.5 3.5 0 0 1 6 2.5Zm0 1.5A2 2 0 0 0 4 6v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Zm3 2.3a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Zm0 1.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM12.4 5a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/55 hover:text-white hover:border-[#FF5C3A]/40 hover:bg-[#FF5C3A]/10 transition-colors duration-200"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="md:col-span-2">
              <LinkColumn title="Product" links={productLinks} />
            </div>
            <div className="md:col-span-2">
              <LinkColumn title="Clinics" links={clinicLinks} />
            </div>
            <div className="md:col-span-2">
              <LinkColumn title="Company" links={companyLinks} />
            </div>
            <div className="md:col-span-2">
              <LinkColumn title="Legal" links={legalLinks} />
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-7 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/35 text-xs order-2 sm:order-1">
              © 2026 DeskMed. All rights reserved.
            </p>
            <div className="flex items-center gap-2 order-1 sm:order-2 text-xs">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#16A34A] shadow-[0_0_8px_#16A34A]" />
              <span className="text-white/45">All systems operational</span>
              <span className="text-white/15">·</span>
              <span className="text-white/35">deskmed.in</span>
            </div>
          </div>
        </div>

        {/* Oversized ghost wordmark — signature element */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none overflow-hidden"
        >
          <p className="font-display font-bold text-white/[0.04] leading-none text-center whitespace-nowrap text-[24vw] -mb-[6vw] tracking-tight">
            DeskMed
          </p>
        </div>
      </div>
    </footer>
  );
}
