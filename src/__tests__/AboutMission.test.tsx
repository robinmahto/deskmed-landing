import { render, screen } from "@testing-library/react";
import AboutMission from "@/components/AboutMission";

describe("AboutMission", () => {
  it("renders the mission heading", () => {
    render(<AboutMission />);
    expect(
      screen.getByRole("heading", {
        name: /Healthcare runs on details\. We sweat them so doctors don’t\./i,
      })
    ).toBeInTheDocument();
  });

  it("renders the founder pull quote attribution", () => {
    render(<AboutMission />);
    expect(screen.getByText(/Aarav Mehta, Co-founder & CEO/i)).toBeInTheDocument();
  });

  it("renders traction stats", () => {
    render(<AboutMission />);
    expect(screen.getByText("2,400+")).toBeInTheDocument();
    expect(screen.getByText("Clinics on DeskMed")).toBeInTheDocument();
    expect(screen.getByText("₹500Cr+")).toBeInTheDocument();
  });
});
