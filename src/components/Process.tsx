"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#152338] py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
            How We Work
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Our Manufacturing Process
          </h2>
          <p className="text-[#8BA3BF] max-w-xl mx-auto font-body">
            A structured, quality-driven workflow from initial enquiry to final delivery,
            ensuring zero defects at every stage.
          </p>
        </motion.div>

        {/* Desktop: horizontal steps with connectors */}
        <div className="hidden lg:flex items-start gap-0">
          {processSteps.map((step, index) => (
            <div key={step.step} className="flex items-start flex-1">
              <motion.div
                className="flex flex-col items-center text-center flex-shrink-0 flex-1"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Octagon step number */}
                <div
                  className="w-16 h-16 bg-[#E05A1E] flex items-center justify-center mb-4 relative z-10 flex-shrink-0"
                  style={{
                    clipPath:
                      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                  }}
                >
                  <span className="font-heading font-black text-white text-xl">
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-white text-lg mb-2 px-2">
                  {step.title}
                </h3>
                <p className="text-[#8BA3BF] text-xs font-body leading-relaxed px-2 max-w-[140px]">
                  {step.description}
                </p>
              </motion.div>

              {/* Connector line between steps */}
              {index < processSteps.length - 1 && (
                <motion.div
                  className="flex-shrink-0 w-8 mt-8 h-0.5 self-start"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  style={{
                    background:
                      "linear-gradient(to right, #E05A1E, #E05A1E88)",
                    transformOrigin: "left",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: 2-column grid */}
        <div className="grid grid-cols-2 gap-6 lg:hidden">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className={`flex flex-col items-center text-center ${
                index === processSteps.length - 1 && processSteps.length % 2 !== 0
                  ? "col-span-2 max-w-xs mx-auto"
                  : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="w-14 h-14 bg-[#E05A1E] flex items-center justify-center mb-3"
                style={{
                  clipPath:
                    "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
              >
                <span className="font-heading font-black text-white text-lg">
                  {String(step.step).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-heading font-bold text-white text-base mb-1">
                {step.title}
              </h3>
              <p className="text-[#8BA3BF] text-xs font-body leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
