import { render, screen } from "@testing-library/react";
import SocialProof from "@/components/SocialProof";

describe("SocialProof", () => {
  it("renders clinics count and label", () => {
    render(<SocialProof />);
    expect(screen.getByText("2,400+")).toBeInTheDocument();
    expect(screen.getByText("Clinics")).toBeInTheDocument();
  });

  it("renders patients count and label", () => {
    render(<SocialProof />);
    expect(screen.getByText("18L+")).toBeInTheDocument();
    expect(screen.getByText("Patients Managed")).toBeInTheDocument();
  });

  it("renders uptime and label", () => {
    render(<SocialProof />);
    expect(screen.getByText("99.9%")).toBeInTheDocument();
    expect(screen.getByText("Uptime")).toBeInTheDocument();
  });

  it("renders rating and label", () => {
    render(<SocialProof />);
    expect(screen.getByText("4.9★")).toBeInTheDocument();
    expect(screen.getByText("Average Rating")).toBeInTheDocument();
  });
});
