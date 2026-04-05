import { ArrowRight, Award, Clock, Shield, Truck } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Precision Aluminium Flanges &amp; Custom Castings
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-primary-100">ISO Certified | 10+ Years of Experience</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Link
            href="/contact"
            className="bg-white text-primary-700 py-3 px-8 rounded-full inline-flex items-center justify-center hover:bg-primary-100 transition duration-300 text-lg font-semibold"
          >
            Get a Quote
            <ArrowRight className="ml-2" />
          </Link>
          <Link
            href="/#products"
            className="border-2 border-white text-white py-3 px-8 rounded-full inline-flex items-center justify-center hover:bg-white hover:text-primary-700 transition duration-300 text-lg font-semibold"
          >
            View Products
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { icon: <Award className="h-6 w-6" />, label: "ISO Certified" },
            { icon: <Clock className="h-6 w-6" />, label: "10+ Years of Experience" },
            { icon: <Shield className="h-6 w-6" />, label: "Industrial Grade Flanges" },
            { icon: <Truck className="h-6 w-6" />, label: "On Time Delivery" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 bg-white/10 rounded-lg p-4">
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

