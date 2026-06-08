import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: any;
  robots?: string;
}

const SEO = ({
  title,
  description,
  canonical,
  ogImage = 'https://www.deepikabuiltech.com/images/og-image.jpg',
  ogType = 'website',
  schema,
  robots = 'index, follow',
}: SEOProps) => {
  const siteUrl = 'https://www.deepikabuiltech.com';

  // Build a clean canonical URL:
  // – no canonical arg → homepage URL (siteUrl)
  // – canonical = "/"   → siteUrl (no trailing slash)
  // – canonical = "/foo" → siteUrl + "/foo"
  // – canonical = "foo"  → siteUrl + "/foo"
  let fullCanonical: string;
  if (!canonical || canonical === '/') {
    fullCanonical = siteUrl;
  } else {
    const path = canonical.startsWith('/') ? canonical : `/${canonical}`;
    fullCanonical = `${siteUrl}${path}`;
  }

  return (
    <Helmet>
      {/* Primary */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta name="robots" content={robots} />
      <meta name="author" content="Deepika Builtech Engineering" />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Deepika Builtech Engineering" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
