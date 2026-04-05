import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  { label: "Aluminium Insulator Flange", href: "/products" },
  { label: "Aluminium Threaded Flange", href: "/products" },
  { label: "Aluminium Motor Housing", href: "/products" },
  { label: "Aluminium Blower Housing", href: "/products" },
  { label: "Aluminium Pulley Casting", href: "/products" },
  { label: "CNC Machined Housing", href: "/products" },
];

export default function Footer() {
  return (
    <footer className="bg-[#070F1A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Shree Shyam Enterprise"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-heading font-black text-white uppercase tracking-wider text-lg">
                  SHREE SHYAM
                </span>
                <span className="text-[#8BA3BF] text-[10px] tracking-widest uppercase">
                  Enterprise
                </span>
              </div>
            </Link>
            <p className="text-[#8BA3BF] text-sm font-body leading-relaxed mb-6 max-w-[220px]">
              Precision Aluminium Flanges &amp; Custom Castings. ISO 9001:2015
              certified manufacturer in Ankleshwar, Gujarat.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-white/5 hover:bg-[#E05A1E] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918866009082"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-white/5 hover:bg-[#E05A1E] flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-widest text-sm mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-[#8BA3BF] text-sm font-body hover:text-[#E05A1E] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-widest text-sm mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#8BA3BF] text-sm font-body hover:text-[#E05A1E] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-widest text-sm mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E05A1E] flex-shrink-0 mt-0.5" />
                <span className="text-[#8BA3BF] text-sm font-body leading-snug">
                  Kamdhenu Industrial Park 2, Plot No. A3, Jitali, Ankleshwar,
                  Gujarat 393002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E05A1E] flex-shrink-0" />
                <a
                  href="tel:+918866009082"
                  className="text-[#8BA3BF] text-sm font-body hover:text-[#E05A1E] transition-colors"
                >
                  +91 8866009082
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E05A1E] flex-shrink-0" />
                <a
                  href="mailto:shreeshyam.enterprise22@gmail.com"
                  className="text-[#8BA3BF] text-sm font-body hover:text-[#E05A1E] transition-colors break-all"
                >
                  shreeshyam.enterprise22@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#E05A1E] flex-shrink-0" />
                <span className="text-[#8BA3BF] text-sm font-body">
                  Mon–Sat: 9:00 AM – 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#8BA3BF] text-xs font-body">
            © 2026 Shree Shyam Enterprise. All rights reserved.
          </p>
          <div className="flex items-center gap-2 bg-[#E05A1E]/10 border border-[#E05A1E]/20 px-4 py-1.5 rounded-sm">
            <span className="text-[#E05A1E] text-xs font-bold tracking-widest uppercase font-body">
              ISO 9001:2015 Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
