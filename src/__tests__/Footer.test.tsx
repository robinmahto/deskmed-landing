import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders the CTA heading", () => {
    render(<Footer />);
    expect(
      screen.getByRole("heading", { name: /Ready to modernise your clinic/i })
    ).toBeInTheDocument();
  });

  it("renders Start Free Trial CTA linking to setup", () => {
    render(<Footer />);
    const cta = screen.getByRole("link", { name: "Start Free Trial" });
    expect(cta).toHaveAttribute("href", "https://app.deskmed.in/setup");
  });

  it("renders deskmed.in branding in footer", () => {
    render(<Footer />);
    expect(screen.getByText(/deskmed\.in/i)).toBeInTheDocument();
  });

  it("renders Privacy and Terms links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Privacy" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Terms" })).toBeInTheDocument();
  });

  it("renders Support link pointing to support email", () => {
    render(<Footer />);
    const support = screen.getByRole("link", { name: "Support" });
    expect(support).toHaveAttribute("href", "mailto:support@deskmed.in");
  });

  it("renders Contact link pointing to the contact page", () => {
    render(<Footer />);
    const contact = screen.getByRole("link", { name: "Contact" });
    expect(contact).toHaveAttribute("href", "/contact");
  });

  it("renders copyright notice", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 DeskMed/i)).toBeInTheDocument();
  });
});
