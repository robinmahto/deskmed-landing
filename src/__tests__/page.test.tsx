import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

describe("Page", () => {
  it("renders all 7 sections on the page", () => {
    render(<Page />);

    // Navbar — logo
    expect(screen.getAllByText("DeskMed AI").length).toBeGreaterThanOrEqual(1);
    // Hero — h1
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    // SocialProof — clinics stat
    expect(screen.getByText("2,400+")).toBeInTheDocument();
    // Features — section heading
    expect(
      screen.getByRole("heading", { name: /Everything Your Clinic Needs/i })
    ).toBeInTheDocument();
    // Pricing — Starter price
    expect(screen.getByText("₹999")).toBeInTheDocument();
    // Testimonial — doctor name
    expect(screen.getByText("Dr. Rajan Mehta")).toBeInTheDocument();
    // Footer CTA — heading
    expect(
      screen.getByRole("heading", { name: /Ready to modernise your clinic/i })
    ).toBeInTheDocument();
  });
});
