import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Features from "@/components/Features";

describe("Features", () => {
  it("renders the section heading", () => {
    render(<Features />);
    expect(
      screen.getByRole("heading", { name: /Everything Your Clinic Needs/i })
    ).toBeInTheDocument();
  });

  it("renders all 8 features as tabs including AI Scribe and ABDM", () => {
    render(<Features />);
    const labels = [
      "Smart Appointments",
      "EMR & Consultations",
      "AI Medical Scribe",
      "Prescriptions",
      "GST Billing",
      "WhatsApp Alerts",
      "Lab Management",
      "ABDM & ABHA Integration",
    ];
    for (const label of labels) {
      expect(screen.getByRole("tab", { name: label })).toBeInTheDocument();
    }
  });

  it("renders the clinic demand workflow spotlight section", () => {
    render(<Features />);
    expect(
      screen.getByRole("heading", { name: /The Features Clinics Actually Ask For/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Zero-Typing Ambient AI Scribe")).toBeInTheDocument();
    expect(screen.getByText("Dynamic Counter UPI QR")).toBeInTheDocument();
    expect(screen.getByText("ABDM & ABHA Card in 30s")).toBeInTheDocument();
  });

  it("selects the first feature by default and shows its panel", () => {
    render(<Features />);
    expect(
      screen.getByRole("tab", { name: "Smart Appointments" })
    ).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent(/queue tokens/i);
  });

  it("switches the panel when another tab is clicked", async () => {
    const user = userEvent.setup();
    render(<Features />);

    await user.click(screen.getByRole("tab", { name: "GST Billing" }));

    expect(
      screen.getByRole("tab", { name: "GST Billing" })
    ).toHaveAttribute("aria-selected", "true");
    expect(
      screen.getByRole("tab", { name: "Smart Appointments" })
    ).toHaveAttribute("aria-selected", "false");
    expect(screen.getByRole("tabpanel")).toHaveTextContent(/GST-compliant invoices/i);
  });

  it("moves selection with the arrow keys", async () => {
    const user = userEvent.setup();
    render(<Features />);

    const firstTab = screen.getByRole("tab", { name: "Smart Appointments" });
    firstTab.focus();
    await user.keyboard("{ArrowDown}");

    expect(
      screen.getByRole("tab", { name: "EMR & Consultations" })
    ).toHaveAttribute("aria-selected", "true");
  });
});
