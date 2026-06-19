export default function Hero() {
  return (
    <section className="bg-[#0D1117] pt-28 pb-0 overflow-hidden relative">

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #FF5C3A 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Badge */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/60 text-xs px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C3A] shrink-0" />
            Trusted by 2,400+ clinics across India
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-center text-[clamp(2.6rem,6vw,4.5rem)] font-bold text-white leading-[1.08] tracking-tight mb-6">
          One dashboard for your{" "}
          <em className="not-italic text-[#FF5C3A]">entire</em> clinic
        </h1>

        {/* Subtext */}
        <p className="text-center text-white/45 text-lg max-w-lg mx-auto leading-relaxed mb-10">
          Appointments, EMR, prescriptions, billing, lab reports — built for how Indian clinics actually work. Free to start.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="https://app.deskmed.in/setup"
            className="bg-[#FF5C3A] text-white px-7 py-3.5 rounded-xl font-medium text-sm hover:bg-[#e84e2d] transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#FF5C3A]/20"
          >
            Start Free Trial
          </a>
          <a
            href="#features"
            className="text-white/50 hover:text-white text-sm flex items-center gap-1.5 transition-colors duration-200"
          >
            See Features
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Dashboard mockup */}
        <div className="relative max-w-4xl mx-auto">
          {/* Blue glow under dashboard */}
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-24 opacity-30 blur-2xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #2A6BDB 0%, transparent 70%)" }}
          />

          <div className="relative rounded-t-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Window chrome */}
            <div className="bg-[#0F1420] flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <div className="ml-4 flex-1 max-w-xs bg-white/5 rounded px-3 py-1 text-white/25 text-xs">
                app.deskmed.in/dashboard
              </div>
            </div>

            {/* App layout */}
            <div className="flex bg-[#0F1420]" style={{ height: "320px" }}>

              {/* Sidebar — hidden on phones so the dashboard area gets full width */}
              <div className="hidden sm:flex w-44 shrink-0 border-r border-white/5 p-4 flex-col gap-0.5">
                <div className="flex items-center gap-2 px-2 mb-5">
                  <div className="w-5 h-5 bg-[#FF5C3A] rounded flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-white/80 text-xs font-semibold">DeskMed</span>
                </div>
                {[
                  { label: "Dashboard", active: true },
                  { label: "Patients", active: false },
                  { label: "Appointments", active: false },
                  { label: "Billing", active: false },
                  { label: "Lab Reports", active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`px-2 py-1.5 rounded-md text-xs transition-colors ${
                      item.active
                        ? "bg-white/10 text-white font-medium"
                        : "text-white/35"
                    }`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Main area */}
              <div className="flex-1 p-4 sm:p-5 overflow-hidden">
                <div className="text-white/40 text-xs mb-4">Good morning, Dr. Mehta</div>

                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                  {[
                    { label: "Today's Patients", value: "24", delta: "+3" },
                    { label: "Pending Billing", value: "₹18.4k", delta: "4 invoices" },
                    { label: "Lab Reports", value: "7", delta: "new" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/[0.04] border border-white/5 rounded-lg p-2.5 sm:p-3">
                      <div className="text-white/35 text-[10px] leading-tight mb-1.5">{stat.label}</div>
                      <div className="text-white font-semibold text-sm sm:text-base leading-none mb-1">{stat.value}</div>
                      <div className="text-[#28C840] text-[10px] leading-tight">{stat.delta}</div>
                    </div>
                  ))}
                </div>

                {/* Today's schedule */}
                <div className="bg-white/[0.04] border border-white/5 rounded-lg p-3">
                  <div className="text-white/35 text-[10px] uppercase tracking-wider mb-2.5">
                    Today's Schedule
                  </div>
                  {[
                    { time: "09:00", name: "Priya Sharma", type: "Consultation", status: "done" },
                    { time: "09:30", name: "Rahul Patel", type: "Follow-up", status: "active" },
                    { time: "10:00", name: "Meena Iyer", type: "Lab Review", status: "upcoming" },
                    { time: "10:30", name: "Arun Kumar", type: "Consultation", status: "upcoming" },
                  ].map((appt) => (
                    <div
                      key={appt.time}
                      className="flex items-center gap-3 py-1.5 border-b border-white/[0.04] last:border-0"
                    >
                      <span className="text-white/25 text-[10px] w-9 shrink-0">{appt.time}</span>
                      <span
                        className={`text-xs flex-1 ${
                          appt.status === "done" ? "text-white/25 line-through" :
                          appt.status === "active" ? "text-white" : "text-white/55"
                        }`}
                      >
                        {appt.name}
                      </span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded text-white/40 ${
                          appt.status === "active"
                            ? "bg-[#FF5C3A]/20 text-[#FF5C3A]"
                            : "bg-white/5"
                        }`}
                      >
                        {appt.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Fade-out at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0D1117] to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
