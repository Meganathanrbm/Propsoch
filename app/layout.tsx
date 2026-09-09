import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { SITE_URL, company } from "@/lib/content";
import { homepageJsonLd } from "@/lib/schema";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-archivo",
});

const title = "Propsoch - Bangalore - Real Estate - Search/Buy/Sell Properties";
const description =
  "Buy your dream home confidently with Propsoch - Bangalore's smartest real estate service for home buyers to get expert advice, property insights & reports.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  applicationName: company.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false },
  appleWebApp: {
    title: company.name,
    statusBarStyle: "default",
  },
  openGraph: {
    siteName: company.name,
    title,
    description,
    url: SITE_URL,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/OG-Image.png",
        width: 1200,
        height: 630,
        alt: "Propsoch — independent homebuying advice in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/OG-Image.png"],
    creator: "@propsoch",
  },
};

export const viewport: Viewport = {
  themeColor: "#ff6d33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={archivo.variable}>
      <head>
        <link rel="preconnect" href="https://d1zk2x7mtoyb2b.cloudfront.net" crossOrigin="" />
      </head>
      <body className="bg-background min-h-dvh overscroll-y-none antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: homepageJsonLd }}
        />
      </body>
    </html>
  );
}
