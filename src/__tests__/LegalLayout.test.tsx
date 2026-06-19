import { render, screen } from "@testing-library/react";
import LegalLayout, { type LegalContent } from "@/components/LegalLayout";

const sample: LegalContent = {
  title: "Sample Policy",
  lastUpdated: "January 1, 2026",
  intro: "This is the intro paragraph.",
  sections: [
    { id: "first", heading: "First Section", paragraphs: ["A paragraph."] },
    { id: "second", heading: "Second Section", bullets: ["A bullet point."] },
  ],
};

describe("LegalLayout", () => {
  it("renders the title and last-updated date", () => {
    render(<LegalLayout {...sample} />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Sample Policy" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Last updated January 1, 2026/i)
    ).toBeInTheDocument();
  });

  it("renders a table-of-contents link and section heading for each section", () => {
    render(<LegalLayout {...sample} />);
    expect(
      screen.getByRole("link", { name: "First Section" })
    ).toHaveAttribute("href", "#first");
    expect(
      screen.getByRole("heading", { level: 2, name: "Second Section" })
    ).toBeInTheDocument();
  });

  it("renders paragraph and bullet content", () => {
    render(<LegalLayout {...sample} />);
    expect(screen.getByText("A paragraph.")).toBeInTheDocument();
    expect(screen.getByText("A bullet point.")).toBeInTheDocument();
  });
});
