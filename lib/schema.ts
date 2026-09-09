import { SITE_URL, company, faqTabs } from "@/lib/content";

const organisation = {
  "@type": "RealEstateAgent",
  "@id": `${SITE_URL}/#organisation`,
  url: SITE_URL,
  name: company.name,
  legalName: company.legalName,
  logo: `${SITE_URL}/icon.svg`,
  image: `${SITE_URL}/icon.svg`,
  email: company.email,
  priceRange: "₹₹₹",
  areaServed: {
    "@type": "City",
    name: company.addressLocality,
  },

  address: {
    "@type": "PostalAddress",
    streetAddress: company.streetAddress,
    addressLocality: company.addressLocality,
    addressRegion: company.addressRegion,
    postalCode: company.postalCode,
    addressCountry: company.addressCountry,
  },
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: company.name,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#organisation` },
};

const faqPage = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqTabs.flatMap((tab) =>
    tab.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  ),
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [organisation, website, faqPage],
};


export const homepageJsonLd = JSON.stringify(graph).replace(/</g, "\\u003c");
