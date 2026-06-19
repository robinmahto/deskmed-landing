import { render, screen } from "@testing-library/react";
import PrivacyPage from "@/app/privacy/page";
import TermsPage from "@/app/terms/page";
import DpdpPage from "@/app/dpdp/page";

describe("Legal pages", () => {
  it("Privacy page renders its title and a key section", () => {
    render(<PrivacyPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Privacy Policy" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "2. Information we collect" })
    ).toBeInTheDocument();
  });

  it("Terms page renders its title and a key section", () => {
    render(<TermsPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Terms of Service" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "8. Limitation of liability" })
    ).toBeInTheDocument();
  });

  it("DPDP page renders its title and a key section", () => {
    render(<DpdpPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: "DPDP Act Compliance" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "4. Data principal rights" })
    ).toBeInTheDocument();
  });
});
