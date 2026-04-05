"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { products } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  product: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8866009082",
    href: "tel:+918866009082",
  },
  {
    icon: Mail,
    label: "Email",
    value: "shreeshyam.enterprise22@gmail.com",
    href: "mailto:shreeshyam.enterprise22@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "Kamdhenu Industrial Park 2, Plot No. A3, Jitali, Ankleshwar, Gujarat 393002",
    href: "https://maps.google.com/?q=Ankleshwar+Gujarat",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Sat: 9:00 AM – 6:00 PM",
    href: null,
  },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Enquiry sent successfully! We'll get back to you within 24 hours.");
        reset();
      } else {
        toast.error("Failed to send enquiry. Please try calling us directly.");
      }
    } catch {
      toast.error("Network error. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#0E1B2E] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: Contact info */}
          <div>
            <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
              Get In Touch
            </p>
            <h2 className="font-heading font-bold text-4xl text-white mb-3">
              Let&apos;s Discuss Your Requirements
            </h2>
            <p className="text-[#8BA3BF] font-body mb-8 leading-relaxed">
              Send us your drawings or specifications and we&apos;ll get back to you
              with a detailed quote within 24 hours.
            </p>

            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              {contactCards.map((card) => (
                <div
                  key={card.label}
                  className="flex items-start gap-4 bg-[#1A2D48] p-4 rounded-sm"
                >
                  <div className="w-10 h-10 bg-[#E05A1E]/10 flex items-center justify-center flex-shrink-0 rounded-sm">
                    <card.icon className="w-5 h-5 text-[#E05A1E]" />
                  </div>
                  <div>
                    <p className="text-[#8BA3BF] text-xs uppercase tracking-widest mb-1 font-body">
                      {card.label}
                    </p>
                    {card.href ? (
                      <a
                        href={card.href}
                        target={card.href.startsWith("http") ? "_blank" : undefined}
                        rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white font-body text-sm hover:text-[#E05A1E] transition-colors"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="text-white font-body text-sm">{card.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="bg-[#E05A1E]/10 border border-[#E05A1E]/20 p-4 rounded-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#E05A1E] flex-shrink-0" />
              <p className="text-white/80 text-sm font-body">
                <strong className="text-white">Trusted by</strong> BHEL, Aditya Birla Insulators,
                RC Ravikiran Ceramic & Mahalaxmi Ceramic Industries
              </p>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="bg-[#1A2D48] p-8 rounded-sm">
            <h3 className="font-heading font-bold text-white text-2xl mb-6">
              Send an Enquiry
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#8BA3BF] text-xs uppercase tracking-widest mb-1 font-body">
                    Full Name *
                  </label>
                  <input
                    {...register("name")}
                    placeholder="Rajesh Sharma"
                    className="w-full bg-[#0E1B2E] border border-white/10 text-white px-4 py-3 text-sm font-body focus:outline-none focus:border-[#E05A1E] transition-colors placeholder:text-white/30 rounded-sm"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[#8BA3BF] text-xs uppercase tracking-widest mb-1 font-body">
                    Company
                  </label>
                  <input
                    {...register("company")}
                    placeholder="BHEL Ltd."
                    className="w-full bg-[#0E1B2E] border border-white/10 text-white px-4 py-3 text-sm font-body focus:outline-none focus:border-[#E05A1E] transition-colors placeholder:text-white/30 rounded-sm"
                  />
                </div>
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#8BA3BF] text-xs uppercase tracking-widest mb-1 font-body">
                    Phone *
                  </label>
                  <input
                    {...register("phone")}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#0E1B2E] border border-white/10 text-white px-4 py-3 text-sm font-body focus:outline-none focus:border-[#E05A1E] transition-colors placeholder:text-white/30 rounded-sm"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[#8BA3BF] text-xs uppercase tracking-widest mb-1 font-body">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="you@company.com"
                    className="w-full bg-[#0E1B2E] border border-white/10 text-white px-4 py-3 text-sm font-body focus:outline-none focus:border-[#E05A1E] transition-colors placeholder:text-white/30 rounded-sm"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Product select */}
              <div>
                <label className="block text-[#8BA3BF] text-xs uppercase tracking-widest mb-1 font-body">
                  Product of Interest
                </label>
                <select
                  {...register("product")}
                  className="w-full bg-[#0E1B2E] border border-white/10 text-white px-4 py-3 text-sm font-body focus:outline-none focus:border-[#E05A1E] transition-colors rounded-sm"
                >
                  <option value="">Select a product...</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Custom / Other">Custom / Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#8BA3BF] text-xs uppercase tracking-widest mb-1 font-body">
                  Message *
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Please describe your requirement, quantity, material grade, dimensions..."
                  className="w-full bg-[#0E1B2E] border border-white/10 text-white px-4 py-3 text-sm font-body focus:outline-none focus:border-[#E05A1E] transition-colors placeholder:text-white/30 resize-none rounded-sm"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-clip w-full bg-[#E05A1E] text-white py-4 font-semibold tracking-wide hover:bg-[#c94d17] transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
