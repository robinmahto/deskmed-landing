import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";

describe("NotFound (404)", () => {
  it("shows the 404 code and a not-found message", () => {
    render(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /page not found/i })
    ).toBeInTheDocument();
  });

  it("offers a link back to the homepage", () => {
    render(<NotFound />);
    expect(screen.getByRole("link", { name: /back to home/i })).toHaveAttribute(
      "href",
      "/"
    );
  });
});
