import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return {};
  }
  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: {
      canonical: `/project/${slug}`,
    },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: `https://www.deepikabuiltech.com/project/${slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 628,
          alt: project.title,
        }
      ],
      type: "website",
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.deepikabuiltech.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://www.deepikabuiltech.com/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `https://www.deepikabuiltech.com/project/${project.slug}`
      }
    ]
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": `https://www.deepikabuiltech.com${project.image}`,
    "author": {
      "@type": "LocalBusiness",
      "name": "Deepika Builtech",
      "url": "https://www.deepikabuiltech.com/"
    },
    "contentLocation": {
      "@type": "Place",
      "name": project.location
    },
    "keywords": project.metaKeywords
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <ProjectDetailClient project={project} />
    </>
  );
}
