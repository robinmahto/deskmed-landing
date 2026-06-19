import { render, screen } from "@testing-library/react";
import AboutValues from "@/components/AboutValues";

describe("AboutValues", () => {
  it("renders the section heading", () => {
    render(<AboutValues />);
    expect(
      screen.getByRole("heading", {
        name: "The principles behind every decision",
      })
    ).toBeInTheDocument();
  });

  it("renders all four value titles", () => {
    render(<AboutValues />);
    expect(
      screen.getByRole("heading", { name: "Patients first, always" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Built for India" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Privacy by default" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Ship with care" })
    ).toBeInTheDocument();
  });
});
