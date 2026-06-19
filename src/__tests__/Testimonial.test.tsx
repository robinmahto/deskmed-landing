import { render, screen } from "@testing-library/react";
import Testimonial from "@/components/Testimonial";

describe("Testimonial", () => {
  it("renders the doctor quote", () => {
    render(<Testimonial />);
    expect(
      screen.getByText(/DeskMed transformed how we run our clinic/i)
    ).toBeInTheDocument();
  });

  it("renders the doctor name", () => {
    render(<Testimonial />);
    expect(screen.getByText("Dr. Rajan Mehta")).toBeInTheDocument();
  });

  it("renders the clinic name", () => {
    render(<Testimonial />);
    expect(screen.getByText("Mehta Family Clinic, Pune")).toBeInTheDocument();
  });

  it("renders all three testimonials in the slider", () => {
    render(<Testimonial />);
    expect(screen.getByText("Dr. Rajan Mehta")).toBeInTheDocument();
    expect(screen.getByText("Dr. Ananya Reddy")).toBeInTheDocument();
    expect(screen.getByText("Dr. Vikram Nair")).toBeInTheDocument();
  });

  it("renders slider navigation controls", () => {
    render(<Testimonial />);
    expect(
      screen.getByRole("button", { name: /Previous testimonial/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Next testimonial/i })
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /Go to testimonial/i })
    ).toHaveLength(3);
  });
});
