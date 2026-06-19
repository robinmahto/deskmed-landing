import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("renders the DeskMed logo text", () => {
    render(<Navbar />);
    expect(screen.getByText("DeskMed")).toBeInTheDocument();
  });

  it("renders Features, Pricing, and Testimonials nav links", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Features" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Pricing" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Testimonials" })).toBeInTheDocument();
  });

  it("renders Login link pointing to app subdomain", () => {
    render(<Navbar />);
    const login = screen.getByRole("link", { name: "Login" });
    expect(login).toHaveAttribute("href", "https://app.deskmed.in/login");
  });

  it("renders Start Free Trial CTA pointing to setup", () => {
    render(<Navbar />);
    const cta = screen.getByRole("link", { name: "Start Free Trial" });
    expect(cta).toHaveAttribute("href", "https://app.deskmed.in/setup");
  });

  describe("mobile menu", () => {
    it("is closed by default", () => {
      render(<Navbar />);
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Open menu" })
      ).toHaveAttribute("aria-expanded", "false");
    });

    it("opens a dialog with links and CTA when the menu button is clicked", async () => {
      const user = userEvent.setup();
      render(<Navbar />);

      await user.click(screen.getByRole("button", { name: "Open menu" }));

      const dialog = screen.getByRole("dialog");
      expect(dialog).toBeInTheDocument();
      expect(within(dialog).getByRole("link", { name: "Features" })).toBeInTheDocument();
      expect(
        within(dialog).getByRole("link", { name: "Start Free Trial" })
      ).toHaveAttribute("href", "https://app.deskmed.in/setup");
      expect(
        screen.getByRole("button", { name: "Open menu" })
      ).toHaveAttribute("aria-expanded", "true");
    });

    it("closes on Escape", async () => {
      const user = userEvent.setup();
      render(<Navbar />);

      await user.click(screen.getByRole("button", { name: "Open menu" }));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      await user.keyboard("{Escape}");
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("closes when a nav link is clicked", async () => {
      const user = userEvent.setup();
      render(<Navbar />);

      await user.click(screen.getByRole("button", { name: "Open menu" }));
      const dialog = screen.getByRole("dialog");
      await user.click(within(dialog).getByRole("link", { name: "Pricing" }));

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
