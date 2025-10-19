import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
};

// Base Organization Schema - tells Google who you are
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "C² (Csquare)",
  "url": "https://www.csquare.in.net", // Use the final domain
  "logo": "https://www.csquare.in.net/logo.png", // URL to the logo file
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9820199085",
    "contactType": "Customer Service",
    "email": "info@csquare.co.in"
  },
  "sameAs": [
    "https://www.linkedin.com/company/c%C2%B2/" // Company LinkedIn
  ]
};

export default function SEO({ title, description, keywords, canonicalUrl }: SEOProps) {
  const fullTitle = `${title} | C² The Carbon Credit Marketplace`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content="https://www.csquare.in.net/og-image.jpg" /> {/* A dedicated social sharing image */}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:image" content="https://www.csquare.in.net/og-image.jpg" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </Head>
  );
}
