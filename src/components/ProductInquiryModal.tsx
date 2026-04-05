"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { X, ArrowRight } from "lucide-react";
import { useProductModal } from "@/context/ProductModalContext";
import { products } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  product: z.string().min(1, "Please select a product"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ProductInquiryModal() {
  const { open, productName, closeModal } = useProductModal();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  /* Pre-fill product when modal opens */
  useEffect(() => {
    if (open && productName) {
      setValue("product", productName);
    }
  }, [open, productName, setValue]);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeModal]);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          message: data.message || `Enquiry for ${data.product}`,
          company: "",
        }),
      });
      if (res.ok) {
        toast.success("Enquiry sent! We'll contact you within 24 hours.");
        reset();
        closeModal();
      } else {
        toast.error("Failed to send. Please call +91 8866009082 directly.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
  };

  if (!open) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[9995] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#070F1A]/90 backdrop-blur-sm" />

      {/* Modal panel */}
      <div className="relative z-10 w-full max-w-lg bg-[#0E1B2E] border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Orange top accent */}
        <div className="h-1 w-full bg-[#E05A1E]" />

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-[#E05A1E] font-body font-medium tracking-[0.2em] uppercase text-xs mb-1">
                Product Enquiry
              </p>
              <h2 className="font-heading font-bold text-white text-2xl leading-tight">
                {productName || "Request a Quote"}
              </h2>
            </div>
            <button
              onClick={closeModal}
              className="text-[#8BA3BF] hover:text-white transition-colors ml-4 flex-shrink-0 p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name + Phone */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  {...register("name")}
                  placeholder="Your Name *"
                  className="w-full bg-[#1A2D48] border border-white/10 text-white px-4 py-3 text-sm font-body focus:outline-none focus:border-[#E05A1E] transition-colors placeholder:text-white/30 rounded-sm"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("phone")}
                  placeholder="Phone Number *"
                  className="w-full bg-[#1A2D48] border border-white/10 text-white px-4 py-3 text-sm font-body focus:outline-none focus:border-[#E05A1E] transition-colors placeholder:text-white/30 rounded-sm"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Email Address *"
                className="w-full bg-[#1A2D48] border border-white/10 text-white px-4 py-3 text-sm font-body focus:outline-none focus:border-[#E05A1E] transition-colors placeholder:text-white/30 rounded-sm"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Product (pre-filled) */}
            <div>
              <select
                {...register("product")}
                className="w-full bg-[#1A2D48] border border-white/10 text-white px-4 py-3 text-sm font-body focus:outline-none focus:border-[#E05A1E] transition-colors rounded-sm"
              >
                <option value="">Select Product *</option>
                {products.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
                <option value="Custom / Other">Custom / Other</option>
              </select>
              {errors.product && (
                <p className="text-red-400 text-xs mt-1">{errors.product.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                {...register("message")}
                rows={3}
                placeholder="Additional requirements, quantity, dimensions... (optional)"
                className="w-full bg-[#1A2D48] border border-white/10 text-white px-4 py-3 text-sm font-body focus:outline-none focus:border-[#E05A1E] transition-colors placeholder:text-white/30 resize-none rounded-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-clip w-full bg-[#E05A1E] text-white py-3.5 font-semibold tracking-wide hover:bg-[#c94d17] transition-colors text-sm flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : <>Send Enquiry <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
