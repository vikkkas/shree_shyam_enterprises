"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-primary-800">SHREE SHYAM ENTERPRISE</div>
          <div className="hidden md:flex space-x-6">
            <Link href="/#about" className="text-neutral-600 hover:text-primary-700 transition duration-300">
              About
            </Link>
            <Link href="/#services" className="text-neutral-600 hover:text-primary-700 transition duration-300">
              Services
            </Link>
            <Link href="/#products" className="text-neutral-600 hover:text-primary-700 transition duration-300">
              Products
            </Link>
            <Link href="/contact" className="text-neutral-600 hover:text-primary-700 transition duration-300">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-600 hover:text-primary-700 transition duration-300"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 md:hidden">
            <Link href="/#about" className="block py-2 text-neutral-600 hover:text-primary-700 transition duration-300">
              About
            </Link>
            <Link
              href="/#services"
              className="block py-2 text-neutral-600 hover:text-primary-700 transition duration-300"
            >
              Services
            </Link>
            <Link
              href="/#products"
              className="block py-2 text-neutral-600 hover:text-primary-700 transition duration-300"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-neutral-600 hover:text-primary-700 transition duration-300"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

