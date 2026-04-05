import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2 } from "lucide-react";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Shree Shyam Enterprise for aluminium flange and casting enquiries. Located in Ankleshwar, Gujarat. Call +91 8866009082.",
};

export default function ContactPage() {
  return (
    <>
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

          {/* Map placeholder card */}
          <div className="bg-[#1A2D48] border border-white/5 overflow-hidden">
            <div className="bg-[#0E1B2E] h-72 flex flex-col items-center justify-center gap-4 border-b border-white/5">
              <Building2 className="w-16 h-16 text-[#E05A1E]/40" />
              <p className="text-[#8BA3BF] font-body text-sm">
                Interactive map coming soon
              </p>
              <a
                href="https://maps.google.com/?q=Kamdhenu+Industrial+Park+2+Ankleshwar+Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-clip bg-[#E05A1E] text-white px-6 py-2 text-sm font-semibold hover:bg-[#c94d17] transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    (12 km from Ankleshwar)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E05A1E] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-body font-semibold text-sm mb-1">Landmarks</p>
                  <p className="text-[#8BA3BF] text-sm font-body">
                    Kamdhenu Industrial Park 2<br />
                    Jitali, GIDC Area
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
