import React from 'react';

type JsonLdProps = {
  data: Record<string, any>;
};

// Component for adding JSON-LD structured data
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization structured data
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Suubee Portfolios",
    "url": "https://suubeeportfolios.com",
    "logo": "https://suubeeportfolios.com/Asset%201.svg",
    "description": "Expertly managed investment portfolios designed to provide exposure to leading stocks and themes, locally and abroad.",
    "sameAs": [
      // Add social media URLs when available
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Australia"
    },
    "areaServed": ["Australia", "United States", "Europe"],
    "serviceType": ["Portfolio Management", "Investment Services"]
  };

  return <JsonLd data={data} />;
}

// Type for Person data
type PersonData = {
  "@context": string;
  "@type": string;
  "name": string;
  "jobTitle": string;
  "description": string;
  "worksFor": {
    "@type": string;
    "name": string;
  };
  "image"?: string;
};

// Person structured data (for team members)
export function PersonJsonLd({ 
  name, 
  jobTitle, 
  description, 
  image 
}: { 
  name: string; 
  jobTitle: string; 
  description: string; 
  image?: string; 
}) {
  const data: PersonData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": description,
    "worksFor": {
      "@type": "Organization",
      "name": "Suubee Portfolios"
    }
  };

  if (image) {
    data.image = image;
  }

  return <JsonLd data={data} />;
}

// Type for Product data
type ProductData = {
  "@context": string;
  "@type": string;
  "name": string;
  "description": string;
  "brand": {
    "@type": string;
    "name": string;
  };
  "category": string;
  "offers": {
    "@type": string;
    "availability": string;
    "priceSpecification": {
      "@type": string;
      "priceCurrency": string;
      "valueAddedTaxIncluded": boolean;
    };
    "seller": {
      "@type": string;
      "name": string;
    };
  };
  "image"?: string;
};

// Product structured data (for portfolios)
export function ProductJsonLd({ 
  name, 
  description, 
  image 
}: { 
  name: string; 
  description: string; 
  image?: string; 
}) {
  const data: ProductData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "brand": {
      "@type": "Organization",
      "name": "Suubee Portfolios"
    },
    "category": "Investment Portfolio",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "AUD",
        "valueAddedTaxIncluded": true
      },
      "seller": {
        "@type": "Organization",
        "name": "Suubee Portfolios"
      }
    }
  };

  if (image) {
    data.image = image;
  }

  return <JsonLd data={data} />;
}

// WebSite structured data
export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Suubee Portfolios",
    "url": "https://suubeeportfolios.com",
    "description": "Expertly managed investment portfolios designed to provide exposure to leading stocks and themes, locally and abroad.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://suubeeportfolios.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return <JsonLd data={data} />;
} 