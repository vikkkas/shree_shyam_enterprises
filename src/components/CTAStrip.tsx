import Link from "next/link";

export default function CTAStrip() {
  return (
    <section className="relative w-full bg-[#E05A1E] py-16 overflow-hidden">
      {/* Decorative circle outlines */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute top-4 right-32 w-40 h-40 rounded-full border border-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Heading */}
        <div className="text-center md:text-left">
          <h2 className="font-heading font-black text-white text-4xl md:text-5xl uppercase leading-tight mb-2">
            Ready to Start<br />Your Project?
          </h2>
          <p className="text-white/80 font-body text-base max-w-md">
            Get a competitive quote for your aluminium casting or machining requirements.
            Our team responds within 24 hours.
          </p>
        </div>

        {/* Right: CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link
            href="/contact"
            className="btn-clip bg-white text-[#0E1B2E] px-8 py-3 font-semibold tracking-wide hover:bg-[#F4F1EC] transition-colors text-sm text-center"
          >
            Get a Quote Now
          </Link>
          <a
            href="tel:+918866009082"
            className="btn-clip border-2 border-white text-white px-8 py-3 font-semibold tracking-wide hover:bg-white/10 transition-colors text-sm text-center"
          >
            Call: +91 8866009082
          </a>
        </div>
      </div>
    </section>
  );
}
