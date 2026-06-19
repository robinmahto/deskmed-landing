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

  it("renders all 6 features as tabs", () => {
    render(<Features />);
    const labels = [
      "Smart Appointments",
      "EMR & Consultations",
      "Prescriptions",
      "Lab Management",
      "GST Billing",
      "WhatsApp Alerts",
    ];
    for (const label of labels) {
      expect(screen.getByRole("tab", { name: label })).toBeInTheDocument();
    }
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
