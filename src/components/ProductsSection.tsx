"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { products } from "@/lib/data";
import { useProductModal } from "@/context/ProductModalContext";

interface ProductsSectionProps {
  featured?: boolean;
}

export default function ProductsSection({ featured = false }: ProductsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { openModal } = useProductModal();

  return (
    <section className="bg-[#0E1B2E] py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
            Our Products
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Precision-Engineered Components
          </h2>
          <p className="text-[#8BA3BF] max-w-xl mx-auto font-body">
            Every product manufactured to exact specifications with strict dimensional
            accuracy and surface finish standards.
          </p>
        </motion.div>

        {featured ? (
          /* Featured masonry layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => {
              const isFeatured = index === 0;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative overflow-hidden bg-[#1A2D48] rounded-sm ${
                    isFeatured ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      isFeatured ? "aspect-[16/7]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Permanent overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070F1A] via-[#070F1A]/40 to-transparent" />
                    {/* Hover overlay darkener */}
                    <div className="absolute inset-0 bg-[#0E1B2E]/0 group-hover:bg-[#0E1B2E]/40 transition-colors duration-300" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      {/* Category pill */}
                      <span className="inline-block bg-[#E05A1E] text-white text-[10px] uppercase tracking-widest px-3 py-1 mb-3 font-bold">
                        {product.category}
                      </span>

                      <h3 className="font-heading font-bold text-white text-2xl mb-3">
                        {product.name}
                      </h3>

                      <ul className="space-y-1 mb-4">
                        {product.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2 text-white/80 text-xs font-body">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#E05A1E] flex-shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>

                      {/* Hover CTA */}
                      <div className="overflow-hidden h-7">
                        <button
                          onClick={() => openModal(product.name)}
                          className="flex items-center gap-2 text-[#E05A1E] text-sm font-semibold translate-y-8 group-hover:translate-y-0 transition-transform duration-300 font-body"
                        >
                          Enquire Now <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Standard 3-column grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-[#1A2D48] rounded-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070F1A] via-[#070F1A]/40 to-transparent" />
                  <div className="absolute inset-0 bg-[#0E1B2E]/0 group-hover:bg-[#0E1B2E]/40 transition-colors duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block bg-[#E05A1E] text-white text-[10px] uppercase tracking-widest px-3 py-1 mb-2 font-bold">
                      {product.category}
                    </span>
                    <h3 className="font-heading font-bold text-white text-xl mb-2">
                      {product.name}
                    </h3>
                    <ul className="space-y-1 mb-3">
                      {product.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-white/80 text-xs font-body">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E05A1E] flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <div className="overflow-hidden h-6">
                      <button
                        onClick={() => openModal(product.name)}
                        className="flex items-center gap-2 text-[#E05A1E] text-sm font-semibold translate-y-8 group-hover:translate-y-0 transition-transform duration-300 font-body"
                      >
                        Enquire Now <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-5 border-t border-white/5">
                  <p className="text-[#8BA3BF] text-sm font-body leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {featured && (
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              href="/products"
              className="btn-clip border border-[#E05A1E] text-[#E05A1E] px-8 py-3 font-semibold tracking-wide hover:bg-[#E05A1E] hover:text-white transition-colors text-sm inline-block"
            >
              View All Products
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
