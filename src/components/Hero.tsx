export default function Hero() {
  return (
    <section id="hero" className="bg-white pt-28 pb-0 overflow-hidden relative">

      {/* Ambient background glow — clean clinical sky/mint tint */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] rounded-full opacity-60 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #e0f2fe 0%, #ecfdf5 45%, transparent 75%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Cal.com style trust pill badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 bg-white/90 border border-slate-200/90 text-slate-700 text-xs px-3.5 py-1.5 rounded-full shadow-xs backdrop-blur-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-slate-800">Trusted by 2,400+ clinics across India</span>
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-center text-[clamp(2.6rem,5.5vw,4.5rem)] font-bold text-slate-900 leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
          One dashboard for your{" "}
          <em className="not-italic text-[#0284C7] bg-gradient-to-r from-[#0284C7] to-[#0D9488] bg-clip-text text-transparent">
            entire
          </em>{" "}
          clinic
        </h1>

        {/* Subtext */}
        <p className="text-center text-slate-600 text-lg max-w-lg mx-auto leading-relaxed mb-10">
          Appointments, EMR, prescriptions, billing, lab reports — built for how Indian clinics actually work. Free to start.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="https://app.deskmed.online/setup"
            className="bg-[#0F172A] text-white px-7 py-3.5 rounded-xl font-medium text-sm hover:bg-[#1E293B] transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-slate-900/10 hover:shadow-lg"
          >
            Start Free Trial
          </a>
          <a
            href="#features"
            className="text-slate-700 hover:text-slate-900 text-sm flex items-center gap-2 transition-all duration-200 font-medium px-4 py-3.5 rounded-xl hover:bg-slate-50 border border-slate-200/80 bg-white/60 shadow-xs"
          >
            See Features
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Dashboard mockup (Cal.com style light clinical UI) */}
        <div className="relative max-w-4xl mx-auto">
          {/* Soft shadow/glow underneath */}
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-24 opacity-40 blur-2xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #bae6fd 0%, transparent 70%)" }}
          />

          <div className="relative rounded-t-2xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white">
            {/* Window chrome */}
            <div className="bg-slate-50/90 flex items-center justify-between px-4 py-3 border-b border-slate-200">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <div className="max-w-xs bg-white border border-slate-200/80 rounded-md px-3 py-1 text-slate-500 text-xs font-mono shadow-xs">
                app.deskmed.online/dashboard
              </div>
              <div className="w-12" />
            </div>

            {/* App layout */}
            <div className="flex bg-white" style={{ minHeight: "340px" }}>

              {/* Sidebar */}
              <div className="hidden sm:flex w-48 shrink-0 border-r border-slate-200 bg-slate-50/60 p-4 flex-col gap-1">
                <div className="flex items-center gap-2 px-2 mb-5">
                  <div className="w-5 h-5 bg-[#0284C7] rounded flex items-center justify-center shadow-xs">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-slate-900 text-xs font-bold tracking-tight">DeskMed</span>
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
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      item.active
                        ? "bg-[#0284C7]/10 text-[#0284C7]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                    }`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Main area */}
              <div className="flex-1 p-4 sm:p-5 overflow-hidden bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-slate-900 font-semibold text-xs">Good morning, Dr. Mehta</div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    OPD Active · Token #14
                  </span>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                  {[
                    { label: "Today's Patients", value: "24", delta: "+3 queue", deltaColor: "text-emerald-600 bg-emerald-50" },
                    { label: "Pending Billing", value: "₹18.4k", delta: "4 invoices", deltaColor: "text-amber-700 bg-amber-50" },
                    { label: "Lab Reports", value: "7", delta: "new ready", deltaColor: "text-sky-700 bg-sky-50" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-2.5 sm:p-3 shadow-xs">
                      <div className="text-slate-500 text-[10px] font-medium leading-tight mb-1">{stat.label}</div>
                      <div className="text-slate-900 font-bold text-sm sm:text-base leading-none mb-1.5">{stat.value}</div>
                      <div className={`text-[10px] font-medium px-1.5 py-0.5 rounded-md inline-block ${stat.deltaColor}`}>
                        {stat.delta}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Today's schedule */}
                <div className="bg-slate-50/50 border border-slate-200/80 rounded-xl p-3 shadow-xs">
                  <div className="text-slate-500 font-semibold text-[10px] uppercase tracking-wider mb-2.5">
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
                      className="flex items-center gap-3 py-1.5 border-b border-slate-200/60 last:border-0"
                    >
                      <span className="text-slate-400 font-mono text-[10px] w-10 shrink-0">{appt.time}</span>
                      <span
                        className={`text-xs font-medium flex-1 ${
                          appt.status === "done" ? "text-slate-400 line-through" :
                          appt.status === "active" ? "text-slate-900 font-semibold" : "text-slate-700"
                        }`}
                      >
                        {appt.name}
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          appt.status === "active"
                            ? "bg-sky-50 text-[#0284C7] border border-sky-200"
                            : appt.status === "done"
                            ? "bg-slate-100 text-slate-500"
                            : "bg-white border border-slate-200 text-slate-600"
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
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
