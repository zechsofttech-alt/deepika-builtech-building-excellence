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
  ogImage = "https://deepikabuiltech.com/assets/peb-building.jpg", // default hero image
  ogTitle,
  ogDescription
}: SEOProps) => {
  const location = useLocation();
  const canonicalUrl = `https://deepikabuiltech.com${location.pathname}`;

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
      "og:site_name": "Deepika Builtech",
      "og:image": ogImage,
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

    // Set canonical link element
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

  }, [title, description, robots, ogType, ogImage, ogTitle, ogDescription, canonicalUrl]);

  return null;
};

export default SEO;
