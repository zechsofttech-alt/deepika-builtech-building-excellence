export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Deepika Builtech Engineering",
  "alternateName": "Deepika Builtech",
  "url": "https://www.deepikabuiltech.com",
  "logo": "https://www.deepikabuiltech.com/logo.png",
  "image": "https://www.deepikabuiltech.com/images/og-image.jpg",
  "description": "Chennai's leading Pre-Engineered Building (PEB) contractor specialising in steel structures, warehouses, cold storage, mezzanine floors and EOT cranes across Tamil Nadu.",
  "telephone": "+919600067611",
  "email": "infoadmin@deepikabuiltech.in",
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
    "dayOfWeek": [
      "Monday","Tuesday","Wednesday",
      "Thursday","Friday","Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "areaServed": [
    "Chennai","Ambattur","Sriperumbudur",
    "Kanchipuram","Thiruvallur","Oragadam",
    "Tambaram","Hosur","Tamil Nadu"
  ],
  "priceRange": "₹₹",
  "award": "Excellence Award 2025",
  "foundingDate": "2015",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction Services",
    "itemListElement": [
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"PEB Building Structure Construction","url":"https://www.deepikabuiltech.com/industrial-peb-construction-chennai"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Warehouse Construction","url":"https://www.deepikabuiltech.com/warehouse-construction-chennai"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Cold Storage Construction","url":"https://www.deepikabuiltech.com/cold-storage-solutions-chennai"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Mezzanine Floor Construction","url":"https://www.deepikabuiltech.com/mezzanine-floor-construction-chennai"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"EOT Crane Manufacturing","url":"https://www.deepikabuiltech.com/eot-crane-manufacturers-in-chennai"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Civil and Steel Construction","url":"https://www.deepikabuiltech.com/construction-services-in-chennai"}}
    ]
  },
  "sameAs": [
    "https://www.facebook.com/deepikabuiltech",
    "https://www.linkedin.com/company/deepikabuiltech",
    "https://www.youtube.com/@deepikabuiltech"
  ]
};

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://www.deepikabuiltech.com${item.path}`
  }))
});

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqSchema = (faqs: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
