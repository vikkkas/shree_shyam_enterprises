"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Process from "@/components/Process";
import CTAStrip from "@/components/CTAStrip";
import { products } from "@/lib/data";

type FilterCategory = "all" | "flanges" | "housings" | "castings";

const filterTabs: { label: string; value: FilterCategory }[] = [
  { label: "All", value: "all" },
  { label: "Flanges", value: "flanges" },
  { label: "Housings", value: "housings" },
  { label: "Castings", value: "castings" },
];

const industries = [
  "Electrical Insulators",
  "Heavy Engineering",
  "Ceramics Manufacturing",
  "Power Generation",
  "Pump & Compressors",
  "Automotive Components",
];

export default function ProductsClient() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Filter + Grid */}
      <section className="bg-[#0E1B2E] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`btn-clip px-6 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  activeFilter === tab.value
                    ? "bg-[#E05A1E] text-white"
                    : "bg-[#1A2D48] text-[#8BA3BF] hover:bg-[#E05A1E]/10 hover:text-white border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden bg-[#1A2D48]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070F1A] via-[#070F1A]/40 to-transparent" />
                  <div className="absolute inset-0 bg-[#0E1B2E]/0 group-hover:bg-[#0E1B2E]/30 transition-colors duration-300" />

                  {/* Category pill */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#E05A1E] text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-bold text-white text-xl mb-3">
                    {product.name}
                  </h3>
                  <p className="text-[#8BA3BF] text-sm font-body leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {product.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-white/80 text-xs font-body"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E05A1E] flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="btn-clip inline-flex items-center gap-2 bg-[#E05A1E] text-white px-5 py-2 text-sm font-semibold hover:bg-[#c94d17] transition-colors"
                  >
                    Enquire Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/intro-2.png"
            alt="Industries We Serve"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0E1B2E]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
              Our Reach
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-[#8BA3BF] max-w-xl mx-auto font-body">
              Our aluminium components power critical operations across India&apos;s
              most demanding industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {industries.map((industry, i) => (
              <div
                key={industry}
                className="bg-[#1A2D48]/80 border border-white/10 p-4 text-center hover:border-[#E05A1E]/40 transition-colors"
              >
                <span className="text-[#E05A1E] font-heading font-bold text-lg mr-1">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className="text-white font-body text-sm">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <CTAStrip />
    </>
  );
}
