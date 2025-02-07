import { ArrowRight } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          ECOCAST: SUSTAINABLE ALUMINUM ALLOY CASTING
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-primary-100">Forging Excellence, Shaping the Future.</p>
        <Link
          href="/contact"
          className="bg-white text-primary-700 py-3 px-8 rounded-full inline-flex items-center hover:bg-primary-100 transition duration-300 text-lg font-semibold"
        >
          Get Started
          <ArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  )
}

export default Hero

