import type { Metadata } from "next";
import LegalLayout, { type LegalContent } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "DPDP Compliance — DeskMed",
  description:
    "How DeskMed aligns with India's Digital Personal Data Protection Act, 2023 — consent, data principal rights, localisation, security, and grievance redressal.",
};

const content: LegalContent = {
  eyebrow: "Compliance",
  title: "DPDP Act Compliance",
  lastUpdated: "June 6, 2026",
  intro:
    "DeskMed is built for Indian clinics, so compliance with India's Digital Personal Data Protection Act, 2023 (“DPDP Act”) is central to how we handle data. This page summarises how DeskMed supports clinics in meeting their obligations under the Act.",
  sections: [
    {
      id: "commitment",
      heading: "1. Our commitment",
      paragraphs: [
        "We are committed to processing personal data lawfully, fairly, and transparently, and to helping the clinics that use DeskMed meet their responsibilities under the DPDP Act. This includes honouring data principal rights, securing data, and keeping it within India.",
      ],
    },
    {
      id: "roles",
      heading: "2. Roles: fiduciary and processor",
      paragraphs: [
        "Under the DPDP Act, the clinic that collects patient data is the Data Fiduciary — it decides the purpose and means of processing. DeskMed acts as a Data Processor, processing personal data on the clinic's behalf and on its instructions, under a written agreement.",
      ],
    },
    {
      id: "consent",
      heading: "3. Consent and notice",
      paragraphs: [
        "The Act requires that personal data be processed with consent or for legitimate uses, accompanied by clear notice. DeskMed gives clinics the tools to record the basis for processing and to capture and manage patient consent where required.",
      ],
    },
    {
      id: "rights",
      heading: "4. Data principal rights",
      paragraphs: [
        "The DPDP Act gives individuals (data principals) rights over their personal data. DeskMed supports clinics in fulfilling these:",
      ],
      bullets: [
        "Right to access a summary of personal data being processed.",
        "Right to correction and updating of inaccurate or incomplete data.",
        "Right to erasure of personal data that is no longer needed.",
        "Right to grievance redressal and to nominate another person in case of incapacity.",
      ],
    },
    {
      id: "localisation",
      heading: "5. Data localisation and residency",
      paragraphs: [
        "All clinic and patient data on DeskMed is stored and processed on infrastructure located in India (AWS Mumbai region, ap-south-1). Data is not transferred outside India in the ordinary course of providing the service.",
      ],
    },
    {
      id: "safeguards",
      heading: "6. Security safeguards",
      paragraphs: [
        "We apply reasonable security safeguards as required by the Act, including encryption in transit and at rest, tenant isolation, role-based access control, audit logging, and regular encrypted backups, to protect personal data against breach.",
      ],
    },
    {
      id: "breach",
      heading: "7. Breach notification",
      paragraphs: [
        "In the event of a personal data breach, we will notify affected clinics without undue delay and support them in meeting their own notification obligations to the Data Protection Board of India and affected data principals.",
      ],
    },
    {
      id: "grievance",
      heading: "8. Grievance officer and contact",
      paragraphs: [
        "For questions about our DPDP practices, or to raise a grievance, you can contact our Grievance Officer at grievance@deskmedai.com. We aim to acknowledge grievances within the timelines prescribed under the Act.",
      ],
    },
  ],
};

export default function DpdpPage() {
  return <LegalLayout {...content} />;
}
