import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutMission from "@/components/AboutMission";
import AboutValues from "@/components/AboutValues";
import AboutTeam from "@/components/AboutTeam";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About DeskMed — Building the operating system for Indian clinics",
  description:
    "DeskMed brings appointments, EMR, prescriptions, billing, and lab reports into one calm dashboard built for Indian clinics. Meet the team and the mission behind it.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <Footer />
    </main>
  );
}
