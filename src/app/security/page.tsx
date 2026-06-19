import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SecurityHero from "@/components/SecurityHero";
import SecurityPillars from "@/components/SecurityPillars";
import SecurityCompliance from "@/components/SecurityCompliance";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Security — How DeskMed protects your clinic's data",
  description:
    "Encryption, tenant isolation, role-based access, audit logs, and India-only data residency. See how DeskMed keeps patient data secure and DPDP-aligned.",
};

export default function SecurityPage() {
  return (
    <main>
      <Navbar />
      <SecurityHero />
      <SecurityPillars />
      <SecurityCompliance />
      <Footer />
    </main>
  );
}
