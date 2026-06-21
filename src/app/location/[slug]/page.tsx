import { locations } from "@/data/locations";
import { notFound } from "next/navigation";
import LocationDetailClient from "./LocationDetailClient";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locations.map((l) => ({
    slug: l.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const locationProfile = locations.find((l) => l.slug === slug);
  if (!locationProfile) {
    return {};
  }
  return {
    title: locationProfile.metaTitle,
    description: locationProfile.metaDesc,
    alternates: {
      canonical: `/location/${slug}`,
    },
    openGraph: {
      title: locationProfile.metaTitle,
      description: locationProfile.metaDesc,
      url: `https://www.deepikabuiltech.com/location/${slug}`,
      images: [
        {
          url: locationProfile.image,
          width: 1200,
          height: 628,
          alt: locationProfile.name,
        }
      ],
      type: "website",
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const locationProfile = locations.find((l) => l.slug === slug);
  if (!locationProfile) {
    notFound();
  }
  return <LocationDetailClient locationProfile={locationProfile} />;
}
