import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pricing from "@/components/Pricing";

describe("Pricing", () => {
  it("renders the section heading", () => {
    render(<Pricing />);
    expect(
      screen.getByRole("heading", { name: /Simple, Transparent Pricing/i })
    ).toBeInTheDocument();
  });

  it("renders Starter plan at ₹999/mo", () => {
    render(<Pricing />);
    expect(screen.getByText("Starter")).toBeInTheDocument();
    expect(screen.getByText("₹999")).toBeInTheDocument();
  });

  it("renders Growth plan at ₹2,499/mo", () => {
    render(<Pricing />);
    expect(screen.getByText("Growth")).toBeInTheDocument();
    expect(screen.getByText("₹2,499")).toBeInTheDocument();
  });

  it("renders Enterprise plan with Contact Sales CTA", () => {
    render(<Pricing />);
    expect(screen.getByText("Enterprise")).toBeInTheDocument();
    expect(screen.getByText("Custom")).toBeInTheDocument();
    const contactSales = screen.getByRole("link", { name: "Contact Sales" });
    expect(contactSales).toHaveAttribute("href", "mailto:sales@deskmed.in");
  });

  it("defaults to monthly billing", () => {
    render(<Pricing />);
    expect(screen.getByRole("button", { name: /Monthly/i })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(screen.getAllByText("billed monthly").length).toBeGreaterThan(0);
  });

  it("switches to annual pricing when the Annual toggle is clicked", async () => {
    const user = userEvent.setup();
    render(<Pricing />);

    await user.click(screen.getByRole("button", { name: /Annual/i }));

    // Annual per-month equivalents replace monthly prices
    expect(screen.getByText("₹833")).toBeInTheDocument();
    expect(screen.getByText("₹2,082")).toBeInTheDocument();
    // Yearly billed total appears
    expect(screen.getByText(/₹9,990 billed yearly/i)).toBeInTheDocument();
    expect(screen.getByText(/₹24,990 billed yearly/i)).toBeInTheDocument();
  });
});
