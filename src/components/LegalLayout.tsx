import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalContent = {
  eyebrow?: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export default function LegalLayout({
  eyebrow = "Legal",
  title,
  lastUpdated,
  intro,
  sections,
}: LegalContent) {
  return (
    <main>
      <Navbar />

      {/* Compact hero */}
      <section className="relative overflow-hidden bg-[#0F172A] pt-36 pb-16 sm:pt-40 sm:pb-20">
        <div
          aria-hidden="true"
          className="animate-glow pointer-events-none absolute left-1/2 -top-28 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-[#0284C7] opacity-30 blur-[130px]"
        />
        <div aria-hidden="true" className="bg-dot-grid-dark absolute inset-0 opacity-60" />

        <div className="relative mx-auto max-w-3xl px-6">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0284C7]">
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/60">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#0284C7]" />
            Last updated {lastUpdated}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55">
            {intro}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="relative bg-slate-50/50 py-16 sm:py-20 border-t border-slate-200/80">
        <div className="mx-auto max-w-5xl px-6">
          <div className="lg:grid lg:grid-cols-[14rem_1fr] lg:gap-12">
            {/* Table of contents */}
            <nav
              aria-label="On this page"
              className="mb-12 lg:mb-0 lg:sticky lg:top-24 lg:self-start"
            >
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                On this page
              </p>
              <ul className="space-y-2.5 border-l border-slate-200 pl-4">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-slate-600 transition-colors duration-200 hover:text-[#0284C7]"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Content */}
            <div className="max-w-2xl">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 border-b border-slate-200 py-8 first:pt-0 last:border-b-0"
                >
                  <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((paragraph, i) => (
                    <p
                      key={i}
                      className="mt-4 text-[15px] leading-relaxed text-slate-700"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {section.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-[15px] leading-relaxed text-slate-700"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0284C7]"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
