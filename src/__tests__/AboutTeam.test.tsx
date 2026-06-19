import { render, screen } from "@testing-library/react";
import AboutTeam from "@/components/AboutTeam";

describe("AboutTeam", () => {
  it("renders the section heading", () => {
    render(<AboutTeam />);
    expect(
      screen.getByRole("heading", { name: "A small team that loves clinics" })
    ).toBeInTheDocument();
  });

  it("renders the founders", () => {
    render(<AboutTeam />);
    expect(
      screen.getByRole("heading", { name: "Aarav Mehta" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Dr. Priya Nair" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Rohan Iyer" })
    ).toBeInTheDocument();
  });

  it("renders a careers CTA linking to /careers", () => {
    render(<AboutTeam />);
    const cta = screen.getByRole("link", { name: "See open roles" });
    expect(cta).toHaveAttribute("href", "/careers");
  });
});
