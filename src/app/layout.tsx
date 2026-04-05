import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton";
import RequestCallbackBar from "@/components/RequestCallbackBar";
import ProductInquiryModal from "@/components/ProductInquiryModal";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ProductModalProvider } from "@/context/ProductModalContext";
import { Toaster } from "sonner";
import "./globals.css";

const BASE_URL = "https://www.shreeshyam-enterprise.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Shree Shyam Enterprise",
    default: "Shree Shyam Enterprise | Precision Aluminium Flanges & Castings",
  },
  description:
    "ISO 9001:2015 certified manufacturer of precision aluminium flanges, custom castings and CNC-machined components in Ankleshwar, Gujarat. Trusted by BHEL, Aditya Birla Insulators & more.",
  keywords: [
    "aluminium flanges",
    "aluminium castings",
    "custom castings",
    "CNC machining",
    "insulator flange",
    "motor housing",
    "blower housing",
    "aluminium pulley",
    "precision machining",
    "Ankleshwar",
    "Gujarat",
    "ISO 9001 manufacturer",
    "aluminium manufacturer India",
    "Shree Shyam Enterprise",
  ],
  authors: [{ name: "Shree Shyam Enterprise", url: BASE_URL }],
  creator: "Shree Shyam Enterprise",
  publisher: "Shree Shyam Enterprise",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Shree Shyam Enterprise",
    title: "Shree Shyam Enterprise | Precision Aluminium Flanges & Castings",
    description:
      "ISO 9001:2015 certified manufacturer of precision aluminium flanges and custom castings. Serving BHEL, Aditya Birla & leading industries across India.",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Shree Shyam Enterprise — Precision Aluminium Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Shyam Enterprise | Precision Aluminium Flanges & Castings",
    description:
      "ISO 9001:2015 certified manufacturer of precision aluminium flanges and custom castings in Ankleshwar, Gujarat.",
    images: ["/images/hero-bg.png"],
  },
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BASE_URL,
  name: "Shree Shyam Enterprise",
  description:
    "ISO 9001:2015 certified manufacturer of precision aluminium flanges, custom castings and CNC-machined components.",
  url: BASE_URL,
  telephone: "+91-8866009082",
  email: "shreeshyam.enterprise22@gmail.com",
  foundingDate: "2022",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kamdhenu Industrial Park 2, Plot No. A3, Jitali",
    addressLocality: "Ankleshwar",
    addressRegion: "Gujarat",
    postalCode: "393002",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "21.6305",
    longitude: "73.0169",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "ISO 9001:2015" },
    { "@type": "EducationalOccupationalCredential", name: "ZED Bronze — MSME" },
    { "@type": "EducationalOccupationalCredential", name: "Udyam Registration" },
  ],
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* JSON-LD structured data */}
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <GoogleAnalytics />
        <ProductModalProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <RequestCallbackBar />
          <ProductInquiryModal />
        </ProductModalProvider>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
