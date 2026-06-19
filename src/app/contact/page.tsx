import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactMain from "@/components/ContactMain";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact DeskMed — Talk to our team",
  description:
    "Book a demo, ask about features, or get support. Reach the DeskMed team by form, email, phone, or WhatsApp — we reply within one business day.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <ContactMain />
      <Footer />
    </main>
  );
}
