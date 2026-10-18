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
    expect(cta).toHaveAttribute("href", "https://app.deskmed.online/setup");
  });

  it("renders deskmedai.com branding in footer", () => {
    render(<Footer />);
    expect(screen.getByText(/deskmedai\.com/i)).toBeInTheDocument();
  });

  it("renders DeskMed AI logo linking to the hero section", () => {
    render(<Footer />);
    const logo = screen.getByRole("link", { name: "DeskMed AI home" });
    expect(logo).toHaveAttribute("href", "/#hero");
  });

  it("renders Privacy and Terms links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Privacy" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Terms" })).toBeInTheDocument();
  });

  it("renders Support link pointing to support email", () => {
    render(<Footer />);
    const support = screen.getByRole("link", { name: "Support" });
    expect(support).toHaveAttribute("href", "mailto:support@deskmedai.com");
  });

  it("renders Contact link pointing to the contact page", () => {
    render(<Footer />);
    const contact = screen.getByRole("link", { name: "Contact" });
    expect(contact).toHaveAttribute("href", "/contact");
  });

  it("renders copyright notice", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 DeskMed AI/i)).toBeInTheDocument();
  });
});
