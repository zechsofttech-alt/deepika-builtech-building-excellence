import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // 1. Domain Redirect: non-www to www (deepikabuiltech.com -> www.deepikabuiltech.com)
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "host",
            value: "deepikabuiltech.com",
          },
        ],
        destination: "https://www.deepikabuiltech.com/:path*",
        permanent: true,
      },
      // 2. Legacy 301 Redirects for SEO Consolidation
      {
        source: "/peb-building-solutions",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/peb-building-solutions/",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/peb-building-systems-for-durable-and-efficient-steel-structures",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/peb-building-systems-for-durable-and-efficient-steel-structures/",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/pre-fabricated-steel-building",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/pre-fabricated-steel-building/",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/pre-fabricated-buildings",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/pre-fabricated-buildings/",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/pre-engineered-metal-building",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/pre-engineered-metal-building/",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/blogs/peb-building-systems-chennai",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/blogs/peb-building-systems-chennai/",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/steel-structure-manufacturer",
        destination: "/steel-structure-fabrication-chennai",
        permanent: true,
      },
      {
        source: "/steel-structure-manufacturer/",
        destination: "/steel-structure-fabrication-chennai",
        permanent: true,
      },
      {
        source: "/steel-workshop-buildings",
        destination: "/industrial-shed-construction-chennai",
        permanent: true,
      },
      {
        source: "/steel-workshop-buildings/",
        destination: "/industrial-shed-construction-chennai",
        permanent: true,
      },
      {
        source: "/steel-building-contractors-for-expert-planning-and-execution",
        destination: "/construction-services-in-chennai",
        permanent: true,
      },
      {
        source: "/steel-building-contractors-for-expert-planning-and-execution/",
        destination: "/construction-services-in-chennai",
        permanent: true,
      },
      // 3. Newly Added Missing Legacy Redirects
      {
        source: "/metal-building-manufacturer",
        destination: "/steel-structure-fabrication-chennai",
        permanent: true,
      },
      {
        source: "/metal-building-manufacturer/",
        destination: "/steel-structure-fabrication-chennai",
        permanent: true,
      },
      {
        source: "/steel-column-and-beam-manufacturer",
        destination: "/steel-structure-fabrication-chennai",
        permanent: true,
      },
      {
        source: "/steel-column-and-beam-manufacturer/",
        destination: "/steel-structure-fabrication-chennai",
        permanent: true,
      },
      {
        source: "/peb-structure-manufacturer",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/peb-structure-manufacturer/",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/industrial-steel-structures",
        destination: "/steel-structure-fabrication-chennai",
        permanent: true,
      },
      {
        source: "/industrial-steel-structures/",
        destination: "/steel-structure-fabrication-chennai",
        permanent: true,
      },
      {
        source: "/steel-building-solutions",
        destination: "/construction-services-in-chennai",
        permanent: true,
      },
      {
        source: "/steel-building-solutions/",
        destination: "/construction-services-in-chennai",
        permanent: true,
      },
      {
        source: "/industrial-buildings",
        destination: "/industrial-shed-construction-chennai",
        permanent: true,
      },
      {
        source: "/industrial-buildings/",
        destination: "/industrial-shed-construction-chennai",
        permanent: true,
      },
      {
        source: "/complete-building-solutions",
        destination: "/construction-services-in-chennai",
        permanent: true,
      },
      {
        source: "/complete-building-solutions/",
        destination: "/construction-services-in-chennai",
        permanent: true,
      },
      // 4. Wordpress Blog & Legacy Page Redirects (Google Indexed)
      {
        source: "/warehouse-buildings",
        destination: "/warehouse-construction-chennai",
        permanent: true,
      },
      {
        source: "/warehouse-buildings/",
        destination: "/warehouse-construction-chennai",
        permanent: true,
      },
      {
        source: "/warehouse-construction-chennai-builders",
        destination: "/warehouse-construction-chennai",
        permanent: true,
      },
      {
        source: "/warehouse-construction-chennai-builders/",
        destination: "/warehouse-construction-chennai",
        permanent: true,
      },
      {
        source: "/industrial-warehouse-solutions-chennai",
        destination: "/warehouse-construction-chennai",
        permanent: true,
      },
      {
        source: "/industrial-warehouse-solutions-chennai/",
        destination: "/warehouse-construction-chennai",
        permanent: true,
      },
      {
        source: "/best-construction-company-in-chennai",
        destination: "/construction-services-in-chennai",
        permanent: true,
      },
      {
        source: "/best-construction-company-in-chennai/",
        destination: "/construction-services-in-chennai",
        permanent: true,
      },
      {
        source: "/best-peb-building-solutions-in-chennai",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/best-peb-building-solutions-in-chennai/",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/peb-building-solutions-in-chennai",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/peb-building-solutions-in-chennai/",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/peb-building-manufacturing-process-guide",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/peb-building-manufacturing-process-guide/",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/innovative-pre-engineered-building-solutions",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
      {
        source: "/innovative-pre-engineered-building-solutions/",
        destination: "/industrial-peb-construction-chennai",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*\\.webp",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
