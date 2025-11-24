"use client"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Al Jaber Dubai Real Estate",
  "url": "https://aljaberdubai.vercel.app/",
  "description": "Agence immobilière de luxe officielle à Dubai, spécialisée dans la vente de villas et propriétés haut de gamme.",
  "areaServed": ["Dubai", "UAE", "International"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  }
};

const StructuredData = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
