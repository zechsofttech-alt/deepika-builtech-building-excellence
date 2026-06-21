import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PEB Building Construction & Steel Structures in Chennai | Deepika Builtech",
  description: "Deepika Builtech is Chennai's trusted Pre-Engineered Building (PEB) company with 10+ years experience in steel structures, cold storage, warehouses, mezzanine floors, and EOT cranes. 150+ projects delivered. Call +91 96000 67611.",
  metadataBase: new URL("https://www.deepikabuiltech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Deepika Builtech Engineering",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
