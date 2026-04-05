"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Quality Standard", value: "ISO Certified" },
  { label: "Delivery Rate", value: "On-Time" },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Aluminium manufacturing"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1B2E]/95 via-[#0E1B2E]/80 to-[#0E1B2E]/40" />
        {/* Grid line overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,1) 80px, rgba(255,255,255,1) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,1) 80px, rgba(255,255,255,1) 81px)",
          }}
        />
      </div>

      {/* Left orange vertical accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E05A1E] z-10" />

      {/* Main content */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center pl-10 md:pl-20 pr-6 pt-24 pb-32 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-6"
        >
          Established 2022 · Ankleshwar, Gujarat
        </motion.p>

        {/* Headline */}
        <div className="mb-6">
          <motion.h1
            variants={itemVariants}
            className="font-heading font-black uppercase leading-none text-7xl md:text-[120px] text-white block"
          >
            PRECISION
          </motion.h1>
          <motion.span
            variants={itemVariants}
            className="font-heading font-black uppercase leading-none text-7xl md:text-[120px] block"
            style={{
              WebkitTextStroke: "2px #E05A1E",
              color: "transparent",
            }}
          >
            ALUMINIUM
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="font-heading font-black uppercase leading-none text-5xl md:text-7xl text-white block"
          >
            FLANGES &amp; CASTINGS
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-[#8BA3BF] font-body max-w-xl leading-relaxed mb-8 text-base md:text-lg"
        >
          ISO 9001:2015 certified manufacturer delivering custom aluminium castings
          with precision engineering. Trusted by BHEL, Aditya Birla &amp; more.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="btn-clip bg-[#E05A1E] text-white px-8 py-3 font-semibold tracking-wide hover:bg-[#c94d17] transition-colors text-sm"
          >
            Get a Quote
          </Link>
          <Link
            href="/products"
            className="btn-clip border border-white/40 text-white px-8 py-3 font-semibold tracking-wide hover:border-white hover:bg-white/5 transition-colors text-sm"
          >
            View Products
          </Link>
        </motion.div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10 bg-[#070F1A]/90 backdrop-blur-sm border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center py-2 ${
                i < stats.length - 1 ? "border-r border-white/10" : ""
              }`}
            >
              <span className="font-heading font-black text-2xl md:text-3xl text-[#E05A1E]">
                {stat.value}
              </span>
              <span className="text-[#8BA3BF] text-xs tracking-widest uppercase font-body mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
