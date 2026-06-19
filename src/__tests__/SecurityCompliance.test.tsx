import { render, screen } from "@testing-library/react";
import SecurityCompliance from "@/components/SecurityCompliance";

describe("SecurityCompliance", () => {
  it("renders the section heading", () => {
    render(<SecurityCompliance />);
    expect(
      screen.getByRole("heading", { name: "Built for Indian healthcare rules" })
    ).toBeInTheDocument();
  });

  it("renders certifications and data residency", () => {
    render(<SecurityCompliance />);
    expect(
      screen.getByRole("heading", { name: "DPDP Act 2023" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Data residency" })
    ).toBeInTheDocument();
  });

  it("renders a responsible-disclosure link to security email", () => {
    render(<SecurityCompliance />);
    const link = screen.getByRole("link", { name: /security@deskmed\.in/i });
    expect(link).toHaveAttribute("href", "mailto:security@deskmed.in");
  });
});
