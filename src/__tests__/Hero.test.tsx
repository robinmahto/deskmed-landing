import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

describe("Hero", () => {
  it("renders the h1 headline", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders the subtext copy", () => {
    render(<Hero />);
    expect(screen.getByText(/Appointments, EMR, prescriptions/i)).toBeInTheDocument();
  });

  it("renders Start Free Trial CTA linking to setup", () => {
    render(<Hero />);
    const cta = screen.getByRole("link", { name: "Start Free Trial" });
    expect(cta).toHaveAttribute("href", "https://app.deskmed.online/setup");
  });

  it("renders See Features link", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: "See Features" });
    expect(link).toHaveAttribute("href", "#features");
  });
});
