import { blogPosts } from "@/data/blogs";
import { notFound } from "next/navigation";
import BlogDetailClient from "./BlogDetailClient";
import { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({
    slug: p.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {};
  }
  return {
    title: post.metaTitle || `${post.title} | Deepika Builtech`,
    description: post.metaDesc || post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.metaTitle || `${post.title} | Deepika Builtech`,
      description: post.metaDesc || post.excerpt,
      url: `https://www.deepikabuiltech.com/blog/${slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 628,
          alt: post.title,
        }
      ],
      type: "article",
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
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
        "name": "Journal",
        "item": "https://www.deepikabuiltech.com/blogs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.deepikabuiltech.com/blog/${post.slug}`
      }
    ]
  };

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((f: any) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <BlogDetailClient post={post} />
    </>
  );
}
