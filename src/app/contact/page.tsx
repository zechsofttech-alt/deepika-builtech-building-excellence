import ContactPageClient from "./ContactPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote | Deepika Builtech Chennai",
  description: "Contact Deepika Builtech for PEB construction quotes, site visits and enquiries. Call +91 96000 67611 or WhatsApp us. We respond within 2 hours.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
