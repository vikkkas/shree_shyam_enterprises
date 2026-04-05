"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Client Testimonials
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#8BA3BF] max-w-xl mx-auto font-body">
            Trusted by India&apos;s leading industrial companies. Here&apos;s what they say
            about our quality and reliability.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group bg-[#1A2D48] p-8 rounded-sm border border-white/5 hover:border-[#E05A1E]/50 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Quote mark */}
              <div className="text-6xl font-serif text-[#E05A1E] leading-none mb-4 select-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#E05A1E] text-[#E05A1E]"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-[#8BA3BF] font-body italic leading-relaxed mb-6 text-sm">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="border-t border-white/10 mb-5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E05A1E] flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-black text-white text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-white text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-[#8BA3BF] text-xs font-body">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
