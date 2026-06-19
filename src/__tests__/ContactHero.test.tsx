import { render, screen } from "@testing-library/react";
import ContactHero from "@/components/ContactHero";

describe("ContactHero", () => {
  it("renders the main heading", () => {
    render(<ContactHero />);
    expect(
      screen.getByRole("heading", { name: /Let’s talk about your clinic\./i })
    ).toBeInTheDocument();
  });

  it("renders the Contact eyebrow", () => {
    render(<ContactHero />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders the response-time highlight", () => {
    render(<ContactHero />);
    expect(screen.getByText("< 1 business day")).toBeInTheDocument();
  });
});
