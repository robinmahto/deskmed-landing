"use client";

import { useEffect, useRef, useState } from "react";

const inquiryTypes = [
  { value: "sales", label: "Sales & demo", email: "sales@deskmedai.com" },
  { value: "support", label: "Product support", email: "support@deskmedai.com" },
  { value: "partnership", label: "Partnership", email: "partnerships@deskmedai.com" },
  { value: "other", label: "Something else", email: "hello@deskmedai.com" },
];

const channels = [
  {
    label: "Sales & demos",
    value: "sales@deskmedai.com",
    href: "mailto:sales@deskmedai.com",
    icon: (
      <path
        d="M2.5 5.5h15v9h-15v-9Zm0 .5 7.5 5 7.5-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Existing clinics",
    value: "support@deskmedai.com",
    href: "mailto:support@deskmedai.com",
    icon: (
      <path
        d="M10 2.8l5.5 2.2v4.3c0 3.7-2.4 6.4-5.5 7.9-3.1-1.5-5.5-4.2-5.5-7.9V5L10 2.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Call us",
    value: "+91 80 4718 2200",
    href: "tel:+918047182200",
    icon: (
      <path
        d="M5 3.5c.4 2 1.2 3.8 2.4 5.4 1.2 1.6 2.7 2.9 4.6 3.9l1.8-1.8 3.2 1.3v3.2c-3.7.4-7.2-1-9.9-3.7C4.4 9.1 3 5.6 3.4 1.9L6.6 3.2 5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "WhatsApp",
    value: "+91 80 4718 2200",
    href: "https://wa.me/918047182200",
    icon: (
      <path
        d="M10 3a7 7 0 0 0-6 10.6L3 17l3.5-1A7 7 0 1 0 10 3Zm0 1.5a5.5 5.5 0 1 1-2.8 10.2l-.3-.2-1.7.5.5-1.6-.2-.3A5.5 5.5 0 0 1 10 4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Field = "name" | "clinic" | "email" | "phone" | "inquiry" | "message";

const initialForm: Record<Field, string> = {
  name: "",
  clinic: "",
  email: "",
  phone: "",
  inquiry: "sales",
  message: "",
};

// Shared light-theme input styling.
function inputClass(hasError?: boolean) {
  return `w-full rounded-xl border bg-white px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 ${
    hasError
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
      : "border-slate-200 focus:border-[#0284C7] focus:ring-[#0284C7]/20"
  }`;
}

export default function ContactMain({
  id,
  showIntro = false,
}: {
  /** Anchor id for the section — set to "contact" when used on the home page. */
  id?: string;
  /** Render an eyebrow + heading above the grid (for pages without a ContactHero). */
  showIntro?: boolean;
}) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: Field, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate() {
    const next: Partial<Record<Field, string>> = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!form.email.trim()) next.email = "We need an email to reply to.";
    else if (!EMAIL_RE.test(form.email.trim()))
      next.email = "That email doesn't look right.";
    if (form.message.trim().length < 10)
      next.message = "A line or two about what you need helps us route you.";
    return next;
  }

  function submit() {
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      // Guideline: move focus to the first field with an error.
      const firstError = (["name", "email", "message"] as Field[]).find(
        (f) => next[f]
      );
      if (firstError) document.getElementById(firstError)?.focus();
      return;
    }

    const target =
      inquiryTypes.find((t) => t.value === form.inquiry) ?? inquiryTypes[0];
    const subject = `[${target.label}] Enquiry from ${form.name}${
      form.clinic ? ` (${form.clinic})` : ""
    }`;
    const body = [
      `Name: ${form.name}`,
      `Clinic: ${form.clinic || "—"}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "—"}`,
      `Type: ${target.label}`,
      "",
      form.message,
    ].join("\n");

    // TODO(backend): the landing site is static, so this hands the submission
    // off to the visitor's mail client. Once an API exists, replace this with
    // a POST to a Next.js route handler or a form service (e.g. Formspree).
    window.location.href = `mailto:${target.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    submit();
  }

  return (
    <section
      id={id}
      className="relative overflow-hidden bg-slate-50/50 py-24 sm:py-28 border-t border-slate-200/80"
    >
      {/* Soft sky glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-[34rem] rounded-full bg-sky-100 opacity-60 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {showIntro && (
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0284C7]">
              Get in touch
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Have a question? Let&rsquo;s talk.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-slate-600">
              Book a demo or ask us anything about running your clinic on
              DeskMed. A real person replies within one business day.
            </p>
          </div>
        )}

        {/* Split card */}
        <div className="grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-5">
          {/* Deep slate channels panel */}
          <aside className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-8 sm:p-10 lg:col-span-2">
            {/* Decorative dot field + soft highlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl"
            />
            {/* Oversized ghost mark */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -right-6 h-44 w-44 text-white/10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                d="M5 1v8M1 5h8"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>

            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Reach us directly
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-white">
                Real people, fast replies
              </h2>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">
                Pick whatever&rsquo;s easiest. Sales enquiries usually hear back
                the same day.
              </p>

              <ul className="mt-8 space-y-2.5">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      className="group flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                      style={{ touchAction: "manipulation" }}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white ring-1 ring-white/20">
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                          {channel.icon}
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-semibold uppercase tracking-wide text-white/70">
                          {channel.label}
                        </span>
                        <span className="block truncate text-sm font-semibold text-white">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Office */}
              <div className="mt-8 border-t border-white/20 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-white/70">
                  Office
                </p>
                <address className="mt-2 text-sm not-italic leading-relaxed text-white/85">
                  DeskMed Technologies Pvt. Ltd.
                  <br />
                  4th Floor, Brigade Gateway, Rajajinagar
                  <br />
                  Bengaluru, Karnataka 560055, India
                </address>
              </div>
            </div>
          </aside>

          {/* Form panel */}
          <div className="p-8 sm:p-10 lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#16A34A]/10 text-[#16A34A] ring-1 ring-[#16A34A]/20">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12.5l4 4 10-10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h2 className="font-display text-2xl font-bold text-[#0D1117]">
                  Thanks &mdash; your message is on its way
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#1C1C28]/60">
                  Your email app should have opened with the details filled in.
                  If it didn&rsquo;t, write to us directly at{" "}
                  <a
                    href="mailto:sales@deskmedai.com"
                    className="font-medium text-[#0284C7] underline-offset-2 hover:underline"
                  >
                    sales@deskmedai.com
                  </a>
                  . We&rsquo;ll reply within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                  }}
                  style={{ touchAction: "manipulation" }}
                  className="mt-7 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 underline-offset-4 transition-colors hover:text-slate-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2 className="font-display text-2xl font-bold text-slate-900">
                  Send us a message
                </h2>
                <p className="mt-1.5 text-sm text-slate-500">
                  Fields marked with an asterisk (*) are required.
                </p>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <FormField
                    id="name"
                    label="Your name *"
                    placeholder="Dr. Asha Verma"
                    autoComplete="name"
                    value={form.name}
                    error={errors.name}
                    onChange={(v) => update("name", v)}
                  />
                  <FormField
                    id="clinic"
                    label="Clinic name"
                    placeholder="Sunrise Family Clinic"
                    autoComplete="organization"
                    value={form.clinic}
                    onChange={(v) => update("clinic", v)}
                  />
                  <FormField
                    id="email"
                    label="Email *"
                    type="email"
                    inputMode="email"
                    placeholder="you@clinic.in"
                    autoComplete="email"
                    value={form.email}
                    error={errors.email}
                    onChange={(v) => update("email", v)}
                  />
                  <FormField
                    id="phone"
                    label="Phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(v) => update("phone", v)}
                  />
                </div>

                <div className="mt-5">
                  <CustomSelect
                    id="inquiry"
                    label="What's this about?"
                    value={form.inquiry}
                    options={inquiryTypes}
                    onChange={(v) => update("inquiry", v)}
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-900"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your clinic and what you're looking for…"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    onKeyDown={(e) => {
                      // Guideline: Cmd/Ctrl+Enter submits from a textarea.
                      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") submit();
                    }}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${inputClass(!!errors.message)} resize-y`}
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      role="alert"
                      className="mt-2 flex items-center gap-1.5 text-xs text-red-600"
                    >
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M7 4.5v3M7 9.5h.01M7 1.5 12.5 11h-11L7 1.5Z"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    style={{ touchAction: "manipulation" }}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0284C7] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-sky-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0369A1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
                  >
                    Send message
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
                  </button>
                  <p className="text-xs text-slate-500">
                    We&rsquo;ll never share your details. No spam, ever.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Accessible, theme-matched dropdown (ARIA 1.2 select-only combobox pattern).
 * Replaces the native <select> so the option list can be styled to match.
 */
function CustomSelect({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.max(
      0,
      options.findIndex((o) => o.value === value)
    )
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selected = options.find((o) => o.value === value) ?? options[0];
  const labelId = `${id}-label`;
  const valueId = `${id}-value`;

  // Close when clicking outside the control.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  // Keep the active option in view while navigating with the keyboard.
  useEffect(() => {
    if (!open) return;
    const node = listRef.current?.children[activeIndex] as
      | HTMLElement
      | undefined;
    node?.scrollIntoView?.({ block: "nearest" });
  }, [open, activeIndex]);

  function openMenu() {
    setActiveIndex(Math.max(0, options.findIndex((o) => o.value === value)));
    setOpen(true);
  }

  function choose(index: number) {
    const opt = options[index];
    if (opt) onChange(opt.value);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!open) openMenu();
        else setActiveIndex((i) => Math.min(options.length - 1, i + 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!open) openMenu();
        else setActiveIndex((i) => Math.max(0, i - 1));
        break;
      case "Home":
        if (open) {
          e.preventDefault();
          setActiveIndex(0);
        }
        break;
      case "End":
        if (open) {
          e.preventDefault();
          setActiveIndex(options.length - 1);
        }
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (!open) openMenu();
        else choose(activeIndex);
        break;
      case "Escape":
        if (open) {
          e.preventDefault();
          setOpen(false);
        }
        break;
      case "Tab":
        if (open) setOpen(false);
        break;
    }
  }

  return (
    <div ref={containerRef} className="relative">
      <span
        id={labelId}
        className="mb-2 block text-sm font-medium text-[#1C1C28]"
      >
        {label}
      </span>
      <button
        ref={buttonRef}
        id={`${id}-button`}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-listbox`}
        aria-labelledby={`${labelId} ${valueId}`}
        aria-activedescendant={open ? `${id}-opt-${activeIndex}` : undefined}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={onKeyDown}
        style={{ touchAction: "manipulation" }}
        className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-base text-slate-900 transition-colors duration-200 hover:border-slate-300 focus-visible:border-[#0284C7] focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7]/20"
      >
        <span id={valueId}>{selected.label}</span>
        <svg
          aria-hidden="true"
          className={`shrink-0 text-slate-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 5l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          ref={listRef}
          id={`${id}-listbox`}
          role="listbox"
          aria-labelledby={labelId}
          tabIndex={-1}
          className="absolute z-30 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10"
        >
          {options.map((opt, index) => {
            const isSelected = opt.value === value;
            const isActive = index === activeIndex;
            return (
              <li
                key={opt.value}
                id={`${id}-opt-${index}`}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => choose(index)}
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3.5 py-2.5 text-sm transition-colors duration-150 ${
                  isActive
                    ? "bg-sky-50 text-[#0284C7] font-medium"
                    : "text-slate-700"
                }`}
              >
                {opt.label}
                {isSelected && (
                  <svg
                    aria-hidden="true"
                    className="shrink-0 text-[#0284C7]"
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8.5l3 3 7-7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function FormField({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  autoComplete,
  inputMode,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  error?: string;
  autoComplete?: string;
  inputMode?: "email" | "tel" | "text";
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-900"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClass(!!error)}
      />
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-2 flex items-center gap-1.5 text-xs text-red-600"
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 4.5v3M7 9.5h.01M7 1.5 12.5 11h-11L7 1.5Z"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
