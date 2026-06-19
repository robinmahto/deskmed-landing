import { render, screen } from "@testing-library/react";
import SecurityPillars from "@/components/SecurityPillars";

describe("SecurityPillars", () => {
  it("renders the section heading", () => {
    render(<SecurityPillars />);
    expect(
      screen.getByRole("heading", { name: "Security at every layer" })
    ).toBeInTheDocument();
  });

  it("renders the core security pillars", () => {
    render(<SecurityPillars />);
    expect(
      screen.getByRole("heading", { name: "Encryption everywhere" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Tenant isolation" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Role-based access" })
    ).toBeInTheDocument();
  });
});
