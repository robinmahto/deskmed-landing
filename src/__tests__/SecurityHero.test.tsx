import { render, screen } from "@testing-library/react";
import SecurityHero from "@/components/SecurityHero";

describe("SecurityHero", () => {
  it("renders the main heading", () => {
    render(<SecurityHero />);
    expect(
      screen.getByRole("heading", {
        name: /Patient data, protected by design\./i,
      })
    ).toBeInTheDocument();
  });

  it("renders the Security eyebrow", () => {
    render(<SecurityHero />);
    expect(screen.getByText("Security")).toBeInTheDocument();
  });

  it("renders the key security badges", () => {
    render(<SecurityHero />);
    expect(screen.getByText("AES-256")).toBeInTheDocument();
    expect(screen.getByText("DPDP-aligned")).toBeInTheDocument();
  });
});
