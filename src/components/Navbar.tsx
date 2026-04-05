"use client";

import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setScrolled(y > 50);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0E1B2E]/95 backdrop-blur-md shadow-lg h-[60px]"
            : "bg-transparent h-[72px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Shree Shyam Enterprise Logo"
              width={36}
              height={36}
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

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                    pathname === link.href
                      ? "text-[#E05A1E]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#E05A1E] transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+918866009082"
              className="flex items-center gap-2 text-[#8BA3BF] hover:text-white transition-colors text-sm"
            >
              <Phone className="w-4 h-4 text-[#E05A1E]" />
              <span>+91 8866009082</span>
            </a>
            <Link
              href="/contact"
              className="btn-clip bg-[#E05A1E] text-white px-6 py-2 text-sm font-semibold tracking-wide hover:bg-[#c94d17] transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#0E1B2E]/98 backdrop-blur-md flex flex-col items-center justify-center md:hidden">
          <button
            className="absolute top-5 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <ul className="flex flex-col items-center gap-8 mb-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-heading font-bold text-4xl uppercase tracking-wider transition-colors ${
                    pathname === link.href ? "text-[#E05A1E]" : "text-white hover:text-[#E05A1E]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="tel:+918866009082"
            className="flex items-center gap-2 text-[#8BA3BF] hover:text-white transition-colors mb-6"
          >
            <Phone className="w-5 h-5 text-[#E05A1E]" />
            <span>+91 8866009082</span>
          </a>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-clip bg-[#E05A1E] text-white px-10 py-3 font-semibold tracking-wide text-lg"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </>
  );
}
