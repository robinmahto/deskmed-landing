import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DeskMed AI — Clinic Management Platform for India",
  description:
    "Appointments, EMR, prescriptions, AI voice notes, dynamic UPI billing, and lab reports — all in one dashboard. Built for Indian clinics.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  themeColor: "#0284C7",
  openGraph: {
    title: "DeskMed AI — Clinic Management Platform for India",
    description:
      "Appointments, EMR, prescriptions, AI voice notes, dynamic UPI billing, and lab reports — all in one dashboard. Built for Indian clinics.",
    siteName: "DeskMed AI",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "DeskMed AI — Clinic Management Platform for India",
    description:
      "Appointments, EMR, prescriptions, AI voice notes, dynamic UPI billing, and lab reports — all in one dashboard. Built for Indian clinics.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  );
}
