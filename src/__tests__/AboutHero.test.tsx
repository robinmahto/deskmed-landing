import { render, screen } from "@testing-library/react";
import AboutHero from "@/components/AboutHero";

describe("AboutHero", () => {
  it("renders the main heading", () => {
    render(<AboutHero />);
    expect(
      screen.getByRole("heading", {
        name: /We’re rebuilding the clinic, one workflow at a time\./i,
      })
    ).toBeInTheDocument();
  });

  it("renders the Our Story eyebrow", () => {
    render(<AboutHero />);
    expect(screen.getByText("Our Story")).toBeInTheDocument();
  });

  it("renders founding metadata", () => {
    render(<AboutHero />);
    expect(screen.getByText("Founded")).toBeInTheDocument();
    expect(screen.getByText("2021")).toBeInTheDocument();
    expect(screen.getByText("Bengaluru")).toBeInTheDocument();
  });
});
