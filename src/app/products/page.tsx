import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Precision aluminium flanges, motor housings, blower housings, pulley castings and CNC machined components. ISO 9001:2015 certified. Custom sizes available. Enquire now.",
  keywords: [
    "aluminium insulator flange",
    "aluminium threaded flange",
    "aluminium motor housing",
    "aluminium blower housing",
    "aluminium pulley casting",
    "CNC machined aluminium",
    "custom aluminium castings",
    "precision flanges India",
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Our Products | Shree Shyam Enterprise",
    description:
      "High precision aluminium flanges, housings and custom castings. ISO certified. Served BHEL, Aditya Birla & more.",
    url: "/products",
    images: [{ url: "/images/product-1.png", width: 1200, height: 630 }],
  },
};

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Precision Aluminium Products — Shree Shyam Enterprise",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Aluminium Insulator Flange" },
    { "@type": "ListItem", position: 2, name: "Aluminium Threaded Flange" },
    { "@type": "ListItem", position: 3, name: "Aluminium Motor Housing" },
    { "@type": "ListItem", position: 4, name: "Aluminium Blower Housing" },
    { "@type": "ListItem", position: 5, name: "Aluminium Pulley Casting" },
    { "@type": "ListItem", position: 6, name: "CNC Machined Aluminium Housing" },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <Script id="products-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }} />
      {/* Page Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/product-1.png"
            alt="Our Products"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1B2E]/95 via-[#0E1B2E]/80 to-[#0E1B2E]/40" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E05A1E]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32">
          <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
            What We Make
          </p>
          <h1 className="font-heading font-black text-white uppercase text-5xl md:text-7xl leading-none mb-4">
            Our Products
          </h1>
          <nav className="flex items-center gap-2 text-sm font-body">
            <Link href="/" className="text-[#8BA3BF] hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-[#8BA3BF]">/</span>
            <span className="text-[#E05A1E]">Products</span>
          </nav>
        </div>
      </section>

      <ProductsClient />
    </>
  );
}
