"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, Settings, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    description: "Internationally certified quality management system",
  },
  {
    icon: Settings,
    title: "CNC Precision",
    description: "5-axis CNC machining for complex geometries",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "100% inspection before dispatch",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "98%+ on-time delivery record",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#0E1B2E] py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Image stack */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Years badge */}
            <div className="absolute -top-4 -left-4 z-20 w-20 h-20 bg-[#E05A1E] flex flex-col items-center justify-center">
              <span className="font-heading font-black text-white text-2xl leading-none">
                10+
              </span>
              <span className="text-white/90 text-[9px] font-bold tracking-widest uppercase">
                YEARS
              </span>
            </div>

            {/* Main image */}
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/images/hero-bg.png"
                alt="Shree Shyam Enterprise manufacturing facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2E]/60 to-transparent" />
            </div>

            {/* Small accent image */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 border-4 border-[#0E1B2E] z-10 overflow-hidden rounded-sm">
              <Image
                src="/images/vision.png"
                alt="Vision of Shree Shyam Enterprise"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
              About Us
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Trusted Name in<br />Aluminium Manufacturing
            </h2>
            <p className="text-[#8BA3BF] font-body leading-relaxed mb-4">
              Shree Shyam Enterprise is a precision aluminium manufacturing company
              based in Ankleshwar, Gujarat — India&apos;s premier industrial corridor.
              We specialise in high-quality aluminium flanges, custom castings, and
              CNC-machined components for demanding industrial applications.
            </p>
            <p className="text-[#8BA3BF] font-body leading-relaxed mb-8">
              Founded in 2022 by Bhrigunath Prasad with an initial investment of
              ₹10 Lakh, we have grown to ₹1 Crore revenue by 2026. Our clear
              vision targets ₹10 Crore by 2030, driven by customer trust, precision
              engineering, and relentless quality standards.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feat) => (
                <div key={feat.title} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#E05A1E]/10 flex items-center justify-center flex-shrink-0 rounded-sm mt-0.5">
                    <feat.icon className="w-5 h-5 text-[#E05A1E]" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-base">
                      {feat.title}
                    </p>
                    <p className="text-[#8BA3BF] text-xs font-body leading-snug">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="btn-clip bg-[#E05A1E] text-white px-8 py-3 font-semibold tracking-wide hover:bg-[#c94d17] transition-colors text-sm inline-block"
            >
              Learn Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
