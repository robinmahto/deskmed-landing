import { render, screen, fireEvent } from "@testing-library/react";
import ContactMain from "@/components/ContactMain";

describe("ContactMain", () => {
  it("renders the form heading and submit button", () => {
    render(<ContactMain />);
    expect(
      screen.getByRole("heading", { name: "Send us a message" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Send message/i })
    ).toBeInTheDocument();
  });

  it("renders direct contact channels", () => {
    render(<ContactMain />);
    expect(
      screen.getByRole("link", { name: /sales@deskmed\.in/i })
    ).toHaveAttribute("href", "mailto:sales@deskmed.in");
    expect(
      screen.getByRole("link", { name: /WhatsApp/i })
    ).toHaveAttribute("href", "https://wa.me/918047182200");
  });

  it("shows validation errors when submitting an empty form", () => {
    render(<ContactMain />);
    fireEvent.click(screen.getByRole("button", { name: /Send message/i }));
    expect(screen.getByText("Please tell us your name.")).toBeInTheDocument();
    expect(screen.getByText("We need an email to reply to.")).toBeInTheDocument();
  });

  it("uses a custom combobox dropdown that opens and selects an option", () => {
    render(<ContactMain />);
    const trigger = screen.getByRole("combobox");
    // Defaults to the first inquiry type, shown in the trigger.
    expect(trigger).toHaveTextContent("Sales & demo");
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    // Opens a listbox of options.
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    // Selecting an option updates the trigger and closes the list.
    fireEvent.click(screen.getByRole("option", { name: "Product support" }));
    expect(trigger).toHaveTextContent("Product support");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("renders the intro header only when showIntro is set", () => {
    const { rerender } = render(<ContactMain />);
    expect(
      screen.queryByRole("heading", { name: /Have a question\? Let’s talk\./i })
    ).not.toBeInTheDocument();

    rerender(<ContactMain showIntro />);
    expect(
      screen.getByRole("heading", { name: /Have a question\? Let’s talk\./i })
    ).toBeInTheDocument();
  });
});
