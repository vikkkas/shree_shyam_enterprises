"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Factory, Settings, Award, Clock } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Factory,
  Settings,
  Award,
  Clock,
};

const cards = [
  {
    id: "in-house",
    number: "01",
    icon: "Factory",
    title: "In-House Facility",
    description:
      "Complete manufacturing setup under one roof: casting, machining, finishing & QC. Full control over quality and lead times.",
  },
  {
    id: "custom",
    number: "02",
    icon: "Settings",
    title: "Custom Engineering",
    description:
      "Made-to-order designs to exact customer specifications and drawings. Complex geometries and tight tolerances handled with ease.",
  },
  {
    id: "iso",
    number: "03",
    icon: "Award",
    title: "ISO 9001:2015 QMS",
    description:
      "Certified quality management system ensuring consistent precision. Every part traceable through our documented QMS.",
  },
  {
    id: "delivery",
    number: "04",
    icon: "Clock",
    title: "On-Time Delivery",
    description:
      "Reliable logistics with committed lead times across India. 98%+ on-time delivery record maintained since 2022.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#F4F1EC] py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
            Our Advantages
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#0E1B2E] mb-4">
            Why Choose Us
          </h2>
          <p className="text-[#0E1B2E]/60 max-w-xl mx-auto font-body">
            What sets Shree Shyam Enterprise apart from the competition — built on
            trust, precision, and an unwavering commitment to quality.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.id}
                className="group relative overflow-hidden bg-white p-8"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                {/* Ghost number */}
                <span className="absolute top-2 right-3 text-8xl font-black text-[#0E1B2E]/[0.04] leading-none select-none pointer-events-none font-heading">
                  {card.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 bg-[#E05A1E]/10 flex items-center justify-center mb-4 rounded-sm">
                  <Icon className="w-6 h-6 text-[#E05A1E]" />
                </div>

                <h3 className="font-heading font-bold text-[#0E1B2E] text-xl mb-2">
                  {card.title}
                </h3>
                <p className="text-[#0E1B2E]/70 text-sm font-body leading-relaxed">
                  {card.description}
                </p>

                {/* Bottom orange bar on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-[#E05A1E] w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
