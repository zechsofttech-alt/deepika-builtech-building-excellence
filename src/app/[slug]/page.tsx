import { services } from "@/data/services";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import { Metadata } from "next";

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return {};
  }
  
  const seoContent: Record<string, { title: string; description: string; h1: string }> = {
    "industrial-peb-construction-chennai": {
      title: "Industrial PEB Construction in Chennai | Deepika Builtech",
      description: "Looking for PEB construction in Chennai? Deepika Builtech delivers precision pre-engineered steel buildings for factories, warehouses & industrial units. 10+ years experience. Call +91 96000 67611.",
      h1: "Industrial PEB Construction in Chennai"
    },
    "construction-services-in-chennai": {
      title: "Civil & Steel Construction Services in Chennai | Deepika Builtech",
      description: "Expert civil and steel construction services in Chennai by Deepika Builtech. We build factories, industrial units, commercial structures across Tamil Nadu. Free quote: +91 96000 67611.",
      h1: "Civil & Steel Construction Services in Chennai"
    },
    "cold-storage-solutions-chennai": {
      title: "Cold Storage Construction & Solutions in Chennai | Deepika Builtech",
      description: "Build a reliable cold storage facility in Chennai with Deepika Builtech. Custom temperature-controlled storage for pharma, food & logistics. Call +91 96000 67611.",
      h1: "Cold Storage Construction & Solutions in Chennai"
    },
    "mezzanine-floor-construction-chennai": {
      title: "Mezzanine Floor Construction in Chennai | Deepika Builtech",
      description: "Maximise your floor space with a custom steel mezzanine floor in Chennai. Deepika Builtech designs and installs industrial mezzanines. Call +91 96000 67611.",
      h1: "Mezzanine Floor Construction in Chennai"
    },
    "warehouse-construction-chennai": {
      title: "Warehouse Construction & Design in Chennai | Deepika Builtech",
      description: "Build your warehouse in Chennai faster and cheaper with PEB technology. Deepika Builtech has completed 150+ warehouse and industrial projects. Call +91 96000 67611.",
      h1: "Warehouse Construction & Design in Chennai"
    },
    "eot-crane-manufacturers-in-chennai": {
      title: "EOT Crane Manufacturers & Suppliers in Chennai | Deepika Builtech",
      description: "Deepika Builtech manufactures and installs Electric Overhead Travelling (EOT) cranes in Chennai. Custom capacity, span & duty class. Call +91 96000 67611.",
      h1: "EOT Crane Manufacturers in Chennai"
    },
    "steel-structure-fabrication-chennai": {
      title: "Steel Structure Fabrication & Erection in Chennai | Deepika Builtech",
      description: "Precision structural steel fabrication in Chennai using CNC machinery, MIG, MAG & submerged arc welding. Deepika Builtech — trusted by 100+ clients. Call +91 96000 67611.",
      h1: "Steel Structure Fabrication in Chennai"
    },
    "industrial-shed-construction-chennai": {
      title: "Industrial Shed Construction in Chennai | Deepika Builtech",
      description: "Custom industrial shed construction in Chennai using pre-engineered steel. Fast delivery, durable, cost-effective. Deepika Builtech — 10+ years. Call +91 96000 67611.",
      h1: "Industrial Shed Construction in Chennai"
    }
  };

  const meta = seoContent[slug] || {
    title: `${service.title} | Deepika Builtech`,
    description: service.shortDesc,
  };

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.deepikabuiltech.com/${slug}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 628,
          alt: service.title,
        }
      ],
      type: "website",
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }
  return <ServiceDetailClient slug={slug} />;
}
