import type { Metadata } from "next";
import LegalLayout, { type LegalContent } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — DeskMed",
  description:
    "How DeskMed collects, uses, stores, and protects personal and health information, and the rights you have over your data.",
};

const content: LegalContent = {
  title: "Privacy Policy",
  lastUpdated: "June 6, 2026",
  intro:
    "This Privacy Policy explains how DeskMed Technologies Pvt. Ltd. (“DeskMed”, “we”, “us”) handles personal information when you visit our website or use our clinic management platform. We take the privacy of patients and clinic staff seriously, and we built DeskMed to keep that data secure and in India.",
  sections: [
    {
      id: "overview",
      heading: "1. Overview",
      paragraphs: [
        "DeskMed provides software that clinics use to manage appointments, medical records, prescriptions, billing, and lab reports. This policy covers two kinds of people: visitors to our marketing website, and users of the DeskMed dashboard (clinic staff such as administrators, doctors, receptionists, and lab technicians).",
        "Patient records entered into DeskMed by a clinic belong to that clinic. For those records the clinic is the data fiduciary and DeskMed acts as a data processor on the clinic's instructions.",
      ],
    },
    {
      id: "information-we-collect",
      heading: "2. Information we collect",
      paragraphs: ["Depending on how you interact with us, we may collect:"],
      bullets: [
        "Account information — name, email, phone number, clinic name, and role, provided when an account is created.",
        "Usage data — log information such as IP address, device and browser type, and pages visited, used to operate and improve the service.",
        "Patient and clinical data — entered by clinic staff into the dashboard; processed on the clinic's behalf and never used for our own purposes.",
        "Communications — messages you send us through forms, email, or support channels.",
      ],
    },
    {
      id: "how-we-use",
      heading: "3. How we use information",
      paragraphs: ["We use the information we collect to:"],
      bullets: [
        "Provide, maintain, and secure the DeskMed platform.",
        "Authenticate users and enforce role-based access controls.",
        "Respond to enquiries, provide support, and send service-related notices.",
        "Monitor performance, prevent abuse, and improve our features.",
      ],
    },
    {
      id: "patient-data",
      heading: "4. Patient data and your clinic's role",
      paragraphs: [
        "When a clinic uses DeskMed, the clinic decides what patient data is collected and why. We process that data strictly to provide the service and only on the clinic's documented instructions. We do not sell patient data, and we do not use it to train models or for advertising.",
      ],
    },
    {
      id: "sharing",
      heading: "5. Sharing and third parties",
      paragraphs: [
        "We share data only with trusted infrastructure providers who help us run the service (for example, cloud hosting), under contracts that require them to protect it. We may also disclose information where required by law. We never share clinic or patient data with advertisers.",
      ],
    },
    {
      id: "security",
      heading: "6. Data security",
      paragraphs: [
        "We protect data with encryption in transit (TLS 1.3) and at rest (AES-256), strict tenant isolation, role-based access, audit logging, and regular encrypted backups. No system is perfectly secure, but security is a core part of how DeskMed is designed.",
      ],
    },
    {
      id: "retention",
      heading: "7. Data retention",
      paragraphs: [
        "We retain account and clinical data for as long as a clinic's account is active. On termination, data is deleted or returned according to the clinic's instructions and applicable law, after a short grace period that allows for accidental-deletion recovery.",
      ],
    },
    {
      id: "your-rights",
      heading: "8. Your rights",
      paragraphs: [
        "Subject to applicable law, including the Digital Personal Data Protection Act, 2023, you may request access to, correction of, or erasure of your personal data, and may withdraw consent where processing relies on it. Patients should direct such requests to their clinic; clinic staff may contact us directly.",
      ],
    },
    {
      id: "cookies",
      heading: "9. Cookies",
      paragraphs: [
        "Our website uses a small number of essential cookies needed for it to function. We do not use third-party advertising cookies on our marketing site.",
      ],
    },
    {
      id: "contact",
      heading: "10. Changes and contact",
      paragraphs: [
        "We may update this policy from time to time; material changes will be reflected by the “last updated” date above. Questions about this policy can be sent to privacy@deskmed.in.",
      ],
    },
  ],
};

export default function PrivacyPage() {
  return <LegalLayout {...content} />;
}
