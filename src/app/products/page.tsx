import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore Shree Shyam Enterprise's range of precision aluminium flanges, motor housings, blower housings, pulley castings and CNC machined components.",
};

export default function ProductsPage() {
  return (
    <>
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
