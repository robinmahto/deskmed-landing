import type { Metadata } from "next";
import LegalLayout, { type LegalContent } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — DeskMed",
  description:
    "The terms that govern your use of the DeskMed clinic management platform, including accounts, acceptable use, data ownership, fees, and liability.",
};

const content: LegalContent = {
  title: "Terms of Service",
  lastUpdated: "June 6, 2026",
  intro:
    "These Terms of Service (“Terms”) govern your access to and use of the DeskMed platform provided by DeskMed Technologies Pvt. Ltd. By creating an account or using the service, you agree to these Terms on behalf of yourself and the clinic you represent.",
  sections: [
    {
      id: "acceptance",
      heading: "1. Acceptance of terms",
      paragraphs: [
        "By accessing or using DeskMed, you confirm that you can form a binding contract and that you accept these Terms. If you are using DeskMed on behalf of a clinic or organization, you represent that you are authorised to bind that entity.",
      ],
    },
    {
      id: "accounts",
      heading: "2. Accounts and the service",
      paragraphs: [
        "DeskMed provides software for managing clinic operations such as appointments, records, prescriptions, billing, and lab reports. You are responsible for the accuracy of the information in your account and for keeping your login credentials confidential. You must notify us promptly of any unauthorised use.",
      ],
    },
    {
      id: "acceptable-use",
      heading: "3. Acceptable use",
      paragraphs: ["You agree not to:"],
      bullets: [
        "Use the service for any unlawful purpose or in violation of medical or data-protection regulations.",
        "Attempt to access data belonging to another clinic or to circumvent security controls.",
        "Upload malware, or interfere with the integrity or performance of the platform.",
        "Resell or sublicense the service without our written permission.",
      ],
    },
    {
      id: "customer-data",
      heading: "4. Customer data and ownership",
      paragraphs: [
        "You retain all rights to the data you and your clinic enter into DeskMed. You grant us a limited licence to host and process that data solely to provide the service. We claim no ownership over your clinical or patient records.",
      ],
    },
    {
      id: "fees",
      heading: "5. Fees and billing",
      paragraphs: [
        "Paid plans are billed in advance on a monthly or annual basis as described at the point of purchase. Fees are exclusive of applicable taxes. Unless required by law, fees are non-refundable for partial periods. We will give reasonable notice of any price changes.",
      ],
    },
    {
      id: "availability",
      heading: "6. Availability and support",
      paragraphs: [
        "We aim for 99.9% monthly uptime and provide support during business hours, Monday to Saturday. Planned maintenance will be communicated in advance where practical. The service is provided on an ongoing basis and may evolve over time.",
      ],
    },
    {
      id: "warranties",
      heading: "7. Warranties and disclaimers",
      paragraphs: [
        "DeskMed is a tool to support clinic operations; it is not a substitute for professional medical judgement. Except as expressly stated, the service is provided “as is” without warranties of any kind to the extent permitted by law.",
      ],
    },
    {
      id: "liability",
      heading: "8. Limitation of liability",
      paragraphs: [
        "To the maximum extent permitted by law, DeskMed's total liability arising out of or relating to the service will not exceed the fees you paid in the twelve months preceding the claim. We are not liable for indirect or consequential losses.",
      ],
    },
    {
      id: "termination",
      heading: "9. Termination",
      paragraphs: [
        "You may stop using DeskMed at any time. We may suspend or terminate access for material breach of these Terms. On termination, you may export your data within a reasonable period, after which it may be deleted in line with our Privacy Policy.",
      ],
    },
    {
      id: "governing-law",
      heading: "10. Governing law and contact",
      paragraphs: [
        "These Terms are governed by the laws of India, and the courts of Bengaluru, Karnataka have exclusive jurisdiction. Questions about these Terms can be sent to legal@deskmed.in.",
      ],
    },
  ],
};

export default function TermsPage() {
  return <LegalLayout {...content} />;
}
