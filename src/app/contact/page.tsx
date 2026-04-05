import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2, Clock, ExternalLink } from "lucide-react";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Shree Shyam Enterprise for aluminium flange and casting enquiries. Kamdhenu Industrial Park 2, Ankleshwar, Gujarat 393002. Call +91 8866009082 or email us.",
  keywords: [
    "contact Shree Shyam Enterprise",
    "aluminium casting enquiry",
    "flange manufacturer contact",
    "Ankleshwar Gujarat manufacturer",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Shree Shyam Enterprise",
    description:
      "Send your drawings or enquiry to Shree Shyam Enterprise. Call +91 8866009082 or visit our facility in Ankleshwar, Gujarat.",
    url: "/contact",
    images: [{ url: "/images/contact-bg.png", width: 1200, height: 630 }],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Shree Shyam Enterprise",
  url: "https://www.shreeshyam-enterprise.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Shree Shyam Enterprise",
    telephone: "+91-8866009082",
    email: "shreeshyam.enterprise22@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kamdhenu Industrial Park 2, Plot No. A3, Jitali",
      addressLocality: "Ankleshwar",
      addressRegion: "Gujarat",
      postalCode: "393002",
      addressCountry: "IN",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <Script id="contact-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      {/* Page Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-bg.png"
            alt="Contact Shree Shyam Enterprise"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1B2E]/95 via-[#0E1B2E]/80 to-[#0E1B2E]/50" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E05A1E]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32">
          <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
            Get In Touch
          </p>
          <h1 className="font-heading font-black text-white uppercase text-5xl md:text-7xl leading-none mb-4">
            Contact Us
          </h1>
          <nav className="flex items-center gap-2 text-sm font-body">
            <Link href="/" className="text-[#8BA3BF] hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-[#8BA3BF]">/</span>
            <span className="text-[#E05A1E]">Contact</span>
          </nav>
        </div>
      </section>

      {/* Contact Section Component */}
      <ContactSection />

      {/* Map Placeholder */}
      <section className="bg-[#152338] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
              Find Us
            </p>
            <h2 className="font-heading font-bold text-4xl text-white mb-4">
              Visit Our Facility
            </h2>
            <p className="text-[#8BA3BF] font-body max-w-xl mx-auto">
              Our manufacturing unit is located in Ankleshwar — Gujarat's
              premier industrial hub, with easy highway and rail connectivity.
            </p>
          </div>

          {/* Map card */}
          <div className="bg-[#1A2D48] border border-white/5 overflow-hidden">
            {/* Google Maps iframe */}
            <div className="relative w-full h-[420px]">
              <iframe
                title="Shree Shyam Enterprise Location"
                src="https://maps.google.com/maps?q=Kamdhenu+Industrial+Park+2+Ankleshwar+Gujarat+393002&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-90"
              />
              {/* Open in Maps overlay button */}
              <a
                href="https://maps.google.com/?q=Kamdhenu+Industrial+Park+2,+Jitali,+Ankleshwar,+Gujarat+393002"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#0E1B2E]/90 backdrop-blur-sm border border-white/10 text-white text-xs font-body px-3 py-1.5 hover:bg-[#E05A1E] hover:border-[#E05A1E] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open in Maps
              </a>
            </div>

            {/* Info strip below map */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E05A1E] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-body font-semibold text-sm mb-1">Address</p>
                  <p className="text-[#8BA3BF] text-sm font-body leading-relaxed">
                    Kamdhenu Industrial Park 2, Plot No. A3,<br />
                    Jitali, Ankleshwar, Gujarat 393002
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#E05A1E] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-body font-semibold text-sm mb-1">Nearest City</p>
                  <p className="text-[#8BA3BF] text-sm font-body">
                    Bharuch, Gujarat<br />
                    ~12 km from Ankleshwar
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#E05A1E] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-body font-semibold text-sm mb-1">Working Hours</p>
                  <p className="text-[#8BA3BF] text-sm font-body">
                    Mon – Sat: 9:00 AM – 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
