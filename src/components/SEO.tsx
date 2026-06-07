import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  robots?: string;
  ogType?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
}

const SEO = ({
  title,
  description,
  robots = "index, follow",
  ogType = "website",
  ogImage = "https://www.deepikabuiltech.com/assets/peb-building.jpg", // default hero image
  ogTitle,
  ogDescription
}: SEOProps) => {
  const location = useLocation();
  const canonicalUrl = `https://www.deepikabuiltech.com${location.pathname}`;

  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Set meta robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.setAttribute("name", "robots");
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute("content", robots);

    // Set Open Graph tags
    const ogTags: Record<string, string> = {
      "og:type": ogType,
      "og:site_name": "Deepika Builtech Engineering",
      "og:image": ogImage || "https://www.deepikabuiltech.com/wp-content/uploads/deepika-builtech-og-image.jpg",
      "og:image:width": "1200",
      "og:image:height": "628",
      "og:locale": "en_IN",
      "og:title": ogTitle || title,
      "og:description": ogDescription || description,
      "og:url": canonicalUrl
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("property", property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", content);
    });

    // Set Twitter card tags
    const twitterTags: Record<string, string> = {
      "twitter:card": "summary_large_image",
      "twitter:title": ogTitle || title,
      "twitter:description": ogDescription || description,
      "twitter:image": ogImage || "https://www.deepikabuiltech.com/wp-content/uploads/deepika-builtech-og-image.jpg"
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("name", name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", content);
    });

    // Set canonical link element
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // Dynamic BreadcrumbList JSON-LD for inner pages
    if (location.pathname !== "/") {
      const pageName = title.split(" | ")[0] || "Page";
      const breadcrumbData = {
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
            "name": pageName,
            "item": canonicalUrl
          }
        ]
      };

      let breadcrumbScript = document.getElementById("dynamic-breadcrumb-schema");
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement("script");
        breadcrumbScript.setAttribute("type", "application/ld+json");
        breadcrumbScript.setAttribute("id", "dynamic-breadcrumb-schema");
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.innerHTML = JSON.stringify(breadcrumbData);
    } else {
      const breadcrumbScript = document.getElementById("dynamic-breadcrumb-schema");
      if (breadcrumbScript) {
        breadcrumbScript.remove();
      }
    }

  }, [title, description, robots, ogType, ogImage, ogTitle, ogDescription, canonicalUrl, location.pathname]);

  return null;
};

export default SEO;
