import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedPartners from "@/components/TrustedPartners";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import PerformanceEdge from "@/components/PerformanceEdge";
import SectorExpertise from "@/components/SectorExpertise";
import MidPageCTA from "@/components/MidPageCTA";
import StatsSection from "@/components/StatsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import HomeBlogHighlight from "@/components/HomeBlogHighlight";
import HomeProcess from "@/components/HomeProcess";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import SubsidySection from "@/components/SubsidySection";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PEB Building Construction & Steel Structures in Chennai | Deepika Builtech",
  description: "Deepika Builtech is Chennai's trusted Pre-Engineered Building (PEB) company with 10+ years experience in steel structures, cold storage, warehouses, mezzanine floors, and EOT cranes. 150+ projects delivered. Call +91 96000 67611.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Deepika Builtech Engineering",
    "alternateName": "Deepika Builtech",
    "url": "https://www.deepikabuiltech.com",
    "logo": "https://www.deepikabuiltech.com/logo.png",
    "image": "https://www.deepikabuiltech.com/images/hero-peb-warehouse-chennai.jpg",
    "description": "Chennai's leading Pre-Engineered Building (PEB) contractor specialising in steel structures, warehouses, cold storage, mezzanine floors, and EOT cranes across Tamil Nadu.",
    "telephone": "+919600067611",
    "email": "infoadmin@deepikabuiltech.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "New No. 31,31A, Old No.14,15, Coromandal Town, SIDCO Industrial Estate",
      "addressLocality": "Ambattur, Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600098",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0977,
      "longitude": 80.1534
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": [
      "Chennai", "Ambattur", "Sriperumbudur", "Kanchipuram",
      "Thiruvallur", "Oragadam", "Tambaram", "Hosur", "Tamil Nadu"
    ],
    "priceRange": "₹₹",
    "award": "Excellence Award 2025",
    "foundingDate": "2015",
    "numberOfEmployees": {"@type":"QuantitativeValue","value":"50"},
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": [
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"PEB Building Structure Construction"}},
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Warehouse Construction"}},
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Cold Storage Construction"}},
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Mezzanine Floor Construction"}},
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"EOT Crane Manufacturing"}},
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Civil and Steel Construction"}}
      ]
    },
    "sameAs": [
      "https://www.facebook.com/deepikabuiltech",
      "https://www.linkedin.com/company/deepikabuiltech",
      "https://www.youtube.com/@deepikabuiltech"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Mr. K. Jayaraman"
        },
        "reviewBody": "Deepika Builtech delivered an outstanding PEB steel structure for our manufacturing facility in Kanchipuram. The entire design, fabrication, and erection process was handled with extreme professionalism and completed exactly on our tight schedule.",
        "datePublished": "2024-11-15"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Mr. Rajesh Kumar"
        },
        "reviewBody": "We contracted Deepika Builtech for our new 80,000 sq.ft logistics warehouse in Chennai. The column-free structural layout and heavy-duty VDF flooring they built have significantly optimized our daily operations. Their PEB expertise is truly top-notch.",
        "datePublished": "2024-11-15"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Mr. S. Vignesh"
        },
        "reviewBody": "The thermal efficiency and structural integrity of our cold storage complex in Ambattur are excellent. Deepika Builtech perfectly integrated the thick PIR insulation panels and dynamic framing, proving themselves as the best industrial builders in Chennai.",
        "datePublished": "2024-11-15"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <HeroSection />
      <TrustedPartners />
      <main id="content">
        <AboutSection />
        <ServicesSection />
        <FeaturedProjects />
        <PerformanceEdge />
        <SectorExpertise />
        <MidPageCTA />
        <StatsSection />
        <SubsidySection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <HomeBlogHighlight />
        <HomeProcess />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
