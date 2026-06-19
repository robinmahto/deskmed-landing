import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ErrorPage from "@/app/error";

describe("Error boundary (500)", () => {
  const error = new Error("boom") as Error & { digest?: string };

  it("shows a generic something-went-wrong message", () => {
    render(<ErrorPage error={error} reset={() => {}} />);
    expect(
      screen.getByRole("heading", { name: /something went wrong/i })
    ).toBeInTheDocument();
  });

  it("calls reset when Try again is clicked", async () => {
    const user = userEvent.setup();
    const reset = jest.fn();
    render(<ErrorPage error={error} reset={reset} />);

    await user.click(screen.getByRole("button", { name: /try again/i }));
    expect(reset).toHaveBeenCalledTimes(1);
  });

  it("offers a link back to the homepage", () => {
    render(<ErrorPage error={error} reset={() => {}} />);
    expect(screen.getByRole("link", { name: /back to home/i })).toHaveAttribute(
      "href",
      "/"
    );
  });
});
